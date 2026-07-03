/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * The Window module provides basic window management capabilities, such as creating and destroying the current window, 
 * setting properties for the current window, and managing and scheduling windows.
 * 
 * This module provides the following common window-related functions:
 * 
 * - [Window]{@link @ohos.window}: window instance, which is the basic unit managed by the window manager.
 * - [WindowStage]{@link window.WindowStage}: window manager that manages windows.
 * 
 * > **NOTE**
 * >
 * > - This topic describes only system APIs provided by the module. For details about its public APIs, see 
 * > [@ohos.window (Window)]{@link @ohos.window}.
 * >
 * > - For the system capability SystemCapability.Window.SessionManager, use 
 * > [canIUse()]{@link canIUse} to check whether the device supports this system 
 * > capability and the corresponding APIs.
 *
 * @file
 * @kit ArkUI
 */

/*** if arkts dynamic */
import { UIContext } from './@ohos.arkui.UIContext';
import { ColorMetrics } from './@ohos.arkui.node';
/*** endif */

/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
import { UIContext } from '@ohos.arkui.UIContext';
import { ColorMetrics } from '@ohos.arkui.node';
import { ImageFit } from '@ohos.arkui.component';
/*** endif */

/*** if arkts dynamic */
/**
 * Defines the window callback.
 *
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 15 dynamic
 */
declare interface Callback<T, V = void> {
  /**
   * Defines the callback info.
   *
   * @param { T } data - the data will be used in the callback.
   * @returns { V } - Returns result of the callback.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   */
  (data: T): V;
}

/**
 * Defines the window callback.
 *
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 23 static
 */
type Callback<T, V = void> = (data: T) => V;

/**
 * Defines the window animation curve param.
 *
 * @syscap SystemCapability.Window.SessionManager
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare type WindowAnimationCurveParam = Array<double>;

/**
 * Callback function for transition controller
 *
 * @param { window.TransitionContext } context - The transition context
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 23 static
 */
declare type TransitionControllerCallback = (context: window.TransitionContext) => void;

/**
 * 窗口事件的回调函数定义
 *
 * @param { int } windowId - 触发事件的窗口id
 * @param { window.WindowEventType } event - 窗口回调的事件类型
 * @syscap SystemCapability.Window.SessionManager
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare type WindowEventListener = (windowId: int, event: window.WindowEventType) => void;

/**
 * Window manager.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace window {
  /**
   * 窗口类型枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum WindowType {
    /**
     * 表示应用子窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    TYPE_APP = 0,
    /**
     * 表示系统告警窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TYPE_SYSTEM_ALERT = 1,
    /**
     *
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 13
     */
    TYPE_INPUT_METHOD = 2,
    /**
     * 表示状态栏窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_STATUS_BAR = 3,
    /**
     * 表示通知栏。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PANEL = 4,
    /**
     * 表示锁屏。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_KEYGUARD = 5,
    /**
     * 表示音量条。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOLUME_OVERLAY = 6,
    /**
     * 表示导航栏窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_BAR = 7,
    /**
     * 表示全局悬浮窗。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_FLOAT = 8,
    /**
     * 表示壁纸。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_WALLPAPER = 9,
    /**
     * 表示桌面。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_DESKTOP = 10,
    /**
     * 表示多任务中心。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_RECENT = 11,
    /**
     * 表示桌面Dock栏。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_DOCK = 12,
    /**
     * 表示智慧语音。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOICE_INTERACTION = 13,
    /**
     * 表示鼠标。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_POINTER = 14,
    /**
     * 表示相机类型悬浮窗。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_CAMERA = 15,
    /**
     * 表示模态窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    TYPE_DIALOG = 16,
    /**
     * 表示截屏窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SCREENSHOT = 17,
    /**
     * 表示顶层提示窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_TOAST = 18,
    /**
     * 表示分屏条。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DIVIDER = 19,
    /**
     * 表示全局搜索窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_GLOBAL_SEARCH = 20,
    /**
     * 表示手写笔窗口。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_HANDWRITE = 21,
    /**
     * 表示钱包刷卡窗口。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_WALLET_SWIPE_CARD = 22,
    /**
     * 表示锁定触控的顶层窗口，用于拦截屏幕触摸和点击事件。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_SCREEN_CONTROL = 23,
    /**
     * 表示悬浮的三键导航窗口。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 17 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_NAVIGATION = 24,
    /**
     * 表示可设置窗口层级的系统窗口。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_DYNAMIC = 25,
    /**
     * 表示多屏协同窗口。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_MUTISCREEN_COLLABORATION = 26,
    /**
     * 表示应用主窗口。
     * 
     * 此窗口类型不支持在创建窗口时使用。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_MAIN = 32,
    /**
     * TYPE_FLOAT_NAVIGATION.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 16 dynamic
     */
    TYPE_FLOAT_NAVIGATION = 22
  }

  /**
   * 窗口内容的避让区域的类型枚举。
   * 
   * 窗口内容做[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时，需要按照AvoidAreaType对应的
   * [AvoidArea]{@link @ohos.window:window.AvoidArea}做窗口内容避让。
   * 
   * <!--RP13-->
   * 
   * <!--RP13End-->
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum AvoidAreaType {
    /**
     * 表示系统默认区域。<!--RP11-->包含状态栏和三键导航栏区域。<!--RP11End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM = 0,

    /**
     * 表示挖孔区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_CUTOUT = 1,

    /**
     * 表示侧边返回手势区域。当前所有设备均无此类型避让区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_GESTURE = 2,

    /**
     * 表示固定态软键盘区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_KEYBOARD = 3,

    /**
     * 表示底部导航区域。当三键导航显示时，底部导航避让区域始终存在。<!--Del-->OpenHarmony各设备不支持此能力。<!--DelEnd--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_INDICATOR = 4,

    /**
     * 表示三键导航区域。<!--RP12-->OpenHarmony各设备不支持此能力。<!--RP12End--> 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TYPE_FLOAT_NAVIGATION = 5
  }
  /**
   * 窗口模式枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  enum WindowMode {
    /**
     * 表示APP未定义窗口模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    UNDEFINED = 1,
    /**
     * 表示APP全屏模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FULLSCREEN = 2,
    /**
     * 表示APP分屏多窗口主要模式。上下分屏时，上分屏为主要模式。左右分屏时，左分屏为主要模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    PRIMARY = 3,
    /**
     * 表示APP分屏多窗口次要模式。上下分屏时，下分屏为次要模式。左右分屏时，右分屏为次要模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SECONDARY = 4,
    /**
     * 表示APP自由悬浮形式窗口模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FLOATING = 5
  }

  /**
   * 描述分屏窗口分屏比例
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum SplitRatioPreference {
    /**
     * 分屏窗口比例相等
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EQUAL = 0,
    /**
     * 将主窗口设置为较大的分屏比例。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PRIMARY_DOMINANT = 1,
    /**
     * 将次窗口设置为较大的分屏比例。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SECONDARY_DOMINANT = 2
  }

  /**
   * 窗口布局模式枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   */
  enum WindowLayoutMode {
    /**
     * 表示使用层叠布局模式。层叠布局下，多个自由窗口层叠放置，以Z轴次序区分。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    WINDOW_LAYOUT_MODE_CASCADE = 0,
    /**
     * 表示使用平铺布局模式。平铺布局下，新打开的应用窗口出现在最右侧。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    WINDOW_LAYOUT_MODE_TILE = 1
  }

  /**
   * 窗口模式枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum WindowStatusType {
    /**
     * 表示APP未定义窗口模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,
    /**
     * 表示APP全屏模式。
     * 
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，窗口铺满整个屏幕，默认无dock栏、标题栏和状态栏显示。
     * 
     * 可通过[maximize()]{@link @ohos.window:window.Window.maximize(presentation?: MaximizePresentation)}和
     * [setTitleAndDockHoverShown()]{@link @ohos.window:window.Window.setTitleAndDockHoverShown}配置，当hover到热区时是否显示标题栏和
     * dock栏。
     * 
     * 当maximize()和setTitleAndDockHoverShown()接口都调用时，以最后调用设置的效果为准。
     * 
     * 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，窗口铺满整个屏幕，无标题栏和dock栏显示。可通过
     * [setSpecificSystemBarEnabled()]{@link @ohos.window:window.Window.setSpecificSystemBarEnabled}配置是否显示状态栏。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FULL_SCREEN = 1,
    /**
     * 表示APP窗口最大化模式，[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，窗口铺满整个屏幕，不需要hover就可以显示dock栏、状态栏和标题栏。非
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，不存在该状态。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MAXIMIZE = 2,
    /**
     * 表示APP窗口最小化模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MINIMIZE = 3,
    /**
     * 表示APP自由悬浮形式窗口模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FLOATING = 4,
    /**
     * 表示APP分屏模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    SPLIT_SCREEN = 5
  }

  /**
   * 像素单位枚举。
   * 
   * 物理像素单位和虚拟像素单位换算可使用[px2vp](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#px2vp12)和
   * [vp2px](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#vp2px12)。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum PixelUnit {
    /**
     * 物理像素单位（px）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PX = 0,
    /**
     * 虚拟像素单位（vp）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    VP = 1
  }

  /**
   * 窗口动画曲线类型。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnimationCurve {
    /**
     * 表示动画从头到尾的速度都是相同的。
     * 
     * 使用该曲线类型时[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}中duration必填。
     * 
     * 使用该曲线类型时[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}中param选填，且不生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR = 0,
    /**
     * 表示插值器弹簧曲线，一条从0到1的动画曲线，实际动画值根据曲线进行插值计算。动画时间由曲线参数决定，不受
     * [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}中的duration参数控制。
     * 
     * 使用该曲线类型时[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}中duration选填，且不生效。
     * 
     * 使用该曲线类型时[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}中param必填。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INTERPOLATION_SPRING = 1,
    /**
     * 表示贝塞尔曲线。
     * 
     * 使用该曲线类型时[WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}中的param和duration为必填项。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CUBIC_BEZIER = 2
  }

  /**
   * 窗口转场动画类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowTransitionType {
    /**
     * 表示窗口销毁时的转场动画。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DESTROY = 0
  }

  /**
   * 窗口动画类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum AnimationType {
    /**
     * 表示窗口动画类型为淡入淡出。淡入动画在窗口显示过程中生效，淡出动画在窗口隐藏过程中生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN_OUT = 0,
    /**
     * 表示窗口动画类型为淡入。淡入动画在窗口显示过程中生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN = 1
  }

  /**
   * 状态栏<!--Del-->、三键导航栏的<!--DelEnd-->属性。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 6 dynamic
   * @since 23 static
   */
  interface SystemBarProperties {
    /**
     * 状态栏背景颜色。作为入参时格式为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'；
     * 作为返回值时格式固定为ARGB颜色，如'#FF00FF00'，默认值为系统配置的颜色。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    statusBarColor?: string;

    /**
     * 状态栏图标是否为高亮状态。true表示高亮；false表示不高亮。默认值：false。 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isStatusBarLightIcon?: boolean;

    /**
     * 状态栏文字颜色。当设置此属性后，`isStatusBarLightIcon`属性设置无效。默认值：`'#E5FFFFFF'`。 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;

    /**
     * 三键导航栏背景颜色。作为入参时格式为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'；
     * 作为返回值时格式固定为ARGB颜色，如'#FF00FF00'，默认值为系统配置的颜色。
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    navigationBarColor?: string;

    /**
     * 三键导航栏图标是否为高亮状态。true表示高亮；false表示不高亮。默认值：false。 
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isNavigationBarLightIcon?: boolean;

    /**
     * 三键导航栏文字颜色。当设置此属性后，`isNavigationBarLightIcon`属性设置无效。默认值：`'#E5FFFFFF'`。 
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    navigationBarContentColor?: string;

    /**
     * 是否启用状态栏属性变化时的动画效果。true表示启用；false表示不启用。默认值：false。 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enableStatusBarAnimation?: boolean;

    /**
     * 是否启用三键导航栏属性变化时的动画效果。true表示启用；false表示不启用。默认值：false。 
     * 
     * <!--RP13--><!--RP13End--> 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enableNavigationBarAnimation?: boolean;
  }

  /**
   * 状态栏的属性。在获取状态栏属性信息时返回。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface StatusBarProperty {
    /**
     * 状态栏文字颜色，固定为ARGB格式，如：`#E5FFFFFF`。 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    contentColor: string;
  }

  /**
   * 状态栏的属性。在设置页面级状态栏属性时使用。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SystemBarStyle {
    /**
     * 状态栏文字颜色。默认值：`'#E5FFFFFF'`。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;
  }

  /**
   * 单个导航栏或状态栏回调信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarRegionTint {
    /**
     * 当前属性改变的系统栏类型，仅支持类型为导航栏、状态栏的系统栏。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: WindowType;

    /**
     * 当前系统栏是否显示。true表示显示；false表示不显示。默认值为true。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isEnable?: boolean;

    /**
     * 当前系统栏的位置及大小。默认值为{0,0,0,0}。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    region?: Rect;

    /**
     * 系统栏背景颜色，为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。 默认值为'0x66000000'。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    backgroundColor?: string;

    /**
     * 系统栏文字颜色。 默认值为'0xE5FFFFFF'。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentColor?: string;
  }

  /**
   * 当前系统栏回调信息集合。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarTintState {
    /**
     * 当前窗口所在屏幕id，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * 当前已改变的所有系统栏信息。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    regionTint: Array<SystemBarRegionTint>;
  }

  /**
   * 帧率指标。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  interface FrameMetrics {
    /**
     * 是否是首帧。true表示首帧，false表示非首帧。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    firstDrawFrame: boolean;

    /**
     * 一帧中的手势处理耗时（单位：纳秒）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    inputHandlingDuration: long;

    /**
     * 一帧中的布局测量耗时（单位：纳秒）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    layoutMeasureDuration: long;

    /**
     * 当前帧的开始时间戳（单位：纳秒）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    vsyncTimestamp: long;
  }

  /**
   * 窗口矩形区域。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Rect {

    /**
     * 矩形区域的左边界，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * 矩形区域的上边界，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * 矩形区域的宽度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * 矩形区域的高度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 窗口矩形区域，单位为vp。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface RectInVP {

    /**
     * 矩形区域的左边界值，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    left: double;

    /**
     * 矩形区域的上边界值，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    top: double;

    /**
     * 矩形区域的宽度，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * 矩形区域的高度，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * 窗口或组件的位置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  export interface Position {

    /**
     * x坐标，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * y坐标，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * 窗口锚点枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnchor {
    /**
     * 窗口左上角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_START = 0,
    /**
     * 窗口上边界横向居中点。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP = 1,
    /**
     * 窗口右上角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_END = 2,
    /**
     * 窗口左边界纵向居中点。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    START = 3,
    /**
     * 窗口横向和纵向居中点。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    CENTER = 4,
    /**
     * 窗口右边界纵向居中点。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    END = 5,
    /**
     * 窗口左下角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_START = 6,
    /**
     * 窗口下边界横向居中点。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM = 7,
    /**
     * 窗口右下角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_END = 8
  }

  /**
   * 一级子窗与主窗保持相对位置的窗口锚点参数信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface WindowAnchorInfo {
    /**
     * 一级子窗与主窗保持相对位置不变时的窗口锚点枚举。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    anchorType: WindowAnchor;

    /**
     * 一级子窗锚点与主窗锚点位置的X轴偏移量，单位为px。仅支持整数输入，浮点数向下取整，默认值为0。
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offsetX?: int;

    /**
     * 一级子窗锚点与主窗锚点位置的Y轴偏移量，单位为px。仅支持整数输入，浮点数向下取整，默认值为0。
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offsetY?: int;
  }

  /**
   * 子窗与主窗保持相对位置不变时的参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface SubWindowAttachOptions {
    /**
     * 子窗当前布局模式，用于控制应用定制的UI效果。若不传，则默认为空字符串。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    currentLayoutMode?: string;

    /**
     * 父窗大小变化的回调。绑定后立即回调一次，后续父窗大小变化时通知。默认不传，无法收到父窗大小变化通知。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowSizeChangeCallback?: Callback<Size>;

    /**
     * 父窗模式变化的回调。绑定后立即回调一次，后续父窗模式变化时通知。默认不传，无法收到父窗模式变化通知。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowStatusChangeCallback?: Callback<WindowStatusType>;

    /**
     * 是否使用处于协同关系中两个窗口的宽度限制的交集。
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isIntersectedWidthLimit?: boolean;

    /**
     * 是否使用处于协同关系中两个窗口的高度限制的交集。
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isIntersectedHeightLimit?: boolean;
  }

  /**
   * 窗口内容的避让区域。
   * 
   * 窗口内容做[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时，需要按照
   * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}对应的AvoidArea做窗口内容避让。
   * 
   * 在避让区域内，应用窗口内容被遮挡且无法响应用户点击事件。
   * 
   * > **说明：**
   * >
   * > 示意图展示了leftRect、topRect、rightRect、bottomRect的含义。
   * >
   * > ![avoidArea](docroot://reference/apis-arkui/figures/avoidArea.png)
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AvoidArea {
    /**
     * 无实际意义，暂不支持使用。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    visible: boolean;

    /**
     * 中心位于窗口的两条对角线的左侧的矩形区。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    leftRect: Rect;

    /**
     * 中心位于窗口的两条对角线的顶部的矩形区。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    topRect: Rect;

    /**
     * 中心位于窗口的两条对角线的右侧的矩形区。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    rightRect: Rect;

    /**
     * 中心位于窗口的两条对角线的底部的矩形区。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    bottomRect: Rect;
  }

  /**
   * 以vp为单位表示的窗口避让区域信息，在进行[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)适配时需关注。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvAvoidAreaVP {
    /**
     * 无实际意义，暂不支持使用。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    visible: boolean;

    /**
     * 中心位于窗口的两条对角线的左侧的矩形区，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    leftRect: RectInVP;

    /**
     * 中心位于窗口的两条对角线的顶部的矩形区，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    topRect: RectInVP;

    /**
     * 中心位于窗口的两条对角线的右侧的矩形区，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    rightRect: RectInVP;

    /**
     * 中心位于窗口的两条对角线的底部的矩形区，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    bottomRect: RectInVP;
  }

  /**
   * 窗口大小，单位为px。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * 窗口宽度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * 窗口高度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 窗口大小，单位为vp。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface SizeInVP {
    /**
     * 窗口宽度，单位为vp，该参数为浮点数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * 窗口高度，单位为vp，该参数为浮点数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * 当前窗口的详细信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi [since 12 - 17]
   * @publicapi [since 18]
   * @since 12 dynamic
   * @since 23 static
   */
  interface WindowInfo {
    /**
     * 窗口尺寸。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    rect: Rect;

    /**
     * 应用Bundle的名称。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Ability的名称。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * 窗口ID。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    windowId: int;

    /**
     * 窗口模式枚举。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    windowStatusType: WindowStatusType;

    /**
     * 窗口是否获焦。true表示窗口获焦；false表示窗口未获焦。返回值与[isFocused()]{@link @ohos.window:window.Window.isFocused}接口一致。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 14 - 17]
     * @publicapi [since 18]
     * @since 14 dynamic
     * @since 23 static
     */
    isFocused?: boolean;

    /**
     * 全局坐标系下的窗口尺寸。扩展屏场景下以主屏左上角为坐标原点，虚拟屏场景下以虚拟屏左上角为坐标原点。默认值：[0, 0, 0, 0]。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayRect?: Rect;

    /**
     * Indicates the ID of the display where the window is located.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId?: int;

    /**
     * 窗口所在物理屏幕上的真实显示区域。若窗口显示时经过了缩放，获取到的是缩放后窗口在屏幕上的真实位置和大小。默认值：[0, 0, 0, 0]。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    globalRect?: Rect;
  }

  /**
   * 窗口所在显示设备和窗口自定义的显示密度信息，是与像素单位无关的缩放系数，即显示大小缩放系数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowDensityInfo {
    /**
     * 窗口所在屏幕的系统显示大小缩放系数，跟随用户设置变化，该参数变化范围为0.5-4.0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    systemDensity: double;

    /**
     * 窗口所在屏幕的系统默认显示大小缩放系数，跟随窗口所在屏幕变化，该参数变化范围为0.5-4.0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    defaultDensity: double;

    /**
     * 窗口自定义设置的显示大小缩放系数，该参数取值范围为0.5-4.0。未设置该参数时，将跟随系统显示大小缩放系数变化。该参数仅主窗口生效，在子窗或系统窗口上等于系统显示大小缩放系数(systemDensity)。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    customDensity: double;
  }

  /**
   * 窗口属性。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface WindowProperties {
    /**
     * 窗口尺寸，其中左边界上边界是相对于窗口所在屏幕左上顶点计算，可在页面生命周期
     * [onPageShow](docroot://reference/apis-arkui/arkui-ts/ts-custom-component-lifecycle.md#onpageshow)或应用生命周期
     * [onForeground]{@link @ohos.app.ability.UIAbility:UIAbility.onForeground}阶段获取。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * 窗口内的可绘制区域尺寸，其中左边界上边界是相对于窗口左上顶点计算。在Stage模型下，需要在调用
     * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}加载页面
     * 内容后获取该属性。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    drawableRect: Rect;

    /**
     * 窗口类型。
     * 
     * 当前存在主窗使用[getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}接口返回type不准确的问题，开发者在创建窗口时已指明窗
     * 口类型，无需通过getWindowProperties()接口获取窗口类型。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     * @useinstead WindowProperties#windowType
     */
    type: WindowType;

    /**
     * 含义：窗口类型
     * 使用场景：判断当前窗口主窗口还是子窗口等
     *
     * @type { ?WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    windowType?: WindowType;

    /**
     * 在满足isLayoutFullScreen为true的条件下如果隐藏了状态栏，返回值为true，其他情况下均返回false。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    isFullScreen: boolean;

    /**
     * 对于子窗，如果设置了[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)，返回值为true。
     * 
     * 对于主窗，如果设置了[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)且处于全屏模式，返回值为true。
     * 
     * 其他情况下均返回false
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isLayoutFullScreen: boolean;

    /**
     * 窗口是否可获焦。true表示可获焦；false表示不可获焦。 
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    focusable: boolean;

    /**
     * 窗口是否可触摸。true表示可触摸；false表示不可触摸。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    touchable: boolean;

    /**
     * 窗口亮度。通过
     * [setWindowBrightness()]{@link @ohos.window:window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)}
     * 设置窗口的亮度值。该参数为浮点数，可设置的亮度范围为[0.0, 1.0]或-1.0，其取值1.0时表示最大亮度，取值-1.0时，表示亮度跟随系统。如果窗口没有设置亮度值，表示亮度跟随系统，此时获取到的亮度值为-1.0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    brightness: double;

    /**
     * 下层窗口的暗度值。该参数为浮点数，取值范围为[0.0, 1.0]，其取1.0表示最暗。
     * 
     * **说明：** 从API version 7开始支持，从API version 9开始废弃，当前无可替代接口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    dimBehindValue: number;

    /**
     * 屏幕是否常亮。true表示常亮；false表示不常亮。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    isKeepScreenOn: boolean;

    /**
     * 窗口是否为隐私模式。true表示窗口为隐私模式；false表示窗口为非隐私模式。可通过
     * [setWindowPrivacyMode()]{@link @ohos.window:window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * 设置窗口的隐私模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isPrivacyMode: boolean;

    /**
     * 窗口是否为圆角。true表示窗口为圆角；false表示窗口为非圆角。
     * 
     * **说明：** 从API version 7开始支持，从API version 9开始废弃，当前无可替代接口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    isRoundCorner: boolean;

    /**
     * 窗口背景是否透明。true表示透明；false表示不透明。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isTransparent: boolean;

    /**
     * 窗口ID，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * 窗口所在屏幕ID，默认返回主屏幕ID，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * 窗口名称，默认为空字符串。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * 全局坐标系下的窗口尺寸。扩展屏场景下以主屏左上角为坐标原点，虚拟屏场景下以虚拟屏左上角为坐标原点。默认值：[0, 0, 0, 0]。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayRect?: Rect;
  }

  /**
   * 系统装饰栏按钮样式。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface DecorButtonStyle {
    /**
     * 颜色模式。深色模式下按钮颜色适配为浅色，浅色模式下按钮颜色适配为深色。未设置则默认跟随系统颜色模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    colorMode?: ConfigurationConstant.ColorMode;

    /**
     * 按钮高亮显示时的大小，取值范围20vp-40vp，默认值28vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    buttonBackgroundSize? : int;

    /**
     * 按钮间距，取值范围8vp-24vp，默认值12vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    spacingBetweenButtons? : int;

    /**
     * 关闭按钮右侧距窗口边距，取值范围6vp-22vp，默认值20vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    closeButtonRightMargin? : int;

    /**
     * 按键icon的大小，取值范围16vp-24vp，默认值20vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonIconSize? : int;

    /**
     * 按键背板圆角半径，取值范围4vp-8vp，默认值4vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonBackgroundCornerRadius? : int;
  }

  /**
   * 色域模式。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum ColorSpace {
    /**
     * 默认SRGB色域模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 广色域模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    WIDE_GAMUT = 1
  }
  /**
   * 缩放参数。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface ScaleOptions {
    /**
     * X轴的缩放参数。该参数为浮点数，默认值为1.0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * Y轴的缩放参数。该参数为浮点数，默认值为1.0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * 缩放中心点X轴坐标。该参数为浮点数，默认值为0.5， 取值范围[0.0, 1.0]。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * 缩放中心点Y轴坐标。该参数为浮点数，默认值为0.5， 取值范围[0.0, 1.0]。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * 旋转参数。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface RotateOptions {
    /**
     * 绕X轴的旋转角度。该参数为浮点数，默认值为0.0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * 绕Y轴的旋转角度。该参数为浮点数，默认值为0.0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * 绕Z轴的旋转角度。该参数为浮点数，默认值为0.0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;

    /**
     * 旋转中心点X轴坐标。该参数为浮点数，默认值为0.5， 取值范围为[0.0, 1.0]。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * 旋转中心点Y轴坐标。该参数为浮点数，默认值为0.5， 取值范围为[0.0, 1.0]。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * 平移参数。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TranslateOptions {
    /**
     * X轴的平移参数。该参数为浮点数，默认值为0.0，单位为px。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * Y轴的平移参数。该参数为浮点数，默认值为0.0，单位为px。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * Z轴的平移参数。该参数为浮点数，默认值为0.0，单位为px。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;
  }

  /**
   * 属性转换的上下文信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionContext {
    /**
     * 动画的目标窗口。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    toWindow: Window;

    /**
     * 设置属性转换的最终完成状态。该函数需要在动画函数[animateTo()]{@link ./@internal/component/ets/common}执行后设置。
     *
     * @param { boolean } isCompleted - 窗口属性转换是否完成。true表示完成本次转换；false表示撤销本次转换。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    completeTransition(isCompleted: boolean): void;
  }

  /**
   * 属性转换控制器。使用其子接口之前得先创建系统窗口，参照示例代码。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionController {
    /**
     * 窗口显示时的自定义动画配置。
     *
     * @param { TransitionContext } context - 属性转换时的上下文。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     */
    animationForShown(context: TransitionContext): void;

    /**
     * Animation configuration when showing window
     *
     * @default undefined
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    animationForShown?: TransitionControllerCallback;

    /**
     * 窗口隐藏时的自定义动画配置。
     *
     * @param { TransitionContext } context - 属性转换时的上下文。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     */
    animationForHidden(context: TransitionContext): void;

    /**
     * Animation configuration when hiding window
     *
     * @default undefined
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    animationForHidden?: TransitionControllerCallback;
  }

  /**
   * 创建子窗口或系统窗口时的参数。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Configuration {
    /**
     * 窗口名称。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 窗口类型。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    windowType: WindowType;

    /**
     * 当前应用上下文信息。不设置，则默认为空。<br>FA模型下不需要使用该参数，即可创建子窗口，使用该参数时会报错。<br>Stage模型必须使用该参数，用于创建全局悬浮窗、模态窗或系统窗口。 <br>
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ctx?: BaseContext;

    /**
     * 当前屏幕ID。不设置，则默认为父窗口屏幕ID。<br>该参数应为非负整数，且对应屏幕ID存在。<br>扩展屏、异源虚拟屏场景下，全局悬浮窗可通过设置屏幕ID显示在指定屏幕上。<br>模态窗、系统窗设置屏幕ID无效，默认为父窗口屏幕ID。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * 父窗口ID。不设置，则默认为-1，默认父窗为当前应用上下文对应主窗。<br>FA模型下，该参数应为非负整数，且对应父窗口ID存在。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    parentId?: int;

    /**
     * 是否显示窗口装饰，仅在windowType为TYPE_DIALOG时生效。true表示显示，false表示不显示。此参数默认值为false。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    decorEnabled?: boolean;

    /**
     * `decorEnabled`属性设置为true时，窗口的标题内容。标题显示区域最右端不超过系统三键区域最左端，
     * 超过部分以省略号表示。不设置，则默认为空字符串。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * 当前系统窗口的层级，仅在[WindowType]{@link window.WindowType}为TYPE_DYNAMIC时生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    zIndex?: int;

    /**
     * 是否使用系统默认Density，使用系统默认Density之后，窗口不会跟随系统显示大小变化重新布局。
     * 
     * 当创建的系统窗口设置此参数为true时，表示当前窗口使用系统默认Density，且不会受到
     * [setDefaultDensityEnabled()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12)
     * 和[setCustomDensity()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)设置的主窗口以及
     * [setDefaultDensityEnabled()]{@link window.Window.setDefaultDensityEnabled}设置的本窗口的相关影响。
     * 
     * 当创建的系统窗口设置此参数为false时，表示当前窗口不使用系统默认Density，且会受到
     * [setDefaultDensityEnabled()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12)
     * 和[setCustomDensity()](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)设置的主窗口以及
     * [setDefaultDensityEnabled()]{@link window.Window.setDefaultDensityEnabled}设置的本窗口的相关影响。
     * 
     * 默认为false。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    defaultDensityEnabled?: boolean;
  }

  /**
   * 窗口尺寸限制参数，应用可以通过[getWindowLimits]{@link @ohos.window:window.Window.getWindowLimits}获得当前窗口的尺寸限制（单位为px）；从API version 2
   * 2开始，还可以通过[getWindowLimitsVP]{@link @ohos.window:window.Window.getWindowLimitsVP}获取窗口尺寸限制（单位为vp）。
   * 
   * 窗口尺寸限制的最终生效结果由默认系统限制、应用配置和运行时设置的数据取交集得到，优先级从高到低依次为：
   * 
   * 1. 应用通过[setWindowLimits]{@link @ohos.window:window.Window.setWindowLimits(windowLimits: WindowLimits)}设置窗口尺寸限制。
   * 2. 应用在[startAbility]{@link ./application/UIAbilityContext:UIAbilityContext#startAbility(want: Want, options?: StartOptions)}拉起窗口时通过[StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}指定窗口尺寸限制（API version 17开始支持）。
   * 3. 应用在[module.json5配置文件中的abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)中配置windowLimits。
   * 4. 默认系统限制（基于不同产品和窗口类型，其windowLimits系统默认限制存在差异）。
   * 
   * > **说明：**
   * >
   * > 针对maxWidth、maxHeight、minWidth、minHeight属性：
   * >
   * > - 默认单位为px，从API version 22开始支持通过pixelUnit设置单位为px或vp。
   * >
   * > - 参数为整数，浮点数会向下取整。
   * >
   * > - 默认值为0，表示属性不发生变化。
   * >
   * > - 可生效范围下限值：系统限定的最小高度/宽度。
   * >
   * > - 可生效范围上限值：系统限定的最大高度/宽度。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface WindowLimits {

    /**
     * 窗口的最大宽度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxWidth?: int;

    /**
     * 窗口的最大高度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxHeight?: int;

    /**
     * 窗口的最小宽度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minWidth?: int;

    /**
     * 窗口的最小高度。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minHeight?: int;

    /**
     * 窗口尺寸限制的单位，默认为px。可显式设置为px或vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    pixelUnit?: PixelUnit;
  }

  /**
   * 标题栏上的最小化、最大化、关闭按钮矩形区域，该区域位置坐标相对窗口右上角。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface TitleButtonRect {

    /**
     * 矩形区域的右边界，单位为vp，该参数为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    right: int;

    /**
     * 矩形区域的上边界，单位为vp，该参数为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * 矩形区域的宽度，单位为vp，该参数为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * 矩形区域的高度，单位为vp，该参数为整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * 窗口矩形（窗口位置及窗口大小）变化返回的值及变化原因。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface RectChangeOptions {
    /**
     * New value of the window rectangle.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    rect: Rect,

    /**
     * 窗口矩形变化的原因。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reason: RectChangeReason;
  }

  /**
   * 系统避让区变化后返回当前避让区域以及避让区域类型。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AvoidAreaOptions {
    /**
     * 系统避让区变化后返回的避让区域类型。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: AvoidAreaType;

    /**
     * 系统避让区变化后返回的避让区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    area: AvoidArea;
  }

  /**
   * 窗口不同类型避让区域信息组成的[环境变量](docroot://ui/arkts-env-system-property.md)数据类型，每种类型避让区域单位为px。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoPX {
    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM类型的避让区域，单位为px。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: AvoidArea;

    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_CUTOUT类型的避让区域，单位为px。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: AvoidArea;

    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_KEYBOARD类型的避让区域，单位为px。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: AvoidArea;

    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_NAVIGATION_INDICATOR类型的避让区域，单位为px。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: AvoidArea;
  }

  /**
   * 窗口不同类型避让区域信息组成的[环境变量](docroot://ui/arkts-env-system-property.md)数据类型，每种类型避让区域单位为vp。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoVP {
    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM类型的避让区域，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: UIEnvAvoidAreaVP;

    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_CUTOUT类型的避让区域，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: UIEnvAvoidAreaVP;

    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_KEYBOARD类型的避让区域，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: UIEnvAvoidAreaVP;

    /**
     * 表示[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_NAVIGATION_INDICATOR类型的避让区域，单位为vp。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: UIEnvAvoidAreaVP;
  }

  /**
   * 窗口矩形（窗口位置及窗口大小）变化的原因。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectChangeReason {
    /**
     * 默认值。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,

    /**
     * 窗口最大化。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MAXIMIZE = 1,

    /**
     * 窗口恢复到上一次的状态。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RECOVER = 2,

    /**
     * 窗口拖拽移动。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MOVE = 3,

    /**
     * 窗口拖拽缩放。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG = 4,

    /**
     * 窗口开始拖拽缩放。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_START = 5,

    /**
     * 窗口结束拖拽缩放。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_END = 6
  }

  /**
   * 窗口可见性状态枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum OcclusionState {
    /**
     * 窗口完全可见（没有任何部分被其他非透明窗口遮挡）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    NO_OCCLUSION = 0,

    /**
     * 窗口部分可见（部分被其他非透明窗口遮挡）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PARTIAL_OCCLUSION = 1,

    /**
     * 窗口完全不可见（完全被其他非透明窗口遮挡，或窗口最小化，或窗口隐藏）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    FULL_OCCLUSION = 2
  }

  /**
   * 主窗口信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  interface MainWindowInfo {
    /**
     * ID of the display to which the main window belongs.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    displayId: long,
    /**
     * ID of the main window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    windowId: int,
    /**
     * Foreground/Background status of the main window. **true** if the main window is in the foreground, **false**
     * otherwise.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    showing: boolean,
    /**
     * 主窗口的任务名称。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    label: string;
  }

  /**
   * 主窗口截图的配置项。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  interface WindowSnapshotConfiguration {
    /**
     * 是否使用主窗口的已有截图。默认值为true。 true表示使用主窗口的已有截图，若主窗口无保存的截图，则使用主窗口的最新截图。false表示使用主窗口的最新截图。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    useCache?: boolean;
  }

  /**
   * 创建子窗口或者系统窗口，使用callback异步回调。
   * 
   * 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是
   * [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。
   * 
   * 自由窗口状态下，子窗口参数[decorEnabled]{@link @ohos.window:window.Configuration}为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口
   * 创建后为非沉浸式布局。
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW [since 12]
   * @param { Configuration } config - 创建窗口时的参数。
   * @param { AsyncCallback<Window> } callback - 回调函数。返回当前创建的窗口对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Invalid parent window type, parent window cannot be a subWindow. [since 12]
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window type in the configuration is
   *     invalid. [since 12]
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal. [since 9 - 16]
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createWindow(config: Configuration, callback: AsyncCallback<Window>): void;

  /**
   * 创建子窗口或者系统窗口，使用Promise异步回调。
   * 
   * 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是
   * [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。
   * 
   * 自由窗口状态下，子窗口参数[decorEnabled]{@link @ohos.window:window.Configuration}为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口
   * 创建后为非沉浸式布局。
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW [since 12]
   * @param { Configuration } config - 创建窗口时的参数。
   * @returns { Promise<Window> } Promise对象。返回当前创建的窗口对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.createWindow can not work correctly due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Invalid parent window type, parent window cannot be a subWindow. [since 12]
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window type in the configuration is
   *     invalid. [since 12]
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @throws { BusinessError } 1300008 - The display device is abnormal. [since 9 - 16]
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function createWindow(config: Configuration): Promise<Window>;

  /**
   * 创建子窗口，使用callback异步回调。
   * 
   * 子窗口创建后默认是[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，参数id传入null或undefined时，可能会导致callback无法得到执行，建议使用
   * > [createWindow()]{@link window.createWindow(config: Configuration, callback: AsyncCallback<Window>)}替代。
   *
   * @param { string } id - 窗口名字，即[Configuration]{@link @ohos.window:window.Configuration}中的name。
   * @param { WindowType } type - 窗口类型。
   * @param { AsyncCallback<Window> } callback - 回调函数。返回当前创建的子窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration, callback: AsyncCallback<Window>)
   */
  function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * 创建子窗口，使用Promise异步回调。
   * 
   * 子窗口创建后默认是[沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用[createWindow()]{@link window.createWindow(config: Configuration)}替代。
   *
   * @param { string } id - 窗口名字，即[Configuration]{@link @ohos.window:window.Configuration}中的name。
   * @param { WindowType } type - 窗口类型。
   * @returns { Promise<Window> } Promise对象。返回当前创建的子窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration)
   */
  function create(id: string, type: WindowType): Promise<Window>;

  /**
   * 创建系统窗口，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[createWindow()]{@link window.createWindow(config: Configuration)}替代。
   *
   * @param { BaseContext } ctx - 当前应用上下文信息。
   * @param { string } id - 窗口名字，即[Configuration]{@link @ohos.window:window.Configuration}中的name。
   * @param { WindowType } type - 窗口类型。
   * @returns { Promise<Window> } Promise对象。返回当前创建的子窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration)
   */
  function create(ctx: BaseContext, id: string, type: WindowType): Promise<Window>;

  /**
   * 创建系统窗口，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用
   * > [createWindow()]{@link window.createWindow(config: Configuration, callback: AsyncCallback<Window>)}替代。
   *
   * @param { BaseContext } ctx - 当前应用上下文信息。
   * @param { string } id - 窗口名字，即[Configuration]{@link @ohos.window:window.Configuration}中的name。
   * @param { WindowType } type - 窗口类型。
   * @param { AsyncCallback<Window> } callback - 回调函数。返回当前创建的子窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration, callback: AsyncCallback<Window>)
   */
  function create(ctx: BaseContext, id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * 创建一个子窗，并绑定父窗。使用Promise异步回调。
   * 
   * 子窗跟随父窗显示/隐藏，但并不跟随父窗销毁，子窗通过回调函数监听父窗生命周期变化。
   * 
   * 建议在父窗销毁后主动销毁创建的子窗。
   *
   * @param { string } name - Indicates window name.
   * @param { int } parentId - Indicates parent window id. The window id is a non-negative number and exists.
   * @param { BaseContext } ctx - Indicates the context on which the window depends
   * @param { WindowEventListener } parentWindowEventListener - Indicates the event listener of parent window.
   * @returns { Promise<Window> } Promise对象。返回当前创建的子窗口对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     This can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300001 - Repeated operation.
   *     Possible cause: The window has been created and can not be created again.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. Internal task error.
   *                     2. The number of windows has reached the limit.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300009 - The parent window is invalid.
   *     Possible cause: 1. The parent window does not exist or has been destroyed.
   *                     2. Invalid window type. Only main windows are supported.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function createSubWindowAndBindParent(name: string, parentId: int, ctx: BaseContext,
    parentWindowEventListener: WindowEventListener): Promise<Window>;

  /**
   * 查找id所对应的窗口，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用[findWindow()]{@link window.findWindow}替代。
   *
   * @param { string } id - 窗口名字，即[Configuration]{@link @ohos.window:window.Configuration}中的name。
   * @param { AsyncCallback<Window> } callback - 回调函数。返回当前查找到的窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.findWindow
   */
  function find(id: string, callback: AsyncCallback<Window>): void;

  /**
   * 查找id所对应的窗口，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 9开始废弃，建议使用[findWindow()]{@link window.findWindow}替代。
   *
   * @param { string } id - 窗口名字，即[Configuration]{@link @ohos.window:window.Configuration}中的name。
   * @returns { Promise<Window> } Promise对象。返回当前查找的窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.findWindow
   */
  function find(id: string): Promise<Window>;

  /**
   * 查找指定名称对应的窗口。
   *
   * @param { string } name - 窗口名称。查找子窗口或系统窗口时使用[Configuration]{@link @ohos.window:window.Configuration}中的窗口名称；查找主窗口时使用
   *     [getWindowName](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getwindowname12)获取当前实例的窗口名称。
   * @returns { Window } 当前查找的窗口对象。如果查找指定名称对应的窗口不存在，会抛出1300002错误码
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     1. The window is not created or destroyed.
   *     2. Window not found.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function findWindow(name: string): Window;

  /**
   * 获取当前应用内最后显示的窗口，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃，建议使用
   * > [getLastWindow()]{@link window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)}替代。
   *
   * @param { AsyncCallback<Window> } callback - 回调函数。返回当前应用内最后显示的窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;

  /**
   * 获取当前应用内最后显示的窗口，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃，建议使用[getLastWindow()]{@link window.getLastWindow(ctx: BaseContext)}替代。
   *
   * @returns { Promise<Window> } Promise对象。返回当前应用内最后显示的窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext)
   */
  function getTopWindow(): Promise<Window>;

  /**
   * 获取当前应用内最后显示的窗口，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，建议使用[getLastWindow()]{@link window.getLastWindow(ctx: BaseContext)}替代。
   *
   * @param { BaseContext } ctx - 当前应用上下文信息。
   * @returns { Promise<Window> } Promise对象。返回当前应用内最后显示的窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext)
   */
  function getTopWindow(ctx: BaseContext): Promise<Window>;

  /**
   * 获取当前应用内最后显示的窗口，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃，参数ctx传入null或undefined时，可能会导致callback无法得到执行，建议使用
   * > [getLastWindow()]{@link window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)}替代。
   *
   * @param { BaseContext } ctx - 当前应用上下文信息。
   * @param { AsyncCallback<Window> } callback - 回调函数。返回当前应用内最后显示的窗口对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)
   */
  function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * 获取当前应用内层级最高的子窗口，使用callback异步回调。
   * 
   * 若无应用子窗口或子窗口未调用[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}进行显示，则返回应用主
   * 窗口。
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     1. Top window or main window is null or destroyed;
   *     2. This window context is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * 获取当前应用内层级最高的子窗口，使用Promise异步回调。
   * 
   * 若无应用子窗口或子窗口未调用[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}进行显示，则返回应用主
   * 窗口。
   *
   * @param { BaseContext } ctx - 当前应用上下文信息。
   * @returns { Promise<Window> } Promise对象。返回当前应用内层级最高的窗口对象。
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     1. Top window or main window is null or destroyed;
   *     2. This window context is abnormal.
   * @throws { BusinessError } 1300006 - This window context is abnormal.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getLastWindow(ctx: BaseContext): Promise<Window>;

  /**
   * 最小化指定ID的屏幕中的所有主窗口。
   *
   * @param { long } id - 显示设备[Display]{@link @ohos.display:display.DisplayState}的ID号，该参数仅支持整数输入。
   * @param { AsyncCallback<void> } callback - 回调信息。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeAll(id: long, callback: AsyncCallback<void>): void;

  /**
   * 最小化指定ID的屏幕中的所有主窗口，使用Promise异步回调。
   *
   * @param { long } id - 显示设备[Display]{@link @ohos.display:display.DisplayState}的ID号，该参数仅支持整数输入。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeAll(id: long): Promise<void>;

  /**
   * 最小化指定ID的屏幕中除指定窗口之外的所有主窗口，使用Promise异步回调。
   *
   * @param { long } displayId - 屏幕ID，该参数仅支持整数输入，输入浮点数会向下取整。
   * @param { int } excludeWindowId - 窗口ID。可通过
   *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}接口获取到相关窗口属性，其中属性id即对应为窗口ID。窗口ID小于等于0
   *     ，或窗口ID为null或者undefined时，会抛出[401错误码](docroot://reference/errorcode-universal.md#401-参数检查失败)；窗口ID大于0但是不存在会抛出13000
   *     02错误码；窗口ID大于0且窗口存在但是不在该屏幕，最小化指定屏幕上的所有主窗口。该参数仅支持整数输入，输入浮点数会向下取整。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. Window is nullptr;
   *     2. Failed to find specified window by id.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function minimizeAllWithExclusion(displayId: long, excludeWindowId: int): Promise<void>;

  /**
   * 多窗口快速切换时隐藏或者恢复应用窗口。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function toggleShownStateForAllAppWindows(callback: AsyncCallback<void>): void;

  /**
   * 多窗口快速切换时隐藏或者恢复应用窗口，使用Promise异步回调。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities. [since 12]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function toggleShownStateForAllAppWindows(): Promise<void>;

  /**
   * 设置窗口布局模式，使用callback异步回调。
   *
   * @param { WindowLayoutMode } mode - 设置的窗口布局模式。
   * @param { AsyncCallback<void> } callback - 回调信息。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   */
  function setWindowLayoutMode(mode: WindowLayoutMode, callback: AsyncCallback<void>): void;

  /**
   * 设置窗口布局模式，使用Promise异步回调。
   *
   * @param { WindowLayoutMode } mode - 设置的窗口布局模式。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 12]
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   */
  function setWindowLayoutMode(mode: WindowLayoutMode): Promise<void>;

  /**
   * 设置手势导航启用状态。使用callback异步回调。系统出于安全的考虑，不会干预手势的禁用和恢复。应用调用本接口禁用手势后异常退出的情况下，如果想要恢复手势，需自行实现自动拉起机制并再次调用本接口恢复手势。
   *
   * @param { boolean } enable - 设置手势导航启用状态。true表示启用手势导航；false表示禁用手势导航。当前仅禁用从屏幕下拉的手势，其他手势未禁用。
   * @param { AsyncCallback<void> } callback - 回调信息。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGestureNavigationEnabled(enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置手势导航启用状态。使用Promise异步回调。系统出于安全的考虑，不会干预手势的禁用和恢复。应用调用本接口禁用手势后异常退出的情况下，如果想要恢复手势，需自行实现自动拉起机制并再次调用本接口恢复手势。
   *
   * @param { boolean } enable - 设置手势导航启用状态。true表示启用手势导航；false表示禁用手势导航。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setGestureNavigationEnabled(enable: boolean): Promise<void>;

  /**
   * 设置屏幕水印图片显示状态。使用Promise异步回调。
   *
   * @param { image.PixelMap } pixelMap - 水印图片。可通过
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     接口获取。
   * @param { boolean } enable - 设置是否显示水印图片。true显示水印图片；false表示不显示水印图片。设置显示水印后需主动设置为false才能关闭水印图片显示。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean): Promise<void>;

  /**
   * 设置屏幕水印图片的显示状态，并设定水印的优先级。使用Promise异步回调。当priority等于0时，当前接口与
   * [setWaterMarkImage]{@link window.setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>)}
   * 等价。
   *
   * @param { image.PixelMap } pixelMap - 水印图片。可通过
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     接口获取。
   * @param { boolean } enable - 设置是否显示水印图片。true表示显示水印图片；false表示不显示水印图片。设置显示水印后需主动设置为false才能关闭水印图片显示。
   * @param { int } priority - 水印设置优先级。数值越小表示优先级越高，需大于等于0，小于0时返回1300016错误码。设置水印时，如果传入的优先级比上一次设置的低，则本次设置不会生效。
   * @returns { Promise<void> } - Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, priority: int): Promise<void>;

  /**
   * 设置屏幕水印图片显示状态。使用callback异步回调。
   *
   * @param { image.PixelMap } pixelMap - 水印图片。可通过
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     接口获取。
   * @param { boolean } enable - 设置是否显示水印图片。true显示水印图片；false表示不显示水印图片。设置显示水印后需主动设置为false才能关闭水印图片显示。
   * @param { AsyncCallback<void> } callback - 回调信息。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setWaterMarkImage(pixelMap: image.PixelMap, enable: boolean, callback: AsyncCallback<void>): void;

  /**
   * 在同应用内将窗口焦点从源窗口转移到目标窗口，仅支持应用主窗、子窗范围内的焦点转移。使用Promise异步回调。
   * 
   * 目标窗口需确保具有获得焦点的能力（可通过
   * [setWindowFocusable()]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)}
   * 设置），并确保调用[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}成功且执行完毕。
   * 
   * > **说明：**
   * >
   * > 在调用shiftAppWindowFocus()前，建议确保目标窗口已调用
   * > [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
   * > 或[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}并生效，
   * > 否则可能会导致不可见窗口获取焦点，造成功能异常或影响用户体验。
   *
   * @param { int } sourceWindowId - 源窗口id，必须是获焦状态。推荐使用
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口id属性。
   * @param { int } targetWindowId - 目标窗口id。推荐使用
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口id属性。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. The window is not created or destroyed;
   *     2. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported.
   *     2. The two windows are not from the same process.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  function shiftAppWindowFocus(sourceWindowId: int, targetWindowId: int): Promise<void>;

  /**
   * 设置系统窗口的窗口层级。使用Promise异步回调。
   * 
   * 将所有该类型系统窗口zIndex调整为所设置的值，调整前后，该类型窗口之间相对层级保持不变，焦点窗口不发生变化。当应用关闭之后该类型窗口层级恢复默认值。
   * 
   * 推荐不同类型窗口设置不同的zIndex，如果已经存在相同zIndex的窗口，设置前后，窗口之间的相对层级保持不变。
   *
   * @param { WindowType } windowType - 窗口类型。仅支持TYPE_WALLET_SWIPE_CARD、TYPE_VOICE_INTERACTION、TYPE_SCREENSHOT、
   *     TYPE_SCREEN_CONTROL、TYPE_FLOAT_NAVIGATION和TYPE_MUTISCREEN_COLLABORATION。
   * @param { int } zIndex - 系统窗口的层级。该参数仅支持整数输入，浮点数输入将向下取整。0和负数会使窗口在桌面以下。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: Invalid window type.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 23 dynamic&static
   */
  function setSpecificSystemWindowZIndex(windowType: WindowType, zIndex: int): Promise<void>;

  /**
   * 主窗口和子窗口可正常调用，用于将鼠标输入事件从源窗口转移到目标窗口。使用Promise异步回调。
   * 
   * 源窗口仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)事件（事件类型必须为
   * TouchType.Down）的回调方法中调用此接口才会有鼠标输入事件转移效果，成功调用此接口后，系统会向源窗口补发鼠标按键抬起（TouchType.Up）事件，并且向目标窗口补发鼠标按键按下（TouchType.Down）事件。
   *
   * @param { int } sourceWindowId - 源窗口id。推荐使用
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口id属性。
   * @param { int } targetWindowId - 目标窗口id。推荐使用
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口id属性。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error.
   *     Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Failed to convert parameter to sourceWindowId;
   *     3. Failed to convert parameter to targetWindowId;
   *     4. Invalid sourceWindowId or targetWindowId.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. SourceWindow cannot find: not created or not belong to current process;
   *     2. TargetWindow cannot find: not created or not belong to current process;
   *     3. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported;
   *     2. The two windows are not from the same process.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function shiftAppWindowPointerEvent(sourceWindowId: int, targetWindowId: int): Promise<void>;

  /**
   * 主窗口和子窗口可正常调用，用于将触屏输入事件从源窗口转移到目标窗口。使用Promise异步回调。
   * 
   * 源窗口仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#ontouch)事件（事件类型必须为
   * TouchType.Down）的回调方法中调用此接口才会有触屏输入事件转移效果，成功调用此接口后，系统会向源窗口补发触屏抬起（TouchType.Up）事件，并且向目标窗口补发触屏按下（TouchType.Down）事件。
   *
   * @param { int } sourceWindowId - 源窗口id。推荐使用
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口id属性。该参数应为大于0的整数，小于等于0时会返回错误
   *     码1300016。
   * @param { int } targetWindowId - 目标窗口id。推荐使用
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口id属性。该参数应为大于0的整数，小于等于0时会返回错误
   *     码1300016。
   * @param { int } fingerId - 触屏事件的手指唯一标识符。推荐使用
   *     [TouchEvent](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)对象中touches属性获取
   *     id。该参数应为大于等于0的整数，小于0时会返回错误码1300016。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function shiftAppWindowTouchEvent can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: 1. SourceWindow cannot find: not created or not belong to current process;
   *     2. TargetWindow cannot find: not created or not belong to current process;
   *     3. Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation.
   *     Possible cause: 1. Invalid window type. Only main windows and subwindows are supported;
   *     2. The two windows are not from the same process.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  function shiftAppWindowTouchEvent(sourceWindowId: int, targetWindowId: int, fingerId: int): Promise<void>;

  /**
   * 获取当前屏幕的可见主窗口（未退至后台的主窗口）信息。使用Promise异步回调。
   *
   * @permission ohos.permission.VISIBLE_WINDOW_INFO [since 18]
   * @returns { Promise<Array<WindowInfo>> } Promise对象，返回当前可见窗口的相关信息。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   *     Possible cause: Need ohos.permission.VISIBLE_WINDOW_INFO permission. [since 18]
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system
   *     API. [since 12 - 17]
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function getVisibleWindowInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use. [since 12 - 17]
   * @publicapi [since 18]
   * @since 12 dynamic
   * @since 23 static
   */
  function getVisibleWindowInfo(): Promise<Array<WindowInfo>>;

  /**
   * 获取指定的前台窗口当前栈顶[Navigation]{@link ./@internal/component/ets/navigation}中的
   * [NavDestination]{@link ./@internal/component/ets/nav_destination}名称，使用Promise异步回调。
   *
   * @param { int } windowId - 窗口Id，用于指定要查询的窗口。该参数应为大于0的整数，小于等于0时会返回错误码1300016，如果指定的窗口不存在或生命周期不在前台，返回错误码为1300002。
   * @returns { Promise<string> } Promise对象。返回获取到的[NavDestination]{@link ./@internal/component/ets/nav_destination}名称。
   *     <br>对于[Navigation]{@link ./@internal/component/ets/navigation}嵌套以及当前页面存在多个
   *     [Navigation]{@link ./@internal/component/ets/navigation}的场景，查询的是后创建的
   *     [Navigation]{@link ./@internal/component/ets/navigation}的信息。
   *     <br>如果页面没有[Navigation]{@link ./@internal/component/ets/navigation}或者
   *     [Navigation]{@link ./@internal/component/ets/navigation}中没有
   *     [NavDestination]{@link ./@internal/component/ets/nav_destination}，返回空字符串。
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function getTopNavDestinationName(windowId: int): Promise<string>;

  /**
   * 获取指定窗口相同尺寸截图，使用Promise异步回调。若当前窗口设置为隐私模式（可通过
   * [setWindowPrivacyMode]{@link @ohos.window:window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
   * 接口设置），截图结果为白屏。
   *
   * @param { int } windowId - 窗口Id。可通过[getWindowProperties](@link @ohos.window:window.Window.getWindowProperties)
   * 接口获取到相关窗口属性，其中属性id即对应为窗口ID。
   * @returns { Promise<image.PixelMap> } - Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  function getSnapshot(windowId: int): Promise<image.PixelMap>;

  /**
   * 查询本应用指定坐标下的可见窗口数组，按当前窗口层级排列，层级最高的窗口对应数组下标为0，使用Promise异步回调。
   *
   * @param { long } displayId - 查询窗口所在的displayId，该参数应为整数，传入非整数会忽略掉小数部分，可以在窗口属性
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}中获取。
   * @param { int } [windowNumber] - 查询的窗口数量，该参数应为大于0的整数，传入非整数会忽略掉小数部分，未设置或小于等于0返回所有满足条件的窗口。
   * @param { int } [x] - 查询的x坐标，以屏幕左上角为原点，该参数应为非负整数，传入非整数会忽略掉小数部分，未设置或小于0返回所有可见窗口。
   * @param { int } [y] - 查询的y坐标，以屏幕左上角为原点，该参数应为非负整数，传入非整数会忽略掉小数部分，未设置或小于0返回所有可见窗口。
   * @returns { Promise<Array<Window>> } Promise对象。返回获取到的窗口对象数组。
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getWindowsByCoordinate(displayId: long, windowNumber?: int, x?: int, y?: int):
      Promise<Array<Window>>;

  /**
   * 获取指定屏幕上可见的窗口布局信息数组，其中返回的每个Rect的宽、高是已经过缩放计算后的值，按当前窗口层级排列，层级最高的对应数组index为0，使用Promise异步回调。
   *
   * @param { long } displayId - 需要获取窗口布局信息的displayId，该参数应为整数，且为当前实际存在屏幕的displayId，可以通过窗口属性
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}获取。
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise对象。返回获取到的窗口布局信息对象数组。
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function getAllWindowLayoutInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal. [since 15 - 18]
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function getAllWindowLayoutInfo(displayId: long): Promise<Array<WindowLayoutInfo>>;

  /**
   * 根据option指定的过滤条件获取指定屏幕上可见的窗口布局信息数组，其中返回的每个Rect的宽、高是已经过缩放计算后的值，按当前窗口层级排列，层级最高的对应数组index为0，使用Promise异步回调。当未传入option或其中
   * 的字段都为默认值时，当前接口与[getAllWindowLayoutInfo]{@link window.getAllWindowLayoutInfo(displayId: long)}等价。
   *
   * @param { long } displayId - 需要获取窗口布局信息的displayId，该参数应为整数，且为当前实际存在屏幕的displayId，可以通过窗口属性
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}获取。
   * @param { WindowInfoOptions } [option] - 过滤选项。用于指定返回信息是否排除系统窗、比指定窗口层级更低或更高的窗口的信息。默认不过滤。
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise对象。返回获取到的窗口布局信息对象数组。
   * @throws { BusinessError } 801 - Capability not supported.
   *     Function getAllWindowLayoutInfo can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function getAllWindowLayoutInfo(displayId: long, option?: WindowInfoOptions): Promise<Array<WindowLayoutInfo>>;

  /**
   * 获取指定屏幕上生命周期位于前台的窗口对应的窗口模式，使用Promise异步回调。
   *
   * @param { long } [displayId] - 可选的屏幕ID，用于获取对应屏幕上的窗口模式信息。该参数应为大于等于0的整数，小于0时会返回错误码1300016，不传或传值为null以及undefined则代表查询所有
   *     屏幕，传入非整数会忽略掉小数部分。如果指定的屏幕不存在，返回值为0，推荐使用
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口所在屏幕ID属性。
   * @returns { Promise<int> } Promise对象。返回获取到的窗口模式。每一个二进制位代表一种窗口模式，当前支持的窗口模式见
   *     [GlobalWindowMode]{@link @ohos.window:window.GlobalWindowMode}，返回值为对应窗口模式值按位进行或运算的结果。比如，当前屏幕上存在全屏窗口、悬浮窗和画中画三种窗口
   *     ，则返回值为`0b1|0b100|0b1000 = 13`。
   * @throws { BusinessError } 801 - Capability not supported.
   *     function getGlobalWindowMode can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range;
   *     2. The parameter format is incorrect.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getGlobalWindowMode(displayId?: long): Promise<int>;

  /**
   * 开启状态栏、导航栏属性变化的监听。
   *
   * @param { 'systemBarTintChange' } type - 监听事件，固定为'systemBarTintChange'，即导航栏、状态栏属性变化事件。
   * @param { Callback<SystemBarTintState> } callback - 回调函数。返回当前的状态栏、导航栏信息集合。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function on(type: 'systemBarTintChange', callback: Callback<SystemBarTintState>): void;

  /**
   * 开启状态栏、导航栏属性变化的监听。
   *
   * @param { Callback<SystemBarTintState> } callback - 回调函数。返回当前的状态栏、导航栏信息集合。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onSystemBarTintChange(callback: Callback<SystemBarTintState>): void;

  /**
   * 关闭状态栏、导航栏属性变化的监听。
   *
   * @param { 'systemBarTintChange' } type - 监听事件，固定为'systemBarTintChange'，即导航栏、状态栏属性变化事件。
   * @param { Callback<SystemBarTintState> } [callback] - 回调函数。返回当前的状态栏、导航栏信息集合。如果传入参数，
   *     则关闭该监听。如果未传入参数，则关闭所有状态栏、导航栏属性变化的监听。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'systemBarTintChange', callback?: Callback<SystemBarTintState>): void;

  /**
   * 关闭状态栏、导航栏属性变化的监听。
   *
   * @param { Callback<SystemBarTintState> } [callback] - 回调函数。返回当前的状态栏、导航栏信息集合。如果传入参数，
   *     则关闭该监听。如果未传入参数，则关闭所有状态栏、导航栏属性变化的监听。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offSystemBarTintChange(callback?: Callback<SystemBarTintState>): void;

  /**
   * 添加手势导航启用状态变化的监听。
   *
   * @param { 'gestureNavigationEnabledChange' } type - 监听事件，固定为'gestureNavigationEnabledChange'，即手势导航启用状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数。返回当前手势导航的启用状态。true表示手势导航状态变化为启用；false表示手势导航状态变化为禁用。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'gestureNavigationEnabledChange', callback: Callback<boolean>): void;

  /**
   * 添加手势导航启用状态变化的监听。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回当前手势导航的启用状态。true表示手势导航状态变化为启用；false表示手势导航状态变化为禁用。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onGestureNavigationEnabledChange(callback: Callback<boolean>): void;

  /**
   * 移除手势导航启用状态变化的监听。
   *
   * @param { 'gestureNavigationEnabledChange' } type 监听事件，固定为'gestureNavigationEnabledChange'，即手势导航启用状态变化事件。
   * @param { Callback<boolean> } [callback] 已注册的回调函数。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有手势导航启用状态变化的监听。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'gestureNavigationEnabledChange', callback?: Callback<boolean>): void;

  /**
   * 移除手势导航启用状态变化的监听。
   *
   * @param { Callback<boolean> } [callback] 已注册的回调函数。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有手势导航启用状态变化的监听。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offGestureNavigationEnabledChange(callback?: Callback<boolean>): void;

  /**
   * 添加水印启用状态变化的监听。
   *
   * @param { 'waterMarkFlagChange' } type - 监听事件，固定为'waterMarkFlagChange'，即水印启用状态变化事件。
   * @param { Callback<boolean> } callback - 回调函数。返回当前水印的启用状态。true表示当前已启用水印；false表示当前未启用水印。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3.Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'waterMarkFlagChange', callback: Callback<boolean>): void;

  /**
   * 添加水印启用状态变化的监听。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回当前水印的启用状态。true表示当前已启用水印；false表示当前未启用水印。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onWaterMarkFlagChange(callback: Callback<boolean>): void;

  /**
   * 移除水印启用状态变化的监听。
   *
   * @param { 'waterMarkFlagChange' } type 监听事件，固定为'waterMarkFlagChange'，即水印启用状态变化事件。
   * @param { Callback<boolean> } [callback] 已注册的回调函数。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有水印启用状态变化的监听。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
   *     <br>2. Parameter verification failed.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'waterMarkFlagChange', callback?: Callback<boolean>): void;

  /**
   * 移除水印启用状态变化的监听。
   *
   * @param { Callback<boolean> } [callback] 已注册的回调函数。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有水印启用状态变化的监听。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offWaterMarkFlagChange(callback?: Callback<boolean>): void;

  /**
   * 开启应用进程获焦状态变化的监听。此监听针对应用间的获焦状态变化，若同应用内窗口间的获焦状态发生变化，则不会触发回调函数。
   *
   * @param { Callback<boolean> } callback - 回调函数。返回当前应用进程获焦状态的变化。true表示当前应用进程变为获焦状态；false表示当前应用进程变为失焦状态。
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onApplicationFocusStateChange(callback: Callback<boolean>): void;

  /**
   * 关闭应用进程获焦状态变化的监听。
   *
   * @param { Callback<boolean> } [callback] - Callback used to return the result whether application process
   *     focused or not. If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offApplicationFocusStateChange(callback?: Callback<boolean>): void;

  /**
   * 设置同一应用包名下指定moduleName、abilityName对应UIAbility的启动页背景色，使用Promise异步回调。
   * 
   * 该接口对同一应用包名下的所有进程生效，例如多实例或应用分身场景。
   *
   * @param { string } moduleName - 需要设置的UIAbility所属模块名，moduleName的长度范围为0-200字节，仅支持设置当前同一应用包名内的模块。模块名由开发者在
   *     [module.json5配置文件](docroot://quick-start/module-configuration-file.md#配置文件标签)中的name字段指定。
   * @param { string } abilityName - 需要设置的UIAbility名字，abilityName的长度范围为0-200字节，仅支持设置当前同一应用包名内的abilityName。UIAbility名由开发者
   *     在[module.json5配置文件abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)的name字段指定。
   * @param { ColorMetrics } color - 设置的启动页背景色。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 801 - Capability not supported.function setStartWindowBackgroundColor can not to work
   *     correctly due to limited device capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   *     Possible cause: Internal task error.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Parameter exceeds the allowed length.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function setStartWindowBackgroundColor(moduleName: string, abilityName: string, color: ColorMetrics): Promise<void>;

  /**
   * 通知屏幕截屏的事件类型，使用Promise异步回调。
   *
   * @param { ScreenshotEventType } eventType - 截屏事件类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  function notifyScreenshotEvent(eventType: ScreenshotEventType): Promise<void>;

  /**
   * 设置或取消本应用进程下窗口的水印图片，使用Promise异步回调。该接口需要在
   * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
   * 或[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使
   * 用。
   *
   * @param {  image.PixelMap | undefined  } pixelMap - 传入`image.PixelMap`表示设置水印图片，传入`undefined`表示取消水印显示。<br/>如果图片尺寸的宽和高
   *     同时超过窗口尺寸以及屏幕尺寸的宽和高，返回错误码1300016。<br/>如果图片尺寸的宽或高超过窗口尺寸的宽或高，超出窗口宽或高的部分会被裁剪。<br/>如果图片尺寸的宽或高小于窗口尺寸的宽或高，小于的部分会自动重复补充
   *     。
   * @returns {  Promise<void>  } 无返回结果的Promise对象。
   * @throws {  BusinessError  } 801 - Capability not supported.
   *     Function setWatermarkImageForAppWindows can not to work correctly due to limited device capabilities.
   * @throws {  BusinessError  } 1300003 - This window manager service works abnormally.
   * @throws {  BusinessError  } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function setWatermarkImageForAppWindows(pixelMap: image.PixelMap | undefined): Promise<void>;

  /**
   * 获取全部主窗口信息，使用Promise异步回调。
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @returns { Promise<Array<MainWindowInfo>> } Promise对象。返回主窗口信息列表。
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function getAllMainWindowInfo(): Promise<Array<MainWindowInfo>>;

  /**
   * 获取一个或多个指定windowId的主窗口截图，使用Promise异步回调。
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @param { Array<int> } windowId - 需要获取截图的主窗口ID列表。可通过
   *     [window.getAllMainWindowInfo()]{@link window.getAllMainWindowInfo}获取到主窗口windowId。当windowId为null、undefined、小于0、存
   *     在重复值或数量超过512个时，返回错误码401；当windowId大于0但不存在对应窗口时，返回undefined。
   * @param { WindowSnapshotConfiguration } config - 获取窗口截图时的配置信息。
   * @returns { Promise<Array<image.PixelMap | undefined>> } Promise used to return an array of PixelMap objects of the
   *     screenshots, representing the screenshots, in the order of the provided window ID array. If a window ID is
   *     valid but the corresponding main window cannot be found, undefined is returned.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  function getMainWindowSnapshot(windowId: Array<int>, config: WindowSnapshotConfiguration):
    Promise<Array<image.PixelMap | undefined>>;

  /**
   * 将指定的主窗口迁移到指定的屏幕上。使用Promise异步回调。
   * 
   * - 对于[主屏](docroot://displaymanager/display-terminology.md#主屏)/
   * [扩展屏](docroot://displaymanager/display-terminology.md#扩展屏)与
   * [虚拟屏](docroot://displaymanager/display-terminology.md#虚拟屏)之间以及虚拟屏与虚拟屏之间的窗口迁移，仅主窗及其子窗会一起被迁移到对应屏幕上且被抬升，如果存在子窗，最上层可获焦子
   * 窗会获取焦点，否则主窗口获焦。
   * - 对于主屏与扩展屏之间的窗口迁移，只会将主窗口迁移到对应屏幕，抬升并获取焦点。
   * 
   * <!--RP3--><!--RP3End-->
   *
   * @param { long } displayId - 目标屏幕的ID，用于指定要迁移到的屏幕。该参数应为非负整数，可通过
   *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}接口获取到
   *     [properties]{@link @ohos.window:window.WindowProperties}后，再通过properties.displayId获取；也可通过获取
   *     [Display]{@link @ohos.display:display.DisplayState}对象的
   *     [id](docroot://reference/apis-arkui/js-apis-display.md#属性)属性获取此参数。
   * @param { int } windowId - 目标主窗口的ID，用于指定要迁移的窗口。该参数应为大于0的整数，通过
   *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}接口获取到
   *     [properties]{@link @ohos.window:window.WindowProperties}后，再通过properties.id获取。
   * @returns { Promise<void> } - Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   *     Possible cause: The window is not found or has been destoryed.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: The window is not a main window.
   * @throws { BusinessError } 1300008 - Invalid display. Possible cause:
   *     1. DisplayId is a negative number or not exist.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function moveMainWindowToTargetDisplay(displayId: long, windowId: int): Promise<void>;

  /**
   * 窗口显示方向类型枚举。<!--Del-->不同枚举值之间的区别可查询
   * [窗口Orientation枚举值8\~10或12和枚举值13\~16的区别(API9)](docroot://faqs/faqs-window-manager.md#窗口orientation枚举值810或12和枚举值1316的区别api9)
   * 。<!--DelEnd-->
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * 表示未定义方向模式，由系统判定。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * 表示竖屏显示模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT = 1,

    /**
     * 表示横屏显示模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE = 2,

    /**
     * 表示反向竖屏显示模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 3,

    /**
     * 表示反向横屏显示模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 4,

    /**
     * 跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且不受控制中心的旋转开关控制。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION = 5,

    /**
     * 跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏，且不受控制中心的旋转开关控制。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT = 6,

    /**
     * 跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏，且不受控制中心的旋转开关控制。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE = 7,

    /**
     * 跟随传感器自动旋转，可以旋转到竖屏、横屏、反向竖屏、反向横屏四个方向，且受控制中心的旋转开关控制。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_RESTRICTED = 8,

    /**
     * 跟随传感器自动竖向旋转，可以旋转到竖屏、反向竖屏，无法旋转到横屏、反向横屏，且受控制中心的旋转开关控制。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT_RESTRICTED = 9,

    /**
     * 跟随传感器自动横向旋转，可以旋转到横屏、反向横屏，无法旋转到竖屏、反向竖屏，且受控制中心的旋转开关控制。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,

    /**
     * 表示锁定模式，窗口显示方向与屏幕当前方向一致。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCKED = 11,

    /**
     * 跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定（如在某种设备，可以旋转到竖屏、横屏、反向横屏三个方向，无法旋转到反向竖屏）。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_UNSPECIFIED = 12,

    /**
     * 调用时临时旋转到竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT = 13,

    /**
     * 调用时临时旋转到横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE = 14,

    /**
     * 调用时临时旋转到反向竖屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT_INVERTED = 15,

    /**
     * 调用时临时旋转到反向横屏，之后跟随传感器自动旋转，受控制中心的旋转开关控制，且可旋转方向受系统判定。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE_INVERTED = 16,

    /**
     * 表示跟随桌面的旋转模式，如果桌面可以旋转则可旋转，桌面不可旋转则不可旋转。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_DESKTOP = 17
  }

  /**
   * 窗口显示方向的执行结果枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum OrientationExecutionResult {
    /**
     * 设置的方向已生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_APPLIED = 0,
    /**
     * 设置的方向不生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_IGNORED = 1,
    /**
     * 设置的方向被挂起，等系统动画结束后，将生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_PENDING = 2
  }

  /**
   * 设置窗口显示方向的执行结果。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface OrientationResult {
    /**
     * 窗口显示方向的执行结果枚举。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    executionResult : OrientationExecutionResult;
  }

  /**
   * 窗口旋转事件类型。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RotationChangeType {
    /**
     * 窗口即将旋转。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_WILL_ROTATE = 0,
    /**
     * 窗口旋转结束。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_DID_ROTATE = 1
  }

  /**
   * 窗口矩形区域坐标系类型。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RectType {
    /**
     * 窗口矩形区域相对于屏幕坐标系。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_SCREEN  = 0,
    /**
     * 窗口矩形区域相对于父窗口坐标系。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_PARENT_WINDOW = 1
  }

  /**
   * 截屏事件类型枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum ScreenshotEventType {
    /**
     * 系统截屏成功。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT = 0,

    /**
     * 系统截屏中止。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT_ABORT = 1,

    /**
     * 滚动截屏开始。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_START = 2,

    /**
     * 滚动截屏结束。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_END = 3,

    /**
     * 滚动截屏中止。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_ABORT = 4
  }

  /**
   * 旋转信息类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  enum RotationInfoType {
    /**
     * 窗口所在屏幕的显示方向，以窗口模块对横竖屏的定义方式表示。
     * 
     * 开发者在使用时，需要注意该方向表示[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}中的orientation参数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    WINDOW_ORIENTATION = 0,
    /**
     * 屏幕显示方向，以屏幕模块对横竖屏的定义方式表示。
     * 
     * 开发者在使用时，需要注意该方向表示[display]{@link @ohos.display:display.DisplayState}对象的orientation属性。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ORIENTATION = 1,
    /**
     * 设备的屏幕顺时针旋转角度。
     * 
     * 开发者在使用时，需要注意该方向表示[display]{@link @ohos.display:display.DisplayState}对象的rotation属性。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ROTATION = 2
  }

  /**
   * 窗口旋转变化时的窗口信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeInfo {
    /**
     * 窗口旋转事件类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    type: RotationChangeType;
    /**
     * 窗口显示方向。
     * 
     * - 0表示竖屏。
     * - 1表示反向横屏。
     * - 2表示反向竖屏。
     * - 3表示横屏。
     * 
     * 开发者在使用时，需要注意该方向与display对象的属性orientation含义不一致。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    orientation: int;
    /**
     * 窗口所在屏幕Id。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * 窗口所在屏幕旋转后的矩形区域大小。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayRect: Rect;
  }

  /**
   * 应用在窗口旋转变化时返回的信息，系统会根据此信息改变当前窗口矩形区域大小。当返回主窗口旋转变化的信息时，系统不改变主窗口的大小。
   * 
   * 应用窗口与系统窗口大小存在限制，具体限制与相关规则可见
   * [resize]{@link @ohos.window:window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeResult {
    /**
     * 窗口矩形区域坐标系类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    rectType: RectType;
    /**
     * 相对于屏幕或父窗坐标系的窗口矩形区域信息。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    windowRect: Rect;
  }

  /**
   * 旋转事件通知通用回调函数。
   * 
   * 开发者在使用时，回调函数参数类型为[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}，返回值类型为
   * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} \| void。
   *
   * @param { T } info - 回调函数调用时系统传入[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}类型的参数。
   * @returns { U } 回调函数需要返回[RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} | void类型的返回值。
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  type RotationChangeCallback<T, U> = (info: T) => U;

  /**
   * 窗口动画参数配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface WindowAnimationConfig {
    /**
     * 动画曲线类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    curve: WindowAnimationCurve;
    /**
     * 动画播放的时长，单位毫秒（ms）。
     * 
     * 默认值：0，最大值：3000。
     * 
     * 根据动画曲线类型决定是否必填。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    duration?: long;
    /**
     * 动画曲线参数，根据动画曲线类型决定是否必填。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    param?: WindowAnimationCurveParam;
  }

  /**
   * 窗口转场动画配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransitionAnimation {
    /**
     * 本次转场动画配置。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config: WindowAnimationConfig;
    /**
     * 不透明度，转场动画作用的窗口属性，值为0时窗口完全透明，默认值为1.0。当动画类型为WindowTransitionType.DESTROY时，代表动画终点的不透明度。取值范围0~1.0，在动画结束时恢复为1.0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    opacity?: double;
  }

  /**
   * 窗口模糊类型枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum BlurStyle {
    /**
     * 表示关闭模糊。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    OFF = 0,
    /**
     * 表示较薄的模糊类型。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THIN = 1,
    /**
     * 表示适中的模糊类型。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGULAR = 2,
    /**
     * 表示较厚的模糊类型。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THICK = 3
  }

  /**
   * 窗口生命周期。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum WindowEventType {
    /**
     * 切到前台。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_SHOWN = 1,
    /**
     * 获焦状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_ACTIVE = 2,
    /**
     * 失焦状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_INACTIVE = 3,
    /**
     * 切到后台。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_HIDDEN = 4,
    /**
     * 窗口销毁。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_DESTROYED = 7
  }

  /**
   * 窗口最大化时的布局枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum MaximizePresentation {
    /**
     * 最大化时，跟随应用app当前设置的全屏模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_APP_IMMERSIVE_SETTING = 0,
    /**
     * 最大化时，如果当前窗口设置了全屏模式会退出全屏模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EXIT_IMMERSIVE = 1,
    /**
     * 最大化时，进入全屏模式，鼠标Hover在热区上显示窗口标题栏和dock栏。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE = 2,
    /**
     * 最大化时，进入全屏模式，鼠标Hover在热区上不显示窗口标题栏和dock栏。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE_DISABLE_TITLE_AND_DOCK_HOVER = 3
  }

  /**
   * 在可折叠的2in1设备的半折叠状态下，最大化窗口时用于控制瀑布流模式切换策略的枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AcrossDisplayPresentation {
    /**
     * 表示跟随当前的最大化瀑布流模式切换的策略。
     * 如果未设置跨屏显示，则应用默认的系统策略：
     * 在设备对折状态下，窗口进入单屏最大化
     * （即最大化时，窗口只显示在屏幕的上半部分或下半部分）。
     * 在展开状态下，窗口最大化，并在折回为对折时保持瀑布模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FOLLOW_ACROSS_DISPLAY_SETTING = 0,

    /**
     * 在设备的半折状态下，窗口可以直接进入瀑布模式。
     * 在展开状态下，窗口最大化，并在折回一半时保持瀑布模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENTER_ACROSS_DISPLAY_MODE = 1,

    /**
     * 在设备对折状态下，窗口退出瀑布模式，进入单屏最大化
     * （即最大化时，窗口仅显示在屏幕的上半部分或下半部分）。
     * 在展开状态下，窗口最大化，重新进入半折后将退出瀑布模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXIT_ACROSS_DISPLAY_MODE = 2
  }

  /**
   * 最大化窗口时的可选配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface MaximizeOptions {
    /**
     * 窗口最大化时的布局。
     *
     * @default MaximizePresentation.ENTER_IMMERSIVE
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maximizePresentation?: MaximizePresentation;

    /**
     * 参数控制主窗口的瀑布模式策略。
     * 该参数只能在具有折叠功能的2in1设备上正确调用。
     * 如果在其他设备类型上调用，则没有任何效果。
     *
     * @default AcrossDisplayPresentation.FOLLOW_ACROSS_DISPLAY_SETTING
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    acrossDisplayPresentation?: AcrossDisplayPresentation;

    /**
     * 截图动效的配置。如果未指定，将使用系统默认动效。
     * 当持续时间和延迟参数都设置为0时，表示截图动效被取消。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    snapshotAnimationConfig?: WindowSnapshotAnimationConfig;
  }

  /**
   * 窗口模式。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum GlobalWindowMode {
    /**
     * 全屏窗口，二进制从右往左，第一个二进制位为1。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FULLSCREEN = 1,

    /**
     * 分屏窗口，二进制从右往左，第二个二进制位为1。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SPLIT = 1 << 1,

    /**
     * 悬浮窗，二进制从右往左，第三个二进制位为1。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FLOAT = 1 << 2,

    /**
     * 画中画，二进制从右往左，第四个二进制位为1。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PIP = 1 << 3
  }

  /**
   * 窗口移动选项。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface MoveConfiguration {
    /**
     * 目标屏幕ID，该参数应为整数，输入非整数时将向下取整。默认值为undefined。填入该参数时，将移动到相对于目标屏幕左上角的指定位置。此参数不传、传undefined或传入目标屏幕ID不存在时，将移动到相对于当前屏幕左上角的
     * 指定位置。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    displayId?: long;
  }

  /**
   * 当前支持显示或隐藏的系统栏类型。
   *
   * @unionmember { 'status' } Status bar.
   * @unionmember { 'navigation' } <!--RP13--><!--RP13End-->Three-button navigation bar.
   * @unionmember { 'navigationIndicator' } Bottom navigation bar. <!--RP12-->OpenHarmony devices do not support this
   *     capability.<!--RP12End-->
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 12]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  type SpecificSystemBar = 'status' | 'navigation'| 'navigationIndicator';

  /**
   * 启动动画配置，仅对全屏应用生效。
   * 
   * 不同应用间跳转场景不生效，仍保持系统默认动效。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface StartAnimationSystemParams {
    /**
     * 窗口动画类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    type: AnimationType;
    /**
     * 窗口动画参数配置。默认动画曲线为WindowAnimationCurve.LINEAR，duration为0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    animationConfig?: WindowAnimationConfig;
  }

  /**
   * 启动动画配置。
   * 
   * 仅对同应用的不同ability间跳转生效。
   * 
   * 仅对全屏应用生效。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface StartAnimationParams {
    /**
     * The type of window animation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    type: AnimationType;
  }

  /**
   * 应用启动时的窗口参数配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface WindowCreateParams {
    /**
     * The params of start animation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationParams?: StartAnimationParams;
    /**
     * 启动动画配置，仅对全屏应用生效。
     * 
     * 不同应用间跳转场景不生效，仍保持系统默认动效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    systemAnimationParams?: StartAnimationSystemParams;
    /**
     * 窗口拉起时是否需要动画
     *
     * 默认跟随产品配置，例如PC设备上拉起主窗默认有动画，Phone上拉起子窗默认无动画。当产品支持配置，跟随开发者设置的值。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    needAnimation?: boolean;

    /**
     * 是否覆盖系统窗口尺寸限制。
     * 如果为true，则当前主窗口可以设置超出系统限制的窗口尺寸限制。
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isWindowLimitsForcible?: boolean;
  }

  /**
   * 窗口截图动效的配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface WindowSnapshotAnimationConfig {
    /**
     * 窗口截图淡出动效的持续时间（毫秒）。
     * 如果未指定，则该参数默认为由系统动效上下文确定的值：
     * 窗口状态在WindowStatusType.FLOING和WindowStatusType.FULLSCREEN之间转换为250。
     * 400适用于所有其他屏幕截图动效场景。
     * 此参数的有效范围为0-400。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    duration?: long;

    /**
     * 窗口截图淡出动效开始前的延迟时间（毫秒）。
     * 如果未指定，则该参数默认为由系统动效上下文确定的值：
     * 窗口状态在WindowStatusType.FLOATING和WindowStatusType.FULLSCREEN之间转换为50。
     * 350适用于所有其他截图动效场景。
     * 此参数的有效范围为0-350。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    delay?: long;
  }

  /**
   * 软键盘窗口信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface KeyboardInfo {
    /**
     * 动画开始前软键盘的位置和大小。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    beginRect: Rect;

    /**
     * 动画结束后软键盘的位置和大小。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    endRect: Rect;
    /**
     * 当前是否有显示/隐藏动画，true表示有动画，false表示没有。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    animated?: boolean;
    /**
     * 动画配置信息。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config?: WindowAnimationConfig;
  }

  /**
   * 关键帧的策略配置。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface KeyFramePolicy {
    /**
     * 是否开启关键帧。true表示开启，false表示关闭。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    enable: boolean;

    /**
     * 设置关键帧布局切换的拖拽时间间隔，单位为毫秒，默认值为1000。取值为正整数，浮点数向下取整。与distance判断为或的关系：满足其一即开始布局切换。
     *
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    interval?: long;

    /**
     * 设置关键帧布局切换的拖拽距离间隔，单位为px，默认值为1000。取值为0或正整数，浮点数向下取整。设置为0时，忽略拖拽距离因素。与interval判断为或的关系：满足其一即开始布局切换。
     *
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    distance?: int;

    /**
     * 设置关键帧布局的动效切换时间，单位为毫秒，默认值为100。取值为0或正整数，浮点数向下取整。
     *
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDuration?: long;

    /**
     * 设置关键帧布局切换动效延迟时间，单位为毫秒，默认值为100。取值为0或正整数，浮点数向下取整。
     *
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDelay?: long;
  }

  /**
   * 当前窗口实例，窗口管理器管理的基本单元。
   * 
   * 下列API示例中都需先使用
   * [getLastWindow()]{@link @ohos.window:window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)}、
   * [createWindow()]{@link @ohos.window:window.createWindow(config: Configuration, callback: AsyncCallback<Window>)}、
   * [findWindow()]{@link @ohos.window:window.findWindow}中的任一方法获取到Window实例（windowClass），再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface Window {
    /**
     * 隐藏当前窗口，使用callback异步回调，仅支持系统窗口与应用子窗口。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    hide (callback: AsyncCallback<void>): void;

    /**
     * 隐藏当前窗口，使用Promise异步回调，仅支持系统窗口与应用子窗口。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * 隐藏当前窗口，过程中播放动画，使用callback异步回调，仅支持系统窗口。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hideWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * 隐藏当前窗口，过程中播放动画，使用Promise异步回调，仅支持系统窗口。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    hideWithAnimation(): Promise<void>;

    /**
     * 显示当前窗口，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.showWindow(callback: AsyncCallback<void>)
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * 显示当前窗口，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[showWindow()]{@link window.Window.showWindow()}替代。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.showWindow()
     */
    show(): Promise<void>;

    /**
     * 显示当前窗口，使用callback异步回调，支持系统窗口、应用子窗口、模态窗和全局悬浮窗，或将已显示的应用主窗口层级提升至顶部。
     * 
     * > **说明：**
     * >
     * > 调用该接口前，建议先通过[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}方法完成页面加载。如果应用主窗口没有完成页面加载，直接调用该接口，界面会
     * > 一直显示启动界面；如果系统窗口、应用子窗口、模态窗和全局悬浮窗没有完成页面加载，直接调用该接口，窗口会处于前台，但不可见。
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    showWindow(callback: AsyncCallback<void>): void;

    /**
     * 显示当前窗口，使用Promise异步回调，支持系统窗口、应用子窗口、模态窗和全局悬浮窗，或将已显示的应用主窗口层级提升至顶部。
     * 
     * > **说明：**
     * >
     * > 调用该接口前，建议优先通过[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}方法完成页面加载。如果应用主窗口没有完成页面加载，直接调用该接口，界面会
     * > 一直显示启动界面；如果系统窗口、应用子窗口、模态窗和全局悬浮窗没有完成页面加载，直接调用该接口，窗口会处于前台，但不可见。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    showWindow(): Promise<void>;

    /**
     * 显示当前窗口或将已显示的应用主窗口的层级提升至顶部，支持传入参数来控制窗口显示的行为，使用Promise异步回调。
     * 
     * 仅支持除TYPE_DIALOG类型的窗口和模态子窗口（即使用setSubWindowModal启用了子窗的模态属性）之外的应用子窗口、应用主窗、全局悬浮窗以及系统窗口。
     * 
     * > **说明：**
     * >
     * > 调用该接口前，建议优先通过[loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}方法完成页面加载。如果应用主窗口没有完成页面加载，直接调用该接口，界面会
     * > 一直显示启动界面；如果系统窗口、应用子窗口和全局悬浮窗没有完成页面加载，直接调用该接口，窗口会处于前台，但不可见。
     *
     * @param { ShowWindowOptions } options - 显示子窗口或系统窗口时的参数。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Function showWindow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Modal subwindow and dialog window can not set focusOnShow.
     * @throws { BusinessError } 1300016 - Parameter validation error. Possible cause: 1. The value of the parameter is
     *     out of the allowed range;
     *     2. The length of the parameter exceeds the allowed length;
     *     3. The parameter format is incorrect.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    showWindow(options: ShowWindowOptions): Promise<void>;

    /**
     * 显示当前窗口，过程中播放动画，使用callback异步回调，仅支持系统窗口。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    showWithAnimation(callback: AsyncCallback<void>): void;

    /**
     * 显示当前窗口，过程中播放动画，使用Promise异步回调，仅支持系统窗口。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only system windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    showWithAnimation(): Promise<void>;

    /**
     * 销毁当前窗口，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [destroyWindow()]{@link window.Window.destroyWindow(callback: AsyncCallback<void>)}替代。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.destroyWindow(callback: AsyncCallback<void>)
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * 销毁当前窗口，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[destroyWindow()]{@link window.Window.destroyWindow()}替代。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.destroyWindow()
     */
    destroy(): Promise<void>;

    /**
     * 销毁当前窗口，使用callback异步回调，支持系统窗口及应用子窗口，全局悬浮窗和模态窗。
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    destroyWindow(callback: AsyncCallback<void>): void;

    /**
     * 销毁当前窗口，使用Promise异步回调，支持系统窗口及应用子窗口，全局悬浮窗和模态窗。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    destroyWindow(): Promise<void>;

    /**
     * 移动窗口位置，使用Promise异步回调。
     * 
     * 全屏模式窗口不支持该操作。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int)}替代。
     *
     * @param { number } x - 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示位置在x轴右侧；值为负表示位置在x轴左侧；值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { number } y - 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示位置在y轴下侧；值为负表示位置在y轴上侧；值为0表示位置在y轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.moveWindowTo(x: int, y: int)
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * 移动窗口位置，使用callback异步回调。
     * 
     * 全屏模式窗口不支持该操作。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}替代。
     *
     * @param { number } x - 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示位置在x轴右侧；值为负表示位置在x轴左侧；值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { number } y - 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示位置在y轴下侧；值为负表示位置在y轴上侧；值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * 移动窗口位置，使用Promise异步回调。调用成功即返回，但返回后无法立即获取最终生效结果。如需立即获取，请使用
     * [moveWindowToAsync()]{@link window.Window.moveWindowToAsync(x: int, y: int)}。
     * 
     * > **说明：**
     * >
     * > - 不建议在除自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，WindowStatusType可通过
     * > [getWindowStatus()]{@link window.Window.getWindowStatus}获取）外的其他窗口模式下使用。
     * >
     * > - 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，窗口相对于屏幕左上顶点移动；在非自由窗口状态下，窗口相对于父窗口左上顶点移动。
     * >
     * > - 若需在非自由窗口状态下实现相对于屏幕左上顶点的移动，请使用
     * > [moveWindowToGlobal()]{@link window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration)}
     * > 。
     * >
     * > - 该方法对非自由窗口状态下的主窗口无效。
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。
     *
     * @param { int } x - 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示在原点右侧，值为负表示在原点左侧。该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { int } y - 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示在原点下方，值为负表示在原点上方。该参数仅支持整数输入，浮点数输入将向下取整。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    moveWindowTo(x: int, y: int): Promise<void>;

    /**
     * 移动窗口位置，使用callback异步回调。调用成功即返回，但返回后无法立即获取最终生效结果。如需立即获取，请使用
     * [moveWindowToAsync()]{@link window.Window.moveWindowToAsync(x: int, y: int)}。
     * 
     * > **说明：**
     * >
     * > - 不建议在除自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，WindowStatusType可通过
     * > [getWindowStatus()]{@link window.Window.getWindowStatus}获取）外的其他窗口模式下使用。
     * >
     * > - 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，窗口相对于屏幕左上顶点移动；在非自由窗口状态下，窗口相对于父窗口左上顶点移动。
     * >
     * > - 若需在非自由窗口状态下实现相对于屏幕左上顶点的移动，请使用
     * > [moveWindowToGlobal()]{@link window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration)}
     * > 。
     * >
     * > - 该方法对非自由窗口状态下的主窗口无效。
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。
     *
     * @param { int } x - 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示在原点右侧，值为负表示在原点左侧。
     *     该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { int } y - 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示在原点下方，值为负表示在原点上方。
     *     该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    moveWindowTo(x: int, y: int, callback: AsyncCallback<void>): void;

    /**
     * 移动窗口位置，使用Promise异步回调。调用生效后返回，回调中可使用[getWindowProperties()]{@link window.Window.getWindowProperties}（见示例）立即获取最终生效结
     * 果。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。
     * 
     * 在自由悬浮窗口模式下，不同类型窗口的移动行为如下：
     * 
     * | 窗口类型 | [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态 | 非自由窗口状态 |
     * |---------|---------------|-----------------|
     * | 主窗口 | 相对于屏幕移动 | 调用不生效不报错 |
     * | 应用子窗口/模态窗 | 相对于屏幕移动 | 相对于主窗口移动 |
     * | 系统窗口/全局悬浮窗 | 相对于屏幕移动 | 相对于屏幕移动 |
     * 
     * > **说明：**
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。
     *
     * @param { int } x - 窗口在x轴方向移动到的坐标位置，单位为px，值为正表示位置在x轴右侧；值为负表示位置在x轴左侧；
     *     值为0表示位置在x轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { int } y - 窗口在y轴方向移动到的坐标位置，单位为px，值为正表示位置在y轴下侧；值为负表示位置在y轴上侧；
     *     值为0表示位置在y轴坐标原点。该参数仅支持整数输入，浮点数输入将向下取整。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    moveWindowToAsync(x: int, y: int): Promise<void>;

    /**
     * 移动窗口位置，支持配置moveConfiguration参数指定窗口移动的目标屏幕ID，使用Promise异步回调。调用生效后返回，回调中可使用
     * [getWindowProperties()]{@link window.Window.getWindowProperties}（见示例）立即获取最终生效结果。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。
     * 
     * 在自由悬浮窗口模式下，不同类型窗口的移动行为如下：
     * 
     * | 窗口类型 | [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态 | 非自由窗口状态 |
     * |---------|---------------|-----------------|
     * | 主窗口 | 相对于屏幕移动 | 调用不生效不报错 |
     * | 应用子窗口/模态窗 | 相对于屏幕移动 | 相对于主窗口移动 |
     * | 系统窗口/全局悬浮窗 | 相对于屏幕移动 | 相对于屏幕移动 |
     * 
     * > **说明：**
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。
     *
     * @param { int } x - 窗口在x轴方向移动的值，值为正表示右移，单位为px，该参数应该为整数，非整数输入将向下取整。
     * @param { int } y - 窗口在y轴方向移动的值，值为正表示下移，单位为px，该参数应该为整数，非整数输入将向下取整。
     * @param { MoveConfiguration } [moveConfiguration] - 窗口移动选项，未设置将默认保持为当前屏幕。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    moveWindowToAsync(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * 基于屏幕坐标移动窗口位置，使用Promise异步回调。调用生效后返回，回调中可使用[getWindowProperties()]{@link window.Window.getWindowProperties}（见示例）立即获
     * 取最终生效结果。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。
     * 
     * > **说明：**
     * >
     * > - 主窗处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不生效不报错。
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。
     *
     * @param { int } x - 表示以屏幕左上角为起点，窗口在x轴方向移动的值，单位为px。值为正表示右移，值为负表示左移。
     *     该参数仅支持整数输入，浮点数输入将向下取整。
     * @param { int } y - 表示以屏幕左上角为起点，窗口在y轴方向移动的值，单位为px。值为正表示下移，值为负表示上移。
     *     该参数仅支持整数输入，浮点数输入将向下取整。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    moveWindowToGlobal(x: int, y: int): Promise<void>;

    /**
     * 基于屏幕坐标移动窗口位置，支持配置moveConfiguration参数指定窗口移动的目标屏幕ID，使用Promise异步回调。调用生效后返回，回调中可使用
     * [getWindowProperties()]{@link window.Window.getWindowProperties}（见示例）立即获取最终生效结果。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。
     * 
     * > **说明：**
     * >
     * > - 主窗处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不生效不报错。
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。
     *
     * @param { int } x - 表示以目标屏幕左上角为起点，窗口在x轴方向移动的值，单位为px。值为正表示右移，值为负表示左移。
     *     该参数应该为整数，非整数输入将向下取整。
     * @param { int } y - 表示以目标屏幕左上角为起点，窗口在y轴方向移动的值，单位为px。值为正表示下移，值为负表示上移。
     *     该参数应该为整数，非整数输入将向下取整。
     * @param { MoveConfiguration } [moveConfiguration] - 窗口移动选项，未设置将默认保持为当前屏幕。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. The window type is not supported for this operation.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration): Promise<void>;

    /**
     * 基于[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)移动窗口位置，使用Promise异步回调。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，在其他窗口模式下调用返回错误码1300010错误码。
     * 
     * > **说明：**
     * >
     * > - 主窗处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不生效不报错。
     * >
     * > - 窗口移动后，如果窗口跨越多个屏幕，窗口将归属于与其重叠面积最大的屏幕。
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，若主窗口或子窗口的标题栏移出屏幕可视区域，系统将自动回弹窗口，确保标题栏保持可见。
     *
     * @param { int } x - 表示以主屏幕左上角为起点，窗口在x轴方向移动的值，单位为px。值为正表示右移，值为负表示左移。
     *     该参数应该为整数，非整数输入将向下取整。
     * @param { int } y - 表示以主屏幕左上角为起点，窗口在y轴方向移动的值，单位为px。值为正表示下移，值为负表示上移。
     *     该参数应该为整数，非整数输入将向下取整。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    moveWindowToGlobalDisplay(x: int, y: int): Promise<void>;

    /**
     * 基于窗口左上角顶点改变当前窗口大小，使用Promise异步回调。
     * 
     * 应用主窗口与子窗口存在大小限制，默认宽度范围：[320, 1920]，默认高度范围：[240, 1920]，单位为vp。
     * 
     * 应用主窗口与子窗口的最小宽度与最小高度可由产品端进行配置，配置后的最小宽度与最小高度以产品段配置值为准，具体尺寸限制范围可以通过
     * [getWindowLimits]{@link window.Window.getWindowLimits}接口进行查询。
     * 
     * 系统窗口存在大小限制，宽度范围：(0, 1920]，高度范围：(0, 1920]，单位为vp。
     * 
     * 设置的宽度与高度受到此限制约束，规则：
     * 
     * 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效；
     * 
     * 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。
     * 
     * 全屏模式窗口不支持该操作。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[resize()]{@link window.Window.resize(width: int, height: int)}替代。
     *
     * @param { number } width - 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码
     *     [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。
     * @param { number } height - 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码
     *     [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.resize(width: int, height: int)
     */
    resetSize(width: number, height: number): Promise<void>;

    /**
     * 基于窗口左上角顶点改变当前窗口大小，使用callback异步回调。
     * 
     * 应用主窗口与子窗口存在大小限制，默认宽度范围：[320, 1920]，默认高度范围：[240, 1920]，单位为vp。
     * 
     * 应用主窗口与子窗口的最小宽度与最小高度可由产品端进行配置，配置后的最小宽度与最小高度以产品段配置值为准，具体尺寸限制范围可以通过
     * [getWindowLimits]{@link window.Window.getWindowLimits}接口进行查询。
     * 
     * 系统窗口存在大小限制，宽度范围：(0, 1920]，高度范围：(0, 1920]，单位为vp。
     * 
     * 设置的宽度与高度受到此限制约束，规则：
     * 
     * 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效；
     * 
     * 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。
     * 
     * 全屏模式窗口不支持该操作。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [resize()]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}替代。
     *
     * @param { number } width - 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码
     *     [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。
     * @param { number } height - 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，负值为非法参数（抛出错误码
     *     [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;

    /**
     * 基于窗口左上角顶点改变当前窗口大小，使用Promise异步回调。
     * 
     * 调用成功即返回，该接口返回后无法立即获取最终生效结果，如需立即获取，建议使用接口[resizeAsync()]{@link window.Window.resizeAsync}。
     * 
     * 窗口存在大小限制[WindowLimits]{@link @ohos.window:window.WindowLimits}，具体尺寸限制范围可以通过
     * [getWindowLimits]{@link window.Window.getWindowLimits}接口进行查询。
     * 
     * 调用该接口设置的宽度与高度受到此限制约束，规则：
     * 
     * 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效，系统窗口和全局悬浮窗设置最小值不受窗口最小宽/高限制值限制；
     * 
     * 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，在其他窗口模式下调用返回1300002错误码。
     * 
     * > **说明：**
     * >
     * > - 主窗口处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不报错不生效。
     *
     * @param { int } width - 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，
     *     负值为非法参数（抛出错误码401）。
     * @param { int } height - 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，
     *     负值为非法参数（抛出错误码401）。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window status type. Only supports windows in floating window mode.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    resize(width: int, height: int): Promise<void>;

    /**
     * 基于窗口左上角顶点改变当前窗口大小，使用callback异步回调。
     * 
     * 调用成功即返回，该接口返回后无法立即获取最终生效结果，如需立即获取，建议使用接口[resizeAsync()]{@link window.Window.resizeAsync}。
     * 
     * 窗口存在大小限制[WindowLimits]{@link @ohos.window:window.WindowLimits}，具体尺寸限制范围可以通过
     * [getWindowLimits]{@link window.Window.getWindowLimits}接口进行查询。
     * 
     * 调用该接口设置的宽度与高度受到此限制约束，规则：
     * 
     * 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效，系统窗口和全局悬浮窗设置最小值不受窗口最小宽/高限制值限制；
     * 
     * 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，在其他窗口模式下调用返回1300002错误码。
     * 
     * > **说明：**
     * >
     * > - 主窗口处于自由悬浮窗口模式时，在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下调用不报错不生效。
     *
     * @param { int } width - 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，
     * 负值为非法参数（抛出错误码401）。
     * @param { int } height - 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，
     * 负值为非法参数（抛出错误码401）。
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window status type. Only supports windows in floating window mode.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    resize(width: int, height: int, callback: AsyncCallback<void>): void;

    /**
     * 基于窗口左上角顶点改变当前窗口大小，使用Promise异步回调。
     * 
     * 调用生效后返回，回调中可使用[getWindowProperties()]{@link window.Window.getWindowProperties}（见示例）立即获取最终生效结果。
     * 
     * 窗口存在大小限制[WindowLimits]{@link @ohos.window:window.WindowLimits}，具体尺寸限制范围可以通过
     * [getWindowLimits]{@link window.Window.getWindowLimits}接口进行查询。
     * 
     * 调用该接口设置的宽度与高度受到此限制约束，规则：
     * 
     * 若所设置的窗口宽/高尺寸小于窗口最小宽/高限制值，则窗口最小宽/高限制值生效，系统窗口和全局悬浮窗设置最小值不受窗口最小宽/高限制值限制；
     * 
     * 若所设置的窗口宽/高尺寸大于窗口最大宽/高限制值，则窗口最大宽/高限制值生效。
     * 
     * 该接口仅在窗口为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING，窗口模式可通过
     * [getWindowStatus()]{@link window.Window.getWindowStatus}获取）时调用生效，否则抛出错误码1300010。
     * 
     * > **说明：**
     * >
     * > - 在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，主窗口调用不生效。
     *
     * @param { int } width - 当前窗口的目标宽度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，
     *     负值为非法参数（抛出错误码401）。
     * @param { int } height - 当前窗口的目标高度，单位为px，该参数仅支持整数输入，浮点数输入将向下取整，
     *     负值为非法参数（抛出错误码401）。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Invalid parameter range.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The window status is not FLOATING.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    resizeAsync(width: int, height: int): Promise<void>;

    /**
     * 设置子窗或模态窗口（即WindowType为TYPE_DIALOG的窗口）的布局信息（position和size）是否跟随主窗，使用Promise异步回调。
     * 
     * 1、只支持主窗的一级子窗或模态窗口使用该接口。
     * 
     * 2、当子窗或模态窗口调用该接口后，立即使其布局信息与主窗完全一致并保持，除非传入false再次调用该接口，否则效果将持续。
     * 
     * 3、当子窗或模态窗口调用该接口后，再调用moveTo、resize等修改布局信息的接口将不生效。
     * 
     * 4、当子窗或模态窗口不再使用该功能后，不保证子窗或模态窗口的布局信息（position和size）为确定的值，需要应用重新进行设置。
     * 
     * 该接口调用生效后，
     * [setRelativePositionToParentWindowEnabled()]{@link window.Window.setRelativePositionToParentWindowEnabled}接口调用不生效
     * 。
     *
     * @param { boolean } enabled - 设置是否启用跟随主窗布局。true表示启用，false表示不启用。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The subwindow level is more than one.
     *     4. The subwindow is following its parent window's position.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and dialog windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setFollowParentWindowLayoutEnabled(enabled: boolean): Promise<void>;

    /**
     * 用于设置一级子窗是否支持与主窗保持相对位置不变。使用Promise异步回调。
     * 
     * 该相对位置通过一级子窗与主窗之间锚点的偏移量表示，子窗和主窗使用的窗口锚点相同。
     * 
     * 1. 只支持一级子窗调用该接口，子窗需处于自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）。
     * 2. 当子窗调用该接口后，立即使其显示位置跟随主窗并保持相对位置不变，除非传入false再次调用该接口，否则效果将持续。
     * 3. 当子窗调用该接口后，再调用[moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}、[maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)}修改窗口位置或大小的接口将不生效。
     * 
     * 该接口调用生效后，[setFollowParentWindowLayoutEnabled()]{@link window.Window.setFollowParentWindowLayoutEnabled}接口调用不生效。
     *
     * @param { boolean } enabled - 一级子窗是否支持与主窗保持相对位置不变。true表示支持；false表示不支持。
     * @param { WindowAnchor } [anchor] - 一级子窗与主窗保持相对位置不变时的窗口锚点枚举。该参数仅在enabled为true时生效，
     *     默认值为window.WindowAnchor.TopStart，即默认锚点为窗口左上角。
     * @param { int } [offsetX] - 一级子窗锚点与主窗锚点位置的x轴偏移量，单位为px。该参数仅在enabled为true时生效，
     *     仅支持整数输入，浮点数向下取整，默认值为0。
     * @param { int } [offsetY] - 一级子窗锚点与主窗锚点位置的y轴偏移量，单位为px。该参数仅在enabled为true时生效，
     *     仅支持整数输入，浮点数向下取整，默认值为0。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setRelativePositionToParentWindowEnabled can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setRelativePositionToParentWindowEnabled(enabled: boolean, anchor?: WindowAnchor,
        offsetX?: int, offsetY?: int): Promise<void>;

    /**
     * 设置一级子窗与主窗保持相对位置不变。使用Promise异步回调。
     * 
     * 该相对位置通过子窗与主窗之间的锚点偏移量表示，子窗和主窗使用的窗口锚点相同。
     * 
     * > **说明：**
     * >
     * > - 只支持一级子窗调用该接口，子窗需处于自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）。
     * >
     * > - 当子窗调用该接口后，立即使其显示位置跟随主窗并保持相对位置不变，并且可以监听主窗大小及模式切换。除非调用
     * > [detachLayoutToParentWindow()]{@link window.Window.detachLayoutToParentWindow}接口解绑，否则效果将持续。
     * >
     * > - 当子窗调用该接口后，再调用
     * > [moveWindowTo()]{@link @ohos.window:window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}、
     * > [maximize()]{@link @ohos.window:window.Window.maximize(presentation?: MaximizePresentation)}、
     * > [setFollowParentWindowLayoutEnabled()]{@link @ohos.window:window.Window.setFollowParentWindowLayoutEnabled}等修改窗
     * > 口位置的接口，或通过鼠标/触摸操作对子窗进行拖拽移动、拖拽缩放时将不生效。
     *
     * @param { WindowAnchorInfo } [anchorInfo] - 一级子窗与主窗保持相对位置不变时的锚点参数。若不传，默认逻辑参考
     *     [WindowAnchorInfo]{@link window.WindowAnchorInfo}。
     * @param { SubWindowAttachOptions } [attachOptions] - 设置子窗布局的附加参数。若不传，默认逻辑参考
     *     [SubWindowAttachOptions]{@link window.SubWindowAttachOptions}。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function attachLayoutToParentWindow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: 1. Invalid window type. Only subwindows are supported;
     *     2. The current window's parent window is not a main window;
     *     3. Only level-1 subwindows are supported.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: 1. The subwindow is following its parent window's layout.
     *     2. The subwindow is not in the floating mode.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    attachLayoutToParentWindow(anchorInfo?: WindowAnchorInfo, attachOptions?: SubWindowAttachOptions): Promise<void>;

    /**
     * 解除一级子窗与主窗保持相对位置不变的协同关系。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 子窗调用接口时需保持子窗处于协同状态。
     * >
     * > - 调用接口解除协同后，子窗将保持协同时的位置，可对子窗进行拖拽以修改子窗大小和位置。
     * >
     * > - 解除协同后，调用
     * > [moveWindowTo()]{@link @ohos.window:window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}、
     * > [maximize()]{@link @ohos.window:window.Window.maximize(presentation?: MaximizePresentation)}、
     * > [setFollowParentWindowLayoutEnabled()]{@link @ohos.window:window.Window.setFollowParentWindowLayoutEnabled}修改窗口
     * > 位置的接口，或通过鼠标/触摸操作对子窗进行拖拽移动、拖拽缩放时将生效。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function detachLayoutToParentWindow cannot work correctly due to limited device capabilities.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: 1. Invalid window type. Only subwindows are supported;
     *     2. Only level-1 subwindows are supported.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     *     Possible cause: The subwindow is not attached to the main window.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    detachLayoutToParentWindow(): Promise<void>;

    /**
     * 设置窗口类型，使用Promise异步回调。
     *
     * @param { WindowType } type - 窗口类型。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType): Promise<void>;

    /**
     * 设置窗口类型，使用callback异步回调。
     *
     * @param { WindowType } type - 窗口类型。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType, callback: AsyncCallback<void>): void;

    /**
     * 设置主窗口模式，使用Promise异步回调。
     *
     * @param { WindowMode } mode - 窗口模式。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowMode(mode: WindowMode): Promise<void>;

    /**
     * 设置主窗口模式，使用callback异步回调。
     *
     * @param { WindowMode } mode - 窗口模式。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowMode(mode: WindowMode, callback: AsyncCallback<void>): void;

    /**
     * 获取当前窗口的属性，使用callback异步回调，返回WindowProperties。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用[getWindowProperties()]{@link window.Window.getWindowProperties}替代。
     *
     * @param { AsyncCallback<WindowProperties> } callback - 回调函数。返回当前窗口属性。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowProperties
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;

    /**
     * 获取窗口在其所在物理屏幕上的真实显示区域，同步接口。
     * 
     * 在某些设备上，窗口显示时可能经过了缩放，此接口可以获取缩放后窗口在屏幕上的真实位置和大小。
     *
     * @returns { Rect } 四元组分别表示距离屏幕左上角的x坐标、距离屏幕左上角的y坐标、缩放后的窗口宽度和缩放后的窗口高度。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Failed to convert result into JS value object.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    getGlobalRect(): Rect;

    /**
     * 获取当前窗口的属性，使用Promise异步回调，返回WindowProperties。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用[getWindowProperties()]{@link window.Window.getWindowProperties}替代。
     *
     * @returns { Promise<WindowProperties> } Promise对象。返回当前窗口属性。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowProperties
     */
    getProperties(): Promise<WindowProperties>;

    /**
     * 获取当前窗口的属性。
     *
     * @returns { WindowProperties } 当前窗口属性。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getWindowProperties(): WindowProperties;

    /**
     * 获取当前窗口所在屏幕的系统显示大小缩放系数、系统默认显示大小缩放系数和自定义显示大小缩放系数信息。
     *
     * @returns { WindowDensityInfo } 当前窗口的显示大小缩放系数信息。当返回值为[-1, -1, -1]时，表示当前设备不支持使用该接口。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getWindowDensityInfo(): WindowDensityInfo;

    /**
     * 判断当前窗口的主窗口是否是跨多块屏幕使用全屏模式显示，使用Promise异步回调，仅支持主窗口与应用子窗口。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前窗口的主窗口跨多块屏幕使用全屏模式显示，返回false表示当前窗口的主窗口未跨多块屏幕使用全屏模式显示。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    isMainWindowFullScreenAcrossDisplays(): Promise<boolean>;

    /**
     * 获取当前窗口内容规避的区域；如系统栏区域、刘海屏区域、手势区域、软键盘区域等与窗口内容重叠时，需要窗口内容避让的区域。
     * 
     * 主窗口/子窗口：
     * 
     * - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下，
     * 仅存在固定态软键盘（[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_KEYBOARD）类型的避让区域。
     * - 主窗口在非自由窗口状态的自由悬浮窗口模式下，仅存在系统栏（[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM）类型的避让区域。
     * - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * 
     * 全局悬浮窗、模态窗或系统窗口：
     * 
     * - 仅在调用[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}方法使能后，才能通过此接口获取计算后的避让区域，否则获取的避让区域
     * 为空。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}替代。
     *
     * @param { AvoidAreaType } type - 表示避让区类型。
     * @param { AsyncCallback<AvoidArea> } callback - 回调函数。返回窗口内容避让区域。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;

    /**
     * 获取当前窗口内容规避的区域；如系统栏区域、刘海屏区域、手势区域、软键盘区域等与窗口内容重叠时，需要窗口内容避让的区域。
     * 
     * 主窗口/子窗口：
     * 
     * - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下，
     * 仅存在固定态软键盘（[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_KEYBOARD）类型的避让区域。
     * - 主窗口在非自由窗口状态的自由悬浮窗口模式下，仅存在系统栏（[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM）类型的避让区域。
     * - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * 
     * 全局悬浮窗、模态窗或系统窗口：
     * 
     * - 仅在调用[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}方法使能后，才能通过此接口获取计算后的避让区域，否则获取的避让区域
     * 为空。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}替代。
     *
     * @param { AvoidAreaType } type - 表示避让区类型。
     * @returns { Promise<AvoidArea> } Promise对象。返回窗口内容避让区域。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * 获取当前应用窗口的避让区域，即使避让区域当前处于不可见状态。
     * 
     * 主窗口/子窗口：
     * 
     * - 主窗口在非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}）下，仅存在系统栏（
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM）类型的避让区域。
     * - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * 
     * 全局悬浮窗、模态窗或系统窗口：
     * 
     * - 仅在调用[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}方法使能后，才能通过此接口获取计算后的避让区域，否则获取的避让区域
     * 为空。
     *
     * @param { AvoidAreaType } type - Type of the area.
     * @returns { AvoidArea } 窗口内容避让区域。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Convert avoid area failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    getWindowAvoidAreaIgnoringVisibility(type: AvoidAreaType): AvoidArea;

    /**
     * 获取当前窗口避让区域。
     * 
     * 主窗口/子窗口：
     * 
     * - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}）下，仅存在固定态软键盘（
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_KEYBOARD）类型的避让区域。
     * - 主窗口在非自由窗口状态的自由悬浮窗口模式下，仅存在系统栏（[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM）类型的避让区域。
     * - 主窗口在其余场景下，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * - 子窗口在非自由窗口状态或非自由悬浮窗口模式下，仅当窗口的位置和大小与主窗口一致时，才能通过此接口获取计算后的避让区域，否则获取的避让区域为空。
     * 
     * 全局悬浮窗、模态窗或系统窗口：
     * 
     * - 仅在调用[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}方法使能后，才能通过此接口获取避让区域，否则获取的避让区域为空。
     * 
     * 该接口一般适用于两种场景：
     * 
     * - 在[onWindowStageCreate()]{@link @ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}方法中，获取应用启动时的初始布局避让区域时可
     * 调用该接口。
     * - 当应用内子窗需要临时显示，对显示内容做布局避让时可调用该接口。
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } 窗口内容避让区域。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Convert avoid area failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getWindowAvoidArea(type: AvoidAreaType): AvoidArea;

    /**
     * 创建全局悬浮窗、模态窗或WindowType窗口类型为系统窗口时，调用该接口使能后才可以通过[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}获取窗口避
     * 让区信息或通过
     * [on('avoidAreaChange')]{@link window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)}监听窗
     * 口避让区变化。
     *
     * @param { boolean } enabled - If true, the system window type can obtain avoid area. If false, the avoid area
     *     obtained by the system window type will always be empty.
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     *     Possible cause: The device does not support the API itself.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only global floating windows, dialog windows,
     *     or Window Type as system windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setSystemAvoidAreaEnabled(enabled: boolean): Promise<void>;

    /**
     * 获取悬浮窗、模态窗或WindowType为系统类型的窗口是否可以获取窗口内容的避让区[AvoidArea]{@link @ohos.window:window.AvoidArea}。
     *
     * @returns { boolean } 是否可以获取窗口内容的避让区。
     *     <br> true表示可以获取避让区；false表示不可以获取避让区。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Create js value failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isSystemAvoidAreaEnabled(): boolean;

    /**
     * 设置当前窗口是否支持获取三键导航类型的避让区域。未调用此接口设置前，系统默认不支持获取三键导航类型的避让区域。使用Promise异步回调。
     * 
     * 调用该接口使能后才可以通过[getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea}获取到
     * [TYPE_FLOAT_NAVIGATION]{@link @ohos.window:window.AvoidAreaType}避让类型对应的避让区域或通过
     * [on('avoidAreaChange')]{@link window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)}监听
     * TYPE_FLOAT_NAVIGATION避让类型对应的避让区域的变化。
     *
     * @param { boolean } enabled - 是否支持获取三键导航类型的避让区域。<br>true表示支持，false表示不支持。</br>
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Create js value failed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setFloatNavigationAvoidAreaEnabled(enabled: boolean): Promise<void>;

    /**
     * 查询当前窗口是否支持获取三键导航类型的避让区域。
     *
     * @returns { boolean } 是否支持获取三键导航类型的避让区域。
     *     <br>true表示支持，false表示不支持。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Create js value failed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isFloatNavigationAvoidAreaEnabled(): boolean;

    /**
     * 设置主窗口或子窗口的布局是否为全屏布局，使用callback异步回调。
     * 
     * 全屏布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。
     * 
     * 非全屏布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议联合使用
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > 和[setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}替代实现全
     * > 屏。
     *
     * @param { boolean } isFullScreen - 是否设为全屏布局（该全屏布局影响状态栏、<!--RP15-->三键导航栏<!--RP15End-->显示）。true表示全屏；false表示非全屏。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置主窗口或子窗口的布局是否为全屏布局，使用Promise异步回调。
     * 
     * 全屏布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。
     * 
     * 非全屏布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议联合使用
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > 和[setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}替代实现全
     * > 屏。
     *
     * @param { boolean } isFullScreen - 是否设为全屏布局（该全屏布局影响状态栏、<!--RP15-->三键导航栏<!--RP15End-->显示）。true表示全屏；false表示非全屏。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * 设置主窗口或子窗口的布局是否为沉浸式布局，使用callback异步回调。
     * 
     * 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。
     * 
     * 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}替代。
     *
     * @param { boolean } isLayoutFullScreen - 窗口的布局是否为沉浸式布局（该沉浸式布局不影响状态栏、<!--RP15-->三键导航栏<!--RP15End-->显示）。true表示沉浸式布局；
     *     false表示非沉浸式布局。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置主窗口或子窗口的布局是否为沉浸式布局，使用Promise异步回调。
     * 
     * 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。
     * 
     * 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}替代。
     *
     * @param { boolean } isLayoutFullScreen - 窗口的布局是否为沉浸式布局（该沉浸式布局不影响状态栏、<!--RP15-->三键导航栏<!--RP15End-->显示）。true表示沉浸式布局；
     *     false表示非沉浸式布局。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * 设置主窗口或子窗口的布局是否为沉浸式布局，使用callback异步回调。系统窗口调用不生效。
     * 
     * 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。
     * 
     * 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 12开始废弃，建议使用Promise方式的
     * > [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}替代。
     *
     * @param { boolean } isLayoutFullScreen - 窗口的布局是否为沉浸式布局（该沉浸式布局状态栏、<!--RP15-->三键导航栏<!--RP15End-->仍然显示）。true表示沉浸式布局；
     *     false表示非沉浸式布局。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置应用主窗口或应用子窗口的布局是否为沉浸式布局，使用Promise异步回调。其余窗口调用不生效也不报错。
     * 
     * 沉浸式布局生效时，布局不避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件可能产生与其重叠的情况。
     * 
     * 非沉浸式布局生效时，布局避让状态栏与<!--RP15-->三键导航栏<!--RP15End-->，组件不会与其重叠。
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * <!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用callback异步回调。
     * 
     * 从API version 12开始，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End-->
     * 
     * 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > 替代。
     *
     * @param { Array<'status' | 'navigation'> } names - 设置窗口全屏模式时状态栏和<!--RP15-->三键导航栏<!--RP15End-->是否显示。<br>例如，需全部显示，该参
     *     数设置为['status','navigation']；设置为[]，则不显示。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * <!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用Promise异步回调。
     * 
     * 从API version 12开始，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End-->
     * 
     * 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > 替代。
     *
     * @param { Array<'status' | 'navigation'> } names - 设置窗口全屏模式时状态栏和<!--RP15-->三键导航栏<!--RP15End-->是否显示。<br>例如，需全部显示，该参
     *     数设置为['status','navigation']；设置为[]，则不显示。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;

    /**
     * <!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用callback异步回调。
     * 
     * 从API version 12开始，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End-->
     * 
     * 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 12开始废弃，建议使用Promise方式的
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > 替代。
     *
     * @param { Array<'status' | 'navigation'> } names - 设置窗口全屏模式时状态栏和<!--RP15-->三键导航栏<!--RP15End-->是否显示。<br>例如，需全部显示，该参
     *     数设置为['status','navigation']；设置为[]，则不显示。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setWindowSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * <!--RP14-->设置主窗口状态栏、三键导航栏的可见模式，状态栏通过status控制、三键导航栏通过navigation控制<!--RP14End-->，使用Promise异步回调。
     * 
     * 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;
     *     2.Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowSystemBarEnable(names: Array<'status'|'navigation'>): Promise<void>;

    /**
     * 设置主窗口状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏，使用Promise异步回调。
     * 
     * 调用生效后返回并不表示状态栏、<!--RP15-->三键导航栏<!--RP15End-->的显示或隐藏已完成。子窗口调用后不生效。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。
     *
     * @param {SpecificSystemBar} name - the set of system bar
     * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
     * @param {boolean} enableAnimation - Whether using animation during this setting,
     *     using animation if true or not using animation if false. [since 12]
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws {BusinessError} 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    setSpecificSystemBarEnabled(name: SpecificSystemBar, enable: boolean, enableAnimation?: boolean): Promise<void>;

    /**
     * 设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用callback异步回调，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End-->
     * 
     * 子窗口调用后不生效。非全屏模式（悬浮窗、分屏等场景）下配置不生效。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowSystemBarProperties()]{@link window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)}
     * > 替代。
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * 设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用Promise异步回调，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End-->
     * 
     * 子窗口调用后不生效。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowSystemBarProperties()]{@link window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)}
     * > 替代。
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * 设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用callback异步回调，<!--RP5-->该接口在2in1设备上调用不生效。<!--RP5End-->
     * 
     * 子窗口调用后不生效。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 12开始废弃，建议使用Promise方式的
     * > [setWindowSystemBarProperties()]{@link window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)}
     * > 替代。
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamiconly
     * @deprecated since 12
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * 设置主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性，使用Promise异步回调。
     * 
     * 子窗口调用后不生效。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * 获取主窗口<!--Del-->三键导航栏、<!--DelEnd-->状态栏的属性。
     *
     * @returns { SystemBarProperties } 当前<!--Del-->三键导航栏、<!--DelEnd-->状态栏属性。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Create js object failed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowSystemBarProperties(): SystemBarProperties;

    /**
     * 设置主窗口状态栏的文字颜色，使用Promise异步回调。
     * 
     * 子窗口不支持设置状态栏文字颜色，调用无效果。主窗口在非全屏/最大化模式（悬浮窗、分屏等场景）下配置不生效，进入全屏/最大化模式后配置生效。
     *
     * @param { ColorMetrics } color - 要设置的状态栏颜色值。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported on this device.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setStatusBarColor(color: ColorMetrics): Promise<void>;

    /**
     * 获取主窗口状态栏的属性，如状态栏文字颜色。
     * 
     * 子窗口不支持查询，调用会返回错误码1300004。
     *
     * @returns { StatusBarProperty } 当前状态栏属性，如状态栏颜色。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getStatusBarProperty(): StatusBarProperty;

    /**
     * 获取设备形态，仅测试使用
     *
     * @returns { Promise<string> } Promise used to return the window state snapshot.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the api due to limited device
     *     capabilities. Possible cause: The device does not support the api itself.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed;
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: The internal services of the window are not started normally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @stagemodelonly
     * @since 23 dynamic&static
     * @test
     */
    getWindowStateSnapshot(): Promise<string>;

    /**
     * 设置当前窗口是否启用手势侧滑返回功能，仅主窗可以调用成功，其他类型的窗口调用返回1300004错误码。
     * 
     * 开启此功能后，仅当窗口处于全屏模式且位于前台获焦状态下才会生效。
     * 
     * 禁用此功能后，当前应用会禁用手势热区，侧滑返回功能失效；切换到其他应用或者回到桌面后，手势热区恢复，侧滑返回功能正常。
     *
     * @param { boolean } enabled - true时开启返回手势功能，false时禁用返回手势功能。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    setGestureBackEnabled(enabled: boolean): Promise<void>;

    /**
     * 获取当前窗口是否启用返回手势功能，仅主窗可以调用成功，其他类型的窗口调用返回1300004错误码。
     *
     * @returns { boolean } 是否已经启用返回手势。true表示已启用返回手势功能，false表示已禁用返回手势功能。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 13 dynamic
     * @since 23 static
     */
    isGestureBackEnabled(): boolean;

    /**
     * 设置主窗口的显示方向属性，使用Promise异步回调。非主窗口调用后不生效不报错。
     *
     * @param { Orientation } orientation - 窗口显示方向的属性。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Failed to convert parameter to Orientation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setPreferredOrientation(orientation: Orientation): Promise<void>;

    /**
     * 开启窗口旋转变化的监听。[RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}中窗口旋转事件类型为窗口即将旋转时，必须返回
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}。窗口旋转事件类型为窗口旋转结束时返回
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}不生效。
     * 
     * 该函数只允许在主线程注册。同一个窗口多次注册同类型回调函数，只生效最新注册的同类型回调函数返回值。系统提供了超时保护机制，若20ms内窗口未返回
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}，系统不处理该返回值。
     *
     * @param { 'rotationChange' } type - 监听事件，固定为'rotationChange'，即窗口旋转变化事件。
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } callback - 回调函数。返回窗口旋转信息
     *     [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}，应用返回当前窗口变化结果
     *     [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     */
    on(type: 'rotationChange', callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;

    /**
     * Register the callback of rotation change
     *
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined> } callback -
          *     Register the callback function.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onRotationChange(callback: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>): void;

    /**
     * 关闭窗口旋转变化的监听。
     *
     * @param { 'rotationChange' } type - 监听事件，固定为'rotationChange'，即窗口旋转变化事件。
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } [callback] - 回调函数。如果传入参数，则关闭该监
     *     听。如果未传入参数，则关闭该窗口的所有监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     */
    off(type: 'rotationChange', 
       callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void>): void;

    /**
     * Unregister the callback of rotation change
     *
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined> } [callback] -
          *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offRotationChange(callback?: RotationChangeCallback<RotationChangeInfo, RotationChangeResult | undefined>):
      void;

    /**
     * 开启窗口内uiExtension安全限制变化事件的监听, 建议在窗口创建后立即监听。
     *
     * @param { 'uiExtensionSecureLimitChange' } eventType - 监听事件，固定为'uiExtensionSecureLimitChange'，即窗口内uiExtension安全限制变
     *     化事件。
     * @param { Callback<boolean> } callback - 回调函数。当窗口内uiExtension安全限制变化时触发回调。当返回参数为true表示窗口内uiExtension开启了隐藏不安全窗口；当返回参
     *     数为false表示窗口内uiExtension关闭了隐藏不安全窗口。若窗口内存在多个uiExtension，当返回参数为true表示窗口内至少一个uiExtension开启了隐藏不安全窗口；当返回参数为false表示窗
     *     口内所有uiExtension关闭了隐藏不安全窗口。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(eventType: 'uiExtensionSecureLimitChange', callback: Callback<boolean>): void;

    /**
     * UIExtension in window secure limit change callback on.
     *
     * @param { Callback<boolean> } callback
          *     Callback used to return the result whether the APP has uiextension secure limit.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function on('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onUiExtensionSecureLimitChange(callback: Callback<boolean>): void;

    /**
     * 关闭窗口内uiextension安全限制变化事件的监听。
     *
     * @param { 'uiExtensionSecureLimitChange' } eventType - 监听事件，固定为'uiExtensionSecureLimitChange'，即窗口内uiExtension安全限制变
     *     化事件。
     * @param { Callback<boolean> } callback - 回调函数。若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口安全限制变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(eventType: 'uiExtensionSecureLimitChange', callback?: Callback<boolean>): void;

    /**
     * UIExtension in window secure limit change callback off.
     *
     * @param { Callback<boolean> } [callback] Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function off('uiExtensionSecureLimitChange') can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offUiExtensionSecureLimitChange(callback?: Callback<boolean>): void;

    /**
     * 开启窗口帧率指标变化事件的监听。该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     * 
     * 应用注册帧率变化监听后，只有当客户端UI内容发生重绘时（如页面切换、和可响应组件交互、设置背景色和透明度等），才会触发注册的回调。但当同时使用该接口和
     * [postFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postframecallback12)、
     * [postDelayedFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postdelayedframecallback12)
     * 、
     * [displaySync.on('frame')]{@link @ohos.graphics.displaySync:displaySync.DisplaySync.on(type: 'frame', callback: Callback<IntervalInfo>)}
     * 中的任意一个时，即使无UI内容重绘，也可能触发回调。
     *
     * @param { 'frameMetricsMeasured' } type - 监听事件类型，固定为'frameMetricsMeasured'，即窗口帧率指标变化事件。
     * @param { Callback<FrameMetrics> } callback - 窗口帧率指标变化时的回调函数。详情见帧率指标
     *     [FrameMetrics]{@link @ohos.window:window.FrameMetrics}。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void;

    /**
     * 开启窗口帧率指标变化事件的监听。该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     * 
     * 应用注册帧率变化监听后，只有当客户端UI内容发生重绘时（如页面切换、和可响应组件交互、设置背景色和透明度等），才会触发注册的回调。但当同时使用该接口和
     * [postFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postframecallback12)、
     * [postDelayedFrameCallback](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#postdelayedframecallback12)
     * 、
     * [displaySync.on('frame')]{@link @ohos.graphics.displaySync:displaySync.DisplaySync.on(type: 'frame', callback: Callback<IntervalInfo>)}
     * 中的任意一个时，即使无UI内容重绘，也可能触发回调。
     *
     * @param { Callback<FrameMetrics> } callback - 窗口帧率指标变化时的回调函数。详情见帧率指标
     *     [FrameMetrics]{@link @ohos.window:window.FrameMetrics}。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void;

    /**
     * 关闭窗口帧率指标变化事件的监听。该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { 'frameMetricsMeasured' } type - 监听事件类型，固定为'frameMetricsMeasured'，即窗口帧率指标变化事件。
     * @param { Callback<FrameMetrics> } [callback] - 若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口帧率指标变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void;

    /**
     * 关闭窗口帧率指标变化事件的监听。该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { Callback<FrameMetrics> } [callback] - 若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口帧率指标变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void;

    /**
     * 开启窗口可见性状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景：
     * 
     * - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}和
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是
     * 完全可见，但实际返回的是部分可见。
     * - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。
     * - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。
     *
     * @param { 'occlusionStateChanged' } type - 监听事件，固定为'occlusionStateChanged'，即窗口可见性变化事件。
     * @param { Callback<OcclusionState> } callback - 窗口可见性变化时的回调函数。详情见[可见性状态]{@link @ohos.window:window.OcclusionState}
     *     。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void;

    /**
     * 开启窗口可见性状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景：
     * 
     * - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}和
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是
     * 完全可见，但实际返回的是部分可见。
     * - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。
     * - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。
     *
     * @param { Callback<OcclusionState> } callback - 窗口可见性变化时的回调函数。详情见[可见性状态]{@link @ohos.window:window.OcclusionState}
     *     。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onOcclusionStateChanged(callback: Callback<OcclusionState>): void;

    /**
     * 关闭窗口可见性状态变化事件的监听。
     *
     * @param { 'occlusionStateChanged' } type - 监听事件，固定为'occlusionStateChanged'，即窗口可见性变化事件。
     * @param { Callback<OcclusionState> } [callback] - 若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口可见性变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void;

    /**
     * 关闭窗口可见性状态变化事件的监听。
     *
     * @param { Callback<OcclusionState> } [callback] - 若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口可见性变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offOcclusionStateChanged(callback?: Callback<OcclusionState>): void;

    /**
     * 设置主窗口的显示方向属性，使用callback异步回调。相关横竖屏开发实践查询
     * [横竖屏切换](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-landscape-and-portrait-development)。非主窗口
     * 调用后不生效不报错。
     *
     * @param { Orientation } orientation - 窗口显示方向的属性。
     * @param { AsyncCallback<void> } callback - 回调函数。该回调函数返回调用结果是否成功，非应用旋转动效结束。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Failed to convert parameter to Orientation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;

    /**
     * 设置主窗口的显示方向属性，通过Promise异步返回显示方向的执行结果。非主窗口调用后不生效，OrientationResult返回window.
     * [OrientationExecutionResult]{@link @ohos.window:window.OrientationExecutionResult}.ORIENTATION_IGNORED。
     *
     * @param { Orientation } orientation - 窗口显示方向的属性。
     * @returns { Promise<OrientationResult> } Promise对象。设置窗口显示方向的执行结果。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *                                          1. The window is not created or destroyed;
     *                                          2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    setPreferredOrientationWithResult(orientation: Orientation): Promise<OrientationResult>;

    /**
     * 获取窗口的显示方向属性。未指定方向时，返回window.Orientation.UNSPECIFIED。
     *
     * @returns { Orientation } 窗口显示方向的属性。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getPreferredOrientation(): Orientation;

    /**
     * 根据当前工程中指定的页面路径为窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用callback异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。
     * @param { LocalStorage } storage - 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * 根据当前工程中指定的页面路径为窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用Promise异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。
     * @param { LocalStorage } storage - 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * 为当前窗口加载具体页面内容，使用callback异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，多次调用该接口会先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}替代。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对
     *     路径写法，需与main_pages.json或config.json中的src取值保持一致。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setUIContent(path: string, callback: AsyncCallback<void>)
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * 为当前窗口加载具体页面内容，使用Promise异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，多次调用该接口会先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[setUIContent()]{@link window.Window.setUIContent(path: string)}替代。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对
     *     路径写法，需与main_pages.json或config.json中的src取值保持一致。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setUIContent(path: string)
     */
    loadContent(path: string): Promise<void>;

    /**
     * 获取UIContext实例。
     *
     * @returns { UIContext } 返回UIContext实例对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getUIContext() : UIContext;

    /**
     * 根据当前工程中指定的某个页面路径为窗口加载具体页面内容，使用callback异步回调。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对路径写法，需与main_pages.json或config.json中的src取值保持一致。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setUIContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * 根据当前工程中指定的某个页面路径为窗口加载具体页面内容，使用Promise异步回调。
     *
     * @param { string } path - 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对路径写法，需与main_pages.json或config.json中的src取值保持一致。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setUIContent(path: string): Promise<void>;

    /**
     * 根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，通过LocalStorage传递状态属性至加载页面，使用callback异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } name - 命名路由页面的名称。
     * @param { LocalStorage } storage - 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * 根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，使用callback异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } name - 命名路由页面的名称。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * 根据指定路由页面名称为当前窗口加载[命名路由](docroot://ui/arkts-routing.md#命名路由)页面，通过LocalStorage传递状态属性至加载页面，使用Promise异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } name - 命名路由页面的名称。
     * @param { LocalStorage } storage - 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性，默认值为空。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * 判断当前窗口是否已显示，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[isWindowShowing()]{@link window.Window.isWindowShowing}替代。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前窗口已显示，返回false表示当前窗口未显示。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowShowing
     */
    isShowing(callback: AsyncCallback<boolean>): void;

    /**
     * 判断当前窗口是否已显示，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用[isWindowShowing()]{@link window.Window.isWindowShowing}替代。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前窗口已显示，返回false表示当前窗口未显示。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowShowing
     */
    isShowing(): Promise<boolean>;

    /**
     * 判断当前窗口是否已显示。
     *
     * @returns { boolean } 当前窗口是否已显示。true表示当前窗口已显示，false则表示当前窗口未显示。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    isWindowShowing(): boolean;

    /**
     * 开启窗口尺寸变化的监听。仅在主线程调用。
     *
     * @param { 'windowSizeChange' } type - 监听事件，固定为'windowSizeChange'，即窗口尺寸变化事件。
     * @param { Callback<Size> } callback - 回调函数。返回当前的窗口尺寸。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    on(type: 'windowSizeChange', callback: Callback<Size>): void;

    /**
     * 开启窗口尺寸变化的监听。仅在主线程调用。
     *
     * @param { Callback<Size> } callback - 回调函数。返回当前的窗口尺寸。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onWindowSizeChange(callback: Callback<Size>): void;

    /**
     * 关闭窗口尺寸变化的监听。仅在主线程调用。
     *
     * @param { 'windowSizeChange' } type - 监听事件，固定为'windowSizeChange'，即窗口尺寸变化事件。
     * @param { Callback<Size> } [callback] - 回调函数。返回当前的窗口尺寸。如果传入参数，则关闭该监听。
     *     如果未传入参数，则关闭窗口尺寸变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * 关闭窗口尺寸变化的监听。仅在主线程调用。
     *
     * @param { Callback<Size> } [callback] - 回调函数。返回当前的窗口尺寸。如果传入参数，则关闭该监听。
     *     如果未传入参数，则关闭窗口尺寸变化的监听。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowSizeChange(callback?: Callback<Size>): void;

    /**
     * 开启当前窗口系统避让区变化的监听。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [on('avoidAreaChange')]{@link window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)}替
     * > 代。
     *
     * @param { 'systemAvoidAreaChange' } type - 监听事件，固定为'systemAvoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<AvoidArea> } callback - 回调函数。返回当前避让区。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * 关闭当前窗口系统避让区变化的监听。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [off('avoidAreaChange')]{@link window.Window.off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>)}
     * > 替代。
     *
     * @param { 'systemAvoidAreaChange' } type - 监听事件，固定为'systemAvoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<AvoidArea> } callback - 回调函数。返回当前避让区。若传入参数，则关闭该监听。若未传入参数，则关闭所有系统避让区变化的监听。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>)
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;

    /**
     * 开启当前应用窗口系统避让区域变化的监听。
     * 
     * 主窗口/子窗口：
     * 
     * - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}）下触发回调时，仅存在固定态软键盘（
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_KEYBOARD）类型的避让区域。
     * - 主窗口在非自由窗口状态的自由悬浮窗口模式下触发回调时，仅存在系统栏（[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM）类型的避让区域。
     * - 主窗口在其余场景下触发回调时，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能返回计算后的避让区域，否则直接返回空的避让区域。
     * - 子窗口在非自由窗口状态或非自由悬浮窗口模式下触发回调时，仅当子窗口的位置和大小与主窗口一致时，才能返回计算后的子窗口避让区域，否则直接返回空的避让区域。
     * 
     * 全局悬浮窗、模态窗或系统窗口：
     * 
     * - 仅在调用[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}方法使能后，触发回调时才能返回计算后的避让区域，否则直接返回空的避
     * 让区域。
     * 
     * <!--RP7-->常见的触发避让区回调的场景如下：应用窗口在全屏模式、悬浮模式、分屏模式之间的切换；应用窗口旋转；可折叠设备在屏幕折叠状态发生变化；应用窗口在多设备之间的流转。<!--RP7End-->
     *
     * @param { 'avoidAreaChange' } type - 监听事件，固定为'avoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - 回调函数。返回当前避让区以及避让区类型。 [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>): void;

    /**
     * 开启当前应用窗口系统避让区域变化的监听。
     * 
     * 主窗口/子窗口：
     * 
     * - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的自由悬浮窗口模式（即窗口模式为
     * [window.WindowStatusType.FLOATING]{@link @ohos.window:window.WindowStatusType}）下触发回调时，仅存在固定态软键盘（
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_KEYBOARD）类型的避让区域。
     * - 主窗口在非自由窗口状态的自由悬浮窗口模式下触发回调时，仅存在系统栏（[AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}为TYPE_SYSTEM）类型的避让区域。
     * - 主窗口在其余场景下触发回调时，仅当在非自由悬浮窗口模式下或设备类型为Phone和Tablet，才能返回计算后的避让区域，否则直接返回空的避让区域。
     * - 子窗口在非自由窗口状态或非自由悬浮窗口模式下触发回调时，仅当子窗口的位置和大小与主窗口一致时，才能返回计算后的子窗口避让区域，否则直接返回空的避让区域。
     * 
     * 全局悬浮窗、模态窗或系统窗口：
     * 
     * - 仅在调用[setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled}方法使能后，触发回调时才能返回计算后的避让区域，否则直接返回空的避
     * 让区域。
     * 
     * <!--RP7-->常见的触发避让区回调的场景如下：应用窗口在全屏模式、悬浮模式、分屏模式之间的切换；应用窗口旋转；可折叠设备在屏幕折叠状态发生变化；应用窗口在多设备之间的流转。<!--RP7End-->
     *
     * @param { Callback<AvoidAreaOptions> } callback - 回调函数。返回当前避让区以及避让区类型。 [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void;

    /**
     * 关闭当前窗口系统避让区变化的监听。
     *
     * @param { 'avoidAreaChange' } type - 监听事件，固定为'avoidAreaChange'，即系统避让区变化事件。
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - 回调函数。返回当前避让区以及避让区类型。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听
     *     。 [since 12 - 19]
     * @param { Callback<AvoidAreaOptions> } [callback] - 回调函数。返回当前避让区以及避让区类型。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听
     *     。 [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void;

    /**
     * 关闭当前窗口系统避让区变化的监听。
     *
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - 回调函数。返回当前避让区以及避让区类型。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听
     *     。 [since 12 - 19]
     * @param { Callback<AvoidAreaOptions> } [callback] - 回调函数。返回当前避让区以及避让区类型。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有系统避让区变化的监听
     *     。 [since 20]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void;

    /**
     * 开启固定态软键盘高度变化的监听。当软键盘从本窗口唤出且与窗口有重叠区域时，通知键盘高度变化。从API version 10开始，有关将软键盘设置为固定态或悬浮态的方法，请参见
     * [输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardHeightChange' } type - 监听事件，固定为'keyboardHeightChange'，即键盘高度变化事件。
     * @param { Callback<int> } callback - 回调函数。返回当前的键盘高度。返回值为整数，单位为px。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    on(type: 'keyboardHeightChange', callback: Callback<int>): void;

    /**
     * Register the callback of keyboard height change
     *
     * @param { Callback<int> } callback - Callback used to return the current keyboard height,
     *     which is an integer, in px.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onKeyboardHeightChange(callback: Callback<int>): void;

    /**
     * 关闭固定态软键盘高度变化的监听，使应用程序不再接收键盘高度变化的通知。从API version 10开始，有关将软键盘设置为固定态或悬浮态的方法，请参见
     * [输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardHeightChange' } type - 监听事件，固定为'keyboardHeightChange'，即键盘高度变化事件。
     * @param { Callback<int> } [callback] - 回调函数。返回当前的键盘高度，返回值为整数，单位为px。若传入参数，则关闭该监听；未传入参数，则关闭所有固定态软键盘高度变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    off(type: 'keyboardHeightChange', callback?: Callback<int>): void;

    /**
     * 解注册键盘高度监听
     *
     * @param { Callback<int> } [callback] - 监听用于返回当前键盘高度，单位为px。如果没有提供该监听，则解注册所有键盘高度监听。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offKeyboardHeightChange(callback?: Callback<int>): void;

    /**
     * 开启固定态软键盘即将开始显示的监听。此监听在固定态软键盘即将开始显示或软键盘由悬浮态切换为固定态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上
     * 获焦窗口，而不是虚拟屏上应用窗口。
     * 
     * 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardWillShow' } type - 监听事件，固定为'keyboardWillShow'，即固定态软键盘即将开始显示的事件。
     * @param { Callback<KeyboardInfo> } callback - 回调函数。返回软键盘窗口信息。
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillShow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'keyboardWillShow', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard will show
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard show animation start.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardWillShow(callback: Callback<KeyboardInfo>): void;

    /**
     * 关闭固定态软键盘即将开始显示的监听。改变输入法窗口为固定态或者悬浮态方法详细介绍请参见
     * [输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardWillShow' } type - 监听事件，固定为'keyboardWillShow'，即固定态软键盘即将开始显示的事件。
     * @param { Callback<KeyboardInfo> } [callback] - 回调函数。返回软键盘窗口信息。若传入参数，则关闭该监听。如果未传入参数，则关闭所有固定态软键盘即将开始显示的监听。
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardWillShow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'keyboardWillShow', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will show
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardWillShow(callback?: Callback<KeyboardInfo>): void;

    /**
     * 开启固定态软键盘显示动画完成的监听。此监听在固定态软键盘显示动画完成或软键盘由悬浮态切换至固定态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上
     * 获焦窗口，而不是虚拟屏上应用窗口。
     * 
     * 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardDidShow' } type - 监听事件，固定为'keyboardDidShow'，即固定态软键盘显示动画完成事件。
     * @param { Callback<KeyboardInfo> } callback - 回调函数。返回软键盘窗口信息。
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidShow can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'keyboardDidShow', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard did show
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard show animation is completed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardDidShow(callback: Callback<KeyboardInfo>): void;

    /**
     * 关闭固定态软键盘显示动画完成的监听。改变输入法窗口为固定态或者悬浮态方法详细介绍请参见
     * [输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardDidShow' } type - 监听事件，固定为'keyboardDidShow'，即固定态软键盘显示动画完成事件。
     * @param { Callback<KeyboardInfo> } [callback] - 回调函数。返回软键盘窗口信息。若传入参数，则关闭该监听。如果未传入参数，则关闭所有固定态软键盘显示动画完成的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'keyboardDidShow', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard did show
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidShow can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardDidShow(callback?: Callback<KeyboardInfo>): void;

    /**
     * 开启固定态软键盘即将开始隐藏的监听。此监听在固定态软键盘即将开始隐藏或软键盘由固定态切换为悬浮态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上
     * 获焦窗口，而不是虚拟屏上应用窗口。
     * 
     * 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardWillHide' } type - 监听事件，固定为'keyboardWillHide'，即固定态软键盘即将开始隐藏的事件。
     * @param { Callback<KeyboardInfo> } callback - 回调函数。返回软键盘窗口信息。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    on(type: 'keyboardWillHide', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard will hide
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked before the keyboard hide animation start.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardWillHide(callback: Callback<KeyboardInfo>): void;

    /**
     * 关闭固定态软键盘即将开始隐藏的监听。改变输入法窗口为固定态切换至悬浮态方法详细介绍请参见
     * [输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardWillHide' } type - 监听事件，固定为'keyboardWillHide'，即固定态软键盘即将开始隐藏的事件。
     * @param { Callback<KeyboardInfo> } [callback] - 回调函数。返回软键盘窗口信息。若传入参数，则关闭该监听。如果未传入参数，则关闭所有固定态软键盘即将开始隐藏的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     */
    off(type: 'keyboardWillHide', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard will hide
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardWillHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardWillHide(callback?: Callback<KeyboardInfo>): void;

    /**
     * 开启固定态软键盘隐藏动画完成的监听。此监听在固定态软键盘隐藏动画完成或软键盘由固定态切换至悬浮态时触发，此监听仅对当前拉起或隐藏固定态软键盘的应用窗口生效。对于虚拟屏上应用拉起输入法键盘到主屏上，输入法键盘显隐通知只会给主屏上
     * 获焦窗口，而不是虚拟屏上应用窗口。
     * 
     * 改变软键盘为固定态或者悬浮态方法详细介绍请参见[输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardDidHide' } type - 监听事件，固定为'keyboardDidHide'，即固定态软键盘隐藏动画完成事件。
     * @param { Callback<KeyboardInfo> } callback - 回调函数。返回软键盘窗口信息。
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    on(type: 'keyboardDidHide', callback: Callback<KeyboardInfo>): void;

    /**
     * Register the callback of keyboard did hide
     *
     * @param { Callback<KeyboardInfo> } callback - Callback invoked when the keyboard hide animation is completed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onKeyboardDidHide(callback: Callback<KeyboardInfo>): void;

    /**
     * 关闭固定态软键盘隐藏动画完成的监听。改变输入法窗口为固定态切换至悬浮态方法详细介绍请参见
     * [输入法服务]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}。
     *
     * @param { 'keyboardDidHide' } type - 监听事件，固定为'keyboardDidHide'，即固定态软键盘隐藏动画完成事件。
     * @param { Callback<KeyboardInfo> } [callback] - 回调函数。返回软键盘窗口信息。若传入参数，则关闭该监听。如果未传入参数，则关闭所有固定态软键盘隐藏动画完成的监听。
     * @throws { BusinessError } 801 - Capability not supported. Function keyboardDidHide can not work correctly due to
     *     limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     */
    off(type: 'keyboardDidHide', callback?: Callback<KeyboardInfo>): void;

    /**
     * Unregister the callback of keyboard did hide
     *
     * @param { Callback<KeyboardInfo> } [callback] - Unregister the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function keyboardDidHide can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offKeyboardDidHide(callback?: Callback<KeyboardInfo>): void;

    /**
     * 开启本窗口区域范围外的点击事件的监听。
     *
     * @param { 'touchOutside' } type - 监听事件，固定为'touchOutside'，即本窗口范围外的点击事件。
     * @param { Callback<void> } callback - 回调函数。当点击事件发生在本窗口范围之外的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     */
    on(type: 'touchOutside', callback: Callback<void>): void;

    /**
     * Subscribes to the touch event outside this window.
     *
     * @param { Callback<void> } callback - Callback used to return the click event outside this window.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onTouchOutside(callback: Callback<void>): void;

    /**
     * 关闭本窗口区域范围外的点击事件的监听。
     *
     * @param { 'touchOutside' } type - 监听事件，固定为'touchOutside'，即本窗口范围外的点击事件。
     * @param { Callback<void> } callback - 回调函数。当点击事件发生在本窗口范围之外的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口区域范围外的点击事件的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 11 dynamic
     */
    off(type: 'touchOutside', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the touch event outside this window.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offTouchOutside(callback?: Callback<void>): void;

    /**
     * 开启本窗口所处屏幕变化事件的监听。比如，当前窗口移动到其他屏幕时，可以从此接口监听到这个行为。
     *
     * @param { 'displayIdChange' } type - 监听事件，固定为'displayIdChange'，即本窗口所处屏幕变化的事件。
     * @param { Callback<long> } callback - 回调函数。当本窗口所处屏幕发生变化后的回调。回调函数返回number类型参数，表示窗口所处屏幕的displayId。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     */
    on(type: 'displayIdChange', callback: Callback<long>): void;

    /**
     * 开启本窗口所处屏幕变化事件的监听。比如，当前窗口移动到其他屏幕时，可以从此接口监听到这个行为。
     *
     * @param { Callback<long> } callback - 回调函数。当本窗口所处屏幕发生变化后的回调。回调函数返回number类型参数，表示窗口所处屏幕的displayId。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onDisplayIdChange(callback: Callback<long>): void;

    /**
     * 关闭本窗口所处屏幕变化事件的监听。
     *
     * @param { 'displayIdChange' } type - 监听事件，固定为'displayIdChange'，即本窗口所处屏幕变化的事件。
     * @param { Callback<long> } [callback] - 回调函数。当本窗口所处屏幕发生变化时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口所处屏幕变化事件的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     */
    off(type: 'displayIdChange', callback?: Callback<long>): void;

    /**
     * 关闭本窗口所处屏幕变化事件的监听。
     *
     * @param { Callback<long> } [callback] - 回调函数。当本窗口所处屏幕发生变化时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口所处屏幕变化事件的回调。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offDisplayIdChange(callback?: Callback<long>): void;

    /**
     * 开启本窗口可见状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景：
     * 
     * - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}和
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是
     * 完全可见，但实际返回的是部分可见。
     * - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。
     * - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。
     *
     * @param { 'windowVisibilityChange' } type - 监听事件，固定为'windowVisibilityChange'，即本窗口可见状态变化的事件。
     * @param { Callback<boolean> } callback - 回调函数。当本窗口可见状态发生变化后的回调。回调函数返回boolean类型参数，当返回参数为true时表示窗口可见，否则表示窗口不可见。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'windowVisibilityChange', callback: Callback<boolean>): void;

    /**
     * 开启本窗口可见状态变化事件的监听。本接口返回的可见性与肉眼所见的可见性可能存在区别，如以下场景：
     * 
     * - 非主窗口的阴影区域（可分别通过[setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled}和
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius}设置是否显示阴影以及对应的阴影半径）被挡住也算遮挡，此时肉眼所见虽是
     * 完全可见，但实际返回的是部分可见。
     * - 上层窗口带有透明效果时（包括完全不透明之外的所有透明程度）不会遮挡下层窗口，此时下层窗口是可见的。
     * - 大多数处于动画效果下的窗口也不会遮挡住下层窗口，比如在手机设备上拖动悬浮窗时返回的下层窗口依然是可见的。
     *
     * @param { Callback<boolean> } callback - 回调函数。当本窗口可见状态发生变化后的回调。回调函数返回boolean类型参数，当返回参数为true时表示窗口可见，否则表示窗口不可见。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowVisibilityChange(callback: Callback<boolean>): void;

    /**
     * 关闭本窗口可见状态变化事件的监听。
     *
     * @param { 'windowVisibilityChange' } type - 监听事件，固定为'windowVisibilityChange'，即本窗口可见状态变化的事件。
     * @param { Callback<boolean> } callback - 回调函数。当本窗口可见状态发生变化时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口可见状态变化事件的回调
     *     。 [since 11 - 11]
     * @param { Callback<boolean> } [callback] - 回调函数。当本窗口可见状态发生变化时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口可见状态变化事件的回调
     *     。 [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'windowVisibilityChange', callback?: Callback<boolean>): void;

    /**
     * 关闭本窗口可见状态变化事件的监听。
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the visibility status of the window. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 11 - 11]
     * @param { Callback<boolean> } [callback] - 回调函数。当本窗口可见状态发生变化时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口可见状态变化事件的回调
     *     。 [since 12]
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowVisibilityChange(callback?: Callback<boolean>): void;

    /**
     * 开启本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。比如，当调整窗口所处屏幕的显示大小缩放系数时，可以从此接口监听到这个行为。
     * 
     * 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。
     *
     * @param { 'systemDensityChange' } type - 监听事件，固定为'systemDensityChange'，即本窗口所处屏幕的系统显示大小缩放系数变化的事件。
     * @param { Callback<double> } callback - 回调函数。当本窗口所处屏幕的系统显示大小缩放系数发生变化后的回调。回调函数返回number类型参数，表示当前窗口所处屏幕的系统显示大小缩放系数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'systemDensityChange', callback: Callback<double>): void;

    /**
     * 开启本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。比如，当调整窗口所处屏幕的显示大小缩放系数时，可以从此接口监听到这个行为。
     * 
     * 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。
     *
     * @param { Callback<double> } callback - 回调函数。当本窗口所处屏幕的系统显示大小缩放系数发生变化后的回调。回调函数返回number类型参数，表示当前窗口所处屏幕的系统显示大小缩放系数。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSystemDensityChange(callback: Callback<double>): void;

    /**
     * 关闭本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。
     * 
     * 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。
     *
     * @param { 'systemDensityChange' } type - 监听事件，固定为'systemDensityChange'，即本窗口所处屏幕的系统显示大小缩放系数变化的事件。
     * @param { Callback<double> } [callback] - 回调函数。当本窗口所处屏幕的系统显示大小缩放系数发生变化后的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口所处屏幕的系统显示
     *     大小缩放系数变化事件的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'systemDensityChange', callback?: Callback<double>): void;

    /**
     * 关闭本窗口所处屏幕的系统显示大小缩放系数变化事件的监听。
     * 
     * 在接口回调函数中，建议直接使用返回值进行vp和px的转换。例如，若返回值为density，计算px可使用vp * density = px。
     *
     * @param { Callback<double> } [callback] - 回调函数。当本窗口所处屏幕的系统显示大小缩放系数发生变化后的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口所处屏幕的系统显示
     *     大小缩放系数变化事件的回调。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSystemDensityChange(callback?: Callback<double>): void;

    /**
     * 监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - 监听事件，固定为'mainWindowFullScreenAcrossDisplaysChanged'
     *     ，即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化。
     * @param { Callback<boolean> } callback - 回调函数。即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化回调。true表示主窗口进入跨多块屏幕使用全屏模式显示状态，false表示主窗口退出
     *     跨多块屏幕使用全屏模式显示状态。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    on(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback: Callback<boolean>): void;

    /**
     * 监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。
     *
     * @param { Callback<boolean> } callback - 回调函数。即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化回调。true表示主窗口进入跨多块屏幕使用全屏模式显示状态，false表示主窗口退出
     *     跨多块屏幕使用全屏模式显示状态。
     * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onMainWindowFullScreenAcrossDisplaysChanged(callback: Callback<boolean>): void;

    /**
     * 取消监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - 监听事件，固定为'mainWindowFullScreenAcrossDisplaysChanged'
     *     ，即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化。
     * @param { Callback<boolean> } [callback] - 回调函数。即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口的主窗口跨多块
     *     屏幕使用全屏模式显示的状态变化回调。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     */
    off(type: 'mainWindowFullScreenAcrossDisplaysChanged', callback?: Callback<boolean>): void;

    /**
     * 取消监听本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化事件。
     *
     * @param { Callback<boolean> } [callback] - 回调函数。即本窗口的主窗口跨多块屏幕使用全屏模式显示的状态变化回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口的主窗口跨多块
     *     屏幕使用全屏模式显示的状态变化回调。
     * @throws { BusinessError } 202 - Permission verification failed. A nonsystem application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    offMainWindowFullScreenAcrossDisplaysChanged(callback?: Callback<boolean>): void;

    /**
     * 开启本窗口在指定超时时间内无交互事件的监听，交互事件支持物理键盘输入事件和屏幕触控点击事件，不支持软键盘输入事件。
     *
     * @param { 'noInteractionDetected' } type - 监听事件，固定为'noInteractionDetected'，即本窗口在指定超时时间内无交互的事件。
     * @param { number } timeout - 指定本窗口在多长时间内无交互即回调，单位为秒(s)。该参数仅支持整数输入，负数和小数为非法参数。
     * @param { Callback<void> } callback - 回调函数。当本窗口在指定超时时间内无交互事件时的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types;
     *                                                                  3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'noInteractionDetected', timeout: number, callback: Callback<void>): void;

    /**
     * Subscribes to non-interaction events in a window within the specified period.
     *     Interaction events include physical keyboard input events and screen touch/click events,
     *     but not soft keyboard input events.
     *
     * @param { long } timeout - The timeout(in seconds) of no interaction detection.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onNoInteractionDetected(timeout: long, callback: Callback<void>): void;

    /**
     * 关闭本窗口在指定超时时间内无交互事件的监听，交互事件支持物理键盘输入事件和屏幕触控点击事件，不支持软键盘输入事件。
     *
     * @param { 'noInteractionDetected' } type - 监听事件，固定为'noInteractionDetected'，即本窗口在指定超时时间内无交互的事件。
     * @param { Callback<void> } callback - 回调函数，当本窗口在指定超时时间内无交互事件时的回调。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有本窗口在指定超时时间内无交互事件的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'noInteractionDetected', callback?: Callback<void>): void;

    /**
     * Unsubscribes from non-interaction events in a window within the specified period.
     *     Interaction events include physical keyboard input events and screen touch/click events,
     *     but not soft keyboard input events.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offNoInteractionDetected(callback?: Callback<void>): void;

    /**
     * 开启截屏事件的监听。
     *
     * @param { 'screenshot' } type - 监听事件，固定为'screenshot'，即截屏事件，对控制中心截屏、hdc命令截屏、整屏截屏接口生效。
     * @param { Callback<void> } callback - 回调函数。发生截屏事件时的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'screenshot', callback: Callback<void>): void;

    /**
     * 开启截屏事件的监听。
     *
     * @param { Callback<void> } callback - 回调函数。发生截屏事件时的回调。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshot(callback: Callback<void>): void;

    /**
     * 关闭截屏事件的监听。
     *
     * @param { 'screenshot' } type - 监听事件，固定为'screenshot'，即截屏事件。
     * @param { Callback<void> } [callback] - 回调函数。发生截屏事件时的回调。若传入参数，则关闭该监听。若未传入参数，则关闭所有截屏事件的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'screenshot', callback?: Callback<void>): void;

    /**
     * 关闭截屏事件的监听。
     *
     * @param { Callback<void> } [callback] - 回调函数。发生截屏事件时的回调。若传入参数，则关闭该监听。若未传入参数，则关闭所有截屏事件的监听。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshot(callback?: Callback<void>): void;

    /**
     * 开启屏幕截屏事件类型的监听。
     *
     * @param { 'screenshotAppEvent' } type - 监听事件，固定为'screenshotAppEvent'，即屏幕截屏的事件类型，对控制中心截屏、快捷键截屏以及滚动截屏生效。
     * @param { Callback<ScreenshotEventType> } callback - 回调函数。返回触发的截屏事件类型。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void;

    /**
     * 开启屏幕截屏事件类型的监听。
     *
     * @param { Callback<ScreenshotEventType> } callback - 回调函数。返回触发的截屏事件类型。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void;

    /**
     * 关闭屏幕截屏事件类型的监听。
     *
     * @param { 'screenshotAppEvent' } type - 监听事件，固定为'screenshotAppEvent'，即屏幕截屏的事件类型。
     * @param { Callback<ScreenshotEventType> } [callback] - 回调函数。返回触发的截屏事件类型。若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口截图事件的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void;

    /**
     * 关闭屏幕截屏事件类型的监听。
     *
     * @param { Callback<ScreenshotEventType> } [callback] - 回调函数。返回触发的截屏事件类型。若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口截图事件的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void;

    /**
     * 开启模态窗口所遮盖窗口的点击或触摸事件的监听，除模态窗口以外其他窗口调用此接口不生效。
     *
     * @param { 'dialogTargetTouch' } type - 监听事件，固定为'dialogTargetTouch'，即模态窗口所遮盖窗口的点击或触摸事件。
     * @param { Callback<void> } callback - 回调函数。当点击或触摸事件发生在模态窗口所遮盖窗口的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    on(type: 'dialogTargetTouch', callback: Callback<void>): void;

    /**
     * Subscribes to click or touch events in a window covered by a modal window.
     *     This API takes effect only when it is called by a modal window.
     *
     * @param { Callback<void> } callback
          *     - Callback invoked when the click event occurs in the target window of the modal window mode.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onDialogTargetTouch(callback: Callback<void>): void;

    /**
     * 关闭模态窗口目标窗口的点击事件的监听。
     *
     * @param { 'dialogTargetTouch' } type - 监听事件，固定为'dialogTargetTouch'，即模态窗口目标窗口的点击事件。
     * @param { Callback<void> } callback - 回调函数。当点击事件发生在模态窗口目标窗口的回调。若传入参数，则关闭该监听。若未传入参数，则关闭所有模态窗口目标窗口的点击事件的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     */
    off(type: 'dialogTargetTouch', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the touch event of the target window in the modal window mode.
     *
     * @param { Callback<void> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offDialogTargetTouch(callback?: Callback<void>): void;

    /**
     * 开启窗口生命周期变化的监听。
     *
     * @param { 'windowEvent' } type - 监听事件，固定为'windowEvent'，即窗口生命周期变化事件。
     * @param { Callback<WindowEventType> } callback - 回调函数。返回当前的窗口生命周期状态。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    on(type: 'windowEvent', callback: Callback<WindowEventType>): void;

    /**
     * 开启窗口生命周期变化的监听。
     *
     * @param { Callback<WindowEventType> } callback - 回调函数。返回当前的窗口生命周期状态。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onWindowEvent(callback: Callback<WindowEventType>): void;

    /**
     * 关闭窗口生命周期变化的监听。
     *
     * @param { 'windowEvent' } type - 监听事件，固定为'windowEvent'，即窗口生命周期变化事件。
     * @param { Callback<WindowEventType> } callback - 回调函数。返回当前的窗口生命周期状态。若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口生命周期变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'windowEvent', callback?: Callback<WindowEventType>): void;

    /**
     * 关闭窗口生命周期变化的监听。
     *
     * @param { Callback<WindowEventType> } [callback] - 回调函数。若传入参数，则关闭该监听；若未传入参数，则关闭所有窗口生命周期变化的监听。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowEvent(callback?: Callback<WindowEventType>): void;

    /**
     * 开启窗口模式变化的监听，当窗口windowStatus发生变化时进行通知（此时窗口属性可能还没有更新，如果需要在收到windowStatus变化通知时能够立即获取到变化后的窗口大小、位置，建议使用
     * [on('windowStatusDidChange')]{@link @ohos.window:window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * ）。
     * 
     * 使用当前接口开启监听后，在调用maximize、recover方法时会收到多次回调，如需获取去重后的回调，可使用
     * [on('windowStatusDidChange')]{@link window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * 。
     * 
     * > **说明：**
     * >
     * > 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，应用的
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置小于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有
     * > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::FULL_SCREEN。应用的
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置大于等于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有
     * > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::MAXIMIZE。
     *
     * @param { 'windowStatusChange' } type - 监听事件，固定为'windowStatusChange'，即窗口模式变化事件。
     * @param { Callback<WindowStatusType> } callback - 回调函数。返回当前的窗口模式。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'windowStatusChange', callback: Callback<WindowStatusType>): void;

    /**
     * 开启窗口模式变化的监听，当窗口windowStatus发生变化时进行通知（此时窗口属性可能还没有更新，如果需要在收到windowStatus变化通知时能够立即获取到变化后的窗口大小、位置，建议使用
     * [on('windowStatusDidChange')]{@link @ohos.window:window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * ）。
     * 
     * 使用当前接口开启监听后，在调用maximize、recover方法时会收到多次回调，如需获取去重后的回调，可使用
     * [on('windowStatusDidChange')]{@link window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * 。
     * 
     * > **说明：**
     * >
     * > 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，应用的
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置小于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有
     * > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::FULL_SCREEN。应用的
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置大于等于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有
     * > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::MAXIMIZE。
     *
     * @param { Callback<WindowStatusType> } callback - 回调函数。返回当前的窗口模式。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    onWindowStatusChange(callback: Callback<WindowStatusType>): void;

    /**
     * 关闭窗口模式变化的监听。
     *
     * @param { 'windowStatusChange' } type - 监听事件，固定为'windowStatusChange'，即窗口模式变化事件。
     * @param { Callback<WindowStatusType> } [callback] - 回调函数。返回当前的窗口模式。如果传入参数，则关闭该监听。
     *     如果未传入参数，则关闭所有窗口模式变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'windowStatusChange', callback?: Callback<WindowStatusType>): void;

    /**
     * 关闭窗口模式变化的监听。
     *
     * @param { Callback<WindowStatusType> } [callback] - 回调函数。返回当前的窗口模式。如果传入参数，则关闭该监听。
     *     如果未传入参数，则关闭所有窗口模式变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    offWindowStatusChange(callback?: Callback<WindowStatusType>): void;

    /**
     * 开启窗口模式变化的监听，当窗口windowStatus发生变化后进行通知（此时窗口[Rect]{@link @ohos.window:window.Rect}属性已经完成更新）。
     *
     * @param { 'windowStatusDidChange' } type - 监听事件，固定为'windowStatusDidChange'，即窗口模式变化完成事件。
     * @param { Callback<WindowStatusType> } callback - 回调函数。返回当前的窗口模式。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void;

    /**
     * 开启窗口模式变化的监听，当窗口windowStatus发生变化后进行通知（此时窗口[Rect]{@link @ohos.window:window.Rect}属性已经完成更新）。
     *
     * @param { Callback<WindowStatusType> } callback - 回调函数。返回当前的窗口模式。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowStatusDidChange(callback: Callback<WindowStatusType>): void;

    /**
     * 关闭窗口模式变化的监听。
     *
     * @param { 'windowStatusDidChange' } type - 监听事件，固定为'windowStatusDidChange'，即窗口模式变化完成事件。
     * @param { Callback<WindowStatusType> } [callback] - 回调函数。返回当前的窗口模式。如果传入参数，则关闭该监听。
     *     如果未传入参数，则关闭所有窗口模式变化的监听。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void;

    /**
     * 关闭窗口模式变化的监听。
     *
     * @param { Callback<WindowStatusType> } [callback] - 回调函数。返回当前的窗口模式。如果传入参数，则关闭该监听。
     *     如果未传入参数，则关闭所有窗口模式变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void;

    /**
     * 开启子窗口关闭事件的监听。此监听仅在点击系统提供的右上角关闭按钮关闭子窗时触发，其余关闭方式不触发回调。
     * 
     * 当重复注册窗口关闭事件的监听时，最后一次注册成功的监听事件生效。
     * 
     * 该接口触发的窗口关闭事件监听回调函数是同步执行，子窗口的异步关闭事件监听参考
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * 方法。
     * 
     * 如果存在
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * 监听事件，只响应
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * 接口。
     *
     * @param { 'subWindowClose' } type - 监听事件，固定为'subWindowClose'，即子窗口关闭事件。
     * @param { Callback<void> } callback - 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean
     *     类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'subWindowClose', callback: Callback<void>): void;

    /**
     * 开启子窗口关闭事件的监听。此监听仅能通过系统提供的子窗口右上角关闭按键触发，其余关闭窗口的方式不触发回调。
     *
     * @param { Callback<void> } callback - 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSubWindowClose(callback: Callback<void>): void;

    /**
     * 关闭子窗口关闭事件的监听。
     *
     * @param { 'subWindowClose' } type - 监听事件，固定为'subWindowClose'，即子窗口关闭事件。
     * @param { Callback<void> } callback - 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean
     *     类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有子窗口关闭的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'subWindowClose', callback?: Callback<void>): void;

    /**
     * 关闭子窗口关闭事件的监听。
     *
     * @param { Callback<void> } [callback ] - 回调函数。若传入参数，则关闭该监听；若未传入参数，则关闭所有子窗口关闭事件的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSubWindowClose(callback?: Callback<void>): void;

    /**
     * 开启主窗口或子窗口关闭事件的监听。此监听仅能通过系统提供的窗口标题栏关闭按键触发，其余关闭窗口的方式不触发回调。
     * 
     * 该接口触发的回调函数是异步执行。子窗口的同步关闭事件监听参考
     * [on('subWindowClose')]{@link window.Window.on(type: 'subWindowClose', callback: Callback<void>)}方法。主窗口的同步关闭事件监听参考
     * [on('windowStageClose')](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#onwindowstageclose14)方法。
     *
     * @param { 'windowWillClose' } type - 监听事件，固定为'windowWillClose'，即窗口关闭事件。
     * @param { Callback<void, Promise<boolean>> } callback - 回调函数。当点击窗口系统提供的右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑需要有
     *     Promise<boolean>类型的返回值。在返回的Promise函数里，执行resolve(true) 方法表示不关闭当前窗口，执行resolve(false) 方法或者reject方法均表示关闭当前窗口。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>): void;

    /**
     * 开启主窗口或子窗口关闭事件的监听。此监听仅能通过系统提供的窗口标题栏关闭按键触发，其余关闭窗口的方式不触发回调。
     *
     * @param { Callback<void, Promise<boolean>> } callback - 回调函数。当点击子窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑的返回值决定当前子窗是否继续关闭，如果返回boolean类型的true表示不关闭子窗，返回false或者其他非boolean类型表示关闭子窗。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowWillClose(callback: Callback<void, Promise<boolean>>): void;

    /**
     * 用于关闭主窗口或子窗口关闭事件的监听。
     *
     * @param { 'windowWillClose' } type - 监听事件，固定为'windowWillClose'，即窗口关闭事件。
     * @param { Callback<void, Promise<boolean>> } callback - 回调函数。当点击窗口系统提供的右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑需要有
     *     Promise<boolean>类型的返回值。在返回的Promise函数里，执行resolve(true) 方法表示不关闭当前窗口，执行resolve(false) 方法或者reject方法均表示关闭当前窗口。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'windowWillClose', callback?: Callback<void, Promise<boolean>>): void;

    /**
     * 关闭主窗口或子窗口关闭事件的监听。
     *
     * @param { Callback<void, Promise<boolean>> } [callback] - 回调函数。若传入参数，则关闭该监听；若未传入参数，则关闭所有主窗口或子窗口关闭事件的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void;

    /**
     * 开启窗口激活态变化事件的监听。
     *
     * @param { 'windowHighlightChange' } type - 监听事件，固定为'windowHighlightChange'，即窗口激活态变化事件。
     * @param { Callback<boolean> } callback - 回调函数。当本窗口的激活态发生变化时的回调。回调函数返回boolean类型参数。当返回参数为true表示激活态；false表示非激活态。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    on(type: 'windowHighlightChange', callback: Callback<boolean>): void;

    /**
     * Register the callback of window highlight state change
     *
     * @param { Callback<boolean> } callback - Callback used to return the highlight status of the window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowHighlightChange(callback: Callback<boolean>): void;

    /**
     * 关闭窗口激活态变化事件的监听。
     *
     * @param { 'windowHighlightChange' } type - 监听事件，固定为'windowHighlightChange'，即窗口激活态变化事件。
     * @param { Callback<boolean> } [callback] - 回调函数。当本窗口的激活态发生变化时的回调。若传入参数，则关闭该监听。若未传入参数，则关闭所有窗口激活态变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     */
    off(type: 'windowHighlightChange', callback?: Callback<boolean>): void;

    /**
     * Unregister the callback of window highlight state change
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the highlight status of the window.
     *     if not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowHighlightChange(callback?: Callback<boolean>): void;

    /**
     * 绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用Promise异步回调。
     *
     * @param { rpc.RemoteObject } token - 目标窗口token值。
     * @param { Callback<void> } deathCallback - 目标窗口销毁监听。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>): Promise<void>;

    /**
     * 绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用callback异步回调。
     *
     * @param { rpc.RemoteObject } token - 目标窗口token值。
     * @param { Callback<void> } deathCallback - 目标窗口销毁监听。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(token: rpc.RemoteObject, deathCallback: Callback<void>, callback: AsyncCallback<void>): void;

    /**
     * 绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用Promise异步回调。
     *
     * @param { dialogRequest.RequestInfo } requestInfo - 目标窗口RequestInfo值。
     * @param { Callback<void> } deathCallback - 目标窗口销毁监听。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>): Promise<void>;

    /**
     * 绑定模态窗口与目标窗口，成功绑定后，目标窗口不能响应用户操作。同时添加目标窗口销毁监听，使用callback异步回调。
     *
     * @param { dialogRequest.RequestInfo } requestInfo - 目标窗口RequestInfo值。
     * @param { Callback<void> } deathCallback - 目标窗口销毁监听。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    bindDialogTarget(requestInfo: dialogRequest.RequestInfo, deathCallback: Callback<void>, callback: AsyncCallback<void>): void;

    /**
     * 设置模态窗口是否响应手势返回事件，非模态窗口调用返回错误码。
     *
     * @param { boolean } enabled - 是否响应手势返回事件。<br>true表示响应手势返回事件，触发onBackPress回调；false表示不响应手势返回事件，不触发onBackPress回调。</br
     *     >
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDialogBackGestureEnabled(enabled: boolean): Promise<void>;

    /**
     * 判断当前窗口是否支持广色域模式，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [isWindowSupportWideGamut()]{@link window.Window.isWindowSupportWideGamut()}替代。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowSupportWideGamut()
     */
    isSupportWideGamut(): Promise<boolean>;

    /**
     * 判断当前窗口是否支持广色域模式，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [isWindowSupportWideGamut()]{@link window.Window.isWindowSupportWideGamut(callback: AsyncCallback<boolean>)}替代。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowSupportWideGamut(callback: AsyncCallback<boolean>)
     */
    isSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * 判断当前窗口是否支持广色域模式，使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isWindowSupportWideGamut(): Promise<boolean>;

    /**
     * 判断当前窗口是否支持广色域模式，使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback 回调函数。返回true表示当前窗口支持广色域模式，返回false表示当前窗口不支持广色域模式。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    isWindowSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * 设置当前窗口为广色域模式或默认色域模式，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [setWindowColorSpace()]{@link window.Window.setWindowColorSpace(colorSpace:ColorSpace)}替代。
     *
     * @param { ColorSpace } colorSpace - 设置色域模式。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowColorSpace(colorSpace:ColorSpace)
     */
    setColorSpace(colorSpace: ColorSpace): Promise<void>;

    /**
     * 设置当前窗口为广色域模式或默认色域模式，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用
     * > [setWindowColorSpace()]{@link window.Window.setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { ColorSpace } colorSpace - 设置色域模式。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>)
     */
    setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * 设置当前窗口为广色域模式或默认色域模式，使用Promise异步回调。
     *
     * @param { ColorSpace } colorSpace 设置色域模式。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowColorSpace(colorSpace:ColorSpace): Promise<void>;

    /**
     * 设置当前窗口为广色域模式或默认色域模式，使用callback异步回调。
     *
     * @param { ColorSpace } colorSpace 设置色域模式。
     * @param { AsyncCallback<void> } callback 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * 获取当前窗口色域模式，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[getWindowColorSpace()]{@link window.Window.getWindowColorSpace}替代。
     *
     * @returns { Promise<ColorSpace> } Promise对象。返回当前色域模式。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowColorSpace
     */
    getColorSpace(): Promise<ColorSpace>;

    /**
     * 获取当前窗口色域模式，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃，建议使用[getWindowColorSpace()]{@link window.Window.getWindowColorSpace}替代。
     *
     * @param { AsyncCallback<ColorSpace> } callback - 回调函数。当获取成功，err为undefined，data为当前色域模式。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowColorSpace
     */
    getColorSpace(callback: AsyncCallback<ColorSpace>): void;

    /**
     * 获取当前窗口色域模式。
     *
     * @returns { ColorSpace } 当前色域模式。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getWindowColorSpace(): ColorSpace;

    /**
     * 设置窗口的背景色，使用Promise异步回调。Stage模型下，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}替代。
     *
     * @param { string } color - 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如`'#00FF00'`或`'#FF00FF00'`。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBackgroundColor
     */
    setBackgroundColor(color: string): Promise<void>;

    /**
     * 设置窗口的背景色，使用callback异步回调。Stage模型下，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}替代。
     *
     * @param { string } color - 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如`'#00FF00'`或`'#FF00FF00'`。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBackgroundColor
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;

    /**
     * 设置窗口的背景色。
     * 
     * 未调用该接口时，窗口在浅色模式默认背景色为`'#FFF0F0F0'`，在深色模式默认背景色为`'#FF1A1A1A'`。
     * 
     * Stage模型下，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { string } color the specified color. [since 9 - 17]
     * @param { string | ColorMetrics } color - 需要设置的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。
     *     从API version 18开始，此参数支持ColorMetrics类型。 [since 18]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed;
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowBackgroundColor(color: string | ColorMetrics): void;

    /**
     * 设置主窗口是否显示阴影，使用Promise异步回调。未调用该接口时，主窗口默认显示阴影。
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { boolean } enable - 设置主窗口是否显示阴影。true表示显示阴影，false表示不显示阴影。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowShadowEnabled(enable: boolean): Promise<void>;

    /**
     * 允许应用窗口设置屏幕亮度值，使用Promise异步回调。
     * 
     * 当前屏幕亮度规格：窗口设置屏幕亮度生效时，控制中心不可以调整系统屏幕亮度，窗口恢复默认系统亮度之后，控制中心可以调整系统屏幕亮度。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowBrightness()]{@link window.Window.setWindowBrightness(brightness: double)}替代。
     *
     * @param { number } brightness - 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBrightness(brightness: double)
     */
    setBrightness(brightness: number): Promise<void>;

    /**
     * 允许应用窗口设置屏幕亮度值，使用callback异步回调。
     * 
     * 当前屏幕亮度规格：窗口设置屏幕亮度生效时，控制中心不可以调整系统屏幕亮度，窗口恢复默认系统亮度之后，控制中心可以调整系统屏幕亮度。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowBrightness()]{@link window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { number } brightness - 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)
     */
    setBrightness(brightness: number, callback: AsyncCallback<void>): void;

    /**
     * 系统应用主窗口调用，实现将窗口置于所有应用窗口之上不被遮挡，使用Promise异步回调。
     *
     * @param { boolean } isTopmost - 是否将系统应用主窗口置顶，true表示置顶，false表示取消置顶。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setTopmost(isTopmost: boolean): Promise<void>;

    /**
     * 应用主窗口调用，用于实现将窗口置于其他应用窗口之上不被遮挡，使用Promise异步回调。
     * 
     * 应用可通过自定义快捷键实现主窗口的置顶和取消置顶。
     *
     * @permission ohos.permission.WINDOW_TOPMOST
     * @param { boolean } isWindowTopmost - 设置主窗口置顶，true为置顶，false为取消置顶。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
     *     required to call the API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTopmost(isWindowTopmost: boolean): Promise<void>;

    /**
     * 主窗口设置窗口亮度。当窗口处于前台且获焦时，窗口亮度生效。使用Promise异步回调。
     *
     * 窗口亮度生效时只会影响当前设备屏幕亮度，无法修改虚拟屏（如投屏所在的屏幕）的屏幕亮度。
     *
     * 当接口入参为-1时，窗口亮度恢复为系统屏幕亮度（可以通过控制中心或快捷键调整）。
     *
     * 当窗口退至后台时，窗口亮度失效，可以通过控制中心或快捷键调整。不建议连续调用或窗口退至后台时调用此接口，否则可能产生时序问题。
     *
     * 设备行为差异：
     *
     * 针对TV设备：当前接口不生效也不报错。
     * 针对非2in1设备（不包含TV设备）：
     * 在OpenHarmony 6.1之前，当前窗口的窗口亮度生效时，控制中心调整系统屏幕亮度不生效。
     * 从OpenHarmony 6.1开始，当前窗口的窗口亮度生效时，控制中心可以调整系统屏幕亮度，同时会将当前窗口恢复为系统屏幕亮度。
     * 针对2in1设备：
     * 在OpenHarmony 5.0.2之前，窗口设置屏幕亮度生效时，控制中心或快捷键调整系统屏幕亮度不生效。
     * 从OpenHarmony 5.0.2开始，窗口亮度与系统屏幕亮度保持一致，可以通过本接口、控制中心或者快捷键设置系统屏幕亮度。
     *
     * @param { double } brightness 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowBrightness(brightness: double): Promise<void>;

    /**
     * 主窗口设置窗口亮度。当窗口处于前台且获焦时，窗口亮度生效。使用Promise异步回调。
     *
     * 窗口亮度生效时只会影响当前设备屏幕亮度，无法修改虚拟屏（如投屏所在的屏幕）的屏幕亮度。
     *
     * 当接口入参为-1时，窗口亮度恢复为系统屏幕亮度（可以通过控制中心或快捷键调整）。
     *
     * 当窗口退至后台时，窗口亮度失效，可以通过控制中心或快捷键调整。不建议连续调用或窗口退至后台时调用此接口，否则可能产生时序问题。
     *
     * 设备行为差异：
     *
     * 针对TV设备：当前接口不生效也不报错。
     * 针对非2in1设备（不包含TV设备）：
     * 在OpenHarmony 6.1之前，当前窗口的窗口亮度生效时，控制中心调整系统屏幕亮度不生效。
     * 从OpenHarmony 6.1开始，当前窗口的窗口亮度生效时，控制中心可以调整系统屏幕亮度，同时会将当前窗口恢复为系统屏幕亮度。
     * 针对2in1设备：
     * 在OpenHarmony 5.0.2之前，窗口设置屏幕亮度生效时，控制中心或快捷键调整系统屏幕亮度不生效。
     * 从OpenHarmony 5.0.2开始，窗口亮度与系统屏幕亮度保持一致，可以通过本接口、控制中心或者快捷键设置系统屏幕亮度。
     *
     * @param { double } brightness 屏幕亮度值。该参数为浮点数，取值范围为[0.0, 1.0]或-1.0。1.0表示最亮，-1.0表示恢复成设置窗口亮度前的系统控制中心亮度。
     * @param { AsyncCallback<void> } callback 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowBrightness(brightness: double, callback: AsyncCallback<void>): void;

    /**
     * 设置窗口是否使用所在屏幕的系统默认Density。Stage模型下，该接口需要在
     * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效
     * 后使用。
     * 
     * 不调用此接口进行设置，则表示不使用系统默认Density。
     * 
     * 当存在同时使用该接口、
     * [setDefaultDensityEnabled(true)](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setdefaultdensityenabled12)
     * 和[setCustomDensity](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#setcustomdensity15)时，以最后调用的设置
     * 效果为准。
     *
     * @param { boolean } enabled - 设置是否使用系统默认Density。true表示使用系统默认Density，窗口不跟随系统显示大小变化重新布局；false表示不使用系统默认Density，窗口跟随系统
     *     显示大小变化重新布局。
     * @throws { BusinessError } 202 - Permission verification
     *     failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    setDefaultDensityEnabled(enabled: boolean): void;

    /**
     * 设置主窗口容器在焦点态和非焦点态时的背景色。该接口需在调用
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}后使用。
     * 
     * 窗口容器背景色覆盖整个窗口区域，包括标题栏和内容区域。内容区域背景色默认跟随系统深浅色，当同时使用该接口和
     * [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}设置背景色时，内容区域显示窗口背景色，标题栏显示窗口容器背景色。
     *
     * @permission ohos.permission.SET_WINDOW_ALPHA [since 26.0.0]
     * @param { string } activeColor - 窗口容器处于焦点态时的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。
     * @param { string } inactiveColor - 窗口容器处于非焦点态时的背景色，为十六进制RGB颜色或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API. [since 26.0.0]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 20 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use. [since 20 - 24]
     * @publicapi [since 26.0.0]
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowContainerModalColor(activeColor: string, inactiveColor: string): void;

    /**
     * 窗口叠加时，设备有子窗口的情况下设置靠后的窗口的暗度值，使用callback异步回调。
     *
     * @param { number } dimBehindValue - 表示靠后的窗口的暗度值，取值范围为[0.0, 1.0]，取1.0时表示最暗。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;

    /**
     * 窗口叠加时，设备有子窗口的情况下设置靠后的窗口的暗度值，使用Promise异步回调。
     *
     * @param { number } dimBehindValue - 表示靠后的窗口的暗度值，取值范围为0-1，1表示最暗。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number): Promise<void>;

    /**
     * 设置使用点击或其他方式使该窗口获焦的场景时，该窗口是否支持窗口焦点从点击前的获焦窗口切换到该窗口，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowFocusable()]{@link window.Window.setWindowFocusable(isFocusable: boolean)}替代。
     *
     * @param { boolean } isFocusable - 点击时是否支持切换焦点窗口。true表示支持；false表示不支持。设置为false时，该窗口不支持绑定输入法和接收键盘事件，如需处理输入逻辑，建议参考
     *     [不可获焦窗口中输入框与输入法交互指南](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowFocusable(isFocusable: boolean)
     */
    setFocusable(isFocusable: boolean): Promise<void>;

    /**
     * 设置使用点击或其他方式使该窗口获焦的场景时，该窗口是否支持窗口焦点从操作前的获焦窗口切换到该窗口，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowFocusable()]{@link window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { boolean } isFocusable - 点击时是否支持切换焦点窗口。true表示支持；false表示不支持。设置为false时，该窗口不支持绑定输入法和接收键盘事件，如需处理输入逻辑，建议参考
     *     [不可获焦窗口中输入框与输入法交互指南](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)
     */
    setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置窗口是否具有获得焦点的能力，使用Promise异步回调。
     * 
     * 从API version 22开始，调用[createVirtualScreen]{@link @ohos.display:display.createVirtualScreen}接口创建虚拟屏，并设置
     * supportsFocus配置项为false时，位于该虚拟屏的窗口无法调用该接口修改窗口的可获焦能力，如果调用，会抛出1300002错误码。
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowFocusable(isFocusable: boolean): Promise<void>;

    /**
     * 设置窗口是否具有获得焦点的能力，使用callback异步回调。
     * 
     * 从API version 22开始，调用[createVirtualScreen]{@link @ohos.display:display.createVirtualScreen}接口创建虚拟屏，并设置
     * supportsFocus配置项为false时，位于该虚拟屏的窗口无法调用该接口修改窗口的可获焦能力，如果调用，会抛出1300002错误码。
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 支持当前窗口主动请求获焦/失焦，使用Promise异步回调。调用成功即返回，该接口返回值不代表最终获焦/失焦生效结果。可使用
     * [on('windowEvent')]{@link @ohos.window:window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}
     * 监听窗口获焦/失焦状态。
     * 
     * 获焦请求发送后，窗口获焦结果受到窗口可获焦属性及窗口可见状态的限制。获焦成功的窗口需满足以下约束：1.窗口支持获焦；2.窗口可见（窗口已显示，未销毁且未退至后台）。
     * 
     * 失焦请求发送后，窗口无条件失焦。
     *
     * @param { boolean } isFocused - 是否获取焦点，true表示请求获焦，false表示请求失焦。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    requestFocus(isFocused: boolean): Promise<void>;

    /**
     * 设置窗口独占激活态属性。独占激活态表示窗口获焦时，会导致当前父子窗口链中处于激活态的其他窗口失去激活态。使用Promise异步回调。
     * 
     * 此接口对主窗、模态窗不生效。
     *
     * @param { boolean } exclusivelyHighlighted Whether the window can become highlight exclusively when it gain focus.
     *     The value
     *     true means that the window can cause the window outside the current window link to
     *     lose its highlight state, and false means the opposite.
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setExclusivelyHighlighted(exclusivelyHighlighted: boolean): Promise<void>;

    /**
     * 获取当前窗口是否为激活态。为准确获取激活态，需要在[WindowEventType]{@link @ohos.window:window.WindowEventType}生命周期处于WINDOW_ACTIVE之后调用。
     * 
     * 可使用
     * [on('windowHighlightChange')]{@link window.Window.on(type: 'windowHighlightChange', callback: Callback<boolean>)}
     * 监听对应状态变更，再执行对应具体业务。
     *
     * @returns { boolean } 当前窗口是否为激活态。true表示当前窗口为激活态，false表示当前窗口非激活态。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    isWindowHighlighted(): boolean;

    /**
     * 设置屏幕是否为常亮状态，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowKeepScreenOn()]{@link window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean)}替代。
     *
     * @param { boolean } isKeepScreenOn - 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean)
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * 设置屏幕是否为常亮状态，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 6开始支持，从API version 9开始废弃，建议使用
     * > [setWindowKeepScreenOn()]{@link window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { boolean } isKeepScreenOn - 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>)
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置当前窗口位于前台时当前设备的屏幕是否为常亮状态，异源虚拟屏下不生效。使用Promise异步回调。
     * 
     * 仅在必要场景（导航、视频播放、绘画、游戏等场景）下，设置该属性为true；退出上述场景后，应当重置该属性为false；其他场景（无屏幕互动、音频播放等）下，不使用该接口；系统检测到非规范使用该接口时，可能会恢复自动灭屏功能。
     *
     * @param { boolean } isKeepScreenOn 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * 设置当前窗口位于前台时当前设备的屏幕是否为常亮状态，异源虚拟屏下不生效。使用callback异步回调。
     * 
     * 仅在必要场景（导航、视频播放、绘画、游戏等场景）下，设置该属性为true；退出上述场景后，应当重置该属性为false；其他场景（无屏幕互动、音频播放等）下，不使用该接口；系统检测到非规范使用该接口时，可能会恢复自动灭屏功能。
     *
     * @param { boolean } isKeepScreenOn 设置屏幕是否为常亮状态。true表示常亮；false表示不常亮。
     * @param { AsyncCallback<void> } callback 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * 唤醒屏幕。
     *
     * @param { boolean } wakeUp - 是否设置唤醒屏幕。true表示唤醒；false表示不唤醒。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setWakeUpScreen(wakeUp: boolean): void;

    /**
     * 设置是否允许可点击子窗口之外的区域，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。
     * >
     * > 从API version 9开始，系统默认允许点击子窗口之外的区域，此接口不再支持使用，也不再提供替代接口。
     *
     * @param { boolean } touchable - 设置是否可点击。true表示可点击；false表示不可点击。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean): Promise<void>;

    /**
     * 设置是否允许可点击子窗口之外的区域，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。
     * >
     * > 从API version 9开始，系统默认允许点击子窗口之外的区域，此接口不再支持使用，也不再提供替代接口。
     *
     * @param { boolean } touchable - 设置是否可点击。true表示可点击；false表示不可点击。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置窗口是否为隐私模式，使用Promise异步回调。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。此接口可用于禁止截屏/录屏的场景。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowPrivacyMode()]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean)}替代。
     *
     * @param { boolean } isPrivacyMode - 窗口是否为隐私模式。true表示模式开启；false表示模式关闭。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowPrivacyMode(isPrivacyMode: boolean)
     */
    setPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * 设置窗口是否为隐私模式，使用callback异步回调。设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。此接口可用于禁止截屏/录屏的场景。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowPrivacyMode()]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { boolean } isPrivacyMode - 窗口是否为隐私模式。true表示模式开启；false表示模式关闭。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)
     */
    setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置窗口是否为隐私模式，使用Promise异步回调。
     * 
     * 设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。
     * 
     * 隐私模式窗口退后台后在多任务卡片中显示为白色蒙层或隐私蒙层。
     * 
     * 未调用此接口时，窗口默认不开启隐私模式，可以被截屏或录屏。
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode 窗口是否为隐私模式。true表示为隐私模式，false表示为非隐私模式。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     *     Possible cause: Need ohos.permission.PRIVACY_WINDOW permission.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * 设置窗口是否为隐私模式，使用callback异步回调。
     * 
     * 设置为隐私模式的窗口，窗口内容将无法被截屏或录屏。
     * 
     * 隐私模式窗口退后台后在多任务卡片中显示为白色蒙层或隐私蒙层。
     * 
     * 未调用此接口时，窗口默认不开启隐私模式，可以被截屏或录屏。
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode 窗口是否为隐私模式。true表示为隐私模式，false表示为非隐私模式。
     * @param { AsyncCallback<void> } callback 回调函数。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     *     Possible cause: Need ohos.permission.PRIVACY_WINDOW permission.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * 截屏、录屏或投屏是否忽略当前窗口。此接口一般用于禁止截屏、录屏或投屏的场景。
     * 
     * 若要实现窗口始终在前台忽略截屏、录屏或投屏，在窗口从后台回到前台时，需要通过
     * [on('windowEvent')]{@link @ohos.window:window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}
     * 监听窗口生命周期变化，在后台状态时设置为false，而在前台状态时设置为true。
     *
     * @param { boolean } isSkip - 截屏、录屏或投屏是否忽略当前窗口，默认为false。<br>true表示忽略当前窗口，false表示不忽略当前窗口。</br>
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setSnapshotSkip(isSkip: boolean): void;

    /**
     * 设置窗口是否为可触状态，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowTouchable()]{@link window.Window.setWindowTouchable(isTouchable: boolean)}替代。
     *
     * @param { boolean } isTouchable - 窗口是否为可触状态。true表示可触；false表示不可触。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowTouchable(isTouchable: boolean)
     */
    setTouchable(isTouchable: boolean): Promise<void>;

    /**
     * 设置窗口是否为可触状态，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setWindowTouchable()]{@link window.Window.setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { boolean } isTouchable - 窗口是否为可触状态。true表示可触；false表示不可触。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>)
     */
    setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置窗口是否为可点击状态，使用Promise异步回调。
     * 
     * 当窗口处于可点击状态时，若用户点击命中该窗口，事件将发送给该窗口处理。当窗口处于不可点击状态时，透传点击事件，传递给下层窗口。
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowTouchable(isTouchable: boolean): Promise<void>;

    /**
     * 设置窗口是否为可点击状态，使用callback异步回调。
     * 
     * 当窗口处于可点击状态时，若用户点击命中该窗口，事件将发送给该窗口处理。当窗口处于不可点击状态时，透传点击事件，传递给下层窗口。
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 为当前窗口添加或移除手写标志，添加该标志后窗口只响应手写笔事件，不响应触屏事件。使用Promise异步回调。
     *
     * @param { boolean } enable - 是否对窗口添加标志位。true表示添加，false表示移除。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setHandwritingFlag(enable: boolean): Promise<void>;

    /**
     * 设置主窗口在分屏模式下是否被禁止移动，使用callback异步回调。
     *
     * @param { boolean } isForbidSplitMove - 窗口在分屏模式下是否被禁止移动。true表示禁止；false表示不禁止。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    setForbidSplitMove(isForbidSplitMove: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置主窗口在分屏模式下是否被禁止移动，使用Promise异步回调。
     *
     * @param { boolean } isForbidSplitMove - 窗口在分屏模式下是否被禁止移动。true表示禁止；false表示不禁止。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    setForbidSplitMove(isForbidSplitMove: boolean): Promise<void>;

    /**
     * 获取窗口截图，使用callback异步回调。若当前窗口设置为隐私模式（可通过
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * 接口设置），截图结果为白屏。
     *
     * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Get pixelMap failed;
     *     3. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    snapshot(callback: AsyncCallback<image.PixelMap>): void;

    /**
     * 获取当前窗口截图。若当前窗口设置为隐私模式（可通过
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * 接口设置），截图结果为白屏。
     *
     * @returns { Promise<image.PixelMap> } Promise used to return the window screenshot.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Get pixelMap failed;
     *     3. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    snapshot(): Promise<image.PixelMap>;

    /**
     * 获取当前窗口截图，此接口为同步接口。若当前窗口设置为隐私模式（
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * 接口设置），截图结果为白屏。
     * 
     * Stage模型下，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @returns { image.PixelMap } Window screenshot.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Create pixelMap failed.
     * @throws { BusinessError } 1300018 - Timeout.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    snapshotSync(): image.PixelMap;

    /**
     * 获取当前窗口截图。即使当前窗口设置为隐私模式（可通过
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * 接口设置），仍可调用本接口返回当前窗口截图。
     *
     * @returns { Promise<image.PixelMap> } Promise used to return the window screenshot.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function snapshotIgnorePrivacy can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Create pixelMap failed;
     *     3. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    snapshotIgnorePrivacy(): Promise<image.PixelMap>;

    /**
     * 设置窗口不透明度。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。
     *
     * @param { double } opacity - 不透明度。该参数为浮点数，取值范围为[0.0, 1.0]。0.0表示完全透明，1.0表示完全不透明。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    opacity(opacity: double): void;

    /**
     * 设置窗口缩放参数。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。
     *
     * @param { ScaleOptions } scaleOptions - 缩放参数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    scale(scaleOptions: ScaleOptions): void;

    /**
     * 设置窗口旋转参数。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。
     *
     * @param { RotateOptions } rotateOptions - 旋转参数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    rotate(rotateOptions: RotateOptions): void;

    /**
     * 设置窗口平移参数。仅支持在[自定义系统窗口的显示与隐藏动画](docroot://windowmanager/system-window-stage-sys.md#自定义系统窗口的显示与隐藏动画)中使用。
     *
     * @param { TranslateOptions } translateOptions - 平移参数，单位为px。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    translate(translateOptions: TranslateOptions): void;

    /**
     * 获取窗口属性转换控制器。
     *
     * @returns { TransitionController } 属性转换控制器。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    getTransitionController(): TransitionController;

    /**
     * 设置窗口模糊。
     *
     * @param { double } radius - 表示窗口模糊的半径值。该参数为浮点数，单位为px，取值范围为[0, +∞)，取值为0.0时表示关闭窗口模糊。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setBlur(radius: double): void;

    /**
     * 设置窗口背景模糊。
     * 
     * 窗口背景是指窗口覆盖的下层区域，与窗口大小相同。
     * 
     * 需要通过[setWindowBackgroundColor]{@link @ohos.window:window.Window.setWindowBackgroundColor}将窗口内容背景设置成透明，否则无法看到模糊效果。
     *
     * @param { double } radius - 表示窗口背景模糊的半径值。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0表示关闭窗口背景模糊。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setBackdropBlur(radius: double): void;

    /**
     * 设置窗口背景模糊类型。
     *
     * @param { BlurStyle } blurStyle - 表示窗口背景模糊类型。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setBackdropBlurStyle(blurStyle: BlurStyle): void;

    /**
     * 设置窗口边缘阴影。
     *
     * @param { double } radius - 表示窗口边缘阴影的模糊半径。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0时表示关闭窗口边缘阴影。
     * @param { string } color - 表示窗口边缘阴影的颜色，为十六进制RGB或ARGB颜色，不区分大小写，例如`#00FF00`或`#FF00FF00`，默认值为'#000000'。
     * @param { double } offsetX - 表示窗口边缘阴影的X轴的偏移量。该参数为浮点数，单位为px，默认值为0.0。
     * @param { double } offsetY - 表示窗口边缘阴影的Y轴的偏移量。该参数为浮点数，单位为px，默认值为0.0。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setShadow(radius: double, color?: string, offsetX?: double, offsetY?: double): void;

    /**
     * 设置子窗或悬浮窗窗口边缘阴影的模糊半径。
     *
     * @param { double } radius - 表示窗口边缘阴影的模糊半径。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0时表示关闭窗口边缘阴影。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: The shadow radius is less than zero.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowShadowRadius(radius: double): void;

    /**
     * 设置窗口圆角半径。
     *
     * @param { double } cornerRadius - 表示窗口圆角的半径值。该参数为浮点数，单位为px，取值范围为[0.0, +∞)，取值为0.0时表示没有窗口圆角。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setCornerRadius(cornerRadius: double): void;

    /**
     * 设置子窗或悬浮窗的圆角半径值，使用Promise异步回调。
     * 
     * 圆角半径值过大将会导致三键（最大化、最小化、关闭按钮）位置被裁切，且会导致热区不易识别，请根据窗口大小设置合适的圆角半径值。
     * 
     * 在调用此接口之前调用[getWindowCornerRadius()]{@link window.Window.getWindowCornerRadius}接口可以获得窗口默认圆角半径值。
     *
     * @param { double } cornerRadius - 表示窗口圆角的半径值。该参数为浮点数，单位为vp，取值范围为[0.0, +∞)，取值为0.0时表示没有窗口圆角。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: The corner radius is less than zero.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowCornerRadius(cornerRadius: double): Promise<void>;

    /**
     * 该接口用于获取子窗或悬浮窗的圆角半径值，在未调用[setWindowCornerRadius()]{@link window.Window.setWindowCornerRadius}接口设置窗口圆角半径值时，调用此接口可获取
     * 窗口默认圆角半径值。
     *
     * @returns { double } 当前子窗或悬浮窗的圆角半径值，单位为vp。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    getWindowCornerRadius(): double;

    /**
     * 提升应用子窗口到应用顶层。使用callback异步回调。
     * 
     * 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}
     * 并执行完毕。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseToAppTop(callback: AsyncCallback<void>): void;

    /**
     * 应用子窗口调用，提升应用子窗口到顶层，只在当前应用同一个父窗口下的相同类型子窗范围内生效，对于自定义了zLevel属性的子窗口，只在当前应用同一个父窗口下相同zLevel值的子窗范围内生效。使用Promise异步回调。
     * 
     * 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}并执行完毕。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 14 dynamic
     * @since 23 static
     */
    raiseToAppTop(): Promise<void>;

    /**
     * 设置窗口内容布局（不含边框和标题栏等装饰）的比例，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > - 通过其他接口如[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}、
     * > [resizeAsync]{@link window.Window.resizeAsync}设置窗口大小时，不受ratio约束。
     * >
     * > - 仅主窗可设置，且仅在自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下生效。此比例参数将持久化保存，关闭应用或重启设备后，切换到自由悬浮窗口模式时，设置的比例仍然生效。
     * >
     * > - 当同一应用的某个主窗口调用此接口设置宽高比生效后，后续打开的主窗口均会沿用该宽高比。若需为单个主窗口单独设置宽高比，请使用
     * > [setContentAspectRatio]{@link window.Window.setContentAspectRatio}。
     *
     * @param { double } ratio - 窗口内容布局（不含边框和标题栏等装饰）的宽高比。该参数为浮点数，受窗口最大最小尺寸限制，比例值下限为最小宽度/最大高度，上限为最大宽度/最小高度。窗口最大最小尺寸由
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}和系统限制的交集决定，系统限制优先级高于
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}。ratio的有效范围会随
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}变化而变化。如果先设置了
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}，后设置的ratio与其冲突，会返回错误码；如果先设置了ratio，后设置的
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}与其冲突，窗口的宽高比可能会不跟随设置的宽高比（ratio）。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     Invalid parameter range.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAspectRatio(ratio: double, callback: AsyncCallback<void>): void;

    /**
     * 设置窗口内容布局（不含边框和标题栏等装饰）的比例，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 通过其他接口如[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}、
     * > [resizeAsync]{@link window.Window.resizeAsync}设置窗口大小时，不受ratio约束。
     * >
     * > - 仅主窗可设置，且仅在自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下生效。此比例参数将持久化保存，关闭应用或重启设备后，切换到自由悬浮窗口模式时，设置的比例仍然生效。
     * >
     * > - 当同一应用的某个主窗口调用此接口设置宽高比生效后，后续打开的主窗口均会沿用该宽高比。若需为单个主窗口单独设置宽高比，请使用
     * > [setContentAspectRatio]{@link window.Window.setContentAspectRatio}。
     *
     * @param { double } ratio - 窗口内容布局（不含边框和标题栏等装饰）的宽高比。该参数为浮点数，受窗口最大最小尺寸限制，比例值下限为最小宽度/最大高度，上限为最大宽度/最小高度。窗口最大最小尺寸由
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}和系统限制的交集决定，系统限制优先级高于
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}。ratio的有效范围会随
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}变化而变化。如果先设置了
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}，后设置的ratio与其冲突，会返回错误码；如果先设置了ratio，后设置的
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}与其冲突，窗口的宽高比可能会不跟随设置的宽高比（ratio）。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     Invalid parameter range.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    setAspectRatio(ratio: double): Promise<void>;

    /**
     * 设置窗口内容布局（不含边框和标题栏等装饰）的比例，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 根据相同的ratio参数调整窗口宽高时，窗口宽高会跟随窗口边框装饰尺寸或可见性变化而调整。
     * >
     * > - 通过[setWindowDecorVisible]{@link window.Window.setWindowDecorVisible}将窗口标题栏设置为不可见时，窗口内容区域将占据原本标题栏的高度空间。
     * >
     * > - 通过其他接口如[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}、
     * > [resizeAsync]{@link window.Window.resizeAsync}设置窗口大小时，不受ratio约束。
     * >
     * > - 仅主窗可设置，且仅在自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING）下生效。
     *
     * @param { double } ratio - 窗口内容布局（不含边框和标题栏等装饰）的宽高比。该参数为浮点数，受窗口最大最小尺寸限制，比例值下限为最小宽度/最大高度，上限为最大宽度/最小高度。窗口最大最小尺寸由
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}和系统限制的交集决定，系统限制优先级高于
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}。ratio的有效范围会随
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}变化而变化。如果先设置了
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}，后设置的ratio与其冲突，会返回错误码；如果先设置了ratio，后设置的
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits}与其冲突，窗口的宽高比可能会不跟随设置的宽高比（ratio）。
     * @param { boolean } [isPersistent] - 是否持久化保存该比例参数。<br/>如为`true`，比例参数会持久化保存，销毁窗口、关闭应用或重启设备后，当再次切换到自由悬浮窗口模式时仍然生效。可通过
     *     [resetAspectRatio]{@link window.Window.resetAspectRatio()}清除持久化保存的比例参数。<br/>如为`false`，比例参数仅对当前窗口生效，窗口销毁后清除该数据
     *     。<br/>默认值为`true`。
     * @param { boolean } [needUpdateRect] - 是否立即根据当前比例更新窗口大小。<br/>如为`true`，立即根据当前比例更新窗口大小。<br/>如为`false`，窗口将在拖拽缩放时根据当前比
     *     例更新，也可以使用[resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}或
     *     [resizeAsync]{@link window.Window.resizeAsync}进行主动更新。<br/>默认值为`true`。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range.
     *     2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    setContentAspectRatio(ratio: double, isPersistent?: boolean, needUpdateRect?: boolean): Promise<void>;

    /**
     * 取消设置窗口内容布局的比例，使用callback异步回调。
     * 
     * 仅主窗可设置，调用后将清除持久化储存的比例信息。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    resetAspectRatio(callback: AsyncCallback<void>): void;

    /**
     * 取消设置窗口内容布局的比例，使用Promise异步回调。
     * 
     * 仅主窗可设置，调用后将清除持久化储存的比例信息。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    resetAspectRatio(): Promise<void>;

    /**
     * 为当前窗口添加或删除安全水印标志，使用callback异步回调。
     *
     * @param { boolean } enable - 是否对窗口添加标志位。true表示添加，false表示删除。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 为当前窗口添加或删除安全水印标志，使用Promise异步回调。
     *
     * @param { boolean } enable - 是否对窗口添加标志位。true表示添加，false表示删除。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300008 - The display device is abnormal.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setWaterMarkFlag(enable: boolean): Promise<void>;

    /**
     * 将同一个主窗口下的子窗口抬升到目标子窗口之上。使用callback异步回调。
     * 
     * 使用该接口需要确保要抬升的子窗口和目标子窗口都已创建完成，分别调用
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}并执行完毕。
     *
     * @param { int } windowId - 目标子窗口的id，通过[getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}接
     *     口获取到[properties]{@link @ohos.window:window.WindowProperties}后，再通过properties.id获取。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseAboveTarget(windowId: int, callback: AsyncCallback<void>): void;

    /**
     * 将同一个主窗下的子窗口提升到目标子窗口之上。使用Promise异步回调。
     * 
     * 使用该接口需要确保要抬升的子窗口和目标子窗口都已创建完成，分别调用
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}并执行完毕。
     *
     * @param { int } windowId - 目标子窗口的id，通过[getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}接
     *     口获取到[properties]{@link @ohos.window:window.WindowProperties}后，再通过properties.id获取。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Mandatory parameters are left unspecified.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    raiseAboveTarget(windowId: int): Promise<void>;

    /**
     * 将主窗口的层级调整至同应用下的另一个主窗口之上，子窗口的层级会跟随所属主窗口变动。使用Promise异步回调。
     * 
     * 仅支持系统应用主窗口调用。
     * 
     * 传入目标主窗口的id，调用窗口和目标窗口需满足：同应用进程、显示在同一物理屏、层级低于锁屏、非置顶主窗、非模态主窗且无模应用子窗。
     * 
     * - 应用主窗口或者它的子窗口如果是焦点窗口，此主窗口调用该接口降低层级后则自动失焦，由当前层级最高的应用窗口获焦。
     * - 应用主窗口调用该接口调整层级后超过当前焦点窗口，则被抬升主窗口及其子窗口中，层级最高的窗口自动获焦；应用主窗口调用该接口调整层级后未超过当前焦点窗口，则焦点不做转移。
     *
     * @param { int } windowId - 目标主窗口的id，该参数为整数，通过
     *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}接口获取到
     *     [properties]{@link @ohos.window:window.WindowProperties}后，再通过properties.id获取。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    raiseMainWindowAboveTarget(windowId: int): Promise<void>;

    /**
     * 禁止/使能子窗口点击抬升功能。使用callback异步回调。
     * 
     * 通常来说，点击一个子窗口，会将该子窗口显示到最上方，如果设置为false，那么点击子窗口的时候，不会将该子窗口显示到最上方，而是保持不变。
     * 
     * 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}
     * 并执行完毕。
     *
     * @param { boolean } enable - 设置子窗口点击抬升功能是否使能，true表示使能，false表示禁止。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setRaiseByClickEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 禁止/使能子窗点击抬升功能。使用Promise异步回调。
     * 
     * 通常来说，点击一个子窗口，会将该子窗口显示抬升到应用内同一个父窗口下同类型子窗口的最上方，如果设置为false，那么点击子窗口的时候，不会将该子窗口进行抬升，而是保持不变。
     * 
     * 使用该接口需要先创建子窗口，并确保该子窗口调用[showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}并执行完毕。
     *
     * @param { boolean } enable - 设置子窗口点击抬升功能是否使能，true表示使能，false表示禁止。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @since 14 dynamic
     * @since 23 static
     */
    setRaiseByClickEnabled(enable: boolean): Promise<void>;

    /**
     * 禁止/使能主窗口点击抬升功能。使用Promise异步回调。
     * 
     * 点击主窗口时，默认会抬升主窗口及其子窗口。调用此接口禁止主窗口点击抬升后（即传入false），点击主窗口时不会将其及子窗口进行抬升，保持原有状态不变；点击子窗口时，主窗口会连同子窗口一起被抬升。
     *
     * @param { boolean } enable - 设置主窗口点击抬升功能是否使能，true表示使能，false表示禁止。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    setMainWindowRaiseByClickEnabled(enable: boolean): Promise<void>;

    /**
     * 此接口根据调用对象不同，实现不同的功能：
     * 
     * - 当调用对象为主窗口时，实现最小化功能，可在Dock栏中还原，2in1 设备上可以使用[restore()]{@link window.Window.restore}进行还原。
     * - 当调用对象为子窗口或全局悬浮窗时，实现隐藏功能，不可在Dock栏中还原，可以使用
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}进行还原。
     * 
     * 该接口仅支持主窗口、子窗口或全局悬浮窗，其它窗口调用返回1300002错误码，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window type. Only main windows, subwindows, and float windows are supported.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minimize(callback: AsyncCallback<void>): void;

    /**
     * 此接口根据调用对象不同，实现不同的功能：
     * 
     * - 当调用对象为主窗口时，实现最小化功能，可在Dock栏中还原，2in1 设备上可以使用[restore()]{@link window.Window.restore}进行还原。
     * - 当调用对象为子窗口或全局悬浮窗时，实现隐藏功能，不可在Dock栏中还原，可以使用
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}进行还原。
     * 
     * 该接口仅支持主窗口、子窗口或全局悬浮窗，其它窗口调用返回1300002错误码，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. Invalid window type. Only main windows, subwindows, and float windows are supported.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minimize(): Promise<void>;

    /**
     * 实现最大化功能。主窗口可调用此接口实现最大化功能；子窗口需在创建时设置子窗口参数maximizeSupported为true，
     * 再调用此接口可实现最大化功能。使用Promise异步回调。
     *
     * @param { MaximizePresentation } presentation - set window presentation when maximize. [since 12 - 19]
     * @param { MaximizePresentation } [presentation] - 主窗口或子窗口最大化时的布局枚举。
     *     默认值window.MaximizePresentation.ENTER_IMMERSIVE，即默认最大化时进入全屏模式。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Function maximize can not work correctly due to limited
     *     device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 12 - 19]
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    maximize(presentation?: MaximizePresentation): Promise<void>;

    /**
     * 实现最大化功能。主窗口可调用此接口实现最大化功能；子窗口需在创建时设置子窗口参数maximizeSupported为true，再调用此接口可实现最大化功能。在具备折叠功能的2in1设备上，支持控制悬停态（参考
     * [折叠屏悬停态最佳实践](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-folded-hover)）下主窗口的瀑布流模式行为，即窗口在悬停态下
     * 最大化时是否跨上下两个半屏显示。使用Promise异步回调。
     *
     * @param { MaximizePresentation } [presentation] - 主窗口或子窗口最大化时的布局枚举。
     *     默认值window.MaximizePresentation.ENTER_IMMERSIVE，即默认最大化时进入全屏模式。
     * @param { boolean } [acrossDisplay] - 控制悬停态下主窗口在最大化时的瀑布流模式行为。默认值为`undefined`。
     *     <br>仅主窗口可设置此参数，非主窗口调用时返回错误码`1300004`。<br>取值为`true`时：
     *     <br>- 悬停态下，窗口将直接进入瀑布流模式；<br>- 展开态下，窗口进入最大化，并在悬停态下保持瀑布流模式。
     *     <br>取值为`false`时：<br>- 悬停态下，窗口将退出瀑布流模式，进入单面最大化（即窗口最大化时只在上半屏或下半屏显示）；
     *     <br>- 展开态下，窗口进入最大化，并在悬停态下退出瀑布流模式。<br>取值为`undefined`时，不修改窗口瀑布流模式行为：
     *     <br>- 悬停态下，窗口进入单面最大化；<br>- 展开态下，窗口进入最大化，并在悬停态下默认保持瀑布流模式。
     *     <br>**设备行为差异：** 仅在具备折叠功能的2in1设备可正常调用；在其他设备上调用不生效。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function maximize can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and maximizable subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    maximize(presentation?: MaximizePresentation, acrossDisplay?: boolean): Promise<void>;

    /**
     * 最大化应用窗口。
     *
     * @param { MaximizeOptions } [maximizeOptions] - The configuration of maximize.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. Invalid window type. Only main windows and maximizable subwindows are supported;
     *     2. The acrossDisplay parameter only supports main windows.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maximizeWithOptions(maximizeOptions?: MaximizeOptions): Promise<void>;

    /**
     * 禁止/使能通过拖拽方式缩放主窗口或启用装饰的子窗口的功能。使用callback异步回调。
     *
     * @param { boolean } enable - 设置窗口是否使能通过拖拽进行缩放，true表示使能，false表示禁止。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setResizeByDragEnabled(enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 禁止/使能通过拖拽方式缩放主窗口或启用装饰的子窗口的功能。使用Promise异步回调。
     *
     * @param { boolean } enable - 设置窗口是否使能通过拖拽进行缩放，true表示使能，false表示禁止。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setResizeByDragEnabled(enable: boolean): Promise<void>;

    /**
     * 设置是否隐藏非系统级悬浮窗口（[windowType]{@link @ohos.window:window.WindowType}类型为TYPE_FLOAT），使用callback异步回调。
     * 
     * 非系统级悬浮窗口是指非系统应用创建的悬浮窗口。默认情况下，一个系统应用主窗口可以与非系统级悬浮窗口共同显示，即该主窗口可以被上层的非系统级悬浮窗口遮挡，如果设置为true，则所有的非系统级悬浮窗口都会被隐藏，此时该主窗口就不会
     * 被上层的非系统级悬浮窗口遮挡。
     *
     * @param { boolean } shouldHide - 指示是否隐藏非系统级的悬浮窗口，true表示隐藏，false表示不隐藏。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSystemFloatingWindows(shouldHide: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置是否隐藏非系统级悬浮窗口（[windowType]{@link @ohos.window:window.WindowType}类型为TYPE_FLOAT），使用Promise异步回调。
     * 
     * 非系统级悬浮窗口是指非系统应用创建的悬浮窗口。默认情况下，一个系统应用主窗口可以与非系统级悬浮窗口共同显示，即该主窗口可以被上层的非系统级悬浮窗口遮挡，如果设置为true，则所有的非系统级悬浮窗口都会被隐藏，此时该主窗口就不会
     * 被上层的非系统级悬浮窗口遮挡。
     *
     * @param { boolean } shouldHide - 指示是否隐藏非系统级的悬浮窗口，true表示隐藏，false表示不隐藏。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hideNonSystemFloatingWindows(shouldHide: boolean): Promise<void>;

    /**
     * 获取当前应用窗口的尺寸限制，单位为物理像素px。
     *
     * @returns { WindowLimits } 当前窗口尺寸限制。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowLimits(): WindowLimits;

    /**
     * 获取当前应用窗口的尺寸限制，单位为虚拟像素vp。
     * 
     * 对于系统窗口和全局悬浮窗，默认窗口宽高的系统限制最小值为1px，通过此接口获取到的1vp，是计算取整后的值。
     *
     * @returns { WindowLimits } 当前窗口尺寸限制。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    getWindowLimitsVP(): WindowLimits;

    /**
     * 设置当前窗口的尺寸限制，使用Promise异步回调。
     * 
     * 默认存在一个系统尺寸限制，系统尺寸限制由产品配置决定，不可修改。
     * 
     * 未调用setWindowLimits配置过WindowLimits时，使用[getWindowLimits]{@link window.Window.getWindowLimits}或
     * [getWindowLimitsVP]{@link window.Window.getWindowLimitsVP}可获取系统限制。
     * 
     * > **说明：**
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，处于自由悬浮窗口模式（即窗口模式为
     * > window.WindowStatusType.FLOATING）的窗口在尺寸变化时受[WindowLimits]{@link @ohos.window:window.WindowLimits}约束。触发场景包括：应用主动
     * > 改变窗口大小（如调用[resize()]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}）；系统调节窗
     * > 口大小（如分辨率变化、显示大小缩放系数变化）；用户拖拽缩放窗口。
     * >
     * > - 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，主窗口尺寸不受
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}约束，其他类型窗口仍受
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}约束。
     *
     * @param { WindowLimits } windowLimits - 目标窗口的尺寸限制，单位为px或vp。
     * @returns { Promise<WindowLimits> } Promise对象。返回设置后的尺寸限制，为入参与系统尺寸限制的交集。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowLimits(windowLimits: WindowLimits): Promise<WindowLimits>;

    /**
     * 设置当前窗口的尺寸限制，使用Promise异步回调。
     * 
     * 默认存在一个系统尺寸限制，系统尺寸限制由产品配置决定，不可修改。
     * 
     * 未调用setWindowLimits配置过WindowLimits时，使用[getWindowLimits]{@link window.Window.getWindowLimits}或
     * [getWindowLimitsVP]{@link window.Window.getWindowLimitsVP}可获取系统限制。
     * 
     * > **说明：**
     * >
     * > - [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，处于自由悬浮窗口模式（即窗口模式为
     * > window.WindowStatusType.FLOATING）的窗口在尺寸变化时受[WindowLimits]{@link @ohos.window:window.WindowLimits}约束。触发场景包括：应用主动
     * > 改变窗口大小（如调用[resize()]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}）；系统调节窗
     * > 口大小（如分辨率变化、显示大小缩放系数变化）；用户拖拽缩放窗口。
     * >
     * > - 非[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，主窗口尺寸不受
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}约束，其他类型窗口仍受
     * > [WindowLimits]{@link @ohos.window:window.WindowLimits}约束。
     *
     * @param { WindowLimits } windowLimits - 目标窗口的尺寸限制，单位为px或vp。
     * @param { boolean } isForcible - 是否强制设置窗口的尺寸限制。<br>入参[windowLimits]{@link @ohos.window:window.WindowLimits}的单位为vp时
     *     ：无论设置true还是false，都按照false处理，窗口宽高的最小值和最大值都取决于系统限制。<br>入参[windowLimits]{@link @ohos.window:window.WindowLimits}
     *     的单位为px时：设置为true，表示窗口宽高最小值以系统限制值和40vp两者中的低数值为准，窗口宽高的最大值仍取决于系统限制；设置为false，表示窗口宽高的最小值和最大值都取决于系统限制。
     * @returns { Promise<WindowLimits> } Promise对象。返回设置后的窗口尺寸限制。
     *     <br>入参[windowLimits]{@link @ohos.window:window.WindowLimits}的单位为vp时，返回入参与系统默认窗口尺寸限制的交集。
     *     <br>入参[windowLimits]{@link @ohos.window:window.WindowLimits}的单位为px时，isForcible为false则返回入参与系统默认窗口尺寸限制的交集；isForcible为
     *     true则返回入参与[系统限制的最小值与40vp两者中的低数值，系统限制的最大值]的交集。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setWindowLimits(windowLimits: WindowLimits, isForcible: boolean): Promise<WindowLimits>;

    /**
     * 禁止/使能单帧合成渲染节点的功能。使用Promise异步回调。
     * 
     * 单帧合成渲染节点的功能主要用于跟手性要求较高的场景，使能该功能之后可以降低渲染节点的上屏延时。通过setSingleFrameComposerEnabled接口，如果enable设置为true，则使能单帧合成渲染节点的功能，否
     * 则禁止单帧合成渲染节点的功能。
     *
     * @param { boolean } enable - 设置单帧合成渲染节点的功能是否使能，true表示使能，false表示禁止。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    setSingleFrameComposerEnabled(enable: boolean): Promise<void>;

    /**
     * 当前窗口获焦时是否保留由其他窗口创建的软键盘，支持系统窗口、应用子窗口、模态窗和全局悬浮窗。
     *
     * @param { boolean } keepKeyboardFlag - 是否保留其他窗口创建的软键盘。true表示保留；false表示不保留。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keepKeyboardOnFocus(keepKeyboardFlag: boolean): void;

    /**
     * 将主窗口从全屏、最大化、分屏模式下还原为自由悬浮窗口模式（即窗口模式为window.WindowStatusType.FLOATING），并恢复到进入该模式之前的大小和位置，已经是自由悬浮窗口模式不可再还原。使用Promise
     * 异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     *     3. The window does not support floating mode.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    recover(): Promise<void>;

    /**
     * Restores the main window from full-screen, maximized, or split-screen mode to a floating window,
     * and resets its size and position to their previous values before full-screen,
     * maximized, or split-screen mode was entered.
     *
     * @param { WindowSnapshotAnimationConfig } snapshotAnimationConfig - 截图动画参数配置。
     * @returns { Promise<void> } - 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. The window does not support floating mode.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    recover(snapshotAnimationConfig: WindowSnapshotAnimationConfig): Promise<void>;

    /**
     * 主窗口为最小化状态且UIAbility生命周期为onForeground时，将主窗口从最小化状态，恢复到前台显示，并恢复到进入最小化状态之前的大小和位置。主窗口为前台状态时，仅抬升主窗口层级。使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    restore(): Promise<void>;

    /**
     * 将当前窗口的主窗口恢复到前台显示，如果主窗口已处于前台，则会抬升主窗层级。此接口仅适用于类型为[TYPE_FLOAT]{@link @ohos.window:window.WindowType}的窗口，并且需在窗口触发过
     * [DOWN]{@link ./@internal/component/ets/enums:TouchType}事件后才能调用。使用Promise异步回调。
     *
     * @param { Record<string, Object> } [wantParameters] - Want parameters.
     *     Custom want parameter delivered when restoring the main window.
     *     Want parameters are used for UIAbility onNewWant.
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. The window is not float window.
     *     2. The window is not at foreground or has never been clicked.
     *     3. The window cannot find main window.
     * @throws { BusinessError } 1300007 - Restore parent main window failed. Possible cause:
     *     1. The main window is in PAUSED lifecycle state.
     *     2. The main window is in background during recent.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    restoreMainWindow(wantParameters?: Record<string, Object>): Promise<void>;

    /**
     * 设置窗口标题栏是否可见，对存在标题栏和三键区的窗口形态生效。Stage模型下，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     * 
     * 设置窗口标题栏不可见后，当主窗口进入全屏沉浸状态时，此时鼠标Hover到上方窗口标题栏热区上会显示悬浮标题栏。若想禁用悬浮标题栏显示，请使用
     * [setTitleAndDockHoverShown()]{@link window.Window.setTitleAndDockHoverShown}接口。
     *
     * @param { boolean } isVisible - 设置标题栏是否可见，true为可见，false为隐藏。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation. [since 11 - 19]
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowDecorVisible(isVisible: boolean): void;

    /**
     * 查询窗口标题栏是否可见。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @returns { boolean } 返回当前窗口标题栏是否可见，true表示可见，false表示不可见。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getWindowDecorVisible(): boolean;

    /**
     * 禁止/使能主窗或子窗标题栏默认移动窗口和双击最大化的功能，当禁用标题栏默认移动窗口和双击最大化的功能时，可使用[startMoving()]{@link window.Window.startMoving()}在应用热区中发起
     * 拖拽移动，使用[maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)}实现最大化功能。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { boolean } enabled - 是否使能标题栏默认移动窗口和双击最大化功能，true表示使能，false表示不使能。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleMoveEnabled(enabled: boolean): void;

    /**
     * 设置窗口标题，使用Promise异步回调。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { string } titleName - 窗口标题。标题显示区域最右端不超过系统三键区域最左端，超过部分以省略号表示。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setWindowTitle(titleName: string): Promise<void>;

    /**
     * 设置子窗的模态属性是否启用，使用Promise异步回调。
     * 
     * 子窗口调用该接口时，设置子窗口模态属性是否启用。启用子窗口模态属性后，其父级窗口不能响应用户操作，直到子窗口关闭或者子窗口的模态属性被禁用。
     * 
     * 子窗口之外的窗口调用该接口时，会报错。
     *
     * @param { boolean } isModal - 设置子窗口模态属性是否启用，true为启用，false为不启用。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 20]
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setSubWindowModal(isModal: boolean): Promise<void>;

    /**
     * 设置子窗的模态类型，使用Promise异步回调。
     * 
     * 当子窗口模态类型为模窗口子窗时，其父级窗口不能响应用户操作，直到子窗口关闭或者子窗口的模态类型被禁用。
     * 
     * 当子窗口模态类型为模应用子窗时，其父级窗口与该应用其他实例的窗口不能响应用户操作，直到子窗口关闭或者子窗口的模态类型被禁用。
     * 
     * 此接口仅支持设置子窗口模态类型，当需要禁用子窗口模态属性时，建议使用
     * [setSubWindowModal<sup>12+</sup>]{@link window.Window.setSubWindowModal(isModal: boolean)}。
     * 
     * 子窗口之外的窗口调用该接口时，会报错。
     *
     * @param { boolean } isModal - 设置子窗口模态属性是否启用，true为启用，false为不启用。当前仅支持设置为true。
     * @param { ModalityType } modalityType - 子窗口模态类型。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 20]
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setSubWindowModal(isModal: boolean, modalityType: ModalityType): Promise<void>;

    /**
     * 设置窗口的标题栏高度，对存在标题栏和三键区的窗口形态生效。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     * 
     * 当主窗口进入全屏沉浸状态时，此时鼠标Hover到窗口标题栏热区时，会显示悬浮标题栏，悬浮标题栏高度固定为37vp。
     * 
     * 由于系统像素转换可能存在精度误差，设置后调用[getWindowDecorHeight()]{@link window.Window.getWindowDecorHeight}获取的值可能与设置的值存在1vp的差异。
     *
     * @param { int } height - 设置的窗口标题栏高度，仅支持具有窗口标题栏的窗口。该参数为整数，浮点数输入将向下取整，取值范围为[37,112]，范围外为非法参数，单位为vp。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Invalid parameter range.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setWindowDecorHeight(height: int): void;

    /**
     * 对存在标题栏和三键区的窗口形态生效，用于获取窗口的标题栏高度。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     * 
     * 由于系统像素转换可能存在精度误差，调用[setWindowDecorHeight()]{@link window.Window.setWindowDecorHeight}设置的值与获取的值可能存在1vp的差异。
     *
     * @returns { int } 返回的窗口标题栏高度。该参数为整数，取值范围为[37,112]，单位为vp。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getWindowDecorHeight(): int;

    /**
     * 设置装饰栏按钮样式，仅对主窗和子窗生效。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { DecorButtonStyle } dectorStyle - 要设置的装饰栏按钮样式。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setDecorButtonStyle(dectorStyle: DecorButtonStyle): void;

    /**
     * 获取装饰栏按钮样式，仅对主窗和子窗生效。
     *
     * @returns { DecorButtonStyle } 返回当前窗口装饰栏上的按钮样式，窗口装饰按钮区域位于窗口的右上角。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getDecorButtonStyle(): DecorButtonStyle;

    /**
     * 实现设置窗口可触摸区域；不设置时默认整个窗口区域可触摸；设置窗口可触摸区域后，区域外触摸事件将被透传；如果窗口区域发生变化需要重新设置。
     *
     * @permission ohos.permission.SET_WINDOW_TOUCH_AREAS [since 26.0.0]
     * @param { Array<Rect> } rects - 窗口可触摸区域。可触摸区域最大个数不能超过10个，且范围不能超出窗口区域。
     * @returns { Promise<void> } Promise that returns no value. [since 26.0.0]
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API. [since 26.0.0]
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12 - 24]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    setTouchableAreas(rects: Array<Rect>): Promise<void>;

    /**
     * 获取主窗口或启用装饰的子窗口的标题栏上的最小化、最大化、关闭按钮矩形区域。
     *
     * @returns { TitleButtonRect } 标题栏上的最小化、最大化、关闭按钮矩形区域，该区域位置坐标相对窗口右上角。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    getTitleButtonRect(): TitleButtonRect;

    /**
     * 设置主窗标题栏上的最大化、最小化、分屏按钮是否可见。
     * 
     * 仅对在当前场景下可见的标题栏按钮（最大化、最小化、分屏）生效。
     *
     * @param { boolean } isMaximizeVisible - 设置最大化按钮是否可见，true为可见，false为隐藏。
     * @param { boolean } isMinimizeVisible - 设置最小化按钮是否可见，true为可见，false为隐藏。
     * @param { boolean } isSplitVisible - 设置分屏按钮是否可见，true为可见，false为隐藏。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    setTitleButtonVisible(isMaximizeVisible: boolean, isMinimizeVisible: boolean, isSplitVisible: boolean): void;

    /**
     * 设置主窗标题栏上的最大化、最小化、关闭按钮是否可见。
     *
     * @param { boolean } isMaximizeButtonVisible - 设置最大化按钮是否可见，true为可见，false为隐藏。如果最大化按钮隐藏，那么在最大化场景下，也隐藏对应的还原按钮。
     * @param { boolean } isMinimizeButtonVisible - 设置最小化按钮是否可见，true为可见，false为隐藏。
     * @param { boolean } isCloseButtonVisible - 设置关闭按钮是否可见，true为可见，false为隐藏，默认值true。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *	   Possible cause: Invalid window type. Only main windows and SubWindowOptions.zLevelAboveParentLoosened is true are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void;

    /**
     * 应用部分界面支持横向布局时，在进入该界面时使能，使能后可支持进入横向多窗。不建议竖向布局界面使用。
     *
     * 此接口只对应用主窗口生效，且需要在module.json5配置文件中[abilities](docroot://quick-start/module-configuration-file.md#abilities标签)标签中配
     * 置preferMultiWindowOrientation属性为"landscape_auto"。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002  - 该窗口状态异常。可能原因：窗口未创建或已销毁。
     * @throws { BusinessError } 1300003  - 窗口管理器服务运行异常。可能原因：内部错误。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    enableLandscapeMultiWindow(): Promise<void>;

    /**
     * 开始移动窗口，使用Promise异步回调。
     * 
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，对系统窗口、应用主窗口、应用子窗口、全局悬浮窗和模态窗口生效。非自由窗口状态下，仅对系统窗口、应用子窗
     * 口、全局悬浮窗和模态窗口生效，应用主窗口调用该接口返回801或1300004错误码。
     * 
     * 仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)事件（其中，事件类型必须为
     * TouchType.Down）的回调方法中调用此接口才会有移动效果，成功调用此接口后，窗口将跟随鼠标或触摸点移动。
     * 
     * 在点击拖拽场景下，若不期望在按下时触发拖拽事件，则可以在事件类型为[TouchType.Move]{@link ./@internal/component/ets/enums:TouchType}（需要保证当前行为已经触发
     * TouchType.Down事件）时调用此接口，触发移动效果。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type, main windows are not supported in non-free window mode.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    startMoving(): Promise<void>;

    /**
     * 指定鼠标在窗口内的位置并移动窗口，使用Promise异步回调。
     * 
     * 在同应用内窗口分合后，且鼠标保持按下状态直接移动新窗口，如果此时鼠标快速移动，窗口移动时鼠标可能会在窗口外。可以使用本接口指定窗口移动时鼠标在窗口内的位置，先移动窗口到鼠标位置，再开始移动窗口。
     * 
     * 仅在[onTouch](docroot://reference/apis-arkui/arkui-ts/ts-universal-events-touch.md#touchevent对象说明)事件（其中，事件类型必须为
     * TouchType.Down）的回调方法中调用此接口才会有移动效果，成功调用此接口后，窗口将跟随鼠标移动。
     * 
     * 在点击拖拽场景下，若不期望在按下时触发拖拽事件，则可以在事件类型为[TouchType.Move]{@link ./@internal/component/ets/enums:TouchType}（需要保证当前行为已经触发
     * TouchType.Down事件）时调用此接口，触发移动效果。
     *
     * @param { int } offsetX - 窗口移动时预期鼠标位置相对窗口左上角的x轴偏移量，单位为px，该参数仅支持整数输入，浮点数向下取整。负值为非法参数，大于窗口宽度为非法参数，窗口宽度可以在窗口属性
     *     [WindowProperties]{@link @ohos.window:window.WindowProperties}中获取。
     * @param { int } offsetY - 窗口移动时预期鼠标位置相对窗口左上角的y轴偏移量，单位为px，该参数仅支持整数输入，浮点数向下取整。负值为非法参数，大于窗口高度为非法参数，窗口高度可以在窗口属性
     *     [WindowProperties]{@link @ohos.window:window.WindowProperties}中获取。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    startMoving(offsetX: int, offsetY: int): Promise<void>;

    /**
     * 在窗口拖拽移动过程中，通过此接口来停止窗口移动，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    stopMoving(): Promise<void>;

    /**
     * 使能/禁止拖拽窗口，仅对系统窗口、应用子窗口、全局悬浮窗和模态窗口生效。使用Promise异步回调。
     * 
     * 使能后，将允许通过鼠标操作或触摸对窗口进行拉伸操作。
     *
     * @param { boolean } enable - 是否允许拖拽。<br>true表示允许，false表示不允许。</br>
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 14 - 19]
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use. [since 14 - 19]
     * @publicapi [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    enableDrag(enable: boolean): Promise<void>;

    /**
     * 应用部分界面支持横向布局时，在退出该界面时去使能，去使能后不支持进入横向多窗。
     *
     * 此接口只对应用主窗口生效，且需要在module.json5配置文件中[abilities](docroot://quick-start/module-configuration-file.md#abilities标签)标签中配
     * 置preferMultiWindowOrientation属性为"landscape_auto"。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 1300002  - 该窗口状态异常。可能原因：窗口未创建或已销毁。
     * @throws { BusinessError } 1300003  - 窗口管理器服务运行异常。可能原因：内部错误。
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    disableLandscapeMultiWindow(): Promise<void>;

    /**
     * 开启窗口标题栏上的最小化、最大化、关闭按钮矩形区域变化的监听，对存在标题栏和三键区的窗口形态生效。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { 'windowTitleButtonRectChange' } type - 监听事件，固定为'windowTitleButtonRectChange'，即标题栏上的最小化、最大化、关闭按钮矩形区域变化事件。
     * @param { Callback<TitleButtonRect> } callback - 回调函数。返回当前标题栏上的最小化、最大化、关闭按钮矩形区域。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destoryed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    on(type: 'windowTitleButtonRectChange', callback: Callback<TitleButtonRect>): void;

    /**
     * Subscribes to the change event of the rectangle that holds the minimize,
     * maximize, and close buttons on the title bar of the window.
     *
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the new rectangle.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destoryed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void;

    /**
     * 关闭窗口标题栏上的最小化、最大化、关闭按钮矩形区域变化的监听，对存在标题栏和三键区的窗口形态生效。如果使用Stage模型，该接口需要在
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}调用生效后使用。
     *
     * @param { 'windowTitleButtonRectChange' } type - 监听事件，固定为'windowTitleButtonRectChange'，即标题栏上的最小化、最大化、关闭按钮矩形区域变化事件。
     * @param { Callback<TitleButtonRect> } callback - 回调函数。返回当前标题栏上的最小化、最大化、关闭按钮矩形区域。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有标题栏上的最小
     *     化、最大化、关闭按钮矩形区域变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destoryed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    off(type: 'windowTitleButtonRectChange', callback?: Callback<TitleButtonRect>): void;

    /**
     * Unsubscribes from the change event of the rectangle that holds the minimize,
     * maximize, and close buttons on the title bar of the window.
     *
     * @param { Callback<TitleButtonRect> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destoryed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void;

    /**
     * 设置异形窗口的掩码，使用Promise异步回调。异形窗口为非常规形状的窗口，掩码用于描述异形窗口的形状。此接口仅限子窗和全局悬浮窗可用。
     * 
     * 当异形窗口大小发生变化时，实际的显示内容为掩码大小和窗口大小的交集部分。
     * 
     * 该接口只在多个线程操作同一个窗口时可能返回错误码1300002。窗口被销毁场景下错误码返回401。
     *
     * @param { Array<Array<long>> } windowMask - 异形窗口的掩码，该参数仅支持宽高为窗口宽高、取值为整数0和整数1的二维数组输入，整数0代表所在像素透明，整数1代表所在像素不透明，宽高不符合
     *     的二维数组或二维数组取值不为整数0和整数1的二维数组为非法参数。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowMask(windowMask: Array<Array<long>>): Promise<void>;

    /**
     * 设置异形窗口的掩码
     *
     * @param { Uint8Array } windowMask - windowMask仅包含每像素alpha透明度值。
     *     有效范围：0（完全透明）到255（完全不透明），大小必须等于(maskWidth*mask Heights)
     * @param { int } maskWidth - 掩码宽度（以像素为单位）。必须等于目标窗口宽度
     *     <br>取值范围为全体整数。
     * @param { int } maskHeight - 以像素为单位的遮罩高度。必须等于目标窗口高度
     *     <br>取值范围为全体整数。
     * @returns { Promise<void> } 不会返回任何值的Promise。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *                     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. The maskWidth is not equal to the window width or the maskHeight is not equal to the window height.
     *     2. The length of windowMask is not equal to maskWidth multiplied by maskHeight.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setWindowMaskWithAlpha(windowMask: Uint8Array, maskWidth: int, maskHeight: int): Promise<void>;

    /**
     * 清除异形窗口的掩码使其恢复为矩形窗口，使用Promise异步回调。异形窗口为非常规形状的窗口，掩码用于描述异形窗口的形状。此接口仅限子窗和全局悬浮窗可用。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     *     3. The window has not set window mask yet.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only subwindows and float windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    clearWindowMask(): Promise<void>;

    /**
     * 开启窗口矩形（窗口位置及窗口大小）变化的监听。
     *
     * @param { 'windowRectChange' } type - 监听事件，固定为'windowRectChange'，即窗口矩形变化事件。
     * @param { Callback<RectChangeOptions> } callback - 回调函数。返回当前窗口矩形变化值及变化原因。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'windowRectChange', callback: Callback<RectChangeOptions>): void;

    /**
     * 开启窗口矩形（窗口位置及窗口大小）变化的监听。
     *
     * @param { Callback<RectChangeOptions> } callback - 回调函数。返回当前窗口矩形变化值及变化原因。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowRectChange(callback: Callback<RectChangeOptions>): void;

    /**
     * 关闭窗口矩形（窗口位置及窗口大小）变化的监听。
     *
     * @param { 'windowRectChange' } type - 监听事件，固定为'windowRectChange'，即窗口矩形变化事件。
     * @param { Callback<RectChangeOptions> } [callback] - 回调函数。返回当前的窗口矩形及变化原因。
     *     如果传入参数，则关闭该监听。如果未传入参数，则关闭所有窗口矩形变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'windowRectChange', callback?: Callback<RectChangeOptions>): void;

    /**
     * 关闭窗口矩形（窗口位置及窗口大小）变化的监听。
     *
     * @param { Callback<RectChangeOptions> } [callback] - 回调函数。返回当前的窗口矩形及变化原因。
     *     如果传入参数，则关闭该监听。如果未传入参数，则关闭所有窗口矩形变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowRectChange(callback?: Callback<RectChangeOptions>): void;

    /**
     * 开启[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。
     *
     * @param { 'rectChangeInGlobalDisplay' } type - 监听事件，固定为'rectChangeInGlobalDisplay'，即全局坐标系下窗口矩形变化事件。
     * @param { Callback<RectChangeOptions> } callback - 回调函数。返回当前窗口矩形变化值及变化原因。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void;

    /**
     * 开启[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。
     *
     * @param { Callback<RectChangeOptions> } callback - 回调函数。返回当前窗口矩形变化值及变化原因。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void;

    /**
     * 关闭[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。
     *
     * @param { 'rectChangeInGlobalDisplay' } type - 监听事件，固定为'rectChangeInGlobalDisplay'，即全局坐标系下窗口矩形变化事件。
     * @param { Callback<RectChangeOptions> } [callback] - 回调函数。返回当前的窗口矩形及变化原因。
     *     如果传入参数，则关闭该监听。如果未传入参数，则关闭所有全局坐标系下窗口矩形变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void;

    /**
     * 关闭[全局坐标系](docroot://windowmanager/window-terminology.md#全局坐标系)下窗口矩形（窗口位置及窗口大小）变化的监听事件。
     *
     * @param { Callback<RectChangeOptions> } [callback] - 回调函数。返回当前的窗口矩形及变化原因。
     *     如果传入参数，则关闭该监听。如果未传入参数，则关闭所有全局坐标系下窗口矩形变化的监听。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void;

    /**
     * 将相对于当前窗口左上角的坐标转换为相对于主屏幕左上角的全局坐标。
     * 
     * 不支持在经过显示缩放的窗口中调用，例如手机或平板设备在非自由多窗模式下的悬浮窗场景。
     *
     * @param { int } winX - 表示以当前窗口左上角为原点的x轴方向偏移量，单位为px。值为正表示在原点右侧，
     *     值为负表示在原点左侧。该参数应为整数，非整数输入将向下取整。
     * @param { int } winY - 表示以当前窗口左上角为原点的y轴方向偏移量，单位为px。值为正表示在原点下方，
     *     值为负表示在原点上方。该参数应为整数，非整数输入将向下取整。
     * @returns { Position } 返回转换后的坐标。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    clientToGlobalDisplay(winX: int, winY: int): Position;

    /**
     * 将相对于主屏幕左上角的全局坐标转换为相对于当前窗口左上角的坐标。
     * 
     * 不支持在经过显示缩放的窗口中调用，例如手机或平板设备在非自由多窗模式下的悬浮窗场景。
     *
     * @param { int } globalDisplayX - 表示以当前窗口左上角为原点的x轴方向偏移量，单位为px。值为正表示在原点右侧，
     *     值为负表示在原点左侧。该参数应为整数，非整数输入将向下取整。
     * @param { int } globalDisplayY - 表示以当前窗口左上角为原点的y轴方向偏移量，单位为px。
     *     值为正表示在原点下方，值为负表示在原点上方。该参数应为整数，非整数输入将向下取整。
     * @returns { Position } 返回转换后的坐标。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300010 - The operation in the current window status is invalid.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayToClient(globalDisplayX: int, globalDisplayY: int): Position;

    /**
     * 设置窗口灰阶，使用Promise异步回调。该接口需要在调用
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}使窗口加载页面内容后调用。
     *
     * @param { double } grayScale - 窗口灰阶。该参数为浮点数，取值范围为[0.0, 1.0]。0.0表示窗口图像无变化，1.0表示窗口图像完全转为灰度图像，0.0至1.0之间时效果呈线性变化。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setWindowGrayScale(grayScale: double): Promise<void>;

    /**
     * 设置当前窗口是否开启沉浸式布局，该调用不会改变窗口模式和窗口大小。仅主窗口和子窗口可调用。
     *
     * @param { boolean } enabled - 是否开启沉浸式布局。<br>true表示开启，false表示关闭。</br>
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setImmersiveModeEnabledState(enabled: boolean): void;

    /**
     * 查询当前窗口是否开启沉浸式布局。
     * 
     * 仅支持主窗和子窗调用。
     * 
     * 返回值与[setImmersiveModeEnabledState()]{@link window.Window.setImmersiveModeEnabledState}以及
     * [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}设置结果一致，若
     * 未调用上述两个接口则默认返回false。
     *
     * @returns { boolean } - 是否设置开启沉浸式布局。true表示开启沉浸式布局，false表示关闭沉浸式布局。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     *     Possible cause: Invalid window type. Only main windows and subwindows are supported.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getImmersiveModeEnabledState(): boolean;

    /**
     * 查询当前窗口是否处于沉浸式布局状态。
     *
     * @returns { boolean } 是否处于沉浸式布局状态。true表示处于沉浸式布局状态，false表示不处于沉浸式布局状态。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    isImmersiveLayout(): boolean;

    /**
     * 获取当前应用窗口的模式。
     * 
     * > **说明：**
     * >
     * > 在[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态下，应用的
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置小于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有
     * > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::FULL_SCREEN。应用的
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#配置文件标签)设置大于等于14时，在窗口最大化状态（窗口铺满整个屏幕，2in1设备会有
     * > dock栏和状态栏，Tablet设备会有状态栏）时返回值对应为WindowStatusType::MAXIMIZE。
     *
     * @returns { WindowStatusType } 当前窗口模式。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowStatus(): WindowStatusType;

    /**
     * 判断当前窗口是否已获焦。为获取准确的获焦状态，需要在[WindowEventType]{@link @ohos.window:window.WindowEventType}生命周期处于WINDOW_ACTIVE之后调用。
     * 
     * 可使用[on('windowEvent')]{@link window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}监听对应状态变更，
     * 再执行对应具体业务。
     *
     * @returns { boolean } 当前窗口是否已获焦。true表示当前窗口已获焦，false则表示当前窗口未获焦。
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isFocused(): boolean;

    /**
     * 创建主窗口、子窗口或悬浮窗下的子窗口，使用Promise异步回调。
     *
     * @param { string } name - 子窗口的名字。
     * @param { SubWindowOptions } options - 子窗口参数。decorEnabled为true时，子窗口为非
     *     [沉浸式布局](docroot://windowmanager/window-terminology.md#沉浸式布局)；decorEnabled为false时，子窗口为沉浸式布局。
     * @returns { Promise<Window> } Promise对象。返回当前Window下创建的子窗口对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. The subWindow has been created and can not be created again.
     *     4. It is not allowed to create non-secure window when secure extension exists.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. Invalid window type. Only main windows, subwindows, and floating windows are supported.
     *     2. When SubWindowOptions.zLevelAboveParentLoosened is true, only main windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;

    /**
     * 更改子窗口的父窗口，该父窗口仅支持同进程下的主窗口、子窗口或悬浮窗，使用Promise异步回调。
     * 
     * 如果该子窗口处于获焦状态，且新的父窗口处于前台，则会抬升父窗口的层级。
     * 
     * 如果该子窗口处于获焦状态，且新的父窗口的子窗口存在层级更高的模态子窗口，则焦点会转移给该模态子窗口。
     *
     * @param { int } windowId - 父窗口id，该参数应为整数。推荐使用[getWindowProperties()]{@link window.Window.getWindowProperties}方法获取父
     *     窗口id属性。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only subwindow are supported.
     * @throws { BusinessError } 1300009 - The parent window is invalid. Possible cause:
     *     The parent window does not exist or has been destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    setParentWindow(windowId: int): Promise<void>;

    /**
     * 获取子窗口的父窗口。
     *
     * @returns { Window } 子窗口的父窗口对象。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    getParentWindow(): Window;

    /**
     * 设置子窗口在其父窗口处于拖拽移动或拖拽缩放过程时，该子窗口是否支持跨多个屏幕同时显示。使用Promise异步回调。
     * 
     * 通过监听父窗口大小位置变化，对子窗口调用
     * [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}等接口实现子窗口跟随父窗口布局时
     * ，此时子窗口默认不支持跨多个屏幕同时显示。
     * 
     * 对子窗口调用此接口后可以使能子窗口在跟随父窗口布局过程中跨多个屏幕同时显示。
     *
     * @param { boolean } enabled - 设置子窗口在其父窗口处于拖拽移动或拖拽缩放过程时，该子窗口是否支持跨多个屏幕同时显示。
     *     true表示支持；false表示不支持。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.Function setFollowParentMultiScreenPolicy can not work
     *     correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setFollowParentMultiScreenPolicy(enabled: boolean): Promise<void>;

    /**
     * 设置主窗口进入全屏模式时鼠标Hover到热区上是否显示窗口标题栏和dock栏，使用Promise异步回调。
     *
     * @param { boolean } isTitleHoverShown - 是否显示窗口标题栏。<br>true表示显示窗口标题栏；false表示不显示窗口标题栏。默认值是true。</br>
     * @param { boolean } isDockHoverShown - 是否显示dock栏。<br>true表示显示dock栏；false表示不显示dock栏。默认值是true。</br>
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setTitleAndDockHoverShown(isTitleHoverShown?: boolean, isDockHoverShown?: boolean): Promise<void>;

    /**
     * 设置主窗口容器在焦点态和非焦点态时的背景色。在Stage模型下，该接口需在调用
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * 或[setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}后使用。
     * 
     * 窗口容器背景色覆盖整个窗口区域，包括标题栏和内容区域。内容区域背景色默认跟随系统深浅色，当同时使用该接口和
     * [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}设置背景色时，内容区域显示窗口背景色，标题栏显示窗口容器背景色。
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { string } activeColor - 窗口容器处于焦点态时的背景色，为十六进制RGB或ARGB颜色，不区分大小写，例如'#00FF00'或'#FF00FF00'。
     * @param { string } inactiveColor - 窗口容器处于非焦点态时的背景色，为十六进制RGB颜色或ARGB颜色（透明度固定为'FF'），不区分大小写，例如'#00FF00'或'#FF00FF00'。
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowContainerColor(activeColor: string, inactiveColor: string): void;

    /**
     * 设置窗口是否使能延迟抬升，仅主窗和子窗可设置。
     * 
     * 不调用此接口或传入false，主窗和子窗在鼠标左键按下时，默认立即抬升。
     * 
     * 调用此接口使能延迟抬升后，在跨窗拖拽场景，可拖拽组件所在窗口在鼠标左键按下时不会立即抬升，直到鼠标左键抬起。
     *
     * @param { boolean } isEnabled - 是否使能延迟抬升。<br>true表示使能窗口延迟抬升；false表示不使能窗口延迟抬升。
     * @throws { BusinessError } 801 - Capability not supported.function setWindowDelayRaiseOnDrag can not work
     *     correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    setWindowDelayRaiseOnDrag(isEnabled: boolean): void;

    /**
     * 获取当前子窗口层级级别。不支持主窗、系统窗调用。
     *
     * @returns { int } 当前子窗口层级级别。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setSubWindowZLevel can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    getSubWindowZLevel(): int;

    /**
     * 仅支持[系统窗口](docroot://windowmanager/window-terminology.md#系统窗口)设置旋转锁定，锁定后系统窗口显示方向不变，未锁定时系统窗口显示方向受主窗口显示方向、旋转锁定按钮、
     * sensor旋转影响。非系统窗口调用返回1300029错误码。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 如果在锁定期间主窗口通过
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > 设置显示方向属性，则解除旋转锁定后该窗口在前台还原最后一次的方向请求。
     * >
     * > - 如果在锁定期间系统窗口通过
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > 设置显示方向属性，则解除旋转锁定后该窗口在前台且层级最高时还原最后一次的方向请求。低层级窗口通过setRotationLocked设置旋转锁定不会影响高层级系统窗口调用
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > 设置显示方向。
     * >
     * > - 如果在锁定期间sensor方向发生了变化，则解除旋转锁定后还原到最后一次的sensor方向。
     * >
     * > - 如果在锁定期间应用调用
     * > [setOrientation()]{@link @ohos.screen:screen.Screen.setOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > 设置屏幕方向，忽略该次屏幕方向设置。
     * >
     * > - 解除锁定时，根据主窗口的显示方向属性
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > 、sensor方向等决定应用显示方向，具体见[窗口旋转简介](docroot://windowmanager/window-rotation.md#窗口旋转简介)。
     * >
     * > - 不影响应用[module.json5配置文件中的abilities标签](docroot://quick-start/module-configuration-file.md#abilities标签)
     * > orientation属性设置的启动方向。
     *
     * @param { boolean } locked - 设置是否锁定旋转，true表示锁定旋转，false表示解除锁定。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Function setRotationLocked can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300029 - This window type is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    setRotationLocked(locked: boolean): Promise<void>;

    /**
     * 仅支持[系统窗口](docroot://windowmanager/window-terminology.md#系统窗口)获取当前旋转锁定状态。非系统窗口调用返回1300029错误码。
     *
     * @returns { boolean } 当前系统窗是否设置旋转锁定。true表示当前系统窗已锁定旋转；false表示当前系统窗未锁定旋转。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Function setRotationLocked can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300029 - This window type is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getRotationLocked(): boolean;

    /**
     * 设置当前窗口是否支持事件分离状态，使用Promise异步回调。默认场景下为true，支持事件分离状态。
     * 
     * 当enable为true，支持事件分离状态下：
     * 
     * - 所有手指点击产生的事件均会发送给其手指命中的窗口。
     * 
     * 当enable为false，不支持事件分离状态下：
     * 
     * - 当第一根手指点击持续命中该窗口未抬起时，后续其他手指无论是否点击命中该窗口，其产生的事件均会分发给该窗口。
     * - 当第一根手指点击未保持持续命中该窗口时，后续其他手指即使点击命中该窗口，其产生的事件也不会分发给该窗口，该事件会被系统丢弃。
     *
     * @param { boolean } enabled - 窗口是否支持事件分离状态。true表示支持；false表示不支持。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setSeparationTouchEnabled(enabled: boolean): Promise<void>;

    /**
     * 获取当前窗口是否支持事件分离的状态。
     *
     * @returns { boolean } 当前窗口是否支持事件分离。</br>true表示支持窗口事件分离，false表示不支持窗口事件分离。
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isSeparationTouchEnabled(): boolean;

    /**
     * 设置当前窗口是否能接收[拖拽事件]{@link ./@internal/component/ets/common:DragEvent}，使用Promise异步回调。
     * 
     * 默认场景下为true，能够接收拖拽事件。
     * 
     * 当enable为false，当前窗口不能接收拖拽事件。
     *
     * @param { boolean } enabled - 窗口是否能接收拖拽事件。true表示能够接收拖拽事件；false表示不能接收拖拽事件。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     *     Possible cause: Internal IPC error
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    setReceiveDragEventEnabled(enabled: boolean): Promise<void>;

    /**
     * 获取当前窗口是否能接收[拖拽事件]{@link ./@internal/component/ets/common:DragEvent}的状态。
     *
     * @returns { boolean } 当前窗口是否能接收拖拽事件的状态。</br>true表示能接收拖拽事件的状态，false表示不能接收拖拽事件的状态。
     * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
     *     not support this ability.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isReceiveDragEventEnabled(): boolean;

    /**
     * 提供窗口方向、屏幕方向和屏幕角度互相转换的能力。
     * 
     * 窗口方向指窗口所在屏幕的方向，以窗口模块对横竖屏的定义方式表示，窗口的方向分别用0、1、2和3表示竖屏、反向横屏、反向竖屏和横屏四个方向，其对横竖屏的定义与
     * [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}和枚举类
     * [Orientation]{@link @ohos.window:window.Orientation}中对横竖屏的定义一致，如Orientation设置为LANDSCAPE时，窗口方向为横屏。
     * 
     * > **说明：**
     * >
     * > 示意图和表格展示了直板机窗口方向、屏幕方向和屏幕角度的关系。
     * >
     * > ![orientationAndRotation](docroot://reference/apis-arkui/figures/orientationAndRotation.PNG)
     * 
     * | 屏幕角度 | 屏幕方向 | 窗口方向 |
     * | -------  | ------- | ------- |
     * | 0        | PORTRAIT  | PORTRAIT   |
     * | 90       | LANDSCAPE | LANDSCAPE_INVERTED |
     * | 180      | PORTRAIT_INVERTED | PORTRAIT_INVERTED |
     * | 270      | LANDSCAPE_INVERTED | LANDSCAPE |
     *
     * @param { RotationInfoType } from - 待转换的值的类型。
     * @param { RotationInfoType } to - 目标值的类型。
     * @param { int } value - 待转换的值。该参数为整数，浮点数输入将向下取整，取值范围为[0, 3]，范围外为非法参数（抛出错误码
     *     [401](docroot://reference/errorcode-universal.md#401-参数检查失败)）。
     * @returns { int } 返回目标类型的转换值。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int;

    /**
     * 设置主窗口拖拽的关键帧策略，并使用Promise处理异步回调。
     * 
     * 非主窗口调用时，返回1300004错误码。
     *
     * @param { KeyFramePolicy } keyFramePolicy - 用于设置拖拽的关键帧策略。
     * @returns { Promise<KeyFramePolicy> } Promise对象，返回实际生效的关键帧策略。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range; 2. The parameter format is incorrect.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    setDragKeyFramePolicy(keyFramePolicy: KeyFramePolicy): Promise<KeyFramePolicy>;

    /**
     * 查询当前窗口是否为[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)模式。
     *
     * @returns { boolean } 返回true表示在自由窗口模式，false表示非自由窗口模式。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isInFreeWindowMode(): boolean;

    /**
     * 开启自由窗口模式变化事件的监听。
     *
     * @param { 'freeWindowModeChange' } type - 监听事件，固定为'freeWindowModeChange'，即自由窗口模式变化事件。
     * @param { Callback<boolean> } callback - 回调函数。返回当前窗口是否在自由窗口模式，true表示是自由窗口模式，false表示非自由窗口模式。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     */
    on(type: 'freeWindowModeChange', callback: Callback<boolean>): void;

    /**
     * 关闭自由窗口模式变化事件的监听。
     *
     * @param { 'freeWindowModeChange' } type - 监听事件，固定为'freeWindowModeChange'，即自由窗口模式变化事件。
     * @param { Callback<boolean> } [callback] - 回调函数。返回当前窗口是否在自由窗口模式。如果传入参数，则关闭该监听。如果未传入参数，则关闭自由窗口模式变化事件的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     */
    off(type: 'freeWindowModeChange', callback?: Callback<boolean>): void;

    /**
     * free window mode change callback on.
     *
     * @param { Callback<boolean> } callback Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onFreeWindowModeChange(callback: Callback<boolean>): void;

    /**
     * free window mode change callback off.
     *
     * @param { Callback<boolean> } [callback] Callback used to return the result if the current device
     *     is in free window mode. true - means in free window mode; false - means not in free window mode.
     *     Unregister the callback function. If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offFreeWindowModeChange(callback?: Callback<boolean>): void;

    /**
     * 给特定场景下的窗口增加转场动画。
     * 
     * 当前只支持在应用主窗下使用。
     *
     * @param { WindowTransitionType } transitionType - 本次转场动画场景。当前只支持销毁场景。
     * @param { TransitionAnimation } animation - 本次转场动画配置。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range;
     *     2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    setWindowTransitionAnimation(transitionType: WindowTransitionType, animation: TransitionAnimation): Promise<void>;

    /**
     * 获取特定场景下的窗口转场动画配置。
     * 
     * 当前只支持在应用主窗下使用。
     *
     * @param { WindowTransitionType } transitionType - 本次转场动画场景。当前只支持销毁场景。
     * @returns { TransitionAnimation | undefined } Transition animation configuration in the corresponding scene. If
     *     the [setWindowTransitionAnimation]{@link window.Window.setWindowTransitionAnimation} API is not used,
     *     undefined is returned.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: 1. Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    getWindowTransitionAnimation(transitionType: WindowTransitionType): TransitionAnimation | undefined;

    /**
     * 设置当前子窗口层级级别，设置了模态属性的子窗不支持。使用Promise异步回调。
     * 
     * 通过该接口改变子窗口的显示层级时，不会发生焦点切换。推荐使用[shiftAppWindowFocus()]{@link @ohos.window:window.shiftAppWindowFocus}进行焦点切换。
     *
     * @param { int } zLevel - 子窗口层级级别。默认值为0，取值范围为[-10000, 10000]，该参数仅支持整数输入，浮点数输入将向下取整。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setSubWindowZLevel can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type. Only non-modal subwindows are supported.
     * @throws { BusinessError } 1300009 - The parent window is invalid.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    setSubWindowZLevel(zLevel: int): Promise<void>;
  }

  /**
   * WindowStage生命周期状态枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @StageModelOnly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum WindowStageEventType {
    /**
     * 前台状态，例如点击应用图标启动，无论是首次启动还是从后台启动均会触发。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    SHOWN = 1,
    /**
     * 获焦状态，例如应用窗口处理点击事件后的状态、应用启动后的状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    ACTIVE = 2,
    /**
     * 失焦状态，例如打开新应用或点击其他窗口后，原获焦窗口的状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    INACTIVE = 3,
    /**
     * 后台状态，例如应用上滑退出、应用窗口关闭。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    HIDDEN = 4,
    /**
     * 前台可交互状态，例如打开应用后，应用处于前台，且可以与用户交互的状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    RESUMED = 5,
    /**
     * 前台不可交互状态，例如应用在前台时，进入多任务界面，应用依然处于前台但不可以与用户交互的状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    PAUSED = 6
  }

  /**
   * WindowStage生命周期的状态类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowStageLifecycleEventType {
    /**
     * 切到前台，例如点击应用图标启动，无论是首次启动还是从后台启动均会触发。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SHOWN = 1,
    /**
     * 前台可交互状态，例如打开应用后，应用处于前台，且可以与用户交互的状态。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    RESUMED = 2,
    /**
     * 前台不可交互状态，例如应用在前台时，进入多任务界面，应用依然处于前台但不可以与用户交互的状态。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PAUSED = 3,
    /**
     * 切到后台，例如应用上滑退出、应用窗口关闭。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    HIDDEN = 4
  }

  /**
   * 子窗口模态类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  enum ModalityType {
    /**
     * 当仅需要其父级窗口不响应用户操作时，可选此参数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    WINDOW_MODALITY = 0,
    /**
     * 除其父级窗口外还需要该应用其他实例的窗口不响应用户操作时，可选此参数。
     * 
     * 该枚举在支持并处于[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上可正常调用；在支持但不处于
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备及不支持
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上调用返回801错误码。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_MODALITY = 1
  }

  /**
   * 显示子窗口或系统窗口时的参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ShowWindowOptions {
    /**
     * 窗口调用[showWindow()]{@link @ohos.window:window.Window.showWindow(options: ShowWindowOptions)}显示时是否自动获焦，默认为true。该参数对
     * 主窗、模态窗、dialog窗口不生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    focusOnShow?: boolean;
  }

  /**
   * 子窗口创建参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface SubWindowOptions {
    /**
     * 子窗口标题。标题显示区域最右端不超过系统三键区域最左端，超过部分以省略号表示。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    title: string;
    /**
     * 子窗口是否显示装饰。true表示子窗口显示装饰，false表示子窗口不显示装饰。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    decorEnabled: boolean;
    /**
     * 子窗口是否启用模态属性。true表示子窗口启用模态属性，false表示子窗口禁用模态属性。不设置，则默认为false。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isModal?: boolean;
    /**
     * 子窗口是否启用置顶属性。true表示子窗口置顶，false表示子窗口不置顶。不设置，则默认为false。 
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isTopmost?: boolean;
    /**
     * 子窗口模态类型，仅当子窗口启用模态属性时生效。不设置，则默认为WINDOW_MODALITY。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    modalityType?: ModalityType;
    /**
     * 子窗口矩形区域，其中子窗口存在大小限制，具体参考
     * [resize()]{@link @ohos.window:window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}方法。不设置
     * 且未调用[showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}显示前，则默认为{left: 0, 
     * top: 0, width: 0, height: 0}。具体参考[设置应用子窗口](docroot://windowmanager/application-window-stage.md#设置应用子窗口)开发指南。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    windowRect?: Rect;
    /**
     * 子窗口是否支持最大化特性。true表示子窗口支持最大化，false表示子窗口不支持最大化。不设置，则默认为false。
     * 
     * 该参数在支持并处于[自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上可正常调用；在不支持
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上，作为入参使用时，对应接口不生效不报错；在支持但不处于
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态的设备上，作为入参使用时，对应接口不生效不报错，切换到
     * [自由窗口](docroot://windowmanager/window-terminology.md#自由窗口)状态后生效。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    maximizeSupported?: boolean;

    /**
     * 子窗口层级级别，仅当子窗口未启用模态属性，即未设置isModal时生效。该参数是整数，取值范围为[-10000, 10000]，浮点数输入将向下取整。不设置，则默认为0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    zLevel?: int;

    /**
     * 子窗口是否显示描边。true表示子窗口显示描边，false表示子窗口不显示描边。不设置，则默认为false。
     * 
     * 该参数在2in1设备、其他设备的电脑模式中可正常调用，在其他设备和其他模式中作为入参使用时，对应接口不生效不报错。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    outlineEnabled?: boolean;

    /**
     * 标识解除子窗在父窗口的层级限制
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    zLevelAboveParentLoosened?: boolean;
  }
  /**
   * 窗口管理器。管理各个基本窗口单元，即[Window]{@link @ohos.window}实例。
   * 
   * 下列API示例中都需在[onWindowStageCreate()]{@link @ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}函数中使用WindowStage
   * 的实例调用对应方法。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WindowStage {
    /**
     * 获取该WindowStage实例下的主窗口，使用Promise异步回调。
     * 
     * 调用该接口前，建议先通过[loadContent](../apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)方法完成页面加载。
     *
     * @returns { Promise<Window> } Promise对象。返回当前WindowStage下的主窗口对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainWindow(): Promise<Window>;
    /**
     * 获取该WindowStage实例下的主窗口，使用callback异步回调。
     *
     * 调用该接口前，建议先通过[loadContent](../apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)方法完成页面加载。
     *
     * @param { AsyncCallback<Window> } callback 回调函数。返回当前WindowStage下的主窗口对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainWindow(callback: AsyncCallback<Window>): void;
    /**
     * 获取该WindowStage实例下的主窗口，该接口为同步调用。
     *
     * @returns { Window }
     返回当前WindowStage下的主窗口对象。
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getMainWindowSync(): Window;
    /**
     * 创建该WindowStage实例下的子窗口，使用Promise异步回调。
     * 
     * 子窗口创建后默认是[沉浸式布局](../../windowmanager/window-terminology.md#沉浸式布局)。
     *
     * @param { string } name 子窗口的名字。
     * @returns { Promise<Window> } Promise对象。返回当前WindowStage下的子窗口对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    createSubWindow(name: string): Promise<Window>;
    /**
     * 创建该WindowStage实例下的子窗口，使用callback异步回调。
     * 
     * 子窗口创建后默认是[沉浸式布局](../../windowmanager/window-terminology.md#沉浸式布局)。
     *
     * @param { string } name 子窗口的名字。
     * @param { AsyncCallback<Window> } callback 回调函数。返回当前WindowStage下的子窗口对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    createSubWindow(name: string, callback: AsyncCallback<Window>): void;
    /**
     * 创建该WindowStage实例下的子窗口，使用Promise异步回调。
     * 
     * 非[自由窗口](../../windowmanager/window-terminology.md#自由窗口)状态下，子窗口创建后默认是[沉浸式布局](../../windowmanager/window-terminology.md#沉浸式布局)。
     *
     * 自由窗口状态下，子窗口参数[decorEnabled](arkts-apis-window-i.md#subwindowoptions11)为false时，子窗口创建后为沉浸式布局；子窗口参数decorEnabled为true，子窗口创建后为非沉浸式布局。
     * @param { string } name - 子窗口的名字。
     * @param { SubWindowOptions } options - 子窗口参数。
     * @returns { Promise<Window> } Promise used to return the subwindow.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. The subWindow has been created and can not be created again.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    createSubWindowWithOptions(name: string, options: SubWindowOptions): Promise<Window>;
    /**
     * 获取该WindowStage实例下的所有子窗口，使用Promise异步回调。
     *
     * @returns { Promise<Array<Window>> }
     Promise对象。返回当前WindowStage下的所有子窗口对象。
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubWindow(): Promise<Array<Window>>;
    /**
     * 获取该WindowStage实例下的所有子窗口，使用callback异步回调。
     *
     * @param { AsyncCallback<Array<Window>> } callback 回调函数。返回当前WindowStage下的所有子窗口对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal. [since 10]
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getSubWindow(callback: AsyncCallback<Array<Window>>): void;

    /**
     * 根据当前工程中指定的页面路径为窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用callback异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，重复调用将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } path 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。
     * @param { LocalStorage } storage 页面级UI状态存储单元，这里用于为加载到窗口的页面内容传递状态属性。
     * @param { AsyncCallback<void> } callback 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * 根据当前工程中指定的页面路径为WindowStage的主窗口加载具体页面内容，通过LocalStorage传递状态属性给加载的页面，使用Promise异步回调。
     *
     * 建议在UIAbility启动过程中调用该接口，重复调用将首先销毁旧的页面内容（即UIContent）再加载新页面内容，请谨慎使用。当前UI的执行上下文可能不明确，所以不建议在回调函数中做UI相关的操作。
     *
     * @param { string } path 要加载到窗口中的页面内容的路径，该路径需添加到工程的main_pages.json文件中。不支持相对路径写法，需与main_pages.json中的src取值保持一致。
     * @param { LocalStorage } storage 页面级UI状态存储单元，为加载到窗口的页面内容传递状态属性，默认值为空。
     * @returns { Promise<void> }
     无返回结果的Promise对象。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, storage?: LocalStorage): Promise<void>;

    /**
     *为当前窗口加载具体页面内容，使用callback异步回调。
     *
     *建议在UIAbility启动过程中使用该接口，多次调用该接口会先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     *
     *当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } path 要加载到窗口中的页面内容的路径，Stage模型下该路径需添加到工程的main_pages.json文件中，FA模型下该路径需添加到工程的config.json文件中。不支持相对路径写法，需与main_pages.json或config.json中的src取值保持一致。
     * @param { AsyncCallback<void> } callback 回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Invalid path parameter.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. [since 9 - 9]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * 根据指定路由页面名称为当前窗口加载[命名路由](../../ui/arkts-routing.md#命名路由)页面，使用callback异步回调。
     * 
     * 建议在UIAbility启动过程中使用该接口，重复调用该接口将先销毁旧的页面内容（即UIContent）再加载新的页面内容，请谨慎使用。
     * 
     * 当前UI的执行上下文可能不明确，所以不建议在本接口的回调函数中做UI相关的操作。
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content by named router
     *
     * @param { string } name - name of the page to which the content will be loaded.
     * @param { LocalStorage } storage - The data object shared within the content instance loaded by the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *                                                                  2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    loadContentByName(name: string, storage?: LocalStorage): Promise<void>;

    /**
     * 释放
     *
     * @returns { Promise<void> } Promise that returns no value, indicating successful completion.
     *     Throws exception if window state is abnormal.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    releaseUIContent(): Promise<void>;

    /**
     * 开启WindowStage生命周期变化的监听。
     *
     * @param { 'windowStageEvent' } eventType 监听事件，固定为'windowStageEvent'，即WindowStage生命周期变化事件。
     * @param { Callback<WindowStageEventType> } callback 回调函数。返回当前的WindowStage生命周期状态。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(eventType: 'windowStageEvent', callback: Callback<WindowStageEventType>): void;

    /**
     * 开启WindowStage生命周期变化的监听。
     *
     * @param { Callback<WindowStageEventType> } callback 监听事件，固定为'windowStageEvent'，即WindowStage生命周期变化事件。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    onWindowStageEvent(callback: Callback<WindowStageEventType>): void;

    /**
     * 关闭WindowStage生命周期变化的监听。
     *
     * 用于关闭[on('windowStageEvent')](#onwindowstageevent9)接口对WindowStage生命周期变化的监听。
     *
     * 如果没有调用[on('windowStageEvent')](#onwindowstageevent9)接口开启监听就关闭，程序正常执行不会抛出异常。
     *
     * @param { 'windowStageEvent' } eventType 监听事件，固定为'windowStageEvent'，即WindowStage生命周期变化事件。
     * @param { Callback<WindowStageEventType> } callback 回调函数。返回当前的WindowStage生命周期状态。若传入参数，则关闭该监听。若未传入参数，则关闭所有WindowStage生命周期变化的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(eventType: 'windowStageEvent', callback?: Callback<WindowStageEventType>): void;

    /**
     * 关闭主窗口关闭事件的监听。
     *
     * @param { Callback<WindowStageEventType> } [callback] - 回调函数。当点击主窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。回调函数内部逻辑需要有boolean类型的返回值，该返回值决定当前主窗是否继续关闭，true表示不关闭，false表示关闭。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有主窗口关闭的监听。
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    offWindowStageEvent(callback?: Callback<WindowStageEventType>): void;

    /**
     * 开启WindowStage生命周期变化的监听。
     *
     * @param { 'windowStageLifecycleEvent' } eventType 监听事件，固定为'windowStageLifecycleEvent'，即WindowStage生命周期变化事件。
     * @param { Callback<WindowStageLifecycleEventType> } callback 回调函数。返回当前的WindowStage生命周期状态。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(eventType: 'windowStageLifecycleEvent', callback: Callback<WindowStageLifecycleEventType>): void;

    /**
     * 关闭WindowStage生命周期变化的监听。
     *
     * @param { Callback<WindowStageLifecycleEventType> } callback 回调函数。返回当前的WindowStage生命周期状态。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    onWindowStageLifecycleEvent(callback: Callback<WindowStageLifecycleEventType>): void;

    /**
     * 关闭WindowStage生命周期变化的监听。
     *
     * @param { 'windowStageLifecycleEvent' } eventType 监听事件，固定为'windowStageLifecycleEvent'，即WindowStage生命周期变化事件。
     * @param { Callback<WindowStageLifecycleEventType> } [callback] 回调函数。返回当前的WindowStage生命周期状态。若传入参数，则关闭该监听。若未传入参数，则关闭所有WindowStage生命周期变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(eventType: 'windowStageLifecycleEvent', callback?: Callback<WindowStageLifecycleEventType>): void;

    /**
     * 关闭WindowStage生命周期变化的监听。
     *
     * @param { Callback<WindowStageLifecycleEventType> } [callback] - 回调函数。返回当前的WindowStage生命周期状态。若传入参数，则关闭该监听。若未传入参数，则关闭所有WindowStage生命周期变化的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    offWindowStageLifecycleEvent(callback?: Callback<WindowStageLifecycleEventType>): void;

    /**
     * 开启点击主窗三键区的关闭按钮监听事件。
     *
     * @param { 'windowStageClose' } eventType The value is fixed at 'windowStageClose', indicating the window stage
     *     close event.
     * @param { Callback<void> } callback Callback function requires a boolean return value to determine whether to
     *     close the current main window.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    on(eventType: 'windowStageClose', callback: Callback<void>): void;

    /**
     * 开启点击主窗三键区的关闭按钮监听事件。点击主窗口的三键区域的关闭键时触发该回调函数，将不执行注册的[UIAbility.onPrepareToTerminate](../apis-ability-kit/js-apis-app-ability-uiAbility.md#onpreparetoterminate10)生命周期回调函数。
     *
     * 当重复注册窗口关闭事件的监听时，最后一次注册成功的监听事件生效。

     * 触发的回调函数是同步执行，主窗口的异步关闭事件监听参考[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)方法。

     * 如果存在[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)监听事件，只响应[on('windowWillClose')](arkts-apis-window-Window.md#onwindowwillclose15)接口。
     *
     * @param { Callback<void, boolean> } callback - 监听事件，固定为'windowStageClose'，即开启主窗三键区的关闭按钮监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    onWindowStageClose(callback: Callback<void, boolean>): void;

    /**
     * 关闭主窗口关闭事件的监听。
     *
     * @param { 'windowStageClose' } eventType 监听事件，固定为'windowStageClose'，即关闭主窗口关闭事件的监听。
     * @param { Callback<void> } callback 回调函数。当点击主窗口右上角关闭按钮事件发生时的回调。该回调函数不返回任何参数。
     *     回调函数内部逻辑需要有boolean类型的返回值，该返回值决定当前主窗是否继续关闭，true表示不关闭，false表示关闭。如果传入
     *     参数，则关闭该监听。如果未传入参数，则关闭所有主窗口关闭的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 14 dynamic
     */
    off(eventType: 'windowStageClose', callback?: Callback<void>): void;

    /**
     * 关闭主窗口关闭事件的监听。
     *
     * @param { Callback<void, boolean> } [callback] - 回调函数。当点击主窗口右上角关闭按钮事件发生时的回调。该回调函数
     *     不返回任何参数。回调函数内部逻辑需要有boolean类型的返回值，该返回值决定当前主窗是否继续关闭，true表示不关闭，false
     *     表示关闭。如果传入参数，则关闭该监听。如果未传入参数，则关闭所有主窗口关闭的监听。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    offWindowStageClose(callback?: Callback<void, boolean>): void;

    /**
     * 禁止窗口装饰。
     * 
     * 禁止窗口装饰后，当主窗口进入全屏沉浸状态时，此时鼠标Hover到上方窗口标题栏热区上会显示悬浮标题栏。若想禁用悬浮标题栏显示，请使用
     * [setTitleAndDockHoverShown()]{@link @ohos.window:window.Window.setTitleAndDockHoverShown}接口。
     *
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    disableWindowDecor(): void;

    /**
     * 设置应用显示在锁屏之上。
     *
     * @param { boolean } showOnLockScreen - 是否设置应用显示在锁屏之上。true表示显示在锁屏之上；false表示不显示在锁屏之上。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    setShowOnLockScreen(showOnLockScreen: boolean): void;

    /**
     * 设置应用主窗口是否使用系统默认Density，子窗和系统窗口会跟随主窗生效。调用此接口前，需先调用WindowStage.loadContent()初始化布局，确保接口调用时序正确。
     *
     * 不调用此接口进行设置，则表示不使用系统默认Density。
     *
     * 不使用系统默认Density时，若调用过setCustomDensity()，则窗口会跟随用户自定义的显示大小变化重新布局，否则跟随系统显示大小变化重新布局。
     *
     * @param { boolean } enabled - 是否设置应用使用系统默认Density。true表示使用系统默认Density，窗口不跟随系统显示大小变化重新布局；false表示不使用系统默认Density，窗口跟随系统显示大小变化重新布局。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The main window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     *     Possible cause: The window stage is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    setDefaultDensityEnabled(enabled: boolean): void;

    /**
     * 支持应用主窗口自定义其显示大小缩放系数。
     *
     * 已创建的子窗和系统窗口不会立即跟随主窗的customDensity变化重新布局，而是在子窗或系统窗口下一次位置、大小、系统缩放大小等
     * 窗口布局信息变化时跟随主窗的customDensity变化重新布局。
     *
     * 当存在同时使用该接口和setDefaultDensityEnabled(true)的情况时，以最后调用的设置效果为准。
     *
     * @param { number } density - 自定义显示大小缩放系数。该参数为浮点数，取值范围为[0.5, 4.0]或-1.0。4.0表示窗口可显示的
     *     最大显示大小缩放系数，-1.0表示窗口使用系统显示大小缩放系数。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 15 dynamic
     */
    setCustomDensity(density: number): void;

    /**
     * 支持应用主窗口自定义其显示大小缩放系数。
     *
     * 已创建的子窗和系统窗口不会立即跟随主窗的customDensity变化重新布局，而是在子窗或系统窗口下一次位置、大小、系统缩放大小等
     * 窗口布局信息变化时跟随主窗的customDensity变化重新布局。
     *
     * 当存在同时使用该接口和setDefaultDensityEnabled(true)的情况时，以最后调用的设置效果为准。
     *
     * @param { double } density - 自定义显示大小缩放系数。该参数为浮点数，取值范围为[0.5, 4.0]或-1.0。4.0表示窗口可显示的
     *     最大显示大小缩放系数，-1.0表示窗口使用系统显示大小缩放系数。
     * @param { boolean } [applyToSubWindow] - 设置当前已创建的子窗和系统窗口是否立即跟随主窗口更新customDensity并重新布局。
     *     设置为true时，表示立即跟随主窗生效；设置为false时，表示不会立即跟随主窗生效，而是在子窗或系统窗口下一次位置、大小、
     *     系统缩放大小等窗口布局信息变化时跟随主窗的customDensity变化重新布局。默认值为false。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The main window is not created or destroyed.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     *     Possible cause: The window stage is not created or destroyed.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    setCustomDensity(density: double, applyToSubWindow?: boolean): void;

    /**
     * 支持应用控制启动页消失时机。
     *
     * 此接口只对应用主窗口生效，且需要在module.json5配置文件abilities标签中的metadata标签下配置"enable.remove.starting.window"为"true"才会生效。
     *
     * 在标签配置为"true"的情况下，系统提供了启动页超时保护机制，若5s内未调用此接口，系统将自动移除启动页。
     *
     * 若标签配置为"false"或未配置标签，则此接口不生效，启动页将会在应用首帧渲染完成后自动移除。
     *
     * @returns { Promise<void> } - 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window stage is not created or destroyed;
     *     2. The main window is not created or destroyed;
     *     3. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    removeStartingWindow(): Promise<void>;

    /**
     * Set the application modality of the windowStage.
     *
     * @param { boolean } isModal - Enable the window modal if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300005 - This window stage is abnormal. Possible cause:
     *     The window is not created or destroyed. [since 20]
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowModal(isModal: boolean): Promise<void>;

    /**
     * 设置是否启用最后关闭的主窗尺寸的记忆功能，使用Promise异步回调。
     *
     * 启用记忆功能后，在同一个UIAbility下，记忆最后关闭的主窗口的尺寸；此主窗口再次启动时，以记忆的尺寸按照规则进行打开。
     * 层叠规则：1、当前实例是自由窗口时，打开下一实例窗口层叠时，大小要跟随。2、当前实例是最大化或全屏窗口时，打开下一个实例窗
     * 口层叠时，保持最大化。
     * 
     * 记忆规则：
     * |上一次窗口状态|记忆规则|
     * |-------------|-------|
     * |自由窗口|保留自由窗口的大小/位置，超出工作区回弹|
     * |二分屏窗口|保留二分屏之前自由窗口的大小/位置|
     * |最大化窗口|保留最大化|
     * |沉浸式窗口|保留沉浸式之前自由窗口的大小/位置|
     * |最小化窗口|保留最小化之前自由窗口的大小/位置|
     *
     * @param { boolean } enabled - 设置是否启用主窗尺寸的记忆功能，true为启用，false为不启用。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowRectAutoSave(enabled: boolean): Promise<void>;

    /**
     * 设置是否启用主窗的尺寸记忆功能，使用Promise异步回调。
     *
     * 在同一个UIAbility下，可记忆最后关闭的主窗口尺寸，也可针对每个主窗口尺寸单独进行记忆。只有在UIAbility启动模式为
     * specified，且isSaveBySpecifiedFlag设置为true时，才能针对每个主窗口尺寸进行单独记忆。
     * 
     * 启用记忆功能后，记忆主窗口关闭时的尺寸；对应主窗口再次启动时，以记忆的尺寸按照规则进行打开。
     * 
     * 记忆规则：
     * |上一次窗口状态|记忆规则|
     * |-------------|-------|
     * |自由窗口|保留自由窗口的大小/位置，超出工作区回弹。|
     * |二分屏窗口|保留二分屏之前自由窗口的大小/位置。|
     * |最大化窗口|保留最大化。|
     * |沉浸式窗口|保留沉浸式之前自由窗口的大小/位置。|
     * |最小化窗口|保留最小化之前自由窗口的大小/位置。|
     *
     * @param { boolean } enabled - Enable the window rect auto-save if true, otherwise means the opposite.
     * @param { boolean } isSaveBySpecifiedFlag - Enable the specifiedFlag if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setWindowRectAutoSave can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 17 dynamic
     * @since 23 static
     */
    setWindowRectAutoSave(enabled: boolean, isSaveBySpecifiedFlag: boolean): Promise<void>;

    /**
     * 判断当前主窗口是否已经启用尺寸记忆，使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前窗口启用尺寸记忆，返回false表示当前窗口禁用尺寸记忆。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: 1. The window is not created or destroyed;
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally. [since 20]
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    isWindowRectAutoSave(): Promise<boolean>;

    /**
     * 设置主窗的窗口支持模式，使用Promise异步回调。
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - 设置主窗的窗口支持模式。
     * <br>- FULL_SCREEN：支持全屏模式。<br>- FLOATING：支持自由悬浮窗口模式。
     * <br>- SPLIT：支持分屏模式。需要配合FULL_SCREEN或FLOATING一起使用，不支持仅配置SPLIT。
     * <br> 注：数组中SupportWindowMode字段取值不应该与该UIAbility对应的
     * [module.json5配置文件][module.json5 file](docroot://quick-start/module-configuration-file.md)中
     * [abilities标签](docroot://quick-start/module-configuration-file.md#abilities)的supportWindowMode字段取值或者
     * [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}的
     * supportWindowModes属性取值冲突。当取值冲突时，最终以该参数设置的窗口支持模式为准。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @StageModelOnly
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>;

    /**
     * 设置主窗的窗口支持模式，并提供最大化按钮置灰功能，使用Promise异步回调。
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - 设置主窗的窗口支持模式。
     * <br>- FULL_SCREEN：支持全屏模式。<br>- FLOATING：支持自由悬浮窗口模式。
     * <br>- SPLIT：支持分屏模式。需要配合FULL_SCREEN或FLOATING一起使用，不支持仅配置SPLIT。
     * <br> 注：数组中SupportWindowMode字段取值不应该与该UIAbility对应的
     * [module.json5配置文件][module.json5 file](docroot://quick-start/module-configuration-file.md)中
     * [abilities标签](docroot://quick-start/module-configuration-file.md#abilities)的supportWindowMode字段取值或者
     * [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}的
     * supportWindowModes属性取值冲突。当取值冲突时，最终以该参数设置的窗口支持模式为准。
     * @param { boolean } grayOutMaximizeButton - 是否显示并将主窗口的最大化按钮置灰
     *     true表示显示并将主窗口的最大化按钮置灰，此时最大化按钮不可用；false表示不显示主窗口的最大化按钮。
     *     此参数配置仅在supportedWindowModes不支持FULL_SCREEN时生效。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 801 - Capability not supported.
     *     Function setSupportedWindowModes can not work correctly due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range.
     *     2. Invalid parameter length.
     *     3. Incorrect parameter format.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>, grayOutMaximizeButton: boolean): Promise<void>;

    /**
     * 设置应用在多任务中和Dock栏悬停时显示的图片，使用Promise异步回调。
     * > **说明：**
     * >
     * > 调用该接口前，建议先通过[loadContent](#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)
     * > 方法完成页面加载。如果应用窗口未完成页面加载就直接调用该接口，功能将不会生效。此时多任务中只显示应用启动页。
     *
     * @param { long | image.PixelMap } imageResource - 应用自定义的图片资源，可传入资源id或PixelMap位图。传入资源id时，
     *     图片资源需放在resources/base/media目录下，通过$r资源访问方式获取对应图片的资源id，这里以获取startIcon图片的资源id
     *     为例给出示意：$r("app.media.startIcon").id。
     * @param { ImageFit } value - 应用自定义图片的填充方式。
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * 设置应用在多任务中和Dock栏悬停时显示的图片，使用Promise异步回调。
     * > **说明：**
     * >
     * > 调用该接口前，建议先通过[loadContent](#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)
     * > 方法完成页面加载。如果应用窗口未完成页面加载就直接调用该接口，功能将不会生效。此时多任务中只显示应用启动页。
     *
     * @permission ohos.permission.MANAGE_RECENT_SNAPSHOT
     * @param { long | image.PixelMap } imageResource - 应用自定义的图片资源，可传入资源id或PixelMap位图。传入资源id时，
     *     图片资源需放在resources/base/media目录下，通过$r资源访问方式获取对应图片的资源id，这里以获取startIcon图片的资源id
     *     为例给出示意：$r("app.media.startIcon").id。
     * @param { ImageFit } value - 应用自定义图片的填充方式。
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setImageForRecent(imageResource: long | image.PixelMap, value: ImageFit): Promise<void>;

    /**
     * 移除应用设置的在多任务中和Dock栏悬停时显示的图片，下次进多任务查看应用卡片时生效，使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    /**
     * 移除应用设置的在多任务中和Dock栏悬停时显示的图片，下次进多任务查看应用卡片时生效，使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_RECENT_SNAPSHOT
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission verification failed. The application does not have
     *     the permission required or a non-system application calls the API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removeImageForRecent(): Promise<void>;

    /**
     * 设置应用在多任务中和Dock栏悬停时显示的图片，使用Promise异步回调。
     * > **说明：**
     * >
     * > 调用该接口前，建议先通过[loadContent](#loadcontent9)方法或者[setUIContent](arkts-apis-window-Window.md#setuicontent9-1)
     * > 方法完成页面加载。如果应用窗口未完成页面加载就直接调用该接口，功能将不会生效。此时多任务中只显示应用启动页。
     *
     * @param { number } imgResourceId - 应用自定义图片的资源id，图片资源需放在resources/base/media目录下，通过`$r`资源访问方式获取对应图片的资源id，这里以获取
     *     startIcon图片的资源id为例给出示意：`$r("app.media.startIcon").id`。
     * @param { ImageFit } value - 应用自定义图片的填充方式。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. Invalid parameter range. 2. Invalid parameter length. 3. Incorrect parameter format.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 19 dynamic
     */
    setImageForRecent(imgResourceId: number, value: ImageFit): Promise<void>;
  }

  /**
   * 扩展窗口的属性枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  enum ExtensionWindowAttribute {
    /**
     * 系统窗口。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM_WINDOW = 0,

    /**
     * 子窗口。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    SUB_WINDOW = 1
  }

  /**
   * 系统窗口的创建参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface SystemWindowOptions {
    /**
     * 窗口类型。无默认类型，不配置会导致窗口创建失败。不支持TYPE_DIALOG类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowType: WindowType;
  }

  /**
   * 创建扩展窗口时需要配置的参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface ExtensionWindowConfig {
    /**
     * 窗口名。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowName: string;

    /**
     * 窗口的属性。用于配置创建的窗口是子窗口还是系统窗口。当windowAttribute配置为SUB_WINDOW时须配置subWindowOptions，当windowAttribute配置为SYSTEM_WINDOW时须配置
     * systemWindowOptions，否则创建窗口失败。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowAttribute: ExtensionWindowAttribute;

    /**
     * 窗口矩形区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * 创建子窗口的参数。无默认参数，当windowAttribute配置为SUB_WINDOW时必选，否则会导致窗口创建失败。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    subWindowOptions?: SubWindowOptions;

    /**
     * 创建系统窗口的参数。无默认参数，当windowAttribute配置为SYSTEM_WINDOW时必选，否则会导致窗口创建失败。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    systemWindowOptions?: SystemWindowOptions;
  }

  /**
   * 窗口布局信息。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowLayoutInfo {
    /**
     * 窗口尺寸，窗口在屏幕上的实际位置和大小。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * 窗口透明度。有效值范围为[0.0, 1.0]，0.0表示完全透明，1.0表示完全不透明。默认值是-1.0，表示未查询到窗口透明度或者查询失败。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    windowAlpha?: double;
  }

  /**
   * 窗口布局信息过滤选项。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface WindowInfoOptions {
    /**
     * 是否排除系统窗口。true表示需要排除，false表示不排除，默认为false。
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    excludeSystemWindows?: boolean;
    /**
     * 需要过滤掉的不高于此窗口层级的窗口的ID。表示只返回层级高于这个窗口的窗口信息。默认值是0，表示忽略本选项；如果值小于0，返回1300016错误码；如果指定的窗口不存在，则与设置为0等价。
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    foregroundAboveWindow?: int;
    /**
     * 需要过滤掉的不低于此窗口层级的窗口的ID。表示只返回层级低于这个窗口的窗口信息。默认值是0，表示忽略本选项；如果值小于0，返回1300016错误码；如果指定的窗口不存在，则与设置为0等价。若同时指定
     * foregroundBelowWindow和foregroundAboveWindow，且两者都是有效的窗口ID，但foregroundBelowWindow指定的窗口的层级未高于foregroundAboveWindow指定
     * 的窗口，则返回空数组。
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    foregroundBelowWindow?: int;
  }
}

export default window;