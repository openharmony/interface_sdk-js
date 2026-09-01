/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * 描述一个模板的不透明对象，该对象通过createPattern()方法创建。
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @famodelonly
 * @since 8
 */
/**
 * 描述一个模板的不透明对象，该对象通过createPattern()方法创建。
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @famodelonly
 * @form
 * @since 9
 */
/**
 * 描述一个模板的不透明对象，该对象通过createPattern()方法创建。
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @famodelonly
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 */
export interface CanvasPattern {
  /**
   * 使用Matrix2D对象作为参数，对当前CanvasPattern进行矩阵变换。
   *
   * @param { Matrix2D } [transform] - 变换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 使用Matrix2D对象作为参数，对当前CanvasPattern进行矩阵变换。
   *
   * @param { Matrix2D } [transform] - 变换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 使用Matrix2D对象作为参数，对当前CanvasPattern进行矩阵变换。
   *
   * @param { Matrix2D } [transform] - 变换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  setTransform(transform?: Matrix2D): void;
}

/**
 * 2D变换矩阵，支持X轴和Y轴的旋转、平移和缩放。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @famodelonly
 * @since 8
 */
/**
 * 2D变换矩阵，支持X轴和Y轴的旋转、平移和缩放。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @famodelonly
 * @form
 * @since 9
 */
/**
 * 2D变换矩阵，支持X轴和Y轴的旋转、平移和缩放。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @famodelonly
 * @form
 * @atomicservice
 * @since 11 dynamiconly
 */
export class Matrix2D {
  /**
   * 水平缩放系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 水平缩放系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 水平缩放系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  scaleX?: number;

  /**
   * 垂直倾斜系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 垂直倾斜系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 垂直倾斜系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  rotateY?: number;

  /**
   * 水平倾斜系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 水平倾斜系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 水平倾斜系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  rotateX?: number;

  /**
   * 垂直缩放系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 垂直缩放系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 垂直缩放系数，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  scaleY?: number;

  /**
   * 水平平移距离，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br/>默认单位：vp
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 水平平移距离，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br/>默认单位：vp
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 水平平移距离，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br/>默认单位：vp
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  translateX?: number;

  /**
   * 垂直平移距离，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br/>默认单位：vp
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 垂直平移距离，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br/>默认单位：vp
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 垂直平移距离，取值范围无限制。<br/>异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br/>默认单位：vp
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  translateY?: number;

  /**
   * 创建单位矩阵。
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 创建单位矩阵。
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 创建单位矩阵。
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  identity(): Matrix2D;

  /**
   * 获取当前矩阵的逆矩阵。
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 获取当前矩阵的逆矩阵。
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 获取当前矩阵的逆矩阵。
   *
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  invert(): Matrix2D;

  /**
   * 当前矩阵与目标矩阵相乘。
   *
   * @param { Matrix2D } [other] - 目标矩阵。<br/>异常值undefined和null按无效值处理。<br/>默认值：null
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 当前矩阵与目标矩阵相乘。
   *
   * @param { Matrix2D } [other] - 目标矩阵。<br/>异常值undefined和null按无效值处理。<br/>默认值：null
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 当前矩阵与目标矩阵相乘。
   *
   * @param { Matrix2D } [other] - 目标矩阵。<br/>异常值undefined和null按无效值处理。<br/>默认值：null
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  multiply(other?: Matrix2D): Matrix2D;

  /**
   * 对当前矩阵进行旋转运算。
   *
   * @param { number } [rx] - 旋转点的水平方向坐标，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp
   * @param { number } [ry] - 旋转点的垂直方向坐标，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 对当前矩阵进行旋转运算。
   *
   * @param { number } [rx] - 旋转点的水平方向坐标，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp
   * @param { number } [ry] - 旋转点的垂直方向坐标，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 对当前矩阵进行旋转运算。
   *
   * @param { number } [rx] - 旋转点的水平方向坐标，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp
   * @param { number } [ry] - 旋转点的垂直方向坐标，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  rotate(rx?: number, ry?: number): Matrix2D;

  /**
   * 对当前矩阵进行左乘平移运算。
   *
   * @param { number } [tx] - 水平方向平移距离，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp<br/>默认值：0
   * @param { number } [ty] - 垂直方向平移距离，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp<br/>默认值：0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 对当前矩阵进行左乘平移运算。
   *
   * @param { number } [tx] - 水平方向平移距离，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp<br/>默认值：0
   * @param { number } [ty] - 垂直方向平移距离，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp<br/>默认值：0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 对当前矩阵进行左乘平移运算。
   *
   * @param { number } [tx] - 水平方向平移距离，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp<br/>默认值：0
   * @param { number } [ty] - 垂直方向平移距离，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认单位：vp<br/>默认值：0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  translate(tx?: number, ty?: number): Matrix2D;

  /**
   * 对当前矩阵进行右乘缩放运算。
   *
   * @param { number } [sx] - 水平缩放比例系数，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认值：1.0
   * @param { number } [sy] - 垂直缩放比例系数，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认值：1.0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 对当前矩阵进行右乘缩放运算。
   *
   * @param { number } [sx] - 水平缩放比例系数，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认值：1.0
   * @param { number } [sy] - 垂直缩放比例系数，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认值：1.0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 对当前矩阵进行右乘缩放运算。
   *
   * @param { number } [sx] - 水平缩放比例系数，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认值：1.0
   * @param { number } [sy] - 垂直缩放比例系数，取值范围无限制。<br/>异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br/>默认值：1.0
   * @returns { Matrix2D }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  scale(sx?: number, sy?: number): Matrix2D;

  /**
   * 构造二维变换矩阵对象，默认值是属性全为0的矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @since 8
   */
  /**
   * 构造二维变换矩阵对象，默认值是属性全为0的矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @since 9
   */
  /**
   * 构造二维变换矩阵对象，默认值是属性全为0的矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @famodelonly
   * @form
   * @atomicservice
   * @since 11 dynamiconly
   */
  constructor();
}
