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
 * The **notificationExtensionSubscription** module provides capabilities for managing notification extension, including
 * opening the extension settings screen, subscribing to/unsubscribing from notification extension, and obtaining/
 * setting the notification authorization status.
 *
 * @syscap SystemCapability.Notification.Notification
 * @since 22 dynamic
 * @since 23 static
 */
declare namespace notificationExtensionSubscription {
  
  /**
   * Opens the settings screen of notification extension subscription in a semi-modal dialog box. On this screen, the 
   * user can toggle on the **Allow access to notifications on this device** switch and grant access to notifications 
   * for specified applications. This API uses a promise to return the result.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
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
   * Opens the settings screen of notification extension subscription in a semi-modal dialog box. On this screen, the 
   * user can toggle on the **Allow access to notifications on this device** switch and grant access to notifications 
   * for specified applications. This API uses a promise to return the result. When the semi-modal window is closed, the
   * user-defined authorization result is returned.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
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
   * Subscribes to the notification extension. You can subscribe to the notification extension only after obtaining the 
   * unique address of the Bluetooth device by calling the APIs related to the 
   * [Bluetooth modules](docroot://connectivity/connectivity-kit-intro.md#bluetooth). This API uses a promise to return 
   * the result.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @param { NotificationExtensionSubscriptionInfo[] } info - List of subscribed notifications (in array).
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
   * Unsubscribes from the notification extension. This API uses a promise to return the result.
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
   * Obtains the subscription information about the notification extension of this application. This API uses a promise 
   * to return the result.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<NotificationExtensionSubscriptionInfo[]> } Promise used to return the
   *     [NotificationExtensionSubscriptionInfo[]]{@link ./notification/NotificationExtensionSubscriptionInfo:NotificationExtensionSubscriptionInfo}
   *     array.
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function getSubscribeInfo(): Promise<NotificationExtensionSubscriptionInfo[]>;

  /**
   * Obtains all applications that have requested the ohos.permission.SUBSCRIBE_NOTIFICATION permission and implemented
   *     [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}.
   *     This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @returns { Promise<BundleOption[]> } Promise used to return the applications that have requested the
   *     ohos.permission.SUBSCRIBE_NOTIFICATION permission and implemented NotificationSubscriberExtensionAbility.
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
   * Checks whether the **Allow access to notifications on this device** switch is toggled on. This API uses a promise 
   * to return the result.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that this feature is
   *     enabled, and **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function isUserGranted(): Promise<boolean>;

  /**
   * Obtains the enabling state of the **Allow access to notifications on this device** switch
   * of a specified application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - Information about the target application. The application must have
   *     requested the ohos.permission.SUBSCRIBE_NOTIFICATION permission and implemented
   *     [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}.
   *     Otherwise, error code 1600022 is returned.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that
   *     the device notification access is enabled, and **false** indicates the opposite.
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
   * Sets the enabling state of the **Allow access to notifications on this device** switch for a specified application.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - Information about the target application. The application must have
   *     requested the ohos.permission.SUBSCRIBE_NOTIFICATION permission and implemented
   *     [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}.
   *     Otherwise, error code 1600022 is returned.
   * @param { boolean } enabled - Whether to enable the device notification access. The value **true** indicates that
   *     this functionality is enabled, and **false** indicates the opposite.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the applications that are allowed to access device notifications.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle -  Information about the target application.
   *     The application must have requested the ohos.permission.SUBSCRIBE_NOTIFICATION permission and implemented
   *     [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}.
   *     Otherwise, error code 1600022 is returned.
   * @returns { Promise<BundleOption[]> } Promise used to return the applications obtained.
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
   * Obtains the applications that are allowed to access device notifications. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.SUBSCRIBE_NOTIFICATION
   * @returns { Promise<GrantedBundleInfo[]> } Promise used to return the applications obtained.
   * @throws { BusinessError } 201 - Permission denied or current device not supported.
   * @throws { BusinessError } 1600001 - Internal error.
   * @throws { BusinessError } 1600003 - Failed to connect to the service.
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  function getUserGrantedEnabledBundles(): Promise<GrantedBundleInfo[]>;

  /**
   * Sets the enabling state of device notification access for the specified application.
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFICATION_CONTROLLER
   * @param { BundleOption } targetBundle - Information about the target application.
   *     The application must have requested the ohos.permission.SUBSCRIBE_NOTIFICATION permission and implemented
   *     [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}.
   *     Otherwise, error code 1600022 is returned.
   * @param { BundleOption[] } enabledBundles - Authorized applications.
   * @param { boolean } enabled - Whether the device notification access for the specified application is enabled.
   *     The value **true** indicates that this functionality is enabled, and **false** indicates the opposite.
   * @returns { Promise<void> } The promise returned by the function.
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
   * Describes the type that enables notification extension subscription.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export enum SubscribeType {
    /**
     * Bluetooth.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 22 dynamic
     * @since 23 static
     */
    BLUETOOTH = 0
  }

  /**
   * Describes the bundle information of an application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type BundleOption = _BundleOption;

  /**
   * Describes the bundle information of the authorized application.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type GrantedBundleInfo = _GrantedBundleInfo;

  /**
   * Describes the user authorization settings.
   *
   * @syscap SystemCapability.Notification.Notification
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type UserGrantSetting = _UserGrantSetting;

  /**
   * Describes the information about the notification extension subscription.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type NotificationExtensionSubscriptionInfo = _NotificationExtensionSubscriptionInfo;

  /**
   * Describes the notification information delivered to the 
   * [onReceiveMessage]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility.onReceiveMessage}
   * callback of ExtensionAbility for notification subscriptions.
   *
   * @syscap SystemCapability.Notification.Notification
   * @since 22 dynamic
   * @since 23 static
   */
  export type NotificationInfo = _NotificationInfo;
}

export default notificationExtensionSubscription;
