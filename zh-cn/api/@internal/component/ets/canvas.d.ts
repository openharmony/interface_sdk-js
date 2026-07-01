/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * ## 子组件
 *
 * 不支持。
 */

/**
 * 可用于向DrawingRenderingContext上绘制内容的画布对象。
 *
 * @typedef { import('../api/@ohos.graphics.drawing').default.Canvas } DrawingCanvas
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DrawingCanvas = import('../api/@ohos.graphics.drawing').default.Canvas;

/**
 * 定义用于确定点是在路径内还是路径外的填充样式算法的类型。取值类型为下表类型中的并集。
 *
 * @unionmember { "evenodd" } 奇偶规则。此规则通过从画布上的某点向任意方向发射一条射线，
 *     并统计图形路径与射线的交点数量来判断该点是否在图形内部。如果交点数量是奇数，则该点在图形内部，否则在图形外部。
 * @unionmember { "nonzero" } 非零规则。此规则通过从画布上的某点向任意方向发射一条射线，
 *     并检查图形路径与射线的交点来判断该点是否在图形内部。初始计数为0，为路径的每一段线段指定一个方向值，
 *     每当路径从左向右穿过射线时加1，从右向左穿过时减1。如果最终的结果是0，则该点在图形外部，否则在图形内部。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form [since 9]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasFillRule = "evenodd" | "nonzero";

/**
 * 定义绘制每条线段端点的类型。取值类型为下表类型中的并集。
 *
 * @unionmember { "butt" } 线条两端为平行线，不额外扩展。
 * @unionmember { "round" } 在线条两端延伸半个圆，直径等于线宽。
 * @unionmember { "square" } 在线条两端延伸一个矩形，宽度等于线宽的一半，高度等于线宽。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form [since 9]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasLineCap = "butt" | "round" | "square";

/**
 * 定义长度不为0的两个连接部分（线段、圆弧和曲线）的类型。取值类型为下表类型中的并集。
 *
 * @unionmember { "bevel" } 在线段相连处使用三角形为底填充，每个部分矩形拐角独立。
 * @unionmember { "miter" } 在相连部分的外边缘处进行延伸，使其相交于一点，形成一个菱形区域，
 *     该属性可以通过设置miterLimit属性展现效果。
 * @unionmember { "round" } 在线段相连处绘制一个扇形，扇形的圆角半径是线段的宽度。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form [since 9]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasLineJoin = "bevel" | "miter" | "round";

/**
 * 定义当前文本方向的类型。取值类型为下表类型中的并集。
 *
 * @unionmember { "inherit" } 继承canvas组件通用属性已设定的文本方向，若canvas组件未设置direction属性，则跟随系统文字方向。
 * @unionmember { "ltr" } 从左往右。
 * @unionmember { "rtl" } 从右往左。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form [since 9]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasDirection = "inherit" | "ltr" | "rtl";

/**
 * 定义文本对齐方式的类型。取值类型为下表类型中的并集。
 *
 * @unionmember { "center" } 文本居中对齐。
 * @unionmember { "end" } 文本对齐界线结束的地方。
 * @unionmember { "left" } 文本左对齐。
 * @unionmember { "right" } 文本右对齐。
 * @unionmember { "start" } 文本对齐界线开始的地方。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form [since 9]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasTextAlign = "center" | "end" | "left" | "right" | "start";

/**
 * 定义文本基线类型。取值类型为下表类型中的并集。
 *
 * @unionmember { "alphabetic" } 文本基线是标准的字母基线。
 * @unionmember { "bottom" } 文本基线在文本块的底部。与ideographic基线的区别在于ideographic基线不需要考虑下行字母。
 * @unionmember { "hanging" } 文本基线是悬挂基线。
 * @unionmember { "ideographic" } 文字基线是表意字基线；如果字符本身超出了alphabetic基线，
 *     那么ideographic基线位置在字符本身的底部。
 * @unionmember { "middle" } 文本基线在文本块的中间。
 * @unionmember { "top" } 文本基线在文本块的顶部。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form [since 9]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top";

/**
 * 定义图片平滑度类型。取值类型为下表类型中的并集。
 *
 * @unionmember { "high" } 高画质
 * @unionmember { "low" } 低画质
 * @unionmember { "medium" } 中画质
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @form [since 9]
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare type ImageSmoothingQuality = "high" | "low" | "medium";

/**
 * Import the frame node type object for Canvas.
 *
 * @typedef { import('../api/arkui/FrameNode').FrameNode } FrameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 13 dynamic
 */
declare type FrameNode = import('../api/arkui/FrameNode').FrameNode;

/**
 * 渐变对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasGradient {
  /**
   * 设置渐变断点值，包括偏移和颜色。
   *
   * @param { number } offset - 设置渐变点距离起点的位置占总体长度的比例，范围为[0, 1]。
   *    <br>设置offset小于0或offset大于1无渐变效果。
   *    <br>异常值undefined和null按无效值处理，忽略本次断点值。NaN会导致CanvasGradient异常，
   *    Infinity会导致整个CanvasGradient不生效。
   * @param { string } color - 设置渐变的颜色。颜色格式参考
   *    [ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor)中string类型说明。
   *    <br>未按格式设置颜色无渐变效果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  addColorStop(offset: number, color: string): void;

  /**
   * 设置渐变断点值，包括偏移和颜色。支持设置rgb或者argb格式颜色。支持通过传入
   * [ColorMetrics](docroot://reference/apis-arkui/js-apis-arkui-graphics.md#colormetrics12)
   * 类型设置P3色域颜色值，可在支持高色域的设备上获得更丰富的色彩表现。
   *
   * > **说明：**
   * >
   * > 仅[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
   * > 对象的[fillStyle](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#fillstyle)
   * > 和[strokeStyle](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#strokestyle)
   * > 属性支持设置P3广色域的CanvasGradient对象，且需要将Canvas组件所在窗口的色域模式通过
   * > [setWindowColorSpace](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowcolorspace9)
   * > 方法设置为广色域模式WIDE_GAMUT。
   *
   * @param { number } offset - 设置渐变点距离起点的位置占总体长度的比例，范围为[0, 1]。
   *    <br>设置offset小于0或offset大于1无渐变效果。
   *    <br>异常值undefined和null按无效值处理，不设置本次断点值。NaN会导致CanvasGradient异常，
   *    Infinity会导致整个CanvasGradient不生效。
   * @param { string | ColorMetrics } color - 设置渐变填充的颜色。
   *    <br>可以使用
   *    [colorWithSpace](docroot://reference/apis-arkui/js-apis-arkui-graphics.md#colorwithspace20)
   *    方法构造指定色域属性
   *    [ColorSpace](docroot://reference/apis-arkui/arkui-ts/ts-appendix-enums.md#colorspace20)
   *    为SRGB或DISPLAY_P3的颜色。每个渐变ColorMetrics的色域属性应当统一，设置不同色域的属性时将抛出异常，
   *    错误码：103701。
   *    <br>设置null和undefined无效，忽略本次断点值。
   * @throws { BusinessError } 103701 - The color's ColorSpace is not the same as the last color's.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  addColorStop(offset: number, color: string | ColorMetrics): void;
}

/**
 * 路径对象，提供基本的路径绘制方法。路径相关API的详细说明请参见CanvasRenderingContext2D中的描述。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasPath {
  /**
   * 绘制弧线路径。
   *
   * @param { number } x - 弧线圆心的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y - 弧线圆心的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } radius - 弧线的圆半径。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } startAngle - 弧线的起始弧度。单位：弧度。
   * @param { number } endAngle - 弧线的终止弧度。单位：弧度。
   * @param { boolean } [counterclockwise] - 是否逆时针绘制圆弧。<br>**true**：逆时针方向绘制圆弧。
   *    <br>**false**：顺时针方向绘制圆弧。<br>默认值：**false**，设置**null**或**undefined**按默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;

  /**
   * 依据圆弧经过的点和圆弧半径创建圆弧路径。
   *
   * @param { number } x1 - 圆弧经过的第一个点的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y1 - 圆弧经过的第一个点的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } x2 - 圆弧经过的第二个点的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y2 - 圆弧经过的第二个点的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } radius - 圆弧的圆半径值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

  /**
   * 创建三次贝塞尔曲线的路径。
   *
   * @param { number } cp1x - 第一个贝塞尔参数的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } cp1y - 第一个贝塞尔参数的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } cp2x - 第二个贝塞尔参数的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } cp2y - 第二个贝塞尔参数的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } x - 路径结束时的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y - 路径结束时的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

  /**
   * 将路径的当前点移回到路径的起点，当前点到起点间画一条直线。如果形状已经闭合或只有一个点，则此功能不执行任何操作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  closePath(): void;

  /**
   * 在规定的矩形区域绘制一个椭圆。
   *
   * @param { number } x - 椭圆圆心的x轴坐标。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y - 椭圆圆心的y轴坐标。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } radiusX - 椭圆x轴的半径长度。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } radiusY - 椭圆y轴的半径长度。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } rotation - 椭圆的旋转角度。单位：弧度。
   * @param { number } startAngle - 椭圆绘制的起始点角度。单位：弧度。
   * @param { number } endAngle - 椭圆绘制的结束点角度。单位：弧度。
   * @param { boolean } [counterclockwise] - 是否以逆时针方向绘制椭圆。<br>**true**：逆时针方向绘制椭圆。
   *    <br>**false**：顺时针方向绘制椭圆。<br>默认值：**false**，设置**null**或**undefined**按默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    counterclockwise?: boolean,
  ): void;

  /**
   * 从当前点绘制一条直线到目标点。
   *
   * @param { number } x - 目标点X轴坐标。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y - 目标点Y轴坐标。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineTo(x: number, y: number): void;

  /**
   * 将路径的当前坐标点移动到目标点，移动过程中不绘制线条。
   *
   * @param { number } x - 目标点X轴坐标。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y - 目标点Y轴坐标。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   *
   * > **说明：**
   * >
   * > API version 18之前，如果没有调用**moveTo**接口或传入无效参数，路径从(0,0)开始。
   * >
   * > API version 18及以后，如果没有调用**moveTo**接口或传入无效参数，路径将从第一个有效调用的
   * > **lineTo**、**arcTo**、**bezierCurveTo**或**quadraticCurveTo**的起始点开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  moveTo(x: number, y: number): void;

  /**
   * 创建二次贝塞尔曲线路径。
   *
   * @param { number } cpx - 贝塞尔参数的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } cpy - 贝塞尔参数的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } x - 路径结束时的x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y - 路径结束时的y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * 创建矩形路径。
   *
   * @param { number } x - 指定矩形的左上角x坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } y - 指定矩形的左上角y坐标值。<br>API version 18之前，设置NaN或Infinity时，整条路径
   *    不显示；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或
   *    undefined时当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } w - 指定矩形的宽度。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @param { number } h - 指定矩形的高度。<br>API version 18之前，设置NaN或Infinity时，整条路径不显示；
   *    设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时
   *    当前接口不生效，其他传入有效参数的路径方法正常绘制。默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rect(x: number, y: number, w: number, h: number): void;

  /**
   * 创建圆角矩形路径，此方法不会直接渲染内容，如需将圆角矩形绘制到画布上，可以使用fill或stroke方法。
   *
   * @param { number } x - 矩形左上角x坐标值。<br>设置**null**时，按照**0**处理；设置**undefined**时，
   *    按无效值处理，不进行绘制。<br>绘制完整矩形时，取值范围为[0, 画布宽度)。<br>默认单位：vp
   * @param { number } y - 矩形左上角y坐标值。<br>设置**null**时，按照**0**处理；设置**undefined**时，
   *    按无效值处理，不进行绘制。<br>绘制完整矩形时，取值范围为[0, 画布高度)。<br>默认单位：vp
   * @param { number } w - 矩形的宽度。负值表示从右向左绘制矩形。<br>设置**null**时，按照**0**处理；
   *    设置**undefined**时，按无效值处理，不进行绘制。<br>绘制完整矩形时，取值范围为[-x, 画布宽度 - x]。
   *    <br>默认单位：vp
   * @param { number } h - 矩形的高度。负值表示向上绘制。<br>设置**null**时，按照**0**处理；
   *    设置**undefined**时，按无效值处理，不进行绘制。<br>绘制完整矩形时，取值范围为[-y, 画布高度 - y]。
   *    <br>默认单位：vp
   * @param { number | Array<number> } [radii] - 矩形圆角的圆弧半径值或半径值列表。
   *    <br>参数类型为number时，表示矩形四个角的圆弧半径。
   *    <br>参数类型为Array<number>时，数组包含1到4个数字，含义如下：<br>[矩形四个角的圆弧半径]
   *    <br>[矩形左上角和右下角的圆弧半径，矩形右上角和左下角的圆弧半径]<br>[矩形左上角的圆弧半径，
   *    矩形右上角和左下角的圆弧半径，矩形右下角的圆弧半径]<br>[矩形左上角的圆弧半径，矩形右上角的圆弧半径，
   *    矩形右下角的圆弧半径，矩形左下角的圆弧半径]<br>如果**radii**中包含负数或数组元素个数不在[1,4]范围内，
   *    则上报错误码103701。<br>默认值：**0**。设置**null**或**undefined**时按默认值处理。<br>如果圆弧半径超过
   *    矩形的宽度和高度，将按比例缩小以匹配对应尺寸。<br>默认单位：vp
   * @throws { BusinessError } 103701 - 参数错误。可能的原因：
   * <br> 1. 参数radii数组的元素个数为0或超过4个。
   * <br> 2. 参数radii中包含负数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  roundRect(x: number, y: number, w: number, h: number, radii?: number | Array<number>): void;
}

/**
 * 路径对象，支持通过对象的接口进行路径的描述，并通过Canvas的stroke接口或者fill接口进行绘制。
 *
 * > **说明：**
 * >
 * > Path2D对象不支持重置已设置的路径，如需新路径可重新创建一个空的Path2D对象。
 * >
 * > Path2D对象的方法无法对
 * > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
 * > 和
 * > [OffscreenCanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-offscreencanvasrenderingcontext2d.md)
 * > 对象中设置的路径生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class Path2D extends CanvasPath {
  /**
   * 将另一个路径添加到当前的路径对象中，并使用Matrix2D对象对新添加的路径对象进行图形变换。
   *
   * @param { Path2D } path - 需要添加到当前路径的路径对象，路径单位：px。
   *    <br>异常值undefined和null按无效值处理。
   * @param { Matrix2D } transform - 新增路径的变换矩阵对象。
   *    <br>异常值undefined和null按无效值处理。
   *    <br>默认值：null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  addPath(path: Path2D, transform?: Matrix2D): void;

  /**
   * 构造一个空的Path2D对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor();

  /**
   * 构造一个空的Path2D对象，支持配置Path2D对象的单位模式。
   *
   * @param { LengthMetricsUnit } [unit] - 用来配置Path2D对象的单位模式，配置后无法动态更改，
   *    配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *    <br>异常值NaN和Infinity按默认值处理。
   *    <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(unit: LengthMetricsUnit);

  /**
   * 使用路径对象构造Path2D对象。
   *
   * @param { Path2D } path - 路径对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(path: Path2D);

  /**
   * 使用路径对象构造Path2D对象，支持配置Path2D对象的单位模式。
   *
   * @param { Path2D } path - 路径对象。
   * @param { LengthMetricsUnit } [unit] - 用来配置Path2D对象的单位模式，配置后无法动态更改，
   *    配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *    <br>异常值NaN和Infinity按默认值处理。
   *    <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(path: Path2D, unit: LengthMetricsUnit);

  /**
   * 使用符合SVG路径描述规范的路径字符串构造Path2D对象。
   *
   * @param { string } d - 符合SVG路径描述规范的路径字符串，格式参考
   *    [SVG路径描述规范](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)，
   *    异常值按无效值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(d: string);

  /**
   * 使用符合SVG路径描述规范的路径字符串构造Path2D对象，支持配置Path2D对象的单位模式。
   *
   * @param { string } description - 符合SVG路径描述规范的路径字符串，格式参考
   *    [SVG路径描述规范](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-path.md#svg路径描述规范)，
   *    异常值按无效值处理。
   * @param { LengthMetricsUnit } [unit] - 用来配置Path2D对象的单位模式，配置后无法动态更改，
   *    配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *    <br>异常值NaN和Infinity按默认值处理。
   *    <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(description: string, unit: LengthMetricsUnit);
}

/**
 * 一个Object对象，使用
 * [createPattern](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#createpattern)
 * 方法创建，通过指定图像和重复方式创建图片填充的模板。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface CanvasPattern {
  /**
   * 使用Matrix2D对象作为参数，对当前CanvasPattern进行矩阵变换。
   *
   * @param { Matrix2D } transform - 转换矩阵。
   *    <br>异常值undefined和null按无效值不做矩阵变换处理。
   *    <br>默认值：不做矩阵变换。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(transform?: Matrix2D): void;
}

/**
 * 文本的尺寸信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface TextMetrics {
  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的矩形边界顶部的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxAscent: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的矩形边界底部的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxDescent: number;

  /**
   * 只读属性，平行于基线，从CanvasRenderingContext2D.textAlign属性确定的对齐点到文本矩形边界左侧的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxLeft: number;

  /**
   * 只读属性，平行于基线，从CanvasRenderingContext2D.textAlign属性确定的对齐点到文本矩形边界右侧的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly actualBoundingBoxRight: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框的alphabetic基线的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly alphabeticBaseline: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框中em方块顶部的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly emHeightAscent: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框中em方块底部的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly emHeightDescent: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly fontBoundingBoxAscent: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly fontBoundingBoxDescent: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框的hanging基线的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly hangingBaseline: number;

  /**
   * 只读属性，从CanvasRenderingContext2D.textBaseline属性标明的水平线到线框的ideographic基线的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly ideographicBaseline: number;

  /**
   * 只读属性，文本方块的宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * 只读属性，文本方块的高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;
}

/**
 * ImageBitmap对象可以存储canvas渲染的像素数据。从API version 11开始，当应用创建
 * [Worker线程](docroot://arkts-utils/worker-introduction.md)，支持使用postMessage将ImageBitmap实例传到
 * Worker中进行绘制，并使用onmessage接收Worker线程发送的绘制结果进行显示。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ImageBitmap {
  /**
   * ImageBitmap的像素高度。
   * <br>默认单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;

  /**
   * ImageBitmap的像素宽度。
   * <br>默认单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * 释放ImageBitmap对象相关联的所有图形资源，并将ImageBitmap对象的宽高置为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  close(): void;

  /**
   * 通过ImageSrc创建ImageBitmap对象。
   *
   * @param { string } src - 图片的数据源支持本地图片。
   *    <br>1、string格式用于加载本地图片，例如ImageBitmap("common/images/example.jpg")，
   *    type为"entry"和"feature"类型的Module，其图片加载路径的起点为当前Module的ets文件夹，
   *    type为"har"和"shared"类型的Module，其图片加载路径的起点为当前构建的"entry"或"feature"
   *    类型Module的ets文件夹。
   *    <br/>type为"har"和"shared"类型的Module中推荐使用
   *    [ImageSource](docroot://media/image/image-decoding.md)图片解码方式将资源图片解码为统一的
   *    PixelMap加载使用。
   *    <br>2、支持本地图片类型：bmp、jpg、png、svg和webp类型。
   *    <br/>**说明：**<br/>- ArkTS卡片上不支持`http://`等网络相关路径前缀、`datashare://`路径前缀
   *    以及`file://data/storage`路径前缀的字符串。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(src: string);

  /**
   * 通过ImageSrc创建ImageBitmap对象，支持使用unit配置ImageBitmap对象的单位模式。
   *
   * @param { string } src - 图片的数据源支持本地图片。
   *    <br>1、string格式用于加载本地图片，例如ImageBitmap("common/images/example.jpg")，
   *    type为"entry"和"feature"类型的Module，其图片加载路径的起点为当前Module的ets文件夹，
   *    type为"har"和"shared"类型的Module，其图片加载路径的起点为当前构建的"entry"或"feature"
   *    类型Module的ets文件夹。
   *    <br/>type为"har"和"shared"类型的Module中推荐使用
   *    [ImageSource](docroot://media/image/image-decoding.md)图片解码方式将资源图片解码为统一的
   *    PixelMap加载使用。
   *    <br>2、支持本地图片类型：bmp、jpg、png、svg和webp类型。
   *    <br/>**说明：**<br/>- ArkTS卡片上不支持`http://`等网络相关路径前缀、`datashare://`路径前缀
   *    以及`file://data/storage`路径前缀的字符串。
   * @param { LengthMetricsUnit } [unit] - 用来配置ImageBitmap对象的单位模式，配置后无法动态更改，
   *    配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *    <br>异常值undefined、NaN和Infinity按默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(src: string, unit: LengthMetricsUnit);

  /**
   * 通过PixelMap创建ImageBitmap对象。
   *
   * @param { PixelMap } data - 图片的数据源支持PixelMap对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(data: PixelMap);

  /**
   * 通过PixelMap创建ImageBitmap对象，支持使用unit配置ImageBitmap对象的单位模式。
   *
   * @param { PixelMap } data - 图片的数据源支持PixelMap对象。
   * @param { LengthMetricsUnit } [unit] - 用来配置ImageBitmap对象的单位模式，配置后无法动态更改，
   *    配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(data: PixelMap, unit: LengthMetricsUnit);

  /**
   * 通过Resource创建ImageBitmap对象，支持使用unit配置ImageBitmap对象的单位模式。
   *
   * @param { Resource } data - 通过资源引用方式设置图片数据源。
   * @param { LengthMetricsUnit } [unit] - 用来配置ImageBitmap对象的单位模式，配置后无法动态更改。
   *    <br>默认值：LengthMetricsUnit.DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  constructor(data: Resource, unit?: LengthMetricsUnit);
}

/**
 * ImageData对象可以存储canvas渲染的像素数据。
 *
 * > **说明：**
 * >
 * > 创建ImageData时，宽高不超过16384px，最大面积不超过16000px*16000px，超过最大面积则无法正常绘制。
 * > 当创建面积超过536870911px时，返回值的width和height均为0px，data为undefined。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class ImageData {
  /**
   * 一维数组，保存了相应的颜色数据，数据值范围为0到255。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly data: Uint8ClampedArray;

  /**
   * 矩形区域实际像素高度。
   * <br>单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;

  /**
   * 矩形区域实际像素宽度。
   * <br>单位为px。
   *
   * > **说明：**
   * >
   * > 可使用[px2vp](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#px2vp12)
   * > 接口进行单位转换。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * 创建宽为width，高为height，像素为data的ImageData，如果data未定义，则填充值全为0的一维数组。
   *
   * @param { number } width - 矩形区域宽度，默认单位为vp。
   *    <br>异常值NaN和Infinity按0处理。
   * @param { number } height - 矩形区域高度，默认单位为vp。
   *    <br>异常值NaN和Infinity按0处理。
   * @param { Uint8ClampedArray } data - 一维数组，保存了相应的颜色数据，数据值范围为0到255。
   *    <br>传入异常值undefined时，data为undefined。
   *    <br/>默认值：值全为0的一维数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number, data?: Uint8ClampedArray);

  /**
   * 创建宽为width，高为height，像素为data的ImageData，如果data未定义，则填充值全为0的一维数组，
   * 支持使用unit配置ImageData对象的单位模式。
   *
   * @param { number } width - 矩形区域宽度，默认单位为vp。
   *    <br>异常值NaN和Infinity按0处理。
   * @param { number } height - 矩形区域高度，默认单位为vp。
   *    <br>异常值NaN和Infinity按0处理。
   * @param { Uint8ClampedArray } data - 一维数组，保存了相应的颜色数据，数据值范围为0到255。
   *    <br>传入异常值undefined时，data为undefined。
   *    <br/>默认值：值全为0的一维数组。
   * @param { LengthMetricsUnit } [unit] - 用来配置ImageData对象的单位模式，配置后无法动态更改，
   *    配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *    <br>异常值undefined、NaN和Infinity按默认值处理。
   *    <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(width: number, height: number, data?: Uint8ClampedArray, unit?: LengthMetricsUnit);
}

/**
 * 用来配置CanvasRenderingContext2D对象的参数，包括是否开启抗锯齿。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class RenderingContextSettings {
  /**
   * 表明canvas是否开启抗锯齿。
   * <br>异常值undefined按默认值处理。
   * <br>false：表示不开启抗锯齿功能，true：表示开启抗锯齿。
   * <br>默认值：false
   * <br>**说明：**<br>
   * 绘制文本默认开启抗锯齿效果，RenderingContextSettings的antialias无法影响绘制文本的抗锯齿效果，
   * 如需修改文本抗锯齿效果，请使用[antialias<sup>24+</sup>](#antialias24)接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  antialias?: boolean;

  /**
   * 构造CanvasRenderingContext2D对象，支持配置开启抗锯齿。
   *
   * @param { boolean } antialias - 表明canvas是否开启抗锯齿。
   *     <br>异常值undefined按默认值处理。
   *     <br>false：表示不开启抗锯齿功能，true：表示开启抗锯齿。
   *     <br>默认值：false
   *     <br>**说明：**<br>
   *     绘制文本默认开启抗锯齿效果，RenderingContextSettings的antialias无法影响绘制文本的抗锯齿效果，
   *     如需修改文本抗锯齿效果，请使用[antialias<sup>24+</sup>](#antialias24)接口。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(antialias?: boolean);
}

/**
 * 定义渲染上下文的具体配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface RenderingContextOptions {
  /**
   * 表明RenderingContext是否需要开启抗锯齿。
   * <br>取值为undefined时按默认值处理。
   * <br>true：开启抗锯齿；false：不开启抗锯齿。
   * <br>默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  antialias?: boolean;
}

/**
 * CanvasRenderingContext2D对象与Canvas组件绑定后，可在Canvas组件上绘制，绘制对象可以是形状、文本、图片等。
 *
 * > **说明：**
 * >
 * > * 建议使用时将CanvasRenderingContext2D对象与Canvas组件封装到同一个自定义组件中，保证两者一一对应且生命周期保持一致。
 * >
 * > * 本文绘制接口在调用时会存入被关联的Canvas组件的指令队列中。仅当当前帧进入渲染阶段且关联的Canvas组件处于可见状态时，
 * > 这些指令才会从队列中被提取并执行。因此，在Canvas组件不可见的情况下，应尽量避免频繁调用绘制接口，
 * > 以防止指令在队列中堆积，从而避免内存占用过大的问题。
 * >
 * > * Canvas组件的宽或高超过8000px时使用CPU渲染，会导致性能明显下降。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasRenderer extends CanvasPath {
  /**
   * 用于指定绘制文本时字母之间的间距，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 当使用LengthMetrics时：
   *
   * 字间距按照指定的单位设置；
   *
   * 不支持FP、PERCENT和LPX（按无效值处理）；
   *
   * 支持负数和小数，设为小数时字间距不四舍五入。
   *
   * 当使用string时：
   *
   * 不支持设置百分比（按无效值处理）；
   *
   * 支持负数和小数，设为小数时字间距不四舍五入；
   *
   * 若letterSpacing的赋值未指定单位（例如：**letterSpacing='10'**），
   * 且未指定LengthMetricsUnit时，默认单位设置为vp；
   *
   * 指定LengthMetricsUnit为px时，默认单位设置为px；
   *
   * 当letterSpacing的赋值指定单位时（例如：**letterSpacing='10vp'**），
   * 字间距按照指定的单位设置。
   *
   * 默认值：**0**（输入无效值时，字间距设为默认值）
   *
   * > **说明：**
   * >
   * > 推荐使用LengthMetrics，性能更好。
   *
   * @default 0vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  letterSpacing: LengthMetrics | string;

  /**
   * 设置透明度，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 范围为[0.0, 1.0]，0.0为完全透明，1.0为完全不透明。若给定值小于0.0，则取值0.0；
   * 若给定值大于1.0，则取值1.0。
   *
   * API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制。
   * API version 18及以后，设置NaN或Infinity时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   *
   * 默认值：**1.0**
   *
   * @default 1.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalAlpha: number;

  /**
   * 设置合成操作的类型，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 类型字段可选值有'source-over'，'source-atop'，'source-in'，'source-out'，
   * 'destination-over'，'destination-atop'，'destination-in'，'destination-out'，
   * 'lighter'，'copy'，'xor'。
   *
   * | 名称 | 描述 |
   * | ------ | ------ |
   * | source-over | 在现有绘制内容上显示新绘制内容，属于默认值。 |
   * | source-atop | 在现有绘制内容顶部显示新绘制内容。 |
   * | source-in | 在现有绘制内容中显示新绘制内容。 |
   * | source-out | 在现有绘制内容之外显示新绘制内容。 |
   * | destination-over | 在新绘制内容上方显示现有绘制内容。 |
   * | destination-atop | 在新绘制内容顶部显示现有绘制内容。 |
   * | destination-in | 在新绘制内容中显示现有绘制内容。 |
   * | destination-out | 在新绘制内容外显示现有绘制内容。 |
   * | lighter | 显示新绘制内容和现有绘制内容。 |
   * | copy | 显示新绘制内容而忽略现有绘制内容。 |
   * | xor | 使用异或操作对新绘制内容与现有绘制内容进行融合。 |
   *
   * 默认值：**'source-over'**
   *
   * @default source-over
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalCompositeOperation: string;

  /**
   * 在画布上绘制图像。
   *
   * @param { ImageBitmap | PixelMap } image - 图片资源，请参考ImageBitmap或PixelMap。<br>
   *    异常值undefined或null按无效值处理，不进行绘制。
   * @param { number } dx - 绘制区域左上角在x轴的位置。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *    不进行绘制。<br>默认单位：vp
   * @param { number } dy - 绘制区域左上角在y轴的位置。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *    不进行绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number): void;

  /**
   * 将图像拉伸或压缩到指定尺寸后绘制。
   *
   * @param { ImageBitmap | PixelMap } image - 图片资源，请参考ImageBitmap或PixelMap。<br>
   *    异常值undefined或null按无效值处理，不进行绘制。
   * @param { number } dx - 绘制区域左上角在x轴的位置。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *    不进行绘制。<br>默认单位：vp
   * @param { number } dy - 绘制区域左上角在y轴的位置。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，
   *    不进行绘制。<br>默认单位：vp
   * @param { number } dw - 绘制区域的宽度。当绘制区域的宽度和裁剪图像的宽度不一致时，将图像宽度拉伸或压缩为绘制区域
   *    的宽度。<br>负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } dh - 绘制区域的高度。当绘制区域的高度和裁剪图像的高度不一致时，将图像高度拉伸或压缩为绘制区域
   *    的高度。<br>负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  drawImage(image: ImageBitmap | PixelMap, dx: number, dy: number, dw: number, dh: number): void;

  /**
   * 将图像裁剪后拉伸或压缩到指定尺寸后绘制。
   *
   * @param { ImageBitmap | PixelMap } image - 图片资源，请参考ImageBitmap或PixelMap。<br>异常值undefined或null按无效值处理，不进行绘制。
   * @param { number } sx - 裁剪源图像时矩形左上角的x轴坐标。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } sy - 裁剪源图像时矩形左上角的y轴坐标。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } sw - 裁剪源图像的目标宽度。<br>负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } sh - 裁剪源图像的目标高度。<br>负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } dx - 绘制区域左上角在x轴的位置。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } dy - 绘制区域左上角在y轴的位置。<br>异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } dw - 绘制区域的宽度。当绘制区域的宽度和裁剪图像的宽度不一致时，将图像宽度拉伸或压缩为绘制区域的宽度。<br>负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } dh - 绘制区域的高度。当绘制区域的高度和裁剪图像的高度不一致时，将图像高度拉伸或压缩为绘制区域的高度。<br>负数、异常值undefined或null按0处理，NaN和Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  drawImage(
    image: ImageBitmap | PixelMap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number,
  ): void;

  /**
   * 创建一个绘制路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  beginPath(): void;

  /**
   * 设置当前路径为剪切路径。
   *
   * @param { CanvasFillRule } fillRule - 指定要剪切对象的规则。<br>可选参数为："nonzero"，"evenodd"。<br>异常值undefined或null按默认值处理。<br>默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clip(fillRule?: CanvasFillRule): void;

  /**
   * 设置指定路径为剪切路径。
   *
   * @param { Path2D } path - Path2D剪切路径。<br>异常值undefined或null按无效值处理。
   * @param { CanvasFillRule } fillRule - 指定要剪切对象的规则。<br>可选参数为："nonzero"，"evenodd"。<br>异常值undefined或null按默认值处理。<br>默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynami
   */
  clip(path: Path2D, fillRule?: CanvasFillRule): void;

  /**
   * 填充当前路径。
   *
   * @param { CanvasFillRule } fillRule - 指定要填充对象的规则。<br>可选参数为："nonzero"，"evenodd"。<br>异常值undefined或null按默认值处理。<br>默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fill(fillRule?: CanvasFillRule): void;

  /**
   * 填充指定路径。
   *
   * @param { Path2D } path - Path2D填充路径。<br>异常值undefined或null按无效值处理。
   * @param { CanvasFillRule } fillRule - 指定要填充对象的规则。<br>可选参数为："nonzero"，"evenodd"。<br>异常值undefined或null按默认值处理。<br>默认值："nonzero"
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fill(path: Path2D, fillRule?: CanvasFillRule): void;

  /**
   * 描边当前路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stroke(): void;

  /**
   * 描边指定路径。
   *
   * @param { Path2D } path - 需要绘制的Path2D。<br>异常值undefined或null按无效值处理，不进行绘制。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  stroke(path: Path2D): void;

  /**
   * 指定绘制的填充色，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * - 类型为string时，表示设置填充区域的颜色，颜色格式参考[ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor)中string类型说明。
   *
   * - 类型为number时，表示设置填充区域的颜色，不支持设置全透明色，颜色格式参考[ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor)中number类型说明。
   *
   * - 类型为[CanvasGradient]{@link ./canvasgradient}时，表示渐变对象，使用[createLinearGradient]{@link ./createlineargradient}方法创建。
   *
   * - 类型为[CanvasPattern]{@link ./canvaspattern}时，使用[createPattern]{@link ./createpattern}方法创建。
   *
   *   默认值：'#000000'（黑色）
   *
   *   异常值设置无效，保持设置前效果。
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * @default #000000 (black)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fillStyle: string | number | CanvasGradient | CanvasPattern;

  /**
   * 设置线条的颜色，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * - 类型为string时，表示设置线条使用的颜色，颜色格式参考[ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor)中string类型说明。
   *
   * - 类型为number时，表示设置线条使用的颜色，不支持设置全透明色，颜色格式参考[ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor)中number类型说明。
   *
   * - 类型为[CanvasGradient]{@link ./canvasgradient}时，表示渐变对象，使用[createLinearGradient]{@link ./createlineargradient}方法创建。
   *
   * - 类型为[CanvasPattern]{@link ./canvaspattern}时，使用[createPattern]{@link ./createpattern}方法创建。
   *
   *   默认值：'#000000'（黑色）
   *
   *   异常值设置无效，保持设置前效果。
   *
   * @type { string | number | CanvasGradient | CanvasPattern }
   * @default #000000 (black)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeStyle: string | number | CanvasGradient | CanvasPattern;

  /**
   * 创建一个线性渐变。
   *
   * @param { number } x0 - 起点的x轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } y0 - 起点的y轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } x1 - 终点的x轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } y1 - 终点的y轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @returns { CanvasGradient } 新的CanvasGradient对象，用于在画布上创建渐变。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;

  /**
   * 根据指定的源图像和重复模式创建一个用于图像填充的模式。
   *
   * @param { ImageBitmap } image - 图源对象，具体参考ImageBitmap对象。<br>异常值undefined或null按无效值处理。
   * @param { string | null } repetition - 设置图像重复的方式：<br>'repeat'：沿x轴和y轴重复绘制图像；<br>'repeat-x'：沿x轴重复绘制图像；<br>'repeat-y'：沿y轴重复绘制图像；<br>'no-repeat'：不重复绘制图像；<br>'clamp'：在原始边界外绘制时，超出部分使用边缘的颜色绘制；<br>'mirror'：沿x轴和y轴重复翻转绘制图像。<br>异常值undefined或null按无效值处理。
   * @returns { CanvasPattern | null } 通过指定图像和重复方式创建图片填充的模板对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createPattern(image: ImageBitmap, repetition: string | null): CanvasPattern | null;

  /**
   * 创建一个径向渐变。
   *
   * @param { number } x0 - 起始圆的圆心x轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } y0 - 起始圆的圆心y轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } r0 - 起始圆的半径，必须是非负有限数。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } x1 - 终止圆的圆心x轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } y1 - 终止圆的圆心y轴坐标。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } r1 - 终止圆的半径，必须是非负有限数。<br>异常值undefined或null时接口返回undefined。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @returns { CanvasGradient } 新的CanvasGradient对象，用于在画布上创建渐变。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;

  /**
   * 创建一个锥形渐变。
   *
   * @param { number } startAngle - 渐变起始角度。角度测量从中心右侧水平方向开始，顺时针移动。<br>异常值undefined或null按0处理。NaN和Infinity按无效值处理。<br>单位：弧度
   * @param { number } x - 锥形渐变圆心的x轴坐标。<br>异常值undefined或null按0处理。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @param { number } y - 锥形渐变圆心的y轴坐标。<br>异常值undefined或null按0处理。NaN和Infinity按无效值处理。<br>默认单位：vp
   * @returns { CanvasGradient } 新的CanvasGradient对象，用于在画布上创建渐变。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  createConicGradient(
    startAngle: number,
    x: number,
    y: number
  ): CanvasGradient;

  /**
   * 设置图像的滤镜，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 支持的滤镜效果如下：
   *
   * - **'none'**: 无滤镜效果。
   * - **'blur(\<length>)'**：给图像设置高斯模糊，取值范围≥0，支持单位px、vp、rem，默认值：blur(0px)。
   * - **'brightness([\<number>\|\<percentage>])'**：给图片应用一种线性乘法，使其看起来更亮或更暗，支持数字和百分比参数，取值范围≥0，默认值：brightness(1)。
   * - **'contrast([\<number>\|\<percentage>])'**：调整图像的对比度，支持数字和百分比参数，取值范围≥0，默认值：contrast(1)。
   * - **'grayscale([\<number>\|\<percentage>])'**：将图像转换为灰度图像，支持数字和百分比参数，取值范围[0, 1]，默认值：grayscale(0)。
   * - **'hue-rotate(\<angle>)'**：给图像应用色相旋转，取值范围0deg-360deg，默认值：hue-rotate(0deg)。
   * - **'invert([\<number>\|\<percentage>])'**：反转输入图像，支持数字和百分比参数，取值范围[0, 1]，默认值：invert(0)。
   * - **'opacity([\<number>\|\<percentage>])'**：调整图像的透明程度，支持数字和百分比参数，取值范围[0, 1]，默认值：opacity(1)。
   * - **'saturate([\<number>\|\<percentage>])'**：转换图像饱和度，支持数字和百分比参数，取值范围≥0，默认值：saturate(1)。
   * - **'sepia([\<number>\|\<percentage>])'**：将图像转换为深褐色，支持数字和百分比参数，取值范围[0, 1]，默认值：sepia(0)。
   *
   * @default none
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  filter: string;

  /**
   * 创建一个指定大小的空白ImageData对象。此接口涉及耗时的内存拷贝，请避免频繁调用。
   *
   * @param { number } sw - ImageData对象的宽度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number } sh - ImageData对象的高度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @returns { ImageData } 新的ImageData对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createImageData(sw: number, sh: number): ImageData;

  /**
   * 创建一个与已有ImageData对象具有相同宽高的ImageData对象。此接口涉及耗时的内存拷贝，请避免频繁调用。
   *
   * @param { ImageData } imageData - 已有的ImageData对象。<br>异常值undefined和null按宽高为0的ImageData处理。
   * @returns { ImageData } 新的ImageData对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  createImageData(imageData: ImageData): ImageData;

  /**
   * 获取画布上指定区域内的像素数据创建一个ImageData对象。此接口涉及耗时的内存拷贝，请避免频繁调用。
   *
   * @param { number } sx - 输出区域左上角的x轴坐标。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number } sy - 输出区域左上角的y轴坐标。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number } sw - 输出区域的宽度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number } sh - 输出区域的高度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @returns { ImageData } 新的ImageData对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;

  /**
   * 获取画布上指定区域内的像素数据创建一个PixelMap对象。此接口涉及耗时的内存拷贝，请避免频繁调用。
   *
   * @param { number } sx - 输出区域左上角的x轴坐标。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number } sy - 输出区域左上角的y轴坐标。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number } sw - 输出区域的宽度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number } sh - 输出区域的高度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @returns { PixelMap } PixelMap对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getPixelMap(sx: number, sy: number, sw: number, sh: number): PixelMap;

  /**
   * 将一个ImageData对象放到画布上的矩形区域。
   *
   * @param { ImageData } imageData - 含有像素数据的ImageData对象，用于放到画布上。<br>异常值undefined和null按无效值处理，不进行绘制。
   * @param { number | string } dx - 画布上矩形区域的x轴偏移量。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number | string } dy - 画布上矩形区域的y轴偏移量。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  putImageData(imageData: ImageData, dx: number | string, dy: number | string): void;

  /**
   * 将裁剪后的ImageData数据填充到新的矩形区域。
   *
   * @param { ImageData } imageData - 含有像素数据的ImageData对象，用于放到画布上。<br>异常值undefined和null按无效值处理，不进行绘制。
   * @param { number | string } dx - 画布上矩形区域的x轴偏移量。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number | string } dy - 画布上矩形区域的y轴偏移量。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number | string } dirtyX - 源图像矩形区域左上角相对于源图像左上角的x轴偏移量。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number | string } dirtyY - 源图像矩形区域左上角相对于源图像左上角的y轴偏移量。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number | string } dirtyWidth - 源图像裁剪矩形的宽度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @param { number | string } dirtyHeight - 源图像裁剪矩形的高度。<br>异常值undefined、null、NaN和Infinity按0处理。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  putImageData(
    imageData: ImageData,
    dx: number | string,
    dy: number | string,
    dirtyX: number | string,
    dirtyY: number | string,
    dirtyWidth: number | string,
    dirtyHeight: number | string
  ): void;

  /**
   * 用于设置绘制图片时是否进行图像平滑度调整，true为启用，false为不启用，此属性为只写属性，
   * 可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**true**
   * @default true
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  imageSmoothingEnabled: boolean;

  /**
   * imageSmoothingEnabled为true时，用于设置图像平滑度，此属性为只写属性，
   * 可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**"low"**
   * @default low
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  imageSmoothingQuality: ImageSmoothingQuality;

  /**
   * 指定线端点的样式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   * @default butt
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineCap: CanvasLineCap;

  /**
   * 设置画布的虚线偏移量，精度为float，仅当设置setLineDash时属性才生效，此属性为只写属性，
   * 可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * API version 18之前，设置NaN或Infinity时，设置了虚线样式的线条绘制出来是实线。
   * API version 18及以后，设置NaN或Infinity时当前接口不生效，设置了虚线样式的线条绘制出来是虚线。
   *
   * 默认值：**0.0**
   *
   * 默认单位：vp
   *
   * 异常值NaN和Infinity按默认值处理。
   *
   * @default 0.0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineDashOffset: number;

  /**
   * 指定线段间相交的交点样式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   * <br>可选值为：
   * <br>- **'round'**：在线段相连处绘制一个扇形，扇形的圆角半径是线段的宽度。
   * <br>- **'bevel'**：在线段相连处使用三角形为底填充，每个部分矩形拐角独立。
   * <br>- **'miter'**：在相连部分的外边缘处进行延伸，使其相交于一点，形成一个菱形区域，
   * 该属性可以通过设置miterLimit属性展现效果。
   * <br>默认值：**'miter'**
   *
   * @default miter
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineJoin: CanvasLineJoin;

  /**
   * 设置绘制线条的宽度，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**1**（px）
   *
   * 默认单位：vp
   *
   * lineWidth取值不支持0和负数，0、负数和NaN按默认值处理，Infinity会导致lineWidth属性异常，不进行绘制。
   *
   * @default 1(px)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  lineWidth: number;

  /**
   * 设置斜接面限制值，该值指定了线条相交处内角和外角的距离，仅当设置了lineJoin为miter才生效，
   * 此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**10px**
   *
   * 单位：px
   *
   * miterLimit取值不支持0和负数，0、负数和NaN按默认值处理，Infinity会导致miterLimit属性异常。
   *
   * @default 10(px)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  miterLimit: number;

  /**
   * 获取虚线样式。
   *
   * @returns { number[] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getLineDash(): number[];

  /**
   * 设置虚线样式。
   *
   * @param { number[] } segments - 一个数字数组，指定交替绘制线和间距的距离。<br>异常值undefined和null按无效值处理。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setLineDash(segments: number[]): void;

  /**
   * 删除指定区域内的绘制内容。
   *
   * @param { number } x - 指定矩形上的左上角x坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } y - 指定矩形上的左上角y坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } w - 指定矩形的宽度。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } h - 指定矩形的高度。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  clearRect(x: number, y: number, w: number, h: number): void;

  /**
   * 填充一个矩形。
   *
   * @param { number } x - 指定矩形左上角点的x坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } y - 指定矩形左上角点的y坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } w - 指定矩形的宽度。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } h - 指定矩形的高度。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fillRect(x: number, y: number, w: number, h: number): void;

  /**
   * 绘制具有边框的矩形，矩形内部不填充。
   *
   * @param { number } x - 指定矩形的左上角x坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } y - 指定矩形的左上角y坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } w - 指定矩形的宽度。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } h - 指定矩形的高度。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeRect(x: number, y: number, w: number, h: number): void;

  /**
   * 设置绘制阴影时的模糊级别，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 值越大越模糊，精度为float，取值范围≥0。
   *
   * 默认值：**0.0**
   *
   * 单位：px
   *
   * shadowBlur取值不支持负数，负数、NaN和Infinity按默认值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowBlur: number;

  /**
   * 设置绘制阴影时的阴影颜色，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 颜色格式参考[ResourceColor](docroot://reference/apis-arkui/arkui-ts/ts-types.md#resourcecolor)中string类型说明。
   *
   * 默认值：透明黑色
   *
   * @default transparent black
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowColor: string;

  /**
   * 设置绘制阴影时和原有对象的水平偏移值，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**0.0**
   *
   * 默认单位：vp
   *
   * 异常值NaN和Infinity按默认值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowOffsetX: number;

  /**
   * 设置绘制阴影时和原有对象的垂直偏移值，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**0.0**
   *
   * 默认单位：vp
   *
   * 异常值NaN和Infinity按默认值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  shadowOffsetY: number;

  /**
   * 恢复之前保存的绘制上下文。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  restore(): void;

  /**
   * 保存所有画布状态到栈中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  save(): void;

  /**
   * 绘制填充类文本。
   *
   * @param { string } text - 需要绘制的文本内容。<br>异常值undefined或null按无效值处理，不进行绘制。
   * @param { number } x - 文本绘制起点的x轴坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } y - 文本绘制起点的y轴坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } [maxWidth] - 指定文本允许的最大宽度。<br>异常值null按无效值处理，不进行绘制，undefined、NaN或Infinity按默认值处理。<br>默认值：不限制宽度。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  fillText(text: string, x: number, y: number, maxWidth?: number): void;

  /**
   * 该方法返回一个文本测算的对象，通过该对象可以获取指定文本的宽度值。不同设备上获取的宽度值可能不同。
   *
   * @param { string } text - 需要进行测量的文本。<br>传入异常值undefined或null时按"undefined"或"null"计算。
   * @returns { TextMetrics } 文本的尺寸信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  measureText(text: string): TextMetrics;

  /**
   * 绘制描边类文本。
   *
   * @param { string } text - 需要绘制的文本内容。<br>异常值undefined或null按无效值处理，不进行绘制。
   * @param { number } x - 文本绘制起点的x轴坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } y - 文本绘制起点的y轴坐标。<br>异常值undefined、null、NaN或Infinity按无效值处理，不进行绘制。<br>默认单位：vp
   * @param { number } [maxWidth] - 需要绘制的文本的最大宽度。<br>异常值null按无效值处理，不进行绘制，undefined、NaN或Infinity按默认值处理。<br>默认单位：vp<br>默认值：不限制宽度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  strokeText(text: string, x: number, y: number, maxWidth?: number): void;

  /**
   * 用于设置绘制文字时使用的文字方向，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**"inherit"**
   * @default inherit
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  direction: CanvasDirection;

  /**
   * 设置文本绘制中的字体样式，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 语法：ctx.font&nbsp;=&nbsp;'font-style&nbsp;font-weight&nbsp;font-size&nbsp;font-family'
   * <br>-&nbsp;font-style(可选)，用于指定字体样式，支持如下几种样式：'normal','italic'。
   * <br>-&nbsp;font-weight(可选)，用于指定字体的粗细，支持如下几种类型：'normal',&nbsp;'bold',
   * &nbsp;'bolder',&nbsp;'lighter',&nbsp;100,&nbsp;200,&nbsp;300,&nbsp;400,&nbsp;500,&nbsp;600,
   * &nbsp;700,&nbsp;800,&nbsp;900。
   * <br>-&nbsp;font-size(可选)，指定字号和行高，单位支持px、vp。使用时需要添加单位。
   * <br>-&nbsp;font-family(可选)，指定字体系列，支持如下几种类型：'sans-serif',&nbsp;'serif',
   * &nbsp;'monospace'。
   *
   * 从API version 20开始，支持通过该接口设置注册过的自定义字体（DevEco Studio的预览器不支持显示自定义字体）。
   * 自定义字体注册有以下两种方式。
   * 一种是通过ArkUI的异步接口
   * this.uiContext.getFont().[registerFont](docroot://reference/apis-arkui/arkts-apis-uicontext-font.md#registerfont)
   * 注册，调用后立即绘制可能会导致自定义字体不生效。
   * 另一种是直接调用字体引擎的
   * fontCollection.[loadFontSync](docroot://reference/apis-arkgraphics2d/js-apis-graphics-text.md#loadfontsync)
   * 接口来注册自定义字体到字体引擎。在直接调用字体引擎接口注册自定义字体时，fontCollection的实例需要是
   * text.FontCollection.getGlobalInstance()，因为组件默认会从该实例加载字体。
   * 如果使用其他实例，可能会导致自定义字体不生效。
   *
   * @default normal normal 14px sans-serif
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  font: string;

  /**
   * 设置文本绘制中的文本对齐方式，此属性为只写属性，可通过赋值语句设置其值，
   * 但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * ltr布局模式下'start'和'left'一致，rtl布局模式下'start'和'right'一致。
   *
   * 默认值：**'left'**
   *
   * @default left
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  textAlign: CanvasTextAlign;

  /**
   * 设置文本绘制中的水平对齐方式，此属性为只写属性，可通过赋值语句设置其值，但无法通过读取操作获取其当前值，若尝试读取将返回undefined。
   *
   * 默认值：**'alphabetic'**
   *
   * @default alphabetic
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  textBaseline: CanvasTextBaseline;

  /**
   * 获取当前应用到上下文的变换矩阵。
   *
   * @returns { Matrix2D } 当前被应用到上下文的转换矩阵。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  getTransform(): Matrix2D;

  /**
   * 重置当前变换矩阵为单位矩阵。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  resetTransform(): void;

  /**
   * 围绕坐标轴顺时针旋转画布。
   *
   * @param { number } angle - 设置顺时针旋转的弧度值，可以通过 degree * Math.PI / 180 将角度转换为弧度值。<br>
   *    API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，
   *    当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，
   *    其他传入有效参数的绘制方法正常绘制。<br>单位：弧度
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  rotate(angle: number): void;

  /**
   * 根据给定的缩放因子缩放画布。
   *
   * @param { number } x - 设置水平方向的缩放值。<br>API version 18之前，设置NaN或Infinity时，
   *    在该方法后执行的绘制方法无法绘制；不支持设置0和负数，设置0、负数、null或undefined时，
   *    当前接口不生效。API version 18及以后，设置NaN、Infinity、0、负数、null或undefined时当前接口不生效，
   *    其他传入有效参数的绘制方法正常绘制。
   * @param { number } y - 设置垂直方向的缩放值，不支持设置负数。<br>API version 18之前，
   *    设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；不支持设置0和负数，
   *    设置0、负数、null或undefined时，当前接口不生效。API version 18及以后，
   *    设置NaN、Infinity、0、负数、null或undefined时当前接口不生效，
   *    其他传入有效参数的绘制方法正常绘制。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  scale(x: number, y: number): void;

  /**
   * setTransform方法使用的参数和transform()方法相同，但setTransform()方法会重置现有的变换矩阵并创建新的变换矩阵。
   *
   * > **说明：**
   * >
   * > 图形中各个点变换后的坐标可通过下方坐标计算公式计算。
   * >
   * > 变换后的坐标计算方式（x和y为变换前坐标，x'和y'为变换后坐标）：
   * >
   * > - x' = a * x + c * y + e
   * >
   * > - y' = b * x + d * y + f
   *
   * @param { number } a - scaleX：指定水平缩放值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } b - skewY：指定垂直倾斜值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } c - skewX：指定水平倾斜值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } d - scaleY：指定垂直缩放值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } e - translateX：指定水平移动值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。<br>默认单位：vp
   * @param { number } f - translateY：指定垂直移动值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * 以Matrix2D对象为模板重置现有的变换矩阵并创建新的变换矩阵。
   *
   * @param { Matrix2D } [transform] - 变换矩阵。<br>异常值undefined或null按无效值处理。<br>默认值：null
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setTransform(transform?: Matrix2D): void;

  /**
   * transform方法对应一个变换矩阵，想对一个图形进行变化的时候，只要设置此变换矩阵相应的参数，
   * 对图形的各个定点的坐标分别乘以这个矩阵，就能得到新的定点的坐标。矩阵变换效果可叠加。
   *
   * > **说明：**
   * >
   * > 图形中各个点变换后的坐标可通过下方坐标计算公式计算。
   * >
   * > 变换后的坐标计算方式（x和y为变换前坐标，x'和y'为变换后坐标）：
   * >
   * > - x' = a * x + c * y + e
   * >
   * > - y' = b * x + d * y + f
   *
   * @param { number } a - 变换矩阵中第一行第一列的单元格。scaleX：指定水平缩放值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } b - 变换矩阵第二行第一列的单元格。skewY：指定垂直倾斜值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } c - 变换矩阵第一行第二列的单元格。skewX：指定水平倾斜值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } d - 变换矩阵第二行第二列的单元格。scaleY：指定垂直缩放值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。
   * @param { number } e - 变换矩阵第一行第三列的单元格。translateX：指定水平移动值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。<br>默认单位：vp
   * @param { number } f - 变换矩阵第二行第三列的单元格。translateY：指定垂直移动值，支持设置负数。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

  /**
   * 移动当前坐标系的原点。
   *
   * @param { number } x - 设置水平平移量。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。<br>默认单位：vp
   * @param { number } y - 设置竖直平移量。<br>API version 18之前，设置NaN或Infinity时，在该方法后执行的绘制方法无法绘制；设置null或undefined时，当前接口不生效。API version 18及以后，设置NaN、Infinity、null或undefined时当前接口不生效，其他传入有效参数的绘制方法正常绘制。<br>默认单位：vp
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  translate(x: number, y: number): void;

  /**
   * 在画布上绘制输入的PixelMap对象。
   *
   * @param { PixelMap } [value] - 含有像素值的PixelMap对象。<br>异常值undefined和null按无效值处理，不进行绘制。<br>默认值：null
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  setPixelMap(value?: PixelMap): void;

  /**
   * 显示指定的ImageBitmap对象。
   *
   * @param { ImageBitmap } bitmap - 需要显示的ImageBitmap对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transferFromImageBitmap(bitmap: ImageBitmap): void;

  /**
   * 保存当前图层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  saveLayer(): void;

  /**
   * 将图像变换和裁剪状态恢复到saveLayer之前的状态，然后将图层绘制到画布上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  restoreLayer(): void;

  /**
   * 将CanvasRenderingContext2D对象重置为默认状态，并清除背景缓冲区、绘制状态堆栈、已定义路径和样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  reset(): void;

  /**
   * 用于设置绘制图形和文本时是否开启抗锯齿。设置此接口会覆盖[RenderingContextSettings]{@link ./renderingcontextsettings}中的抗锯齿效果，
   * 未通过该接口设置时，默认值为undefined，与[RenderingContextSettings]{@link ./renderingcontextsettings}中的抗锯齿效果保持一致。
   *
   * 设置绘制图形和文本时是否开启抗锯齿。
   *
   * **true**表示开启抗锯齿；**false**表示不开启抗锯齿。
   *
   * 值为**undefined**时，与[RenderingContextSettings]{@link ./renderingcontextsettings}中的抗锯齿效果保持一致。
   *
   * @default undefined
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  antialias: boolean | undefined;
}

/**
 * CanvasRenderingContext2D对象与Canvas组件绑定后，可在Canvas组件上绘制，绘制对象可以是形状、文本、图片等。
 *
 * > **说明：**
 * >
 * > * 建议使用时将CanvasRenderingContext2D对象与Canvas组件封装到同一个自定义组件中，保证两者一一对应且生命周期保持一致。
 * >
 * > * 本文绘制接口在调用时会存入被关联的Canvas组件的指令队列中。仅当当前帧进入渲染阶段且关联的Canvas组件处于可见状态时，
 * > 这些指令才会从队列中被提取并执行。因此，在Canvas组件不可见的情况下，应尽量避免频繁调用绘制接口，
 * > 以防止指令在队列中堆积，从而避免内存占用过大的问题。
 * >
 * > * beginPath、moveTo、lineTo、closePath、bezierCurveTo、quadraticCurveTo、arc、arcTo、ellipse、rect和
 * > roundRect接口只能对CanvasRenderingContext2D中的路径生效，无法对OffscreenCanvasRenderingContext2D和
 * > Path2D对象中设置的路径生效。
 * >
 * > * Canvas组件的宽或高超过8000px时使用CPU渲染，会导致性能明显下降。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class CanvasRenderingContext2D extends CanvasRenderer {
  /**
   * 组件高度。
   *
   * 默认单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly height: number;

  /**
   * 组件宽度。
   *
   * 默认单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  readonly width: number;

  /**
   * 获取和CanvasRenderingContext2D关联的Canvas组件的FrameNode实例。可用于监听关联Canvas组件的可见状态。
   * <br>默认值：null。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  readonly canvas: FrameNode;

  /**
   * 生成一个包含图片展示的URL，该接口存在内存拷贝行为，高耗时，应避免频繁使用。
   *
   * @param { string } type - 用于指定图像格式。
   *     <br>可选参数为："image/png"，"image/jpeg"，"image/webp"。
   *     <br>异常值undefined或null按默认值处理。
   *     <br>默认值：image/png
   * @param { any } quality - 在指定图片格式为image/jpeg或image/webp的情况下，
   *     可以从0到1的区间内选择图片的质量。如果超出取值范围，将会使用默认值0.92。
   *     <br>异常值undefined、null、NaN和Infinity按默认值处理。
   *     <br>默认值：0.92
   * @returns { string } 图像的URL地址。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  toDataURL(type?: string, quality?: any): string;

  /**
   * 配置并启动AI分析功能，使用Promise异步回调。使用前需先设置
   * [enableAnalyzer](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md#enableanalyzer12)
   * 为true，启用图像AI分析能力。
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
   *    <br>异常值undefined或null按无效值处理。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 110001 - Image analysis feature is unsupported.
   * @throws { BusinessError } 110002 - Image analysis is currently being executed.
   * @throws { BusinessError } 110003 - Image analysis is stopped.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
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
   * @atomicservice
   * @since 12 dynamic
   */
  stopImageAnalyzer(): void;

  /**
   * 构造Canvas画布对象，支持配置CanvasRenderingContext2D对象的参数。
   *
   * @param { RenderingContextSettings } settings - 用来配置CanvasRenderingContext2D对象的参数，
   *     见[RenderingContextSettings](#renderingcontextsettings)。
   *     <br>异常值undefined和null按[RenderingContextSettings](#renderingcontextsettings)的默认值处理。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(settings?: RenderingContextSettings);

  /**
   * 构造Canvas画布对象，支持配置CanvasRenderingContext2D对象的参数和单位模式。
   *
   * @param { RenderingContextSettings } settings - 用来配置CanvasRenderingContext2D对象的参数，
   *     见[RenderingContextSettings](#renderingcontextsettings)。
   *     <br>异常值undefined和null按[RenderingContextSettings](#renderingcontextsettings)的默认值处理。
   * @param { LengthMetricsUnit } [unit] - 用来配置CanvasRenderingContext2D对象的单位模式，
   *     配置后无法更改。
   *     <br>异常值undefined、NaN和Infinity按默认值处理。
   *     <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(settings?: RenderingContextSettings, unit?: LengthMetricsUnit);

  /**
   * 订阅CanvasRenderingContext2D与Canvas组件发生绑定的场景。
   *
   * > **说明：**
   * >
   * > CanvasRenderingContext2D对象在同一时间只能与一个Canvas组件绑定。
   * > 当CanvasRenderingContext2D对象和Canvas组件发生绑定时，会触发'onAttach'回调，
   * > 表示可以获取到[canvas](#canvas13)。
   * > 避免在'onAttach'中执行绘制方法，应保证Canvas组件已经
   * > [onReady](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md)
   * > 再进行绘制。
   * > 触发'onAttach'回调的一般场景：
   * > 1、Canvas组件创建时绑定CanvasRenderingContext2D对象；
   * > 2、CanvasRenderingContext2D对象新绑定一个Canvas组件时。
   *
   * @param { 'onAttach' } type - 订阅CanvasRenderingContext2D与Canvas组件发生绑定的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @param { Callback<void> } callback - 订阅CanvasRenderingContext2D与Canvas组件
   *    发生绑定后触发的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  on(type: 'onAttach', callback: Callback<void>): void;

  /**
   * 取消订阅CanvasRenderingContext2D与Canvas组件发生绑定的场景。
   *
   * @param { 'onAttach' } type - 取消订阅CanvasRenderingContext2D与Canvas组件发生绑定的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @param { Callback<void> } [callback] - 为空表示取消所有订阅CanvasRenderingContext2D与Canvas组件
   *    发生绑定后触发的回调。
   *    非空则取消订阅发生绑定对应的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  off(type: 'onAttach', callback?: Callback<void>): void;

  /**
   * 订阅CanvasRenderingContext2D与Canvas组件解除绑定的场景。
   *
   * > **说明：**
   * >
   * > 当CanvasRenderingContext2D对象和Canvas组件解除绑定时，会触发'onDetach'回调，
   * > 表示应停止绘制行为。
   * > 触发'onDetach'回调的一般场景：
   * > 1、Canvas组件销毁时解除绑定CanvasRenderingContext2D对象；
   * > 2、CanvasRenderingContext2D对象新绑定一个Canvas组件，会先解除已有的绑定。
   *
   * @param { 'onDetach' } type - 订阅CanvasRenderingContext2D与Canvas组件解除绑定的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @param { Callback<void> } callback - 订阅CanvasRenderingContext2D与Canvas组件
   *    解除绑定后触发的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  on(type: 'onDetach', callback: Callback<void>): void;

  /**
   * 取消订阅CanvasRenderingContext2D与Canvas组件解除绑定的场景。
   *
   * @param { 'onDetach' } type - 取消订阅CanvasRenderingContext2D与Canvas组件解除绑定的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @param { Callback<void> } [callback] - 为空代表取消所有订阅CanvasRenderingContext2D与Canvas组件
   *    解除绑定后触发的回调。
   *    非空代表取消订阅解除绑定对应的回调。
   *    <br>异常值undefined或null按无效值处理。
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 13 dynamic
   */
  off(type: 'onDetach', callback?: Callback<void>): void;

  /**
   * 从一个DrawingRenderingContext对象中获取一个CanvasRenderingContext2D对象，
   * 该CanvasRenderingContext2D对象与入参的DrawingRenderingContext对象绑定了相同的Canvas组件。
   *
   * > **说明：**
   * >
   * > - 从该接口获取的CanvasRenderingContext2D对象不允许作为参数创建
   * > [Canvas](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md)
   * > 组件，否则会导致应用崩溃。
   * >
   * > - 当入参的DrawingRenderingContext对象未绑定Canvas组件时，将返回错误码。
   *
   * @param { DrawingRenderingContext } drawingContext - 一个DrawingRenderingContext类型的对象。
   *     <br>异常值undefined或null按无效值处理。
   * @param { RenderingContextOptions } [options] - 渲染上下文的配置选项。
   *     <br>默认值：{ antialias: false }
   * @returns { CanvasRenderingContext2D } 返回一个CanvasRenderingContext2D对象，
   *     其与入参的DrawingRenderingContext绑定了相同的Canvas组件。
   * @throws { BusinessError } 103702 - The drawingContext is not bound to a canvas component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  static getContext2DFromDrawingContext(drawingContext: DrawingRenderingContext, options?: RenderingContextOptions): CanvasRenderingContext2D;
}

/**
 * 使用OffscreenCanvasRenderingContext2D在Canvas上进行离屏绘制，绘制对象可以是形状、文本、图片等。
 * 离屏绘制是指将需要绘制的内容先绘制在缓存区，然后将其转换成图片，一次性绘制到Canvas上。
 * 离屏绘制使用CPU进行绘制，绘制速度较慢，对绘制速度有要求的场景应避免使用离屏绘制。
 *
 * > **说明：**
 * >
 * > OffscreenCanvasRenderingContext2D无法在ServiceExtensionAbility中使用，
 * > ServiceExtensionAbility中建议使用
 * > [Drawing模块](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md)
 * > 进行离屏绘制。
 * >
 * > beginPath、moveTo、lineTo、closePath、bezierCurveTo、quadraticCurveTo、arc、arcTo、ellipse、rect和
 * > roundRect接口只能对OffscreenCanvasRenderingContext2D中的路径生效，无法对
 * > [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
 * > 和[Path2D](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md)
 * > 对象中设置的路径生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class OffscreenCanvasRenderingContext2D extends CanvasRenderer {
  /**
   * 生成一个包含图片展示的URL，该接口存在内存拷贝行为，高耗时，应避免频繁使用。
   *
   * @param { string } type - 用于指定图像格式。
   *     <br>可选参数为："image/png"，"image/jpeg"，"image/webp"。
   *     <br>异常值undefined或null按默认值处理。
   *     <br>默认值：image/png。
   * @param { any } quality - 在指定图片格式为image/jpeg或image/webp的情况下，
   *     可以从0到1的区间内选择图片的质量。如果超出取值范围，将会使用默认值0.92。
   *     <br>异常值undefined、null、NaN和Infinity按默认值处理。
   *     <br>默认值：0.92。
   * @returns { string } 图像的URL地址。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  toDataURL(type?: string, quality?: any): string;

  /**
   * 在离屏画布最近渲染的图像上创建一个ImageBitmap对象。
   *
   * @returns { ImageBitmap } 存储离屏画布上渲染的像素数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transferToImageBitmap(): ImageBitmap;

  /**
   * 构造离屏Canvas画布对象，支持配置画布宽高和OffscreenCanvasRenderingContext2D对象的参数。
   *
   * @param { number } width - 离屏画布的宽度，默认单位：vp。
   *    <br>异常值NaN和Infinity按无效值处理。
   * @param { number } height - 离屏画布的高度，默认单位：vp。
   *    <br>异常值NaN和Infinity按无效值处理。
   * @param { RenderingContextSettings } settings - 用来配置OffscreenCanvasRenderingContext2D对象的参数，
   *    见RenderingContextSettings接口描述。
   *    <br>异常值undefined按RenderingContextSettings的默认值处理。
   *    <br>默认值：null。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number, settings?: RenderingContextSettings);

  /**
   * 构造离屏Canvas画布对象，支持配置画布宽高、OffscreenCanvasRenderingContext2D对象的参数和单位模式。
   *
   * @param { number } width - 离屏画布的宽度，默认单位：vp。
   *    <br>异常值NaN和Infinity按无效值处理。
   * @param { number } height - 离屏画布的高度，默认单位：vp。
   *    <br>异常值NaN和Infinity按无效值处理。
   * @param { RenderingContextSettings } settings - 用来配置OffscreenCanvasRenderingContext2D对象的参数，
   *    见RenderingContextSettings接口描述。
   *    <br>异常值undefined按RenderingContextSettings的默认值处理。
   *    <br>默认值：null。
   * @param { LengthMetricsUnit } [unit] - 用来配置OffscreenCanvasRenderingContext2D对象的单位模式，
   *    配置后无法动态更改，配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *    <br>异常值undefined、NaN和Infinity按默认值处理。
   *    <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(width: number, height: number, settings?: RenderingContextSettings, unit?: LengthMetricsUnit);
}

/**
 * OffscreenCanvas组件用于绘制自定义图形。
 *
 * 使用[Canvas](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvas.md)组件或
 * [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
 * 对象时，渲染、动画和用户交互通常发生在应用程序的主线程上，与画布动画和渲染相关的计算可能会影响
 * 应用程序性能。OffscreenCanvas提供了一个可以在屏幕外渲染的画布，这样可以在单独的线程中运行一些任务，
 * 从而避免影响应用程序主线程性能。
 *
 * > **说明：**
 * >
 * > OffscreenCanvas无法在ServiceExtensionAbility中使用，ServiceExtensionAbility中建议使用
 * > [Drawing模块](docroot://reference/apis-arkgraphics2d/arkts-apis-graphics-drawing.md)
 * > 进行离屏绘制。
 *
 * ## 子组件
 *
 * 不支持。
 *
 * @extends CanvasRenderer [since 8 - 10]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare class OffscreenCanvas {
  /**
   * OffscreenCanvas组件的高度。
   * <br>默认单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  height: number;

  /**
   * OffscreenCanvas组件的宽度。
   * <br>默认单位为vp。
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width: number;

  /**
   * 从OffscreenCanvas组件中最近渲染的图像创建一个ImageBitmap对象。
   *
   * @returns { ImageBitmap } 创建的ImageBitmap对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  transferToImageBitmap(): ImageBitmap;

  /**
   * 返回OffscreenCanvas组件的绘图上下文。
   *
   * @param { "2d" } contextType - OffscreenCanvas组件绘图上下文的类型，当前仅支持"2d"类型。
   *    <br>"2d"：创建一个表示二维渲染上下文的OffscreenCanvasRenderingContext2D对象。
   *    <br>异常值undefined和null按无效值处理，当前接口返回undefined。
   * @param { RenderingContextSettings } options - 用来配置OffscreenCanvasRenderingContext2D对象的参数，
   *    见[RenderingContextSettings](#renderingcontextsettings)。
   *    <br>异常值undefined和null按RenderingContextSettings的默认值处理。
   *    <br>默认值：null。
   * @returns { OffscreenCanvasRenderingContext2D } OffscreenCanvas组件的绘图上下文。
   *    如果getContext方法的入参contextType为"2d"以外类型（包括null或者undefined），返回undefined，
   *    使用前应判断返回值是否为undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getContext(contextType: "2d", options?: RenderingContextSettings): OffscreenCanvasRenderingContext2D;

  /**
   * 构造用于创建离屏画布对象的OffscreenCanvas。
   *
   * @param { number } width - OffscreenCanvas组件的宽度。
   *    <br>异常值NaN和Infinity按无效值处理。
   *    <br>默认单位为vp。
   * @param { number } height - OffscreenCanvas组件的高度。
   *    <br>异常值NaN和Infinity按无效值处理。
   *    <br>默认单位为vp。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  constructor(width: number, height: number);

  /**
   * 构造用于创建离屏画布对象的OffscreenCanvas，支持配置OffscreenCanvas的单位模式。
   *
   * @param { number } width - OffscreenCanvas组件的宽度。
   *    <br>异常值NaN和Infinity按无效值处理。
   *    <br>默认单位为vp。
   * @param { number } height - OffscreenCanvas组件的高度。
   *    <br>异常值NaN和Infinity按无效值处理。
   *    <br>默认单位为vp。
   * @param { LengthMetricsUnit } [unit] - 用来配置OffscreenCanvas对象的单位模式，配置后无法动态更改，
   *    配置方法同
   *    [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *    <br>异常值NaN和Infinity按默认值处理。
   *    <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(width: number, height: number, unit: LengthMetricsUnit);
}

/**
 * DrawingRenderingContext的尺寸信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface Size {
  /**
   * 获取DrawingRenderingContext的宽度，其值为关联的Canvas组件的宽度。
   * <br>支持单位：vp、px。
   * <br>默认单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: number;

  /**
   * 获取DrawingRenderingContext的高度，其值为关联的Canvas组件的高度。
   * <br>支持单位：vp、px。
   * <br>默认单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: number;
}

/**
 * DrawingRenderingContext对象与Canvas组件绑定后，可在Canvas组件上进行绘制，绘制对象可以是形状、文本、图片等。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class DrawingRenderingContext {

  /**
   * 获取DrawingRenderingContext的大小。
   *
   * @returns { Size } DrawingRenderingContext的尺寸信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get size(): Size;

  /**
   * 获取绘制内容的画布对象。
   *
   * @returns { DrawingCanvas } 绘制内容的画布对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get canvas(): DrawingCanvas;

  /**
   * 使组件无效，触发组件的重新渲染。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  invalidate(): void;

  /**
   * 构造使用drawing接口进行绘制的Canvas画布对象，支持配置DrawingRenderingContext对象的单位模式。
   *
   * @param { LengthMetricsUnit } [unit] - 用来配置DrawingRenderingContext对象的单位模式，配置后无法更改，
   *     配置方法同
   *     [CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)。
   *     <br>异常值undefined、NaN和Infinity按默认值处理。
   *     <br>默认值：DEFAULT。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(unit?: LengthMetricsUnit);
}

/**
 * 定义Canvas的具体配置参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
declare interface CanvasParams {
  /**
   * 用于描述Canvas绘制时所采用的单位模式。
   * <br>仅可在创建Canvas时设置，后续不可修改。
   * <br>默认值：**LengthMetricsUnit.DEFAULT**
   *
   * @type { ?LengthMetricsUnit }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  unit?: LengthMetricsUnit;

  /**
   * 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  imageAIOptions?: ImageAIOptions;
}

/**
 * 提供画布组件，用于自定义绘制图形。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
interface CanvasInterface {
  /**
   * 创建Canvas组件时，最大面积不超过10000px*10000px，超过最大面积则无法正常创建。
   *
   * @param { CanvasRenderingContext2D | DrawingRenderingContext } context -
   *     CanvasRenderingContext2D：不支持多个Canvas共用一个CanvasRenderingContext2D对象，
   *     具体描述见[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
   *     对象。DrawingRenderingContext：不支持多个Canvas共用一个DrawingRenderingContext对象，
   *     具体描述见[DrawingRenderingContext](docroot://reference/apis-arkui/arkui-ts/ts-drawingrenderingcontext.md)
   *     对象。
   *     <br>异常值null和undefined按未设置context处理。
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  (context?: CanvasRenderingContext2D | DrawingRenderingContext): CanvasAttribute;

  /**
   * 创建Canvas组件，支持设置CanvasRenderingContext2D对象或DrawingRenderingContext对象，支持设置AI分析选项。
   *
   * @param { CanvasRenderingContext2D | DrawingRenderingContext } context -
   *     CanvasRenderingContext2D：不支持多个Canvas共用一个CanvasRenderingContext2D对象，
   *     具体描述见[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)
   *     对象。DrawingRenderingContext：不支持多个Canvas共用一个DrawingRenderingContext对象，
   *     具体描述见[DrawingRenderingContext](docroot://reference/apis-arkui/arkui-ts/ts-drawingrenderingcontext.md)
   *     对象。
   *     <br>异常值null和undefined按未设置context处理。
   * @param { ImageAIOptions } imageAIOptions - 给组件设置一个AI分析选项，通过此项可配置分析类型或绑定一个分析控制器。
   *     <br>异常值null和undefined按
   *     [ImageAIOptions](docroot://reference/apis-arkui/arkui-ts/ts-image-common.md#imageaioptions12)
   *     的默认值处理，默认取值为{ type: [ImageAnalyzerType.SUBJECT, ImageAnalyzerType.TEXT],
   *     aiController: new ImageAnalyzerController() }，即开启主体识别和文字识别功能。
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  (context: CanvasRenderingContext2D | DrawingRenderingContext, imageAIOptions: ImageAIOptions): CanvasAttribute;

  /**
   * 使用CanvasParams创建不缓存指令的Canvas组件。创建Canvas组件时，最大面积不超过10000px*10000px，
   * 超过最大面积则无法正常创建。
   *
   * > **说明：**
   * >
   * > - 使用本接口创建的Canvas组件将在onReady回调的入参中返回一个
   * > [DrawingRenderingContext](docroot://reference/apis-arkui/arkui-ts/ts-drawingrenderingcontext.md)
   * > 对象，可用于在该Canvas组件上进行绘制。
   * >
   * > - 使用这个接口创建的Canvas组件在组件不可见时将不响应绘制指令。
   * >
   * > - 不可见场景主要包括组件所在的页面进入后台、组件滑到窗口外、设置
   * > [visibility](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-visibility.md#visibility)
   * > 属性为隐藏等，不包括组件被其他组件或是其他窗口遮挡导致不可见的场景。
   *
   * @param { CanvasParams } params - Canvas组件的构造参数。
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  (params: CanvasParams): CanvasAttribute;
}

/**
 * 除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性：
 *
 * 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持如下事件：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare class CanvasAttribute extends CommonMethod<CanvasAttribute> {
  /**
   * Canvas组件初始化完成或者发生大小变化时的事件回调，支持
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * 动态设置属性方法。
   *
   * 当该事件被触发时画布被清空，该事件之后Canvas组件宽高确定且可获取，可使用Canvas相关API进行绘制。
   * 当Canvas组件仅发生位置变化时，只触发
   * [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange)
   * 事件，不触发onReady事件。
   * [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange)
   * 事件在onReady事件后触发。
   *
   * @param { VoidCallback } event - Canvas组件初始化完成或者发生大小变化时的事件回调事件。
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onReady(event: VoidCallback): CanvasAttribute;

  /**
   * Canvas组件初始化完成或者发生大小变化时的事件回调，支持
   * [attributeModifier]{@link CommonMethod#attributeModifier}
   * 动态设置属性方法。
   *
   * 当该事件被触发时画布被清空，该事件之后Canvas组件宽高确定且可获取，可使用Canvas相关API进行绘制。
   * 当Canvas组件仅发生位置变化时，只触发
   * [onAreaChange]{@link CommonMethod#onAreaChange}事件，不触发onReady事件。
   * [onAreaChange]{@link CommonMethod#onAreaChange}事件在onReady事件后触发。
   *
   * @param { Callback<DrawingRenderingContext | undefined> | undefined } event -
   *     Canvas组件初始化完成或者发生大小变化时的回调事件。
   *     <br/>关于Callback<DrawingRenderingContext | undefined>类型的入参：
   *     <br/>1. 只有使用[CanvasParams]{@link CanvasParams}创建的Canvas组件在该回调中返回
   *     DrawingRenderingContext对象，否则返回undefined。
   *     <br/>2. 该回调返回的DrawingRenderingContext对象不允许作为参数创建Canvas组件，
   *     否则会导致应用崩溃。
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  onReady(event: Callback<DrawingRenderingContext | undefined> | undefined): CanvasAttribute;

  /**
   * 设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能，支持[attributeModifier]{@link CommonMethod#attributeModifier}
   * 动态设置属性方法。
   *
   * 需要搭配[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)中的
   * [StartImageAnalyzer](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#startimageanalyzer12)和
   * [StopImageAnalyzer](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#stopimageanalyzer12)
   * 一起使用。
   *
   * 不能和[overlay]{@link CommonMethod#overlay}属性同时使用，
   * 两者同时设置时overlay中CustomBuilder属性将失效。该特性依赖设备能力。
   *
   * > **说明：**
   * >
   * > 从API version 20开始，该接口支持在
   * > [attributeModifier]{@link CommonMethod#attributeModifier}
   * > 中调用。
   *
   * @param { boolean } enable - 组件支持AI分析，需要组件内容支持主体识别、文字识别或对象查找。
   *     <br>设置为true时，组件可进行AI分析，设置为false时，组件不可进行AI分析。
   *     <br>异常值null和undefined按默认值处理。
   *     <br/>默认值：false
   * @returns { CanvasAttribute }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  enableAnalyzer(enable: boolean): CanvasAttribute;
}

/**
 * 提供画布组件，用于自定义绘制图形。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const Canvas: CanvasInterface;

/**
 * 提供画布组件，用于自定义绘制图形。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @noninterop [since 11]
 */
declare const CanvasInstance: CanvasAttribute;
