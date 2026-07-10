'use static';
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

import drawing from '../@ohos.graphics.drawing';

import type common2D from '../@ohos.graphics.common2D';

import { Resource } from '../global/resource';

import { ResourceColor } from '@ohos.arkui.component';

import { BorderStyle } from '@ohos.arkui.component';

import { ColorSpace } from '@ohos.arkui.component';

/**
* 用于返回组件布局大小的宽和高。默认单位为vp，不同的接口使用Size类型时会再定义单位，以接口定义的单位为准。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface Size {

  /**
   * 组件大小的宽度。
   * 单位：vp。
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: double;

  /**
   * 组件大小的高度。
   * 单位：vp。
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: double;
}

/**
* 图形绘制上下文，提供绘制所需的画布宽度和高度。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class DrawContext {

  /**
   * 获取画布的宽度和高度。
   *
   * @returns { Size } 画布的宽度和高度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get size() :Size;

  /**
   * 获取以px为单位的画布的宽度和高度。
   *
   * @returns { Size } 画布的宽度和高度，以px为单位。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get sizeInPixel(): Size;

  /**
   * 获取用于绘制的画布。
   *
   * @returns { drawing.Canvas } The canvas of the DrawContext.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get canvas(): drawing.Canvas;
}

/**
* 用于表示包含x和y两个值的向量。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface Vector2 {

  /**
   * 向量x轴方向的值。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x: double;

  /**
   * 向量y轴方向的值。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y: double;
}

/**
* 用于表示T类型的包含x和y两个值的向量。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface Vector2T<T> {

  /**
   * 向量x轴方向的值。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x: T;

  /**
   * 向量y轴方向的值。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y: T;
}

/**
* 用于表示包含x、y、z三个值的向量。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface Vector3 {

  /**
   * 向量x轴方向的值。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x: double;

  /**
   * 向量y轴方向的值。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y: double;

  /**
   * z轴方向的旋转角度。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  z: double;
}

/**
* 用于表示包含x、y、z、w四个值的向量。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface Vector4 {

  /**
   * 向量x轴方向的值。
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;

  /**
   * 向量y轴方向的值。
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;

  /**
   * 向量z轴方向的值。
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  z: double;

  /**
   * 向量w轴方向的值。
   *
   * 取值范围：(-∞, +∞)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  w: double;
}

/**
 * 设置四阶矩阵。
 * 用于设置组件的变换信息，该类型为一个 4x4 矩阵，使用一个长度为16的`number[]`进行表示，各number取值范围：(-∞, +∞)。例如：
 * ```
 * const transform: Matrix4 = [
 * 1, 0, 45, 0,
 * 0, 1,  0, 0,
 * 0, 0,  1, 0,
 * 0, 0,  0, 1
 * ]
 * ```。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Matrix4 = [
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double,
  double
];

/**
 * 用于设置组件或效果的偏移。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NodeOffset = Vector2;

/**
 * 用于设置或返回组件的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NodePosition = Vector2;

/**
 * 用于设置或返回组件的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PositionT<T> = Vector2T<T>;

/**
 * 用于设置组件的轴心坐标，轴心会作为组件的旋转/缩放中心点，影响旋转和缩放效果。轴心的x和y轴坐标为浮点数，默认值为0.5， 取值范围为[0.0, 1.0]。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Pivot = Vector2;

/**
* 用于设置组件的缩放比例。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Scale = Vector2;

/**
* 用于设置组件的平移量。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Translation = Vector2;

/**
* 用于设置组件的旋转角度。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Rotation = Vector3;

/**
* 用于设置或返回组件的布局大小和位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Frame {

  /**
   * 水平方向位置。
   * 单位：vp。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x: double;

  /**
   * 垂直方向位置。
   * 单位：vp。
   * 取值范围：(-∞, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y: double;

  /**
   * 组件的宽度。
   * 单位：vp。
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: double;

  /**
   * 组件的高度。
   * 单位：vp。
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: double;
}

/**
* 用于设置边框的属性，属性包括边框风格、边框颜色、边框宽度、边框长度等。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface NodeEdges<T> {

  /**
   * 左侧边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left: T;

  /**
   * 右侧边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right: T;

  /**
   * 顶部边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top: T;

  /**
   * 底部边框的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom: T;
}

/**
* 长度属性单位枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LengthUnit {

  /**
   * 长度类型，用于描述以px像素单位为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PX = 0,

  /**
   * 长度类型，用于描述以vp像素单位为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  VP = 1,

  /**
   * 长度类型，用于描述以fp像素单位为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FP = 2,

  /**
   * 长度类型，用于描述以%像素单位为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PERCENT = 3,

  /**
   * 长度类型，用于描述以lpx像素单位为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LPX = 4
}

/**
* 用于设置宽高的属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface SizeT<T> {

  /**
   * 宽度的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: T;

  /**
   * 高度的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: T;
}

/**
* 长度属性单位枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export enum LengthMetricsUnit {

  /**
   * 长度类型，用于描述以默认的vp像素单位为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * 长度类型，用于描述以px像素单位为单位的长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PX = 1
}

/**
* 用于设置长度属性，当长度单位为PERCENT时，值为1表示100%。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class LengthMetrics {

  /**
   *
   * @param { double } value - 长度属性的值。<br/>取值范围：[0, +∞)
   * @param { LengthUnit } [unit] - 长度属性的单位。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: double, unit?:LengthUnit);

  /**
   * 初始化一个带有px单位的lengthMetrics。
   *
   * @param { double } value - 长度属性的值。<br/>。
   *     <br>取值范围：(-∞, +∞)。
   * @returns { LengthMetrics } LengthMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static px(value: double): LengthMetrics;

  /**
   * 初始化一个带有vp单位的lengthMetrics。
   *
   * @param { double } value - 长度属性的值。<br/>。
   *     <br>取值范围：(-∞, +∞)。
   * @returns { LengthMetrics } - LengthMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static vp(value: double): LengthMetrics;

  /**
   * 用fp单位初始化一个lengthMetrics。
   *
   * @param { double } value - 长度属性的值。<br/>。
   *     <br>取值范围：(-∞, +∞)。
   * @returns { LengthMetrics } LengthMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static fp(value: double): LengthMetrics;

  /**
   * 初始化一个带有百分比单位的lengthMetrics。
   *
   * @param { double } value - 长度属性的值。<br/>。
   *     <br>取值范围：[0, 1]。
   * @returns { LengthMetrics } LengthMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static percent(value: double): LengthMetrics;

  /**
   * 用lpx单位初始化一个lengthMetrics。
   *
   * @param { double } value - 长度属性的值。<br/>。
   *     <br>取值范围：(-∞, +∞)。
   * @returns { LengthMetrics } LengthMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static lpx(value: double): LengthMetrics;

  /**
   * 用于生成Resource类型资源的长度属性。
   *
   * @param { Resource } value - 长度属性的值。
   * @returns { LengthMetrics } LengthMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static resource(value: Resource): LengthMetrics;

  /**
   * 长度属性的单位，默认为VP。
   *
   * @default VP
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public unit: LengthUnit;

  /**
   * 长度属性的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public value: double;
}

/**
* 用于混合颜色。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ColorMetrics {

  /**
   * 白色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly WHITE: int;

  /**
   * 黑色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly BLACK: int;

  /**
   * 蓝色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly BLUE: int;

  /**
   * 棕色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly BROWN: int;

  /**
   * 灰色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly GRAY: int;

  /**
   * 绿色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly GREEN: int;

  /**
   * 灰色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly GREY: int;

  /**
   * 橘色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly ORANGE: int;

  /**
   * 粉色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly PINK: int;

  /**
   * 红色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly RED: int;

  /**
   * 黄色。
   * 取值限定为整数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly YELLOW: int;

  /**
   * 透明度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  public static readonly TRANSPARENT: string;

  /**
   * 使用颜色编号实例化ColorMetrics类
   *
   * @param { int } value - HEX格式颜色。<br/>取值范围：支持rgb或者argb。
   *     <br>取值限定为整数。
   * @returns { ColorMetrics } ColorMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static numeric(value: int): ColorMetrics;

  /**
   * 使用颜色rgb实例化ColorMetrics类
   *
   * @param { double } red - 颜色的R分量（红色），值是0~255的整数。
   * @param { double } green - 颜色的G分量（绿色），值是0~255的整数。
   * @param { double } blue - 颜色的B分量（蓝色），值是0~255的整数。
   * @param { double } [alpha] - 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。<br/> **说明：** alpha小于0为全透明，大于1为不透明。
   * @returns { ColorMetrics } ColorMetrics 类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static rgba(red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 使用colorSpace和rgba实例化ColorMetrics类。
   * 只有部分属性支持在display-p3 colorSpace中设置颜色。
   *
   * @param { ColorSpace } colorSpace - 颜色空间，用于指定颜色的色彩空间。使用ColorSpace.DISPLAY_P3，需要对应窗口调用
   *     [setWindowColorSpace](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowcolorspace9-1)接口，将当前窗
   *     口设置为广色域模式。
   * @param { double } red - 颜色的R分量（红色），值是0~1的浮动数值。
   * @param { double } green - 颜色的G分量（绿色），值是0~1的浮动数值。
   * @param { double } blue - 颜色的B分量（蓝色），值是0~1的浮动数值。
   * @param { double } [alpha] - 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。
   * @returns { ColorMetrics } ColorMetrics类的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static colorWithSpace(colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 使用资源格式颜色实例化 ColorMetrics 类。
   *
   * @param { ResourceColor } color - 资源格式颜色。
   * @returns { ColorMetrics } ColorMetrics 类的实例。
   * @throws { BusinessError } 180003 - Failed to obtain the color resource.
   * @throws { BusinessError } 401 - Parameter error. Possible cause:
   *     1. The type of the input color parameter is not ResourceColor.
   *     2. The format of the input color string is not RGB or RGBA.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static resourceColor(color: ResourceColor): ColorMetrics;

  /**
   * 使用具有线性曝光的HDR颜色创建ColorMetrics类。
   * 创建具有指定线性曝光的HDR颜色值。
   * 曝光值控制线性色彩空间中颜色的亮度。
   * 使用线性曝光时，RGB通道值通常在【0,1】范围内。
   *
   * @param { double } linearExposure - 曝光值中的线性曝光值。
   *     有效范围：[1, +∞)。
   *     值为1.0表示标准曝光。
   *     大于1.0的值会线性增加亮度。
   * @param { ColorSpace } colorSpace - 颜色的颜色空间。
   *     支持SRGB、Display_P3、BT2020颜色空间。
   * @param { double } red - 红色分量值。有效范围：【0,1】。
   * @param { double } green - 绿色分量值。有效范围：【0,1】。
   * @param { double } blue - 蓝色分量值。有效范围：【0,1】。
   * @param { double } [alpha] - Alpha（不透明度）分量值。有效范围：【0,1】。
   *     默认值为1.0（完全不透明）。
   * @returns { ColorMetrics } 带有HDR颜色的ColorMetrics类实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static createHDRColorWithLinearExposure(linearExposure: double, colorSpace: ColorSpace,
      red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 使用具有对数曝光的HDR颜色创建ColorMetrics类。
   * 使用指定的对数曝光（色度）创建HDR颜色值。
   * 曝光值控制对数（感知）色彩空间中的亮度。
   * 使用对数曝光时，RGB通道值通常在【0,1】范围内。
   *
   * @param { double } exposure - 对数曝光值，单位为秒。
   *     有效范围：[0, +∞)。
   *     值0.0表示标准曝光。
   *     每增加1.0将使亮度加倍（一次停止）。
   * @param { ColorSpace } colorSpace - 颜色的颜色空间。
   *     支持SRGB、Display_P3、BT2020颜色空间。
   * @param { double } red - 红色分量值。有效范围：【0,1】。
   * @param { double } green - 绿色分量值。有效范围：【0,1】。
   * @param { double } blue - 蓝色分量值。有效范围：【0,1】。
   * @param { double } [alpha] - Alpha（不透明度）分量值。有效范围：【0,1】。
   *     默认值为1.0（完全不透明）。
   * @returns { ColorMetrics } 带有HDR颜色的ColorMetrics类实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static createHDRColorWithLogExposure(exposure: double, colorSpace: ColorSpace,
      red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 使用默认曝光的HDR颜色创建ColorMetrics类。
   * 使用默认曝光（0.0表示对数，1.0表示线性）创建HDR颜色值。
   * 当没有指定曝光值时，RGB通道值可以超过1.0以实现HDR亮度。
   * 这与iOS UIColor行为匹配，其中RGB值> 1.0启用HDR渲染。
   *
   * @param { ColorSpace } colorSpace - 颜色的颜色空间。
   *     支持SRGB、Display_P3、BT2020颜色空间。
   * @param { double } red - 红色分量值。有效范围：[0, +∞)。
   *     大于1.0的值启用HDR亮度。
   * @param { double } green - 绿色分量值。有效范围：[0, +∞)。
   *     大于1.0的值启用HDR亮度。
   * @param { double } blue - 蓝色分量值。有效范围：[0, +∞)。
   *     大于1.0的值启用HDR亮度。
   * @param { double } [alpha] - Alpha（不透明度）分量值。有效范围：【0,1】。
   *     默认值为1.0（完全不透明）。
   * @returns { ColorMetrics } 带有HDR颜色的ColorMetrics类实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static createHDRColor(colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics;

  /**
   * 获取ColorMetrics的颜色空间。
   * 返回创建此颜色时使用的颜色空间。
   *
   * @returns { ColorSpace } The color space of the ColorMetrics.
   *     Possible value: ColorSpace.SRGB, ColorSpace.DISPLAY_P3, ColorSpace.BT2020.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getColorSpace(): ColorSpace;

  /**
   * 检查ColorMetrics是否代表HDR颜色。
   * 如果颜色是使用createHDRColorWithXx()创建的，或者RGB值> 1.0，则返回true。
   *
   * @returns { boolean } ColorMetrics是否是HDR颜色。
   *     如果满足以下条件，则返回true：
   *     -颜色是使用createHDRColorWithXx()方法创建的。
   *     -任何RGB通道值都大于1.0。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isHDR(): boolean;

  /**
   * 获取红色值。
   * 以浮点数形式返回红色通道值。
   * 对于SDR颜色，值在【0,1】范围内。
   * 对于HDR颜色，值可以大于1.0以表示扩展亮度。
   *
   * @returns { double } 红色值。
   *     有效范围：[0, +∞)。
   *     对于SDR颜色：【0,1】。
   *     HDR颜色：[0,+∞),>1.0表示HDR亮度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getRedValue(): double;

  /**
   * 获取绿色值。
   * 以浮点数形式返回绿色通道值。
   * 对于SDR颜色，值在【0,1】范围内。
   * 对于HDR颜色，值可以大于1.0以表示扩展亮度。
   *
   * @returns { double } 绿色的值。
   *     有效范围：[0, +∞)。
   *     对于SDR颜色：【0,1】。
   *     HDR颜色：[0,+∞),>1.0表示HDR亮度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getGreenValue(): double;

  /**
   * 获取蓝色值。
   * 以浮点数形式返回蓝色通道值。
   * 对于SDR颜色，值在【0,1】范围内。
   * 对于HDR颜色，值可以大于1.0以表示扩展亮度。
   *
   * @returns { double } 蓝色值。
   *     有效范围：[0, +∞)。
   *     对于SDR颜色：【0,1】。
   *     HDR颜色：[0,+∞),>1.0表示HDR亮度。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
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
   * @since 23 static
   */
  blendColor(overlayColor: ColorMetrics): ColorMetrics;

  /**
   * 获取ColorMetrics的颜色，返回的是rgba字符串的格式。
   *
   * @returns { string } rgba字符串格式的颜色。 示例：'rgba(255, 100, 255, 0.5)'
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get color(): string;

  /**
   *
   * @returns { int } 颜色的R分量（红色），值是0~255的整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get red(): int;

  /**
   *
   * @returns { int } 颜色的G分量（绿色），值是0~255的整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get green(): int;

  /**
   *
   * @returns { int } 颜色的B分量（蓝色），值是0~255的整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get blue(): int;

  /**
   *
   * @returns { int } 颜色的A分量（透明度），值是0~255的整数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get alpha(): int;
}

/**
* 用于设置四个角的圆角属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface Corners<T> {

  /**
   * 左上边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topLeft: T;

  /**
   * 右上边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topRight: T;

  /**
   * 左下边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomLeft: T;

  /**
   * 右下边框的圆角属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomRight: T;
}

/**
* 设置四个角的圆角x轴与y轴的半轴长。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type CornerRadius = Corners<Vector2>;

/**
* 设置四个角的圆角度数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type NodeBorderRadiuses = Corners<double>;

/**
* 用于设置矩形的形状。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Rect = common2D.Rect;

/**
* 用于设置带有圆角的矩形。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface RoundRect {

  /**
   * 设置矩形的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  rect: Rect;

  /**
   * 设置圆角的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  corners: CornerRadius;
}

/**
* 用于设置圆形的属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface Circle {

  /**
   * 圆心x轴的位置，单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerX: double;

  /**
   * 圆心y轴的位置，单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  centerY: double;

  /**
   * 圆形的半径，单位为px。
   * 取值范围：[0, +∞)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  radius: double;
}

/**
* 用于设置路径绘制的指令。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface CommandPath {

  /**
   * 路径绘制的指令字符串。像素单位的转换方法请参考[像素单位]{@link common}。
   * 单位：px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  commands: string;
}

/**
* 用于设置图形遮罩。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ShapeMask {

  /**
   * ShapeMask的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 用于设置矩形遮罩。
   *
   * @param { Rect } rect - 矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setRectShape(rect: Rect): void;

  /**
   * 用于设置圆角矩形遮罩。
   *
   * @param { RoundRect } roundRect - 圆角矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * 用于设置圆形遮罩。
   *
   * @param { Circle } circle - 圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCircleShape(circle: Circle): void;

  /**
   * 用于设置椭圆形遮罩。
   *
   * @param { Rect } oval - 椭圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setOvalShape(oval: Rect): void;

  /**
   * 用于设置路径绘制指令。
   *
   * @param { CommandPath } path - 路径绘制指令。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCommandPath(path: CommandPath): void;

  /**
   * 遮罩的填充颜色，使用ARGB格式。默认值为`0XFF000000`。
   * 通过fillColor的透明度和亮度生成一个仅含透明度的颜色。亮度越高，颜色越透明。然后，使用[BlendMode.SRC_IN]{@link @ohos.graphics.drawing:drawing.BlendMode}方式
   * 与RenderNode本身的颜色混合，生成最终颜色。
   * 取值限定为整数。
   *
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillColor: int;

  /**
   * 遮罩的边框颜色，使用ARGB格式。默认值为`0XFF000000`。
   * 通过strokeColor的透明度和亮度生成一个仅含透明度的颜色。亮度越高，颜色越透明。然后，使用[BlendMode.SRC_IN]{@link @ohos.graphics.drawing:drawing.BlendMode}
   * 方式与RenderNode本身的颜色混合，生成最终颜色。
   * 取值限定为整数。
   *
   * @default 0XFF000000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeColor: int;

  /**
   * 遮罩的边框宽度，单位为px。默认值为0。
   *
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeWidth: double;
}

/**
* 用于设置图形裁剪。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ShapeClip {

  /**
   * ShapeMask的构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor();

  /**
   * 用于裁剪矩形。
   *
   * @param { Rect } rect - 矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setRectShape(rect: Rect): void;

  /**
   * 用于裁剪圆角矩形。
   *
   * @param { RoundRect } roundRect - 圆角矩形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setRoundRectShape(roundRect: RoundRect): void;

  /**
   * 用于裁剪圆形。
   *
   * @param { Circle } circle - 圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCircleShape(circle: Circle): void;

  /**
   * 用于裁剪椭圆形。
   *
   * @param { Rect } oval - 椭圆形的形状。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setOvalShape(oval: Rect): void;

  /**
   * 用于裁剪路径绘制指令。
   *
   * @param { CommandPath } path - 路径绘制指令。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setCommandPath(path: CommandPath): void;
}

/**
*
 * @param { int } all - 边框颜色，ARGB格式，示例：0xffff00ff。<br/>取值范围：[0, 0xffffffff]
 * @returns { NodeEdges<int> } - 边框颜色均设置为传入值的边框颜色对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function edgeColors(all: int): NodeEdges<int>;

/**
*
 * @param { double } all - 边框宽度，单位为vp。<br/>取值范围：[0, +∞)
 * @returns { NodeEdges<double> } - 边框宽度均设置为传入值的边框宽度对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function edgeWidths(all: double): NodeEdges<double>;

/**
*
 * @param { BorderStyle } all - 边框样式。
 * @returns { NodeEdges<BorderStyle> } - 边框样式均设置为传入值的边框样式对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function borderStyles(all: BorderStyle): NodeEdges<BorderStyle>;

/**
* 获取所有边都设置为相同半径的BorderRadiuses对象。
*
 * @param { double } all - 边框圆角。<br/>单位：vp<br/>。
*     <br>取值范围：[0, +∞)。
 * @returns { NodeBorderRadiuses } - 边框圆角均设置为传入值的边框圆角对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare function borderRadiuses(all: double): NodeBorderRadiuses;

/**
* 设置背景模糊效果。
*
* .0.0
*
* .0.0
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface BackgroundBlur {

  /**
   * 模糊半径。取值范围为[0, +∞)，默认值为0，值越大背景模糊效果越明显，为0时不模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  radius: double;

  /**
   * 灰阶模糊参数，两参数取值范围均为[0, 127]，默认值为[0, 0]。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。参数一表示对黑色的提亮程度，参数二表示对白色的压暗程度，参数值越大调整效果
   * 越明显（黑白色变得越灰）。例如：设置参数为（20, 20），图片中的黑色像素RGB:[0, 0, 0]会调整为[20, 20, 20]（0+20），白色像素RGB:[255, 255, 255]会调整为
   * [235, 235, 235]（255-20），图像中的彩色像素维持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  grayscale?: [int, int];
}

/**
* 设置内容模糊效果。
*
* .0.0
*
* .0.0
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface ContentBlur {

  /**
   * 模糊半径。取值范围为[0, +∞)，默认值为0，值越大模糊效果越明显，为0时不模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  radius: double;

  /**
   * 灰阶模糊参数，两参数取值范围均为[0, 127]，默认值为[0, 0]。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。参数一表示对黑色的提亮程度，参数二表示对白色的压暗程度，参数值越大调整效果
   * 越明显（黑白色变得越灰）。例如：设置参数为（20, 20），图片中的黑色像素RGB:[0, 0, 0]会调整为[20, 20, 20]（0+20），白色像素RGB:[255, 255, 255]会调整为
   * [235, 235, 235]（255-20），图像中的彩色像素维持不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  grayscale?: [int, int];
}

/**
* 设置前景模糊效果。
*
* .0.0
*
* .0.0
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface ForegroundBlur {

  /**
   * 模糊效果半径。取值范围为[0, +∞)，默认值为0，值越大前景模糊效果越明显，为0时不模糊。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  radius: double;
}