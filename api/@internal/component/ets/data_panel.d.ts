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
 * Enumerates data panel types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum DataPanelType {
  /**
   * Line data panel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Line,

  /**
   * Circle data panel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Circle,
}

/**
 * Describes the gradient color stop.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface ColorStop {
  /**
   * Color value at the gradient color stop.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  color: ResourceColor;

  /**
   * Gradient color stop (proportion value between 0 and 1). A value less than 0 evaluates to the value **0**. A value
   * greater than 1 evaluates to the value **1**.
   *
   * **Note:**
   *
   * If the value is a string that represents a number, it will be converted to a number.
   *
   * For example, **'10vp'** is converted to 10, and **'10%'** is converted to 0.1.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  offset: Length;
}

/**
 * LinearGradient class
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare class LinearGradient {
  /**
   * Describes the linear gradient.
   *
   * @param { ColorStop[] } colorStops - Gradient colors and color stops.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor(colorStops: ColorStop[]);
}

/**
 * Inherits from [MultiShadowOptions]{@link MultiShadowOptions} and has all properties of **MultiShadowOptions**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface DataPanelShadowOptions extends MultiShadowOptions {
  /**
   * Array of shadow colors for data segments.
   *
   * Default value: same as the value of **valueColors**
   *
   * **Note:**
   *
   * If the number of the set shadow colors is less than that of the data segments, the number of the displayed shadow
   * colors is the same as the former.
   *
   * If the number of the set shadow colors is greater than that of the data segments, the number of the displayed
   * shadow colors is the same as the latter.
   *
   * @default Consistent with valueColors
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  colors?: Array<ResourceColor | LinearGradient>;
}

/**
 * Defines data panel configuration options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface DataPanelOptions {
  /**
   * Data value list. The array length range is [0, 9]. If more than nine values are set, only the first nine ones are
   * used. A value less than 0 evaluates to the value **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  values: number[];

  /**
   * - When set to a value greater than 0, this parameter indicates the maximum value in the **values** list.
   * - When set to a value equal to or smaller than 0, this parameter indicates the sum of values in the **values**
   * list, and the values are displayed proportionally.
   *
   * Default Value: **100**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  max?: number;

  /**
   * Type of the data panel (dynamic modification is not supported).
   *
   * The value options are as follows: **DataPanelType.Line** (linear data panel, suitable for displaying comparisons of
   * multiple data segments in limited space) and **DataPanelType.Circle** (circle data panel, suitable for intuitively
   * displaying data proportion relationships).
   *
   * If not passed, the default value is **DataPanelType.Circle**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  type?: DataPanelType;
}

/**
 * The **DataPanel** component is used to display the proportions of multiple data items in a chart. It supports two
 * display types: circle and linear. You can customize visual effects such as the color, shadow, and background. It is
 * applicable to data visualization scenarios such as storage capacity, task progress, and resource proportions, helping
 * users intuitively understand data distribution.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface DataPanelInterface {
  /**
   * Creates a data panel component.
   *
   * @param { DataPanelOptions } options - Data panel configuration options, used to set the data value list, maximum
   *     value, and type of the data panel.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (options: DataPanelOptions): DataPanelAttribute;
}

/**
 * You need a custom class to implement the **ContentModifier** API. It inherits from
 * [CommonConfiguration]{@link CommonConfiguration}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DataPanelConfiguration extends CommonConfiguration<DataPanelConfiguration> {
  /**
   * Current values of the data panel.
   *
   * The array length range is [0, 9].
   *
   * **Note:**
   *
   * If the array length is greater than 9, only the first nine items are used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  values: number[];

  /**
   * Maximum value displayed in the data panel.
   *
   * Default value: **100**
   *
   * **Note:**
   *
   * If the value is less than or equal to 0, **maxValue** is set to the sum of all items in the **values** array, and
   * the values are displayed proportionally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  maxValue: number;
}

/**
 * In addition to the [universal attributes]{@link ./common}, the following attributes are supported.
 *
 * @extends CommonMethod [since 7 - 10]
 * @extends CommonMethod<DataPanelAttribute> [since 11]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare class DataPanelAttribute extends CommonMethod<DataPanelAttribute> {
  /**
   * Sets whether to disable the rotation and shadow effects for the data proportion chart. When the
   * [trackShadow]{@link DataPanelAttribute#trackShadow} attribute is not set, this attribute controls the shadow
   * effect. When **closeEffect** is set to **false** (shadow enabled), the default shadow effect is used. When the
   * **trackShadow** attribute is set, the shadow effect is controlled by the value of the **trackShadow** attribute.
   *
   * @param { boolean } value - Whether to disable the rotation and shadow effects for the data proportion chart.
   *     <br>Default value: **false**, which means the rotation and shadow effects are enabled. The value **true** means
   *     the rotation and shadow effects are disabled.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  closeEffect(value: boolean): DataPanelAttribute;

  /**
   * Sets an array of data segment colors.
   *
   * @param { Array<ResourceColor | LinearGradient> } value - Array of data segment colors. A value of the
   *     **ResourceColor** type indicates a solid color, and a value of the **LinearGradient** type indicates a color
   *     gradient. The array defaults to gradient colors. The default colors for the nine data segments are:
   *     [{ color: '#F7CE00', offset: 0 }, { color: '#F99B11', offset: 1 }],
   *     [{ color: '#F76223', offset: 0 }, { color: '#F2400A', offset: 1 }],
   *     [{ color: '#F772AC', offset: 0 }, { color: '#E65392', offset: 1 }],
   *     [{ color: '#A575EB', offset: 0 }, { color: '#A12DF7', offset: 1 }],
   *     [{ color: '#7B79F7', offset: 0 }, { color: '#4B48F7', offset: 1 }],
   *     [{ color: '#4B8AF3', offset: 0 }, { color: '#007DFF', offset: 1 }],
   *     [{ color: '#73C1E6', offset: 0 }, { color: '#4FB4E3', offset: 1 }],
   *     [{ color: '#A5D61D', offset: 0 }, { color: '#69D14F', offset: 1 }],
   *     [{ color: '#A2A2B0', offset: 0 }, { color: '#8E8E93', offset: 1 }].
   *     <br>**Note:**
   *     <br>If the number of colors set is less than the number of data segments, the remaining data segments
   *     automatically match the colors in the corresponding order in the default color list. If the number of colors
   *     set is greater than the number of data segments, the number of colors displayed is the same as the number of
   *     data segments, and the extra colors are ignored.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  valueColors(value: Array<ResourceColor | LinearGradient>): DataPanelAttribute;

  /**
   * Sets the background color.
   *
   * @param { ResourceColor } value - Background color.
   *     <br>Default value: **'#08182431'**, in hexadecimal ARGB format, where the first two digits indicate the
   *     transparency.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  trackBackgroundColor(value: ResourceColor): DataPanelAttribute;

  /**
   * Sets the stroke width of the border. This attribute does not take effect when the data panel type is
   * **DataPanelType.Line**.
   *
   * @param { Length } value - Stroke width of the border.
   *     <br>Default value: **24**
   *     <br>Unit: vp
   *     <br>When string values are provided without explicit units, the default unit px will be applied. For example, '
   *     10' is equivalent to '10px'.
   *     <br>**Note:**
   *     <br>This parameter does not take effect when the data panel type is **DataPanelType.Line**.
   *     <br>If a value less than 0 is set, the default value is used.
   *     <br>If the value is greater than the ring radius, the ring thickness is automatically set to 12% of the ring
   *     radius. If the value is too large, the ring may disappear.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth(value: Length): DataPanelAttribute;

  /**
   * Sets the shadow style. If this attribute is set, the shadow effect is controlled by this attribute, and the control
   * of **closeEffect** over the shadow effect no longer takes effect (the control of **closeEffect** over the rotation
   * effect is not affected).
   *
   * @param { DataPanelShadowOptions } value - Shadow style.
   *     <br>**Note:**
   *     <br>When set to null, the shadow effect is not enabled.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  trackShadow(value: DataPanelShadowOptions): DataPanelAttribute;

  /**
   * Creates a content modifier.
   *
   * @param { ContentModifier<DataPanelConfiguration> } modifier - Content modifier to apply to the **DataPanel**
   *     component. After this parameter, the content you define replaces the original content displayed by
   *     **DataPanel**.
   *     <br>**modifier**: content modifier. You need to define a custom class to implement the **ContentModifier** API.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  contentModifier(modifier: ContentModifier<DataPanelConfiguration>): DataPanelAttribute;
}

/**
 * The **DataPanel** component is used to display the proportions of multiple data items in a chart. It supports two
 * display types: circle and linear. You can customize visual effects such as the color, shadow, and background. It is
 * applicable to data visualization scenarios such as storage capacity, task progress, and resource proportions, helping
 * users intuitively understand data distribution.
 *
 * > **NOTE**
 * >
 * > - This component supports [WithTheme]{@link ./with_theme} since API version 26.0.0.
 *
 * ###### Child Components
 *
 * Not supported
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const DataPanel: DataPanelInterface;

/**
 * Defines DataPanel Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const DataPanelInstance: DataPanelAttribute;