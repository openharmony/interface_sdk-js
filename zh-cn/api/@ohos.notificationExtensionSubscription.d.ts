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

import type UIAbilityContext from './application/UIAbilityContext';
import { BundleOption as _BundleOption,
  GrantedBundleInfo as _GrantedBundleInfo,
  UserGrantSetting as _UserGrantSetting } from './notification/NotificationCommonDef';
import {
  NotificationExtensionSubscriptionInfo as _NotificationExtensionSubscriptionInfo
} from './notification/NotificationExtensionSubscriptionInfo';
import { NotificationInfo as _NotificationInfo } from './notification/NotificationInfo';

/**
 * 本模块提供管理通知扩展的能力，具体包括：打开通知扩展订阅设置界面、订阅和取消订阅通知扩展、获取和设置通知授权状态。
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
declare namespace notificationExtensionSubscription {
  
  /**
   * 打开应用的通知扩展订阅授权页面，以半模态弹窗形式显示。用户可在该页面授权“允许获取本机通知”开关与“已获取的本机通知”应用开关。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { UIAbilityContext } context - 通知设置页面绑定Ability的上下文。
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600018 - The notification settings window is already displayed.
   * @throws { BusinessError } 1600023 - The application does not implement the NotificationSubscriberExtensionAbility.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function openSubscriptionSettings(context: UIAbilityContext): Promise<void>;

  /**
   * 打开应用的通知扩展订阅授权页面，以半模态弹窗形式显示。用户可在该页面授权“允许获取本机通知”开关与“已获取的本机通知”应用开关。
   * 使用Promise异步回调，当半模态窗口关闭时返回用户设置的授权的结果。
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { UIAbilityContext } context - 通知设置页面绑定Ability的上下文。
   * @returns { Promise<UserGrantSetting> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600018 - The notification settings window is already displayed.
   * @throws { BusinessError } 1600023 - The application does not implement the NotificationSubscriberExtensionAbility.
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function openSubscriptionSettingsWithResult(context: UIAbilityContext): Promise<UserGrantSetting>;

  /**
   * 订阅通知扩展。使用[蓝牙模块](docroot://connectivity/connectivity-kit-intro.md#蓝牙简介)相关接口获取蓝牙设备的唯一地址后
   * 方可订阅。使用Promise异步回调。
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { NotificationExtensionSubscriptionInfo[] } info - 订阅的信息列表（数组）。
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600023 - The application does not implement the NotificationSubscriberExtensionAbility.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function subscribe(info: NotificationExtensionSubscriptionInfo[]): Promise<void>;

  /**
   * 取消通知扩展的订阅。使用Promise异步回调。
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function unsubscribe(): Promise<void>;

  /**
   * 获取当前应用的通知扩展订阅信息。使用Promise异步回调。
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<NotificationExtensionSubscriptionInfo[]> } Promise对象，返回一个
   *     [NotificationExtensionSubscriptionInfo]{@link ./notification/NotificationExtensionSubscriptionInfo:NotificationExtensionSubscriptionInfo}
   *     对象数组，表示应用的订阅信息。
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function getSubscribeInfo(): Promise<NotificationExtensionSubscriptionInfo[]>;

  /**
   * 获取所有具有ohos.permission.SUBSCRIBE_NOTIFICATION权限并且实现了
   * [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}的应用列表。
   * 使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<BundleOption[]> } Promise对象，返回所有具有ohos.permission.SUBSCRIBE_NOTIFICATION的应用列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function getAllSubscriptionBundles(): Promise<BundleOption[]>;

  /**
   * 查询“允许获取本机通知”的开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<boolean> } Promise对象。返回true表示功能已启用；返回false表示功能未启用。
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function isUserGranted(): Promise<boolean>;

  /**
   * 查询指定应用的“允许获取本机通知”的开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - 需要查询的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，
   * 并且实现[NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility},
   * 否则返回1600022错误码。
   * @returns { Promise<boolean> } Promise对象，返回true表示目标应用的“允许获取本机通知”状态已启用；
   * 返回false表示目标应用的“允许获取本机通知”状态未启用。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function getUserGrantedState(targetBundle: BundleOption): Promise<boolean>;

  /**
   * 设置指定应用的“允许获取本机通知”的开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - 需要设置的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，
   * 并且实现[NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility},
   * 否则返回1600022错误码。
   * @param { boolean } enabled - 表示应用的“允许获取本机通知”的开关状态，true表示启用，false表示未启用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function setUserGrantedState(targetBundle: BundleOption, enabled: boolean): Promise<void>;

  /**
   * 获取指定应用中“已获取的本机通知”通知开关开启的应用列表。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle -  需要设置的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，
   * 并且实现[NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility},
   * 否则返回1600022错误码。
   * @returns { Promise<BundleOption[]> } Promise对象，返回指定应用中“已获取的本机通知”通知开关开启的应用列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function getUserGrantedEnabledBundles(targetBundle: BundleOption): Promise<BundleOption[]>;

  /**
   * 获取指定应用中“已获取的本机通知”通知开关开启的应用列表。使用Promise异步回调。
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<GrantedBundleInfo[]> } Promise对象，返回获取指定应用中“已获取的本机通知”通知开关开启的应用列表。
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function getUserGrantedEnabledBundles(): Promise<GrantedBundleInfo[]>;

  /**
   * 设置指定应用中“已获取的本机通知”的应用通知开关状态。使用Promise异步回调。
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - 需要设置的目标应用信息。应用需要具有ohos.permission.SUBSCRIBE_NOTIFICATION权限，
   * 并且实现[NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility},
   * 否则返回1600022错误码。
   * @param { BundleOption[] } enabledBundles - 被授权的应用信息列表。
   * @param { boolean } enabled - 表示“已获取的本机通知”的应用授权状态是否启用，true表示已启用，false表示未启用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function setUserGrantedBundleState(targetBundle: BundleOption,
    enabledBundles: BundleOption[], enabled: boolean): Promise<void>;

  /**
   * 表示通知扩展订阅的类型。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export enum SubscribeType {
    /**
     * 通过蓝牙订阅通知。
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 22 dynamic
     * @since 23 static
     */
    BLUETOOTH = 0
  }

  /**
   * 指定应用的包信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type BundleOption = _BundleOption;

  /**
   * 授权应用的包信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type GrantedBundleInfo = _GrantedBundleInfo;

  /**
   * 用户授权的设置信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type UserGrantSetting = _UserGrantSetting;

  /**
   * 用于描述通知扩展订阅的信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type NotificationExtensionSubscriptionInfo = _NotificationExtensionSubscriptionInfo;

  /**
   * 通知订阅扩展能力中
   * [onReceiveMessage]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility.onReceiveMessage}
   * 回调的通知信息。
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type NotificationInfo = _NotificationInfo;
}

export default notificationExtensionSubscription;
