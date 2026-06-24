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

/**
 * The **keyEvent** module provides key events reported by a device. It is inherited from 
 * [InputEvent]{@link @ohos.multimodalInput.inputEvent:InputEvent}.
 *
 * @file Key Event
 * @kit InputKit
 */

import type { InputEvent } from './@ohos.multimodalInput.inputEvent';

import type { KeyCode } from './@ohos.multimodalInput.keyCode';

/**
 * 按键事件类型。
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Action {

  /**
   * 按键取消。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * 按键按下。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  DOWN = 1,

  /**
   * 按键抬起。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  UP = 2
}

/**
 * 按键。
 *
 * @interface Key [since 9 - 11]
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface Key {

  /**
   * 键值。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  code: KeyCode;

  /**
   * 按键按下时间，表示系统启动运行至今逝去的微秒数，单位为微秒（μs）。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  pressedTime: long;

  /**
   * 输入设备的唯一标识，同一个物理设备反复插拔或重启，设备ID可能会发生变化。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  deviceId: int;
}

/**
 * 按键事件。
 *
 * @interface KeyEvent [since 9 - 11]
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface KeyEvent extends InputEvent {

  /**
   * 按键事件类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  action: Action;

  /**
   * 按键。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  key: Key;

  /**
   * 按键对应的unicode字符。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  unicodeChar: int;

  /**
   * 当前处于按下状态的按键列表。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  keys: Key[];

  /**
   * 当前ctrlKey是否处于按下状态。 
   * 
   * true表示处于按下状态，false表示处于抬起状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
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
   * @atomicservice [since 12]
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
   * @atomicservice [since 12]
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
   * @atomicservice [since 12]
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
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  fnKey: boolean;

  /**
   * 当前capsLock是否处于使能状态。 
   * 
   * true表示处于使能状态，false表示处于未使能状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  capsLock: boolean;

  /**
   * 当前numLock是否处于使能状态。 
   * 
   * true表示处于使能状态，false表示处于未使能状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  numLock: boolean;

  /**
   * 当前scrollLock是否处于使能状态。 
   * 
   * true表示处于使能状态，false表示处于未使能状态。
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  scrollLock: boolean;
}