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
 * @kit ArkGraphics2D
 */
/**
 * This module defines some common data types in the 2D graphics field.
 *
 * > **NOTE**
 * >
 * > - This module uses the physical pixel unit, px.
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform [since 20]
 * @atomicservice [since 22]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace common2D {
  /**
   * Describes a color in ARGB format.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Color {
    /**
     * Alpha component of the color. The value is an integer ranging from 0 to 255.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    alpha: int;
    /**
     * Red component of the color. The value is an integer ranging from 0 to 255.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    red: int;
    /**
     * Green component of the color. The value is an integer ranging from 0 to 255.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    green: int;
    /**
     * Blue component of the color. The value is an integer ranging from 0 to 255.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    blue: int;
  }

  /**
   * Describes a rectangle, which can be defined by two coordinate points: upper left corner point and lower right
   * corner point.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * X coordinate of the upper left corner of the rectangle. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    left: double;
    /**
     * Y coordinate of the upper left corner of the rectangle. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    top: double;
    /**
     * X coordinate of the lower right corner of the rectangle. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    right: double;
    /**
     * Y coordinate of the lower right corner of the rectangle. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    bottom: double;
  }

  /**
   * Describes a coordinate point.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Point {
    /**
     * Horizontal coordinate. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * Vertical coordinate. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    y: double;
  }

  /**
   * Describes a 3D coordinate point. It inherits from [Point]{@link common2D.Point}.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Point3d extends Point {
    /**
     * Z-axis coordinate. The value is a floating point number.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * Describes a color in ARGB format.
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  interface Color4f {
    /**
     * Alpha component of the color. The value is a floating point number ranging from 0.0 to 1.0.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    alpha: double;
    /**
     * Red component of the color. The value is a floating point number ranging from 0.0 to 1.0.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    red: double;
    /**
     * Green component of the color. The value is a floating point number ranging from 0.0 to 1.0.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    green: double;
    /**
     * Blue component of the color. The value is a floating point number ranging from 0.0 to 1.0.
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    blue: double;
  }
}

export default common2D;