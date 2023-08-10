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

/**
 * Global Key Event Injection
 *
 * @namespace inputEventClient
 * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
 * @systemapi hide for inner use
 * @since 8
 */
declare namespace inputEventClient {
  /**
   * Defines event of key that user want to inject.
   *
   * @interface KeyEvent
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 8
   */
  interface KeyEvent {
    /**
     * The status of key.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    isPressed: boolean;

    /**
     * The keyCode value of key.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    keyCode: number;

    /**
     * Key hold duration.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    keyDownDuration: number;

    /**
     * Whether the key is blocked.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
     * @systemapi hide for inner use
     * @since 8
     */
    isIntercepted: boolean;
  }

  /**
   * Inject system keys.
   *
   * @param { { KeyEvent } } KeyEvent - the key event to be injected.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.MultimodalInput.Input.InputSimulator
   * @systemapi hide for inner use
   * @since 8
   */
  function injectEvent({ KeyEvent: KeyEvent }): void;
}

export default inputEventClient;
