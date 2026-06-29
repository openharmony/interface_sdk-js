/*
 * Copyright (c) 2020-2023 Huawei Device Co., Ltd.
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
 * 用于对组件进行[图形变换]{@link common}的各种操作，为组件提供矩阵变换能力，支持对图形进行平移、旋转和缩放等。
 * 
 * Matrix4的使用场景包括：
 * 
 * [图形变换]{@link common}中的[transform]{@link CommonMethod#transform(transform: Optional<object>)}接口通过使用图形变换矩阵Matrix4对象显示二维
 * 变换时的矩阵变换，[transform3D]{@link CommonMethod#transform3D}接口通过使用图形变换矩阵Matrix4对象设置组件的三维变换矩阵。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare namespace matrix4 {
  /**
   * 平移参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface TranslateOption {
    /**
     * x轴的平移距离。
     * 
     * 单位：px
     * 
     * 默认值：0
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: number;

    /**
     * y轴的平移距离。
     * 
     * 单位：px
     * 
     * 默认值：0
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: number;

    /**
     * z轴的平移距离。
     * 
     * 单位：px
     * 
     * 默认值：0
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    z?: number;
  }

  /**
   * 缩放参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface ScaleOption {
    /**
     * x轴的缩放倍数。x>1时以x轴方向放大，0<x<1时以x轴方向缩小，x<0时沿x轴反向并缩放。
     * 
     * 默认值：1
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: number;

    /**
     * y轴的缩放倍数。y>1时以y轴方向放大，0<y<1时以y轴方向缩小，y<0时沿y轴反向并缩放。
     * 
     * 默认值：1
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: number;

    /**
     * z轴的缩放倍数。z>1时以z轴方向放大，0<z<1时以z轴方向缩小，z<0时沿z轴反向并缩放。
     * 
     * 默认值：1
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    z?: number;

    /**
     * 变换中心点x轴坐标。
     * 
     * 单位：px
     * 
     * 默认值：组件中心点x轴坐标。
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerX?: number;

    /**
     * 变换中心点y轴坐标。
     * 
     * 单位：px
     * 
     * 默认值：组件中心点y轴坐标。
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerY?: number;
  }

  /**
   * 旋转参数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface RotateOption {
    /**
     * 旋转轴向量x坐标。
     * 
     * 默认值：0。
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: number;

    /**
     * 旋转轴向量y坐标。
     * 
     * 默认值：0。
     * 
     * 取值范围 (-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: number;

    /**
     * 旋转轴向量z坐标。
     * 
     * 默认值：0。
     * 
     * 取值范围 (-∞, +∞)。
     * 
     * **说明：** 旋转向量中x、y、z至少有一个不为0才有意义。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    z?: number;

    /**
     * 单次矩阵变换中心点相对于组件变换中心点（锚点）的额外x轴偏移值。
     * 
     * 单位：px
     * 
     * 默认值：0
     * 
     * **说明：** 
     * 
     * 为0时表示x方向的矩阵变换中心恰好为组件x方向锚点，取值表示相对组件x方向锚点的额外偏移量。具体实现可参考
     * [示例3（按中心点旋转）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#示例3按中心点旋转)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerX?: number;

    /**
     * 单次矩阵变换中心点相对于组件变换中心点（锚点）的额外y轴偏移值。
     * 
     * 单位：px
     * 
     * 默认值：0
     * 
     * **说明：** 
     * 
     * 为0时表示y方向的矩阵变换中心恰好为组件y方向锚点，取值表示相对组件y方向锚点的额外偏移量。具体实现可参考
     * [示例3（按中心点旋转）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#示例3按中心点旋转)。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerY?: number;

    /**
     * 旋转角度。
     * 
     * 默认值：0
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    angle?: number;
  }

  /**
   * 坐标点的数据结构。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface Point {

    /**
     * x轴坐标。
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    x: number;

    /**
     * y轴坐标。
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    y: number;
  }

  /**
   * 多边形到多边形的映射选项。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  export interface PolyToPolyOptions {

    /**
     * 源点坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    src: Array<Point>;

    /**
     * 源点坐标起始索引。
     * 
     * 默认值:0 
     * 
     * 取值范围：[0, +∞)
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    srcIndex?: number;

    /**
     * 目标点坐标。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    dst:Array<Point>;

    /**
     * 目标坐标起始索引。
     * 
     * 默认值: src.length/2 
     * 
     * 取值范围：[0, +∞)
     *
     * @default src.Length/2
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    dstIndex?: number;

    /**
     * 使用到的点数量。要使用的点的数量如果为0，则返回单位矩阵。如果为1，则返回一个将两个点改变之前的平移矩阵。如果为2-4，则返回一个变换矩阵。
     * 
     * 默认值: 0 
     * 
     * 取值范围：[0, +∞)
     *
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    pointCount?:number;
  }
  /**
   * 矩阵对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  interface Matrix4Transit {
    /**
     * Matrix的拷贝函数，可以拷贝一份当前的矩阵对象。
     *
     * @returns { Matrix4Transit } 当前矩阵的拷贝对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    copy(): Matrix4Transit;

    /**
     * Matrix的逆函数，可以返回一个当前矩阵对象的逆矩阵，即效果正好相反。会改变调用该函数的原始矩阵。
     *
     * @returns { Matrix4Transit } 当前矩阵的逆矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    invert(): Matrix4Transit;

    /**
     * Matrix的叠加函数，可以将两个矩阵的效果叠加起来生成一个新的矩阵对象。会改变调用该函数的原始矩阵。
     *
     * @param { Matrix4Transit } options - 待叠加的矩阵对象。
     * @returns { Matrix4Transit } 矩阵叠加后的对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    combine(options: Matrix4Transit): Matrix4Transit;

    /**
     * Matrix的平移函数，可以为当前矩阵增加x轴/y轴/z轴平移效果。会改变调用该函数的原始矩阵。
     *
     * @param { TranslateOption } options - 设置平移参数。
     * @returns { Matrix4Transit } 平移效果后的矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    translate(options: TranslateOption): Matrix4Transit;

    /**
     * Matrix的缩放函数，可以为当前矩阵增加x轴/y轴/z轴缩放效果。会改变调用该函数的原始矩阵。
     *
     * @param { ScaleOption } options - 设置缩放参数。
     * @returns { Matrix4Transit } 缩放效果后的矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    scale(options: ScaleOption): Matrix4Transit;

    /**
     * Matrix的倾斜函数，可以为当前矩阵增加x轴/y轴倾斜效果。会改变调用该函数的原始矩阵。
     *
     * @param { number } x - 设置x轴倾斜参数。
     * @param { number } y - 设置y轴倾斜参数。
     * @returns { Matrix4Transit } 倾斜效果后的矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    skew(x: number, y: number): Matrix4Transit;

    /**
     * Matrix的旋转函数，可以为当前矩阵增加x轴/y轴/z轴旋转效果。会改变调用该函数的原始矩阵。
     *
     * @param { RotateOption } options - 设置旋转参数。
     * @returns { Matrix4Transit } 旋转效果后的矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    rotate(options: RotateOption): Matrix4Transit;

    /**
     * Matrix的坐标点转换函数，可以将当前的变换效果作用到一个坐标点上。
     *
     * @param { [number, number] } options - 需要转换的坐标点。
     * @returns { [number, number] } 返回矩阵变换后的Point对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    transformPoint(options: [number, number]): [number, number];

    /**
     * 将一个多边形的顶点坐标映射到另外一个多边形的顶点坐标。
     *
     * @param { PolyToPolyOptions } options - 映射相关的参数。
     * @returns { Matrix4Transit } 当前矩阵变换后的对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    setPolyToPoly(options: PolyToPolyOptions): Matrix4Transit;
  }

  /**
   * Matrix的构造函数，可以通过传入的参数创建一个四阶矩阵，矩阵为列优先。
   *
   * @param {
   *
   *     [number,number,number,number,number,number,number,number,number,number,number,number,number,number,number,number]
   *     } options - 参数为长度为16（4*4）的number数组, 详情见四阶矩阵说明。<br/>各number取值范围：(-∞, +∞)<br/>默认值：<br/>
   *     [1, 0, 0, 0,<br/>0, 1, 0, 0,<br/>0, 0, 1, 0,<br/>0, 0, 0, 1]
   * @returns { Matrix4Transit } 根据入参创建的四阶矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function init(
    options: [
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
    ]
  ): Matrix4Transit;

  /**
   * Matrix的初始化函数，可以返回一个单位矩阵对象。
   *
   * @returns { Matrix4Transit } 单位矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  function identity(): Matrix4Transit;

  /**
   * Matrix的拷贝函数，可以拷贝一份当前的矩阵对象。
   * 
   * > **说明：**
   *
   * @returns { Matrix4Transit } 当前矩阵的拷贝对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead matrix4.Matrix4Transit.copy
   */
  function copy(): Matrix4Transit;

  /**
   * Matrix的逆函数，可以返回一个当前矩阵对象的逆矩阵，即效果正好相反。
   * 
   * > **说明：**
   *
   * @returns { Matrix4Transit } 当前矩阵的逆矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead matrix4.Matrix4Transit.invert
   */
  function invert(): Matrix4Transit;

  /**
   * Matrix的叠加函数，可以将两个矩阵的效果叠加起来生成一个新的矩阵对象。
   * 
   * > **说明：**
   *
   * @param { Matrix4Transit } options - 待叠加的矩阵对象。
   * @returns { Matrix4Transit } 叠加后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead matrix4.Matrix4Transit.combine
   */
  function combine(options: Matrix4Transit): Matrix4Transit;

  /**
   * Matrix的平移函数，可以为当前矩阵增加x轴/y轴/z轴平移效果。
   * 
   * > **说明：**
   *
   * @param { TranslateOption } options - 设置平移参数。
   * @returns { Matrix4Transit } 平移后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead matrix4.Matrix4Transit.translate
   */
  function translate(options: TranslateOption): Matrix4Transit;

  /**
   * Matrix的缩放函数，可以为当前矩阵增加x轴/y轴/z轴缩放效果。
   * 
   * > **说明：**
   *
   * @param { ScaleOption } options - 设置缩放参数。
   * @returns { Matrix4Transit } 缩放后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead matrix4.Matrix4Transit.scale
   */
  function scale(options: ScaleOption): Matrix4Transit;

  /**
   * Matrix的旋转函数，可以为当前矩阵增加x轴/y轴/z轴旋转效果。
   * 
   * > **说明：**
   *
   * @param { RotateOption } options - 设置旋转参数。
   * @returns { Matrix4Transit } 旋转后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead matrix4.Matrix4Transit.rotate
   */
  function rotate(options: RotateOption): Matrix4Transit;

  /**
   * Matrix的坐标点转换函数，可以将当前的变换效果作用到一个坐标点上。
   * 
   * > **说明：**
   *
   * @param { [number, number] } options - 需要转换的坐标点。
   * @returns { [number, number] } 返回矩阵变换后的Point对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead matrix4.Matrix4Transit.transformPoint
   */
  function transformPoint(options: [number, number]): [number, number];
}

export default matrix4;
