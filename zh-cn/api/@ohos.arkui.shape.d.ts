/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * 形状的尺寸参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface ShapeSize {
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
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  width?: number | string;

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
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  height?: number | string;
}

/**
 * RectShape 的构造函数参数。
 * 
 * 继承自[ShapeSize]{@link ShapeSize}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface RectShapeOptions extends ShapeSize {
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
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radius?: number | string | Array<number | string>;
}

/**
 * RectShape 带有半径的构造函数参数。
 * 
 * 继承自[ShapeSize]{@link ShapeSize}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface RoundRectShapeOptions extends ShapeSize {
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
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusWidth?: number | string;

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
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusHeight?: number | string;
}

/**
 * PathShape的构造函数参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
interface PathShapeOptions {
  /**
   * 绘制路径的指令。更多说明请参考[commands]{@link PathAttribute#commands}支持的绘制命令。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  commands?: string;
}

/**
 * 常见的形状方法。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class CommonShapeMethod<T> {
  /**
   * 设置相对于组件布局位置的坐标偏移。
   *
   * @param { Position } offset - 相对于组件布局位置的坐标偏移。
   * @returns { T } 返回当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  offset(offset: Position): T;

  /**
   * 设置形状的填充区域的透明度，黑色表示完全透明，白色表示完全不透明。
   *
   * @param { ResourceColor } color - 形状的填充区域的透明度，黑色表示完全透明，白色表示完全不透明。
   * @returns { T } 返回当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fill(color: ResourceColor): T;

  /**
   * 设置形状的位置。
   *
   * @param { Position } position - 设置形状的位置。
   * @returns { T } 返回当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  position(position: Position): T;
}

/**
 * 继承自[CommonShapeMethod]{@link CommonShapeMethod}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare class BaseShape<T> extends CommonShapeMethod<T> {
  /**
   * 设置形状的宽度。
   *
   * @param { Length } width - 形状的宽度。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
   * @returns { T } 返回当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  width(width: Length): T;

  /**
   * 设置形状的高度。
   *
   * @param { Length } height - 形状的高度。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
   * @returns { T } 返回当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  height(height: Length): T;

  /**
   * 设置形状的大小。
   *
   * @param { SizeOptions } size - 形状的大小。
   * @returns { T } 返回当前对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  size(size: SizeOptions): T;
}

/**
 * 用于clipShape和maskShape接口的矩形形状。
 * 
 * 继承自[BaseShape]{@link BaseShape}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class RectShape extends BaseShape<RectShape> {
  /**
   * 创建RectShape对象。
   *
   * @param { RectShapeOptions | RoundRectShapeOptions } options - 矩形形状参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: RectShapeOptions | RoundRectShapeOptions);

  /**
   * 设置矩形形状圆角半径的宽度。
   *
   * @param { number | string } rWidth - 矩形形状圆角半径的宽度。<br/> 类型为number时取值范围是
   *     [0, +∞)，string时是[Length]{@link Length}。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
   * @returns { RectShape } 返回RectShape对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusWidth(rWidth: number | string): RectShape;

  /**
   * 设置矩形形状圆角半径的高度。
   *
   * @param { number | string } rHeight - 矩形形状圆角半径的高度。 <br/> 类型为number时取值范围是
   *     [0, +∞)，string时是[Length]{@link Length}。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
   * @returns { RectShape } 返回RectShape对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusHeight(rHeight: number | string): RectShape;

  /**
   * 设置矩形形状的圆角半径。
   *
   * @param { number | string | Array<number | string> } radius - 矩形形状的圆角半径。仅接受数组的前四个元素，分别为矩形左上，右上，左下，右下的圆角半径。<br/> 类型为
   *     number时取值范围是[0, +∞)，string时是[Length]{@link Length}。<br/>单位：vp<br/>取值为异常值时按照0vp处理。
   * @returns { RectShape } 返回RectShape对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radius(radius: number | string | Array<number | string>): RectShape;
}

/**
 * 用于clipShape和maskShape接口的圆形形状。
 * 
 * 继承自[BaseShape]{@link BaseShape}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class CircleShape extends BaseShape<CircleShape> {
  /**
   * 创建CircleShape对象。
   *
   * @param { ShapeSize } options - 形状的大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
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
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class EllipseShape extends BaseShape<EllipseShape> {
  /**
   * 创建CircleShape对象。
   *
   * @param { ShapeSize } options - 形状的大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
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
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PathShape extends CommonShapeMethod<PathShape> {
  /**
   * 创建PathShape对象。
   *
   * @param { PathShapeOptions } options - 路径参数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: PathShapeOptions);

  /**
   * 设置路径的绘制指令。
   *
   * @param { string } commands - 路径的绘制指令。
   * @returns { PathShape } 返回PathShape对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  commands(commands: string): PathShape;
}