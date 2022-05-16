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
   * cancel
   */
  CANCEL = 0,

  /**
   * down
   */
  DOWN = 1,

  /**
   * up
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
   * the key code
   */
  code: KeyCode;

  /**
   * press the time
   */
  pressedTime: number;

  /**
   * button Owning device
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
   * the key action
   */
  action: Action;

  /**
   * the keys that change this time
   */
  key: Key;

  /**
   * unideCode coding
   */
  unicodeChar: number;

  /**
   * list of keys that are currently in the pressed state
   */
  keys: Key[];

  /**
   * whether ctrlKey is in down state
   */
  ctrlKey: boolean;

  /**
   * whether altKey is in down state
   */
  altKey: boolean;

  /**
   * whether shiftKey is in down state
   */
  shiftKey: boolean;

  /**
   * whether logoKey is in down state
   */
  logoKey: boolean;

  /**
   * whether fnKey is in down state
   */
  fnKey: boolean;

  /**
   * whether the current capsLock is activated
   */
  capsLock: boolean;

  /**
   * whether the current numLock is activated
   */
  numLock: boolean;

  /**
   * whether the current scrollLock is activated
   */
  scrollLock: boolean;
}