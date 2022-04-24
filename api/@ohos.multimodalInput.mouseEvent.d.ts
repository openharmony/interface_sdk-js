
/*
* Copyright (C) 2021 Huawei Device Co., Ltd.
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
import { InputEvent } from "./@ohos.multimodalInput.inputEvent"
import { KeyCode } from "./@ohos.multimodalInput.keyCode"

/**
* MouseEvent
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {MouseEvent} from '@ohos.multimodalInput.mouseEvent';
* @permission N/A
*/

export declare enum Action {
  // 取消
  CANCEL = 0,

  // 鼠标移动
  MOVE = 1,

  // 鼠标按钮按下
  BUTTON_DOWN = 2,

  // 鼠标按钮抬起
  BUTTON_UP = 3,

  // 鼠标关联的轴事件开始
  AXIS_BEGIN = 4,

  // 鼠标关联的轴事件更新
  AXIS_UPDATE = 5,

  // 鼠标关联的轴事件结束
  AXIS_END = 6,
}

export declare enum Button {
  // 鼠标左键
  LEFT = 0,

  // 鼠标中键
  MIDDLE = 1,

  // 鼠标右键
  RIGHT = 2,

  // 鼠标侧边键
  SIDE = 3,

  // 鼠标扩展键
  EXTRA = 4,

  // 鼠标前进键
  FORWARD = 5,

  // 鼠标后退键
  BACK = 6,

  // 鼠标任务键
  TASK = 7
}

export declare enum Axis {
  // 垂直滚动轴
  SCEOLL_VERTICAL = 0,

  // 水平滚动轴
  SCROLL_HORIZONTAL = 1,

  // 捏合轴
  PINCH = 2,
}

export declare interface AxisValue {
  // 轴类型
  axis: Axis;

  // 轴的值
  value: number
}

export declare interface MouseEvent extends InputEvent {
  // 鼠标事件动作
  action: Action;

  // 鼠标光标在屏幕中的x坐标
  screenX: number;

  // 鼠标光标在屏幕中的y坐标
  screenY: number;

  // 鼠标归属窗口的x坐标
  windowX: number;

  // 鼠标归属窗口的y坐标
  windowY: number;

  // 相对上次上报鼠标位置的相对X偏移，在屏幕边缘位置时，该值可能小于两次鼠标上报的坐标差
  rawDeltaX: number;

  // 相对上次上报鼠标位置的相对Y偏移，在屏幕边缘位置时，该值可能小于两次鼠标上报的坐标差
  rawDeltaY: number;

  // 按钮按下/抬起时的按钮
  button: Button;

  // 当前处于按下状态的按钮
  pressedButtons: Button[];

  // 当前action为AxisBegin/AxisUpdate/AxisEnd时，相关的轴的数据
  axes: AxisValue[];

  // 当前处于按下状态的按键列表
  pressedKeys: KeyCode[];

  // 当前ctrlKey是否处于按下状态
  ctrlKey: boolean;

  // 当前altKey是否处于按下状态
  altKey: boolean;

  // 当前shiftKey是否处于按下状态
  shiftKey: boolean;

  // 当前logoKey是否处于按下状态
  logoKey: boolean;

  // 当前fnKey是否处于按下状态
  fnKey:boolean
  
  // 当前capsLock是否处于激活状态
  capsLock:boolean
  
  // 当前numLock是否处于激活状态
  numLock:boolean
  
  // 当前scrollLock是否处于激活状态
  scrollLock:boolean
}