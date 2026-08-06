'use static'
/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

import curves from '../../@ohos.curves';
import { AttributeModifier, CommonMethod } from './common';

/**
 * common enum of the checkbox shape
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum CheckBoxShape {
  /**
   * Circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CIRCLE = 0,

  /**
   * Rounded Square.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ROUNDED_SQUARE = 1
}

/**
 * common enum of color
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Color {
  /**
   * White.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  White = '#FFFFFFFF',

  /**
   * Black.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Black = '#FF000000',

  /**
   * Blue.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Blue = '#FF0000FF',

  /**
   * Brown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Brown = '#FFA52A2A',

  /**
   * Gray.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Gray = '#FF808080',

  /**
   * Green.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Green = '#FF008000',

  /**
   * Grey.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Grey = '#FF808080',

  /**
   * Orange.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Orange = '#FFFFA500',

  /**
   * Pink.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Pink = '#FFFFC0CB',

  /**
   * Red.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Red = '#FFFF0000',

  /**
   * Yellow.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Yellow = '#FFFFFF00',

  /**
   * Transparent.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Transparent = '#00000000',
}

/**
 * 智能取色枚举类型。
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ColoringStrategy {
  /**
   * 设置前景色为控件背景色的反色。仅支持在[foregroundColor]{@link CommonMethod#foregroundColor(value: ResourceColor | ColoringStrategy)}中设
   * 置该枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  INVERT = 'invert',

  /**
   * 设置控件背景阴影色为控件背景阴影区域的平均色。仅支持在入参类型为ShadowOptions的
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}中设置该枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AVERAGE = 'average',

  /**
   * 设置控件背景阴影色为控件背景阴影区域的主色。仅支持在入参类型为ShadowOptions的
   * [shadow]{@link CommonMethod#shadow(value: ShadowOptions | ShadowStyle)}中设置该枚举。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PRIMARY = 'primary',
}

/**
 * Image display mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageFit {
  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Fill = 0,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Contain = 1,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that both sides of the image are greater than or equal to the
   * display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Cover = 2,

  /**
   * Adaptive display
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 3,

  /**
   * Keep the original size and display it in the center.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 5,

  /**
   * Keep the aspect ratio displayed, and the image zooms out or remains unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ScaleDown = 6,

  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_START = 7,

  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP = 8,

  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_END = 9,

  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START = 10,

  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 11,

  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 12,

  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM_START = 13,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM = 14,

  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM_END = 15,

  /**
   * Matrix of Image.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MATRIX = 16
}

/**
 * Border Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BorderStyle {
  /**
   * Displays as a series of dots with a radius of half the borderWidth.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Dotted = 2,

  /**
   * Shows as a series of short square dashed lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Dashed = 1,

  /**
   * Shows as a solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Solid = 0
}

/**
 * 定义组件绘制圆角的模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RenderStrategy {
  /**
   * 在线绘制模式，组件进行圆角内容绘制时，绘制内容被裁剪成圆角，直接绘制到主画布上。
   * 
   * **说明**：使用在线绘制模式，在部分场景下可能会有显示效果异常，例如：圆角组件内叠加模糊效果后背景色会有相互影响，导致出现渐变叠加的效果，具体表现可参考
   * [示例3（设置离屏圆角）](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#示例3设置离屏圆角)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FAST = 0,

  /**
   * 离屏绘制模式，组件进行圆角内容绘制时，绘制内容先不带圆角绘制到离屏画布上，随后对离屏画布上的内容进行一次圆角裁切并绘制到主画布上。
   * 
   * **说明**：
   * 
   * 1. 离屏绘制模式相比在线绘制模式会带来额外的性能损失。
   * 2. 离屏绘制模式是指将内容绘制到主画布之前，先在一个额外的画布上完成绘制工作，然后将绘制结果绘制到主画布上。
   * 3. 离屏绘制模式仅针对需要多层组件切圆角的场景使用，单组件需设置[clip]{@link CommonMethod#clip(value: boolean)}属性、[背景]{@link common}或[前景色]{@link common}时才可使能离屏绘制模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OFFSCREEN = 1
}

/**
 * Line Join Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LineJoinStyle {
  /**
   * Connect path segments using bevels.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Miter = 0,

  /**
   * Connect path segments using sharp corners.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Round = 1,

  /**
   * Connect path segments using fillets.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bevel = 2
}

/**
 * 定义触摸操作的触发状态类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TouchType {
  /**
   * 手指按下时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Down = 0,

  /**
   * 手指抬起时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Up = 1,

  /**
   * 手指按压并在屏幕上移动时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Move = 2,

  /**
   * 触摸事件取消时触发。例如：1.手指按住屏幕同时点击Home键返回桌面，此时会触发Cancel；2.<!--RP2--><!--RP2End-->手指触摸过程中存在手写笔操作，手指的触摸操作会收到Cancel事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Cancel = 3,

  /**
   * 无障碍模式下，手指按下时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_ENTER = 9,

  /**
   * 无障碍模式下，触摸移动时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_MOVE = 10,

  /**
   * 无障碍模式下，抬手时触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_EXIT = 11,

  /**
   * 无障碍模式下，取消当前触发的事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_CANCEL = 12,
}

/**
 * 定义事件是由左手点击触发还是右手点击触发。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum InteractionHand {
  /**
   * 未定义。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 左手触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LEFT = 1,

  /**
   * 右手触发。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RIGHT = 2
}

/**
 * 定义鼠标按键的类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MouseButton {
  /**
   * 鼠标左键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Left = 1,

  /**
   * 鼠标右键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Right = 2,

  /**
   * 鼠标中键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Middle = 4,

  /**
   * 鼠标左侧后退键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Back = 8,

  /**
   * 鼠标左侧前进键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Forward =16,

  /**
   * 无按键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0
}

/**
 * 定义鼠标操作的动作类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MouseAction {
  /**
   * 鼠标按键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Press = 1,

  /**
   * 鼠标按键释放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Release = 2,

  /**
   * 鼠标移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Move = 3,

  /**
   * 鼠标悬浮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Hover = 4,

  /**
   * 鼠标进入窗口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ENTER_WINDOW = 4,

  /**
   * 鼠标离开窗口。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 23 static
   */
  CANCEL = 13
}

/**
 * Animation status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AnimationStatus {
  /**
   * Initial state of the animation.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Initial = 0,

  /**
   * The animation is playing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Running = 1,

  /**
   * The animation is paused.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Paused = 2,

  /**
   * The animation is stopped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Stopped = 3
}

/**
 * 插值曲线。
 *
 * @typedef { curves.Curve } Curve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Curve = curves.Curve;

/**
 * 设置当前播放方向下，动画开始前和结束后的状态。动画结束后的状态由fillMode和reverse属性共同决定。例如，fillMode为Forwards表示停止时维持动画最后一个关键帧的状态，若reverse为false则维持正播的最后
 * 一帧，即最后一张图，若reverse为true则维持逆播的最后一帧，即第一张图。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FillMode {
  /**
   * 动画未执行时，不应用任何样式到目标；播放完成后，恢复初始默认状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
   * 目标将保留动画执行期间最后一个关键帧的状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Forwards = 1,

  /**
   * 动画应用于目标时，立即采用第一个关键帧定义的值，并在delay期间保留此值。第一个关键帧取决于playMode，playMode为Normal或Alternate时，帧为from状态；playMode为Reverse或
   * AlternateReverse时，帧为to状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Backwards = 2,

  /**
   * 动画将遵循Forwards和Backwards的规则，从而在两个方向上扩展动画属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Both = 3
}

/**
 * 动画播放模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PlayMode {
  /**
   * 动画正向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Normal = 0,

  /**
   * 动画反向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Reverse = 1,

  /**
   * 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Alternate = 2,

  /**
   * 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  AlternateReverse = 3
}

/**
 * 定义按键操作的状态类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum KeyType {
  /**
   * 按键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Down = 0,

  /**
   * 按键松开。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Up = 1,

  /**
   * 取消按键事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CANCEL = 3
}

/**
 * 定义触发按键事件的设备类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum KeySource {
  /**
   * 输入设备类型未知。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Unknown = 0,

  /**
   * 输入设备类型为键盘。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Keyboard = 4,

  /**
   * 输入设备类型为游戏手柄。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  JOYSTICK = 5
}

/**
 * Edge.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Edge {
  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Top = 0,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bottom = 2,

  /**
   * Align the head of the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 4,

  /**
   * Align the head of the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 6
}

/**
 * Set Weekend
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Week {
  /**
   * Monday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Mon = 0,

  /**
   * Tuesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Tue = 1,

  /**
   * Wednesday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Wed = 2,

  /**
   * Thursday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Thur = 3,

  /**
   * Friday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Fri = 4,

  /**
   * Saturday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Sat = 5,

  /**
   * Sunday.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Sun = 6
}

/**
 * Sets the horizontal layout of elements.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Direction {
  /**
   * Elements are laid out from left to right.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Ltr = 0,

  /**
   * Elements are laid out from right to left.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Rtl = 1,

  /**
   * Use the default layout direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 2
}

/**
 * Used to set the status of the scroll bar.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum BarState {
  /**
   * Not displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Off = 0,

  /**
   * On-demand display (displayed when you touch it and disappears after 2 seconds).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 1,

  /**
   * Resident display.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  On = 2
}

/**
 * Sliding effect
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EdgeEffect {
  /**
   * Elastic physical action, sliding to the edge can continue to slide for a distance based on the initial speed or
   * touch event, and spring back when released.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Spring = 0,

  /**
   * Fade.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Fade = 1,

  /**
   * Sliding to the edge has no effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 2
}

/**
 * Alignment enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Alignment {
  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TopStart = 0,

  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Top = 1,

  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TopEnd = 2,

  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 3,

  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Center = 4,

  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 5,

  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BottomStart = 6,

  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bottom = 7,

  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BottomEnd = 8
}

/**
 * Alignment enumeration description.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LocalizedAlignment {
  /**
   * Top Start.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_START = 'top_start',
  /**
   * The top is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP = 'top',
  /**
   * Top tail end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_END = 'top_end',
  /**
   * The starting end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START = 'start',
  /**
   * Center horizontal and vertical.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 'center',
  /**
   * The tail end is centered longitudinally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 'end',
  /**
   * Bottom starting end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM_START = 'bottom_start',
  /**
   * The bottom is centered horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM = 'bottom',
  /**
   * Bottom end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM_END = 'bottom_end'
}

/**
 * 指定该转场样式生效的场景。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TransitionType {
  /**
   * 指定当前的Transition动效在组件的所有变化场景中生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  All = 0,

  /**
   * 指定当前的Transition动效在组件的插入显示场景中生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Insert = 1,

  /**
   * 指定当前的Transition动效在组件的删除隐藏场景中生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Delete = 2
}

/**
 * RelateType enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RelateType {
  /**
   * Scales the current component to fill the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FILL = 0,

  /**
   * Scales the current component to fit the parent component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FIT = 1
}

/**
 * 定义组件的可见性及布局占位状态。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Visibility {
  /**
   * 显示。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Visible = 0,

  /**
   * 隐藏，但参与布局进行占位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Hidden = 1,

  /**
   * 隐藏，但不参与布局，不进行占位。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 2
}

/**
 * LineCapStyle enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LineCapStyle {
  /**
   * The two ends of the dividing line are parallel lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Butt = 0,

  /**
   * The two ends of the dividing line are semicircles.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Round = 1,

  /**
   * Extends half a circle at the end of the path with a width equal to half the line width and a height equal to the
   * line width.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Square = 2
}

/**
 * 定义轴的方向。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Axis {
  /**
   * 方向为纵向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Vertical = 0,

  /**
   * 方向为横向。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Horizontal = 1
}



/**
 * HorizontalAlign enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HorizontalAlign {
  /**
   * Aligns the start end in the language direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 0,

  /**
   * Center alignment. The default alignment mode is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Center = 1,

  /**
   * Aligns the ends in the language direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 2
}

/**
 * FlexAlign enumeration description.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FlexAlign {
  /**
   * The element is aligned at the head of the principal axis,
   * the first element is aligned with the head of the row, and subsequent elements are aligned with the previous one.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 0,

  /**
   * The elements are centered in the direction of the principal axis,
   * and the first element is the same distance from the beginning of the row as the last element is from the end of
   * the row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Center = 1,

  /**
   * The element is aligned at the tail of the principal axis,
   * the last element is aligned at the end of the row, and the other elements are aligned with the next.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 2,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   * with the same distance between adjacent elements.
   * The first element aligns with the beginning of the line, and the last element aligns with the end of the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SpaceBetween = 3,

  /**
   * Elastic elements are evenly distributed in the direction of the Flex principal axis,
   *  with the same distance between adjacent elements. Half the distance between adjacent elements as the distance
   * between
   * the first element and the distance between the last element and the end of the row.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SpaceAround = 4,

  /**
   * Elements in the Flex axis direction are evenly spaced.
   * The spacing between adjacent elements, the spacing between the first element and the beginning of the row,
   * and the spacing between the last element and the end of the row are the same.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SpaceEvenly = 5
}

/**
 * ItemAlign enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ItemAlign {
  /**
   * Use the default configuration in the Flex container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 0,

  /**
   * The element is in the Flex container with the cross-axis direction head aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 1,

  /**
   * The element is centered in the Flex container with the cross axis direction aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Center = 2,

  /**
   * The element is bottom aligned in the Flex container with the cross axis direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 3,

  /**
   * Element In the Flex container, the cross-axis direction text baseline is aligned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Baseline = 4,

  /**
   * Element In a Flex container, the fill is stretched across the axis and, when no dimension is set, to the container
   * size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Stretch = 5
}

/**
 * FlexDirection enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FlexDirection {
  /**
   * The main axis is consistent with the row direction as the layout mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Row = 0,

  /**
   * The main axis is consistent with the column direction as the layout mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Column = 1,

  /**
   * The layout is in the opposite direction to the Row direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RowReverse = 2,

  /**
   * Layout in the opposite direction to the column.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ColumnReverse = 3
}

/**
 * Pixel Round Direction
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PixelRoundCalcPolicy {
  /**
   * No Force round the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NO_FORCE_ROUND = 0,
  /**
   * Force ceil the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FORCE_CEIL = 1,
  /**
   * Force floor the component boundary coordinates to integer pixel.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FORCE_FLOOR = 2
}

/**
 * Pixel Round Mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PixelRoundMode {
  /**
   * Do pixel round on layout finish.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PIXEL_ROUND_ON_LAYOUT_FINISH = 0,
  /**
   * Do pixel round after measure.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PIXEL_ROUND_AFTER_MEASURE = 1
}

/**
 * FlexWrap enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FlexWrap {
  /**
   * The Flex container has a single row/column layout of elements, and children are allowed to go beyond the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NoWrap = 0,

  /**
   * The elements of the Flex container are arranged in multiple rows or columns, and the sub-items are allowed to
   * exceed the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Wrap = 1,

  /**
   * The elements of the Flex container are arranged in reverse multiple rows/columns, and children are allowed to
   * exceed the container.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WrapReverse = 2
}

/**
 * VerticalAlign enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum VerticalAlign {
  /**
   * Top alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Top = 0,

  /**
   * Center alignment. The default alignment mode is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Center = 1,

  /**
   * Bottom alignment.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bottom = 2
}

/**
 * ImageRepeat enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageRepeat {
  /**
   * Do not draw the picture again.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NoRepeat = 0,

  /**
   * Repeat the drawing only on the horizontal axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  X = 1,

  /**
   * Repeat the drawing only on the vertical axis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Y = 2,

  /**
   * Draw the picture repeatedly on both axes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  XY = 3
}

/**
 * ImageSize enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageSize {
  /**
   * Keep the scale of the original image unchanged.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 2,

  /**
   * Keep the aspect ratio to zoom in or out the image so that both sides of the image are greater than or equal to the
   * display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Cover = 1,

  /**
   * Keep the aspect ratio to zoom out or zoom in so that the image is completely displayed within the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Contain = 0,

  /**
   * Zoom in or out without maintaining the aspect ratio so that the image fills the display boundary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FILL = 3
}

/**
 * 线性渐变的方向。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum GradientDirection {
  /**
   * 从右向左。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Left = 0,

  /**
   * 从下向上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Top = 1,

  /**
   * 从左向右。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Right = 2,

  /**
   * 从上向下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bottom = 3,

  /**
   * 从左上向右下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LeftTop = 4,

  /**
   * 从左下向右上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LeftBottom = 5,

  /**
   * 从右上向左下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RightTop = 6,

  /**
   * 从右下向左上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RightBottom = 7,

  /**
   * 无。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 8
}

/**
 * 动画类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SharedTransitionEffectType {
  /**
   * 目标页面元素的位置保持不变，支持配置透明度动画。
   * 
   * 目前，仅在重定向到目标页面时配置的静态效果才会生效。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Static = 0,

  /**
   * 将源页面元素移动到目标页面元素的位置并适当缩放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Exchange = 1
}

/**
 * Text style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FontStyle {
  /**
   * Default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Normal = 0,

  /**
   * Italic style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Italic = 1
}

/**
 * The font weight of the text
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FontWeight {
  /**
   * Defines a lighter value than [Inherited Value]..
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Lighter = 0,

  /**
   * Normal font. Equivalent to a digital value of 400.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Normal = 1,

  /**
   * Defines a more general value than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Regular = 2,

  /**
   * Defines a value that is more centered than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Medium = 3,

  /**
   * Bold. Equivalent to a numeric value of 700.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bold = 4,

  /**
   * Defines a value that is heavier than [Inherited Value].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bolder = 5
}

/**
 * Alignment of text.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextAlign {
  /**
   * Center the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Center = 1,

  /**
   * The text is aligned in the same direction as the writing
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Start = 0,

  /**
   * The text is aligned in the opposite direction of writing
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  End = 2,

  /**
   * Justify the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  JUSTIFY = 3,

  /**
   * The text is aligned in the left direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LEFT = 4,

  /**
   * The text is aligned in the right direction.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RIGHT = 5
}

/**
 * Declare how text overflows.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextOverflow {
  /**
   * When the text overflows its dimensions, the text will not be cropped.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
   * When the text overflows its dimensions, the text will be cropped and displayed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Clip = 1,

  /**
   * If the text overflows its dimensions, the text that cannot be displayed shall be replaced by ellipsis.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Ellipsis = 2,

  /**
   * When the text overflows its dimensions, the text will scroll for displaying.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MARQUEE = 3
}

/**
 * Type of text modifier.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDecorationType {
  /**
   * Do not use text decorative lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
   * Underline the words.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Underline = 1,

  /**
   * Text is in all uppercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Overline = 2,

  /**
   * A modifier line that passes through the text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LineThrough = 3
}

/**
 * Letter type in text
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextCase {
  /**
   * The default is normal.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Normal = 0,

  /**
   * The text is all lowercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LowerCase = 1,

  /**
   * The text is all uppercase.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UpperCase = 2
}

/**
 * Enum of text height adaptation
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextHeightAdaptivePolicy {
  /**
   * Priority is given to using the maxLines attribute to adapt the text height.
   * If the layout size using the maxLines attribute exceeds the layout constraint, try reducing the font size to
   * display more text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MAX_LINES_FIRST = 0,

  /**
   * Priority is given to using the minFontSize attribute to adapt the text height.
   * If the text can be layout in a single line using the minFontSize property, try increasing the font size and using
   * the maximum possible font size.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MIN_FONT_SIZE_FIRST = 1,

  /**
   * Priority is given to using the layout constraint to adapt the text height.
   * If the layout size exceeds the layout constraint, try reducing the font size. If the layout size still exceeds
   * the layout constraint after reducing the font size to minFontSize, remove the lines that exceed the layout
   * constraint.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LAYOUT_CONSTRAINT_FIRST = 2
}

/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ResponseType {
  /**
   * Right click.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RightClick = 0,

  /**
   * Long press.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LongPress = 1
}

/**
 * 定义组件悬浮效果的类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HoverEffect {
  /**
   * 不设置效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
   * 放大缩小的效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Scale = 2,

  /**
   * 背景淡入淡出的强调效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Highlight = 3,

  /**
   * 使用组件的系统默认悬浮效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Auto = 4
}

/**
 * Placement enumeration description
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum Placement {
  /**
   * Left placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Left = 0,

  /**
   * Right placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Right = 1,

  /**
   * Top placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Top = 2,

  /**
   * Bottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Bottom = 3,

  /**
   * TopLeft placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TopLeft = 4,

  /**
   * TopRight placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TopRight = 5,

  /**
   * BottomLeft placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BottomLeft = 6,

  /**
   * BottomRight placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BottomRight = 7,

  /**
   * LeftTop placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LeftTop = 8,

  /**
   * LeftBottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LeftBottom = 9,

  /**
   * RightTop placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RightTop = 10,

  /**
   * RightBottom placement
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RightBottom = 11
}

/**
 * ArrowPointPosition enumeration description
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ArrowPointPosition {
  /**
   * Target start position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START = 'Start',

  /**
   * Target center position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 'Center',

  /**
   * Target end position
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 'End'
}

/**
 * Indicates the share option.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum CopyOptions {
  /**
   * Not allow share.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 0,

  /**
   * Share in app.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  InApp = 1,

  /**
   * Share in local device.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LocalDevice = 2,
}

/**
 * 触摸热区适用的输入工具类型。
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ResponseRegionSupportedTool {
  /**
   * 所有输入工具类型。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALL = 0,

  /**
   * 手指。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FINGER = 1,

  /**
   * 手写笔。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PEN = 2,

  /**
   * 鼠标。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MOUSE = 3
}

/**
 * 定义触摸测试的响应逻辑及节点阻塞规则。
 *
 * > **说明：**
 * >
 * > 当Stack组件中有多个节点触摸区域重叠时，如果最上层节点的子组件命中，则默认只会对显示在最上层的节点做触摸测试。此时只有给显示在最上层的节点设置
 * > [hitTestBehavior]{@link CommonMethod#hitTestBehavior}为HitTestMode.Transparent时，才能使显示在下层的节点触发触摸测试。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HitTestMode {
  /**
   * 默认触摸测试效果。自身及子节点响应触摸测试，但阻塞兄弟节点的触摸测试，不影响祖先节点的触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Default = 0,

  /**
   * 自身响应触摸测试，阻塞子节点、兄弟节点和祖先节点的触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Block = 1,

  /**
   * 自身和子节点均响应触摸测试，不会阻塞兄弟节点和祖先节点的触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  Transparent = 2,

  /**
   * 自身不响应触摸测试，不会阻塞子节点、兄弟节点和祖先节点的触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  None = 3,
  /**
   * 自身和子节点响应触摸测试，阻止所有优先级较低的兄弟节点和父节点参与触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BLOCK_HIERARCHY = 4,
  /**
   * 自身不响应触摸测试，并且所有的后代（孩子，孙子等）也不响应触摸测试，不会影响祖先节点的触摸测试。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BLOCK_DESCENDANTS = 5
}

/**
 * Title height.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TitleHeight {
  /**
   * Title height when only main title is available.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MainOnly = 0,

  /**
   * Title height when main title and subtitle are both available.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MainWithSub = 1
}

/**
 * 输入法修饰键类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ModifierKey {
  /**
   * 表示键盘上Ctrl键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CTRL = 0,

  /**
   * 表示键盘上Shift键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SHIFT = 1,

  /**
   * 表示键盘上Alt键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ALT = 2
}

/**
 * 输入法功能键类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FunctionKey {
  /**
   * 表示键盘上ESC功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ESC = 0,

  /**
   * 表示键盘上F1功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F1 = 1,

  /**
   * 表示键盘上F2功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F2 = 2,

  /**
   * 表示键盘上F3功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F3 = 3,

  /**
   * 表示键盘上F4功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F4 = 4,

  /**
   * 表示键盘上F5功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F5 = 5,

  /**
   * 表示键盘上F6功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F6 = 6,

  /**
   * 表示键盘上F7功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F7 = 7,

  /**
   * 表示键盘上F8功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F8 = 8,

  /**
   * 表示键盘上F9功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F9 = 9,

  /**
   * 表示键盘上F10功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F10 = 10,

  /**
   * 表示键盘上F11功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F11 = 11,

  /**
   * 表示键盘上F12功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  F12 = 12,

  /**
   * 表示键盘上TAB功能键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TAB = 13,

  /**
   * 表示键盘上UP方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DPAD_UP = 14,

  /**
   * 表示键盘上DOWN方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DPAD_DOWN = 15,

  /**
   * 表示键盘上LEFT方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DPAD_LEFT = 16,

  /**
   * 表示键盘上RIGHT方向键。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DPAD_RIGHT = 17
}

/**
 * The alignment of ImageSpan
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ImageSpanAlignment {
  /**
   * Indicating that the bottom of the ImageSpan should be aligned with the baseline of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BASELINE = 4,

  /**
   * Indicating that the bottom of the ImageSpan should be aligned with the bottom of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM = 3,

  /**
   * Indicating that the center of the ImageSpan should be aligned with the center of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 2,

  /**
   * Indicating that the top of the ImageSpan should be aligned with the top of the surrounding text.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP = 1,

  /**
   * Indicating that the ImageSpan should be aligned by the paragraph's textVerticalAlign.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FOLLOW_PARAGRAPH = 5
}

/**
 * ObscuredReasons.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ObscuredReasons {
  /**
   * Displayed data should appear as generic placeholders.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PLACEHOLDER = 0
}

/**
 * Text content style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextContentStyle {
  /**
   * Text content default style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * Text content inline style.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  INLINE = 1
}

/**
 * 定义点击效果的级别及对应动效参数。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ClickEffectLevel {
  /**
   * 小面积（轻盈）
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LIGHT = 0,

  /**
   * 中面积（稳定）
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MIDDLE = 1,

  /**
   * 大面积（厚重）
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HEAVY = 2
}

/**
 * The type of XComponent
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum XComponentType {
  /**
   * Surface type. The default type is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SURFACE = 0,

  /**
   * Texture type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TEXTURE = 2,
}

/**
 * Nested scroll nested mode

 * @enum { number } NestedScrollMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum NestedScrollMode {
  /**
   * Only Self response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELF_ONLY = 0,

  /**
   * Self priority response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELF_FIRST = 1,

  /**
   * Parent scrollable component priority response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PARENT_FIRST = 2,

  /**
   * Both self and parent scrollable component response scrolling.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PARALLEL = 3
}

/**
 * The possible source of scroll event
 * @enum { number } ScrollSource
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ScrollSource {
  /**
   * Drag events.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DRAG = 0,

  /**
   * Fling after the drag has ended with velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FLING = 1,

  /**
   * Over scroll with EdgeEffect.Spring.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EDGE_EFFECT = 2,

  /**
   * Other user input except drag, such as mouse wheel, key event.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OTHER_USER_INPUT = 3,

  /**
   * Drag events of scroll bar.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCROLL_BAR = 4,

  /**
   * Fling after the drag on scroll bar has ended with velocity.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCROLL_BAR_FLING = 5,

  /**
   * Member methods of Scroller without animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCROLLER = 6,

  /**
   * Member methods of Scroller with animation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCROLLER_ANIMATION = 7
}

/**
 * 表示宽高动画过程中组件内容的填充方式。
 *
 * @enum { number } RenderFit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum RenderFit {
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持中心对齐。               !
   * [renderfit_center](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_center.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 0,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持顶部中心对齐。             !
   * [renderfit_top](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP = 1,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持底部中心对齐。             !
   * [renderfit_bottom](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM = 2,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持左侧对齐。               !
   * [renderfit_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LEFT = 3,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持右侧对齐。              !
   * [renderfit_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RIGHT = 4,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持左上角对齐。              !
   * [renderfit_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_LEFT = 5,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持右上角对齐。             !
   * [renderfit_top_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_top_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP_RIGHT = 6,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持左下角对齐。              !
   * [renderfit_bottom_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM_LEFT = 7,
  /**
   * 保持动画终态的内容大小，并且内容始终与组件保持右下角对齐。              !
   * [renderfit_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BOTTOM_RIGHT = 8,
  /**
   * 不考虑动画终态内容的宽高比，并且内容始终缩放到组件的大小。              !
   * [renderfit_resize_fill](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_fill.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_FILL = 9,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容完整显示在组件内，且与组件保持中心对齐。   !
   * [renderfit_resize_contain](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_CONTAIN = 10,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容完整显示在组件内。当组件宽方向有剩余时，内容与组件保持左侧对齐，当组件高方向有剩余时，内容与组件保持顶部对齐。   !
   * [renderfit_resize_contain_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_CONTAIN_TOP_LEFT = 11,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容完整显示在组件内。当组件宽方向有剩余时，内容与组件保持右侧对齐，当组件高方向有剩余时，内容与组件保持底部对齐。   !
   * [renderfit_resize_contain_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_contain_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_CONTAIN_BOTTOM_RIGHT = 12,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容两边都大于或等于组件两边，且与组件保持中心对齐，显示内容的中间部分。   !
   * [renderfit_resize_cover](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_COVER = 13,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容的两边都恰好大于或等于组件两边。当内容宽方向有剩余时，内容与组件保持左侧对齐，显示内容的左侧部分。当内容高方向有剩余时，内容与组件保持顶部对齐，显示内容的顶侧部分。   !
   * [renderfit_resize_cover_top_left](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover_top_left.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_COVER_TOP_LEFT = 14,
  /**
   * 保持动画终态内容的宽高比进行缩小或放大，使内容的两边都恰好大于或等于组件两边。当内容宽方向有剩余时，内容与组件保持右侧对齐，显示内容的右侧部分。当内容高方向有剩余时，内容与组件保持底部对齐，显示内容的底侧部分。   !
   * [renderfit_resize_cover_bottom_right](docroot://reference/apis-arkui/arkui-ts/figures/renderfit_resize_cover_bottom_right.png)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RESIZE_COVER_BOTTOM_RIGHT = 15
}

/**
 * The Button Style of dialog,
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DialogButtonStyle {
  /**
   * Default Style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * Highlight Style.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HIGHLIGHT = 1
}

/**
 * Enum of word break
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum WordBreak {
  /**
   * By default, CJK text can be wrapped between any 2 characters, and non-CJK text can only be wrapped in spaces.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NORMAL = 0,

  /**
   * Non-CJK text be wrapped at any character
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BREAK_ALL = 1,

  /**
   * Non-CJK text can be wrapped at any character
   * and if a complete word can be preserved in space breaks, the word must be kept on the line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BREAK_WORD = 2,

  /**
   * For supported languages, line breaks can be performed by syllables.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HYPHENATION = 3
}

/**
 * Enum of line break strategy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum LineBreakStrategy {
  /**
   * By default. Display as many characters as possible on each line until no more characters
   * can be displayed on that line, and do not automatically add hyphens under this strategy
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  GREEDY = 0,

  /**
   * High quality folding. Optimize the layout of the entire text's line breaks and automatically
   * add hyphens if necessary.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HIGH_QUALITY = 1,

  /**
   * Balanced folding. We will try our best to ensure that the width of each line in a paragraph
   * is the same, and if necessary, we will add conjunction
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BALANCED = 2
}

/**
 * 被照亮的类型枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
export declare enum IlluminatedType {
  /**
   * 组件不会被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,
  /**
   * 组件边缘可以被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  BORDER = 1,
  /**
   * 组件内容可以被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  CONTENT = 2,
  /**
   * 组件边缘和内容可以被照亮。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  BORDER_CONTENT = 3,
  /**
   * 组件边缘可以被照亮，边缘带有发光效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  BLOOM_BORDER = 4,
  /**
   * 组件边缘和内容可以被照亮，边缘带有发光效果。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  BLOOM_BORDER_CONTENT = 5,
}

/**
 * Enum of ellipsisMode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EllipsisMode {
  /**
   * The ellipsis is in the head.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  START = 0,

  /**
   * The ellipsis is in the middle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CENTER = 1,

  /**
   * The ellipsis is at the end.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 2,

  /**
   * The ellipsis is in the head. It is valid for multiline and single line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  MULTILINE_START = 3,

  /**
   * The ellipsis is in the middle. It is valid for multiline and single line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  MULTILINE_CENTER = 4,
}

/**
 * A type which can be undefined
 *
 * @typedef { T | undefined } Nullable<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type Nullable<T> = T | undefined;

/**
 * Decide whether the width of select menu fit the trigger or content
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum OptionWidthMode {
  /**
   * The menu width fit the content.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FIT_CONTENT = 'fit_content',

  /**
   * The menu width fit the trigger.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FIT_TRIGGER = 'fit_trigger'
}

/**
 * Enumerates the fold status.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FoldStatus {
  /**
   * Fold Status Unknown.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FOLD_STATUS_UNKNOWN = 0,
  /**
   * Fold Status Expanded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FOLD_STATUS_EXPANDED = 1,
  /**
   * Fold Status Folded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FOLD_STATUS_FOLDED = 2,
  /**
   * Fold Status Half Folded.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FOLD_STATUS_HALF_FOLDED = 3
}

/**
 * Enumerates the app rotation.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AppRotation {

  /**
   * App does not rotate to display vertically.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ROTATION_0 = 0,

  /**
   * App rotates 90 degrees clockwise to display horizontally.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ROTATION_90 = 1,

  /**
   * App rotates 180 degrees clockwise to display vertically in reverse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ROTATION_180 = 2,

  /**
   * App rotates 270 degrees clockwise to display horizontally in reverse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ROTATION_270 = 3
}

/**
 * Enum of EmbeddedType
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum EmbeddedType {
  /**
   * The EmbeddedComponent show the UI in EmbeddedUIExtensionAbility.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMBEDDED_UI_EXTENSION = 0
}

/**
 * Marquee scrolling strategy after text update
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MarqueeUpdateStrategy {
  /**
   * Reset scroll position and restart scroll.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DEFAULT = 0,

  /**
   * Preserve scroll position, just change to new text
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PRESERVE_POSITION = 1
}

/**
 * Type of text decoration line style.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextDecorationStyle {
  /**
   * Solid line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SOLID = 0,

  /**
   * Double lines.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOUBLE = 1,

  /**
   * Dotted line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DOTTED = 2,

  /**
   * Dashed line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DASHED = 3,

  /**
   * Wavy line.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WAVY = 4
}

/**
 * Type of text selectable.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TextSelectableMode {
  /**
   * set text selectable and unfocusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELECTABLE_UNFOCUSABLE = 0,

  /**
   * set text selectable and focusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELECTABLE_FOCUSABLE = 1,

  /**
   * set text unselectable and unfocusable.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UNSELECTABLE = 2
}

/**
 * Type of accessibility hover event.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AccessibilityHoverType {
  /**
   * Hover enter type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_ENTER = 0,

  /**
   * Hover move type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_MOVE = 1,

  /**
   * Hover exit type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_EXIT = 2,

  /**
   * Hover cancel type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HOVER_CANCEL = 3
}

/**
 * Type of window width breakpoint.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum WidthBreakpoint {
  /**
   * Window width < 320vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WIDTH_XS = 0,

  /**
   * Window width >= 320vp and < 600vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WIDTH_SM = 1,

  /**
   * Window width >= 600vp and < 840vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WIDTH_MD = 2,

  /**
   * Window width >= 840vp and < 1440vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WIDTH_LG = 3,

  /**
   * Window width >= 1440vp type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  WIDTH_XL = 4
}

/**
 * Type of window height breakpoint.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum HeightBreakpoint {
  /**
   * Window aspectRatio < 0.8 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HEIGHT_SM = 0,

  /**
   * Window aspectRatio >= 0.8 and < 1.2 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HEIGHT_MD = 1,

  /**
   * Window aspectRatio >= 1.2 type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HEIGHT_LG = 2
}

/**
 * 定义焦点轴事件的轴类型。
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AxisModel {
  /**
   * 游戏手柄X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_X = 0,

  /**
   * 游戏手柄Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_Y = 1,

  /**
   * 游戏手柄Z轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_Z = 2,

  /**
   * 游戏手柄RZ轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_RZ = 3,

  /**
   * 游戏手柄GAS轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_GAS = 4,

  /**
   * 游戏手柄BRAKE轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_BRAKE = 5,

  /**
   * 游戏手柄HAT0X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT0X = 6,

  /**
   * 游戏手柄HAT0Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT0Y = 7,

  /**
   * 游戏手柄RX轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_RX = 8,

  /**
   * 游戏手柄RY轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_RY = 9,

  /**
   * 游戏手柄THROTTLE轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_THROTTLE = 10,

  /**
   * 游戏手柄RUDDER轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_RUDDER = 11,

  /**
   * 游戏手柄WHEEL轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_WHEEL = 12,

  /**
   * 游戏手柄HAT1X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT1X = 13,

  /**
   * 游戏手柄HAT1Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT1Y = 14,

  /**
   * 游戏手柄HAT2X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT2X = 15,

  /**
   * 游戏手柄HAT2Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT2Y = 16,

  /**
   * 游戏手柄HAT3X轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT3X = 17,

  /**
   * 游戏手柄HAT3Y轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ABS_HAT3Y = 18
}

/**
 * Page flip mode of Swiper and Tabs on mouse wheel event.

 * @enum { number } PageFlipMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PageFlipMode {
  /**
   * Turn pages continuously according to the number of mouse wheel events.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CONTINUOUS = 0,

  /**
   * The page-turning animation remains unresponsive to other mouse wheel events until it completes.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SINGLE = 1
}

/**
 * 旋转表冠动作。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum CrownAction {
  /**
   * 表冠转动中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UPDATE = 1,

  /**
   * 表冠停止转动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 2
}

/**
 * 旋转表冠灵敏度。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum CrownSensitivity {
  /**
   * 低灵敏度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  LOW = 0,

  /**
   * 中灵敏度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MEDIUM = 1,

  /**
   * 高灵敏度。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HIGH = 2
}

/**
 * 定义轴事件的轴动作类型。
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AxisAction {
  /**
   * 无轴事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  NONE = 0,

  /**
   * 轴事件开始。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  BEGIN = 1,

  /**
   * 轴事件触发中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  UPDATE = 2,

  /**
   * 轴事件结束。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  END = 3,

  /**
   * 轴事件取消。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CANCEL = 4
}

/**
 * Type of focus draw level.
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum FocusDrawLevel {
  /**
   * Draw focus on node self level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SELF = 0,

  /**
   * Draw focus on top level.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TOP = 1
}

/**
 * Menu divider mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DividerMode {
  /**
   * Menu divider mode floating above menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  FLOATING_ABOVE_MENU = 0,

  /**
   * Menu divider mode embedded in menu.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EMBEDDED_IN_MENU = 1
}

/**
 * 要查询的交互事件类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EventQueryType {
  /**
   * 点击事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ON_CLICK = 0
}

/**
 * Tips show position type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum TipsAnchorType {
  /**
   * Tips display position based on bound component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TARGET = 0,

  /**
   * Tips display position based on cursor position.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CURSOR = 1
}

/**
 * Dialog display mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DialogDisplayMode {
  /**
   * The dialog displayed based on screen.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SCREEN_BASED = 0,
  /**
   * The dialog displayed based on application window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WINDOW_BASED = 1
}

/**
 * 交叉轴方向键走焦模式枚举。
 *
 * @enum { number } FocusWrapMode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum FocusWrapMode {
  /**
   * 交叉轴方向键不允许换行。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DEFAULT = 0,

  /**
   * 交叉轴方向键允许换行。
   *
   * 不规则单元格场景下，交叉轴方向键走焦时优先走到同一行的可获焦item。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  WRAP_WITH_ARROW = 1
}

/**
 * 用于动画的属性类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AnimationPropertyType {
  /**
   * x、y、z方向的旋转角属性。该属性对应参数个数为3，属性的单位为度（°）。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ROTATION = 0,

  /**
   * x、y方向的平移属性。该属性对应参数个数为2，属性的单位为px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  TRANSLATION = 1,

  /**
   * x、y方向的缩放属性。该属性对应参数个数为2，属性的取值范围为(-∞, +∞) 。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SCALE = 2,

  /**
   * 透明度属性。该属性对应参数个数为1，属性的取值范围为[0,1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  OPACITY = 3
}

/**
 * 定义了颜色空间的类型，用于指定颜色显示的模式。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ColorSpace {
  /**
   * SRGB颜色空间，适用于大多数显示设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  SRGB = 0,

  /**
   * Display-P3颜色空间，具有更广的色域，适用于高端显示设备。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
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
   * @since 26.0.0 static
   */
  BT2020 = 2,
}

/**
 * 定义轴事件的轴类型。
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum AxisType {
  /**
   * 垂直滚动轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  VERTICAL_AXIS = 0,

  /**
   * 水平滚动轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  HORIZONTAL_AXIS = 1,

  /**
   * 捏合轴。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  PINCH_AXIS = 2
}

/**
 * 定义分发的事件是否为竞争手势，竞争场景手势原始节点和目标节点只有一个节点会响应手势，非竞争场景可以同时响应。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export enum CompetitionStrategy {
  /**
   * 表示分发的事件为非竞争手势。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  DEFAULT = 0,

  /**
   * 表示分发的事件为竞争手势。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  COMPETITION = 1,
}

/**
 * Defines the state types that can be monitored by AttributeModifiers.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export enum AttributeModifierState {

  /**
   * Normal state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  NORMAL = 0,

  /**
   * Pressed state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  PRESSED = 1,

  /**
   * Focused state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  FOCUSED = 1 << 1,

  /**
   * Disabled state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  DISABLED = 1 << 2,

  /**
   * Selected state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  SELECTED = 1 << 3,

  /**
   * Hovered state.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  HOVERED = 1 << 4
}

/**
 * Specify the number of columns for different responsive breakpoints.
 *
 * @enum { int }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PresetFillType {
    /**
     * For Lists and Swipers: One column is displayed on SM (and smaller), two on MD, and three on LG (and larger)
     * devices. For Grid and WaterFlow: two column is displayed on SM (and smaller), three on MD, and five on LG
     * (and larger) devices.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BREAKPOINT_DEFAULT = 0,
    /**
     * For SM (and smaller), MD, and LG (and larger) devices, one, two, and three columns are displayed respectively.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BREAKPOINT_SM1MD2LG3 = 1,
    /**
     * For SM (and smaller), MD, and LG (and larger) devices, two, three, and five columns are displayed respectively.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 23 static
     */
    BREAKPOINT_SM2MD3LG5 = 2
}

/**
 * Defining Environment variable enumeration value.
 *
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export enum SystemProperties {
  /**
   * System environment breakpoint key that is used to obtain the width and height breakpoint value of the window.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  BREAK_POINT = 'system.arkui.breakpoint',
  /**
   * System environment avoidarea key that is used to obtain the avoid area of the window, measured in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_AVOID_AREA = 'system.window.avoidarea',
  /**
   * System environment avoidarea key that is used to obtain the avoid area of the window, measured in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_AVOID_AREA_PX = 'system.window.avoidarea.px',
  /**
   * System environment windowsize key that is used to obtain the size of the window, measured in vp.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_SIZE = 'system.window.size',
  /**
   * System environment windowsize key that is used to obtain the size of the window, measured in px.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  WINDOW_SIZE_PX = 'system.window.size.px',
}

/**
 * 定义手势和事件收集的干预操作类型。
 *
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum GestureCollectIntervention {
  /**
   * 继续正常的手势和事件收集流程。不进行任何干预。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CONTINUE = 0,
 
  /**
   * 丢弃所有待收集的低优先级手势和事件。丢弃的部分包括左侧兄弟节点以及祖先节点（父节点及以上）的手势。仅保留当前节点和更高优先级节点中已收集的手势。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISCARD_LOWER = 1,
 
  /**
   * 丢弃已经收集到的高优先级手势和事件。会丢弃已收集的右侧兄弟节点和当前节点上的手势。将继续处理低优先级手势的收集流程（左侧兄弟节点和祖先节点）。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISCARD_HIGHER = 2,
 
  /**
   * 丢弃当前节点自身的手势和事件。当前节点的手势和事件将从手势树中排除。兄弟节点（左侧和右侧）以及祖先节点的手势仍会继续收集。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISCARD_SELF = 3,
 
  /**
   * 丢弃左侧兄弟节点中待收集的手势和事件。当前节点以及已收集的右侧兄弟节点的手势和事件将被保留。将继续处理父节点以及祖先节点的收集流程。
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISCARD_LOWER_PRIORITY_SIBLINGS = 4
}

/**
 * 输入事件子类型掩码枚举，用于标识不同类型的输入事件子类型。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum InputEventSubTypeMask {
  /**
   * 鼠标左键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LEFT_MOUSE_DOWN = 1 << 0,

  /**
   * 鼠标左键抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LEFT_MOUSE_UP = 1 << 1,

  /**
   * 鼠标右键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  RIGHT_MOUSE_DOWN = 1 << 2,

  /**
   * 鼠标右键抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  RIGHT_MOUSE_UP = 1 << 3,

  /**
   * 鼠标中键按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MIDDLE_MOUSE_DOWN = 1 << 4,

  /**
   * 鼠标中键抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MIDDLE_MOUSE_UP = 1 << 5,

  /**
   * 鼠标左键按下并移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LEFT_MOUSE_DRAGGING = 1 << 6,

  /**
   * 鼠标右键按下并移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  RIGHT_MOUSE_DRAGGING = 1 << 7,

  /**
   * 鼠标中键按下并移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MIDDLE_MOUSE_DRAGGING = 1 << 8,

  /**
   * 触控按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOUCH_DOWN = 1 << 9,

  /**
   * 触控抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOUCH_UP = 1 << 10,

  /**
   * 物理键盘按下。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  KEY_DOWN = 1 << 11,

  /**
   * 物理键盘抬起。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  KEY_UP = 1 << 12
}

/**
 * 输入事件拦截动作枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum InputEventInterceptAction {
  /**
   * 允许事件继续传递到UI框架。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CONTINUE = 0,

  /**
   * 阻止事件传递到UI框架。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BLOCK = 1
}

/**
 * 原始输入事件类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum RawInputEventType {
  /**
   * 触摸事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOUCH = 0,

  /**
   * 鼠标事件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MOUSE = 1
}

/**
 * 组件的智慧手势响应优先级枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum GestureShortcut {
    /**
     * 智慧手势响应优先级。当前智慧手势响应配置仅支持该取值。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    PRIMARY = 0
}

/**
 * 智慧手势操作类型枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SmartGestureAction {
    /**
     * 无动作。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    NONE = 0,
    /**
     * 向前翻页。包括向下和向右。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    PAGE_FORWARD = 1,
    /**
     * 向前滚动。包括向下和向右。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    SCROLL_FORWARD = 2,
    /**
     * 选中组件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    SELECT = 3,
    /**
     * 点击组件。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    CLICK = 4,
    /**
     * 返回。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    BACK_PRESS = 5
}

/**
 * 智慧手势原始操作意图枚举。
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum OperateIntention {
    /**
     * 敲一敲。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    TAP = 0,
    /**
     * 划一划。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    SLIDE_FORWARD = 1,
    /**
     * 翻腕。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @stagemodelonly
     * @since 26.0.0 static
     */
    BACK_PRESS = 2
}

/**
 * 边缘流光位置。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum EdgeLightPosition {
  /**
   * 边缘流光在左上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOP_LEFT = 0,
  /**
   * 边缘流光在右上角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOP_RIGHT = 1,
  /**
   * 边缘流光在左下角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BOTTOM_LEFT = 2,
  /**
   * 边缘流光在右下角。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BOTTOM_RIGHT = 3,
  /**
   * 边缘流光在顶部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOP = 4,
  /**
   * 边缘流光在底部。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BOTTOM = 5,
  /**
   * 边缘流光在左边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LEFT = 6,
  /**
   * 边缘流光在右边。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 static
   */
  RIGHT = 7
}
