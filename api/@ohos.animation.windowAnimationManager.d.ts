/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

import { AsyncCallback } from './@ohos.base';

/**
 * Window animation manager.
 *
 * @namespace windowAnimationManager
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since arkts {'1.1':'9', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace windowAnimationManager {
  /**
   * Set the window animation controller.
   *
   * @param { WindowAnimationController } controller - Window animation controller.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function setController(controller: WindowAnimationController): void;

  /**
   * Minimize the window target with animation.
   *
   * @param { WindowAnimationTarget } windowTarget - The window target to be minimized.
   * @param { AsyncCallback<WindowAnimationFinishedCallback> } callback - Returns the animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget,
    callback: AsyncCallback<WindowAnimationFinishedCallback>): void;

  /**
   * Minimize the window target with animation.
   *
   * @param { WindowAnimationTarget }windowTarget - The window target to be minimized.
   * @returns { Promise<WindowAnimationFinishedCallback> } Promise used to return the animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget): Promise<WindowAnimationFinishedCallback>;

  /**
   * Round rect.
   *
   * @interface RRect
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface RRect {
    /**
     * The X-axis coordinate of the upper left vertex of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    left: double;

    /**
     * The Y-axis coordinate of the upper left vertex of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    top: double;

    /**
     * Width of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    width: double;

    /**
     * Height of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    height: double;

    /**
     * Radius of the round corner of the round rect, in pixels.
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    radius: double;
  }

  /**
   * Window animation target.
   *
   * @interface WindowAnimationTarget
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface WindowAnimationTarget {
    /**
     * The bundle name of the window animation target.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly bundleName: string;

    /**
    /* The ability name of the window animation target.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly abilityName: string;

    /**
    /* The window bounds of the window animation target.
     * @type { RRect }
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly windowBounds: RRect;

    /**
    /* The mission id of the window animation target.
     * @type { int }  
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    readonly missionId: int;
  }

  /**
   * Window animation finished callback.
   *
   * @interface WindowAnimationFinishedCallback
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface WindowAnimationFinishedCallback {
    /**
     * The function of window animation finished callback.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since arkts {'1.1':'9', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    onAnimationFinish(): void;
  }

  /**
   * Callback function on starting an application.
   *
   * @typedef { function } AppStartCallback
   * @param { WindowAnimationTarget } startingWindowTarget - Window target of the starting application.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 22
   * @arkts 1.1&1.2
   */
  type AppStartCallback = (startingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on application transition.
   *
   * @typedef { function } AppTransitionCallback
   * @param { WindowAnimationTarget } fromWindowTarget - Window target of the source application.
   * @param { WindowAnimationTarget } toWindowTarget - Window target of the destination application.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 22
   * @arkts 1.1&1.2
   */
  type AppTransitionCallback = (fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on minimizing a window.
   *
   * @typedef { function } WindowMinimizationCallback
   * @param { WindowAnimationTarget } minimizingWindowTarget - Window target of the minimizing window.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 22
   * @arkts 1.1&1.2
   */
  type WindowMinimizationCallback = (minimizingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on closing a window.
   *
   * @typedef { function } WindowCloseCallback
   * @param { WindowAnimationTarget }closingWindowTarget - Window target of the closing window.
   * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 22
   * @arkts 1.1&1.2
   */
  type WindowCloseCallback = (closingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on unlocking the screen.
   *
   * @typedef { function } ScreenUnlockCallback
   * @param {WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 22
   * @arkts 1.1&1.2
   */
  type ScreenUnlockCallback = (finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * Callback function on window animation targets update.
   *
   * @typedef { function } WindowAnimationTargetsUpdationCallback
   * @param { WindowAnimationTarget } fullScreenWindowTarget - The fullscreen window target.
   * @param { Array<WindowAnimationTarget> } floatingWindowTargets - All the floating window targets.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 22
   * @arkts 1.1&1.2
   */
  type WindowAnimationTargetsUpdationCallback = (fullScreenWindowTarget: WindowAnimationTarget,
    floatingWindowTargets: Array<WindowAnimationTarget>) => void;

  /**
   * Window animation controller.
   *
   * @interface WindowAnimationController
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  export interface WindowAnimationController {
    /**
     * Called on starting an application form launcher.
     *
     * @param { WindowAnimationTarget } startingWindowTarget  - indicates Window target of the starting application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Callback function on starting an application form launcher.
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onStartAppFromLauncher?: AppStartCallback;

    /**
     * Called on starting an application form recent.
     *
     * @param { WindowAnimationTarget } startingWindowTarget - Window target of the starting application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Callback function on starting an application form recent.
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onStartAppFromRecent?: AppStartCallback;

    /**
     * Called on starting an application form other.
     *
     * @param { WindowAnimationTarget } startingWindowTarget - Window target of the starting application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Callback function on starting an application form other.
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onStartAppFromOther?: AppStartCallback;

    /**
     * Called on application transition.
     *
     * @param { WindowAnimationTarget } fromWindowTarget - Window target of the source application.
     * @param { WindowAnimationTarget } toWindowTarget - Window target of the destination application.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Callback function on application transition.
     *
     * @type { ?AppTransitionCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onAppTransition?: AppTransitionCallback;

    /**
     * Called on minimizing a window.
     *
     * @param { WindowAnimationTarget } minimizingWindowTarget - Window target of the minimizing window.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Callback function on minimizing a window.
     *
     * @type { ?WindowMinimizationCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onMinimizeWindow?: WindowMinimizationCallback;

    /**
     * Called on closing a window.
     *
     * @param { WindowAnimationTarget }closingWindowTarget - Window target of the closing window.
     * @param { WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Callback function on closing a window.
     *
     * @type { ?WindowCloseCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onCloseWindow?: WindowCloseCallback;

    /**
     * Called on unlocking the screen.
     *
     * @param {WindowAnimationFinishedCallback } finishCallback - Animation finished callback.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @since 9
     */
    /**
     * Callback function on unlocking the screen.
     *
     * @type { ?ScreenUnlockCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onScreenUnlock?: ScreenUnlockCallback;

    /**
     * Called on window animation targets update.
     *
     * @param { WindowAnimationTarget } fullScreenWindowTarget - The fullscreen window target.
     * @param { Array<WindowAnimationTarget> } floatingWindowTargets - All the floating window targets.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    /**
     * Callback function on window animation targets update.
     *
     * @type { ?WindowAnimationTargetsUpdationCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22
     * @arkts 1.1&1.2
     */
    onWindowAnimationTargetsUpdate?: WindowAnimationTargetsUpdationCallback;
  }
}

export default windowAnimationManager;
