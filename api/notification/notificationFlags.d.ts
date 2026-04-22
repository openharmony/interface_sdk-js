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
 * @file The NotificationFlags module implements a NotificationFlags instance.
 * @kit NotificationKit
 */

/**
 * Enumerates the notification flag states.
 *
 * @syscap SystemCapability.Notification.Notification
 * @systemapi [since 8 - 10]
 * @publicapi [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export enum NotificationFlagStatus {
  /**
   * Default flag, which has the same effect as **TYPE_OPEN**.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 8 - 10]
   * @publicapi [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  TYPE_NONE = 0,

  /**
   * The notification flag is enabled.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi [since 8 - 10]
   * @publicapi [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  TYPE_OPEN = 1,

  /**
   * The notification flag is disabled.
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
 * Defines the notification flags.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface NotificationFlags {
  /**
   * Settings of sound for the notification. The default value is **TYPE_NONE**. This parameter becomes writable 
   * starting from API version 23. Only [TYPE_CLOSE]{@link NotificationFlagStatus} takes effect.
   *
   * @readonly [since 8 - 22]
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  soundEnabled?: NotificationFlagStatus;

  /**
   * Settings of vibration for the notification. The default value is **TYPE_NONE**. This parameter becomes writable 
   * starting from API version 23. Only [TYPE_CLOSE]{@link NotificationFlagStatus} takes effect.
   *
   * @readonly [since 8 - 22]
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  vibrationEnabled?: NotificationFlagStatus;

  /**
   * Settings of banner for the notification. The default value is **TYPE_NONE**. Only 
   * [TYPE_CLOSE]{@link NotificationFlagStatus} takes effect.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  bannerEnabled?: NotificationFlagStatus;

  /**
   * Settings of screen lock for the notification. The default value is **TYPE_NONE**. Only 
   * [TYPE_CLOSE]{@link NotificationFlagStatus} takes effect.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 dynamic&static
   */
  lockScreenEnabled?: NotificationFlagStatus;

  /**
   * Settings of the input information reminder features.
   * 
   * This is a system API.
   * 
   * - Bit 0: sound alert. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 1: locking the screen. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 2: banner. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 3: turning on the screen. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 4: vibration. The value **0** means to enable the feature, and **1** means the opposite.
   * - Bit 5: notification icon in the status bar. The value **0** means to enable the feature, and **1** means the 
   * opposite.
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  readonly reminderFlags?: long;
}
