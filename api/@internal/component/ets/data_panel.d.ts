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
 * DataPanelType enum
 * @since 8
 */
/**
 * DataPanelType enum
 * @form
 * @since 9
 */
/**
 * DataPanelType enum
 * @form
 * @crossplatform
 * @since 10
 */
declare enum DataPanelType {
  /**
   * Line Type
   * @since 8
   */
  /**
   * Line Type
   * @form
   * @since 9
   */
  /**
   * Line Type
   * @form
   * @crossplatform
   * @since 10
   */
  Line,

  /**
   * Line Rainbow
   * @since 8
   */
  /**
   * Line Rainbow
   * @form
   * @since 9
   */
  /**
   * Line Rainbow
   * @form
   * @crossplatform
   * @since 10
   */
  Circle,
}

/**
 * ColorStop type
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare type ColorStop = {
  /**
   * Color property.
   * @type { ResourceColor } color - the color value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  color: ResourceColor;

  /**
   * Offset property.
   * @type { Length } offset - the color offset.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  offset: Length;
}

/**
 * LinearGradient class
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare class LinearGradient {
  /**
   * Constructor.
   * @param { ColorStop[] } colorStops - the LinearGradient constructor parameter.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  constructor(colorStops: ColorStop[]);
}

/**
 * Defines the options of Shadow.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
declare interface DataPanelShadowOptions {

  /**
   * Current shadow radius.
   * @type { number | Resource } radius - the current shadow radius.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @default 5
   * @crossplatform
   * @since 10
   */
  radius?: number | Resource;

  /**
   * Current shadow colors.
   * @type { Array<ResourceColor | LinearGradient> } colors - the current shadow colors.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @default Consistent with valueColors
   * @crossplatform
   * @since 10
   */
  colors?: Array<ResourceColor | LinearGradient>;

  /**
   * Current shadow offsetX.
   * @type { number | Resource } offsetX - the current shadow offsetX.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @default 5
   * @crossplatform
   * @since 10
   */
  offsetX?: number | Resource;

  /**
   * Current shadow offsetY
   * @type { number | Resource } offsetY - the current shadow offsetY.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @default 5
   * @crossplatform
   * @since 10
   */
  offsetY?: number | Resource;
}

/**
 * Defines the options of DataPanel.
 * @since 7
 */
/**
 * Defines the options of DataPanel.
 * @form
 * @since 9
 */
/**
 * Defines the options of DataPanel.
 * @form
 * @crossplatform
 * @since 10
 */
declare interface DataPanelOptions {
  /**
   * Current data value. the max length is 9.
   * @since 7
   */
  /**
   * Current data value. the max length is 9.
   * @form
   * @since 9
   */
  /**
   * Current data value. the max length is 9.
   * @form
   * @crossplatform
   * @since 10
   */
  values: number[];

  /**
   * Maximum value of the current data.
   * @since 7
   */
  /**
   * Maximum value of the current data.
   * @form
   * @since 9
   */
  /**
   * Maximum value of the current data.
   * @form
   * @crossplatform
   * @since 10
   */
  max?: number;

  /**
   * DataPanel Type
   * @since 8
   */
  /**
   * DataPanel Type
   * @form
   * @since 9
   */
  /**
   * DataPanel Type
   * @form
   * @crossplatform
   * @since 10
   */
  type?: DataPanelType;
}

/**
 * Defines the DataPanel component.
 * @since 7
 */
/**
 * Defines the DataPanel component.
 * @form
 * @since 9
 */
/**
 * Defines the DataPanel component.
 * @form
 * @crossplatform
 * @since 10
 */
interface DataPanelInterface {
  /**
   * Return a DataPanel.
   * @since 7
   */
  /**
   * Return a DataPanel.
   * @form
   * @since 9
   */
  /**
   * Return a DataPanel.
   * @form
   * @crossplatform
   * @since 10
   */
  (options: DataPanelOptions): DataPanelAttribute;
}

/**
 * Defines the DataPanel attribute functions.
 * @since 7
 */
/**
 * Defines the DataPanel attribute functions.
 * @form
 * @since 9
 */
/**
 * Defines the DataPanel attribute functions.
 * @form
 * @crossplatform
 * @since 10
 */
declare class DataPanelAttribute extends CommonMethod<DataPanelAttribute> {
  /**
   * Disable the special effect of the data ratio chart.
   * @since 7
   */
  /**
   * Disable the special effect of the data ratio chart.
   * @form
   * @since 9
   */
  /**
   * Disable the special effect of the data ratio chart.
   * @form
   * @crossplatform
   * @since 10
   */
  closeEffect(value: boolean): DataPanelAttribute;

  /**
   * Set the value colors of the data ratio chart.
   * @param { Array<ResourceColor | LinearGradient> } value - the value colors of the data ratio chart.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  valueColors(value: Array<ResourceColor | LinearGradient>): DataPanelAttribute;

  /**
   * Set track background color of the data ratio chart.
   * @param { ResourceColor } value - track background color of the data ratio chart.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  trackBackgroundColor(value: ResourceColor): DataPanelAttribute;

  /**
   * Set the stroke width of the data ratio chart.
   * @param { Length } value - the stroke width of the data ratio chart.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  strokeWidth(value: Length): DataPanelAttribute;

  /**
   * Set the shadow width of the data ratio chart.
   * @param { DataPanelShadowOptions } value - the track shadow width of the data ratio chart.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  trackShadow(value: DataPanelShadowOptions): DataPanelAttribute;
}

/**
 * Defines DataPanel Component.
 * @since 7
 */
/**
 * Defines DataPanel Component.
 * @form
 * @since 9
 */
/**
 * Defines DataPanel Component.
 * @form
 * @crossplatform
 * @since 10
 */
declare const DataPanel: DataPanelInterface

/**
 * Defines DataPanel Component instance.
 * @since 7
 */
/**
 * Defines DataPanel Component instance.
 * @form
 * @since 9
 */
/**
 * Defines DataPanel Component instance.
 * @form
 * @crossplatform
 * @since 10
 */
declare const DataPanelInstance: DataPanelAttribute;
