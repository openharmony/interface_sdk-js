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
 * @file Describes an action button displayed in a notification
 * @kit NotificationKit
 */

import { NotificationUserInput } from './notificationUserInput';
/*** if arkts dynamic */
import { WantAgent } from '../@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { WantAgent } from '../@ohos.app.ability.wantAgent';
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * The **NotificationActionButton** module defines the action buttons displayed in a notification. It is used to add
 * interactive action buttons in NotificationRequest, allowing users to trigger a **WantAgent** action by tapping the
 * button. This module is used when you need to provide interactive action buttons (such as **Reply** and
 * **Mark as read**) in a notification.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationActionButton {
  /**
   * Title of the button, displayed on the action button of the notification. The string length cannot exceed 202
   * bytes; the excess part will be truncated. It cannot be an empty string.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  title: string;

  /**
   * **WantAgent** triggered when the button is tapped, which encapsulates the application's behavioral intent. After
   * the user taps the button, the system will execute the action in the method specified by the **WantAgent** (such
   * as navigating to a specified UIAbility or sending a common event).
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  wantAgent: WantAgent;

  /**
   * Extended information of the button. The default value is empty.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   */
  extras?: { [key: string]: any };

  /**
   * Extended information of the button. The default value is empty.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  extras?: Record<string, RecordData>;

  /**
   * User input object. This parameter is left empty by default. ID entered by a subscriber.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  userInput?: NotificationUserInput;
}
