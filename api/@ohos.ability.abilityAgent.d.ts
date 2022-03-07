/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import { AsyncCallback } from './basic';
import { Callback } from './basic';

/**
 * Provides methods to listen for the lifecycle of and send messages to the peer ability. After your application.
 *
 * @name abilityAgent
 * @since 7
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 */
declare namespace abilityAgent {

  /**
   * Subscribe send message event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @param type event type.
   */
  function on(type: 'message', callback: Callback<string>): void;

  /**
   * Subscribe listen lifeCycle event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @param type event type.
   */
  function on(type: 'stateChange', callback: Callback<number>): void;

  /**
   * Unsubscribe send message event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @param type event type.
   */
  function off(type: 'message', callback?: Callback<string>): void;

  /**
   * Unsubscribe listen lifeCycle event.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @param type event type.
   */
  function off(type: 'stateChange', callback?: Callback<number>): void;

  /**
   * Send message.
   *
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @param data message content.
   */
  function postMessage(data: Message, callback:AsyncCallback<void>): void;
  function postMessage(data: Message): Promise<void>;

  /**
   * Message data structure.
   *
   * @name Message
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   */
  interface Message {
    /**
     * message type.
     *
     * @default -
     * @since 7
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    type: string;

    /**
     * message content.
     *
     * @default -
     * @since 7
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     */
    data: {[key: string]: Object};
  }
}

export default abilityAgent;