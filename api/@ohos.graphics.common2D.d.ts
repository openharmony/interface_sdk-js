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
 * The date structure that provides the basis for graphics.
 *
 * @namespace common2D
 * @syscap SystemCapability.Graphics.Drawing
 * @since arkts {'1.1':'11', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace common2D {
  /**
   * Provide a description in the form of color ARGB.
   * @typedef Color
   * @syscap SystemCapability.Graphics.Drawing
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Color {
    /**
     * Alpha component of color, from 0 to 255.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    alpha: number;
    /**
     * Red component of color, from 0 to 255.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    red: number;
    /**
     * Green component of color, from 0 to 255.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    green: number;
    /**
     * Blue component of color, from 0 to 255.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    blue: number;
  }

  /**
   * Provides the definition of the rectangle.
   * @typedef Rect
   * @syscap SystemCapability.Graphics.Drawing
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Rect {
    /**
     * Left Position of Rectangle.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    left: number;
    /**
     * Top side position of the rectangle
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    top: number;
    /**
     * Right Position of Rectangle.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    right: number;
    /**
     * Position of the bottom side of the rectangle.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    bottom: number;
  }

  /**
   * Coordinates in the font layout.
   * @typedef Point
   * @syscap SystemCapability.Graphics.Drawing
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  interface Point {
    /**
     * X-axis coordinate.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    x: number;

    /**
     * Y-axis coordinate.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    y: number;
  }

  /**
   * Provides the definition of the point in 3D.
   *
   * @typedef Point3d
   * @extends Point
   * @syscap SystemCapability.Graphics.Drawing
   * @since 12
   */
  interface Point3d extends Point {
    /**
     * Z-axis coordinate.
     * @type { number }
     * @syscap SystemCapability.Graphics.Drawing
     * @since 12
     */
    z: number;
  }
  
}

export default common2D;