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
 * Construct parameter types for ArcSliderValueOptions.
 *
 * @typedef ArcSliderValueOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
interface ArcSliderValueOptionsConstructorOptions {
  /**
   * Set current progress value.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  value?: number;

  /**
   * Set the minimum value.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  min?: number;

  /**
   * Set the maximum value.
   *
   * @type { ?number }
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  max?: number;
}

/**
 * The options for ArcSlider value.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
@ObservedV2
declare class ArcSliderValueOptions {
  /**
   * Set current progress value.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  value?: number;

  /**
   * Set the minimum value.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  min?: number;

  /**
   * Set the maximum value.
   *
   * @type { ?number }
   * @default 100
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  max?: number;

  /**
   * The constructor used to create a ArcSliderValueOptions object.
   *
   * @param { ArcSliderValueOptionsConstructorOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  constructor(options?: ArcSliderValueOptionsConstructorOptions);
}

/**
 * Construct parameter types for ArcSliderLayoutOptions.
 *
 * @typedef ArcSliderLayoutOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
interface ArcSliderLayoutOptionsConstructorOptions {
  /**
   * Set the x-coordinate value of the center, unit is vp.
   *
   * @type { ?number }
   * @default 116.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  x?: number;

  /**
   * Set the y-coordinate value of the center, unit is vp.
   *
   * @type { ?number }
   * @default 116.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  y?: number;

  /**
   * Set the circle radius, unit is vp.
   *
   * @type { ?number }
   * @default 116.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  radius?: number;

  /**
   * Set the padding under normal status, unit is vp.
   *
   * @type { ?number }
   * @default 5.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  padding?: number;

  /**
   * Set the starting angle of the arc of the component under normal status.
   *
   * @type { ?number }
   * @default 15
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  startAngle?: number;

  /**
   * Set the ending angle of the arc of the component under normal status.
   *
   * @type { ?number }
   * @default 45
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  endAngle?: number;

  /**
   * Set the starting angle of the arc of the component under active status.
   *
   * @type { ?number }
   * @default -60
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  activeStartAngle?: number;

  /**
   * Set the ending angle of the arc of the component under active status.
   *
   * @type { ?number }
   * @default 60
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  activeEndAngle?: number;

  /**
   * Set whether the component's arc direction is counterclockwise.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  reverse?: boolean;
}

/**
 * The options for ArcSlider layout.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
@ObservedV2
declare class ArcSliderLayoutOptions {
  /**
   * Set the x-coordinate value of the center, unit is vp.
   *
   * @type { ?number }
   * @default 116.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  x?: number;

  /**
   * Set the y-coordinate value of the center, unit is vp.
   *
   * @type { ?number }
   * @default 116.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  y?: number;

  /**
   * Set the circle radius, unit is vp.
   *
   * @type { ?number }
   * @default 116.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  radius?: number;

  /**
   * Set the padding under normal status, unit is vp.
   *
   * @type { ?number }
   * @default 5.5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  padding?: number;

  /**
   * Set the starting angle of the arc of the component under normal status.
   *
   * @type { ?number }
   * @default 15
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  startAngle?: number;

  /**
   * Set the ending angle of the arc of the component under normal status.
   *
   * @type { ?number }
   * @default 45
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  endAngle?: number;

  /**
   * Set the starting angle of the arc of the component under active status.
   *
   * @type { ?number }
   * @default -60
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  activeStartAngle?: number;

  /**
   * Set the ending angle of the arc of the component under active status.
   *
   * @type { ?number }
   * @default 60
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  activeEndAngle?: number;

  /**
   * Set whether the component's arc direction is counterclockwise.
   *
   * @type { ?boolean }
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  reverse?: boolean;

  /**
   * The constructor used to create a ArcSliderLayoutOptions object.
   *
   * @param { ArcSliderLayoutOptionsConstructorOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  constructor(options?: ArcSliderLayoutOptionsConstructorOptions);
}

/**
 * Construct parameter types for ArcSliderStyleOptions.
 *
 * @typedef ArcSliderStyleOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
interface ArcSliderStyleOptionsConstructorOptions {
  /**
   * Set the track thickness of the component under normal status, unit is vp.
   *
   * @type { ?number }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  trackThickness?: number;

  /**
   * Set the track thickness of the component under active status, unit is vp.
   *
   * @type { ?number }
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  activeTrackThickness?: number;

  /**
   * Set the track color of the component.
   *
   * @type { ?string  }
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  trackColor?: string;

  /**
   * Set the selected color of the component.
   *
   * @type { ?string }
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  selectedColor?: string;

  /**
   * Set the track blur of the component, unit is vp.
   *
   * @type { ?number }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  trackBlur?: number;
}

/**
 * The options for ArcSlider style.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
@ObservedV2
declare class ArcSliderStyleOptions {
  /**
   * Set the track thickness of the component under normal status, unit is vp.
   *
   * @type { ?number }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  trackThickness?: number;

  /**
   * Set the track thickness of the component under active status, unit is vp.
   *
   * @type { ?number }
   * @default 24
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  activeTrackThickness?: number;

  /**
   * Set the track color of the component.
   *
   * @type { ?string  }
   * @default #33FFFFFF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  trackColor?: string;

  /**
   * Set the selected color of the component.
   *
   * @type { ?string }
   * @default #FF5EA1FF
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  selectedColor?: string;

  /**
   * Set the track blur of the component, unit is vp.
   *
   * @type { ?number }
   * @default 20
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  trackBlur?: number;

  /**
   * The constructor used to create a ArcSliderStyleOptions object.
   *
   * @param { ArcSliderStyleOptionsConstructorOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  constructor(options?: ArcSliderStyleOptionsConstructorOptions);
}

/**
 * Handler of ArcSlider, used in onTouch.
 *
 * @typedef { function } ArcSliderTouchHandler
 * @param { TouchEvent } event - the TouchEvent when ArcSlider is touched.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
declare type ArcSliderTouchHandler = (event: TouchEvent) => void;

/**
 * Handler of ArcSlider, used in OnChange.
 *
 * @typedef { function } ArcSliderChangeHandler
 * @param { number } value - the value of the ArcSlider.
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
declare type ArcSliderChangeHandler = (value: number) => void;

/**
 * Construct parameter types for ArcSliderOptions.
 *
 * @typedef ArcSliderOptionsConstructorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
interface ArcSliderOptionsConstructorOptions {
  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderValueOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  valueOptions?: ArcSliderValueOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderLayoutOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  styleOptions?: ArcSliderStyleOptions;

  /**
   * Set the sensitivity of rotating crown.
   *
   * @type { ?CrownSensitivity }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * Touching triggers the callback.
   *
   * @type { ?ArcSliderTouchHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  onTouch?: ArcSliderTouchHandler;

  /**
   * Value changing triggers the callback.
   *
   * @type { ?ArcSliderChangeHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  onChange?: ArcSliderChangeHandler;
}

/**
 * The options for ArcSlider.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
@ObservedV2
declare class ArcSliderOptions {
  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderValueOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  valueOptions?: ArcSliderValueOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderLayoutOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  layoutOptions?: ArcSliderLayoutOptions;

  /**
   * Configure parameters for component.
   *
   * @type { ?ArcSliderStyleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  styleOptions?: ArcSliderStyleOptions;

  /**
   * Set the sensitivity of rotating crown.
   *
   * @type { ?CrownSensitivity }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  digitalCrownSensitivity?: CrownSensitivity;

  /**
   * Touching triggers the callback.
   *
   * @type { ?ArcSliderTouchHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  onTouch?: ArcSliderTouchHandler;

  /**
   * Value changing triggers the callback.
   *
   * @type { ?ArcSliderChangeHandler }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  @Trace
  onChange?: ArcSliderChangeHandler;

  /**
   * The constructor used to create a ArcSliderOptions object.
   *
   * @param { ArcSliderOptionsConstructorOptions } options
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
   */
  constructor(options?: ArcSliderOptionsConstructorOptions);
}

/**
 * Defines ArcSlider Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Circle
 * @crossplatform
 * @since 16
 */
@Component
declare struct ArcSlider {
  /**
   * The options of a ArcSlider component.
   *
   * @type { ArcSliderOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Circle
   * @crossplatform
   * @since 16
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