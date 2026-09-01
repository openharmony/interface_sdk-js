/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * 自定义弹簧特性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 22
 */
declare class SpringProp {
  /**
   * 构造器参数。
   *
   * @param { number } mass
   * @param { number } stiffness
   * @param { number } damping
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  constructor(mass: number, stiffness: number, damping: number);
}

/**
 * 弹簧动画模型。可以基于起点、终点、初始速度和弹簧属性构建弹簧动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 22
 */
declare class SpringMotion {
  /**
   * 构造器参数。
   *
   * @param { number } start
   * @param { number } end
   * @param { number } velocity
   * @param { SpringProp } prop
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  constructor(start: number, end: number, velocity: number, prop: SpringProp);
}

/**
 * 摩擦动画模型。可以通过摩擦力、初始位置和初始速度构建摩擦动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 22
 */
declare class FrictionMotion {
  /**
   * 构造器参数。
   *
   * @param { number } friction
   * @param { number } position
   * @param { number } velocity
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  constructor(friction: number, position: number, velocity: number);
}

/**
 * 滚动动画模型。可以根据初始位置、初始速度、边界位置和弹簧属性构建滚动动画。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 22
 */
declare class ScrollMotion {
  /**
   * 构造器参数。
   *
   * @param { number } position
   * @param { number } velocity
   * @param { number } min
   * @param { number } max
   * @param { SpringProp } prop
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  constructor(position: number, velocity: number, min: number, max: number, prop: SpringProp);
}

/**
 * 定义Animator。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 22
 * @useinstead ohos.arkui.UIContext.UIContext#createAnimator
 * @noninterop
 */
interface AnimatorInterface {
  /**
   * 构造器参数。
   *
   * @param { string } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  (value: string): AnimatorAttribute;
}

/**
 * 定义Animator属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 22
 * @useinstead ohos.arkui.UIContext.UIContext#createAnimator
 * @noninterop
 */
declare class AnimatorAttribute extends CommonMethod<AnimatorAttribute> {
  /**
   * 控制播放状态。默认值是初始状态。
   *
   * @param { AnimationStatus } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  state(value: AnimationStatus): AnimatorAttribute;

  /**
   * 动画持续时间（毫秒）。
   *
   * @param { number } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  duration(value: number): AnimatorAttribute;

  /**
   * 动画曲线，默认为线性曲线。
   *
   * @param { Curve } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  curve(value: Curve): AnimatorAttribute;

  /**
   * 延迟的动画播放持续时间（毫秒）。默认情况下，动画不会延迟。
   *
   * @param { number } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  delay(value: number): AnimatorAttribute;

  /**
   * 设置动画开始前后的状态。
   *
   * @param { FillMode } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  fillMode(value: FillMode): AnimatorAttribute;

  /**
   * 默认播放一次。如果该值为-1，则播放不受限制。
   *
   * @param { number } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  iterations(value: number): AnimatorAttribute;

  /**
   * 设置动画播放模式。默认情况下，动画在播放完成后再次开始播放。
   *
   * @param { PlayMode } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  playMode(value: PlayMode): AnimatorAttribute;

  /**
   * 配置物理动画算法。
   *
   * @param { SpringMotion | FrictionMotion | ScrollMotion } value
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  motion(value: SpringMotion | FrictionMotion | ScrollMotion): AnimatorAttribute;

  /**
   * 状态回调，当动画开始播放时触发。
   *
   * @param { function } event
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  onStart(event: () => void): AnimatorAttribute;

  /**
   * 状态回调，在动画暂停时触发。
   *
   * @param { function } event
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  onPause(event: () => void): AnimatorAttribute;

  /**
   * 状态回调，在播放动画时触发。
   *
   * @param { function } event
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  onRepeat(event: () => void): AnimatorAttribute;

  /**
   * 状态回调，当动画被取消时触发。
   *
   * @param { function } event
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  onCancel(event: () => void): AnimatorAttribute;

  /**
   * 状态回调，当动画播放完成时触发。
   *
   * @param { function } event
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  onFinish(event: () => void): AnimatorAttribute;

  /**
   * 回调输入参数是动画播放期间的插值。
   *
   * @param { function } event
   * @returns { AnimatorAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @since 7 dynamiconly
   * @deprecated since 22
   */
  onFrame(event: (value: number) => void): AnimatorAttribute;
}

/**
 * 定义Animator组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 7 dynamiconly
 * @deprecated since 22
 * @useinstead ohos.arkui.UIContext.UIContext#createAnimator
 * @noninterop
 */
declare const Animator: AnimatorInterface;

/**
 * 定义Animator组件实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @since 9 dynamiconly
 * @deprecated since 22
 * @useinstead ohos.arkui.UIContext.UIContext#createAnimator
 * @noninterop
 */
declare const AnimatorInstance: AnimatorAttribute;
