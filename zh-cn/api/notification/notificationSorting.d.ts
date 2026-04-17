/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file Provides sorting information about an active notification
 * @kit NotificationKit
 */

import { NotificationSlot } from './notificationSlot';

/**
 * 提供有关活动通知的排序信息。
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
export interface NotificationSorting {
  /**
   * 通道类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly slot: NotificationSlot;

  /**
   * 通知唯一标识。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly hashCode: string;

  /**
   * 通知级别，不设置则根据通知渠道类型有默认值。
   *
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  readonly ranking: long;
}
