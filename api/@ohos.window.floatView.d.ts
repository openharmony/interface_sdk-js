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
 * Float view
 *
 * @syscap SystemCapability.Window.SessionManager
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace floatView {
  /**
   * Whether the float view is enabled on the current device.
   *
   * @returns { boolean } true if the float view is enabled, otherwise false.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isFloatViewEnabled(): boolean;

  /**
   * Create a float view controller
   *
   * @param { FloatViewConfiguration } config - Parameters for float view controller creation.
   *     The config must be valid, the context in config should not be null.
   * @returns { Promise<FloatViewController> } - The promise returned by the function.
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
   * Bind the float view and the floating ball.
   * > **NOTE**
   * > - After binding, invoking the start method of either the floatViewController or the floatingBallController
   *     will create both windows. However, only one window will be displayed at the same time.
   *     The display order is determined by which controller's start method is called first.
   * > - After binding, the floating ball window and the float view window support mutual toggling,
   *     triggered by user clicks.
   * > - After binding, invoking the stop method of either controller will destroy both windows.
   *
   * @permission ohos.permission.USE_FLOAT_BALL and ohos.permission.FLOAT_VIEW
   * @param { FloatViewController } floatViewController - Controller of float view.
   * @param { floatingBall.FloatingBallController } floatingBallController - Controller of floating ball.
   * @param { floatingBall.FloatingBallParams } floatingBallParams - params of floating ball.
   * @returns { Promise<void> } - Promise that returns no value
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
   * Unbind the float view and the floating ball.
   *
   * @param { FloatViewController } floatViewController - Controller of float view.
   * @param { floatingBall.FloatingBallController } floatingBallController - Controller of floating ball.
   * @returns { Promise<void> } - Promise that returns no value
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
   * Get the window limits of current float view window measured in px.
   *
   * @returns { FloatViewLimits } - Returns the limits of float view window,
   *     including the maximum and minimum size limits.
   * @throws { BusinessError } 801 - Capability not supported. Possible cause:
   *     Call the API on unsupported device.
   * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
   *     System error, such as a null pointer, insufficient memory or a JS engine exception.
   * @throws { BusinessError } 1300003 - This window manager service works abnormally. Possible cause:
   *     Internal IPC error.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getFloatViewLimits(): FloatViewLimits;

  /**
   * FloatViewConfiguration
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewConfiguration {  
    /**
     * Indicates the window context.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    context: BaseContext;

    /**
     * The template type of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    templateType: FloatViewTemplateType;
  }

  /**
   * FloatViewController
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewController {

    /**
     * Sets the UI content of the float view.
     *
     * @param { string } path - Path of the page to which the content will be loaded.
     * @param { LocalStorage } [storage] - The data object shared within the content instance loaded by the window.
     * @returns { Promise<void> } - The promise returned by the function.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @throws { BusinessError } 1300016 - Parameter error. Possible causes: Invalid path;
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setUIContext(path: string, storage?: LocalStorage): Promise<void>;

    /**
     * Sets the float view window size.
     *
     * @param { window.Size } size - Indicate the size of the window. The size is recommended to meet
     *     the limits of 'getFloatViewLimits'.
     * @returns { Promise<void> } - The promise returned by the function.
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
     * Starts the float view window.
     *
     * @permission ohos.permission.FLOAT_VIEW
     * @returns { Promise<void> } - The promise returned by the function.
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
     *     2. The application does not have any foreground windows.
     * @throws { BusinessError } 1300034 - This operation conflicts with other floating windows. Possible cause:
     *     App has already started floating ball or pip window.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    start(): Promise<void>;

    /**
     * Stops the float View window.
     *
     * @returns { Promise<void> } - The promise returned by the function.
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
     * Sets whether the float view window is visible when app is in the foreground.
     *
     * @param { boolean } isVisible - True if float view is visible when app is in the foreground, otherwise invisible.
     * @returns { Promise<void> } - The promise returned by the function.
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
     * Restores the main window for float view to the foreground.
     * This interface can only be used by a float view window after it has been clicked once.
     * The interface cannot be invoked when the main window is in PAUSED lifecycle or is in background during recent.
     *
     * @param { Record<string, Object> } [wantParameters] - Want parameters.
     *     Custom want parameter delivered when restoring the main window.
     *     Want parameters are used for UIAbility onNewWant.
     * @returns { Promise<void> } - The promise returned by the function.
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
     * Get properties of the float view window.
     *
     * @returns { FloatViewProperties } - Returns properties of the float view window.
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
     * Register the float view stateChange event listener.
     *
     * @param { Callback<FloatViewStateChangeInfo> } callback - Used to handle {'stateChange'} command.
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
     * Unregister the float view stateChange event listener.
     *
     * @param { Callback<FloatViewStateChangeInfo> } [callback] - Indicates the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offStateChange(callback?: Callback<FloatViewStateChangeInfo>): void;

    /**
     * Register the float view rectChange event listener.
     *
     * @param { Callback<FloatViewRectChangeInfo> } callback - Used to handle {'rectChange'} command.
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
     * Unregister the float view rectChange event listener.
     *
     * @param { Callback<FloatViewRectChangeInfo> } [callback] - Indicates the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offRectChange(callback?: Callback<FloatViewRectChangeInfo>): void;

    /**
     * Register the float view limitsChange event listener.
     *
     * @param { Callback<FloatViewLimits> } callback - Used to handle {'limitsChange'} command.
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
     * Unregister the float view limitsChange event listener.
     *
     * @param { Callback<FloatViewLimits> } [callback] - Indicates the callback function. If not provided,
     *     all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1300002 - This window state is abnormal. Possible cause:
     *     The float view controller object is null.
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offLimitsChange(callback?: Callback<FloatViewLimits>): void;
  }

  /**
   * Enumeration for float view template type.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum FloatViewTemplateType {  
    /**
     * Rounded rectangle.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ROUNDED_RECTANGLE = 0
  }

  /**
   * The properties of the float view
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewProperties {  
    /**
     * The window id of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowId: int;

    /**
     * The display id of the float view.
     * The value should be an integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId: int;

    /**
     * The window rect of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowRect: window.Rect;

    /**
     * The window scale of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowScale: double;

    /**
     * The title bar rect of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    titleBarRect: window.Rect;

    /**
     * Whether the float view is in the sidebar.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    inSidebar: boolean;
  }

  /**
   * The aspect ratio limit of the float view
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface RatioLimit {  
    /**
     * The minimum aspect ratio of the float view.
     * <br>Value range:(0, +∞).
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minRatio: double;

    /**
     * The maximum aspect ratio of the float view.
     * <br>Value range:(0, +∞).
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxRatio: double;
  }

  /**
   * The limits of the float view
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewLimits {  
    /**
     * The minimum size of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    minSize: window.Size;

    /**
     * The maximum size of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxSize: window.Size;

    /**
     * The aspect ratio limits of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ratioLimits: Array<RatioLimit>;
  }

  /**
   * The state change info of the float view
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewStateChangeInfo {  
    /**
     * The state of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: FloatViewState;

    /**
     * The reason for the float view stopped.
     * This parameter is valid only when the status is FloatViewState.STOPPED,
     * it is an empty string by default in other states.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopReason: string;
  }

  /**
   * The state of the float view
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum FloatViewState {  
    /**
     * The float view is started.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STARTED = 1,

    /**
     * The float view is hidden.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HIDDEN = 2,

    /**
     * The float view is stopped.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 3,

    /**
     * The float view is in the sidebar.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IN_SIDEBAR = 4,

    /**
     * The float view is in floating ball.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IN_FLOATING_BALL = 5,

    /**
     * The float view is in an error state.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ERROR = 6
  }

  /**
   * The rect change options of the float view
   *
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface FloatViewRectChangeInfo {
    /**
     * The window rect of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowRect: window.Rect;

    /**
     * The window scale of the float view.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    windowScale: double;

    /**
     * The reason for the float view rect change.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: string;
  }

}

export default floatView;