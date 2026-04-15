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
 * 本模块定义了一些2D图形领域的通用数据类型。
 * 
 * > **说明：**
 * >
 * > - 本模块使用屏幕物理像素单位px。
 *
 * @syscap SystemCapability.Graphics.Drawing
 * @crossplatform [since 20]
 * @atomicservice [since 22]
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace common2D {
  /**
   * ARGB格式的颜色描述。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Color {
    /**
     * 颜色的A分量（透明度），值是0~255的整数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    alpha: int;
    /**
     * 颜色的R分量（红色），值是0~255的整数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    red: int;
    /**
     * 颜色的G分量（绿色），值是0~255的整数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    green: int;
    /**
     * 颜色的B分量（蓝色），值是0~255的整数。
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
   * 矩形区域，通过2个坐标点可以描述出一个矩形区域，这2个点分别认为是矩形区域的左上角点与右下角点。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 11 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * 矩形区域的左上角横坐标，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    left: double;
    /**
     * 矩形区域的左上角纵坐标，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    top: double;
    /**
     * 矩形区域的右下角横坐标，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 11 dynamic
     * @since 23 static
     */
    right: double;
    /**
     * 矩形区域的右下角纵坐标，浮点数。
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
   * 坐标点。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @atomicservice [since 22]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Point {
    /**
     * 横坐标，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @atomicservice [since 22]
     * @since 12 dynamic
     * @since 23 static
     */
    x: double;

    /**
     * 纵坐标，浮点数。
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
   * 三维的坐标点。继承自[Point]{@link common2D.Point}。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  interface Point3d extends Point {
    /**
     * z轴坐标，浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    z: double;
  }

  /**
   * ARGB格式的颜色描述。
   *
   * @syscap SystemCapability.Graphics.Drawing
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  interface Color4f {
    /**
     * 颜色的A分量（透明度），值是0.0~1.0的浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    alpha: double;
    /**
     * 颜色的R分量（红色），值是0.0~1.0的浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    red: double;
    /**
     * 颜色的G分量（绿色），值是0.0~1.0的浮点数。
     *
     * @syscap SystemCapability.Graphics.Drawing
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    green: double;
    /**
     * 颜色的B分量（蓝色），值是0.0~1.0的浮点数。
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