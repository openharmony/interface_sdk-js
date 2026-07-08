/*
  * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * 配置弧形Slider的屏幕显示位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */

export declare enum ArcSliderPosition {

  /**
   * 弧形Slider的屏幕显示位置在左侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  LEFT = 0,

  /**
   * 弧形Slider的屏幕显示位置在右侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  RIGHT = 1
}

/**
 * ArcSliderValueOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderValueOptionsConstructorOptions {
  /**
   * 设置当前进度值。
   * 
   * 默认值：与参数min的取值一致
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  progress?: number;

  /**
   * 设置最小值。
   * 
   * 默认值：0
   * 
   * @Trace
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  min?: number;

  /**
   * 设置最大值。
   * 
   * 默认值：100
   * 
   * **说明：**
   * 
   * 当出现异常情况min >= max时，min取默认值0，max取默认值100。
   * 
   * progress不在[min, max]范围之内，取min或者max，靠近min取min，靠近max取max。
   * 
   * @Trace
   *
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  max?: number;
}

/**
 * 配置弧形Slider的数值信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderValueOptions {
  /**
   * 设置当前进度值。
   * 
   * 默认值：与参数min的取值一致
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  progress?: number;

  /**
   * 设置最小值。
   * 
   * 默认值：0
   * 
   * @Trace
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  min?: number;

  /**
   * 设置最大值。
   * 
   * 默认值：100
   * 
   * **说明：**
   * 
   * 当出现异常情况min >= max时，min取默认值0，max取默认值100。
   * 
   * progress不在[min, max]范围之内，取min或者max，靠近min取min，靠近max取max。
   * 
   * @Trace
   *
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  max?: number;

  /**
   * ArcSliderValueOptions的构造函数。
   *
   * @param { ArcSliderValueOptionsConstructorOptions } options - ArcSliderValueOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderValueOptionsConstructorOptions);
}

/**
 * ArcSliderLayoutValueOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderLayoutOptionsConstructorOptions {
  /**
   * 设置弧形Slider取值范围是否反向。值为false时表示从上往下滑。
   * 
   * 默认值：true，表示从下往上滑动。
   * 
   * @Trace
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reverse?: boolean;
  /**
   * 弧形Slider的屏幕显示位置。
   * 
   * 默认值：ArcSliderPosition.RIGHT
   * 
   * @Trace
   *
   * @default ArcSliderPosition.RIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  position?: ArcSliderPosition;
}

/**
 * 配置弧形Slider的布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderLayoutOptions {
  /**
   * 设置弧形Slider取值范围是否反向。值为false时表示从上往下滑。
   * 
   * 默认值：true，表示从下往上滑动。
   * 
   * @Trace
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  reverse?: boolean;

  /**
   * 弧形Slider的屏幕显示位置。
   * 
   * 默认值：ArcSliderPosition.RIGHT
   * 
   * @Trace
   *
   * @default ArcSliderPosition.RIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  position?: ArcSliderPosition;

  /**
   * ArcSliderLayoutOptions的构造函数。
   *
   * @param { ArcSliderLayoutOptionsConstructorOptions } options - ArcSliderLayoutOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderLayoutOptionsConstructorOptions);
}

/**
 * ArcSliderStyleOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderStyleOptionsConstructorOptions {
  /**
   * 正常状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：5
   * 
   * 取值范围：[5, 16]，异常值按默认值处理。
   * 
   * @Trace
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  trackThickness?: number;

  /**
   * 放大状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：24
   * 
   * 取值范围：[24, 36]，异常值按默认值处理。
   * 
   * @Trace
   *
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activeTrackThickness?: number;

  /**
   * 设置描边背景色。
   * 
   * 默认值：#33FFFFFF
   * 
   * @Trace
   *
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  trackColor?: string;

  /**
   * 设置描边高亮色。
   * 
   * 默认值：#FF5EA1FF
   * 
   * @Trace
   *
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor?: string;

  /**
   * 设置描边背景模糊值，单位：vp。
   * 
   * 默认值：20
   * 
   * 设置小于0的值时，按照默认值处理。
   * 
   * @Trace
   *
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  trackBlur?: number;
}

/**
 * 配置弧形Slider的样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderStyleOptions {
  /**
   * 正常状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：5
   * 
   * 取值范围：[5, 16]，异常值按默认值处理。
   * 
   * @Trace
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  trackThickness?: number;

  /**
   * 放大状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：24
   * 
   * 取值范围：[24, 36]，异常值按默认值处理。
   * 
   * @Trace
   *
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  activeTrackThickness?: number;

  /**
   * 设置描边背景色。
   * 
   * 默认值：#33FFFFFF
   * 
   * @Trace
   *
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  trackColor?: string;

  /**
   * 设置描边高亮色。
   * 
   * 默认值：#FF5EA1FF
   * 
   * @Trace
   *
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  selectedColor?: string;

  /**
   * 设置描边背景模糊值，单位：vp。
   * 
   * 默认值：20
   * 
   * 设置小于0的值时，按照默认值处理。
   * 
   * @Trace
   *
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  trackBlur?: number;

  /**
   * ArcSliderStyleOptions的构造函数。
   *
   * @param { ArcSliderStyleOptionsConstructorOptions } options - ArcSliderStyleOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderStyleOptionsConstructorOptions);
}

/**
 * 弧形Slider被触摸时，告知应用。
 *
 * @param { TouchEvent } event - 获得TouchEvent对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderTouchHandler = (event: TouchEvent) => void;

/**
 * 弧形Slider的进度值发生变化时，告知应用。
 *
 * @param { number } progress - Slider当前的进度值。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderChangeHandler = (progress: number) => void;

/**
 * 弧形Slider放大或缩小时，告知应用。
 *
 * @param { boolean } isEnlarged - ArcSlider当前是否放大。<br/>isEnlarged为false时，ArcSlider组件处于缩小状态。<br/>isEnlarged为true时，
 *     ArcSlider组件处于放大状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void;

/**
 * ArcSliderOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderOptionsConstructorOptions {
  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  valueOptions?: ArcSliderValueOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  styleOptions?: ArcSliderStyleOptions;

  /**
   * 设置旋转表冠的灵敏度。
   * 
   * 默认值：CrownSensitivity.MEDIUM
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * 弧形Slider被触摸时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onTouch?: ArcSliderTouchHandler;

  /**
   * 弧形Slider的进度值发生变化时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange?: ArcSliderChangeHandler;

  /**
   * 弧形Slider放大或缩小时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnlarge?: ArcSliderEnlargeHandler;
}

/**
 * 配置弧形Slider的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderOptions {
  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  valueOptions?: ArcSliderValueOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  styleOptions?: ArcSliderStyleOptions;

  /**
   * 设置旋转表冠的灵敏度。
   * 
   * 默认值：CrownSensitivity.MEDIUM
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * 弧形Slider被触摸时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onTouch?: ArcSliderTouchHandler;

  /**
   * 弧形Slider的进度值发生变化时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onChange?: ArcSliderChangeHandler;

  /**
   * 弧形Slider放大或缩小时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   * 
   * @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onEnlarge?: ArcSliderEnlargeHandler;

  /**
   * ArcSliderOptions的构造函数。
   *
   * @param { ArcSliderOptionsConstructorOptions } options - ArcSliderOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderOptionsConstructorOptions);
}

/**
 * 弧形滑动条组件，通常用于在圆形屏幕的穿戴设备中快速调节设置值，如音量调节、亮度调节等应用场景。
 * 
 * > **说明：**
 * >
 * > -
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@Component
declare struct ArcSlider {
  /**
   * 配置弧形滑动条的参数。
   * 
   * 默认值：[ArcSliderOptions]{@link ArcSliderOptions}的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  options: ArcSliderOptions;
}

export {
  ArcSlider,
  ArcSliderOptions,
  ArcSliderValueOptions,
  ArcSliderLayoutOptions,
  ArcSliderStyleOptions,
  ArcSliderValueOptionsConstructorOptions,
  ArcSliderLayoutOptionsConstructorOptions,
  ArcSliderStyleOptionsConstructorOptions,
  ArcSliderOptionsConstructorOptions,
  ArcSliderTouchHandler,
  ArcSliderChangeHandler
};