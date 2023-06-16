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

import { Callback } from './@ohos.base';
import { MouseEvent } from './@ohos.multimodalInput.mouseEvent';
import type { Pinch, ThreeFingersSwipe, FourFingersSwipe } from './@ohos.multimodalInput.gestureEvent';

/**
 * Global input event listener
 * System API, available only to system processes
 *
 * @namespace inputMonitor
 * @permission ohos.permission.INPUT_MONITORING
 * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
 * @systemapi hide for inner use
 * @since 7
 */
declare namespace inputMonitor {
  /**
   * Callback used to receive touch input events. If **true** is returned, the touch input is consumed,
   * and the system performs the closing operation.
   *
   * @interface TouchEventReceiver
   * @permission ohos.permission.INPUT_MONITORING
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 7
   */
  interface TouchEventReceiver {
    (touchEvent: TouchEvent): Boolean;
  }

  /**
   * Listens for touch input events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touch' } type - Event type, which is **touch**.
   * @param { TouchEventReceiver } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 7
   */
  function on(type: 'touch', receiver: TouchEventReceiver): void;

  /**
   * Listens for mouse input events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'mouse' } type - Event type, which is **mouse**.
   * @param { Callback<MouseEvent> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 9
   */
  function on(type: 'mouse', receiver: Callback<MouseEvent>): void;

  /**
   * Cancel listening for touch input events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'touch' } type - Event type, which is **touch**.
   * @param { TouchEventReceiver } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 7
   */
  function off(type: 'touch', receiver?: TouchEventReceiver): void;

  /**
   * Cancel listening for mouse input events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'mouse' } type - Event type, which is **mouse**.
   * @param { Callback<MouseEvent> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 201 - Permission denied.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 9
   */
  function off(type: 'mouse', receiver?: Callback<MouseEvent>): void;

  /**
   * Listens for touchPad pinch events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'pinch' } type - Event type, which is **pinch**.
   * @param { Callback<Pinch> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10
   */
  function on(type: 'pinch', receiver: Callback<Pinch>): void;

  /**
   * Cancel listening for touchPad pinch events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'pinch' } type - Event type, which is **pinch**.
   * @param { Callback<Pinch> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10
   */
  function off(type: 'pinch', receiver?: Callback<Pinch>): void;

  /**
   * Listens for touchPad three fingers swipe events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'threeFingersSwipe' } type - Event type, which is **threeFingersSwipe**.
   * @param { Callback<ThreeFingersSwipe> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10
   */
  function on(type: 'threeFingersSwipe', receiver: Callback<ThreeFingersSwipe>): void;

  /**
   * Cancel listening touchPad three fingers swipe events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'threeFingersSwipe' } type - Event type, which is **threeFingersSwipe**.
   * @param { Callback<ThreeFingersSwipe> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10
   */
  function off(type: 'threeFingersSwipe', receiver?: Callback<ThreeFingersSwipe>): void;

  /**
   * Listens for touchPad four fingers swipe events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'fourFingersSwipe' } type - Event type, which is **fourFingersSwipe**..
   * @param { Callback<FourFingersSwipe> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10
   */
  function on(type: 'fourFingersSwipe', receiver: Callback<FourFingersSwipe>): void;

  /**
   * Cancel listening touchPad four finger swipe events.
   *
   * @permission ohos.permission.INPUT_MONITORING
   * @param { 'fourFingersSwipe' } type - Event type, which is **fourFingersSwipe**.
   * @param { Callback<FourFingersSwipe> } receiver - Callback used to receive the reported data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permit error.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputMonitor
   * @systemapi hide for inner use
   * @since 10
   */
  function off(type: 'fourFingersSwipe', receiver?: Callback<FourFingersSwipe>): void;
}
export default inputMonitor;