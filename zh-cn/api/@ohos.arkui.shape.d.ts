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
 * @ohos.arkui.shape模块提供了CircleShape、EllipseShape、PathShape、RectShape等多种形状定义，用于在
 * [clipShape]{@link CommonMethod#clipShape(value: CircleShape | EllipseShape | PathShape | RectShape)}和
 * [maskShape]{@link CommonMethod#maskShape(value: CircleShape | EllipseShape | PathShape | RectShape)}接口中传入对应的形状，实现对组件的
 * 裁剪和遮罩效果。适用于需要将组件裁剪为圆形、椭圆、矩形等特定形状，或通过形状遮罩实现视觉效果的场景，如头像裁剪、图标遮罩等。
 *
 * @file 形状
 * @kit ArkUI
 */

/**
 * 形状的大小参数。
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
   * 默认值：0vp
   * 
   * 取值为异常值时按照0vp处理。
   * 
   * 不设置时默认值为0vp。
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
   * 默认值：0vp
   * 
   * 取值为异常值时按照0vp处理。
   * 
   * 不设置时默认值为0vp。
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
 * RectShape 带有圆角半径的构造函数参数。
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
   * 默认值：0vp
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
   * 默认值：0vp
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
   * 绘制路径的指令。默认值为空字符串，不设置时不绘制路径。
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
 * 提供形状的偏移、填充和位置设置等通用方法的基类。
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
   * > **说明：**
   * >
   * > - offset()设置相对偏移，position()设置绝对位置，两者定位机制不同。
   * >
   * > - 建议根据场景选择使用其中一种定位方式，避免同时设置导致定位结果难以预测。
   *
   * @param { Position } offset - 相对于组件布局位置的坐标偏移。
   * @returns { T } 返回当前对象，用于链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  offset(offset: Position): T;

  /**
   * 设置形状的填充颜色。
   *
   * @param { ResourceColor } color - 形状的填充区域的透明度，黑色表示完全透明，白色表示完全不透明。在maskShape场景下，填充颜色决定了遮罩的透明度效果。
   * @returns { T } 返回当前对象，用于链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  fill(color: ResourceColor): T;

  /**
   * 设置形状的绝对位置。与offset（相对偏移）不同，position设置的是绝对坐标；需要精确定位形状时使用position，需要在现有布局位置上微调时使用offset。
   *
   * @param { Position } position - 形状的位置。
   * @returns { T } 返回当前对象，用于链式调用。
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
   * @param { Length } width - 形状的宽度。
   *     <br>单位：vp
   *     <br>取值为异常值时按照0vp处理。
   * @returns { T } 返回当前对象，用于链式调用。
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
   * @param { Length } height - 形状的高度。
   *     <br>单位：vp
   *     <br>取值为异常值时按照0vp处理。
   * @returns { T } 返回当前对象，用于链式调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  height(height: Length): T;

  /**
   * 设置形状的大小，同时设置宽度和高度。
   * 
   * > **说明：**
   * >
   * > - size()等同于同时调用width()和height()设置宽高。
   * >
   * > - 后调用的方法会覆盖先前方法设置的对应属性。例如先调用size({width:100, height:200})再调用width(50)，最终宽度为50，高度保持200。
   *
   * @param { SizeOptions } size - 形状的大小。
   *     <br>width和height类型为number时取值范围是[0, +∞)，string类型时参考[Length]{@link Length}。
   *     <br>单位：vp
   *     <br>取值为异常值时按照0vp处理。
   * @returns { T } 返回当前对象，用于链式调用。
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
   * > **说明：**
   * >
   * > - 构造函数参数中的radius/radiusWidth/radiusHeight与radius()/radiusWidth()/radiusHeight()方法设置的是同一属性。
   * >
   * > - 方法调用会覆盖构造函数中设置的对应属性值。
   * >
   * > - 建议优先通过构造函数设置初始参数，再通过方法进行额外配置或覆盖。
   *
   * @param { RectShapeOptions | RoundRectShapeOptions } options - 矩形形状参数。不传入时使用默认尺寸，默认宽度0vp，默认高度0vp，圆角半径默认值0vp。
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
   * @param { number | string } rWidth - 矩形形状圆角半径的宽度。
   *     <br> 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。
   *     <br>单位：vp
   *     <br>取值为异常值时按照0vp处理。
   * @returns { RectShape } 返回设置圆角半径后的RectShape对象，可用于链式调用继续配置矩形形状。
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
   * @param { number | string } rHeight - 矩形形状圆角半径的高度。 
   *     <br> 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。
   *     <br>单位：vp
   *     <br>取值为异常值时按照0vp处理。
   * @returns { RectShape } 返回设置圆角半径高度后的RectShape对象，可用于链式调用继续配置矩形形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  radiusHeight(rHeight: number | string): RectShape;

  /**
   * 设置矩形形状的圆角半径，设置后各角圆弧宽高相等（圆形弧）。与radiusWidth/radiusHeight分别设置圆弧宽高（允许椭圆弧）不同，radius可通过数组分别指定四个角的圆角半径值；需要圆形圆角时使用radius，需要
   * 椭圆形圆角时使用radiusWidth和radiusHeight。
   *
   * @param { number | string | Array<number | string> } radius - 矩形形状的圆角半径。仅接受数组的前四个元素，分别为矩形左上、右上、左下、右下的圆角半径。
   *     <br> 类型为number时取值范围是[0, +∞)，string时是[Length]{@link Length}。
   *     <br>单位：vp
   *     <br>取值为异常值时按照0vp处理。
   * @returns { RectShape } 返回设置圆角半径宽度后的RectShape对象，可用于链式调用继续配置矩形形状。
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
   * @param { ShapeSize } options - 形状的大小，包含width（宽度）和height（高度）属性，用于设置形状的尺寸。不传入时使用默认尺寸，默认宽度0vp，默认高度0vp。
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
   * 创建EllipseShape对象。
   *
   * @param { ShapeSize } options - 形状的大小，用于自定义椭圆的宽高尺寸。不传入时width和height默认值为0vp。
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
 * 用于clipShape和maskShape接口的路径形状，继承自[CommonShapeMethod]{@link CommonShapeMethod}。
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
   * @param { PathShapeOptions } options - 路径参数。不传入时，路径绘制指令默认为空字符串，不绘制路径。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(options?: PathShapeOptions);

  /**
   * 设置路径的绘制指令，用于定义PathShape的绘制路径。指令遵循SVG路径数据格式，具体支持的绘制命令请参考[commands]{@link PathAttribute#commands}。
   * 
   * > **说明：**
   * >
   * > - 必须设置commands（可通过构造函数PathShapeOptions.commands或本方法设置），PathShape才能在clipShape/maskShape接口中产生可见的裁剪或遮罩效果。
   * >
   * > - 未设置commands的PathShape为空路径，不会产生任何裁剪或遮罩效果。
   * >
   * > - 本方法与构造函数PathShapeOptions.commands设置的是同一属性，后调用的设置会覆盖先前的设置。
   *
   * @param { string } commands - 路径的绘制指令，格式要求请参考[commands]{@link PathAttribute#commands}支持的绘制命令。传入无效指令时不产生可见路径。
   * @returns { PathShape } 返回设置路径绘制指令后的PathShape对象，可用于链式调用继续配置路径形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  commands(commands: string): PathShape;
}