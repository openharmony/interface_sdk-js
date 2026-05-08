/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Sets filter criteria of publishers for subscribing to desired notifications
 * @kit NotificationKit
 */

import type notificationManager from '../@ohos.notificationManager';

/**
 * 通知发布者的信息。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSubscribeInfo {
  /**
   * 应用Bundle名称。 不传递该参数时，默认订阅所有应用的通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  bundleNames?: Array<string>;

  /**
   * 用户ID。 不传递该参数时，默认订阅所有用户ID的通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * 设备类型。不传递该参数时，默认订阅当前设备的通知。根据[设备信息]{@link ./../@ohos.deviceInfo:deviceInfo}获取。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  deviceType?: string;

  /**
   * 通知渠道类型。 不传递该参数时，默认订阅所有渠道类型的通知。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  slotTypes?: Array<notificationManager.SlotType>;

  /**
   * 通知过滤范围。默认值为0。取值范围包括：
   * 
   * - 0：不进行任何过滤，订阅全部通知。 
   * - 1：将渠道类型为[SOCIAL_COMMUNICATION]{@link ./../@ohos.notificationManager:notificationManager.SlotType}且
   * [userInput]{@link notificationActionButton:NotificationActionButton}为空的通知过滤掉。
   * - 2：将渠道类型为[SOCIAL_COMMUNICATION]{@link ./../@ohos.notificationManager:notificationManager.SlotType}且
   * [userInput]{@link notificationActionButton:NotificationActionButton}不为空的通知过滤掉。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  filterLimit?: long;
}
