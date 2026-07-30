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
 基础类型定义
 * @file
 基础类型定义
 * @kit ArkUI
 */

import { Resource as _Resource } from '../../global/resource';

import { Color, BorderStyle, FontWeight, FontStyle, DividerMode, PresetFillType } from './enums';
import { Color, BorderStyle, FontWeight, FontStyle, DividerMode, PresetFillType } from "./enums";
import { OutlineStyle, AttributeModifier, CommonMethod, AccessibilityRoleType} from './common';
import { LengthMetricsUnit as _LengthMetricsUnit, LengthMetrics as _LengthMetrics, ColorMetrics as _ColorMetrics } from '../Graphics';
import { memo, ComponentBuilder } from "./../stateManagement/runtime";
import _drawing from '../../../api/@ohos.graphics.drawing';

/**
 * 资源引用类型，用于设置组件属性的值。各类资源文件，需要放入特定子目录中存储管理，资源目录的示例请参考
 * [资源分类](docroot://quick-start/resource-categories-and-access.md#资源分类)。
 * 
 * 可以通过`$r`或者`$rawfile`创建Resource类型对象，不可以修改Resource中的各属性的值。
 * 
 * - `$r('belonging.type.name')`
 * 
 *  belonging：系统资源或者应用资源，相应的取值为'sys'和'app'；
 * 
 *  type：资源类型，支持'boolean'、'color'、'float'、'intarray'、'integer'、'pattern'、'plural'、'strarray'、'string'、'media'；
 * 
 *  name：资源名称，在资源定义时确定。
 * - `$rawfile('filename')`
 * 
 *  filename：工程中resources/rawfile目录下的文件名称。
 * 
 * > **说明：**
 * >
 * > - 引用资源类型时，需确保资源类型对象内的数据类型与当前以资源类型作为参数的属性方法本身的类型一致。例如某个属性方法支持设置string | Resource，那么在使用Resource引用类型时，其数据类型也应当为string。
 * >
 * > - 引用资源类型时，需确保资源类型对象用法为当前支持的用法，否则当前以资源类型作为参数的属性效果将和不设置该属性相同。
 * >
 * > - $rawfile不支持通过[预览器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkts-js)预览。
 *
 * @typedef { _Resource } Resource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Resource = _Resource;

/**
 * 长度类型，用于描述尺寸单位。
 *
 * @typedef { string | double | Resource } Length
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Length = string | double | Resource;

/**
 * 长度类型，用于描述以px像素单位为单位的长度。
 *
 * @typedef { string } PX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type PX = string;

/**
 * 长度类型，用于描述以vp像素单位为单位的长度。
 *
 * @typedef { string | double } VP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type VP = string | double;

/**
 * 长度类型，用于描述以fp像素单位为单位的长度。
 *
 * @typedef { string } FP
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type FP = string;

/**
 * 长度类型，用于描述以lpx像素单位为单位的长度。
 *
 * @typedef { string } LPX
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type LPX = string;

/**
 * 长度类型，用于描述以百分比单位为单位的长度。
 *
 * @typedef { string } Percentage
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Percentage = string;

/**
 * 角度类型，用于描述以deg像素单位为单位的长度。
 *
 * @typedef { string } Degree
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Degree = string;

/**
 * 长度类型，用于描述尺寸单位。
 *
 * @typedef { PX | VP | FP | LPX | Percentage | Resource } Dimension
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Dimension = PX | VP | FP | LPX | Percentage | Resource;

/**
 * 字符串类型，用于描述字符串入参可以使用的类型。
 *
 * @typedef { string | Resource } ResourceStr
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ResourceStr = string | Resource;

/**
 * 可用于向DrawingRenderingContext上绘制内容的画布对象。
 *
 * @typedef { _drawing.Canvas } DrawingCanvas
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DrawingCanvas = _drawing.Canvas;

/**
 * type Padding = { top: Length; right: Length; bottom: Length; left: Length; }
 * 
 * 内边距类型，用于描述组件不同方向的内边距。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @interface Padding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Padding {
  /**
   * 上内边距，组件内元素距组件顶部的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: Length;

  /**
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right?: Length;

  /**
   * 下内边距，组件内元素距组件底部的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: Length;

  /**
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: Length;
}

/**
 * 内边距类型，用于描述组件不同方向的内边距。
 *
 * @interface LocalizedPadding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedPadding {
  /**
   * 上内边距，组件内元素距组件顶部的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: LengthMetrics;

  /**
   * 右内边距，组件内元素距组件右边界的尺寸。
   * 
   * 从右至左显示语言模式下为
   * 
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: LengthMetrics;

  /**
   * 下内边距，组件内元素距组件底部的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: LengthMetrics;

  /**
   * 左内边距，组件内元素距组件左边界的尺寸。
   * 
   * 从右至左显示语言模式下为
   * 
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: LengthMetrics;
}

/**
 * 外边距类型，用于描述组件不同方向的外边距。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @typedef { Padding } Margin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Margin = Padding;

/**
 * 边框宽度类型，用于描述组件边框不同方向的宽度。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @typedef { EdgeWidths } EdgeWidth
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type EdgeWidth = EdgeWidths;

/**
 * type EdgeWidths = { top: Length; right: Length; bottom: Length; left: Length; }
 * 
 * 边框宽度类型，用于描述组件边框不同方向的宽度。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @interface EdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeWidths {
  /**
   * 上内边距，组件内元素距组件顶部的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: Length;

  /**
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right?: Length;

  /**
   * 下内边距，组件内元素距组件底部的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: Length;

  /**
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: Length;
}

/**
 * 边框宽度类型，用于描述组件边框不同方向的宽度。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @interface LocalizedEdgeWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedEdgeWidths {
  /**
   * 上内边距，组件内元素距组件顶部的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: LengthMetrics;

  /**
   * 右内边距，组件内元素距组件右边界的尺寸。
   * 
   * 从右至左显示语言模式下为
   * 
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: LengthMetrics;

  /**
   * 下内边距，组件内元素距组件底部的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: LengthMetrics;

  /**
   * 左内边距，组件内元素距组件左边界的尺寸。
   * 
   * 从右至左显示语言模式下为
   * 
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: LengthMetrics;
}

/**
 * 引入该对象时，至少传入一个参数。
 *
 * @interface EdgeOutlineWidths
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeOutlineWidths {
  /**
   * 上侧外描边宽度。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: Dimension;

  /**
   * 右侧外描边宽度。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right?: Dimension;

  /**
   * 下侧外描边宽度。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: Dimension;

  /**
   * 左侧外描边宽度。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: Dimension;
}

/**
 * type BorderRadiuses = { topLeft: Length; topRight: Length; bottomLeft: Length; bottomRight: Length; }
 * 
 * 圆角类型，用于描述组件边框圆角半径。
 * 
 * 引用该对象时，至少传入一个参数。
 *
 * @interface BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BorderRadiuses {
  /**
   * 组件左上角圆角半径。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topLeft?: Length;

  /**
   * 组件右上角圆角半径。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topRight?: Length;

  /**
   * 组件左下角圆角半径。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomLeft?: Length;

  /**
   * 组件右下角圆角半径。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomRight?: Length;
}

/**
 * 圆角类型，用于描述组件边框圆角半径。
 * 
 * 引用该对象时，至少传入一个参数。
 *
 * @interface LocalizedBorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedBorderRadiuses {
  /**
   * 组件左上角圆角半径。
   * 
   * 从右至左显示语言模式下为组件右上角圆角半径。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topStart?: LengthMetrics;

  /**
   * 组件右上角圆角半径。
   * 
   * 从右至左显示语言模式下为组件左上角圆角半径。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topEnd?: LengthMetrics;

  /**
   * 组件左下角圆角半径。
   * 
   * 从右至左显示语言模式下为组件右下角圆角半径。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomStart?: LengthMetrics;

  /**
   * 组件右下角圆角半径。
   * 
   * 从右至左显示语言模式下为组件左下角圆角半径。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomEnd?: LengthMetrics;
}

/**
 * 引用该对象时，至少传入一个参数。
 *
 * @interface OutlineRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OutlineRadiuses {
  /**
   * 左上角圆角半径。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topLeft?: Dimension;

  /**
   * 右上角圆角半径。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  topRight?: Dimension;

  /**
   * 左下角圆角半径。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomLeft?: Dimension;

  /**
   * 右下角圆角半径。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottomRight?: Dimension;
}

/**
 * type EdgeColors = { top: ResourceColor; right: ResourceColor; bottom: ResourceColor; left: ResourceColor; }
 * 
 * 边框颜色，用于描述组件边框四条边的颜色。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @interface EdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeColors {
  /**
   * 组件上边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: ResourceColor;

  /**
   * 组件右边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right?: ResourceColor;

  /**
   * 组件下边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: ResourceColor;

  /**
   * 组件左边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: ResourceColor;
}

/**
 * 边框颜色，用于描述组件边框四条边的颜色。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @interface LocalizedEdgeColors
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedEdgeColors {
  /**
   * 组件上边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: ResourceColor;

  /**
   * 组件右边框颜色。
   * 
   * 从右至左显示语言模式下为组件左边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: ResourceColor;

  /**
   * 组件下边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: ResourceColor;

  /**
   * 组件左边框颜色。
   * 
   * 从右至左显示语言模式下为组件右边框颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: ResourceColor;
}

/**
 * 外边距类型，用于描述组件不同方向的外边距。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @typedef { LocalizedPadding } LocalizedMargin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type LocalizedMargin = LocalizedPadding;

/**
 * type EdgeStyles = { top: BorderStyle; right: BorderStyle; bottom: BorderStyle; left: BorderStyle; }
 * 
 * 边框样式，用于描述组件边框四条边的样式。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @interface EdgeStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeStyles {
  /**
   * 组件上边框样式。
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: BorderStyle;

  /**
   * 组件右边框样式。
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right?: BorderStyle;

  /**
   * 组件下边框样式。
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: BorderStyle;

  /**
   * 组件左边框样式。
   *
   * @type { ?BorderStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: BorderStyle;
}

/**
 * 引入该对象时，至少传入一个参数。
 *
 * @interface EdgeOutlineStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface EdgeOutlineStyles {
  /**
   * 上侧外描边样式。
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: OutlineStyle;

  /**
   * 右侧外描边样式。
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right?: OutlineStyle;

  /**
   * 下侧外描边样式。
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: OutlineStyle;

  /**
   * 左侧外描边样式。
   *
   * @type { ?OutlineStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: OutlineStyle;
}

/**
 * type Offset = { dx: Length; dy: Length; }
 * 
 * 相对布局完成位置坐标偏移量。
 *
 * @interface Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Offset {
  /**
   * 水平方向偏移量。
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dx: Length;

  /**
   * 竖直方向偏移量。
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dy: Length;
}

/**
 * 颜色类型，用于描述资源颜色类型。
 *
 * @typedef { Color | int | string | Resource } ResourceColor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ResourceColor = Color | int | string | Resource;

/**
 * type LengthConstrain = { minLength: Length; maxLength: Length; }
 * 
 * 长度约束，用于对组件最大、最小长度做限制。
 *
 * @typedef { object } LengthConstrain
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LengthConstrain {
  /**
   * 组件最小长度。
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minLength: Length;

  /**
   * 组件最大长度。
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxLength: Length;
}

/**
 * Defines VoidCallback.
 *
 * @typedef { function } VoidCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type VoidCallback = () => void;

/**
 * 定义长度属性单位。
 *
 * @typedef { _LengthMetricsUnit } LengthMetricsUnit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type LengthMetricsUnit = _LengthMetricsUnit;

/**
 * 定义长度属性。
 *
 * @typedef { _LengthMetrics } LengthMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type LengthMetrics = _LengthMetrics;

/**
 * 定义混合颜色。
 *
 * @typedef { _ColorMetrics } ColorMetrics
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ColorMetrics = _ColorMetrics;

/**
 * 设置文本样式。
 * 
 * > **说明：**
 * >
 * > 可以使用[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}注册自定义字体。
 *
 * @interface Font
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Font {
  /**
   * 设置文本尺寸，Length为number类型时，使用fp单位。不支持设置百分比字符串。
   * 
   * 默认值：16.0
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  size?: Length;

  /**
   * 设置文本的字体粗细，number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。
   * 
   * 默认值：400 | FontWeight.Normal
   *
   * @type { ?(FontWeight | int | string) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  weight?: FontWeight | int | string;

  /**
   * 字体列表。默认字体'HarmonyOS Sans'。
   * 
   * 使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,HarmonyOS Sans'。
   *
   * @type { ?(string | Resource) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  family?: string | Resource;

  /**
   * 设置文本的字体样式。
   * 
   * 默认值：FontStyle.Normal
   *
   * @type { ?FontStyle }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: FontStyle;
}

/**
 * 区域类型，用于存储元素所占的区域信息。
 *
 * @interface Area
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Area {
  /**
   * 目标元素的宽度。
   * 
   * 单位：vp
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width: Length;

  /**
   * 目标元素的高度。
   * 
   * 单位：vp
   *
   * @type { Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height: Length;

  /**
   * 目标元素左上角在以父元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的位置。
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  position: Position;

  /**
   * 目标元素左上角在当前窗口坐标系中的位置。
   *
   * @type { Position }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  globalPosition: Position;
}

/**
 * 位置类型，用于表示一个坐标点。
 *
 * @interface Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Position {
  /**
   * x轴坐标。
   * 
   * 单位：vp
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x?: Length;

  /**
   * y轴坐标。
   * 
   * 单位：vp
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y?: Length;
}

/**
 * 位置类型，用于表示一个坐标点。
 *
 * @interface LocalizedPosition
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedPosition {
  /**
   * LTR模式时x轴相对左边坐标，RTL模式x轴相对右边坐标。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: LengthMetrics;

  /**
   * y轴坐标。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: LengthMetrics;
}

/**
 * 位置类型，表示相对四边的偏移量。同时设置top和bottom，仅top生效；同时设置left和right，仅left生效。
 *
 * @interface Edges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Edges {
  /**
   * 相对顶边的偏移量。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: Dimension;

  /**
   * 相对左边的偏移量。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  left?: Dimension;

  /**
   * 相对底边的偏移量。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: Dimension;

  /**
   * 相对右边的偏移量。
   *
   * @type { ?Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  right?: Dimension;
}

/**
 * 位置类型，表示相对四边的偏移量。同时设置top和bottom，仅top生效；同时设置start和end，仅start生效。
 *
 * @interface LocalizedEdges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface LocalizedEdges {
  /**
   * 上内边距，组件内元素距组件顶部的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top?: LengthMetrics;

  /**
   * 左内边距，组件内元素距组件左边界的尺寸。
   * 
   * 从右至左显示语言模式下为
   * 
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start?: LengthMetrics;

  /**
   * 下内边距，组件内元素距组件底部的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom?: LengthMetrics;

  /**
   * 右内边距，组件内元素距组件右边界的尺寸。
   * 
   * 从右至左显示语言模式下为
   * 
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end?: LengthMetrics;
}

/**
 * 设置组件在锚点约束下的偏移参数。
 * 
 * 以水平方向Bias为例，其值为组件到左锚点的距离 D<sub>start</sub>与组件到水平方向锚点间总距离 D<sub>start</sub> +  D<sub>end</sub>的比值。镜像语言下，D<sub>start</
 * sub>为组件到右锚点的距离。下图中D<sub>width</sub>表示组件宽度。
 * 
 * ![bias_horizontal_example.png](docroot://reference/apis-arkui/arkui-ts/figures/bias_horizontal_example.png)
 * 
 * 竖直方向同理，其值为组件到上锚点的距离D<sub>top</sub>与组件到竖直方向锚点间总距离D<sub>top</sub> + D<sub>bottom</sub>的比值。下图中D<sub>height</sub>表示组件高度。
 * 
 * ![bias_vertical_example.png](docroot://reference/apis-arkui/arkui-ts/figures/bias_vertical_example.png)
 *
 * @interface Bias
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface Bias {
  /**
   * 水平方向上的bias值。
   * 
   * 当子组件的width属性有正确值并且有2个水平方向的锚点时生效，设置的值必须大于等于0。
   * 
   * 默认值： 0.5
   *
   * @type { ?double }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  horizontal?: double;

  /**
   * 垂直方向上的bias值。
   * 
   * 当子组件的height属性有正确值并且有2个垂直方向的锚点时生效，设置的值必须大于等于0。
   * 
   * 默认值： 0.5
   *
   * @type { ?double }
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  vertical?: double;
}

/**
 * 约束尺寸类型，用于描述组件布局时对尺寸大小的范围限制。
 * 
 * > **说明：**
 * >
 * > 在[Row]{@link ../../@internal/component/ets/row}、[Column]{@link ../../@internal/component/ets/column}、
 * > [RelativeContainer]{@link ../../@internal/component/ets/relative_container}组件中，width、height设置auto表示自适应子组件。在
 * > [TextInput]{@link ../../@internal/component/ets/text_input}组件中，width设置auto表示自适应文本宽度。
 *
 * @interface ConstraintSizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ConstraintSizeOptions {
  /**
   * 元素最小宽度。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minWidth?: Length;

  /**
   * 元素最大宽度。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxWidth?: Length;

  /**
   * 元素最小高度。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minHeight?: Length;

  /**
   * 元素最大高度。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxHeight?: Length;
}

/**
 * 宽高尺寸类型，用于描述组件布局时的宽高尺寸大小。
 *
 * @interface SizeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface SizeOptions {
  /**
   * 元素宽度。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: Length;

  /**
   * 元素高度。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  height?: Length;
}

/**
 * 边框属性集合，用于描述边框相关信息。
 *
 * @interface BorderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface BorderOptions {
  /**
   * 设置边框宽度。
   *
   * @type { ?(EdgeWidths | Length | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: EdgeWidths | Length | LocalizedEdgeWidths;

  /**
   * 设置边框颜色。
   *
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * 设置边框圆角半径。
   *
   * @type { ?(BorderRadiuses | Length | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  radius?: BorderRadiuses | Length | LocalizedBorderRadiuses;

  /**
   * 设置边框样式。
   *
   * @type { ?(EdgeStyles | BorderStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: EdgeStyles | BorderStyle;

  /**
   * 设置虚线的线段间距，仅在边框样式为虚线时生效。
   * 
   * 不支持设置百分比。
   *
   * @type { ?(EdgeWidths | LengthMetrics | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dashGap?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;

  /**
   * 设置虚线的线段长度，仅在边框样式为虚线时生效。
   * 
   * 不支持设置百分比。
   *
   * @type { ?(EdgeWidths | LengthMetrics | LocalizedEdgeWidths) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dashWidth?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;
}

/**
 * 外描边选项设置。
 *
 * @interface OutlineOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface OutlineOptions {
  /**
   * 设置外描边宽度，不支持百分比。
   * 
   * 默认值：0，外描边效果中width为必设项，否则不显示外描边。
   *
   * @type { ?(EdgeOutlineWidths | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  width?: EdgeOutlineWidths | Dimension;

  /**
   * 设置外描边颜色。
   * 
   * 默认值：Color.Black
   *
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * 设置外描边圆角半径，不支持百分比。
   * 
   * 默认值：0
   * 
   * 最大生效值：组件width/2 + outlineWidth或组件height/2 + outlineWidth。
   *
   * @type { ?(OutlineRadiuses | Dimension) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  radius?: OutlineRadiuses | Dimension;

  /**
   * 设置外描边样式。
   * 
   * 默认值：OutlineStyle.SOLID
   *
   * @type { ?(EdgeOutlineStyles | OutlineStyle) }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  style?: EdgeOutlineStyles | OutlineStyle;
}

/**
 * Define the style of checkbox mark.
 *
 * @interface MarkStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MarkStyle {
  /**
   * 内部图标颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeColor?: ResourceColor;

  /**
   * 内部图标大小，单位vp。默认大小与多选框组件宽度相同。
   * 
   * 不支持百分比形式设置。设置为非法值时，按照默认大小处理。默认大小与多选框组件宽度相同。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  size?: Length;

  /**
   * 内部图标粗细，单位vp。不支持设置百分比。设置为非法值时，按照默认值处理。
   *
   * @type { ?Length }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeWidth?: Length;
}

/**
 * 创建具有4*5矩阵的颜色过滤器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class ColorFilter {
  /**
   * 构造函数。
   *
   * @param { double[] } value 创建具有4*5矩阵的颜色过滤器，入参为[m*n]位于m行和n列中矩阵值，矩阵是行优先的。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  constructor(value: double[]);
}

/**
 * 配置跟手点坐标，不配置时，默认居中。
 *
 * @interface TouchPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface TouchPoint {
  /**
   * 跟手点X轴坐标。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  x: Dimension;

  /**
   * 跟手点Y轴坐标。
   *
   * @type { Dimension }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  y: Dimension;
}

/**
 * 边缘宽度类型，用于描述组件边缘不同方向的宽度。支持全球化。
 *
 * @interface DirectionalEdgesT
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DirectionalEdgesT<T> {
  /**
   * 起始边缘的属性。在LTR的方向下，为左边缘，在RTL的方向下，为右边缘。
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start: T;

  /**
   * 终止边缘的属性。在LTR的方向下，为右边缘，在RTL的方向下，为左边缘。
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end: T;

  /**
   * 顶部边缘的属性。
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  top: T;

  /**
   * 底部边缘的属性。
   *
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  bottom: T;
}

/**
 * 分割线样式属性集合, 用于描述分割线相关信息。
 *
 * @interface DividerStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface DividerStyleOptions {
  /**
   * 分割线的线宽。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  strokeWidth?: LengthMetrics;

  /**
   * 分割线的颜色。
   *
   * @type { ?ResourceColor }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  color?: ResourceColor;

  /**
   * 分割线与菜单侧边起始端的距离。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  startMargin?: LengthMetrics;

  /**
   * 分割线与菜单侧边结束端的距离。
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  endMargin?: LengthMetrics;

  /**
   * 设置分割线模式。
   *
   * @type { ?DividerMode }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  mode?: DividerMode;
}

/**
 * 滚动条边距。
 *
 * @interface ScrollBarMargin
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ScrollBarMargin {
  /**
   * 滚动条起始边距。
   * 
   * 默认值：0，单位：vp
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  start?: LengthMetrics;

  /**
   * 滚动条末尾边距。
   * 
   * 默认值：0，单位：vp
   *
   * @type { ?LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  end?: LengthMetrics;
}

/**
 * 链中组件的布局权重。
 *
 * @interface ChainWeightOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ChainWeightOptions {

  /**
   * 组件在水平方向的布局权重，设置大于0的数字时生效。 
   * 
   * 默认值：0 
   * 
   * 异常值：0
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  horizontal?: double;

  /**
   * 组件在竖直方向的布局权重，设置大于0的数字时生效。 
   * 
   * 默认值：0 
   * 
   * 异常值：0
   *
   * @type { ?double }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  vertical?: double;
}

/**
 * Defines the struct of AccessibilityOptions.
 *
 * @interface AccessibilityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilityOptions {

  /**
   * 若accessibilityPreferred设置为true，则深度遍历每个子节点时优先选择该子节点的无障碍文本accessibilityText。
   * 
   * 若无障碍文本为空则选择本身Text文本，最终将拼接完成的文本设置给accessibilityText与Text都为空的父节点。
   * 
   * 若accessibilityPreferred设置为false，表示不启用此功能。
   * 
   * 默认值：false
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  accessibilityPreferred?: boolean;

  /**
   * 指定特定类型的子组件。配置
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * 的容器组件进行无障碍聚合后，会将该特定类型的子组件的选中状态和状态播报文本作为聚合组件的状态和播报文本。从而聚合屏幕朗读下的状态播报，避免需要对子组件单独进行聚焦。
   * 
   * **说明：**
   * 
   * 如果聚合组件内有多个相同类型的子组件，则以组件树上该聚合组件下的第一个查找到的子组件为控制组件。
   * 
   * 不支持跨进程嵌入式组件内的特定类型，例如：卡片、EmbeddedUIExtension。
   * 
   * 默认值：无指定组件
   *
   * @type { ?AccessibilityRoleType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stateControllerRoleType?: AccessibilityRoleType;

  /**
   * 指定特定[唯一标识ID]{@link CommonMethod#id}的子组件。配置
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * 的容器组件进行无障碍聚合后，会将该特定标识的子组件的选中状态和状态播报文本作为聚合组件的状态和播报文本。从而聚合屏幕朗读下的状态播报，避免需要对子组件单独进行聚焦。
   * 
   * **说明：**
   * 
   * 如果聚合组件内有多个相同类型的子组件，则以组件树上该聚合组件下的第一个查找到的子组件为控制组件。
   * 
   * 如果与stateControllerRoleType同时配置，则优先匹配ID一致的组件。
   * 
   * 不支持跨进程嵌入式组件内的特定类型，例如：卡片、EmbeddedUIExtension。
   * 
   * 默认值：无指定组件
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  stateControllerId?: string;

  /**
   * 指定特定类型的子组件。配置
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * 的容器组件进行无障碍聚合后，如果触发无障碍的控制操作时，会将操作转发给该特定类型的子组件。从而聚合屏幕朗读下的点击事件，避免需要对子组件单独进行聚焦。
   * 
   * **说明：**
   * 
   * 如果聚合组件内有多个相同类型的子组件，则以组件树上该聚合组件下的第一个查找到的子组件为控制组件。
   * 
   * 当前只支持无障碍点击操作。
   * 
   * 不支持跨进程嵌入式组件内的特定类型，例如：卡片、EmbeddedUIExtension。
   * 
   * 默认值：无指定组件
   *
   * @type { ?AccessibilityRoleType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  actionControllerRoleType?: AccessibilityRoleType;

  /**
   * 指定特定[唯一标识ID]{@link CommonMethod#id}的子组件。配置
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * 的容器组件进行无障碍聚合后，如果触发无障碍的控制操作时，会将操作转发给该特定标识的子组件。从而聚合屏幕朗读下的点击事件，避免需要对子组件单独进行聚焦。
   * 
   * **说明：**
   * 
   * 如果聚合组件内有多个相同类型的子组件，则以组件树上该聚合组件下的第一个查找到的子组件为控制组件。
   * 
   * 当前只支持无障碍点击操作。
   * 
   * 如果与actionControllerRoleType同时配置，则优先匹配ID一致的组件。
   * 
   * 不支持跨进程嵌入式组件内的特定类型，例如：卡片、EmbeddedUIExtension。
   * 
   * 默认值：无指定组件
   *
   * @type { ?string }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  actionControllerId?: string;
}

/**
 * 设置组件的无障碍操作的可选参数，用于限制或修改屏幕朗读等辅助应用发起的操作行为。仅[Slider]{@link ../../@internal/component/ets/slider}组件支持使用。在其他组件使用该接口时，编译环节可
 * 正常通过，但接口功能不生效。
 *
 * @interface AccessibilityActionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface AccessibilityActionOptions {

  /**
   * 无障碍手势触发的无障碍滚动操作中的组件操作步数。默认值基于组件默认值。
   * 
   * 不支持的组件配置不生效。
   * 
   * 当前支持组件：[slider]{@link ../../@internal/component/ets/slider}，用于slider组件聚焦后通过手势上下扫动触发slider组件的滑动操作。滑动距离：scrollStep*
   * [step](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions)。取值范围：
   * [1, ([max](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions) - [min](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions))/[step](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions)]，
   * 默认值为1。超出取值范围时取默认值1；在取值范围内，scrollStep为非整数时向下取整。
   *
   * @type { ?int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  scrollStep?: int;
}

/**
 * 定义无障碍自定义下一个焦点处理过程中可使用的详细参数对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface AccessibilityNextFocusParams {
  /**
   * 是否在无障碍自定义下一个焦点处理过程中查找后代节点中的焦点。
   * 
   * true表示在无障碍自定义下一个焦点处理过程中查找后代节点中的焦点；false表示在无障碍自定义下一个焦点处理过程中不查找后代节点中的焦点。
   * 
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isConsiderDescendants?: boolean;
}

/**
 * 自定义无障碍操作接口。
 *
 * @interface AccessibilityCustomAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface AccessibilityCustomAction {

  /**
   * 自定义操作的名称，用于标识和绑定操作回调。
   * 
   * **说明：**
   * 
   * 名称的文本长度需在128字节以内，超出部分将被截断。
   *
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  name: ResourceStr;

  /**
   * 处理自定义操作的回调。
   *
   * @type { VoidCallback }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onAction: VoidCallback;
}

/**
 * 响应式布局填充模式，用于WaterFlow、Grid、List、Swiper和LazyVWaterFlowLayout组件。LazyVWaterFlowLayout组件从API版本26.0.0开始支持。
 *
 * @typedef { PresetFillType } ResponsiveFillType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type ResponsiveFillType = PresetFillType;

/**
 * 定义一个适用于[WaterFlow]{@link ../../@internal/component/ets/water_flow}、[Grid]{@link ../../@internal/component/ets/grid}、
 * [List]{@link ../../@internal/component/ets/list}、[Swiper]{@link ../../@internal/component/ets/swiper}和
 * [LazyVWaterFlowLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazyvwaterflowlayout.md)组件的响应式布局策略。
 * LazyVWaterFlowLayout组件从API版本26.0.0开始支持。
 *
 * @interface ItemFillPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ItemFillPolicy {
  /**
   * 为不同的响应式断点指定列数。默认值为BREAKPOINT_DEFAULT。
   *
   * @type { ?ResponsiveFillType }
   * @default ResponsiveFillType.BREAKPOINT_DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fillType?: ResponsiveFillType;
}

/**
 * 缓存数量信息。
 *
 * @interface CacheCountInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface CacheCountInfo {
  /**
   * 最小缓存数，当实际缓存数小于最小缓存数时，在滚动动画帧间空闲时隙加载缓存。
   * 
   * 取值范围：[0, +∞)，小于0时按1处理。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  minCount: int;
  /**
   * 最大缓存数，当实际缓存数大于最大缓存数时，缓存内容会回收或释放，当UI空闲时（无动画或用户操作），会加载缓存到最大缓存数。
   * 
   * 取值范围：[minCount, +∞)，小于minCount时按minCount处理。
   *
   * @type { int }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  maxCount: int;
}

/**
 * 描述一个二维坐标系。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface Coordinate2D {
  /**
   * x轴坐标，单位vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  x: double;
  /**
   * y轴坐标，单位vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  y: double;
}

/**
 * 可用于向DrawingRenderingContext上绘制内容的画布对象。
 *
 * @typedef { _drawing.Canvas } DrawingCanvas
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export type DrawingCanvas = _drawing.Canvas

/**
 * type Padding = { top: Length; right: Length; bottom: Length; left: Length; }
 * 
 * 内边距类型，用于描述组件不同方向的内边距。
 * 
 * 引入该对象时，至少传入一个参数。
 *
 * @interface Padding
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 23 static
 */
export declare interface Padding {;