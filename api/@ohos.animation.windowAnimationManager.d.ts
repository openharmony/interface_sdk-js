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

import {AsyncCallback} from "./basic";

/**
 * Window animation manager.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 9
 */
declare namespace windowAnimationManager {
  /**
   * Set the window animation controller.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @param controller Window animation controller.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setController(controller: WindowAnimationController): void;

  /**
   * Minimize the window target.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @param windowTarget The window target to be minimized.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function minimizeWindow(windowTarget: WindowAnimationTarget): void;

  /**
   * Minimize the window targets.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @param windowTarget The window targets to be minimized.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function minimizeWindows(windowTargets: Array<WindowAnimationTarget>): void;

  /**
   * Minimize the window target with animation.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @param windowTarget The window target to be minimized.
   * @return Returns the animation finished callback.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget,
    finishCallback: AsyncCallback<WindowAnimationFinishedCallback>): void;

  /**
   * Minimize the window target with animation.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @param windowTarget The window target to be minimized.
   * @return Returns the animation finished callback.
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget): Promise<WindowAnimationFinishedCallback>;

  /**
   * Round rect.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export interface RRect {
    left: number;

    top: number;

    width: number;

    height: number;

    radius: number;
  }

  /**
   * Window animation target.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export interface WindowAnimationTarget {
    readonly bundleName: string;

    readonly abilityName: string;

    readonly windowBounds: RRect;

    readonly missionId: number;
  }

  /**
   * Window animation finished callback.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export interface WindowAnimationFinishedCallback {
    onAnimationFinish(): void;
  }

  /**
   * Window animation controller.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  export interface WindowAnimationController {
    /**
     * Called on starting an application form launcher.
     *
     * @param startingWindowTarget Window target of the starting application.
     * @param finishCallback Animation finished callback.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onStartAppFromLauncher(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on starting an application form recent.
     *
     * @param startingWindowTarget Window target of the starting application.
     * @param finishCallback Animation finished callback.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onStartAppFromRecent(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on starting an application form other.
     *
     * @param startingWindowTarget Window target of the starting application.
     * @param finishCallback Animation finished callback.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onStartAppFromOther(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on application transition.
     *
     * @param fromWindowTarget Window target of the source application.
     * @param toWindowTarget Window target of the destination application.
     * @param finishCallback Animation finished callback.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onAppTransition(fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on minimizing a window.
     *
     * @param minimizingWindowTarget Window target of the minimizing window.
     * @param finishCallback Animation finished callback.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onMinimizeWindow(minimizingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on closing a window.
     *
     * @param closingWindowTarget Window target of the closing window.
     * @param finishCallback Animation finished callback.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onCloseWindow(closingWindowTarget: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * Called on unlocking the screen.
     *
     * @param finishCallback Animation finished callback.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onScreenUnlock(finishCallback: WindowAnimationFinishedCallback): void;


    /**
     * Called on window targets update.
     *
     * @param fullScreenWindowTarget The fullscreen window target.
     * @param floatingWindowTargets All the floating window targets.
     * @systemapi Hide this for inner system use.
     * @since 9
     */
    onWindowAnimationTargetsUpdate(fullScreenWindowTarget: WindowAnimationTarget,
      floatingWindowTargets: Array<WindowAnimationTarget>): void;
  }
}

export default windowAnimationManager;
