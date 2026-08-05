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
 * @file  * @kit MDMKit
 */

import type systemManager from './@ohos.enterprise.systemManager';
import common from './@ohos.enterprise.common';
import EnterpriseAdminExtensionContext from './application/EnterpriseAdminExtensionContext';

/**
 * 本模块提供[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#enterpriseadminextensionability企业设备管理扩展能力)，是企业设备管理应用的核心组件。
 * 
 * **主要功能**：
 * 
 * - 提供设备管理应用的生命周期管理能力（激活、去激活、启动等事件）。
 * - 提供应用生命周期事件监听能力（安装、卸载、启动、停止、更新）。
 * - 提供系统账号管理事件监听能力（账号新增、切换、删除）。
 * - 提供Kiosk模式、按键事件、日志收集、系统更新等系统级事件回调。
 * - 提供策略变更事件监听能力。
 * 
 * **使用场景**：企业设备管理应用开发、企业应用生命周期管理、设备安全管控、账号管理、设备运维监控等。
 * 
 * 设备管理应用需要存在一个EnterpriseAdminExtensionAbility并重写相关接口，以此具备模块提供的各项能力，比如接收由系统发送的该应用被激活或者解除激活的通知。
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
   * 与onDeviceAdminEnabled的区别：
   * 
   * - onAdminEnabled：设备管理应用自身被激活时触发，用于设备管理应用初始化自己的策略。
   * - onDeviceAdminEnabled：超级设备管理应用监听普通设备管理应用激活事件，用于超级设备管理应用对普通设备管理应用进行管理。
   * 
   * 开发者应根据应用类型和监听场景选择合适的方法：普通设备管理应用使用onAdminEnabled，超级设备管理应用监听其他应用激活时使用onDeviceAdminEnabled。
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
   * @param { systemManager.SystemUpdateInfo } systemUpdateInfo - 系统更新的版本信息，用于通知设备管理应用系统版本更新情况。
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
   * 注册MANAGED_EVENT_ACCOUNT_SWITCHED事件才能收到此回调。企业设备管理场景下，设备管理应用订阅系统账号切换事件，系统账号切换事件通知设备管理应用，设备管理应用可以在此回调函数中进行事件上报，通知企业管理
   * 员。
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
   * @param { number } accountId - 被更新应用所在的用户ID。
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
   * @param { common.InstallationResult } result - 安装结果，表示应用市场应用的安装状态，包含安装成功或失败的状态信息。
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
   * @param { common.StartupScene } scene - 开机向导完成场景，标识触发回调的具体场景类型，如用户设置完成（USER_SETUP）、OTA升级完成（OTA）、设备配置完成（
   *     DEVICE_PROVISION）等，开发者可根据不同场景执行相应的业务逻辑。
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
   * 通过[systemManager.startCollectLog]{@link @ohos.enterprise.systemManager:systemManager.startCollectLog}接口成功创建日志收集任务后，
   * 当日志收集完成时，将触发该回调。回调中包含日志收集结果。
   * 
   * > **说明：**
   * >
   * > 日志收集成功时，必须在应用的EnterpriseAdminExtensionAbility中访问沙箱目录（/data/edm/log）获取日志，获取日志方式参考下列示例代码。应用取走日志后，建议调用
   * > [systemManager.finishLogCollected]{@link @ohos.enterprise.systemManager:systemManager.finishLogCollected}删除已收集到的日
   * > 志。
   *
   * @param { common.Result } result - 日志收集结果，用于标识日志收集是否成功，常见值为SUCCESS（收集成功）或FAIL（收集失败），开发者可根据结果判断是否执行后续的日志获取操作。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onLogCollected(result: common.Result): void;

  /**
   * [按键事件]{@link @ohos.enterprise.systemManager:systemManager.KeyEvent}回调。MDM应用需要通过
   * [systemManager.addKeyEventPolicies]{@link @ohos.enterprise.systemManager:systemManager.addKeyEventPolicies}接口下发按键事件
   * 处理策略，当系统按键事件触发时，如果事件与已下发的策略匹配，则触发该回调。回调信息[keyEvent]{@link @ohos.enterprise.systemManager:systemManager.KeyEvent}中包含
   * 当前发生的按键事件信息。
   * 
   * 单按键事件响应。设备单按键被触发时，[onKeyEvent]{@link EnterpriseAdminExtensionAbility#onKeyEvent}会在按下和抬起时触发两次回调事件，可由
   * [keyEvent]{@link @ohos.enterprise.systemManager:systemManager.KeyEvent}中keyAction属性进行判断。
   * [keyEvent]{@link @ohos.enterprise.systemManager:systemManager.KeyEvent}中keyItems属性在单按键事件中可忽略。
   * 
   * 组合按键事件响应。组合按键仅支持物理按键：电源键、音量加键、音量减键进行组合。用户按下组合键时，后按下按键的事件回调将通过
   * [keyEvent]{@link @ohos.enterprise.systemManager:systemManager.KeyEvent}中的keyItems属性携带当前所有已按下的按键信息。其他与单按键事件响应逻辑一致。
   * 
   * 长按事件响应。当单个按键或组合按键被长时间按下时，[onKeyEvent]{@link EnterpriseAdminExtensionAbility#onKeyEvent}会以50ms的间隔（具体间隔时间可能因系统状态及性能而稍
   * 有延长）被连续触发，其中每次回调事件[keyEvent]{@link @ohos.enterprise.systemManager:systemManager.KeyEvent}的actionTime属性均与按键首次按下事件回调的
   * [keyEvent]{@link @ohos.enterprise.systemManager:systemManager.KeyEvent}的actionTime属性相同。其他情况下的响应逻辑与单个按键和组合按键一致。
   *
   * @param { systemManager.KeyEvent } keyEvent - 当前发生的按键事件信息，包含按键码（keyCode）、按键动作（keyAction，如按下/抬起）、触发时间（actionTime）、已按下
   *     按键列表（keyItems）等，用于识别和处理用户的按键操作。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  onKeyEvent(keyEvent: systemManager.KeyEvent): void;

  /**
   * 策略变更事件回调。超级设备管理应用可以通过接口
   * [adminManager.subscribeManagedEventSync]{@link @ohos.enterprise.adminManager:adminManager.subscribeManagedEventSync}
   * 注册MANAGED_EVENT_POLICIES_CHANGED事件后可接收此回调。企业设备管理场景下，当任意MDM应用调用
   * [策略变更上报列表](docroot://mdm/mdm-kit-appendix.md#策略变更上报列表)中的接口时，系统会通知当前用户下的超级设备管理应用。
   *
   * @param { common.PolicyChangedEvent } event - 策略变更事件，包含策略变更的详细信息，如变更的应用包名（bundleName）、变更的函数名（functionName）、变更的参数（
   *     parameters）和变更时间（time），超级设备管理应用可根据这些信息进行策略审计或同步。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  onAdminPolicyChanged(event: common.PolicyChangedEvent): void;
}