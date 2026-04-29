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
 * @file The CommonEventSubscribeInfo module provides APIs for providing subscriber information.
 * @kit BasicServicesKit
 */

/**
 * The **CommonEventSubscribeInfo** module provides APIs for providing subscriber information.
 *
 * > **NOTE**
 * >
 * > After users subscribing to custom common events, any application can send potential malicious common events to
 * > subscribers. Use the **publisherPermission** and **publisherBundleName** parameters of this module to restrict the
 * > publishing scope of common events.
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventSubscribeInfo {
  /**
   * Common events to subscribe to.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  events: Array<string>;

  /**
   * Permission of the publisher. The subscriber can receive only the events from the publisher with this permission.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherPermission?: string;

  /**
   * Device ID. Use [@ohos.deviceInfo]{@link ./../@ohos.deviceInfo:deviceInfo} to obtain the UDID as the device ID of
   * the subscriber. Not supported currently.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherDeviceId?: string;

  /**
   * User ID. If this parameter is not specified, the default value, which is the ID of the current user, will be used.
   * The value must be an existing user ID in the system. Use
   * [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   * to obtain the system account ID and use it as the user ID of the subscriber.
   *
   * @type { ?number } [since 7 - 10]
   * @type { ?int } [since 11]
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * Subscriber priority. The value ranges from ¨C100 to +1000. If the value exceeds the upper or lower limit, the upper
   * or lower limit is used.
   *
   * @type { ?number } [since 7 - 10]
   * @type { ?int } [since 11]
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  priority?: int;

  /**
   * Bundle name of the publisher to subscribe to.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  publisherBundleName?: string;
}