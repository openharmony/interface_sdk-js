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

/**
 * 用于画布绘制
 * [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)、
 * [OffscreenCanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-offscreencanvasrenderingcontext2d.md)、
 * [CanvasPattern](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvaspattern.md)和
 * [Path2D](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md)的矩阵对象，
 * 可以对矩阵进行缩放、旋转和平移等变换。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class Matrix2D {
  /**
   * 水平缩放系数，取值范围无限制。<br>异常值undefined按无效值处理，
   * NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleX?: number;

  /**
   * 垂直倾斜系数，取值范围无限制。<br>异常值undefined按无效值处理，
   * NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rotateY?: number;

  /**
   * 水平倾斜系数，取值范围无限制。<br>异常值undefined按无效值处理，
   * NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rotateX?: number;

  /**
   * 垂直缩放系数，取值范围无限制。<br>异常值undefined按无效值处理，
   * NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scaleY?: number;

  /**
   * 水平平移距离，取值范围无限制。<br>异常值undefined按无效值处理，
   * NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br>默认单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translateX?: number;

  /**
   * 垂直平移距离，取值范围无限制。<br>异常值undefined按无效值处理，
   * NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br>默认单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translateY?: number;

  /**
   * 创建单位矩阵。
   *
   * @returns { Matrix2D } - 单位矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  identity(): Matrix2D;

  /**
   * 获取当前矩阵的逆矩阵。
   *
   * @returns { Matrix2D } - 逆矩阵结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  invert(): Matrix2D;

  /**
   * 当前矩阵与目标矩阵相乘。
   *
   * @param { Matrix2D } other - 目标矩阵。
   *     <br>异常值undefined和null按无效值处理。<br>默认值：null
   * @returns { Matrix2D } - 相乘结果矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 8 dynamic
   * @deprecated since 10
   */
  multiply(other?: Matrix2D): Matrix2D;

  /**
   * 对当前矩阵进行旋转运算。
   *
   * @param { number } rx - 旋转点的水平方向坐标，取值范围无限制。<br>异常值undefined和null
   *     按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>默认单位：vp
   * @param { number } ry - 旋转点的垂直方向坐标，取值范围无限制。<br>异常值undefined和null
   *     按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>默认单位：vp
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form [since 9]
   * @since 8 dynamiconly
   * @deprecated since 10
   * @useinstead rotate
   */
  rotate(rx?: number, ry?: number): Matrix2D;

  /**
   * 以旋转点为中心，对当前矩阵进行右乘旋转运算。
   *
   * @param { number } degree - 旋转角度，取值范围无限制。顺时针方向为正角度，
   *     可以通过 degree * Math.PI / 180 将角度转换为弧度值。
   *     <br>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。
   *     <br>默认单位：弧度
   * @param { number } rx - 旋转点的水平方向坐标，取值范围无限制。<br>默认单位：vp
   *     <br>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。
   *     <br>默认值：0
   * @param { number } ry - 旋转点的垂直方向坐标，取值范围无限制。<br>默认单位：vp
   *     <br>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。
   *     <br>默认值：0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  rotate(degree: number, rx?: number, ry?: number): Matrix2D;

  /**
   * 对当前矩阵进行左乘平移运算。
   *
   * @param { number } tx - 水平方向平移距离，取值范围无限制。<br>异常值undefined和null
   *     按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>默认单位：vp<br>默认值：0
   * @param { number } ty - 垂直方向平移距离，取值范围无限制。<br>异常值undefined和null
   *     按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>默认单位：vp<br>默认值：0
   * @returns { Matrix2D } - 平移后结果矩阵对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translate(tx?: number, ty?: number): Matrix2D;

  /**
   * 对当前矩阵进行右乘缩放运算。
   *
   * @param { number } sx - 水平缩放比例系数，取值范围无限制。<br>异常值undefined和null
   *     按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>默认值：1.0
   * @param { number } sy - 垂直缩放比例系数，取值范围无限制。<br>异常值undefined和null
   *     按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>默认值：1.0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scale(sx?: number, sy?: number): Matrix2D;

  /**
   * 构造二维变换矩阵对象，默认值是属性全为0的矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  constructor();

  /**
   * 构造二维变换矩阵对象，默认值是属性全为0的矩阵，支持配置Matrix2D对象的单位模式。
   *
   * @param { LengthMetricsUnit } [unit] - 用来配置Matrix2D对象的单位模式，配置后无法动态更改，
   *     配置方法同[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *     <br>异常值NaN和Infinity按默认值处理。<br>默认值：DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(unit: LengthMetricsUnit);
}
