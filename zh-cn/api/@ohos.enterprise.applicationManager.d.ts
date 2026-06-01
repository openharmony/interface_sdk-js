/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import common from './@ohos.enterprise.common';

import statistics from './@ohos.net.statistics';

/**
 * 本模块提供应用管理能力，包括添加应用运行禁止名单、获取应用运行禁止名单、移除应用运行禁止名单等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
 * >
 * > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 * > [applicationManager.isAppKioskAllowed]{@link applicationManager.isAppKioskAllowed}除外，该接口对所有应用开放。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @since 10
 */
declare namespace applicationManager {
  /**
   * Kiosk模式的特征。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  enum KioskFeature {
    /**
     * 允许进入通知中心（通过单指左上方下滑进入）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ALLOW_NOTIFICATION_CENTER = 1,

    /**
     * 允许进入控制中心（通过单指右上方下滑进入）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    ALLOW_CONTROL_CENTER = 2,

    /**
     * 允许进入最近任务栏（通过单指底部上滑停留进入）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ALLOW_GESTURE_CONTROL = 3,

    /**
     * 允许进入侧边DOCK栏（通过单指边缘内滑停留进入）。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    ALLOW_SIDE_DOCK = 4
  }

  /**
   * 快捷栏中的应用信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  interface DockInfo {
    /**
     * 应用的包名。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    bundleName: string;

    /**
     * 应用的Ability名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    abilityName: string;

    /**
     * 应用在快捷栏中的位置索引。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    index: number;
  }

  /**
   * 分布式能力类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum ServiceType {
    /**
     * 协同服务。允许使用协同服务的应用，可以向其他设备传输数据。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    COLLABORATION_SERVICE  = 0
  }

  /**
   * 应用包统计信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  interface BundleStatsInfo {
    /**
     * 应用的包名。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    bundleName: string;

    /**
     * 应用分身索引，取值范围：大于等于0的整数。
     *
     * appIndex可以通过@ohos.bundle.bundleManager中的
     * [getAppCloneIdentity]{@link @ohos.bundle.bundleManager:bundleManager.getAppCloneIdentity}等接口来获取。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    appIndex: number;

    /**
     * Ability在前台运行的总时长，单位：毫秒。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    abilityInFgTotalTime: number;
  }

  /**
   * 窗口状态信息
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  interface WindowStateInfo {
    /**
     * 窗口ID
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    windowId: number;

    /**
     * 窗口名称
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    name: string;

    /**
     * 窗口状态
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    state: WindowState;

    /**
     * 是否在dock栏
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    isOnDock: boolean;
  }

  /**
   * 窗口状态
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  enum WindowState {
    /**
     * 断开连接状态
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    DISCONNECT = 0,

    /**
     * 连接状态
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    CONNECT = 1,

    /**
     * 前台状态
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    FOREGROUND = 2,

    /**
     * 激活状态
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    ACTIVE = 3,

    /**
     * 未激活状态
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    INACTIVE = 4,

    /**
     * 窗口展示
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    BACKGROUND = 5
  }

  /**
   * 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前用户下运行，不在禁止名单中的应用允许运行。使用callback异步回调。从API version 21开始，如果应用运行允许名单
   * [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}非空
   * ，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误码。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在指定用户（通过userId指定）下运行，不在禁止名单中的应用允许运行。使用callback异步回调。从API version 21开始，如果应用运行允许名单
   * [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}非空
   * ，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误码。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。使用Promise异步回调。从API version 21开始，如果应用运行允许名单
   * [addallowedRunningBundles]{@link @ohos.enterprise.applicationManager:applicationManager.addAllowedRunningBundles}非空
   * ，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误码。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当添加应用运行禁止名单失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function addDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 添加应用至应用运行禁止名单，添加至禁止名单的应用不允许在当前/指定用户下运行。从API version 21开始，如果应用运行允许名单
   * [addallowedRunningBundles]{@link applicationManager.addAllowedRunningBundles}非空，就不能再通过本接口添加应用运行禁止名单，否则会报9200010冲突错误
   * 码。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，支持传入应用的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，推荐使用
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)。API version 20及之前版本，仅支
   *     持[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured. [since 21]
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addDisallowedRunningBundlesSync(
    admin: Want,
    appIds: Array<string>,
    accountId?: number
  ): void;

  /**
   * 移除在应用运行禁止名单中的应用，在禁止名单存在的情况下，在应用运行禁止名单中的应用不允许在当前用户下运行。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 移除在应用运行禁止名单中的应用，在禁止名单存在的情况下，在应用运行禁止名单中的应用不允许在指定用户（通过userId指定）下运行。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<void> } callback - 回调函数。当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 移除当前/指定用户在应用运行禁止名单中的应用，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } userId - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当移除应用运行禁止名单失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function removeDisallowedRunningBundles(admin: Want, appIds: Array<string>, userId?: number): Promise<void>;

  /**
   * 将应用从当前/指定用户下的应用运行禁止名单中移除。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIds - 应用ID数组，指定具体应用。<br/>**说明：** 从API version 21版本开始，数组中的元素支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)和
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，仅移除传入的
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)（或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)），不会移除同一应用的
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)（或
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)）。API version 20及之前版本，数组中的元素只支持使用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br>
   *     - 调用接口时，若传入accountId，表示指定用户。<br> - 调用接口时，若未传入accountId，表示当前用户。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function removeDisallowedRunningBundlesSync(admin: Want, appIds: Array<string>, accountId?: number): void;

  /**
   * 获取当前用户下的应用运行禁止名单。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当获取应用运行禁止名单成功时，err为null，否则为错误对象。<br/>**说明：** API version 20
   *     及之前版本，返回值为应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为
   *     应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取指定用户（通过userId指定）下的应用运行禁止名单。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户。取值范围：大于等于0。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，当获取应用运行禁止名单成功时，err为null，否则为错误对象。<br/>**说明：** API version 20
   *     及之前版本，返回值为应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为
   *     应用[appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, userId: number, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取当前/指定用户下的应用运行禁止名单，使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_SET_APP_RUNNING_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，取值范围：大于等于0。<br> - 调用接口时，若传入userId，表示指定用户。<br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<Array<string>> } Promise对象，返回当前/指定用户下的应用运行禁止名单。<br/>**说明：** API version 20及之前版本，返回值为应用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为应用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @StageModelOnly
   * @since 10
   */
  function getDisallowedRunningBundles(admin: Want, userId?: number): Promise<Array<string>>;

  /**
   * 获取当前/指定用户下的应用运行禁止名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [accountId] - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。<br/>
   *     - 调用接口时，若传入accountId，表示指定用户。<br/> - 调用接口时，若未传入accountId，表示当前用户。
   * @returns { Array<string> } 返回当前/指定用户下的应用运行禁止名单。<br/>**说明：** API version 20及之前版本，返回值为应用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为应用
   *     [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或
   *     [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @StageModelOnly
   * @since 12
   */
  function getDisallowedRunningBundlesSync(admin: Want, accountId?: number): Array<string>;

  /**
   * 添加应用至应用运行允许名单，添加至允许名单的应用允许在指定用户下运行，不在允许名单的应用不允许在指定用户下运行。
   *
   * > **说明：**
   * >
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIdentifiers - 应用
   *     [唯一标识符](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)的数组，可以通过接口
   *     [bundleManager.getInstalledBundleList]{@link @ohos.enterprise.bundleManager:bundleManager.getInstalledBundleList(admin: Want, accountId: number)}
   *     获取bundleInfo.signatureInfo.appIdentifier。 <br>取值范围：<br> - 单个用户下该名单总数不能超过200。例如100用户下已经设置了50个、101用户未设置，则100用户还能再
   *     设置150个，101用户还能再设置200个。
   * @param { number } accountId - <br>取值范围为全体整数。
   *     - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function addAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void;

  /**
   * 将应用从指定用户下的应用运行允许名单中移除。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIdentifiers - 应用唯一标识符的数组。可以通过接口bundleManager.getInstalledBundleList获取bundleInfo.signatureInfo.appIdentifier。取值范围：数组长度不能超过200。
   *     <br>最大长度为200。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。
   *     - <br>用户ID，取值范围：大于等于0。
   *     accountId可以通过@ohos.account.osAccount中的getOsAccountLocalId等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function removeAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void;

  /**
   * 获取指定用户下的应用运行允许名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<string> } 返回指定用户下的应用运行允许名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 21
   */
  function getAllowedRunningBundles(admin: Want, accountId: number): Array<string>;

  /**
   * 为当前用户添加开机自启动应用名单。通过本接口添加至自启动名单的应用，禁止用户在设备上手动取消应用自启动<!--RP4--><!--RP4End-->，但可通过
   * [removeAutoStartApps]{@link applicationManager.removeAutoStartApps(admin: Want, autoStartApps: Array<Want>)}接口将应用从自
   * 启动名单中移除。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<Want> } autoStartApps - 开机自启动应用数组。数组长度上限为10。例如：如果名单中已有5个应用，则最多再通过本接口设置5个。Want中必须包含bundleName和
   *     abilityName。Ability支持UIAbility和ServiceExtensionAbility。当
   *     [abilities](docroot://quick-start/module-configuration-file.md#abilities标签)标签中exported属性值为false时，不支持拉起Ability。从
   *     API version 24开始，新增支持通过Want的parameters属性中的isHiddenStart字段配置应用开机自启是否隐藏UI界面，true表示隐藏，false表示不隐藏。默认值是false。该参数设置为
   *     true时，应用必须<!--RP8-->接入状态栏<!--RP8End-->，否则自启设置失败（若当前仅设置一个应用自启时隐藏UI界面，该应用未接入状态栏，则抛出401异常；若设置多个应用，有一个设置成功，返回成功）。设置
   *     成功后，应用自启后不显示UI界面，仅在状态栏显示，UI进程存在。隐藏UI界面能力仅在PC/2in1和Tablet的PC模式中可正常使用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function addAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * 为指定用户添加开机自启动应用名单，并设置是否禁止该用户手动取消应用自启动<!--RP4--><!--RP4End-->。
   *
   * 通过本接口、[addAutoStartApps]{@link applicationManager.addAutoStartApps(admin: Want, autoStartApps: Array<Want>)}接口均可添加开
   * 机自启动应用名单，两个接口的设置可同时生效。同一用户下，开机自启动应用名单最多支持包含10个应用。例如：若当前名单中已有3个应用，则最多还能通过本接口为当前用户添加7个应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<Want> } autoStartApps - 开机自启动应用名单数组，数组总长度不超过10。Want中必须包含bundleName和abilityName。Ability支持UIAbility和
   *     ServiceExtensionAbility。当[abilities](docroot://quick-start/module-configuration-file.md#abilities标签)标签中exported
   *     属性值为false时，不支持拉起Ability。从API version 24开始，新增支持通过Want的parameters属性中的isHiddenStart字段配置应用开机自启是否隐藏UI界面，true表示隐藏，
   *     false表示不隐藏。默认值是false。该参数设置为true时，应用必须<!--RP8-->接入状态栏<!--RP8End-->，否则自启设置失败（若当前仅设置一个应用自启时隐藏UI界面，该应用未接入状态栏，则抛出401
   *     异常；若设置多个应用，有一个设置成功，返回成功）。设置成功后，应用自启后不显示UI界面，仅在状态栏显示，UI进程存在。隐藏UI界面能力仅在PC/2in1和Tablet的PC模式中可正常使用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { boolean } disallowModify - 是否禁止用户手动取消应用自启动，true表示禁止，false表示允许。<!--RP1--><!--RP1End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number, disallowModify: boolean): void;

  /**
   * 查询指定用户是否禁止取消应用自启动。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Want } autoStartApp - 开机自启动应用。Want中必须包含bundleName和abilityName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { boolean } 是否禁止用户取消应用自启动，true表示禁止，false表示允许。<!--PR1--><!--PR1End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isModifyAutoStartAppsDisallowed(admin: Want, autoStartApp: Want, accountId: number): boolean;

  /**
   * 为当前用户删除开机自启动应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<Want> } autoStartApps - 开机自启动应用数组。Want中必须包含bundleName和abilityName。Ability支持UIAbility和
   *     ServiceExtensionAbility。当[abilities](docroot://quick-start/module-configuration-file.md#abilities标签)标签中exported
   *     属性值为false时，不支持拉起Ability。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>): void;

  /**
   * 删除指定用户的开机自启动应用名单中的指定应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<Want> } autoStartApps - 开机自启动应用名单数组。Want中必须包含bundleName和abilityName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function removeAutoStartApps(admin: Want, autoStartApps: Array<Want>, accountId: number): void;

  /**
   * 查询当前用户开机自启动应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<Want> } 应用自启动名单数组。从API version 24开始，支持返回是否隐藏UI的配置。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function getAutoStartApps(admin: Want): Array<Want>;

  /**
   * 查询指定用户下的开机自启动应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<Want> } 应用自启动名单数组。从API version 24开始，支持返回是否隐藏UI的配置。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAutoStartApps(admin: Want, accountId: number): Array<Want>;

  /**
   * 添加保活应用名单，添加后将自动保活应用进程。在开机和应用被杀死后，由系统主动拉起应用进程。<!--RP7--><!--RP7End-->
   *
   * 通过本接口添加至保活名单的应用，禁止用户在设备上手动取消保活<!--RP6--><!--RP6End-->，但可通过
   * [removeKeepAliveApps]{@link applicationManager.removeKeepAliveApps}接口将应用从保活名单中移除。
   *
   * 如果将应用添加至应用禁止运行名单[addDisallowedRunningBundlesSync]{@link applicationManager.addDisallowedRunningBundlesSync}，就不能将应用添
   * 加至保活应用名单，否则会报9200010冲突错误码。
   *
   * 如果需要在Phone/Tablet设备使用类似功能，可以调用[addUserNonStopApps]{@link applicationManager.addUserNonStopApps}或者
   * [addFreezeExemptedApps]{@link applicationManager.addFreezeExemptedApps}接口，具体功能请参考相关文档。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名数组，指定需要添加至保活名单的应用，最大支持5个。<!--RP5--><!--RP5End-->
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9201005 - Add keep alive applications failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;3.Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * 添加保活应用名单，并设置是否禁止用户手动取消保活，添加后将自动保活应用进程。在开机和应用被杀死后，由系统主动拉起应用进程。
   *
   * 通过本接口、
   * [addKeepAliveApps]{@link applicationManager.addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number)}
   * 接口均可添加保活应用名单，两个接口的设置可同时生效。同一用户下，保活应用名单最多支持包含5个应用。例如：若当前名单中已有3个应用，则最多还能通过本接口为当前用户添加2个应用。
   *
   * 如果通过[addDisallowedRunningBundlesSync]{@link applicationManager.addDisallowedRunningBundlesSync}接口将应用添加至应用禁止运行名单，就不能
   * 将应用添加至保活应用名单，否则会报9200010冲突错误码。
   *
   * 如果需要在Phone/Tablet设备使用类似功能，可以调用[addUserNonStopApps]{@link applicationManager.addUserNonStopApps}或者
   * [addFreezeExemptedApps]{@link applicationManager.addFreezeExemptedApps}接口，具体功能请参考相关文档。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名数组，指定需要添加至保活名单的应用，最大支持5个。<br>应用需要满足条件：安装在1用户下（1用户是支持三方应用单例运行的用户），且应用接入
   *     [后台服务](docroot://application-models/app-service-extension-ability.md#实现一个后台服务)<!--RP3--><!--RP3End-->。否则，会报错误码9
   *     201005。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { boolean } disallowModify - 是否禁止用户手动取消应用保活，true表示禁止，false表示允许。<!--RP2--><!--RP2End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9201005 - Add keep alive applications failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number, disallowModify: boolean): void;

  /**
   * 查询应用是否禁止取消保活。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { string } bundleName - 查询的应用包名。
   * @returns { boolean } 是否禁止用户手动取消应用保活，true表示禁止，false表示允许。<!--RP2--><!--RP2End-->
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isModifyKeepAliveAppsDisallowed(admin: Want, accountId: number, bundleName: string): boolean;

  /**
   * 移除保活应用名单中的指定应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名数组，指定需要移除保活的应用，最大支持5个。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;3.Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function removeKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * 获取保活应用包名。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<string> } 返回指定用户下保活应用的包名。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types;3.Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getKeepAliveApps(admin: Want, accountId: number): Array<string>;

  /**
   * 设置允许在Kiosk模式下运行的应用。
   *
   * Kiosk模式为系统层面提供的一种应用运行模式，该模式下会将设备锁定在单个应用或者一组应用运行，同时对锁屏状态、状态栏、手势操作和关键功能进行控制，防止用户在设备上启动其它应用或执行其它操作。
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIdentifiers - 应用[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}的数组，可以通过接口
   *     [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
   *     获取bundleInfo.signatureInfo.appIdentifier。重复设置时，新设置的数组会覆盖旧的设置，最多设置200个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setAllowedKioskApps(admin: Want, appIdentifiers: Array<string>): void;

  /**
   * 获取允许在Kiosk模式下运行的应用。
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<string> } 允许在Kiosk模式下运行的应用[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}清单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function getAllowedKioskApps(admin: Want): Array<string>;

  /**
   * 查询某应用是否允许在Kiosk模式下运行。
   *
   * @param { string } appIdentifier - 应用[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}，可以通过接口
   *     [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
   *     获取bundleInfo.signatureInfo.appIdentifier。
   * @returns { boolean } true表示允许在Kiosk模式下运行。false表示不允许在Kiosk模式下运行。
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isAppKioskAllowed(appIdentifier: string): boolean;

  /**
   * 设置Kiosk模式的特征。通过本接口可以控制在Kiosk模式下能否进入通知中心、控制中心。
   *
   * 从API version 24开始，新增支持设置是否允许底部上滑进入最近任务栏，左滑或右滑悬停展示侧边DOCK栏。
   *
   * 在非Kiosk模式下，本接口可以正常调用，但是不会生效，进入Kiosk模式后才会生效。
   *
   * @permission ohos.permission.ENTERPRISE_SET_KIOSK
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<KioskFeature> } features - Kiosk模式的特征集合（从API version 24开始，新增允许底部上滑进入最近任务栏、左滑悬停或右滑悬停展示侧边DOCK栏）。 <br>
   *     当传入空数组时，系统会清空之前下发过的特征，恢复到Kiosk模式的默认状态。即：禁用通知中心、控制中心、最近任务栏、侧边Dock栏等能力。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - The parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function setKioskFeatures(admin: Want, features: Array<KioskFeature>): void;

  /**
   * 清除应用产生的所有数据。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用包名，指定需要清除数据的应用包名。
   * @param { number } appIndex - 应用分身索引，取值范围：大于等于0的整数。<br> appIndex可以通过@ohos.bundle.bundleManager中的
   *     [getAppCloneIdentity]{@link @ohos.bundle.bundleManager:bundleManager.getAppCloneIdentity}等接口来获取。
   * @param { number } accountId - 用户ID，取值范围：大于等于0的整数。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function clearUpApplicationData(admin: Want, bundleName: string, appIndex: number, accountId: number): void;

  /**
   * 为指定用户添加不可关停应用名单，仅可对已安装应用设置该策略。若参数列表中存在未安装应用，则返回9200012错误码。若设置策略后，名单中有应用被卸载，则卸载的应用将从名单中移除。若添加已存在于名单中的应用，返回成功，但已设置策略名
   * 单中不会重复添加该应用。
   *
   * 不可关停应用在Phone和Tablet设备的效果：用户不能在任务中心上滑关闭应用；在设置-应用和元服务中点击应用名称进入详情页面后，页面中的强行停止按钮呈灰色不可用，页面中的停用按钮功能无效。
   *
   * 不可关停应用在PC/2in1设备的效果：用户在设置-应用和元服务中点击应用名称进入详情页面后，页面中的强行停止按钮呈灰色不可用，页面中的停用按钮功能无效。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<common.ApplicationInstance> } applicationInstances - 不可关停应用名单数组。不可关停应用名单最多支持包含10个应用，该数量限制不区分用户，即所有用户
   *     下添加应用的总和的最大限制为10个。例如：若当前名单中已有3个应用，则最多还能通过本接口为指定用户添加7个应用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function addUserNonStopApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * 为指定用户删除不可关停应用名单。执行删除策略时，若参数列表中包含未安装应用，删除操作仍能成功执行；已安装的应用将被删除，未安装的应用不影响删除操作。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<common.ApplicationInstance> } applicationInstances - 不可关停应用名单数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function removeUserNonStopApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * 获取当前设备下所有用户不可关停应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<common.ApplicationInstance> } Array of non-stoppable applications.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getUserNonStopApps(admin: Want): Array<common.ApplicationInstance>;

  /**
   * 为指定用户添加后台防冻结应用名单，仅可对已安装应用设置该策略，该策略重启后失效。若参数列表中存在未安装应用，则返回9200012错误码。若设置策略后，名单中有应用被卸载，则卸载的应用将从名单中移除。若添加已存在于名单中的应用，返回
   * 成功，但已设置策略名单中不会重复添加该应用。
   *
   * 冻结操作：对目标应用的挂起、软件资源代理、硬件资源代理和高功耗管控等操作。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<common.ApplicationInstance> } applicationInstances - 后台防冻结应用名单数组，后台防冻结应用名单最多支持包含10个应用，该数量限制不区分用户，即所有
   *     用户下添加应用的总和的最大限制为10个。例如：若当前名单中已有3个应用，则最多还能通过本接口为指定用户添加7个应用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function addFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * 为指定用户删除后台防冻结应用名单。执行删除策略时，若参数列表中包含未安装应用，删除操作仍能成功执行；已安装的应用将被删除，未安装的应用不影响删除操作。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<common.ApplicationInstance> } applicationInstances - 后台防冻结应用名单数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function removeFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void;

  /**
   * 获取当前设备下所有用户后台防冻结应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<common.ApplicationInstance> } Array of the background freeze-exempt application list.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 22
   */
  function getFreezeExemptedApps(admin: Want): Array<common.ApplicationInstance>;

  /**
   * 设置是否禁用指定应用（系统应用和三方应用均支持）的Ability组件。当前仅支持UIAbility类型，禁用后无法拉起此Ability组件的用户界面。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用包名，指定是否禁用的应用包名。
   * @param { number } accountId - 用户ID，取值范围：大于等于0的整数。
   *     <br>取值范围为全体整数。
   *     - 用户ID，取值范围：大于等于0的整数。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { string } abilityName - 表示要禁用/解除禁用的Ability组件名（当前仅支持UIAbility）。
   * @param { boolean } isDisabled - 是否禁用该Ability组件。true表示禁用该Ability组件，false表示解除禁用该Ability组件。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function setAbilityDisabled(admin: Want, bundleName: string, accountId: number, abilityName: string, isDisabled: boolean): void;

  /**
   * 获取指定应用（系统应用和三方应用均支持）的Ability组件是否被禁用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用包名，指定是否禁用的应用包名。
   * @param { number } accountId - 用户ID，取值范围：大于等于0的整数。
   *     - 用户ID，取值范围：大于等于0的整数。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { string } abilityName - 表示要禁用/解除禁用的Ability组件名称（当前仅支持UIAbility）。
   * @returns { boolean } 该能力是否禁用。true表示该Ability组件被禁用，false表示该Ability组件未被禁用。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function isAbilityDisabled(admin: Want, bundleName: string, accountId: number, abilityName: string): boolean;

  /**
   * 根据位置索引添加应用到PC/2in1设备的底部快捷栏，添加后用户可以通过点击快捷栏的应用图标直接启动应用，应用图标为应用在桌面上显示的默认图标。
   *
   * > **说明：**
   * >
   * > 1.若位置0或1上已存在“应用中心”或“任务中心”，则尝试向该位置添加应用会返回错误码9201019；若该位置为其他应用，则可正常添加。
   * >
   * > 2.以下应用不可通过本接口添加到快捷栏：“应用中心”、“任务中心”、“文件管理”、“回收站”。
   * >
   * > 3.仅支持添加具有应用程序入口（即有图标）的应用，无图标的应用不支持添加。
   * >
   * > 4.仅支持配置当前用户下的快捷栏，每个用户的快捷栏最多可容纳100个应用。
   * >
   * > 5.在已有应用的位置插入新应用时，新应用将直接占用该位置，原应用及其后的应用依次向后顺移一位。
   * >
   * > 6.若不传index参数，或传入的index值大于快捷栏当前应用数量，则新应用默认追加到快捷栏末尾。
   * >
   * > 7.通过本接口添加应用到快捷栏后，用户可以手动移除或调整应用的位置。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用的包名。
   * @param { string } abilityName - 应用的Ability名称，仅支持应用程序入口Ability。
   * @param { number } [index] - 应用在快捷栏中的位置索引，
   *     <br>取值应为[0,99]内的整数，默认值为99。 默认值： 99。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200015 - The ability does not exist.
   * @throws { BusinessError } 9201013 - The number of applications in the Dock has reached the maximum.
   * @throws { BusinessError } 9201014 - The application is already in the Dock.
   * @throws { BusinessError } 9201015 - The application is not installed.
   * @throws { BusinessError } 9201018 - The application is inoperable.
   * @throws { BusinessError } 9201019 - The location is inoperable.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function addDockApp(admin: Want, bundleName: string, abilityName: string, index?: number): void;

  /**
   * 从快捷栏中移除应用。
   *
   * > **说明：**
   * >
   * > 以下应用不可通过本接口从快捷栏中移除：“应用中心”、“任务中心”、“文件管理”、“回收站”，否则报错9201018错误码。
   *
   * > **说明**
   * > 以下应用不可通过本接口从快捷栏中移除：“应用中心”、“任务中心”、“文件管理”、“回收站”，否则报错9201018错误码。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用的包名。
   * @param { string } abilityName - 应用的Ability名称。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9201016 - The application has not been added to the Dock.
   * @throws { BusinessError } 9201018 - The application is inoperable.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function removeDockApp(admin: Want, bundleName: string, abilityName: string): void;

  /**
   * 获取当前快捷栏中应用信息的列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Array<DockInfo> } 快捷栏中的应用信息数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 24
   */
  function getDockApps(admin: Want): Array<DockInfo>;

  /**
   * 为指定用户添加允许使用分布式能力的应用名单，名单中的应用在指定用户下可以使用指定的分布式能力。
   *
   * 当前支持的分布式类型有：[协同服务]{@link applicationManager.ServiceType}。
   *
   * > **说明：**
   * >
   * > 1.如果要设置允许使用协同服务的应用名单，在调用本接口前必须已经通过
   * > [setDisallowedPolicyForAccount]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number)}
   * > 接口禁用了向其他设备传输数据的设备间单向传输数据的能力，否则会抛出错误码9201043。
   *
   * > 2.当向其他设备传输数据的设备间单向传输数据的能力被解除禁用时，通过本接口设置的允许使用协同服务的应用名单会被同步清除。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIdentifiers - 应用[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}的数组，可以通过接口
   *     [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
   *     获取bundleInfo.signatureInfo.appIdentifier。允许列表总数不能超过200个。
   * @param { ServiceType } serviceType - 分布式能力类型。
   * @param { number } accountId - 用户ID，取值范围：大于等于0的整数。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9201043 - Prerequisites for the API call have not been satisfied. For example,
   *     distributed outgoing transmission is not disallowed before adding the distributed bidirectional collaboration
   *     trustlist.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addAllowedDistributeAbilityConnBundles(admin: Want, appIdentifiers: Array<string>, serviceType: ServiceType, accountId: number): void;

  /**
   * 为指定用户移除允许使用分布式能力的应用名单。移除后，若名单中还有剩余的应用，则仅名单中的应用在指定用户下可以使用指定类型的分布式能力；若名单中已被清空，无剩余的应用，则所有应用在指定用户下都不允许使用指定类型的分布式能力。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } appIdentifiers - 应用[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}的数组，可以通过接口
   *     [bundleManager.getBundleInfo]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfo(bundleName: string, bundleFlags: int, userId?: int)}
   *     获取bundleInfo.signatureInfo.appIdentifier。允许列表总数不能超过200个。
   * @param { ServiceType } serviceType - 分布式能力类型。
   * @param { number } accountId - 用户ID，取值范围：大于等于0的整数。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeAllowedDistributeAbilityConnBundles(admin: Want, appIdentifiers: Array<string>, serviceType: ServiceType, accountId: number): void;

  /**
   * 获取指定用户下允许使用指定类型的分布式能力的应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { ServiceType } serviceType - 分布式能力类型。
   * @param { number } accountId - 用户ID，取值范围：大于等于0的整数。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<string> } 允许使用指定类型的分布式能力的应用的[唯一标识符]{@link ./bundleManager/BundleInfo:SignatureInfo}的数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getAllowedDistributeAbilityConnBundles(admin: Want | null, serviceType: ServiceType, accountId: number): Array<string>;

  /**
   * 添加允许发送通知的应用名单。设置通知白名单后，不在此名单内的应用无法发送通知。
   *
   * > **说明：**
   * >
   * > 1.如果Kiosk模式与通知白名单策略同时设置，那么设置Kiosk模式的应用与通知白名单中的应用都可以发送通知。
   *
   * > 2.当已经通过
   * > [setDisallowedPolicy]{@link @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin: Want, feature: string, disallow: boolean)}
   * > 设置了禁用设备通知能力时，再通过本接口设置通知白名单，会抛出错误码9200010。
   *
   * > 3.通知白名单对系统服务不生效，系统服务始终可以发送通知。系统应用受通知白名单管控。
   *
   * > 4.支持跨用户设置，设置后跨用户立即生效。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名数组，指定允许发送通知的应用。最多支持200个应用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br>accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200010 - A conflict policy has been configured.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * 从允许发送通知的应用名单中移除应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名数组，指定需要移除的应用。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeAllowedNotificationBundles(admin: Want, bundleNames: Array<string>, accountId: number): void;

  /**
   * 获取允许发送通知的应用名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } accountId - 用户ID，取值范围：大于等于0。<br>accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<string> } 返回允许发送通知的应用包名数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getAllowedNotificationBundles(admin: Want | null, accountId: number): Array<string>;

  /**
   * 添加隐藏桌面应用图标名单。
   *
   * > **说明：**
   * >
   * > 1、本接口仅支持隐藏当前用户的桌面应用图标，不支持隐藏应用卡片。
   * >
   * > 2、如果被隐藏的应用有应用分身，会同步隐藏应用分身。
   * >
   * > 3、不能把桌面所有应用都添加到隐藏名单中，否则所有应用都会显示到桌面上。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名数组，指定需要隐藏的应用，最大支持500个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function addHideLauncherIcon(admin: Want, bundleNames: Array<string>): void;

  /**
   * 取消隐藏桌面应用图标名单。
   *
   * > **说明：**
   * >
   * > 取消隐藏的应用会从桌面第2屏开始找空位显示；如果第2~18屏无空位，则在第1屏找空位；如果第1屏无空位，则在第2屏第1个应用的位置创建小文件夹放置应用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<string> } bundleNames - 应用包名数组，指定需要取消隐藏的应用，最大支持500个。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function removeHideLauncherIcon(admin: Want, bundleNames: Array<string>): void;

  /**
   * 查询当前用户下隐藏桌面应用图标名单。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want | null } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。<br/>当设备有多个MDM应用时，传入admin
   *     查询对应admin设置的策略。传入null时查询整机实际生效的策略。
   * @returns { Array<string> } 返回当前用户下的隐藏桌面应用图标名单。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getHideLauncherIcon(admin: Want | null): Array<string>;

  /**
   * 查询当前用户下指定应用在特定时间段内使用流量情况。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 传入的网络类型（networkInfo.type）仅支持蜂窝网络（connection.NetBearType.BEARER_CELLULAR）和Wi-Fi网络（
   * > connection.NetBearType.BEARER_WIFI）。若传入其他值，接口会返回错误码9200012。
   * >
   * > 传入的起始时间（networkInfo.startTime）、结束时间（networkInfo.endTime）为秒级时间戳。若传入的起始时间、结束时间为负数，或起始时间大于结束时间，接口会返回错误码9200012。
   * >
   * > 传入的用户ID（accountId）非当前用户时，接口会返回错误码9200012。
   * >
   * > 建议查询的时间间隔（结束时间-起始时间）最小为1天，最大为30天。时间间隔太小，查询结果可能不准确。时间间隔太大，查询耗时会很长。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 应用的包名。
   * @param { number } appIndex - 应用分身索引
   *     <br>取值应为≥0的整数。
   *     - 应用分身索引，取值范围：大于等于0的整数。<br> appIndex可以通过@ohos.bundle.bundleManager中的
   *     [getAppCloneIdentity]{@link @ohos.bundle.bundleManager:bundleManager.getAppCloneIdentity}等接口来获取。
   * @param { number } accountId - 用户ID
   *     <br>取值应为≥0的整数。
   *     <br>accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @param { statistics.NetworkInfo } networkInfo - 网络信息。
   * @returns { Promise<statistics.NetStatsInfo> } returns the detailed network statistics information.
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function queryTrafficStats(
    admin: Want,
    bundleName: string,
    appIndex: number,
    accountId: number,
    networkInfo: statistics.NetworkInfo
  ): Promise<statistics.NetStatsInfo>;

  /**
   * 查询指定用户账户在给定时间段内，各应用在前台运行的累计时长统计信息。查询的最小粒度是天，调用时需要传入起始时间（startTime）、结束时间（endTime）以及目标用户账户ID（accountId）。请求参数startTime
   * 和endTime为毫秒级时间戳，支持调用方传入自定义值，startTime默认取当天的00:00:00.000，endTime默认取当天的24:00:00.000（即次日零点）。请求参数接口返回BundleStatsInfo数组，
   * 每个元素包含一个应用的包名，其分身索引值及其对应时间段内的前台使用时长（毫秒级时间戳）。若startTime为0，则表示从设备首次开机的时间开始查询。若起始时间晚于结束时间，接口将返回错误码9200012。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } startTime - 查询起始时间
   *     <br>单位为： 毫秒，取值应为≥0的整数。
   * @param { number } endTime - 查询结束时间，单位：毫秒（时间戳）
   *     <br>单位为： 毫秒，取值应为≥0的整数。
   * @param { number } accountId - accountId为操作系统帐户的本地ID。
   *     <br>取值应为≥0的整数。
   *     - 用户ID，取值范围：大于等于0的整数。<br> accountId可以通过@ohos.account.osAccount中的
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}等接口来获取。
   * @returns { Array<BundleStatsInfo> } 返回应用包统计信息的数组。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function queryBundleStatsInfos(admin: Want, startTime: number, endTime: number, accountId: number): Array<BundleStatsInfo>;

  /**
   * 卡片加桌
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备扩展组件
   * @param { FormInfo } formInfo - 卡片信息
   * @param { number } accountId - 系统账号ID
   *     <br>取值范围:[0, +∞)
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function publishFormToDesktop(admin: Want, formInfo: FormInfo, accountId: number): void;

  /**
   * 查询应用窗口状态
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_APPLICATION
   * @param { Want } admin - 企业设备管理扩展组件
   * @param { string } bundleName - 应用包名
   * @param { number } appIndex - 应用分身索引
   *     <br>取值应为≥0的整数。
   * @returns { Array<WindowStateInfo> } 返回应用窗口状态信息
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function getApplicationWindowStates(admin: Want, bundleName: string, appIndex: number): Array<WindowStateInfo>;
}

export default applicationManager;