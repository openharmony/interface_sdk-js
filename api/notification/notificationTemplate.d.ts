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
 * @file Describes a NotificationTemplate instance
 * @kit NotificationKit
 */

/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * This module defines the notification template, which is used to specify the template type for a notification.
 *
 * > **NOTE**
 * >
 * > The initial APIs of this module are supported since API version 8. Newly added APIs will be marked with a
 * > superscript to indicate their earliest API version.
 * > The predefined system templates are supported. You only need to provide the template name and related data for
 * > the system to automatically render the notification style that complies with the specifications.
 * > Application scenario: Currently, only the upload and download scenarios are supported.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface NotificationTemplate {
  /**
   * Template name. Currently, only the progress bar notification template indicating download progress is supported,
   * with the value **downloadTemplate**. The string length cannot exceed 202 bytes; any excess will be truncated.
   * It cannot be an empty string.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Template data.
   *
   * - **title**: Download title. Mandatory field, with the value being a string type.
   * - **fileName**: Download file name. Mandatory field, with the value being a string type.
   * - **progressValue**: Download progress, with the value being a numeric type. The recommended value range is 0
   * to 100, representing the percentage progress. When **progressValue** is less than or equal to 0, the progress is
   * 0; when it is greater than or equal to 100, the progress ring disappears, indicating that the download is
   * complete.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   */
  data: Record<string, Object>;

  /**
   * Template data.
   *
   * - **title**: Download title. Mandatory field, with the value being a string type.
   * - **fileName**: Download file name. Mandatory field, with the value being a string type.
   * - **progressValue**: Download progress, with the value being a numeric type. The recommended value range is 0
   * to 100, representing the percentage progress. When **progressValue** is less than or equal to 0, the progress is
   * 0; when it is greater than or equal to 100, the progress ring disappears, indicating that the download is
   * complete.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  data: Record<string, RecordData>;
}
