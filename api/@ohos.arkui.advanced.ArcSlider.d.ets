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
   * @Trace
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
   * Maximum value.
   * 
   * Default value: **100**
   * 
   * **NOTE**
   * 
   * If the value of **min** is greater than or equal to that of **max**, **min** is set to **0** and **max** **100**.
   * 
   * If the value is not within the [min, max] range, the value of **min** or **max** is used, whichever is closer.
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
   * Minimum value.
   * 
   * Default value: **0**.
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
   * Maximum value.
   * 
   * Default value: **100**
   * 
   * **NOTE**
   * 
   * If the value of **min** is greater than or equal to that of **max**, **min** is set to **0** and **max** **100**.
   * 
   * If the value is not within the [min, max] range, the value of **min** or **max** is used, whichever is closer.
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
   * A constructor used to create an **ArcSliderValueOptions** instance.
   *
   * @param { ArcSliderValueOptionsConstructorOptions } options - Constructor information for **ArcSliderValueOptions**.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderValueOptionsConstructorOptions);
}

/**
 * Defines the construction information for **ArcSliderLayoutValueOptions**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
interface ArcSliderLayoutOptionsConstructorOptions {
  /**
   * Whether the value range of the arc slider is reversed. **false**: top-to-bottom sliding.
   * 
   * **true** (default): bottom-to-top sliding.
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
   * Position of the arc slider on the screen.
   * 
   * Default value: **ArcSliderPosition.RIGHT**
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
   * Whether the value range of the arc slider is reversed. **false**: top-to-bottom sliding.
   * 
   * **true** (default): bottom-to-top sliding.
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
   * Position of the arc slider on the screen.
   * 
   * Default value: **ArcSliderPosition.RIGHT**
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
   * A constructor used to create an **ArcSliderLayoutOptions** instance.
   *
   * @param { ArcSliderLayoutOptionsConstructorOptions } options - Construction information for
   *     **ArcSliderLayoutOptions**.
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
   * Stroke width of the arc slider when it is in an enlarged state, in vp.
   * 
   * Default value: **24**
   * 
   * Value range: [24, 36]. If the value is invalid, the default value is used.
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
   * Background color of the stroke.
   * 
   * Default value: **#33FFFFFF**
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
   * Highlight color of the stroke.
   * 
   * Default value: **#FF5EA1FF**
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
   * Blur effect applied to the stroke background, in vp.
   * 
   * Default value: **20**
   * 
   * If a value less than 0 is set, the default is used.
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
   * Stroke width of the arc slider when it is in an enlarged state, in vp.
   * 
   * Default value: **24**
   * 
   * Value range: [24, 36]. If the value is invalid, the default value is used.
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
   * Background color of the stroke.
   * 
   * Default value: **#33FFFFFF**
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
   * Highlight color of the stroke.
   * 
   * Default value: **#FF5EA1FF**
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
   * Blur effect applied to the stroke background, in vp.
   * 
   * Default value: **20**
   * 
   * If a value less than 0 is set, the default is used.
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
   * A constructor used to create an **ArcSliderStyleOptions** instance.
   *
   * @param { ArcSliderStyleOptionsConstructorOptions } options - Constructor information for **ArcSliderStyleOptions**.
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  constructor(options?: ArcSliderStyleOptionsConstructorOptions);
}

/**
 * Defines the callback invoked to notify the application when the arc slider is touched.
 *
 * @param { TouchEvent } event - **TouchEvent** object.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderTouchHandler = (event: TouchEvent) => void;

/**
 * Defines the callback invoked to notify the application when the progress value of the arc slider changes.
 *
 * @param { number } progress - Current progress of the slider.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @atomicservice
 * @since 18 dynamic
 */
declare type ArcSliderChangeHandler = (progress: number) => void;

/**
 * Defines the callback invoked to notify the application when the arc slider is enlarged or reduced.
 *
 * @param { boolean } isEnlarged - Whether the arc slider is enlarged.<br>**false**: The arc slider is in a reduced
 *     state.<br>**true**: The arc slider is in an enlarged state.
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
   * Style of the arc slider.
   * 
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
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
   * Style of the arc slider.
   * 
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
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
   * Style of the arc slider.
   * 
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
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
   * Sensitivity to the digital crown rotation.
   * 
   * Default value: **CrownSensitivity.MEDIUM**
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
   * Callback invoked to notify the application when the arc slider is touched.
   * 
   * Default value: If this parameter is not provided, no callback will be invoked.
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
   * Callback invoked to notify the application when the progress value of the arc slider changes.
   * 
   * Default value: If this parameter is not provided, no callback will be invoked.
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
   * Callback invoked to notify the application when the arc slider is enlarged or reduced.
   * 
   * Default value: If this parameter is not provided, no callback will be invoked.
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
   * Style of the arc slider.
   * 
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
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
   * Style of the arc slider.
   * 
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
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
   * Style of the arc slider.
   * 
   * Default value: default values of all properties of [ArcSliderStyleOptions]{@link ArcSliderStyleOptions}
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
   * Sensitivity to the digital crown rotation.
   * 
   * Default value: **CrownSensitivity.MEDIUM**
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
   * Callback invoked to notify the application when the arc slider is touched.
   * 
   * Default value: If this parameter is not provided, no callback will be invoked.
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
   * Callback invoked to notify the application when the progress value of the arc slider changes.
   * 
   * Default value: If this parameter is not provided, no callback will be invoked.
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
   * Callback invoked to notify the application when the arc slider is enlarged or reduced.
   * 
   * Default value: If this parameter is not provided, no callback will be invoked.
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
   * A constructor used to create an **ArcSliderOptions** instance.
   *
   * @param { ArcSliderOptionsConstructorOptions } options - Constructor information for **ArcSliderOptions**.
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