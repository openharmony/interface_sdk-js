/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * The **Graphics** module provides APIs for defining attributes of a custom node.
 *
 * @file
 * @kit ArkUI
 */

import drawing from '../@ohos.graphics.drawing';

import type common2D from '../@ohos.graphics.common2D';

import { Resource } from '../global/resource';

/**
 * Returns the width and height of the component. The default unit is vp, but APIs that use the Size type may specify a
 * different unit, in which case the unit specified by the API takes precedence.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface Size {

  /**
   * Width of the component.
   *
   * Unit: vp.
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width: number;

  /**
   * Height of the component.
   *
   * Unit: vp.
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  height: number;
}

/**
 * Graphics drawing context, which provides the canvas width and height required for drawing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class DrawContext {

  /**
   * Obtains the width and height of the canvas.
   *
   * @returns { Size } Width and height of the canvas.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get size(): Size;

  /**
   * Obtains the width and height of the canvas in px.
   *
   * @returns { Size } Width and height of the canvas, in px.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get sizeInPixel(): Size;

  /**
   * Obtains the canvas used for drawing.
   *
   * @returns { drawing.Canvas } Canvas for drawing.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get canvas(): drawing.Canvas;
}

/**
 * Defines a vector that contains the x and y coordinate values.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface Vector2 {

  /**
   * X coordinate value of the vector.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * Y coordinate value of the vector.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;
}

/**
 * Represents a vector of the T type that contains two values: x and y.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface Vector2T<T> {

  /**
   * X coordinate value of the vector.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: T;

  /**
   * Y coordinate value of the vector.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: T;
}

/**
 * Represents a vector including three values: x, y, and z.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface Vector3 {

  /**
   * X coordinate value of the vector.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * Y coordinate value of the vector.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;

  /**
   * Rotation angle along the z-axis.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  z: number;
}

/**
 * Defines a vector that contains the x, y, z, and w coordinate values.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface Vector4 {

  /**
   * X coordinate value of the vector.
   * Value range: (-∞,+∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * Y coordinate value of the vector.
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * Z coordinate value of the vector.
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  z: double;

  /**
   * W coordinate value of the vector.
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  w: double;
}

/**
 * Sets a 4x4 matrix.
 * The **Matrix4** type is used to set transformation information for components. The following is an example:
 * ```
 * const transform: Matrix4 = [
 * 1, 0, 45, 0,
 * 0, 1,  0, 0,
 * 0, 0,  1, 0,
 * 0, 0,  0, 1
 * ]
 * ```.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Matrix4 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

/**
 * Sets the offset of the component or effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Offset = Vector2;

/**
 * Sets or returns the position of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Position = Vector2;

/**
 * Sets or returns the position of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type PositionT<T> = Vector2T<T>;

/**
 * Sets the pivot of the component. As the rotation or scaling center of the component, the pivot affects the rotation
 * and scaling effects.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Pivot = Vector2;

/**
 * Sets the scale factor of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Scale = Vector2;

/**
 * Sets the translation amount of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Translation = Vector2;

/**
 * Sets the rotation angle of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Rotation = Vector3;

/**
 * Sets or returns the layout size and position of the component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export declare interface Frame {

  /**
   * Horizontal position.
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * Vertical position.
   *
   * Unit: vp.
   *
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;

  /**
   * Component width.
   *
   * Unit: vp.
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width: number;

  /**
   * Component height.
   *
   * Unit: vp.
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  height: number;
}

/**
 * Describes the edges.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface Edges<T> {

  /**
   * Left edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  left: T;

  /**
   * Right edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  right: T;

  /**
   * Top edge.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
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
   * @atomicservice
   * @since 12 dynamic
   */
  bottom: T;
}

/**
 * Enumerates length units.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LengthUnit {

  /**
   * Length in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PX = 0,

  /**
   * Length in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  VP = 1,

  /**
   * Length in fp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FP = 2,

  /**
   * Length in percentage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PERCENT = 3,

  /**
   * Length in lpx.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LPX = 4
}

/**
 * Sets the width and height attributes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface SizeT<T> {

  /**
   * Width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: T;

  /**
   * Height.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: T;
}

/**
 * Enumerates length units.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export enum LengthMetricsUnit {

  /**
   * Length in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * Length in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PX = 1
}

/**
 * Defines the length attribute. When the length unit is PERCENT, the value **1** indicates 100%.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class LengthMetrics {

  /**
   * A constructor used to create a **LengthMetrics** instance. If the **unit** parameter is omitted or explicitly set
   * to **undefined**, the default unit VP is used. If it is set to a value that is not of the LengthUnit type, the
   * default value 0 VP is used.
   *
   * @param { number } value - Value of the length property.<br>Value range: [0, +∞).
   * @param { LengthUnit } [unit] - Unit of the length property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: number, unit?:LengthUnit);

  /**
   * Creates a length property in px.
   *
   * @param { number } value - Value of the length property.<br>Value range: (-∞, +∞).
   * @returns { LengthMetrics } Instance of the **LengthMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static px(value: number): LengthMetrics;

  /**
   * Creates a length property in vp.
   *
   * @param { number } value - Value of the length property.<br>Value range: (-∞, +∞).
   * @returns { LengthMetrics } Instance of the **LengthMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static vp(value: number): LengthMetrics;

  /**
   * Creates a length property in fp.
   *
   * @param { number } value - Value of the length property.<br>Value range: (-∞, +∞).
   * @returns { LengthMetrics } Instance of the **LengthMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static fp(value: number): LengthMetrics;

  /**
   * Creates a length property in percent. The value **1** indicates 100%.
   *
   * @param { number } value - Value of the length property.<br>Value range: [0, 1].
   * @returns { LengthMetrics } Instance of the **LengthMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static percent(value: number): LengthMetrics;

  /**
   * Creates a length property in lpx.
   *
   * @param { number } value - Value of the length property.<br>Value range: (-∞, +∞).
   * @returns { LengthMetrics } Instance of the **LengthMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static lpx(value: number): LengthMetrics;

  /**
   * Represents the length of a resource of the Resource type.
   *
   * @param { Resource } value - Value of the length property.
   * @returns { LengthMetrics } Instance of the **LengthMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static resource(value: Resource): LengthMetrics;

  /**
   * Unit of the length property. The default value is VP.
   *
   * @default VP
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public unit: LengthUnit;

  /**
   * Value of the length property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public value: number;

  /**
   * Sets automatic refresh for the LengthMetrics object.
   * When enabled, the length value of the object created by LengthMetrics.resource() is automatically updated
   * when the system configuration changes.
   *
   * @param { boolean } value - whether to automatically update the length value when the system configuration changes.
   *     <br>If set to true, the length value of the object created by LengthMetrics.resource() is automatically updated
   *     when the system configuration changes. If set to false, the length value of the object created by
   *     LengthMetrics.resource() is automatically updated when the system configuration changes.
   *     The default value is false.
   * @returns { LengthMetrics } Returns the LengthMetrics object for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoRefresh?(value: boolean): LengthMetrics;
}

/**
 * Used to mix colors.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ColorMetrics {

  /**
   * Check if ColorMetrics represents an HDR color.
   * Returns true if color was created using createHDRColorWithXx or has RGB values > 1.0.
   *
   * @returns { boolean } Whether ColorMetrics is an HDR color.
   *     Returns true if:
   *     - The color was created using createHDRColorWithXx() method.
   *     - Any RGB channel value is greater than 1.0.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  isHDR(): boolean;

  /**
   * Sets automatic refresh for the ColorMetrics object.
   * When enabled, the color values of objects created with ColorMetrics.resourceColor() are automatically updated
   * when the system configuration changes.
   *
   * @param { boolean } value - Whether to automatically refresh the color value when system configuration changes.
   *     <br>If this parameter is set to true, the color values of objects created using ColorMetrics.resourceColor()
   *     are automatically updated when the system configuration changes. If set to false, the color values of objects
   *     created by ColorMetrics.resourceColor() are not automatically updated.
   *     The default value is false.
   * @returns { ColorMetrics } Returns the ColorMetrics object for chaining.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoRefresh?(value: boolean): ColorMetrics;

  /**
   * Instantiates the **ColorMetrics** class using a color in HEX format.
   *
   * @param { number } value - Color in HEX format.<br>RGB and ARGB color values are supported.
   * @returns { ColorMetrics } Instance of the **ColorMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static numeric(value: number): ColorMetrics;

  /**
   * Instantiates the **ColorMetrics** class using colors in RGB or RGBA format.
   *
   * @param { number } red - Red component of the color. The value is an integer ranging from 0 to 255.
   * @param { number } green - Green component of the color. The value is an integer ranging from 0 to 255.
   * @param { number } blue - Blue component of the color. The value is an integer ranging from 0 to 255.
   * @param { number } alpha - Alpha component of the color. The value is a floating point number ranging from 0.0 to 1.
   *     0. The default value is **1.0** (fully opaque).<br> Note: If alpha is less than 0, the color is fully
   *     transparent. If alpha is greater than 1, the color is opaque.
   * @returns { ColorMetrics } Instance of the **ColorMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics;

  /**
   * Creates a **ColorMetrics** instance using specified [ColorSpace]{@link ColorSpace} and RGBA values. Only certain
   * attributes support color configuration in the display-p3 color space.
   *
   * @param { ColorSpace } colorSpace - Color space used to specify the color. If ColorSpace.DISPLAY_P3 is used, the
   *     [setWindowColorSpace](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowcolorspace9-1) API
   *     must be called to set the current window to the wide color gamut mode.
   * @param { number } red - Red component of the color. The value is a floating point number ranging from 0 to 1.
   * @param { number } green - Green component of the color. The value is a floating point number ranging from 0 to 1.
   * @param { number } blue - Blue component of the color. The value is a floating point number ranging from 0 to 1.
   * @param { number } [alpha] - Alpha component of the color. The value is a floating point number ranging from 0.0 to
   *     1.0. The default value is **1.0** (fully opaque).
   * @returns { ColorMetrics } Instance of the **ColorMetrics** class.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics;

  /**
   * Instantiates the **ColorMetrics** class using a color in resource reference format.
   *
   * @param { ResourceColor } color - Color in resource reference format.
   * @returns { ColorMetrics } Instance of the **ColorMetrics** class.
   * @throws { BusinessError } 180003 - Failed to obtain the color resource.
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   *     1. The type of the input color parameter is not ResourceColor.
   *     2. The format of the input color string is not RGB or RGBA.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static resourceColor(color: ResourceColor): ColorMetrics;

  /**
   * Create ColorMetrics class using HDR color with linear exposure.
   * Create an HDR color value with specified linear exposure.
   * The exposure value controls the brightness of the color in a linear color space.
   * When using linear exposure, RGB channel values are typically in the range [0, 1].
   *
   * @param { double } linearExposure - Linear exposure value in exposure value.
   *     Valid range:
   *     [1, +∞).
   *     A value of 1.0 represents standard exposure.
   *     Values greater than 1.0 increase brightness linearly.
   * @param { ColorSpace } colorSpace - Color space of color.
   *     Supports SRGB, DISPLAY_P3, and BT2020 color spaces.
   * @param { double } red - Red component value. Valid range: [0, 1].
   * @param { double } green - Green component value. Valid range: [0, 1].
   * @param { double } blue - Blue component value. Valid range: [0, 1].
   * @param { double } [alpha] - Alpha (opacity) component value. Valid range: [0, 1].
   *     The default value is 1.0 (fully opaque).
   * @returns { ColorMetrics } ColorMetrics class instance with HDR color.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static createHDRColorWithLinearExposure(linearExposure: double, colorSpace: ColorSpace,
    red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Create ColorMetrics class using HDR color with linear exposure.
   * Create an HDR color value with specified logarithmic exposure (stops).
   * The exposure value controls the brightness in a logarithmic (perceptual) color space.
   * When using logarithmic exposure, RGB channel values are typically in the range [0, 1].
   *
   * @param { double } exposure - Logarithmic exposure value in stops.
   *     Valid range:
   *     [0, +∞).
   *     A value of 0.0 represents standard exposure.
   *     Each increment of 1.0 doubles the brightness (one stop).
   * @param { ColorSpace } colorSpace - Color space of color.
   *     Supports SRGB, DISPLAY_P3, and BT2020 color spaces.
   * @param { double } red - Red component value. Valid range: [0, 1].
   * @param { double } green - Green component value. Valid range: [0, 1].
   * @param { double } blue - Blue component value. Valid range: [0, 1].
   * @param { double } [alpha] - Alpha (opacity) component value. Valid range: [0, 1].
   *     The default value is 1.0 (fully opaque).
   * @returns { ColorMetrics } ColorMetrics class instance with HDR color.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static createHDRColorWithLogExposure(exposure: double, colorSpace: ColorSpace,
    red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Create ColorMetrics class using HDR color with default exposure.
   * Create an HDR color value with default exposure (0.0 for logarithmic, 1.0 for linear).
   * When no exposure value is specified, RGB channel values can exceed 1.0 to achieve HDR brightness.
   * This matches iOS UIColor behavior where RGB values > 1.0 enable HDR rendering.
   *
   * @param { ColorSpace } colorSpace - Color space of color.
   *     Supports SRGB, DISPLAY_P3, and BT2020 color spaces.
   * @param { double } red - Red component value. Valid range: [0, +∞). Values greater than 1.0 enable HDR brightness.
   * @param { double } green - Green component value. Valid range: [0, +∞).
   *     Values greater than 1.0 enable HDR brightness.
   * @param { double } blue - Blue component value. Valid range: [0, +∞).
   *     Values greater than 1.0 enable HDR brightness.
   * @param { double } [alpha] - Alpha (opacity) component value. Valid range: [0, 1].
   *     The default value is 1.0 (fully opaque).
   * @returns { ColorMetrics } ColorMetrics class instance with HDR color.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static createHDRColor(colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Get color space of the ColorMetrics.
   * Returns the color space used when creating this color.
   *
   * @returns { ColorSpace } The color space of the ColorMetrics.
   *     Possible value: ColorSpace.SRGB, ColorSpace.DISPLAY_P3, ColorSpace.BT2020.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getColorSpace(): ColorSpace;

  /**
   * Get red value.
   * Returns red channel value as a floating-point number.
   * For SDR colors, value is in range [0, 1].
   * For HDR colors, value can be greater than 1.0 to represent extended brightness.
   *
   * @returns { double } The red value.
   *     Valid range:
   *     For SDR colors: [0, 1].
   *     Fro HDR colors: [0, +∞), values > 1.0 indicate HDR brightness.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getRedValue(): double;

  /**
   * Get green value.
   * Returns green channel value as a floating-point number.
   * For SDR colors, value is in range [0, 1].
   * For HDR colors, value can be greater than 1.0 to represent extended brightness.
   *
   * @returns { double } The green value.
   *     Valid range:
   *     For SDR colors: [0, 1].
   *     Fro HDR colors: [0, +∞), values > 1.0 indicate HDR brightness.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getGreenValue(): double;

  /**
   * Get blue value.
   * Returns blue channel value as a floating-point number.
   * For SDR colors, value is in range [0, 1].
   * For HDR colors, value can be greater than 1.0 to represent extended brightness.
   *
   * @returns { double } The blue value.
   *     Valid range:
   *     For SDR colors: [0, 1].
   *     Fro HDR colors: [0, +∞), values > 1.0 indicate HDR brightness.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getBlueValue(): double;

  /**
   * Blends a specified color (**overlayColor**) with the current color and returns the resulting color.
   *
   * @param { ColorMetrics } overlayColor - Color to overlay. The alpha value determines the blending strength: **1.0**
   *     indicates complete opacity (fully covers the base color), and **0.0** indicates complete transparency (returns
   *     the original color).
   * @returns { ColorMetrics } New color object with red, green, blue, and alpha channels representing the blended
   *     result of the current color and overlay color.
   * @throws { BusinessError } 401 - Parameter error. The type of the input parameter is not ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  blendColor(overlayColor: ColorMetrics): ColorMetrics;

  /**
   * Obtains the color of **ColorMetrics**. The return value is a string indicating an RGBA color value.
   *
   * @returns { string } String indicating an RGBA color value. Example: **'rgba(255, 100, 255, 0.5)'**
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get color(): string;

  /**
   * Obtains the red component of the ColorMetrics color.
   *
   * @returns { number } Red component of the color. The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get red(): number;

  /**
   * Obtains the green component of the ColorMetrics color.
   *
   * @returns { number } Green component of the color. The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get green(): number;

  /**
   * Obtains the blue component of the ColorMetrics color.
   *
   * @returns { number } Blue component of the color. The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get blue(): number;

  /**
   * Obtains the alpha component of the ColorMetrics color.
   *
   * @returns { number } Alpha component of the color. The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get alpha(): number;
}

/**
 * Describes the four corners.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface Corners<T> {

  /**
   * Radius of the upper left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  topLeft: T;

  /**
   * Radius of the upper right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  topRight: T;

  /**
   * Radius of the lower left corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottomLeft: T;

  /**
   * Radius of the lower right corner.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottomRight: T;
}

/**
 * Sets the semi-axis lengths for the x-axis and y-axis of the rounded corners.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type CornerRadius = Corners<Vector2>;

/**
 * Sets the uniform radius of the four corners.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type BorderRadiuses = Corners<number>;

/**
 * Describes a rectangle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Rect = common2D.Rect;

/**
 * Describes a rectangle with rounded corners.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface RoundRect {

  /**
   * Attributes of the rectangle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rect: Rect;

  /**
   * Attributes of rounded corners.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  corners: CornerRadius;
}

/**
 * Describes a circle.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface Circle {

  /**
   * X-coordinate of the center of the circle, in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  centerX: number;

  /**
   * Y-coordinate of the center of the circle, in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  centerY: number;

  /**
   * Radius of the circle, in px.
   *
   * Value range: [0, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number;
}

/**
 * Describes the command for drawing a path.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface CommandPath {

  /**
   * Commands for drawing a path. For details about how to convert pixel units, see [Pixel Units]{@link common}.
   *
   * Unit: px
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  commands: string;
}

/**
 * Describes the shape mask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ShapeMask {

  /**
   * A constructor used to create a **ShapeMask** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Sets a rectangle mask.
   *
   * @param { Rect } rect - Shape of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRectShape(rect: Rect): void;

  /**
   * Sets the mask in the shape of a rectangle with rounded corners.
   *
   * @param { RoundRect } roundRect - Shape of the rectangle with rounded corners.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * Sets a round mask.
   *
   * @param { Circle } circle - Round shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCircleShape(circle: Circle): void;

  /**
   * Sets an oval mask.
   *
   * @param { Rect } oval - Oval shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOvalShape(oval: Rect): void;

  /**
   * Sets the command for drawing a path.
   *
   * @param { CommandPath } path - Command for drawing a path.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCommandPath(path: CommandPath): void;

  /**
   * Describes the fill color of the mask, in ARGB format. The default value is **0XFF000000**.
   *
   * A color with only the transparency is generated based on the transparency and brightness of **fillColor**. The
   * higher the brightness, the more transparent the color. Then, the color is blended with the color of **RenderNode**
   * using the [BlendMode.SRC_IN]{@link @ohos.graphics.drawing:drawing.BlendMode} API to generate the final color.
   *
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fillColor: number;

  /**
   * Sets the stroke color for the mask, in ARGB format. The default value is **0XFF000000**.
   *
   * A color with only the transparency is generated based on the transparency and brightness of **strokeColor**. The
   * higher the brightness, the more transparent the color. Then, the color is blended with the color of **RenderNode**
   * using the [BlendMode.SRC_IN]{@link @ohos.graphics.drawing:drawing.BlendMode} API to generate the final color.
   *
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeColor: number;

  /**
   * Sets the stroke width for the mask, in px. The default value is **0**.
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth: number;
}

/**
 * Sets the clipping shape.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ShapeClip {

  /**
   * A constructor used to create a **ShapeClip** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Sets a rectangle for shape clipping.
   *
   * @param { Rect } rect - Shape of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRectShape(rect: Rect): void;

  /**
   * Sets a rounded rectangle for shape clipping.
   *
   * @param { RoundRect } roundRect - Shape of the rectangle with rounded corners.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * Sets a circle for shape clipping.
   *
   * @param { Circle } circle - Round shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCircleShape(circle: Circle): void;

  /**
   * Sets an oval shape for shape clipping.
   *
   * @param { Rect } oval - Oval shape.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOvalShape(oval: Rect): void;

  /**
   * Sets the command for drawing a path.
   *
   * @param { CommandPath } path - Command for drawing a path.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCommandPath(path: CommandPath): void;
}

/**
 * Generates an **edgeColors** object with the specified edge color for all edges.
 *
 * @param { number } all - Edge color, in ARGB format, for example, **0xffff00ff**.<br>Value range: [0, 0xffffffff]
 * @returns { Edges<number> } **edgeColors** object whose edge colors are all at the specified value.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function edgeColors(all: number): Edges<number>;

/**
 * Generates an **edgeWidths** object with the specified edge width for all edges.
 *
 * @param { number } all - Edge width, in vp.<br>Value range: [0, +∞).
 * @returns { Edges<number> } **edgeWidths** object whose edge widths are all at the specified value.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function edgeWidths(all: number): Edges<number>;

/**
 * Generates a border style object with the specified border style color for all borders.
 *
 * @param { BorderStyle } all - Border style.
 * @returns { Edges<BorderStyle> } **borderStyles** object whose borders are all in the specified style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function borderStyles(all: BorderStyle): Edges<BorderStyle>;

/**
 * Generates a **borderRadiuses** object with the specified radius for all border corners.
 *
 * @param { number } all - Radius of border corners.<br>Unit: vp.<br>Value range: [0, +∞).
 * @returns { BorderRadiuses } **borderRadiuses** object whose border corners all have the specified radius.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function borderRadiuses(all: number): BorderRadiuses;

/**
 * Defines the background blur effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface BackgroundBlur {

  /**
   * Blur radius for background blur.
   * The value must be greater than or equal to 0, the larger the value, the more blurred the background.
   * The value 0 indicates no blur.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radius: double;

  /**
   * Grayscale parameters for the blur effect.
   * Value range for each parameter: [0, 127].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  grayscale?: [int, int];
}

/**
 * Defines the content blur effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ContentBlur {

  /**
   * Blur radius for content blur.
   * The value must be greater than or equal to 0, the larger the value, the more blurred the content.
   * The value 0 indicates no blur.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radius: double;

  /**
   * Grayscale parameters for the blur effect.
   * Value range for each parameter: [0, 127].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  grayscale?: [int, int];
}

/**
 * Defines the foreground blur effect.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ForegroundBlur {

  /**
   * Blur radius for foreground blur.
   * The value must be greater than or equal to 0, the larger the value, the more blurred the foreground.
   * The value 0 indicates no blur.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radius: double;
}