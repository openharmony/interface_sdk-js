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

/**
 * 通知扩展内容。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
export interface NotificationExtensionContent {
  /**
   * 通知标题。不能为空且不能超过1024字节，超出内容将被截断。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  title: string;

  /**
   * 通知内容。不能为空且不能超过3072字节，超出内容将被截断。
   *
   * @syscap SystemCapability.Notification.Notification
   * @crossplatform
   * @since 22 dynamic
   * @since 23 static
   */
  text: string;
}
