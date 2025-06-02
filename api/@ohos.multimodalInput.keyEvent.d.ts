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
 * @file
 * @kit InputKit
 */

/*** if arkts 1.1 */
import type { InputEvent } from './@ohos.multimodalInput.inputEvent';
import type { KeyCode } from './@ohos.multimodalInput.keyCode';
/*** endif */
/*** if arkts 1.2 */
import { InputEvent } from './@ohos.multimodalInput.inputEvent';
/*** endif */

/**
 * Action
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9'}
 * @arkts 1.1
 */
/**
 * Action
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice
  * @since arkts {'1.1':'12'}
 * @arkts 1.1
 */
export declare enum Action {
  /**
   * Cancel key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Cancel key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  CANCEL = 0,

  /**
   * Down key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Down key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  DOWN = 1,

  /**
   * Up key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Up key
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  UP = 2
}

/**
 * Key
 *
 * @interface Key
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9'}
 * @arkts 1.1
 */
/**
 * Key
 *
 * @typedef Key
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice
  * @since arkts {'1.1':'12'}
 * @arkts 1.1
 */
export declare interface Key {
  /**
   * Key code
   * @type { KeyCode }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Key code
   * @type { KeyCode }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  code: KeyCode;

  /**
   * Time when the key is pressed
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Time when the key is pressed
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  pressedTime: number;

  /**
   * Device to which the key belongs
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Device to which the key belongs
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  deviceId: number;
}

/**
 * KeyEvent
 *
 * @interface KeyEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since arkts {'1.1':'9'}
 * @arkts 1.1
 */
/**
 * KeyEvent
 *
 * @typedef KeyEvent
 * @extends InputEvent
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @atomicservice
  * @since arkts {'1.1':'12'}
 * @arkts 1.1
 */
export declare interface KeyEvent extends InputEvent {
  /**
   * Key action
   * @type { Action }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Key action
   * @type { Action }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  action: Action;

  /**
   * Key that has changed
   * @type { Key }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Key that has changed
   * @type { Key }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  key: Key;

  /**
   * Unicode character corresponding to the key
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Unicode character corresponding to the key
   * @type { number }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  unicodeChar: number;

  /**
   * List of pressed keys
   * @type { Key[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * List of pressed keys
   * @type { Key[] }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  keys: Key[];

  /**
   * Whether ctrlKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether ctrlKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  ctrlKey: boolean;

  /**
   * Whether altKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether altKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  altKey: boolean;

  /**
   * Whether shiftKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether shiftKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  shiftKey: boolean;

  /**
   * Whether logoKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether logoKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  logoKey: boolean;

  /**
   * Whether fnKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether fnKey is being pressed
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  fnKey: boolean;

  /**
   * Whether capsLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether capsLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  capsLock: boolean;

  /**
   * Whether numLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether numLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  numLock: boolean;

  /**
   * Whether scrollLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @since arkts {'1.1':'9'}
   * @arkts 1.1
   */
  /**
   * Whether scrollLock is active
   * @type { boolean }
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @atomicservice
    * @since arkts {'1.1':'12'}
   * @arkts 1.1
   */
  scrollLock: boolean;
}