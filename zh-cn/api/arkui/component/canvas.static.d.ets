'use static';
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { CommonMethod, PixelMap } from './common';
import { FrameNode } from '../FrameNode';
import { ImageAIOptions, ImageAnalyzerConfig } from './imageCommon';
import { Matrix2D } from './matrix2d';
import { DrawingCanvas, VoidCallback, LengthMetricsUnit, LengthMetrics, ColorMetrics } from './units';
import { Size } from '../Graphics';
import { ComponentBuilder, CustomBuilder, CustomBuilderT, Builder} from './builder';
import { AttributeModifier, CommonMethod, Callback } from './common';
import { Color } from './enums'
import { Resource } from '../../global/resource';


/**
 * 定义用于确定点是在路径内还是路径外的填充样式算法的类型。
 * 'evenodd': 奇偶规则。
 *    此规则通过从画布上的某点向任意方向发射一条射线，并统计图形路径与射线的交点数量来判断该点是否在图形内部。
 *    如果交点数量是奇数，则该点在图形内部，否则在图形外部。
 * 'nonzero': 非零规则。
 *    此规则通过从画布上的某点向任意方向发射一条射线，并检查图形路径与射线的交点来判断该点是否在图形内部。
 *    初始计数为0，为路径的每一段线段指定一个方向值，每当路径从左向右穿过射线时加1，从右向左穿过时减1。
 *    如果最终的结果是0，则该点在图形外部，否则在图形内部。
 *
 * @typedef { 'evenodd' | 'nonzero' } CanvasFillRule
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CanvasFillRule = 'evenodd' | 'nonzero';

/**
 * 定义绘制每条线段端点的类型。
 * 'butt': 线条两端为平行线，不额外扩展。
 * 'round': 在线条两端延伸半个圆，直径等于线宽。
 * 'square': 在线条两端延伸一个矩形，宽度等于线宽的一半，高度等于线宽。
 *
 * @typedef { 'butt' | 'round' | 'square' } CanvasLineCap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CanvasLineCap = 'butt' | 'round' | 'square';

/**
 * 定义长度不为0的两个连接部分（线段、圆弧和曲线）的类型。
 * 'bevel': 在线段相连处使用三角形为底填充，每个部分矩形拐角独立。
 * 'miter': 在相连部分的外边缘处进行延伸，使其相交于一点，形成一个菱形区域，
 *    该属性可以通过设置miterLimit属性展现效果。
 * 'round': 在线段相连处绘制一个扇形，扇形的圆角半径是线段的宽度。
 *
 * @typedef { 'bevel' | 'miter' | 'round' } CanvasLineJoin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CanvasLineJoin = 'bevel' | 'miter' | 'round';

/**
 * 定义当前文本方向的类型。
 * 'inherit': 继承canvas组件通用属性已设定的文本方向，若canvas组件未设置direction属性，则跟随系统文字方向。
 * 'ltr': 从左往右。
 * 'rtl': 从右往左。
 *
 * @typedef { 'inherit' | 'ltr' | 'rtl' } CanvasDirection
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CanvasDirection = 'inherit' | 'ltr' | 'rtl';

/**
 * 定义文本对齐方式的类型。ltr布局模式下'start'和'left'一致，rtl布局模式下'start'和'right'一致。
 * 'center': 文本居中对齐。
 * 'start': 文本对齐界线开始的地方。
 * 'end': 文本对齐界线结束的地方。
 * 'left': 文本左对齐。
 * 'right': 文本右对齐。
 *
 * @typedef { 'center' | 'end' | 'left' | 'right' | 'start' } CanvasTextAlign
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CanvasTextAlign = 'center' | 'end' | 'left' | 'right' | 'start';

/**
 * 定义文本基线类型。
 * 'alphabetic': 文本基线是标准的字母基线。
 * 'bottom': 文本基线在文本块的底部。与ideographic基线的区别在于ideographic基线不需要考虑下行字母。
 * 'hanging': 文本基线是悬挂基线。
 * 'ideographic': 文字基线是表意字基线；如果字符本身超出了alphabetic基线，
 *    那么ideographic基线位置在字符本身的底部。
 * 'middle': 文本基线在文本块的中间。
 * 'top': 文本基线在文本块的顶部。
 *
 * @typedef { 'alphabetic' | 'bottom' | 'hanging' | 'ideographic' | 'middle' | 'top' } CanvasTextBaseline
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CanvasTextBaseline = 'alphabetic' | 'bottom' | 'hanging' | 'ideographic' | 'middle' | 'top';

/**
 * 定义图片平滑度类型。
 * 'high': 高画质。
 * 'low': 低画质。
 * 'medium': 中画质。
 *
 * @typedef { 'high' | 'low' | 'medium' } ImageSmoothingQuality
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ImageSmoothingQuality = 'high' | 'low' | 'medium';

/**
 * 渐变对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CanvasGradient {
  /**
   * 设置渐变断点值，包括偏移和颜色。支持设置rgb或者argb格式颜色。支持通过传入
   * [ColorMetrics](docroot://reference/apis-arkui/js-apis-arkui-graphics.md#colormetrics12)
   * 类型设置P3色域颜色值，可在支持高色域的设备上获得更丰富的色彩表现。
   *
   * @param { double } offset - 设置渐变点距离起点的位置占总体长度的比例，范围为[0, 1]。
   *     设置offset<0或offset>1无渐变效果。<br>异常值undefined和null按无效值处理，
   *     不设置本次断点值，NaN会导致CanvasGradient异常，Infinity会导致整个CanvasGradient不生效。
   * @param { string | ColorMetrics } color - 设置渐变填充的颜色。<br>可以使用
   *     [colorWithSpace](docroot://reference/apis-arkui/js-apis-arkui-graphics.md#colorwithspace20)
   *     方法构造指定色域属性
   *     [ColorSpace](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#colorspace20)
   *     为SRGB或DISPLAY_P3的颜色。每个渐变ColorMetrics的色域属性应当统一，
   *     设置不同色域的属性时将抛出异常，错误码：103701。<br>
   *     设置null和undefined无效，忽略本次断点值。
   * @throws { BusinessError } 103701 - The color's ColorSpace is not the same as the last color's.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addColorStop(offset: double, color: string | ColorMetrics): void;
}

/**
 * Path object, which provides basic methods for drawing paths.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CanvasPath {
  /**
   * Draw an arc path
   *
   * @param { double } x - The x-axis coordinate of the center (center of the circle) of the arc.
   * @param { double } y - The y-axis coordinate of the center (center of the circle) of the arc.
   * @param { double } radius - Radius of the arc.
   * @param { double } startAngle - Start point of an arc, which starts to be calculated in the x-axis direction.
   *     The unit is radian.
   * @param { double } endAngle - The end point of the arc, in radians.
   * @param { boolean } [counterclockwise] - If the value is true, the arc is drawn counterclockwise. Otherwise,
   *     the arc is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  arc(x: double, y: double, radius: double, startAngle: double, endAngle: double, counterclockwise?: boolean): void;
  /**
   * Draw arc paths based on control points and radius
   *
   * @param { double } x1 - The x-axis coordinate of the first control point.
   * @param { double } y1 - The y-axis coordinate of the first control point.
   * @param { double } x2 - The x-axis coordinate of the second control point.
   * @param { double } y2 - The y-axis coordinate of the second control point.
   * @param { double } radius - Radius of the arc.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  arcTo(x1: double, y1: double, x2: double, y2: double, radius: double): void;
  /**
   * Drawing Cubic Bessel Curve Paths
   *
   * @param { double } cp1x - The x-axis coordinate of the first control point.
   * @param { double } cp1y - The y-axis coordinate of the first control point.
   * @param { double } cp2x - The x-axis coordinate of the second control point.
   * @param { double } cp2y - The y-axis coordinate of the second control point.
   * @param { double } x - x-axis coordinate of the end point.
   * @param { double } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bezierCurveTo(cp1x: double, cp1y: double, cp2x: double, cp2y: double, x: double, y: double): void;
  /**
   * Returns the pen point to the start point of the current sub-path
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  closePath(): void;
  /**
   * Draw an Elliptic Path
   *
   * @param { double } x - x-axis coordinate of the center of the ellipse.
   * @param { double } y - y-axis coordinate of the center of the ellipse.
   * @param { double } radiusX - Radius of the major axis of the ellipse.
   * @param { double } radiusY - Radius of the minor axis of the ellipse.
   * @param { double } rotation - The rotation angle of the ellipse, in radians (not angular degrees).
   * @param { double } startAngle - The angle of the starting point to be drawn, measured from the x-axis in radians
   *     (not angular degrees).
   * @param { double } endAngle - The angle, in radians, at which the ellipse is to be drawn (not angular degrees).
   * @param { boolean } [counterclockwise] - If the value is true, the ellipse is drawn counterclockwise. Otherwise,
   *     the ellipse is drawn clockwise. The default value is false.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ellipse(x: double, y: double, radiusX: double, radiusY: double, rotation: double, startAngle: double,
    endAngle: double, counterclockwise?: boolean): void;
  /**
   * Connect sub-path using straight lines
   *
   * @param { double } x - The x-axis coordinate of the end point of the line.
   * @param { double } y - The y-axis coordinate of the end point of the line.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  lineTo(x: double, y: double): void;
  /**
   * Moves the start point of a new sub-path to the (x, y) coordinate.
   *
   * @param { double } x - The x-axis coordinate of the point.
   * @param { double } y - The y-axis coordinate of the point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  moveTo(x: double, y: double): void;
  /**
   * Draw quadratic Bezier curve paths
   *
   * @param { double } cpx - The x-axis coordinate of the control point.
   * @param { double } cpy - The y-axis coordinate of the control point.
   * @param { double } x - x-axis coordinate of the end point.
   * @param { double } y - y-axis coordinate of the end point.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  quadraticCurveTo(cpx: double, cpy: double, x: double, y: double): void;
  /**
   * Draw Rectangular Paths
   *
   * @param { double } x - The x-axis coordinate of the start point of the rectangle.
   * @param { double } y - The y-axis coordinate of the start point of the rectangle.
   * @param { double } w - Width of the rectangle.
   * @param { double } h - Height of the rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  rect(x: double, y: double, w: double, h: double): void;

  /**
   * Draw rounded Rectangular Paths
   *
   * @param { double } x - The x-axis coordinate of the start point of the rectangle.
   * @param { double } y - The y-axis coordinate of the start point of the rectangle.
   * @param { double } w - Width of the rectangle.
   * @param { double } h - Height of the rectangle.
   * @param { double | Array<double> } [radii] - A number or list specifying the radii of the circular arc
   *     to be used for the corners of the rectangle. The default value is 0.
   * @throws { BusinessError } 103701 - Parameter error. Possible causes:
   * <br> 1. The param radii is a list that has zero or more than four elements.
   * <br> 2. The param radii contains negative value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  roundRect(x: double, y: double, w: double, h: double, radii?: double | Array<double>): void;
}

/**
 * 2D path object for path drawing
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Path2D extends CanvasPath {
  /**
   * Adds a path according to the specified path variable.
   *
   * @param { Path2D } path - Indicates the path object to be added.
   * @param { Matrix2D } [transform] - Transformation matrix of the new trail. The default value is null.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addPath(path: Path2D, transform?: Matrix2D): void;
  /**
   * Create an empty path object.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();
  /**
   * Create an empty path object.
   *
   * @param { LengthMetricsUnit } unit - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(unit: LengthMetricsUnit);
  /**
   * Create a copy of a path object
   *
   * @param { Path2D } path - Path object to be copied
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(path: Path2D);
  /**
   * Create a copy of a path object
   *
   * @param { Path2D } path - Path object to be copied
   * @param { LengthMetricsUnit } unit - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(path: Path2D, unit: LengthMetricsUnit);
  /**
   * Create a new path according to the description.
   *
   * @param { string } d - Indicates the path string that compiles with the SVG path description specifications.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(d: string);
  /**
   * Create a new path according to the description.
   *
   * @param { string } description - Indicates the path string that compiles with
   *     the SVG path description specifications.
   * @param { LengthMetricsUnit } unit - the unit mode
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(description: string, unit: LengthMetricsUnit);
}

/**
 * 一个Object对象，使用createPattern方法创建，通过指定图像和重复方式创建图片填充的模板。
 *
 * @interface CanvasPattern
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CanvasPattern {
  /**
   * 使用Matrix2D对象作为参数，对当前CanvasPattern进行矩阵变换。
   *
   * @param { Matrix2D } [transform] - 转换矩阵。<br>异常值undefined和null按无效值不做矩阵变换处理。
   *     <br>默认值：不做矩阵变换
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTransform(transform?: Matrix2D): void;
}

/**
 * 文本的尺寸信息。
 *
 * @interface TextMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TextMetrics {
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的矩形边界顶部的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly actualBoundingBoxAscent: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的矩形边界底部的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly actualBoundingBoxDescent: double;
  /**
   * 只读属性，平行于基线，从CanvasRenderingContext2D.textAlign属性确定的对齐点到文本矩形边界左侧的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly actualBoundingBoxLeft: double;
  /**
   * 只读属性，平行于基线，从CanvasRenderingContext2D.textAlign属性确定的对齐点到文本矩形边界右侧的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly actualBoundingBoxRight: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框的alphabetic基线的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly alphabeticBaseline: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框中em方块顶部的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly emHeightAscent: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框中em方块底部的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly emHeightDescent: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly fontBoundingBoxAscent: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly fontBoundingBoxDescent: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框的hanging基线的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly hangingBaseline: double;
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框的ideographic基线的距离。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly ideographicBaseline: double;
  /**
   * 只读属性，文本方块的宽度。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly width: double;
  /**
   * 只读属性，文本方块的高度。
   *
   * @type { double }
   * @readonly
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly height: double;
}

/**
 * ImageBitmap对象可以存储canvas渲染的像素数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ImageBitmap {
  /**
   * ImageBitmap的像素高度。<br>默认单位为vp。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get height(): double;
  /**
   * ImageBitmap的像素宽度。<br>默认单位为vp。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get width(): double;
  /**
   * 释放ImageBitmap对象相关联的所有图形资源，并将ImageBitmap对象的宽高置为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  close(): void;
  /**
   * 根据传入的图片路径或PixelMap对象创建ImageBitmap对象，支持使用unit配置ImageBitmap对象的单位模式。
   *
   * @param { PixelMap | string } src - 图片的数据源支持本地图片或PixelMap对象。<br>
   *     当类型为string时，用于加载本地图片，例如ImageBitmap("common/images/example.jpg")，
   *     type为"entry"和"feature"类型的Module，其图片加载路径的起点为当前Module的ets文件夹，
   *     type为"har"和"shared"类型的Module，其图片加载路径的起点为当前构建的"entry"或"feature"
   *     类型Module的ets文件夹。<br>
   *     type为"har"和"shared"类型的Module中推荐使用
   *     [ImageSource](docroot://media/image/image-decoding.md)图片解码方式将资源图片解码为统一的
   *     PixelMap加载使用。<br>
   *     支持本地图片类型：bmp、jpg、png、svg和webp类型。<br>
   *     当类型为[PixelMap](docroot://apis-image-kit/arkts-apis-image-PixelMap.md)时，
   *     图片的数据源支持PixelMap对象。
   * @param { LengthMetricsUnit } [unit] - 用来配置ImageBitmap对象的单位模式，配置后无法动态更改，
   *     配置方法同[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *     <br>异常值undefined、NaN和Infinity按默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(src: PixelMap | string, unit?: LengthMetricsUnit);
  /**
   * 根据传入的图片路径、PixelMap对象或Resource对象创建ImageBitmap对象，
   * 支持使用unit配置ImageBitmap对象的单位模式。
   *
   * @param { Resource | PixelMap | string } src - 图片的数据源支持本地图片、PixelMap对象或Resource对象。
   *     <br>当类型为string时，用于加载本地图片，例如ImageBitmap("common/images/example.jpg")，
   *     type为"entry"和"feature"类型的Module，其图片加载路径的起点为当前Module的ets文件夹，
   *     type为"har"和"shared"类型的Module，其图片加载路径的起点为当前构建的"entry"或"feature"
   *     类型Module的ets文件夹。<br>
   *     type为"har"和"shared"类型的Module中推荐使用
   *     [ImageSource](docroot://media/image/image-decoding.md)图片解码方式将资源图片解码为统一的
   *     PixelMap加载使用。<br>
   *     支持本地图片类型：bmp、jpg、png、svg和webp类型。<br>
   *     当类型为[PixelMap](docroot://apis-image-kit/arkts-apis-image-PixelMap.md)时，
   *     图片的数据源支持PixelMap对象。<br>
   *     当类型为Resource时，图片的数据源支持Resource对象。
   * @param { LengthMetricsUnit } [unit] - 用来配置ImageBitmap对象的单位模式，配置后无法动态更改，
   *     配置方法同[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *     <br>异常值undefined、NaN和Infinity按默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  constructor(src: Resource | PixelMap | string, unit?: LengthMetricsUnit);
}

/**
 * ImageData对象可以存储canvas渲染的像素数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ImageData {
  /**
   * 一维数组，保存了相应的颜色数据，数据值范围为0到255。
   *
   * @returns { Uint8ClampedArray | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get data(): Uint8ClampedArray | undefined;
  /**
   * 矩形区域实际像素高度。<br>单位为px。
   *
   * @returns { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get height(): int;
  /**
   * 矩形区域实际像素宽度。<br>单位为px。
   *
   * @returns { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get width(): int;
  /**
   * 创建宽为width，高为height，像素为data的ImageData，如果data未定义，则填充值全为0的一维数组，
   * 支持使用unit配置ImageData对象的单位模式。
   *
   * @param { double } width - 矩形区域宽度，默认单位为vp。<br>异常值NaN和Infinity按0处理。
   * @param { double } height - 矩形区域高度，默认单位为vp。<br>异常值NaN和Infinity按0处理。
   * @param { Uint8ClampedArray } [data] - 一维数组，保存了相应的颜色数据，数据值范围为0到255。
   *     <br>传入异常值undefined时，data为undefined。<br>默认值：值全为0的一维数组
   * @param { LengthMetricsUnit } [unit] - 用来配置ImageData对象的单位模式，配置后无法动态更改，
   *     配置方法同[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *     <br>异常值undefined、NaN和Infinity按默认值处理。<br>默认值：DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(width: double, height: double, data?: Uint8ClampedArray, unit?: LengthMetricsUnit);
}

/**
 * 用来配置CanvasRenderingContext2D对象的参数，包括是否开启抗锯齿。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RenderingContextSettings {
  /**
   * 表明canvas是否开启抗锯齿。<br>异常值undefined按默认值处理。<br>
   * false：表示不开启抗锯齿功能，true：表示开启抗锯齿。<br>默认值：false
   *
   * @return { boolean | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get antialias(): boolean | undefined;
  /**
   * 表明canvas是否开启抗锯齿。<br>异常值undefined按默认值处理。<br>
   * false：表示不开启抗锯齿功能，true：表示开启抗锯齿。<br>默认值：false
   *
   * @param { boolean | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set antialias(antialias: boolean | undefined);
  /**
   * 构造CanvasRenderingContext2D对象，支持配置开启抗锯齿。
   *
   * @param { boolean } [antialias] - 表明canvas是否开启抗锯齿。<br>异常值undefined按默认值处理。
   *     <br>false：表示不开启抗锯齿功能，true：表示开启抗锯齿。<br>默认值：false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(antialias?: boolean);
}

/**
 * 定义渲染上下文的具体配置参数。
 *
 * @interface RenderingContextOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface RenderingContextOptions {
  /**
   * 表明RenderingContext是否需要开启抗锯齿。<br>取值为undefined时按默认值处理。
   * <br>true：开启抗锯齿；false：不开启抗锯齿。<br>默认值：false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  antialias?: boolean;
}

/**
 * Canvas渲染器，用于绘制形状、文本、图片等对象。
 *
 * @extends CanvasPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CanvasRenderer extends CanvasPath {
  /**
   * 用于指定绘制文本时字母之间的间距。
   *
   * @returns { LengthMetrics | string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get letterSpacing(): LengthMetrics | string;
  /**
   * 用于指定绘制文本时字母之间的间距。
   *
   * @param { LengthMetrics | string } letterSpacing
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set letterSpacing(letterSpacing: LengthMetrics | string);
  /**
   * 设置透明度，范围为[0.0, 1.0]，0.0为完全透明，1.0为完全不透明。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get globalAlpha(): double;
  /**
   * 设置透明度，范围为[0.0, 1.0]，0.0为完全透明，1.0为完全不透明。
   *
   * @param { double } globalAlpha - 应用于形状和图像的透明度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set globalAlpha(globalAlpha: double);
  /**
   * 设置合成操作的方式。支持的类型如下：
   * source-over：在现有绘制内容上显示新绘制内容，属于默认值。
   * source-atop：在现有绘制内容顶部显示新绘制内容。
   * source-in：在现有绘制内容中显示新绘制内容。
   * source-out：在现有绘制内容之外显示新绘制内容。
   * destination-over：在新绘制内容上方显示现有绘制内容。
   * destination-atop：在新绘制内容顶部显示现有绘制内容。
   * destination-in：在新绘制内容中显示现有绘制内容。
   * destination-out：在新绘制内容外显示现有绘制内容。
   * lighter：显示新绘制内容和现有绘制内容。
   * copy：显示新绘制内容而忽略现有绘制内容。
   * xor：使用异或操作对新绘制内容与现有绘制内容进行融合。
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get globalCompositeOperation(): string;
  /**
   * 设置合成操作的方式。支持的类型如下：
   * source-over：在现有绘制内容上显示新绘制内容，属于默认值。
   * source-atop：在现有绘制内容顶部显示新绘制内容。
   * source-in：在现有绘制内容中显示新绘制内容。
   * source-out：在现有绘制内容之外显示新绘制内容。
   * destination-over：在新绘制内容上方显示现有绘制内容。
   * destination-atop：在新绘制内容顶部显示现有绘制内容。
   * destination-in：在新绘制内容中显示现有绘制内容。
   * destination-out：在新绘制内容外显示现有绘制内容。
   * lighter：显示新绘制内容和现有绘制内容。
   * copy：显示新绘制内容而忽略现有绘制内容。
   * xor：使用异或操作对新绘制内容与现有绘制内容进行融合。
   *
   * @param { string } globalCompositeOperation
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set globalCompositeOperation(globalCompositeOperation: string);
  /**
   * 进行图像绘制。
   *
   * @param { ImageBitmap | PixelMap } image - 图片资源。异常值undefined或null按无效值处理，不进行绘制。
   * @param { double } dx - 绘制区域左上角在x轴的位置。异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } dy - 绘制区域左上角在y轴的位置。异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  drawImage(image: ImageBitmap | PixelMap, dx: double, dy: double): void;
  /**
   * 将图像拉伸或压缩绘制。
   *
   * @param { ImageBitmap | PixelMap } image - 图片资源。异常值undefined或null按无效值处理，不进行绘制。
   * @param { double } dx - 绘制区域左上角在x轴的位置。异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } dy - 绘制区域左上角在y轴的位置。异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } dw - 绘制区域的宽度。当绘制区域的宽度和裁剪图像的宽度不一致时，
   *     将图像宽度拉伸或压缩为绘制区域的宽度。负数、异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @param { double } dh - 绘制区域的高度。当绘制区域的高度和裁剪图像的高度不一致时，
   *     将图像高度拉伸或压缩为绘制区域的高度。负数、异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  drawImage(image: ImageBitmap | PixelMap, dx: double, dy: double, dw: double, dh: double): void;
  /**
   * 将图像裁剪后拉伸或压缩绘制。
   *
   * @param { ImageBitmap | PixelMap } image - 图片资源。异常值undefined或null按无效值处理，不进行绘制。
   * @param { double } sx - 裁切源图像时距离源图像左上角的x坐标值。异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @param { double } sy - 裁切源图像时距离源图像左上角的y坐标值。异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @param { double } sw - 裁切源图像时需要裁切的宽度。负数、异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @param { double } sh - 裁切源图像时需要裁切的高度。负数、异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @param { double } dx - 绘制区域左上角在x轴的位置。异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @param { double } dy - 绘制区域左上角在y轴的位置。异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。默认单位：vp
   * @param { double } dw - 绘制区域的宽度。负数、异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。当绘制区域的宽度和裁剪图像的宽度不一致时，
   *     将图像宽度拉伸或压缩为绘制区域的宽度。默认单位：vp
   * @param { double } dh - 绘制区域的高度。负数、异常值undefined或null按0处理，
   *     NaN和Infinity按无效值处理，不进行绘制。当绘制区域的高度和裁剪图像的高度不一致时，
   *     将图像高度拉伸或压缩为绘制区域的高度。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  drawImage(image: ImageBitmap | PixelMap, sx: double, sy: double, sw: double, sh: double, dx: double, dy: double,
    dw: double, dh: double): void;
  /**
   * 创建一个新的绘制路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  beginPath(): void;
  /**
   * 设置当前路径为剪切路径。
   *
   * @param { CanvasFillRule } [fillRule] - 指定要剪切对象的规则。可选参数为："nonzero"，"evenodd"。
   *     异常值undefined或null按默认值处理。默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clip(fillRule?: CanvasFillRule): void;
  /**
   * 设置指定路径为剪切路径。
   *
   * @param { Path2D } path - Path2D剪切路径。异常值undefined或null按无效值处理。
   * @param { CanvasFillRule } [fillRule] - 指定要剪切对象的规则。可选参数为："nonzero"，"evenodd"。
   *     异常值undefined或null按默认值处理。默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clip(path: Path2D, fillRule?: CanvasFillRule): void;
  /**
   * 对当前路径进行填充。
   *
   * @param { CanvasFillRule } [fillRule] - 指定要填充对象的规则。可选参数为："nonzero"，"evenodd"。
   *     异常值undefined或null按默认值处理。默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fill(fillRule?: CanvasFillRule): void;
  /**
   * 对指定路径进行填充。
   *
   * @param { Path2D } path - Path2D填充路径。异常值undefined或null按无效值处理。
   * @param { CanvasFillRule } [fillRule] - 指定要填充对象的规则。可选参数为："nonzero"，"evenodd"。
   *     异常值undefined或null按默认值处理。默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fill(path: Path2D, fillRule?: CanvasFillRule): void;
  /**
   * 根据指定的路径，进行边框绘制操作。
   *
   * @param { Path2D } [path] - 需要绘制的Path2D。异常值undefined或null按无效值处理，不进行绘制。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stroke(path?: Path2D): void;
  /**
   * 指定绘制的填充色，支持的颜色格式参考ResourceColor中string类型说明。
   *
   * @returns { string | Color | int | CanvasGradient | CanvasPattern }
   *     string: 设置填充区域的颜色，颜色格式参考ResourceColor中string类型说明。
   *     Color: 设置填充区域的颜色，不支持设置全透明色，颜色格式参考ResourceColor中number类型说明。
   *     int: 设置填充区域的颜色。
   *     CanvasGradient: 渐变对象，使用createLinearGradient方法创建。
   *     CanvasPattern: 使用createPattern方法创建。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get fillStyle(): string | Color | int | CanvasGradient | CanvasPattern;
  /**
   * 指定绘制的填充色，支持的颜色格式参考ResourceColor中string类型说明。
   *
   * @param { string | Color | int | CanvasGradient | CanvasPattern } fillStyle
   *     string: 设置填充区域的颜色，颜色格式参考ResourceColor中string类型说明。
   *     Color: 设置填充区域的颜色，不支持设置全透明色，颜色格式参考ResourceColor中number类型说明。
   *     int: 设置填充区域的颜色。
   *     CanvasGradient: 渐变对象，使用createLinearGradient方法创建。
   *     CanvasPattern: 使用createPattern方法创建。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set fillStyle(fillStyle: string | Color | int | CanvasGradient | CanvasPattern);
  /**
   * 设置线条的颜色，支持的颜色格式参考ResourceColor中string类型说明。
   *
   * @returns { string | Color | int | CanvasGradient | CanvasPattern }
   *     string: 设置线条使用的颜色，颜色格式参考ResourceColor中string类型说明。
   *     Color: 设置线条使用的颜色，不支持设置全透明色，颜色格式参考ResourceColor中number类型说明。
   *     int: 设置线条使用的颜色。
   *     CanvasGradient: 渐变对象，使用createLinearGradient方法创建。
   *     CanvasPattern: 使用createPattern方法创建。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get strokeStyle(): string | Color | int | CanvasGradient | CanvasPattern;
  /**
   * 设置线条的颜色，支持的颜色格式参考ResourceColor中string类型说明。
   *
   * @param { string | Color | int | CanvasGradient | CanvasPattern } strokeStyle
   *     string: 设置线条使用的颜色，颜色格式参考ResourceColor中string类型说明。
   *     Color: 设置线条使用的颜色，不支持设置全透明色，颜色格式参考ResourceColor中number类型说明。
   *     int: 设置线条使用的颜色。
   *     CanvasGradient: 渐变对象，使用createLinearGradient方法创建。
   *     CanvasPattern: 使用createPattern方法创建。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set strokeStyle(strokeStyle: string | Color | int | CanvasGradient | CanvasPattern);
  /**
   * 创建一个线性渐变色。
   *
   * @param { double } x0 - 起点的x轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } y0 - 起点的y轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } x1 - 终点的x轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } y1 - 终点的y轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @returns { CanvasGradient } 新的CanvasGradient对象，用于在canvas上创建渐变效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createLinearGradient(x0: double, y0: double, x1: double, y1: double): CanvasGradient;
  /**
   * 通过指定图像和重复方式创建图片填充的模板。
   *
   * @param { ImageBitmap } image - 图源对象。异常值undefined或null按无效值处理。
   * @param { string | null } repetition - 设置图像重复的方式：
   *     'repeat'：沿x轴和y轴重复绘制图像；
   *     'repeat-x'：沿x轴重复绘制图像；
   *     'repeat-y'：沿y轴重复绘制图像；
   *     'no-repeat'：不重复绘制图像；
   *     'clamp'：在原始边界外绘制时，超出部分使用边缘的颜色绘制；
   *     'mirror'：沿x轴和y轴重复翻转绘制图像。
   *     异常值undefined或null按无效值处理。
   * @returns { CanvasPattern | null } 通过指定图像和重复方式创建图片填充的模板对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;
  /**
   * 创建一个径向渐变色。
   *
   * @param { double } x0 - 起始圆的x轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } y0 - 起始圆的y轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } r0 - 起始圆的半径。必须是非负且有限的。
   *     异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } x1 - 终点圆的x轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } y1 - 终点圆的y轴坐标。异常值undefined和null会导致此接口返回undefined，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } r1 - 终点圆的半径。必须为非负且有限的。
   *     异常值undefined和null会导致此接口返回undefined，NaN和Infinity按无效值处理。默认单位：vp
   * @returns { CanvasGradient } 新的CanvasGradient对象，用于在canvas上创建渐变效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createRadialGradient(x0: double, y0: double, r0: double, x1: double, y1: double, r1: double): CanvasGradient;
  /**
   * 创建一个圆锥渐变色。
   *
   * @param { double } startAngle - 开始渐变的角度。角度测量从中心右侧水平开始，顺时针移动。
   *     异常值undefined和null按0处理，NaN和Infinity按无效值处理。单位：弧度
   * @param { double } x - 圆锥渐变的中心x轴坐标。异常值undefined和null按0处理，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @param { double } y - 圆锥渐变的中心y轴坐标。异常值undefined和null按0处理，
   *     NaN和Infinity按无效值处理。默认单位：vp
   * @returns { CanvasGradient } 新的CanvasGradient对象，用于在canvas上创建渐变效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createConicGradient(startAngle: double, x: double, y: double): CanvasGradient;
  /**
   * 用于设置图像的滤镜，可以组合任意数量的滤镜。支持的滤镜效果如下：
   * 'none': 无滤镜效果。
   * 'blur(<length>)'：给图像设置高斯模糊，取值范围>=0，支持单位px、vp、rem，默认值：blur(0px)。
   * 'brightness([<number>|<percentage>])'：给图片应用一种线性乘法，使其看起来更亮或更暗，
   *     支持数字和百分比参数，取值范围>=0，默认值：brightness(1)。
   * 'contrast([<number>|<percentage>])'：调整图像的对比度，支持数字和百分比参数，
   *     取值范围>=0，默认值：contrast(1)。
   * 'grayscale([<number>|<percentage>])'：将图像转换为灰度图像，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：grayscale(0)。
   * 'hue-rotate(<angle>)'：给图像应用色相旋转，取值范围0deg-360deg，默认值：hue-rotate(0deg)。
   * 'invert([<number>|<percentage>])'：反转输入图像，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：invert(0)。
   * 'opacity([<number>|<percentage>])'：调整图像的透明程度，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：opacity(1)。
   * 'saturate([<number>|<percentage>])'：转换图像饱和度，支持数字和百分比参数，
   *     取值范围>=0，默认值：saturate(1)。
   * 'sepia([<number>|<percentage>])'：将图像转换为深褐色，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：sepia(0)。
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get filter(): string;
  /**
   * 用于设置图像的滤镜，可以组合任意数量的滤镜。支持的滤镜效果如下：
   * 'none': 无滤镜效果。
   * 'blur(<length>)'：给图像设置高斯模糊，取值范围>=0，支持单位px、vp、rem，默认值：blur(0px)。
   * 'brightness([<number>|<percentage>])'：给图片应用一种线性乘法，使其看起来更亮或更暗，
   *     支持数字和百分比参数，取值范围>=0，默认值：brightness(1)。
   * 'contrast([<number>|<percentage>])'：调整图像的对比度，支持数字和百分比参数，
   *     取值范围>=0，默认值：contrast(1)。
   * 'grayscale([<number>|<percentage>])'：将图像转换为灰度图像，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：grayscale(0)。
   * 'hue-rotate(<angle>)'：给图像应用色相旋转，取值范围0deg-360deg，默认值：hue-rotate(0deg)。
   * 'invert([<number>|<percentage>])'：反转输入图像，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：invert(0)。
   * 'opacity([<number>|<percentage>])'：调整图像的透明程度，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：opacity(1)。
   * 'saturate([<number>|<percentage>])'：转换图像饱和度，支持数字和百分比参数，
   *     取值范围>=0，默认值：saturate(1)。
   * 'sepia([<number>|<percentage>])'：将图像转换为深褐色，支持数字和百分比参数，
   *     取值范围[0, 1]，默认值：sepia(0)。
   *
   * @param { string } filter
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set filter(filter: string);
  /**
   * 创建新的、空白的、指定大小的ImageData对象。
   *
   * @param { double } sw - ImageData的宽度。异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double } sh - ImageData的高度。异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @returns { ImageData } 新的ImageData对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createImageData(sw: double, sh: double): ImageData;
  /**
   * 根据一个现有的ImageData对象重新创建一个宽、高相同的ImageData对象（不会复制图像数据）。
   *
   * @param { ImageData } imageData - 现有的ImageData对象。异常值undefined和null按width和height为0的ImageData处理。
   * @returns { ImageData } 新的ImageData对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  createImageData(imageData: ImageData): ImageData;
  /**
   * 以当前canvas指定区域内的像素创建ImageData对象。
   *
   * @param { double } sx - 需要输出的区域的左上角x坐标。异常值undefined、null、NaN和Infinity按0处理。
   *     默认单位：vp
   * @param { double } sy - 需要输出的区域的左上角y坐标。异常值undefined、null、NaN和Infinity按0处理。
   *     默认单位：vp
   * @param { double } sw - 需要输出的区域的宽度。异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double } sh - 需要输出的区域的高度。异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @returns { ImageData } 新的ImageData对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getImageData(sx: double, sy: double, sw: double, sh: double): ImageData;
  /**
   * 以当前canvas指定区域内的像素创建PixelMap对象。
   *
   * @param { double } sx - 需要输出的区域的左上角x坐标。异常值undefined、null、NaN和Infinity按0处理。
   *     默认单位：vp
   * @param { double } sy - 需要输出的区域的左上角y坐标。异常值undefined、null、NaN和Infinity按0处理。
   *     默认单位：vp
   * @param { double } sw - 需要输出的区域的宽度。异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double } sh - 需要输出的区域的高度。异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @returns { PixelMap | undefined } 新的PixelMap对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getPixelMap(sx: double, sy: double, sw: double, sh: double): PixelMap | undefined;
  /**
   * 使用ImageData数据填充新的矩形区域。
   *
   * @param { ImageData } imageData - 包含像素值的ImageData对象。
   *     异常值undefined或null按无效值处理，不进行绘制。
   * @param { double | string } dx - 填充区域在x轴方向的偏移量。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double | string } dy - 填充区域在y轴方向的偏移量。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  putImageData(imageData: ImageData, dx: double | string, dy: double | string): void;
  /**
   * 使用ImageData数据裁剪后填充至新的矩形区域。
   *
   * @param { ImageData } imageData - 包含像素值的ImageData对象。
   *     异常值undefined或null按无效值处理，不进行绘制。
   * @param { double | string } dx - 填充区域在x轴方向的偏移量。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double | string } dy - 填充区域在y轴方向的偏移量。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double | string } dirtyX - 源图像数据矩形裁切范围左上角距离源图像左上角的x轴偏移量。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double | string } dirtyY - 源图像数据矩形裁切范围左上角距离源图像左上角的y轴偏移量。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double | string } dirtyWidth - 源图像数据矩形裁切范围的宽度。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @param { double | string } dirtyHeight - 源图像数据矩形裁切范围的高度。
   *     异常值undefined、null、NaN和Infinity按0处理。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  putImageData(imageData: ImageData, dx: double | string, dy: double | string, dirtyX: double | string,
    dirtyY: double | string, dirtyWidth: double | string, dirtyHeight: double | string): void;
  /**
   * 用于设置绘制图片时是否进行图像平滑度调整，true为启用，false为不启用。
   *
   * @returns { boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get imageSmoothingEnabled(): boolean;
  /**
   * 用于设置绘制图片时是否进行图像平滑度调整，true为启用，false为不启用。
   *
   * @param { boolean } imageSmoothingEnabled
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set imageSmoothingEnabled(imageSmoothingEnabled: boolean);
  /**
   * imageSmoothingEnabled为true时，用于设置图像平滑度。
   *
   * @returns { ImageSmoothingQuality }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get imageSmoothingQuality(): ImageSmoothingQuality;
  /**
   * imageSmoothingEnabled为true时，用于设置图像平滑度。
   *
   * @param { ImageSmoothingQuality } imageSmoothingQuality
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set imageSmoothingQuality(imageSmoothingQuality: ImageSmoothingQuality);
  /**
   * 指定线端点的样式。
   *
   * @returns { CanvasLineCap }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get lineCap(): CanvasLineCap;
  /**
   * 指定线端点的样式。
   *
   * @param { CanvasLineCap } lineCap
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set lineCap(lineCap: CanvasLineCap);
  /**
   * 设置画布的虚线偏移量。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get lineDashOffset(): double;
  /**
   * 设置画布的虚线偏移量。
   *
   * @param { double } lineDashOffset - 虚线偏移量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set lineDashOffset(lineDashOffset: double);
  /**
   * 指定线段间相交的交点样式。
   *
   * @returns { CanvasLineJoin }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get lineJoin(): CanvasLineJoin;
  /**
   * 指定线段间相交的交点样式。
   *
   * @param { CanvasLineJoin } lineJoin
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set lineJoin(lineJoin: CanvasLineJoin);
  /**
   * 设置绘制线条的宽度。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get lineWidth(): double;
  /**
   * 设置绘制线条的宽度。
   *
   * @param { double } lineWidth - 线条宽度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set lineWidth(lineWidth: double);
  /**
   * 设置斜接面限制值。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get miterLimit(): double;
  /**
   * 设置斜接面限制值。
   *
   * @param { double } miterLimit - 斜接面限制值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set miterLimit(miterLimit: double);
  /**
   * 获得当前画布的虚线样式。
   *
   * @returns { double[] } 返回数组，该数组用来描述线段如何交替和间距长度。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getLineDash(): double[];
  /**
   * 设置画布的虚线样式。
   *
   * @param { double[] } segments - 描述线段如何交替和线段间距长度的数组。
   *     异常值undefined或null按无效值处理。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setLineDash(segments: double[]): void;
  /**
   * 删除指定区域内的绘制内容。
   *
   * @param { double } x - 指定矩形上的左上角x坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } y - 指定矩形上的左上角y坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } w - 指定矩形的宽度。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } h - 指定矩形的高度。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  clearRect(x: double, y: double, w: double, h: double): void;
  /**
   * 填充一个矩形。
   *
   * @param { double } x - 指定矩形左上角点的x坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } y - 指定矩形左上角点的y坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } w - 指定矩形的宽度。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } h - 指定矩形的高度。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillRect(x: double, y: double, w: double, h: double): void;
  /**
   * 绘制具有边框的矩形，矩形内部不填充。
   *
   * @param { double } x - 指定矩形的左上角x坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } y - 指定矩形的左上角y坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } w - 指定矩形的宽度。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } h - 指定矩形的高度。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeRect(x: double, y: double, w: double, h: double): void;
  /**
   * 设置绘制阴影时的模糊级别。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowBlur(): double;
  /**
   * 设置绘制阴影时的模糊级别。
   *
   * @param { double } shadowBlur - 阴影模糊级别。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowBlur(shadowBlur: double);
  /**
   * 设置绘制阴影时的阴影颜色。
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowColor(): string;
  /**
   * 设置绘制阴影时的阴影颜色。
   *
   * @param { string } shadowColor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowColor(shadowColor: string);
  /**
   * 设置绘制阴影时和原有对象的水平偏移值。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowOffsetX(): double;
  /**
   * 设置绘制阴影时和原有对象的水平偏移值。
   *
   * @param { double } shadowOffsetX - 阴影的水平偏移值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowOffsetX(shadowOffsetX: double);
  /**
   * 设置绘制阴影时和原有对象的垂直偏移值。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get shadowOffsetY(): double;
  /**
   * 设置绘制阴影时和原有对象的垂直偏移值。
   *
   * @param { double } shadowOffsetY - 阴影的垂直偏移值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set shadowOffsetY(shadowOffsetY: double);
  /**
   * 恢复保存的绘图上下文。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  restore(): void;
  /**
   * 将当前状态放入栈中，保存canvas的全部状态，通常在需要保存绘制状态时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  save(): void;
  /**
   * 绘制填充类文本。
   *
   * @param { string } text - 需要绘制的文本内容。异常值undefined或null按无效值处理，不进行绘制。
   * @param { double } x - 文本绘制起点的x轴坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } y - 文本绘制起点的y轴坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } [maxWidth] - 指定文本允许的最大宽度。异常值null按无效值处理，不进行绘制，
   *     undefined、NaN或Infinity按默认值处理。默认值：不限制宽度。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillText(text: string, x: double, y: double, maxWidth?: double): void;
  /**
   * 该方法返回一个文本测算的对象，通过该对象可以获取指定文本的宽度值。不同设备上获取的宽度值可能不同。
   *
   * @param { string } text - 需要进行测量的文本。传入异常值undefined或null时按"undefined"或"null"计算。
   * @returns { TextMetrics } 文本的尺寸信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  measureText(text: string): TextMetrics;
  /**
   * 绘制描边类文本。
   *
   * @param { string } text - 需要绘制的文本内容。异常值undefined或null按无效值处理，不进行绘制。
   * @param { double } x - 文本绘制起点的x轴坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } y - 文本绘制起点的y轴坐标。异常值undefined、null、NaN或Infinity按无效值处理，
   *     不进行绘制。默认单位：vp
   * @param { double } [maxWidth] - 需要绘制的文本的最大宽度。异常值null按无效值处理，不进行绘制，
   *     undefined、NaN或Infinity按默认值处理。默认单位：vp。默认值：不限制宽度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeText(text: string, x: double, y: double, maxWidth?: double): void;
  /**
   * 用于设置绘制文字时使用的文字方向。
   *
   * @returns { CanvasDirection }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get direction(): CanvasDirection;
  /**
   * 用于设置绘制文字时使用的文字方向。
   *
   * @param { CanvasDirection } direction
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set direction(direction: CanvasDirection);
  /**
   * 设置文本绘制中的字体样式。
   *
   * @returns { string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get font(): string;
  /**
   * 设置文本绘制中的字体样式。
   *
   * @param { string } font
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set font(font: string);
  /**
   * 设置文本绘制中的文本对齐方式。
   *
   * @returns { CanvasTextAlign }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get textAlign(): CanvasTextAlign;
  /**
   * 设置文本绘制中的文本对齐方式。
   *
   * @param { CanvasTextAlign } textAlign
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set textAlign(textAlign: CanvasTextAlign);
  /**
   * 设置文本绘制中的水平对齐方式。
   *
   * @returns { CanvasTextBaseline }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get textBaseline(): CanvasTextBaseline;
  /**
   * 设置文本绘制中的水平对齐方式。
   *
   * @param { CanvasTextBaseline } textBaseline
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set textBaseline(textBaseline: CanvasTextBaseline);
  /**
   * 获取当前被应用到上下文的转换矩阵。
   *
   * @returns { Matrix2D } 当前被应用到上下文的转换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getTransform(): Matrix2D;
  /**
   * 使用单位矩阵重新设置当前矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  resetTransform(): void;
  /**
   * 针对当前坐标轴进行顺时针旋转。
   *
   * @param { double } angle - 设置顺时针旋转的弧度值，可以通过 degree * Math.PI / 180 将角度转换为弧度值。
   *     单位：弧度
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  rotate(angle: double): void;
  /**
   * 设置canvas画布的缩放变换属性，后续的绘制操作将按照缩放比例进行缩放。
   *
   * @param { double } x - 设置水平方向的缩放值。
   * @param { double } y - 设置垂直方向的缩放值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scale(x: double, y: double): void;
  /**
   * setTransform方法使用的参数和transform()方法相同，但setTransform()方法会重置现有的变换矩阵
   * 并创建新的变换矩阵。
   *
   * @param { double } a - scaleX：指定水平缩放值，支持设置负数。
   * @param { double } b - skewY：指定垂直倾斜值，支持设置负数。
   * @param { double } c - skewX：指定水平倾斜值，支持设置负数。
   * @param { double } d - scaleY：指定垂直缩放值，支持设置负数。
   * @param { double } e - translateX：指定水平移动值，支持设置负数。默认单位：vp
   * @param { double } f - translateY：指定垂直移动值，支持设置负数。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTransform(a: double, b: double, c: double, d: double, e: double, f: double): void;
  /**
   * 以Matrix2D对象为模板重置现有的变换矩阵并创建新的变换矩阵。
   *
   * @param { Matrix2D } [transform] - 变换矩阵。异常值undefined或null按无效值处理。默认值：null
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setTransform(transform?: Matrix2D): void;
  /**
   * transform方法对应一个变换矩阵，想对一个图形进行变化的时候，只要设置此变换矩阵相应的参数，
   * 对图形的各个定点的坐标分别乘以这个矩阵，就能得到新的定点的坐标。矩阵变换效果可叠加。
   *
   * @param { double } a - 变换矩阵中第一行第一列的单元格。scaleX：指定水平缩放值，支持设置负数。
   * @param { double } b - 变换矩阵第二行第一列的单元格。skewY：指定垂直倾斜值，支持设置负数。
   * @param { double } c - 变换矩阵第一行第二列的单元格。skewX：指定水平倾斜值，支持设置负数。
   * @param { double } d - 变换矩阵第二行第二列的单元格。scaleY：指定垂直缩放值，支持设置负数。
   * @param { double } e - 变换矩阵第一行第三列的单元格。translateX：指定水平移动值，
   *     支持设置负数。默认单位：vp
   * @param { double } f - 变换矩阵第二行第三列的单元格。translateY：指定垂直移动值，
   *     支持设置负数。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transform(a: double, b: double, c: double, d: double, e: double, f: double): void;
  /**
   * 移动当前坐标系的原点。
   *
   * @param { double } x - 设置水平平移量。默认单位：vp
   * @param { double } y - 设置竖直平移量。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  translate(x: double, y: double): void;
  /**
   * 将当前传入PixelMap对象绘制在画布上。
   *
   * @param { PixelMap } [value] - 包含像素值的PixelMap对象。
   *     异常值undefined和null按无效值处理，不进行绘制。默认值：null
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setPixelMap(value?: PixelMap): void;
  /**
   * 显示给定的ImageBitmap对象。
   *
   * @param { ImageBitmap } bitmap - 待显示的ImageBitmap对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transferFromImageBitmap(bitmap: ImageBitmap): void;
  /**
   * 创建一个图层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  saveLayer(): void;
  /**
   * 恢复图像变换和裁剪状态至saveLayer前的状态，并将图层绘制在canvas上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  restoreLayer(): void;
  /**
   * 将CanvasRenderingContext2D重置为其默认状态，清除后台缓冲区、绘制状态栈、绘制路径和样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  reset(): void;
  /**
   * 用于设置绘制图形和文本时是否开启抗锯齿。设置此接口会覆盖RenderingContextSettings中的抗锯齿效果，
   * 未通过该接口设置时，默认值为undefined，与RenderingContextSettings中的抗锯齿效果保持一致。
   *
   * @returns { boolean | undefined } 设置绘制图形和文本时是否开启抗锯齿。
   *     true表示开启抗锯齿；false表示不开启抗锯齿。
   *     值为undefined时，与RenderingContextSettings中的抗锯齿效果保持一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  get antialias(): boolean | undefined;
  /**
   * 用于设置绘制图形和文本时是否开启抗锯齿。设置此接口会覆盖RenderingContextSettings中的抗锯齿效果，
   * 未通过该接口设置时，默认值为undefined，与RenderingContextSettings中的抗锯齿效果保持一致。
   *
   * @param { boolean | undefined } antialias - 设置绘制图形和文本时是否开启抗锯齿。
   *     true表示开启抗锯齿；false表示不开启抗锯齿。
   *     值为undefined时，与RenderingContextSettings中的抗锯齿效果保持一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  set antialias(antialias: boolean | undefined);
}

/**
 * CanvasRenderingContext2D对象与Canvas组件绑定后，可在Canvas组件上绘制，
 * 绘制对象可以是形状、文本、图片等。
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CanvasRenderingContext2D extends CanvasRenderer {
  /**
   * 组件高度，默认单位：vp。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get height(): double;
  /**
   * 组件宽度，默认单位：vp。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get width(): double;
  /**
   * 获取和CanvasRenderingContext2D关联的Canvas组件的FrameNode实例。
   * 可用于监听关联的Canvas组件的可见状态。默认值：null。
   *
   * @returns { FrameNode | null }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get canvas(): FrameNode | null;
  /**
   * 生成一个包含图片展示的URL，该接口存在内存拷贝行为，高耗时，应避免频繁使用。
   *
   * @param { string } [type] - 用于指定图像格式。可选参数为："image/png"，"image/jpeg"，
   *     "image/webp"。异常值undefined或null按默认值处理。默认值：image/png。
   * @param { double } [quality] - 在指定图片格式为image/jpeg或image/webp的情况下，
   *     可以从0到1的区间内选择图片的质量。如果超出取值范围，
   *     将会使用默认值0.92。异常值undefined、null、NaN和Infinity按默认值处理。
   *     默认值：0.92。
   * @returns { string } 图像的URL地址。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  toDataURL(type?: string, quality?: double): string;
  /**
   * 配置并启动AI分析功能，使用Promise异步回调。
   * 使用前需先设置enableAnalyzer为true，启用图像AI分析能力。
   * 该方法调用时，将截取调用时刻的画面帧进行分析，使用时需注意启动分析的时机，
   * 避免出现画面和分析内容不一致的情况。
   * 未执行完重复调用该方法会触发错误回调。
   *
   * > **说明：**
   * >
   * > 分析类型不支持动态修改。
   * > 当检测到画面有变化时，分析结果将自动销毁，可重新调用本接口启动分析。
   * > 该特性依赖设备能力，不支持该能力的情况下，将返回错误码。
   *
   * @param { ImageAnalyzerConfig } config - 执行AI分析所需要的入参，用于配置AI分析功能。
   *     异常值undefined或null按无效值处理。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 110001 - Image analysis feature is not supported.
   * @throws { BusinessError } 110002 - Image analysis is currently being executed.
   * @throws { BusinessError } 110003 - Image analysis is stopped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startImageAnalyzer(config: ImageAnalyzerConfig): Promise<void>;
  /**
   * 停止AI分析功能，AI分析展示的内容将被销毁。
   *
   * > **说明：**
   * >
   * > 在startImageAnalyzer方法未返回结果时调用本方法，会触发其错误回调。
   * > 该特性依赖设备能力。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stopImageAnalyzer(): void;
  /**
   * 构造Canvas画布对象，支持配置CanvasRenderingContext2D对象的参数和单位模式。
   *
   * @param { RenderingContextSettings } [settings] - 用来配置CanvasRenderingContext2D对象的参数，
   *     见RenderingContextSettings。
   *     异常值undefined和null按RenderingContextSettings的默认值处理。
   * @param { LengthMetricsUnit } [unit] - 用来配置CanvasRenderingContext2D对象的单位模式，
   *     配置后无法更改。异常值undefined、NaN和Infinity按默认值处理。默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
  /**
   * 订阅CanvasRenderingContext2D与Canvas组件发生绑定的场景。
   *
   * > **说明：**
   * >
   * > CanvasRenderingContext2D对象在同一时间只能与一个Canvas组件绑定。
   * > 当CanvasRenderingContext2D对象和Canvas组件发生绑定时，会触发'onAttach'回调，
   * > 表示可以获取到canvas。
   * > 避免在'onAttach'中执行绘制方法，应保证Canvas组件已经'onReady'再进行绘制。
   * > 触发'onAttach'回调的一般场景：
   * > 1、Canvas组件创建时绑定CanvasRenderingContext2D对象;
   * > 2、CanvasRenderingContext2D对象新绑定一个Canvas组件时。
   *
   * @param { VoidCallback } callback 订阅CanvasRenderingContext2D与Canvas组件发生绑定后
   *     触发的回调。异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onAttach(callback: VoidCallback): void;
  /**
   * 取消订阅CanvasRenderingContext2D与Canvas组件发生绑定的场景。
   *
   * @param { VoidCallback } [callback] 为空表示取消所有订阅CanvasRenderingContext2D与Canvas组件
   *     发生绑定后触发的回调。非空则取消订阅发生绑定对应的回调。
   *     异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offAttach(callback?: VoidCallback): void;
  /**
   * 订阅CanvasRenderingContext2D与Canvas组件解除绑定的场景。
   *
   * > **说明：**
   * >
   * > 当CanvasRenderingContext2D对象和Canvas组件解除绑定时，会触发'onDetach'回调，
   * > 表示应停止绘制行为。
   * > 触发'onDetach'回调的一般场景：
   * > 1、Canvas组件销毁时解除绑定CanvasRenderingContext2D对象;
   * > 2、CanvasRenderingContext2D对象新绑定一个Canvas组件，会先解除已有的绑定。
   *
   * @param { VoidCallback } callback 订阅CanvasRenderingContext2D与Canvas组件解除绑定后
   *     触发的回调。异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDetach(callback: VoidCallback): void;
  /**
   * 取消订阅CanvasRenderingContext2D与Canvas组件解除绑定的场景。
   *
   * @param { VoidCallback } [callback] 为空代表取消所有订阅CanvasRenderingContext2D与Canvas组件
   *     解除绑定后触发的回调。非空代表取消订阅解除绑定对应的回调。
   *     异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  offDetach(callback?: VoidCallback): void;

  /**
   * 从一个DrawingRenderingContext对象中获取一个CanvasRenderingContext2D对象，
   * 该CanvasRenderingContext2D对象与入参的DrawingRenderingContext对象绑定了相同的Canvas组件。
   *
   * > **说明：**
   * >
   * > - 从该接口获取的CanvasRenderingContext2D对象不允许作为参数创建Canvas组件，
   * > 否则会导致应用崩溃。
   * >
   * > - 当入参的DrawingRenderingContext对象未绑定Canvas组件时，将返回错误码。
   *
   * @param { DrawingRenderingContext } drawingContext - 一个DrawingRenderingContext类型的对象。
   * @param { RenderingContextOptions } [options] - 渲染上下文的配置选项。
   *     默认值：{ antialias: false }。
   * @returns { CanvasRenderingContext2D } - 返回一个CanvasRenderingContext2D对象，
   *     其与入参的DrawingRenderingContext绑定了相同的Canvas组件。
   * @throws { BusinessError } 103702 - The drawingContext is not bound to a canvas component.
   * @static
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static getContext2DFromDrawingContext(drawingContext: DrawingRenderingContext, options?: RenderingContextOptions): CanvasRenderingContext2D;
}

/**
 * 使用OffscreenCanvasRenderingContext2D在Canvas上进行离屏绘制，
 * 绘制对象可以是形状、文本、图片等。离屏绘制是指将需要绘制的内容先绘制在缓存区，
 * 然后将其转换成图片，一次性绘制到Canvas上。离屏绘制使用CPU进行绘制，
 * 绘制速度较慢，对绘制速度有要求的场景应避免使用离屏绘制。
 *
 * @extends CanvasRenderer
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer {
  /**
   * 生成一个包含图片展示的URL，该接口存在内存拷贝行为，高耗时，应避免频繁使用。
   *
   * @param { string } [type] - 用于指定图像格式。可选参数为："image/png"，"image/jpeg"，
   *     "image/webp"。异常值undefined或null按默认值处理。默认值：image/png。
   * @param { double } [quality] - 在指定图片格式为image/jpeg或image/webp的情况下，
   *     可以从0到1的区间内选择图片的质量。如果超出取值范围，
   *     将会使用默认值0.92。异常值undefined、null、NaN和Infinity按默认值处理。
   *     默认值：0.92。
   * @returns { string } 图像的URL地址。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  toDataURL(type?: string, quality?: double): string;
  /**
   * 在离屏画布最近渲染的图像上创建一个ImageBitmap对象。
   *
   * @returns { ImageBitmap | undefined } 存储离屏画布上渲染的像素数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transferToImageBitmap(): ImageBitmap | undefined;
  /**
   * 构造离屏Canvas画布对象，支持配置画布宽高、OffscreenCanvasRenderingContext2D对象的参数
   * 和单位模式。
   *
   * @param { double } width - 离屏画布的宽度，默认单位：vp。
   *     异常值NaN和Infinity按无效值处理。
   * @param { double } height - 离屏画布的高度，默认单位：vp。
   *     异常值NaN和Infinity按无效值处理。
   * @param { RenderingContextSettings } [settings] - 用来配置OffscreenCanvasRenderingContext2D
   *     对象的参数，见RenderingContextSettings。
   *     异常值undefined按RenderingContextSettings的默认值处理。默认值：null。
   * @param { LengthMetricsUnit } [unit] - 用来配置OffscreenCanvasRenderingContext2D对象的单位模式，
   *     配置后无法动态更改。异常值undefined、NaN和Infinity按默认值处理。默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(width: double, height: double, settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
}
/**
 * OffscreenCanvas组件用于绘制自定义图形。
 * 使用Canvas组件或CanvasRenderingContext2D对象时，渲染、动画和用户交互通常发生在应用程序的主线程上，
 * 与画布动画和渲染相关的计算可能会影响应用程序性能。
 * OffscreenCanvas提供了一个可以在屏幕外渲染的画布，这样可以在单独的线程中运行一些任务，
 * 从而避免影响应用程序主线程性能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class OffscreenCanvas {
  /**
   * OffscreenCanvas组件的高度。默认单位为vp。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get height(): double;
  /**
   * OffscreenCanvas组件的高度。
   *
   * @param { double } height - OffscreenCanvas组件的高度。
   *     异常值NaN和Infinity按无效值处理。默认单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set height(height: double);
  /**
   * OffscreenCanvas组件的宽度。默认单位为vp。
   *
   * @returns { double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get width(): double;
  /**
   * OffscreenCanvas组件的宽度。
   *
   * @param { double } width - OffscreenCanvas组件的宽度。
   *     异常值NaN和Infinity按无效值处理。默认单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set width(width: double);
  /**
   * 从OffscreenCanvas组件中最近渲染的图像创建一个ImageBitmap对象。
   *
   * @returns { ImageBitmap | undefined } 创建的ImageBitmap对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  transferToImageBitmap(): ImageBitmap | undefined;
  /**
   * 返回OffscreenCanvas组件的绘图上下文。
   *
   * @param { '2d' } contextType - OffscreenCanvas组件绘图上下文的类型，当前仅支持"2d"类型。
   *     "2d"：创建一个表示二维渲染上下文的OffscreenCanvasRenderingContext2D对象。
   *     异常值undefined和null按无效值处理，当前接口返回undefined。
   * @param { RenderingContextSettings } [options] - 用来配置OffscreenCanvasRenderingContext2D
   *     对象的参数，见RenderingContextSettings。
   *     异常值undefined和null按RenderingContextSettings的默认值处理。默认值：null。
   * @returns { OffscreenCanvasRenderingContext2D } OffscreenCanvas组件的绘图上下文。
   *     如果getContext方法的入参contextType为"2d"以外类型（包括null或者undefined），
   *     返回undefined，使用前应判断返回值是否为undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  getContext(contextType: '2d', options?: RenderingContextSettings): OffscreenCanvasRenderingContext2D;
  /**
   * 构造用于创建离屏画布对象的OffscreenCanvas，支持配置OffscreenCanvas的单位模式。
   *
   * @param { double } width - OffscreenCanvas组件的宽度。
   *     异常值NaN和Infinity按无效值处理。默认单位为vp。
   * @param { double } height - OffscreenCanvas组件的高度。
   *     异常值NaN和Infinity按无效值处理。默认单位为vp。
   * @param { LengthMetricsUnit } [unit] - 用来配置OffscreenCanvas对象的单位模式，
   *     配置后无法动态更改。异常值NaN和Infinity按默认值处理。默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(width: double, height: double, unit?: LengthMetricsUnit);
}

/**
 * DrawingRenderingContext对象与Canvas组件绑定后，可在Canvas组件上进行绘制，
 * 绘制对象可以是形状、文本、图片等。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DrawingRenderingContext {
  /**
   * 获取DrawingRenderingContext的大小。
   *
   * @returns { Size } DrawingRenderingContext的尺寸信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get size(): Size;
  /**
   * 获取绘制内容的画布对象。
   *
   * @returns { DrawingCanvas | undefined } 绘制内容的画布对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get canvas(): DrawingCanvas | undefined;
  /**
   * 使组件无效，触发组件的重新渲染。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  invalidate(): void;
  /**
   * 构造使用drawing接口进行绘制的Canvas画布对象，支持配置DrawingRenderingContext对象的单位模式。
   *
   * @param { LengthMetricsUnit } [unit] - 用来配置DrawingRenderingContext对象的单位模式，
   *     配置后无法更改。异常值undefined、NaN和Infinity按默认值处理。默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(unit?: LengthMetricsUnit);
}

/**
 * 定义Canvas的具体配置参数。
 *
 * @interface CanvasParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CanvasParams {
  /**
   * 用于描述Canvas绘制时所采用的单位模式。仅可在创建Canvas时设置，后续不可修改。
   * 默认值：LengthMetricsUnit.DEFAULT，undefined表示设置为默认值。
   *
   * @type { ?LengthMetricsUnit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unit?: LengthMetricsUnit;

  /**
   * 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。
   *
   * @type { ?ImageAIOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * 提供画布组件，用于自定义绘制图形。
 *
 * @extends CommonMethod
 * @interface CanvasAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export declare interface CanvasAttribute extends CommonMethod {
  /**
   * Canvas组件初始化完成或者发生大小变化时的事件回调。
   * 当该事件被触发时画布被清空，该事件之后Canvas组件宽高确定且可获取，
   * 可使用Canvas相关API进行绘制。当Canvas组件仅发生位置变化时，
   * 只触发onAreaChange事件，不触发onReady事件。
   * onAreaChange事件在onReady事件后触发。
   *
   * @param { Callback<DrawingRenderingContext | undefined> | undefined } event -
   *     Canvas组件初始化完成或者发生大小变化时的回调事件。
   *     关于Callback<DrawingRenderingContext | undefined>类型的入参：
   *     1. 只有使用CanvasParams创建的Canvas组件在该回调中返回DrawingRenderingContext对象，
   *     否则返回undefined。
   *     2. 该回调返回的DrawingRenderingContext对象不允许作为参数创建Canvas组件，
   *     否则会导致应用崩溃。
   *     取值为undefined时，不使用回调函数。
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onReady(event: Callback<DrawingRenderingContext | undefined> | undefined): this;
  /**
   * 设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能。
   * 需要搭配CanvasRenderingContext2D中的startImageAnalyzer和stopImageAnalyzer一起使用。
   * 不能和overlay属性同时使用，两者同时设置时overlay中CustomBuilder属性将失效。
   * 该特性依赖设备能力。
   *
   * @param { boolean | undefined } enable - 组件支持AI分析，需要组件内容支持主体识别、
   *     文字识别或对象查找。设置为true时，组件可进行AI分析，
   *     设置为false时，组件不可进行AI分析。
   *     异常值null和undefined按默认值处理。默认值：false。
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  enableAnalyzer(enable: boolean | undefined): this;
  /**
   * Set Canvas options.
   *
   * @param { CanvasRenderingContext2D | DrawingRenderingContext } [context] - Canvas context object.
   * @param { ImageAIOptions } [imageAIOptions] - Options for AI analyzer.
   * @returns { CanvasAttribute } Returns instance of CanvasAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setCanvasOptions(context?: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions?: ImageAIOptions): this;
  /**
   * Set Canvas options.
   *
   * @param { CanvasParams } params - Parameters for creating Canvas.
   * @returns { CanvasAttribute } Returns instance of CanvasAttribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  default setCanvasOptions(params: CanvasParams): this;
  /**
   * Call attributeModifier.
   *
   * @param { AttributeModifier<CanvasAttribute> | AttributeModifier<CommonMethod> | undefined } modifier
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  attributeModifier(modifier: AttributeModifier<CanvasAttribute> | AttributeModifier<CommonMethod> | undefined): this;
}

/**
 * 创建Canvas组件时，最大面积不超过10000px*10000px，超过最大面积则无法正常创建。
 * CanvasRenderingContext2D: 不支持多个Canvas共用一个CanvasRenderingContext2D对象。
 * DrawingRenderingContext: 不支持多个Canvas共用一个DrawingRenderingContext对象。
 * 异常值null和undefined按未设置context处理。
 *
 * @param { CanvasRenderingContext2D | DrawingRenderingContext } [context] -
 *     Canvas组件的绘图上下文。
 * @param { ImageAIOptions } [imageAIOptions] - 给组件设置一个AI分析选项，
 *     通过此项可配置分析类型或绑定一个分析控制器。
 *     异常值null和undefined按ImageAIOptions的默认值处理，
 *     默认取值为{ type: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT],
 *     aiController: new ImageAnalyzerController() }，
 *     即开启主体识别和文字识别功能。
 * @returns { CanvasAttribute } The attribute of the Canvas.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Canvas(
  context?: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions?: ImageAIOptions
): CanvasAttribute;

/**
 * 使用CanvasParams创建不缓存指令的Canvas组件。
 * 创建Canvas组件时，最大面积不超过10000px*10000px，超过最大面积则无法正常创建。
 * Canvas组件未设置固定尺寸时，默认扩展至其最大可用尺寸。
 *
 * > **说明：**
 * >
 * > - 使用本接口创建的Canvas组件将在onReady回调的入参中返回一个
 * > DrawingRenderingContext对象，可用于在该Canvas组件上进行绘制。
 * >
 * > - 使用这个接口创建的Canvas组件在组件不可见时将不响应绘制指令。
 * >
 * > - 不可见场景主要包括组件所在的页面进入后台、组件滑到窗口外、
 * > 设置visibility属性为隐藏等，不包括组件被其他组件或是其他窗口遮挡导致不可见的场景。
 *
 * @param { CanvasParams } params - Canvas组件的构造参数。
 * @returns { CanvasAttribute } The attribute of the Canvas.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function Canvas(
  params: CanvasParams
): CanvasAttribute;

/**
 * Defines Canvas Component.
 *
 * @param { CustomBuilderT<CanvasAttribute> } style_ - Canvas attribute instance.
 * @returns { CanvasAttribute }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 * @noninterop
 */
@Builder
export declare function Canvas(
    style_: CustomBuilderT<CanvasAttribute>
): CanvasAttribute;

