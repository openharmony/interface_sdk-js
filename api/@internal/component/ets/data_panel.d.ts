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
  Line = 0,

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
   * **NOTE**
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
   * Creates a linear gradient color object.
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
   * **NOTE**
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
   * Data value list. A maximum of nine values are supported. If more than nine values are set, only the first nine ones
   * are used. A value less than 0 evaluates to the value **0**.
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
   * list, and the values are displayed proportionally based on their relative sizes.
   *
   * Default value: **100**
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
   * Default value: **DataPanelType.Circle**
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
 * The **DataPanel** component is used to display proportions in a chart.
 *
 * > **NOTE**
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
   * @param { DataPanelOptions } options - Parameters of the data panel.
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
 * You need a custom class to implement the **ContentModifier** API. Inherits from
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
   * The length of the array should be within the range of [0, 9].
   *
   * **NOTE**
   *
   * If the array length is greater than 9, the first nine items are used.
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
   * **NOTE**
   *
   * If the value is less than or equal to 0, **maxValue** is set to the sum of all items in the **values** array and
   * displayed proportionally.
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
 * In addition to the 
 * [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following
 * attributes are supported.
 *
 * The [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md) are supported.
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
   * Sets whether to disable the rotation and shadow effects for the component. When the
   * [trackShadow]{@link DataPanelAttribute#trackShadow} attribute is not configured, this attribute controls the shadow
   * effect. If the shadow effect is enabled, the default shadow style is applied. When **trackShadow** is explicitly
   * set, the **trackShadow** configuration takes precedence.
   *
   * @param { boolean } value - Whether to disable the rotation and shadow effects for the component.<br>Default value:
   *     **false**. **true**: Disable the rotation and shadow effects. **false**: Enable the rotation and shadow
   *     effects.
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
   *     gradient. The array defaults to gradient colors.<br>Default colors for the nine data segments:
   *     [{ color: '#F7CE00', offset: 0 }, { color: '#F99B11', offset: 1 }],
   *     [{ color: '#F76223', offset: 0 }, { color: '#F2400A', offset: 1 }],
   *     [{ color: '#F772AC', offset: 0 }, { color: '#E65392', offset: 1 }],
   *     [{ color: '#A575EB', offset: 0 }, { color: '#A12DF7', offset: 1 }],
   *     [{ color: '#7B79F7', offset: 0 }, { color: '#4B48F7', offset: 1 }],
   *     [{ color: '#4B8AF3', offset: 0 }, { color: '#007DFF', offset: 1 }],
   *     [{ color: '#73C1E6', offset: 0 }, { color: '#4FB4E3', offset: 1 }],
   *     [{ color: '#A5D61D', offset: 0 }, { color: '#69D14F', offset: 1 }],
   *     [{ color: '#A2A2B0', offset: 0 }, { color: '#8E8E93', offset: 1 }]
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
   * @param { ResourceColor } value - Background color.<br>The value is in hexadecimal ARGB notation. The first two
   *     digits indicate transparency. Default value: **'#08182431'**
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
   * @param { Length } value - Stroke width of the border.<br>Default value: **24**<br>Unit: vp<br>When string values
   *     are provided without explicit units, the default unit px will be applied. For example, '10' is equivalent to '1
   *     0px'.<br>**NOTE**<br>If a value less than 0 is set, the default value is used.<br>If the value exceeds the
   *     radius of the ring, the thickness will automatically be adjusted to 12% of the ring's radius to prevent visual
   *     issues. Excessively large values may cause the ring to become invisible.
   * @returns { DataPanelAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth(value: Length): DataPanelAttribute;

  /**
   * Sets the shadow style.
   *
   * @param { DataPanelShadowOptions } value - Shadow style.<br>**NOTE**<br>If this parameter is set to **null**, the
   *     shadow effect is disabled.
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
   * @param { ContentModifier<DataPanelConfiguration> } modifier - Content modifier to apply to the current component.
   *     <br>**modifier**: content modifier. You need a custom class to implement the **ContentModifier** API.
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
 * The **DataPanel** component is used to display proportions in a chart.
 *
 * > **NOTE**
 *
 * > - This component supports [WithTheme]{@link with_theme} since API version 26.0.0
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