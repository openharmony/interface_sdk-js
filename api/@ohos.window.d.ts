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

import { AsyncCallback, BusinessError } from './@ohos.base';
import BaseContext from './application/BaseContext';
import image from './@ohos.multimedia.image';
import rpc from './@ohos.rpc';
import dialogRequest from './@ohos.app.ability.dialogRequest';
/*** if arkts dynamic */
import { UIContext } from './@ohos.arkui.UIContext';
import { ColorMetrics } from './@ohos.arkui.node';
/*** endif */
import ConfigurationConstant from './@ohos.app.ability.ConfigurationConstant';
import bundleManager from './@ohos.bundle.bundleManager';
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
 * Callback function for window event
 *
 * @param { int } windowId - The id of the window which triggers the event
 * @param { window.WindowEventType } event - Window callback event type
 * @syscap SystemCapability.Window.SessionManager
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
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
   * Enumerates the window types.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum WindowType {
    /**
     * Child window of an application.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @FAModelOnly
     * @since 7 dynamiconly
     */
    TYPE_APP = 0,
    /**
     * System alert window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 11
     */
    TYPE_SYSTEM_ALERT = 1,
    /**
     * Input method window.
     *
     * Note: This API is supported since API version 9 and deprecated since API version 13. There is no alternative
     * window type. To control the input method, call
     * [Input method framework APIs](docroot://inputmethod/inputmethod-application-guide.md).
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamiconly
     * @deprecated since 13
     */
    TYPE_INPUT_METHOD = 2,
    /**
     * Status bar window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_STATUS_BAR = 3,
    /**
     * Notification panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_PANEL = 4,
    /**
     * Keyguard.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_KEYGUARD = 5,
    /**
     * Volume bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOLUME_OVERLAY = 6,
    /**
     * Navigation bar.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_BAR = 7,
    /**
     * Global floating window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_FLOAT = 8,
    /**
     * Wallpaper.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_WALLPAPER = 9,
    /**
     * Home screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_DESKTOP = 10,
    /**
     * Recent tasks screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_RECENT = 11,
    /**
     * Dock bar on the home screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_LAUNCHER_DOCK = 12,
    /**
     * Voice assistant.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_VOICE_INTERACTION = 13,
    /**
     * Mouse.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_POINTER = 14,
    /**
     * Floating camera window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_CAMERA = 15,
    /**
     * Dialog window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @StageModelOnly
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    TYPE_DIALOG = 16,
    /**
     * Screenshot window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SCREENSHOT = 17,
    /**
     * Toast displayed at the top.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_TOAST = 18,
    /**
     * Divider.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_DIVIDER = 19,
    /**
     * Window used for global search.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_GLOBAL_SEARCH = 20,
    /**
     * Stylus window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @StageModelOnly
     * @since 12 dynamic
     * @since 23 static
     */
    TYPE_HANDWRITE = 21,
    /**
     * Wallet swipe card window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_WALLET_SWIPE_CARD = 22,
    /**
     * Top-level window used for locking touch input, which intercepts screen touch and click events.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 15 dynamic
     * @since 23 static
     */
    TYPE_SCREEN_CONTROL = 23,
    /**
     * Floating window with a three-button navigation bar.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 17 dynamic
     * @since 23 static
     */
    TYPE_FLOAT_NAVIGATION = 24,
    /**
     * System window that allows for adjustable z-levels.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_DYNAMIC = 25,
    /**
     * Window for multi-screen collaboration.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    TYPE_MUTISCREEN_COLLABORATION = 26,
    /**
     * Main window of an application.
     *
     * This window type cannot be used during window creation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 18 dynamic
     * @since 23 static
     */
    TYPE_MAIN = 32,
  }

  /**
   * Enumerates the types of areas to avoid for window content.
   *
   * When adapting window content for an
   * [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout), you should adjust the content
   * based on the corresponding [AvoidArea]{@link @ohos.window:window.AvoidArea} specified by **AvoidAreaType**.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  enum AvoidAreaType {
    /**
     * Default area of the system. <!--RP11-->It contains the status bar and three-button navigation bar.<!--RP11End-->
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM = 0,

    /**
     * Cutout area.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    TYPE_CUTOUT = 1,

    /**
     * Side return gesture area. Currently, no devices support this type of avoid area.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_SYSTEM_GESTURE = 2,

    /**
     * Fixed soft keyboard area.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    TYPE_KEYBOARD = 3,

    /**
     * Bottom navigation bar. <!--RP12-->OpenHarmony devices do not support this capability.<!--RP12End-->
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    TYPE_NAVIGATION_INDICATOR = 4,

    /**
     * Area for float navigation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TYPE_FLOAT_NAVIGATION = 5
  }
  /**
   * Enumerates the window modes.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 7 dynamic
   * @since 23 static
   */
  enum WindowMode {
    /**
     * The window mode is not defined by the application.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    UNDEFINED = 1,
    /**
     * The application is displayed in full screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FULLSCREEN = 2,
    /**
     * The application is displayed in the primary window in split-screen mode. In top-bottom splits, the top screen is
     * primary; in left-right splits, the left screen is primary.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    PRIMARY = 3,
    /**
     * The application is displayed in the secondary window in split-screen mode. In top-bottom splits, the bottom
     * screen is secondary; in left-right splits, the right screen is secondary.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    SECONDARY = 4,
    /**
     * The application is displayed in a floating window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    FLOATING = 5
  }

  /**
   * Describes the type of split ratio preference.
   *
   * @enum { number }
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum SplitRatioPreference {
    /**
     * Equal split ratio preference of the window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EQUAL = 0,
    /**
     * Set primary split window to a larger split ratio.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PRIMARY_DOMINANT = 1,
    /**
     * Set secondary split window to a larger split ratio.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SECONDARY_DOMINANT = 2
  }

  /**
   * Enumerates the window layout modes.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   * @deprecated since 26.0.0
   */
  enum WindowLayoutMode {
    /**
     * Cascade mode. In this mode, freeform windows are stacked with Z-order arrangement.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     * @deprecated since 26.0.0
     */
    WINDOW_LAYOUT_MODE_CASCADE = 0,
    /**
     * Tile mode. In this mode, newly opened application windows appear on the rightmost.
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
   * Enumerates the window modes.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  enum WindowStatusType {
    /**
     * The window mode is not defined by the application.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,
    /**
     * The application is displayed in full screen.
     *
     * In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state, the window occupies
     * the entire screen with no dock, title bar, or status bar displayed by default.
     *
     * You can use [maximize()]{@link @ohos.window:window.Window.maximize(presentation?: MaximizePresentation)} and
     * [setTitleAndDockHoverShown()]{@link @ohos.window:window.Window.setTitleAndDockHoverShown} to configure whether to
     * display the title bar and dock upon hovering over the hot zone.
     *
     * The last call takes precedence when both the **maximize()** and **setTitleAndDockHoverShown()** APIs are called.
     *
     * In non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state, the window
     * occupies the entire screen with no title bar or dock displayed. You can use
     * [setSpecificSystemBarEnabled()]{@link @ohos.window:window.Window.setSpecificSystemBarEnabled} to configure
     * whether to display the status bar.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FULL_SCREEN = 1,
    /**
     * The application window is maximized. In
     * [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state, the window occupies the
     * entire screen, and the dock, status bar, and title bar are displayed without requiring a hover. This state is
     * unavailable in non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MAXIMIZE = 2,
    /**
     * The application window is minimized.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    MINIMIZE = 3,
    /**
     * The application is displayed in a floating window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    FLOATING = 4,
    /**
     * The application is displayed in split-screen mode.
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
   * Enumerates the pixel units.
   *
   * You can use [px2vp]{@link px2vp} and
   * [vp2px]{@link vp2px} to convert between physical
   * pixels and virtual pixels.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum PixelUnit {
    /**
     * Physical pixel unit (px).
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PX = 0,
    /**
     * Virtual pixel unit (vp).
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    VP = 1
  }

  /**
   * Enumerates the types of window animation curves.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnimationCurve {
    /**
     * The animation speed is constant from start to finish.
     *
     * When this curve type is used, **duration** in
     * [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig} is mandatory.
     *
     * When this curve type is used, **param** in
     * [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig} is optional and does not take effect.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR = 0,
    /**
     * Interpolator spring curve, an animation curve from 0 to 1, where the actual animation values are interpolated
     * based on the curve. The animation duration is subject to the curve parameters, rather than the **duration**
     * parameter in [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig}.
     *
     * When this curve type is used, **duration** in
     * [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig} is optional and does not take effect.
     *
     * When this curve type is used, **param** in
     * [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig} is mandatory.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    INTERPOLATION_SPRING = 1,
    /**
     * Cubic B��zier curve.
     *
     * When this curve type is used, **param** and **duration** in
     * [WindowAnimationConfig]{@link @ohos.window:window.WindowAnimationConfig} are mandatory.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    CUBIC_BEZIER = 2
  }

  /**
   * Enumerates the types of window transition animations.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowTransitionType {
    /**
     * Transition animation when the window is destroyed.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    DESTROY = 0
  }

  /**
   * Enumerates the types of window animations.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum AnimationType {
    /**
     * Fade-in/fade-out animation. The fade-in animation takes effect during window display, and the fade-out animation
     * takes effect during window hiding.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN_OUT = 0,
    /**
     * Fade-in animation, which takes effect during window display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    FADE_IN = 1
  }

  /**
   * Describes the properties of the status bar<!--Del--> and three-button navigation bar<!--DelEnd-->.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 6 dynamic
   * @since 23 static
   */
  interface SystemBarProperties {
    /**
     * Background color of the status bar. The value is a hexadecimal RGB or ARGB color code and is case insensitive,
     * for example, **'#00FF00'** or **'#FF00FF00'**. The default value is **'#66000000'**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    statusBarColor?: string;

    /**
     * Whether any icon on the status bar is highlighted. **true** if highlighted, **false** otherwise. The default
     * value is **false**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isStatusBarLightIcon?: boolean;

    /**
     * Color of the text on the status bar. After this property is set, the setting of **isStatusBarLightIcon** is
     * invalid. The default value is **'#E5FFFFFF'**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;

    /**
     * Background color of the three-button navigation bar. The value is a hexadecimal RGB or ARGB color code and is
     * case insensitive, for example, **'#00FF00'** or **'#FF00FF00'**. The default value is **'#66000000'**.
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
     * Whether any icon on the three-button navigation bar is highlighted. **true** if highlighted, **false** otherwise.
     * The default value is **false**.
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
     * Color of the text on the three-button navigation bar. After this property is set, the setting of
     * **isNavigationBarLightIcon** is invalid. The default value is **'#E5FFFFFF'**.
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
     * Whether to enable animation for a status bar property change. **true** to enable, **false** otherwise. The
     * default value is **false**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    enableStatusBarAnimation?: boolean;

    /**
     * Whether to enable animation for a three-button navigation bar property change. **true** to enable, **false**
     * otherwise. The default value is **false**.
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
   * Describes the properties of the status bar. These properties are returned when you query the status bar's
   * configuration details.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface StatusBarProperty {
    /**
     * Color of the text on the status bar. The value is in ARGB format, for example, **#E5FFFFFF**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    contentColor: string;
  }

  /**
   * Describes the properties of the status bar. These properties are valid for the page-level status bar.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface SystemBarStyle {
    /**
     * Color of the text on the status bar. The default value is **'#E5FFFFFF'**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    statusBarContentColor?: string;
  }

  /**
   * Describes the callback for a single system bar.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarRegionTint {
    /**
     * Type of the system bar whose properties are changed. Only the status bar and navigation bar are supported.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    type: WindowType;

    /**
     * Whether the system bar is displayed. **true** if displayed, **false** otherwise. The default value is **true**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    isEnable?: boolean;

    /**
     * Current position and size of the system bar. The default value is {0,0,0,0}.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    region?: Rect;

    /**
     * Background color of the system bar. The value is a hexadecimal RGB or ARGB color code and is case insensitive,
     * for example, **'#00FF00'** or **'#FF00FF00'**. The default value is **'0x66000000'**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    backgroundColor?: string;

    /**
     * Color of the text on the system bar. The default value is **'0xE5FFFFFF'**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    contentColor?: string;
  }

  /**
   * Describes the callback for the current system bar.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SystemBarTintState {
    /**
     * ID of the screen where the window is located. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * All system bar information that has been changed.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    regionTint: Array<SystemBarRegionTint>;
  }

  /**
   * Enumerates the metrics for frame performance.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  interface FrameMetrics {
    /**
     * Whether the frame is the first frame. **true** for first frame, **false** otherwise.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    firstDrawFrame: boolean;

    /**
     * Duration of gesture handling in a frame, in nanoseconds.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    inputHandlingDuration: long;

    /**
     * Duration of layout measurement in a frame, in nanoseconds.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    layoutMeasureDuration: long;

    /**
     * Timestamp marking the start of the current frame, in nanoseconds.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    vsyncTimestamp: long;
  }

  /**
   * Describes the rectangular area of the window.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Rect {

    /**
     * Left boundary of the rectangle, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * Top boundary of the rectangle, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * Width of the rectangle, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Height of the rectangle, in px. The value must be an integer.
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
   * Describes the rectangular area of the window, in vp.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface RectInVP {

    /**
     * Left boundary of the rectangle, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    left: double;

    /**
     * Top boundary of the rectangle, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    top: double;

    /**
     * Width of the rectangle, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * Height of the rectangle, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * Describes the position of the window or component.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  export interface Position {

    /**
     * X coordinate, in px. The value must be an integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: int;

    /**
     * Y coordinate, in px. The value must be an integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: int;
  }

  /**
   * Enumerates the window anchor points.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowAnchor {
    /**
     * Top-left corner of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_START = 0,
    /**
     * Horizontal center point along the top edge of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP = 1,
    /**
     * Top-right corner of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    TOP_END = 2,
    /**
     * Vertical center point along the left edge of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    START = 3,
    /**
     * Center point of the window, both horizontally and vertically.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    CENTER = 4,
    /**
     * Vertical center point along the right edge of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    END = 5,
    /**
     * Bottom-left corner of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_START = 6,
    /**
     * Horizontal center point along the bottom edge of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM = 7,
    /**
     * Bottom-right corner of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    BOTTOM_END = 8
  }

  /**
   * Describes the anchor point information used to maintain the relative position between the level-1 child window and
   * the main window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface WindowAnchorInfo {
    /**
     * Type of the anchor point used to maintain the relative position.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    anchorType: WindowAnchor;

    /**
     * X-axis offset between the anchor points of the child window and the main window, in px. The value must be an
     * integer. Floating-point numbers are rounded down. The default value is **0**.
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    offsetX?: int;

    /**
     * Y-axis offset between the anchor points of the child window and the main window, in px. The value must be an
     * integer. Floating-point numbers are rounded down. The default value is **0**.
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
   * Describes the parameters used to maintain the relative position between the child window and the main window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface SubWindowAttachOptions {
    /**
     * Current layout mode of the child window, which is used to control the UI effect customized by the application. If
     * this parameter is not passed, the default value is an empty string.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    currentLayoutMode?: string;

    /**
     * Callback triggered when the parent window size changes. The callback is triggered immediately after the binding,
     * and notifications are sent when the parent window size changes. By default, this parameter is not passed, and
     * notifications about the parent window size changes cannot be received.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowSizeChangeCallback?: Callback<Size>;

    /**
     * Callback triggered when the parent window mode changes. The callback is triggered immediately after the binding,
     * and notifications are sent when the parent window mode changes. By default, this parameter is not passed, and
     * notifications about the parent window mode changes cannot be received.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    parentWindowStatusChangeCallback?: Callback<WindowStatusType>;

    /**
     * Whether to use the intersection of the width limits of both windows in the attachment.
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isIntersectedWidthLimit?: boolean;

    /**
     * Whether to use the intersection of the height limits of both windows in the attachment.
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isIntersectedHeightLimit?: boolean;
  }

  /**
   * Describes the area to avoid for window content.
   *
   * When adapting window content for an
   * [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout), you should adjust the content
   * based on the corresponding **AvoidArea** specified by [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}.
   *
   * In the avoid area, the application window content is obscured and does not respond to user click events.
   *
   * > **NOTE**
   * >
   * > The figure below shows the meanings of **leftRect**, **topRect**, **rightRect**, and **bottomRect**.
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
     * Whether the avoid area is visible. **true** if visible, **false** otherwise.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    visible: boolean;

    /**
     * Rectangle centered to the left of the window's two diagonals.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    leftRect: Rect;

    /**
     * Rectangle centered at the top of the window's two diagonals.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    topRect: Rect;

    /**
     * Rectangle centered to the right of the window's two diagonals.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    rightRect: Rect;

    /**
     * Rectangle centered at the bottom of the window's two diagonals.
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
   * Describes the information about the window avoidance area in units of vp, which requires careful attention during
   * [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout) adaptation.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvAvoidAreaVP {
    /**
     * Whether the avoid area is visible. **true** if visible, **false** otherwise.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    visible: boolean;

    /**
     * Rectangle centered to the left of the window's two diagonals, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    leftRect: RectInVP;

    /**
     * Rectangle centered at the top of the window's two diagonals, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    topRect: RectInVP;

    /**
     * Rectangle centered to the right of the window's two diagonals, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    rightRect: RectInVP;

    /**
     * Rectangle centered at the bottom of the window's two diagonals, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    bottomRect: RectInVP;
  }

  /**
   * Describes the window size, in px.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Size {
    /**
     * Window width, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Window height, in px. The value must be an integer.
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
   * Describes the window size, in vp.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface SizeInVP {
    /**
     * Window width, in vp. The value is a floating-point number.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    width: double;

    /**
     * Window height, in vp. The value is a floating-point number.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    height: double;
  }

  /**
   * Describes the window information.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi [since 12 - 17]
   * @publicapi [since 18]
   * @since 12 dynamic
   * @since 23 static
   */
  interface WindowInfo {
    /**
     * Window size.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    rect: Rect;

    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * abilityName of window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * Window ID.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 12 - 17]
     * @publicapi [since 18]
     * @since 12 dynamic
     * @since 23 static
     */
    windowId: int;

    /**
     * Window mode.
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
     * Whether the window gains focus. **true** if the window gains focus, **false** otherwise. The return value is the
     * same as that of the [isFocused()]{@link @ohos.window:window.Window.isFocused} API.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi [since 14 - 17]
     * @publicapi [since 18]
     * @since 14 dynamic
     * @since 23 static
     */
    isFocused?: boolean;

    /**
     * Window size in the global coordinate system. In extended screen scenarios, the top-left corner of the primary
     * screen is used as the coordinate origin. In virtual screen scenarios, the top-left corner of the virtual screen
     * is used as the coordinate origin. The default value is [0, 0, 0, 0].
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
     * Indicates the actual display size and position of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    globalRect?: Rect;
  }

  /**
   * Describes the information about the display density of the screen where the window is located and the window's
   * custom display density. It is a scale factor independent of pixel units, that is, a factor for scaling display
   * size.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowDensityInfo {
    /**
     * System's display size scale factor for the screen where the window is located. The value ranges from 0.5 to 4.0
     * and varies according to user settings.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    systemDensity: double;

    /**
     * Default display size scale factor for the screen where the window is located. The value ranges from 0.5 to 4.0
     * and varies with the screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    defaultDensity: double;

    /**
     * Custom display size scale factor of the window. The value ranges from 0.5 to 4.0. If this parameter is left
     * unspecified, the system's display size scale factor is used. This parameter takes effect only for the main
     * window. For the child window or system window, it is equivalent to the system's display size scale factor (
     * **systemDensity**).
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    customDensity: double;
  }

  /**
   * Describes the window properties.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface WindowProperties {
    /**
     * Window size, which can be obtained from the page lifecycle
     * [onPageShow]{@link @ohos.app.ability.UIAbility:UIAbility.onPageShow} or the
     * application lifecycle [onForeground]{@link @ohos.app.ability.UIAbility:UIAbility.onForeground}.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * Size of the rectangle that can be drawn in the window. The upper boundary and left boundary are calculated
     * relative to the top-left vertex of the window. In the stage model, this property should be obtained after
     * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}
     * is called to load the page content.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    drawableRect: Rect;

    /**
     * Window type.
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
     * Window type
     *
     * @type { ?WindowType }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    windowType?: WindowType;

    /**
     * Whether the status bar is hidden when **isLayoutFullScreen** is set to **true**. If the status bar is hidden, the
     * return value is **true**. In other cases, the return value is **false**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 6 dynamic
     * @since 23 static
     */
    isFullScreen: boolean;

    /**
     * Whether an [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout) is set for a child
     * window. If an immersive-layout is set for the child window, the return value is **true**.
     *
     * Whether an [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout) is set for the main
     * window and the main window is in full-screen mode. If an immersive-layout is set for the main window and the main
     * window is in full-screen mode, the return value is **true**.
     *
     * In other cases, the return value is **false**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isLayoutFullScreen: boolean;

    /**
     * Whether the window is focusable. **true** if focusable, **false** otherwise.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    focusable: boolean;

    /**
     * Whether the window is touchable. **true** if touchable, **false** otherwise.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    touchable: boolean;

    /**
     * Screen brightness of the window. The brightness can be set by calling
     * [setWindowBrightness()]{@link @ohos.window:window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)}
     * . The value is a floating-point number. Valid values are in the range [0.0, 1.0] (where **1.0** means the
     * brightest) or the special value **-1.0** (which means that the brightness follows the system). If no value is
     * passed, the brightness follows the system. In this case, the obtained brightness value is **-1.0**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    brightness: double;

    /**
     * Dimness of the window that is not on top. The value is a floating-point number in the range [0.0, 1.0], and the
     * value **1.0** means the dimmest.
     *
     * Note: This property is supported since API version 7 and deprecated since API version 9. Currently, no substitute
     * is available.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    dimBehindValue: number;

    /**
     * Whether the screen is always on. **true** if always on, **false** otherwise.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 6 dynamic
     * @since 23 static
     */
    isKeepScreenOn: boolean;

    /**
     * Whether the window is in privacy mode. **true** if the window is in privacy mode, **false** otherwise. You can
     * call
     * [setWindowPrivacyMode()]{@link @ohos.window:window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * to set the privacy mode of the window.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isPrivacyMode: boolean;

    /**
     * Whether the window has rounded corners. **true** if the window has rounded corners; **false** otherwise.
     *
     * Note: This property is supported since API version 7 and deprecated since API version 9. Currently, no substitute
     * is available.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    isRoundCorner: boolean;

    /**
     * Whether the window background is transparent. **true** if transparent, **false** otherwise.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    isTransparent: boolean;

    /**
     * Window ID. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * ID of the screen where the window is located. By default, the ID of the main screen is returned. The value is an
     * integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * Window name. The default value is an empty string.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    name?: string;

    /**
     * Window size in the global coordinate system. In extended screen scenarios, the top-left corner of the primary
     * screen is used as the coordinate origin. In virtual screen scenarios, the top-left corner of the virtual screen
     * is used as the coordinate origin. The default value is [0, 0, 0, 0].
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    globalDisplayRect?: Rect;
  }

  /**
   * Describes the button style of the system decoration bar.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  interface DecorButtonStyle {
    /**
     * Color mode. Buttons automatically adapt to light colors in dark mode and to dark colors in light mode. If this
     * parameter is not set, they will automatically match the system color mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    colorMode?: ConfigurationConstant.ColorMode;

    /**
     * Size of the button when it is highlighted. The value ranges from 20 vp to 40 vp. The default value is 28 vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    buttonBackgroundSize? : int;

    /**
     * Spacing between buttons. The value ranges from 8 vp to 24 vp. The default value is 12 vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    spacingBetweenButtons? : int;

    /**
     * Margin between the rightmost edge of the close button and the window. The value ranges from 6 vp to 22 vp. The
     * default value is 20 vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    closeButtonRightMargin? : int;

    /**
     * Size of the button icon. The value ranges from 16 vp to 24 vp. The default value is 20 vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonIconSize? : int;

    /**
     * Radius of the button background rounded corner. The value ranges from 4 vp to 8 vp. The default value is 4 vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    buttonBackgroundCornerRadius? : int;
  }

  /**
   * Enumerates the color spaces.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 12]
   * @since 8 dynamic
   * @since 23 static
   */
  enum ColorSpace {
    /**
     * Default SRGB gamut.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 8 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Wide-gamut.
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
   * Describes the scale parameters.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface ScaleOptions {
    /**
     * Scale factor along the x-axis. The value is a floating-point number, and the default value is **1.0**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * Scale factor along the y-axis. The value is a floating-point number, and the default value is **1.0**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * X coordinate of the scale center. The value is a floating-point number in the range [0.0, 1.0], and the default
     * value is **0.5**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * Y coordinate of the scale center. The value is a floating-point number in the range [0.0, 1.0], and the default
     * value is **0.5**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * Describes the rotation parameters.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface RotateOptions {
    /**
     * Rotation angle around the x-axis. The value is a floating-point number, and the default value is **0.0**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * Rotation angle around the y-axis. The value is a floating-point number, and the default value is **0.0**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * Rotation angle around the z-axis. The value is a floating-point number, and the default value is **0.0**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;

    /**
     * X coordinate of the rotation center. The value is a floating-point number in the range [0.0, 1.0], and the
     * default value is **0.5**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotX?: double;

    /**
     * Y coordinate of the rotation center. The value is a floating-point number in the range [0.0, 1.0], and the
     * default value is **0.5**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    pivotY?: double;
  }

  /**
   * Describes the translation parameters.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TranslateOptions {
    /**
     * Distance to translate along the x-axis. The value is a floating-point number, the default value is 0.0, and the
     * unit is px.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    x?: double;

    /**
     * Distance to translate along the y-axis. The value is a floating-point number, the default value is 0.0, and the
     * unit is px.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    y?: double;

    /**
     * Distance to translate along the z-axis. The value is a floating-point number, the default value is 0.0, and the
     * unit is px.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    z?: double;
  }

  /**
   * Provides the context for the transition animation.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionContext {
    /**
     * The target window with animation
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    toWindow: Window;

    /**
     * Completes the transition. This API can be called only after [animateTo()]{@link animateTo}
     * is executed.
     *
     * @param { boolean } isCompleted - Whether the transition is complete. **true** if complete, **false** otherwise.
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
   * Implements the transition animation controller. Before calling any API, you must create a system window. For
   * details, see the sample code.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface TransitionController {
    /**
     * Customizes the animation for the scenario when the window is shown.
     *
     * @param { TransitionContext } context - Context of the transition animation.
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
     * Customizes the animation for the scenario when the window is hidden.
     *
     * @param { TransitionContext } context - Context of the transition animation.
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
   * Defines the parameters for creating a child window or system window.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Configuration {
    /**
     * Indicates window id.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Indicates window type
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    windowType: WindowType;

    /**
     * Indicates window context.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    ctx?: BaseContext;

    /**
     * Screen ID of the current window. If it is not set, the screen ID of the parent window is used by default.
     *     The value is a non-negative integer and must correspond to an existing screen.
     * In scenarios involving extended screens or heterogeneous virtual screens, a global floating window can be
     *     displayed on a specified screen by setting the screen ID.
     * For modal windows and system windows, this parameter takes no effect, and the parent window's
     *     screen ID is used by default.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    displayId?: long;

    /**
     * Indicates Parent window id
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    parentId?: int;

    /**
     * Indicates whether enable window decor, only support dialog, The default value is false.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    decorEnabled?: boolean;

    /**
     * Indicates dialog window title when decor enabled.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * Z-level of the system window. This parameter is valid only when [WindowType]{@link window.WindowType} is set to
     * **TYPE_DYNAMIC**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    zIndex?: int;

    /**
     * Whether the window should use the default density of the system. If the default density is used, the window does
     * not re-layout when the system display size changes.
     *
     * If this parameter is set to **true** for a system window, the window uses the default density and is not affected
     * by
     * [setDefaultDensityEnabled()]{@link @ohos.window:window.WindowStage.setDefaultDensityEnabled}
     * or [setCustomDensity()]{@link @ohos.window:window.Window.setCustomDensity}
     * settings for the main window or
     * [setDefaultDensityEnabled()]{@link @ohos.window:window.WindowStage.setDefaultDensityEnabled}
     * settings for the current window.
     *
     * If this parameter is set to **false**, the window does not use the default density and is affected by those
     * settings.
     *
     * The default value is **false**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    defaultDensityEnabled?: boolean;
  }

  /**
   * Describes the parameters for window size limits. Applications can obtain the current window size limits (in px) via
   * [getWindowLimits]{@link @ohos.window:window.Window.getWindowLimits}. Starting from API version 22, they can also be
   * obtained via [getWindowLimitsVP]{@link @ohos.window:window.Window.getWindowLimitsVP} (in vp).
   *
   * The actual window size limits applied are determined by the intersection of the default system limits, application
   * configurations, and runtime settings, with the priority (from highest to lowest) as follows:
   *
   * 1. Window size limits configured by the application via [setWindowLimits]{@link @ohos.window:window.Window.setWindowLimits(windowLimits: WindowLimits)}.
   * 2. Window size limits specified by the application via [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions} when the application starts the window through [startAbility]{@link ./application/UIAbilityContext:UIAbilityContext#startAbility(want: Want, options?: StartOptions)}. (This approach is supported since API version 17.)
   * 3. Window size limits configured by the application in [abilities in the module.json5 file](docroot://quick-start/module-configuration-file.md#abilities).
   * 4. Default system limits (which vary depending on the product and window type).
   *
   * > **NOTE**
   * >
   * > For the **maxWidth**, **maxHeight**, **minWidth**, and **minHeight** properties:
   * >
   * > - The default unit is px. Starting from API version 22, the unit can be px or vp, depending on the setting of
   * > **pixelUnit**.
   * >
   * > - The value is an integer. Floating-point values will be rounded down.
   * >
   * > - The default value is **0**, indicating that the property does not change.
   * >
   * > - The lower bound of the effective range is the minimum height/width limited by the system.
   * >
   * > - The upper bound of the effective range is the maximum height/width limited by the system.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface WindowLimits {

    /**
     * Maximum window width.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxWidth?: int;

    /**
     * Maximum window height.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    maxHeight?: int;

    /**
     * Minimum window width.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minWidth?: int;

    /**
     * Minimum window height.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    minHeight?: int;

    /**
     * Unit of the window size limits. The default value is **px**. The value can be **px** or **vp**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    pixelUnit?: PixelUnit;
  }

  /**
   * Describes the rectangle used to hold the minimize, maximize, and close buttons on the title bar. This rectangle is
   * located in the top-right corner of the window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface TitleButtonRect {

    /**
     * Right boundary of the rectangle, in vp. The value must be an integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    right: int;

    /**
     * Top boundary of the rectangle, in vp. The value must be an integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * Width of the rectangle, in vp. The value must be an integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    width: int;

    /**
     * Height of the rectangle, in vp. The value must be an integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    height: int;
  }

  /**
   * Describes the value and reason returned upon a window rectangle (position and size) change.
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
     * Reason for the window rectangle change.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    reason: RectChangeReason;
  }

  /**
   * Describes the new area where the window cannot be displayed. The new area is returned when the corresponding event
   * is triggered.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface AvoidAreaOptions {
    /**
     * Type of the new area returned.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    type: AvoidAreaType;

    /**
     * New area returned.
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
   * Describes [environment variable](docroot://ui/arkts-env-system-property.md) data types for window avoidance areas
   * of different types. All types of window avoidance areas are measured in px.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoPX {
    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_SYSTEM** type, in px.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: AvoidArea;

    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_CUTOUT** type, in px.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: AvoidArea;

    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_KEYBOARD** type, in px.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: AvoidArea;

    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_NAVIGATION_INDICATOR**
     * type, in px.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: AvoidArea;
  }

  /**
   * Describes [environment variable](docroot://ui/arkts-env-system-property.md) data types for window avoidance areas
   * of different types. All types of window avoidance areas are measured in vp.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  interface UIEnvWindowAvoidAreaInfoVP {
    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_SYSTEM** type, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    statusBar: UIEnvAvoidAreaVP;

    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_CUTOUT** type, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    cutout: UIEnvAvoidAreaVP;

    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_KEYBOARD** type, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    keyboard: UIEnvAvoidAreaVP;

    /**
     * Avoidance area whose [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_NAVIGATION_INDICATOR**
     * type, in vp.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    navigationIndicator: UIEnvAvoidAreaVP;
  }

  /**
   * Enumerates the reasons for window rectangle (position and size) changes.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum RectChangeReason {
    /**
     * Default value.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    UNDEFINED = 0,

    /**
     * The window is maximized.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MAXIMIZE = 1,

    /**
     * The window is restored to the previous state.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    RECOVER = 2,

    /**
     * The window is moved.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MOVE = 3,

    /**
     * The window is zoomed in or out by dragging.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG = 4,

    /**
     * The window starts zooming in or out.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_START = 5,

    /**
     * The window finishes zooming in or out.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    DRAG_END = 6
  }

  /**
   * Enumerates the window visibility states.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  enum OcclusionState {
    /**
     * The window is entirely visible, with no parts obscured by other non-transparent windows.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    NO_OCCLUSION = 0,

    /**
     * The window is partially visible, with some parts obscured by other non-transparent windows.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    PARTIAL_OCCLUSION = 1,

    /**
     * The window is completely invisible, either fully obscured by other non-transparent windows, minimized, or hidden.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    FULL_OCCLUSION = 2
  }

  /**
   * Describes the main window information.
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
     * Task name of the main window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    label: string;
  }

  /**
   * Describes the configuration of the main window screenshot.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 21 dynamic
   * @since 23 static
   */
  interface WindowSnapshotConfiguration {
    /**
     * Whether the existing screenshot of the main window should be used. The default value is **true**. When it is set
     * to **true**, the system uses the existing screenshot of the main window, or captures the latest screenshot if no
     * existing screenshot is saved. When it is set to **false**, the system captures the latest screenshot of the main
     * window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 21 dynamic
     * @since 23 static
     */
    useCache?: boolean;
  }

  /**
   * Creates a child window or system window. This API uses an asynchronous callback to return the result.
   *
   * In non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, the child window
   * created uses an [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout) by default.
   *
   * In freeform window mode, the child window created uses an immersive layout when
   * [decorEnabled]{@link @ohos.window:window.Configuration} is set to **false**, and it uses a non-immersive layout
   * when this parameter is set to **true**.
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW [since 12]
   * @param { Configuration } config - Parameters for window creation.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window created.
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
   * Creates a child window or system window. This API uses a promise to return the result.
   *
   * In non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, the child window
   * created uses an [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout) by default.
   *
   * In freeform window mode, the child window created uses an immersive layout when
   * [decorEnabled]{@link @ohos.window:window.Configuration} is set to **false**, and it uses a non-immersive layout
   * when this parameter is set to **true**.
   *
   * @permission ohos.permission.SYSTEM_FLOAT_WINDOW [since 12]
   * @param { Configuration } config - Parameters for window creation.
   * @returns { Promise<Window> } Promise used to return the window created.
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
   * Creates a child window. This API uses an asynchronous callback to return the result.
   *
   * The child window created uses an [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout)
   * by default.
   *
   * @param { string } id - Window name, that is, the value of name in
   *     [Configuration]{@link @ohos.window:window.Configuration}.
   * @param { WindowType } type - Window type.
   * @param { AsyncCallback<Window> } callback - Callback used to return the child window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration, callback: AsyncCallback<Window>)
   */
  function create(id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * Creates a child window. This API uses a promise to return the result.
   *
   * The child window created uses an [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout)
   * by default.
   *
   * @param { string } id - Window name, that is, the value of name in
   *     [Configuration]{@link @ohos.window:window.Configuration}.
   * @param { WindowType } type - Window type.
   * @returns { Promise<Window> } Promise used to return the child window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration)
   */
  function create(id: string, type: WindowType): Promise<Window>;

  /**
   * Creates a system window. This API uses a promise to return the result.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { string } id - Window name, that is, the value of name in
   *     [Configuration]{@link @ohos.window:window.Configuration}.
   * @param { WindowType } type - Window type.
   * @returns { Promise<Window> } Promise used to return the child window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration)
   */
  function create(ctx: BaseContext, id: string, type: WindowType): Promise<Window>;

  /**
   * Creates a system window. This API uses an asynchronous callback to return the result.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { string } id - Window name, that is, the value of name in
   *     [Configuration]{@link @ohos.window:window.Configuration}.
   * @param { WindowType } type - Window type.
   * @param { AsyncCallback<Window> } callback - Callback used to return the child window created.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.createWindow(config: Configuration, callback: AsyncCallback<Window>)
   */
  function create(ctx: BaseContext, id: string, type: WindowType, callback: AsyncCallback<Window>): void;

  /**
   * Create a subwindow with a specific name and bind parent.
   * The parent window only supports main window.
   * The subwindow follows the parent window to show/hide, but does not follow the parent window to destroy.
   * The subwindow listens to the parent window lifecycle changes through the callback function.
   *
   * @param { string } name - Indicates window name.
   * @param { int } parentId - Indicates parent window id. The window id is a non-negative number and exists.
   * @param { BaseContext } ctx - Indicates the context on which the window depends.
   * @param { WindowEventListener } parentWindowEventListener - Indicates the event listener of parent window.
   * @returns { Promise<Window> } The interface for creating a window returns a promise.
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
   * @since 26.0.0 dynamic&static
   */
  function createSubWindowAndBindParent(name: string, parentId: int, ctx: BaseContext,
    parentWindowEventListener: WindowEventListener): Promise<Window>;

  /**
   * Finds a window based on the ID. This API uses an asynchronous callback to return the result.
   *
   * @param { string } id - Window name, that is, the value of name in
   *     [Configuration]{@link @ohos.window:window.Configuration}.
   * @param { AsyncCallback<Window> } callback - Callback used to return the window found.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.findWindow
   */
  function find(id: string, callback: AsyncCallback<Window>): void;

  /**
   * Finds a window based on the ID. This API uses a promise to return the result.
   *
   * @param { string } id - Window name, that is, the value of name in
   *     [Configuration]{@link @ohos.window:window.Configuration}.
   * @returns { Promise<Window> } Promise used to return the window found.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead window.findWindow
   */
  function find(id: string): Promise<Window>;

  /**
   * Finds a window based on the name.
   *
   * @param { string } name - Window name. When searching for a child window or system window, use the window name in
   *     [Configuration]{@link @ohos.window:window.Configuration}. When searching for the main window, use
   *     [getWindowName](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getwindowname12) to obtain the
   *     window name of the current instance.
   * @returns { Window } Window found. If the window with the specified name does not exist, error code 1300002
   *     is thrown.
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
   * Obtains the top window of the current application. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)
   */
  function getTopWindow(callback: AsyncCallback<Window>): void;

  /**
   * Obtains the top window of the current application. This API uses a promise to return the result.
   *
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @FAModelOnly
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext)
   */
  function getTopWindow(): Promise<Window>;

  /**
   * Obtains the top window of the current application. This API uses a promise to return the result.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext)
   */
  function getTopWindow(ctx: BaseContext): Promise<Window>;

  /**
   * Obtains the top window of the current application. This API uses an asynchronous callback to return the result.
   *
   * @param { BaseContext } ctx - Current application context.
   * @param { AsyncCallback<Window> } callback - Callback used to return the top window obtained.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)
   */
  function getTopWindow(ctx: BaseContext, callback: AsyncCallback<Window>): void;

  /**
   * Obtains the topmost layer child window of the current application. This API uses an asynchronous callback to return
   * the result.
   *
   * If no child window exists or the child window is not displayed by calling
   * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}, the main window of the
   * application is returned.
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
   * Obtains the topmost layer child window of the current application. This API uses a promise to return the result.
   *
   * If no child window exists or the child window is not displayed by calling
   * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)}, the main window of the
   * application is returned.
   *
   * @param { BaseContext } ctx - Current application context.
   * @returns { Promise<Window> } Promise used to return the topmost layer window obtained.
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
   * Minimizes all main windows on a display.
   *
   * @param { long } id - ID of the [display]{@link @ohos.display:display.DisplayState}. The value must be an integer.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Minimizes all main windows on a display. This API uses a promise to return the result.
   *
   * @param { long } id - ID of the [display]{@link @ohos.display:display.DisplayState}. The value must be an integer.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Minimizes all main windows on a display while keeping one window open. This API uses a promise to return the
   * result.
   *
   * @param { long } displayId - Display ID. The value must be an integer. Non-integer values are rounded down.
   * @param { int } excludeWindowId - Window ID. You can call
   *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties} to obtain the window properties, in
   *     which **id** is the window ID. If the window ID is less than or equal to 0, or the window ID is null or
   *     undefined, error code [401](docroot://reference/errorcode-universal.md#401-parameter-check-failed) is thrown.
   *     If the window ID is greater than 0 but does not exist, error code 1300002 is thrown. If the window ID is
   *     greater than 0 but the window exists on another display, all main windows on the specified display are
   *     minimized. The value must be an integer. Floating-point numbers are rounded down.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Hides or restores the application's windows during quick multi-window switching. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Hides or restores the application's windows during quick multi-window switching. This API uses a promise to return
   * the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the window layout mode. This API uses an asynchronous callback to return the result.
   *
   * @param { WindowLayoutMode } mode - Window layout mode to set.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Sets the window layout mode. This API uses a promise to return the result.
   *
   * @param { WindowLayoutMode } mode - Window layout mode to set.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Enables or disables gesture navigation. This API uses an asynchronous callback to return the result. For security
   * purposes, the system does not interfere with the disabling and enabling of gesture navigation. If an application
   * exits abnormally after it disables gesture navigation and wants to restore gesture navigation, it must implement
   * automatic launch and call this API again to enable gesture navigation.
   *
   * @param { boolean } enable - Whether to enable gesture navigation. **true** to enable, **false** otherwise.
   *     Currently, only the pull-down gesture is disabled. Other gestures remain enabled.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Enables or disables gesture navigation. This API uses a promise to return the result. For security purposes, the
   * system does not interfere with the disabling and enabling of gesture navigation. If an application exits abnormally
   * after it disables gesture navigation and wants to restore gesture navigation, it must implement automatic launch
   * and call this API again to enable gesture navigation.
   *
   * @param { boolean } enable - Whether to enable gesture navigation. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Controls whether a watermark image is displayed on the screen. This API uses a promise to return the result.
   *
   * @param { image.PixelMap } pixelMap - Watermark image, which can be obtained by calling
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     .
   * @param { boolean } enable - Whether to display the watermark image. **true** to display, **false** otherwise. After
   *     the watermark image is displayed, you need to set this parameter to **false** to disable the watermark display.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Set watermark image.
   *
   * @param { image.PixelMap } pixelMap - Watermark image.
   * @param { boolean } enable - Show watermark if true.
   * @param { int } priority - Specifies the priority level for the incoming watermark image to take effect. A smaller
   *     value of this parameter indicates a higher priority. The value range must be greater than or equal to 0.
   * @returns { Promise<void> } - Promise that returns no value.
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
   * Controls whether a watermark image is displayed on the screen. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { image.PixelMap } pixelMap - Watermark image, which can be obtained by calling
   *     [createPixelMap]{@link @ohos.multimedia.image:image.createPixelMap(colors: ArrayBuffer, options: InitializationOptions)}
   *     .
   * @param { boolean } enable - Whether to display the watermark image. **true** to display, **false** otherwise. After
   *     the watermark image is displayed, you need to set this parameter to **false** to disable the watermark display.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Shifts the window focus from the source window to the target window in the same application. The window focus can
   * be shifted within the main window and child windows. This API uses a promise to return the result.
   *
   * Ensure that the target window can gain focus (configurable by calling
   * [setWindowFocusable()]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)}
   * ) and that [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)} has been
   * successfully executed.
   *
   * > **NOTE**
   * >
   * > Before calling **shiftAppWindowFocus()**, ensure that the target window has called
   * > [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
   * > or [setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}
   * > and these operations have been effective. Otherwise, an invisible window may gain focus, causing function
   * > exceptions or affecting user experience.
   *
   * @param { int } sourceWindowId - ID of the source window, which is having the focus. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties} to obtain the window ID.
   * @param { int } targetWindowId - ID of the target window. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties} to obtain the window ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the z-level of a system window. This API uses a promise to return the result.
   *
   * Adjusts the **zIndex** of all system windows of the specified type to the configured value. Before and after the
   * adjustment, the relative z-level of these windows remains unchanged, and the focus window does not change. After
   * the application is closed, the z-level of specified windows is restored to the default value.
   *
   * You are advised to set different **zIndex** values for different types of windows. If there are windows with the
   * same **zIndex**, the relative z-level of windows remains unchanged before and after the setting.
   *
   * @param { WindowType } windowType - Window type. Only the following types are supported: **TYPE_WALLET_SWIPE_CARD**,
   *     **TYPE_VOICE_INTERACTION**, **TYPE_SCREENSHOT**, **TYPE_SCREEN_CONTROL**, **TYPE_FLOAT_NAVIGATION**, and
   *     **TYPE_MUTISCREEN_COLLABORATION**.
   * @param { int } zIndex - Z-level of the system window. The value must be an integer. Floating-point numbers are
   *     rounded down. The value **0** or a negative number will place the window below the home screen.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Transfers a mouse input event from one window to another within the same application. This API takes effect only
   * for the main window and its child windows. This API uses a promise to return the result.
   *
   * To transfer mouse input events, the source window must call this API within the callback of the
   * [onTouch]{@link onTouch} event (the event type must
   * be **TouchType.Down**). After a successful call, the system sends a **TouchType.Up** event to the source window and
   * a **TouchType.Down** event to the target window.
   *
   * @param { int } sourceWindowId - ID of the source window. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties} to obtain the window ID.
   * @param { int } targetWindowId - ID of the target window. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties} to obtain the window ID.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Transfers a touchscreen input event from one window to another within the same application. This API takes effect
   * only for the main window and its child windows. This API uses a promise to return the result.
   *
   * To transfer touchscreen input events, the source window must call this API within the callback of the
   * [onTouch]{@link onTouch} event (the event type must
   * be **TouchType.Down**). After a successful call, the system sends a **TouchType.Up** event to the source window and
   * a **TouchType.Down** event to the target window.
   *
   * @param { int } sourceWindowId - ID of the source window. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties} to obtain the window ID. The
   *     value must be an integer greater than 0. If it is less than or equal to 0, error code 1300016 is returned.
   * @param { int } targetWindowId - ID of the target window. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties} to obtain the window ID. The
   *     value must be an integer greater than 0. If it is less than or equal to 0, error code 1300016 is returned.
   * @param { int } fingerId - Unique ID of the finger in the touchscreen input event. You are advised to use the
   *     **touches** attribute in the [TouchEvent]{@link TouchEvent} object to obtain
   *     the ID. This parameter must be an integer greater than or equal to 0. If the value is less than 0, error code 1
   *     300016 is returned.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains information about visible main windows on the current screen. Visible main windows are main windows that
   * are not returned to the background. This API uses a promise to return the result.
   *
   * @permission ohos.permission.VISIBLE_WINDOW_INFO [since 18]
   * @returns { Promise<Array<WindowInfo>> } Promise used to return the information about visible windows.
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
   * Obtains the name of [NavDestination]{@link NavDestination} in the current top-level
   * [Navigation]{@link Navigation} component of the specified foreground window. This API
   * uses a promise to return the result.
   *
   * @param { int } windowId - ID of the window to query. This parameter must be an integer greater than 0. If it is
   *     less than or equal to 0, error code 1300016 is returned. If the specified window does not exist or is not in
   *     the foreground, error code 1300002 is returned.
   * @returns { Promise<string> } Promise used to return the
   *     [NavDestination]{@link NavDestination} name obtained.
   *     <br>If there are nested [Navigation]{@link Navigation} components or multiple
   *     [Navigation]{@link Navigation} components on the current page, the information of the
   *     most recently created [Navigation]{@link Navigation} component is queried.
   *     <br>If the page does not have the [Navigation]{@link Navigation} component or the
   *     [Navigation]{@link Navigation} component does not have
   *     [NavDestination]{@link NavDestination}, an empty string is returned.
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
   * Obtains a snapshot of the same size as the specified window. This API uses a promise to return the result. If
   * privacy mode is enabled for the current window (using
   * [setWindowPrivacyMode]{@link @ohos.window:window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
   * ), taking a screenshot will result in a blank screen.
   *
   * @param { int } windowId - Indicates target window id.
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
   * Obtains visible windows at the specified coordinates within the current application, sorted by their current layer
   * order. The window at the topmost layer corresponds to index 0 of the array. This API uses a promise to return the
   * result.
   *
   * @param { long } displayId - ID of the display where the windows are located. The value must be an integer. If a non
   *     -integer is passed, the decimal part is ignored. The value can be obtained from
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}.
   * @param { int } [windowNumber] - Number of windows to obtain. The value must be an integer greater than 0. If a non-
   *     integer is passed, the decimal part is ignored. If this parameter is not set or is less than or equal to 0, all
   *     windows that meet the conditions are returned.
   * @param { int } [x] - X coordinate, with the top-left corner of the screen used as the origin. The value must be a
   *     non-negative integer. If a non-integer is passed, the decimal part is ignored. If this parameter is not set or
   *     is less than 0, all visible windows are returned.
   * @param { int } [y] - Y coordinate, with the top-left corner of the screen used as the origin. The value must be a
   *     non-negative integer. If a non-integer is passed, the decimal part is ignored. If this parameter is not set or
   *     is less than 0, all visible windows are returned.
   * @returns { Promise<Array<Window>> } Promise used to return an array of window objects.
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
   * Obtains the layout information array of all windows visible on a display. The layout information is arranged based
   * on the current window stacking order, and the topmost window in the hierarchy is at index 0 of the array. This API
   * uses a promise to return the result.
   *
   * @param { long } displayId - ID of the display where the windows are located. The value must be an integer and can
   *     be obtained from [WindowProperties]{@link @ohos.window:window.WindowProperties}.
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise used to return an array of window layout information objects.
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
   * Obtains the array of window layout info visible on a specified screen.
   * The width and height of each rect are calculated after scaling. The array is sorted by the current window level.
   * The index of the array corresponding to the highest level is 0.
   *
   * @param { long } displayId - Indicate the id of display.
   * @param { WindowInfoOptions } [option] - Filter criteria for window information.
   * @returns { Promise<Array<WindowLayoutInfo>> } Promise used to return the WindowLayoutInfo.
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
   * Obtains the window mode of the window that is in the foreground lifecycle on the specified screen. This API uses a
   * promise to return the result.
   *
   * @param { long } [displayId] - Optional display ID, which is used to obtain the window mode information on the
   *     corresponding screen. This parameter must be an integer greater than or equal to 0. If it is less than 0, error
   *     code 1300016 is returned. If this parameter is not passed or is set to null or undefined, all screens are
   *     queried. If a non-integer is passed, the decimal part is ignored. If the specified screen does not exist, the
   *     return value is 0. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.Window.getWindowProperties} to obtain the display ID of the
   *     window.
   * @returns { Promise<int> } Promise used to return the window mode. Each binary bit represents a window mode. For
   *     details about the supported window modes, see [GlobalWindowMode]{@link @ohos.window:window.GlobalWindowMode}.
   *     The return value is the result of a bitwise OR operation on the corresponding window mode values. For example,
   *     if there are full-screen, floating, and PiP windows on the specified screen, the return value is `0b1|0b100|0b1
   *     000 = 13`.
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
   * Subscribes to the property change event of the status bar and navigation bar.
   *
   * @param { 'systemBarTintChange' } type - Event type. The value is fixed at **'systemBarTintChange'**, indicating the
   *     property change event of the status bar and navigation bar.
   * @param { Callback<SystemBarTintState> } callback - Callback used to return the properties of the status bar and
   *     navigation bar.
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
   * Subscribes to the property change event of the status bar and navigation bar.
   *
   * @param { Callback<SystemBarTintState> } callback - Callback used to return the properties of the system bar.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onSystemBarTintChange(callback: Callback<SystemBarTintState>): void;

  /**
   * Unsubscribes from the property change event of the status bar and navigation bar.
   *
   * @param { 'systemBarTintChange' } type - Event type. The value is fixed at **'systemBarTintChange'**, indicating the
   *     property change event of the status bar and navigation bar.
   * @param { Callback<SystemBarTintState> } [callback] - Callback used to return the properties of the status bar and
   *     navigation bar. If a value is passed in, the corresponding subscription is canceled. If no value is passed in,
   *     all subscriptions to the specified event are canceled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   */
  function off(type: 'systemBarTintChange', callback?: Callback<SystemBarTintState>): void;

  /**
   * Unsubscribes from the property change event of the status bar and navigation bar.
   *
   * @param { Callback<SystemBarTintState> } [callback] - Callback used to return the properties of the system bar.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offSystemBarTintChange(callback?: Callback<SystemBarTintState>): void;

  /**
   * Subscribes to the gesture navigation status change event.
   *
   * @param { 'gestureNavigationEnabledChange' } type - Event type. The value is fixed at
   *     **'gestureNavigationEnabledChange'**, indicating the gesture navigation status change event.
   * @param { Callback<boolean> } callback - Callback used to return the gesture navigation status. **true** if enabled,
   *     **false** otherwise.
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
   * Subscribes to the gesture navigation status change event.
   *
   * @param { Callback<boolean> } callback - Callback used to return the gesture navigation status. true if enabled,
   *     false otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onGestureNavigationEnabledChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from the gesture navigation status change event.
   *
   * @param { 'gestureNavigationEnabledChange' } type the event of gesture navigation enabled changes.
   * @param { Callback<boolean> } [callback] Callback function that has been used for the subscription. If a value is
   *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
   *     specified event are canceled.
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
   * Unsubscribes from the gesture navigation status change event.
   *
   * @param { Callback<boolean> } [callback] Callback function that has been used for the subscription. If a value is
   *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
   *     specified event are canceled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offGestureNavigationEnabledChange(callback?: Callback<boolean>): void;

  /**
   * Subscribes to the watermark status change event.
   *
   * @param { 'waterMarkFlagChange' } type - Event type. The value is fixed at **'waterMarkFlagChange'**, indicating the
   *     watermark status change event.
   * @param { Callback<boolean> } callback - Callback used to return the watermark status. **true** if enabled,
   *     **false** otherwise.
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
   * Subscribes to the watermark status change event.
   *
   * @param { Callback<boolean> } callback - Callback used to return the watermark status. true if enabled, false
   *     otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onWaterMarkFlagChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from the watermark status change event.
   *
   * @param { 'waterMarkFlagChange' } type the event of watermark flag change.
   * @param { Callback<boolean> } [callback] Callback function that has been used for the subscription. If a value is
   *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
   *     specified event are canceled.
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
   * Unsubscribes from the watermark status change event.
   *
   * @param { Callback<boolean> } [callback] Callback function that has been used for the subscription. If a value is
   *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
   *     specified event are canceled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1300002 - This window state is abnormal.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offWaterMarkFlagChange(callback?: Callback<boolean>): void;

  /**
   * Register the callback for application process focus state changes.
   * This listener monitors the focus state changes between applications. 
   * If the focus state changes between windows within the same application, the callback function will not be triggered.
   *
   * @param { Callback<boolean> } callback - Callback used to return the result whether application process
   *     focused or not.
   *     The value true means that the application process becomes focused,
   *     and false means that the application process becomes unfocused.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onApplicationFocusStateChange(callback: Callback<boolean>): void;

  /**
   * Unregister the callback for application process focus state changes.
   *
   * @param { Callback<boolean> } [callback] - Callback used to return the result whether application process
   *     focused or not. If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offApplicationFocusStateChange(callback?: Callback<boolean>): void;

  /**
   * Sets the background color of the splash screen of the UIAbility based on the specified module name and ability name
   * within the same bundle name. This API uses a promise to return the result.
   *
   * This API takes effect for all processes of the same bundle name, for example, in multi-instance or clone scenarios.
   *
   * @param { string } moduleName - Module name of the UIAbility. The value is a string of 0 to 200 bytes. Only the
   *     module names within the same application can be set. The module name is specified in the **name** field of the
   *     [module.json5 file](docroot://quick-start/module-configuration-file.md#tags-in-the-configuration-file).
   * @param { string } abilityName - Name of the UIAbility. The value is a string of 0 to 200 bytes. Only the ability
   *     names within the same application can be set. The UIAbility name is specified in the **name** field under
   *     [abilities in the module.json5 file](docroot://quick-start/module-configuration-file.md#abilities).
   * @param { ColorMetrics } color - Background color of the splash screen.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Notifies a screenshot event. This API uses a promise to return the result.
   *
   * @param { ScreenshotEventType } eventType - Type of the screenshot event.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets a watermark image for windows in the current application process. This API uses a promise to return the
   * result. This API must be called after
   * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
   * or [setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}
   * takes effect.
   *
   * @param {  image.PixelMap | undefined  } pixelMap - If this parameter is set to **image.PixelMap**, a watermark
   *     image is set. If this parameter is set to **undefined**, the watermark is removed.<br>If the width and height
   *     of the image both surpass the window and screen sizes, error code 1300016 is returned.<br>If the width or
   *     height of the image goes beyond the window dimensions, the excess part is trimmed.<br>If the width or height of
   *     the image falls short of the window dimensions, the shortfall is automatically repeated to complete the image.
   * @returns {  Promise<void>  } Promise that returns no value.
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
   * Obtains the information about all main windows. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @returns { Promise<Array<MainWindowInfo>> } Promise used to return an array of main window information.
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
   * Obtains the screenshots of one or more main windows specified by **windowId**. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.CUSTOM_SCREEN_CAPTURE
   * @param { Array<int> } windowId - Array of main window IDs. These IDs can be obtained using
   *     [window.getAllMainWindowInfo()]{@link window.getAllMainWindowInfo}. If the array is null or undefined, contains
   *     any negative number, includes duplicates, or has more than 512 entries, error code 401 is returned. If the
   *     array contains any positive ID that does not match an existing window, undefined is returned.
   * @param { WindowSnapshotConfiguration } config - Configuration for obtaining the window screenshot.
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
   * Move a window to the target display. The window must be a main window.
   *
   * @param { long } displayId - Indicate the id of display.
   * @param { int } windowId - A main window id which will be moved.
   * @returns { Promise<void> } - Promise that returns no value indicates complete.
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
   * Enumerates the window orientations. <!--Del-->For details of the differences between different enumerated values,
   * see
   * [What is the difference between orientation values 8 to 10 or 12 and values 13 to 16 (API version 9)](docroot://faqs/faqs-window-manager.md#what-is-the-difference-between-orientation-values-8-to-10-or-12-and-values-13-to-16-api-version-9)
   * .<!--DelEnd-->
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * Unspecified. The orientation is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * Portrait.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT = 1,

    /**
     * Landscape.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE = 2,

    /**
     * Reverse portrait.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 3,

    /**
     * Reverse landscape.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 4,

    /**
     * Automatically rotates with the sensor to four orientations: portrait, landscape, reverse portrait, and reverse
     * landscape. This rotation is not controlled by the rotation switch in Control Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION = 5,

    /**
     * Automatically rotates with the sensor to two orientations: portrait and reverse portrait. This rotation is not
     * controlled by the rotation switch in Control Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT = 6,

    /**
     * Automatically rotates with the sensor to two orientations: landscape and reverse landscape. This rotation is not
     * controlled by the rotation switch in Control Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE = 7,

    /**
     * Automatically rotates with the sensor to four orientations: portrait, landscape, reverse portrait, and reverse
     * landscape. This rotation is controlled by the rotation switch in Control Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_RESTRICTED = 8,

    /**
     * Automatically rotates with the sensor to two orientations: portrait and reverse portrait. This rotation is
     * controlled by the rotation switch in Control Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_PORTRAIT_RESTRICTED = 9,

    /**
     * Automatically rotates with the sensor to two orientations: landscape and reverse landscape. This rotation is
     * controlled by the rotation switch in Control Panel.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_LANDSCAPE_RESTRICTED = 10,

    /**
     * Locked mode, where the window orientation is consistent with the current screen orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    LOCKED = 11,

    /**
     * Automatically rotates with the sensor, under the restriction of the rotation switch in Control Panel. The
     * orientation that can be rotated to is determined by the system. For example, the window can rotate to portrait,
     * landscape, or reverse landscape, but not reverse portrait, on a certain device.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    AUTO_ROTATION_UNSPECIFIED = 12,

    /**
     * Temporarily rotates to portrait mode, and then automatically rotates with the sensor, under the restriction of
     * the rotation switch in Control Panel. The orientation that can be rotated to is determined by the system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT = 13,

    /**
     * Temporarily rotates to landscape mode, and then automatically rotates with the sensor, under the restriction of
     * the rotation switch in Control Panel. The orientation that can be rotated to is determined by the system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE = 14,

    /**
     * Temporarily rotates to reverse portrait mode, and then automatically rotates with the sensor, under the
     * restriction of the rotation switch in Control Panel. The orientation that can be rotated to is determined by the
     * system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_PORTRAIT_INVERTED = 15,

    /**
     * Temporarily rotates to reverse landscape mode, and then automatically rotates with the sensor, under the
     * restriction of the rotation switch in Control Panel. The orientation that can be rotated to is determined by the
     * system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    USER_ROTATION_LANDSCAPE_INVERTED = 16,

    /**
     * Follows the orientation of the home screen, where the window will rotate if the home screen rotates and will not
     * rotate if the home screen does not.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_DESKTOP = 17
  }

  /**
   * Type of execution result of setting preferred orientation
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum OrientationExecutionResult {
    /**
     * Orientation policy is applied.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_APPLIED = 0,
    /**
     * Orientation policy is ignored.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_IGNORED = 1,
    /**
     * Orientation policy is pending and will be applied soon.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ORIENTATION_PENDING = 2
  }

  /**
   * Result of setting preferred orientation
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface OrientationResult {
    /**
     * Execution result of setting preferred orientation.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    executionResult : OrientationExecutionResult;
  }

  /**
   * Enumerates the types of window rotation events.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RotationChangeType {
    /**
     * The window is about to rotate.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_WILL_ROTATE = 0,
    /**
     * The window has finished rotating.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    WINDOW_DID_ROTATE = 1
  }

  /**
   * Enumerates the types of window rectangle coordinate systems.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum RectType {
    /**
     * The window rectangle is relative to the screen coordinate system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_SCREEN  = 0,
    /**
     * The window rectangle is relative to the parent window coordinate system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    RELATIVE_TO_PARENT_WINDOW = 1
  }

  /**
   * Enumerates the screenshot event types.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum ScreenshotEventType {
    /**
     * System screenshot succeeds.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT = 0,

    /**
     * System screenshot aborted.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SYSTEM_SCREENSHOT_ABORT = 1,

    /**
     * Scroll screenshot starts.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_START = 2,

    /**
     * Scroll screenshot ends.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_END = 3,

    /**
     * Scroll screenshot aborted.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    SCROLL_SHOT_ABORT = 4
  }

  /**
   * Enumerates the types of rotation information.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 dynamic&static
   */
  enum RotationInfoType {
    /**
     * Window's screen orientation, based on how the Window module defines landscape/portrait modes.
     *
     * Note that it maps to the **orientation** parameter in
     * [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    WINDOW_ORIENTATION = 0,
    /**
     * Physical screen orientation, based on how the Display module defines landscape/portrait modes.
     *
     * It maps to the **orientation** property of the [display]{@link @ohos.display:display.DisplayState} object.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ORIENTATION = 1,
    /**
     * Physical rotation angle of the device's screen (in degrees, clockwise).
     *
     * It maps to the **rotation** property of the [display]{@link @ohos.display:display.DisplayState} object.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    DISPLAY_ROTATION = 2
  }

  /**
   * Describes the window information obtained during window rotation changes.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeInfo {
    /**
     * Type of window rotation event.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    type: RotationChangeType;
    /**
     * Display orientation of the window.
     *
     * - **0**: portrait.
     * - **1**: reverse landscape.
     * - **2**: reverse portrait.
     * - **3**: landscape.
     *
     * Note that the orientation here is different from the orientation property of the display object.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    orientation: int;
    /**
     * ID of the screen where the window is located.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayId: long;
    /**
     * Size of the rectangle after the screen where the window is located is rotated.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    displayRect: Rect;
  }

  /**
   * Describes the information returned by the application during window rotation changes. The system uses the
   * information to adjust the size of the current window rectangle. If the returned information is about the rotation
   * change of the main window, the system does not change the size of the main window.
   *
   * There are limitations on the size of application windows and system windows. For details about specific
   * restrictions and rules, see
   * [resize]{@link @ohos.window:window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  interface RotationChangeResult {
    /**
     * Type of window rectangle coordinate system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    rectType: RectType;
    /**
     * Information about the window's rectangle relative to the screen or parent window coordinate system.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    windowRect: Rect;
  }

  /**
   * Describes a generic callback function for rotation event notifications.
   *
   * In this callback function, the parameter type is [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo}
   * , and the return value type is [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} \| void.
   *
   * @param { T } info - Parameter of type [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo} passed by
   *     the system when the callback function is called.
   * @returns { U } Value of type [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} | void.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  type RotationChangeCallback<T, U> = (info: T) => U;

  /**
   * Describes the configuration for window animation.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface WindowAnimationConfig {
    /**
     * Type of animation curve.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    curve: WindowAnimationCurve;
    /**
     * Duration for playing the animation, in milliseconds (ms).
     *
     * The default value is 0, and the maximum value is 3000.
     *
     * Whether it is required depends on the animation curve type.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    duration?: long;
    /**
     * Parameters for the animation curve. Whether it is required depends on the animation curve type.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    param?: WindowAnimationCurveParam;
  }

  /**
   * Describes the window transition animation.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface TransitionAnimation {
    /**
     * Transition animation configuration.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config: WindowAnimationConfig;
    /**
     * Opacity of the window during the transition animation. If this parameter is set to **0**, the window is
     * completely transparent. The default value is **1.0**. When the animation type is **WindowTransitionType.DESTROY**
     * , this represents the opacity at the end of the animation. The value ranges from 0 to 1.0. The value is reset to
     * **1.0** when the animation ends.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    opacity?: double;
  }

  /**
   * Enumerates the window blur styles.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum BlurStyle {
    /**
     * Blur disabled.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    OFF = 0,
    /**
     * Thin blur.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THIN = 1,
    /**
     * Regular blur.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REGULAR = 2,
    /**
     * Thick blur.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    THICK = 3
  }

  /**
   * Enumerates the window lifecycle states.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum WindowEventType {
    /**
     * The window is running in the foreground.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_SHOWN = 1,
    /**
     * The window gains focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_ACTIVE = 2,
    /**
     * The window loses focus.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_INACTIVE = 3,
    /**
     * The window is running in the background.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    WINDOW_HIDDEN = 4,
    /**
     * The window is destroyed.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    WINDOW_DESTROYED = 7
  }

  /**
   * Enumerates the layout when the window is maximized.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  enum MaximizePresentation {
    /**
     * The window, when maximized, follows the application's full-screen mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    FOLLOW_APP_IMMERSIVE_SETTING = 0,
    /**
     * The window, when maximized, exits full-screen mode if it is set to full-screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EXIT_IMMERSIVE = 1,
    /**
     * The window, when maximized, transitions into the full-screen mode, and the window title bar and dock bar are
     * displayed when the cursor hovers over the hot zone.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE = 2,
    /**
     * The window, when maximized, transitions into the full-screen mode, and the window title bar and dock bar are not
     * displayed when the cursor hovers over the hot zone.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    ENTER_IMMERSIVE_DISABLE_TITLE_AND_DOCK_HOVER = 3
  }

  /**
   * Enum for across-display policy used when maximizing in the half-folded state of a foldable 2-in-1 device.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AcrossDisplayPresentation {
    /**
     * Indicates following the current acrossDisplayPresentation.
     * If the acrossDisplayPresentation has not been set, the default system policy applies:
     * In the half-folded state of the device, the window enters single-screen maximization
     * (i.e., when maximized, the window is displayed only on the upper or lower half of the screen).
     * In the expanded state, the window is maximized and remains across-display mode
     * (i.e., spanning across both the upper and lower displays) when folded back to the half-folded state.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FOLLOW_ACROSS_DISPLAY_SETTING = 0,

    /**
     * In the half-folded state of the device, the window could directly enter the across-display mode.
     * In the expanded state, the window is maximized and remains across-display mode
     * when folded back to the half-folded state.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ENTER_ACROSS_DISPLAY_MODE = 1,

    /**
     * In the half-folded state of the device, the window exits across-display mode and enters single-screen maximization
     * In the expanded state, the window is maximized and will exit across-display mode upon re-entering half-folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXIT_ACROSS_DISPLAY_MODE = 2
  }

  /**
   * Optional configuration for maximizing.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface MaximizeOptions {
    /**
     * Layout when the window is maximized.
     *
     * @default MaximizePresentation.ENTER_IMMERSIVE
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maximizePresentation?: MaximizePresentation;

    /**
     * The parameter controls the across-display mode policy of main windows.
     * This parameter can be called properly only on 2-in-1 devices with folding capabilities.
     * If it is called on other device types, it has no effect.
     *
     * @default AcrossDisplayPresentation.FOLLOW_ACROSS_DISPLAY_SETTING
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    acrossDisplayPresentation?: AcrossDisplayPresentation;

    /**
     * The configuration of snapshot animation. If not specified, the system default animation will be used.
     * When both the duration and delay parameters are set to 0, it means the snapshot animation is canceled.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    snapshotAnimationConfig?: WindowSnapshotAnimationConfig;
  }

  /**
   * Enumerates the window modes.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  enum GlobalWindowMode {
    /**
     * Full-screen window. The first binary bit from right to left is 1.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FULLSCREEN = 1,

    /**
     * Split-screen window. The second binary bit from right to left is 1.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SPLIT = 1 << 1,

    /**
     * Floating window. The third binary bit from right to left is 1.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    FLOAT = 1 << 2,

    /**
     * PiP window. The fourth binary bit from right to left is 1.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    PIP = 1 << 3
  }

  /**
   * Describes the window movement configuration.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface MoveConfiguration {
    /**
     * Target display ID. The value must be an integer. If a non-integer is passed in, the value is rounded down. If
     * this parameter is passed in, the window is positioned relative to the top-left corner of the target display. If
     * this parameter is left empty or the target display ID does not exist, the window is positioned relative to the
     * top-left corner of the current display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    displayId?: long;
  }

  /**
   * Optional configuration for startMovingWithOptions.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface StartMovingOptions {
    /**
     * Indicates whether the window needs to be focused when moving starts.
     *
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needFocused?: boolean;

    /**
     * The avoidance rect of window during drag-moving.
     * If unspecified, the system defaults to the following avoidance behavior:
     * Free window state:
     * 1.Main windows, subWindows and dialog windows can be dragged beyond the screen bounds
     * and will spring back on release.
     * 2.Other windows can be dragged beyond the screen bounds without springing back.
     * Non-free window state:
     * 1.System windows can be dragged beyond the main window bounds and the screen bounds without springing back.
     * 2.When the main window is fullscreen,
     * subWindows and dialog windows can be dragged beyond it without springing back.
     * 3.When the main window is not fullscreen,
     * subWindows and dialog windows can be dragged beyond it and will spring back on release.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    avoidRect?: Rect;
  }

  /**
   * Defines the type of system bar that can be displayed or hidden.
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
   * Describes the start animation configuration. This API works only for full-screen applications.
   *
   * The configuration does not take effect for inter-application transitions, where the default animation of the
   * system is used.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 20 dynamic
   * @since 23 static
   */
  interface StartAnimationSystemParams {
    /**
     * Type of the window animation.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    type: AnimationType;
    /**
     * Configuration for the window animation. The default animation curve is **WindowAnimationCurve.LINEAR**, and the
     * duration is **0**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    animationConfig?: WindowAnimationConfig;
  }

  /**
   * Describes the parameters for the startup animation.
   *
   * The configuration is valid only for transitions between different abilities within the same application.
   *
   * The configuration is valid only full-screen applications.
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
   * Describes the window parameters during application startup.
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
     * Describes the start animation configuration. This API works only for full-screen applications.
     *
     * The configuration does not take effect for inter-application transitions, where the default animation of the
     * system is used.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 20 dynamic
     * @since 23 static
     */
    systemAnimationParams?: StartAnimationSystemParams;
    /**
     * Whether to need start animation
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    needAnimation?: boolean;

    /**
     * Whether to override system window limits.
     * If true, the main window of the current ability can set a window limit that exceeds system restrictions.
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
   * Configuration for window snapshot animation.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface WindowSnapshotAnimationConfig {
    /**
     * The duration of the window snapshot fade-out animation (ms).
     * If left unspecified, the parameter defaults to a value determined by the system animation context:
     * 400 for transitions between WindowStatusType.FLOATING and WindowStatusType.FULLSCREEN window status.
     * 250 for all other screenshot animation scenarios.
     * The valid range for this parameter is 0-400.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    duration?: long;

    /**
     * The delay before the window snapshot fade-out animation begins (ms).
     * If left unspecified, the parameter defaults to a value determined by the system animation context:
     * 350 for transitions between WindowStatusType.FLOATING and WindowStatusType.FULLSCREEN window status.
     * 50 for all other screenshot animation scenarios.
     * The valid range for this parameter is 0-350.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    delay?: long;
  }

  /**
   * Describes the information about the soft keyboard window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  interface KeyboardInfo {
    /**
     * Position and size of the soft keyboard before the animation starts.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    beginRect: Rect;

    /**
     * Position and size of the soft keyboard after the animation ends.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    endRect: Rect;
    /**
     * Whether there is a show/hide animation. **true** if there is a show/hide animation, **false** otherwise.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    animated?: boolean;
    /**
     * Animation configuration.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    config?: WindowAnimationConfig;
  }

  /**
   * Describes the configuration for keyframe policies.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface KeyFramePolicy {
    /**
     * Whether to enable keyframes. **true** to enable, **false** otherwise.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    enable: boolean;

    /**
     * Time interval for triggering keyframe layout changes via dragging, in ms. The default value is **1000**. The
     * value is a positive integer. Floating-point values are rounded down. It works with **distance** using an OR
     * condition. If either of them is met, the layout change starts.
     *
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    interval?: long;

    /**
     * Distance interval for triggering keyframe layout changes via dragging, in px. The default value is **1000**. The
     * value is **0** or a positive integer. Floating-point values are rounded down. If the value is 0, the drag
     * distance is ignored. It works with **interval** using an OR condition. If either of them is met, the layout
     * change starts.
     *
     * @default 1000
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    distance?: int;

    /**
     * Duration of the animation for keyframe layout changes, in ms. The default value is **100**. The value is **0** or
     * a positive integer. Floating-point values are rounded down.
     *
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDuration?: long;

    /**
     * Delay before the animation for keyframe layout changes starts, in ms. The default value is **100**. The value is
     * **0** or a positive integer. Floating-point values are rounded down.
     *
     * @default 100
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    animationDelay?: long;
  }

  /**
   * Represents a window instance, which is the basic unit managed by the window manager.
   *
   * In the following API examples, you must use
   * [getLastWindow()]{@link @ohos.window:window.getLastWindow(ctx: BaseContext, callback: AsyncCallback<Window>)},
   * [createWindow()]{@link @ohos.window:window.createWindow(config: Configuration, callback: AsyncCallback<Window>)},
   * or [findWindow()]{@link @ohos.window:window.findWindow} to obtain a Window instance (named windowClass in this
   * example) and then call a method in this instance.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 6 dynamic
   * @since 23 static
   */
  interface Window {
    /**
     * Hides this window. This API uses an asynchronous callback to return the result. This API takes effect only for a
     * system window or an application child window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Hides this window. This API uses a promise to return the result. This API takes effect only for a system window
     * or an application child window.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Hides this window and plays an animation during the process. This API uses an asynchronous callback to return the
     * result. This API takes effect only for a system window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Hides this window and plays an animation during the process. This API uses a promise to return the result. This
     * API takes effect only for a system window.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Shows this window. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.showWindow(callback: AsyncCallback<void>)
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * Shows this window. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.showWindow()
     */
    show(): Promise<void>;

    /**
     * Shows this window. This API uses an asynchronous callback to return the result. This API takes effect only for a
     * system window, application child window, modal window, or global floating window. For the main window of an
     * application, this API moves it at the top when the main window is already displayed.
     *
     * > **NOTE**
     * >
     * > Before calling this API, you are advised to load the page by using
     * > [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)} or
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}. If the main window has not
     * > finished loading and you call this API directly, the starting window keeps showing. Similarly, if the system
     * > window, application child window, modal window, or global floating window has finished loading and you call
     * > this API directly, the window is in the foreground but is not visible.
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
     * Shows this window. This API uses a promise to return the result. This API takes effect only for a system window,
     * application child window, modal window, or global floating window. For the main window of an application, this
     * API moves it at the top when the main window is already displayed.
     *
     * > **NOTE**
     * >
     * > Before calling this API, you are advised to load the page by using
     * > [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)} or
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}. If the main window has not
     * > finished loading and you call this API directly, the starting window keeps showing. Similarly, if the system
     * > window, application child window, modal window, or global floating window has finished loading and you call
     * > this API directly, the window is in the foreground but is not visible.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    showWindow(): Promise<void>;

    /**
     * Shows this window or moves an already visible application main window to the top of the stack. You can pass
     * options to control the window display behavior. This API uses a promise to return the result.
     *
     * This API can be used only for application child windows, application main windows, global floating windows, and
     * system windows, excluding windows of the TYPE_DIALOG type and modal child windows (windows that have the modal
     * property enabled via **setSubWindowModal**).
     *
     * > **NOTE**
     * >
     * > Before calling this API, you are advised to load the page by using
     * > [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)} or
     * > [setUIContent]{@link @ohos.window:window.Window.setUIContent(path: string)}. If the main window has not
     * > finished loading and you call this API directly, the starting window keeps showing. Similarly, if the system
     * > window, application child window, or global floating window has finished loading and you call this API directly
     * > , the window is in the foreground but is not visible.
     *
     * @param { ShowWindowOptions } options - options of window shown
     * @returns { Promise<void> } Promise that returns no value.
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
     * Shows this window and plays an animation during the process. This API uses an asynchronous callback to return the
     * result. This API takes effect only for a system window.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Shows this window and plays an animation during the process. This API uses a promise to return the result. This
     * API takes effect only for a system window.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Destroys this window. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.destroyWindow(callback: AsyncCallback<void>)
     */
    destroy(callback: AsyncCallback<void>): void;

    /**
     * Destroys this window. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.destroyWindow()
     */
    destroy(): Promise<void>;

    /**
     * Destroys this window. This API uses an asynchronous callback to return the result. It takes effect for a system
     * window, an application child window, a global floating window, or a modal window.
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
     * Destroys this window. This API uses a promise to return the result. It takes effect for a system window, an
     * application child window, a global floating window, or a modal window.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Moves this window. This API uses a promise to return the result.
     *
     * This operation is not supported in a window in full-screen mode.
     *
     * @param { number } x - Coordinate position along the x-axis to which the window is moved, measured in px. A
     *     positive value means the position is to the right of the x-axis origin; a negative value means it is to the
     *     left; the value **0** means it is at the x-axis origin. The value must be an integer. Non-integer values are
     *     rounded down.
     * @param { number } y - Coordinate position along the y-axis to which the window is moved, measured in px. A
     *     positive value means the position is below the y-axis origin; a negative value means it is above; the value
     *     **0** means it is at the y-axis origin. The value must be an integer. Non-integer values are rounded down.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.moveWindowTo(x: int, y: int)
     */
    moveTo(x: number, y: number): Promise<void>;

    /**
     * Moves this window. This API uses an asynchronous callback to return the result.
     *
     * This operation is not supported in a window in full-screen mode.
     *
     * @param { number } x - Coordinate position along the x-axis to which the window is moved, measured in px. A
     *     positive value means the position is to the right of the x-axis origin; a negative value means it is to the
     *     left; the value **0** means it is at the x-axis origin. The value must be an integer. Non-integer values are
     *     rounded down.
     * @param { number } y - Coordinate position along the y-axis to which the window is moved, measured in px. A
     *     positive value means the position is below the y-axis origin; a negative value means it is above; the value
     *     **0** means it is at the x-axis origin. The value must be an integer. Non-integer values are rounded down.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)
     */
    moveTo(x: number, y: number, callback: AsyncCallback<void>): void;

    /**
     * Moves this window. This API uses a promise to return the result. A value is returned once the API is called
     * successfully. However, the final effect cannot be obtained immediately from the return value. To obtain the final
     * effect immediately, call [moveWindowToAsync()]{@link window.Window.moveWindowToAsync(x: int, y: int)}.
     *
     * > **NOTE**
     * >
     * > - This API is best suited for the floating window mode (when the window mode is
     * > **window.WindowStatusType.FLOATING**, which you can check using
     * > [getWindowStatus()]{@link window.Window.getWindowStatus}). You are not advised to use it in other window modes.
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, the window moves
     * > relative to the upper-left corner of the screen. In non-freeform window mode, the window moves relative to
     * > the upper-left corner of its parent window.
     * >
     * > - To move the window relative to the top-left corner of the screen while in non-freeform window mode, call
     * > [moveWindowToGlobal()]{@link window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration)}
     * > .
     * >
     * > - This API does not work for the main window in non-freeform window mode.
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > if the title bar of the main window or a child window is moved out of the screen's visible area,
     * > the system will automatically snap the window back to ensure the title bar is visible.
     *
     * @param { int } x - X-coordinate to which the window moves, in px. A positive value indicates a position to the
     *     right of the origin, and a negative value indicates a position to the left of the origin.
     *     The value must be an integer. Non-integer values are rounded down.
     * @param { int } y - Y-coordinate to which the window moves, in pixels. A positive value indicates a position
     *     above the origin, and a negative value indicates a position below the origin.
     *     The value must be an integer. Non-integer values are rounded down.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Moves this window. This API uses an asynchronous callback to return the result. A value is returned once the API
     * is called successfully. However, the final effect cannot be obtained immediately from the return value. To obtain
     * the final effect immediately, call [moveWindowToAsync()]{@link window.Window.moveWindowToAsync(x: int, y: int)}.
     *
     * > **NOTE**
     * >
     * > - This API is best suited for the floating window mode (when the window mode is
     * > **window.WindowStatusType.FLOATING**, which can obtained using
     * > [getWindowStatus()]{@link window.Window.getWindowStatus}). You are advised not to use it in other window modes.
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, the window moves
     * > relative to the upper-left corner of the screen. In non-freeform window mode, the window moves relative to
     * > the upper-left corner of its parent window.
     * >
     * > - To move the window relative to the top-left corner of the screen while in non-freeform window mode, call
     * > [moveWindowToGlobal()]{@link window.Window.moveWindowToGlobal(x: int, y: int, moveConfiguration?: MoveConfiguration)}
     * > .
     * >
     * > - This API does not work for the main window in non-freeform window mode.
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > if the title bar of the main window or a child window is moved out of the screen's visible area,
     * > the system will automatically snap the window back to ensure the title bar is visible.
     *
     * @param { int } x - X-coordinate to which the window moves, in px. A positive value indicates a position to the
     *     right of the origin, and a negative value indicates a position to the left of the origin.
     *     The value must be an integer. Non-integer values are rounded down.
     * @param { int } y - Y-coordinate to which the window moves, in pixels. A positive value indicates a position
     *     above the origin, and a negative value indicates a position below the origin.
     *     The value must be an integer. Non-integer values are rounded down.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Moves this window. This API uses a promise to return the result. A value is returned once the call takes effect.
     * You can use [getWindowProperties()]{@link window.Window.getWindowProperties} in the callback (see the code
     * snippet below) to obtain the final effect immediately.
     *
     * This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).
     * In other window modes, this API returns error code 1300010.
     * (The window mode can be obtained through [getWindowStatus()]{@link window.Window.getWindowStatus}).
     * In floating window mode, the movement behavior of different types of windows is as follows.
     *
     * > **NOTE**
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > if the title bar of the main window or a child window is moved out of the screen's visible area,
     * > the system will automatically snap the window back to ensure the title bar is visible.
     *
     * @param { int } x - Coordinate position along the x-axis to which the window is moved, measured in px.
     *     A positive value means the position is to the right of the x-axis origin;
     *     a negative value means it is to the left; the value **0** means it is at the x-axis origin.
     *     The value must be an integer. Non-integer values are rounded down.
     * @param { int } y - Coordinate position along the y-axis to which the window is moved, measured in px.
     *     A positive value means the position is below the y-axis origin; a negative value means it is above;
     *     the value **0** means it is at the y-axis origin. The value must be an integer.
     *     Non-integer values are rounded down.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Moves this window to the specified position. This API uses a promise to return the result. You can use the
     * **moveConfiguration** parameter to specify the target display ID for the window movement. A value is returned
     * once the call takes effect. You can use [getWindowProperties()]{@link window.Window.getWindowProperties} in the
     * callback (see the code snippet below) to obtain the final effect immediately.
     *
     * This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).
     * In other window modes, this API returns error code 1300010.
     * (The window mode can be obtained through [getWindowStatus()]{@link window.Window.getWindowStatus}).
     * In floating window mode, the movement behavior of different types of windows is as follows.
     *
     * | Window Type| [Freeform Window](../../windowmanager/window-terminology.md#freeform-window) State| Non-freeform Window State|
     * |---------|---------------|-----------------|
     * | Main window| Move relative to the screen.| API calls do not take effect or return an error.|
     * | App subwindow/Modal window| Move relative to the screen.| Move relative to the main window.|
     * | System window/Global floating window| Move relative to the screen.| Move relative to the screen.|
     *
     * > **NOTE**
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > if the title bar of the main window or a child window is moved out of the screen's visible area,
     * > the system will automatically snap the window back to ensure the title bar is visible.
     *
     * @param { int } x - Distance that the window moves along the x-axis, in px.
     *     A positive value indicates that the window moves to the right. The value must be an integer.
     *     Non-integer values are rounded down.
     * @param { int } y - Distance that the window moves along the y-axis, in px.
     *     A positive value indicates that the window moves downwards.
     *     The value must be an integer. Non-integer values are rounded down.
     * @param { MoveConfiguration } [moveConfiguration] - Window movement configuration.
     *     If this parameter is not set, the window will stay on the current display.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Moves this window based on the coordinates. This API uses a promise to return the result. A value is returned
     * once the call takes effect. You can use [getWindowProperties()]{@link window.Window.getWindowProperties} in the
     * callback (see the code snippet below) to obtain the final effect immediately.
     *
     * This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).
     * In other window modes, this API returns error code 1300010.
     * (The window mode can be obtained through [getWindowStatus()]{@link window.Window.getWindowStatus}).
     *
     * > **NOTE**
     * >
     * > - When the main window is in floating window mode, this API does not take effect or return an error if called
     * > in non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state.
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > if the title bar of the main window or a child window is moved out of the screen's visible area,
     * > the system will automatically snap the window back to ensure the title bar is visible.
     *
     * @param { int } x - Distance that the window moves along the x-axis, in px, with the top-left corner of the
     *     display used as the origin. A positive value indicates that the window moves to the right,
     *     and a negative value indicates that the window moves to the left. The value must be an integer.
     *     Non-integer values are rounded down.
     * @param { int } y - Distance that the window moves along the y-axis, in px, with the top-left corner of the
     *     display used as the origin. A positive value indicates that the window moves downwards,
     *     and a negative value indicates that the window moves upwards. The value must be an integer.
     *     Non-integer values are rounded down.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Moves this window to the specified position based on the coordinates. This API uses a promise to return the
     * result. You can use the **moveConfiguration** parameter to specify the target display ID for the window movement.
     * A value is returned once the call takes effect. You can use
     * [getWindowProperties()]{@link window.Window.getWindowProperties} in the callback (see the code snippet below) to
     * obtain the final effect immediately.
     *
     * This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).
     * In other window modes, this API returns error code 1300010.
     * (The window mode can be obtained through [getWindowStatus()]{@link window.Window.getWindowStatus}).
     *
     * > **NOTE**
     * >
     * > - When the main window is in floating window mode, this API does not take effect or return an error if called
     * > in non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state.
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > if the title bar of the main window or a child window is moved out of the screen's visible area,
     * > the system will automatically snap the window back to ensure the title bar is visible.
     *
     * @param { int } x - Distance that the window moves along the x-axis, in px, with the top-left corner of the
     *     display used as the origin. A positive value indicates that the window moves to the right,
     *     and a negative value indicates that the window moves to the left. The value must be an integer.
     *     Non-integer values are rounded down.
     * @param { int } y - Distance that the window moves along the y-axis, in px, with the top-left corner of the
     *     display used as the origin. A positive value indicates that the window moves downwards,
     *     and a negative value indicates that the window moves upwards. The value must be an integer.
     *     Non-integer values are rounded down.
     * @param { MoveConfiguration } [moveConfiguration] - Indicate the window move configuration.
     *     If not provided, the window stays on the current display.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Moves the window based on the
     * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system). This API uses
     * a promise to return the result asynchronously.
     *
     * This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).
     * In other window modes, this API returns error code 1300010.
     * (The window mode can be obtained through [getWindowStatus()]{@link window.Window.getWindowStatus}).
     *
     * > **NOTE**
     * >
     * > - When the main window is in floating window mode, this API does not take effect or return an error if called
     * > in non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state.
     * >
     * > - After a window is moved, if it spans multiple screens, the window will belong to the screen with which it
     * > has the largest overlapping area.
     * >
     * > - In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > if the title bar of the main window or a child window is moved out of the screen's visible area,
     * > the system will automatically snap the window back to ensure the title bar is visible.
     *
     * @param { int } x - Distance that the window moves along the x-axis, in px, with the top-left corner of
     *     the primary display used as the origin. A positive value indicates that the window moves to the right,
     *     and a negative value indicates that the window moves to the left. The value must be an integer.
     *     Non-integer values are rounded down.
     * @param { int } y - Distance that the window moves along the y-axis, in px, with the top-left corner of
     *     the primary display used as the origin. A positive value indicates that the window moves downwards,
     *     and a negative value indicates that the window moves upwards. The value must be an integer.
     *     Non-integer values are rounded down.ured in px.
     *     This parameter only accepts integer values; any floating-point input will be rounded down.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Changes the size of this window based on the top-left vertex of the window. This API uses a promise to return the
     * result.
     *
     * The main window and child window have the following default size limits: [320, 1920] in width and [240, 1920] in
     * height, both in units of vp.
     *
     * The minimum width and height of the main window and child window of the application depends on the configuration
     * on the product side. You can call [getWindowLimits]{@link window.Window.getWindowLimits} to obtain size limits.
     *
     * The system window has the following size limits: (0, 1920] in width and (0, 1920] in height, both in units of vp.
     *
     * The new window width and height you set must meet the following limits:
     *
     * If the window width or height is less than the minimum width or height limit, then the minimum width or height
     * limit takes effect.
     *
     * If the window width or height is greater than the maximum width or height limit, then the maximum width or height
     * limit takes effect.
     *
     * This operation is not supported in a window in full-screen mode.
     *
     * @param { number } width - New width of the window, in px. The value must be an integer. If a floating-point
     *     number is passed in, the value is rounded down. A negative value is invalid, and error code
     *     [401](docroot://reference/errorcode-universal.md#401-parameter-check-failed) is thrown.
     * @param { number } height - New height of the window, in px. The value must be an integer. If a floating-point
     *     number is passed in, the value is rounded down. A negative value is invalid, and error code
     *     [401](docroot://reference/errorcode-universal.md#401-parameter-check-failed) is thrown.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.resize(width: int, height: int)
     */
    resetSize(width: number, height: number): Promise<void>;

    /**
     * Changes the size of this window based on the top-left vertex of the window. This API uses an asynchronous
     * callback to return the result.
     *
     * The main window and child window have the following default size limits: [320, 1920] in width and [240, 1920] in
     * height, both in units of vp.
     *
     * The minimum width and height of the main window and child window of the application depends on the configuration
     * on the product side. You can call [getWindowLimits]{@link window.Window.getWindowLimits} to obtain size limits.
     *
     * The system window has the following size limits: (0, 1920] in width and (0, 1920] in height, both in units of vp.
     *
     * The new window width and height you set must meet the following limits:
     *
     * If the window width or height is less than the minimum width or height limit, then the minimum width or height
     * limit takes effect.
     *
     * If the window width or height is greater than the maximum width or height limit, then the maximum width or height
     * limit takes effect.
     *
     * This operation is not supported in a window in full-screen mode.
     *
     * @param { number } width - New width of the window, in px. The value must be an integer. If a floating-point
     *     number is passed in, the value is rounded down. A negative value is invalid, and error code
     *     [401](docroot://reference/errorcode-universal.md#401-parameter-check-failed) is thrown.
     * @param { number } height - New height of the window, in px. The value must be an integer. If a floating-point
     *     number is passed in, the value is rounded down. A negative value is invalid, and error code
     *     [401](docroot://reference/errorcode-universal.md#401-parameter-check-failed) is thrown.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)
     */
    resetSize(width: number, height: number, callback: AsyncCallback<void>): void;

    /**
     * Changes the size of this window based on the top-left vertex of the window. This API uses a promise to return the
     * result.
     *
     * A value is returned once the API is called successfully. However, the final effect cannot be obtained immediately
     * from the return value. To obtain the final effect immediately, call
     * [resizeAsync()]{@link window.Window.resizeAsync}.
     *
     * The window size is restricted by [WindowLimits]{@link @ohos.window:window.WindowLimits}. You can call
     * [getWindowLimits]{@link window.Window.getWindowLimits} to find out the exact limits.
     *
     * The new window width and height you set must meet the following limits:
     *
     * If the window width or height is less than the minimum width or height limit, then the minimum width or height
     * limit takes effect. However, the system window and global floating window settings are not subject to these
     * minimum width or height restrictions.
     *
     * If the window width or height is greater than the maximum width or height limit, then the maximum width or height
     * limit takes effect.
     *
     * This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).
     * If this API is called when the window is in other window modes, error code 1300002 is reported.
     * (The window mode can be obtained through [getWindowStatus()]{@link window.Window.getWindowStatus}).
     *
     * > **NOTE**
     * >
     * > - When the main window is in floating window mode, this API does not take effect or return an error if called
     * > in non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state.
     *
     * @param { int } width - New width of the window, in px. The value must be an integer.
     *     If a floating-point number is passed in, the value is rounded down.
     *     A negative value is invalid, and error code 401 is thrown.
     * @param { int } height - New height of the window, in px. The value must be an integer.
     *     If a floating-point number is passed in, the value is rounded down.
     *     A negative value is invalid, and error code 401 is thrown.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Changes the size of this window based on the top-left vertex of the window. This API uses an asynchronous
     * callback to return the result.
     *
     * A value is returned once the API is called successfully. However, the final effect cannot be obtained immediately
     * from the return value. To obtain the final effect immediately, call
     * [resizeAsync()]{@link window.Window.resizeAsync}.
     *
     * The window size is restricted by [WindowLimits]{@link @ohos.window:window.WindowLimits}. You can call
     * [getWindowLimits]{@link window.Window.getWindowLimits} to find out the exact limits.
     *
     * The new window width and height you set must meet the following limits:
     *
     * If the window width or height is less than the minimum width or height limit, then the minimum width or height
     * limit takes effect. However, the system window and global floating window settings are not subject to these
     * minimum width or height restrictions.
     *
     * If the window width or height is greater than the maximum width or height limit, then the maximum width or height
     * limit takes effect.
     *
     * > **NOTE**
     * >
     * > - When the main window is in floating window mode, this API does not take effect or return an error if called
     * > in non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state.
     *
     * @param { int } width - New width of the window, in px. The value must be an integer.
     *     If a floating-point number is passed in, the value is rounded down.
     *     A negative value is invalid, and error code 401 is thrown.
     * @param { int } height - New height of the window, in px. The value must be an integer.
     *     If a floating-point number is passed in, the value is rounded down.
     *     A negative value is invalid, and error code 401 is thrown.
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
     * Changes the size of this window based on the top-left vertex of the window. This API uses a promise to return the
     * result.
     *
     * A value is returned once the call takes effect. You can use
     * [getWindowProperties()]{@link window.Window.getWindowProperties} in the callback (see the code snippet below) to
     * obtain the final effect immediately.
     *
     * The window size is restricted by [WindowLimits]{@link @ohos.window:window.WindowLimits}. You can call
     * [getWindowLimits]{@link window.Window.getWindowLimits} to find out the exact limits.
     *
     * The new window width and height you set must meet the following limits:
     *
     * If the window width or height is less than the minimum width or height limit, then the minimum width or height
     * limit takes effect. However, the system window and global floating window settings are not subject to these
     * minimum width or height restrictions.
     *
     * If the window width or height is greater than the maximum width or height limit, then the maximum width or height
     * limit takes effect.
     *
     * This API takes effect only when the window is in floating window mode (**window.WindowStatusType.FLOATING**).
     * In other scenarios, this API returns error code 1300010.
     * (The window mode can be obtained through [getWindowStatus()]{@link window.Window.getWindowStatus}).
     *
     * > **NOTE**
     * >
     * > - In non-[freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode,
     * > this API does not work for the main window.
     *
     * @param { int } width - New width of the window, in px. The value must be an integer.
     *     If a floating-point number is passed in, the value is rounded down.
     *     A negative value is invalid, and error code 401 is thrown.
     * @param { int } height - New height of the window, in px. The value must be an integer.
     *     If a floating-point number is passed in, the value is rounded down.
     *     A negative value is invalid, and error code 401 is thrown.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether the layout information (position and size) of a child window or modal window (a window with
     * **WindowType** set to **TYPE_DIALOG**) follows the main window. This API uses a promise to return the result.
     *
     * 1. This API applies only to first-level child windows or modal windows of the main window.
     * 2. Once this API is called on a child window or modal window, its layout information will immediately match the main window and remain synchronized. This effect will persist until this API is called again with **false**.
     * 3. If this API is called on a child window or modal window, subsequent calls to APIs like **moveTo** or **resize** to modify the layout information will not take effect.
     * 4. When a child window or modal window stops using this functionality, its layout information (position and size) may not be a specific value. The application needs to reset it.
     *
     * Once this API is successfully called, the
     * [setRelativePositionToParentWindowEnabled()]{@link window.Window.setRelativePositionToParentWindowEnabled} API
     * will no longer take effect.
     *
     * @param { boolean } enabled - Whether to follow the layout of the main window. **true** to follow, **false**
     *     otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether a first-level child window can maintain a fixed relative position to the main window. This API works
     * only in [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode. This API uses a
     * promise to return the result.
     *
     * The relative position is defined by the offset between the anchor points of the child window and the main window.
     * Both the child window and the main window use the same type of anchor point.
     *
     * 1. This API applies only to level-1 child windows that are not maximized.
     * 2. Once this API is called on a child window, its display position will immediately follow the main window and maintain a fixed relative position. This effect will persist until this API is called again with **false**.
     * 3. If this API is called on a child window, subsequent calls to [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)} or [maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)} to modify the window's position or size will not take effect.
     *
     * Once this API is successfully called, the
     * [setFollowParentWindowLayoutEnabled()]{@link window.Window.setFollowParentWindowLayoutEnabled} API will no longer
     * take effect.
     *
     * @param { boolean } enabled - The value true means the first level sub window supports maintaining
     *     the same relative position with the main window, and false means the opposite.
     * @param { WindowAnchor } [anchor] - Window anchor point that setting
     *     when the relative position between the primary sub window and the main window remains unchanged. The
     *     default value is window.WindowAnchor.TopStart, meaning the default anchor point is the top-left corner
     *     of the window.
     * @param { int } [offsetX] - The x-axis offset, measured in px.
     *     between the anchor point of the first level sub window and the anchor point of the main window.
     *     The default value is 0.
     * @param { int } [offsetY] - The y-axis offset, measured in px.
     *     between the anchor point of the first level sub window and the anchor point of the main window.
     *     The default value is 0.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Attaches a first-level child window to the main window to maintain a fixed relative position.
     * This API uses a promise to return the result. The relative position is represented by the anchor point offset
     * between the child window and the parent window.
     * The child window and the parent window use the same window anchor point.
     *
     * > **NOTE**
     * >
     * > - Only first-level child windows can call this API. The child window must be in floating window mode
     * > (that is, the window mode is **window.WindowStatusType.FLOATING**).
     * >
     * > - After the child window calls this API, the display position of the child window immediately follows the
     * > main window and the relative position remains unchanged. In addition, the size and mode changes of the main
     * > window can be listened to. The effect will persist unless the
     * > [detachLayoutToParentWindow()](#detachlayouttoparentwindow24) API is called for detaching.
     * >
     * > -After the child window calls this API, calling APIs such as
     * > [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)},
     * > [maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)}, and
     * > [setFollowParentWindowLayoutEnabled()]{@link window.Window.setFollowParentWindowLayoutEnabled}
     * > to change the window position, or dragging and moving or dragging and resizing the child window through mouse
     * > or touch operations will not take effect.
     *
     * @param { WindowAnchorInfo } [anchorInfo] - Anchor point information used to attach the first-level child window
     *     to the main window to maintain the fixed relative position. If this parameter is not passed,
     *     the default logic is the same as that of [WindowAnchorInfo] {@link @ohos.window:window.WindowAnchorInfo}.
     * @param { SubWindowAttachOptions } [attachOptions] - Additional parameters for setting the child window layout.
     *     If this parameter is not passed, the default logic is the same as that of
     *     [SubWindowAttachOptions] {@link @ohos.window:window.SubWindoWattachOptions}.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Detach a first-level child window from the main window to cancel a fixed relative position.
     * This API uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - When the child window calls this API, the child window must be in the attached state.
     * >
     * > - After detached by calling this API, the child window retains its position during attaching.
     * > You can drag the child window to change its size and position.
     * >
     * > - After the detaching, calling APIs such as
     * > [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)} or
     * > [maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)}, and
     * > [setFollowParentWindowLayoutEnabled()]{@link window.Window.setFollowParentWindowLayoutEnabled}
     * > to change the window position, or dragging and moving or dragging and resizing the child window through mouse
     * > or touch operations will take effect.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the type of this window. This API uses a promise to return the result.
     *
     * @param { WindowType } type - Window type.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType): Promise<void>;

    /**
     * Sets the type of this window. This API uses an asynchronous callback to return the result.
     *
     * @param { WindowType } type - Window type.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setWindowType(type: WindowType, callback: AsyncCallback<void>): void;

    /**
     * Sets the mode of the main window. This API uses a promise to return the result.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the mode of the main window. This API uses an asynchronous callback to return the result.
     *
     * @param { WindowMode } mode - Indicate the mode of a window.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Obtains the properties of this window. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<WindowProperties> } callback - Callback used to return the window properties.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowProperties
     */
    getProperties(callback: AsyncCallback<WindowProperties>): void;

    /**
     * Obtains the actual display area of this window on the physical screen. This API returns the result synchronously.
     *
     * This API can determine the actual on-screen location and size of a window that has been resized on certain
     * devices.
     *
     * @returns { Rect } A set of four values, which indicates the horizontal distance from the screen's top-left corner
     *     to the window's left edge, the vertical distance from the screen's top-left corner to the window's top edge,
     *     the width of the window after scaling, and the height of the window after scaling.
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
     * Obtains the properties of this window. This API uses a promise to return the result.
     *
     * @returns { Promise<WindowProperties> } Promise used to return the window properties.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowProperties
     */
    getProperties(): Promise<WindowProperties>;

    /**
     * Obtains the properties of this window.
     *
     * @returns { WindowProperties } Window properties obtained.
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
     * Obtains the display density information of this window.
     *
     * @returns { WindowDensityInfo } Display density information of the window. If the return value is [-1, -1, -1],
     *     the current device does not support this API.
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
     * Checks whether the main window is in full-screen mode across multiple displays. This API uses a promise to return
     * the result. It takes effect only for the main window and child windows.
     *
     * @returns { Promise<boolean> } Promise used to return the result indicating whether the main window is in full-
     *     screen mode across multiple displays. **true** if yes, **false** otherwise.
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
     * Obtains the area where this window cannot be displayed, for example, the system bar area, notch, gesture area,
     * and soft keyboard area. This API uses an asynchronous callback to return the result.
     *
     * Main window/Child window:
     *
     * - In the free-floating window mode under the
     * [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state (the window mode is
     * **window.WindowStatusType.FLOATING**), only the avoidance area of the fixed soft keyboard type (
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_KEYBOARD**) is available.
     * - In the free-floating window mode of the main window in the non-freeform window state, only the avoidance area
     * of the system bar type ([AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_SYSTEM**) is
     * available.
     * - In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is
     * not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance
     * area is empty.
     * - For the child window in the non-freeform window state or non-free-floating window mode, this API can be called
     * to obtain the calculated avoidance area only when the position and size of the child window are the same as those
     * of the main window. Otherwise, the obtained avoidance area is empty.
     *
     * Global floating window, modal window, or system window:
     *
     * - This API can be called to obtain the avoidance area only after
     * [setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled} is called. Otherwise, the obtained
     * avoidance area is empty.
     *
     * @param { AvoidAreaType } type - Type of the area.
     * @param { AsyncCallback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType, callback: AsyncCallback<AvoidArea>): void;

    /**
     * Obtains the area where this window cannot be displayed, for example, the system bar area, notch, gesture area,
     * and soft keyboard area. This API uses an asynchronous callback to return the result.
     *
     * Main window/Child window:
     *
     * - In the free-floating window mode under the
     * [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state (the window mode is
     * **window.WindowStatusType.FLOATING**), only the avoidance area of the fixed soft keyboard type (
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_KEYBOARD**) is available.
     * - In the free-floating window mode of the main window in the non-freeform window state, only the avoidance area
     * of the system bar type ([AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_SYSTEM**) is
     * available.
     * - In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is
     * not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance
     * area is empty.
     * - For the child window in the non-freeform window state or non-free-floating window mode, this API can be called
     * to obtain the calculated avoidance area only when the position and size of the child window are the same as those
     * of the main window. Otherwise, the obtained avoidance area is empty.
     *
     * Global floating window, modal window, or system window:
     *
     * - This API can be called to obtain the avoidance area only after
     * [setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled} is called. Otherwise, the obtained
     * avoidance area is empty.
     *
     * @param { AvoidAreaType } type - Type of the area.
     * @returns { Promise<AvoidArea> } Promise used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowAvoidArea
     */
    getAvoidArea(type: AvoidAreaType): Promise<AvoidArea>;

    /**
     * Obtains the avoid area of this application window, even if the avoid area is invisible.
     *
     * Main window/Child window:
     *
     * - When the main window is in the free-floating window mode under a non-
     * [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state (the window mode is
     * **window.WindowStatusType.FLOATING**), only the avoidance area of the system bar type (
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_SYSTEM**) is available.
     * - In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is
     * not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance
     * area is empty.
     * - For the child window in the non-freeform window state or non-free-floating window mode, this API can be called
     * to obtain the calculated avoidance area only when the position and size of the child window are the same as those
     * of the main window. Otherwise, the obtained avoidance area is empty.
     *
     * Global floating window, modal window, or system window:
     *
     * - This API can be called to obtain the avoidance area only after
     * [setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled} is called. Otherwise, the obtained
     * avoidance area is empty.
     *
     * @param { AvoidAreaType } type - Type of the area.
     * @returns { AvoidArea } Area where the window cannot be displayed.
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
     * Obtains the avoid area of this window.
     *
     * Main window/Child window:
     *
     * - In the free-floating window mode under the
     * [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state (the window mode is
     * **window.WindowStatusType.FLOATING**), only the avoidance area of the fixed soft keyboard type (
     * [AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_KEYBOARD**) is available.
     * - In the free-floating window mode of the main window in the non-freeform window state, only the avoidance area
     * of the system bar type ([AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_SYSTEM**) is
     * available.
     * - In other scenarios, this API can be called to obtain the calculated avoidance area only when the main window is
     * not in the free-floating window mode or the device type is phone or tablet. Otherwise, the obtained avoidance
     * area is empty.
     * - For the child window in the non-freeform window state or non-free-floating window mode, this API can be called
     * to obtain the calculated avoidance area only when the position and size of the child window are the same as those
     * of the main window. Otherwise, the obtained avoidance area is empty.
     *
     * Global floating window, modal window, or system window:
     *
     * - This API can be called to obtain the avoidance area only after
     * [setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled} is called. Otherwise, the obtained
     * avoidance area is empty.
     *
     * This API is generally applicable to the following scenarios:
     *
     * - In the [onWindowStageCreate()]{@link @ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate} callback, this
     * API is used to obtain the initial layout avoid area when the application starts.
     * - This API is used when a child window needs to temporarily display content and requires layout adjustments to
     * avoid certain areas.
     *
     * @param { AvoidAreaType } type - Type of the area
     * @returns { AvoidArea } Area where the window cannot be displayed.
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
     * Enables the capability to obtain the window avoidance area information using
     * [getWindowAvoidArea()]{@link window.Window.getWindowAvoidArea} or listen for window avoidance area changes using
     * [on('avoidAreaChange')]{@link window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)}
     * after a global floating window, modal window, or system window is created.
     *
     * @param { boolean } enabled - If true, the system window type can obtain avoid area. If false, the avoid area
     *     obtained by the system window type will always be empty.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Checks whether a floating window, modal window, or system window (**WindowType** is a system window) is enabled
     * to access the [avoid area]{@link @ohos.window:window.AvoidArea}.
     *
     * @returns { boolean } Check result for whether the window is enabled to access the avoid area.
     *     <br> **true** if enabled, **false** otherwise.
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
     * Specifies whether to enable the avoid area for the float navigation type. When enabled, the actual value of the
     * avoid area can be obtained by calling getWindowAvoidArea(AvoidAreaType.TYPE_FLOAT_NAVIGATION) or listening for
     * AvoidAreaType of TYPE_FLOAT_NAVIGATION via on('avoidAreaChange') or declaring environment variables.
     * When disabled, the float avoid area obtained through the above methods will always be 0.
     *
     * @param { boolean } enabled - The value true means to enable float navigation avoid area,
     *     and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Get whether the float navigation avoid area can be obtained.
     *
     * @returns { boolean } enable - If true, the float navigation avoid area can be obtained.
     *     If false, the float navigation avoid area can not be obtained.
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
     * Sets whether the main window or the child window is in full-screen mode. This API uses an asynchronous callback
     * to return the result.
     *
     * Full-screen mode means that the layout does not avoid the status bar or <!--RP15-->three-button navigation bar<!-
     * -RP15End-->, and components may overlap with them.
     *
     * Non-full-screen mode means that the layout avoids the status bar and <!--RP15-->three-button navigation bar<!--RP
     * 15End-->, and components do not overlap with them.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 6 and deprecated since API version 9. You are advised to use
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > and [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}
     * > to implement the full-screen mode.
     *
     * @param { boolean } isFullScreen - Whether to set full-screen mode (full-screen mode affects the display of the
     *     status bar and <!--RP15-->three-button navigation bar<!--RP15End-->). **true** to set full-screen mode,
     *     **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setFullScreen(isFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether the main window or the child window is in full-screen mode. This API uses a promise to return the
     * result.
     *
     * Full-screen mode means that the layout does not avoid the status bar or <!--RP15-->three-button navigation bar<!-
     * -RP15End-->, and components may overlap with them.
     *
     * Non-full-screen mode means that the layout avoids the status bar and <!--RP15-->three-button navigation bar<!--RP
     * 15End-->, and components do not overlap with them.
     *
     * > **NOTE**
     * >
     * > This API is supported since API version 6 and deprecated since API version 9. You are advised to use
     * > [setWindowSystemBarEnable()]{@link window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)}
     * > and [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}
     * > to implement the full-screen mode.
     *
     * @param { boolean } isFullScreen - Whether to set full-screen mode (full-screen mode affects the display of the
     *     status bar and <!--RP15-->three-button navigation bar<!--RP15End-->). **true** to set full-screen mode,
     *     **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status' | 'navigation'>)
     */
    setFullScreen(isFullScreen: boolean): Promise<void>;

    /**
     * Sets whether the main window layout or the child window layout is immersive. This API uses an asynchronous
     * callback to return the result.
     *
     * An immersive layout means that the layout does not avoid the status bar or <!--RP15-->three-button navigation bar
     * <!--RP15End-->, and components may overlap with them.
     *
     * A non-immersive layout means that the layout avoids the status bar and <!--RP15-->three-button navigation bar<!--
     * RP15End-->, and components do not overlap with them.
     *
     * @param { boolean } isLayoutFullScreen - Whether the layout of the window is immersive. (Immersive layout mode
     *     does not affect the display of the status bar and <!--RP15-->three-button navigation bar<!--RP15End-->.)
     *     **true** if immersive, **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether the main window layout or the child window layout is immersive. This API uses a promise to return
     * the result.
     *
     * An immersive layout means that the layout does not avoid the status bar or <!--RP15-->three-button navigation bar
     * <!--RP15End-->, and components may overlap with them.
     *
     * A non-immersive layout means that the layout avoids the status bar and <!--RP15-->three-button navigation bar<!--
     * RP15End-->, and components do not overlap with them.
     *
     * @param { boolean } isLayoutFullScreen - Whether the layout of the window is immersive. (Immersive layout mode
     *     does not affect the display of the status bar and <!--RP15-->three-button navigation bar<!--RP15End-->.)
     *     **true** if immersive, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)
     */
    setLayoutFullScreen(isLayoutFullScreen: boolean): Promise<void>;

    /**
     * Sets whether the main window layout or the child window layout is immersive. This API uses an asynchronous
     * callback to return the result. It does not work when called by a system window.
     *
     * An immersive layout means that the layout does not avoid the status bar or <!--RP15-->three-button navigation bar
     * <!--RP15End-->, and components may overlap with them.
     *
     * A non-immersive layout means that the layout avoids the status bar and <!--RP15-->three-button navigation bar<!--
     * RP15End-->, and components do not overlap with them.
     *
     * @param { boolean } isLayoutFullScreen - Whether the layout of the window is immersive. (In immersive layout mode,
     *     the status bar and <!--RP15-->three-button navigation bar<!--RP15End--> remain visible.) **true** if
     *     immersive, **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Sets whether the application main window layout or the application child window layout is immersive. This API
     * uses a promise to return the result. It does not work when called by other windows, and no error is reported.
     *
     * An immersive layout means that the layout does not avoid the status bar or <!--RP15-->three-button navigation bar
     * <!--RP15End-->, and components may overlap with them.
     *
     * A non-immersive layout means that the layout avoids the status bar and <!--RP15-->three-button navigation bar<!--
     * RP15End-->, and components do not overlap with them.
     *
     * @param { boolean } isLayoutFullScreen - The window can layout in full screen
     * @returns { Promise<void> } Promise that returns no value.
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
     * <!--RP14-->Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.<!--RP14End--> This API uses an asynchronous callback to return the result.
     *
     * From API version 12, <!--RP5-->this API does not take effect on 2-in-1 devices.<!--RP5End-->
     *
     * The return value does not indicate that the status bar and <!--RP15-->three-button navigation bar<!--RP15End-->
     * are shown or hidden. This API does not take effect when it is called by a child window. The configuration does
     * not take effect in non-full-screen mode (such as floating window or split-screen mode).
     *
     * @param { Array<'status' | 'navigation'> } names - Whether to show the status bar and <!--RP15-->three-button
     *     navigation bar<!--RP15End--> in full-screen mode.<br>For example, to show all of them, set this parameter to
     *     **['status','navigation']**. If this parameter is set to [], they are hidden.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>, callback: AsyncCallback<void>): void;

    /**
     * <!--RP14-->Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.<!--RP14End--> This API uses a promise to return the result.
     *
     * From API version 12, <!--RP5-->this API does not take effect on 2-in-1 devices.<!--RP5End-->
     *
     * The return value does not indicate that the status bar and <!--RP15-->three-button navigation bar<!--RP15End-->
     * are shown or hidden. This API does not take effect when it is called by a child window. The configuration does
     * not take effect in non-full-screen mode (such as floating window or split-screen mode).
     *
     * @param { Array<'status' | 'navigation'> } names - Whether to show the status bar and <!--RP15-->three-button
     *     navigation bar<!--RP15End--> in full-screen mode.<br>For example, to show all of them, set this parameter to
     *     **['status','navigation']**. If this parameter is set to [], they are hidden.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarEnable(names: Array<'status'|'navigation'>)
     */
    setSystemBarEnable(names: Array<'status' | 'navigation'>): Promise<void>;

    /**
     * <!--RP14-->Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.<!--RP14End--> This API uses an asynchronous callback to return the result.
     *
     * From API version 12, <!--RP5-->this API does not take effect on 2-in-1 devices.<!--RP5End-->
     *
     * The return value does not indicate that the status bar and <!--RP15-->three-button navigation bar<!--RP15End-->
     * are shown or hidden. This API does not take effect when it is called by a child window. The configuration does
     * not take effect in non-full-screen mode (such as floating window or split-screen mode).
     *
     * @param { Array<'status' | 'navigation'> } names - Whether to show the status bar and <!--RP15-->three-button
     *     navigation bar<!--RP15End--> in full-screen mode.<br>For example, to show all of them, set this parameter to
     *     **['status','navigation']**. If this parameter is set to [], they are hidden.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * <!--RP14-->Sets whether to show the status bar and three-button navigation bar in the main window. The visibility of the status bar and three-button navigation bar is controlled by **status** and **navigation**, respectively.<!--RP14End--> This API uses a promise to return the result.
     *
     * The return value does not indicate that the status bar and <!--RP15-->three-button navigation bar<!--RP15End-->
     * are shown or hidden. The setting does not take effect when the main window is in non-full-screen or non-maximized
     * mode (such as floating windows or split-screen mode). It takes effect once the main window enters full-screen or
     * maximized mode.
     *
     * @param { Array<'status' | 'navigation'> } names - The set of system bar
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether to show or hide the status bar and <!--RP15-->three-button navigation bar<!--RP15End--> of the main
     * window. This API uses a promise to return the result.
     *
     * The return value does not indicate that the status bar and <!--RP15-->three-button navigation bar<!--RP15End-->
     * are shown or hidden. This API does not take effect when it is called by a child window. The setting does not take
     * effect when the main window is in non-full-screen or non-maximized mode (such as floating windows or split-screen
     * mode). It takes effect once the main window enters full-screen or maximized mode.
     *
     * @param {SpecificSystemBar} name - the set of system bar
     * @param {boolean} enable - Show specific system bar if true, or hide specific system bar if false.
     * @param {boolean} enableAnimation - Whether using animation during this setting,
     *     using animation if true or not using animation if false. [since 12]
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the properties of the <!--Del-->three-button navigation bar and <!--DelEnd-->status bar of the main window.
     * This API uses an asynchronous callback to return the result. <!--RP5-->This API does not take effect on 2-in-1
     * devices.<!--RP5End-->
     *
     * This API does not take effect when it is called by a child window. The configuration does not take effect in non-
     * full-screen mode (such as floating window or split-screen mode).
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->Properties of the <!--Del-->three-button
     *     navigation bar and <!--DelEnd-->status bar.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties, callback: AsyncCallback<void>): void;

    /**
     * Sets the properties of the <!--Del-->three-button navigation bar and <!--DelEnd-->status bar of the main window.
     * This API uses a promise to return the result. <!--RP5-->This API does not take effect on 2-in-1 devices.<!--RP5
     * End-->
     *
     * This API does not take effect when it is called by a child window.
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->Properties of the <!--Del-->three-button
     *     navigation bar and <!--DelEnd-->status bar.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowSystemBarProperties(systemBarProperties: SystemBarProperties)
     */
    setSystemBarProperties(systemBarProperties: SystemBarProperties): Promise<void>;

    /**
     * Sets the properties of the <!--Del-->three-button navigation bar and <!--DelEnd-->status bar of the main window.
     * This API uses an asynchronous callback to return the result. <!--RP5-->This API does not take effect on 2-in-1
     * devices.<!--RP5End-->
     *
     * This API does not take effect when it is called by a child window.
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->Properties of the <!--Del-->three-button
     *     navigation bar and <!--DelEnd-->status bar.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Sets the properties of the <!--Del-->three-button navigation bar and <!--DelEnd-->status bar of the main window.
     * This API uses a promise to return the result.
     *
     * This API does not take effect when it is called by a child window. The setting does not take effect when the main
     * window is in non-full-screen or non-maximized mode (such as floating windows or split-screen mode). It takes
     * effect once the main window enters full-screen or maximized mode.
     *
     * @param { SystemBarProperties } systemBarProperties - <!--Del-->Properties of the <!--Del-->three-button
     *     navigation bar and <!--DelEnd-->status bar.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the properties of the <!--Del-->three-button navigation bar and <!--DelEnd-->status bar in the main
     * window.
     *
     * @returns { SystemBarProperties } Properties of the <!--Del-->three-button navigation bar and <!--DelEnd-->status
     *     bar.
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
     * Sets the text color of the status bar in the main window. This API uses a promise to return the result.
     *
     * Setting the status bar text color is not supported for child windows. Calling this API on a child window will
     * have no effect. The setting does not take effect when the main window is in non-full-screen or non-maximized mode
     * (such as floating windows or split-screen mode). It takes effect once the main window enters full-screen or
     * maximized mode.
     *
     * @param { ColorMetrics } color - Text color of the status bar.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the properties (for example, text color) of the status bar in the main window.
     *
     * Calling this API is not supported for child window and will cause error code 1300004.
     *
     * @returns { StatusBarProperty } Status bar properties, such as its color.
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
     * Get window state snapshot, including isPcMode information.
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
     * Sets whether to enable the side-swipe gesture for back redirection in the current window. This API can be
     * successfully called only for the main window, and error code 1300004 is returned on other windows.
     *
     * After being enabled, this function takes effect only when the window is in full-screen mode and in the foreground
     * with the focus gained.
     *
     * After this function is disabled, the gesture hot zone of the current application is disabled, and the side-swipe
     * for back redirection becomes invalid. After the user switches to another application or returns to the home
     * screen, the gesture hot zone is restored, and the side-swipe for back redirection becomes normal.
     *
     * @param { boolean } enabled - Whether to enable the back gesture feature. **true** to enable, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains whether the back gesture is enabled for the current window. This API can be successfully called only for
     * the main window, and error code 1300004 is returned on other windows.
     *
     * @returns { boolean } Whether the back gesture feature is enabled. **true** if enabled, **false** otherwise.
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
     * Sets the preferred orientation for the main window. This API uses a promise to return the result. This API does
     * not take effect when it is called by a child window.
     *
     * Before <!--RP1-->OpenHarmony 6.1<!--RP1End-->, this API can be called only by and takes effect for the main
     * window. If it is called for other window types, it does not take effect.
     *
     * Starting from <!--RP1-->OpenHarmony 6.1<!--RP1End-->, this API can be called by the main window and the system
     * window with **WindowType** set to **TYPE_WALLET_SWIPE_CARD**. If it is called for other window types, it does not
     * take effect. When the system window calls the **setPreferredOrientation** API, if there is a higher-level window
     * for which the display orientation has been set, the call will not take effect immediately. In this case, the set
     * display orientation will be recorded. When there is a no higher-level window with the display orientation set,
     * the last orientation request will be restored. When the display orientation is set for the system window whose
     * **WindowType** is **TYPE_WALLET_SWIPE_CARD** and takes effect, the foreground application will transition to the
     * background.
     *
     * @param { Orientation } orientation - Display orientation.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Subscribes to the window rotation change event. If the window rotation event type in
     * [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo} is **WINDOW_WILL_ROTATE**,
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} must be returned. If the window rotation
     * event type is **WINDOW_DID_ROTATE**, [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} does
     * not take effect.
     *
     * This API can be registered only on the main thread. If a window registers multiple callbacks of the same type,
     * only the return value of the most recently registered callback will be effective. The system provides a timeout
     * protection mechanism. If the window does not return
     * [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult} within 20 ms, the system does not process
     * the return value.
     *
     * @param { 'rotationChange' } type - Event type. The value is fixed at **'rotationChange'**, indicating the window
     *     rotation change event.
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } callback - Callback used to
     *     return [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo} and
     *     [RotationChangeResult]{@link @ohos.window:window.RotationChangeResult}.
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
     * Unsubscribes from the window rotation change event.
     *
     * @param { 'rotationChange' } type - Event type. The value is fixed at **'rotationChange'**, indicating the window
     *     rotation change event.
     * @param { RotationChangeCallback<RotationChangeInfo, RotationChangeResult | void> } [callback] - Callback used to
     *     return the result. If a value is passed in, the corresponding subscription is canceled. If no value is passed
     *     in, all subscriptions to the specified event are canceled.
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
     * Subscribes to the event indicating changes in the security restrictions of the UIExtensionAbility within the
     * window. You are advised to initiate the subscription right after the window is created.
     *
     * @param { 'uiExtensionSecureLimitChange' } eventType - Event type. The value is fixed at
     *     **'uiExtensionSecureLimitChange'**, indicating that the UIExtensionAbility security restrictions in the
     *     window changes.
     * @param { Callback<boolean> } callback - Callback used to return the result. The value **true** means that at
     *     least one UIExtensionAbility within the window has enabled the hiding of unsafe windows, and **false** means
     *     that all UIExtensionAbility components within the window have disabled the hiding of unsafe windows.
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
     * Unsubscribes from the event indicating changes in the security restrictions of the UIExtensionAbility within the
     * window.
     *
     * @param { 'uiExtensionSecureLimitChange' } eventType - Event type. The value is fixed at
     *     **'uiExtensionSecureLimitChange'**, indicating that the UIExtensionAbility security restrictions in the
     *     window changes.
     * @param { Callback<boolean> } callback - Callback used to return the result. If a value is passed in, the
     *     corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event
     *     are canceled.
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
     * Subscribes to events indicating changes in window frame metrics. This API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * The callback is triggered only when the client UI content is redrawn (for example, during page transitions,
     * interactions with responsive components, setting background colors, or adjusting opacity).
     *
     * @param { 'frameMetricsMeasured' } type - Event type. The value is fixed at **'frameMetricsMeasured'**, indicating
     *     the window frame metrics change event.
     * @param { Callback<FrameMetrics> } callback - Callback invoked when the window frame metrics change. For details,
     *     see [Frame Rate Metrics]{@link @ohos.window:window.FrameMetrics}.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'frameMetricsMeasured', callback: Callback<FrameMetrics>): void;

    /**
     * Subscribes to events indicating changes in window frame metrics. This API must be used after the call of
     *     [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)} or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * The callback is triggered only when the client UI content is redrawn (for example, during page transitions,
     *     interactions with responsive components, setting background colors, or adjusting opacity).
     *
     * @param { Callback<FrameMetrics> } callback - Callback invoked when the window frame metrics change. For details,
     *     see [Frame Rate Metrics]{@link @ohos.window:window.FrameMetrics}.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onFrameMetricsMeasured(callback: Callback<FrameMetrics>): void;

    /**
     * Unsubscribes from events indicating changes in window frame metrics. This API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { 'frameMetricsMeasured' } type - Event type. The value is fixed at **'frameMetricsMeasured'**, indicating
     *     the window frame metrics change event.
     * @param { Callback<FrameMetrics> } [callback] - If a value is passed in, the corresponding subscription is
     *     canceled. If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'frameMetricsMeasured', callback?: Callback<FrameMetrics>): void;

    /**
     * Unsubscribes from events indicating changes in window frame metrics. This API must be used after the call of [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { Callback<FrameMetrics> } [callback] - If a value is passed in, the corresponding subscription is
     *     canceled. If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offFrameMetricsMeasured(callback?: Callback<FrameMetrics>): void;

    /**
     * Subscribes to the visibility status change event of the window. The visibility returned by this API may be
     * different from that perceived by human eyes in the following scenarios:
     *
     * - If the shadow area of a non-main window (
     * [setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled} and
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius} can be used to set whether the
     * shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as
     * partially visible even though it is completely visible to human eyes.
     * - If the upper-layer window has a transparency effect (including all transparency degrees except the completely
     * opaque degree), the lower-layer window will not be blocked and is visible.
     * - Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating
     * window on a mobile phone, the lower-layer window returned remains visible.
     *
     * @param { 'occlusionStateChanged' } type - Event type. The value is fixed at **'occlusionStateChanged'**,
     *     indicating the window visibility status change event.
     * @param { Callback<OcclusionState> } callback - Callback invoked when the window visibility status changes. For
     *     details, see [Window Visibility Status]{@link @ohos.window:window.OcclusionState}.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    on(type: 'occlusionStateChanged', callback: Callback<OcclusionState>): void;

    /**
     * Subscribes to the visibility status change event of the window. The visibility returned by this API may be
     * different from that perceived by human eyes in the following scenarios:
     *
     * - If the shadow area of a non-main window (
     * [setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled} and
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius} can be used to set whether the
     * shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as
     * partially visible even though it is completely visible to human eyes.
     * - If the upper-layer window has a transparency effect (including all transparency degrees except the completely
     * opaque degree), the lower-layer window will not be blocked and is visible.
     * - Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating
     * window on a mobile phone, the lower-layer window returned remains visible.
     *
     * - If the shadow area of a non-main window (
     * [setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled} and
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius} can be used to set whether the
     * shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as
     * partially visible even though it is completely visible to human eyes.
     * - If the upper-layer window has a transparency effect (including all transparency degrees except the completely
     * opaque degree), the lower-layer window will not be blocked and is visible.
     * - Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating
     * window on a mobile phone, the lower-layer window returned remains visible.
     *
     * @param { Callback<OcclusionState> } callback - Callback invoked when the window visibility status changes. For
     *     details, see [Window Visibility Status]{@link @ohos.window:window.OcclusionState}.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onOcclusionStateChanged(callback: Callback<OcclusionState>): void;

    /**
     * Unsubscribes from the visibility status change event of the window.
     *
     * @param { 'occlusionStateChanged' } type - Event type. The value is fixed at **'occlusionStateChanged'**,
     *     indicating the window visibility status change event.
     * @param { Callback<OcclusionState> } [callback] - If a value is passed in, the corresponding subscription is
     *     canceled. If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     */
    off(type: 'occlusionStateChanged', callback?: Callback<OcclusionState>): void;

    /**
     * Unregister the callback for occlusion state changed.
     *
     * @param { Callback<OcclusionState> } [callback] - If a value is passed in, the corresponding subscription is
     *     canceled. If no value is passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offOcclusionStateChanged(callback?: Callback<OcclusionState>): void;

    /**
     * Sets the preferred orientation for this window. This API uses an asynchronous callback to return the result. For
     * details about the development practices of orientation, see
     * [Display Orientation Switching](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-landscape-and-portrait-development)
     * .
     *
     * Before <!--RP1-->OpenHarmony 6.1<!--RP1End-->, this API can be called only by and takes effect for the main
     * window. If it is called for other window types, it does not take effect.
     *
     * Starting from <!--RP1-->OpenHarmony 6.1<!--RP1End-->, this API can be called by the main window and the system
     * window with **WindowType** set to **TYPE_WALLET_SWIPE_CARD**. If it is called for other window types, it does not
     * take effect. When the system window calls the **setPreferredOrientation** API, if there is a higher-level window
     * for which the display orientation has been set, the call will not take effect immediately. In this case, the set
     * display orientation will be recorded. When there is a no higher-level window with the display orientation set,
     * the last orientation request will be restored. When the display orientation is set for the system window whose
     * **WindowType** is **TYPE_WALLET_SWIPE_CARD** and takes effect, the foreground application will transition to the
     * background.
     *
     * @param { Orientation } orientation - Display orientation.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. The callback indicates the API call
     *     result. It does not mean that the application rotation animation ends.
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
     * Sets the preferred orientation for the main window.
     * This API uses a promise to return the result.
     * It does not take effect on devices that do not support rotation with the sensor,
     * on 2-in-1 devices or for the child window.
     *
     * @param { Orientation } orientation - The orientation config of the window
     * @returns { Promise<OrientationResult> } Promise used to return the OrientationResult.
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
     * Obtains the orientation of the window. If no orientation is specified, **window.Orientation.UNSPECIFIED** is
     * returned.
     *
     * @returns { Orientation } Display orientation.
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
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the
     * state attribute to the page through a local storage. This API uses an asynchronous callback to return the result.
     * You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the
     * existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution
     * context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within
     * the callback.
     *
     * @param { string } path - Path of the page from which the content will be loaded. The path is configured in the
     *     **main_pages.json** file of the project.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute
     *     for the page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Loads the content of a page, with its path in the current project specified, to this window, and transfers the
     * state attribute to the page through a local storage. This API uses a promise to return the result. You are
     * advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the existing page
     * content (UIContent) before loading the new content. Exercise caution when using it. The execution context of the
     * current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.
     *
     * @param { string } path - Path of the page from which the content will be loaded. The path is configured in the
     *     **main_pages.json** file of the project.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute
     *     for the page.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Loads content from a page to this window. This API uses an asynchronous callback to return the result. You are
     * advised to call this API during UIAbility startup. If called multiple times, this API will destroy the existing
     * page content (UIContent) before loading the new content. Exercise caution when using it. The execution context of
     * the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within the
     * callback.
     *
     * @param { string } path - Path of the page from which the content will be loaded. In the stage model, the path is
     *     configured in the **main_pages.json** file of the project. In the FA model, the path is configured in the
     *     **config.json** file of the project.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setUIContent(path: string, callback: AsyncCallback<void>)
     */
    loadContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content from a page to this window. This API uses a promise to return the result. You are advised to call
     * this API during UIAbility startup. If called multiple times, this API will destroy the existing page content (
     * UIContent) before loading the new content. Exercise caution when using it. The execution context of the current
     * UI may be unclear. Therefore, you are advised not to perform UI-related operations within the callback.
     *
     * @param { string } path - Path of the page from which the content will be loaded. In the stage model, the path is
     *     configured in the **main_pages.json** file of the project. In the FA model, the path is configured in the
     *     **config.json** file of the project.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setUIContent(path: string)
     */
    loadContent(path: string): Promise<void>;

    /**
     * Obtains a UIContext instance.
     *
     * @returns { UIContext } UIContext instance obtained.
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
     * Loads the content of a page, with its path in the current project specified, to this window. This API uses an
     * asynchronous callback to return the result.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Loads the content of a page, with its path in the current project specified, to this window. This API uses a
     * promise to return the result.
     *
     * @param { string } path - Path of the page to which the content will be loaded
     * @returns { Promise<void> } Promise that returns no value.
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
     * Loads the content of a [named route](docroot://ui/arkts-routing.md#named-route) page to this window, and
     * transfers the state attribute to the page through a local storage. This API uses an asynchronous callback to
     * return the result. You are advised to call this API during UIAbility startup. If called repeatedly, this API will
     * destroy the existing page content (UIContent) before loading the new content. Exercise caution when using it. The
     * execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related
     * operations within the callback.
     *
     * @param { string } name - Name of the named route page.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute
     *     for the page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Loads the content of a [named route](docroot://ui/arkts-routing.md#named-route) page to this window. This API
     * uses an asynchronous callback to return the result. You are advised to call this API during UIAbility startup. If
     * called repeatedly, this API will destroy the existing page content (UIContent) before loading the new content.
     * Exercise caution when using it. The execution context of the current UI may be unclear. Therefore, you are
     * advised not to perform UI-related operations within the callback.
     *
     * @param { string } name - Name of the named route page.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Loads the content of a [named route](docroot://ui/arkts-routing.md#named-route) page to this window, and
     * transfers the state attribute to the page through a local storage. This API uses a promise to return the result.
     * You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the
     * existing page content (UIContent) before loading the new content. Exercise caution when using it. The execution
     * context of the current UI may be unclear. Therefore, you are advised not to perform UI-related operations within
     * the callback.
     *
     * @param { string } name - Name of the named route page.
     * @param { LocalStorage } storage - Page-level UI state storage unit, which is used to transfer the state attribute
     *     for the page.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Checks whether this window is displayed. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. **true** if the window is
     *     displayed, **false** otherwise.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowShowing
     */
    isShowing(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether this window is displayed. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. **true** if the window is displayed, **false**
     *     otherwise.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowShowing
     */
    isShowing(): Promise<boolean>;

    /**
     * Checks whether this window is displayed.
     *
     * @returns { boolean } Whether the window is displayed. **true** if displayed, **false** otherwise.
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
     * Subscribes to the window size change event. This API can be called only by the main thread.
     *
     * @param { 'windowSizeChange' } type - Event type. The value is fixed at **'windowSizeChange'**, indicating the
     *     window size change event.
     * @param { Callback<Size> } callback - Callback used to return the window size.
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
     * Subscribes to the window size change event. This API can be called only by the main thread.
     *
     * @param { Callback<Size> } callback - Callback used to return the window size.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onWindowSizeChange(callback: Callback<Size>): void;

    /**
     * Unsubscribes from the window size change event. This API can be called only by the main thread.
     *
     * @param { 'windowSizeChange' } type - Event type. The value is fixed at **'windowSizeChange'**, indicating the
     *     window size change event.
     * @param { Callback<Size> } [callback] - Callback used to return the window size. If a value is passed in, the
     *     corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event
     *     are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    off(type: 'windowSizeChange', callback?: Callback<Size>): void;

    /**
     * Unsubscribes from the window size change event. This API can be called only by the main thread.
     *
     * @param { Callback<Size> } [callback] - Callback used to return the window size. If a value is passed in, the
     *     corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event
     *     are canceled.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowSizeChange(callback?: Callback<Size>): void;

    /**
     * Subscribes to the event indicating changes to the area where this window cannot be displayed.
     *
     * @param { 'systemAvoidAreaChange' } type - Event type. The value is fixed at **'systemAvoidAreaChange'**,
     *     indicating the event of changes to the area where the window cannot be displayed.
     * @param { Callback<AvoidArea> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.on(type: 'avoidAreaChange', callback: Callback<AvoidAreaOptions>)
     */
    on(type: 'systemAvoidAreaChange', callback: Callback<AvoidArea>): void;

    /**
     * Unsubscribes from the event indicating changes to the area where this window cannot be displayed.
     *
     * @param { 'systemAvoidAreaChange' } type - Event type. The value is fixed at **'systemAvoidAreaChange'**,
     *     indicating the event of changes to the area where the window cannot be displayed.
     * @param { Callback<AvoidArea> } callback - Callback used to return the area. If a value is passed in, the
     *     corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified event
     *     are canceled.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>)
     */
    off(type: 'systemAvoidAreaChange', callback?: Callback<AvoidArea>): void;

    /**
     * Subscribes to the event indicating changes to the area where this window cannot be displayed.
     *
     * Main window/Child window:
     *
     * - When the callback is triggered in the free-floating window mode (the window mode is
     * **window.WindowStatusType.FLOATING**) under the
     * [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) state, only the avoidance area
     * of the fixed soft keyboard type ([AvoidAreaType]{@link @ohos.window:window.AvoidAreaType} is **TYPE_KEYBOARD**)
     * is available.
     * - When the callback is triggered in the free-floating window mode of the main window in the non-freeform window
     * state, only the avoidance area of the system bar type ([AvoidAreaType]{@link @ohos.window:window.AvoidAreaType}
     * is **TYPE_SYSTEM**) is available.
     * - When the callback is triggered in the other scenarios of the main window, the calculated avoidance area can be
     * returned only when the window is not in the free-floating window mode or the device type is phone or tablet.
     * Otherwise, an empty avoidance area is returned.
     * - When the callback is triggered for the child window in the non-freeform window state or non-free-floating
     * window mode, the calculated avoidance area of the child window is returned only when the position and size of the
     * child window are the same as those of the main window. Otherwise, an empty avoidance area is returned.
     *
     * Global floating window, modal window, or system window:
     *
     * - The calculated avoidance area is returned only when the callback is triggered after
     * [setSystemAvoidAreaEnabled]{@link window.Window.setSystemAvoidAreaEnabled} is called. Otherwise, an empty
     * avoidance area is returned.
     *
     * <!--RP7-->Common scenarios for triggering this event are as follows: transitions between full-screen mode, floating mode, and split-screen mode of the application window; rotation of the application window; transitions between folded and unfolded states of a foldable device; transfer of the application window between multiple devices.<!--RP7End-->
     *
     * @param { 'avoidAreaChange' } type - Event type. The value is fixed at **'avoidAreaChange'**, indicating the event
     *     of changes to the area where the window cannot be displayed.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area and area type. [since 12]
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
     * Register the callback of avoidAreaChange
     *
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onAvoidAreaChange(callback: Callback<AvoidAreaOptions>): void;

    /**
     * Unsubscribes from the event indicating changes to the area where this window cannot be displayed.
     *
     * @param { 'avoidAreaChange' } type - Event type. The value is fixed at **'avoidAreaChange'**, indicating the event
     *     of changes to the area where the window cannot be displayed.
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area and area type. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 12 - 19]
     * @param { Callback<AvoidAreaOptions> } [callback] - Callback used to return the area and area type. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'avoidAreaChange', callback?: Callback<AvoidAreaOptions>): void;

    /**
     * Unsubscribes from the event indicating changes to the area where this window cannot be displayed.
     *
     * @param { Callback<{ type: AvoidAreaType, area: AvoidArea }> } callback - Callback used to return the area and
     *     area type. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled. [since 9 - 11]
     * @param { Callback<AvoidAreaOptions> } callback - Callback used to return the area and area type. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 12 - 19]
     * @param { Callback<AvoidAreaOptions> } [callback] - Callback used to return the area and area type. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 20]
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offAvoidAreaChange(callback?: Callback<AvoidAreaOptions>): void;

    /**
     * Subscribes to the event indicating soft keyboard height changes in the fixed state. The system notifies the
     * keyboard height change when the soft keyboard is invoked by the window and overlaps with the window. Starting
     * from API version 10, the soft keyboard can be set to the fixed or floating state. For details, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardHeightChange' } type - Event type. The value is fixed at **'keyboardHeightChange'**, indicating
     *     the keyboard height change event.
     * @param { Callback<int> } callback - Callback used to return the current keyboard height, which is an integer, in
     *     px.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    on(type: 'keyboardHeightChange', callback: Callback<int>): void;

    /**
     * Register the callback of keyboard height change. This API only takes effect
     *    when the soft keyboard is invoked from this window and overlaps with it.
     *
     * @param { Callback<int> } callback - Callback used to return the current keyboard height,
     *     which is an integer, in px.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onKeyboardHeightChange(callback: Callback<int>): void;

    /**
     * Unsubscribes from the event indicating soft keyboard height changes in the fixed state so that the application
     * does not receive notifications of soft keyboard height changes. Starting from API version 10, the soft keyboard
     * can be set to the fixed or floating state. For details, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardHeightChange' } type - Event type. The value is fixed at **'keyboardHeightChange'**, indicating
     *     the keyboard height change event.
     * @param { Callback<int> } [callback] - Callback used to return the current keyboard height, which is an integer,
     *     in px. If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     */
    off(type: 'keyboardHeightChange', callback?: Callback<int>): void;

    /**
     * Unregister the callback of keyboard height change
     *
     * @param { Callback<int> } [callback] - Callback used to return the current keyboard height,
     *     which is an integer, in px. If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offKeyboardHeightChange(callback?: Callback<int>): void;

    /**
     * Subscribes to the event indicating that the soft keyboard in the fixed state is about to show, or the soft
     * keyboard is transitioning from the floating state to the fixed state.
     *
     * For details about the APIs used to set the soft keyboard to the fixed or floating state, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardWillShow' } type - Event type. The value is fixed at **'keyboardWillShow'**, indicating the
     *     soft keyboard in the fixed state is about to show.
     * @param { Callback<KeyboardInfo> } callback - Callback used to return the information about the soft keyboard.
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
     * Unsubscribes from the event indicating that the soft keyboard in the fixed state is about to show. For details
     * about the APIs used to set the input method panel to the fixed or floating state, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardWillShow' } type - Event type. The value is fixed at **'keyboardWillShow'**, indicating the
     *     soft keyboard in the fixed state is about to show.
     * @param { Callback<KeyboardInfo> } [callback] - Callback used to return the information about the soft keyboard.
     *     If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled.
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
     * Subscribes to the event indicating that the show animation of the soft keyboard in the fixed state is completed,
     * or when the soft keyboard finishes transitioning from the floating state to the fixed state.
     *
     * For details about the APIs used to set the soft keyboard to the fixed or floating state, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardDidShow' } type - Event type. The value is fixed at **'keyboardDidShow'**, indicating the show
     *     animation of the soft keyboard in the fixed state is completed.
     * @param { Callback<KeyboardInfo> } callback - Callback used to return the information about the soft keyboard.
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
     * Unsubscribes from the event indicating that the show animation of the soft keyboard in the fixed state is
     * completed, For details about the APIs used to set the input method panel to the fixed or floating state, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardDidShow' } type - Event type. The value is fixed at **'keyboardDidShow'**, indicating the show
     *     animation of the soft keyboard in the fixed state is completed.
     * @param { Callback<KeyboardInfo> } [callback] - Callback used to return the information about the soft keyboard.
     *     If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled.
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
     * Subscribes to the event indicating that the soft keyboard in the fixed state is about to hide, or the soft
     * keyboard is transitioning from the fixed state to the floating state.
     *
     * For details about the APIs used to set the soft keyboard to the fixed or floating state, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardWillHide' } type - Event type. The value is fixed at **'keyboardWillHide'**, indicating the
     *     soft keyboard in the fixed state is about to hide.
     * @param { Callback<KeyboardInfo> } callback - Callback used to return the information about the soft keyboard.
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
     * Unsubscribes from the event indicating that the soft keyboard in the fixed state is about to hide. For details
     * about the APIs used to transition the input method panel from the fixed state to the floating state, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardWillHide' } type - Event type. The value is fixed at **'keyboardWillHide'**, indicating the
     *     soft keyboard in the fixed state is about to hide.
     * @param { Callback<KeyboardInfo> } [callback] - Callback used to return the information about the soft keyboard.
     *     If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled.
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
     * Subscribes to the event indicating that the hide animation of the soft keyboard in the fixed state is completed,
     * or when the soft keyboard finishes transitioning from the fixed state to the floating state.
     *
     * For details about the APIs used to set the soft keyboard to the fixed or floating state, see
     * [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardDidHide' } type - Event type. The value is fixed at **'keyboardDidHide'**, indicating the hide
     *     animation of the soft keyboard in the fixed state is completed.
     * @param { Callback<KeyboardInfo> } callback - Callback used to return the information about the soft keyboard.
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
     * Unsubscribes from the event indicating that the hide animation of the soft keyboard in the fixed state is
     * completed, For details about the APIs used to transition the input method panel from the fixed state to the
     * floating state, see [Input Method Service]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.changeFlag}.
     *
     * @param { 'keyboardDidHide' } type - Event type. The value is fixed at **'keyboardDidHide'**, indicating the hide
     *     animation of the soft keyboard in the fixed state is completed.
     * @param { Callback<KeyboardInfo> } [callback] - Callback used to return the information about the soft keyboard.
     *     If a value is passed in, the corresponding subscription is canceled. If no value is passed in, all
     *     subscriptions to the specified event are canceled.
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
     * Subscribes to the touch event outside this window.
     *
     * @param { 'touchOutside' } type - Event type. The value is fixed at **'touchOutside'**, indicating the touch event
     *     outside this window.
     * @param { Callback<void> } callback - Callback used to return the touch event outside this window.
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
     * Unsubscribes from the touch event outside this window.
     *
     * @param { 'touchOutside' } type - Event type. The value is fixed at **'touchOutside'**, indicating the touch event
     *     outside this window.
     * @param { Callback<void> } callback - Callback used to return the touch event outside this window. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
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
     * Subscribes to the display change event of this window. For example, this event is triggered when the window is
     * moved to a different display.
     *
     * @param { 'displayIdChange' } type - Event type. The value is fixed at **'displayIdChange'**, indicating the
     *     display change event.
     * @param { Callback<long> } callback - Callback invoked when the display where the window is located changes. The
     *     callback contains a parameter of the number type, indicating the new display ID.
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
     * Subscribes to the display change event of this window. For example, this event is triggered when the window is
     *     moved to a different display.
     *
     * @param { Callback<long> } callback - Callback invoked when the display where the window is located changes. The
     *     callback contains a parameter of the number type, indicating the new display ID.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onDisplayIdChange(callback: Callback<long>): void;

    /**
     * Unsubscribes from the display change event of this window.
     *
     * @param { 'displayIdChange' } type - Event type. The value is fixed at **'displayIdChange'**, indicating the
     *     display change event.
     * @param { Callback<long> } [callback] - Callback invoked when the display where the window is located changes. If
     *     a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions
     *     to the specified event are canceled.
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
     * Unsubscribes from the display change event of this window.
     *
     * @param { Callback<long> } [callback] - Callback invoked when the display where the window is located changes. If
     *     a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions
     *     to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offDisplayIdChange(callback?: Callback<long>): void;

    /**
     * Subscribes to the visibility status change event of this window. The visibility returned by this API may be
     * different from that perceived by human eyes in the following scenarios:
     *
     * - If the shadow area of a non-main window (
     * [setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled} and
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius} can be used to set whether the
     * shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as
     * partially visible even though it is completely visible to human eyes.
     * - If the upper-layer window has a transparency effect (including all transparency degrees except the completely
     * opaque degree), the lower-layer window will not be blocked and is visible.
     * - Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating
     * window on a mobile phone, the lower-layer window returned remains visible.
     *
     * @param { 'windowVisibilityChange' } type - Event type. The value is fixed at **'windowVisibilityChange'**,
     *     indicating the visibility status change event.
     * @param { Callback<boolean> } callback - Callback used to return the visibility status of the window, which is a
     *     Boolean value. **true** if visible, **false** otherwise.
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
     * Subscribes to the visibility status change event of this window. The visibility returned by this API may be
     * different from that perceived by human eyes in the following scenarios:
     *
     * - If the shadow area of a non-main window (
     * [setWindowShadowEnabled]{@link @ohos.window:window.Window.setWindowShadowEnabled} and
     * [setWindowShadowRadius]{@link @ohos.window:window.Window.setWindowShadowRadius} can be used to set whether the
     * shadow area is displayed and the shadow radius,respectively) is blocked, the window will be considered as
     * partially visible even though it is completely visible to human eyes.
     * - If the upper-layer window has a transparency effect (including all transparency degrees except the completely
     * opaque degree), the lower-layer window will not be blocked and is visible.
     * - Most windows with animation effects do not block lower-layer windows. For example, when you drag a floating
     * window on a mobile phone, the lower-layer window returned remains visible.
     *
     * @param { Callback<boolean> } callback - Callback used to return the visibility status of the window, which is a
     *     Boolean value. **true** if visible, **false** otherwise.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowVisibilityChange(callback: Callback<boolean>): void;

    /**
     * Unsubscribes from the visibility status change event of this window.
     *
     * @param { 'windowVisibilityChange' } type - Event type. The value is fixed at **'windowVisibilityChange'**,
     *     indicating the visibility status change event.
     * @param { Callback<boolean> } callback - Callback used to return the visibility status of the window. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 11 - 11]
     * @param { Callback<boolean> } [callback] - Callback used to return the visibility status of the window. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 12]
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
     * Unsubscribes from the visibility status change event of this window.
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the visibility status of the window. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 11 - 11]
     * @param { Callback<boolean> } [callback] - Callback used to return the visibility status of the window. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled. [since 12]
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowVisibilityChange(callback?: Callback<boolean>): void;

    /**
     * Subscribes to the system density change event, which is triggered when the system's display size scale factor
     * changes for the screen where the window is located.
     *
     * In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to
     * physical pixels (px). For example, if the return value is **density**, the calculation formula is vp * density =
     * px.
     *
     * @param { 'systemDensityChange' } type - Event type. The value is fixed at **'systemDensityChange'**, indicating
     *     the system density change event.
     * @param { Callback<double> } callback - Callback invoked when the system's display size scale factor changes. The
     *     callback contains a parameter of the number type, indicating the new scale factor.
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
     * Subscribes to the system density change event, which is triggered when the system's display size scale factor
     *     changes for the screen where the window is located.
     *
     * In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to
     *     physical pixels (px). For example, if the return value is **density**, the calculation formula is vp *
     *     density = px.
     *
     * @param { Callback<double> } callback - Callback used to notify the system density is current has changed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSystemDensityChange(callback: Callback<double>): void;

    /**
     * Unsubscribes from the system density change event.
     *
     * In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to
     * physical pixels (px). For example, if the return value is **density**, the calculation formula is vp * density =
     * px.
     *
     * @param { 'systemDensityChange' } type - Event type. The value is fixed at **'systemDensityChange'**, indicating
     *     the system density change event.
     * @param { Callback<double> } [callback] - Callback invoked when the system's display size scale factor changes. If
     *     a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions
     *     to the specified event are canceled.
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
     * Unsubscribes from the system density change event.
     *
     * In the callback function, you are advised to directly use the return value to convert from virtual pixels (vp) to
     *     physical pixels (px). For example, if the return value is **density**, the calculation formula is vp *
     *     density = px.
     *
     * @param { Callback<double> } [callback] - Callback invoked when the system's display size scale factor changes. If
     *     a value is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions
     *     to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSystemDensityChange(callback?: Callback<double>): void;

    /**
     * Subscribes to events indicating whether the main window is in full-screen mode across multiple displays.
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - Event type. The value is fixed at
     *     **'mainWindowFullScreenAcrossDisplaysChanged'**, indicating changes in whether the main window is in full-
     *     screen mode across multiple displays.
     * @param { Callback<boolean> } callback - Callback used to return the result indicating whether the main window is
     *     in full-screen mode across multiple displays. **true** if yes, **false** otherwise.
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
     * Subscribes to events indicating whether the main window is in full-screen mode across multiple displays.
     *
     * @param { Callback<boolean> } callback - Callback used to return the result indicating whether the main window is
     *     in full-screen mode across multiple displays. **true** if yes, **false** otherwise.
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
     * Unsubscribes from events indicating whether the main window is in full-screen mode across multiple displays.
     *
     * @param { 'mainWindowFullScreenAcrossDisplaysChanged' } type - Event type. The value is fixed at
     *     **'mainWindowFullScreenAcrossDisplaysChanged'**, indicating changes in whether the main window is in full-
     *     screen mode across multiple displays.
     * @param { Callback<boolean> } [callback] - Callback used to return the result indicating whether the main window
     *     is in full-screen mode across multiple displays. If a value is passed in, the corresponding subscription is
     *     canceled. If no value is passed in, all subscriptions to the specified event are canceled.
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
     * Unsubscribes from events indicating whether the main window is in full-screen mode across multiple displays.
     *
     * @param { Callback<boolean> } [callback] - Callback used to return the result indicating whether the main window
     *     is in full-screen mode across multiple displays. If a value is passed in, the corresponding subscription is
     *     canceled. If no value is passed in, all subscriptions to the specified event are canceled.
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
     * Register the callback function that has no interaction for a long time.
     * Interaction events include physical keyboard input events and screen touch/click events,
     * but not soft keyboard input events.
     * @param { 'noInteractionDetected' } type - The value is fixed at 'noInteractionDetected',
     *     indicating the window has no interaction for a long time.
     * @param { number } timeout - The timeout(in seconds) of no interaction detection.
     * @param { Callback<void> } callback - Callback used to notify the window has no interaction for a long time.
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
     * Unsubscribes from non-interaction events in a window within the specified period. Interaction events include
     * physical keyboard input events and screen touch/click events, but not soft keyboard input events.
     *
     * @param { 'noInteractionDetected' } type - Event type. The value is fixed at **'noInteractionDetected'**,
     *     indicating that there is no interaction event in the window within the specified period.
     * @param { Callback<void> } callback - Callback invoked when there is no interaction event in the current window
     *     within the specified period. If a value is passed in, the corresponding subscription is canceled. If no value
     *     is passed in, all subscriptions to the specified event are canceled.
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
     * Subscribes to the screenshot event.
     *
     * @param { 'screenshot' } type - Event type. The value is fixed at **'screenshot'**, covering screenshot events
     *     initiated from the Control Panel, by running hdc commands, or by calling the screenshot interfaces.
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    on(type: 'screenshot', callback: Callback<void>): void;

    /**
     * Subscribes to the screenshot event.
     *
     * @param { Callback<void> } callback - Callback invoked when a screenshot event occurs.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshot(callback: Callback<void>): void;

    /**
     * Unsubscribes from the screenshot event.
     *
     * @param { 'screenshot' } type - Event type. The value is fixed at **'screenshot'**, indicating the screenshot
     *     event.
     * @param { Callback<void> } [callback] - Callback invoked when a screenshot event occurs. If a value is passed in,
     *     the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified
     *     event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     *     1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     */
    off(type: 'screenshot', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the screenshot event.
     *
     * @param { Callback<void> } [callback] - Callback invoked when a screenshot event occurs. If a value is passed in,
     *     the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified
     *     event are canceled.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshot(callback?: Callback<void>): void;

    /**
     * Subscribes to the screenshot event.
     *
     * @param { 'screenshotAppEvent' } type - Event type. The value is fixed at **'screenshotAppEvent'**, covering
     *     screenshot events from the Control Panel, shortcut keys, and scroll capture.
     * @param { Callback<ScreenshotEventType> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    on(type: 'screenshotAppEvent', callback: Callback<ScreenshotEventType>): void;

    /**
     * Subscribes to the screenshot event.
     *
     * @param { Callback<ScreenshotEventType> } callback - Callback invoked when a screenshot event occurs.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    onScreenshotAppEvent(callback: Callback<ScreenshotEventType>): void;

    /**
     * Unsubscribes from the screenshot event.
     *
     * @param { 'screenshotAppEvent' } type - Event type. The value is fixed at **'screenshotAppEvent'**, indicating the
     *     screenshot event.
     * @param { Callback<ScreenshotEventType> } [callback] - Callback invoked when a screenshot event occurs. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 20 dynamic
     */
    off(type: 'screenshotAppEvent', callback?: Callback<ScreenshotEventType>): void;

    /**
     * Unsubscribes from the screenshot event.
     *
     * @param { Callback<ScreenshotEventType> } [callback] - Callback invoked when a screenshot event occurs. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 23 static
     */
    offScreenshotAppEvent(callback?: Callback<ScreenshotEventType>): void;

    /**
     * Subscribes to click or touch events in a window covered by a modal window. This API takes effect only when it is
     * called by a modal window.
     *
     * @param { 'dialogTargetTouch' } type - Event type. The value is fixed at **'dialogTargetTouch'**, indicating the
     *     click or touch event in a window covered by a modal window.
     * @param { Callback<void> } callback - Callback invoked when a click or touch event occurs in the window covered by
     *     the modal window.
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
     * Unsubscribes from the touch event of the target window in the modal window mode.
     *
     * @param { 'dialogTargetTouch' } type - Event type. The value is fixed at **'dialogTargetTouch'**, indicating the
     *     touch event of the target window in the modal window mode.
     * @param { Callback<void> } callback - Callback invoked when the touch event occurs in the target window of the
     *     modal window mode. If a value is passed in, the corresponding subscription is canceled. If no value is passed
     *     in, all subscriptions to the specified event are canceled.
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
     * Subscribes to the window lifecycle change event.
     *
     * @param { 'windowEvent' } type - Event type. The value is fixed at **'windowEvent'**, indicating the window
     *     lifecycle change event.
     * @param { Callback<WindowEventType> } callback - Callback used to return the window lifecycle state.
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
     * Subscribes to the window lifecycle change event.
     *
     * @param { Callback<WindowEventType> } callback - Callback used to return the window lifecycle state.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    onWindowEvent(callback: Callback<WindowEventType>): void;

    /**
     * Unsubscribes from the window lifecycle change event.
     *
     * @param { 'windowEvent' } type - Event type. The value is fixed at **'windowEvent'**, indicating the window
     *     lifecycle change event.
     * @param { Callback<WindowEventType> } callback - Callback used to return the window lifecycle state. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'windowEvent', callback?: Callback<WindowEventType>): void;

    /**
     * Unsubscribes from the window lifecycle change event.
     *
     * @param { Callback<WindowEventType> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 23 static
     */
    offWindowEvent(callback?: Callback<WindowEventType>): void;

    /**
     * Enables the listening for window status changes. When the window status changes, a notification is sent. (In this
     * case, the window attributes may not be updated yet. If you need to obtain the changed window size and position
     * immediately after receiving the window status change notification, you are advised to use
     * [on('windowStatusDidChange')]{@link @ohos.window:window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * .)
     *
     * After the listening is enabled using this API, multiple callbacks will be received when the **maximize** or
     * **recover** method is called. To obtain the deduplicated callback, you can use
     * [on('windowStatusDidChange')]{@link window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * .
     *
     * > **NOTE**
     * >
     * > In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, when the window is
     * > maximized (covering the entire screen, with a dock bar and status bar on 2-in-1 devices, and a status bar on
     * > tablets), the return value differs based on the
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) setting. For
     * > versions below 14, the return value is **WindowStatusType::FULL_SCREEN**. For versions 14 and above, the return
     * > value is **WindowStatusType::MAXIMIZE**.
     *
     * @param { 'windowStatusChange' } type - Event type. The value is fixed at **'windowStatusChange'**, indicating the
     *     window status change event.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
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
     * Enables the listening for window status changes. When the window status changes, a notification is sent. (In this
     * case, the window attributes may not be updated yet. If you need to obtain the changed window size and position
     * immediately after receiving the window status change notification, you are advised to use
     * [on('windowStatusDidChange')]{@link @ohos.window:window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * .)
     *
     * After the listening is enabled using this API, multiple callbacks will be received when the **maximize** or
     * **recover** method is called. To obtain the deduplicated callback, you can use
     * [on('windowStatusDidChange')]{@link window.Window.on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>)}
     * .
     *
     * > **NOTE**
     * >
     * > In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, when the window is
     * > maximized (covering the entire screen, with a dock bar and status bar on 2-in-1 devices, and a status bar on
     * > tablets), the return value differs based on the
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) setting. For
     * > versions below 14, the return value is **WindowStatusType::FULL_SCREEN**. For versions 14 and above, the return
     * > value is **WindowStatusType::MAXIMIZE**.
     *
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    onWindowStatusChange(callback: Callback<WindowStatusType>): void;

    /**
     * Disables the listening for window status changes.
     *
     * @param { 'windowStatusChange' } type - Event type. The value is fixed at **'windowStatusChange'**, indicating the
     *     window status change event.
     * @param { Callback<WindowStatusType> } [callback] - Callback used to return the window status. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
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
     * Disables the listening for window status changes.
     *
     * @param { Callback<WindowStatusType> } [callback] - Callback used to return the window status. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform
     * @since 23 static
     */
    offWindowStatusChange(callback?: Callback<WindowStatusType>): void;

    /**
     * Subscribes to the event indicating that the window status has changed (the [Rect]{@link @ohos.window:window.Rect}
     * property of the window has been updated).
     *
     * @param { 'windowStatusDidChange' } type - Event type. The value is fixed at **'windowStatusDidChange'**,
     *     indicating that the window status has changed.
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'windowStatusDidChange', callback: Callback<WindowStatusType>): void;

    /**
     * Subscribes to the event indicating that the window status has changed (the [Rect]{@link @ohos.window:window.Rect}
     * property of the window has been updated).
     *
     * @param { Callback<WindowStatusType> } callback - Callback used to return the window status.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowStatusDidChange(callback: Callback<WindowStatusType>): void;

    /**
     * Unsubscribes from the event indicating that the window status has changed.
     *
     * @param { 'windowStatusDidChange' } type - Event type. The value is fixed at **'windowStatusDidChange'**,
     *     indicating that the window status has changed.
     * @param { Callback<WindowStatusType> } [callback] - Callback used to return the window status. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'windowStatusDidChange', callback?: Callback<WindowStatusType>): void;

    /**
     * Unsubscribes from the event indicating that the window status has changed.
     *
     * @param { Callback<WindowStatusType> } [callback] - Callback used to return the window status. If a value is
     *     passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowStatusDidChange(callback?: Callback<WindowStatusType>): void;

    /**
     * Subscribes to the event indicating that the child window is closed. This event is triggered only when the user
     * clicks the system-provided close button in the top-right corner to close the child window. It is not triggered
     * when the child window is closed in other ways.
     *
     * If the event is subscribed to multiple times, only the most recently subscribed-to event takes effect.
     *
     * The callback function in this API is executed synchronously. For asynchronous close events of child windows,
     * refer to
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * .
     *
     * If there is an existing event subscribed to by calling
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * , only the
     * [on('windowWillClose')]{@link window.Window.on(type: 'windowWillClose', callback: Callback<void, Promise<boolean>>)}
     * API will be responded to.
     *
     * @param { 'subWindowClose' } type - Event type. The value is fixed at **'subWindowClose'**, indicating the child
     *     window close event.
     * @param { Callback<void> } callback - Callback invoked when the close button in the top-right corner of the child
     *     window is clicked. It does not return any parameter. The return value of the internal logic of the callback
     *     function determines whether to continue to close the child window. If **true** of the Boolean type is
     *     returned, the child window is not closed. If **false** or other non-Boolean types are returned, the child
     *     window is closed.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'subWindowClose', callback: Callback<void>): void;

    /**
     * Subscribes to the event indicating that the child window is closed.
     * This event is triggered only when the user clicks the system-provided
     * close button in the upper right corner to close the child window.
     * It is not triggered when the child window is closed in other ways.
     *
     * @param { Callback<void> } callback - Callback invoked when the close
     *     button in the upper right corner of the child window is clicked.
     *     The internal logic of the callback function requires a return value of the Boolean type.
     *     The return value determines whether to continue to close the child window.
     *     The value true means not to close the child window, and false means to continue to close the child window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onSubWindowClose(callback: Callback<void>): void;

    /**
     * Unsubscribes from the event indicating that the child window is closed.
     *
     * @param { 'subWindowClose' } type - Event type. The value is fixed at **'subWindowClose'**, indicating the child
     *     window close event.
     * @param { Callback<void> } callback - Callback invoked when the close button in the top-right corner of the child
     *     window is clicked. It does not return any parameter. The return value of the internal logic of the callback
     *     function determines whether to continue to close the child window. If **true** of the Boolean type is
     *     returned, the child window is not closed. If **false** or other non-Boolean types are returned, the child
     *     window is closed. If a value is passed in, the corresponding subscription is canceled. If no value is passed
     *     in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'subWindowClose', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the event indicating that the child window is closed.
     *
     * @param { Callback<void> } [callback ] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offSubWindowClose(callback?: Callback<void>): void;

    /**
     * Subscribes to the event indicating that the main window or child window will be closed. This event is triggered
     * only when the user clicks the close button in the system-provided title bar to close the window. It is not
     * triggered when the window is closed in other ways.
     *
     * The callback function in this API is executed asynchronously. For synchronous close events of child windows,
     * refer to [on('subWindowClose')]{@link window.Window.on(type: 'subWindowClose', callback: Callback<void>)}. For
     * synchronous close events of the main window, refer to
     * [on('windowStageClose')]{@link window.Window.on(type: 'windowStageClose', callback: Callback<void>)}.
     *
     * @param { 'windowWillClose' } type - Event type. The value is fixed at **'windowWillClose'**, indicating the
     *     window close event.
     * @param { Callback<void, Promise<boolean>> } callback - Callback invoked when the close button in the top-right
     *     corner of the window is clicked. It does not return any parameter. The internal logic of the callback
     *     function requires a return value of the Promise<boolean> type. In the returned Promise function,
     *     **resolve(true)** means not to close the window, and **resolve(false)** or **reject** means to continue to
     *     close the window.
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
     * Subscribes to the event indicating that the main window or child window will be closed.
     * This event is triggered only when the user clicks the close
     * button in the system-provided title bar to close the window.
     * It is not triggered when the window is closed in other ways.
     *
     * @param { Callback<void, Promise<boolean>> } callback - Callback used to when the close
     *     button in the upper right corner of the window is clicked.
     *     The internal logic of the callback function requires a return value of the Promise type.
     *     In the returned Promise function, resolve(true) means not to close the window,
     *     and resolve(false) or reject means to continue to close the window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowWillClose(callback: Callback<void, Promise<boolean>>): void;

    /**
     * Unsubscribes from the event indicating that the main window or child window will be closed.
     *
     * @param { 'windowWillClose' } type - Event type. The value is fixed at **'windowWillClose'**, indicating the
     *     window close event.
     * @param { Callback<void, Promise<boolean>> } callback - Callback invoked when the close button in the top-right
     *     corner of the window is clicked. It does not return any parameter. The internal logic of the callback
     *     function requires a return value of the Promise<boolean> type. In the returned Promise function,
     *     **resolve(true)** means not to close the window, and **resolve(false)** or **reject** means to continue to
     *     close the window.
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
     * Unsubscribes from the event indicating that the main window or child window will be closed.
     *
     * @param { Callback<void, Promise<boolean>> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowWillClose(callback?: Callback<void, Promise<boolean>>): void;

    /**
     * Subscribes to the highlighted state change event of the window.
     *
     * @param { 'windowHighlightChange' } type - Event type. The value is fixed at **'windowHighlightChange'**,
     *     indicating the window highlighted state change event.
     * @param { Callback<boolean> } callback - Callback used to return the highlighted state of the window, which is a
     *     Boolean value. **true** if highlighted, **false** otherwise.
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
     * Unsubscribes from the highlighted state change event of the window.
     *
     * @param { 'windowHighlightChange' } type - Event type. The value is fixed at **'windowHighlightChange'**,
     *     indicating the window highlighted state change event.
     * @param { Callback<boolean> } [callback] - Callback used to return the highlighted state of the window. If a value
     *     is passed in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the
     *     specified event are canceled.
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
     * Binds the modal window to the target window. After the binding is successful, the target window cannot respond to
     * user operations. In addition, a callback used to listen for modal window destruction events is added. This API
     * uses a promise to return the result.
     *
     * @param { rpc.RemoteObject } token - Token of the target window.
     * @param { Callback<void> } deathCallback - Callback used to listen for modal window destruction events.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Binds the modal window to the target window. After the binding is successful, the target window cannot respond to
     * user operations. In addition, a callback used to listen for modal window destruction events is added. This API
     * uses an asynchronous callback to return the result.
     *
     * @param { rpc.RemoteObject } token - Token of the target window.
     * @param { Callback<void> } deathCallback - Callback used to listen for modal window destruction events.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Binds the modal window to the target window. After the binding is successful, the target window cannot respond to
     * user operations. In addition, a callback used to listen for modal window destruction events is added. This API
     * uses a promise to return the result.
     *
     * @param { dialogRequest.RequestInfo } requestInfo - **RequestInfo** of the target window.
     * @param { Callback<void> } deathCallback - Callback used to listen for modal window destruction events.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Binds the modal window to the target window. After the binding is successful, the target window cannot respond to
     * user operations. In addition, a callback used to listen for modal window destruction events is added. This API
     * uses an asynchronous callback to return the result.
     *
     * @param { dialogRequest.RequestInfo } requestInfo - **RequestInfo** of the target window.
     * @param { Callback<void> } deathCallback - Callback used to listen for modal window destruction events.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Sets whether the modal window responds to the back gesture event. An error code is returned if this API is called
     * for a non-modal window.
     *
     * @param { boolean } enabled - Whether to respond to the back gesture event.<br>**true** means to respond to the
     *     back gesture event and trigger the **onBackPress** callback, **false** otherwise.<br>
     * @returns { Promise<void> } Promise that returns no value.
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
     * Checks whether this window supports the wide-gamut color space. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. **true** if the wide-gamut color space is
     *     supported, **false** otherwise.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowSupportWideGamut()
     */
    isSupportWideGamut(): Promise<boolean>;

    /**
     * Checks whether this window supports the wide-gamut color space. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. **true** if the wide-gamut color
     *     space is supported, **false** otherwise.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.isWindowSupportWideGamut(callback: AsyncCallback<boolean>)
     */
    isSupportWideGamut(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether this window supports the wide-gamut color space. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. **true** if the wide-gamut color space is
     *     supported, **false** otherwise.
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
     * Checks whether this window supports the wide-gamut color space. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { AsyncCallback<boolean> } callback Callback used to return the result.
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
     * Sets a color space for this window. This API uses a promise to return the result.
     *
     * @param { ColorSpace } colorSpace - Color space to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowColorSpace(colorSpace:ColorSpace)
     */
    setColorSpace(colorSpace: ColorSpace): Promise<void>;

    /**
     * Sets a color space for this window. This API uses an asynchronous callback to return the result.
     *
     * @param { ColorSpace } colorSpace - Color space to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowColorSpace(colorSpace:ColorSpace, callback: AsyncCallback<void>)
     */
    setColorSpace(colorSpace: ColorSpace, callback: AsyncCallback<void>): void;

    /**
     * Sets a color space for this window. This API uses a promise to return the result.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets a color space for this window. This API uses an asynchronous callback to return the result.
     *
     * @param { ColorSpace } colorSpace the specified color space.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
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
     * Obtains the color space of this window. This API uses a promise to return the result.
     *
     * @returns { Promise<ColorSpace> } Promise used to return the current color space.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowColorSpace
     */
    getColorSpace(): Promise<ColorSpace>;

    /**
     * Obtains the color space of this window. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<ColorSpace> } callback - Callback used to return the result. When the color space is
     *     obtained successfully, **err** is **undefined**, and **data** is the current color space.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.getWindowColorSpace
     */
    getColorSpace(callback: AsyncCallback<ColorSpace>): void;

    /**
     * Obtains the color space of this window.
     *
     * @returns { ColorSpace } Color space obtained.
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
     * Sets the background color for this window. This API uses a promise to return the result. In the stage model, this
     * API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { string } color - Background color to set. The value is a hexadecimal RGB or ARGB color code and is case
     *     insensitive, for example, **'#00FF00'** or **'#FF00FF00'**.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBackgroundColor
     */
    setBackgroundColor(color: string): Promise<void>;

    /**
     * Sets the background color for this window. This API uses an asynchronous callback to return the result. In the
     * stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { string } color - Background color to set. The value is a hexadecimal RGB or ARGB color code and is case
     *     insensitive, for example, **'#00FF00'** or **'#FF00FF00'**.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBackgroundColor
     */
    setBackgroundColor(color: string, callback: AsyncCallback<void>): void;

    /**
     * Sets the background color for this window.
     *
     * If this API is not called, the default background color of the window is **'#FFF0F0F0'** in light mode and
     * **'#FF1A1A1A'** in dark mode.
     *
     * In the stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { string } color the specified color. [since 9 - 17]
     * @param { string | ColorMetrics } color - the specified color. [since 18]
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
     * Sets whether the main window displays a shadow. This API uses a promise to return the result. By default, the
     * main window displays a shadow unless you explicitly change it with this API.
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { boolean } enable - Enable or disable window shadow.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the screen brightness for this window. This API uses a promise to return the result.
     *
     * When the screen brightness setting for the window takes effect, Control Panel cannot adjust the system screen
     * brightness. It can do so only after the window screen brightness is restored to the default value.
     *
     * @param { number } brightness - Brightness to set. The value is a floating-point number in the range [0.0, 1.0] or
     *     is set to **-1.0**. The value **1.0** means the brightest, and **-1.0** means that the window brightness
     *     resets to the original brightness set through Control Panel.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBrightness(brightness: double)
     */
    setBrightness(brightness: number): Promise<void>;

    /**
     * Sets the screen brightness for this window. This API uses an asynchronous callback to return the result.
     *
     * When the screen brightness setting for the window takes effect, Control Panel cannot adjust the system screen
     * brightness. It can do so only after the window screen brightness is restored to the default value.
     *
     * @param { number } brightness - Brightness to set. The value is a floating-point number in the range [0.0, 1.0] or
     *     is set to **-1.0**. The value **1.0** means the brightest, and **-1.0** means that the window brightness
     *     resets to the original brightness set through Control Panel.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowBrightness(brightness: double, callback: AsyncCallback<void>)
     */
    setBrightness(brightness: number, callback: AsyncCallback<void>): void;

    /**
     * Called by the main window to place the window above all the other windows. This API uses a promise to return the
     * result.
     *
     * @param { boolean } isTopmost - Whether to pin the main window on top. **true** to pin, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Places the main window above all the other windows of the application. This API uses a promise to return the
     * result.
     *
     * Applications use custom shortcut keys to pin or unpin the main window.
     *
     * @permission ohos.permission.WINDOW_TOPMOST
     * @param { boolean } isWindowTopmost - Whether to pin the main window on top. **true** to pin, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the window brightness for the main window. The window brightness takes effect only when the window is in the
     * foreground and has focus. This API uses a promise to return the result.
     *
     * When the setting is valid, it affects only the physical screen where the window is displayed. It does not apply
     * to virtual displays (for example, casting/mirroring screens).
     *
     * If the input parameter is **-1**, the window brightness reverts to the system brightness (which can be adjusted
     * through Control Panel or shortcut keys).
     *
     * When the window moves to the background, the setting becomes invalid, and brightness can be adjusted through
     * Control Panel or shortcut keys. You are advised not to call this API consecutively or when the window transitions
     * to the background. Otherwise, timing issues may occur.
     *
     * @param { double } brightness the specified brightness value.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the window brightness for the main window. The window brightness takes effect only when the window is in the
     * foreground and has focus. This API uses an asynchronous callback to return the result.
     *
     * When the setting is valid, it affects only the physical screen where the window is displayed. It does not apply
     * to virtual displays (for example, casting/mirroring screens).
     *
     * If the input parameter is **-1**, the window brightness reverts to the system brightness (which can be adjusted
     * through Control Panel or shortcut keys).
     *
     * When the window moves to the background, the setting becomes invalid, and brightness can be adjusted through
     * Control Panel or shortcut keys. You are advised not to call this API consecutively or when the window transitions
     * to the background. Otherwise, timing issues may occur.
     *
     * @param { double } brightness the specified brightness value.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
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
     * Sets whether the window uses the default density of the current screen. In the stage model, you need to call this
     * API after
     * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}.
     *
     * If this API is not called, the default density is not used.
     *
     * If this API,
     * [setDefaultDensityEnabled(true)]{@link @ohos.window:window.WindowStage.setDefaultDensityEnabled}
     * , and [setCustomDensity]{@link @ohos.window:window.WindowStage.setCustomDensity} are
     * all called, the setting from the last called API will be applied.
     *
     * @param { boolean } enabled - Whether to use the default density of the system. **true** to enable, **false**
     *     otherwise. When the default density is enabled, the window layout does not change with the system display
     *     size.
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
     * Sets the background color of the main window container for both when it has focus and when it does not. In the
     * stage model, you need to call this API after
     * [loadContent()]{@link @ohos.window:window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link @ohos.window:window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}.
     *
     * The background color you set here covers the entire window, including both the title bar and the content area. If
     * you also use [setWindowBackgroundColor()]{@link @ohos.window:window.Window.setWindowBackgroundColor}, the content
     * area shows the window background color, whereas the title bar shows the container background color.
     *
     * @permission ohos.permission.SET_WINDOW_ALPHA [since 26.0.0]
     * @param { string } activeColor - window container color in active.
     * @param { string } inactiveColor - window container color in inactive.
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
     * Sets the dimness of the window that is not on top. This API uses an asynchronous callback to return the result.
     *
     * @param { number } dimBehindValue - Dimness of the window to set. The value range is [0.0, 1.0], and the value
     *     **1.0** means the dimmest.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number, callback: AsyncCallback<void>): void;

    /**
     * Sets the dimness of the window that is not on top. This API uses a promise to return the result.
     *
     * @param { number } dimBehindValue - Dimness of the window to set. The value ranges from 0 to 1. The value **1**
     *     indicates the dimmest.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setDimBehind(dimBehindValue: number): Promise<void>;

    /**
     * Sets whether this window is focusable, that is, whether the window can gain focus after it is being clicked or
     * using other methods. This API uses a promise to return the result.
     *
     * @param { boolean } isFocusable - Whether the window is focusable. **true** if focusable, **false** otherwise. If
     *     this parameter is set to **false**, the window does not support binding to an input method or receiving
     *     keyboard events. If input logic needs to be processed, follow the instructions provided in
     *     [Input Box and Input Method Interaction in Non-Focus Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)
     *     .
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowFocusable(isFocusable: boolean)
     */
    setFocusable(isFocusable: boolean): Promise<void>;

    /**
     * Sets whether this window is focusable, that is, whether the window can gain focus after it is being operated or
     * using other methods. This API uses an asynchronous callback to return the result.
     *
     * @param { boolean } isFocusable - Whether the window is focusable. **true** if focusable, **false** otherwise. If
     *     this parameter is set to **false**, the window does not support binding to an input method or receiving
     *     keyboard events. If input logic needs to be processed, follow the instructions provided in
     *     [Input Box and Input Method Interaction in Non-Focus Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md)
     *     .
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)
     */
    setFocusable(isFocusable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether this window is focusable. This API uses a promise to return the result.
     *
     * Starting from API version 22, if a virtual screen is created by calling
     * [createVirtualScreen]{@link @ohos.display:display.createVirtualScreen} with **supportsFocus** set to **false**,
     * windows on that virtual screen cannot call the current API to change their focusability. Attempting to do so will
     * result in error code 1300002.
     *
     * @param { boolean } isFocusable can be focus if true, or can not be focus if false.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether this window is focusable. This API uses an asynchronous callback to return the result.
     *
     * Starting from API version 22, if a virtual screen is created by calling
     * [createVirtualScreen]{@link @ohos.display:display.createVirtualScreen} with **supportsFocus** set to **false**,
     * windows on that virtual screen cannot call the current API to change their focusability. Attempting to do so will
     * result in error code 1300002.
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
     * Allows this window to proactively request to gain or lose focus. This API uses a promise to return the result. A
     * value is returned as long as the API is successfully called. The return value does not indicate that the window
     * has gained or lost focus. You can use
     * [on('windowEvent')]{@link @ohos.window:window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}
     * to listen for the focus status of the window.
     *
     * When a focus request is sent, whether the window can successfully gain focus depends on its capability of being
     * focused and its current visibility. To gain focus, the window must be capable of receiving focus and in a visible
     * state (actively displayed and not hidden or destroyed).
     *
     * Conversely, once a blur request is sent, the window will lose focus without any conditions.
     *
     * @param { boolean } isFocused - Whether to gain or lose focus. **true** to gain focus, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the exclusive highlight property for the window. When a window set to exclusive highlight gains focus, other
     * windows in the current parent-child window chain that are in the highlighted state will lose their highlighted
     * state. This API uses a promise to return the result.
     *
     * This API does not take effect for the main window or modal window.
     *
     * @param { boolean } exclusivelyHighlighted Whether the window can become highlight exclusively when it gain focus.
     *     The value
     *     true means that the window can cause the window outside the current window link to
     *     lose its highlight state, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Checks whether the window is active. To obtain the active state, call this API when the
     * [WindowEventType]{@link @ohos.window:window.WindowEventType} lifecycle is **WINDOW_ACTIVE**.
     *
     * You can use
     * [on('windowHighlightChange')]{@link window.Window.on(type: 'windowHighlightChange', callback: Callback<boolean>)}
     * to listen for status changes and then execute the corresponding service.
     *
     * @returns { boolean } Check result for whether the window is active. **true** if active, **false** otherwise.
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
     * Sets whether to keep the screen always on. This API uses a promise to return the result.
     *
     * @param { boolean } isKeepScreenOn - Whether to keep the screen always on. **true** to keep the screen always on,
     *     **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean)
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * Sets whether to keep the screen always on. This API uses an asynchronous callback to return the result.
     *
     * @param { boolean } isKeepScreenOn - Whether to keep the screen always on. **true** to keep the screen always on,
     *     **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>)
     */
    setKeepScreenOn(isKeepScreenOn: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether to keep the screen always on. This API uses a promise to return the result.
     *
     * Set **isKeepScreenOn** to **true** only in necessary scenarios (such as navigation, video playback, drawing, and
     * gaming scenarios). After exiting these scenarios, set the parameter to **false**. Do not use this API in other
     * scenarios (such as no screen interaction or audio playback). When the system detects that the API is used in a
     * non-standard manner, automatic screen-off may be invoked.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether to keep the screen always on. This API uses an asynchronous callback to return the result.
     *
     * Set **isKeepScreenOn** to **true** only in necessary scenarios (such as navigation, video playback, drawing, and
     * gaming scenarios). After exiting these scenarios, set the parameter to **false**. Do not use this API in other
     * scenarios (such as no screen interaction or audio playback). When the system detects that the API is used in a
     * non-standard manner, automatic screen-off may be invoked.
     *
     * @param { boolean } isKeepScreenOn keep screen on if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
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
     * Wakes up the screen.
     *
     * @param { boolean } wakeUp - Whether to wake up the screen. **true** to wake up, **false** otherwise.
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
     * Sets whether the area outside the child window is touchable. This API uses a promise to return the result.
     *
     * > Starting from API version 9, the area outside the child window is touchable by default. This API is no longer
     * > supported and no substitute API is provided.
     *
     * @param { boolean } touchable - Whether the area outside the child window is touchable. **true** if touchable,
     *     **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean): Promise<void>;

    /**
     * Sets whether the area outside the child window is touchable. This API uses an asynchronous callback to return the
     * result.
     *
     * > Starting from API version 9, the area outside the child window is touchable by default. This API is no longer
     * > supported and no substitute API is provided.
     *
     * @param { boolean } touchable - Whether the area outside the child window is touchable. **true** if touchable,
     *     **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    setOutsideTouchable(touchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether this window is in privacy mode. This API uses a promise to return the result. A window in privacy
     * mode cannot be captured or recorded. This API can be used in scenarios where screen capture or recording is
     * disabled.
     *
     * @param { boolean } isPrivacyMode - Whether the window is in privacy mode. **true** if in privacy mode, **false**
     *     otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowPrivacyMode(isPrivacyMode: boolean)
     */
    setPrivacyMode(isPrivacyMode: boolean): Promise<void>;

    /**
     * Sets whether this window is in privacy mode. This API uses an asynchronous callback to return the result. A
     * window in privacy mode cannot be captured or recorded. This API can be used in scenarios where screen capture or
     * recording is disabled.
     *
     * @param { boolean } isPrivacyMode - Whether the window is in privacy mode. **true** if in privacy mode, **false**
     *     otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)
     */
    setPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether this window is in privacy mode. This API uses a promise to return the result.
     *
     * A window in privacy mode cannot be captured or recorded.
     *
     * When a window in privacy mode is moved to the background, it displays as a white overlay or privacy mask in the
     * multi-tasking view.
     *
     * If this API is not called, the privacy mode is disabled by default, and the window can be captured or recorded.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether this window is in privacy mode. This API uses an asynchronous callback to return the result.
     *
     * A window in privacy mode cannot be captured or recorded.
     *
     * When a window in privacy mode is moved to the background, it displays as a white overlay or privacy mask in the
     * multi-tasking view.
     *
     * If this API is not called, the privacy mode is disabled by default, and the window can be captured or recorded.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode in private mode if true, or not if false.
     * @param { AsyncCallback<void> } callback Callback used to return the result.
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
     * Sets whether to ignore this window during screen capture, recording, or casting. This API is typically used in
     * situations where you want to prevent screen capture, recording, or casting.
     *
     * If you want the window to always be ignored during screen capture, recording, or casting while it is in the
     * foreground, listen for window lifecycle changes using
     * [on('windowEvent')]{@link @ohos.window:window.Window.on(type: 'windowEvent', callback: Callback<WindowEventType>)}
     * . Set **isSkip** to **false** when the window is in the background and **true** when it is in the foreground.
     *
     * @param { boolean } isSkip - Whether to ignore the window. The default value is **false**.<br>**true** to ignore,
     *     **false** otherwise.<br>
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
     * Sets whether this window is touchable. This API uses a promise to return the result.
     *
     * @param { boolean } isTouchable - Whether the window is touchable. **true** if touchable, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowTouchable(isTouchable: boolean)
     */
    setTouchable(isTouchable: boolean): Promise<void>;

    /**
     * Sets whether this window is touchable. This API uses an asynchronous callback to return the result.
     *
     * @param { boolean } isTouchable - Whether the window is touchable. **true** if touchable, **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead window.Window.setWindowTouchable(isTouchable: boolean, callback: AsyncCallback<void>)
     */
    setTouchable(isTouchable: boolean, callback: AsyncCallback<void>): void;

    /**
     * Sets whether this window is touchable. This API uses a promise to return the result.
     *
     * @param { boolean } isTouchable is touchable if true, or not if false.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether this window is touchable. This API uses an asynchronous callback to return the result.
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
     * Adds or deletes the handwriting flag for this window. After this flag is added, the window responds to stylus
     * events but not touch events. This API uses a promise to return the result.
     *
     * @param { boolean } enable - Whether to add or delete the flag. **true** to add, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether the main window is forbidden to move in split-screen mode. This API uses an asynchronous callback to
     * return the result.
     *
     * @param { boolean } isForbidSplitMove - Whether the window is forbidden to move in split-screen mode. **true** if
     *     forbidden, **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Sets whether the main window is forbidden to move in split-screen mode. This API uses a promise to return the
     * result.
     *
     * @param { boolean } isForbidSplitMove - Whether the window is forbidden to move in split-screen mode. **true** if
     *     forbidden, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Captures this window. This API uses an asynchronous callback to return the result. If privacy mode is enabled for
     * the current window (using
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * ), taking a screenshot will result in a blank screen.
     *
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the result.
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
     * Captures this window. If privacy mode is enabled for the current window (using
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * ), taking a screenshot will result in a blank screen.
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
     * Captures this window. This API returns the result synchronously. If privacy mode is enabled for the current
     * window (using
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * ), taking a screenshot will result in a blank screen.
     *
     * In the stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
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
     * Captures this window. This API can be called to obtain the screenshot of the current window even if privacy mode
     * is enabled for the current window (using
     * [setWindowPrivacyMode]{@link window.Window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}
     * ).
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
     * Sets the opacity for this window. This API can be used only when you
     * [customize an animation to be played during the display or hiding of a system window](docroot://windowmanager/system-window-stage-sys.md#customizing-an-animation-to-be-played-during-the-display-or-hiding-of-a-system-window)
     * .
     *
     * @param { double } opacity - Opacity. The value is a floating-point number in the range [0.0, 1.0]. The value
     *     **0.0** means completely transparent, and **1.0** means completely opaque.
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
     * Sets the scale parameters for this window. This API can be used only when you
     * [customize an animation to be played during the display or hiding of a system window](docroot://windowmanager/system-window-stage-sys.md#customizing-an-animation-to-be-played-during-the-display-or-hiding-of-a-system-window)
     * .
     *
     * @param { ScaleOptions } scaleOptions - Scale parameters to set.
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
     * Sets the rotation parameters for this window. This API can be used only when you
     * [customize an animation to be played during the display or hiding of a system window](docroot://windowmanager/system-window-stage-sys.md#customizing-an-animation-to-be-played-during-the-display-or-hiding-of-a-system-window)
     * .
     *
     * @param { RotateOptions } rotateOptions - Rotation parameters to set.
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
     * Sets the translation parameters for this window. This API can be used only when you
     * [customize an animation to be played during the display or hiding of a system window](docroot://windowmanager/system-window-stage-sys.md#customizing-an-animation-to-be-played-during-the-display-or-hiding-of-a-system-window)
     * .
     *
     * @param { TranslateOptions } translateOptions - Translation parameters. The unit is px.
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
     * Obtains the transition animation controller.
     *
     * @returns { TransitionController } Transition animation controller.
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
     * Blurs this window.
     *
     * @param { double } radius - Radius of the blur. The value is a floating-point number greater than or equal to 0.0,
     *     in px. The value **0.0** means that the blur is disabled for the window.
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
     * Blurs the background of this window.
     *
     * The window background refers to the lower-layer area covered by the window, which is the same as the window size.
     *
     * To make the blur effect visible, you must set the window background transparent by calling
     * [setWindowBackgroundColor]{@link @ohos.window:window.Window.setWindowBackgroundColor}.
     *
     * @param { double } radius - Radius of the blur. The value is a floating-point number greater than or equal to 0.0,
     *     in px. The value **0.0** means that the blur is disabled for the background of the window.
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
     * Sets the blur style for the background of this window.
     *
     * @param { BlurStyle } blurStyle - Blur style to set for the background of the window.
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
     * Sets the shadow for the window borders.
     *
     * @param { double } radius - Radius of the shadow. The value is a floating-point number greater than or equal to 0.
     *     0, in px. The value **0.0** means that the shadow is disabled for the window borders.
     * @param { string } color - Color of the shadow. The value is a hexadecimal RGB or ARGB color code and is case
     *     insensitive, for example, **#00FF00** or **#FF00FF00**. The default value is **'#000000'**.
     * @param { double } offsetX - Offset of the shadow along the x-axis, in px. The value is a floating-point number,
     *     in px. The default value is **0.0**.
     * @param { double } offsetY - Offset of the shadow along the y-axis, in px. The value is a floating-point number,
     *     in px. The default value is **0.0**.
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
     * Sets the blur radius of the shadow on the edges of a child window or floating window.
     *
     * @param { double } radius - Radius of the shadow, measured in px. The value is a floating-point number greater
     *     than or equal to 0.0, and the value **0.0** means that the shadow is disabled for the window borders.
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
     * Sets the radius of the rounded corners for this window.
     *
     * @param { double } cornerRadius - Radius of the rounded corners. The value is a floating-point number greater than
     *     or equal to 0.0, in px. The value **0.0** means that the window does not use rounded corners.
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
     * Sets the radius of the rounded corners for a child window or floating window. This API uses a promise to return
     * the result.
     *
     * If the radius of the rounded corner is too large, it may cause the three buttons (maximize, minimize, and close)
     * to be clipped and make their hotspots less recognizable. Set an appropriate radius based on the window size.
     *
     * Before calling this API, you can call [getWindowCornerRadius()]{@link window.Window.getWindowCornerRadius} to
     * obtain the default radius of rounded corners of the window.
     *
     * @param { double } cornerRadius - Radius of the rounded corners, measured in vp. The value is a floating-point
     *     number greater than or equal to 0.0. The value **0.0** means that the window does not use rounded corners.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the radius of rounded corners of a child window or floating window. If
     * [setWindowCornerRadius()]{@link window.Window.setWindowCornerRadius} is not called to set the radius of rounded
     * corners, this API returns the default radius of rounded corners.
     *
     * @returns { double } Radius of the rounded corner of the child window or floating window, measured in vp.
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
     * Raises the application child window to the top layer of the application. This API uses an asynchronous callback
     * to return the result.
     *
     * Before calling this API, ensure that the child window has been created and
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)} has been successfully
     * executed.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Brings a child window to the top. This action is limited to child windows of the same type under the same parent
     * window within the current application. For child windows with a custom zLevel property, it only applies to child
     * windows with the same zLevel value under the same parent window within the current application. This API uses a
     * promise to return the result.
     *
     * Before calling this API, ensure that the child window has been created and
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)} has been successfully executed.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the aspect ratio of the window content layout (excluding decorations like borders and title bars). This API
     * uses an asynchronous callback to return the result.
     *
     * > **NOTE**
     * >
     * > - When the window size is set by using other APIs such as
     * > [resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)} and
     * > [resizeAsync]{@link window.Window.resizeAsync}, the window size is not restricted by **ratio**.
     * >
     * > - This setting is available only for the main window and takes effect only in floating window mode (
     * > **window.WindowStatusType.FLOATING** mode). The aspect ratio is saved persistently, which means that the
     * > setting is valid in floating window mode even after the application is closed or the device is restarted.
     * >
     * > - After the aspect ratio is set for a main window of an application, the aspect ratio is used for subsequent
     * > main windows. If you need to set the aspect ratio for just one main window, use
     * > [setContentAspectRatio]{@link window.Window.setContentAspectRatio} instead.
     *
     * @param { double } ratio - Aspect ratio of the window content layout (excluding decorations like borders and title
     *     bars). The value is a floating-point number and is restricted by the maximum and minimum sizes of the window.
     *     The minimum ratio is the value of minimum width divided by the maximum height, and the maximum ratio is the
     *     maximum width divided by the minimum height. The maximum and minimum sizes of the window are determined by
     *     the intersection of the setting of [WindowLimits]{@link @ohos.window:window.WindowLimits} and the system
     *     limit. The system limit takes precedence over [WindowLimits]{@link @ohos.window:window.WindowLimits}. The
     *     valid range of **ratio** varies with [WindowLimits]{@link @ohos.window:window.WindowLimits}. If
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits} is set prior to **ratio**, any conflict will result in
     *     an error code when setting **ratio**. Conversely, if **ratio** is set before and then conflicts arise with
     *     the subsequently configured [WindowLimits]{@link @ohos.window:window.WindowLimits}, the window's aspect ratio
     *     may not adhere to the initially configured value of **ratio**.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Sets the aspect ratio of the window content layout (excluding decorations like borders and title bars). This API
     * uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - When the window size is set by using other APIs such as
     * > [resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)} and
     * > [resizeAsync]{@link window.Window.resizeAsync}, the window size is not restricted by **ratio**.
     * >
     * > - This setting is available only for the main window and takes effect only in floating window mode (
     * > **window.WindowStatusType.FLOATING** mode). The aspect ratio is saved persistently, which means that the
     * > setting is valid in floating window mode even after the application is closed or the device is restarted.
     * >
     * > - After the aspect ratio is set for a main window of an application, the aspect ratio is used for subsequent
     * > main windows. If you need to set the aspect ratio for just one main window, use
     * > [setContentAspectRatio]{@link window.Window.setContentAspectRatio} instead.
     *
     * @param { double } ratio - Aspect ratio of the window content layout (excluding decorations like borders and title
     *     bars). The value is a floating-point number and is restricted by the maximum and minimum sizes of the window.
     *     The minimum ratio is the value of minimum width divided by the maximum height, and the maximum ratio is the
     *     maximum width divided by the minimum height. The maximum and minimum sizes of the window are determined by
     *     the intersection of the setting of [WindowLimits]{@link @ohos.window:window.WindowLimits} and the system
     *     limit. The system limit takes precedence over [WindowLimits]{@link @ohos.window:window.WindowLimits}. The
     *     valid range of **ratio** varies with [WindowLimits]{@link @ohos.window:window.WindowLimits}. If
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits} is set prior to **ratio**, any conflict will result in
     *     an error code when setting **ratio**. Conversely, if **ratio** is set before and then conflicts arise with
     *     the subsequently configured [WindowLimits]{@link @ohos.window:window.WindowLimits}, the window's aspect ratio
     *     may not adhere to the initially configured value of **ratio**.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the aspect ratio of the window content layout (excluding decorations like borders and title bars). This API
     * uses a promise to return the result.
     *
     * > **NOTE**
     * >
     * > - When you adjust the window width and height using the same **ratio** parameter, the window size adapts to
     * > changes in the border decoration size or visibility.
     * >
     * > - When the window title bar is set to invisible by using
     * > [setWindowDecorVisible]{@link window.Window.setWindowDecorVisible}, the window content area takes over the
     * > space that was previously used by the title bar.
     * >
     * > - When the window size is set by using other APIs such as
     * > [resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)} and
     * > [resizeAsync]{@link window.Window.resizeAsync}, the window size is not restricted by **ratio**.
     * >
     * > - This setting is available only for the main window and takes effect only in floating window mode (
     * > **window.WindowStatusType.FLOATING** mode).
     *
     * @param { double } ratio - Aspect ratio of the window content layout (excluding decorations like borders and title
     *     bars). The value is a floating-point number and is restricted by the maximum and minimum sizes of the window.
     *     The minimum ratio is the value of minimum width divided by the maximum height, and the maximum ratio is the
     *     maximum width divided by the minimum height. The maximum and minimum sizes of the window are determined by
     *     the intersection of the setting of [WindowLimits]{@link @ohos.window:window.WindowLimits} and the system
     *     limit. The system limit takes precedence over [WindowLimits]{@link @ohos.window:window.WindowLimits}. The
     *     valid range of **ratio** varies with [WindowLimits]{@link @ohos.window:window.WindowLimits}. If
     *     [WindowLimits]{@link @ohos.window:window.WindowLimits} is set prior to **ratio**, any conflict will result in
     *     an error code when setting **ratio**. Conversely, if **ratio** is set before and then conflicts arise with
     *     the subsequently configured [WindowLimits]{@link @ohos.window:window.WindowLimits}, the window's aspect ratio
     *     may not adhere to the initially configured value of **ratio**.
     * @param { boolean } [isPersistent] - Whether the aspect ratio should be saved persistently.<br>If this parameter
     *     is set to **true**, the aspect ratio is saved persistently. This means that the setting is valid in floating
     *     window mode even after the window is destroyed, the application is closed, or the device is restarted. You
     *     can call [resetAspectRatio]{@link window.Window.resetAspectRatio()} to clear the persistently saved aspect
     *     ratio.<br>If this parameter is set to **false**, the aspect ratio applies only to the current window and is
     *     cleared once the window is destroyed.<br>The default value is **true**.
     * @param { boolean } [needUpdateRect] - Whether the window size should be immediately updated based on the current
     *     aspect ratio.<br>If this parameter is set to **true**, the window size is updated immediately based on the
     *     current aspect ratio.<br>If this parameter is set to **false**, the window size is updated based on the
     *     current aspect ratio when the window is dragged and resized. You can manually trigger an update by calling
     *     [resize]{@link window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)} or
     *     [resizeAsync]{@link window.Window.resizeAsync}.<br>The default value is **true**.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Resets the aspect ratio of the window content layout. This API uses an asynchronous callback to return the
     * result.
     *
     * This API is valid only for the main window. After it is called, the persistently saved aspect ratio is cleared.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    resetAspectRatio(callback: AsyncCallback<void>): void;

    /**
     * Resets the aspect ratio of the window content layout. This API uses a promise to return the result.
     *
     * This API is valid only for the main window. After it is called, the persistently saved aspect ratio is cleared.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    resetAspectRatio(): Promise<void>;

    /**
     * Adds or deletes the watermark flag for this window. This API uses an asynchronous callback to return the result.
     *
     * @param { boolean } enable - Whether to add or delete the flag. **true** to add, **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Adds or deletes the watermark flag for this window. This API uses a promise to return the result.
     *
     * @param { boolean } enable - Whether to add or delete the flag. **true** to add, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Raises a child window above a target child window. This API uses an asynchronous callback to return the result.
     *
     * Before calling this API, ensure that the child window to raise and the target child window have been created and
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)} has been successfully
     * executed for each.
     *
     * @param { int } windowId - ID of the target child window, which is the value of **properties.id** in
     *     [properties]{@link @ohos.window:window.WindowProperties} obtained through
     *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Raises a child window above a target child window. This API uses a promise to return the result.
     *
     * Before calling this API, ensure that the child window to raise and the target child window have been created and
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)} has been successfully
     * executed for each.
     *
     * @param { int } windowId - ID of the target child window, which is the value of **properties.id** in
     *     [properties]{@link @ohos.window:window.WindowProperties} obtained through
     *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Moves the main window above another main window within the same application, with child windows following their
     * parents' layer change. This API uses a promise to return the result.
     *
     * This API can be called only by the main window of a system application.
     *
     * You need to pass the ID of the target main window. Both the calling window and the target window must be in the
     * same application process, displayed on the same physical screen, below the lock screen layer, not topmost, not
     * modal, and have no application-modal child windows.
     *
     * - If the application's main window or its child windows currently have focus, calling this API to lower the layer
     * will cause the window to lose focus automatically, and the highest-layered application window will gain focus.
     * - If the main window calls this API to move above the current focused window, the highest-layered window among
     * the raised main window and its child windows will gain focus. If the main window calls this API without moving
     * above the current focused window, the focus remains unchanged.
     *
     * @param { int } windowId - ID of the target main window. The value is an integer. It is the value of
     *     **properties.id** in [properties]{@link @ohos.window:window.WindowProperties} obtained through
     *     [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether to enable a child window to raise itself by click. This API uses an asynchronous callback to return
     * the result.
     *
     * Generally, when a user clicks a child window, the child window is displayed on the top. If the **enable**
     * parameter is set to **false**, the child window is not displayed on the top when being clicked.
     *
     * Before calling this API, ensure that the child window has been created and
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)} has been successfully
     * executed.
     *
     * @param { boolean } enable - Whether to enable a child window to raise itself by click. **true** to enable,
     *     **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Sets whether to enable a child window to raise itself by click. This API uses a promise to return the result.
     *
     * Generally, when a child window is clicked, it is brought to the forefront among sibling child windows of the same
     * type that share the same parent window within the application. If the **enable** parameter is set to **false**,
     * when the child window is clicked, it still stays in its existing position.
     *
     * Before calling this API, ensure that the child window has been created and
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)} has been successfully executed.
     *
     * @param { boolean } enable - Whether a child window can be raised by clicking. **true** if the child window can be
     *     raised by clicking, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether to enable the main window to raise itself by click. This API uses a promise to return the result.
     *
     * By default, clicking the main window raises both the main window and its associated child windows. Disabling this
     * feature (by passing **false**) prevents the main window and its child windows from being raised when the main
     * window is clicked, preserving their current state. However, clicking on a child window still raises both the
     * child window and the main window together.
     *
     * @param { boolean } enable - Whether to enable the main window to raise itself by click. **true** to enable,
     *     **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * The behavior of this API varies based on the caller:
     *
     * - Minimizes the main window if the caller is the main window. The main window can be restored in the dock bar.
     * For 2-in-1 devices, it can be restored by calling [restore()]{@link window.Window.restore}.
     * - Hides the child window or global floating window if the caller is a child window. The child window or floating
     * window cannot be restored in the dock bar. It can be made visible again by calling
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}.
     *
     * This API can be called only by the main window, child window, or global floating window. If it is called by other
     * windows, error code 1300002 is thrown. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * The behavior of this API varies based on the caller:
     *
     * - Minimizes the main window if the caller is the main window. The main window can be restored in the dock bar.
     * For 2-in-1 devices, it can be restored by calling [restore()]{@link window.Window.restore}.
     * - Hides the child window or global floating window if the caller is a child window. The child window or floating
     * window cannot be restored in the dock bar. It can be made visible again by calling
     * [showWindow()]{@link window.Window.showWindow(callback: AsyncCallback<void>)}.
     *
     * This API can be called only by the main window, child window, or global floating window. If it is called by other
     * windows, error code 1300002 is thrown. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Maximizes the window. The main window can use this API to maximize. For child windows, you need to set
     * **maximizeSupported** to **true** when creating the windows and then call this API to maximize. This API uses a
     * promise to return the result.
     *
     * @param { MaximizePresentation } presentation - set window presentation when maximize. [since 12 - 19]
     * @param { MaximizePresentation } [presentation] - Layout when the window is maximized.
     *     The default value is window.MaximizePresentation.ENTER_IMMERSIVE,
     *     indicating that the window enters the immersive layout when maximized. [since 20]
     * @returns { Promise<void> } Promise that returns no value.
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
     * Maximizes the window. The main window can use this API to maximize. For child windows, you need to set
     * **maximizeSupported** to **true** when creating the windows and then call this API to maximize. On 2-in-1 devices
     * with folding capabilities, you can use the **acrossDisplay** parameter to control the main window's behavior in
     * waterfall mode when maximized in the hover state. (See
     * [Semi-Folded State of Foldable Screens](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-folded-hover)
     * ). This API uses a promise to return the result.
     *
     * @param { MaximizePresentation } [presentation] - Layout when the window is maximized.
     *     The default value is window.MaximizePresentation.ENTER_IMMERSIVE,
     *     indicating that the window enters the immersive layout when maximized.
     * @param { boolean } [acrossDisplay] - Parameter controls the across-display mode policy of main windows
     *     in the half-folded state.
     *     The value true Indicates that the window could enter the across-display mode directly,
     *     and maintains the across-display mode when the device is half-folded.
     *     The default value is undefined.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Maximize the app window.
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
     *     3. The snapshotAnimationConfig parameter only supports main windows.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maximizeWithOptions(maximizeOptions?: MaximizeOptions): Promise<void>;

    /**
     * Sets whether to enable the main window or child window with decorations to resize itself by dragging. This API
     * uses an asynchronous callback to return the result.
     *
     * @param { boolean } enable - Disable window to resize by drag if false.
     * @param { AsyncCallback<void> } callback - The callback of setResizeByDragEnabled.
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
     * Sets whether to enable the main window or child window with decorations to resize itself by dragging. This API
     * uses a promise to return the result.
     *
     * @param { boolean } enable - Disable window to resize by drag if false.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the supported window modes of the app window.
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - The supported modes of the window.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Only main windows and subwindows are supported.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause:
     *     1. When called on a main window, the parameter should not only contain SPLIT.
     *     2. When called on a sub window, the parameter should not contain SPLIT.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setSupportedWindowModes(supportedWindowModes: Array<bundleManager.SupportWindowMode>): Promise<void>;

    /**
     * Sets whether to hide non-system floating windows (where [windowType]{@link @ohos.window:window.WindowType} is
     * **TYPE_FLOAT**). This API uses an asynchronous callback to return the result.
     *
     * A non-system floating window is a floating window created by a non-system application. By default, the main
     * window of a system application can be displayed together with a non-system floating window. This means that the
     * main window may be blocked by an upper-layer non-system floating window. If the **shouldHide** parameter is set
     * to **true**, all non-system floating windows are hidden, so that the main window will never be blocked by a non-
     * system floating window.
     *
     * @param { boolean } shouldHide - Whether to hide non-system floating windows. **true** to hide, **false**
     *     otherwise.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Sets whether to hide non-system floating windows (where [windowType]{@link @ohos.window:window.WindowType} is
     * **TYPE_FLOAT**). This API uses a promise to return the result.
     *
     * A non-system floating window is a floating window created by a non-system application. By default, the main
     * window of a system application can be displayed together with a non-system floating window. This means that the
     * main window may be blocked by an upper-layer non-system floating window. If the **shouldHide** parameter is set
     * to **true**, all non-system floating windows are hidden, so that the main window will never be blocked by a non-
     * system floating window.
     *
     * @param { boolean } shouldHide - Whether to hide non-system floating windows. **true** to hide, **false**
     *     otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the size limits of this application window, in px.
     *
     * @returns { WindowLimits } Window size limits.
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
     * Obtains the size limits of this application window, in vp.
     *
     * For system windows and global floating windows, the default minimum width and height are set to 1 px. The 1 vp
     * value obtained via this API represents the result after rounding calculations.
     *
     * @returns { WindowLimits } Window size limits.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    getWindowLimitsVP(): WindowLimits;

    /**
     * Sets the size limits for this window. This API uses a promise to return the result.
     *
     * By default, system size limits are provided. They are determined by the product configuration and cannot be
     * modified.
     *
     * If **setWindowLimits** has not been called, you can call [getWindowLimits]{@link window.Window.getWindowLimits}
     * or [getWindowLimitsVP]{@link window.Window.getWindowLimitsVP} to obtain the system size limits.
     *
     * @param { WindowLimits } windowLimits - Target size limits, in px or vp.
     * @returns { Promise<WindowLimits> } Promise used to return the final size limits, which are the intersection
     *     between the passed-in size limits and the system size limits.
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
     * Sets the size limits for this window. This API uses a promise to return the result.
     *
     * By default, system size limits are provided. They are determined by the product configuration and cannot be
     * modified.
     *
     * If **setWindowLimits** has not been called, you can call [getWindowLimits]{@link window.Window.getWindowLimits}
     * or [getWindowLimitsVP]{@link window.Window.getWindowLimitsVP} to obtain the system size limits.
     *
     * @param { WindowLimits } windowLimits - Target size limits, in px or vp.
     * @param { boolean } isForcible - Whether to forcibly set the window size limits.<br>When the unit of the input
     *     parameter [windowLimits]{@link @ohos.window:window.WindowLimits} is vp, the process is performed based on
     *     value **false** regardless of whether **isForcible** is set to **true** or **false**. The minimum and maximum
     *     values of the window width and height depend on the system limit.<br>When the unit of the input parameter
     *     [windowLimits]{@link @ohos.window:window.WindowLimits} is px: If **isForcible** is set to **true**, the
     *     minimum width and height of the window are subject to the smaller value between the system limit and 40 vp,
     *     and the maximum width and height of the window are subject to the system limit. If **isForcible** is set to
     *     **false**, the minimum and maximum widths and heights of the window are subject to the system limit.
     * @returns { Promise<WindowLimits> } Promise used to return the new window size limits.
     *     <br>If the unit of the input parameter [windowLimits]{@link @ohos.window:window.WindowLimits} is vp, the
     *     intersection of the input parameter and the default window size limit of the system is returned.
     *     <br>If the unit of the input parameter [windowLimits]{@link @ohos.window:window.WindowLimits} is px: The
     *     intersection of the input parameter and the default window size limit of the system is returned when
     *     **isForcible** is set to **false**. The intersection of the input parameter and
     *     [the smaller value between the system limit and 40 vp, the maximum value of the system limit] is returned
     *     when **isForcible** is set to **true**.
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
     * Enables or disables the single-frame composer. This API uses a promise to return the result.
     *
     * The single-frame composer is mainly used in scenarios that require extremely low interaction latency. It reduces
     * the screen display latency of the rendering node.
     *
     * @param { boolean } enable - Whether to enable the single-frame composer. **true** to enable, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Determines whether to retain the soft keyboard created by another window when the current window gains focus.
     * This API is only supported by system windows and application child windows.
     *
     * @param { boolean } keepKeyboardFlag - Whether to keep the soft keyboard created by others. **true** to keep,
     *     **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause: Only float windows, subwindows, dialog windows, or window type as system windows are supported.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    keepKeyboardOnFocus(keepKeyboardFlag: boolean): void;

    /**
     * Restores the main window from the full-screen, maximized, or split-screen mode to a floating window (
     * **window.WindowStatusType.FLOATING** mode), and restores the window size and position to those before the full-
     * screen, maximized, or split-screen mode is entered. If the main window is already in the floating window mode,
     * nothing will happen. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * @param { WindowSnapshotAnimationConfig } snapshotAnimationConfig - The configuration of snapshot animation.
     * @returns { Promise<void> } - Promise that returns no value.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed;
     *     2. Internal task error;
     *     3. The window does not support floating mode.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     1. The snapshotAnimationConfig parameter only supports main windows.
     * @throws { BusinessError } 1300016 - Parameter error. Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    recover(snapshotAnimationConfig: WindowSnapshotAnimationConfig): Promise<void>;

    /**
     * Restores the main window from minimization to the foreground, returning it to its size and position before it is
     * minimized. This API takes effect only when the main window is minimized and the UIAbility is in the onForeground
     * state. If the main window is already in the foreground, this API simply raises the window's layer. This API uses
     * a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Restores the main window of the current window to the foreground. If the main window is already in the foreground
     * , the main window level is raised. This API is applicable only to
     * [TYPE_FLOAT]{@link @ohos.window:window.WindowType} windows and can be called only after the
     * [DOWN]{@link DOWN} event is triggered in the windows. This API uses a
     * promise to return the result.
     *
     * @param { Record<string, Object> } [wantParameters] - Want parameters.
     *     Custom want parameter delivered when restoring the main window.
     *     Want parameters are used for UIAbility onNewWant.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether the title bar is visible in the window. This API takes effect for the window that has a title bar or
     * a three-button area. In the stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * When the window title bar is hidden and the main window transitions into full-screen mode, hovering the cursor
     * over the hot zone of the top window's title bar will cause a floating title bar to appear. To prevent the
     * floating title bar from appearing, call
     * [setTitleAndDockHoverShown()]{@link window.Window.setTitleAndDockHoverShown}.
     *
     * @param { boolean } isVisible - Whether the title bar is visible. **true** if visible, **false** otherwise.
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
     * Checks whether the title bar of this window is visible. In the stage model, this API must be used after the call
     * of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @returns { boolean } Check result for whether the title bar is visible. **true** if visible, **false** otherwise.
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
     * Enables or disables the capability to move the window (either main window or child window) by dragging its title
     * bar and to maximize the window with a double-click. When this capability is disabled, you can use
     * [startMoving()]{@link window.Window.startMoving()} to move the window by dragging in the application's hot zone
     * and use [maximize()]{@link window.Window.maximize(presentation?: MaximizePresentation)} to maximize the window.
     * In the stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { boolean } enabled - Whether to enable the capability to move the window by dragging the title bar and to
     *     maximize the window with a double-click. **true** to enable, **false** otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleMoveEnabled(enabled: boolean): void;

    /**
     * Sets the window title. This API uses a promise to return the result. In the stage model, this API must be used
     * after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { string } titleName - Window title. The title display area should not go past the left side of the three-
     *     button area of the system. Any part that goes beyond will show as an ellipsis.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Enables the modal property of the child window. This API uses a promise to return the result.
     *
     * This API must be called by a child window and the setting takes effect for the child window. After the modal
     * property is enabled, the parent window does not respond to user interactions until the child window is closed or
     * the child window's modal property is disabled.
     *
     * If this API is called by a main window, an error is reported.
     *
     * @param { boolean } isModal - Whether to enable the modal property of the child window. **true** to enable,
     *     **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the modality type of the child window. This API uses a promise to return the result.
     *
     * When the child window is of the window-modal type, its parent window does not respond to user interactions until
     * the child window is closed or the child window's modal property is disabled.
     *
     * When the child window is of the application-modal type, its parent window and the windows from other instances of
     * the application do not respond to user interactions until the child window is closed or the child window's modal
     * property is disabled.
     *
     * This API is used to set the modality type. To disable the modal property, you are advised to use
     * [setSubWindowModal<sup>12+</sup>]{@link window.Window.setSubWindowModal(isModal: boolean)}.
     *
     * If this API is called by a window other than the child window, an error is reported.
     *
     * @param { boolean } isModal - Whether to enable the modal property of the child window. **true** to enable,
     *     **false** otherwise. Currently, this parameter can only be set to **true**.
     * @param { ModalityType } modalityType - Modality type of the child window.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the height of the title bar of this window. This API takes effect for the window that has a title bar and a
     * three-button area. In the stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * For tablets, if this API is called outside of
     * [free windows](docroot://windowmanager/window-terminology.md#free-windows) mode, the change applies once the
     * device switches to free windows mode. If this API is called in free windows mode, the change takes effect
     * immediately.
     *
     * When the main window transitions into full-screen mode, hovering the mouse over the hot zone of the window's
     * title bar region will cause a floating title bar to appear, with a fixed height of 37 vp.
     *
     * @param { int } height - Height of the title bar. It takes effect only for the window with the title bar. The
     *     value is an integer in the range [37,112]. The unit is vp. If a floating-point number is passed in, the value
     *     is rounded down. A value outside the range is invalid.
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
     * Obtains the height of the title bar of this window. This API takes effect for the window that has a title bar and
     * a three-button area. In the stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @returns { int } Height of the title bar. The value is an integer in the range [37,112]. The unit is vp.
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
     * Sets the button style of the decoration bar. The setting takes effect only for the main window and child windows.
     * In the stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { DecorButtonStyle } dectorStyle - Button style of the decoration bar.
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
     * Obtains the button style of the decoration bar. The setting takes effect only for the main window and child
     * windows.
     *
     * @returns { DecorButtonStyle } Button style on the decoration bar of the current window. The decoration button
     *     area is located in the top-right corner of the window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    getDecorButtonStyle(): DecorButtonStyle;

    /**
     * Sets the touchable areas for this window. By default, the entire window is touchable. If a touchable area is set,
     * touch events outside this area are transparently transmitted. The setting becomes invalid after the window
     * rectangle changes.
     *
     * @permission ohos.permission.SET_WINDOW_TOUCH_AREAS [since 26.0.0]
     * @param { Array<Rect> } rects - Touchable areas. The maximum number of touchable areas cannot exceed 10, and each
     *     touchable area cannot exceed the window area.
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
     * Obtains the rectangle that holds the minimize, maximize, and close buttons on the title bar of the main window or
     * the decorated child window.
     *
     * @returns { TitleButtonRect } Rectangle obtained, which is located in the top-right corner of the window.
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
     * Shows or hides the maximize, minimize, and split-screen buttons on the title bar of the main window.
     *
     * This API takes effect only for the title bar buttons (maximize, minimize, and split-screen) that are available in
     * the current scenario.
     *
     * @param { boolean } isMaximizeVisible - Whether to show the maximize button. **true** to show, **false**
     *     otherwise.
     * @param { boolean } isMinimizeVisible - Whether to show the minimize button. **true** to show, **false**
     *     otherwise.
     * @param { boolean } isSplitVisible - Whether to show the split-screen button. **true** to show, **false**
     *     otherwise.
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
     * Shows or hides the maximize, minimize, and close buttons on the title bar of the main window.
     *
     * @param { boolean } isMaximizeButtonVisible - Whether to show the maximize button. **true** to show, **false**
     *     otherwise. If the maximize button is hidden, the corresponding restore button is also hidden in the maximize
     *     scenario.
     * @param { boolean } isMinimizeButtonVisible - Whether to show the minimize button. **true** to show, **false**
     *     otherwise.
     * @param { boolean } isCloseButtonVisible - Whether to show the close button. **true** to show, **false**
     *     otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     *     Possible cause: The window is not created or destroyed.
     * @throws { BusinessError } 1300004 - Unauthorized operation.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    setWindowTitleButtonVisible(isMaximizeButtonVisible: boolean, isMinimizeButtonVisible: boolean, isCloseButtonVisible?: boolean): void;

    /**
     * Enables the landscape multi-window mode for the UI page that supports the horizontal layout. You are not advised
     * to call this API for the UI page that adopts the vertical layout.
     *
     * This API takes effect only for the main window of the application. In addition, **preferMultiWindowOrientation**
     * must be set to **landscape_auto** in the
     * [abilities](docroot://quick-start/module-configuration-file.md#abilities) tag in the **module.json5** file.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    enableLandscapeMultiWindow(): Promise<void>;

    /**
     * In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, this API takes effect
     * for system windows, application main windows, application child windows, global floating windows, and modal
     * windows. In non-freeform window mode, this API takes effect only for system windows, application child windows,
     * global floating windows, and modal windows. Starts moving this window. This API uses a promise to return the
     * result.
     *
     * The window moves along with the cursor or touch point only when this API is called in the callback function of
     * [onTouch]{@link TouchEvent}, where the event type is **TouchType.Down**.
     *
     * In click-and-drag scenarios, if you do not want the drag to start as soon as you press down, you can call this
     * API when the event type is [TouchType.Move]{@link TouchType} (as long as
     * **TouchType.Down** has already been triggered) to start the moving effect.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Starts moving this window.
     * The window moves along with the cursor only when this API is called in the callback function of onTouch,
     * where the event type is TouchType.Down.
     *
     * @param { StartMovingOptions } [startMovingOptions] - The move configuration during drag-moving.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300001 - Repeated operation.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     1. The window is not created or destroyed.
     *     2. Internal task error.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @throws { BusinessError } 1300004 - Unauthorized operation. Possible cause:
     *     Invalid window type, main windows are not supported in non-free window mode.
     * @throws { BusinessError } 1300016 - Parameter error.
     *     Possible cause: Invalid parameter range.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startMovingWithOptions(startMovingOptions?: StartMovingOptions): Promise<void>;

    /**
     * Specifies the cursor position within the window and moves the window. This API uses a promise to return the
     * result.
     *
     * When windows within the same application are split or merged, and the mouse is pressed down to move the new
     * window directly, the cursor may move outside the window if it moves too quickly. This API allows you to set the
     * cursor position within the window during movement. It first adjusts the window to the cursor position before
     * starting to move the window.
     *
     * The window moves along with the cursor only when this API is called in the callback function of
     * [onTouch]{@link TouchEvent}, where the event type is **TouchType.Down**.
     *
     * In click-and-drag scenarios, if you do not want the drag to start as soon as you press down, you can call this
     * API when the event type is [TouchType.Move]{@link TouchType} (as long as
     * **TouchType.Down** has already been triggered) to start the moving effect.
     *
     * @param { int } offsetX - X-axis offset of the cursor position relative to the top-left corner of the window
     *     during movement, measured in px. This parameter only accepts integer values; any floating-point input will be
     *     rounded down. Negative values or values exceeding the window width are invalid. The window width can be
     *     obtained from [WindowProperties]{@link @ohos.window:window.WindowProperties}.
     * @param { int } offsetY - Y-axis offset of the cursor position relative to the top-left corner of the window
     *     during movement, measured in px. This parameter only accepts integer values; any floating-point input will be
     *     rounded down. Negative values or values exceeding the window height are invalid. The window height can be
     *     obtained from [WindowProperties]{@link @ohos.window:window.WindowProperties}.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Stops window movement when a window is being dragged. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Enables or disables window dragging. This API takes effect only for system windows, application child windows,
     * global floating windows, and modal windows. This API uses a promise to return the result.
     *
     * After window dragging is enabled, the window can be resized using the mouse or touch operations.
     *
     * @param { boolean } enable - The value true means to enable window dragging, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Disables the landscape multi-window mode for the UI page that supports the horizontal layout.
     *
     * This API takes effect only for the main window of the application. In addition, **preferMultiWindowOrientation**
     * must be set to **landscape_auto** in the
     * [abilities](docroot://quick-start/module-configuration-file.md#abilities) tag in the **module.json5** file.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws {BusinessError} 1300002 - This window state is abnormal.
     * @throws {BusinessError} 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    disableLandscapeMultiWindow(): Promise<void>;

    /**
     * Subscribes to the change event of the rectangle that holds the minimize, maximize, and close buttons on the title
     * bar of the window. This API takes effect for the window that has a title bar or a three-button area. In the stage
     * model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { 'windowTitleButtonRectChange' } type - Event type. The value is fixed at
     *     **'windowTitleButtonRectChange'**, indicating that the change event of the rectangle that holds the minimize,
     *     maximize, and close buttons.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the new rectangle.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
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
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowTitleButtonRectChange(callback: Callback<TitleButtonRect>): void;

    /**
     * Unsubscribes from the change event of the rectangle that holds the minimize, maximize, and close buttons on the
     * title bar of the window. This API takes effect for the window that has a title bar or a three-button area. In the
     * stage model, this API must be used after the call of
     * [loadContent]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} takes effect.
     *
     * @param { 'windowTitleButtonRectChange' } type - Event type. The value is fixed at
     *     **'windowTitleButtonRectChange'**, indicating that the change event of the rectangle that holds the minimize,
     *     maximize, and close buttons.
     * @param { Callback<TitleButtonRect> } callback - Callback used to return the new rectangle. If a value is passed
     *     in, the corresponding subscription is canceled. If no value is passed in, all subscriptions to the specified
     *     event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Incorrect parameter types;
     *     2. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
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
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowTitleButtonRectChange(callback?: Callback<TitleButtonRect>): void;

    /**
     * Sets a mask for this window to get an irregularly shaped window. This API uses a promise to return the result.
     * The mask is used to describe the shape of the irregularly shaped window. This API is available only for child
     * windows and global floating windows.
     *
     * When the size of an irregularly shaped window changes, the actual display content is the intersection of the mask
     * size and the window size.
     *
     * Error code 1300002 may be returned only when multiple threads operate the same window. Error code 401 is returned
     * when the window is destroyed.
     *
     * @param { Array<Array<long>> } windowMask - Mask. The value can only be a two-dimensional array containing the
     *     window size in pixels, with each element in the array set to either **0** or **1**. The value **0** indicates
     *     that the pixel is transparent, and **1** indicates that the pixel is opaque. If the passed-in pixel array
     *     does not match the window size or the value of any element in the array is not **0** or **1**, the value is
     *     invalid.
     * @returns { Promise<void> } Promise that returns no value.
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
     *  Set the window mask using a per-pixel alpha array
     *
     * @param { Uint8Array } windowMask - The windowMask contains only per-pixel alpha transparency values.
     *     Valid range: 0(full transparent) to 255(full opaque), size must equal (maskWidth * maskHeight).
     * @param { int } maskWidth - Mask width in pixels. Must equal the target window width.
     * @param { int } maskHeight - Mask height in pixels. Must equal the target window height.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Clear the window mask of window
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Subscribes to window rectangle (position and size) change events.
     *
     * @param { 'windowRectChange' } type - Event type. The value is fixed at **'windowRectChange'**, indicating the
     *     window rectangle change event.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the value and reason of the window
     *     rectangle change.
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
     * Subscribes to window rectangle (position and size) change events.
     *
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the value and reason of the window
     *     rectangle change.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onWindowRectChange(callback: Callback<RectChangeOptions>): void;

    /**
     * Unsubscribes from window rectangle (position and size) change events.
     *
     * @param { 'windowRectChange' } type - Event type. The value is fixed at **'windowRectChange'**, indicating the
     *     window rectangle change event.
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the value and reason of the window
     *     rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed
     *     in, all subscriptions to the specified event are canceled.
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
     * Unsubscribes from window rectangle (position and size) change events.
     *
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the value and reason of the window
     *     rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed
     *     in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offWindowRectChange(callback?: Callback<RectChangeOptions>): void;

    /**
     * Enables the listening event for changes in the window rectangle (window position and size) in the
     * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
     *
     * @param { 'rectChangeInGlobalDisplay' } type - Event type. The value is fixed at **'rectChangeInGlobalDisplay'**,
     *     indicating the window rectangle change event in the global coordinate system.
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the value and reason of the window
     *     rectangle change.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    on(type: 'rectChangeInGlobalDisplay', callback: Callback<RectChangeOptions>): void;

    /**
     * Enables the listening event for changes in the window rectangle (window position and size) in the
     * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
     *
     * @param { Callback<RectChangeOptions> } callback - Callback used to return the value and reason of the window
     *     rectangle change.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onRectChangeInGlobalDisplay(callback: Callback<RectChangeOptions>): void;

    /**
     * Disables the listening event for changes in the window rectangle (window position and size) in the
     * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
     *
     * @param { 'rectChangeInGlobalDisplay' } type - Event type. The value is fixed at **'rectChangeInGlobalDisplay'**,
     *     indicating the window rectangle change event in the global coordinate system.
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the value and reason of the window
     *     rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed
     *     in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     */
    off(type: 'rectChangeInGlobalDisplay', callback?: Callback<RectChangeOptions>): void;

    /**
     * Disables the listening event for changes in the window rectangle (window position and size) in the
     * [global coordinate system](docroot://windowmanager/window-terminology.md#global-coordinate-system).
     *
     * @param { Callback<RectChangeOptions> } [callback] - Callback used to return the value and reason of the window
     *     rectangle change. If a value is passed in, the corresponding subscription is canceled. If no value is passed
     *     in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offRectChangeInGlobalDisplay(callback?: Callback<RectChangeOptions>): void;

    /**
     * Converts relative coordinates (based on the top-left corner of the current window) into global coordinates (based
     * on the top-left corner of the primary screen).
     *
     * This API is not supported in windows that are subject to display scaling, such as floating windows on phones or
     * tablets not in free windows mode.
     *
     * @param { int } winX - Offset along the X-axis, in pixels, with the top-left corner of the current window as the
     *     origin. A positive value moves the window to the right; a negative value moves it to the left.
     *     The value must be an integer. Non-integer values are rounded down.
     * @param { int } winY - Offset along the Y-axis, in pixels, with the top-left corner of the current window as the
     *     origin. A positive value moves the window downward; a negative value moves it upward.
     *     The value must be an integer. Non-integer values are rounded down.
     * @returns { Position } Coordinates after conversion.
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
     * Converts global coordinates (based on the top-left corner of the primary screen) into relative coordinates (based
     * on the top-left corner of the current window).
     *
     * This API is not supported in windows that are subject to display scaling, such as floating windows on phones or
     * tablets not in free windows mode.
     *
     * @param { int } globalDisplayX - Offset along the X-axis, in pixels, with the top-left corner of the current window
     *     as the origin. A positive value moves the window to the right; a negative value moves it to the left.
     *     The value must be an integer. Non-integer values are rounded down.
     * @param { int } globalDisplayY - Offset along the Y-axis, in pixels, with the top-left corner of the current window
     *     as the origin. A positive value moves the window downward; a negative value moves it upward.
     *     The value must be an integer. Non-integer values are rounded down.
     * @returns { Position } Coordinates after conversion.
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
     * Sets the grayscale effect for this window. This API uses a promise to return the result. This API can be called
     * only after
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)} is called.
     *
     * @param { double } grayScale - The value of gray scale.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether to enable the immersive layout for the main window. This API does not change the window mode or
     * size. It can be called only by the main window and child windows.
     *
     * @param { boolean } enabled - Whether to enable the immersive layout.<br>**true** to enable, **false** otherwise.<
     *     br>
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
     * Checks whether the immersive layout is enabled for this window.
     *
     * This API can be called only by the main window and child windows.
     *
     * The return value is consistent with the settings applied via
     * [setImmersiveModeEnabledState()]{@link window.Window.setImmersiveModeEnabledState} and
     * [setWindowLayoutFullScreen()]{@link window.Window.setWindowLayoutFullScreen(isLayoutFullScreen: boolean)}. If
     * neither of these APIs has been called, the default return value is **false**.
     *
     * @returns { boolean } - The value true means the immersive mode is enabled, and false means the opposite.
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
     * Checks whether this window is in immersive mode.
     *
     * @returns { boolean } The value true means that the layout is immersive, and false means the opposite.
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
     * Obtains the mode of this window.
     *
     * > **NOTE**
     * >
     * > In [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode, when the window is
     * > maximized (covering the entire screen, with a dock bar and status bar on 2-in-1 devices, and a status bar on
     * > tablets), the return value differs based on the
     * > [targetAPIVersion](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) setting. For
     * > versions below 14, the return value is **WindowStatusType::FULL_SCREEN**. For versions 14 and above, the return
     * > value is **WindowStatusType::MAXIMIZE**.
     *
     * @returns { WindowStatusType } Window mode.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getWindowStatus(): WindowStatusType;

    /**
     * Checks whether this window is focused.
     *
     * @returns { boolean } Check result for whether the window is focused. **true** if focused, **false** otherwise.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The window is not created or destroyed.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isFocused(): boolean;

    /**
     * Creates a child window under the main window, another child window, or floating window. This API uses a promise
     * to return the result.
     *
     * @param { string } name - Name of the child window.
     * @param { SubWindowOptions } options - Parameters used for creating the child window. If **decorEnabled** is set
     *     to true, the child window does not use an
     *     [immersive layout](docroot://windowmanager/window-terminology.md#immersive-layout). If **decorEnabled** is
     *     set to **false**, the child window uses an immersive layout.
     * @returns { Promise<Window> } Promise used to used to return the child window created.
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
     * Sets a new parent window for this child window. The new parent window can be a main window, another child window,
     * or a floating window in the same process. This API uses a promise to return the result.
     *
     * If the child window is focused and the new parent window is in the foreground, the new parent window will be
     * raised.
     *
     * If the child window is focused and the new parent window has a modal child window with a higher level, the focus
     * will be transferred to that modal child window.
     *
     * @param { int } windowId - Parent window ID, which must be an integer. You are advised to call
     *     [getWindowProperties()]{@link window.Window.getWindowProperties} to obtain the parent window ID.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the parent window of this child window.
     *
     * @returns { Window } Parent window.
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
     * Sets whether a child window can span multiple screens and be simultaneously displayed while its parent window is
     * being dragged or resized. This API uses a promise to return the result.
     *
     * By default, when a child window follows its parent window's layout changes (by using
     * [moveWindowTo()]{@link window.Window.moveWindowTo(x: int, y: int, callback: AsyncCallback<void>)}), it does not
     * support spanning multiple screens and being simultaneously displayed.
     *
     * However, calling this API on the child window enables it to span multiple screens and be simultaneously displayed
     * during the layout adjustment process.
     *
     * @param { boolean } enabled - The value true means sub window supports simultaneous display on multiple screens
     *     when the parent window
     *     is dragged to move or dragged to zoom, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether to show the window title bar and dock bar when the cursor hovers over the hot zone while the main
     * window is in full-screen mode. This API uses a promise to return the result.
     *
     * @param { boolean } isTitleHoverShown - Whether to show the window title bar.<br>**true** to show, **false**
     *     otherwise. The default value is **true**.<br>
     * @param { boolean } isDockHoverShown - Whether to show the dock bar.<br>**true** to show, **false** otherwise. The
     *     default value is **true**.<br>
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the background color of the main window container for both when it has focus and when it does not. In the
     * stage model, you need to call this API after
     * [loadContent()]{@link window.Window.loadContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>)}
     * or [setUIContent()]{@link window.Window.setUIContent(path: string, callback: AsyncCallback<void>)}.
     *
     * The background color you set here covers the entire window, including both the title bar and the content area. If
     * you also use [setWindowBackgroundColor()]{@link window.Window.setWindowBackgroundColor}, the content area shows
     * the window background color, whereas the title bar shows the container background color.
     *
     * @permission ohos.permission.SET_WINDOW_TRANSPARENT
     * @param { string } activeColor - window container color in active.
     * @param { string } inactiveColor - window container color in inactive.
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
     * Sets whether to enable delayed raising for the window. This API takes effect only for the main window and child
     * windows.
     *
     * If this API is not called or **false** is passed, the main window and child windows are raised immediately upon a
     * left mouse button press by default.
     *
     * When this API is called to enable delayed raising, in cross-window drag-and-drop situations, the window that
     * contains the draggable component does not raise until the left mouse button is released, rather than raising
     * immediately when the button is pressed.
     *
     * @param { boolean } isEnabled - Whether to enable delayed raising.<br>**true** to enable, **false** otherwise.
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
     * Obtains the z-level of the current child window. This API cannot be called by the main window or system window.
     *
     * @returns { int } Z-level of the child window.
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
     * Allows a [system window](docroot://windowmanager/window-terminology.md#system-window) to lock or unlock its own
     * screen-rotation behavior. When locked, the window's orientation remains unchanged. When unlocked, the window's
     * orientation follows the main window's orientation, the system rotation-lock button, and the device's physical
     * rotation sensor. If this API is called by a non-system window, error code 1300029 is thrown. This API uses a
     * promise to return the result.
     *
     * > **NOTE**
     * >
     * > - If the main window sets the display orientation via
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > while rotation is locked, the window restores the last orientation request when brought to the foreground after
     * > unlocking.
     * >
     * > - If the system window sets the display orientation via
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > while rotation is locked, the window restores the last orientation request when brought to the foreground with
     * > the highest level after unlocking. The rotation lock set by a lower-level window using **setRotationLocked**
     * > does not hinder the system window at a higher level to set the display orientation by calling
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > .
     * >
     * > - If the sensor orientation changes while rotation is locked, the last sensor orientation is restored after
     * > unlocking.
     * >
     * > - If the application calls
     * > [setOrientation()]{@link @ohos.screen:screen.Screen.setOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > to set the screen orientation while rotation is locked, that screen?orientation setting is ignored.
     * >
     * > - When rotation is unlocked, the application's display orientation is determined based on the main window's
     * > display orientation set via
     * > [setPreferredOrientation()]{@link @ohos.window:window.Window.setPreferredOrientation(orientation: Orientation, callback: AsyncCallback<void>)}
     * > , the sensor orientation, and more. For details, see
     * > [Window Rotation Overview](docroot://windowmanager/window-rotation.md#overview).
     * >
     * > - The API does not affect the launch orientation set by the **orientation** under
     * > [**abilities** in the module.json5 file](docroot://quick-start/module-configuration-file.md#abilities) of the
     * > application.
     *
     * @param { boolean } locked - Whether to lock the rotation. **true** to lock, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Checks whether the [system window](docroot://windowmanager/window-terminology.md#system-window) has its screen
     * rotation locked. If this API is called by a non-system window, error code 1300029 is thrown.
     *
     * @returns { boolean } Check result for whether rotation is currently locked for this system window. **true** if
     *     locked, **false** otherwise.
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
     * Sets whether the current window supports the event separation state. This API uses a promise to return the
     * result. In the default scenario, the value of **enabled** is **true**, indicating that the event separation state
     * is supported.
     *
     * When the event separation state is supported:
     *
     * - All events generated by finger taps are sent to the window that the finger taps hit.
     *
     * When the event separation state is not supported (the value of **enabled** is **false**):
     *
     * - If the first finger taps the window, keeps hitting the window, and does not lift up, the events generated by
     * subsequent taps of other fingers are distributed to the window, regardless of whether the taps of other fingers
     * hit the window.
     * - If the first finger taps the window and does not keep hitting the window, the events generated by subsequent
     * taps of other fingers are not distributed to the window and are discarded by the system, even if the taps of
     * other fingers hit the window.
     *
     * @param { boolean } enabled - Whether the window supports the event separation state. **true** if supported;
     *     **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains whether the current window supports the event separation state.
     *
     * @returns { boolean } Whether the current window supports the event separation state.
     *     <br>**true** if support; **false** otherwise.
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
     * Sets whether the current window can receive [drag events]{@link DragEvent}. This
     * API uses a promise to return the result.
     *
     * By default, the value of **enabled** is **true**, indicating that the window can receive drag events.
     *
     * If the value of **enabled** is **false**, the current window cannot receive drag events.
     *
     * @param { boolean } enabled - Whether the window can receive drag events. **true** if the window can receive drag
     *     events; **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains whether the current window can receive [drag events]{@link DragEvent}.
     *
     * @returns { boolean } Whether the current window can receive drag events.
     *     <br>**true** if the current window can receive drag events; **false** otherwise.
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
     * Enables conversion between window orientation, screen orientation, and screen angle.
     *
     * Window orientation refers to the direction of the screen where the window resides, using the Window module's
     * definitions for portrait and landscape modes. Window orientations are represented by the digits 0, 1, 2, and 3,
     * corresponding to portrait, reverse landscape, reverse portrait, and landscape, respectively. These definitions
     * match those in [RotationChangeInfo]{@link @ohos.window:window.RotationChangeInfo} and the
     * [Orientation]{@link @ohos.window:window.Orientation} enum. For example, setting **Orientation** to **LANDSCAPE**
     * indicates a landscape window orientation.
     * > **NOTE**
     * >
     * > The following figure and table show the relationship between the window orientation, screen orientation, and
     * > screen angle of a bar-type device.
     * >
     * > ![orientationAndRotation](figures/orientationAndRotation.PNG)
     * >
     * | Screen Angle| Screen Orientation| Window Orientation|
     * | -------  | ------- | ------- |
     * | 0        | PORTRAIT  | PORTRAIT   |
     * | 90       | LANDSCAPE | LANDSCAPE_INVERTED |
     * | 180      | PORTRAIT_INVERTED | PORTRAIT_INVERTED |
     * | 270      | LANDSCAPE_INVERTED | LANDSCAPE |
     *
     * @param { RotationInfoType } from - Type of the value to convert.
     * @param { RotationInfoType } to - Type of the target value.
     * @param { int } value - Value to convert. The value is an integer. If a floating-point number is entered, the
     *     value is rounded down. The value range is [0, 3]. If the value is out of the range, it is an invalid
     *     parameter (error code [401](docroot://reference/errorcode-universal.md#401-parameter-check-failed) is thrown)
     *     .
     * @returns { int } Converted value of the target type.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 dynamic&static
     */
    convertOrientationAndRotation(from: RotationInfoType, to: RotationInfoType, value: int): int;

    /**
     * Sets the keyframe policy for dragging the main window. This API uses a promise to return the result.
     *
     * If this API is called by a non-main window, error code 1300004 is returned.
     *
     * @param { KeyFramePolicy } keyFramePolicy - The policy of keyframe to set.
     * @returns { Promise<KeyFramePolicy> } Promise used to return the keyframe policy that takes effect.
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
     * Checks whether this window is in [freeform window](docroot://windowmanager/window-terminology.md#freeform-window)
     * mode.
     *
     * @returns { boolean } Check result for whether the window is in freeform window mode. **true** if the window is in
     *     freeform window mode, **false** otherwise.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    isInFreeWindowMode(): boolean;

    /**
     * Subscribes to the freeform window mode change event.
     *
     * @param { 'freeWindowModeChange' } type - Event type. The value is fixed at **'freeWindowModeChange'**, indicating
     *     the freeform window mode change event.
     * @param { Callback<boolean> } callback - Callback used to return the result, indicating whether the window is in
     *     freeform window mode. **true** if the window is in freeform window mode, **false** otherwise.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 22 dynamic
     */
    on(type: 'freeWindowModeChange', callback: Callback<boolean>): void;

    /**
     * Unsubscribes from the freeform window mode change event.
     *
     * @param { 'freeWindowModeChange' } type - Event type. The value is fixed at **'freeWindowModeChange'**, indicating
     *     the freeform window mode change event.
     * @param { Callback<boolean> } [callback] - Callback used to return the result, indicating whether the window is in
     *     freeform window mode. If a value is passed in, the corresponding subscription is canceled. If no value is
     *     passed in, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
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
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
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
     * @throws { BusinessError } 1300003 - This window manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 23 static
     */
    offFreeWindowModeChange(callback?: Callback<boolean>): void;

    /**
     * Adds a transition animation to windows in specific scenarios.
     *
     * Currently, this API can be used only on the main window of an application.
     *
     * @param { WindowTransitionType } transitionType - Scene of the transition animation. Currently, only the
     *     destruction scene is supported.
     * @param { TransitionAnimation } animation - Configuration of the transition animation.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the window transition animation configuration in a specific scenario.
     *
     * Currently, this API can be used only on the main window of an application.
     *
     * @param { WindowTransitionType } transitionType - Scene of the transition animation. Currently, only the
     *     destruction scene is supported.
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
     * Sets the z-level of the current child window. Child windows with modal properties are not supported. This API
     * uses a promise to return the result.
     *
     * Changing the z-level of a child window using this API will not cause a focus switch. You are advised to use
     * [shiftAppWindowFocus()]{@link @ohos.window:window.shiftAppWindowFocus} for focus switching.
     *
     * @param { int } zLevel - Z-level of the child window. The default value is **0**, and the value range is
     *     [-10000, 10000]. Only integers are supported, and floating-point numbers will be rounded down.
     * @returns { Promise<void> } Promise that returns no value.
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
   * Enumerates the lifecycle event types of a WindowStage.
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
     * The WindowStage is shown in the foreground, for example, when launching from the application icon, triggered
     * whether it is the first launch or resuming from the background.
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
     * The WindowStage gains focus, for example, the state of the application window after handling a click event, or
     * the state after the application is launched.
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
     * The WindowStage loses focus, for example, the state of the window that was in focus when a new application is
     * opened or another window is clicked.
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
     * The WindowStage is running in the background, for example, when the application exists after swiping up or the
     * application window is closed.
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
     * The WindowStage is in the foreground and interactive, for example, when the application is open and can interact
     * with the user.
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
     * The WindowStage is in the foreground but not interactive, for example, when the application is in the foreground
     * and is entering the multitasking screen.
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
   * Enumerates the lifecycle state types of a WindowStage.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum WindowStageLifecycleEventType {
    /**
     * The WindowStage is shown in the foreground, for example, when launching from the application icon, triggered
     * whether it is the first launch or resuming from the background.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SHOWN = 1,
    /**
     * The WindowStage is in the foreground and interactive, for example, when the application is open and can interact
     * with the user.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    RESUMED = 2,
    /**
     * The WindowStage is in the foreground but not interactive, for example, when the application is in the foreground
     * and is entering the multitasking screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    PAUSED = 3,
    /**
     * The WindowStage is running in the background, for example, when the application exists after swiping up or the
     * application window is closed.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    HIDDEN = 4
  }

  /**
   * Enumerates the modality types of the child window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  enum ModalityType {
    /**
     * Select this value when only the parent window should not respond to user operations.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    WINDOW_MODALITY = 0,
    /**
     * Select this value when other instances of the application should also not respond to user operations.
     *
     * This enumeration can be called properly on a device that supports
     * [freeform windows](docroot://windowmanager/window-terminology.md#freeform-window) and is in the freeform window
     * state. If the device does not support freeform windows, or if the device supports freeform windows but is not in
     * the freeform window state, error code 801 is returned.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    APPLICATION_MODALITY = 1
  }

  /**
   * Describes the parameters for displaying a child window or system window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  interface ShowWindowOptions {
    /**
     * Whether the window automatically gains focus when
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(options: ShowWindowOptions)} is called. The default
     * value is **true**. This parameter does not take effect for the main window, modal window, and dialog boxes.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    focusOnShow?: boolean;
  }

  /**
   * Describes the parameters used for creating a child window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  interface SubWindowOptions {
    /**
     * Title of the child window. The title display area should not go past the left side of the three-button area of
     * the system. Any part that goes beyond will show as an ellipsis.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    title: string;
    /**
     * Whether decorations are displayed in the child window. **true** if displayed, **false** otherwise.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    decorEnabled: boolean;
    /**
     * Whether the modal property is enabled for the child window. **true** if enabled, **false** otherwise. The default
     * value is **false**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    isModal?: boolean;
    /**
     * Whether the child window is topmost. **true** if topmost, **false** otherwise. The default value is **false**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isTopmost?: boolean;
    /**
     * Modality type of the child window. This parameter takes effect only when the modal property is enabled for the
     * child window. **WINDOW_MODALITY** means window-modal, and **APPLICATION_MODALITY** means application-modal. The
     * default value is **WINDOW_MODALITY**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    modalityType?: ModalityType;
    /**
     * Rectangle of the child window, and the size of the child window is limited. For details, see
     * [resize()]{@link @ohos.window:window.Window.resize(width: int, height: int, callback: AsyncCallback<void>)}. If
     * this parameter is not set and
     * [showWindow()]{@link @ohos.window:window.Window.showWindow(callback: AsyncCallback<void>)} is not called, the
     * default value {left: 0, top: 0, width: 0, height: 0} is used. For details, see
     * [Setting a Child Window of an Application](docroot://windowmanager/application-window-stage.md#setting-a-child-window-of-an-application)
     * .
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    windowRect?: Rect;
    /**
     * Whether the child window supports maximization. **true** if supported, **false** otherwise. The default value is
     * **false**.
     *
     * This parameter can be used properly on devices that support the
     * [freeform window](docroot://windowmanager/window-terminology.md#freeform-window) mode and are currently in that
     * mode. On devices that do not support the freeform window mode, the API call will neither take effect nor report
     * an error when this parameter is used as an input. On devices that support the freeform window mode but are not
     * currently in that mode, the API call will neither take effect nor report an error when this parameter is used as
     * an input. The setting will take effect after the devices switch to that mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    maximizeSupported?: boolean;

    /**
     * Z-level of the child window. This parameter is valid only when the modal property is not enabled for the child
     * window, that is, **isModal** is not set. The value is an integer in the range [-10000, 10000]. Floating-point
     * numbers will be rounded down. The default value is **0**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    zLevel?: int;

    /**
     * Whether the child window displays an outline. **true** if displayed, **false** otherwise. The default value is
     * **false**.
     *
     * This parameter can be properly used on 2-in-1 devices. If it is used as an input parameter on other device types,
     * the corresponding API has no effect and does not report errors.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    outlineEnabled?: boolean;

    /**
     * Indicates whether loose the restriction of sub window z-level above parent.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    zLevelAboveParentLoosened?: boolean;
  }
  /**
   * Implements a window manager, which manages each basic window unit, that is, [Window]{@link @ohos.window} instance.
   *
   * Before calling any of the following APIs, you must use
   * [onWindowStageCreate()]{@link @ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate} to create a WindowStage
   * instance.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WindowStage {
    /**
     * Get main window of the stage.
     *
     * @returns { Promise<Window> } Callback used to return the subwindow.
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
     * Get main window of the stage.
     *
     * @param { AsyncCallback<Window> } callback Callback used to return the main window.
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
     * Get main window of the stage.
     *
     * @returns { Window }
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
    getMainWindowSync(): Window;
    /**
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @returns { Promise<Window> } Promise used to return the subwindow.
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
     * Create sub window of the stage.
     *
     * @param { string } name window name of sub window
     * @param { AsyncCallback<Window> } callback Callback used to return the subwindow.
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
     * Create sub window of the stage.
     *
     * @param { string } name - window name of sub window
     * @param { SubWindowOptions } options - options of sub window creation
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
     * Get sub window of the stage.
     *
     * @returns { Promise<Array<Window>> }
     * @throws { BusinessError } 1300002 - This window state is abnormal. [since 10]
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
     * Get sub window of the stage.
     *
     * @param { AsyncCallback<Array<Window>> } callback Callback used to return all the subwindows.
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
     * Loads the content of a page, with its path in the current project specified, to the main window
     * of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses an asynchronous callback to return the result.
     * You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     * before loading the new content. Exercise caution when using it.
     *
     * @param { string } path Path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @param { AsyncCallback<void> } callback Callback used to return the result.
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
     * Loads the content of a page, with its path in the current project specified, to the main window
     * of this window stage, and transfers the state attribute to the page through a local storage.
     * This API uses a promise to return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     * before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { LocalStorage } storage The data object shared within the content instance loaded by the window
     * @returns { Promise<void> }
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
    loadContent(path: string, storage?: LocalStorage): Promise<void>;

    /**
     * Loads content from a page to this window stage. This API uses an asynchronous callback to
     * return the result. You are advised to call this API during UIAbility startup.
     * If called multiple times, this API will destroy the existing page content (UIContent)
     * before loading the new content. Exercise caution when using it.
     *
     * @param { string } path of the page to which the content will be loaded
     * @param { AsyncCallback<void> } callback Callback used to return the result.
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
     * Loads the content of a [named route](../../ui/arkts-routing.md#named-route) page to this window, and transfers
     *     the state attribute to the page through a local storage. This API uses an asynchronous callback to return
     *     the result.
     * You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy the
     *     existing page content (UIContent) before loading the new content. Exercise caution when using it.
     * The execution context of the current UI may be unclear. Therefore, you are advised not to perform UI-related
     *     operations within the callback of this API.
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
     * Loads the content of a [named route](../../ui/arkts-routing.md#named-route) page to this window.
     *     This API uses an asynchronous callback to return the result.
     * You are advised to call this API during UIAbility startup. If called repeatedly, this API will destroy
     *     the existing page content (UIContent) before loading the new content. Exercise caution when using it.
     * The execution context of the current UI may be unclear. Therefore, you are advised not to perform
     *     UI-related operations within the callback of this API.
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
     * Release the content of this window in the current project.
     * This API uses a promise to return the result.
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
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { 'windowStageEvent' } eventType Event type.
     *     The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
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
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    onWindowStageEvent(callback: Callback<WindowStageEventType>): void;

    /**
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { 'windowStageEvent' } eventType Event type.
     *     The value is fixed at 'windowStageEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageEventType> } callback Callback used to return the window stage lifecycle state.
     *     If a value is passed in, the corresponding subscription is canceled.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
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
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageEventType> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @throws { BusinessError } 1300005 - This window stage is abnormal.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    offWindowStageEvent(callback?: Callback<WindowStageEventType>): void;

    /**
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { 'windowStageLifecycleEvent' } eventType Event type.
     *     The value is fixed at 'windowStageLifecycleEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageLifecycleEventType> } callback Callback used to
     *     return the window stage lifecycle state.
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
     * Subscribes to the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageLifecycleEventType> } callback Callback used to
     *     return the window stage lifecycle state.
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
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { 'windowStageLifecycleEvent' } eventType Event type.
     *     The value is fixed at 'windowStageLifecycleEvent', indicating the window stage lifecycle change event.
     * @param { Callback<WindowStageLifecycleEventType> } [callback] Callback used to
     *     return the window stage lifecycle state.
     *     If a value is passed in, the corresponding subscription is canceled.
     *     If no value is passed in, all subscriptions to the specified event are canceled.
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
     * Unsubscribes from the window stage lifecycle change event.
     *
     * @param { Callback<WindowStageLifecycleEventType> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
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
     * Window stage close callback on.
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
     * Subscribes to the click event on the close button in the three-button navigation bar of the main window.
     * This event is triggered when the close button in the three-button navigation bar of the main window is clicked.
     *
     * @param { Callback<void, boolean> } callback - Callback invoked when the close
     *     button in the upper right corner of the main window is clicked.
     *     The return value determines whether to continue to close the main window.
     *     The value true means not to close the main window, and false means to continue to close the main window.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    onWindowStageClose(callback: Callback<void, boolean>): void;

    /**
     * Window stage close callback off.
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
    off(eventType: 'windowStageClose', callback?: Callback<void>): void;

    /**
     * Unsubscribes from the event indicating that the main window is closed.
     *
     * @param { Callback<void, boolean> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Failed to call the API due to limited device capabilities.
     * @throws { BusinessError } 1300002 - This window state is abnormal.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 23 static
     */
    offWindowStageClose(callback?: Callback<void, boolean>): void;

    /**
     * Disables window decorators.
     *
     * When window decorators are disabled and the main window transitions into full-screen mode, hovering the cursor
     * over the hot zone of the top window's title bar will cause a floating title bar to appear. To prevent the
     * floating title bar from appearing, call
     * [setTitleAndDockHoverShown()]{@link @ohos.window:window.Window.setTitleAndDockHoverShown}.
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
     * Sets whether to display the window of the application on the lock screen.
     *
     * @param { boolean } showOnLockScreen - Whether to display the window on the lock screen. **true** to display,
     *     **false** otherwise.
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
     * Sets whether the main window of the application uses the system's default density. Child windows and system
     *     windows will follow the main window's setting. Before calling this API, call [WindowStage.loadContent()]{@link @ohos.window:window.WindowStage.loadContent}
     *     to initialize the layout to ensure the correct call sequence.
     *
     * If this API is not called, the default density is not used.
     *
     * When the default density is not used, if [setCustomDensity()]{@link @ohos.window:window.WindowStage.setCustomDensity} has been called, the window will be re-laid out according to the custom display size changes. Otherwise, it will be re-laid out according to the system display size changes.
     *
     * @param { boolean } enabled - Use default density if true, or follow system density change if false
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
     * Allows the main window of the application to customize its display size scale factor.
     *
     * Existing child windows and system windows do not immediately re-layout to match the main window's new scale
     *     factor. They will re-layout to reflect this change only when their layout information (such as position,
     *     size, and system scale size) changes.
     *
     * If both this API and [setDefaultDensityEnabled(true)]{@link @ohos.window:window.WindowStage.setDefaultDensityEnabled} are called, the setting from the last called API will be applied.
     *
     * @param { number } density - the specified custom density value.
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
     * Allows the main window of the application to customize its display size scale factor and control when child
     *     windows and system windows re-layout to match the main window.
     *
     * If both this API and [setDefaultDensityEnabled(true)]{@link @ohos.window:window.WindowStage.setDefaultDensityEnabled} are called,
     *     the setting from the last called API will be applied.
     *
     * @param { double } density - the specified custom density value.
     * @param { boolean } [applyToSubWindow] - whether to apply the custom density to already created subwindows.
     *     The default value is false.
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
     * Remove the starting window, it must be used with configuration "enable.remove.starting.window".
     *
     * @returns { Promise<void> } - The promise returned by the function.
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
     * Set to automatically save the window rect.
     *
     * @param { boolean } enabled - Enable the window rect auto-save if true, otherwise means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Set to automatically save the window rect and whether to enable specifiedFlag.
     * Through the specifiedFlag flag, the window is marked and its rect is saved.
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
     * Whether the window supports the window rect auto-save.
     *
     * @returns { Promise<boolean> } Promise used to return the result.
     *     The value true means that the window rect auto-save is supported, and false means the opposite.
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
     * Sets the supported window modes.
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - The supported modes of window.
     * @returns { Promise<void> } Promise that returns no value
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
     * Sets the supported window modes of the main window.
     *
     * @param { Array<bundleManager.SupportWindowMode> } supportedWindowModes - The supported modes of window.
     * @param { boolean } grayOutMaximizeButton - Whether to gray out the window maximize button.
     *     The value true means to gray out the button, and false means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets Image for recent.
     *
     * @param { long | image.PixelMap } imageResource - imageResourceId or pixelMap for recent image.
     *     imageResourceId Value Range: [0x1000000, 0xffffffff].
     * @param { ImageFit } value - Sets the zoom type of an image.
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
     * Sets Image for recent.
     *
     * @permission ohos.permission.MANAGE_RECENT_SNAPSHOT
     * @param { long | image.PixelMap } imageResource - imageResourceId or pixelMap for recent image.
     *     imageResourceId Value Range: [0x1000000, 0xffffffff].
     * @param { ImageFit } value - Sets the zoom type of an image.
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
     * Remove Image for recent.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Remove Image for recent.
     *
     * @permission ohos.permission.MANAGE_RECENT_SNAPSHOT
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the image displayed in the multitasking view. This API uses a promise to return the result.
     *
     * @param { number } imgResourceId - Resource ID of the custom image. The image must be stored in the
     *     **resources/base/media** directory and its resource ID can be obtained using the **$r** resource access mode.
     *     For example, to obtain the resource ID of the startIcon image, use the following: $r("app.media.startIcon")
     *     .id.
     * @param { ImageFit } value - Fill mode of the custom image.
     * @returns { Promise<void> } Promise that returns no value.
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
   * Enumerates the attributes of a window for a UI ServiceExtensionAbility.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  enum ExtensionWindowAttribute {
    /**
     * System window
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM_WINDOW = 0,

    /**
     * child window.
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
   * Describes the parameters for creating a system window.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface SystemWindowOptions {
    /**
     * Window type. There is no default value. If null is passed in, the window fails to be created. **TYPE_DIALOG** is
     * not supported.
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
   * Describes the parameters for creating a window for a UI ServiceExtensionAbility.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  interface ExtensionWindowConfig {
    /**
     * Window name.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowName: string;

    /**
     * Window attribute. It specifies whether the created window is a child window or a system window. When
     * **windowAttribute** is set to **SUB_WINDOW**, **subWindowOptions** is mandatory. When **windowAttribute** is set
     * to **SYSTEM_WINDOW**, **systemWindowOptions** is mandatory. Otherwise, the window fails to be created.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowAttribute: ExtensionWindowAttribute;

    /**
     * Rectangular area of the window.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * Parameters used for creating a child window. There is no default value. This parameter is mandatory when
     * **windowAttribute** is set to **SUB_WINDOW**. Otherwise, the window fails to be created.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 14 dynamic
     * @since 23 static
     */
    subWindowOptions?: SubWindowOptions;

    /**
     * Parameters for creating a system window. There is no default value. This parameter is mandatory when
     * **windowAttribute** is set to **SYSTEM_WINDOW**. Otherwise, the window fails to be created.
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
   * Describes the information about the window layout.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  interface WindowLayoutInfo {
    /**
     * Window rectangle, that is, the position and size of the window on the display.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    windowRect: Rect;

    /**
     * The window's alpha fade level. This number is in the range 0.0 to 1.0,
     * where 0.0 is fully transparent and 1.0 is fully opaque.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    windowAlpha?: double;
  }

  /**
   * Filter criteria for window information.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  interface WindowInfoOptions {
    /**
     * Whether the result excludes system windows.
     * If true, the result list does not include system windows;
     * if false, the result list includes system windows.
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    excludeSystemWindows?: boolean;
    /**
     * Only include windows with a higher z-order than the specified window ID.
     * When this field is set to the default value 0, this field is not used as a filter criterion.
     *
     * @default 0
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    foregroundAboveWindow?: int;
    /**
     * Only include windows with a lower z-order than the specified window ID.
     * When this field is set to the default value 0, this field is not used as a filter criterion.
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