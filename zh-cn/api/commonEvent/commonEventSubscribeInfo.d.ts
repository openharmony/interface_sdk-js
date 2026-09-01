/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file The CommonEventSubscribeInfo module provides APIs for providing subscriber information.
 * @kit BasicServicesKit
 */

/**
 * 用于表示公共事件订阅者的信息，支持配置订阅的公共事件类型、发布者权限、
 * 发布者设备ID、用户ID、订阅优先级等参数，适用于应用需要订阅系统公共事件
 * 或自定义公共事件并精细化控制事件来源的场景。
 *
 * > **说明：**
 * >
 * > 订阅自定义公共事件后，任意应用都可以向订阅者发送潜在的恶意公共事件。通过本模块的publisherPermission和publisherBundleName参数，可以限制公共事件发布者的范围。
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventSubscribeInfo {
  /**
   * 表示要订阅的公共事件列表。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  events: Array<string>;

  /**
   * 表示发布者的权限，取值为系统已定义的权限名。用于限制订阅方只接收具有该
   * 权限的发布方发布的公共事件。不设置时，可接收所有发布方发布的公共事件。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherPermission?: string;

  /**
   * 表示设备ID，用于限制订阅者只接收来自指定设备发布的公共事件。
   * 通过[@ohos.deviceInfo]{@link ./../@ohos.deviceInfo:deviceInfo}获取udid，作为
   * 发布者的设备ID。预留能力，暂不支持。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherDeviceId?: string;

  /**
   * 表示用户ID，用于限制订阅者只接收指定用户ID相关的公共事件。此参数是可选的，
   * 默认值为当前用户的ID。如果指定了此参数，则该值必须是系统中现有的用户ID。通过
   * [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   * 获取系统用户ID，作为发布者的用户ID。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * 表示订阅者的优先级，数值越大，订阅者优先级越高，越优先接收到有序公共事件。
   * 取值范围是-100到1000，超过上下限的优先级将被设置为对应的上下限值，默认优先级为0。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  priority?: int;

  /**
   * 表示要订阅的发布者的bundleName，用于限制订阅方只接收该bundleName的发布者
   * 发布的公共事件。不设置时，可接收所有应用发布的公共事件。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  publisherBundleName?: string;
}