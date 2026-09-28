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
 * Defines the position of the arc slider on the screen.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
export declare enum ArcSliderPosition {

  /**
   * The arc slider is displayed on the left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  LEFT = 0,

  /**
   * The arc slider is displayed on the right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  RIGHT = 1
}

/**
 * Defines the constructor information for **ArcSliderValueOptions**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderValueOptionsConstructorOptions {
  /**
   * Current progress.
   *
   * Default value: same as the value of **min**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  progress?: number;

  /**
   * Minimum value.
   *
   * Default value: **0**.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  min?: number;

  /**
   * Maximum value.
   *
   * Default value: **100**
   *
   * **NOTE**
   *
   * When an abnormal situation occurs where **min** >= **max**, **min** takes the default value **0** and **max** takes
   * the default value **100**.
   *
   * When **progress** is not within the [min, max] range, the nearest boundary value is taken: if **progress** is less
   * than **min**, **min** is taken; if **progress** is greater than **max**, **max** is taken.
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
 * Defines the value of the arc slider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderValueOptions {
  /**
   * Current progress.
   *
   * Default value: same as the value of **min**.
   *
   * **Decorator**: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  progress?: number;

  /**
   * Minimum value.
   *
   * Default value: **0**.
   *
   * **Decorator**: @Trace
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
   * Maximum value.
   *
   * Default value: **100**
   *
   * **NOTE**
   *
   * When an abnormal situation occurs where **min** >= max, **min** takes the default value **0** and max takes the
   * default value **100**.
   *
   * When progress is not within the range of [min, max], the nearest boundary value is taken: if **progress** is less
   * than **min**, **min** is taken; if **progress** is greater than **max**, **max** is taken.
   *
   * **Decorator:*
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
   * A constructor used to create an **ArcSliderValueOptions** instance.
   *
   * @param { ArcSliderValueOptionsConstructorOptions } options - Construction information of **ArcSliderValueOptions**.
   *     When not passed in, each sub-attribute of **ArcSliderValueOptions** takes its default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderValueOptionsConstructorOptions);
}

/**
 * Defines the construction information of **ArcSliderLayoutOptions**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderLayoutOptionsConstructorOptions {
  /**
   * Whether to reverse the sliding direction of the arc slider. The value **false** means sliding from top to bottom.
   *
   * Default value: **true**, meaning sliding from bottom to top.
   *
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  reverse?: boolean;
  /**
   * Position of the arc slider on the screen.
   *
   * Default value: **ArcSliderPosition.RIGHT**
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
 * Defines the layout of the arc slider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderLayoutOptions {
  /**
   * Whether to reverse the sliding direction of the arc slider. The value **false** means sliding from top to bottom.
   *
   * Default value: **true**, meaning sliding from bottom to top.
   *
   * **Decorator:*
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
   * Position of the arc slider on the screen.
   *
   * Default value: **ArcSliderPosition.RIGHT**
   *
   * **Decorator**: @Trace
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
   * A constructor used to create an **ArcSliderLayoutOptions** instance.
   *
   * @param { ArcSliderLayoutOptionsConstructorOptions } options - Construction information of
   *     **ArcSliderLayoutOptions**. When not passed in, all sub-attributes of **ArcSliderLayoutOptions** take their
   *     default values.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderLayoutOptionsConstructorOptions);
}

/**
 * Defines the constructor information for **ArcSliderStyleOptions**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderStyleOptionsConstructorOptions {
  /**
   * Stroke width of the arc slider in the normal state, in vp.
   *
   * Default value: **5**
   *
   * Value range: [5, 16]. If the value is invalid, the default value is used.
   *
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  trackThickness?: number;

  /**
   * Stroke width of the arc slider when it is in an enlarged state, in vp.
   *
   * Default value: **24**
   *
   * Value range: [24, 36]. If the value is invalid, the default value is used.
   *
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  activeTrackThickness?: number;

  /**
   * Background color of the stroke.
   *
   * Default value: **#33FFFFFF**
   *
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  trackColor?: string;

  /**
   * Highlight color of the stroke.
   *
   * Default value: **#FF5EA1FF**
   *
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  selectedColor?: string;

  /**
   * Stroke background blur value. Unit: vp.
   *
   * Default value: **20**
   *
   * Value range: [0, +∞). Abnormal values are handled as default.
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
 * Defines the style of the arc slider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderStyleOptions {
  /**
   * Stroke width of the arc slider in the normal state, in vp.
   *
   * Default value: **5**
   *
   * Value range: [5, 16]. If the value is invalid, the default value is used.
   *
   * **Decorator**: @Trace
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
   * Stroke width of the arc slider when it is in an enlarged state, in vp.
   *
   * Default value: **24**
   *
   * Value range: [24, 36]. If the value is invalid, the default value is used.
   *
   * **Decorator**: @Trace
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
   * Background color of the stroke.
   *
   * Default value: **#33FFFFFF**
   *
   * **Decorator**: @Trace
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
   * Highlight color of the stroke.
   *
   * Default value: **#FF5EA1FF**
   *
   * **Decorator**: @Trace
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
   * Stroke background blur value, in vp.
   *
   * Default value: **20**
   *
   * Value range: [0, +∞). Abnormal values are handled as default.
   *
   * **Decorator:*
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
   * A constructor used to create an **ArcSliderStyleOptions** instance.
   *
   * @param { ArcSliderStyleOptionsConstructorOptions } options - Construction information of **ArcSliderStyleOptions**.
   *     When not passed in, all sub-attributes of **ArcSliderStyleOptions** take their default values.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderStyleOptionsConstructorOptions);
}

/**
 * Triggered when the arc slider is touched.
 *
 * @param { TouchEvent } event - **TouchEvent** object.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderTouchHandler = (event: TouchEvent) => void;

/**
 * Triggered when the progress value of the arc slider changes.
 *
 * @param { number } progress - Current progress of the slider.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderChangeHandler = (progress: number) => void;

/**
 * Triggered when the arc slider is enlarged or shrunk.
 *
 * @param { boolean } isEnlarged - Whether the arc slider is enlarged.
 *     <br>**false**: The arc slider is in a reduced state.
 *     <br>**true**: The arc slider is in an enlarged state.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderEnlargeHandler = (isEnlarged: boolean) => void;

/**
 * Defines the constructor information for **ArcSliderOptions**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderOptionsConstructorOptions {
  /**
   * Value of the arc slider.
   *
   * Default value: default values of all properties of [ArcSliderValueOptions]{@link ArcSliderValueOptions}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  valueOptions?: ArcSliderValueOptions;

  /**
   * Layout of the arc slider.
   *
   * Default value: default values of all properties of [ArcSliderLayoutOptions]{@link ArcSliderLayoutOptions}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * Style of the arc slider.
   *
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  styleOptions?: ArcSliderStyleOptions;

  /**
   * Sensitivity to the digital crown rotation.
   *
   * Default value: **CrownSensitivity.MEDIUM**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * Callback triggered when the arc slider is touched.
   *
   * Default value: no callback when not passed in.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onTouch?: ArcSliderTouchHandler;

  /**
   * Callback triggered when the progress value of the arc slider changes.
   *
   * Default value: no callback when not passed in.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onChange?: ArcSliderChangeHandler;

  /**
   * Callback triggered when the arc slider is enlarged or shrunk.
   *
   * Default value: no callback when not passed in.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  onEnlarge?: ArcSliderEnlargeHandler;
}

/**
 * Defines the properties of the arc slider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@ObservedV2
declare class ArcSliderOptions {
  /**
   * Value of the arc slider.
   *
   * Default value: default values of all properties of [ArcSliderValueOptions]{@link ArcSliderValueOptions}
   *
   * **Decorator**: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  valueOptions?: ArcSliderValueOptions;

  /**
   * Layout of the arc slider.
   *
   * Default value: default values of all properties of [ArcSliderLayoutOptions]{@link ArcSliderLayoutOptions}
   *
   * **Decorator**: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * Style of the arc slider.
   *
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
   *
   * **Decorator**: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  styleOptions?: ArcSliderStyleOptions;

  /**
   * Sensitivity to the digital crown rotation.
   *
   * Default value: **CrownSensitivity.MEDIUM**
   *
   * **Decorator**: @Trace
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * Callback triggered when the arc slider is touched.
   *
   * Default value: no callback when not passed in.
   *
   * **Decorator:*
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onTouch?: ArcSliderTouchHandler;

  /**
   * Callback triggered when the progress value of the arc slider changes.
   *
   * Default value: no callback when not passed in.
   *
   * **Decorator:*
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onChange?: ArcSliderChangeHandler;

  /**
   * Callback triggered when the arc slider is enlarged or shrunk.
   *
   * Default value: no callback when not passed in.
   *
   * **Decorator:*
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  @Trace
  onEnlarge?: ArcSliderEnlargeHandler;

  /**
   * A constructor used to create an **ArcSliderOptions** instance.
   *
   * @param { ArcSliderOptionsConstructorOptions } options - Construction information of **ArcSliderOptions**. When not
   *     passed in, all sub-attributes of **ArcSliderOptions** take their default values.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderOptionsConstructorOptions);
}

/**
 * The **ArcSlider** component is designed for circular screens on wearables to quickly adjust settings, such as the
 * volume and brightness.
 *
 * > **NOTE**
 * >
 * > - This component is supported since API version 18. New features in later versions are marked with superscripts to
 * > indicate the initial version.
 * >
 * > - This component is supported on Phone, PC/2in1, Tablet, TV, and Wearable devices. In API version 22 and earlier,
 * > using it on Phone, PC/2in1, Tablet, or TV generates a compilation warning, but the component can run normally.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
@Component
declare struct ArcSlider {
  /**
   * Parameters of the arc slider.
   *
   * Default value: default values of all properties of [ArcSliderOptions]{@link ArcSliderOptions}
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