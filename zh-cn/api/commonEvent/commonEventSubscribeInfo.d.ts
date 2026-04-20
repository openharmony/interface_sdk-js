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
 * 用于表示订阅者的信息。
 * 
 * > **说明：**
 * >
 * > 订阅自定义公共事件后，任意应用都可以向订阅者发送潜在的恶意公共事件。通过本模块的publisherPermission和publisherBundleName参数，可以限制公共事件发布方的范围。
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface CommonEventSubscribeInfo {
  /**
   * 表示要订阅的公共事件。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  events: Array<string>;

  /**
   * 表示发布者的权限，订阅方将只能接收到具有该权限的发送方发布的事件。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherPermission?: string;

  /**
   * 表示设备ID。通过[@ohos.deviceInfo]{@link ./../@ohos.deviceInfo:deviceInfo}获取udid，作为订阅者的设备ID。预留能力，暂不支持。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  publisherDeviceId?: string;

  /**
   * 表示用户ID。此参数是可选的，默认值当前用户的ID。如果指定了此参数，则该值必须是系统中现有的用户ID。通过
   * [getOsAccountLocalId]{@link ./../@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   * 获取系统账号ID，作为订阅者的用户ID。
   *
   * @type { ?number } [since 7 - 10]
   * @type { ?int } [since 11]
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  userId?: int;

  /**
   * 表示订阅者的优先级。值的范围是-100到1000，超过上下限的优先级将被设置为上下限值。
   *
   * @type { ?number } [since 7 - 10]
   * @type { ?int } [since 11]
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  priority?: int;

  /**
   * 表示要订阅的发布者的bundleName。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  publisherBundleName?: string;
}