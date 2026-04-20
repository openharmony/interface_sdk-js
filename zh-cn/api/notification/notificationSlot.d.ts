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
 * @file Description of the notification channel
 * @kit NotificationKit
 */

/*** if arkts dynamic */
import notification from '../@ohos.notification';
/*** endif */
/*** if arkts dynamic&static */
import type notificationManager from '../@ohos.notificationManager';
/*** endif */

/**
 * 描述通知渠道，不同通知渠道对应的通知提醒方式不同。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationSlot {
  /**
   * 通道类型。
   * 
   * 从API version 7开始支持，从API version 11开始废弃，建议使用notificationType替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead NotificationSlot#notificationType
   */
  type?: notification.SlotType;

  /**
   * 通道类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 11 dynamic
   * @since 23 static
   */
  notificationType?: notificationManager.SlotType;

  /**
   * 通知级别。
   * 
   * 从API version 7开始支持，从API version 20开始废弃，建议使用notificationLevel替代。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamiconly
   * @deprecated since 20
   * @useinstead NotificationSlot#notificationLevel
   */
  level?: notification.SlotLevel;

  /**
   * 通知级别。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 20 dynamic
   * @since 23 static
   */
  notificationLevel?: notificationManager.SlotLevel;

  /**
   * 通知渠道描述信息。大小不超过243字节，超出部分会被截取。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  desc?: string;

  /**
   * 是否显示角标。
   * 
   * - true：是。
   * - false：否。默认值为true。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  badgeFlag?: boolean;

  /**
   * 是否在系统中绕过免打扰模式。
   * 
   * - true：是。
   * - false：否。默认值为false。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  bypassDnd?: boolean;

  /**
   * 在锁定屏幕上显示通知的模式。预留能力，暂不支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lockscreenVisibility?: int;

  /**
   * 是否可振动。
   * 
   * - true：是。
   * - false：否。默认值为false。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationEnabled?: boolean;

  /**
   * 该渠道的通知的自定义铃声文件名。该文件放在resources/rawfile目录下，支持m4a、aac、mp3、ogg、wav、flac、amr等格式。大小不超过243字节，超出部分会被截取。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  sound?: string;

  /**
   * 是否闪灯。
   * 
   * - true：是。
   * - false：否。默认值为false。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightEnabled?: boolean;

  /**
   * 通知灯颜色。预留能力，暂不支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  lightColor?: int;

  /**
   * 通知振动样式。预留能力，暂不支持。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  vibrationValues?: Array<long>;

  /**
   * 表示是否允许发布此通知渠道的通知。
   * 
   * - true：允许。
   * - false：禁止。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 9 dynamic
   * @since 23 static
   */
  readonly enabled?: boolean;

  /**
   * 通知提醒模式。
   * 
   * 此接口为系统接口。 
   * 
   * - bit0：铃声提示。0表示关闭，1表示开启。 
   * - bit1：锁屏。0表示关闭，1表示开启。 
   * - bit2：横幅。0表示关闭，1表示开启。 
   * - bit3：亮屏。0表示关闭，1表示开启。 
   * - bit4：振动。0表示关闭，1表示开启。 
   * - bit5：状态栏通知图标。0表示关闭，1表示开启。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly reminderMode?: int;

  /**
   * 授权状态。
   * 
   * 此接口为系统接口。 
   * 
   * - 0：表示已授权。 
   * - 1：表示待授权。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  readonly authorizedStatus?: int;
}
