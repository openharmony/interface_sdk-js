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

/**
 * Size info.
 * Returns the width and height of the component. The default unit is vp, but APIs that use the Size type may specify a
 * different unit, in which case the unit specified by the API takes precedence.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Size info.
 * Returns the width and height of the component. The default unit is vp, but APIs that use the Size type may specify a
 * different unit, in which case the unit specified by the API takes precedence.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface Size {
  /**
   * Get the width of the Size.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Get the width of the Size.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: number;

  /**
   * Get the height of the Size.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Get the height of the Size.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: number;
}

/**
 * Defines DrawContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defines DrawContext.
 * Graphics drawing context, which provides the canvas width and height required for drawing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class DrawContext {

  /**
   * Get size of the DrawContext.
   *
   * @returns { Size } The size of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Get size of the DrawContext.
   *
   * @returns { Size } The size of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get size(): Size;

  /**
   * Get size of the DrawContext with pixel unit.
   *
   * @returns { Size } The size of the DrawContext with pixel unit.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get sizeInPixel(): Size;

  /**
   * Get canvas of the DrawContext.
   *
   * @returns { drawing.Canvas } The canvas of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Get canvas of the DrawContext.
   *
   * @returns { drawing.Canvas } The canvas of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get canvas(): drawing.Canvas;
}

/**
  * Defines a vector with two values.
  *
  * @interface Vector2
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @since 11
  */
 /**
  * Defines a vector with two values.
  *
  * @interface Vector2
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
interface Vector2 {
  /**
   * Value for x-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Value for x-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number

  /**
   * Value for y-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Value for y-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: number
}

/**
  * Defines a vector with two T type values.
  *
  * @interface Vector2T
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @stagemodelonly
  * @crossplatform
  * @atomicservice
  * @since 12 dynamic
  */
interface Vector2T<T> {

  /**
   * Value for x-axis of the vector.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: T;

  /**
   * Value for y-axis of the vector.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: T;
}

/**
 * Defines a vector with three values.
 *
 * @interface Vector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Defines a vector with three values.
 *
 * @interface Vector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface Vector3 {
  /**
   * Value for x-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Value for x-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Value for y-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Value for y-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;

  /**
   * Value for z-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Value for z-axis of the vector.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  z: number;
}

/**
 * Defined a vector with four number values.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface Vector4 {
  /**
   * Value for x-axis of the vector.
   * Value range:(-∞, +∞).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * Value for y-axis of the vector.
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
   * Value for z-axis of the vector.
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
   * Value for w-axis of the vector.
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
 * It's a 4x4 matrix, represent by number[].
 * Value range of each number: (-∞, +∞)
 *
 * @typedef { number[] } Matrix4
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * It's a 4x4 matrix, represent by number[].
 * Value range of each number: (-∞, +∞)
 *
 * @typedef { number[] } Matrix4
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
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
 * Offset info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Offset info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Offset = Vector2;

/**
 * Position info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Position info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Position = Vector2;

/**
 * PositionT info.
 * Unit: vp.
 * @typedef {Vector2T<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type PositionT<T> = Vector2T<T>;

/**
 * Pivot info.
 * As the rotation or scaling center of the component, the pivot affects the rotation and scaling effects.
 * The value is a floating point number in the range [0.0, 1.0], and the default value is 0.5.
 *
 * @typedef { Vector2 } Pivot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Pivot info.
 * As the rotation or scaling center of the component, the pivot affects the rotation and scaling effects.
 * The value is a floating point number in the range [0.0, 1.0], and the default value is 0.5.
 *
 * @typedef { Vector2 } Pivot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Pivot = Vector2;

/**
 * Scale info.
 * The value is a floating point number, and the default value is 1.0.
 *
 * @typedef { Vector2 } Scale
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Scale info.
 * The value is a floating point number, and the default value is 1.0.
 *
 * @typedef { Vector2 } Scale
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Scale = Vector2;

/**
 * Translation info.
 * Unit: px
 *
 * @typedef { Vector2 } Translation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Translation info.
 * Unit: px
 *
 * @typedef { Vector2 } Translation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Translation = Vector2;

/**
 * Rotation info.
 * Unit: degree
 *
 * @typedef { Vector3 } Rotation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Rotation info.
 * Unit: degree
 *
 * @typedef { Vector3 } Rotation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Rotation = Vector3;

/**
 * Frame info, include the position info and size info.
 *
 * @interface Frame
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @since 11
 */
/**
 * Frame info, include the position info and size info.
 *
 * @interface Frame
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare interface Frame {
  /**
   * Position value for x-axis of the frame info.
   * Unit: vp.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Position value for x-axis of the frame info.
   * Unit: vp.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: number;

  /**
   * Position value for y-axis of the frame info.
   * Unit: vp.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Position value for y-axis of the frame info.
   * Unit: vp.
   * Value range: (-∞, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: number;

  /**
   * Size value for width of the frame info.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Size value for width of the frame info.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: number;

  /**
   * Size value for height of the frame info.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @since 11
   */
  /**
   * Size value for height of the frame info.
   * Unit: vp.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: number;
}

/**
 * Defines the Edge property.
 *
 * @interface Edges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface Edges<T> {
  /**
   * Left property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  left: T,

  /**
   * Right property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  right: T,

  /**
   * Top property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top: T,

  /**
   * Bottom property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom: T,
}

/**
 * Defines the Length Unit.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LengthUnit {
  /**
   * Logical pixel used in Ace1.0. It's based on frontend design width.
   * For example, when a frontend with 750px design width running on a
   * device with 1080 pixels width, 1px represents 1.44 pixels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PX = 0,

  /**
   * Density independent pixels, one vp is one pixel on a 160 dpi screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  VP = 1,

  /**
   * Scale independent pixels. This is like VP but will be scaled by
   * user's font size preference.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FP = 2,

  /**
   * The percentage of either a value from the element's parent or from
   * another property of the element itself.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PERCENT = 3,

  /**
   * Logic pixels used in ACE2.0 instead of PX, and PX is the physical pixels in ACE2.0.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LPX = 4,
}

/**
 * Defines the Size property.
 *
 * @interface SizeT
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface SizeT<T> {
  /**
   * Width property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: T;

  /**
   * Height property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: T;
}

/**
 * Enumerates the length metrics unit.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export enum LengthMetricsUnit {

  /**
   * The default length metrics unit, in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * The pixel length metrics unit.
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
 * Defines the Length Metrics.
 * When the length unit is PERCENT, the value 1 indicates 100%.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class LengthMetrics {
  /**
   * Constructor.
   * If the unit parameter is omitted or explicitly set to undefined, the default unit VP is used.
   * If it is set to a value that is not of the LengthUnit type, the default value 0 VP is used.
   *
   * @param { number } value - The value of length.
   * @param { LengthUnit } [unit] - The length unit.
   * The default value is VP.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: number, unit?:LengthUnit);

  /**
   * Init a lengthMetrics with px unit.
   *
   * @param { number } value - The value of the length metrics.
   * Value range: (-∞, +∞).
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit px.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static px(value: number): LengthMetrics;

  /**
   * Init a lengthMetrics with vp unit.
   *
   * @param { number } value - The value of the length metrics.
   * Value range: (-∞, +∞).
   * @returns { LengthMetrics } - Returns the lengthMetrics object with unit vp.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static vp(value: number): LengthMetrics;

  /**
   * Init a lengthMetrics with fp unit.
   *
   * @param { number } value - The value of the length metrics.
   * Value range: (-∞, +∞).
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit fp.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static fp(value: number): LengthMetrics;

  /**
   * Init a lengthMetrics with percent unit.
   * The value 1 indicates 100%.
   *
   * @param { number } value - The value of the length metrics.
   * Value range: [0, 1].
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit percent.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static percent(value: number): LengthMetrics;

  /**
   * Init a lengthMetrics with lpx unit.
   *
   * @param { number } value - The value of the length metrics.
   * Value range: (-∞, +∞).
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit lpx.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static lpx(value: number): LengthMetrics;

  /**
   * Init a lengthMetrics with Resource unit.
   *
   * @param { Resource } value - The value of the length metrics.
   * @returns { LengthMetrics } Returns the lengthMetrics object with unit Resource.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static resource(value: Resource): LengthMetrics;

  /**
   * The unit of the LengthMetrics. The default value is VP.
   *
   * @type { LengthUnit }
   * @default VP
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public unit: LengthUnit;

  /**
   * The value of the LengthMetrics.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public value: number;
}

/**
 * Defines the ColorMetrics class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ColorMetrics {
  /**
   * Instantiate the ColorMetrics class using color number
   *
   * @param { number } value - color number, in HEX format
   * RGB and ARGB color values are supported.
   * @returns { ColorMetrics } ColorMetrics class
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static numeric(value: number): ColorMetrics;

  /**
   * Instantiate the ColorMetrics class using color rgb
   *
   * @param { number } red - red value of rgba
   * The value is an integer ranging from 0 to 255.
   * @param { number } green - green value of rgba
   * The value is an integer ranging from 0 to 255.
   * @param { number } blue - blue value of rgba
   * The value is an integer ranging from 0 to 255.
   * @param { number } alpha - opacity value of rgba
   * The value is a floating point number ranging from 0.0 to 1.0. The default value is 1.0 (fully opaque).
   * @returns { ColorMetrics } ColorMetrics class
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics;

  /**
   * Instantiate the ColorMetrics class using colorSpace and rgba.
   * Only some properties support setting color in display-p3 colorSpace.
   *
   * @param { ColorSpace } colorSpace - colorSpace of color.
   * @param { number } red - red value of rgba. The range of the red channel is [0, 1].
   * @param { number } green - green value of rgba. The range of the green channel is [0, 1].
   * @param { number } blue - blue value of rgba. The range of the blue channel is [0, 1].
   * @param { number } [alpha] - alpha value of rgba. The range of the alpha channel is [0, 1]. The default value is 1.
   * @returns { ColorMetrics } ColorMetrics class
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics;

  /**
   * Instantiate the ColorMetrics class using ResourceColor
   *
   * @param { ResourceColor } color - resource color
   * @returns { ColorMetrics } ColorMetrics class
   * @throws { BusinessError } 180003 - Failed to obtain the color resource.
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   * 1. The type of the input color parameter is not ResourceColor.
   * 2. The format of the input color string is not RGB or RGBA.
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
   * @since 24 dynamic
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
   * @since 24 dynamic
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
   * @since 24 dynamic
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
   * @since 24 dynamic
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
   * @since 24 dynamic
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
   * @since 24 dynamic
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
   * @since 24 dynamic
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
   * @since 24 dynamic
   */
  getBlueValue(): double;
	
  /**
   * blend color
   *
   * @param { ColorMetrics } overlayColor - overlay color
   * @returns { ColorMetrics } ColorMetrics class
   * @throws { BusinessError } 401 - Parameter error. The type of the input parameter is not ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  blendColor(overlayColor: ColorMetrics): ColorMetrics;
	
  /**
   * Get color of the ColorMetrics.
   * The return value is a string indicating an RGBA color value.
   *
   * @returns { string } The color of the ColorMetrics.
   * String indicating an RGBA color value. Example: 'rgba(255, 100, 255, 0.5)'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
   get color(): string;

  /**
   * Get red value of the ColorMetrics.
   *
   * @returns { number } The red value of the ColorMetrics.
   * The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
   get red(): number;

  /**
   * Get green value of the ColorMetrics.
   *
   * @returns { number } The green value of the ColorMetrics.
   * The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get green(): number;

  /**
   * Get blue value of the ColorMetrics.
   *
   * @returns { number } The blue value of the ColorMetrics.
   * The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get blue(): number;

  /**
   * Get opacity value of the ColorMetrics.
   *
   * @returns { number } The opacity value of the ColorMetrics.
   * The value is an integer ranging from 0 to 255.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get alpha(): number;
}

/**
 * Defines the Corner property.
 *
 * @interface Corners
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface Corners<T> {
  /**
   * TopLeft property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  topLeft: T,

  /**
   * TopRight property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  topRight: T,

  /**
   * BottomLeft property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottomLeft: T,

  /**
   * BottomRight property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottomRight: T,
}

/**
 * Defines the Corner radius.
 *
 * @typedef { Corners<Vector2> } CornerRadius
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type CornerRadius = Corners<Vector2>;

/**
 * BorderRadiuses info.
 *
 * @typedef { Corners<number> } BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type BorderRadiuses = Corners<number>;

/**
 * Rect info.
 *
 * @typedef { common2D.Rect } Rect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Rect = common2D.Rect;

/**
 * Defines the RoundRect.
 *
 * @interface RoundRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface RoundRect {
  /**
   * Rect property.
   *
   * @type { Rect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rect: Rect,

  /**
   * Corners property.
   *
   * @type { CornerRadius }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  corners: CornerRadius
}

/**
 * Defines the Circle.
 *
 * @interface Circle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface Circle {
  /**
   * The x-coordinate of the center of the Circle, in px.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  centerX: number,

  /**
   * The y-coordinate of the center of the Circle, in px.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  centerY: number,

  /**
   * The radius of the Circle, in px.
   * Value range: [0, +∞).
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number
}

/**
 * Defines the CommandPath.
 *
 * @interface CommandPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface CommandPath {
  /**
   * The commands of CommandPath.
   * For details about how to convert the pixel unit, see Pixel Unit Conversion.
   * Unit: px
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  commands: string
}

/**
 * Defines ShapeMask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ShapeMask {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Set the rect shape of the ShapeMask.
   *
   * @param { Rect } rect - The rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRectShape(rect: Rect): void;

  /**
   * Set the round rect shape of the ShapeMask.
   *
   * @param { RoundRect } roundRect - The round rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * Set the circle shape of the ShapeMask.
   *
   * @param { Circle } circle - The circle shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCircleShape(circle: Circle): void;

  /**
   * Set the oval shape of the ShapeMask.
   *
   * @param { Rect } oval - The oval shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOvalShape(oval: Rect): void;

  /**
   * Set the command path of the ShapeMask.
   *
   * @param { CommandPath } path - The command path will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCommandPath(path: CommandPath): void;

  /**
   * The fill color of the ShapeMask, in ARGB format.
   * The default value is 0XFF000000.
   *
   * @type { number }
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fillColor: number;

  /**
   * The stroke color of the ShapeMask, in ARGB format.
   * The default value is 0XFF000000.
   *
   * @type { number }
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeColor: number;

  /**
   * The stroke width of the ShapeMask, in px.
   * The default value is 0.
   *
   * @type { number }
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
 * Define ShapeClip. Record the type and parameters of the shape used for clipping.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ShapeClip {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * Set the rect shape of the ShapeClip.
   *
   * @param { Rect } rect - The rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRectShape(rect: Rect): void;

  /**
   * Set the round rect shape of the ShapeClip.
   *
   * @param { RoundRect } roundRect - The round rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * Set the circle shape of the ShapeClip.
   *
   * @param { Circle } circle - The circle shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCircleShape(circle: Circle): void;

  /**
   * Set the oval shape of the ShapeClip.
   *
   * @param { Rect } oval - The oval shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOvalShape(oval: Rect): void;

  /**
   * Set the command path of the ShapeClip.
   *
   * @param { CommandPath } path - The command path will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCommandPath(path: CommandPath): void;
}

/**
 * Obtain an object with all edges are set to the same color.
 *
 * @param { number } all - The edge color will be set, in ARGB format, for example, 0xffff00ff.
 * Value range: [0, 0xffffffff]
 * @returns { Edges<number> } - The object with all edges are set to the same color.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function edgeColors(all: number): Edges<number>;

/**
 * Obtain an object with all edges are set to the same width.
 *
 * @param { number } all - The edge width will be set, in vp.
 * Value range: [0, +∞).
 * @returns { Edges<number> } - The object with all edges are set to the same width.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function edgeWidths(all: number): Edges<number>;

/**
 * Obtain an object with all edges are set to the same style.
 *
 * @param { BorderStyle } all - The edge style will be set.
 * @returns { Edges<BorderStyle> } - The object with all edges are set to the same style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function borderStyles(all: BorderStyle): Edges<BorderStyle>;

/**
 * Obtain a BorderRadiuses object with all edges are set to the same radius.
 *
 * @param { number } all - The edge radius will be set.
 * Unit: vp.
 * Value range: [0, +∞).
 * @returns { BorderRadiuses } - The BorderRadiuses object.
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
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface BackgroundBlur {
  /**
   * Blur radius for background blur.
   * Value range: [0, +∞). The larger the value, the more blurred the background.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ContentBlur {
  /**
   * Blur radius for content blur.
   * Value range: [0, +∞). The larger the value, the more blurred the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
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
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ForegroundBlur {
  /**
   * Blur radius for foreground blur.
   * Value range: [0, +∞). The larger the value, the more blurred the foreground.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radius: double;
}
