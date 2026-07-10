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
   * Current value of the gauge, that is, the position to which the indicator points in the gauge. It is used as the
   * initial value of the gauge when it is created.
   *
   * Default value: **0**
   *
   * **NOTE**
   *
   * If the value is not within the range defined by the **min** and **max** parameters, the value of **min** is used.
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
   * Default value: **0**
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
   * Default value: **100**
   *
   * **NOTE**
   *
   * If the value of **max** is less than that of **min**, the default values **0** and **100** are used.
   *
   * The values of **max** and **min** can be negative numbers.
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
 * The **Gauge** component represents a gauge that displays data in a circular format.
 *
 * > **NOTE**
 *
 * > - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.
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
   * Image path of the icon.
   *
   * **NOTE**
   *
   * If this parameter is not set, the default style is used, which is a triangle pointer.
   *
   * Only icons in SVG format are supported. If icons in other formats are used, the default triangle style indicator is
   * used.
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
   * Distance between the indicator and the outer edge of the ring. The value cannot be in percentage.
   *
   * Default value: **8**
   *
   * Unit: vp
   *
   * **NOTE**
   *
   * For the default triangle style indicator, the distance is the amount of space between the triangle and the outer
   * edge of the ring.
   *
   * If this parameter is set to a value less than 0, the default value will be used.
   *
   * If this parameter is set to a value greater than the ring radius, the default value will be used.
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
 * In addition to the 
 * [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
 * attributes are supported.
 *
 * The [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.
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
   * @param { number } value - Value of the gauge. It can be dynamically changed.<br>Default value: **0**
   * @returns { GaugeAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  value(value: number): GaugeAttribute;

  /**
   * Sets the start angle of the gauge.
   *
   * @param { number } angle - Start angle of the gauge. The 0 o'clock is defined as 0 degrees. Clockwise rotation
   *     represents positive angles, and counterclockwise rotation represents negative angles. Values exceeding 360
   *     degrees are equivalent to the remainder after division by 360 degrees.<br>Default value: **0**<br>Drawing from
   *     the start position to the end position is performed only in the clockwise direction.
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
   * @param { number } angle - End angle of the gauge. The 0 o'clock is defined as 0 degrees. Clockwise rotation
   *     represents positive angles, and counterclockwise rotation represents negative angles. Values exceeding 360
   *     degrees are equivalent to the remainder after division by 360 degrees.<br>Default value: **360**<br>Drawing
   *     from the start position to the end position is performed only in the clockwise direction.
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
   * If the data type is Array, the ring is of the gradient type. The first parameter indicates the color value. If it
   * is set to a non-color value, the color of 0xFFE84026 is used. The second parameter indicates the color weight. If
   * it is set to a negative number or a non-numeric value, the color weight is 0.
   *
   * A ring of the gradient type contains a maximum of nine color segments. If there are more than nine segments, the
   * excess is not displayed.
   *
   * @param { Array<any> } colors - Colors of the gauge. You can set colors for individual segments.<br>Default value in
   *     API version 9: **Color.Black**<br>Default value in API version 11:<br>If no color is provided or the array is
   *     empty, the ring color will be a gradient consisting of the following colors: 0xFF64BB5C, 0xFFF7CE00, and 0xFFE8
   *     4026.<br>If a color value is provided but invalid, the ring will be in the color of 0xFFE84026.<br>Colors with
   *     a weight of 0 are not displayed in the ring. If all weights are 0, the ring is not displayed. [since 8 - 9]
   * @param { Array<[ResourceColor, number]> } colors - Colors of the gauge. You can set colors for individual segments.
   *     <br>Default value in API version 9: **Color.Black**<br>Default value in API version 11:<br>If no color is
   *     provided or the array is empty, the ring color will be a gradient consisting of the following colors: 0xFF64BB5
   *     C, 0xFFF7CE00, and 0xFFE84026.<br>If a color value is provided but invalid, the ring will be in the color of 0
   *     xFFE84026.<br>Colors with a weight of 0 are not displayed in the ring. If all weights are 0, the ring is not
   *     displayed. [since 10 - 10]
   * @param { ResourceColor | LinearGradient | Array<[ResourceColor | LinearGradient, number]> } colors - Colors of the
   *     gauge. You can set colors for individual segments.<br>Default value in API version 9: **Color.Black**<br>
   *     Default value in API version 11:<br>If no color is provided or the array is empty, the ring color will be a
   *     gradient consisting of the following colors: 0xFF64BB5C, 0xFFF7CE00, and 0xFFE84026.<br>If a color value is
   *     provided but invalid, the ring will be in the color of 0xFFE84026.<br>Colors with a weight of 0 are not
   *     displayed in the ring. If all weights are 0, the ring is not displayed. [since 11]
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
   * @param { Length } length - Stroke width of the gauge.<br>Default value: **4**<br>Unit: vp<br>**NOTE**<br>A value
   *     less than or equal to 0 is handled as the default value.<br>If the value exceeds the maximum value, the radius
   *     of the gauge, the maximum value is used.<br>The value cannot be in percentage.
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
   * @param { CustomBuilder } value - Description.<br>**NOTE**<br>You need to customize the content – text or imagery
   *     recommended – in @Builder.<br>If the width and height of the custom content are in percentage, the reference
   *     range is a rectangle that is 44.4% of the diameter of the ring horizontally and 25.4% vertically (for images,
   *     it is 28.6% both horizontally and vertically), positioned 0 vp away from the bottom of the ring and centered
   *     horizontally.<br>If this parameter is set to null, no description is displayed.<br>If this parameter is not
   *     set, what's displayed is subject to the maximum and minimum value settings.<br>If either or both of the maximum
   *     and minimum values are set, they are displayed.<br>If neither maximum nor minimum values are set, no
   *     description is displayed.<br>The maximum and minimum values are displayed at the bottom of the ring and cannot
   *     be relocated. They may be blocked by the ring if the ring's start and end angles are not set properly.
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
   * @param { GaugeShadowOptions } value - Shadow effect. You can specify the blur radius, and the offset along the X
   *     and Y axes.<br>**NOTE**<br>The shadow color is the same as the ring color.<br>If this attribute is set to
   *     **null**, the shadow effect is disabled.
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
   * @param { GaugeIndicatorOptions } value - Indicator style.<br>**NOTE**<br>If this attribute is set to **null**, no
   *     indicator is displayed.
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
   * @param { Optional<boolean> } isPrivacySensitiveMode - Whether to enable privacy mode. In privacy mode, the gauge
   *     indicator points to **0**, the maximum and minimum values are masked, and the scale range is displayed in gray
   *     or the background color. The value **true** means to enable privacy mode, and **false** means the opposite.<br>
   *     Default value: **false**.<!--Del--><br>For widgets, this property must be used with
   *     [FormComponent]{@link form_component} and the [obscured]{@link CommonMethod#obscured} attribute to display
   *     privacy masking effects.<!--DelEnd-->.
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
   * @param { ContentModifier<GaugeConfiguration> } modifier - Content modifier to apply to the current component.<br>
   *     **modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
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
 * The **Gauge** component represents a gauge that displays data in a circular format.
 *
 * > **NOTE**
 *
 * > - This component supports [WithTheme]{@link with_theme} since API version 26.0.0.
 *
 * ###### Child Components
 *
 * This component can contain only one child component.
 *
 * > **NOTE**
 * >
 * > - Supported child component types: built-in and custom components, including
 * > [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) but excluding [ForEach]{@link for_each}
 * > and [LazyForEach]{@link lazy_for_each}.
 * >
 * > - You are advised to use the **Text** component to build the current value and auxiliary text.
 * >
 * > - If the width and height of the child component are in percentage, the reference range is the rectangle that has
 * > the outer ring as its inscribed circle.
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