/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { FillMode, PlayMode } from './arkui/component/enums';
import { ExpectedFrameRateRange } from './arkui/component/common';

/**
 * 定义动画选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface AnimatorOptions {
 
    /**
     * 动画播放的时长，单位毫秒。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration: int;

    /**
     * 动画插值曲线，非法字符串时取:"ease"。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    easing: string;

    /**
     * 动画延时播放时长，单位毫秒，设置为0时，表示不延时。设置为负数时动画提前播放，如果提前播放的时长大于动画总时长，动画直接过渡到终点。 
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay: int;

    /**
     * 动画执行后是否恢复到初始状态，动画执行后，动画结束时的状态（在最后一个关键帧中定义）将保留。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fill: "none" | "forwards" | "backwards" | "both";

    /**
     * 动画播放模式。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction: "normal" | "reverse" | "alternate" | "alternate-reverse";

    /**
     * 动画播放次数。设置为0时不播放，设置为-1时无限次播放，设置大于0时为播放次数。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    iterations: int;

    /**
     * 动画插值起点。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    begin: double;

    /**
     * 动画插值终点。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    end: double;
}
/**
 * animator简易动画参数对象。与AnimatorOptions相比，部分动画参数有默认值，可不设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class SimpleAnimatorOptions {
    /**
     * SimpleAnimatorOptions的构造函数。
     *
     * @param { double } begin - 动画插值起点。
     * @param { double } end - 动画插值终点。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(begin: double, end: double);
    /**
     * 设置animator动画时长。
     *
     * @param { int } duration - 设置动画时长，单位毫秒，默认值：1000。
     * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    duration(duration: int): SimpleAnimatorOptions;
    /**
     * 设置animator动画插值曲线。
     *
     * @param { string } curve - 设置animator动画插值曲线，默认值：“ease”。
     * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    easing(curve: string): SimpleAnimatorOptions;
    /**
     * 设置animator动画播放时延。
     *
     * @param { int } delay - 设置animator动画播放时延，单位毫秒，设置为0时，表示不延时。设置为负数时动画提前播放，如果提前播放的时长大于动画总时长，动画直接过渡到终点，默认值：0。
     * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    delay(delay: int): SimpleAnimatorOptions;

    /**
     * 设置animator动画填充方式。
     *
     * @param { FillMode } fillMode - 设置animator动画填充方式，影响动画delay期间和结束时的表现，默认值：FillMode.Forwards。
     * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fill(fillMode: FillMode): SimpleAnimatorOptions;
    /**
     * 设置animator动画播放方向。
     *
     * @param { PlayMode } direction - 设置animator动画播放方向，默认值：PlayMode.Normal。
     * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    direction(direction: PlayMode): SimpleAnimatorOptions;
    /**
     * 设置animator动画播放次数。
     *
     * @param { int } iterations - 设置animator动画播放次数，设置为0时不播放，设置为-1时无限次播放，默认值：1。
     * @returns { SimpleAnimatorOptions } Animator简易动画参数对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    iterations(iterations: int): SimpleAnimatorOptions;
}

/**
 * 定义Animator结果接口。
 * 
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface AnimatorResult {

    /**
     * 重置当前animator动画参数。
     *
     * @param { AnimatorOptions | SimpleAnimatorOptions } options - 定义动画选项。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameters types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 100001 - The specified page is not found or the object property list is not obtained.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reset(options: AnimatorOptions | SimpleAnimatorOptions): void;

    /**
     * 启动动画。动画会保留上一次的播放状态，比如播放状态设置reverse后，再次播放会保留reverse的播放状态。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    play(): void;

    /**
     * 结束动画，会触发onFinish回调。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    finish(): void;

    /**
     * 暂停动画。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    pause(): void;

    /**
     * 取消动画，会触发onCancel回调。
     * 
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    cancel(): void;

    /**
     * 以相反的顺序播放动画。使用interpolating-spring曲线时此接口无效。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    reverse(): void;
    
    /**
     * 接收到帧时回调。
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFrame: (progress: double) => void;

    /**
     * 动画完成时回调。
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onFinish: () => void;

    /**
     * 动画被取消时回调。
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onCancel: () => void;

    /**
     * 动画重复时回调。
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    onRepeat: () => void;

    /**
     * 设置期望的帧率范围。
     *
     * @param { ExpectedFrameRateRange } rateRange - 设置期望的帧率范围。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange): void;
}

/**
 * 定义Animator类
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export default declare class Animator {
  /**
   * 为自定义动画创建Animator对象。
   * This interface depends on the UI context and cannot be used when the UI context is unclear. It is recommended to
   * use {@link ohos.arkui.UIContext.UIContext#createAnimator}.
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - Options.
   * @returns { AnimatorResult } - animator result
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br> 1. Mandatory parameters are left unspecified.
   *     <br> 2. Incorrect parameters types.
   *     <br> 3. Parameter verification failed.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static create(options: AnimatorOptions | SimpleAnimatorOptions): AnimatorResult;
}
