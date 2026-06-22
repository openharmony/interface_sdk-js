'use static'
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
 * 弧形滑动条组件，通常用于在圆形屏幕的穿戴设备中快速调节设置值，如音量调节、亮度调节等应用场景。
 * 
 * > **说明：**
 * >
 * > - 本模块同时支持ArkTS-Dyn、ArkTS-Sta。
 * >
 * > -
 * >
 * > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。
 * 
 * ###### 子组件
 * 
 * 无
 * 
 * ###### ArcSliderAttribute
 * 
 * 不支持[通用属性]{@link common}。
 * 
 * ###### ArcSliderAttribute
 * 
 * 不支持[通用事件]{@link common}。
 *
 * @file
 * @kit ArkUI
 */

import { ComponentV2, Builder, TouchEvent, CrownSensitivity } from '@ohos.arkui.component';
import { ObservedV2, Trace, Param } from '@ohos.arkui.stateManagement';

/**
 * ArcSliderValueOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderValueOptionsConstructorOptions {
  /**
   * 设置当前进度值。
   * 
   * 默认值：与参数min的取值一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  progress?: double;

  /**
   * 设置最小值。
   * 
   * 默认值：0
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  min?: double;

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
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  max?: double;
}

/**
 * 配置弧形Slider的数值信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderValueOptions {
  /**
   * 设置当前进度值。
   * 
   * 默认值：与参数min的取值一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  progress?: double;

  /**
   * 设置最小值。
   * 
   * 默认值：0
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  min?: double;

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
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  max?: double;

  /**
   * ArcSliderValueOptions的构造函数。
   *
   * @param { ArcSliderValueOptionsConstructorOptions } [options] - ArcSliderValueOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderValueOptionsConstructorOptions);
}

/**
 * ArcSliderLayoutOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderLayoutOptionsConstructorOptions {
  /**
   * 设置弧形Slider取值范围是否反向。
   * 
   * 默认值：true。表示从下往上滑动。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  reverse?: boolean;

  /**
   * 弧形Slider的屏幕显示位置。
   * 
   * 默认值：ArcSliderPosition.RIGHT
   *
   * @default ArcSliderPosition.RIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  position?: ArcSliderPosition;
}

/**
 * 配置弧形Slider的布局信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderLayoutOptions {
  /**
   * 设置弧形Slider取值范围是否反向。
   * 
   * 默认值：true。表示从下往上滑动。
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  reverse?: boolean;

  /**
   * ArcSliderLayoutOptions的构造函数。
   *
   * @param { ArcSliderLayoutOptionsConstructorOptions } [options] - ArcSliderLayoutOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderLayoutOptionsConstructorOptions);

  /**
   * 弧形Slider的屏幕显示位置。
   * 
   * 默认值：ArcSliderPosition.RIGHT
   *
   * @default ArcSliderPosition.RIGHT
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  position?: ArcSliderPosition;
}

/**
 * ArcSliderStyleOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderStyleOptionsConstructorOptions {
  /**
   * 正常状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：5
   * 
   * 取值范围：[5, 16]，异常值按默认值处理。
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  trackThickness?: double;

  /**
   * 放大状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：24
   * 
   * 取值范围：[24, 36]，异常值按默认值处理。
   *
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  activeTrackThickness?: double;

  /**
   * 设置描边背景色。
   * 
   * 默认值：#33FFFFFF
   *
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  trackColor?: string;

  /**
   * 设置描边高亮色。
   * 
   * 默认值：#FF5EA1FF
   *
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  selectedColor?: string;

  /**
   * 设置描边背景模糊值，单位：vp。
   * 
   * 默认值：20
   * 
   * 设置小于0的值时，按照默认值处理。
   *
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  trackBlur?: double;
}

/**
 * 配置弧形Slider的样式信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderStyleOptions {
  /**
   * 正常状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：5
   * 
   * 取值范围：[5, 16]，异常值按默认值处理。
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  trackThickness?: double;

  /**
   * 放大状态下弧形Slider的描边粗细，单位：vp。
   * 
   * 默认值：24
   * 
   * 取值范围：[24, 36]，异常值按默认值处理。
   *
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  activeTrackThickness?: double;

  /**
   * 设置描边背景色。
   * 
   * 默认值：#33FFFFFF
   *
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  trackColor?: string;

  /**
   * 设置描边高亮色。
   * 
   * 默认值：#FF5EA1FF
   *
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
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
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  trackBlur?: double;

  /**
   * ArcSliderStyleOptions的构造函数。
   *
   * @param { ArcSliderStyleOptionsConstructorOptions } [options] - ArcSliderStyleOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderStyleOptionsConstructorOptions);
}

/**
 * 弧形Slider被触摸时，告知应用。
 *
 * @param { TouchEvent } event - 获得TouchEvent对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare type ArcSliderTouchHandler = (event: TouchEvent) => void;

/**
 * 弧形Slider的进度值发生变化时，告知应用。
 *
 * @param { double } progress - Slider当前的进度值。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare type ArcSliderChangeHandler = (progress: double) => void;

/**
 * 弧形Slider放大或缩小时，告知应用。
 *
 * @param { boolean } isEnlarged - ArcSlider当前是否放大。<br/>isEnlarged为false时，ArcSlider组件处于缩小状态。<br/>isEnlarged为true时，
 *     ArcSlider组件处于放大状态。
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @stagemodelonly
 * @since 23 static
 */
export declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void;

/**
 * ArcSliderOptions的构造信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export interface ArcSliderOptionsConstructorOptions {
  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  valueOptions?: ArcSliderValueOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  styleOptions?: ArcSliderStyleOptions;

  /**
   * 设置旋转表冠的灵敏度。
   * 
   * 默认值：CrownSensitivity.MEDIUM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * 弧形Slider被触摸时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onTouch?: ArcSliderTouchHandler;

  /**
   * 弧形Slider的进度值发生变化时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onChange?: ArcSliderChangeHandler;

  /**
   * 弧形Slider放大或缩小时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  onEnlarge?: ArcSliderEnlargeHandler;
}

/**
 * 配置弧形Slider的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ObservedV2
export declare class ArcSliderOptions {
  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  valueOptions?: ArcSliderValueOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * 配置弧形Slider的样式信息。
   * 
   * 默认值：[ArcSliderStyleOptions]{@link ArcSliderStyleOptions}的各项子属性均取其默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  styleOptions?: ArcSliderStyleOptions;

  /**
   * 设置旋转表冠的灵敏度。
   * 
   * 默认值：CrownSensitivity.MEDIUM
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * 弧形Slider被触摸时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  onTouch?: ArcSliderTouchHandler;

  /**
   * 弧形Slider的进度值发生变化时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  onChange?: ArcSliderChangeHandler;

  /**
   * 弧形Slider放大或缩小时，告知应用。
   * 
   * 默认值：不传入的情况，无回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Trace
  onEnlarge?: ArcSliderEnlargeHandler;

  /**
   * ArcSliderOptions的构造函数。
   *
   * @param { ArcSliderOptionsConstructorOptions } [options] - ArcSliderOptions的构造信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  constructor(options?: ArcSliderOptionsConstructorOptions);
}

/**
 * ArcSlider({ options: ArcSliderOptions })
 * 
 * 创建ArcSlider实例，入参是弧形进度条配置选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
@ComponentV2
export declare struct ArcSlider {
  /**
   * The options of a ArcSlider component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  @Param
  options: ArcSliderOptions;
  /**
   * The method to build component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @stagemodelonly
   * @since 23 staticonly
   */
  @Builder
  build(): void;
}

/**
 * 配置弧形Slider的屏幕显示位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @since 23 static
 * @noninterop
 */
export declare enum ArcSliderPosition {
  /**
   * 弧形Slider的屏幕显示位置在左侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  LEFT = 0,
  /**
   * 弧形Slider的屏幕显示位置在右侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @since 23 static
   */
  RIGHT = 1
}