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
 * 自定义节点（RenderNode）相关的图形属性定义，提供几何变换（缩放、旋转、平移）、颜色与长度的统一表示、形状定义、图形遮罩与裁剪、模糊效果等能力，适用于需要在自定义节点上进行精细化图形绘制与视觉效果处理的场景。
 *
 * @file
 * @kit ArkUI
 */
import drawing from '../@ohos.graphics.drawing';
import type common2D from '../@ohos.graphics.common2D';
import { Resource } from '../global/resource';

/**
 * 用于返回组件布局大小的宽和高。默认单位为vp，不同的接口使用Size类型时会再定义单位，以接口定义的单位为准。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export interface Size {
  /**
   * 组件大小的宽度。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 负数按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width: number;

  /**
   * 组件大小的高度。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 负数按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  height: number;
}

/**
 * 图形绘制上下文，提供绘制所需的画布及其宽度和高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export class DrawContext {

  /**
   * 获取画布的宽度和高度。
   *
   * @returns { Size } 画布的宽度和高度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get size(): Size;

  /**
   * 获取以px为单位的画布的宽度和高度。
   *
   * @returns { Size } 画布的宽度和高度，以px为单位。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get sizeInPixel(): Size;

  /**
   * 获取用于绘制的画布。
   *
   * @returns { drawing.Canvas } 用于绘制的画布。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  get canvas(): drawing.Canvas;
}

/**
 * 用于表示包含x和y两个值的向量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface Vector2 {
  /**
   * 向量x轴方向的值。
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * 向量y轴方向的值。
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;
}

/**
 * 用于表示T类型的包含x和y两个值的向量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface Vector2T<T> {

  /**
   * 向量x轴方向的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  x: T;

  /**
   * 向量y轴方向的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  y: T;
}

/**
 * 用于表示包含x、y、z三个值的向量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
interface Vector3 {
  /**
   * 向量x轴方向的值。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * 向量y轴方向的值。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;

  /**
   * 向量z轴方向的值。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  z: number;
}

/**
 * 用于表示包含x、y、z、w四个值的向量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
interface Vector4 {
  /**
   * 向量x轴方向的值。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;

  /**
   * 向量y轴方向的值。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;

  /**
   * 向量z轴方向的值。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  z: double;

  /**
   * 向量w轴方向的值。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  w: double;
}

/**
 * 用于设置四阶矩阵。
 * 
 * 用于设置组件的变换信息，该类型为一个 4x4 矩阵，使用一个长度为16的`number[]`进行表示，例如：
 * ```
 * const transform: Matrix4 = [
 * 1, 0, 45, 0,
 * 0, 1,  0, 0,
 * 0, 0,  1, 0,
 * 0, 0,  0, 1
 * ]。
 * ```
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Matrix4 = [
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
];

/**
 * 用于设置组件或效果的偏移。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Offset = Vector2;

/**
 * 用于设置或返回组件的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Position = Vector2;

/**
 * 用于设置或返回组件的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type PositionT<T> = Vector2T<T>;

/**
 * 用于设置组件的轴心坐标，轴心会作为组件的旋转/缩放中心点，影响旋转和缩放效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Pivot = Vector2;

/**
 * 用于设置组件的缩放比例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Scale = Vector2;

/**
 * 用于设置组件的平移量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Translation = Vector2;

/**
 * 用于设置组件的旋转角度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export type Rotation = Vector3;

/**
 * 用于设置或返回组件的布局大小和位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
export declare interface Frame {
  /**
   * 水平方向位置。
   *
   * 单位：vp
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: number;

  /**
   * 垂直方向位置。
   *
   * 单位：vp
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: number;

  /**
   * 组件的宽度。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 负数按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width: number;

  /**
   * 组件的高度。
   * 
   * 单位：vp
   * 
   * 取值范围：[0, +∞)
   * 
   * 负数按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  height: number;
}

/**
 * 用于设置边框的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface Edges<T> {
  /**
   * 左侧边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  left: T;

  /**
   * 右侧边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  right: T;

  /**
   * 顶部边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top: T;

  /**
   * 底部边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom: T;
}

/**
 * 长度属性单位枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LengthUnit {
  /**
   * 长度类型，用于描述以px为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PX = 0,

  /**
   * 长度类型，用于描述以vp为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  VP = 1,

  /**
   * 长度类型，用于描述以fp为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FP = 2,

  /**
   * 长度类型，用于描述以%为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PERCENT = 3,

  /**
   * 长度类型，用于描述以lpx为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  LPX = 4
}

/**
 * 用于设置宽高的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface SizeT<T> {
  /**
   * 宽度的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  width: T;

  /**
   * 高度的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  height: T;
}

/**
 * 长度属性单位枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export enum LengthMetricsUnit {

  /**
   * 长度类型，用于描述以默认的vp为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * 长度类型，用于描述以px为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PX = 1
}

/**
 * 用于设置长度属性，当长度单位为PERCENT时，值为1表示100%。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class LengthMetrics {
  /**
   * LengthMetrics的构造函数。若参数unit不传入值或传入undefined，返回值使用默认单位VP；若unit传入非LengthUnit类型的值，返回默认值0VP。
   *
   * @param { number } value - 长度属性的值。
   *     <br>取值范围：(-∞, +∞)
   * @param { LengthUnit } [unit] - 长度属性的单位，默认为VP。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(value: number, unit?:LengthUnit);

  /**
   * 用于生成单位为PX的长度属性。
   *
   * @param { number } value - 长度属性的值。
   *     <br>取值范围：(-∞, +∞)
   * @returns { LengthMetrics } 单位为PX的长度属性对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static px(value: number): LengthMetrics;

  /**
   * 用于生成单位为VP的长度属性。
   *
   * @param { number } value - 长度属性的值。
   *     <br>取值范围：(-∞, +∞)
   * @returns { LengthMetrics } 单位为VP的长度属性对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static vp(value: number): LengthMetrics;

  /**
   * 用于生成单位为FP的长度属性。
   *
   * @param { number } value - 长度属性的值。
   *     <br>取值范围：(-∞, +∞)
   * @returns { LengthMetrics } 单位为FP的长度属性对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static fp(value: number): LengthMetrics;

  /**
   * 用于生成单位为PERCENT的长度属性，值为1表示100%。
   *
   * @param { number } value - 长度属性的值。
   *     <br>取值范围：[0, 1]
   *     <br>超出范围时按边界值处理。
   * @returns { LengthMetrics } 单位为PERCENT的长度属性对象，值为1表示100%。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static percent(value: number): LengthMetrics;

  /**
   * 用于生成单位为LPX的长度属性。
   *
   * @param { number } value - 长度属性的值。
   *     <br>取值范围：(-∞, +∞)
   * @returns { LengthMetrics } 单位为LPX的长度属性对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static lpx(value: number): LengthMetrics;

  /**
   * 用于生成Resource类型资源的长度属性。
   *
   * @param { Resource } value - 长度属性的值。
   * @returns { LengthMetrics } Resource类型资源的长度属性对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static resource(value: Resource): LengthMetrics;

  /**
   * 长度属性的单位，默认为VP。
   *
   * @default VP
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public unit: LengthUnit;

  /**
   * 长度属性的值。
   * 
   * 取值范围：(-∞, +∞)。
   * 
   * 当unit为PERCENT时，value表示百分比（1表示100%），参考尺寸取决于具体使用场景；其余单位表示对应单位的绝对长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public value: number;

  /**
   * 设置LengthMetrics对象是否跟随系统配置变化自动更新。
   *
   * @param { boolean } value - 使用[resource]{@link LengthMetrics#resource}方法构造的LengthMetrics对象是否在系统配置变化时自动刷新值。
   *     <br>true表示主动监听系统配置变化，在变化时值刷新为对应配置下的资源值。
   *     <br>false表示不主动监听系统配置变化。
   * @returns { LengthMetrics } 返回设置自动刷新属性后的LengthMetrics对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoRefresh?(value: boolean): LengthMetrics;
}

/**
 * 提供颜色的统一表示与封装，支持颜色混合以及 RGB、Alpha 分量的获取。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare class ColorMetrics {
  /**
   * 使用HEX格式颜色实例化 ColorMetrics 类。
   *
   * @param { number } value - HEX格式颜色，支持RGB或者ARGB。
   *     <br>取值范围：[0, 0xffffffff]
   *     <br>超出范围时按边界值处理。
   * @returns { ColorMetrics } HEX格式颜色对应的颜色对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static numeric(value: number): ColorMetrics;

  /**
   * 使用rgb或者rgba格式颜色实例化 ColorMetrics 类。
   *
   * @param { number } red - 颜色的R分量（红色），值是0~255的整数。超出范围时按边界值处理。
   * @param { number } green - 颜色的G分量（绿色），值是0~255的整数。超出范围时按边界值处理。
   * @param { number } blue - 颜色的B分量（蓝色），值是0~255的整数。超出范围时按边界值处理。
   * @param { number } alpha - 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。
   *     <br> **说明：** alpha小于0为全透明，大于1为不透明。
   * @returns { ColorMetrics } rgb或rgba格式颜色对应的颜色对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics;

  /**
   * 使用[ColorSpace]{@link ColorSpace}和rgba格式颜色实例化ColorMetrics类。仅red、green、blue属性支持在display-p3色彩空间中设置颜色，alpha属性不受色彩空间影响。
   *
   * @param { ColorSpace } colorSpace - 色彩空间，用于指定颜色的色彩空间。使用ColorSpace.DISPLAY_P3，需要对应窗口调用
   *     [setWindowColorSpace]{@link @ohos.window:window.Window.setWindowColorSpace(colorSpace:ColorSpace)}接口，将当前窗口设置为广色
   *     域模式。
   * @param { number } red - 颜色的R分量（红色），值是0~1的浮点数。超出范围时按边界值处理。
   * @param { number } green - 颜色的G分量（绿色），值是0~1的浮点数。超出范围时按边界值处理。
   * @param { number } blue - 颜色的B分量（蓝色），值是0~1的浮点数。超出范围时按边界值处理。
   * @param { number } [alpha] - 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。
   *     <br> **说明：** alpha小于0为全透明，大于1为不透明。
   * @returns { ColorMetrics } 指定色彩空间下rgba格式颜色对应的颜色对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics;

  /**
   * 使用资源格式颜色实例化 ColorMetrics 类。
   *
   * @param { ResourceColor } color - 资源格式颜色。
   * @returns { ColorMetrics } 资源格式颜色对应的颜色对象。
   * @throws { BusinessError } 180003 - Failed to obtain the color resource.
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   *     1. The type of the input color parameter is not ResourceColor.
   *     2. The format of the input color string is not RGB or RGBA.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static resourceColor(color: ResourceColor): ColorMetrics;

  /**
   * 使用[ColorSpace]{@link ColorSpace}、线性曝光系数和rgba格式颜色实例化支持HDR的ColorMetrics类。如不需要通过曝光系数调节，可使用
   * [createHDRColor]{@link ColorMetrics#createHDRColor}直接设置RGB分量值大于1.0来呈现HDR效果。适用于需要按线性比例均匀调整HDR亮度的场景，如HDR图像预览、视频播放器色彩调
   * 节。
   *
   * @param { double } linearExposure - 线性曝光系数，取值范围：[1, +∞)。1.0表示标准曝光系数，大于1.0的值表示线性增加的曝光程度。传入小于1.0的值时将被自动钳位到1.0。
   * @param { ColorSpace } colorSpace - 色彩空间，用于指定颜色的色彩空间。使用ColorSpace.DISPLAY_P3，需要在当前窗口调用
   *     [setWindowColorSpace]{@link @ohos.window:window.Window.setWindowColorSpace(colorSpace:ColorSpace)}接口，将当前窗口设置为广色
   *     域模式。
   * @param { double } red - 颜色的R分量（红色），值是0.0~1.0的浮点数。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @param { double } green - 颜色的G分量（绿色），值是0.0~1.0的浮点数。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @param { double } blue - 颜色的B分量（蓝色），值是0.0~1.0的浮点数。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @param { double } [alpha] - 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @returns { ColorMetrics } 支持HDR的ColorMetrics类的实例，可用于表示HDR颜色及进行后续色彩空间查询、HDR状态判断和RGB分量获取等操作。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static createHDRColorWithLinearExposure(linearExposure: double, colorSpace: ColorSpace,
    red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 使用[ColorSpace]{@link ColorSpace}、对数型曝光系数和rgba格式颜色实例化支持HDR的ColorMetrics类。与
   * [createHDRColorWithLinearExposure]{@link ColorMetrics#createHDRColorWithLinearExposure}相比，两者均通过曝光系数创建HDR色彩，区别在于本方法使
   * 用对数型曝光系数（指数级增加曝光程度），后者使用线性曝光系数（线性增加曝光程度），开发者可根据所需的曝光调节方式选择。如不需要通过曝光系数调节，可使用
   * [createHDRColor]{@link ColorMetrics#createHDRColor}直接设置RGB分量值大于1.0来呈现HDR效果。适用于需要按对数关系调整HDR亮度（更贴近人眼感知）的场景，如HDR照片编辑、影
   * 视后期调色。
   *
   * @param { double } exposure - 对数型曝光系数，取值范围：[0, +∞)。0.0表示标准曝光系数，大于0.0的值表示指数级增加的曝光程度。传入负数时将被自动钳位到0.0。
   * @param { ColorSpace } colorSpace - 色彩空间，用于指定颜色的色彩空间。使用ColorSpace.DISPLAY_P3，需要在当前窗口调用
   *     [setWindowColorSpace]{@link @ohos.window:window.Window.setWindowColorSpace(colorSpace:ColorSpace)}接口，将当前窗口设置为广色
   *     域模式。
   * @param { double } red - 颜色的R分量（红色），值是0.0~1.0的浮点数。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @param { double } green - 颜色的G分量（绿色），值是0.0~1.0的浮点数。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @param { double } blue - 颜色的B分量（蓝色），值是0.0~1.0的浮点数。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @param { double } [alpha] - 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @returns { ColorMetrics } 支持HDR的ColorMetrics类的实例，可用于表示HDR颜色及进行后续色彩空间查询、HDR状态判断和RGB分量获取等操作。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static createHDRColorWithLogExposure(exposure: double, colorSpace: ColorSpace,
    red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 使用[ColorSpace]{@link ColorSpace}和rgba格式颜色实例化支持HDR的ColorMetrics类。适用于无需调整曝光系数、直接指定HDR颜色分量的场景，如HDR纯色背景绘制、固定HDR色彩配置。
   *
   * @param { ColorSpace } colorSpace - 色彩空间，用于指定颜色的色彩空间。使用ColorSpace.DISPLAY_P3，需要在当前窗口调用
   *     [setWindowColorSpace]{@link @ohos.window:window.Window.setWindowColorSpace(colorSpace:ColorSpace)}接口，将当前窗口设置为广色
   *     域模式。
   * @param { double } red - 颜色的R分量（红色），取值范围：[0, +∞)。大于1.0的值会使能HDR特性。传入负数时将被自动钳位到0.0。
   * @param { double } green - 颜色的G分量（绿色），取值范围：[0, +∞)。大于1.0的值会使能HDR特性。传入负数时将被自动钳位到0.0。
   * @param { double } blue - 颜色的B分量（蓝色），取值范围：[0, +∞)。大于1.0的值会使能HDR特性。传入负数时将被自动钳位到0.0。
   * @param { double } [alpha] - 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。超出范围时将被自动钳位到[0.0, 1.0]范围内。
   * @returns { ColorMetrics } 支持HDR的ColorMetrics类的实例，可用于表示HDR颜色及进行后续色彩空间查询、HDR状态判断和RGB分量获取等操作。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  static createHDRColor(colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 获取ColorMetrics的色彩空间。
   *
   * @returns { ColorSpace } 当前ColorMetrics对象所配置的色彩空间，可用于判断当前颜色使用的色彩空间类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getColorSpace(): ColorSpace;

  /**
   * 获取ColorMetrics是否呈现了HDR色彩。
   *
   * @returns { boolean } ColorMetrics是否呈现了HDR色彩。当色彩是通过createHDRColorWith系列方法（如
   *     [createHDRColorWithLinearExposure]{@link ColorMetrics#createHDRColorWithLinearExposure}）创建，或任意RGB分量值大于1.0时，将返回
   *     true；否则返回false，表示ColorMetrics未呈现HDR色彩。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  isHDR(): boolean;

  /**
   * 获取ColorMetrics颜色的R分量（红色）。
   *
   * @returns { double } 颜色的R分量（红色），值是大于等于0的浮点数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getRedValue(): double;

  /**
   * 获取ColorMetrics颜色的G分量（绿色）。
   *
   * @returns { double } 颜色的G分量（绿色），值是大于等于0的浮点数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getGreenValue(): double;

  /**
   * 获取ColorMetrics颜色的B分量（蓝色）。
   *
   * @returns { double } 颜色的B分量（蓝色），值是大于等于0的浮点数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  getBlueValue(): double;

  /**
   * 在当前颜色的上方叠加上一层指定的颜色（overlayColor），并返回混合后的新颜色。
   *
   * @param { ColorMetrics } overlayColor - 要叠加在上方的颜色对象。alpha属性决定叠加强度。1.0表示完全覆盖，0.0表示完全透明，混合结果为原色。
   * @returns { ColorMetrics } 新的颜色对象，其red、green、blue和alpha通道均为当前颜色与叠加颜色混合后的结果值。
   * @throws { BusinessError } 401 - Parameter error. The type of the input parameter is not ColorMetrics.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  blendColor(overlayColor: ColorMetrics): ColorMetrics;

  /**
   * 获取ColorMetrics的颜色，返回的是rgba字符串的格式。
   *
   * @returns { string } rgba字符串格式的颜色。 示例：'rgba(255, 100, 255, 0.5)'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get color(): string;

  /**
   * 获取ColorMetrics颜色的R分量（红色）。
   *
   * @returns { number } 颜色的R分量（红色），值是0~255的整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get red(): number;

  /**
   * 获取ColorMetrics颜色的G分量（绿色）。
   *
   * @returns { number } 颜色的G分量（绿色），值是0~255的整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get green(): number;

  /**
   * 获取ColorMetrics颜色的B分量（蓝色）。
   *
   * @returns { number } 颜色的B分量（蓝色），值是0~255的整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get blue(): number;

  /**
   * 获取ColorMetrics颜色的A分量（透明度）。
   *
   * @returns { number } 颜色的A分量（透明度），值是0~255的整数。通过rgba()或colorWithSpace()方法设置时alpha取值范围为0.0~1.0的浮点数，内部会转换为0~255的整数存储。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get alpha(): number;

  /**
   * 设置ColorMetrics对象是否跟随系统配置变化自动更新。
   *
   * @param { boolean } value - 使用[resourceColor]{@link ColorMetrics#resourceColor}方法构造的ColorMetrics对象是否在系统配置变化时自动刷新颜色值。
   *     <br>true表示主动监听系统配置变化，变化时值刷新为对应配置下的资源值。
   *     <br>false表示不主动监听系统配置变化。
   * @returns { ColorMetrics } 返回设置自动刷新属性后的ColorMetrics对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  autoRefresh?(value: boolean): ColorMetrics;
}

/**
 * 用于设置四个角的圆角属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface Corners<T> {
  /**
   * 左上边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  topLeft: T;

  /**
   * 右上边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  topRight: T;

  /**
   * 左下边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottomLeft: T;

  /**
   * 右下边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottomRight: T;
}

/**
 * 设置四个角的圆角x轴与y轴的半轴长。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type CornerRadius = Corners<Vector2>;

/**
 * 设置四个角的圆角半径。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type BorderRadiuses = Corners<number>;

/**
 * 用于设置矩形的形状。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export type Rect = common2D.Rect;

/**
 * 用于设置带有圆角的矩形。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface RoundRect {
  /**
   * 设置矩形的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  rect: Rect;

  /**
   * 设置圆角的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  corners: CornerRadius;
}

/**
 * 用于设置圆形的属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface Circle {
  /**
   * 圆心x轴的位置，单位为px。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  centerX: number;

  /**
   * 圆心y轴的位置，单位为px。
   * 
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  centerY: number;

  /**
   * 圆形的半径，单位为px。
   * 
   * 取值范围：[0, +∞)
   * 
   * 负数按默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  radius: number;
}

/**
 * 用于设置路径绘制的指令。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface CommandPath {
  /**
   * 路径绘制的指令字符串。像素单位的转换方法请参考[像素单位]{@link ../@internal/component/ets/common}。
   * 
   * 单位：px
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  commands: string;
}

/**
 * 用于设置图形遮罩，支持矩形、圆角矩形、圆形、椭圆及自定义路径等多种形状，可作用于RenderNode实现形状遮罩效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ShapeMask {
  /**
   * ShapeMask的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 用于设置矩形遮罩。
   *
   * @param { Rect } rect - 矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRectShape(rect: Rect): void;

  /**
   * 用于设置圆角矩形遮罩。
   *
   * @param { RoundRect } roundRect - 圆角矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * 用于设置圆形遮罩。
   *
   * @param { Circle } circle - 圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCircleShape(circle: Circle): void;

  /**
   * 用于设置椭圆形遮罩。
   *
   * @param { Rect } oval - 椭圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOvalShape(oval: Rect): void;

  /**
   * 用于设置路径绘制指令。
   *
   * @param { CommandPath } path - 路径绘制指令。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCommandPath(path: CommandPath): void;

  /**
   * 遮罩的填充颜色，使用ARGB格式。默认值为`0XFF000000`。
   * 
   * 取值范围：[0, 0xffffffff]
   * 
   * 超出范围时按默认值处理。
   * 
   * 通过fillColor的透明度和亮度生成一个仅含透明度的颜色。亮度越高，颜色越透明。然后，使用[BlendMode.SRC_IN]{@link @ohos.graphics.drawing:drawing.BlendMode}方式
   * 与RenderNode本身的颜色混合，生成最终颜色。
   *
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  fillColor: number;

  /**
   * 遮罩的边框颜色，使用ARGB格式。默认值为`0XFF000000`。
   * 
   * 取值范围：[0, 0xffffffff]
   * 
   * 超出范围时按默认值处理。 
   * 
   * 通过strokeColor的透明度和亮度生成一个仅含透明度的颜色。亮度越高，颜色越透明。然后，使用[BlendMode.SRC_IN]{@link @ohos.graphics.drawing:drawing.BlendMode}
   * 方式与RenderNode本身的颜色混合，生成最终颜色。
   *
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeColor: number;

  /**
   * 遮罩的边框宽度，单位为px。默认值为0。
   * 
   * 取值范围：[0, +∞)
   * 
   * 负数按默认值处理。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth: number;
}

/**
 * 用于设置图形裁剪，支持矩形、圆角矩形、圆形、椭圆及自定义路径等多种形状，可对RenderNode进行形状裁剪，仅显示裁剪区域内的内容。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ShapeClip {
  /**
   * ShapeClip的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor();

  /**
   * 用于裁剪矩形。
   *
   * @param { Rect } rect - 矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRectShape(rect: Rect): void;

  /**
   * 用于裁剪圆角矩形。
   *
   * @param { RoundRect } roundRect - 圆角矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * 用于裁剪圆形。
   *
   * @param { Circle } circle - 圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCircleShape(circle: Circle): void;

  /**
   * 用于裁剪椭圆形。
   *
   * @param { Rect } oval - 椭圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setOvalShape(oval: Rect): void;

  /**
   * 用于按路径绘制指令进行裁剪。
   *
   * @param { CommandPath } path - 路径绘制指令。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setCommandPath(path: CommandPath): void;
}

/**
 * 用于生成边框颜色均设置为传入值的边框颜色对象。
 *
 * @param { number } all - 边框颜色，ARGB格式，示例：0xffff00ff。
 *     <br>取值范围：[0, 0xffffffff]
 *     <br>超出范围时按边界值处理。
 * @returns { Edges<number> } 边框颜色均设置为传入值的边框颜色对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function edgeColors(all: number): Edges<number>;

/**
 * 用于生成边框宽度均设置为传入值的边框宽度对象。
 *
 * @param { number } all - 边框宽度，单位为vp。
 *     <br>取值范围：[0, +∞)
 *     <br>负数按默认值处理。
 * @returns { Edges<number> } 边框宽度均设置为传入值的边框宽度对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function edgeWidths(all: number): Edges<number>;

/**
 * 用于生成边框样式均设置为传入值的边框样式对象。
 *
 * @param { BorderStyle } all - 边框样式。
 * @returns { Edges<BorderStyle> } 边框样式均设置为传入值的边框样式对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function borderStyles(all: BorderStyle): Edges<BorderStyle>;

/**
 * 用于生成边框圆角均设置为传入值的边框圆角对象。
 *
 * @param { number } all - 边框圆角。
 *     <br>单位：vp
 *     <br>取值范围：[0, +∞)
 *     <br>负数按默认值处理。
 * @returns { BorderRadiuses } 边框圆角均设置为传入值的边框圆角对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export function borderRadiuses(all: number): BorderRadiuses;

/**
 * 设置背景模糊效果，支持通过模糊半径控制模糊程度，并可通过灰阶参数对图像黑白像素进行色阶调整。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface BackgroundBlur {
  /**
   * 模糊半径。
   * 
   * 单位：px
   * 
   * 取值范围为[0, +∞)，默认值为0，负数、NaN和Infinity按默认值处理。值越大背景模糊效果越明显，为0时不模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radius: double;

  /**
   * 灰阶模糊参数，两参数取值范围均为[0, 127]，默认值为[0, 0]，超出范围时按默认值处理。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。参数一表示对黑色的提亮程度，参数二表示对白色的压暗
   * 程度，参数值越大调整效果越明显（黑白色变得越灰）。例如：设置参数为（20，20），图片中的黑色像素RGB：[0, 0, 0]会调整为[20, 20, 20]（0+20），白色像素RGB：[255, 255, 255]会调整为
   * [235, 235, 235]（255-20），图像中的彩色像素维持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  grayscale?: [int, int];
}

/**
 * 设置内容模糊效果，支持通过模糊半径控制模糊程度，并可通过灰阶参数对图像黑白像素进行色阶调整。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ContentBlur {
  /**
   * 模糊半径。
   * 
   * 单位：px
   * 
   * 取值范围为[0, +∞)，默认值为0，负数、NaN和Infinity按默认值处理。值越大模糊效果越明显，为0时不模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radius: double;

  /**
   * 灰阶模糊参数，两参数取值范围均为[0, 127]，默认值为[0, 0]，超出范围时按默认值处理。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。参数一表示对黑色的提亮程度，参数二表示对白色的压暗
   * 程度，参数值越大调整效果越明显（黑白色变得越灰）。例如：设置参数为（20，20），图片中的黑色像素RGB：[0, 0, 0]会调整为[20, 20, 20]（0+20），白色像素RGB：[255, 255, 255]会调整为
   * [235, 235, 235]（255-20），图像中的彩色像素维持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  grayscale?: [int, int];
}

/**
 * 设置前景模糊效果，支持通过模糊半径控制模糊程度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export interface ForegroundBlur {
  /**
   * 模糊半径。
   * 
   * 单位：px
   * 
   * 取值范围为[0, +∞)，默认值为0，负数、NaN和Infinity按默认值处理。值越大前景模糊效果越明显，为0时不模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  radius: double;
}