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
 * @file 窗口动画管理
 * @kit ArkUI
 */

import { AsyncCallback } from './@ohos.base';

/**
 * 窗口动画管理器，可以监听应用启动退出时应用的动画窗口，提供启动退出过程中控件动画和应用窗口联动动画能力。
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace windowAnimationManager {
  /**
   * 设置窗口动画控制器。窗口动画控制器的说明请参考[WindowAnimationController]{@link windowAnimationManager.WindowAnimationController}。
   *
   * 在使用windowAnimationManager的其他接口前，需要预先调用本接口设置窗口动画控制器。
   *
   * @param { WindowAnimationController } controller - 窗口动画的控制器。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setController(controller: WindowAnimationController): void;

  /**
   * 最小化动画目标窗口，并返回动画完成的回调。使用callback异步回调。
   *
   * @param { WindowAnimationTarget } windowTarget - 动画目标窗口。
   * @param { AsyncCallback<WindowAnimationFinishedCallback> } callback - 回调函数。当最小化动画目标窗口成功，err为undefined，data为获取到的
   *     WindowAnimationFinishedCallback；否则返回err.code为-1，data为undefined。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget,
    callback: AsyncCallback<WindowAnimationFinishedCallback>): void;

  /**
   * 最小化动画目标窗口，并返回动画完成的回调。使用Promise异步回调。
   *
   * @param { WindowAnimationTarget } windowTarget - 动画目标窗口。
   * @returns { Promise<WindowAnimationFinishedCallback> } Promise对象，返回动画完成的回调。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function minimizeWindowWithAnimation(windowTarget: WindowAnimationTarget): Promise<WindowAnimationFinishedCallback>;

  /**
   * 圆角矩形。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface RRect {
    /**
     * 动画目标窗口左上角相对于屏幕的横坐标。
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * 动画目标窗口左上角相对于屏幕的纵坐标。
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * 动画目标窗口的宽度大小。
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * 动画目标窗口的高度大小。
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * 动画目标窗口的圆角大小。
     * @type { double }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    radius: double;
  }

  /**
   * 动画目标窗口，用来实现动画。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface WindowAnimationTarget {
    /**
     * 动画目标窗口所对应的包名。
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
    /* 动画目标窗口所对应的Ability名称。
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly abilityName: string;

    /**
    /* 动画目标窗口所对应的实际大小。
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly windowBounds: RRect;

    /**
    /* 任务ID，多任务中用于与ability进行匹配。
     * @readonly
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly missionId: int;
  }

  /**
   * 动画完成后的回调。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface WindowAnimationFinishedCallback {
    /**
     * 结束本次动画。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    onAnimationFinish(): void;
  }

  /**
   * 应用启动时的回调。
   *
   * @typedef { function } AppStartCallback
   * @param { WindowAnimationTarget } startingWindowTarget - 动画目标窗口。
   * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type AppStartCallback = (startingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * 应用转场时的回调。
   *
   * @typedef { function } AppTransitionCallback
   * @param { WindowAnimationTarget } fromWindowTarget - 转场前的动画窗口。
   * @param { WindowAnimationTarget } toWindowTarget - 转场后的动画窗口。
   * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type AppTransitionCallback = (fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * 最小化窗口时的回调。
   *
   * @typedef { function } WindowMinimizationCallback
   * @param { WindowAnimationTarget } minimizingWindowTarget - 动画目标窗口。
   * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type WindowMinimizationCallback = (minimizingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * 关闭窗口时的回调。
   *
   * @typedef { function } WindowCloseCallback
   * @param { WindowAnimationTarget } closingWindowTarget - 动画目标窗口。
   * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type WindowCloseCallback = (closingWindowTarget: WindowAnimationTarget,
    finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * 屏幕解锁时的回调。
   *
   * @typedef { function } ScreenUnlockCallback
   * @param {WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type ScreenUnlockCallback = (finishCallback: WindowAnimationFinishedCallback) => void;

  /**
   * 动画目标窗口更新时的回调。
   *
   * @typedef { function } WindowAnimationTargetsUpdationCallback
   * @param { WindowAnimationTarget } fullScreenWindowTarget - 全屏状态的动画目标窗口。
   * @param { Array<WindowAnimationTarget> } floatingWindowTargets - 悬浮状态的动画目标窗口。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  type WindowAnimationTargetsUpdationCallback = (fullScreenWindowTarget: WindowAnimationTarget,
    floatingWindowTargets: Array<WindowAnimationTarget>) => void;

  /**
   * 窗口动画控制器。在创建一个WindowAnimationController对象时，需要实现其中的所有回调函数。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  export interface WindowAnimationController {
    /**
     * 从桌面启动应用时的回调。
     *
     * @param { WindowAnimationTarget } startingWindowTarget - 动画目标窗口。
     * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onStartAppFromLauncher(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * 从最近任务列表启动应用时的回调。
     *
     * @param { WindowAnimationTarget } startingWindowTarget - 动画目标窗口。
     * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onStartAppFromRecent(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * 从除了桌面和最近任务列表以外其他地方启动应用时的回调。
     *
     * @param { WindowAnimationTarget } startingWindowTarget - 动画目标窗口。
     * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onStartAppFromOther(startingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * 应用转场时的回调。
     *
     * @param { WindowAnimationTarget } fromWindowTarget - 转场前的动画窗口。
     * @param { WindowAnimationTarget } toWindowTarget - 转场后的动画窗口。
     * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onAppTransition(fromWindowTarget: WindowAnimationTarget, toWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * 最小化窗口时的回调。
     *
     * @param { WindowAnimationTarget } minimizingWindowTarget - 动画目标窗口。
     * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onMinimizeWindow(minimizingWindowTarget: WindowAnimationTarget,
      finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * 关闭窗口时的回调。
     *
     * @param { WindowAnimationTarget } closingWindowTarget - 动画目标窗口。
     * @param { WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onCloseWindow(closingWindowTarget: WindowAnimationTarget, finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * 屏幕解锁时的回调。
     *
     * @param {WindowAnimationFinishedCallback } finishCallback - 动画完成后的回调。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onScreenUnlock(finishCallback: WindowAnimationFinishedCallback): void;

    /**
     * 动画目标窗口更新时的回调。
     *
     * @param { WindowAnimationTarget } fullScreenWindowTarget - 全屏状态的动画目标窗口。
     * @param { Array<WindowAnimationTarget> } floatingWindowTargets - 悬浮状态的动画目标窗口。
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 9 dynamic
     */
    onWindowAnimationTargetsUpdate(fullScreenWindowTarget: WindowAnimationTarget,
      floatingWindowTargets: Array<WindowAnimationTarget>): void;

    /**
     * 从桌面启动应用时的回调。
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onStartAppFromLauncher?: AppStartCallback;

    /**
     * 从最近任务列表启动应用时的回调。
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onStartAppFromRecent?: AppStartCallback;

    /**
     * 从除了桌面和最近任务列表以外其他地方启动应用时的回调。
     *
     * @type { ?AppStartCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onStartAppFromOther?: AppStartCallback;

    /**
     * 应用转场时的回调。
     *
     * @type { ?AppTransitionCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onAppTransition?: AppTransitionCallback;

    /**
     * 最小化窗口时的回调。
     *
     * @type { ?WindowMinimizationCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onMinimizeWindow?: WindowMinimizationCallback;

    /**
     * 关闭窗口时的回调。
     *
     * @type { ?WindowCloseCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onCloseWindow?: WindowCloseCallback;

    /**
     * 屏幕解锁时的回调。
     *
     * @type { ?ScreenUnlockCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onScreenUnlock?: ScreenUnlockCallback;

    /**
     * 动画目标窗口更新时的回调。
     *
     * @type { ?WindowAnimationTargetsUpdationCallback }
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    onWindowAnimationTargetsUpdate?: WindowAnimationTargetsUpdationCallback;
  }
}

export default windowAnimationManager;