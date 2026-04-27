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
 * 包含公共事件内容和属性。
 * 
 * > **说明：**
 * >
 * > 如果不加限制，任何应用都可以订阅公共事件并读取相关信息，应避免在公共事件中携带敏感信息。通过本模块的subscriberPermissions和bundleName参数，可以限制公共事件接收方的范围。
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventPublishData {
  /**
   * 表示订阅者包名称，只有包名为bundleName的订阅者才能收到该公共事件。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  bundleName?: string;

  /**
   * 表示发布方传递的公共事件数据（number类型）。默认值为0。
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
   * 表示发布方传递的公共事件数据（string类型）。数据大小不超过64KB。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  data?: string;

  /**
   * 表示订阅者的权限。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  subscriberPermissions?: Array<string>;

  /**
   * 表示是否是有序事件。默认为false。
   * 
   * - true：有序公共事件，根据订阅者设置的优先级等级，优先将公共事件发送给优先级较高的订阅者，等待其成功接收该公共事件之后再将事件发送给优先级较低的订阅者。如果有多个订阅者具有相同的优先级，则他们将随机接收到公共事件。
   * - false：无序公共事件，不考虑订阅者是否接收到该事件，也不保证订阅者接收到该事件的顺序与其订阅顺序一致。
   *
   * @default false
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isOrdered?: boolean;

  /**
   * 表示是否是粘性事件。默认为false。
   * 
   * - true：粘性公共事件，能够让订阅者收到在订阅前已经发送的公共事件。
   * - false：普通公共事件，只能让订阅者收到在订阅后才发送的公共事件。
   * 
   * 仅系统应用或系统服务允许发送粘性事件。
   *
   * @permission ohos.permission.COMMONEVENT_STICKY
   * @default false
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7 dynamic
   * @since 23 static
   */
  isSticky?: boolean;

  /**
   * 表示发布方传递的公共事件的附加信息。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  parameters?: { [key: string]: any };

  /**
   * 表示发布方传递的公共事件的附加信息。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 23 static
   */
  parameters?: Record<string, RecordData>;
}