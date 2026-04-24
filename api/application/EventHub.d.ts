/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * @file
 * @kit AbilityKit
 */

import { BusinessError } from '../@ohos.base';

/**
 * EventHub is an event communication mechanism based on the publish-subscribe pattern. It decouples senders and 
 * subscribers through event names, supporting efficient data transfer and state synchronization between different 
 * service modules.
 * It is primarily used for 
 * [data communication between UIAbility components and UI pages](docroot://application-models/uiability-data-sync-with-ui.md)
 * .
 * Different Context objects have different EventHub objects, and different EventHub objects cannot communicate directly
 *  with each other. Event subscription, unsubscription, and triggering all take place on a specific EventHub object.
 * Since Worker and TaskPool implement 
 * [multithreaded concurrency](docroot://arkts-utils/multi-thread-concurrency-overview.md#multithreaded-concurrency-models)
 *  through the actor model, where different virtual machine instances have exclusive memory, EventHub objects cannot be
 *  used for inter-thread data communication.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class EventHub {
  /**
   * Subscribes to an event.
   * 
   * > **NOTE**
   * >
   * > When the callback is triggered by **emit**, the invoker is the EventHub object. To change the direction of 
   * > **this** in **callback**, use an arrow function.
   *
   * @param { string } event - Event name.
   * @param { Function } callback - Callback invoked when the event is triggered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  on(event: string, callback: Function): void;

  /**
   * Unsubscribes from an event.
   * 
   * - If **callback** is specified, this API unsubscribes from the given event with the specified callback.
   * - If **callback** is not specified, this API unsubscribes from the given event with all callbacks.
   *
   * @param { string } event - Event name.
   * @param { Function } [callback] - Callback for the event. If **callback** is unspecified, the given event with all 
   *     callbacks is unsubscribed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  off(event: string, callback?: Function): void;

  /**
   * Trigger the event callbacks.
   *
   * @param { string } event - Indicates the event.
   * @param { Object[] } args - Indicates the callback arguments.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  emit(event: string, ...args: Object[]): void;
 
  /**
   * Trigger the event callbacks.
   *
   * @param { string } event - Indicates the event.
   * @param { (Object|null|undefined)[] } args - Indicates the callback arguments.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  emit(event: string, ...args: (Object|null|undefined)[]): void;
}

export default EventHub;