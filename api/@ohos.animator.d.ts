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
 * Animator options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface AnimatorOptions {
  /**
   * Duration for playing the animation, in milliseconds.
   * 
   * Value range: [0, +∞).
   * 
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  duration: number;

  /**
   * Animation interpolation curve.
   * 
   * If the provided string is invalid, **"ease"** is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  easing: string;

  /**
   * Animation delay duration, in milliseconds. Value **0** means that there is no delay. If the value specified is a 
   * negative number, the animation starts playing ahead of its scheduled time. If the amount of time by which the 
   * playback is advanced exceeds the total duration of the animation, the animation immediately skips to its end state.
   * 
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  delay: number;

  /**
   * State of the animated target after the animation is executed.
   * 
   * **'none'**: No style is applied to the target before or after the animation is executed.
   * 
   * **'forwards'**: The target keeps the state at the end of the animation (defined in the last key frame) after the 
   * animation is executed.
   * 
   * **'backwards'**: During the delay period specified in [AnimatorOptions]{@link AnimatorOptions}, the animation uses 
   * the value defined in the first keyframe. When **direction** in [AnimatorOptions]{@link AnimatorOptions} is 
   * **'normal'** or **'alternate'**, the animation uses the **from** keyframe value. When **direction** in 
   * [AnimatorOptions]{@link AnimatorOptions} is **'reverse'** or **'alternate-reverse'**, the animation uses the **to**
   * keyframe value.
   * 
   * **'both'**: The animation follows the **'forwards'** and **'backwards'** rules.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  fill: "none" | "forwards" | "backwards" | "both";

  /**
   * Animation playback mode.
   * 
   * **'normal'**: plays the animation in forward loop mode.
   * 
   * **'reverse'**: plays the animation in reverse loop mode.
   * 
   * **'alternate'**: plays the animation in alternating loop mode. When the animation is played for an odd number of 
   * times, the playback is in forward direction. When the animation is played for an even number of times, the playback
   * is in reverse direction.
   * 
   * **'alternate-reverse'**: plays the animation in reverse alternating loop mode. When the animation is played for an 
   * odd number of times, the playback is in reverse direction. When the animation is played for an even number of 
   * times, the playback is in forward direction.
   * 
   * Default value: **'normal'**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  direction: "normal" | "reverse" | "alternate" | "alternate-reverse";

  /**
   * Number of times that the animation is played. The value **0** means the animation is not played, **-1** means the 
   * animation is played for an unlimited number of times, and a positive integer means the animation is played that 
   * specific number of times.
   * 
   * Note: Any negative value other than **-1** is treated as invalid. For invalid values, the animation is played once.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  iterations: number;

  /**
   * Start point of the animation interpolation.
   * 
   * Note: This setting affects the input parameter value of the 
   * [onFrame](docroot://reference/apis-arkui/js-apis-animator.md#properties) callback.
   * 
   * Default value: **0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  begin: number;

  /**
   * End point of animation interpolation.
   * 
   * Note: This setting affects the input parameter value of the 
   * [onFrame](docroot://reference/apis-arkui/js-apis-animator.md#properties) callback.
   * 
   * Default value: **1**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  end: number;
}

/**
 * Defines the animator result.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export interface AnimatorResult {
  /**
   * Updates this animator.
   *
   * @param { AnimatorOptions } options - Animator options.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.animator.reset
   */
  update(options: AnimatorOptions): void;

  /**
   * Resets the animation parameters of this animator.
   *
   * @param { AnimatorOptions } options - Animator options.
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
   * Plays this animation. The animation retains the previous playback state. For example, if the animation is set to 
   * **reverse** and paused, it will remain in **reverse** when resumed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  play(): void;

  /**
   * Ends the animation, triggering the [onFinish](docroot://reference/apis-arkui/js-apis-animator.md#properties) 
   * callback.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  finish(): void;

  /**
   * Pauses this animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  pause(): void;

  /**
   * Cancels the animation, triggering the [onCancel](docroot://reference/apis-arkui/js-apis-animator.md#properties) 
   * callback. This API is functionally identical to [finish]{@link AnimatorResult.finish} except for the callback it 
   * triggers. It is recommended that you use the **finish** API to end animations.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  cancel(): void;

  /**
   * Plays this animation in reverse order. This API does not take effect when the interpolating spring curve is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 6 dynamic
   */
  reverse(): void;

  /**
   * Called when a frame is received.
   * 
   * Note: This API is supported since API version 6 and deprecated since API version 12. You are advised to use 
   * **onFrame** instead.
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
   * Called when a frame is received.
   * 
   * **progress**: current value of the animation. Value range: [begin, end] defined in 
   * [AnimatorOptions]{@link AnimatorOptions}. Default value range: [0, 1]
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onFrame: (progress: number) => void;

  /**
   * Called when this animation is finished.
   * 
   * Note: This API is supported since API version 6 and deprecated since API version 12. You are advised to use 
   * **onFinish** instead.
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
   * Called when this animation is finished.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onFinish: () => void;

  /**
   * Called when this animation is canceled.
   * 
   * Note: This API is supported since API version 6 and deprecated since API version 12. You are advised to use 
   * **onCancel** instead.
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
   * Called when this animation is canceled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onCancel: () => void;

  /**
   * Called when this animation repeats.
   * 
   * Note: This API is supported since API version 6 and deprecated since API version 12. You are advised to use 
   * **onRepeat** instead.
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
   * Called when this animation repeats.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onRepeat: () => void;

  /**
   * Sets the expected frame rate range.
   *
   * @param { ExpectedFrameRateRange } rateRange - Expected frame rate range.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange): void;

  /**
   * Resets the animation parameters of this animator. Compared with 
   * [reset]{@link AnimatorResult.reset(options: AnimatorOptions)}, this API accepts parameters of the 
   * [SimpleAnimatorOptions]{@link SimpleAnimatorOptions} type.
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - Animator options.
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
 * Creates an **Animator** object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 6 dynamic
 */
export default class Animator {
  /**
   * Creates an animation.
   *
   * @param { AnimatorOptions } options - Animator options.
   * @returns { AnimatorResult } Animator result.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.animator.create
   */
  static createAnimator(options: AnimatorOptions): AnimatorResult;

  /**
   * Creates an **AnimatorResult** object for animations.
   * 
   * > **NOTE**
   * >
   * > - Since API version 10, you can use the 
   * > [createAnimator](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#createanimator) API in 
   * > [UIContext]{@link @ohos.arkui.UIContext}, which ensures that the object is created in the intended UI instance.
   *
   * @param { AnimatorOptions } options - Animator options.
   * @returns { AnimatorResult } Animator result.
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
   * Creates an **AnimatorResult** object for animations. Compared with
   * [create]{@link Animator.create(options: AnimatorOptions)}, this API accepts parameters of the 
   * [SimpleAnimatorOptions]{@link SimpleAnimatorOptions} type.
   *
   * @param { AnimatorOptions | SimpleAnimatorOptions } options - Parameters of the animation.
   * @returns { AnimatorResult } Animator result.
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
 * Defines a simple animation parameter object. Unlike **AnimatorOptions**, this object comes with some default values 
 * for certain animation parameters, so you do not have to set them manually.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare class SimpleAnimatorOptions {

  /**
   * Sets the number of times that this animation is played.
   *
   * @param { number } iterations - Number of times that the animation is played. The value **0** means the animation is
   *     not played, and **-1** means the animation is played for an unlimited number of times.<br>Default value: **1**
   * @returns { SimpleAnimatorOptions } **SimpleAnimatorOptions** object for animation parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  iterations(iterations: number): SimpleAnimatorOptions;

  /**
   * Sets the playback direction for this animator animation.
   *
   * @param { PlayMode } direction - Playback direction.<br>Default value: **PlayMode.Normal**
   * @returns { SimpleAnimatorOptions } **SimpleAnimatorOptions** object for animation parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  direction(direction: PlayMode): SimpleAnimatorOptions;

  /**
   * A constructor used to create a **SimpleAnimatorOptions** instance.
   *
   * @param { number } begin - Start point of the animation interpolation.
   * @param { number } end - End point of animation interpolation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(begin: number, end: number);

  /**
   * Sets the fill mode for this animation.
   *
   * @param { FillMode } fillMode - Fill mode, which affects how the animation behaves during the delay period and after
   *     it ends.<br>Default value: **FillMode.Forwards**
   * @returns { SimpleAnimatorOptions } **SimpleAnimatorOptions** object for animation parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  fill(fillMode: FillMode): SimpleAnimatorOptions;

  /**
   * Sets the playback delay for this animation.
   *
   * @param { number } delay - Playback delay, in milliseconds. The value **0** indicates no delay. If the value
   *     specified is a negative number, the animation starts playing ahead of its scheduled time. If the amount of time
   *     by which the playback is advanced exceeds the total duration of the animation, the animation immediately skips
   *     to its end state.<br>Default value: **0**
   * @returns { SimpleAnimatorOptions } **SimpleAnimatorOptions** object for animation parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  delay(delay: number): SimpleAnimatorOptions;

  /**
   * Sets the interpolation curve for this animation.
   *
   * @param { string } curve - Interpolation curve. For details, see [AnimatorOptions]{@link AnimatorOptions}.<br>
   *     Default value: **"ease"**
   * @returns { SimpleAnimatorOptions } **SimpleAnimatorOptions** object for animation parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  easing(curve: string): SimpleAnimatorOptions;

  /**
   * Sets the animation duration.
   *
   * @param { number } duration - Animation duration, in milliseconds.<br>Default value: **1000**
   * @returns { SimpleAnimatorOptions } **SimpleAnimatorOptions** object for animation parameters.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  duration(duration: number): SimpleAnimatorOptions;
}