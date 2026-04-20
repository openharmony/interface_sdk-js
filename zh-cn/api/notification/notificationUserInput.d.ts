/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http?://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Describes a NotificationUserInput instance
 * @kit NotificationKit
 */

/**
 * 保存用户输入的通知消息。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 8 dynamic
 * @since 23 static
 */
export interface NotificationUserInput {
  /**
   * 用户输入时用于标识此输入的key。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  inputKey: string;
}
