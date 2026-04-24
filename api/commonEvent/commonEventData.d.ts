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
 * @file Common event data.
 * @kit BasicServicesKit
 */

/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * Describes the data of a common event.
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventData {
  /**
   * Name of the common event that is being received.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  event: string;

  /**
   * Bundle name. The default value is an empty string.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  bundleName?: string;

  /**
   * Common event data received by the subscriber. The value of this field is the same as that of the **code** field in
   * [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData} when the publisher uses
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * to publish a common event. The default value is **0**.
   *
   * @type { ?number } [since 7 - 10]
   * @type { ?int } [since 11]
   * @default 0
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  code?: int;

  /**
   * Common event data received by the subscriber. The value of this field is the same as that of the **data** field in
   * [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData} when the publisher uses
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * to publish a common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  data?: string;

  /**
   * Additional information about the common event received by the subscriber. The value of this field is the same as
   * that of the **parameters** field in [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}
   * when the publisher uses
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * to publish a common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  parameters?: { [key: string]: any };

  /**
   * Additional information about the common event received by the subscriber. The value of this field is the same as
   * that of the **parameters** field in [CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}
   * when the publisher uses
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * to publish a common event.
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 23 static
   */
  parameters?: Record<string, RecordData>;
}