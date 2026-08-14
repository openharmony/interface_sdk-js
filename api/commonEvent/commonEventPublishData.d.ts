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
 * @file The CommonEventPublishData module provides APIs for defining common event content and attributes.
 * @kit BasicServicesKit
 */

/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * This module encapsulates the data and attributes carried when a common event is
 * published, including the event data (code/data), subscriber permissions, subscriber
 * bundle name, whether the event is ordered or sticky, and additional parameters. It
 * allows the publisher to precisely control the common event recipients, event delivery
 * sequence, and sticky feature. This module is applicable to scenarios where the
 * recipients need to be specified, custom event data needs to be transferred, and
 * ordered/sticky common events need to be implemented.
 * 
 * > **NOTE**
 * >
 * > If there is no restriction, any app can subscribe to common events and read the
 * > information carried by the event. In this case, sensitive information should not be
 * > carried in common events. The **subscriberPermissions** and **bundleName** parameters
 * > of this module can be used to restrict the receiving scope of common events.
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventPublishData {
  /**
   * Bundle name of the subscriber, which is used to specify the subscriber to whom the
   * common event is published. This parameter is left empty by default. When this
   * parameter is empty, the bundle name of the subscriber is not specified, and all
   * subscribers can receive the common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  bundleName?: string;

  /**
   * Common event data transferred by the publisher. The default value is **0**.
   *
   * @default 0
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  code?: int;

  /**
   * Common event data transferred by the publisher. The value is a string and cannot
   * exceed 64 KB. If the value exceeds the limit, the event fails to be published. This
   * parameter is left empty by default.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  data?: string;

  /**
   * Subscriber permissions. Only subscribers with the specified permissions can receive
   * the common event. This parameter is left empty by default. When this parameter is
   * empty, the subscriber permissions are not specified, and all subscribers can receive
   * the common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  subscriberPermissions?: Array<string>;

  /**
   * Whether the common event is an ordered one. The default value is **false**.
   *
   * - **true**: This event is an ordered common event. Based on the priority set by the subscriber, the common event is
   * preferentially sent to the subscriber with a higher priority. After the subscriber successfully receives the event,
   * the public event is sent to the subscriber with a lower priority. Subscribers with the same priority receive common
   * events in a random order.
   * - **false**: This event is an unordered common event. Whether subscribers receive the event is not considered, and 
   * the common event which subscribers receive may not comply with the subscription sequence.
   *
   * @default false
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isOrdered?: boolean;

  /**
   * Whether the common event is a sticky one. The default value is **false**.
   *
   * - **true**: This event is a sticky common event, which allows subscribers to receive common events that have been 
   * sent before subscription.
   * - **false**: This event is not a sticky common event, which allows subscribers to receive common events sent after 
   * subscription.
   *
   * Only system applications and system services are allowed to send sticky events.
   *
   * **Required Permissions**: 
   * [ohos.permission.COMMONEVENT_STICKY](docroot://security/AccessToken/permissions-for-all.md#ohospermissioncommonevent_sticky)
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @default false
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isSticky?: boolean;

  /**
   * Additional information about the common event transferred by the publisher. Custom
   * parameters are configured in a key-value pair format. This parameter is left empty
   * by default.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 26.1.0]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  parameters?: { [key: string]: any };

  /**
   * Additional information about the common event transferred by the publisher. Custom
   * parameters are configured in a key-value pair format. This parameter is left empty
   * by default.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 23 static
   */
  parameters?: Record<string, RecordData>;
}