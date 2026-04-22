/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file Some states and flags for notifications
 * @kit NotificationKit
 */

/**
 * 描述通知标志状态。
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi [since 8 - 10]
 * @publicapi [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export enum NotificationFlagStatus {
  /**
   * 默认标志，与TYPE_OPEN效果相同。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 8 - 10]
   * @publicapi [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  TYPE_NONE = 0,

  /**
   * 通知标志打开。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 8 - 10]
   * @publicapi [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  TYPE_OPEN = 1,

  /**
   * 通知标志关闭。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 8 - 10]
   * @publicapi [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  TYPE_CLOSE = 2
}

/**
 * 描述通知标志位。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface NotificationFlags {
  /**
   * 是否启用声音提示功能。默认值为TYPE_NONE。从API version 23开始成为可写参数，设置时仅[TYPE_CLOSE]{@link NotificationFlagStatus}会生效。
   *
   * @readonly [since 8 - 22]
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  soundEnabled?: NotificationFlagStatus;

  /**
   * 是否启用振动提醒功能。默认值为TYPE_NONE。从API version 23开始成为可写参数，设置时仅[TYPE_CLOSE]{@link NotificationFlagStatus}会生效。
   *
   * @readonly [since 8 - 22]
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  vibrationEnabled?: NotificationFlagStatus;

  /**
   * 是否启用横幅功能。默认值为TYPE_NONE。设置时仅[TYPE_CLOSE]{@link NotificationFlagStatus}会生效。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  bannerEnabled?: NotificationFlagStatus;

  /**
   * 是否启用锁屏功能。默认值为TYPE_NONE。设置时仅[TYPE_CLOSE]{@link NotificationFlagStatus}会生效。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  lockScreenEnabled?: NotificationFlagStatus;

  /**
   * 是否启用输入信息提示功能。
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
  readonly reminderFlags?: long;
}
