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
 * @file The subscriber of common event
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './../@ohos.base';
import { CommonEventSubscribeInfo } from './commonEventSubscribeInfo';

/**
 * # How to Use
 * 
 * Before using the **CommonEventSubscriber** module, you must obtain a **subscriber** object by calling 
 * **commonEventManager.createSubscriberSync**.
 * 
 * <!--code_no_check-->
 * 
 * ```ts
 * import { commonEventManager } from '@kit.BasicServicesKit';
 * import { BusinessError } from '@kit.BasicServicesKit';
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
/**
 * Represents the subscriber of a common event. The **CommonEventSubscriber** module
 * provides the capabilities for processing ordered common events, including obtaining
 * and setting the data and code transferred by events, checking whether the current
 * common event is an ordered or sticky event, terminating an ordered common event or
 * clearing the termination status, ending the processing of the current ordered common
 * event, and obtaining subscription information of a subscriber. This module is
 * applicable to data processing and process control of the received common event by
 * the subscriber.
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventSubscriber {
  /**
   * Obtains the result code of an ordered common event. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the result code
   *     (number type) of an ordered common event is successfully obtained, **err** is **undefined**, and
   *     **data** is the code obtained; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getCode(callback: AsyncCallback<int>): void;

  /**
   * Obtains the result code of an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result code.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getCode(): Promise<int>;

  /**
   * Obtains the result code of an ordered common event. This API returns the result synchronously.
   *
   * @returns { int } Code delivered by the ordered common event.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  getCodeSync(): int;

  /**
   * Sets the code of an ordered common event. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { int } code - Code delivered by the ordered common event.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCode(code: int, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code of an ordered common event. This API uses a promise to return the result.
   *
   * @param { int } code - Code delivered by the ordered common event.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCode(code: int): Promise<void>;

  /**
   * Sets the result code of an ordered common event. This API returns the result synchronously.
   *
   * @param { int } code - Code delivered by the ordered common event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setCodeSync(code: int): void;

  /**
   * Obtains the data of an ordered common event. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { AsyncCallback<string> } callback - Callback used to return the result. If the result data
   *     (string type) of an ordered common event is successfully obtained, **err** is **undefined**, and
   *     **data** is the data obtained; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getData(callback: AsyncCallback<string>): void;

  /**
   * Obtains the data of an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the result data (string type) of an ordered common event.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  getData(): Promise<string>;

  /**
   * Obtains the data of an ordered common event. This API returns the result synchronously.
   *
   * @returns { string } Data delivered by the ordered common event.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  getDataSync(): string;

  /**
   * Sets the data of an ordered common event. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { string } data - Data delivered by the ordered common event. The value is a string
   *     containing a maximum of 65,536 characters. If the length exceeds the limit, the API
   *     setting becomes invalid.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setData(data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result data of an ordered common event. This API uses a promise to return the result.
   *
   * @param { string } data - Data delivered by the ordered common event. The value is a string
   *     containing a maximum of 65,536 characters. If the length exceeds the limit, the API
   *     setting becomes invalid.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setData(data: string): Promise<void>;

  /**
   * Sets the result data of an ordered common event. This API returns the result synchronously.
   *
   * @param { string } data - Data delivered by the ordered common event. The value is a string
   *     containing a maximum of 65,536 characters. If the length exceeds the limit, the API
   *     setting becomes invalid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setDataSync(data: string): void;

  /**
   * Sets the result code and data of an ordered common event. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { int } code - Code delivered by the ordered common event.
   * @param { string } data - Data delivered by the ordered common event. The value is a string
   *     containing a maximum of 65,536 characters. If the length exceeds the limit, the API
   *     setting becomes invalid.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCodeAndData(code: int, data: string, callback: AsyncCallback<void>): void;

  /**
   * Sets the result code and data of an ordered common event. This API uses a promise to return the result.
   *
   * @param { int } code - Code delivered by the ordered common event.
   * @param { string } data - Data delivered by the ordered common event. The value is a string
   *     containing a maximum of 65,536 characters. If the length exceeds the limit, the API
   *     setting becomes invalid.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  setCodeAndData(code: int, data: string): Promise<void>;

  /**
   * Sets the code and data of an ordered common event. This API returns the result synchronously.
   *
   * @param { int } code - Code delivered by the ordered common event.
   * @param { string } data - Data delivered by the ordered common event. The value is a string
   *     containing a maximum of 65,536 characters. If the length exceeds the limit, the API
   *     setting becomes invalid.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  setCodeAndDataSync(code: int, data: string): void;

  /**
   * Checks whether the current common event is an ordered common event. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the query is
   *     successful, **err** is **undefined**. If **data** is **true**, the common event is ordered; if
   *     **data** is **false**, the common event is not ordered. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isOrderedCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current common event is an ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns **true** if the common event is an ordered
   *     one; returns **false** if the common event is an unordered one.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isOrderedCommonEvent(): Promise<boolean>;

  /**
   * Checks whether a common event is an ordered one. This API returns the result synchronously.
   *
   * @returns { boolean } Returns **true** if the common event is an ordered one; returns **false** if the common event
   *     is an unordered one.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  isOrderedCommonEventSync(): boolean;

  /**
   * Checks whether the current common event is a sticky common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the query is
   *     successful, **err** is **undefined**. If **data** is **true**, the common event is sticky; if
   *     **data** is **false**, the common event is not sticky. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isStickyCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the current common event is a sticky common event. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns **true** if the common event is a sticky
   *     one; returns **false** otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isStickyCommonEvent(): Promise<boolean>;

  /**
   * Checks whether the current common event is a sticky common event. This API returns the result synchronously.
   *
   * @returns { boolean } Returns **true** if the common event is a sticky one; returns **false** otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  isStickyCommonEventSync(): boolean;

  /**
   * Aborts an ordered common event. This API is used with 
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}. After the abort,
   * the common event is not sent to the next subscriber. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  abortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Aborts an ordered common event. This API is used with
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}. After the abort,
   * the common event is not sent to the next subscriber. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  abortCommonEvent(): Promise<void>;

  /**
   * Aborts an ordered common event when used with
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}. With the abort
   * state, the common event is not sent to the next subscriber. This API returns the result synchronously.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  abortCommonEventSync(): void;

  /**
   * Clears the abort state of an ordered common event. Use this API together with 
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}, and the common 
   * event can be passed to the next subscriber. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  clearAbortCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Clears the abort state of this ordered common event. Use this API together with 
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}, and the common 
   * event can be passed to the next subscriber. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  clearAbortCommonEvent(): Promise<void>;

  /**
   * Clears the abort state of an ordered common event when used with
   * [finishCommonEvent]{@link CommonEventSubscriber.finishCommonEvent(callback: AsyncCallback<void>)}. After the
   * clearance, the common event is sent to the next subscriber. This API returns the result synchronously.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  clearAbortCommonEventSync(): void;

  /**
   * Checks whether this ordered common event should be aborted. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the query is
   *     successful, **err** is **undefined** and **data** is **true** if the current ordered common event is
   *     in the abort state, or **false** if the current ordered common event is not in the abort state.
   *     If the operation fails, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  getAbortCommonEvent(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether this ordered common event should be aborted. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The **true** indicates that the
   *     ordered common event is in the abort state; the value **false** indicates otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  getAbortCommonEvent(): Promise<boolean>;

  /**
   * Checks whether an ordered common event is aborted. This API returns the result synchronously.
   *
   * @returns { boolean } The value **true** indicates that the ordered common event is in the abort state; the
   *     value **false** indicates otherwise.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 10 dynamic
   * @since 23 static
   */
  getAbortCommonEventSync(): boolean;

  /**
   * Obtains the subscriber information. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo> } callback - Callback used to return the result. If
   *     the subscriber information is successfully obtained, **err** is **undefined** and **data** is the
   *     subscription information of the subscriber. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo>): void;

  /**
   * Obtains the subscriber information. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<CommonEventSubscribeInfo|null> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @since 23 static
   */
  getSubscribeInfo(callback: AsyncCallback<CommonEventSubscribeInfo|null>): void;

  /**
   * Obtains the subscriber information. This API uses a promise to return the result.
   *
   * @returns { Promise<CommonEventSubscribeInfo> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo>;

  /**
   * Obtains the subscriber information. This API uses a promise to return the result.
   *
   * @returns { Promise<CommonEventSubscribeInfo|null> } Promise used to return the result.
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform
   * @since 23 static
   */
  getSubscribeInfo(): Promise<CommonEventSubscribeInfo|null>;

  /**
   * Obtains the subscriber information. This API returns the result synchronously.
   *
   * @returns { CommonEventSubscribeInfo } Subscriber information.
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  getSubscribeInfoSync(): CommonEventSubscribeInfo;

  /**
   * Obtains the subscriber information. This API returns the result synchronously.
   *
   * @returns { CommonEventSubscribeInfo|null } Subscriber information.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 23 static
   */
  getSubscribeInfoSync(): CommonEventSubscribeInfo|null;

  /**
   * Finishes this ordered common event. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the subscriber
   *     successfully finishes this ordered common event, **err** is **undefined**; otherwise, **err** is
   *     an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9 dynamic
   * @since 23 static
   */
  finishCommonEvent(callback: AsyncCallback<void>): void;

  /**
   * Finishes this ordered common event. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 9 dynamic
   * @since 23 static
   */
  finishCommonEvent(): Promise<void>;
}