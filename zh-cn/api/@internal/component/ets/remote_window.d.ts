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

/**
 * 圆角矩形。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface RRect {
  /**
   * 动画窗口左上角相对于屏幕横坐标，单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  left: number;

  /**
   * 动画窗口左上角相对于屏幕纵坐标，单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  top: number;

  /**
   * 动画窗口宽度大小，单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  width: number;

  /**
   * 动画窗口高度大小，单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  height: number;

  /**
   * 动画窗口圆角大小，单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  radius: number;
}

/**
 * 目标窗口，用来远程控制实现动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface WindowAnimationTarget {
  /**
   * 动画窗口所对应的进程。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  readonly bundleName: string;

  /**
   * 动画窗口所对应的Ability
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  readonly abilityName: string;

  /**
   * 动画窗口实际大小。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  readonly windowBounds: RRect;

  /**
   * 任务ID。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  readonly missionId: number;
}

/**
 * 远程控制窗口组件，可以通过此组件控制应用窗口，提供启动退出过程中控件动画和应用窗口联动动画的能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
interface RemoteWindowInterface {
  /**
   * 通过窗口动画对象创建组件。
   *
   * @param { WindowAnimationTarget } target - 需要控制的动画窗口的描述。
   * @returns { RemoteWindowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 9 dynamic
   */
  (target: WindowAnimationTarget): RemoteWindowAttribute;
}

/**
 * 支持[通用属性]{@link common}。
 *
 * 支持[通用事件]{@link common}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare class RemoteWindowAttribute extends CommonMethod<RemoteWindowAttribute> {}

/**
 * 远程控制窗口组件，可以通过此组件控制应用窗口，提供启动退出过程中控件动画和应用窗口联动动画的能力。
 *
 * ###### 子组件
 *
 * 不可以包含子组件
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare const RemoteWindow: RemoteWindowInterface;

/**
 * Defines RemoteWindow Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamic
 */
declare const RemoteWindowInstance: RemoteWindowAttribute;