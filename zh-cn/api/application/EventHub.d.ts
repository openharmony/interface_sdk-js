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
 * EventHub是系统提供的基于发布-订阅模式实现的事件通信机制。通过事件名，实现了发送方和订阅方之间的解耦，支持不同业务模块间的高效数据传递和状态同步。
 * 主要用于[UIAbility组件与UI的数据通信](docroot://application-models/uiability-data-sync-with-ui.md)。
 * 不同的Context对象拥有不同的EventHub对象，不同EventHub对象之间无法直接通信。事件的订阅、取消订阅、触发都作用在某一个具体的EventHub对象上。
 * 由于Worker、Taskpool通过Actor模型实现[多线程并发](docroot://arkts-utils/multi-thread-concurrency-overview.md#多线程并发模型)，不同虚拟机实例之间拥有独占
 * 的内存，因此EventHub对象不能用于线程间的数据通信。
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
   * 订阅指定事件。
   * 
   * > **说明：**
   * >
   * > callback被emit触发时，调用方是EventHub对象，如果要修改callback中this的指向，可以使用箭头函数。
   *
   * @param { string } event - 事件名称。
   * @param { Function } callback - 事件回调，事件触发后调用。
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
   * 取消订阅指定事件。
   * 
   * - 传入callback：取消指定的callback对指定事件的订阅，当该事件触发后，将不会回调该callback。
   * - 不传callback：取消所有callback对指定事件的订阅。
   *
   * @param { string } event - 事件名称。
   * @param { Function } [callback] - 事件回调。如果不传callback，则取消订阅该事件下所有callback。
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
   * 触发指定事件。
   *
   * @param { string } event - 事件名称。
   * @param { Object[] } args - 可变参数，事件触发时，传递给回调函数的参数。
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
   * 触发指定事件。
   *
   * @param { string } event - 事件名称。
   * @param { (Object|null|undefined)[] } args - 可变参数，事件触发时，传递给回调函数的参数。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 static
   */
  emit(event: string, ...args: (Object|null|undefined)[]): void;
}

export default EventHub;