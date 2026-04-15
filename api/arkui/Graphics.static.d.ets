'use static';
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
 * @file
 * @kit ArkUI
 */
import drawing from '../@ohos.graphics.drawing';
import type common2D from '../@ohos.graphics.common2D';
import { Resource } from '../global/resource';
import { ResourceColor } from '@ohos.arkui.component';
import { BorderStyle } from '@ohos.arkui.component';
import { ColorSpace } from '@ohos.arkui.component';

/**
 * Size info.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface Size {
  /**
   * Get the width of the Size.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width: double;

  /**
   * Get the height of the Size.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  height: double;
}

/**
 * Defines DrawContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class DrawContext {
  /**
   * Get size of the DrawContext.
   *
   * @returns { Size } The size of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get size() :Size;

  /**
   * Get size of the DrawContext with pixel unit.
   *
   * @returns { Size } The size of the DrawContext with pixel unit.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get sizeInPixel(): Size;

  /**
   * Get canvas of the DrawContext.
   *
   * @returns { drawing.Canvas } The canvas of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get canvas(): drawing.Canvas;
}

/**
 * Defines a vector with two values.
 *
 * @interface Vector2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface Vector2 {
  /**
   * Value for x-axis of the vector.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  x: double;

  /**
   * Value for y-axis of the vector.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  y: double;
}

/**
 * Defines a vector with two T type values.
 *
 * @interface Vector2T
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface Vector2T<T> {

  /**
   * Value for x-axis of the vector.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  x: T;

  /**
   * Value for y-axis of the vector.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  y: T;
}

/**
 * Defines a vector with three values.
 *
 * @interface Vector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface Vector3 {
  /**
   * Value for x-axis of the vector.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  x: double;

  /**
   * Value for y-axis of the vector.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  y: double;

  /**
   * Value for z-axis of the vector.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  z: double;
}

/**
 * Defined a vector with four number values.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface Vector4 {
  /**
   * Value for x-axis of the vector.
   * Value range:(-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;

  /**
   * Value for y-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;

  /**
   * Value for z-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  z: double;

  /**
   * Value for w-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  w: double;
}

/**
 * It's a 4x4 matrix, represent by number[].
 *
 * @typedef { [double, double, double, double, double, double, double, double, double, double, double, double, double,
 *     double, double, double] } Matrix4
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Matrix4 = [
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double
];

/**
 * Offset info.
 *
 * @typedef { Vector2 } NodeOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type NodeOffset = Vector2;

/**
 * Position info.
 *
 * @typedef { Vector2 } NodePosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type NodePosition = Vector2;

/**
 * PositionT info.
 * @typedef {Vector2T<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type PositionT<T> = Vector2T<T>;

/**
 * Pivot info.
 *
 * @typedef { Vector2 } Pivot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Pivot = Vector2;

/**
 * Scale info.
 *
 * @typedef { Vector2 } Scale
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Scale = Vector2;

/**
 * Translation info.
 *
 * @typedef { Vector2 } Translation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Translation = Vector2;

/**
 * Rotation info.
 *
 * @typedef { Vector3 } Rotation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Rotation = Vector3;

/**
 * Frame info, include the position info and size info.
 *
 * @interface Frame
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Frame {
  /**
   * Position value for x-axis of the frame info.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  x: double;

  /**
   * Position value for y-axis of the frame info.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  y: double;

  /**
   * Size value for width of the frame info.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width: double;

  /**
   * Size value for height of the frame info.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  height: double;
}

/**
 * Defines the Edge property.
 *
 * @interface NodeEdges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface NodeEdges<T> {
  /**
   * Left property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  left: T;

  /**
   * Right property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  right: T;

  /**
   * Top property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  top: T;

  /**
   * Bottom property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  bottom: T;
}

/**
 * Defines the Length Unit.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare enum LengthUnit {
  /**
   * Logical pixel used in Ace1.0. It's based on frontend design width.
   * For example, when a frontend with 750px design width running on a
   * device with 1080 pixels width, 1px represents 1.44 pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PX = 0,

  /**
   * Density independent pixels, one vp is one pixel on a 160 dpi screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  VP = 1,

  /**
   * Scale independent pixels. This is like VP but will be scaled by
   * user's font size preference.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  FP = 2,

  /**
   * The percentage of either a value from the element's parent or from
   * another property of the element itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PERCENT = 3,

  /**
   * Logic pixels used in ACE2.0 instead of PX, and PX is the physical pixels in ACE2.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  LPX = 4
}

/**
 * Defines the Size property.
 *
 * @interface SizeT
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface SizeT<T> {
  /**
   * Width property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  width: T;

  /**
   * Height property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  height: T;
}

/**
 * Enumerates the length metrics unit.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export enum LengthMetricsUnit {

  /**
   * The default length metrics unit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * The pixel length metrics unit.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  PX = 1
}

/**
 * Defines the Length Metrics.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class LengthMetrics {
  /**
   * Constructor.
   *
   * @param { double } value - The value of length.
   * @param { LengthUnit } [unit] - The length unit.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor(value: double, unit?:LengthUnit);

  /**
   * Init a lengthMetrics with px unit.
   *
   * @param { double } value - The value of the length metrics.
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit px.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static px(value: double): LengthMetrics;

  /**
   * Init a lengthMetrics with vp unit.
   *
   * @param { double } value - The value of the length metrics.
   * @returns { LengthMetrics } - Returns the lengthMetrics object with unit vp.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static vp(value: double): LengthMetrics;

  /**
   * Init a lengthMetrics with fp unit.
   *
   * @param { double } value - The value of the length metrics.
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit fp.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static fp(value: double): LengthMetrics;

  /**
   * Init a lengthMetrics with percent unit.
   *
   * @param { double } value - The value of the length metrics.
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit percent.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static percent(value: double): LengthMetrics;

  /**
   * Init a lengthMetrics with lpx unit.
   *
   * @param { double } value - The value of the length metrics.
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit lpx.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static lpx(value: double): LengthMetrics;

  /**
   * Init a lengthMetrics with Resource unit.
   *
   * @param { Resource } value - The value of the length metrics.
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit Resource.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static resource(value: Resource): LengthMetrics;

  /**
   * The unit of the LengthMetrics. The default value is VP.
   *
   * @type { LengthUnit }
   * @default VP
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public unit: LengthUnit;

  /**
   * The value of the LengthMetrics.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public value: double;
}

/**
 * Defines the ColorMetrics class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ColorMetrics {
  /**
   * White.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly WHITE: int;
  /**
   * Black.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly BLACK: int;
  /**
   * Blue.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly BLUE: int;
  /**
   * Brown.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly BROWN: int;
  /**
   * Gray.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly GRAY: int;
  /**
   * Green.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly GREEN: int;
  /**
   * Grey.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly GREY: int;
  /**
   * Orange.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly ORANGE: int;
  /**
   * Pink.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly PINK: int;
  /**
   * Red.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly RED: int;
  /**
   * Yellow.
   * 
   * @type { int }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly YELLOW: int;
  /**
   * Transparent.
   * 
   * @type { string }
   * @readonly
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  public static readonly TRANSPARENT: string;
  /**
   * Instantiate the ColorMetrics class using color number
   *
   * @param { int } value - color number
   * @returns { ColorMetrics } ColorMetrics class
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static numeric(value: int): ColorMetrics;

  /**
   * Instantiate the ColorMetrics class using color rgb
   *
   * @param { double } red - red value of rgba
   * @param { double } green - green value of rgba
   * @param { double } blue - blue value of rgba
   * @param { double } [alpha] - opacity value of rgba
   * @returns { ColorMetrics } ColorMetrics class
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static rgba(red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Instantiate the ColorMetrics class using colorSpace and rgba.
   * Only some properties support setting color in display-p3 colorSpace.
   *
   * @param { ColorSpace } colorSpace - colorSpace of color.
   * @param { double } red - red value of rgba. The range of the red channel is [0, 1].
   * @param { double } green - green value of rgba. The range of the green channel is [0, 1].
   * @param { double } blue - blue value of rgba. The range of the blue channel is [0, 1].
   * @param { double } [alpha] - alpha value of rgba. The range of the alpha channel is [0, 1]. The default value is 1.
   * @returns { ColorMetrics } ColorMetrics class
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static colorWithSpace(colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Instantiate the ColorMetrics class using ResourceColor
   *
   * @param { ResourceColor } color - resource color
   * @returns { ColorMetrics } ColorMetrics class
   * @throws { BusinessError } 180003 - Failed to obtain the color resource.
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   *     1. The type of the input color parameter is not ResourceColor.
   *     2. The format of the input color string is not RGB or RGBA.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  static resourceColor(color: ResourceColor): ColorMetrics;

  /**
   * Create ColorMetrics class using HDR color with linear exposure.
   * Create an HDR color value with specified linear exposure.
   * The exposure value controls the brightness of the color in a linear color space.
   * When using linear exposure, RGB channel values are typically in the range [0, 1].
   *
   * @param { double } linearExposure - Linear exposure value in exposure value.
   *                                    Valid range: [1, +∞).
   *                                    A value of 1.0 represents standard exposure.
   *                                    Values greater than 1.0 increase brightness linearly.
   * @param { ColorSpace } colorSpace - Color space of color.
   *                                    Supports SRGB, DISPLAY_P3, and BT2020 color spaces.
   * @param { double } red - Red component value. Valid range: [0, 1].
   * @param { double } green - Green component value. Valid range: [0, 1].
   * @param { double } blue - Blue component value. Valid range: [0, 1].
   * @param { double } [alpha] - Alpha (opacity) component value. Valid range: [0, 1].
   *                              The default value is 1.0 (fully opaque).
   * @returns { ColorMetrics } ColorMetrics class instance with HDR color.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  static createHDRColorWithLinearExposure(linearExposure: double, colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Create ColorMetrics class using HDR color with linear exposure.
   * Create an HDR color value with specified logarithmic exposure (stops).
   * The exposure value controls the brightness in a logarithmic (perceptual) color space.
   * When using logarithmic exposure, RGB channel values are typically in the range [0, 1].
   *
   * @param { double } exposure - Logarithmic exposure value in stops.
   *                                    Valid range: [0, +∞).
   *                                    A value of 0.0 represents standard exposure.
   *                                    each increment of 1.0 doubles the brightness (one stop).
   * @param { ColorSpace } colorSpace - Color space of color.
   *                                    Supports SRGB, DISPLAY_P3, and BT2020 color spaces.
   * @param { double } red - Red component value. Valid range: [0, 1].
   * @param { double } green - Green component value. Valid range: [0, 1].
   * @param { double } blue - Blue component value. Valid range: [0, 1].
   * @param { double } [alpha] - Alpha (opacity) component value. Valid range: [0, 1].
   *                              The default value is 1.0 (fully opaque).
   * @returns { ColorMetrics } ColorMetrics class instance with HDR color.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  static createHDRColorWithLogExposure(exposure: double, colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Create ColorMetrics class using HDR color with default exposure.
   * Create an HDR color value with default exposure (0.0 for logarithmic, 1.0 for linear).
   * When no exposure value is specified, RGB channel values can exceed 1.0 to achieve HDR brightness.
   * This matches iOS UIColor behavior where RGB values > 1.0 enable HDR rendering.
   *
   * @param { ColorSpace } colorSpace - Color space of color.
   *                                    Supports SRGB, DISPLAY_P3, and BT2020 color spaces.
   * @param { double } red - Red component value. Valid range: [0, +∞).
   *                          Values greater than 1.0 enable HDR brightness.
   * @param { double } green - Green component value. Valid range: [0, +∞).
   *                          Values greater than 1.0 enable HDR brightness.
   * @param { double } blue - Blue component value. Valid range: [0, +∞).
   *                          Values greater than 1.0 enable HDR brightness.
   * @param { double } [alpha] - Alpha (opacity) component value. Valid range: [0, 1].
   *                              The default value is 1.0 (fully opaque).
   * @returns { ColorMetrics } ColorMetrics class instance with HDR color.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  static createHDRColor(colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * Get color space of the ColorMetrics.
   * Returns the color space used when creating this color.
   *
   * @returns { ColorSpace } The color space of the ColorMetrics.
   *    Possible value: ColorSpace.SRGB, ColorSpace.DISPLAY_P3, ColorSpace.BT2020.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  getColorSpace(): ColorSpace;

  /**
   * Check if ColorMetrics represents an HDR color.
   * Returns true if color was created using createHDRColorWithXx or has RGB values > 1.0.
   *
   * @returns { boolean } Whether ColorMetrics is an HDR color.
   *    Returns true if:
   *    - The color was created using createHDRColorWithXx() method.
   *    - Any RGB channel value is greater than 1.0.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  isHDR(): boolean;

  /**
   * Get red value.
   * Returns red channel value as a floating-point number.
   * For SDR colors, value is in range [0, 1].
   * For HDR colors, value can be greater than 1.0 to represent extended brightness.
   *
   * @returns { double } The red value.
   *    Valid range: [0, +∞).
   *    For SDR colors: [0, 1].
   *    Fro HDR colors: [0, +∞), values > 1.0 indicate HDR brightness.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  getRedValue(): double;

  /**
   * Get green value.
   * Returns green channel value as a floating-point number.
   * For SDR colors, value is in range [0, 1].
   * For HDR colors, value can be greater than 1.0 to represent extended brightness.
   *
   * @returns { double } The green value.
   *    Valid range: [0, +∞).
   *    For SDR colors: [0, 1].
   *    Fro HDR colors: [0, +∞), values > 1.0 indicate HDR brightness.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  getGreenValue(): double;

  /**
   * Get blue value.
   * Returns blue channel value as a floating-point number.
   * For SDR colors, value is in range [0, 1].
   * For HDR colors, value can be greater than 1.0 to represent extended brightness.
   *
   * @returns { double } The blue value.
   *    Valid range: [0, +∞).
   *    For SDR colors: [0, 1].
   *    Fro HDR colors: [0, +∞), values > 1.0 indicate HDR brightness.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 24 static
   */
  getBlueValue(): double;

  /**
   * blend color
   *
   * @param { ColorMetrics } overlayColor - overlay color
   * @returns { ColorMetrics } ColorMetrics class
   * @throws { BusinessError } 401 - Parameter error. The type of the input parameter is not ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  blendColor(overlayColor: ColorMetrics): ColorMetrics;

  /**
   * Get color of the ColorMetrics.
   *
   * @returns { string } The color of the ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get color(): string;

  /**
   * Get red value of the ColorMetrics.
   *
   * @returns { int } The red value of the ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get red(): int;

  /**
   * Get green value of the ColorMetrics.
   *
   * @returns { int } The green value of the ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get green(): int;

  /**
   * Get blue value of the ColorMetrics.
   *
   * @returns { int } The blue value of the ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get blue(): int;

  /**
   * Get opacity value of the ColorMetrics.
   *
   * @returns { int } The opacity value of the ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  get alpha(): int;
}

/**
 * Defines the Corner property.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface Corners<T> {
  /**
   * TopLeft property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topLeft: T;

  /**
   * TopRight property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topRight: T;

  /**
   * BottomLeft property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomLeft: T;

  /**
   * BottomRight property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomRight: T;
}

/**
 * Defines the Corner radius.
 *
 * @typedef { Corners<Vector2> } CornerRadius
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type CornerRadius = Corners<Vector2>;

/**
 * BorderRadiuses info.
 *
 * @typedef { Corners<double> } NodeBorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type NodeBorderRadiuses = Corners<double>;

/**
 * Rect info.
 *
 * @typedef { common2D.Rect } Rect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type Rect = common2D.Rect;

/**
 * Defines the RoundRect.
 *
 * @interface RoundRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface RoundRect {
  /**
   * Rect property.
   *
   * @type { Rect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  rect: Rect;

  /**
   * Corners property.
   *
   * @type { CornerRadius }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  corners: CornerRadius;
}

/**
 * Defines the Circle.
 *
 * @interface Circle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface Circle {
  /**
   * The x-coordinate of the center of the Circle.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  centerX: double,

  /**
   * The y-coordinate of the center of the Circle.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  centerY: double,

  /**
   * The radius of the Circle.
   *
   * @type { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  radius: double;
}

/**
 * Defines the CommandPath.
 *
 * @interface CommandPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export interface CommandPath {
  /**
   * The commands of CommandPath.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  commands: string;
}

/**
 * Defines ShapeMask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ShapeMask {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();

  /**
   * Set the rect shape of the ShapeMask.
   *
   * @param { Rect } rect - The rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setRectShape(rect: Rect): void;

  /**
   * Set the round rect shape of the ShapeMask.
   *
   * @param { RoundRect } roundRect - The round rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * Set the circle shape of the ShapeMask.
   *
   * @param { Circle } circle - The circle shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setCircleShape(circle: Circle): void;

  /**
   * Set the oval shape of the ShapeMask.
   *
   * @param { Rect } oval - The oval shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setOvalShape(oval: Rect): void;

  /**
   * Set the command path of the ShapeMask.
   *
   * @param { CommandPath } path - The command path will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setCommandPath(path: CommandPath): void;

  /**
   * The fill color of the ShapeMask.
   *
   * @type { int }
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  fillColor: int;

  /**
   * The stroke color of the ShapeMask.
   *
   * @type { int }
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeColor: int;

  /**
   * The stroke width of the ShapeMask.
   *
   * @type { double }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  strokeWidth: double;
}


/**
 * Define ShapeClip. Record the type and parameters of the shape used for clipping.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare class ShapeClip {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  constructor();

  /**
   * Set the rect shape of the ShapeClip.
   *
   * @param { Rect } rect - The rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setRectShape(rect: Rect): void;

  /**
   * Set the round rect shape of the ShapeClip.
   *
   * @param { RoundRect } roundRect - The round rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * Set the circle shape of the ShapeClip.
   *
   * @param { Circle } circle - The circle shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setCircleShape(circle: Circle): void;

  /**
   * Set the oval shape of the ShapeClip.
   *
   * @param { Rect } oval - The oval shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setOvalShape(oval: Rect): void;

  /**
   * Set the command path of the ShapeClip.
   *
   * @param { CommandPath } path - The command path will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 23 static
   */
  setCommandPath(path: CommandPath): void;
}

/**
 * Obtain an object with all edges are set to the same color.
 *
 * @param { int } all - The edge color will be set.
 * @returns { NodeEdges<int> } - The object with all edges are set to the same color.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare function edgeColors(all: int): NodeEdges<int>;

/**
 * Obtain an object with all edges are set to the same width.
 *
 * @param { double } all - The edge width will be set.
 * @returns { NodeEdges<double> } - The object with all edges are set to the same width.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare function edgeWidths(all: double): NodeEdges<double>;

/**
 * Obtain an object with all edges are set to the same style.
 *
 * @param { BorderStyle } all - The edge style will be set.
 * @returns { NodeEdges<BorderStyle> } - The object with all edges are set to the same style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare function borderStyles(all: BorderStyle): NodeEdges<BorderStyle>;

/**
 * Obtain a BorderRadiuses object with all edges are set to the same radius.
 *
 * @param { double } all - The edge radius will be set.
 * @returns { NodeBorderRadiuses } - The BorderRadiuses object.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare function borderRadiuses(all: double): NodeBorderRadiuses;
