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
 * This module provides APIs for providing subscriber information. It allows you to
 * configure parameters such as the subscribed common event type, publisher permission,
 * publisher device ID, user ID, and subscription priority. This module is applicable to
 * scenarios where an app needs to subscribe to system common events or custom common
 * events and requires refined control over event sources.
 * 
 * > **NOTE**
 * >
 * > After users subscribing to custom common events, any application can send potential
 * > malicious common events to subscribers. The **publisherPermission** and
 * > **publisherBundleName** parameters of this module can be used to restrict the publisher
 * > scope of common events.
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
   * Permission of the publisher. The value is an array of permission names defined by the
   * system. This parameter specifies that the subscriber can only receive the common events
   * from publishers with this permission. If this parameter is left empty, the subscriber can
   * receive common events from all publishers.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherPermission?: string;

  /**
   * Device ID, which is used to restrict the subscriber to receive only public events
   * published by the specified device. Use [@ohos.deviceInfo]{@link ./../@ohos.deviceInfo:deviceInfo}
   * to obtain the UDID as the device ID of the publisher. Not supported currently.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherDeviceId?: string;

  /**
   * User ID, which is used to restrict the subscriber to receive only public events related
   * to the specified user ID. If this parameter is not specified, the default value, which
   * is the ID of the current user, will be used. The value must be an existing user ID in
   * the system. Use
   * [getOsAccountLocalId]{@link ../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId}
   * to obtain the system user ID and use it as the user ID of the publisher.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * Subscriber priority. A larger value indicates a higher priority, and the subscriber
   * with a higher priority receives ordered public events first. The value ranges from
   * –100 to 1000. If the value exceeds the upper or lower limit, the upper or lower limit
   * is used. The default value is **0**.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  priority?: int;

  /**
   * Bundle name of the publisher to be subscribed to. This parameter is used to restrict
   * the subscriber to receive only public events published by the publisher with the
   * specified bundle name. If this parameter is not set, the subscriber can receive all
   * public events published by the app.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  publisherBundleName?: string;
}