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
 * NotificationActionButton模块定义了通知中显示的操作按钮，用于在[NotificationRequest](@link ./notificationRequest::NotificationRequest)中添加
 * 交互式操作按钮，让用户通过点击按钮触发WantAgent动作。当开发者需要在通知中提供交互式操作
 * 按钮（如"回复"、"标记已读"等）时使用此模块。
 *
 * > **说明：**
 * >
 * > 本模块首批接口从API version 7开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 7 dynamic
 * @since 23 static
 */
export interface NotificationActionButton {
  /**
   * 按钮标题，显示在通知的操作按钮上。字符串长度不超过202字节，超出部分会被截断。不可为空字符串。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  title: string;

  /**
   * 点击按钮时触发的WantAgent，封装了应用的行为意图。用户点击按钮后，系统将按WantAgent指定的方式
   * 执行动作（如跳转至指定UIAbility或发送公共事件）。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   * @since 23 static
   */
  wantAgent: WantAgent;

  /**
   * 按钮扩展信息。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 7 dynamic
   */
  extras?: { [key: string]: any };

  /**
   * 按钮扩展信息。默认为空。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 23 static
   */
  extras?: Record<string, RecordData>;

  /**
   * 用户输入对象实例，默认为空。表示用户输入时的标识。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 8 dynamic
   * @since 23 static
   */
  userInput?: NotificationUserInput;
}
