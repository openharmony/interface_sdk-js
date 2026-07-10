/*
* Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * The **shortKey** module provides APIs to set the delay for starting an ability using a shortcut key. For example, you
 * can set the delay to 3 seconds so that a screenshot is taken when you press and hold the shortcut key for 3 seconds.
 *
 * @file Preset Global Shortcut Keys
 * @kit InputKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * The shortKey module provides APIs to set the delay for starting an ability using a shortcut key.
 * For example, you can set the delay to 3 seconds so that a screenshot is taken when you press and hold the shortcut
 * key for 3 seconds.
 *
 * @syscap SystemCapability.MultimodalInput.Input.ShortKey
 * @systemapi hide for inner use
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace shortKey {

  /**
   * Sets the delay for starting an ability using shortcut keys. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { string } businessKey - Unique service ID registered on the multimodal side. It corresponds to
   *     **businessId** in the **ability_launch_config.json** file. You need to query this parameter on your own before
   *     calling the API.
   * @param { int } delay - Delay for starting an ability using shortcut keys, in milliseconds. This field is valid only
   *     when shortcut keys are pressed.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.ShortKey
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyDownDuration(businessKey: string, delay: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the delay for starting an ability using shortcut keys. This API uses a promise to return the result.
   *
   * @param { string } businessKey - Unique service ID registered on the multimodal side. It corresponds to
   *     **businessId** in the **ability_launch_config.json** file. You need to query this parameter on your own before
   *     calling the API.
   * @param { int } delay - Delay for starting an ability using shortcut keys, in milliseconds. This field is valid only
   *     when shortcut keys are pressed.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.ShortKey
   * @systemapi hide for inner use
   * @since 10 dynamic
   * @since 23 static
   */
  function setKeyDownDuration(businessKey: string, delay: int): Promise<void>;
}

export default shortKey;

/**
 * Enumerates fingerprint gesture event types.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi Hide this for inner system use.
 * @since 12 dynamic
 * @since 23 static
 */
export declare enum FingerprintAction {

  /**
   * Pressing down
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  DOWN = 0,

  /**
   * Lifting up
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  UP = 1,

  /**
   * Sliding
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  SLIDE = 2,

  /**
   * Second pressing down
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  RETOUCH = 3,

  /**
   * Double-click
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  CLICK = 4
}

/**
 * Provides fingerprint gesture event types and the offset of the fingerprint sensor relative to the side edge.
 *
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @systemapi Hide this for inner system use.
 * @since 12 dynamic
 * @since 23 static
 */
export declare interface FingerprintEvent {

  /**
   * Enumeration of fingerprint gesture event types.
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  action: FingerprintAction;

  /**
   * Offset relative to the short axis of the side fingerprint device (positive values indicate movement to the right,
   * and negative values indicate movement to the left).
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  distanceX: double;

  /**
   * Offset relative to the long axis of the side fingerprint device (positive values indicate upward movement, and
   * negative values indicate downward movement).
   *
   * @syscap SystemCapability.MultimodalInput.Input.Core
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  distanceY: double;
}