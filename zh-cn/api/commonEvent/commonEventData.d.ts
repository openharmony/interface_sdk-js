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
 * 表示公共事件的数据。
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventData {
  /**
   * 表示当前接收的公共事件名称。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  event: string;

  /**
   * 表示包名称，默认为空字符串。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  bundleName?: string;

  /**
   * 表示订阅者接收到的公共事件数据（number类型）。该字段取值与发布者使用
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * 发布公共事件时，通过[CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}中的`code`字段传递的数据一致。默认值为0。
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
   * 表示订阅者接收到的公共事件数据（string类型）。该字段取值与发布者使用
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * 发布公共事件时，通过[CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}中的`data`字段传递的数据一致。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  data?: string;

  /**
   * 表示订阅者接收到的公共事件的附加信息。该字段取值与发布者使用
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * 发布公共事件时，通过[CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}中的`parameters`字段传递的数据一致。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  parameters?: { [key: string]: any };

  /**
   * 表示订阅者接收到的公共事件的附加信息。该字段取值与发布者使用
   * [commonEventManager.publish]{@link ./../@ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * 发布公共事件时，通过[CommonEventPublishData]{@link commonEventPublishData:CommonEventPublishData}中的`parameters`字段传递的数据一致。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 23 static
   */
  parameters?: Record<string, RecordData>;
}