/*
 * Copyright (c) 2020-2023 Huawei Device Co., Ltd.
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
 * 定义动画选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface AnimatorOptions {
  /**
   * 动画播放的时长，单位毫秒。
   * 
   * 取值范围：[0, +∞)  
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  duration: number;

  /**
   * 动画插值曲线，支持的曲线类型可参考表1。
   * 
   * 非法字符串时取:"ease"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  easing: string;

  /**
   * 动画延时播放时长，单位毫秒，设置为0时，表示不延时。设置为负数时动画提前播放，如果提前播放的时长大于动画总时长，动画直接过渡到终点。 
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  delay: number;

  /**
   * 动画执行后是否恢复到初始状态，动画执行后，动画结束时的状态（在最后一个关键帧中定义）将保留。
   * 
   * 'none'：在动画执行之前和之后都不会应用任何样式到目标上。
   * 
   * 'forwards'：在动画结束后，目标将保留动画结束时的状态（在最后一个关键帧中定义）。
   * 
   * 'backwards'：动画将在[AnimatorOptions]{@link AnimatorOptions}中的delay期间应用第一个关键帧中定义的值。当
   * [AnimatorOptions]{@link AnimatorOptions}中的direction为'normal'或'alternate'时应用from关键帧中的值，当
   * [AnimatorOptions]{@link AnimatorOptions}中的direction为'reverse'或'alternate-reverse'时应用to关键帧中的值。
   * 
   * 'both'：动画将遵循forwards和backwards的规则，从而在两个方向上扩展动画属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  fill: "none" | "forwards" | "backwards" | "both";

  /**
   * 动画播放模式。
   * 
   * 'normal'： 动画正向循环播放。
   * 
   * 'reverse'： 动画反向循环播放。
   * 
   * 'alternate'：动画交替循环播放，奇数次正向播放，偶数次反向播放。
   * 
   * 'alternate-reverse'：动画反向交替循环播放，奇数次反向播放，偶数次正向播放。
   * 
   * 默认值：'normal'
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  direction: "normal" | "reverse" | "alternate" | "alternate-reverse";

  /**
   * 动画播放次数。设置为0时不播放，设置为-1时无限次播放，设置大于0时为播放次数。
   * 
   * **说明:** 设置为除-1外其他负数视为无效取值，无效取值动画默认播放1次。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  iterations: number;

  /**
   * 动画插值起点。
   * 
   * **说明:** 会影响[onFrame](docroot://reference/apis-arkui/js-apis-animator.md#属性)回调的入参值。
   * 
   * 默认值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  begin: number;

  /**
   * 动画插值终点。
   * 
   * **说明:** 会影响[onFrame](docroot://reference/apis-arkui/js-apis-animator.md#属性)回调的入参值。   
   * 
   * 默认值：1
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  end: number;
}

/**
 * 定义Animator结果接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface AnimatorResult {
  /**
   * 更新当前动画器。
   * 
   * > **说明：**  
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。建议使用[reset]{@link AnimatorResult.reset(options: AnimatorOptions)}替代。
   *
   * @param { AnimatorOptions } options - 定义动画选项。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead AnimatorResult.reset(options: AnimatorOptions)
   */
  update(options: AnimatorOptions): void;

  /**
   * 重置当前animator动画参数。
   *
   * @param { AnimatorOptions } options - 定义动画选项。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The specified page is not found or the object property list is not obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  reset(options: AnimatorOptions): void;

  /**
   * 启动动画。动画会保留上一次的播放状态，比如播放状态设置reverse后，再次播放会保留reverse的播放状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  play(): void;

  /**
   * 结束动画，会触发[onFinish](docroot://reference/apis-arkui/js-apis-animator.md#属性)回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  finish(): void;

  /**
   * 暂停动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  pause(): void;

  /**
   * 取消动画，会触发[onCancel](docroot://reference/apis-arkui/js-apis-animator.md#属性)回调。此接口和
   * [finish]{@link AnimatorResult.finish}接口功能上没有区别，仅触发的回调不同，建议使用finish接口结束动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  cancel(): void;

  /**
   * 以相反的顺序播放动画。使用interpolating-spring曲线时此接口无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  reverse(): void;

  /**
   * 接收到帧时回调。
   * 
   * **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onFrame。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.animator.onFrame
   */
  onframe: (progress: number) => void;

  /**
   * 接收到帧时回调。
   * 
   * progress表示动画的当前值。取值范围为[AnimatorOptions]{@link AnimatorOptions}定义的[begin, end]，默认取值范围为[0, 1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onFrame: (progress: number) => void;

  /**
   * 动画完成时回调。
   * 
   * **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onFinish。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.animator.onFinish
   */
  onfinish: () => void;

  /**
   * 动画完成时回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onFinish: () => void;

  /**
   * 动画被取消时回调。
   * 
   * **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onCancel。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.animator.onCancel
   */
  oncancel: () => void;

  /**
   * 动画被取消时回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCancel: () => void;

  /**
   * 动画重复时回调。
   * 
   * **说明:** 从API version 6开始支持，从API version 12开始废弃，推荐使用onRepeat。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamiconly
   * @deprecated since 12
   * @useinstead ohos.animator.onRepeat
   */
  onrepeat: () => void;

  /**
   * 动画重复时回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onRepeat: () => void;

  /**
   * 设置期望的帧率范围。
   *
   * @param { ExpectedFrameRateRange } rateRange - 设置期望的帧率范围。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange): void;

  /**
   * 重置当前animator动画参数。与[reset]{@link AnimatorResult.reset(options: AnimatorOptions)}相比，新增对
   * [SimpleAnimatorOptions]{@link SimpleAnimatorOptions}类型入参的支持。
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - 定义动画选项。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @throws { BusinessError } 100001 - The specified page is not found or the object property list is not obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reset(options: AnimatorOptions | SimpleAnimatorOptions): void;
}

/**
 * 定义Animator类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export default class Animator {
  /**
   * 创建动画。
   * 
   * > **说明：**
   *
   * @param { AnimatorOptions } options - 定义动画选项。
   * @returns { AnimatorResult } Animator结果接口。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead Animator.create(options: AnimatorOptions)
   */
  static createAnimator(options: AnimatorOptions): AnimatorResult;

  /**
   * 创建animator动画结果对象（AnimatorResult）。
   * 
   * > **说明：**
   * >
   * > -
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [createAnimator](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#createanimator)来明确UI的执行上下文。
   *
   * @param { AnimatorOptions } options - 定义动画选项。
   * @returns { AnimatorResult } Animator结果接口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#createAnimator
   */
  static create(options: AnimatorOptions): AnimatorResult;

  /**
   * 创建animator动画结果对象（AnimatorResult）。与[create]{@link Animator.create(options: AnimatorOptions)}相比，新增对
   * [SimpleAnimatorOptions]{@link SimpleAnimatorOptions}类型入参的支持。
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - 定义动画参数选项。
   * @returns { AnimatorResult } Animator结果接口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  static create(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult;
}

/**
 * animator简易动画参数对象。与AnimatorOptions相比，部分动画参数有默认值，可不设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class SimpleAnimatorOptions {

  /**
   * 设置animator动画播放次数。
   *
   * @param { number } iterations - 设置animator动画播放次数，设置为0时不播放，设置为-1时无限次播放。<br/>默认值：1
   * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  iterations(iterations: number): SimpleAnimatorOptions;

  /**
   * 设置animator动画播放方向。
   *
   * @param { PlayMode } direction - 设置animator动画播放方向。<br/>默认值：PlayMode.Normal
   * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  direction(direction: PlayMode): SimpleAnimatorOptions;

  /**
   * SimpleAnimatorOptions的构造函数。
   *
   * @param { number } begin - 动画插值起点。
   * @param { number } end - 动画插值终点。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(begin: number, end: number);

  /**
   * 设置animator动画填充方式。
   *
   * @param { FillMode } fillMode - 设置animator动画填充方式，影响动画delay期间和结束时的表现。<br/>默认值：FillMode.Forwards
   * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fill(fillMode: FillMode): SimpleAnimatorOptions;

  /**
   * 设置animator动画播放时延。
   *
   * @param { number } delay - 设置animator动画播放时延，单位毫秒，设置为0时，表示不延时。设置为负数时动画提前播放，如果提前播放的时长大于动画总时长，动画直接过渡到终点。<br/>默认值：0
   * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  delay(delay: number): SimpleAnimatorOptions;

  /**
   * 设置animator动画插值曲线。
   *
   * @param { string } curve - 设置animator动画插值曲线，具体说明参考[AnimatorOptions]{@link AnimatorOptions}。<br/>默认值：“ease”
   * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  easing(curve: string): SimpleAnimatorOptions;

  /**
   * 设置animator动画时长。
   *
   * @param { number } duration - 设置动画时长，单位毫秒。<br/>默认值：1000
   * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  duration(duration: number): SimpleAnimatorOptions;
}