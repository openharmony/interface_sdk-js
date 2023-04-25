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
}
export default inputMonitor;