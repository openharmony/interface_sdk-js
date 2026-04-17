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
 * @file
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';
import { CommonEventData } from './commonEvent/commonEventData';
import { CommonEventSubscriber } from './commonEvent/commonEventSubscriber';
import { CommonEventSubscribeInfo } from './commonEvent/commonEventSubscribeInfo';
import { CommonEventPublishData } from './commonEvent/commonEventPublishData';

/**
 * 本模块提供了公共事件的能力，包括公共事件的权限列表，发布公共事件，订阅或取消订阅公共事件，获取或修改公共事件结果代码、结果数据等。
 *
 * @syscap SystemCapability.Notification.CommonEvent
 * @since 7
 * @deprecated since 9
 * @useinstead @ohos.commonEventManager:commonEventManager
 */
declare namespace commonEvent {
  /**
   * 发布公共事件（回调形式）。
   *
   * @param { string } event - 表示要发送的公共事件。
   * @param { AsyncCallback<void> } callback - 表示指定的回调方法。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.publish(event: string, callback: AsyncCallback<void>)
   */
  function publish(event: string, callback: AsyncCallback<void>): void;

  /**
   * 以回调的形式发布公共事件。
   *
   * @param { string } event - 表示要发布的公共事件。
   * @param { CommonEventPublishData } options - 表示发布公共事件的属性。
   * @param { AsyncCallback<void> } callback - 表示指定的回调方法。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)
   */
  function publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>): void;

  /**
   * 以回调的形式向指定用户发布公共事件。
   *
   * > **说明：**
   * > > 从 API version 8开始支持，从API version 9开始废弃。建议使用
   * > [commonEventManager.publishAsUser]{@link @ohos.commonEventManager:commonEventManager.publishAsUser(event: string, userId: int, callback: AsyncCallback<void>)}
   * > 替代。
   *
   * @param { string } event - 表示要发送的公共事件。
   * @param { number } userId - 表示指定向该用户ID发送此公共事件。
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.publishAsUser(event: string, userId: int, callback: AsyncCallback<void>)
   */
  function publishAsUser(event: string, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 以回调形式向指定用户发布公共事件并指定发布信息。
   *
   * > **说明：**
   * > > 从 API version 8开始支持，从API version 9开始废弃。建议使用
   * > [commonEventManager.publishAsUser]{@link @ohos.commonEventManager:commonEventManager.publishAsUser( event: string, userId: int, options: CommonEventPublishData, callback: AsyncCallback<void> )}
   * > 替代。
   *
   * @param { string } event - 表示要发布的公共事件。
   * @param { number } userId - 表示指定向该用户ID发送此公共事件。
   * @param { CommonEventPublishData } options - 表示发布公共事件的属性。
   * @param { AsyncCallback<void> } callback - 表示被指定的回调方法。
   * @syscap SystemCapability.Notification.CommonEvent
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.publishAsUser( event: string, userId: int, options: CommonEventPublishData, callback: AsyncCallback<void> )
   */
  function publishAsUser(
    event: string,
    userId: number,
    options: CommonEventPublishData,
    callback: AsyncCallback<void>
  ): void;

  /**
   * 以回调形式创建订阅者。
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - 表示订阅信息。
   * @param { AsyncCallback<CommonEventSubscriber> } callback - 表示创建订阅者的回调方法。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.createSubscriber( subscribeInfo: CommonEventSubscribeInfo, callback: AsyncCallback<CommonEventSubscriber> )
   */
  function createSubscriber(
    subscribeInfo: CommonEventSubscribeInfo,
    callback: AsyncCallback<CommonEventSubscriber>
  ): void;

  /**
   * 以Promise形式创建订阅者。
   *
   * @param { CommonEventSubscribeInfo } subscribeInfo - 表示订阅信息。
   * @returns { Promise<CommonEventSubscriber> } Returns common event subscriber object
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.createSubscriber(subscribeInfo: CommonEventSubscribeInfo)
   */
  function createSubscriber(subscribeInfo: CommonEventSubscribeInfo): Promise<CommonEventSubscriber>;

  /**
   * 以回调形式订阅公共事件。
   *
   * @param { CommonEventSubscriber } subscriber - 表示订阅者对象。
   * @param { AsyncCallback<CommonEventData> } callback - 表示接收公共事件数据的回调函数。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.subscribe
   */
  function subscribe(subscriber: CommonEventSubscriber, callback: AsyncCallback<CommonEventData>): void;

  /**
   * 以回调形式取消订阅公共事件。
   *
   * @param { CommonEventSubscriber } subscriber - 表示订阅者对象。
   * @param { AsyncCallback<void> } [callback] - 表示取消订阅的回调方法。
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.unsubscribe
   */
  function unsubscribe(subscriber: CommonEventSubscriber, callback?: AsyncCallback<void>): void;

  /**
   * 系统公共事件是指由系统服务或系统应用发布的事件，订阅这些系统公共事件需要特定的权限。发布或订阅这些事件需要使用如下链接中的枚举定义。
   *
   * 全部系统公共事件枚举定义请参见[系统公共事件定义]{@link @ohos.commonEvent:commonEvent}。
   *
   * @syscap SystemCapability.Notification.CommonEvent
   * @since 7
   * @deprecated since 9
   * @useinstead @ohos.commonEventManager:commonEventManager.Support
   */
  export enum Support {
    /**
     * 提示用户已完成引导并加载系统。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVER_STARTUP_COMPLETED权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BOOT_COMPLETED
     */
    COMMON_EVENT_BOOT_COMPLETED = 'usual.event.BOOT_COMPLETED',

    /**
     * （预留事件，暂未支持）提示用户已完成引导，系统已加载，但屏幕仍锁定。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_LOCKED_BOOT_COMPLETED
     */
    COMMON_EVENT_LOCKED_BOOT_COMPLETED = 'usual.event.LOCKED_BOOT_COMPLETED',

    /**
     * 提示设备正在关闭并将继续直至最终关闭。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_SHUTDOWN
     */
    COMMON_EVENT_SHUTDOWN = 'usual.event.SHUTDOWN',

    /**
     * 提示电池充电状态、电量和其他信息发生变化。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BATTERY_CHANGED
     */
    COMMON_EVENT_BATTERY_CHANGED = 'usual.event.BATTERY_CHANGED',

    /**
     * 提示电池电量低。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BATTERY_LOW
     */
    COMMON_EVENT_BATTERY_LOW = 'usual.event.BATTERY_LOW',

    /**
     * 提示电池退出低电量状态。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BATTERY_OKAY
     */
    COMMON_EVENT_BATTERY_OKAY = 'usual.event.BATTERY_OKAY',

    /**
     * 提示设备连接到外部电源。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_POWER_CONNECTED
     */
    COMMON_EVENT_POWER_CONNECTED = 'usual.event.POWER_CONNECTED',

    /**
     * 提示设备与外部电源断开。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_POWER_DISCONNECTED
     */
    COMMON_EVENT_POWER_DISCONNECTED = 'usual.event.POWER_DISCONNECTED',

    /**
     * 提示设备屏幕关闭且设备处于睡眠状态。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_SCREEN_OFF
     */
    COMMON_EVENT_SCREEN_OFF = 'usual.event.SCREEN_OFF',

    /**
     * 提示设备屏幕打开且设备处于交互状态。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_SCREEN_ON
     */
    COMMON_EVENT_SCREEN_ON = 'usual.event.SCREEN_ON',

    /**
     * 提示设备热状态（温度等级）发生变化。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_THERMAL_LEVEL_CHANGED
     */
    COMMON_EVENT_THERMAL_LEVEL_CHANGED = 'usual.event.THERMAL_LEVEL_CHANGED',

    /**
     * （预留事件，暂未支持）提示用户解锁了设备。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_PRESENT
     */
    COMMON_EVENT_USER_PRESENT = 'usual.event.USER_PRESENT',

    /**
     * 提示系统时间发生更改（指时间正常流逝）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_TIME_TICK
     */
    COMMON_EVENT_TIME_TICK = 'usual.event.TIME_TICK',

    /**
     * 提示系统时间被重新设置。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_TIME_CHANGED
     */
    COMMON_EVENT_TIME_CHANGED = 'usual.event.TIME_CHANGED',

    /**
     * （预留事件，暂未支持）提示系统日期已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DATE_CHANGED
     */
    COMMON_EVENT_DATE_CHANGED = 'usual.event.DATE_CHANGED',

    /**
     * 提示系统时区发生变更。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_TIMEZONE_CHANGED
     */
    COMMON_EVENT_TIMEZONE_CHANGED = 'usual.event.TIMEZONE_CHANGED',

    /**
     * （预留事件，暂未支持）提示用户关闭临时系统对话框。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_CLOSE_SYSTEM_DIALOGS
     */
    COMMON_EVENT_CLOSE_SYSTEM_DIALOGS = 'usual.event.CLOSE_SYSTEM_DIALOGS',

    /**
     * 提示设备上已安装新应用程序包。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_ADDED
     */
    COMMON_EVENT_PACKAGE_ADDED = 'usual.event.PACKAGE_ADDED',

    /**
     * （预留事件，暂未支持）提示设备上已安装的旧版本应用程序已被新版本所替换。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_REPLACED
     */
    COMMON_EVENT_PACKAGE_REPLACED = 'usual.event.PACKAGE_REPLACED',

    /**
     * （预留事件，暂未支持）提示应用程序包的新版本已取代前一个版本。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_MY_PACKAGE_REPLACED
     */
    COMMON_EVENT_MY_PACKAGE_REPLACED = 'usual.event.MY_PACKAGE_REPLACED',

    /**
     * 提示已安装的应用程序已从设备卸载，但应用程序数据得到保留的。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_REMOVED
     */
    COMMON_EVENT_PACKAGE_REMOVED = 'usual.event.PACKAGE_REMOVED',

    /**
     * （预留事件，暂未支持）提示已从设备中卸载已安装应用程序的附加包，但应用程序数据得到保留。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BUNDLE_REMOVED
     */
    COMMON_EVENT_BUNDLE_REMOVED = 'usual.event.BUNDLE_REMOVED',

    /**
     * （预留事件，暂未支持）提示已从设备中完全卸载已安装的应用程序（包括应用程序数据和代码）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_FULLY_REMOVED
     */
    COMMON_EVENT_PACKAGE_FULLY_REMOVED = 'usual.event.PACKAGE_FULLY_REMOVED',

    /**
     * 提示应用程序包已发生更改（例如，包中的组件已启用或禁用）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_CHANGED
     */
    COMMON_EVENT_PACKAGE_CHANGED = 'usual.event.PACKAGE_CHANGED',

    /**
     * 提示用户终止了应用程序的所有进程并重启应用程序。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_RESTARTED
     */
    COMMON_EVENT_PACKAGE_RESTARTED = 'usual.event.PACKAGE_RESTARTED',

    /**
     * 提示用户清除了应用包数据。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_DATA_CLEARED
     */
    COMMON_EVENT_PACKAGE_DATA_CLEARED = 'usual.event.PACKAGE_DATA_CLEARED',

    /**
     * （预留事件，暂未支持）提示应用程序已挂起。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGES_SUSPENDED
     */
    COMMON_EVENT_PACKAGES_SUSPENDED = 'usual.event.PACKAGES_SUSPENDED',

    /**
     * （预留事件，暂未支持）提示应用HAP包未挂起（从挂起状态恢复）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGES_UNSUSPENDED
     */
    COMMON_EVENT_PACKAGES_UNSUSPENDED = 'usual.event.PACKAGES_UNSUSPENDED',

    /**
     * 提示应用HAP包被挂起的。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_MY_PACKAGE_SUSPENDED
     */
    COMMON_EVENT_MY_PACKAGE_SUSPENDED = 'usual.event.MY_PACKAGE_SUSPENDED',

    /**
     * 提示应用包未挂起。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_MY_PACKAGE_UNSUSPENDED
     */
    COMMON_EVENT_MY_PACKAGE_UNSUSPENDED = 'usual.event.MY_PACKAGE_UNSUSPENDED',

    /**
     * （预留事件，暂未支持）提示用户ID已从系统中删除。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_UID_REMOVED
     */
    COMMON_EVENT_UID_REMOVED = 'usual.event.UID_REMOVED',

    /**
     * （预留事件，暂未支持）提示首次启动已安装的应用程序。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_FIRST_LAUNCH
     */
    COMMON_EVENT_PACKAGE_FIRST_LAUNCH = 'usual.event.PACKAGE_FIRST_LAUNCH',

    /**
     * （预留事件，暂未支持）提示应用需要系统校验。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_NEEDS_VERIFICATION
     */
    COMMON_EVENT_PACKAGE_NEEDS_VERIFICATION = 'usual.event.PACKAGE_NEEDS_VERIFICATION',

    /**
     * （预留事件，暂未支持）提示应用已被系统校验。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_PACKAGE_VERIFIED
     */
    COMMON_EVENT_PACKAGE_VERIFIED = 'usual.event.PACKAGE_VERIFIED',

    /**
     * （预留事件，暂未支持）提示安装在外部存储上的应用程序对系统可用。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_EXTERNAL_APPLICATIONS_AVAILABLE
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_AVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_AVAILABLE',

    /**
     * （预留事件，暂未支持）提示安装在外部存储上的应用程序对系统不可用。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManage/commonEventManager.Support#COMMON_EVENT_EXTERNAL_APPLICATIONS_UNAVAILABLE
     */
    COMMON_EVENT_EXTERNAL_APPLICATIONS_UNAVAILABLE = 'usual.event.EXTERNAL_APPLICATIONS_UNAVAILABLE',

    /**
     * （预留事件，暂未支持）提示设备状态（例如，方向、区域设置等）已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_CONFIGURATION_CHANGED
     */
    COMMON_EVENT_CONFIGURATION_CHANGED = 'usual.event.CONFIGURATION_CHANGED',

    /**
     * （预留事件，暂未支持）提示设备区域设置已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_LOCALE_CHANGED
     */
    COMMON_EVENT_LOCALE_CHANGED = 'usual.event.LOCALE_CHANGED',

    /**
     * （预留事件，暂未支持）提示设备存储空间不足。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_MANAGE_PACKAGE_STORAGE
     */
    COMMON_EVENT_MANAGE_PACKAGE_STORAGE = 'usual.event.MANAGE_PACKAGE_STORAGE',

    /**
     * （预留事件，暂未支持）提示系统处于驾驶模式。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DRIVE_MODE
     */
    COMMON_EVENT_DRIVE_MODE = 'common.event.DRIVE_MODE',

    /**
     * （预留事件，暂未支持）提示系统处于HOME模式。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_HOME_MODE
     */
    COMMON_EVENT_HOME_MODE = 'common.event.HOME_MODE',

    /**
     * （预留事件，暂未支持）提示系统处于办公模式。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_OFFICE_MODE
     */
    COMMON_EVENT_OFFICE_MODE = 'common.event.OFFICE_MODE',

    /**
     * （预留事件，暂未支持）提示用户已启动。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_STARTED
     */
    COMMON_EVENT_USER_STARTED = 'usual.event.USER_STARTED',

    /**
     * （预留事件，暂未支持）提示用户已被带到后台。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_BACKGROUND
     */
    COMMON_EVENT_USER_BACKGROUND = 'usual.event.USER_BACKGROUND',

    /**
     * （预留事件，暂未支持）提示用户已被带到前台。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_FOREGROUND
     */
    COMMON_EVENT_USER_FOREGROUND = 'usual.event.USER_FOREGROUND',

    /**
     * 提示用户正在切换。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_SWITCHED
     */
    COMMON_EVENT_USER_SWITCHED = 'usual.event.USER_SWITCHED',

    /**
     * （预留事件，暂未支持）提示用户正在启动。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_STARTING
     */
    COMMON_EVENT_USER_STARTING = 'usual.event.USER_STARTING',

    /**
     * （预留事件，暂未支持）在重启后解锁时，提示当前用户的凭据加密存储已解锁。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_UNLOCKED
     */
    COMMON_EVENT_USER_UNLOCKED = 'usual.event.USER_UNLOCKED',

    /**
     * （预留事件，暂未支持）提示要停止用户。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_STOPPING
     */
    COMMON_EVENT_USER_STOPPING = 'usual.event.USER_STOPPING',

    /**
     * （预留事件，暂未支持）提示用户已停止。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_STOPPED
     */
    COMMON_EVENT_USER_STOPPED = 'usual.event.USER_STOPPED',

    /**
     * 表示分布式账号登录成功的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGIN
     */
    COMMON_EVENT_HWID_LOGIN = 'common.event.HWID_LOGIN',

    /**
     * 表示分布式账号登出成功的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOUT
     */
    COMMON_EVENT_HWID_LOGOUT = 'common.event.HWID_LOGOUT',

    /**
     * 表示分布式账号token令牌无效的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISTRIBUTED_ACCOUNT_TOKEN_INVALID
     */
    COMMON_EVENT_HWID_TOKEN_INVALID = 'common.event.HWID_TOKEN_INVALID',

    /**
     * 表示分布式账号注销的动作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISTRIBUTED_ACCOUNT_LOGOFF
     */
    COMMON_EVENT_HWID_LOGOFF = 'common.event.HWID_LOGOFF',

    /**
     * 提示Wi-Fi功能状态的变更，如启用或禁用。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_POWER_STATE
     */
    COMMON_EVENT_WIFI_POWER_STATE = 'usual.event.wifi.POWER_STATE',

    /**
     * 提示Wi-Fi接入点已被扫描并证明可用。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.LOCATION权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_SCAN_FINISHED
     */
    COMMON_EVENT_WIFI_SCAN_FINISHED = 'usual.event.wifi.SCAN_FINISHED',

    /**
     * 提示Wi-Fi信号强度（RSSI）改变。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_RSSI_VALUE
     */
    COMMON_EVENT_WIFI_RSSI_VALUE = 'usual.event.wifi.RSSI_VALUE',

    /**
     * 提示Wi-Fi连接状态发生改变。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_CONN_STATE
     */
    COMMON_EVENT_WIFI_CONN_STATE = 'usual.event.wifi.CONN_STATE',

    /**
     * 提示Wi-Fi热点功能状态的变更，如启用或禁用。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_HOTSPOT_STATE
     */
    COMMON_EVENT_WIFI_HOTSPOT_STATE = 'usual.event.wifi.HOTSPOT_STATE',

    /**
     * 提示有客户端加入当前设备Wi-Fi热点。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_AP_STA_JOIN
     */
    COMMON_EVENT_WIFI_AP_STA_JOIN = 'usual.event.wifi.WIFI_HS_STA_JOIN',

    /**
     * 提示客户端已断开与当前设备Wi-Fi热点的连接。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_AP_STA_LEAVE
     */
    COMMON_EVENT_WIFI_AP_STA_LEAVE = 'usual.event.wifi.WIFI_HS_STA_LEAVE',

    /**
     * 提示MPLink（增强Wi-Fi功能）状态已更改（暂不支持）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_MPLINK_STATE_CHANGE
     */
    COMMON_EVENT_WIFI_MPLINK_STATE_CHANGE = 'usual.event.wifi.mplink.STATE_CHANGE',

    /**
     * 提示Wi-Fi P2P连接状态改变。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO和ohos.permission.LOCATION权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_P2P_CONN_STATE
     */
    COMMON_EVENT_WIFI_P2P_CONN_STATE = 'usual.event.wifi.p2p.CONN_STATE_CHANGE',

    /**
     * 提示Wi-Fi P2P状态发生变更，如启用和禁用。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_P2P_STATE_CHANGED
     */
    COMMON_EVENT_WIFI_P2P_STATE_CHANGED = 'usual.event.wifi.p2p.STATE_CHANGE',

    /**
     * 提示Wi-Fi P2P对等体状态变化。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_P2P_PEERS_STATE_CHANGED
     */
    COMMON_EVENT_WIFI_P2P_PEERS_STATE_CHANGED = 'usual.event.wifi.p2p.DEVICES_CHANGE',

    /**
     * 提示Wi-Fi P2P发现状态变化。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_P2P_PEERS_DISCOVERY_STATE_CHANGED
     */
    COMMON_EVENT_WIFI_P2P_PEERS_DISCOVERY_STATE_CHANGED = 'usual.event.wifi.p2p.PEER_DISCOVERY_STATE_CHANGE',

    /**
     * 提示Wi-Fi P2P当前设备状态变化。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_P2P_CURRENT_DEVICE_STATE_CHANGED
     */
    COMMON_EVENT_WIFI_P2P_CURRENT_DEVICE_STATE_CHANGED = 'usual.event.wifi.p2p.CURRENT_DEVICE_CHANGE',

    /**
     * 提示Wi-Fi P2P群组信息已更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_WIFI_INFO权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_WIFI_P2P_GROUP_STATE_CHANGED
     */
    COMMON_EVENT_WIFI_P2P_GROUP_STATE_CHANGED = 'usual.event.wifi.p2p.GROUP_STATE_CHANGED',

    /**
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CONNECT_STATE_UPDATE =
      'usual.event.bluetooth.handsfree.ag.CONNECT_STATE_UPDATE',

    /**
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CURRENT_DEVICE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_CURRENT_DEVICE_UPDATE =
      'usual.event.bluetooth.handsfree.ag.CURRENT_DEVICE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙A2DP连接状态已更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_AUDIO_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREE_AG_AUDIO_STATE_UPDATE = 'usual.event.bluetooth.handsfree.ag.AUDIO_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙A2DP连接状态。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CONNECT_STATE_UPDATE = 'usual.event.bluetooth.a2dpsource.CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示使用蓝牙A2DP连接的设备处于活动状态。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CURRENT_DEVICE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CURRENT_DEVICE_UPDATE = 'usual.event.bluetooth.a2dpsource.CURRENT_DEVICE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙A2DP播放状态发生改变。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAYING_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_PLAYING_STATE_UPDATE = 'usual.event.bluetooth.a2dpsource.PLAYING_STATE_UPDATE',

    /**
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_AVRCP_CONNECT_STATE_UPDATE =
      'usual.event.bluetooth.a2dpsource.AVRCP_CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙A2DP音频编解码状态更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSOURCE_CODEC_VALUE_UPDATE = 'usual.event.bluetooth.a2dpsource.CODEC_VALUE_UPDATE',

    /**
     * （预留事件，暂未支持）提示发现远程蓝牙设备。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.LOCATION和ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_DISCOVERED
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_DISCOVERED = 'usual.event.bluetooth.remotedevice.DISCOVERED',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备的蓝牙类别已更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CLASS_VALUE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CLASS_VALUE_UPDATE = 'usual.event.bluetooth.remotedevice.CLASS_VALUE_UPDATE',

    /**
     * （预留事件，暂未支持）提示已与远程蓝牙设备建立低级别（ACL）连接。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_CONNECTED
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_CONNECTED = 'usual.event.bluetooth.remotedevice.ACL_CONNECTED',

    /**
     * （预留事件，暂未支持）提示低级别（ACL）连接已从远程蓝牙设备断开。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_DISCONNECTED
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_ACL_DISCONNECTED = 'usual.event.bluetooth.remotedevice.ACL_DISCONNECTED',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备的友好名称首次被检索或自上次检索以来被更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_NAME_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_NAME_UPDATE = 'usual.event.bluetooth.remotedevice.NAME_UPDATE',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备连接状态更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIR_STATE = 'usual.event.bluetooth.remotedevice.PAIR_STATE',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备的电池电量首次被检索或自上次检索以来被更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_BATTERY_VALUE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_BATTERY_VALUE_UPDATE = 'usual.event.bluetooth.remotedevice.BATTERY_VALUE_UPDATE',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备SDP状态。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_SDP_RESULT
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_SDP_RESULT = 'usual.event.bluetooth.remotedevice.SDP_RESULT',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备UUID连接状态。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.DISCOVER_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_UUID_VALUE
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_UUID_VALUE = 'usual.event.bluetooth.remotedevice.UUID_VALUE',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备配对请求。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.DISCOVER_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_REQ
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_REQ = 'usual.event.bluetooth.remotedevice.PAIRING_REQ',

    /**
     * （预留事件，暂未支持）提示取消蓝牙配对。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_CANCEL
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_PAIRING_CANCEL = 'usual.event.bluetooth.remotedevice.PAIRING_CANCEL',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备连接请求。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REQ
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REQ = 'usual.event.bluetooth.remotedevice.CONNECT_REQ',

    /**
     * （预留事件，暂未支持）提示远程蓝牙设备连接请求响应。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REPLY
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_REPLY = 'usual.event.bluetooth.remotedevice.CONNECT_REPLY',

    /**
     * （预留事件，暂未支持）提示取消与远程蓝牙设备的连接。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_CANCEL
     */
    COMMON_EVENT_BLUETOOTH_REMOTEDEVICE_CONNECT_CANCEL = 'usual.event.bluetooth.remotedevice.CONNECT_CANCEL',

    /**
     * （预留事件，暂未支持）提示蓝牙免提连接状态已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_CONNECT_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_CONNECT_STATE_UPDATE = 'usual.event.bluetooth.handsfreeunit.CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙免提音频状态已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AUDIO_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AUDIO_STATE_UPDATE = 'usual.event.bluetooth.handsfreeunit.AUDIO_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙免提音频网关状态已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_COMMON_EVENT
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_COMMON_EVENT = 'usual.event.bluetooth.handsfreeunit.AG_COMMON_EVENT',

    /**
     * （预留事件，暂未支持）提示蓝牙免提呼叫状态已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_CALL_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HANDSFREEUNIT_AG_CALL_STATE_UPDATE = 'usual.event.bluetooth.handsfreeunit.AG_CALL_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙适配器状态已更改，例如蓝牙已打开或关闭。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HOST_STATE_UPDATE = 'usual.event.bluetooth.host.STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示用户允许扫描蓝牙请求。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_REQ_DISCOVERABLE
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISCOVERABLE = 'usual.event.bluetooth.host.REQ_DISCOVERABLE',

    /**
     * （预留事件，暂未支持）提示用户打开蓝牙请求。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_REQ_ENABLE
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_ENABLE = 'usual.event.bluetooth.host.REQ_ENABLE',

    /**
     * （预留事件，暂未支持）提示用户关闭蓝牙请求。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_REQ_DISABLE
     */
    COMMON_EVENT_BLUETOOTH_HOST_REQ_DISABLE = 'usual.event.bluetooth.host.REQ_DISABLE',

    /**
     * （预留事件，暂未支持）提示设备蓝牙扫描模式更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HOST_SCAN_MODE_UPDATE = 'usual.event.bluetooth.host.SCAN_MODE_UPDATE',

    /**
     * （预留事件，暂未支持）提示设备上已启动蓝牙扫描。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_STARTED
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_STARTED = 'usual.event.bluetooth.host.DISCOVERY_STARTED',

    /**
     * （预留事件，暂未支持）提示设备上蓝牙扫描完成。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_FINISHED
     */
    COMMON_EVENT_BLUETOOTH_HOST_DISCOVERY_FINISHED = 'usual.event.bluetooth.host.DISCOVERY_FINISHED',

    /**
     * （预留事件，暂未支持）提示设备蓝牙适配器名称已更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_HOST_NAME_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_HOST_NAME_UPDATE = 'usual.event.bluetooth.host.NAME_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙A2DP宿的连接状态已更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSINK_CONNECT_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_CONNECT_STATE_UPDATE = 'usual.event.bluetooth.a2dpsink.CONNECT_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙A2DP宿的播放状态发生改变。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSINK_PLAYING_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_PLAYING_STATE_UPDATE = 'usual.event.bluetooth.a2dpsink.PLAYING_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示蓝牙A2DP宿的音频状态已更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.USE_BLUETOOTH权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_BLUETOOTH_A2DPSINK_AUDIO_STATE_UPDATE
     */
    COMMON_EVENT_BLUETOOTH_A2DPSINK_AUDIO_STATE_UPDATE = 'usual.event.bluetooth.a2dpsink.AUDIO_STATE_UPDATE',

    /**
     * （预留事件，暂未支持）提示设备NFC适配器状态已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_NFC_ACTION_ADAPTER_STATE_CHANGED
     */
    COMMON_EVENT_NFC_ACTION_ADAPTER_STATE_CHANGED = 'usual.event.nfc.action.ADAPTER_STATE_CHANGED',

    /**
     * （预留事件，暂未支持）提示检测到NFC设备RF字段处于使能状态。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_SECURE_SETTINGS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_NFC_ACTION_RF_FIELD_ON_DETECTED
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_ON_DETECTED = 'usual.event.nfc.action.RF_FIELD_ON_DETECTED',

    /**
     * （预留事件，暂未支持）提示检测到NFC设备RF字段处于关闭状态。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_SECURE_SETTINGS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_NFC_ACTION_RF_FIELD_OFF_DETECTED
     */
    COMMON_EVENT_NFC_ACTION_RF_FIELD_OFF_DETECTED = 'usual.event.nfc.action.RF_FIELD_OFF_DETECTED',

    /**
     * 提示系统停止为电池充电。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISCHARGING
     */
    COMMON_EVENT_DISCHARGING = 'usual.event.DISCHARGING',

    /**
     * 提示系统开始为电池充电。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_CHARGING
     */
    COMMON_EVENT_CHARGING = 'usual.event.CHARGING',

    /**
     * （预留事件，暂未支持）提示系统空闲模式已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DEVICE_IDLE_MODE_CHANGED
     */
    COMMON_EVENT_DEVICE_IDLE_MODE_CHANGED = 'usual.event.DEVICE_IDLE_MODE_CHANGED',

    /**
     * 提示系统节能模式更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_POWER_SAVE_MODE_CHANGED
     */
    COMMON_EVENT_POWER_SAVE_MODE_CHANGED = 'usual.event.POWER_SAVE_MODE_CHANGED',

    /**
     * 提示用户已添加到系统中。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_ADDED
     */
    COMMON_EVENT_USER_ADDED = 'usual.event.USER_ADDED',

    /**
     * 提示用户已从系统中删除。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.MANAGE_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USER_REMOVED
     */
    COMMON_EVENT_USER_REMOVED = 'usual.event.USER_REMOVED',

    /**
     * （预留事件，暂未支持）提示有某个能力已被添加。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.LISTEN_BUNDLE_CHANGE权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_ABILITY_ADDED
     */
    COMMON_EVENT_ABILITY_ADDED = 'common.event.ABILITY_ADDED',

    /**
     * （预留事件，暂未支持）提示已删除某个能力。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.LISTEN_BUNDLE_CHANGE权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_ABILITY_REMOVED
     */
    COMMON_EVENT_ABILITY_REMOVED = 'common.event.ABILITY_REMOVED',

    /**
     * （预留事件，暂未支持）提示能力已更新。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.LISTEN_BUNDLE_CHANGE权限。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_ABILITY_UPDATED
     */
    COMMON_EVENT_ABILITY_UPDATED = 'common.event.ABILITY_UPDATED',

    /**
     * （预留事件，暂未支持）提示系统定位模式已更改。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_LOCATION_MODE_STATE_CHANGED
     */
    COMMON_EVENT_LOCATION_MODE_STATE_CHANGED = 'usual.event.location.MODE_STATE_CHANGED',

    /**
     * （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统正在休眠。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_SLEEP
     */
    COMMON_EVENT_IVI_SLEEP = 'common.event.IVI_SLEEP',

    /**
     * （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统已休眠，并通知应用程序停止播放。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_PAUSE
     */
    COMMON_EVENT_IVI_PAUSE = 'common.event.IVI_PAUSE',

    /**
     * （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统中的第三方应用暂停当前工作。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_STANDBY
     */
    COMMON_EVENT_IVI_STANDBY = 'common.event.IVI_STANDBY',

    /**
     * （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统中的第三方应用保存其最后一个模式。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_LASTMODE_SAVE
     */
    COMMON_EVENT_IVI_LASTMODE_SAVE = 'common.event.IVI_LASTMODE_SAVE',

    /**
     * （预留事件，暂未支持）提示车辆电源系统电压异常。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_VOLTAGE_ABNORMAL
     */
    COMMON_EVENT_IVI_VOLTAGE_ABNORMAL = 'common.event.IVI_VOLTAGE_ABNORMAL',

    /**
     * （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统温度过高。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_HIGH_TEMPERATURE
     */
    COMMON_EVENT_IVI_HIGH_TEMPERATURE = 'common.event.IVI_HIGH_TEMPERATURE',

    /**
     * （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统温度极高。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_EXTREME_TEMPERATURE
     */
    COMMON_EVENT_IVI_EXTREME_TEMPERATURE = 'common.event.IVI_EXTREME_TEMPERATURE',

    /**
     * （预留事件，暂未支持）提示车辆的车载信息娱乐（IVI）系统具有极端温度。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL
     */
    COMMON_EVENT_IVI_TEMPERATURE_ABNORMAL = 'common.event.IVI_TEMPERATURE_ABNORMAL',

    /**
     * （预留事件，暂未支持）提示车辆电源系统电压恢复正常。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_VOLTAGE_RECOVERY
     */
    COMMON_EVENT_IVI_VOLTAGE_RECOVERY = 'common.event.IVI_VOLTAGE_RECOVERY',

    /**
     * （预留事件，暂未支持）提示车载系统温度恢复正常。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_TEMPERATURE_RECOVERY
     */
    COMMON_EVENT_IVI_TEMPERATURE_RECOVERY = 'common.event.IVI_TEMPERATURE_RECOVERY',

    /**
     * （预留事件，暂未支持）提示车载系统电池服务处于活动状态。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_IVI_ACTIVE
     */
    COMMON_EVENT_IVI_ACTIVE = 'common.event.IVI_ACTIVE',

    /**
     * 当用户设备作为USB主机时，提示USB设备已挂载。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USB_DEVICE_ATTACHED
     */
    COMMON_EVENT_USB_DEVICE_ATTACHED = 'usual.event.hardware.usb.action.USB_DEVICE_ATTACHED',

    /**
     * 当用户设备作为USB主机时，提示USB设备被卸载。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USB_DEVICE_DETACHED
     */
    COMMON_EVENT_USB_DEVICE_DETACHED = 'usual.event.hardware.usb.action.USB_DEVICE_DETACHED',

    /**
     * （预留事件，暂未支持）提示已连接USB附件。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USB_ACCESSORY_ATTACHED
     */
    COMMON_EVENT_USB_ACCESSORY_ATTACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_ATTACHED',

    /**
     * （预留事件，暂未支持）提示USB附件被卸载。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_USB_ACCESSORY_DETACHED
     */
    COMMON_EVENT_USB_ACCESSORY_DETACHED = 'usual.event.hardware.usb.action.USB_ACCESSORY_DETACHED',

    /**
     * （预留事件，暂未支持）提示外部存储设备状态变更为移除。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISK_REMOVED
     */
    COMMON_EVENT_DISK_REMOVED = 'usual.event.data.DISK_REMOVED',

    /**
     * （预留事件，暂未支持）提示外部存储设备状态变更为卸载。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISK_UNMOUNTED
     */
    COMMON_EVENT_DISK_UNMOUNTED = 'usual.event.data.DISK_UNMOUNTED',

    /**
     * （预留事件，暂未支持）提示外部存储设备状态变更为挂载。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISK_MOUNTED
     */
    COMMON_EVENT_DISK_MOUNTED = 'usual.event.data.DISK_MOUNTED',

    /**
     * （预留事件，暂未支持）提示外部存储设备在挂载状态下被移除。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISK_BAD_REMOVAL
     */
    COMMON_EVENT_DISK_BAD_REMOVAL = 'usual.event.data.DISK_BAD_REMOVAL',

    /**
     * （预留事件，暂未支持）提示外部存储设备在插卡情况下无法挂载。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISK_UNMOUNTABLE
     */
    COMMON_EVENT_DISK_UNMOUNTABLE = 'usual.event.data.DISK_UNMOUNTABLE',

    /**
     * （预留事件，暂未支持）提示用户已作出弹出外部存储介质的操作（系统软件层面的交互操作，非直接物理弹出）。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.STORAGE_MANAGER权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_DISK_EJECT
     */
    COMMON_EVENT_DISK_EJECT = 'usual.event.data.DISK_EJECT',

    /**
     * （预留事件，暂未支持）提示账户发生可见性的更改。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.GET_APP_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_VISIBLE_ACCOUNTS_UPDATED
     */
    COMMON_EVENT_VISIBLE_ACCOUNTS_UPDATED = 'usual.event.data.VISIBLE_ACCOUNTS_UPDATED',

    /**
     * （预留事件，暂未支持）提示有账户被删除。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_ACCOUNT_DELETED
     */
    COMMON_EVENT_ACCOUNT_DELETED = 'usual.event.data.ACCOUNT_DELETED',

    /**
     * （预留事件，暂未支持）提示foundation已准备好。
     *
     * 要订阅此事件，您的应用必须具备ohos.permission.RECEIVER_STARTUP_COMPLETED权限（该权限仅系统应用可申请）。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_FOUNDATION_READY
     */
    COMMON_EVENT_FOUNDATION_READY = 'common.event.FOUNDATION_READY',

    /**
     * 提示设备飞行模式发生了切换。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_AIRPLANE_MODE_CHANGED
     */
    COMMON_EVENT_AIRPLANE_MODE_CHANGED = 'usual.event.AIRPLANE_MODE',

    /**
     * 提示分屏。
     *
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.commonEventManager:commonEventManager.Support#COMMON_EVENT_SPLIT_SCREEN
     */
    COMMON_EVENT_SPLIT_SCREEN = 'common.event.SPLIT_SCREEN'
  }
}

export default commonEvent;