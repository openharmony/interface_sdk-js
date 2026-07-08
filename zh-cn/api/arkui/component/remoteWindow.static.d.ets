'use static'
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import { AttributeModifier, CommonMethod } from './common';
import { ComponentBuilder, CustomBuilder } from "./builder";

/**
 * 圆角矩形。
 *
 * @interface RRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface RRect {
  /**
   * 动画窗口左上角相对于屏幕横坐标，单位为px。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  left: double;

  /**
   * 动画窗口左上角相对于屏幕纵坐标，单位为px。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  top: double;

  /**
   * 动画窗口宽度大小，单位为px。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  width: double;

  /**
   * 动画窗口高度大小，单位为px。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  height: double;

  /**
   * 动画窗口圆角大小，单位为px。
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  radius: double;
}

/**
 * 目标窗口，用来远程控制实现动画。
 *
 * @interface WindowAnimationTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export interface WindowAnimationTarget {
  /**
   * 动画窗口所对应的进程。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * 动画窗口所对应的Ability。
   *
   * @type { string }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  readonly abilityName: string;

  /**
   * 动画窗口实际大小。
   *
   * @type { RRect }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  readonly windowBounds: RRect;

  /**
   * 任务ID。
   *
   * @type { int }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  readonly missionId: int;
}

/**
 * 支持[通用属性]{@link common}。
 *
 * 支持[通用事件]{@link common}。
 *
 * @extends CommonMethod
 * @interface RemoteWindowAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface RemoteWindowAttribute extends CommonMethod {
  /**
   * 设置RemoteWindow组件的属性方法.
   *
   * @param { AttributeModifier<RemoteWindowAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { RemoteWindowAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  default attributeModifier(modifier: AttributeModifier<RemoteWindowAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 远程控制窗口组件，可以通过此组件控制应用窗口，提供启动退出过程中控件动画和应用窗口联动动画的能力。
 *
 * @param { WindowAnimationTarget } target - 需要控制的动画窗口的描述。
 * @returns { RemoteWindowAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function RemoteWindow(
    target: WindowAnimationTarget
): RemoteWindowAttribute;