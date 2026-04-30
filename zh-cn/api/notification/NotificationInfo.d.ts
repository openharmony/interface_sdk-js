
/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit NotificationKit
 */

import type notificationManager from '../@ohos.notificationManager';
import { NotificationExtensionContent } from './NotificationExtensionContent';

/**
 * 通知订阅扩展能力中
 * [onReceiveMessage]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility#onReceiveMessage}
 * 回调的通知信息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface NotificationInfo {
  /**
   * 通知的唯一标识符。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly hashCode: string;

  /**
   * 通知渠道类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly notificationSlotType: notificationManager.SlotType;

  /**
   * 通知内容。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly content: NotificationExtensionContent;
  
  /**
   * 创建通知的包名。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly bundleName: string;

  /**
   * 创建通知的应用程序名称。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appName?: string;

  /**
   * 通知发布的时间戳（毫秒数）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly deliveryTime?: long;

  /**
   * 通知组名称。默认情况下此参数为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly groupName?: string;

  /**
   * 创建通知的应用包的分身索引标识，仅在分身应用中生效。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  readonly appIndex: int;
}
