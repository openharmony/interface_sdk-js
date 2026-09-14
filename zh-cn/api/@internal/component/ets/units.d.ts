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
 *
  * @file
  * @kit ArkUI
 */

/**
 * 资源引用类型，用于设置组件属性的值。各类资源文件，需要放入特定子目录中存储管理，资源目录的示例请参考
 * [资源分类](docroot://quick-start/resource-categories-and-access.md#资源分类)。
 *
 * > **说明：**
 * >
 * > - 引用资源类型时，需确保资源类型对象内的数据类型与当前以资源类型作为参数的属性方法本身的类型一致。例如某个属性方法支持设置string | Resource，那么在使用Resource引用类型时，其数据类型也应当为string。
 * >
 * > - 引用资源类型时，需确保资源类型对象用法为当前支持的用法，否则当前以资源类型作为参数的属性效果将和不设置该属性相同。
 * >
 * > - $rawfile不支持通过[预览器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkts-js)预览。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Resource = import('../api/global/resource').Resource;

/**
 * 长度类型，用于描述尺寸单位。
 *
 * @unionmember { string } 需要显式指定[像素单位]{@link ./common}，如'10px'，也可设置百分比字符串，如'100%'。<br/>**说明：** <br/>不指定像素单位时，默认单位vp，如'1
 *     0'，等同于10。
 * @unionmember { number } 默认单位vp。
 * @unionmember { Resource } 资源引用类型，引入系统资源或者应用资源中的尺寸。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Length = string | number | Resource;

/**
 * 长度类型，用于描述以px像素单位为单位的长度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type PX = `${number}px`;

/**
 * 长度类型，用于描述以vp为单位的长度。
 *
 * @unionmember { `${number}vp` } Viewport pixel unit. The unit vp can be included, for example, **'10vp'**.
 * @unionmember { number } 需要指定数字，如10。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type VP = `${number}vp` | number;

/**
 * 长度类型，用于描述以fp像素单位为单位的长度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type FP = `${number}fp`;

/**
 * 长度类型，用于描述以lpx像素单位为单位的长度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type LPX = `${number}lpx`;

/**
 * 长度类型，用于描述以百分比单位为单位的长度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Percentage = `${number}%`;

/**
 * 角度类型，用于描述以deg为单位的角度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Degree = `${number}deg`;

/**
 * 长度类型，用于描述尺寸单位。
 *
 * @unionmember { PX } 需要指定以px像素单位，如'10px'。
 * @unionmember { VP } 需要指定数字或vp像素单位，如10或'10vp'。
 * @unionmember { FP } 需要指定以fp像素单位，如'10fp'。
 * @unionmember { LPX } 需要指定以lpx像素单位，如'10lpx'。
 * @unionmember { Percentage } 需要指定以百分比单位，如'10%'。
 * @unionmember { Resource } 资源引用类型，引入系统资源或者应用资源中的尺寸。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type Dimension = PX | VP | FP | LPX | Percentage | Resource;

/**
 * 字符串类型，用于描述字符串入参可以使用的类型。
 *
 * @unionmember { string } 字符串类型。
 * @unionmember { Resource } 资源引用类型，引入系统资源或者应用资源中的字符串。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type ResourceStr = string | Resource;

/**
 * 内边距类型，用于描述组件不同方向的内边距。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Padding = {
  /**
   * 上内边距，组件内元素距组件顶部的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  top?: Length;

  /**
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  right?: Length;

  /**
   * 下内边距，组件内元素距组件底部的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  bottom?: Length;

  /**
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  left?: Length;
}

/**
 * 内边距类型，用于描述组件不同方向的内边距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedPadding {
  /**
   * 上内边距，组件内元素距组件顶部的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;

  /**
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * 从右至左显示语言模式下为
   *
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;

  /**
   * 下内边距，组件内元素距组件底部的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LengthMetrics;

  /**
   * 左内边距，组件内元素距组件左边界的尺寸。
   *
   * 从右至左显示语言模式下为
   *
   * 右内边距，组件内元素距组件右边界的尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;
}

/**
 * 外边距类型，用于描述组件不同方向的外边距。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Margin = Padding;

/**
 * 边框宽度类型，用于描述组件边框不同方向的宽度。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare type EdgeWidth = EdgeWidths;

/**
 * 边框宽度类型，用于描述组件边框不同方向的宽度。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type EdgeWidths = {
  /**
   * 组件上边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  top?: Length;

  /**
   * 组件右边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  right?: Length;

  /**
   * 组件下边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottom?: Length;

  /**
   * 组件左边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  left?: Length;
}

/**
 * 边框宽度类型，用于描述组件边框不同方向的宽度。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedEdgeWidths {
  /**
   * 组件上边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;

  /**
   * 组件右边框宽度。
   *
   * 从右至左显示语言模式下为组件左边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end?: LengthMetrics;

  /**
   * 组件下边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LengthMetrics;

  /**
   * 组件左边框宽度。
   *
   * 从右至左显示语言模式下为组件右边框宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;
}

/**
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type EdgeOutlineWidths = {
  /**
   * 上侧外描边宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  top?: Dimension;

  /**
   * 右侧外描边宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  right?: Dimension;

  /**
   * 下侧外描边宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottom?: Dimension;

  /**
   * 左侧外描边宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  left?: Dimension;
}

/**
 * 圆角类型，用于描述组件边框圆角半径。
 *
 * 引用该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type BorderRadiuses = {
  /**
   * 组件左上角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  topLeft?: Length;

  /**
   * 组件右上角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  topRight?: Length;

  /**
   * 组件左下角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottomLeft?: Length;

  /**
   * 组件右下角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottomRight?: Length;
}

/**
 * 圆角类型，用于描述组件边框圆角半径。
 *
 * 引用该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedBorderRadiuses {
  /**
   * 组件左上角圆角半径。
   *
   * 从右至左显示语言模式下为组件右上角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  topStart?: LengthMetrics;

  /**
   * 组件右上角圆角半径。
   *
   * 从右至左显示语言模式下为组件左上角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  topEnd?: LengthMetrics;

  /**
   * 组件左下角圆角半径。
   *
   * 从右至左显示语言模式下为组件右下角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottomStart?: LengthMetrics;

  /**
   * 组件右下角圆角半径。
   *
   * 从右至左显示语言模式下为组件左下角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottomEnd?: LengthMetrics;
}

/**
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type OutlineRadiuses = {
  /**
   * 左上角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  topLeft?: Dimension;

  /**
   * 右上角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  topRight?: Dimension;

  /**
   * 左下角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottomLeft?: Dimension;

  /**
   * 右下角圆角半径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottomRight?: Dimension;
}

/**
 * 边框颜色，用于描述组件边框四条边的颜色。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type EdgeColors = {
  /**
   * 组件上边框颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  top?: ResourceColor;

  /**
   * 组件右边框颜色
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  right?: ResourceColor;

  /**
   * 组件下边框颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottom?: ResourceColor;

  /**
   * 组件左边框颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  left?: ResourceColor;
}

/**
 * 边框颜色，用于描述组件边框四条边的颜色。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedEdgeColors {
  /**
   * 组件上边框颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: ResourceColor;

  /**
   * 组件右边框颜色。
   *
   * 从右至左显示语言模式下为组件左边框颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end?: ResourceColor;

  /**
   * 组件下边框颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: ResourceColor;

  /**
   * 组件左边框颜色。
   *
   * 从右至左显示语言模式下为组件右边框颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start?: ResourceColor;
}

/**
 * 外边距类型，用于描述组件不同方向的外边距。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type LocalizedMargin = LocalizedPadding;

/**
 * 边框样式，用于描述组件边框四条边的样式。
 *
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type EdgeStyles = {
  /**
   * 组件上边框样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  top?: BorderStyle;

  /**
   * 组件右边框样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  right?: BorderStyle;

  /**
   * 组件下边框样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  bottom?: BorderStyle;

  /**
   * 组件左边框样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  left?: BorderStyle;
}

/**
 * 引入该对象时，至少传入一个参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type EdgeOutlineStyles = {
  /**
   * 上侧外描边样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  top?: OutlineStyle;

  /**
   * 右侧外描边样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  right?: OutlineStyle;

  /**
   * 下侧外描边样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  bottom?: OutlineStyle;

  /**
   * 左侧外描边样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  left?: OutlineStyle;
}

/**
 * 相对布局完成位置坐标偏移量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type Offset = {
  /**
   * 水平方向偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  dx: Length;

  /**
   * 竖直方向偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  dy: Length;
}

/**
 * 颜色类型，用于描述资源颜色类型。
 *
 * @unionmember { Color } 颜色枚举值。
 * @unionmember { number } HEX格式颜色，支持rgb或者argb。示例：0xffffff，0xffff0000。number无法识别传入位数，格式选择依据值的大小，例如0x00ffffff作rgb格式解析。
 * @unionmember { string } 支持rgb、rgba或者argb的格式颜色。<br/>rgb格式颜色示例：'#ffffff'、'rgb(255, 100, 255)'。<br/>rgba格式颜色示例：'rgba(25
 *     5, 100, 255, 0.5)'。<br/>argb格式颜色示例：'#ff000000'。
 * @unionmember { Resource } 使用引入资源的方式，引入系统资源或者应用资源中的颜色。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare type ResourceColor = Color | number | string | Resource;

/**
 * 长度约束，用于对组件最大、最小长度做限制。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare type LengthConstrain = {
  /**
   * 组件最小长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  minLength: Length;

  /**
   * 组件最大长度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  maxLength: Length;
}

/**
 * 无参数、无返回值的函数回调类型，用于定义不需要传递数据且不返回结果的回调场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type VoidCallback = () => void;

/**
 * 定义长度属性单位。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare type LengthMetricsUnit = import('../api/arkui/Graphics').LengthMetricsUnit;

/**
 * 定义长度属性。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type LengthMetrics = import('../api/arkui/Graphics').LengthMetrics;

/**
 * 定义混合颜色。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type ColorMetrics = import('../api/arkui/Graphics').ColorMetrics;

/**
 * 设置文本样式。
 *
 * > **说明：**
 * >
 * > 可以使用[loadFontSync]{@link @ohos.graphics.text:text.FontCollection#loadFontSync}注册自定义字体。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface Font {
  /**
   * 设置文本尺寸，Length为number类型时，使用fp单位。不支持设置百分比字符串。
   *
   * 默认值：16.0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  size?: Length;

  /**
   * 设置文本的字体粗细，number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。
   *
   * 默认值：400 | FontWeight.Normal
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  weight?: FontWeight | number | string;

  /**
   * 字体列表。默认字体'HarmonyOS Sans'。
   *
   * 使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,HarmonyOS Sans'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  family?: string | Resource;

  /**
   * 设置文本的字体样式。
   *
   * 默认值：FontStyle.Normal
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  style?: FontStyle;
}

/**
 * 区域类型，用于存储元素所占的区域信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare interface Area {
  /**
   * 目标元素的宽度。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  width: Length;

  /**
   * 目标元素的高度。
   * 
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  height: Length;

  /**
   * 目标元素左上角在以父元素为基准的[组件坐标系](docroot://ui/arkui-glossary.md#组件坐标系)中的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  position: Position;

  /**
   * 目标元素左上角在当前窗口坐标系中的位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  globalPosition: Position;
}

/**
 * 位置类型，用于表示一个坐标点。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface Position {
  /**
   * x轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  x?: Length;

  /**
   * y轴坐标。
   *
   * 单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  y?: Length;
}

/**
 * 位置类型，用于表示一个坐标点。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedPosition {
  /**
   * LTR模式时x轴相对左边坐标，RTL模式x轴相对右边坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;

  /**
   * y轴坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;
}

/**
 * 位置类型，表示相对四边的偏移量。同时设置top和bottom，仅top生效；同时设置left和right，仅left生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface Edges {
  /**
   * 相对顶边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top?: Dimension;

  /**
   * 相对左边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  left?: Dimension;

  /**
   * 相对底边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: Dimension;

  /**
   * 相对右边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  right?: Dimension;
}

/**
 * 位置类型，表示相对四边的偏移量。同时设置top和bottom，仅top生效；同时设置start和end，仅start生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface LocalizedEdges {
  /**
   * 相对顶边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  top?: LengthMetrics;

  /**
   * LTR模式时相对左边的偏移量，RTL模式时相对右边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start?: LengthMetrics;

  /**
   * 相对底边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  bottom?: LengthMetrics;

  /**
   * LTR模式时相对右边的偏移量，RTL模式时相对左边的偏移量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface Bias {
  /**
   * 水平方向上的bias值。
   *
   * 当子组件的width属性有正确值并且有2个水平方向的锚点时生效，设置的值必须大于等于0。
   *
   * 默认值： 0.5
   *
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  horizontal?: number;

  /**
   * 垂直方向上的bias值。
   *
   * 当子组件的height属性有正确值并且有2个垂直方向的锚点时生效，设置的值必须大于等于0。
   *
   * 默认值： 0.5
   *
   * @default 0.5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  vertical?: number;
}

/**
 * 约束尺寸类型，用于描述组件布局时对尺寸大小的范围限制。
 *
 * > **说明：**
 * >
 * > 在[Row]{@link ./row}、[Column]{@link ./column}、[RelativeContainer]{@link ./relative_container}组件中，width、height设置auto表
 * > 示自适应子组件。在[TextInput]{@link ./text_input}组件中，width设置auto表示自适应文本宽度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface ConstraintSizeOptions {
  /**
   * 元素最小宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  minWidth?: Length;

  /**
   * 元素最大宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxWidth?: Length;

  /**
   * 元素最小高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  minHeight?: Length;

  /**
   * 元素最大高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  maxHeight?: Length;
}

/**
 * 宽高尺寸类型，用于描述组件布局时的宽高尺寸大小。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface SizeOptions {
  /**
   * 元素宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: Length;

  /**
   * 元素高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  height?: Length;
}

/**
 * 边框属性集合，用于描述边框相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface BorderOptions {
  /**
   * 设置边框宽度。
   *
   * @type { ?(EdgeWidths | Length) } [since 9 - 11]
   * @type { ?(EdgeWidths | Length | LocalizedEdgeWidths) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  width?: EdgeWidths | Length | LocalizedEdgeWidths;

  /**
   * 设置边框颜色。
   *
   * @type { ?(EdgeColors | ResourceColor) } [since 9 - 11]
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * 设置边框圆角半径。
   *
   * @type { ?(BorderRadiuses | Length) } [since 9 - 11]
   * @type { ?(BorderRadiuses | Length | LocalizedBorderRadiuses) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  radius?: BorderRadiuses | Length | LocalizedBorderRadiuses;

  /**
   * 设置边框样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  style?: EdgeStyles | BorderStyle;

  /**
   * 设置虚线的线段间距，仅在边框样式为虚线时生效。
   *
   * 不支持设置百分比。
   *
   * **卡片能力：** 该接口不支持在ArkTS卡片中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dashGap?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;

  /**
   * 设置虚线的线段长度，仅在边框样式为虚线时生效。
   *
   * 不支持设置百分比。
   *
   * **卡片能力：** 该接口不支持在ArkTS卡片中使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  dashWidth?: EdgeWidths | LengthMetrics | LocalizedEdgeWidths;
}

/**
 * 外描边选项设置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface OutlineOptions {
  /**
   * 设置外描边宽度，不支持百分比。
   *
   * 默认值：0，外描边效果中width为必设项，否则不显示外描边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  width?: EdgeOutlineWidths | Dimension;

  /**
   * 设置外描边颜色。
   *
   * 默认值：Color.Black
   *
   * @type { ?(EdgeColors | ResourceColor) } [since 11 - 11]
   * @type { ?(EdgeColors | ResourceColor | LocalizedEdgeColors) } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  color?: EdgeColors | ResourceColor | LocalizedEdgeColors;

  /**
   * 设置外描边圆角半径，不支持百分比。
   *
   * 默认值：0
   *
   * 最大生效值：组件width/2 + outlineWidth或组件height/2 + outlineWidth。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  radius?: OutlineRadiuses | Dimension;

  /**
   * 设置外描边样式。
   *
   * 默认值：OutlineStyle.SOLID
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  style?: EdgeOutlineStyles | OutlineStyle;
}

/**
 * 定义checkbox标记的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface MarkStyle {
  /**
   * 内部图标颜色。默认值：Color.White
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeColor?: ResourceColor;

  /**
   * 内部图标大小，单位vp。默认大小与多选框组件宽度相同。
   *
   * 不支持百分比形式设置。设置为非法值时，按照默认值处理。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  size?: Length;

  /**
   * 内部图标粗细，单位vp。不支持设置百分比。设置为非法值时，按照默认值处理。默认值：2
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  strokeWidth?: Length;
}

/**
 * 创建具有4*5矩阵的颜色过滤器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class ColorFilter {
  /**
   * ColorFilter的构造函数，创建具有4\*5矩阵的颜色过滤器。
   *
   * @param { number[] } value 4*5颜色矩阵的值，[m*n]位于m行和n列中矩阵值，矩阵是行优先的。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(value: number[]);
}

/**
 * 配置跟手点坐标，不配置时，默认居中。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 18]
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare interface TouchPoint {
  /**
   * 跟手点X轴坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  x: Dimension;

  /**
   * 跟手点Y轴坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  y: Dimension;
}

/**
 * 边缘宽度类型，用于描述组件边缘不同方向的宽度。支持全球化。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DirectionalEdgesT<T> {
  /**
   * 起始边缘的属性。在LTR的方向下，为左边缘，在RTL的方向下，为右边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  start: T;

  /**
   * 终止边缘的属性。在LTR的方向下，为右边缘，在RTL的方向下，为左边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  end: T;

  /**
   * 顶部边缘的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  top: T;

  /**
   * 底部边缘的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  bottom: T;
}

/**
 * 分割线样式属性集合，用于描述分割线相关信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface DividerStyleOptions {
  /**
   * 分割线的线宽。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  strokeWidth?: LengthMetrics;

  /**
   * 分割线的颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  color?: ResourceColor;

  /**
   * 分割线与菜单侧边起始端的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  startMargin?: LengthMetrics;

  /**
   * 分割线与菜单侧边结束端的距离。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  endMargin?: LengthMetrics;

  /**
   * 设置分割线模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  mode?: DividerMode;
}

/**
 * 链中组件的布局权重。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface ChainWeightOptions {
  /**
   * 组件在水平方向的布局权重，设置大于0的数字时生效。
   *
   * 默认值：0
   *
   * 异常值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  horizontal?: number;

  /**
   * 组件在竖直方向的布局权重，设置大于0的数字时生效。
   *
   * 默认值：0
   *
   * 异常值：0
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   */
  vertical?: number;
}

/**
 * 定义AccessibilityOptions的结构体。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 14 dynamic
 */
declare interface AccessibilityOptions {
  /**
   * 若accessibilityPreferred设置为true，则深度遍历每个子节点时优先选择该子节点的无障碍文本accessibilityText。
   *
   * 若无障碍文本为空则选择本身Text文本，最终将拼接完成的文本设置给accessibilityText与Text都为空的父节点。
   *
   * 若accessibilityPreferred设置为false，表示不启用此功能。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  stateControllerRoleType?: AccessibilityRoleType;

  /**
   * 指定特定[唯一标识ID]{@link CommonMethod#id}的子组件。配置
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * 的容器组件进行无障碍聚合后，会将该特定标识的子组件的选中状态和状态播报文本作为聚合组件的状态和播报文本。从而聚合屏幕朗读下的状态播报，避免需要对子组件单独进行聚焦。
   * **说明：**
   * 如果聚合组件内有多个相同类型的子组件，则以组件树上该聚合组件下的第一个查找到的子组件为控制组件。
   * 如果与stateControllerRoleType同时配置，则优先匹配ID一致的组件。
   * 不支持跨进程嵌入式组件内的特定类型，例如：卡片、EmbeddedUIExtension。
   * 默认值：无指定组件
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  actionControllerRoleType?: AccessibilityRoleType;

  /**
   * 指定特定[唯一标识ID]{@link CommonMethod#id}的子组件。配置
   * [accessibilityGroup]{@link CommonMethod#accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions)}
   * 的容器组件进行无障碍聚合后，如果触发无障碍的控制操作时，会将操作转发给该特定标识的子组件。从而聚合屏幕朗读下的点击事件，避免需要对子组件单独进行聚焦。
   * **说明：**
   * 如果聚合组件内有多个相同类型的子组件，则以组件树上该聚合组件下的第一个查找到的子组件为控制组件。
   * 当前只支持无障碍点击操作。
   * 如果与actionControllerRoleType同时配置，则优先匹配ID一致的组件。
   * 不支持跨进程嵌入式组件内的特定类型，例如：卡片、EmbeddedUIExtension。
   * 默认值：无指定组件
   * 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  actionControllerId?: string;
}

/**
 * 设置组件的无障碍操作的可选参数，用于限制或修改屏幕朗读等辅助应用发起的操作行为。仅[Slider]{@link ./slider}组件支持使用。在其他组件使用该接口时，编译环节可正常通过，但接口功能不生效。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 23 dynamic
 */
declare interface AccessibilityActionOptions {
  /**
   * 无障碍手势触发的无障碍滚动操作中的组件操作步数。默认值基于组件默认值。
   * 不支持的组件配置不生效。
   * 当前支持组件：[slider]{@link ./slider}，用于slider组件聚焦后通过手势上下扫动触发slider组件的滑动操作。滑动距离：scrollStep*
   * [step](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions)。取值范围：
   * [1, ([max](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions) - [min](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions))/[step](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-slider.md#slideroptions)]，
   * 默认值为1。超出取值范围时取默认值1；在取值范围内，scrollStep为非整数时向下取整。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  scrollStep?: number;
}

/**
 * 定义无障碍自定义下一个焦点处理过程中可使用的详细参数对象。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface AccessibilityNextFocusParams {
  /**
   * 是否在无障碍自定义下一个焦点处理过程中查找后代节点中的焦点。
   *
   * true表示在无障碍自定义下一个焦点处理过程中查找后代节点中的焦点；false表示在无障碍自定义下一个焦点处理过程中不查找后代节点中的焦点。
   *
   * 默认值：false
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  isConsiderDescendants?: boolean;
}

/**
 * 自定义无障碍操作接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface AccessibilityCustomAction {
  /**
   * 自定义操作的名称，用于标识和绑定操作回调。
   *
   * **说明：**
   *
   * 名称的文本长度需在128字节以内，超出部分将被截断。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  name: ResourceStr;

  /**
   * 处理自定义操作的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onAction: VoidCallback;
}

/**
 * 滚动条边距。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare interface ScrollBarMargin {
  /**
   * 滚动条起始边距。<br/>默认值：0，单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  start?: LengthMetrics;

  /**
   * 滚动条末尾边距。<br/>默认值：0，单位：vp
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  end?: LengthMetrics;
}

/**
 * 缓存数量信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface CacheCountInfo {
  /**
   * 最小缓存数，当实际缓存数小于最小缓存数时，在滚动动画帧间空闲时隙加载缓存。小于0时按1处理。
   * 取值范围：[0, +∞)，。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  minCount: number;
  /**
   * 最大缓存数，当实际缓存数大于最大缓存数时，缓存内容会回收或释放，当UI空闲时（无动画或用户操作），会加载缓存到最大缓存数。小于minCount时按minCount处理。
   * 取值范围：[minCount, +∞)，。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  maxCount: number;
}

/**
 * 描述一个二维坐标。
 *
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface Coordinate2D {
 
  /**
   * 横坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  x: double;
 
  /**
   * 纵坐标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  y: double;
}

/**
 * 响应式布局填充模式，用于WaterFlow、Grid、List、Swiper和LazyVWaterFlowLayout组件。LazyVWaterFlowLayout组件从API版本26.0.0开始支持。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type ResponsiveFillType = PresetFillType;

/**
 * 定义一个适用于WaterFlow、Grid、List、Swiper和LazyVWaterFlowLayout组件的响应式布局策略。LazyVWaterFlowLayout组件从API版本26.0.0开始支持。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare interface ItemFillPolicy {
  /**
   * 为不同的响应式断点指定列数。默认值为BREAKPOINT_DEFAULT。
   *
   * @default ResponsiveFillType.BREAKPOINT_DEFAULT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  fillType?: ResponsiveFillType;
}