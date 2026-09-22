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
 * @file 枚举值
 * @kit ArkUI
 */

/**
 * 复选框Checkbox的形状。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum CheckBoxShape {
  /**
   * 圆形
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CIRCLE = 0,

  /**
   * 圆角方形
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  ROUNDED_SQUARE = 1
}

/**
 * 颜色类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Color {
  /**
   * ![white](docroot://reference/apis-arkui/arkui-ts/figures/white.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  White,

  /**
   * ![black](docroot://reference/apis-arkui/arkui-ts/figures/black.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Black,

  /**
   * ![blue](docroot://reference/apis-arkui/arkui-ts/figures/blue.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Blue,

  /**
   * ![brown](docroot://reference/apis-arkui/arkui-ts/figures/brown.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Brown,

  /**
   * ![gray](docroot://reference/apis-arkui/arkui-ts/figures/gray.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Gray,

  /**
   * ![green](docroot://reference/apis-arkui/arkui-ts/figures/green.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Green,

  /**
   * ![gray](docroot://reference/apis-arkui/arkui-ts/figures/gray.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Grey,

  /**
   * ![orange](docroot://reference/apis-arkui/arkui-ts/figures/orange.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Orange,

  /**
   * ![pink](docroot://reference/apis-arkui/arkui-ts/figures/pink.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Pink,

  /**
   * ![red](docroot://reference/apis-arkui/arkui-ts/figures/red.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Red,

  /**
   * ![yellow](docroot://reference/apis-arkui/arkui-ts/figures/yellow.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Yellow,

  /**
   * 透明色
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Transparent
}

/**
 * 智能取色枚举类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ColoringStrategy {

  /**
   * 设置前景色为控件背景色的反色。仅支持在[foregroundColor]{@link CommonMethod#foregroundColor(value: ResourceColor | ColoringStrategy)}中设
   * 置该枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INVERT = 'invert',

  /**
   * 设置控件背景阴影色为控件背景阴影区域的平均色。仅支持在入参类型为ShadowOptions的
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}中设置该枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  AVERAGE = 'average',

  /**
   * 设置控件背景阴影色为控件背景阴影区域的主色。仅支持在入参类型为ShadowOptions的
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}中设置该枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  PRIMARY = 'primary',

  /**
   * 从组件背景中提取平均颜色，并转换为对比鲜明的黑色或白色。子组件可以通过 Color（'foreground'） 使用此颜色。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic
   */
  CONTRAST = 'contrast'
}

/**
 * 用于设置图片填充效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageFit {
  /**
   * 保持宽高比进行缩小或者放大，使得图片或视频完全显示在边界内，对其方式为水平居中。
   * 
   * ![ImageFit-Examples01](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_contain.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Contain,

  /**
   * 保持宽高比进行缩小或者放大，使得图片或视频两边都大于或等于显示边界，对其方式为水平居中。
   *
   * ![ImageFit-Examples02](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_cover.png)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Cover,

  /**
   * 图片或视频会根据其自身尺寸和组件的尺寸进行适当缩放，以在保持比例的同时填充视图，对其方式为水平居中。
   *
   * ![ImageFit-Examples03](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_auto.png)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * 不保持宽高比进行放大缩小，使得图片或视频充满显示边界，对齐方式为水平居中。
   * 
   * ![ImageFit-Examples04](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_fill.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fill,

  /**
   * 保持宽高比进行显示，图片或视频缩小或者保持不变，对齐方式为水平居中。
   * 
   * ![ImageFit-Examples05](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_scaleDown.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  ScaleDown,

  /**
   * 保持原有尺寸进行显示，对齐方式为水平居中。
   *
   * ![ImageFit-Examples06](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_none.png)
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * 图片或视频显示在组件的顶部起始端，且保持原有尺寸。
   *
   * ![ImageFit-Examples07](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_top_start.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  TOP_START = 7,

  /**
   * 图片或视频显示在组件的顶部横向居中，且保持原有尺寸。
   *
   * ![ImageFit-Examples08](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_top.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  TOP = 8,

  /**
   * 图片或视频显示在组件的顶部尾端，且保持原有尺寸。
   *
   * ![ImageFit-Examples09](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_top_end.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  TOP_END = 9,

  /**
   * 图片或视频显示在组件的起始端纵向居中，且保持原有尺寸。
   *
   * ![ImageFit-Examples10](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_start.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  START = 10,

  /**
   * 图片或视频显示在组件的横向和纵向居中，且保持原有尺寸。
   *
   * ![ImageFit-Examples11](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_center.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  CENTER = 11,

  /**
   * 图片或视频显示在组件的尾端纵向居中，且保持原有尺寸。
   *
   * ![ImageFit-Examples12](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_end.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  END = 12,

  /**
   * 图片或视频显示在组件的底部起始端，且保持原有尺寸。
   *
   * ![ImageFit-Examples13](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_bottom_start.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM_START = 13,

  /**
   * 图片或视频显示在组件的底部横向居中，且保持原有尺寸。
   *
   * ![ImageFit-Examples14](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_bottom.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM = 14,

  /**
   * 图片或视频显示在组件的底部尾端，且保持原有尺寸。
   *
   * ![ImageFit-Examples15](docroot://reference/apis-arkui/arkui-ts/figures/image_fit_bottom_end.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 12 dynamic
   */
  BOTTOM_END = 15,

  /**
   * 配合[imageMatrix]{@link ImageAttribute#imageMatrix}使用，使图像在Image组件自定义位置显示，且保持原有尺寸。不支持svg图源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  MATRIX = 16
}

/**
 * 定义元素的边框线条样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BorderStyle {
  /**
   * 显示为一系列圆点，圆点半径为borderWidth的一半。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Dotted,

  /**
   * 显示为一系列短的方形虚线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Dashed,

  /**
   * 显示为一条实线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Solid
}

/**
 * 定义组件绘制圆角的模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 22 dynamic
 */
declare enum RenderStrategy {
  /**
   * 在线绘制模式，组件进行圆角内容绘制时，绘制内容被裁剪成圆角，直接绘制到主画布上。
   *
   * **说明**：使用在线绘制模式，在部分场景下可能会有显示效果异常，例如：圆角组件内叠加模糊效果后背景色会有相互影响，导致出现渐变叠加的效果，具体表现可参考
   * [示例3（设置离屏圆角）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#示例3设置离屏圆角)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  FAST = 0,

  /**
   * 离屏绘制模式，组件进行圆角内容绘制时，绘制内容先不带圆角绘制到离屏画布上，随后对离屏画布上的内容进行一次圆角裁切并绘制到主画布上。
   *
   * **说明**：
   *
   * 1. 离屏绘制模式相比在线绘制模式会带来额外的性能损失。
   * 2. 离屏绘制模式是指将内容绘制到主画布之前，先在一个额外的画布上完成绘制工作，然后将绘制结果绘制到主画布上。
   * 3. 离屏绘制模式仅针对需要多层组件切圆角的场景使用，单组件需设置[clip]{@link CommonMethod#clip(value: boolean)}属性、[背景]{@link ./common}或[前景色]{@link ./common}时才可使能离屏绘制模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 22 dynamic
   */
  OFFSCREEN = 1
}

/**
 * 线条连接样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum LineJoinStyle {
  /**
   * 使用尖角连接路径段。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Miter,

  /**
   * 使用圆角连接路径段。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Round,

  /**
   * 使用斜角连接路径段。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bevel
}

/**
 * 定义触摸操作的触发状态类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TouchType {
  /**
   * 手指按下时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Down,

  /**
   * 手指抬起时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Up,

  /**
   * 手指按压并在屏幕上移动时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Move,

  /**
   * 触摸事件取消时触发。例如：1、手指按住屏幕同时点击Home键返回桌面，此时会触发Cancel；2、<!--RP2--><!--RP2End-->手指触摸过程中存在手写笔操作，手指的触摸操作会收到Cancel事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Cancel,

  /**
   * 无障碍模式下，手指按下时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_ENTER = 9,

  /**
   * 无障碍模式下，触摸移动时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_MOVE = 10,

  /**
   * 无障碍模式下，抬手时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_EXIT = 11,

  /**
   * 无障碍模式下，取消当前触发的事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  HOVER_CANCEL = 12
}

/**
 * 定义事件是由左手点击触发还是右手点击触发。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 15 dynamic
 */
declare enum InteractionHand {
  /**
   * 未定义。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  NONE = 0,

  /**
   * 左手触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  LEFT = 1,

  /**
   * 右手触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  RIGHT = 2
}

/**
 * 定义鼠标按键的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MouseButton {
  /**
   * 鼠标左键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Left,

  /**
   * 鼠标右键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Right,

  /**
   * 鼠标中键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Middle,

  /**
   * 鼠标左侧后退键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Back,

  /**
   * 鼠标左侧前进键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Forward,

  /**
   * 无按键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None
}

/**
 * 定义鼠标操作的动作类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum MouseAction {
  /**
   * 鼠标按键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Press,

  /**
   * 鼠标按键释放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Release,

  /**
   * 鼠标移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Move,

  /**
   * 鼠标悬浮。
   *
   * **说明：** 该枚举值无效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Hover,

  /**
   * 鼠标进入窗口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  ENTER_WINDOW = 4,

  /**
   * 鼠标离开窗口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  LEAVE_WINDOW = 5,

  /**
   * 鼠标按键取消。通常在以下场景触发：
   *
   * 1. 组件失去焦点：当前持有焦点的组件因系统事件（如弹窗打断、应用切换）失去焦点时，会触发该动作。
   * 2. 事件中断：鼠标操作过程中发生更高优先级事件（如系统级手势或强制回收事件流），导致当前鼠标操作被强制终止。
   * 3. 异常状态退出：如组件销毁、渲染环境异常等场景下，未完成的鼠标事件会被标记为取消。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  CANCEL = 13
}

/**
 * 用于动画播放状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum AnimationStatus {
  /**
   * 动画初始状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Initial = 0,

  /**
   * 动画处于播放状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Running = 1,

  /**
   * 动画处于暂停状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Paused = 2,

  /**
   * 动画处于停止状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Stopped = 3
}

/**
 * 插值曲线，动效请参考<!--RP1-->[贝塞尔曲线](docroot://../design/ux-design/animation-attributes.md)<!--RP1End-->。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Curve {
  /**
   * 表示动画在整个过程中速度保持一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Linear,

  /**
   * 表示动画以低速开始，然后加快，在结束前减速，CubicBezier(0.25, 0.1, 0.25, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Ease,

  /**
   * 表示动画以低速开始，CubicBezier(0.42, 0.0, 1.0, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  EaseIn,

  /**
   * 表示动画以低速结束，CubicBezier(0.0, 0.0, 0.58, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  EaseOut,

  /**
   * 表示动画以低速开始和结束，CubicBezier(0.42, 0.0, 0.58, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  EaseInOut,

  /**
   * 标准曲线，CubicBezier(0.4, 0.0, 0.2, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FastOutSlowIn,

  /**
   * 减速曲线，CubicBezier(0.0, 0.0, 0.2, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LinearOutSlowIn,

  /**
   * 加速曲线，CubicBezier(0.4, 0.0, 1.0, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FastOutLinearIn,

  /**
   * 急缓曲线，CubicBezier(0.0, 0.0, 0.0, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  ExtremeDeceleration,

  /**
   * 锐利曲线，CubicBezier(0.33, 0.0, 0.67, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Sharp,

  /**
   * 节奏曲线，CubicBezier(0.7, 0.0, 0.2, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Rhythm,

  /**
   * 平滑曲线，CubicBezier(0.4, 0.0, 0.4, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Smooth,

  /**
   * 阻尼曲线，CubicBezier(0.2, 0.0, 0.2, 1.0)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Friction
}

/**
 * 设置当前播放方向下，动画开始前和结束后的状态。动画结束后的状态由fillMode和reverse属性共同决定。例如，fillMode为Forwards表示停止时维持动画最后一个关键帧的状态，若reverse为false则维持正播的最后
 * 一帧，即最后一张图，若reverse为true则维持逆播的最后一帧，即第一张图。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FillMode {
  /**
   * 动画未执行时，不应用任何样式到目标；播放完成后，恢复初始默认状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None,

  /**
   * 目标将保留动画执行期间最后一个关键帧的状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Forwards,

  /**
   * 动画应用于目标时，立即采用第一个关键帧定义的值，并在delay期间保留此值。第一个关键帧取决于playMode，playMode为Normal或Alternate时，帧为from状态；playMode为Reverse或
   * AlternateReverse时，帧为to状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Backwards,

  /**
   * 动画将遵循Forwards和Backwards的规则，从而在两个方向上扩展动画属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Both
}

/**
 * 动画播放模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum PlayMode {
  /**
   * 动画正向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal,

  /**
   * 动画反向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Reverse,

  /**
   * 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Alternate,

  /**
   * 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  AlternateReverse
}

/**
 * 定义按键操作的状态类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum KeyType {
  /**
   * 按键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Down,

  /**
   * 按键松开。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Up,

  /**
   * 取消按键事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CANCEL = 3
}

/**
 * 定义触发按键事件的设备类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum KeySource {
  /**
   * 输入设备类型未知。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Unknown,

  /**
   * 输入设备类型为键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Keyboard,

  /**
   * 输入设备类型为游戏手柄。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 15 dynamic
   */
  JOYSTICK
}

/**
 * 用于控制滚动组件在布局中的对齐位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Edge {
  /**
   * 竖直方向上边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * 竖直方向居中位置。
   * 
   * 从API version 9开放废弃。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Center,

  /**
   * 竖直方向下边缘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom,

  /**
   * 交叉轴方向文本基线位置。
   * 
   * 从API version 9开始废弃。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Baseline,

  /**
   * 水平方向起始位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * 水平方向居中位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  Middle,

  /**
   * 水平方向末尾位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End
}

/**
 * 定义星期枚举值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Week {
  /**
   * 星期一。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Mon,

  /**
   * 星期二。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Tue,

  /**
   * 星期三。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Wed,

  /**
   * 星期四。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Thur,

  /**
   * 星期五。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fri,

  /**
   * 星期六。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Sat,

  /**
   * 星期日。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Sun
}

/**
 * 定义元素水平布局的方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Direction {
  /**
   * 元素从左到右布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Ltr,

  /**
   * 元素从右到左布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Rtl,

  /**
   * 使用系统默认布局方向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto
}

/**
 * 用于设置滚动条的状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum BarState {
  /**
   * 不显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Off,

  /**
   * 按需显示（触摸时显示，2s后消失）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * 常驻显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  On
}

/**
 * 定义滚动容器的滑动效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum EdgeEffect {
  /**
   * 弹性物理动效，滑动到边缘后可以根据初始速度或通过触摸事件继续滑动一段距离，松手后回弹。
   *
   * API version 22及之前版本，拖动滚动条，滚动组件的弹性物理动效不生效。
   *
   * 从API version 23开始，通过手指拖动滚动条，滚动组件的弹性物理动效可以生效。通过鼠标拖动滚动条，滚动组件的弹性物理动效不能生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Spring,

  /**
   * 阴影效果，滑动到边缘后会有圆弧状的阴影。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Fade,

  /**
   * 滑动到边缘后无效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None
}

/**
 * 定义容器元素绘制区域内的子元素的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Alignment {
  /**
   * 顶部起始端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  TopStart,

  /**
   * 顶部横向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * 顶部尾端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  TopEnd,

  /**
   * 起始端纵向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * 横向和纵向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * 尾端纵向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End,

  /**
   * 底部起始端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  BottomStart,

  /**
   * 底部横向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom,

  /**
   * 底部尾端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  BottomEnd
}

/**
 * 用于支持align、[layoutGravity]{@link CommonMethod#layoutGravity}属性镜像特性的枚举类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20 dynamic
 */
declare enum LocalizedAlignment {
  /**
   * 顶部起始端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  TOP_START = "top_start",
  /**
   * 顶部横向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  TOP = "top",
  /**
   * 顶部尾端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  TOP_END = "top_end",
  /**
   * 起始端纵向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  START = "start",
  /**
   * 横向和纵向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  CENTER = "center",
  /**
   * 尾端纵向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  END = "end",
  /**
   * 底部起始端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTTOM_START = "bottom_start",
  /**
   * 底部横向居中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTTOM = "bottom",
  /**
   * 底部尾端。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 20 dynamic
   */
  BOTTOM_END = "bottom_end"
}

/**
 * 指定该转场样式生效的场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TransitionType {
  /**
   * 指定当前的Transition动效在组件的所有变化场景中生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  All,

  /**
   * 指定当前的Transition动效在组件的插入显示场景中生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Insert,

  /**
   * 指定当前的Transition动效在组件的删除隐藏场景中生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Delete
}

/**
 * 定义子组件的填充方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum RelateType {
  /**
   * 缩放当前子组件以填充满父组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FILL,

  /**
   * 缩放当前子组件以自适应父组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  FIT
}

/**
 * 定义组件的可见性及布局占位状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Visibility {
  /**
   * 显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Visible,

  /**
   * 隐藏，但参与布局进行占位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Hidden,

  /**
   * 隐藏，但不参与布局，不进行占位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None
}

/**
 * 线条端点样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum LineCapStyle {
  /**
   * 线条两端为平行线，不额外扩展。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Butt,

  /**
   * 在线条两端延伸半个圆，直径等于线宽。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Round,

  /**
   * 在线条两端延伸一个矩形，宽度等于线宽的一半，高度等于线宽。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Square
}

/**
 * 定义轴的方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum Axis {
  /**
   * 方向为纵向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Vertical,

  /**
   * 方向为横向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Horizontal
}

/**
 * 定义子组件在水平方向上的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum HorizontalAlign {
  /**
   * 按照语言方向起始端对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * 居中对齐，默认对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * 按照语言方向末端对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End
}

/**
 * 定义元素在容器主轴上的对齐格式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FlexAlign {
  /**
   * 元素在主轴方向首端对齐，第一个元素与行首对齐，后续元素与前一个对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * 元素在主轴方向中心对齐，第一个元素与行首的距离和最后一个元素与行尾的距离相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * 元素在主轴方向尾部对齐，最后一个元素与行尾对齐，其余元素与后一个对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End,

  /**
   * Flex主轴方向均匀分配弹性元素，相邻元素之间距离相同。第一个元素与行首对齐，最后一个元素与行尾对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  SpaceBetween,

  /**
   * Flex主轴方向均匀分配弹性元素，相邻元素之间距离相同。第一个元素到行首的距离和最后一个元素到行尾的距离是相邻元素之间距离的一半。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  SpaceAround,

  /**
   * Flex主轴方向均匀分配弹性元素，相邻元素之间的距离、第一个元素与行首的间距、最后一个元素到行尾的间距均相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  SpaceEvenly
}

/**
 * 定义元素在容器中交叉轴的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ItemAlign {
  /**
   * 使用Flex容器中的默认配置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * 元素在Flex容器中，沿交叉轴方向首部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start,

  /**
   * 元素在Flex容器中，沿交叉轴方向居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * 元素在Flex容器中，沿交叉轴方向底部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End,

  /**
   * 元素在Flex容器中，交叉轴方向文本基线对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Baseline,

  /**
   * 元素在Flex容器中，沿交叉轴方向拉伸填充。容器为Flex且设置Wrap为FlexWrap.Wrap或FlexWrap.WrapReverse时，元素拉伸到与当前行/列交叉轴长度最长的元素尺寸。其余情况下，无论元素尺寸是否设置，均
   * 拉伸到容器尺寸。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Stretch
}

/**
 * 定义子组件在Flex容器上排列的方向，即主轴的方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FlexDirection {
  /**
   * 主轴与行方向一致作为布局模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Row,

  /**
   * 主轴与列方向一致作为布局模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Column,

  /**
   * 与Row方向相反方向进行布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RowReverse,

  /**
   * 与Column相反方向进行布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  ColumnReverse
}

/**
 * 组件边界像素取整计算策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare enum PixelRoundCalcPolicy {
  /**
   * 非取整计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  NO_FORCE_ROUND = 0,
  /**
   * 向上取整计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  FORCE_CEIL = 1,
  /**
   * 向下取整计算。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 11 dynamic
   */
  FORCE_FLOOR = 2
}

/**
 * 指定像素取整模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18 dynamic
 */
declare enum PixelRoundMode {
  /**
   * 在组件测量大小和位置后进行像素取整，默认值为0。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PIXEL_ROUND_ON_LAYOUT_FINISH = 0,
  /**
   * 在组件测量大小结束后进行像素取整。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 18 dynamic
   */
  PIXEL_ROUND_AFTER_MEASURE = 1
}

/**
 * 定义Flex容器是单行/列还是多行/列排列。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FlexWrap {
  /**
   * Flex容器的元素以单行/列布局，子元素尽可能约束在容器内。当子元素有最小尺寸约束等设置时，Flex容器不会对其强制弹性压缩。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  NoWrap,

  /**
   * Flex容器的元素以多行/列排布，子项允许超出容器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Wrap,

  /**
   * Flex容器的元素以反向多行/列排布，子项允许超出容器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  WrapReverse
}

/**
 * 定义子组件在垂直方向上的对齐格式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum VerticalAlign {
  /**
   * 顶部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top,

  /**
   * 居中对齐，默认对齐方式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center,

  /**
   * 底部对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom
}

/**
 * 用于设置图片重复样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageRepeat {
  /**
   * 不重复绘制图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  NoRepeat,

  /**
   * 只在水平轴上重复绘制图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  X,

  /**
   * 只在垂直轴上重复绘制图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Y,

  /**
   * 在两个轴上重复绘制图片。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  XY
}

/**
 * 用于设置图片宽高效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ImageSize {
  /**
   * 保持原图的比例不变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Auto,

  /**
   * 保持宽高比进行缩小或者放大，使得图片两边都大于或等于显示边界。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Cover,

  /**
   * 保持宽高比进行缩小或者放大，使得图片完全显示在显示边界内。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Contain,

  /**
   * 不保持宽高比进行放大缩小，使得图片充满显示边界。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FILL = 3
}

/**
 * 线性渐变的方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum GradientDirection {
  /**
   * 从右向左。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Left = 0,

  /**
   * 从下向上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Top = 1,

  /**
   * 从左向右。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Right = 2,

  /**
   * 从上向下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bottom = 3,

  /**
   * 从左上向右下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LeftTop = 4,

  /**
   * 从左下向右上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LeftBottom = 5,

  /**
   * 从右上向左下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RightTop = 6,

  /**
   * 从右下向左上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RightBottom = 7,

  /**
   * 无。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 8
}

/**
 * 动画类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum SharedTransitionEffectType {
  /**
   * 目标页面元素的位置保持不变，支持配置透明度动画。
   *
   * 目前，仅在重定向到目标页面时配置的静态效果才会生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Static,

  /**
   * 将源页面元素移动到目标页面元素的位置并适当缩放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Exchange
}

/**
 * 字体样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FontStyle {
  /**
   * 标准的字体样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal = 0,

  /**
   * 斜体的字体样式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Italic = 1
}

/**
 * 字体粗细。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum FontWeight {
  /**
   * 100字重，字体较细。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Lighter = 0,

  /**
   * 400字重，字体粗细正常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal = 1,

  /**
   * 400字重，字体粗细正常，与Normal效果相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Regular = 2,

  /**
   * 500字重，字体粗细适中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Medium = 3,

  /**
   * 700字重，字体较粗。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bold = 4,

  /**
   * 900字重，字体非常粗。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Bolder = 5
}

/**
 * 文本段落在水平方向的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextAlign {
  /**
   * 水平居中对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Center = 0,

  /**
   * 水平对齐首部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Start = 1,

  /**
   * 水平对齐尾部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  End = 2,

  /**
   * 双端对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  JUSTIFY = 3,

  /**
   * 左对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  LEFT = 4,

  /**
   * 右对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 dynamic
   */
  RIGHT = 5
}

/**
 * 文本超长时的显示方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextOverflow {
  /**
   * 文本超长时按最大行截断显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 0,

  /**
   * 文本超长时按最大行截断显示，与None效果相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Clip = 1,

  /**
   * 文本超长时显示不下的文本用省略号代替。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Ellipsis = 2,

  /**
   * 文本超长时以跑马灯的方式展示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MARQUEE = 3
}

/**
 * 装饰线类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextDecorationType {
  /**
   * 不使用文本装饰线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  None = 0,

  /**
   * 文字下划线修饰。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Underline = 1,

  /**
   * 文字上划线修饰。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Overline = 2,

  /**
   * 穿过文本的修饰线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LineThrough = 3
}

/**
 * 文本大小写的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum TextCase {
  /**
   * 保持文本原有大小写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  Normal = 0,

  /**
   * 文本采用全小写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LowerCase = 1,

  /**
   * 文本采用全大写。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @form [since 9]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  UpperCase = 2
}

/**
 * 文本自适应布局调整字号的方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum TextHeightAdaptivePolicy {
  /**
   * 设置文本高度自适应方式为以[maxLines]{@link TextAreaAttribute#maxLines(value: number)}优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MAX_LINES_FIRST = 0,

  /**
   * 设置文本高度自适应方式为以缩小字体优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MIN_FONT_SIZE_FIRST = 1,

  /**
   * 设置文本高度自适应方式为以布局约束（高度）优先。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LAYOUT_CONSTRAINT_FIRST = 2
}

/**
 * 菜单显示的触发方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum ResponseType {
  /**
   * 通过鼠标右键点击触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  RightClick = 0,

  /**
   * 通过长按触发菜单弹出。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  LongPress = 1
}

/**
 * 定义组件悬浮效果的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum HoverEffect {
  /**
   * 使用组件的系统默认悬浮效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Auto,

  /**
   * 放大缩小的效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Scale,

  /**
   * 背景淡入淡出的强调效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Highlight,

  /**
   * 不设置效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  None
}

/**
 * 气泡显示的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 8 dynamic
 */
declare enum Placement {
  /**
   * 气泡提示位于组件左侧，与组件左侧中心对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Left,

  /**
   * 气泡提示位于组件右侧，与组件右侧中心对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Right,

  /**
   * 气泡提示位于组件上侧，与组件上侧中心对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Top,

  /**
   * 气泡提示位于组件下侧，与组件下侧中心对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Bottom,

  /**
   * 气泡提示位于组件上侧，从API version 9开始，与组件左侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TopLeft,

  /**
   * 气泡提示位于组件上侧，从API version 9开始，与组件右侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  TopRight,

  /**
   * 气泡提示位于组件下侧，从API version 9开始，与组件左侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  BottomLeft,

  /**
   * 气泡提示位于组件下侧，从API version 9开始，与组件右侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  BottomRight,

  /**
   * 气泡提示位于组件左侧，与组件上侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LeftTop,

  /**
   * 气泡提示位于组件左侧，与组件下侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LeftBottom,

  /**
   * 气泡提示位于组件右侧，与组件上侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  RightTop,

  /**
   * 气泡提示位于组件右侧，与组件下侧边缘对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  RightBottom
}

/**
 * 气泡箭头的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum ArrowPointPosition {
  /**
   * 水平方向：位于父组件最左侧；垂直方向：位于父组件最上侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  START = 'Start',

  /**
   * 位于父组件居中位置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CENTER = 'Center',

  /**
   * 水平方向：位于父组件最右侧；垂直方向：位于父组件最下侧。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  END = 'End'
}

/**
 * 剪贴板复制范围。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum CopyOptions {
  /**
   * 不支持复制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None = 0,

  /**
   * 支持仅在当前应用内复制粘贴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  InApp = 1,

  /**
   * 支持复制后在所有应用内粘贴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  LocalDevice = 2,

  /**
   * 支持跨设备复制。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @since 11 dynamiconly
   * @deprecated since 12
   */
  CROSS_DEVICE = 3
}

/**
 * 定义触摸测试的响应逻辑及节点阻塞规则。
 * 
 * > **说明：**
 * >
 * > 当Stack组件中有多个节点触摸区域重叠时，如果最上层节点的子组件命中，则默认只会对显示在最上层的节点做触摸测试。此时只有给显示在最上层的节点设置
 * > [hitTestBehavior]{@link CommonMethod#hitTestBehavior}为HitTestMode.Transparent时，才能使显示在下层的节点触发触摸测试。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 26.0.0]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum HitTestMode {
  /**
   * 默认触摸测试效果。自身及子节点响应触摸测试，但阻塞兄弟节点的触摸测试，不影响祖先节点的触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Default,

  /**
   * 自身响应触摸测试，阻塞子节点、兄弟节点和祖先节点的触摸测试。 
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Block,

  /**
   * 自身和子节点均响应触摸测试，不会阻塞兄弟节点和祖先节点的触摸测试。 
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  Transparent,

  /**
   * 自身不响应触摸测试，不会阻塞子节点、兄弟节点和祖先节点的触摸测试。 
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form [since 26.0.0]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  None,
  /**
   * 自身和子节点响应触摸测试，阻止所有优先级较低的兄弟节点和父节点参与触摸测试。 
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 20 dynamic
   */
  BLOCK_HIERARCHY,
  /**
   * 自身不响应触摸测试，并且所有的后代（孩子、孙子等）也不响应触摸测试，不会影响祖先节点的触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 26.0.0]
   * @atomicservice
   * @since 20 dynamic
   */
  BLOCK_DESCENDANTS
}

/**
 * 设置标题栏的推荐高度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare enum TitleHeight {
  /**
   * 只有主标题时，标题栏的推荐高度（56vp）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  MainOnly,

  /**
   * 同时有主标题和副标题时，标题栏的推荐高度（82vp）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  MainWithSub
}

/**
 * 输入法修饰键类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ModifierKey {
  /**
   * 表示键盘上Ctrl键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CTRL,

  /**
   * 表示键盘上Shift键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SHIFT,

  /**
   * 表示键盘上Alt键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ALT
}

/**
 * 输入法功能键类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum FunctionKey {
  /**
   * 表示键盘上ESC功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  ESC,

  /**
   * 表示键盘上F1功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F1,

  /**
   * 表示键盘上F2功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F2,

  /**
   * 表示键盘上F3功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F3,

  /**
   * 表示键盘上F4功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F4,

  /**
   * 表示键盘上F5功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F5,

  /**
   * 表示键盘上F6功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F6,

  /**
   * 表示键盘上F7功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F7,

  /**
   * 表示键盘上F8功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F8,

  /**
   * 表示键盘上F9功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F9,

  /**
   * 表示键盘上F10功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F10,

  /**
   * 表示键盘上F11功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F11,

  /**
   * 表示键盘上F12功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  F12,

  /**
   * 表示键盘上TAB功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  TAB,

  /**
   * 表示键盘上UP方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_UP,

  /**
   * 表示键盘上DOWN方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_DOWN,

  /**
   * 表示键盘上LEFT方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_LEFT,

  /**
   * 表示键盘上RIGHT方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DPAD_RIGHT,
}

/**
 * 图片基于行高的对齐方式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ImageSpanAlignment {
  /**
   * 图片下边沿与文本BaseLine对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BASELINE = 0,

  /**
   * 图片下边沿与行下边沿对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM = 1,

  /**
   * 图片中间与行中间对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER = 2,

  /**
   * 图片上边沿与行上边沿对齐。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP = 3,

  /**
   * 对齐方式跟随Text父组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  FOLLOW_PARAGRAPH = 4
}

/**
 * 设置组件内容的遮罩类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ObscuredReasons {
  /**
   * 显示的数据为通用占位符。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PLACEHOLDER = 0
}

/**
 * 文本框多态样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum TextContentStyle {
  /**
   * 默认风格。光标宽度为1.5vp，光标高度与文本选中高亮高度和字体大小相关。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DEFAULT = 0,

  /**
   * 内联输入风格，也称内联模式。文本选中高亮高度与输入框高度相同。
   *
   * 内联输入是在有明显的编辑态/非编辑态的区分场景下使用，例如：文件列表视图中的重命名。
   *
   * 不支持showError属性。
   *
   * 内联模式下，不支持拖入文本。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  INLINE = 1
}

/**
 * 定义点击效果的级别及对应动效参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum ClickEffectLevel {
  /**
   * 小面积（轻盈），弹簧动效，刚性：410，阻尼：38，初始速度：1，默认缩放比90%。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LIGHT = 0,

  /**
   * 中面积（稳定），弹簧动效，刚性：350，阻尼：35，初始速度：0.5，默认缩放比95%。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  MIDDLE = 1,

  /**
   * 大面积（厚重），弹簧动效，刚性：240，阻尼：28，初始速度：0，默认缩放比95%。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HEAVY = 2
}

/**
 * XComponent的类型
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum XComponentType {
  /**
   * 用于EGL/OpenGLES和媒体数据写入，单独展示开发者定制的绘制内容到屏幕上。背景色设置为黑色时走显示子系统（DSS）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SURFACE,

  /**
   * Component type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 12
   * @useinstead Column
   */
  COMPONENT,

  /**
   * 用于EGL/OpenGLES和媒体数据写入，开发者定制的绘制内容将与XComponent组件的内容合成后展示到屏幕上。1、保持帧同步，保持在同一帧将图形处理器（GPU）纹理和ArkUI其他的绘制指令统一发给渲染服务(
   * RenderService)。2、动效和系统组件统一。3、走图形处理器（GPU）合成，相比surface可能走显示子系统（DSS）功耗更高。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TEXTURE,

  /**
   * 用于Native UI节点的占位容器，开发者通过Native接口开发的页面组件可展示在此容器区域内。
   *
   * **说明：**
   *
   * 从API version 12开始支持，从API version 20开始废弃，推荐使用
   * [ContentSlot](docroot://ui/rendering-control/arkts-rendering-control-contentslot.md)组件替代。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamiconly
   * @deprecated since 20
   * @useinstead ContentSlot
   */
  NODE
}

/**
 * 定义嵌套滚动组件中的嵌套模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum NestedScrollMode {
  /**
   * 只自身滚动，不与父组件联动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SELF_ONLY,

  /**
   * 自身先滚动，自身滚动到边缘以后父组件滚动。父组件滚动到边缘以后，如果父组件有边缘效果，则父组件触发边缘效果，否则子组件触发边缘效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  SELF_FIRST,

  /**
   * 父组件先滚动，父组件滚动到边缘以后自身滚动。自身滚动到边缘后，如果有边缘效果，会触发自身的边缘效果，否则触发父组件的边缘效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PARENT_FIRST,

  /**
   * 自身和父组件同时滚动，自身和父组件都到达边缘以后，如果自身有边缘效果，则自身触发边缘效果，否则父组件触发边缘效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  PARALLEL
}

/**
 * 滑动操作的来源。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum ScrollSource {
  /**
   * 拖拽事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DRAG = 0,

  /**
   * 拖拽结束之后的惯性滑动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  FLING,

  /**
   * EdgeEffect.Spring的边缘滚动效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  EDGE_EFFECT,

  /**
   * 除拖拽外的其他用户输入，如鼠标滚轮、键盘事件等。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  OTHER_USER_INPUT,

  /**
   * 滚动条的拖拽事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLL_BAR,

  /**
   * 滚动条拖拽结束后的带速度的惯性滑动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLL_BAR_FLING,

  /**
   * Scroller的不带动效方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLLER,

  /**
   * Scroller的带动效方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SCROLLER_ANIMATION
}

/**
 * 表示宽高动画过程中组件内容的填充方式。
 *
 * > **说明：**
 * >
 * > - 示意图中，蓝色区域表示内容，橙黄色区域表示节点大小。
 * >
 * > - 不同的内容填充方式在宽高动画过程中效果不一致，开发者需要选择合适的内容填充方式以实现需要的动画效果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form [since 18]
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum RenderFit {
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持中心对齐。               !
   * [renderfit_center](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_center.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  CENTER = 0,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持顶部中心对齐。             !
   * [renderfit_top](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP = 1,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持底部中心对齐。             !
   * [renderfit_bottom](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM = 2,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持左侧对齐。               !
   * [renderfit_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  LEFT = 3,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持右侧对齐。              !
   * [renderfit_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RIGHT = 4,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持左上角对齐。              !
   * [renderfit_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP_LEFT = 5,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持右上角对齐。             !
   * [renderfit_top_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  TOP_RIGHT = 6,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持左下角对齐。              !
   * [renderfit_bottom_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM_LEFT = 7,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持右下角对齐。              !
   * [renderfit_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  BOTTOM_RIGHT = 8,
  /**
   * 不考虑动画终态内容的宽高比，并且内容始终缩放到组件的大小。              !
   * [renderfit_resize_fill](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_fill.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_FILL = 9,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容完整显示在组件内，且与组件保持中心对齐。   !
   * [renderfit_resize_contain](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_CONTAIN = 10,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容完整显示在组件内。当组件宽方向有剩余时，内容与组件保持左侧对齐，当组件高方向有剩余时，内容与组件保持顶部对齐。   !
   * [renderfit_resize_contain_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_CONTAIN_TOP_LEFT = 11,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容完整显示在组件内。当组件宽方向有剩余时，内容与组件保持右侧对齐，当组件高方向有剩余时，内容与组件保持底部对齐。   !
   * [renderfit_resize_contain_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_CONTAIN_BOTTOM_RIGHT = 12,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容两边都大于或等于组件两边，且与组件保持中心对齐，显示内容的中间部分。   !
   * [renderfit_resize_cover](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_COVER = 13,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容的两边都恰好大于或等于组件两边。当内容宽方向有剩余时，内容与组件保持左侧对齐，显示内容的左侧部分。当内容高方向有剩余时，内容与组件保持顶部对齐，显示内容的顶侧部分。   !
   * [renderfit_resize_cover_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_COVER_TOP_LEFT = 14,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容的两边都恰好大于或等于组件两边。当内容宽方向有剩余时，内容与组件保持右侧对齐，显示内容的右侧部分。当内容高方向有剩余时，内容与组件保持底部对齐，显示内容的底侧部分。   !
   * [renderfit_resize_cover_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  RESIZE_COVER_BOTTOM_RIGHT = 15
}

/**
 * 弹窗按钮的样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare enum DialogButtonStyle {
  /**
   * 白底蓝字（深色主题下为黑底蓝字）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  DEFAULT = 0,

  /**
   * 蓝底白字。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  HIGHLIGHT = 1
}

/**
 * 断行规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11 dynamic
 */
declare enum WordBreak {
  /**
   * CJK(中文、日文、韩文)文本可以在任意2个字符间断行，而Non-CJK文本（如英文等）只能在空白符处断行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  NORMAL = 0,

  /**
   * 对于Non-CJK的文本，可在任意2个字符间断行。对于CJK文本，效果与NORMAL一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  BREAK_ALL = 1,

  /**
   * 与BREAK_ALL相同，对于Non-CJK的文本可在任意2个字符间断行，一行文本中有断行破发点（如空白符）时，优先按破发点换行，保障单词优先完整显示。若整一行文本均无断行破发点，则在任意2个字符间断行。对于CJK文本，效果与
   * NORMAL一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   */
  BREAK_WORD = 2,

  /**
   * 每行末尾单词尝试通过连字符“-”进行断行，若无法添加连字符“-”，则跟BREAK_WORD保持一致。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   */
  HYPHENATION = 3
}

/**
 * 折行规则。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum LineBreakStrategy {
  /**
   * 使每一行尽可能显示多的字符，直到这一行不能显示更多字符时进行折行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  GREEDY = 0,

  /**
   * 在BALANCED的基础上，尽可能填满行，同时最后一行的权重较低，可能出现最后一行留白较多的情形。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HIGH_QUALITY = 1,

  /**
   * 在不拆词的情况下，尽量使一个段落中每一行的宽度相同。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  BALANCED = 2
}

/**
 * 定义光照类型，用于指定组件是否可以被光源照亮以及被照亮的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 */
declare enum IlluminatedType {
  /**
   * 组件不会被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  NONE = 0,
  /**
   * 组件边缘可以被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BORDER = 1,
  /**
   * 组件内容可以被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  CONTENT = 2,
  /**
   * 组件边缘和内容可以被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BORDER_CONTENT = 3,
  /**
   * 组件边缘可以被照亮，边缘带有发光效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BLOOM_BORDER = 4,
  /**
   * 组件边缘和内容可以被照亮，边缘带有发光效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  BLOOM_BORDER_CONTENT = 5
}

/**
 * 省略的位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum EllipsisMode {
  /**
   * 省略行首内容。适用单行文本场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  START = 0,

  /**
   * 省略行中内容。适用单行文本场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  CENTER = 1,

  /**
   * 省略行末内容。适用单行文本和多行文本场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  END = 2,

  /**
   * 省略行首内容。适用单行文本和多行文本场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  MULTILINE_START = 3,

  /**
   * 省略行中内容。适用单行文本和多行文本场景。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  MULTILINE_CENTER = 4
}

/**
 * 在使用该类型时，其值可以是泛型参数T所指定的类型，也可以是undefined。
 *
 * @unionmember { T } 表示泛型参数T所指定的类型。
 * @unionmember { undefined } 表示该类型声明的对象是undefined。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare type Nullable<T> = T | undefined;

/**
 * 下拉菜单的宽度模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum OptionWidthMode {
  /**
   * 设置该值时，下拉菜单宽度默认为2栅格。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FIT_CONTENT = 'fit_content',

  /**
   * 设置下拉菜单继承下拉按钮宽度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FIT_TRIGGER = 'fit_trigger'
}

/**
 * 定义设备的折叠状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice [since 12]
 * @since 11 dynamic
 */
declare enum FoldStatus {
  /**
   * 表示设备当前折叠状态未知。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_UNKNOWN = 0,
  /**
   * 表示设备当前折叠状态为完全展开。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_EXPANDED = 1,
  /**
   * 表示设备当前折叠状态为折叠。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_FOLDED = 2,
  /**
   * 表示设备当前折叠状态为半折叠，即介于完全展开和折叠之间的状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  FOLD_STATUS_HALF_FOLDED = 3
}

/**
 * 定义应用方向旋转角度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AppRotation {

  /**
   * 应用方向为0度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_0 = 0,

  /**
   * 应用方向为90度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_90 = 1,

  /**
   * 应用方向为180度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_180 = 2,

  /**
   * 应用方向为270度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  ROTATION_270 = 3
}

/**
 * 枚举类型，用于指定EmbeddedComponent可拉起的提供方类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 */
declare enum EmbeddedType {
  /**
   * 表示当前拉起的提供方类型为EmbeddedUIExtensionAbility。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  EMBEDDED_UI_EXTENSION = 0
}

/**
 * 跑马灯组件属性更新后，跑马灯的滚动策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum MarqueeUpdateStrategy {
  /**
   * 跑马灯组件属性更新后，从开始位置，运行跑马灯效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DEFAULT = 0,

  /**
   * 跑马灯组件属性更新后，保持当前位置，运行跑马灯效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  PRESERVE_POSITION = 1
}

/**
 * 装饰线样式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum TextDecorationStyle {
  /**
   * 单实线（默认值）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SOLID = 0,

  /**
   * 双实线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DOUBLE = 1,

  /**
   * 点线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DOTTED = 2,

  /**
   * 虚线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DASHED = 3,

  /**
   * 波浪线。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  WAVY = 4
}

/**
 * 文本可选择、可获焦状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum TextSelectableMode {
  /**
   * 文本可选择，但不可获焦，设置属性selection、bindSelectionMenu、copyOption不影响当前行为。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTABLE_UNFOCUSABLE = 0,

  /**
   * 文本可选择，可获焦并Touch后获得焦点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTABLE_FOCUSABLE = 1,

  /**
   * 文本不可选择，不可获焦，设置属性selection、bindSelectionMenu、copyOption均不生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  UNSELECTABLE = 2
}

/**
 * 辅助功能悬停事件的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum AccessibilityHoverType {
  /**
   * 手指按下时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_ENTER = 0,

  /**
   * 触摸移动时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_MOVE = 1,

  /**
   * 手指抬起时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_EXIT = 2,

  /**
   * 打断取消当前触发的事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  HOVER_CANCEL = 3
}

/**
 * 表示窗口不同宽度阈值下对应的宽度断点枚举值。通过[getWindowWidthBreakpoint]{@link @ohos.arkui.UIContext:UIContext.getWindowWidthBreakpoint}返回。
 *
 * 下表列出了典型设备默认宽度断点的阈值划分，可在基于窗口宽度断点布局设计时作为参考。个别设备可根据需求通过产品化配置调整断点阈值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 13 dynamic
 */
declare enum WidthBreakpoint {
  /**
   * 窗口宽度小于320vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_XS = 0,

  /**
   * 窗口宽度大于等于320vp，且小于600vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_SM = 1,

  /**
   * 窗口宽度大于等于600vp，且小于840vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_MD = 2,

  /**
   * 窗口宽度大于等于840vp，且小于1440vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_LG = 3,

  /**
   * 窗口宽度大于等于1440vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  WIDTH_XL = 4
}

/**
 * 表示窗口不同高宽比阈值下对应的高度断点枚举值。通过[getWindowHeightBreakpoint]{@link @ohos.arkui.UIContext:UIContext.getWindowHeightBreakpoint}
 * 返回。
 *
 * 下表列出了典型设备默认高宽比断点的阈值划分，可在基于窗口高宽比布局设计时作为参考。个别设备可根据需求通过产品化配置调整断点阈值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform [since 22]
 * @atomicservice
 * @since 13 dynamic
 */
declare enum HeightBreakpoint {
  /**
   * 窗口高宽比小于0.8。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  HEIGHT_SM = 0,

  /**
   * 窗口高宽比大于等于0.8，且小于1.2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  HEIGHT_MD = 1,

  /**
   * 窗口高宽比大于等于1.2。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform [since 22]
   * @atomicservice
   * @since 13 dynamic
   */
  HEIGHT_LG = 2
}

/**
 * 定义焦点轴事件的轴类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 15 dynamic
 */
declare enum AxisModel {
  /**
   * 游戏手柄X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_X = 0,

  /**
   * 游戏手柄Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_Y = 1,

  /**
   * 游戏手柄Z轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_Z = 2,

  /**
   * 游戏手柄RZ轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_RZ = 3,

  /**
   * 游戏手柄GAS轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_GAS = 4,

  /**
   * 游戏手柄BRAKE轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_BRAKE = 5,

  /**
   * 游戏手柄HAT0X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_HAT0X = 6,

  /**
   * 游戏手柄HAT0Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   */
  ABS_HAT0Y = 7,

  /**
   * 游戏手柄RX轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_RX = 8,

  /**
   * 游戏手柄RY轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_RY = 9,

  /**
   * 游戏手柄THROTTLE轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_THROTTLE = 10,

  /**
   * 游戏手柄RUDDER轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_RUDDER = 11,

  /**
   * 游戏手柄WHEEL轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_WHEEL = 12,

  /**
   * 游戏手柄HAT1X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT1X = 13,

  /**
   * 游戏手柄HAT1Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT1Y = 14,

  /**
   * 游戏手柄HAT2X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT2X = 15,

  /**
   * 游戏手柄HAT2Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT2Y = 16,

  /**
   * 游戏手柄HAT3X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT3X = 17,

  /**
   * 游戏手柄HAT3Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  ABS_HAT3Y = 18
}

/**
 * 交叉轴方向键走焦模式枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum FocusWrapMode {
  /**
   * 交叉轴方向键不允许换行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DEFAULT = 0,

  /**
   * 交叉轴方向键允许换行。
   * 
   * 不规则单元格场景下，交叉轴方向键走焦时优先走到同一行的可获焦item。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  WRAP_WITH_ARROW = 1
}

/**
 * 为不同响应式[栅格容器断点](docroot://ui/arkts-layout-development-grid-layout.md#栅格容器断点)指定列数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum PresetFillType {
  /**
   * 针对List和Swiper组件：在组件宽度属于sm及更小的断点区间时显示1列，属于md断点区间时显示2列，属于lg及更大的断点区间时显示3列。
   *
   * 针对Grid、WaterFlow和LazyVWaterFlowLayout组件：在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列。
   * LazyVWaterFlowLayout组件从API版本26.0.0开始支持。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BREAKPOINT_DEFAULT = 0,
  /**
   * 在组件宽度属于sm及更小的断点区间时显示1列，属于md断点区间时显示2列，属于lg及更大的断点区间时显示3列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BREAKPOINT_SM1MD2LG3 = 1,
  /**
   * 在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  BREAKPOINT_SM2MD3LG5 = 2
}

/**
 * 旋转表冠动作。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare enum CrownAction {
  /**
   * 表冠开始转动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 24
   */
  BEGIN = 0,

  /**
   * 表冠转动中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  UPDATE = 1,

  /**
   * 表冠停止转动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  END = 2
}

/**
 * 旋转表冠灵敏度。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
declare enum CrownSensitivity {
  /**
   * 低灵敏度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  LOW = 0,

  /**
   * 中灵敏度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  MEDIUM = 1,

  /**
   * 高灵敏度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  HIGH = 2
}

/**
 * 表示鼠标滚轮翻页模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15 dynamic
 */
declare enum PageFlipMode {
  /**
   * 连续翻页模式，鼠标滚轮连续滚动时翻多页。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  CONTINUOUS = 0,

  /**
   * 单次翻页模式，在一次翻页动画结束前不响应滚轮事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 15 dynamic
   */
  SINGLE = 1
}

/**
 * 定义轴事件的轴动作类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 17 dynamic
 */
declare enum AxisAction {
  /**
   * 无轴事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  NONE = 0,

  /**
   * 轴事件开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  BEGIN = 1,

  /**
   * 轴事件触发中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  UPDATE = 2,

  /**
   * 轴事件结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  END = 3,

  /**
   * 轴事件取消。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 17 dynamic
   */
  CANCEL = 4
}

/**
 * 定义节点获焦框的绘制层级。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19 dynamic
 */
declare enum FocusDrawLevel {
  /**
   * 获焦框绘制在节点自身层级。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  SELF = 0,

  /**
   * 获焦框绘制在当前实例Z序的最上层。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @form
   * @atomicservice
   * @since 19 dynamic
   */
  TOP = 1
}

/**
 * 分割线模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum DividerMode {
  /**
   * 悬浮在Menu之上，默认值，不占用高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  FLOATING_ABOVE_MENU = 0,

  /**
   * 在Menu中展开，参与布局计算，占用高度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  EMBEDDED_IN_MENU = 1
}

/**
 * 要查询的交互事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 19 dynamic
 */
declare enum EventQueryType {
  /**
   * 点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamic
   */
  ON_CLICK = 0
}

/**
 * 指定Tips跟随类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum TipsAnchorType {
  /**
   * Tips跟随目标物。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TARGET,

  /**
   * Tips跟随鼠标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  CURSOR
}

/**
 * 弹窗在子窗口中的显示模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum DialogDisplayMode {
  /**
   * 弹窗在屏幕居中显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SCREEN_BASED = 0,
  /**
   * 弹窗在应用窗口居中显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  WINDOW_BASED = 1
}

/**
 * 定义了颜色空间的类型，用于指定颜色显示的模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum ColorSpace {
  /**
   * SRGB颜色空间，适用于大多数显示设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SRGB = 0,

  /**
   * Display-P3颜色空间，具有更广的色域，适用于高端显示设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  DISPLAY_P3 = 1,

  /**
   * BT2020颜色空间，具有更广的色域，适用于高端显示设备。
   *
   * **系统接口：** 此接口为系统接口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BT2020 = 2
}

/**
 * 用于动画的属性类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
declare enum AnimationPropertyType {
  /**
   * x、y、z方向的旋转角属性。该属性对应参数个数为3，属性的单位为度（°）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  ROTATION = 0,

  /**
   * x、y方向的平移属性。该属性对应参数个数为2，属性的单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  TRANSLATION = 1,

  /**
   * x、y方向的缩放属性。该属性对应参数个数为2，属性的取值范围为(-∞, +∞) 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  SCALE = 2,

  /**
   * 透明度属性。该属性对应参数个数为1，属性的取值范围为[0,1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  OPACITY = 3
}

/**
 * 触摸热区适用的输入工具类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare enum ResponseRegionSupportedTool {
  /**
   * 所有输入工具类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  ALL = 0,

  /**
   * 手指。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  FINGER = 1,

  /**
   * 手写笔。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  PEN = 2,

  /**
   * 鼠标。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  MOUSE = 3
}

/**
 * 定义轴事件的轴类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 22 dynamic
 */
declare enum AxisType {
  /**
   * 垂直滚动轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  VERTICAL_AXIS = 0,

  /**
   * 水平滚动轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  HORIZONTAL_AXIS = 1,

  /**
   * 捏合轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   */
  PINCH_AXIS = 2
}

/**
 * 输入事件子类型掩码枚举，用于标识不同类型的输入事件子类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum InputEventSubTypeMask {
  /**
   * 鼠标左键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LEFT_MOUSE_DOWN = 1 << 0,

  /**
   * 鼠标左键抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LEFT_MOUSE_UP = 1 << 1,

  /**
   * 鼠标右键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  RIGHT_MOUSE_DOWN = 1 << 2,

  /**
   * 鼠标右键抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  RIGHT_MOUSE_UP = 1 << 3,

  /**
   * 鼠标中键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MIDDLE_MOUSE_DOWN = 1 << 4,

  /**
   * 鼠标中键抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MIDDLE_MOUSE_UP = 1 << 5,

  /**
   * 鼠标左键按下并移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  LEFT_MOUSE_DRAGGING = 1 << 6,

  /**
   * 鼠标右键按下并移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  RIGHT_MOUSE_DRAGGING = 1 << 7,

  /**
   * 鼠标中键按下并移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MIDDLE_MOUSE_DRAGGING = 1 << 8,

  /**
   * 触控按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOUCH_DOWN = 1 << 9,

  /**
   * 触控抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOUCH_UP = 1 << 10,

  /**
   * 物理键盘按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  KEY_DOWN = 1 << 11,

  /**
   * 物理键盘抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  KEY_UP = 1 << 12
}

/**
 * 输入事件拦截动作枚举，用于控制输入事件是否继续传递到UI框架，适用于需要按业务规则允许或阻止输入事件继续传递的场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum InputEventInterceptAction {
  /**
   * 允许事件继续传递到UI框架。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CONTINUE = 0,

  /**
   * 阻止事件传递到UI框架。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BLOCK = 1
}

/**
 * 定义分发的事件是否为竞争手势，竞争场景下手势原始节点和目标节点只有一个节点会响应手势，非竞争场景下手势原始节点和目标节点可以同时响应。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 24 dynamic
 */
declare enum CompetitionStrategy {
  /**
   * 表示分发的事件为非竞争手势。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  DEFAULT = 0,

  /**
   * 表示分发的事件为竞争手势。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 24 dynamic
   */
  COMPETITION = 1
}

/**
 * 定义手势和事件收集的干预操作类型，适用于手势和事件收集过程中需要按优先级保留或丢弃部分手势的场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum GestureCollectIntervention {
  /**
   * 继续正常的手势和事件收集流程。不进行任何干预。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CONTINUE = 0,

  /**
   * 丢弃所有待收集的低优先级手势和事件。丢弃的部分包括左侧兄弟节点以及祖先节点（父节点及以上）的手势。仅保留当前节点和更高优先级节点中已收集的手势。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_LOWER = 1,

  /**
   * 丢弃已经收集到的高优先级手势和事件。会丢弃已收集的右侧兄弟节点和当前节点上的手势。将继续处理低优先级手势的收集流程（左侧兄弟节点和祖先节点）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_HIGHER = 2,

  /**
   * 丢弃当前节点自身的手势和事件。当前节点的手势和事件将从手势树中排除。兄弟节点（左侧和右侧）以及祖先节点的手势仍会继续收集。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_SELF = 3,

  /**
   * 丢弃左侧兄弟节点中待收集的手势和事件。当前节点以及已收集的右侧兄弟节点的手势和事件将被保留。将继续处理父节点以及祖先节点的收集流程。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISCARD_LOWER_PRIORITY_SIBLINGS = 4
}

/**
 * 原始输入事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum RawInputEventType {
  /**
   * 触摸事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TOUCH = 0,

  /**
   * 鼠标事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  MOUSE = 1
}

/**
 * Enumerates the component animation modes under the UI material effect.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum UIMaterialAnimationMode {
  /**
   * When the material is enabled for the component, the animation effect is automatically enabled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  IMMERSIVE = 0,

  /**
   * Disable the animation effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 1
}

/**
 * 边缘流光位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare enum EdgeLightPosition {
  /**
   * 边缘流光在左上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TOP_LEFT = 0,
  /**
   * 边缘流光在右上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TOP_RIGHT = 1,
  /**
   * 边缘流光在左下角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BOTTOM_LEFT = 2,
  /**
   * 边缘流光在右下角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BOTTOM_RIGHT = 3,
  /**
   * 边缘流光在顶部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  TOP = 4,
  /**
   * 边缘流光在底部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  BOTTOM = 5,
  /**
   * 边缘流光在左边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  LEFT = 6,
  /**
   * 边缘流光在右边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  RIGHT = 7
}

/**
 * 组件的智慧手势响应优先级枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum GestureShortcut {
  /**
   * 智慧手势响应优先级。当前智慧手势响应配置仅支持该取值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PRIMARY = 0
}

/**
 * 智慧手势操作类型枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum SmartGestureAction {
  /**
   * 无动作。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  NONE = 0,

  /**
   * 向前翻页。包括向下和向右。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PAGE_FORWARD = 1,

  /**
   * 向前滚动。包括向下和向右。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SCROLL_FORWARD = 2,

  /**
   * 选中组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SELECT = 3,

  /**
   * 点击组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  CLICK = 4,

  /**
   * 返回。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BACK_PRESS = 5
}

/**
 * 智慧手势原始操作意图枚举。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum OperateIntention {
  /**
   * 敲一敲。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  TAP = 0,

  /**
   * 划一划。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  SLIDE_FORWARD = 1,

  /**
   * 翻腕。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BACK_PRESS = 2
}
