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
import { BundleOption as _BundleOption } from './notification/NotificationCommonDef';
import {
  NotificationExtensionSubscriptionInfo as _NotificationExtensionSubscriptionInfo
} from './notification/NotificationExtensionSubscriptionInfo';
import { NotificationInfo as _NotificationInfo } from './notification/NotificationInfo';

/**
 * Manages notifications extension subscription.
 * 
 * @namespace notificationExtensionSubscription
 * @syscap SystemCapability.Notification.Notification
 * @since 22
 * @arkts 1.1&1.2
 */
declare namespace notificationExtensionSubscription {
  
  /**
   * Opens the notification extension subscriber settings page of the application, which is displayed in semi-modal mode
   * and can be used to set the notification enabling and notification mode.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600018 - the notification settings window is already displayed.
   * @throws { BusinessError } 1600023 - The application does not implement the NotificationSubscriberExtensionAbility.
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  function openSubscriptionSettings(context: UIAbilityContext): Promise<void>;

  /**
   * Subscribe the notification when the bluetooth addr is connected.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { NotificationExtensionSubscriptionInfo[] } info - The info to be subscribe.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600023 - The application does not implement the NotificationSubscriberExtensionAbility.
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  function subscribe(info: NotificationExtensionSubscriptionInfo[]): Promise<void>;

  /**
   * Unsubscribe the notification.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  function unsubscribe(): Promise<void>;

  /**
   * Obtains the subscribe info for app.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<NotificationExtensionSubscriptionInfo[]> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  function getSubscribeInfo(): Promise<NotificationExtensionSubscriptionInfo[]>;

  /**
   * Obtains the list of bundleOption which granted by user.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<BundleOption[]> } Returns all enabled notification extension subscription applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  function getAllSubscriptionBundles(): Promise<BundleOption[]>;

  /**
   * Obtains whether the notification extension subscription is enabled.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  function isUserGranted(): Promise<boolean>;

  /**
   * Obtains whether the notification extension subscription is enabled.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - The bundle option to be query.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  function getUserGrantedState(targetBundle: BundleOption): Promise<boolean>;

  /**
   * Set the notification extension subscription state.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - The bundle option.
   * @param { boolean } enabled - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  function setUserGrantedState(targetBundle: BundleOption, enabled: boolean): Promise<void>;

  /**
   * Obtains the list of bundleOptions that have been granted by the user to targetBundle.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle -  The bundle option to be queried.
   * @returns { Promise<BundleOption[]> } Return the list of bundle option which is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  function getUserGrantedEnabledBundles(targetBundle: BundleOption): Promise<BundleOption[]>;

  /**
   * Obtains the list of bundleNames that have been granted by the user.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<string[]> } Return the list of bundleName which is enabled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  function getUserGrantedEnabledBundles(): Promise<string[]>;

  /**
   * Set the bundleOption of the extensionAbility to be subscribe or unsubscribe.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - The bundle option to be set.
   * @param { BundleOption[] } enabledBundles - The bundle option to be config.
   * @param { boolean } enabled - Set enable or not.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application to call the interface.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @throws { BusinessError } 1600022 - The specified bundle is invalid.
   * @syscap SystemCapability.Notification.Notification
   * @systemapi
   * @since 22
   * @arkts 1.1&1.2
   */
  function setUserGrantedBundleState(targetBundle: BundleOption,
    enabledBundles: BundleOption[], enabled: boolean): Promise<void>;

  /**
   * Enum for notification extension subscribe type.
   *
   * @enum { number }
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  export enum SubscribeType {
    /**
     * Subscribe notification extension by bluetooth.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 22
     * @arkts 1.1&1.2
     */
    BLUETOOTH = 0
  }

  /**
   * Describes a bundleOption.
   *
   * @typedef { _BundleOption } BundleOption
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  export type BundleOption = _BundleOption;

  /**
   * the notification extension subscription info.
   *
   * @typedef { _NotificationExtensionSubscriptionInfo } NotificationExtensionSubscriptionInfo
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  export type NotificationExtensionSubscriptionInfo = _NotificationExtensionSubscriptionInfo;

  /**
   * Describes the notification extension info.
   *
   * @typedef { _NotificationInfo } NotificationInfo
   * @syscap SystemCapability.Notification.Notification
   * @since 22
   * @arkts 1.1&1.2
   */
  export type NotificationInfo = _NotificationInfo;
}

export default notificationExtensionSubscription;