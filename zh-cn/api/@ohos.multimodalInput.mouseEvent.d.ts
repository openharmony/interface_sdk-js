/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The **mouseEvent** module provides mouse events reported by a device. It is inherited from 
 * [InputEvent]{@link @ohos.multimodalInput.inputEvent:InputEvent}.
 *
 * @file Mouse Event
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';

import type { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
 * 鼠标事件类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Action {

  /**
   * 取消。鼠标down事件异常打断，未正常闭环，例如：按下鼠标按键后未抬起，窗口退后台或被异常销毁时触发cancel事件。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * 鼠标移动。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MOVE = 1,

  /**
   * 鼠标按键按下。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BUTTON_DOWN = 2,

  /**
   * 鼠标按键抬起。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BUTTON_UP = 3,

  /**
   * 鼠标轴事件开始。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AXIS_BEGIN = 4,

  /**
   * 鼠标轴事件更新。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AXIS_UPDATE = 5,

  /**
   * 鼠标轴事件结束。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  AXIS_END = 6,

  /**
   * 触控板按下。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  ACTION_DOWN = 7,

  /**
   * 触控板抬起。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  ACTION_UP = 8
}

/**
 * 鼠标按键。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Button {

  /**
   * 鼠标左键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  LEFT = 0,

  /**
   * 鼠标中键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  MIDDLE = 1,

  /**
   * 鼠标右键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  RIGHT = 2,

  /**
   * 鼠标侧边键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  SIDE = 3,

  /**
   * 鼠标扩展键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  EXTRA = 4,

  /**
   * 鼠标前进键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  FORWARD = 5,

  /**
   * 鼠标后退键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  BACK = 6,

  /**
   * 鼠标任务键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  TASK = 7
}

/**
 * 鼠标轴类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Axis {

  /**
   * 鼠标垂直滚动轴。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  SCROLL_VERTICAL = 0,

  /**
   * 鼠标水平滚动轴。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  SCROLL_HORIZONTAL = 1,

  /**
   * 鼠标捏合轴。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  PINCH = 2
}

/**
 * 鼠标轴类型和轴的值。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface AxisValue {

  /**
   * 鼠标轴类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  axis: Axis;

  /**
   * 鼠标轴的值。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  value: int;
}

/**
 * 工具类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 11 dynamic
 * @since 23 static
 */
export declare enum ToolType {

  /**
   * 未知类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  UNKNOWN = 0,

  /**
   * 鼠标。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  MOUSE = 1,

  /**
   * 操纵杆。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  JOYSTICK = 2,

  /**
   * 触控板。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  TOUCHPAD = 3
}

/**
 * 鼠标事件。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface MouseEvent extends InputEvent {

  /**
   * 鼠标事件类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  action: Action;

  /**
   * 该鼠标事件以指定屏幕左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenX: int;

  /**
   * 该鼠标事件以指定屏幕左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  screenY: int;

  /**
   * 鼠标所在窗口左上角为原点的相对坐标系的X坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowX: int;

  /**
   * 鼠标所在窗口左上角为原点的相对坐标系的Y坐标。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  windowY: int;

  /**
   * 鼠标当前事件相对于上次事件的X坐标偏移值。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawDeltaX: int;

  /**
   * 鼠标当前事件相对于上次事件的Y坐标偏移值。当前仅支持整数，单位为像素（px）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  rawDeltaY: int;

  /**
   * 鼠标按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  button: Button;

  /**
   * 当前处于按下状态的鼠标按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressedButtons: Button[];

  /**
   * 鼠标轴类型和轴的值。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  axes: AxisValue[];

  /**
   * 当前处于按下状态的键值列表。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  pressedKeys: KeyCode[];

  /**
   * 当前ctrlKey是否处于按下状态。 
   * 
   * true表示处于按下状态，false表示处于抬起状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  ctrlKey: boolean;

  /**
   * 当前altKey是否处于按下状态。 
   * 
   * true表示处于按下状态，false表示处于抬起状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  altKey: boolean;

  /**
   * 当前shiftKey是否处于按下状态。 
   * 
   * true表示处于按下状态，false表示处于抬起状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  shiftKey: boolean;

  /**
   * 当前logoKey是否处于按下状态。 
   * 
   * true表示处于按下状态，false表示处于抬起状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  logoKey: boolean;

  /**
   * 当前fnKey是否处于按下状态。 
   * 
   * true表示处于按下状态，false表示处于抬起状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  fnKey: boolean;

  /**
   * 当前capsLock是否处于使能状态。 
   * 
   * true表示使能状态，false表示处于未使能状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  capsLock: boolean;

  /**
   * 当前numLock是否处于使能状态。 
   * 
   * true表示使能状态，false表示处于未使能状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  numLock: boolean;

  /**
   * 当前scrollLock是否处于使能状态。 
   * 
   * true表示使能状态，false表示处于未使能状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 9 dynamic
   * @since 23 static
   */
  scrollLock: boolean;

  /**
   * 工具类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 11 dynamic
   * @since 23 static
   */
  toolType: ToolType;

  /**
   * 该鼠标事件以主屏左上角为原点的全局坐标系的X坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的
   * [MouseEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.MouseEventData}为
   * true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的X坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalX?: int;

  /**
   * 该鼠标事件以主屏左上角为原点的全局坐标系的Y坐标，单位为像素（px）。<!--Del-->作为入参时，若接口参数中的
   * [MouseEventData.useGlobalCoordinate]{@link @ohos.multimodalInput.inputEventClient:inputEventClient.MouseEventData}为
   * true，该值必填，当前仅支持整数。若为false，该值无需填写，使用指定屏幕左上角为原点的相对坐标系的Y坐标计算注入事件。<!--DelEnd-->作为出参时，由系统上报。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since 20 dynamic
   * @since 23 static
   */
  globalY?: int;
}