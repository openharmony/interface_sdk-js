/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
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
* Action
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {Action} from '@ohos.multimodalInput.keyEvent';
*/
export declare enum Action {
  /**
   * 取消
   */
  CANCEL = 0,

  /**
   * 按钮按下
   */
  DOWN = 1,

  /**
   * 按钮抬起
   */
  UP = 2,
}

/**
* Key
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {Key} from '@ohos.multimodalInput.mouseEvent';
*/
export declare interface Key {
  /**
   * 按键码
   */
  code: KeyCode;

  /**
   * 按下时间
   */
  pressedTime: number;

  /**
   * 按键所属设备
   */
  deviceId: number;
}

/**
* KeyEvent
*
* @since 9
* @syscap SystemCapability.MultimodalInput.Input.Core
* @import import {KeyEvent} from '@ohos.multimodalInput.mouseEvent';
*/
export declare interface KeyEvent extends InputEvent {
  /**
   * 按键动作
   */
  action: Action;

  /**
   * 当前发生变化的按键
   */
  key: Key;

  /**
   * 按键对应的uniCode字符
   */
  unicodeChar: number;

  /**
   * 当前处于按下状态的按键列表
   */
  keys: Key[];

  /**
   * 当前ctrlKey是否处于按下状态
   */
  ctrlKey: boolean;

  /**
   * 当前altKey是否处于按下状态
   */
  altKey: boolean;

  /**
   * 当前shiftKey是否处于按下状态
   */
  shiftKey: boolean;

  /**
   * 当前logoKey是否处于按下状态
   */
  logoKey: boolean;

  /**
   * 当前fnKey是否处于按下状态
   */
  fnKey: boolean;

  /**
   * 当前capsLock是否处于激活状态
   */
  capsLock: boolean;

  /**
   * 当前numLock是否处于激活状态
   */
  numLock: boolean;

  /**
   * 当前scrollLock是否处于激活状态
   */
  scrollLock: boolean;
}