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
 * Key event type.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare enum Action {

  /**
   * Cancellation of a key action.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  CANCEL = 0,

  /**
   * Key press.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  DOWN = 1,

  /**
   * Key release.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  UP = 2
}

/**
 * Defines a key.
 *
 * @interface Key [since 9 - 11]
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface Key {

  /**
   * Key code.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  code: KeyCode;

  /**
   * Time when the key is pressed, in microseconds (μs) since the system starts.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  pressedTime: long;

  /**
   * Unique ID of the input device. If a physical device is repeatedly reinstalled or restarted, its ID may change.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  deviceId: int;
}

/**
 * Key event.
 *
 * @interface KeyEvent [since 9 - 11]
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface KeyEvent extends InputEvent {

  /**
   * Key event type.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  action: Action;

  /**
   * Defines a key.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  key: Key;

  /**
   * Unicode character corresponding to the key.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  unicodeChar: int;

  /**
   * List of pressed keys.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  keys: Key[];

  /**
   * Whether ctrlKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  ctrlKey: boolean;

  /**
   * Whether altKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  altKey: boolean;

  /**
   * Whether shiftKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  shiftKey: boolean;

  /**
   * Whether logoKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  logoKey: boolean;

  /**
   * Whether fnKey is being pressed.
   *
   * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  fnKey: boolean;

  /**
   * Whether capsLock is enabled.
   *
   * The value **true** indicates that capsLock is enabled, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  capsLock: boolean;

  /**
   * Whether numLock is enabled.
   *
   * The value **true** indicates that numLock is enabled, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  numLock: boolean;

  /**
   * Whether scrollLock is enabled.
   *
   * The value **true** indicates that scrollLock is enabled, and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  scrollLock: boolean;
}