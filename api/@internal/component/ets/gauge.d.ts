/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * Provides gauge options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
interface GaugeOptions {
  /**
   * Current data value of the gauge, that is, the position to which the pointer points. Used to preset the initial
   * value of the gauge when the component is created.
   *
   * Default value: 0
   *
   * **Widget capability:** This API can be used in ArkTS cards since API version 9.
   *
   * **NOTE**
   *
   * When value is not within the range of min and max, min is used as the actual value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value: number;

  /**
   * Minimum value of the current data segment.
   *
   * Default value: 0
   *
   * **Widget capability:** This API can be used in ArkTS cards since API version 9.
   *
   * **NOTE**
   *
   * When not passed, the default value is 0.
   *
   * When min is greater than max, min is set to 0 and max is set to 100.
   *
   * Both max and min support negative numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  min?: number;

  /**
   * Maximum value of the current data segment.
   *
   * Default value: 100
   *
   * **Widget capability:** This API can be used in ArkTS cards since API version 9.
   *
   * **NOTE**
   *
   * When not passed, the default value is 100.
   *
   * When min is greater than max, min is set to 0 and max is set to 100.
   *
   * Both max and min support negative numbers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  max?: number;
}

/**
 * A gauge component that displays data in a circular chart. It is suitable for scenarios such as displaying task
 * completion progress, performance metrics, and data proportions. It supports various visual configurations, including
 * custom colors, start and end angles, pointer styles, and shadow effects, to intuitively present data status and
 * improve users' understanding of and interaction with data.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 * >
 * > - [startAngle]{@link GaugeAttribute#startAngle} and [endAngle]{@link GaugeAttribute#endAngle} only determine the
 * > arc path range and do not affect the component size. The smaller the angle difference, the smaller the proportion
 * > of the arc within the component, and the larger the blank space between the `min`/`max` markers and the arc.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
interface GaugeInterface {

  /**
   * Creates a gauge.
   *
   * @param { object } options - Settings of the gauge. [since 8 - 17]
   * @param { GaugeOptions } options - Settings of the gauge. [since 18]
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (options: GaugeOptions): GaugeAttribute;
}

/**
 * Inherits from [MultiShadowOptions]{@link MultiShadowOptions} and has all attributes of **MultiShadowOptions**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 23]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GaugeShadowOptions extends MultiShadowOptions {}

/**
 * Provides gauge indicator options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 23]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface GaugeIndicatorOptions {
  /**
   * Icon resource path.
   *
   * **Note:**
   *
   * If this parameter is not set, the system default style is used, which is a triangle pointer.
   *
   * Only icons in SVG format are supported. If an icon in another format is used, the default triangle pointer is used.
   *
   * @default system style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  icon?: ResourceStr;

  /**
   * Spacing between the pointer and the outer edge of the ring.
   *
   * Default value: **8**
   *
   * Unit: vp
   *
   * **Note:**
   *
   * Percentage is not supported.
   *
   * For the default triangle pointer, this is the spacing between the black triangle and the outer edge of the ring.
   *
   * If the value is less than 0, the default value is used.
   *
   * If the value is greater than the ring radius, the default value is used.
   *
   * @default 8vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  space?: Dimension;
}

/**
 * You need a custom class to implement the **ContentModifier** API. Inherits from
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface GaugeConfiguration extends CommonConfiguration<GaugeConfiguration> {
  /**
   * Current value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  value: number;

  /**
   * Minimum value of the current data segment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  min: number;

  /**
   * Maximum value of the current data segment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  max: number;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare class GaugeAttribute extends CommonMethod<GaugeAttribute> {
  /**
   * Sets the value of the gauge.
   *
   * @param { number } value - Data value of the gauge, which can be used to dynamically modify the data value of the
   *     gauge.
   *     <br>**Note:**
   *     <br>If value is not within the range of min and max, min is used as the actual value.
   *     <br>Default value: 0
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value(value: number): GaugeAttribute;

  /**
   * Sets the start angle position. If the difference between the start angle and the end angle is too small, an
   * abnormal image will be drawn. Use reasonable start and end angles. It is recommended to use a single-color ring to
   * adjust the data value by changing the `value` parameter of Gauge. You can use the timer `setTimeout` to delay the
   * loading of the value.
   *
   * @param { number } angle - Start angle position. The 0 o'clock position is 0 degrees. Clockwise is a positive angle,
   *     and counterclockwise is a negative angle. An angle greater than 360 degrees is equivalent to the remainder
   *     after dividing by 360 degrees.
   *     <br>Default value: 0
   *     <br>Unit: deg
   *     <br>The drawing from the start position to the end position is clockwise only.
   *     <br>If the difference between the start angle and the end angle is too small, an abnormal image may be drawn.
   *     Use reasonable start and end angles.
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  startAngle(angle: number): GaugeAttribute;

  /**
   * Sets the end angle of the gauge. Ensure an appropriate difference between the start angle and end angle. If this
   * difference is too small, the drawn chart may be abnormal. You are advised to use a monochrome ring to set the
   * **value** attribute of the **Gauge**. You can also use **setTimeout** to delay value loading.
   *
   * @param { number } angle - End angle position. 0 degrees is at the 12 o'clock position, with positive angles in the
   *     clockwise direction and negative angles in the counterclockwise direction. An angle exceeding 360 degrees is
   *     equivalent to the remainder after modulo 360.
   *     <br>Default value: 360
   *     <br>Unit: deg (degree)
   *     <br>Drawing from the start position to the end position is only in the clockwise direction.
   *     <br>If the difference between the start angle and end angle is too small, an abnormal image may be drawn. Use
   *     reasonable start and end angles.
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  endAngle(angle: number): GaugeAttribute;

  /**
   * Sets the colors of the gauge.
   *
   * Since API version 11, this API follows the following rules:
   *
   * If the data type is [ResourceColor]{@link ResourceColor}, the ring is of the monochrome type.
   *
   * If the data type is [LinearGradient]{@link LinearGradient}, the ring is of the gradient type.
   *
   * If the parameter type is Array, the ring is a segmented gradient ring. The first parameter indicates the color
   * value or gradient object (LinearGradient). If it is set to a non-color type, the color value is set to "0xFFE84026"
   * . The second parameter indicates the proportion of the color. If it is set to a negative number or a non-numeric
   * type, the proportion is set to 0.
   *
   * A ring of the gradient type contains a maximum of nine color segments. If there are more than nine segments, the
   * excess is not displayed.
   *
   * @param { Array<any> } colors - Colors of the gauge, which support segmented color settings.
   *     <br>Default value since API version 9: Color.Black
   *     <br>Default value since API version 11:
   *     <br>If no color is passed or the array is empty, the ring type and colors cannot be determined, and the ring is
   *     a gradient ring with the colors "0xFF64BB5C", "0xFFF7CE00", and "0xFFE84026".
   *     <br>If a color is passed but the color value is invalid, the color is "0xFFE84026".
   *     <br>If the proportion of a color is 0, the color is not displayed in the ring. If the proportions of all colors
   *     are 0, the ring is not displayed.
   *     <br>Since API version 10, the Array<ResourceColor, number> type is supported.
   *     <br>Since API version 11, the LinearGradient and Array<LinearGradient, number> types are
   *     supported. [since 8 - 9]
   * @param { Array<[ResourceColor, number]> } colors - Colors of the gauge, which support segmented color settings.
   *     <br>Default value since API version 9: Color.Black
   *     <br>Default value since API version 11:
   *     <br>If no color is passed or the array is empty, the ring type and colors cannot be determined, and the ring is
   *     a gradient ring with the colors "0xFF64BB5C", "0xFFF7CE00", and "0xFFE84026".
   *     <br>If a color is passed but the color value is invalid, the color is "0xFFE84026".
   *     <br>If the proportion of a color is 0, the color is not displayed in the ring. If the proportions of all colors
   *     are 0, the ring is not displayed.
   *     <br>Since API version 10, the Array<ResourceColor, number> type is supported.
   *     <br>Since API version 11, the LinearGradient and Array<LinearGradient, number> types are
   *     supported. [since 10 - 10]
   * @param { ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, number]> } colors - Colors of the
   *     gauge, which support segmented color settings.
   *     <br>Default value since API version 9: Color.Black
   *     <br>Default value since API version 11:
   *     <br>If no color is passed or the array is empty, the ring type and colors cannot be determined, and the ring is
   *     a gradient ring with the colors "0xFF64BB5C", "0xFFF7CE00", and "0xFFE84026".
   *     <br>If a color is passed but the color value is invalid, the color is "0xFFE84026".
   *     <br>If the proportion of a color is 0, the color is not displayed in the ring. If the proportions of all colors
   *     are 0, the ring is not displayed.
   *     <br>Since API version 10, the Array<ResourceColor, number> type is supported.
   *     <br>Since API version 11, the LinearGradient and Array<LinearGradient, number> types are supported. [since 11]
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  colors(colors: ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, number]>): GaugeAttribute;

  /**
   * Sets the stroke width of the gauge.
   *
   * @param { Length } length - Thickness of the ring gauge.
   *     <br>Default value: 4
   *     <br>Unit: vp
   *     <br>**Note:**
   *     <br>If the value is less than or equal to 0, the default value is used.
   *     <br>The maximum thickness is the radius of the ring. If the value exceeds the maximum, the maximum value is
   *     used.
   *     <br>Percentage is not supported.
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeWidth(length: Length): GaugeAttribute;

  /**
   * Sets the description of the gauge.
   *
   * @param { CustomBuilder } value - Content description.
   *     <br>**Note:**
   *     <br>The content in @Builder is customized by the developer. Text or images are recommended.
   *     <br>If the width and height of the custom part are in percentage, the reference range is a rectangle of 44.4%*2
   *     5.4% of the ring diameter (28.6%*28.6% for images), 0 vp from the bottom of the ring, centered horizontally.
   *     <br>If set to null, no content is displayed.
   *     <br>If not set, whether content is displayed depends on whether the maximum and minimum data values are set.
   *     <br>If both or only one of the maximum and minimum values are set, the maximum and minimum values are
   *     displayed.
   *     <br>If neither the maximum nor the minimum value is set, no content is displayed.
   *     <br>The maximum and minimum values are displayed at the bottom of the ring and cannot be moved. If the ring
   *     opening angle is set improperly, the text may be obscured by the ring.
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  description(value: CustomBuilder): GaugeAttribute;

  /**
   * Sets the shadow style of the gauge.
   *
   * @param { GaugeShadowOptions } value - Adds a shadow effect. You can specify the blur radius and the offsets along
   *     the X-axis and Y-axis.
   *     <br>**Note:**
   *     <br>The shadow color is the same as the ring color.
   *     <br>Set this parameter to null to disable the shadow.
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  trackShadow(value: GaugeShadowOptions): GaugeAttribute;

  /**
   * Sets the indicator style of the gauge.
   *
   * @param { GaugeIndicatorOptions } value - Pointer style.
   *     <br>**NOTE**
   *     <br>If null is set, the pointer is not displayed.
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 23]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  indicator(value: GaugeIndicatorOptions): GaugeAttribute;

  /**
   * Sets whether to enable privacy mode.
   *
   * > **NOTE**
   * >
   * > This API can be called within [attributeModifier]{@link CommonMethod#attributeModifier} since API version 20.
   *
   * @param { Optional<boolean> } isPrivacySensitiveMode - Sets privacy sensitivity. In privacy mode, the Gauge pointer
   *     points to the 0 position, the maximum and minimum value texts are masked, and the range is displayed in gray or
   *     the background color. The value **true** enables privacy sensitivity, and **false** disables it.
   *     <br>**Note:**
   *     <br>If this parameter is set to null, the content is not sensitive.<!--Del-->
   *     <br>To use Gauge in a card, set the [privacy mask]{@link ./common} attribute through the
   *     [FormComponent]{@link ./form_component} component. The privacy mask takes effect only when the card is
   *     displayed.<!--DelEnd-->
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  privacySensitive(isPrivacySensitiveMode: Optional<boolean>): GaugeAttribute;

  /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<GaugeConfiguration> } modifier - Method for customizing the content area on the Gauge
   *     component.
   *     <br>modifier: content modifier. Developers need to customize a class to implement the ContentModifier
   *     interface.
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<GaugeConfiguration>): GaugeAttribute;
}

/**
 * A gauge component that displays data in a circular chart. It is suitable for scenarios such as displaying task
 * completion progress, performance metrics, and data proportions. It supports various visual configurations, including
 * custom colors, start and end angles, pointer styles, and shadow effects, to intuitively present data status and
 * improve users' understanding of and interaction with data.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 * >
 * > - [startAngle]{@link GaugeAttribute#startAngle} and [endAngle]{@link GaugeAttribute#endAngle} only determine the
 * > arc path range and do not affect the component size. The smaller the angle difference, the smaller the proportion
 * > of the arc within the component, and the larger the blank space between the `min`/`max` markers and the arc.
 *
 * ###### Child Components
 *
 * This component can contain only one child component.
 *
 * > **NOTE**
 * >
 * > - Supported child component types: system components and custom components. Conditional rendering control
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) is supported, while loop rendering
 * > controls [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md) and
 * > [LazyForEach](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md) are not supported.
 * >
 * > - It is recommended to use text components to build the current value text and auxiliary text.
 * >
 * > - If the width and height of a child component are in percentage, the percentage is based on the width and height
 * > of the rectangle that inscribes the outer circle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const Gauge: GaugeInterface;

/**
 * Defines Gauge Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop
 */
declare const GaugeInstance: GaugeAttribute;