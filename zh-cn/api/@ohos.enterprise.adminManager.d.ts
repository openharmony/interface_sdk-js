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
 * @file admin权限管理
 * @kit MDMKit
 */

import type { AsyncCallback } from './@ohos.base';
import common from '@ohos.app.ability.common';
import type Want from './@ohos.app.ability.Want';

/**
 * 本模块为企业MDM应用提供admin权限管理能力，包括激活/解除激活admin权限、事件订阅、委托授权等。
 *
 * > **说明：**
 * >
 * > 本模块接口仅对设备管理应用开放，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。
 *
 * @syscap SystemCapability.Customization.EnterpriseDeviceManager
 * @systemapi [since 9 - 11]
 * @publicapi [since 12]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace adminManager {
  /**
   * 允许或禁用名单的策略类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  export enum Policy {
    /**
     * 禁用名单。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    BLOCK_LIST = 0,

    /**
     * 允许名单。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 20
     */
    TRUST_LIST = 1
  }

  /**
   * 设备管理应用的企业信息。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface EnterpriseInfo {
    /**
     * 表示设备管理应用所属企业的名称。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 表示设备管理应用所属企业的描述。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    description: string;
  }

  /**
   * 设备管理应用的类型。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @since 15
   */
  export enum AdminType {
    /**
     * 普通设备管理应用，激活后应用可卸载，其[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#enterpriseadminextensionability企业设备管理扩展能力)组件将开机自启和组
     * 件进程死亡后能重新拉起。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9
     */
    ADMIN_TYPE_NORMAL = 0x00,

    /**
     * 超级设备管理应用，激活后应用不可卸载，其[企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#enterpriseadminextensionability企业设备管理扩展能力)组件将开机自启和
     * 组件进程死亡后能重新拉起。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 9
     */
    ADMIN_TYPE_SUPER = 0x01,

    /**
     * BYOD设备管理应用。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 15
     */
    ADMIN_TYPE_BYOD = 0x02
  }

  /**
   * 可订阅的系统管理事件。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @since 12
   */
  export enum ManagedEvent {
    /**
     * 应用安装事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_BUNDLE_ADDED = 0,

    /**
     * 应用卸载事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_BUNDLE_REMOVED = 1,

    /**
     * 应用启动事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_APP_START = 2,

    /**
     * 应用停止事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_APP_STOP = 3,

    /**
     * 系统更新事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 12
     */
    MANAGED_EVENT_SYSTEM_UPDATE = 4,

    /**
     * 账号新增事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_ADDED = 5,

    /**
     * 账号切换事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_SWITCHED = 6,

    /**
     * 账号删除事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @since 18
     */
    MANAGED_EVENT_ACCOUNT_REMOVED = 7,

    /**
     * 开机向导完成事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGED_EVENT_STARTUP_GUIDE_COMPLETED = 8,

    /**
     * 设备启动完成事件。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 24
     */
    MANAGED_EVENT_BOOT_COMPLETED = 9,

    /**
     * 应用更新事件。
     *
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MANAGED_EVENT_BUNDLE_UPDATED = 10,

    /**
     * 策略变更事件。仅支持超级设备管理应用订阅该事件，其他类型设备管理应用订阅该事件时返回9200002错误码。
     *
     * **起始版本**：26.0.0
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @stagemodelonly
     * @since 26.0.0
     */
    MANAGED_EVENT_POLICIES_CHANGED = 11
  }

  /**
   * 设备管理的运行模式。
   *
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @since 19
   */
  export enum RunningMode {
    /**
     * 默认用户运行模式，表示应用在首次开机后的用户下运行。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 19
     */
    DEFAULT = 0,

    /**
     * 多用户运行模式，表示应用能够在多个用户下同时运行。
     *
     * @syscap SystemCapability.Customization.EnterpriseDeviceManager
     * @systemapi
     * @since 19
     */
    MULTI_USER = 1
  }

  /**
   * 激活指定的设备管理应用。超级设备管理应用仅在首用户（u100）下可激活。激活后，应用不可卸载，其
   * [企业设备管理扩展能力](docroot://mdm/mdm-kit-term.md#enterpriseadminextensionability企业设备管理扩展能力)组件将开机自启并在用户切换后自启。使用callback异步回
   * 调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AdminType } type - 激活的设备管理应用类型。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, callback: AsyncCallback<void>): void;

  /**
   * 激活指定用户（通过userId指定）下指定的设备管理应用，其中超级管理应用仅能在首用户（u100）下被激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AdminType } type - 激活的设备管理应用类型。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。
   *     <br>默认值：调用方所在用户。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 激活当前/指定用户下指定的设备管理应用，其中超级管理应用仅能在首用户（u100）下被激活。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AdminType } type - 激活的设备管理应用类型。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。
   *     <br> - 调用接口时，若传入userId，表示指定用户。
   *     <br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200007 - The system ability works abnormally.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId?: number): Promise<void>;

  /**
   * 将当前用户下指定的普通设备管理应用解除激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, callback: AsyncCallback<void>): void;

  /**
   * 将指定用户（通过userId指定）下指定的普通管理应用解除激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。
   *     <br>默认值：当前用户。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableAdmin(admin: Want, userId: number, callback: AsyncCallback<void>): void;

  /**
   * 解除激活指定用户的设备管理应用。使用Promise异步回调。调用成功后，指定的设备管理应用将被解除激活，不再具备设备管理能力。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN [since 12 - 19]
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or
   *     ohos.permission.START_PROVISIONING_MESSAGE [since 20 - 22]
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or ohos.permission.START_PROVISIONING_MESSAGE
   *     or ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN [since 23]
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。解除激活BYOD设备管理应用时，仅支持传入当前应用的企业设备管理
   *     扩展组件。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。
   *     <br> - 调用接口时，若传入userId，表示指定用户。
   *     <br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<void> } 无返回结果的Promise对象。当解除激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function disableAdmin(admin: Want, userId?: number): Promise<void>;

  /**
   * 根据bundleName将超级设备管理应用解除激活。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { String } bundleName - 超级设备管理应用的包名。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String, callback: AsyncCallback<void>): void;

  /**
   * 根据bundleName将超级设备管理应用解除激活。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { String } bundleName - 超级设备管理应用的包名。
   * @returns { Promise<void> } 无返回结果的Promise对象。当解除激活超级设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function disableSuperAdmin(bundleName: String): Promise<void>;

  /**
   * 查询当前用户下指定的设备管理应用是否被激活。使用callback异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<boolean> } callback - 回调函数，当接口调用成功，err为null，data为boolean值，true表示当前用户下指定的设备管理应用被激活，false表示当前用
   *     户下指定的设备管理应用未激活，否则err为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, callback: AsyncCallback<boolean>): void;

  /**
   * 查询指定用户（通过userId指定）下指定的设备管理应用是否被激活。使用callback异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } userId - 用户ID，指定具体用户，取值范围：大于等于0。
   *     <br> 默认值：当前用户。
   * @param { AsyncCallback<boolean> } callback - 回调函数，当接口调用成功，err为null，data为boolean值，true表示当前用户下指定的设备管理应用被激活，false表示当前用
   *     户下指定的设备管理应用未激活，否则err为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId: number, callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前/指定用户下指定的设备管理应用是否被激活。使用Promise异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { number } [userId] - 用户ID，取值范围：大于等于0。
   *     <br> - 调用接口时，若传入userId，表示指定用户。
   *     <br> - 调用接口时，若未传入userId，表示当前用户。
   * @returns { Promise<boolean> } Promise对象, 返回true表示指定的设备管理应用被激活，返回false表示指定的设备管理应用未激活。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isAdminEnabled(admin: Want, userId?: number): Promise<boolean>;

  /**
   * 根据企业设备管理扩展组件查询当前应用是否被激活为BYOD设备管理应用。
   *
   * @permission ohos.permission.START_PROVISIONING_MESSAGE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。仅支持传入当前应用的企业设备管理扩展组件。
   * @returns { boolean } 返回true表示被激活为BYOD设备管理应用，返回false表示没有被激活为BYOD设备管理应用。
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 20
   */
  function isByodAdmin(admin: Want): boolean;

  /**
   * 获取设备管理应用的企业信息。使用callback异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AsyncCallback<EnterpriseInfo> } callback - 回调函数，当接口调用成功，err为null，data为设备管理应用的企业信息，否则err为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getEnterpriseInfo(admin: Want, callback: AsyncCallback<EnterpriseInfo>): void;

  /**
   * 获取设备管理应用的企业信息，使用Promise异步回调。
   *
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<EnterpriseInfo> } Promise对象，返回设备管理应用的企业信息。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function getEnterpriseInfo(admin: Want): Promise<EnterpriseInfo>;

  /**
   * 设置设备管理应用的企业信息。使用callback异步回调。
   *
   * @permission ohos.permission.SET_ENTERPRISE_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo, callback: AsyncCallback<void>): void;

  /**
   * 设置设备管理应用的企业信息。使用Promise异步回调。
   *
   * @permission ohos.permission.SET_ENTERPRISE_INFO
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { EnterpriseInfo } enterpriseInfo - 设备管理应用的企业信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。当设置设备管理应用企业信息失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo): Promise<void>;

  /**
   * 根据bundleName查询首用户（u100）下的超级设备管理应用是否被激活。使用callback异步回调。
   *
   * @param { String } bundleName - 超级设备管理应用。
   * @param { AsyncCallback<boolean> } callback - 回调函数，当接口调用成功，err为null，data为boolean类型值，true表示当前用户下指定的设备管理应用被激活，false表示当
   *     前用户下指定的设备管理应用未激活，否则err为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String, callback: AsyncCallback<boolean>): void;

  /**
   * 根据bundleName查询首用户（u100）下的超级设备管理应用是否被激活。使用Promise异步回调。
   *
   * @param { String } bundleName - 超级设备管理应用。
   * @returns { Promise<boolean> } Promise对象, 返回true表示指定的超级设备管理应用被激活，返回false表示指定的超级设备管理应用未激活。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   */
  function isSuperAdmin(bundleName: String): Promise<boolean>;

  /**
   * 订阅系统管理事件。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 订阅事件数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.subscribeManagedEventSync
   */
  function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void;

  /**
   * 订阅系统管理事件。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 订阅事件数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。当订阅系统事件失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.subscribeManagedEventSync
   */
  function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>;

  /**
   * 取消订阅系统管理事件。使用callback异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 取消订阅事件数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.unsubscribeManagedEventSync
   */
  function unsubscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void;

  /**
   * 取消订阅系统管理事件。使用Promise异步回调。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 取消订阅事件数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。当取消订阅系统管理事件失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 9
   * @deprecated since 26.0.0
   * @useinstead adminManager.unsubscribeManagedEventSync
   */
  function unsubscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>;

  /**
   * 授予指定应用管理员权限。使用callback异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被授予管理员权限应用的包名。
   * @param { AsyncCallback<void> } callback - 回调函数，当接口调用成功，err为null，否则为错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function authorizeAdmin(admin: Want, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * 授予指定应用管理员权限。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被授予管理员权限应用的包名。
   * @returns { Promise<void> } 无返回结果的Promise对象。当授予指定应用管理员权限失败时，抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  function authorizeAdmin(admin: Want, bundleName: string): Promise<void>;

  /**
   * 查询首用户（u100）下的超级设备管理应用。使用Promise异步回调。
   *
   * @returns { Promise<Want> } 返回超级设备管理应用的Promise对象。当设备没有激活超级管理应用时，返回的Promise中Want的bundleName与abilityName为空串。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getSuperAdmin(): Promise<Want>;

  /**
   * 订阅系统管理事件。调用成功后，当已订阅的系统管理事件发生时，设备管理应用将收到相应的通知。
   *
   * 从API版本26.0.0开始，非超级设备管理应用调用该接口订阅[MANAGED_EVENT_POLICIES_CHANGED]{@link adminManager.ManagedEvent}事件时返回9200002错误码。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 订阅事件数组，用于指定需要订阅的系统管理事件。数组元素为
   *     [ManagedEvent]{@link adminManager.ManagedEvent}枚举值，可订阅多个事件类型，如应用安装/卸载/启动/停止事件、系统更新事件等。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the
   *     device. [since 26.0.0]
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function subscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void;

  /**
   * 取消订阅系统管理事件。调用成功后，将不再收到已取消订阅的系统管理事件通知。
   *
   * @permission ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Array<ManagedEvent> } managedEvents - 取消订阅事件数组，用于指定需要取消订阅的系统管理事件。数组元素为
   *     [ManagedEvent]{@link adminManager.ManagedEvent}枚举值，应与订阅时传入的事件类型一致。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200008 - The specified system event is invalid.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 12
   */
  function unsubscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void;

  /**
   * 将指定应用替换成超级设备管理应用。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } oldAdmin - 原有企业设备管理扩展组件。Want中必须包含原有企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { Want } newAdmin - 新企业设备管理扩展组件。Want中必须包含新的企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { boolean } isKeepPolicy - 是否保留原有企业设备管理扩展组件的策略，取值为true表示保留，取值为false表示不保留。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200011 - Failed to replace the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 18
   */
  function replaceSuperAdmin(oldAdmin: Want, newAdmin: Want, isKeepPolicy: boolean): void;

  /**
   * 委托其他应用来设置设备的管控策略。被委托的其他应用需申请委托策略对应接口所需权限。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被委托应用包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过
   *     [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}接口查询应用自身的
   *     [BundleInfo]{@link ./bundleManager/BundleInfo}，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。
   * @param { Array<string> } policies -
   [委托策略列表](docroot://mdm/mdm-kit-appendix.md#可委托策略列表)。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function setDelegatedPolicies(admin: Want, bundleName: string, policies: Array<string>): void;

  /**
   * 委托其他应用来设置设备的管控策略。被委托的其他应用需申请委托策略对应接口所需权限。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { string } bundleName - 将要被委托的管理应用的包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}接口查询应用
   *     自身的BundleInfo，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。
   * @param { number } accountId - 用户ID，指定具体用户，取值范围：大于等于0。可以通过
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId()}
   * @param { Array<string> } policies -
   [委托策略列表](docroot://mdm/mdm-kit-appendix.md#可委托策略列表)。
   * @throws { BusinessError } 9200009 - Failed to grant the permission to the application.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  function setDelegatedPolicies(bundleName: string, accountId: number, policies: Array<string>): void;

  /**
   * 查询被委托应用可访问的策略列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } bundleName - 被委托应用包名。被委托应用的分发类型需为enterprise_normal和enterprise_mdm，可以通过
   *     [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}接口查询应用自身的
   *     [BundleInfo]{@link ./bundleManager/BundleInfo}，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。
   * @returns { Array<string> } 委托策略列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getDelegatedPolicies(admin: Want, bundleName: string): Array<string>;

  /**
   * 查询可以访问某个委托策略的被委托应用，输出被委托应用列表。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DELEGATED_POLICY
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } policy - 委托策略。
   * @returns { Array<string> } 被委托应用列表。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 14
   */
  function getDelegatedBundleNames(admin: Want, policy: string): Array<string>;

  /**
   * 设备管理应用拉起BYOD管理员激活页面进行激活。
   *
   * @permission ohos.permission.START_PROVISIONING_MESSAGE
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { AdminType } type - 激活的设备管理应用类型，仅支持ADMIN_TYPE_BYOD类型。
   * @param { common.Context } context - 管理应用的上下文信息。
   * @param { Record<string, string> } parameters - 自定义参数信息，其中Key值必须包含："activateId"，可以包含"customizedInfo"、"
   *     localDeactivationPolicy"。<br/>- activateId：项目激活ID。<br/>- customizedInfo：企业自定义信息。<br/>- localDeactivationPolicy：
   *     从API version 22开始支持，本地延迟取消激活时间（单位：小时）。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 15
   */
  function startAdminProvision(admin: Want, type: AdminType, context: common.Context, parameters: Record<string, string>): void;

  /**
   * 查询当前用户下的所有设备管理应用。使用Promise异步回调。
   *
   * @returns { Promise<Array<Want>> } 包含所有已激活的设备管理应用的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 15
   */
  function getAdmins(): Promise<Array<Want>>;

  /**
   * 设置设备管理应用的运行模式。
   *
   * @permission ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { RunningMode } mode - 运行模式。取值为DEFAULT表示默认用户运行模式，即应用在首次开机后的用户下运行。取值为MULTI_USER表示多用户运行模式，即应用能够在多个用户下同时运行。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 19
   */
  function setAdminRunningMode(admin: Want, mode: RunningMode): void;

  /**
   * [SDA](docroot://mdm/mdm-kit-term.md#super-device-admin-sda超级设备管理员)应用通过该接口可以激活其他
   * [DA](docroot://mdm/mdm-kit-term.md#device-admin-da普通设备管理员)应用，使用Promise异步回调。调用成功后，指定的DA应用将被激活并具备设备管理能力。该接口仅支持超级设备管理应
   * 用调用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<void> } 无返回结果的Promise对象。当激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function enableDeviceAdmin(admin: Want): Promise<void>;

  /**
   * [SDA](docroot://mdm/mdm-kit-term.md#super-device-admin-sda超级设备管理员)应用通过该接口可以解除激活其他
   * [DA](docroot://mdm/mdm-kit-term.md#device-admin-da普通设备管理员)应用，使用Promise异步回调。调用成功后，指定的DA应用将被解除激活，不再具备设备管理能力。该接口仅支持超级设
   * 备管理应用调用。
   *
   * @permission ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @returns { Promise<void> } 无返回结果的Promise对象。当解除激活设备管理应用失败时，会抛出错误对象。
   * @throws { BusinessError } 9200001 - The application is not an administrator application of the device.
   * @throws { BusinessError } 9200002 - The administrator application does not have permission to manage the device.
   * @throws { BusinessError } 9200005 - Failed to deactivate the administrator application of the device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 23
   */
  function disableDeviceAdmin(admin: Want): Promise<void>;

  /**
   * 查询企业定制信息
   *
   * @returns { Promise<string> } returns the enterprise message tips.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getEnterpriseManagedTips(): Promise<string>;

  /**
   * 在企业设备中，MDM应用没有预置激活的场景下，MDM应用可以通过该接口实现自激活。该接口仅支持激活MDM应用自身，不支持激活其他MDM应用；支持的激活类型包括超级设备管理应用和普通设备管理应用。
   *
   * @permission ohos.permission.ENTERPRISE_ACTIVATE_DEVICE_ADMIN
   * @param { Want } admin - 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。
   * @param { string } credential - 激活凭证。
   * @throws { BusinessError } 9200003 - The administrator ability component is invalid.
   * @throws { BusinessError } 9200004 - Failed to activate the administrator application of the device.
   * @throws { BusinessError } 9200012 - Parameter verification failed.
   * @throws { BusinessError } 9200017 - The self-activation credential of the enterprise device administrator
   *     is invalid.
   * @throws { BusinessError } 9200018 - This device is not an enterprise device.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @syscap SystemCapability.Customization.EnterpriseDeviceManager
   * @stagemodelonly
   * @since 26.0.0
   */
  function enableSelfDeviceAdmin(admin: Want, credential: string): void;
}

export default adminManager;