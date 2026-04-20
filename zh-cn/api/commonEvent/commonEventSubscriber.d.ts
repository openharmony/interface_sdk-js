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

/**
 * # How to Use
 * 
 * Before using the **CommonEventSubscriber** module, you must obtain a **subscriber** object by calling 
 * **commonEventManager.createSubscriber**.
 * 
 * <!--code_no_check-->
 * 
 * ```ts
 * import { commonEventManager } from '@kit.BasicServicesKit';
 * import { BusinessError } from '@kit.BasicServicesKit';
 * 
 * // Define a subscriber to save the created subscriber object for subsequent subscription and unsubscription.
 * let subscriber: commonEventManager.CommonEventSubscriber | null = null;
 * // Subscriber information.
 * let subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {
 * 	events: ['event']
 * };
 * // Create a subscriber.
 * subscriber = commonEventManager.createSubscriberSync(subscribeInfo);
 * ```
 */

import { AsyncCallback } from './../@ohos.base';
import { CommonEventSubscribeInfo } from './commonEventSubscribeInfo';
/**
 * # 使用说明
 * 
 * 在使用CommonEventSubscriber的功能前，需要通过commonEventManager.createSubscriber获取subscriber对象。
 * 
 * <!--code_no_check-->
 * 
 * ```ts
 * import { commonEventManager } from '@kit.BasicServicesKit';
 * import { BusinessError } from '@kit.BasicServicesKit';
 * 
 * // 定义订阅者，用于保存创建成功的订阅者对象，后续使用其完成订阅及退订的动作
 * let subscriber: commonEventManager.CommonEventSubscriber | null = null;
 * // 订阅者信息
 * let subscribeInfo: commonEventManager.CommonEventSubscribeInfo = {
 * 	events: ['event']
 * };
 * // 创建订阅者
 * subscriber = commonEventManager.createSubscriberSync(subscribeInfo);
 * ```
 */
/**
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventSubscriber {
  /**
   * 获取有序公共事件传递的数据（number类型）。使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数。返回有序公共事件传递的数据（number类型）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getCode(callback: AsyncCallback<int>): void;

  /**
   * 获取有序公共事件传递的数据（number类型）。使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象。返回有序公共事件传递的数据（number类型）。
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getCode(): Promise<int>;

  /**
   * 获取有序公共事件传递的数据（number类型）。
   *
   * @returns { int } 表示有序公共事件传递的数据（number类型）。
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  getCodeSync(): int;

  /**
   * 设置有序公共事件传递的数据（number类型）。使用callback异步回调。
   *
   * @param { int } code - 有序公共事件传递的数据（number类型）。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置有序公共事件传递的数据（number类型）成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCode(code: int, callback: AsyncCallback<void>): void;

  /**
   * 设置有序公共事件传递的数据（number类型）。使用Promise异步回调。
   *
   * @param { int } code - 有序公共事件传递的数据（number类型）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCode(code: int): Promise<void>;

  /**
   * 设置有序公共事件传递的数据（number类型）。
   *
   * @param { int } code - 有序公共事件传递的数据（number类型）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setCodeSync(code: int): void;

  /**
   * 获取有序公共事件传递的数据（string类型）。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数。返回有序公共事件传递的数据（string类型）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getData(callback: AsyncCallback<string>): void;

  /**
   * 获取有序公共事件传递的数据（string类型）。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象。返回有序公共事件传递的数据（string类型）。
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getData(): Promise<string>;

  /**
   * 获取有序公共事件传递的数据（string类型）。
   *
   * @returns { string } 有序公共事件传递的数据（string类型）。
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  getDataSync(): string;

  /**
   * 设置有序公共事件传递的数据（string类型）。使用callback异步回调。
   *
   * @param { string } data - 有序公共事件传递的数据（string类型）。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置有序公共事件传递的数据（string类型）成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setData(data: string, callback: AsyncCallback<void>): void;

  /**
   * 设置有序公共事件传递的数据（string类型）。使用Promise异步回调。
   *
   * @param { string } data - 有序公共事件传递的数据（string类型）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setData(data: string): Promise<void>;

  /**
   * 设置有序公共事件传递的数据（string类型）。
   *
   * @param { string } data - 有序公共事件传递的数据（string类型）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setDataSync(data: string): void;

  /**
   * 设置有序公共事件数据。使用callback异步回调。
   *
   * @param { int } code - 有序公共事件传递的数据（number类型）。
   * @param { string } data - 有序公共事件传递的数据（string类型）。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置有序公共事件传递的数据成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCodeAndData(code: int, data: string, callback: AsyncCallback<void>): void;

  /**
   * 设置有序公共事件传递的数据。使用Promise异步回调。
   *
   * @param { int } code - 有序公共事件传递的数据（number类型）。
   * @param { string } data - 有序公共事件传递的数据（string类型）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCodeAndData(code: int, data: string): Promise<void>;

  /**
   * 设置有序公共事件传递的数据。
   *
   * @param { int } code - 有序公共事件传递的数据（number类型）。
   * @param { string } data - 有序公共事件传递的数据（string类型）。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setCodeAndDataSync(code: int, data: string): void;

  /**
   * 查询当前公共事件是否为有序公共事件。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示有序公共事件；返回false表示无序公共事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isOrderedCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前公共事件是否为有序公共事件。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示有序公共事件；返回false表示无序公共事件。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isOrderedCommonEvent(): Promise<boolean>;

  /**
   * 查询当前公共事件是否为有序公共事件。
   *
   * @returns { boolean } 返回true表示有序公共事件；返回false表示无序公共事件。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  isOrderedCommonEventSync(): boolean;

  /**
   * 检查当前公共事件是否为一个粘性事件。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示是粘性公共事件；返回false表示不是粘性公共事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isStickyCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * 检查当前公共事件是否为一个粘性事件。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示是粘性公共事件；返回false表示不是粘性公共事件。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isStickyCommonEvent(): Promise<boolean>;

  /**
   * 检查当前公共事件是否为一个粘性事件。
   *
   * @returns { boolean } 返回true表示是粘性公共事件；返回false表示不是粘性公共事件。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  isStickyCommonEventSync(): boolean;

  /**
   * 添加有序公共事件的中止状态。当该接口与
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}配合使用时，可以中止当前的有序公共事
   * 件，使该公共事件不再向下一个订阅者传递。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当添加有序公共事件中止状态成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  abortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * 添加有序公共事件的中止状态。当该接口与
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}配合使用时，可以中止当前的有序公共事
   * 件，使该公共事件不再向下一个订阅者传递。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  abortCommonEvent(): Promise<void>;

  /**
   * 添加有序公共事件的中止状态。当该接口与
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}配合使用时，可以中止当前的有序公共事
   * 件，使该公共事件不再向下一个订阅者传递。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  abortCommonEventSync(): void;

  /**
   * 清理有序公共事件的中止状态。当该接口与
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}配合使用时，可以使该公共事件继续向下
   * 一个订阅者传递。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当清理有序公共事件中止状态成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  clearAbortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * 清理有序公共事件的中止状态。当该接口与
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}配合使用时，可以使该公共事件继续向下
   * 一个订阅者传递。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  clearAbortCommonEvent(): Promise<void>;

  /**
   * 清理有序公共事件的中止状态。当该接口与
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}配合使用时，可以使该公共事件继续向下
   * 一个订阅者传递。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  clearAbortCommonEventSync(): void;

  /**
   * 获取当前有序公共事件是否处于中止状态。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前有序公共事件处于中止状态；返回false表示当前有序公共事件没有处于中止状态。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  getAbortCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * 获取当前有序公共事件是否处于中止状态。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示当前有序公共事件处于中止状态；返回false表示当前有序公共事件没有处于中止状态。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  getAbortCommonEvent(): Promise<boolean>;

  /**
   * 获取当前有序公共事件是否处于中止状态。
   *
   * @returns { boolean } 返回true表示当前有序公共事件处于中止状态；返回false表示当前有序公共事件没有处于中止状态。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  getAbortCommonEventSync(): boolean;

  /**
   * 获取订阅者的订阅信息。使用callback异步回调。
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo> } callback - 回调函数。返回订阅者的订阅信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void;

  /**
   * 获取订阅者的订阅信息。使用callback异步回调。
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo|null> } callback - 回调函数。返回订阅者的订阅信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @since 23 static
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo|null>): void;

  /**
   * 获取订阅者的订阅信息。使用Promise异步回调。
   *
   * @returns { Promise<CommonEventSubscribeInfo> } Promise对象。返回订阅者的订阅信息。
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo>;

  /**
   * 获取订阅者的订阅信息。使用Promise异步回调。
   *
   * @returns { Promise<CommonEventSubscribeInfo|null> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @since 23 static
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo|null>;

  /**
   * 获取订阅者的订阅信息。
   *
   * @returns { CommonEventSubscribeInfo } 表示订阅者的订阅信息。
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSubscribeInfoSync(): CommonEventSubscribeInfo;

  /**
   * 获取订阅者的订阅信息。
   *
   * @returns { CommonEventSubscribeInfo|null } Subscriber information.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 23 static
   */
  getSubscribeInfoSync(): CommonEventSubscribeInfo|null;

  /**
   * 用于订阅者结束对当前有序公共事件的处理。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当订阅者结束当前有序公共事件成功时，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9 dynamic
   * @since 23 static
   */
  finishCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * 用于订阅者结束对当前有序公共事件的处理。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9 dynamic
   * @since 23 static
   */
  finishCommonEvent(): Promise<void>;
}