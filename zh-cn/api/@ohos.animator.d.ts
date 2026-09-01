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
 * 本模块提供组件动画效果，包括定义动画、启动动画和以相反的顺序播放动画等。
 * 
 * > **说明：**
 * >
 * > - 本模块从API version 9开始支持在ArkTS中使用。
 * >
 * > - 该模块不支持在[UIAbility]{@link @ohos.app.ability.UIAbility}的文件声明处使用，即不能在UIAbility的生命周期中调用，需要在创建组件实例后使用。
 * >
 * > - 本模块功能依赖UI的执行上下文，不可在[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的地方使用，参见
 * > [UIContext]{@link @ohos.arkui.UIContext}说明。
 * >
 * > - 自定义组件中通常会持有一个由[createAnimator]{@link @ohos.arkui.UIContext:UIContext.createAnimator}接口返回的
 * > [AnimatorResult]{@link AnimatorResult}对象，以确保动画对象在动画过程中不被析构，该对象通过回调捕获了自定义组件对象，因此需要在自定义组件销毁时的
 * > [aboutToDisappear]{@link aboutToDisappear}生命周期中释放动画对象，以避免因循环依赖导致内存泄漏。详细示例可参考：
 * > [基于ArkTS扩展的声明式开发范式](docroot://reference/apis-arkui/js-apis-animator.md#基于arkts扩展的声明式开发范式)。
 * >
 * > - Animator对象析构或主动调用[cancel]{@link AnimatorResult.cancel}、[finish]{@link AnimatorResult.finish}方法时，都会触发一次额外的
 * > [onFrame]{@link AnimatorResult.onFrame}，返回值是动画终点值。因此，如果在动画过程中调用
 * > [cancel]{@link AnimatorResult.cancel}、[finish]{@link AnimatorResult.finish}，会导致属性值在一帧内跳变至终点。若希望动画在中途暂停，可先将onFrame设置
 * > 为空函数，再调用[finish]{@link AnimatorResult.finish}。
 * >
 * > - 对于无限循环的Animator动画，即使开发者选项中将全局动画速率设置为0（关闭动画），循环动画仍会继续执行。
 *
 * @file 动画
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
   * **说明：** 使用interpolating-spring曲线时，duration不生效，由弹簧参数决定。
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
   * 非法字符串时取："ease"。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  easing: string;

  /**
   * 动画延时播放时长，单位毫秒，设置为0时，表示不延时。设置为负数时动画提前播放，如果提前播放的时长大于动画总时长（由duration和iterations参数共同决定），动画直接过渡到终点。 
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
   * 动画填充模式，决定动画执行前（delay期间）和执行后是否将关键帧样式应用到目标上。
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
   * 动画播放方向。
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
   * **说明：** 使用interpolating-spring曲线时，direction固定设置为'normal'，其他设置无效。
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
   * **说明：** 使用interpolating-spring曲线时，iterations固定设置为1，其他设置无效。
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
   * **说明:** 会影响[onFrame]{@link AnimatorResult.onFrame}回调的入参值。
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
   * **说明:** 会影响[onFrame]{@link AnimatorResult.onFrame}回调的入参值。   
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
 * 定义AnimatorResult接口，提供动画播放状态回调及动画控制方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface AnimatorResult {
  /**
   * 更新当前animator动画参数。
   * 
   * > **说明：**
   * >
   * > 从API version 6开始支持，从API version 9开始废弃。
   *
   * @param { AnimatorOptions } options - 动画配置选项，用于定义动画的播放时长、插值曲线、延时、填充模式、播放方向、播放次数及插值起止值等参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.animator.reset
   */
  update(options: AnimatorOptions): void;

  /**
   * 重置当前animator动画参数。建议在动画未开始播放或播放结束后（[onFinish]{@link AnimatorResult.onFinish}或
   * [onCancel]{@link AnimatorResult.onCancel}回调触发后）调用此方法，重置后需调用
   * [play]{@link AnimatorResult.play}方法重新启动动画。
   *
   * @param { AnimatorOptions } options - 动画配置选项，用于定义动画的播放时长、插值曲线、延时、填充模式、播放方向、播放次数及插值起止值等参数。
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
   * 启动动画。动画暂停后调用此方法可恢复播放。动画会保留上一次的播放状态，比如播放状态设置reverse后，再次播放会保留reverse的播放状态。动画结束后（
   * [onFinish]{@link AnimatorResult.onFinish}或[onCancel]{@link AnimatorResult.onCancel}回调触发后）可再次调用此方法重新播放动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  play(): void;

  /**
   * 结束动画，会触发[onFinish]{@link AnimatorResult.onFinish}回调。与[cancel]{@link AnimatorResult.cancel}方
   * 法功能相同，但cancel()触发[onCancel]{@link AnimatorResult.onCancel}回调，建议使用finish方法结束动画。调用此方法时会触发一次额外
   * 的[onFrame]{@link AnimatorResult.onFrame}回调，返回值是动画终点值，可能导致属性值在一帧内跳变至终点。若希望动画在中途暂停，可先将
   * onFrame设置为空函数，再调用finish。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  finish(): void;

  /**
   * 暂停动画。暂停后可调用[play]{@link AnimatorResult.play}方法恢复播放，也可调用[finish]{@link AnimatorResult.finish}或
   * [cancel]{@link AnimatorResult.cancel}方法结束动画。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  pause(): void;

  /**
   * 取消动画，会触发[onCancel]{@link AnimatorResult.onCancel}回调。此接口和
   * [finish]{@link AnimatorResult.finish}接口功能上没有区别，仅触发的回调不同，建议使用finish接口结束动画。调用此方法时会触发一次额外的
   * [onFrame]{@link AnimatorResult.onFrame}回调，返回值是动画终点值，可能导致属性值在一帧内跳变至终点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  cancel(): void;

  /**
   * 以相反的顺序播放动画。使用interpolating-spring曲线时此接口无效。调用reverse后动画将以相反方向继续播放，可通过[pause]{@link AnimatorResult.pause}暂停或
   * [finish]{@link AnimatorResult.finish}结束动画。
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
   * **说明：** 从API version 6开始支持，从API version 12开始废弃，推荐使用
   * [onFrame]{@link AnimatorResult.onframe}。
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
   * **说明：** 调用cancel、finish方法时，会触发一次额外的onFrame回调，返回值为动画终点值。
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
   * **说明：** 从API version 6开始支持，从API version 12开始废弃，推荐使用
   * [onFinish]{@link AnimatorResult.onFinish}。
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
   * **说明：** 从API version 6开始支持，从API version 12开始废弃，推荐使用
   * [onCancel]{@link AnimatorResult.onCancel}。
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
   * **说明：** 从API version 6开始支持，从API version 12开始废弃，推荐使用
   * [onRepeat]{@link AnimatorResult.onRepeat}。
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
   * 设置期望的帧率范围，包含最小、最大和期望帧率值。
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
   * [SimpleAnimatorOptions]{@link SimpleAnimatorOptions}类型入参的支持。建议在动画未开始播放或播放结束后（
   * [onFinish]{@link AnimatorResult.onFinish}或
   * [onCancel]{@link AnimatorResult.onCancel}回调触发后）调用此方法，重新设置动画参数后调用
   * [play]{@link AnimatorResult.play}启动新动画。
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
   * 创建动画。本模块功能依赖UI的执行上下文，不可在UI上下文不明确的地方使用，推荐通过使用UIContext中的createAnimator接口明确UI上下文。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [createAnimator]{@link @ohos.arkui.UIContext:UIContext.createAnimator}来明确UI的执行上下文。
   *
   * @param { AnimatorOptions } options - 动画配置选项，用于定义动画的播放时长、插值曲线、延时、填充模式、播放方向、播放次数及插值起止值等参数。
   * @returns { AnimatorResult } 动画控制对象，可设置动画过程中的回调函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.animator.create
   */
  static createAnimator(options: AnimatorOptions): AnimatorResult;

  /**
   * 创建animator动画结果对象（AnimatorResult）。
   * 
   * > **说明：**
   * >
   * > - 从API version 10开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [createAnimator]{@link @ohos.arkui.UIContext:UIContext.createAnimator}来明确UI的执行上下文。
   *
   * @param { AnimatorOptions } options - 动画配置选项，包含播放时长、插值曲线、延时、填充模式、播放方向、播放次数及插值起止值等参数。
   * @returns { AnimatorResult } 动画控制对象，可用于设置动画过程中的回调函数。
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
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - 定义动画选项。AnimatorOptions适用于需要完整自定义所有动画参数的场景；
   *     SimpleAnimatorOptions适用于仅需指定起点和终点的简易动画场景，其余参数使用默认值。
   * @returns { AnimatorResult } 动画控制对象，可设置动画过程中的回调函数。
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
 * animator简易动画参数对象。与AnimatorOptions相比，duration、easing、delay、fill、direction、iterations等动画参数有默认值，可不设置。
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
   * @param { number } iterations - 设置animator动画播放次数，设置为0时不播放，设置为-1时无限次播放，设置大于0时为播放次数。
   *     <br>**说明：** 设置为除-1外其他负数视为无效取值，无效取值动画默认播放1次。
   *     <br>默认值：1
   *     <br>使用interpolating-spring曲线时，iterations设置无效，固定设置为1。
   * @returns { SimpleAnimatorOptions } 返回当前简易动画参数对象，支持链式调用以继续配置动画参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  iterations(iterations: number): SimpleAnimatorOptions;

  /**
   * 设置animator动画播放模式。使用interpolating-spring曲线时，此设置无效，direction固定设置为PlayMode.Normal。
   *
   * @param { PlayMode } direction - 设置animator动画播放方向。
   *     <br>PlayMode.Normal：动画正向循环播放。
   *     <br>PlayMode.Reverse：动画反向循环播放。
   *     <br>PlayMode.Alternate：动画交替循环播放，奇数次正向播放，偶数次反向播放。
   *     <br>PlayMode.AlternateReverse：动画反向交替循环播放，奇数次反向播放，偶数次正向播放。
   *     <br>默认值：PlayMode.Normal
   * @returns { SimpleAnimatorOptions } 返回当前简易动画参数对象，支持链式调用以继续配置动画参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  direction(direction: PlayMode): SimpleAnimatorOptions;

  /**
   * 创建SimpleAnimatorOptions实例，指定动画插值起点和终点。
   *
   * @param { number } begin - 动画插值起点。
   *     <br>**说明：** 会影响[onFrame]{@link AnimatorResult.onFrame}回调的入参值，与end参数共同决定onFrame回调值的范围。
   * @param { number } end - 动画插值终点。
   *     <br>**说明:** 会影响[onFrame]{@link AnimatorResult.onFrame}回调的入参值，与begin参数共同决定onFrame回调值的范
   *     围。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(begin: number, end: number);

  /**
   * 设置animator动画填充方式。使用interpolating-spring曲线时，此设置无效，fill固定设置为FillMode.Forwards。
   *
   * @param { FillMode } fillMode - 设置animator动画填充方式，影响动画delay期间和结束时的表现。使用interpolating-spring曲线时，fill设置无效，固定设置为
   *     FillMode.Forwards。
   *     <br>默认值：FillMode.Forwards
   * @returns { SimpleAnimatorOptions } 返回当前简易动画参数对象，支持链式调用以继续配置动画参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fill(fillMode: FillMode): SimpleAnimatorOptions;

  /**
   * 设置animator动画延时播放时长。
   *
   * @param { number } delay - 设置animator动画播放时延，单位毫秒，设置为0时，表示不延时。设置为负数时动画提前播放，如果提前播放的时长大于动画总时长，动画直接过渡到终点。
   *     <br>默认值：0
   * @returns { SimpleAnimatorOptions } 返回当前简易动画参数对象，支持链式调用以继续配置动画参数。
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
   * @param { string } curve - 设置animator动画插值曲线，具体说明参考[AnimatorOptions]{@link AnimatorOptions}。
   *     <br>默认值：“ease”
   * @returns { SimpleAnimatorOptions } 返回当前简易动画参数对象，支持链式调用以继续配置动画参数。
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
   * @param { number } duration - 设置动画播放的时长，单位毫秒。
   *     <br>默认值：1000
   *     <br>**说明：** 使用interpolating-spring曲线时，duration不生效，由弹簧参数决定。
   * @returns { SimpleAnimatorOptions } 返回当前简易动画参数对象，支持链式调用以继续配置动画参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  duration(duration: number): SimpleAnimatorOptions;
}