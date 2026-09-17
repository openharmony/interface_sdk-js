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
 *
 * @file
 * @kit ArkUI
 */

/**
 * Defines reference resources for component attributes. Resource files must be stored and managed in specific
 * subdirectories. For examples of resource directories, see
 * [Resource Categories](docroot://quick-start/resource-categories-and-access.md#resource-categories).
 *
 * > **NOTE**
 * >
 * > - When a resource type is referenced, ensure that the data type in the resource type object is consistent with the
 * > type of the attribute method that uses the resource type as a parameter. For example, if an attribute method
 * > supports setting string | Resource, the data type should also be string when the Resource reference type is used.
 * >
 * > - When a resource type is referenced, ensure that the usage of the resource type object is currently supported.
 * > Otherwise, the effect of the attribute that uses the resource type as a parameter will be the same as when the
 * > attribute is not set.
 * >
 * > - $rawfile does not support preview through the
 * > [Previewer](https://developer.huawei.com/consumer/en/doc/harmonyos-guides/ide-previewer-arkts-js).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Resource = import('../api/global/resource').Resource;

/**
 * Defines a size unit.
 *
 * @unionmember { string } String type. Specify the length [unit]{@link ./common} explicitly, for example, **'10px'**,
 *     or provide the length in percentage, for example, **'100%'**.
 *     <br>**NOTE**
 *     <br>If the unit is not specified, the default unit vp is used, in which case **'10'** is equivalent to 10 vp.
 * @unionmember { number } Number type. The default unit is vp.
 * @unionmember { Resource } Size referenced from system or app resources.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Length = string | number | Resource;

/**
 * Defines a length in px.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type PX = `${number}px`;

/**
 * Defines a length in vp.
 *
 * @unionmember { `${number}vp` } Viewport pixel unit. The unit vp can be included, for example, **'10vp'**.
 * @unionmember { number } Viewport pixel unit. The unit vp can be omitted, for example, **10**.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type VP = `${number}vp` | number;

/**
 * Defines a length in fp.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type FP = `${number}fp`;

/**
 * Defines a length in lpx.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type LPX = `${number}lpx`;

/**
 * Length type, used to describe a length in percentage units.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Percentage = `${number}%`;

/**
 * Angle type, used to describe an angle in deg.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Degree = `${number}deg`;

/**
 * Defines a size unit.
 *
 * @unionmember { PX } Physical pixel unit type. The unit px must be included, for example, **'10px'**.
 * @unionmember { VP } Viewport pixel unit. The unit vp can be included or omitted, for example, **10** or **'10vp'**.
 * @unionmember { FP } Font pixel unit type. The unit fp must be included, for example, **'10fp'**.
 * @unionmember { LPX } Logical pixel unit type. The unit lpx must be included, for example, **'10lpx'**.
 * @unionmember { Percentage } Percentage type. The unit % must be included, for example, **'10%'**.
 * @unionmember { Resource } Size referenced from system or app resources.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Dimension = PX | VP | FP | LPX | Percentage | Resource;

/**
 * Defines the types that can be used by input parameters of the string type.
 *
 * @unionmember { string } String type.
 * @unionmember { Resource } String referenced from system or app resources.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type ResourceStr = string | Resource;

/**
 * Defines the paddings in different directions of a component.
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Padding = {
  /**
   * Top padding, which is the distance from the element within the component to the top of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  top?: Length;

  /**
   * Right padding, which is the distance from the element within the component to the right boundary of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  right?: Length;

  /**
   * Bottom padding, which is the distance from the element within the component to the bottom of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  bottom?: Length;

  /**
   * Left padding, which is the distance from the element within the component to the left boundary of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  left?: Length;
}

/**
 * Defines the paddings in different directions of a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedPadding {
  /**
   * Height of the padding on the top of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;

  /**
   * Width of the padding on the right of the component.
   *
   * Width of the padding on the left of the component in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;

  /**
   * Height of the padding at the bottom of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LengthMetrics;

  /**
   * Width of the padding on the left of the component.
   *
   * Width of the padding on the right of the component in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;
}

/**
 * Defines the margins in different directions of a component.
 *
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Margin = Padding;

/**
 * Defines component edge widths for absolute directions.
 *
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type EdgeWidth = EdgeWidths;

/**
 * Defines component edge widths for absolute directions.
 *
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type EdgeWidths = {
  /**
   * Width of the top border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  top?: Length;

  /**
   * Width of the right border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  right?: Length;

  /**
   * Width of the bottom border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottom?: Length;

  /**
   * Width of the left border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  left?: Length;
}

/**
 * Defines component edge widths for localized logical directions.
 *
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedEdgeWidths {
  /**
   * Width of the top edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;

  /**
   * Width of the right edge of the component.
   *
   * Width of the left edge of the component in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;

  /**
   * Width of the bottom edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LengthMetrics;

  /**
   * Width of the left edge of the component.
   *
   * Width of the right edge of the component in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;
}

/**
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type EdgeOutlineWidths = {
  /**
   * Width of the top outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  top?: Dimension;

  /**
   * Width of the right outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  right?: Dimension;

  /**
   * Width of the bottom outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottom?: Dimension;

  /**
   * Width of the left outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  left?: Dimension;
}

/**
 * Defines the corner radius of a component's border.
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type BorderRadiuses = {
  /**
   * Radius of the top-left corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  topLeft?: Length;

  /**
   * Radius of the top-right corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  topRight?: Length;

  /**
   * Radius of the bottom-left corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottomLeft?: Length;

  /**
   * Radius of the bottom-right corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottomRight?: Length;
}

/**
 * Defines the corner radius of a component's border.
 *
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedBorderRadiuses {
  /**
   * Radius of the top-left corner of the component.
   *
   * For right-to-left scripts, this indicates the radius of the top-right corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  topStart?: LengthMetrics;

  /**
   * Radius of the top-right corner of the component.
   *
   * For right-to-left scripts, this indicates the corner radius of the top-left corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  topEnd?: LengthMetrics;

  /**
   * Radius of the bottom-left corner of the component.
   *
   * For right-to-left scripts, this indicates the corner radius of the bottom-right corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottomStart?: LengthMetrics;

  /**
   * Radius of the bottom-right corner of the component.
   *
   * For right-to-left scripts, this indicates the corner radius of the bottom-left corner of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottomEnd?: LengthMetrics;
}

/**
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type OutlineRadiuses = {
  /**
   * Radius of the top-left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  topLeft?: Dimension;

  /**
   * Radius of the top-right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  topRight?: Dimension;

  /**
   * Radius of the bottom-left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottomLeft?: Dimension;

  /**
   * Radius of the bottom-right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottomRight?: Dimension;
}

/**
 * Defines the edge colors of a component.
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type EdgeColors = {
  /**
   * Color of the top border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  top?: ResourceColor;

  /**
   * Color of the right border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  right?: ResourceColor;

  /**
   * Color of the bottom border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottom?: ResourceColor;

  /**
   * Color of the left border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  left?: ResourceColor;
}

/**
 * Defines the edge colors of a component.
 *
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedEdgeColors {
  /**
   * Color of the top edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: ResourceColor;

  /**
   * Color of the right edge of the component.
   *
   * Color of the left edge of the component in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end?: ResourceColor;

  /**
   * Color of the bottom edge of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: ResourceColor;

  /**
   * Color of the left edge of the component.
   *
   * Color of the right edge of the component in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start?: ResourceColor;
}

/**
 * Defines the margins in different directions of a component.
 *
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type LocalizedMargin = LocalizedPadding;

/**
 * Defines the edge styles of a component.
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type EdgeStyles = {
  /**
   * Style of the top border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  top?: BorderStyle;

  /**
   * Style of the right border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  right?: BorderStyle;

  /**
   * Style of the bottom border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottom?: BorderStyle;

  /**
   * Style of the left border of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  left?: BorderStyle;
}

/**
 * To reference this object, at least one parameter must be passed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type EdgeOutlineStyles = {
  /**
   * Style of the top outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  top?: OutlineStyle;

  /**
   * 	Style of the right outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  right?: OutlineStyle;

  /**
   * Style of the bottom outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottom?: OutlineStyle;

  /**
   * Style of the left outline.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  left?: OutlineStyle;
}

/**
 * Defines the offset coordinates of a component in the layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Offset = {
  /**
   * Horizontal offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  dx: Length;

  /**
   * Vertical offset.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  dy: Length;
}

/**
 * Defines the color types of resources.
 *
 * @unionmember { Color } Color enums.
 * @unionmember { number } Color in HEX format. RGB and ARGB are supported. Examples: **0xffffff** and **0xffff0000**.
 *     The input length is not checked; the format is determined by the value range. For example, **0x00ffffff** is
 *     parsed as RGB.
 * @unionmember { string } Color in RGB, RGBA, or ARGB format.
 *     <br>RGB examples: **'#ffffff'** and **'rgb(255, 100, 255)'**
 *     <br>RGBA example: **'rgba(255, 100, 255, 0.5)'**
 *     <br>ARGB example: **'#ff000000'**
 * @unionmember { Resource } Color referenced from system or app resources.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * Defines the maximum and minimum lengths of a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type LengthConstrain = {
  /**
   * Minimum length of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  minLength: Length;

  /**
   * Maximum length of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  maxLength: Length;
}

/**
 * Function callback type with no parameters and no return value, used to define callback scenarios where no data needs
 *     to be passed and no result is returned.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type VoidCallback = () => void;

/**
 * Defines length metrics unit.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type LengthMetricsUnit = import('../api/arkui/Graphics').LengthMetricsUnit;

/**
 * Defines LengthMetrics.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type LengthMetrics = import('../api/arkui/Graphics').LengthMetrics;

/**
 * Defines ColorMetrics.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ColorMetrics = import('../api/arkui/Graphics').ColorMetrics;

/**
 * Sets the text style.
 *
 * > **NOTE**
 * >
 * > You can use [loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync} to register custom fonts.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface Font {
  /**
   * Font size. If the value is of the number type, the unit fp is used. Percentage strings are not supported.
   *
   * Default value: **16.0**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  size?: Length;

  /**
   * Font weight. For the number type, the value ranges from 100 to 900, at an interval of 100. A larger value indicates
   * a thicker font.
   *
   * Default value: **400** | **FontWeight.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  weight?: FontWeight | number | string;

  /**
   * Font family. Default font: **'HarmonyOS Sans'**.
   *
   * To specify multiple fonts, separate them with commas (,), and fonts are applied in priority order. Example:
   * **'Arial, HarmonyOS Sans'**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  family?: string | Resource;

  /**
   * Font style.
   *
   * Default value: **FontStyle.Normal**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  style?: FontStyle;
}

/**
 * Defines the area information of a component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface Area {
  /**
   * Width of the target element.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width: Length;

  /**
   * Height of the target element.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  height: Length;

  /**
   * Position of the top-left corner of the target element in the
   * [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system) of the parent element.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  position: Position;

  /**
   * Position of the top-left corner of the target element in the current window coordinate system.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalPosition: Position;
}

/**
 * Defines the coordinates of a point.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface Position {
  /**
   * X-coordinate.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: Length;

  /**
   * Y-coordinate.
   *
   * Unit: vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: Length;
}

/**
 * Defines the coordinates of a point.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedPosition {
  /**
   * X-coordinate relative to the left for left-to-right (LTR) scripts; X-coordinate relative to the right for right-to-
   * left (RTL) scripts.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;

  /**
   * Y-coordinate.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;
}

/**
 * Defines the offset relative to the four edges. If both **top** and **bottom** are set, only **top** takes effect.
 *     If both **left** and **right** are set, only **left** takes effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface Edges {
  /**
   * Offset relative to the top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: Dimension;

  /**
   * Offset relative to the left edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  left?: Dimension;

  /**
   * Offset relative to the bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: Dimension;

  /**
   * Offset relative to the right edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  right?: Dimension;
}

/**
 * Defines the offset relative to the four edges. If both **top** and** bottom **are set, only **top** takes effect.
 *     If both **start** and **end** are set, only **start** takes effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedEdges {
  /**
   * Offset relative to the top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;

  /**
   * Offset relative to the left in LTR mode; offset relative to the right in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;

  /**
   * Offset relative to the bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LengthMetrics;

  /**
   * Offset relative to the right in LTR mode; offset relative to the left in RTL mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;
}

/**
 * Defines offset parameters for a component under anchor constraints.
 *
 * Taking horizontal bias as an example, the value is the ratio of D<sub>start</sub> (the distance from the component to
 * the left anchor) to D<sub>start</sub> +  D<sub>end</sub> (the total horizontal distance between anchors). In a
 * mirrored language, D<sub>start</sub> represents the distance from the component to the right anchor. In the following
 * figure, D<sub>width</sub> indicates the width of the component.
 *
 * ![bias_horizontal_example.png](docroot://reference/apis-arkui/arkui-ts/figures/bias_horizontal_example.png)
 *
 * The same rule applies to the vertical direction. The value is the ratio of D<sub>top</sub> (the distance from the
 * component to the top anchor) to D<sub>top</sub> + D<sub>bottom</sub> (the total vertical distance between anchors).
 * In the following figure, D<sub>height</sub> indicates the height of the component.
 *
 * ![bias_vertical_example.png](docroot://reference/apis-arkui/arkui-ts/figures/bias_vertical_example.png)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface Bias {
  /**
   * Bias value in the horizontal direction.
   *
   * This parameter takes effect only when the child component has a valid **width** value and two horizontal anchors.
   * The value must be greater than or equal to 0.
   *
   * Default value: **0.5**
   *
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  horizontal?: number;

  /**
   * Bias value in the vertical direction.
   *
   * This parameter takes effect only when the child component has a valid **height** value and two vertical anchors.
   * The value must be greater than or equal to 0.
   *
   * Default value: **0.5**
   *
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  vertical?: number;
}

/**
 * Defines the size constraints of a component during layout.
 *
 * > **NOTE**
 * >
 * > In the [Row]{@link ./row}, [Column]{@link ./column}, and [RelativeContainer]{@link ./relative_container}
 * > components, setting **width** and **height** to **auto** means that the size adapts to the size of their child
 * > components. In the [TextInput]{@link ./text_input} component, setting **width** to **auto** means that the width
 * > adapts to the width of the text content.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ConstraintSizeOptions {
  /**
   * Minimum width of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  minWidth?: Length;

  /**
   * Maximum width of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxWidth?: Length;

  /**
   * Minimum height of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  minHeight?: Length;

  /**
   * Maximum height of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxHeight?: Length;
}

/**
 * Defines the width and height of a component during layout.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface SizeOptions {
  /**
   * Width of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: Length;

  /**
   * Height of the component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height?: Length;
}

/**
 * Defines border information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BorderOptions {
  /**
   * Border width.
   *
   * @type { ?(EdgeWidths | Length) } [since 9 - 11]
   * @type { ?(EdgeWidths | Length | LocalizedEdgeWidths) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: EdgeWidths | Length | LocalizedEdgeWidths;

  /**
   * Border color.
   *
   * @type { ?(EdgeColors | ResourceColor) } [since 9 - 11]
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * Border corner radius.
   *
   * @type { ?(BorderRadiuses | Length) } [since 9 - 11]
   * @type { ?(BorderRadiuses | Length | LocalizedBorderRadiuses) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radius?: BorderRadiuses | Length | LocalizedBorderRadiuses;

  /**
   * Border style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  style?: EdgeStyles | BorderStyle;

  /**
   * Sets the gap between dashed line segments. This takes effect only when the border style is dashed.
   *
   * Percentage values are not supported.
   *
   * **Widget capability**: This API cannot be used in ArkTS widgets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dashGap?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;

  /**
   * Sets the length of dashed line segments. This takes effect only when the border style is dashed.
   *
   * Percentage values are not supported.
   *
   * **Widget capability**: This API cannot be used in ArkTS widgets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dashWidth?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;
}

/**
 * Defines the outline options.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface OutlineOptions {
  /**
   * Sets the outer outline width. Percentages are not supported.
   *
   * Default value: **0**
   *
   * **width** must be set to display the outline effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width?: EdgeOutlineWidths | Dimension;

  /**
   * Sets the outer outline color.
   *
   * Default value: **Color.Black**
   *
   * @type { ?(EdgeColors | ResourceColor) } [since 11 - 11]
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * Sets the corner radius of the outer outline. Percentages are not supported.
   *
   * Default value: **0**
   *
   * Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius?: OutlineRadiuses | Dimension;

  /**
   * Sets the outer outline style.
   *
   * Default value: **OutlineStyle.SOLID**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style?: EdgeOutlineStyles | OutlineStyle;
}

/**
 * Define the style of checkbox mark.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface MarkStyle {
  /**
   * Color of the internal icon.
   *
   * Default value: **Color.White**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * Size of the internal icon, in vp. The default size is the same as the width of the check box component.
   *
   * Percentage values are not supported. If an invalid value is set, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: Length;

  /**
   * Thickness of the internal icon, in vp. Percentage values are not supported. If an invalid value is set, the default
   * value is used.
   *
   * Default value: **2**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;
}

/**
 * Defines a color filter with a 4 x 5 matrix.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class ColorFilter {
  /**
   * Constructor of ColorFilter, which creates a color filter with a 4\*5 matrix.
   *
   *
   * @param { number[] } value Value of the 4\*5 color matrix, [m\*n] matrix value at row m and column n. The matrix
   *     is row-major.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(value: number[]);
}

/**
 * Defines the coordinates of the touch point. If it is not set, the touch point is centered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TouchPoint {
  /**
   * X-axis coordinate of the touch point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: Dimension;

  /**
   * Y-axis coordinate of the touch point.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: Dimension;
}

/**
 * Defines component edge widths for localized logical directions. Globalization is supported.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DirectionalEdgesT<T> {
  /**
   * Start edge. Corresponds to the left edge in LTR layout and the right edge in RTL layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start: T;

  /**
   * End edge. Corresponds to the right edge in LTR layout and the left edge in RTL layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end: T;

  /**
   * Top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top: T;

  /**
   * Bottom edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom: T;
}

/**
 * Defines divider information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DividerStyleOptions {
  /**
   * Width of the divider line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth?: LengthMetrics;

  /**
   * Color of the divider.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * Distance between the divider and the start edge of the menu side.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  startMargin?: LengthMetrics;

  /**
   * Distance between the divider and the end edge of the menu side.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  endMargin?: LengthMetrics;

  /**
   * Sets the divider mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  mode?: DividerMode;
}

/**
 * Defines the layout weight of a component in a chain.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface ChainWeightOptions {
  /**
   * Layout weight of the component in the horizontal direction. It takes effect when set to a value greater than 0.
   *
   * Default value: **0**
   *
   * Invalid values are treated as **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  horizontal?: number;

  /**
   * Layout weight of the component in the vertical direction. It takes effect when set to a value greater than 0.
   *
   * Default value: **0**
   *
   * Invalid values are treated as **0**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  vertical?: number;
}

/**
 * Defines the struct of AccessibilityOptions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface AccessibilityOptions {
  /**
   * If **accessibilityPreferred** is set to **true**, the accessibility text of this child node is prioritized during
   * depth-first traversal of each child node.
   *
   * If **accessibilityText** is empty, the component's **Text** is used. The concatenated text is set for the parent
   * node whose **accessibilityText** and **text** are both empty.
   *
   * If **accessibilityPreferred** is set to **false**, this feature is disabled.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  accessibilityPreferred?: boolean;

  /**
   * Type of the target child component. After a container component with
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * enabled performs accessibility grouping, the selection state and state announcement text of the child component of
   * the specified type are used as the state and announcement text of the grouped component. This aggregates state
   * announcements during screen reading and eliminates the need to focus on child components individually.
   *
   * **NOTE**
   *
   * If multiple child components of the same type exist in the grouped component, the first matching child component
   * found under the grouped component in the component tree acts as the controller component.
   *
   * Specific types in cross-process embedded components are not supported, such as widgets and **EmbeddedUIExtension**.
   *
   * Default value: no specified component
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  stateControllerRoleType?: AccessibilityRoleType;

  /**
   * [Unique ID]{@link CommonMethod#id} of the target child component. After a container component with
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * enabled performs accessibility grouping, the selection state and state announcement text of the child component of
   * the specified ID are used as the state and announcement text of the grouped component. This aggregates state
   * announcements during screen reading and eliminates the need to focus on child components individually.
   * **NOTE**
   * If multiple child components of the same type exist in the grouped component, the first matching child component
   * found under the grouped component in the component tree acts as the controller component.
   * If this API is configured together with **stateControllerRoleType**, the component with a matching ID is
   * prioritized.
   * Specific types in cross-process embedded components are not supported, such as widgets and **EmbeddedUIExtension**.
   * Default value: no specified component
   * .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  stateControllerId?: string;

  /**
   * Type of the target child component. After a container component with
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * enabled performs accessibility grouping, any triggered accessibility control operation is forwarded to the child
   * component of the specified type. This aggregates click events during screen reading and eliminates the need to
   * focus on child components individually.
   *
   * **NOTE**
   *
   * If multiple child components of the same type exist in the grouped component, the first matching child component
   * found under the grouped component in the component tree acts as the controller component.
   *
   * Currently, only accessibility click actions are supported.
   *
   * Specific types in cross-process embedded components are not supported, such as widgets and **EmbeddedUIExtension**.
   *
   * Default value: no specified component
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  actionControllerRoleType?: AccessibilityRoleType;

  /**
   * [Unique ID]{@link CommonMethod#id} of the target child component. After a container component with
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * enabled performs accessibility grouping, any triggered accessibility control operation is forwarded to the child
   * component of the specified ID. This aggregates click events during screen reading and eliminates the need to focus
   * on child components individually.
   * **NOTE**
   * If multiple child components of the same type exist in the grouped component, the first matching child component
   * found under the grouped component in the component tree acts as the controller component.
   * Currently, only accessibility click actions are supported.
   * If this API is configured together with **actionControllerRoleType**, the component with a matching ID is
   * prioritized.
   * Specific types in cross-process embedded components are not supported, such as widgets and **EmbeddedUIExtension**.
   * Default value: no specified component
   * .
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  actionControllerId?: string;
}

/**
 * Defines optional parameters for accessibility operations of a component, which is used to restrict or modify the
 * operations initiated by accessibility apps such as the screen reader. This API is supported only by the
 * [Slider]{@link ./slider} component. If this API is used on other components, compilation succeeds but the API does
 * not take effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface AccessibilityActionOptions {
  /**
   * Operation step count for an accessibility scroll action triggered by an accessibility gesture. The default value is
   * determined by the component.
   * This setting does not take effect on unsupported components.
   * Currently, the [Slider]{@link ./slider} component is supported. This API triggers sliding for the **Slider**
   * component through swipe gestures after the component gains focus. Scrolling distance: scrollStep *
   * [step]{@link SliderOptions}.  The default value is
   * **1**. Out-of-range values fall back to **1**. For non-integer values within the valid range, the value is rounded
   * down to the nearest integer.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  scrollStep?: number;
}

/**
 * Defines the detailed parameter object that can be used during the accessibility custom next focus processing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface AccessibilityNextFocusParams {
  /**
   * Whether to search for the focus in descendant nodes during custom next-focus processing for accessibility.
   *
   * The value **true** means to search for the focus in descendant nodes during custom next-focus processing for
   *     accessibility; the value **false** means not to search for the focus in descendant nodes during custom
   *     next-focus processing for accessibility.
   *
   * Default value: **false**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isConsiderDescendants?: boolean;
}

/**
 * Custom accessibility action API.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface AccessibilityCustomAction {
  /**
   * Name of the custom action, used to identify and bind the action callback.
   *
   * **Note:**<br/>The text length of the name must be within 128 bytes. The excess part will be truncated.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  name: ResourceStr;

  /**
   * Callback for handling the custom action.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAction: VoidCallback;
}

/**
 * Defines the margin of the scroll bar.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface ScrollBarMargin {
  /**
   * Start margin of the scroll bar. Default value: **0**, in vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  start?: LengthMetrics;

  /**
   * End margin of the scroll bar. Default value: **0**, in vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  end?: LengthMetrics;
}

/**
 * Defines the number of cached items.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface CacheCountInfo {
  /**
   * Minimum number of cached items. When the actual number of cached items is lower than this value, cached items are
   *     loaded during idle intervals between scrolling animation frames.
   *  Values less than 0 are clamped to **1**.
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  minCount: number;
  /**
   * Maximum number of cached items. When the actual number of cached items exceeds this value, redundant items are
   *     recycled or released. The system loads items to reach the maximum count when the UI is idle (no animations or
   *     user interactions).
   *  Values less than **minCount** are clamped to **minCount**.
   * Value range: [**minCount**, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  maxCount: number;
}

/**
/**
 * Describes a two-dimension coordinate.
 * Responsive layout fill mode, used for the WaterFlow, Grid, List, Swiper, and LazyVWaterFlowLayout components. The
 *     LazyVWaterFlowLayout component is supported since API version 26.0.0.
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @stagemodelonly
 * @crossplatform
 * @crossplatform
 * @atomicservice
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface Coordinate2D {
  /**
   * Horizontal coordinate.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;
  /**
   * Vertical coordinate.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;
}

/**
 * Responsive layout fill mode, used for the WaterFlow, Grid, List, Swiper, and LazyVWaterFlowLayout components. The
 *     LazyVWaterFlowLayout component is supported since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type ResponsiveFillType = PresetFillType;

/**
 * Defines a responsive layout policy applicable to the WaterFlow, Grid, List, Swiper, and LazyVWaterFlowLayout
 *     components. The LazyVWaterFlowLayout component is supported since API version 26.0.0.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface ItemFillPolicy {
  /**
   * Column count for different breakpoints. The default value is **BREAKPOINT_DEFAULT**.
   *
   * @default ResponsiveFillType.BREAKPOINT_DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  fillType?: ResponsiveFillType;
}