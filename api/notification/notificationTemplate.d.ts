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
 * The **NotificationTemplate** module describes the notification template.
 * 
 * > **NOTE**
 * >
 * > The predefined system templates are supported. You only need to provide the template name and related data for the 
 * > system to automatically render the notification style that complies with the specifications.
 * > > Application scenario: Currently, only the upload and download scenarios are supported.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface NotificationTemplate {
  /**
   * Template name. Currently, only **downloadTemplate** is supported, indicating the progress bar template that 
   * displays download progress.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  name: string;

  /**
   * Template data.
   * 
   * - **title**: title of the file. This parameter is mandatory, and the value is of the string type.
   * - **fileName**: name of the file to be downloaded. This parameter is mandatory, and the value is of the string 
   * type.
   * - **progressValue**: download progress. The value is a number.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   */
  data: Record<string, Object>;

  /**
   * Template data.
   * 
   * - **title**: title of the file. This parameter is mandatory, and the value is of the string type.
   * - **fileName**: name of the file to be downloaded. This parameter is mandatory, and the value is of the string 
   * type.
   * - **progressValue**: download progress. The value is a number.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  data: Record<string, RecordData>;
}
