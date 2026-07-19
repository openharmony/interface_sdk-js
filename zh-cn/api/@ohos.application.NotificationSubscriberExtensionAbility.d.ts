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

import type NotificationSubscriberExtensionContext from './@ohos.application.NotificationSubscriberExtensionContext';
import { NotificationInfo } from './notification/NotificationInfo'

/**
 * NotificationSubscriberExtensionAbility是通知订阅者扩展能力的基类，提供通知订阅的相关功能。三方穿戴类应用（如手表配套应用）通过继承此类实现回调逻辑，在本机发布通知时接收通知信息并通过蓝牙转发给穿戴设备，在本机通知被取消时接收取消通知的回调并转发给穿戴设备删除对应通知。
 * 
 * 当穿戴类应用需要获取本机通知并同步到配对的穿戴设备时，使用本模块。本模块与notificationExtensionSubscription模块配合使用，本模块负责在回调中接收和处理通知数据，notificationExtensionSubscription模块负责授权、订阅和取消订阅等管理操作。
 * 
 * > **说明：**
 * >
 * > 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Notification.Notification
 * @stagemodelonly
 * @since 22 dynamic
 * @since 23 static
 */
declare class NotificationSubscriberExtensionAbility {
  /**
   * NotificationSubscriberExtensionAbility的上下文环境。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  context: NotificationSubscriberExtensionContext;
 
  /**
   * 通知订阅扩展被销毁时的回调。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onDestroy(): void;

  /**
   * 收到通知时回调。
   *
   * @param { NotificationInfo } notificationInfo - 通知订阅扩展能力中onReceiveMessage回调的通知信息。
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onReceiveMessage(notificationInfo: NotificationInfo): void;

  /**
   * 取消通知时的回调。
   *
   * @param { Array<string> } hashCodes - 要取消的通知的哈希码列表。通过onReceiveMessage获取。
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  onCancelMessages(hashCodes: Array<string>): void;
}

export default NotificationSubscriberExtensionAbility;
