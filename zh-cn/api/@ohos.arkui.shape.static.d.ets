/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { Position, ResourceColor, Length, SizeOptions } from './arkui/component/units';
/**
 * 形状的尺寸参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ShapeSize {
    /**
     * 形状的宽度。
     * 
     * 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。 
     * 
     * 单位：vp
     * 
     * 取值为异常值时按照0vp处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width?: double | string;
    /**
     * 形状的高度。 
     * 
     * 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。 
     * 
     * 单位：vp
     * 
     * 取值为异常值时按照0vp处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height?: double | string;
}
/**
 * RectShape 的构造函数参数。
 * 
 * 继承自[ShapeSize]{@link ShapeSize}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RectShapeOptions extends ShapeSize {
    /**
     * 矩形形状的圆角半径。
     * 
     * 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。
     * 
     * 单位：vp
     * 
     * 取值为异常值时按照0vp处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius?: double | string | Array<double | string>;
}
/**
 * RectShape 带有半径的构造函数参数。
 * 
 * 继承自[ShapeSize]{@link ShapeSize}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RoundRectShapeOptions extends ShapeSize {
    /**
     * 矩形形状圆角半径的宽度。
     * 
     * 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。
     * 
     * 单位：vp
     * 
     * 取值为异常值时按照0vp处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusWidth?: double | string;
    /**
     * 矩形形状圆角半径的高度。
     * 
     * 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。
     * 
     * 单位：vp
     * 
     * 取值为异常值时按照0vp处理。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusHeight?: double | string;
}
/**
 * PathShape的构造函数参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface PathShapeOptions {
    /**
     * 绘制路径的指令。更多说明请参考[commands]{@link PathAttribute#commands}支持的绘制命令。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    commands?: string;
}
/**
 * 常见的形状方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CommonShapeMethod {
    /**
     * 设置相对于组件布局位置的坐标偏移。
     *
     * @param { Position } offset - 相对于组件布局位置的坐标偏移。
     * @returns { this } 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    offset(offset: Position): this;
    /**
     * 设置形状的填充区域的透明度，黑色表示完全透明，白色表示完全不透明。
     *
     * @param { ResourceColor } color - 形状的填充区域的透明度，黑色表示完全透明，白色表示完全不透明。
     * @returns { this } 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    fill(color: ResourceColor): this;
    /**
     * 设置形状的位置。
     *
     * @param { Position } position - 设置形状的位置。
     * @returns { this } 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    position(position: Position): this;
}
/**
 * 继承自[CommonShapeMethod]{@link CommonShapeMethod}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class BaseShape extends CommonShapeMethod {
    /**
     * 设置形状的宽度。
     *
     * @param { Length } width - 形状的宽度。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
     * @returns { this } 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    width(width: Length): this;
    /**
     * 设置形状的高度。
     *
     * @param { Length } height - 形状的高度。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
     * @returns { this } 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    height(height: Length): this;
    /**
     * 设置形状的大小。
     *
     * @param { SizeOptions } size - 形状的大小。
     * @returns { this } 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    size(size: SizeOptions): this;
}
/**
 * 用于clipShape和maskShape接口的矩形形状。
 * 
 * 继承自[BaseShape]{@link BaseShape}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class RectShape extends BaseShape {
    /**
     * 创建RectShape对象。
     *
     * @param { RectShapeOptions | RoundRectShapeOptions } [options] - 矩形形状参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: RectShapeOptions | RoundRectShapeOptions);
    /**
     * 设置矩形形状圆角半径的宽度。
     *
     * @param { double | string } rWidth - 矩形形状圆角半径的宽度。<br/> 类型为double时取值范围是
     *     [0, +∞)，类型为string时是[Length]{@link Length}。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
     * @returns { this } 返回当前对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusWidth(rWidth: double | string): this;
    /**
     * 设置矩形形状圆角半径的高度。
     *
     * @param { double | string } rHeight - 矩形形状圆角半径的高度。 <br/> 类型为number时取值范围是
     *     [0, +∞)，类型为string时是[Length]{@link Length}。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
     * @returns { this } 返回RectShape对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radiusHeight(rHeight: double | string): this;
    /**
     * 设置矩形形状的圆角半径。
     *
     * @param { double | string | Array<double | string> } radius - Array<double
     * @returns { this } 返回RectShape对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    radius(radius: double | string | Array<double | string>): this;
}
/**
 * 用于clipShape和maskShape接口的圆形形状。
 * 
 * 继承自[BaseShape]{@link BaseShape}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class CircleShape extends BaseShape {
    /**
     * 创建CircleShape对象。
     *
     * @param { ShapeSize } [options] - 形状的大小。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: ShapeSize);
}
/**
 * 用于clipShape和maskShape接口的椭圆形状。
 * 
 * 继承自[BaseShape]{@link BaseShape}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class EllipseShape extends BaseShape {
    /**
     * 创建CircleShape对象。
     *
     * @param { ShapeSize } [options] - 形状的大小。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: ShapeSize);
}
/**
 * 用于clipShape和maskShape接口的路径。
 * 
 * 继承自[CommonShapeMethod]{@link CommonShapeMethod}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class PathShape extends CommonShapeMethod {
    /**
     * 创建PathShape对象。
     *
     * @param { PathShapeOptions } [options] - 路径参数。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    constructor(options?: PathShapeOptions);
    /**
     * 设置路径的绘制指令。
     *
     * @param { string } commands - 路径的绘制指令。
     * @returns { this } 返回PathShape对象。
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    commands(commands: string): this;
}