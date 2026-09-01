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
 * @file 矩阵变换
 * @kit ArkUI
 */

/**
 * 用于对组件进行[图形变换]{@link ./@internal/component/ets/common}的各种操作，为组件提供矩阵变换能力，支持对图形进行平移、旋转和缩放等。
 * 
 * Matrix4的使用场景包括：
 * 
 * [图形变换]{@link ./@internal/component/ets/common}中的
 * [transform]{@link CommonMethod#transform(transform: Optional<object>)}接口通过使用图形变换矩阵Matrix4对象设置组件的二维变换矩阵，
 * [transform3D]{@link CommonMethod#transform3D}接口通过使用图形变换矩阵Matrix4对象设置组件的三维变换矩阵。
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
     * x轴的缩放倍数。x=1时表示不缩放，保持原始大小；x>1时以x轴方向放大；0<x<1时以x轴方向缩小；x<0时沿x轴反向并缩放。
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
     * z轴的缩放倍数。z=1时表示不缩放，保持原始大小；z>1时以z轴方向放大；0<z<1时以z轴方向缩小；z<0时沿z轴反向并缩放。
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
     * 旋转轴向量x坐标，用于指定旋转轴在x方向的分量。当需要绕包含x分量的轴旋转时传入此参数，不传入时旋转轴x分量默认为0。
     * 
     * **说明：** 旋转向量中x、y、z至少有一个不为0才有意义。
     * 
     * 默认值：0
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    x?: number;

    /**
     * 旋转轴向量y坐标，用于指定旋转轴在y方向的分量。当需要绕包含y分量的轴旋转时传入此参数，不传入时旋转轴y分量默认为0。
     * 
     * **说明：** 旋转向量中x、y、z至少有一个不为0才有意义。
     * 
     * 默认值：0
     * 
     * 取值范围：(-∞, +∞)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    y?: number;

    /**
     * 旋转轴向量z坐标，用于指定旋转轴在z方向的分量。当需要绕包含z分量的轴旋转时传入此参数，不传入时旋转轴z分量默认为0。
     * 
     * 默认值：0
     * 
     * 取值范围 (-∞, +∞)。
     * 
     * **说明：** 旋转向量中x、y、z至少有一个不为0，否则不产生旋转效果。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    z?: number;

    /**
     * 单次矩阵变换操作的中心点相对于组件变换中心点（锚点）的额外x轴偏移值。
     * 
     * 单位：px
     * 
     * 默认值：0
     * 
     * **说明：** 
     * 
     * 为0时表示x方向的矩阵变换中心恰好为组件x方向锚点，取值表示相对组件x方向锚点的额外偏移量。具体实现可参考
     * [示例3（按中心点旋转）]{@link @ohos.matrix4}。
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
     * [示例3（按中心点旋转）]{@link @ohos.matrix4}。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    centerY?: number;

    /**
     * 旋转角度，用于设置组件绕旋转轴的旋转量。当需要旋转组件时传入此参数，不传入时组件不做旋转。
     * 
     * 单位为度（°）
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
     * 单位：px
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
     * 单位：px
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
     * 源多边形顶点坐标，用于定义映射变换的起始形状。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    src: Array<Point>;

    /**
     * 源点坐标起始索引，用于指定从src数组的哪个位置开始取点。当需要从src数组特定位置开始取源点时传入此参数，不传入时从索引0开始取点。
     * 
     * 默认值：0
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
     * 目标多边形顶点坐标，用于定义映射变换的目标形状。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     */
    dst:Array<Point>;

    /**
     * 目标点坐标起始索引，用于指定从dst数组中取目标点坐标的起始位置。
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
     * 使用到的点数量。前提条件：src和dst数组中的点数量需不少于pointCount。如果为0，则返回单位矩阵；如果为1，则使用1个源点和1个目标点，返回将源点平移到目标点的平移矩阵；如果为2，返回仿射变换矩阵（含旋转、缩放和平
     * 移）；如果为3，返回仿射变换矩阵（含旋转、缩放、平移和剪切）；如果为4，返回透视变换矩阵。超出范围时不生效。
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
   * 矩阵对象。支持通过链式调用translate、scale、rotate、skew等方法组合多种变换效果。
   * 
   * > **说明：**
   * >
   * > 多个变换方法链式调用时，变换的顺序会影响最终结果。例如，先translate后scale与先scale后translate会产生不同的变换效果，需根据预期效果选择正确的调用顺序。
   * >
   * > translate、scale、rotate、skew、combine、invert方法会改变调用该函数的原始矩阵。如需保留原始矩阵不被修改，请先调用copy()再进行变换操作，例如：matrix.copy()
   * > .translate({x:100})。
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
     * Matrix的逆函数，会改变调用该函数的原始矩阵，将其变换为逆矩阵并返回。逆矩阵与原始矩阵相乘结果为单位矩阵。
     *
     * @returns { Matrix4Transit } 当前矩阵的逆矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    invert(): Matrix4Transit;

    /**
     * Matrix的叠加函数，可以为当前矩阵增加另一个矩阵的叠加效果，生成一个新的矩阵对象。会改变调用该函数的原始矩阵。
     *
     * @param { Matrix4Transit } options - 待叠加的矩阵对象，其变换效果将与当前矩阵进行叠加（矩阵相乘），生成新的变换矩阵。
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
     * @param { number } x - x轴倾斜参数，用于设置x轴方向的倾斜程度，值为剪切因子（即tan值）。
     *     <br>值为0时无倾斜，正值沿x轴正方向倾斜，负值沿x轴负方向倾斜。
     * @param { number } y - y轴倾斜参数，用于设置y轴方向的倾斜程度，值为剪切因子（即tan值）。
     *     <br>值为0时无倾斜，正值沿y轴正方向倾斜，负值沿y轴负方向倾斜。
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
     * @param { [number, number] } options - 需要转换的坐标点，格式为[x, y]，其中x为横坐标、y为纵坐标，单位为px。
     * @returns { [number, number] } 返回矩阵变换后的坐标点，格式为[x, y]。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     */
    transformPoint(options: [number, number]): [number, number];

    /**
     * 将一个多边形的顶点坐标映射到另外一个多边形的顶点坐标。适用于需要进行自定义形变的场景，如图片透视校正、实现3D视觉效果、卡片翻转效果等。
     *
     * @param { PolyToPolyOptions } options - 多边形映射参数，用于指定源多边形顶点坐标和目标多边形顶点坐标的映射关系。
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
   * Matrix的构造函数，可以通过传入的参数创建一个四阶矩阵，矩阵为列优先，即输入数组的16个值按列依次填充至矩阵：array[0]~array[3]为第1列，array[4]~array[7]为第2列，array[8]~array
   * [11]为第3列，array[12]~array[15]为第4列。当仅需单位矩阵时，推荐使用matrix4.identity()。
   *
   * @param {
   *     
   *
   *     [number,number,number,number,number,number,number,number,number,number,number,number,number,number,number,number]
   *     } options - 参数为长度为16（4*4）的number数组，详情见四阶矩阵说明。
   *     <br>各number取值范围：(-∞, +∞)
   *     <br>默认值：
   *     <br>[1, 0, 0, 0,
   *     <br>0, 1, 0, 0,
   *     <br>0, 0, 1, 0,
   *     <br>0, 0, 0, 1]
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
   * Matrix的初始化函数，可以返回一个初始的单位矩阵对象，可作为后续矩阵变换操作的基础。
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
   * @returns { Matrix4Transit } 当前矩阵的拷贝对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.copy
   */
  function copy(): Matrix4Transit;

  /**
   * Matrix的逆函数，可以返回一个当前矩阵对象的逆矩阵，即效果正好相反。会改变调用该函数的原始矩阵。
   *
   * @returns { Matrix4Transit } 当前矩阵的逆矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.invert
   */
  function invert(): Matrix4Transit;

  /**
   * Matrix的叠加函数，可以将两个矩阵的效果叠加起来作用于当前矩阵。会改变调用该函数的原始矩阵。
   * 
   * > **说明：**
   * >
   * > matrixA.combine(matrixB)与matrixB.combine(matrixA)的变换结果不同。combine()的调用顺序决定了变换的叠加顺序，例如先平移后缩放与先缩放后平移的变换效果不同。使用时需根据预期
   * > 的变换效果选择正确的调用顺序。如需保留原始矩阵不被修改，应先调用copy()再调用combine()，例如：matrixA.copy().combine(matrixB)。
   *
   * @param { Matrix4Transit } options - 待叠加的矩阵对象，其变换效果将与单位矩阵进行叠加。
   * @returns { Matrix4Transit } 叠加后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.combine
   */
  function combine(options: Matrix4Transit): Matrix4Transit;

  /**
   * Matrix的平移函数，可以为当前矩阵增加x轴/y轴/z轴平移效果。会改变调用该函数的原始矩阵。
   *
   * @param { TranslateOption } options - 平移配置参数，用于设置x轴、y轴、z轴的平移距离。
   * @returns { Matrix4Transit } 平移后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.translate
   */
  function translate(options: TranslateOption): Matrix4Transit;

  /**
   * Matrix的缩放函数，可以为当前矩阵增加x轴/y轴/z轴缩放效果。会改变调用该函数的原始矩阵。
   *
   * @param { ScaleOption } options - 缩放配置参数，用于设置x轴、y轴、z轴的缩放倍数及变换中心点坐标。
   * @returns { Matrix4Transit } 缩放后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.scale
   */
  function scale(options: ScaleOption): Matrix4Transit;

  /**
   * Matrix的旋转函数，可以为当前矩阵增加x轴/y轴/z轴旋转效果。会改变调用该函数的原始矩阵。
   *
   * @param { RotateOption } options - 旋转配置参数，用于设置旋转轴向量(x/y/z)、旋转角度及变换中心点偏移值。
   * @returns { Matrix4Transit } 旋转后的矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.rotate
   */
  function rotate(options: RotateOption): Matrix4Transit;

  /**
   * Matrix的坐标点转换函数，可以将当前的变换效果作用到一个坐标点上。
   *
   * @param { [number, number] } options - 需要转换的坐标点。
   * @returns { [number, number] } 返回矩阵变换后的坐标点，格式为[x, y]。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Matrix4Transit.transformPoint
   */
  function transformPoint(options: [number, number]): [number, number];
}

export default matrix4;
