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
 */
import { LengthMetricsUnit } from '../Graphics';
import { AttributeModifier, CommonMethod } from './common';

/**
 * 用于画布绘制[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)、
 * [OffscreenCanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-offscreencanvasrenderingcontext2d.md)、
 * [CanvasPattern](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-canvaspattern.md)和
 * [Path2D](docroot://reference/apis-arkui/arkui-ts/ts-components-canvas-path2d.md)的矩阵对象，
 * 可以对矩阵进行缩放、旋转和平移等变换。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Matrix2D {
    /**
     * 水平缩放系数，取值范围无限制。
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get scaleX(): double | undefined;
    /**
     * 水平缩放系数，取值范围无限制。
     *
     * @param { double | undefined } scaleX - 水平缩放系数。<br>
     *    异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set scaleX(scaleX: double | undefined);
    /**
     * 垂直缩放系数，取值范围无限制。
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get scaleY(): double | undefined;
    /**
     * 垂直缩放系数，取值范围无限制。
     *
     * @param { double | undefined } scaleY - 垂直缩放系数。<br>
     *    异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set scaleY(scaleY: double | undefined);
    /**
     * 水平倾斜系数，取值范围无限制。
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get rotateX(): double | undefined;
    /**
     * 水平倾斜系数，取值范围无限制。
     *
     * @param { double | undefined } rotateX - 水平倾斜系数。<br>
     *    异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set rotateX(rotateX: double | undefined);
    /**
     * 垂直倾斜系数，取值范围无限制。
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get rotateY(): double | undefined;
    /**
     * 垂直倾斜系数，取值范围无限制。
     *
     * @param { double | undefined } rotateY - 垂直倾斜系数。<br>
     *    异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set rotateY(rotateY: double | undefined);
    /**
     * 水平平移距离，取值范围无限制。默认单位：vp。
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get translateX(): double | undefined;
    /**
     * 水平平移距离，取值范围无限制。
     *
     * @param { double | undefined } translateX - 水平平移距离，取值范围无限制。<br>
     *    异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br>
     *    默认单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set translateX(translateX: double | undefined);
    /**
     * 垂直平移距离，取值范围无限制。默认单位：vp。
     *
     * @returns { double | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    get translateY(): double | undefined;
    /**
     * 垂直平移距离，取值范围无限制。
     *
     * @param { double | undefined } translateY - 垂直平移距离，取值范围无限制。<br>
     *    异常值undefined按无效值处理，NaN和Infinity会导致Matrix2D异常，设置后绘制内容不显示。<br>
     *    默认单位：vp。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    set translateY(translateY: double | undefined);
    /**
     * 创建单位矩阵。
     *
     * @returns { Matrix2D } 单位矩阵。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    identity(): Matrix2D;
    /**
     * 获取当前矩阵的逆矩阵。
     *
     * @returns { Matrix2D } 逆矩阵结果。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    invert(): Matrix2D;
    /**
     * 以旋转点为中心，对当前矩阵进行右乘旋转运算。
     *
     * @param { double } degree - 旋转弧度，取值范围无限制。顺时针方向为正弧度，
     *    可以通过`角度 * Math.PI / 180`将角度转换为弧度值传入该接口。<br>
     *    异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>
     *    默认单位：弧度。
     * @param { double } [rx] - 旋转点的水平方向坐标，取值范围无限制。<br>
     *    默认单位：vp。<br>
     *    异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>
     *    默认值：0。
     * @param { double } [ry] - 旋转点的垂直方向坐标，取值范围无限制。<br>
     *    默认单位：vp。<br>
     *    异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>
     *    默认值：0。
     * @returns { Matrix2D } 旋转后结果矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    rotate(degree: double, rx?: double, ry?: double): Matrix2D;
    /**
     * 对当前矩阵进行左乘平移运算。
     *
     * @param { double } [tx] - 水平方向平移距离，取值范围无限制。<br>
     *    异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>
     *    默认单位：vp。<br>
     *    默认值：0。
     * @param { double } [ty] - 垂直方向平移距离，取值范围无限制。<br>
     *    异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>
     *    默认单位：vp。<br>
     *    默认值：0。
     * @returns { Matrix2D } 平移后结果矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    translate(tx?: double, ty?: double): Matrix2D;
    /**
     * 对当前矩阵进行右乘缩放运算。
     *
     * @param { double } [sx] - 水平缩放比例系数，取值范围无限制。<br>
     *    异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>
     *    默认值：1.0。
     * @param { double } [sy] - 垂直缩放比例系数，取值范围无限制。<br>
     *    异常值undefined和null按无效值处理，NaN和Infinity会导致Matrix2D异常。<br>
     *    默认值：1.0。
     * @returns { Matrix2D } 缩放结果矩阵对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    scale(sx?: double, sy?: double): Matrix2D;
    /**
     * 构造二维变换矩阵对象，默认值是属性全为0的矩阵。
     *
     * @param { LengthMetricsUnit } [unit] - 用来配置Matrix2D对象的单位模式，配置后无法动态更改。<br>
     *    异常值NaN和Infinity按默认值处理。<br>
     *    默认值：DEFAULT。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(unit?: LengthMetricsUnit);
}
