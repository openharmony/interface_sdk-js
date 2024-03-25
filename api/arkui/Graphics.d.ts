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
import { BorderStyle } from 'borderStyle'

/**
 * Size info.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export interface Size {
  /**
   * Get the width of the Size.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  width: number;

  /**
   * Get the height of the Size.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  height: number;
}

/**
 * Defines DrawContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export class DrawContext {

  /**
   * Get size of the DrawContext.
   *
   * @returns { Size } The size of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get size(): Size;

  /**
   * Get canvas of the DrawContext.
   *
   * @returns { drawing.Canvas } The canvas of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  get canvas(): drawing.Canvas;
}

/**
  * Defined a vector with two values.
  *
  * @interface Vector2
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
interface Vector2 {
  /**
   * Value for x-axis of the vector.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  x: number

  /**
   * Value for y-axis of the vector.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  y: number
}

/**
 * Defined a vector with three values.
 *
 * @interface Vector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
interface Vector3 {
  /**
   * Value for x-axis of the vector.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  x: number;

  /**
   * Value for y-axis of the vector.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  y: number;

  /**
   * Value for z-axis of the vector.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  z: number;
}

/**
 * It's a 4x4 matrix, represent by number[].
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
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
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export type Offset = Vector2;

/**
 * Position info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export type Position = Vector2;

/**
 * Pivot info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export type Pivot = Vector2;

/**
 * Scale info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export type Scale = Vector2;

/**
 * Translation info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export type Translation = Vector2;

/**
 * Rotation info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export type Rotation = Vector3;

/**
 * Frame info, include the position info and size info.
 *
 * @interface Frame
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
export declare interface Frame {
  /**
   * Position value for x-axis of the frame info.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  x: number;

  /**
   * Position value for y-axis of the frame info.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  y: number;

  /**
   * Size value for width of the frame info.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  width: number;

  /**
   * Size value for height of the frame info.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 11
   */
  height: number;
}

/**
 * Defines the Edge property.
 *
 * @interface Edges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export interface Edges<T> {
  /**
   * Left property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  left: T,

  /**
   * Right property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  right: T,

  /**
   * Top property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  top: T,

  /**
   * Bottom property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  bottom: T
}

/**
 * Defines the Corner property.
 *
 * @interface Corners
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
interface Corners<T> {
  /**
   * TopLeft property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  topLeft: T,

  /**
   * TopRight property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  topRight: T,

  /**
   * BottomLeft property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  bottomLeft: T,

  /**
   * BottomRight property.
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  bottomRight: T
}

/**
 * Defines the Corner radius.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export type CornerRadius = Corners<Vector2>;

/**
 * BorderRadiuses info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export type BorderRadiuses = Corners<number>;

/**
 * Rect info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export type Rect = common2D.Rect;

/**
 * Defines the RoundRect.
 *
 * @interface RoundRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export interface RoundRect {
  /**
   * Rect property.
   *
   * @type { Rect }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  rect: Rect,

  /**
   * Corners property.
   *
   * @type { CornerRadius }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  corners: CornerRadius
}

/**
 * Defines the Circle.
 *
 * @interface Circle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export interface Circle {
  /**
   * The x-coordinate of the center of the Circle.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  centerX: number,

  /**
   * The y-coordinate of the center of the Circle.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  centerY: number,

  /**
   * The radius of the Circle.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  radius: number
}

/**
 * Defines the CommandPath.
 *
 * @interface CommandPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export interface CommandPath {
  /**
   * The commands of CommandPath.
   *
   * @type { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  commands: string
}

/**
 * Defines ShapeMask. 
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export declare class ShapeMask {
  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  constructor();

  /**
   * Set the rect shape of the ShapeMask.
   *
   * @param { Rect } rect - The rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setRectShape(rect: Rect): void;

  /**
   * Set the round rect shape of the ShapeMask.
   *
   * @param { RoundRect } roundRect - The round rect shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * Set the circle shape of the ShapeMask.
   *
   * @param { Circle } circle - The circle shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setCircleShape(circle: Circle): void;

  /**
   * Set the oval shape of the ShapeMask.
   *
   * @param { Rect } oval - The oval shape will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setOvalShape(oval: Rect): void;

  /**
   * Set the command path of the ShapeMask.
   *
   * @param { CommandPath } path - The command path will be set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  setCommandPath(path: CommandPath): void;

  /**
   * The fill color of the ShapeMask.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  fillColor: number;

  /**
   * The stroke color of the ShapeMask.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  strokeColor: number;

  /**
   * The stroke width of the ShapeMask.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 12
   */
  strokeWidth: number;
}

/**
 * Obtain a object with all edges are set to the same color.
 *
 * @param { number } all - The edge color will be set.
 * @returns { Edges<number> } - The object with all edges are set to the same color.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export function edgeColors(all: number): Edges<number>;

/**
 * Obtain a object with all edges are set to the same width.
 *
 * @param { number } all - The edge width will be set.
 * @returns { Edges<number> } - The object with all edges are set to the same width.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export function edgeWidths(all: number): Edges<number>;

/**
 * Obtain a object with all edges are set to the same style.
 *
 * @param { BorderStyle } all - The edge style will be set.
 * @returns { Edges<BorderStyle> } - The object with all edges are set to the same style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export function borderStyles(all: BorderStyle): Edges<BorderStyle>;

/**
 * Obtain a BorderRadiuses object with all edges are set to the same radius.
 *
 * @param { number } all - The edge radius will be set.
 * @returns { BorderRadiuses } - The BorderRadiuses object.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 12
 */
export function borderRadiuses(all: number): BorderRadiuses;
