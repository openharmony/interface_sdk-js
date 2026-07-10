/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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
 * @kit MDMKit
 */

import type systemManager from './@ohos.enterprise.systemManager';
import common from './@ohos.enterprise.common';
import EnterpriseAdminExtensionContext from './application/EnterpriseAdminExtensionContext';

/**
 * 本模块提供[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#企业设备管理扩展能力)。
 *
 * 设备管理应用需要存在一个EnterpriseAdminExtensionAbility并重写相关接口，以此具备模块提供的各项能力，比如接收由系统发送的该应用被激活或者解除激活的通知。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @stagemodelonly
 * @since 12
 */
export default class EnterpriseAdminExtensionAbility {
  /**
   * EnterpriseAdminExtensionAbility的上下文。继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  context: EnterpriseAdminExtensionContext;

  /**
   * 当前设备管理应用被激活后，触发该回调。企业管理员或者员工部署并激活设备管理应用，系统通知设备管理应用已激活admin权限。设备管理应用可在此回调函数中进行初始化策略设置。无需注册，激活后默认触发该回调。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAdminEnabled(): void;

  /**
   * 当前设备管理应用被解除激活后，触发该回调。企业管理员或者员工解除激活设备管理，系统通知设备管理应用已解除激活admin权限。设备管理应用可在此回调函数中通知企业管理员设备已脱管。无需注册，解除激活后默认触发该回调。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAdminDisabled(): void;

  /**
   * 仅超级设备管理应用在普通设备管理应用被激活时会触发此回调。企业管理员或者员工部署并激活普通设备管理应用，系统通知超级设备管理应用已激活admin权限。超级设备管理应用可在此回调函数中进行初始化策略设置。不需要注册，激活后默认触发该
   * 回调。
   *
   * @param { string } bundleName - 被激活应用的包名。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onDeviceAdminEnabled(bundleName: string): void;

  /**
   * 仅超级设备管理应用在普通设备管理应用被解除激活时会触发此回调。企业管理员或者员工解除激活普通设备管理应用，系统通知超级设备管理应用已解除激活admin权限。超级设备管理应用可在此回调函数中通知企业管理员设备已脱管。不需要注册，解除
   * 激活后默认触发该回调。
   *
   * @param { string } bundleName - 被解除激活应用的包名。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onDeviceAdminDisabled(bundleName: string): void;

  /**
   * 应用安装事件回调，回调中包含应用包名。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_BUNDLE_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用安装事件，端侧应用安装事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { string } bundleName - 被安装应用的包名。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onBundleAdded(bundleName: string): void;

  /**
   * 应用卸载事件回调，回调中包含应用包名。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_BUNDLE_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用卸载事件，端侧应用卸载事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { string } bundleName - 被卸载应用的包名。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onBundleRemoved(bundleName: string): void;

  /**
   * 应用启动事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_APP_START事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用启动事件，端侧应用启动事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { string } bundleName - 启动应用的包名。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAppStart(bundleName: string): void;

  /**
   * 应用停止事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_APP_STOP事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用停止事件，端侧应用停止事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { string } bundleName - 停止应用的包名。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onAppStop(bundleName: string): void;

  /**
   * 系统更新事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_SYSTEM_UPDATE事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统更新事件，端侧系统更新事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { systemManager.SystemUpdateInfo } systemUpdateInfo - 系统更新的版本信息。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onSystemUpdate(systemUpdateInfo: systemManager.SystemUpdateInfo): void;

  /**
   * EnterpriseAdminExtensionAbility启动事件回调。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  onStart(): void;

  /**
   * 系统账号新增事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_ACCOUNT_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号新增事件，系统账号新增事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { number } accountId - 新增的用户ID。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  onAccountAdded(accountId: number): void;

  /**
   * 系统账号切换事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_ACCOUNT_SWITCHED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号切换事件，系统账号切换事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员
   * 。
   *
   * @param { number } accountId - 切换后的用户ID。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  onAccountSwitched(accountId: number): void;

  /**
   * 系统账号删除事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_ACCOUNT_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号删除事件，系统账号删除事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { number } accountId - 被删除的用户ID。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 18
   */
  onAccountRemoved(accountId: number): void;

  /**
   * 应用卸载事件回调，回调中包含应用包名和账号ID。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_BUNDLE_REMOVED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用卸载事件，端侧应用卸载事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { string } bundleName - 被卸载应用的包名。
   * @param { number } accountId - 被卸载应用所在的用户ID。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  onBundleRemoved(bundleName: string, accountId: number): void;

  /**
   * 应用安装事件回调，回调中包含应用包名和账号ID。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_BUNDLE_ADDED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅应用安装事件，端侧应用安装事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { string } bundleName - 被安装应用的包名。
   * @param { number } accountId - 被安装应用所在的用户ID。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  onBundleAdded(bundleName: string, accountId: number): void;

  /**
   * 应用更新事件回调，回调中包含应用包名和用户ID。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_BUNDLE_UPDATED事件才能收到此回调。企业设备管理场景下，设备管理应用可订阅所有用户下的应用更新事件，应用更新事件触发时会通知当前用户下的设备管理应用，设备管理应用可以在此回调函数中进行事
   * 件上报，通知主用户下的企业管理员。
   *
   * @param { string } bundleName - 被更新应用的包名。
   * @param { number } accountId - 被更新应用所在的用户ID
   *     <br>取值范围为全体整数。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  onBundleUpdated(bundleName: string, accountId: number): void;

  /**
   * 应用进入Kiosk模式回调，回调中包含应用包名和用户ID。
   *
   * Kiosk模式为系统层面提供的一种应用运行模式，该模式下会将设备锁定在单个应用或者一组应用运行，同时对锁屏状态、状态栏、手势操作和关键功能进行控制，防止用户在设备上启动其它应用或执行其它操作。
   *
   * @param { string } bundleName - 进入Kiosk模式应用的包名。
   * @param { number } accountId - 进入Kiosk模式应用所在的用户ID。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  onKioskModeEntering(bundleName: string, accountId: number): void;

  /**
   * 应用退出Kiosk模式回调，回调中包含应用包名和用户ID。
   *
   * @param { string } bundleName - 退出Kiosk模式应用的包名。
   * @param { number } accountId - 退出Kiosk模式应用所在的用户ID。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  onKioskModeExiting(bundleName: string, accountId: number): void;

  /**
   * 安装应用市场应用接口[bundleManager.installMarketApps]{@link @ohos.enterprise.bundleManager:bundleManager.installMarketApps}安装
   * 结果回调，回调中包含应用包名和安装结果。
   *
   * @param { string } bundleName - 应用市场应用包名。
   * @param { common.InstallationResult } result - 安装结果。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  onMarketAppInstallResult(bundleName: string, result: common.InstallationResult): void;

  /**
   * 开机向导完成事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_STARTUP_GUIDE_COMPLETED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅开机向导完成事件，端侧系统在首次切换子用户完成（仅限PC）、OTA升级完成、首次开机完成开机向导
   * 时会通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理员。
   *
   * @param { common.StartupScene } scene - 开机向导完成场景。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  onStartupGuideCompleted(scene: common.StartupScene): void;

  /**
   * 设备开机完成事件回调。通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_BOOT_COMPLETED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅设备启动完成事件，端侧系统在设备开机完成后会通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业
   * 管理员。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  onDeviceBootCompleted(): void;

  /**
   * 日志收集完成回调
   *
   * @param { common.Result } result - Log collection result.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onLogCollected(result: common.Result): void;

  /**
   * 按键事件发生时回调。
   *
   * @param { systemManager.KeyEvent } keyEvent - Information about the current key event.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onKeyEvent(keyEvent: systemManager.KeyEvent): void;

  /**
   * 策略变更时回调
   *
   * @param { common.PolicyChangedEvent } event - 策略变更事件
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  onAdminPolicyChanged(event: common.PolicyChangedEvent): void;
}