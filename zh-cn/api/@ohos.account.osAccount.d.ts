/*
 * Copyright (c) 2021-2026 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import type distributedAccount from './@ohos.account.distributedAccount';
import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
/*** if arkts static */
import type { RecordData } from './@ohos.base';
/*** endif */

/**
 * 本模块提供管理系统账号的基础能力，包括系统账号的添加、删除、查询、设置、订阅、启动等功能。
 *
 * @syscap SystemCapability.Account.OsAccount
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace osAccount {
  /**
   * 获取系统账号管理对象。
   *
   * @returns { AccountManager } 系统账号管理对象。
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  function getAccountManager(): AccountManager;

  /**
   * 获取系统账号子身份资料管理器。
   *
   * @returns { OsAccountSubProfileManager } 系统账号子身份资料管理器的实例对象。
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getOsAccountSubProfileManager(): OsAccountSubProfileManager;

  /**
   * 获取系统账号授权管理器。
   *
   * @returns { AuthorizationManager } 返回系统账号授权管理的实例对象。
   * @throws { BusinessError } 202 - Not system application.
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAuthorizationManager(): AuthorizationManager;

  /**
   * 检查是否支持域账号。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示支持域账号；返回false表示不支持。
   * @throws { BusinessError } 12300001 - The system service works abnormally.
   * @syscap SystemCapability.Account.OsAccount
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isDomainAccountSupported(): Promise<boolean>;

  /**
   * 系统账号管理类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface AccountManager {
    /**
     * 激活指定系统账号。使用callback异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - 系统账号ID。
     * @param { AsyncCallback<void> } callback - 回调函数。当账号激活成功时，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300009 - Account has been activated. [since 7 - 11]
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being
     *     operated. [since 12]
     * @throws { BusinessError } 12300016 - The number of logged in accounts reaches the upper limit. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    activateOsAccount(localId: int, callback: AsyncCallback<void>): void;

    /**
     * 激活指定系统账号。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300009 - Account has been activated. [since 7 - 11]
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being
     *     operated. [since 12]
     * @throws { BusinessError } 12300016 - The number of logged in accounts reaches the upper limit. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    activateOsAccount(localId: int): Promise<void>;

    /**
     * 在指定逻辑屏激活（前台启动或切换）目标系统账号。使用Promise异步回调。
     * 当前不支持跨逻辑屏激活，即在指定逻辑屏上激活另一个已在逻辑屏前台运行的系统账号。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - 系统账号ID。
     * @param { long } displayId - 逻辑屏ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @throws { BusinessError } 12300016 - The number of logged in accounts reaches the upper limit.
     * @throws { BusinessError } 12300018 - Display not found.
     * @throws { BusinessError } 12300019 - Cross-display activation not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    activateOsAccount(localId: int, displayId: long): Promise<void>;

    /**
     * 注销（退出登录）指定系统账号。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    deactivateOsAccount(localId: int): Promise<void>;

    /**
     * 判断是否支持多系统账号。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [checkMultiOsAccountEnabled]{@link osAccount.AccountManager.checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>)}
     * > 替代。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示支持多系统账号；返回false表示不支持。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>)
     */
    isMultiOsAccountEnable(callback: AsyncCallback<boolean>): void;

    /**
     * 判断是否支持多系统账号。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [checkMultiOsAccountEnabled]{@link osAccount.AccountManager.checkMultiOsAccountEnabled()}替代。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示支持多系统账号；返回false表示不支持。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkMultiOsAccountEnabled()
     */
    isMultiOsAccountEnable(): Promise<boolean>;

    /**
     * 判断是否支持多系统账号。使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示支持多系统账号；返回false表示不支持。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkMultiOsAccountEnabled(callback: AsyncCallback<boolean>): void;

    /**
     * 判断是否支持多系统账号。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示支持多系统账号；返回false表示不支持。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkMultiOsAccountEnabled(): Promise<boolean>;

    /**
     * 判断指定系统账号是否处于激活状态。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示账号已激活；返回false表示账号未激活。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountActivated(localId: number, callback: AsyncCallback<boolean>)
     */
    isOsAccountActived(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * 判断指定系统账号是否处于激活状态。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @returns { Promise<boolean> } Promise对象。返回true表示账号已激活；返回false表示账号未激活。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountActivated(localId: number)
     */
    isOsAccountActived(localId: number): Promise<boolean>;

    /**
     * 判断指定系统账号是否处于激活状态。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示账号已激活；返回false表示账号未激活。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountActivated(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * 判断指定系统账号是否处于激活状态。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @returns { Promise<boolean> } Promise对象。返回true表示账号已激活；返回false表示账号未激活。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountActivated(localId: number): Promise<boolean>;

    /**
     * 判断指定系统账号是否处于激活状态。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<boolean> } Promise对象。返回true表示账号已激活；返回false表示账号未激活。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountActivated(localId: int): Promise<boolean>;

    /**
     * 判断指定系统账号是否具有指定约束。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { string } constraint - 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示已使能指定的约束；返回false表示未使能指定的约束。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountConstraintEnabled(localId: number, constraint: string, callback: AsyncCallback<boolean>)
     */
    isOsAccountConstraintEnable(localId: number, constraint: string, callback: AsyncCallback<boolean>): void;

    /**
     * 判断指定系统账号是否具有指定约束。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { string } constraint - 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @returns { Promise<boolean> } Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountConstraintEnabled(localId: number, constraint: string)
     */
    isOsAccountConstraintEnable(localId: number, constraint: string): Promise<boolean>;

    /**
     * 判断指定系统账号是否具有指定约束。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { string } constraint - 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示已使能指定的约束；返回false表示未使能指定的约束。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountConstraintEnabled(localId: number, constraint: string, callback: AsyncCallback<boolean>): void;

    /**
     * 判断指定系统账号是否具有指定约束。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { string } constraint - 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @returns { Promise<boolean> } Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountConstraintEnabled(localId: number, constraint: string): Promise<boolean>;

    /**
     * 判断当前系统账号是否使能指定约束。使用Promise异步回调。
     *
     * @param { string } constraint - 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @returns { Promise<boolean> } Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountConstraintEnabled(constraint: string): Promise<boolean>;

    /**
     * 判断指定系统账号是否使能指定约束。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { string } constraint - 指定的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @returns { Promise<boolean> } Promise对象。返回true表示已使能指定的约束；返回false表示未使能指定的约束。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountConstraintEnabled(localId: int, constraint: string): Promise<boolean>;

    /**
     * 检查当前系统账号是否为测试账号。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [checkOsAccountTestable]{@link osAccount.AccountManager.checkOsAccountTestable(callback: AsyncCallback<boolean>)}
     * > 替代。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountTestable(callback: AsyncCallback<boolean>)
     */
    isTestOsAccount(callback: AsyncCallback<boolean>): void;

    /**
     * 检查当前系统账号是否为测试账号。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [checkOsAccountTestable]{@link osAccount.AccountManager.checkOsAccountTestable()}替代。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountTestable()
     */
    isTestOsAccount(): Promise<boolean>;

    /**
     * 检查当前系统账号是否为测试账号。使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号；默认为false。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkOsAccountTestable(callback: AsyncCallback<boolean>): void;

    /**
     * 检查当前系统账号是否为测试账号。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前账号为测试账号；返回false表示当前账号非测试账号；默认为false。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkOsAccountTestable(): Promise<boolean>;

    /**
     * 检查当前系统账号是否已验证。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [checkOsAccountVerified]{@link osAccount.AccountManager.checkOsAccountVerified(callback: AsyncCallback<boolean>)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示指定账号已验证；返回false表示指定账号未验证。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountVerified(callback: AsyncCallback<boolean>)
     */
    isOsAccountVerified(callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定系统账号是否已验证。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示指定账号已验证；返回false表示指定账号未验证。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountVerified(localId: number, callback: AsyncCallback<boolean>)
     */
    isOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定系统账号是否已验证。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。不填则检查当前系统账号是否已验证，默认为-1。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定账号已验证；返回false表示指定账号未验证。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.checkOsAccountVerified(localId: number)
     */
    isOsAccountVerified(localId?: number): Promise<boolean>;

    /**
     * 检查当前系统账号是否已认证解锁。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。建议使用
     * > [isOsAccountUnlocked]{@link osAccount.AccountManager.isOsAccountUnlocked()}替代。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.AccountManager.isOsAccountUnlocked()
     */
    checkOsAccountVerified(callback: AsyncCallback<boolean>): void;

    /**
     * 检查当前系统账号是否已认证解锁。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。建议使用
     * > [isOsAccountUnlocked]{@link osAccount.AccountManager.isOsAccountUnlocked()}替代。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.AccountManager.isOsAccountUnlocked()
     */
    checkOsAccountVerified(): Promise<boolean>;

    /**
     * 检查指定系统账号是否已验证。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountVerified(localId: number, callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定系统账号是否已验证。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。不填则检查当前系统账号是否已验证。
     * @returns { Promise<boolean> } Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    checkOsAccountVerified(localId: number): Promise<boolean>;

    /**
     * 检查当前系统账号是否已认证解锁。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountUnlocked(): Promise<boolean>;

    /**
     * 检查指定系统账号是否已验证。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。不填则检查当前系统账号是否已验证。
     * @returns { Promise<boolean> } Promise对象。返回true表示当前账号已认证解锁；返回false表示当前账号未认证解锁。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isOsAccountUnlocked(localId: int): Promise<boolean>;

    /**
     * 删除指定系统账号。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { AsyncCallback<void> } callback - 回调函数。如果删除账号成功，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated on.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    removeOsAccount(localId: int, callback: AsyncCallback<void>): void;

    /**
     * 删除指定系统账号。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    removeOsAccount(localId: int): Promise<void>;

    /**
     * 根据删除选项，删除指定系统账号。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { RemoveOsAccountOptions } options - 删除系统账号的选项。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated on.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 24 dynamic&static
     */
    removeOsAccount(localId: int, options: RemoveOsAccountOptions): Promise<void>;

    /**
     * 为指定系统账号设置/删除约束。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { Array<string> } constraints - 待设置/删除的
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)列表。
     * @param { boolean } enable - 设置(true)/删除(false) 。
     * @param { AsyncCallback<void> } callback - 回调函数。如果设置成功，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraints.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountConstraints(localId: int, constraints: Array<string>, enable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 为指定系统账号设置/删除约束。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { Array<string> } constraints - 待设置/删除的
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)列表。
     * @param { boolean } enable - 设置(true)/删除(false)。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or constraints.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountConstraints(localId: int, constraints: Array<string>, enable: boolean): Promise<void>;

    /**
     * 设置指定系统账号的账号名。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { string } localName - 账号名，最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。如果设置成功，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or localName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountName(localId: int, localName: string, callback: AsyncCallback<void>): void;

    /**
     * 设置指定系统账号的账号名。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { string } localName - 账号名，最大长度为1024个字符。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or localName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountName(localId: int, localName: string): Promise<void>;

    /**
     * 查询调用方所属系统账号的名称。使用Promise异步回调。
     *
     * @returns { Promise<string> } Promise对象，返回调用方所属系统账号的名称。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 12 dynamic
     * @since 23 static
     */
    getOsAccountName(): Promise<string>;

    /**
     * 根据系统账号的本地ID获取系统账号的名称。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @param { int } localId - 目标系统账号的本地ID。
     * @returns { Promise<string> } Promise对象，返回目标系统账号的名称。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountNameByLocalId(localId: int): Promise<string>;

    /**
     * 获取已创建的系统账号数量。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountCount]{@link osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)}替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<number> } callback - 回调函数。如果获取成功，err为null，data为已创建的系统账号的数量；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountCount(callback: AsyncCallback<int>)
     */
    getCreatedOsAccountsCount(callback: AsyncCallback<number>): void;

    /**
     * 获取已创建的系统账号数量。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountCount]{@link osAccount.AccountManager.getOsAccountCount()}替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<number> } Promise对象，返回已创建的系统账号的数量。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountCount()
     */
    getCreatedOsAccountsCount(): Promise<number>;

    /**
     * 获取已创建的系统账号数量。使用callback异步回调。
     * 该接口仅限系统应用调用。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<int> } callback - 回调函数。如果获取成功，err为null，data为已创建的系统账号的数量；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountCount(callback: AsyncCallback<int>): void;

    /**
     * 获取已创建的系统账号数量。使用Promise异步回调。
     * 该接口仅限系统应用调用。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<int> } Promise对象，返回已创建的系统账号的数量。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountCount(): Promise<int>;

    /**
     * 获取当前进程所属的系统账号ID。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalId]{@link osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}替代。
     *
     * @param { AsyncCallback<number> } callback - 回调函数。如果获取成功，err为null，data为当前进程所属的系统账号ID；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdFromProcess(callback: AsyncCallback<number>): void;

    /**
     * 获取当前进程所属的系统账号ID。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalId]{@link osAccount.AccountManager.getOsAccountLocalId()}替代。
     *
     * @returns { Promise<number> } Promise对象，返回当前进程所属的系统账号ID。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalId()
     */
    getOsAccountLocalIdFromProcess(): Promise<number>;

    /**
     * 获取当前进程所属的系统账号ID。使用callback异步回调。
     *
     * @param { AsyncCallback<int> } callback - 回调函数。如果获取成功，err为null，data为当前进程所属的系统账号ID；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalId(callback: AsyncCallback<int>): void;

    /**
     * 获取当前进程所属的系统账号ID。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回当前进程所属的系统账号ID。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalId(): Promise<int>;

    /**
     * 获取所有非系统级的操作系统账号的本地ID。非系统级的操作系统账号对用户可见，通常用于登录等操作。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @returns { Promise<int[]> } Promise对象，返回所有非系统级的操作系统账号的本地ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountLocalIds(): Promise<int[]>;

    /**
     * 根据uid查询对应的系统账号ID。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalIdForUid]{@link osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>)}
     * > 替代。
     *
     * @param { number } uid - 进程uid。
     * @param { AsyncCallback<number> } callback - 回调函数。如果查询成功，err为null，data为对应的系统账号ID；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdFromUid(uid: number, callback: AsyncCallback<number>): void;

    /**
     * 根据uid查询对应的系统账号ID。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalIdForUid]{@link osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int)}替代。
     *
     * @param { number } uid - 进程uid。
     * @returns { Promise<number> } Promise对象，返回uid对应的系统账号ID。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForUid(uid: int)
     */
    getOsAccountLocalIdFromUid(uid: number): Promise<number>;

    /**
     * 根据uid查询对应的系统账号ID。使用callback异步回调。
     *
     * @param { int } uid - 进程uid。
     * @param { AsyncCallback<int> } callback - 回调函数。如果查询成功，err为null，data为对应的系统账号ID；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForUid(uid: int, callback: AsyncCallback<int>): void;

    /**
     * 根据uid查询对应的系统账号ID。使用Promise异步回调。
     *
     * @param { int } uid - 进程uid。
     * @returns { Promise<int> } Promise对象，返回指定uid对应的系统账号ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForUid(uid: int): Promise<int>;

    /**
     * 根据uid查询对应的系统账号ID。使用同步方式返回结果。
     *
     * @param { int } uid - 进程uid。
     * @returns { int } 返回指定uid对应的系统账号ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForUidSync(uid: int): int;

    /**
     * 根据域账号信息，获取与其关联的系统账号的账号ID。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalIdForDomain]{@link osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - 域账号信息。
     * @param { AsyncCallback<number> } callback - 回调函数，如果获取成功，err为null，data为域账号关联的系统账号ID；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<number>): void;

    /**
     * 根据域账号信息，获取与其关联的系统账号的账号ID。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalIdForDomain]{@link osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - 域账号信息。
     * @returns { Promise<number> } Promise对象，返回域账号关联的系统账号ID。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo)
     */
    getOsAccountLocalIdFromDomain(domainInfo: DomainAccountInfo): Promise<number>;

    /**
     * 根据域账号信息，获取与其关联的系统账号ID。使用callback异步回调。
     * 该接口仅限系统应用调用。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - 域账号信息。
     * @param { AsyncCallback<int> } callback - 回调函数。如果查询成功，err为null，data为域账号关联的系统账号ID；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainInfo.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo, callback: AsyncCallback<int>): void;

    /**
     * 根据域账号信息，获取与其关联的系统账号的账号ID。使用Promise异步回调。
     * 该接口仅限系统应用调用。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainInfo - 域账号信息。
     * @returns { Promise<int> } Promise对象，返回域账号关联的系统账号ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainInfo.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForDomain(domainInfo: DomainAccountInfo): Promise<int>;

    /**
     * 查询允许创建的系统账号的最大数量。使用callback异步回调。
     *
     * @param { AsyncCallback<int> } callback - 回调函数，如果查询成功，err为null，data为允许创建的系统账号的最大数量；否则为错误对象。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryMaxOsAccountNumber(callback: AsyncCallback<int>): void;

    /**
     * 查询允许创建的系统账号的最大数量。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回允许创建的系统账号的最大数量。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryMaxOsAccountNumber(): Promise<int>;

    /**
     * 查询允许同时登录的系统账号的最大数量。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回允许登录的系统账号的最大数量。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    queryMaxLoggedInOsAccountNumber(): Promise<int>;

    /**
     * 获取指定系统账号的全部约束。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<Array<string>> } callback - 回调函数。如果获取成功，err为null，data为指定系统账号的全部
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountConstraints(localId: number, callback: AsyncCallback<Array<string>>)
     */
    getOsAccountAllConstraints(localId: number, callback: AsyncCallback<Array<string>>): void;

    /**
     * 获取指定系统账号的全部约束。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @returns { Promise<Array<string>> } Promise对象，返回指定系统账号的全部
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountConstraints(localId: number)
     */
    getOsAccountAllConstraints(localId: number): Promise<Array<string>>;

    /**
     * 获取指定系统账号的全部约束。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<Array<string>> } callback - 回调函数，如果获取成功，err为null，data为该系统账号的全部
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getOsAccountConstraints(localId: number, callback: AsyncCallback<Array<string>>): void;

    /**
     * 获取指定系统账号的全部约束。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @returns { Promise<Array<string>> } Promise对象，返回指定系统账号的全部
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getOsAccountConstraints(localId: number): Promise<Array<string>>;

    /**
     * 获取指定系统账号已使能的全部约束。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<Array<string>> } Promise对象，返回指定系统账号已使能的全部
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    getEnabledOsAccountConstraints(localId: int): Promise<Array<string>>;

    /**
     * 查询已创建的所有系统账号的信息列表。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<Array<OsAccountInfo>> } callback - 回调函数。如果查询成功，err为null，data为已创建的所有系统账号的信息列表；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryAllCreatedOsAccounts(callback: AsyncCallback<Array<OsAccountInfo>>): void;

    /**
     * 查询已创建的所有系统账号的信息列表。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<Array<OsAccountInfo>> } Promise对象，返回已创建的所有系统账号的信息列表。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryAllCreatedOsAccounts(): Promise<Array<OsAccountInfo>>;

    /**
     * 查询当前处于激活状态的系统账号的ID列表。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getActivatedOsAccountLocalIds]{@link osAccount.AccountManager.getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>)}
     * > 替代。
     *
     * @param { AsyncCallback<Array<number>> } callback - 回调函数。如果查询成功，err为null，data为当前处于激活状态的系统账号的ID列表；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>)
     */
    queryActivatedOsAccountIds(callback: AsyncCallback<Array<number>>): void;

    /**
     * 查询当前处于激活状态的系统账号的ID列表。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getActivatedOsAccountLocalIds]{@link osAccount.AccountManager.getActivatedOsAccountLocalIds()}替代。
     *
     * @returns { Promise<Array<number>> } Promise对象，返回当前处于激活状态的系统账号的ID列表。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getActivatedOsAccountLocalIds()
     */
    queryActivatedOsAccountIds(): Promise<Array<number>>;

    /**
     * 查询当前处于激活状态的系统账号的ID列表。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<int>> } callback - 回调函数。如果查询成功，err为null，data为当前处于激活状态的系统账号的ID列表；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getActivatedOsAccountLocalIds(callback: AsyncCallback<Array<int>>): void;

    /**
     * 查询当前处于激活状态的系统账号的ID列表。使用Promise异步回调。
     *
     * @returns { Promise<Array<int>> } Promise对象，返回当前处于激活状态的系统账号的ID列表。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getActivatedOsAccountLocalIds(): Promise<Array<int>>;

    /**
     * 获取前台系统账号的ID。使用Promise异步回调。
     *
     * @returns { Promise<int> } Promise对象。返回前台系统账号的ID。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 15 dynamic
     * @since 23 static
     */
    getForegroundOsAccountLocalId(): Promise<int>;

    /**
     * 获取指定逻辑屏上运行的前台系统账号ID。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { long } displayId - 逻辑屏ID。
     * @returns { Promise<int> } Promise对象，返回系统账号ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300017 - The foreground OS account is not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    getForegroundOsAccountLocalId(displayId: long): Promise<int>;

    /**
     * 获取指定前台系统账号所运行的逻辑屏ID。使用Promise异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<long> } Promise对象，返回逻辑屏ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300017 - The foreground OS account is not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    getForegroundOsAccountDisplayId(localId: int): Promise<long>;

    /**
     * 创建一个系统账号。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { string } localName - 创建的系统账号的名称。
     * @param { OsAccountType } type - 创建的系统账号的类型。
     * @param { AsyncCallback<OsAccountInfo> } callback - 回调函数。如果创建成功，err为null，data为新创建的系统账号的信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localName or type.
     * @throws { BusinessError } 12300004 - Local name already exists. [since 12]
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    createOsAccount(localName: string, type: OsAccountType, callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * 创建一个系统账号。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { string } localName - 创建的系统账号的名称。
     * @param { OsAccountType } type - 创建的系统账号的类型。
     * @param { CreateOsAccountOptions } [options] - 创建系统账号的选项，默认为空。<br/>从API version 12开始支持该可选参数。
     * @returns { Promise<OsAccountInfo> } Promise对象，返回新创建的系统账号的信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localName, type or options.
     * @throws { BusinessError } 12300004 - Local name already exists. [since 12]
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300015 - The short name already exists. [since 12]
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    createOsAccount(localName: string, type: OsAccountType, options?: CreateOsAccountOptions): Promise<OsAccountInfo>;

    /**
     * 根据域账号信息，创建一个系统账号并将其与域账号关联。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { OsAccountType } type - 创建的系统账号的类型。
     * @param { DomainAccountInfo } domainInfo - 域账号信息。
     * @param { AsyncCallback<OsAccountInfo> } callback - 回调函数。如果创建成功，err为null，data为新创建的系统账号的信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 801 - Capability not supported. [since 12]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or domainInfo.
     * @throws { BusinessError } 12300004 - Account already exists.
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    createOsAccountForDomain(
      type: OsAccountType,
      domainInfo: DomainAccountInfo,
      callback: AsyncCallback<OsAccountInfo>
    ): void;

    /**
     * 根据传入的域账号信息，创建与其关联的系统账号。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { OsAccountType } type - 创建的系统账号的类型。
     * @param { DomainAccountInfo } domainInfo - 域账号信息。
     * @param { CreateOsAccountForDomainOptions } [options] - 创建账号的可选参数，默认为空。 <br/>从API version 12开始支持该可选参数。
     * @returns { Promise<OsAccountInfo> } Promise对象，返回新创建的系统账号的信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted. [since 24]
     * @throws { BusinessError } 801 - Capability not supported. [since 12]
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type, domainInfo or options.
     * @throws { BusinessError } 12300004 - Account already exists.
     * @throws { BusinessError } 12300005 - Multi-user not supported.
     * @throws { BusinessError } 12300006 - Unsupported account type.
     * @throws { BusinessError } 12300007 - The number of accounts has reached the upper limit.
     * @throws { BusinessError } 12300015 - The short name already exists. [since 12]
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper
     *     limit. [since 24]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    createOsAccountForDomain(type: OsAccountType, domainInfo: DomainAccountInfo, options?: CreateOsAccountForDomainOptions): Promise<OsAccountInfo>;

    /**
     * 查询当前进程所属的系统账号的信息。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<OsAccountInfo> } callback - 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号信息；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>)
     */
    queryCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * 查询当前进程所属的系统账号的信息。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<OsAccountInfo> } Promise对象，返回当前进程所属的系统账号信息。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getCurrentOsAccount()
     */
    queryCurrentOsAccount(): Promise<OsAccountInfo>;

    /**
     * 查询当前进程所属的系统账号的信息。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 9 - 9]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS [since 10]
     * @param { AsyncCallback<OsAccountInfo> } callback - 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getCurrentOsAccount(callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * 查询当前进程所属的系统账号的信息。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 9开始支持，从API version 11开始废弃。替代方法仅向系统应用开放。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 9 - 9]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS [since 10]
     * @returns { Promise<OsAccountInfo> } Promise对象，返回当前进程所属的系统账号信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamiconly
     * @deprecated since 11
     */
    getCurrentOsAccount(): Promise<OsAccountInfo>;

    /**
     * 查询当前进程所属的系统账号的信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.GET_LOCAL_ACCOUNTS
     * @returns { Promise<OsAccountInfo> } Promise对象，返回当前进程所属的系统账号信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    queryOsAccount(): Promise<OsAccountInfo>;

    /**
     * 查询指定系统账号的信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - 要查询的系统账号的ID。
     * @param { AsyncCallback<OsAccountInfo> } callback - 回调函数。如果查询成功，err为null，data为查到的系统账号的信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryOsAccountById(localId: int, callback: AsyncCallback<OsAccountInfo>): void;

    /**
     * 查询指定系统账号的信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { int } localId - 要查询的系统账号的ID。
     * @returns { Promise<OsAccountInfo> } Promise对象，返回查到的系统账号的信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    queryOsAccountById(localId: int): Promise<OsAccountInfo>;

    /**
     * 获取指定系统账号关联的域账号信息。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { number } localId - 系统账号ID。
     * @returns { Promise<DomainAccountInfo> } Promise对象。返回与指定系统账号关联的域账号信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 15 dynamic
     */
    getOsAccountDomainInfo(localId: number): Promise<DomainAccountInfo>;

    /**
     * 获取指定系统账号关联的域账号信息。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<DomainAccountInfo | null> } Promise对象。返回与指定系统账号关联的域账号信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    getOsAccountDomainInfo(localId: int): Promise<DomainAccountInfo | null>;

    /**
     * 查询当前进程所属的系统账号的账号类型。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountType]{@link osAccount.AccountManager.getOsAccountType(callback: AsyncCallback<OsAccountType>)}替代。
     *
     * @param { AsyncCallback<OsAccountType> } callback - 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号的账号类型；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountType(callback: AsyncCallback<OsAccountType>)
     */
    getOsAccountTypeFromProcess(callback: AsyncCallback<OsAccountType>): void;

    /**
     * 查询当前进程所属的系统账号的账号类型。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用[getOsAccountType]{@link osAccount.AccountManager.getOsAccountType()}
     * > 替代。
     *
     * @returns { Promise<OsAccountType> } Promise对象，返回当前进程所属的系统账号的账号类型。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountType()
     */
    getOsAccountTypeFromProcess(): Promise<OsAccountType>;

    /**
     * 查询当前进程所属的系统账号的账号类型。使用callback异步回调。
     *
     * @param { AsyncCallback<OsAccountType> } callback - 回调函数。如果查询成功，err为null，data为当前进程所属的系统账号的账号类型；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountType(callback: AsyncCallback<OsAccountType>): void;

    /**
     * 查询当前进程所属的系统账号的账号类型。使用Promise异步回调。
     *
     * @returns { Promise<OsAccountType> } Promise对象，返回当前进程所属的系统账号的账号类型。
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountType(): Promise<OsAccountType>;

    /**
     * 查询指定系统账号的类型。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } localId - 要查询的系统账号ID。
     * @returns { Promise<OsAccountType> } Promise对象，返回指定系统账号的类型。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getOsAccountType(localId: int): Promise<OsAccountType>;

    /**
     * 设置指定系统账号的账号类型。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { OsAccountType } type - 系统账号类型。
     * @param { SetOsAccountTypeOptions } [options] - 设置系统账号类型的选项。默认为空。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 204 - Access denied due to user access control policy. Possible causes:
     *     1. The operation is restricted by the OS-account constraint.
     *     2. The required privilege for the operation has not been granted.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target account is being operated.
     * @throws { BusinessError } 12300023 - The number of accounts of the specified type has reached the upper limit.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    setOsAccountType(localId: int, type: OsAccountType, options?: SetOsAccountTypeOptions): Promise<void>;

    /**
     * 获取分布式虚拟设备ID。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [queryDistributedVirtualDeviceId]{@link osAccount.AccountManager.queryDistributedVirtualDeviceId(callback: AsyncCallback<string>)}
     * > 替代。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<string> } callback - 回调函数。如果获取成功，err为null，data为分布式虚拟设备ID；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.queryDistributedVirtualDeviceId(callback: AsyncCallback<string>)
     */
    getDistributedVirtualDeviceId(callback: AsyncCallback<string>): void;

    /**
     * 获取分布式虚拟设备ID。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [queryDistributedVirtualDeviceId]{@link osAccount.AccountManager.queryDistributedVirtualDeviceId()}替代。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<string> } Promise对象，返回分布式虚拟设备ID。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.queryDistributedVirtualDeviceId()
     */
    getDistributedVirtualDeviceId(): Promise<string>;

    /**
     * 获取分布式虚拟设备ID。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<string> } callback - 回调函数。如果获取成功，err为null，data为分布式虚拟设备ID；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    queryDistributedVirtualDeviceId(callback: AsyncCallback<string>): void;

    /**
     * 获取分布式虚拟设备ID。使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC or ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<string> } Promise对象，返回分布式虚拟设备ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    queryDistributedVirtualDeviceId(): Promise<string>;

    /**
     * 获取指定系统账号的头像信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { AsyncCallback<string> } callback - 回调函数。如果获取成功，err为null，data为指定系统账号的头像信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    getOsAccountProfilePhoto(localId: int, callback: AsyncCallback<string>): void;

    /**
     * 获取指定系统账号的头像信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<string> } Promise对象，返回指定系统账号的头像信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    getOsAccountProfilePhoto(localId: int): Promise<string>;

    /**
     * 为指定系统账号设置头像信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { string } photo - 头像信息。
     * @param { AsyncCallback<void> } callback - 回调函数。如果设置成功，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or photo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountProfilePhoto(localId: int, photo: string, callback: AsyncCallback<void>): void;

    /**
     * 为指定系统账号设置头像信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { string } photo - 头像信息。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId or photo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300008 - Restricted Account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     * @since 23 static
     */
    setOsAccountProfilePhoto(localId: int, photo: string): Promise<void>;

    /**
     * 通过SN码查询与其关联的系统账号的账号ID。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalIdForSerialNumber]{@link osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>)}
     * > 替代。
     *
     * @param { number } serialNumber - 账号SN码。
     * @param { AsyncCallback<number> } callback - 回调函数。如果查询成功，err为null，data为与SN码关联的系统账号的账号ID；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>)
     */
    getOsAccountLocalIdBySerialNumber(serialNumber: number, callback: AsyncCallback<number>): void;

    /**
     * 通过SN码查询与其关联的系统账号的账号ID。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountLocalIdForSerialNumber]{@link osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long)}
     * > 替代。
     *
     * @param { number } serialNumber - 账号SN码。
     * @returns { Promise<number> } Promise对象，返回与SN码关联的系统账号的账号ID。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getOsAccountLocalIdForSerialNumber(serialNumber: long)
     */
    getOsAccountLocalIdBySerialNumber(serialNumber: number): Promise<number>;

    /**
     * 通过SN码查询与其关联的系统账号的账号ID。使用callback异步回调。
     *
     * @param { long } serialNumber - 账号SN码。
     * @param { AsyncCallback<int> } callback - 回调函数。如果成功，err为null，data为与SN码关联的系统账号的账号ID；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid serialNumber.
     * @throws { BusinessError } 12300003 - The account indicated by serialNumber does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForSerialNumber(serialNumber: long, callback: AsyncCallback<int>): void;

    /**
     * 通过SN码查询与其关联的系统账号的账号ID。使用Promise异步回调。
     *
     * @param { long } serialNumber - 账号SN码。
     * @returns { Promise<int> } Promise对象，返回与SN码关联的系统账号的账号ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid serialNumber.
     * @throws { BusinessError } 12300003 - The account indicated by serialNumber does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountLocalIdForSerialNumber(serialNumber: long): Promise<int>;

    /**
     * 通过系统账号ID获取与该系统账号关联的SN码。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getSerialNumberForOsAccountLocalId]{@link osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>)}
     * > 替代。
     *
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<number> } callback - 回调函数。如果获取成功，err为null，data为与该系统账号关联的SN码；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>)
     */
    getSerialNumberByOsAccountLocalId(localId: number, callback: AsyncCallback<number>): void;

    /**
     * 通过系统账号ID获取与该系统账号关联的SN码。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getSerialNumberForOsAccountLocalId]{@link osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int)}
     * > 替代。
     *
     * @param { number } localId - 系统账号ID。
     * @returns { Promise<number> } Promise对象，返回与该系统账号关联的SN码。
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead osAccount.AccountManager.getSerialNumberForOsAccountLocalId(localId: int)
     */
    getSerialNumberByOsAccountLocalId(localId: number): Promise<number>;

    /**
     * 通过系统账号ID获取与该系统账号关联的SN码。使用callback异步回调。
     *
     * @param { int } localId - 系统账号ID。
     * @param { AsyncCallback<long> } callback - 回调函数。如果获取成功，err为null，data为与该系统账号关联的SN码；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getSerialNumberForOsAccountLocalId(localId: int, callback: AsyncCallback<long>): void;

    /**
     * 通过系统账号ID获取与该系统账号关联的SN码。使用Promise异步回调。
     *
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<long> } Promise对象，返回与该系统账号关联的SN码。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getSerialNumberForOsAccountLocalId(localId: int): Promise<long>;

    /**
     * 订阅系统账号的激活完成与激活中的事件。使用callback异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { 'activate' | 'activating' } type - 订阅类型，activate表示订阅的是账号已激活完成的事件，activating表示订阅的是账号正在激活的事件。
     * @param { string } name - 订阅名称，可自定义，要求非空且长度不超过1024字节。
     * @param { Callback<int> } callback - 订阅系统账号激活完成与激活中的事件回调，表示激活完成后或正在激活中的系统账号ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     */
    on(type: 'activate' | 'activating', name: string, callback: Callback<int>): void;

    /**
     * 取消订阅系统账号的激活完成与激活中的事件。使用callback异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { 'activate' | 'activating' } type - 取消订阅类型，activate表示取消订阅账号已激活完成的事件，activating取消订阅账号正在激活的事件。
     * @param { string } name - 订阅名称，可自定义，要求非空且长度不超过1024字节，需要与订阅接口传入的值保持一致。
     * @param { Callback<int> } callback - 取消订阅系统账号激活完成与激活中的事件回调，默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type or name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 7 dynamic
     */
    off(type: 'activate' | 'activating', name: string, callback?: Callback<int>): void;

    /**
     * 订阅系统账号的前后台正在切换事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switching' } type - 订阅类型，switching表示订阅的是系统账号的前后台正在切换事件。
     * @param { Callback<OsAccountSwitchEventData> } callback - 订阅系统账号的前后台正在切换事件回调，包含切换来源和切换目标的系统账号ID。<br/>**说明：** 从API version
     *     23开始，事件数据中新增可选字段displayId，表示发生切换事件的逻辑屏ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    on(type: 'switching', callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * 取消订阅系统账号的前后台正在切换事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switching' } type - 取消订阅类型，switching表示取消订阅的是系统账号的前后台正在切换事件。
     * @param { Callback<OsAccountSwitchEventData> } [callback] - 取消订阅系统账号的前后台正在切换事件回调，默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    off(type: 'switching', callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * 订阅系统账号的前后台切换结束事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switched' } type - 订阅类型，switched表示订阅的是系统账号的前后台切换结束事件。
     * @param { Callback<OsAccountSwitchEventData> } callback - 订阅系统账号的前后台切换结束事件回调，包含切换来源和切换目标的系统账号ID。<br/>**说明：** 从API version
     *     23开始，事件数据中新增可选字段displayId，表示发生切换事件的逻辑屏ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    on(type: 'switched', callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * 取消订阅系统账号的前后台切换结束事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS [since 12 - 22]
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 23]
     * @param { 'switched' } type - 取消订阅类型，switched表示取消订阅的是系统账号的前后台切换结束事件。
     * @param { Callback<OsAccountSwitchEventData> } [callback] - 取消订阅系统账号的前后台切换结束事件回调，默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    off(type: 'switched', callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * 订阅系统账号的激活完成的事件。使用callback异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - 订阅名称，可自定义，要求非空且长度不超过1024字节。
     * @param { Callback<int> } callback - 订阅系统账号激活完成的事件回调。表示激活完成后的系统账号ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onActivate(name: string, callback: Callback<int>): void;

    /**
     * 订阅系统账号的激活中的事件。使用callback异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - 订阅名称，可自定义，要求非空且长度不超过1024字节。
     * @param { Callback<int> } callback - 订阅系统账号激活中的事件回调，表示正在激活中的系统账号ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onActivating(name: string, callback: Callback<int>): void;

    /**
     * 取消订阅系统账号的激活完成的事件。使用callback异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - 订阅名称，可自定义，要求非空且长度不超过1024字节，需要与订阅接口传入的值保持一致。
     * @param { Callback<int> } [callback] - 取消订阅系统账号激活完成的事件回调。默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offActivate(name: string, callback?: Callback<int>): void;

    /**
     * 取消订阅系统账号的激活中的事件。使用callback异步回调。
     *
     * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS_EXTENSION
     * @param { string } name - 订阅名称，可自定义，要求非空且长度不超过1024字节，需要与订阅接口传入的值保持一致。
     * @param { Callback<int> } [callback] - 取消订阅系统账号激活中的事件回调。默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offActivating(name: string, callback?: Callback<int>): void;

    /**
     * 订阅系统账号的前后台正在切换事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } callback - 订阅系统账号的前后台正在切换事件回调，包含切换来源和切换目标的系统账号ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onSwitching(callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * 取消订阅系统账号的前后台正在切换事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } [callback] - 取消订阅系统账号的前后台正在切换事件回调，默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offSwitching(callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * 订阅系统账号的前后台切换结束事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } callback - 订阅系统账号的前后台切换结束事件回调，包含切换来源和切换目标的系统账号ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    onSwitched(callback: Callback<OsAccountSwitchEventData>): void;

    /**
     * 取消订阅系统账号的前后台切换结束事件。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { Callback<OsAccountSwitchEventData> } [callback] - 取消订阅系统账号的前后台切换结束事件回调，默认为空，表示取消该类型事件的所有回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    offSwitched(callback?: Callback<OsAccountSwitchEventData>): void;

    /**
     * 订阅调用方所属系统账号的一种或多种约束变更事件。使用callback异步回调。
     *
     * @param { string[] } constraints - 表示待订阅的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)列
     *     表。
     * @param { Callback<ConstraintChangeInfo> } callback - 表示用于接收约束变更事件的回调函数。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - One or more constraints are invalid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    onConstraintChanged(constraints: string[], callback: Callback<ConstraintChangeInfo>): void;

    /**
     * 取消与指定回调关联的约束变更订阅记录。若未指定回调，则取消所有订阅记录。
     *
     * @param { Callback<ConstraintChangeInfo> } [callback] - 表示用于接收约束变更事件的回调函数。<br>默认为undefined，表示清除所有订阅记录。<br>非undefined时，表示清
     *     除与该回调函数关联的订阅记录。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    offConstraintChanged(callback?: Callback<ConstraintChangeInfo>): void;

    /**
     * 通过uid查询对应的bundleId。使用callback异步回调。
     *
     * @param { int } uid - 进程uid。
     * @param { AsyncCallback<int> } callback - 回调函数。如果查询成功，err为null，data为与uid对应的bundleId；否则为错误对象。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getBundleIdForUid(uid: int, callback: AsyncCallback<int>): void;

    /**
     * 通过uid查询对应的bundleId。使用Promise异步回调。
     *
     * @param { int } uid - 进程uid。
     * @returns { Promise<int> } Promise对象，返回与uid对应的bundleId。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getBundleIdForUid(uid: int): Promise<int>;

    /**
     * 通过uid查询对应的bundleId。使用同步方式返回结果。
     *
     * @param { int } uid - 进程uid。
     * @returns { int } 表示与进程uid对应的bundleId。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid uid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    getBundleIdForUidSync(uid: int): int;

    /**
     * 查询当前进程是否处于主用户。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { AsyncCallback<boolean> } callback - 回调函数，返回true表示当前账号为主账号，返回false表示当前账号非主账号。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isMainOsAccount(callback: AsyncCallback<boolean>): void;

    /**
     * 查询当前进程是否处于主用户。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @returns { Promise<boolean> } Promise对象，返回true表示当前账号为主账号，返回false表示当前账号非主账号。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    isMainOsAccount(): Promise<boolean>;

    /**
     * 查询指定系统账号的指定约束来源信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 要查询的系统账号ID。
     * @param { string } constraint - 要查询的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @param { AsyncCallback<Array<ConstraintSourceTypeInfo>> } callback - 回调函数。如果成功，err为null，data为指定系统账号的指定
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)来源信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountConstraintSourceTypes(localId: int, constraint: string, callback: AsyncCallback<Array<ConstraintSourceTypeInfo>>): void;

    /**
     * 查询指定系统账号的指定约束来源信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 要查询的系统账号ID。
     * @param { string } constraint - 要查询的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)名称。
     * @returns { Promise<Array<ConstraintSourceTypeInfo>> } Promise对象，返回指定系统账号的指定
     *     [约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)来源信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid name or constraint.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountConstraintSourceTypes(localId: int, constraint: string): Promise<Array<ConstraintSourceTypeInfo>>;

    /**
     * 在指定系统账号上绑定指定域账号。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } localId - 要查询的系统账号ID。
     * @param { DomainAccountInfo } domainAccountInfo - 域账号信息。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domain account information.
     * @throws { BusinessError } 12300003 - The OS account not found.
     * @throws { BusinessError } 12300008 - Restricted OS account. Possible causes: The OS account cannot be bound.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target OS account or
     *     domain account is being operated.
     * @throws { BusinessError } 12300021 - The OS account is already bound.
     * @throws { BusinessError } 12300022 - The domain account is already bound.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    bindDomainAccount(localId: int, domainAccountInfo: DomainAccountInfo): Promise<void>;
  }

  /**
   * 系统账号子身份资料管理器类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface OsAccountSubProfileManager {
    /**
     * 创建一个系统账号子身份资料。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - 目标系统账号的本地标识符。
     *     <br>取值范围为全体整数。
     * @returns { Promise<OsAccountSubProfile> } Promise对象，返回创建的子身份资料。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - The OS account not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The target OS account is being
     *     operated.
     * @throws { BusinessError } 12300402 - The number of sub-profiles under the OS account has reached limit.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    createOsAccountSubProfile(osAccountLocalId: int): Promise<OsAccountSubProfile>;

    /**
     * 删除一个系统账号子身份资料。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - 目标系统账号的本地标识符。
     *     <br>取值范围为全体整数。
     *     <br>The value range is all integers.
     * @param { int } subProfileId - 子身份资料的标识符。
     *     <br>取值范围为全体整数。
     *     <br>The value range is all integers.
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The OS account or sub-profile is being
     *     operated.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @throws { BusinessError } 12300403 - Restricted sub-profile cannot be deleted.
     * @throws { BusinessError } 12300404 - The foreground sub-profile cannot be deleted.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deleteOsAccountSubProfile(osAccountLocalId: int, subProfileId: int): Promise<void>;

    /**
     * 切换至一个系统账号子身份资料。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - 系统账号的本地标识符。
     *     <br>取值范围为全体整数。
     *     <br>The value range is all integers.
     * @param { int } subProfileId - 子身份资料的标识符。
     *     <br>取值范围为全体整数。
     *     <br>The value range is all integers.
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300010 - Service busy. Possible causes: The OS account or sub-profile is being
     *     operated.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @throws { BusinessError } 12300403 - Restricted sub-profile cannot be switched to foreground.
     * @throws { BusinessError } 12300405 - The foreground sub-profile bound with a logged-in distributed account
     *     cannot be directly switched to background.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    switchOsAccountSubProfile(osAccountLocalId: int, subProfileId: int): Promise<void>;

    /**
     * 订阅系统账号子身份资料的事件。
     *
     * @param { OsAccountSubProfileEvent[] } events - 要订阅的事件数组
     * @param { Callback<OsAccountSubProfileEventData> } callback - 事件发生时调用的回调。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid event.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onOsAccountSubProfileEvent(
      events: OsAccountSubProfileEvent[],
      callback: Callback<OsAccountSubProfileEventData>): void;

    /**
     * 取消订阅系统账号子身份资料的事件。
     *
     * @param { Callback<OsAccountSubProfileEventData> } [callback] - 需要取消订阅的回调。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offOsAccountSubProfileEvent(callback?: Callback<OsAccountSubProfileEventData>): void;

    /**
     * 获取调用方所属系统账号的前台子身份资料的标识符。
     *
     * @returns { Promise<int> } Promise对象，返回系统账号的前台子身份资料标识符。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountForegroundSubProfileId(): Promise<int>;

    /**
     * 获取指定系统账号的前台子身份资料标识符。
     *
     * @param { int } osAccountLocalId - 系统账号的本地标识符。
     *     <br>取值范围为全体整数。
     * @returns { Promise<int> } Promise对象，返回系统账号前台子身份资料的标识符。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @throws { BusinessError } 12300401 - The foreground sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountForegroundSubProfileId(osAccountLocalId: int): Promise<int>;

    /**
     * 获取调用者所属系统账号的子身份资料标识符列表。
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @returns { Promise<int[]> } Promise used to return the ID list of sub-profile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfileIds(): Promise<int[]>;

    /**
     * 获取指定系统账号的子身份资料标识符列表。
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNT_IDENTIFIERS
     * @param { int } osAccountLocalId - 系统账号的本地标识符。
     *     <br>取值范围为全体整数。
     *     <br>The value should be an integer.
     * @returns { Promise<int[]> } Promise used to return the ID list of sub-profile.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - OS account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfileIds(osAccountLocalId: int): Promise<int[]>;

    /**
     * 获取调用方所属系统账号的子身份资料对象信息。
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNTS
     * @param { int } subProfileId - 子身份资料的标识符
     *     <br>取值范围为全体整数。
     *     <br>The value should be an integer.
     * @returns { Promise<OsAccountSubProfile> } Promise对象，返回子身份资料对象信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfile(subProfileId: int): Promise<OsAccountSubProfile>;

    /**
     * 获取指定系统账号的子身份资料对象信息。
     *
     * @permission ohos.permission.GET_LOCAL_ACCOUNTS and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { int } osAccountLocalId - 系统账号的本地标识符。
     *     <br>取值范围为全体整数。
     * @param { int } subProfileId - 子身份资料的标识符。
     *     <br>取值范围为全体整数。
     * @returns { Promise<OsAccountSubProfile> } Promise对象，返回子身份资料对象信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountSubProfile(osAccountLocalId: int, subProfileId: int): Promise<OsAccountSubProfile>;

    /**
     * 获取子身份资料所属系统账号的本地标识符。
     *
     * @param { int } subProfileId - 子身份资料的标识符
     *     <br>取值范围为全体整数。
     * @returns { Promise<int> } Promise对象，返回子身份资料所属系统账号的本地ID。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300401 - Sub-profile not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getOsAccountLocalIdForSubProfile(subProfileId: int): Promise<int>;
  }

  /**
   * 系统账号子Profile的定义
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface OsAccountSubProfile {
    /**
     * 系统账号子profile的标识符。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    id: int;

    /**
     * 子profile所属系统账号的本地标识符。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    osAccountLocalId: int;

    /**
     * 系统账号子profile的位置索引，取值范围：0~子profile个数减1。
     * 该索引在每个系统账号下唯一，由系统在创建子Profile时自动分配。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    index: int;

    /**
     * 系统账号子profile绑定的分布式账号信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    distributedInfo?: distributedAccount.DistributedInfo;
  }

  /**
   * 枚举系统账号子profile的事件。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum OsAccountSubProfileEvent {
    /**
     * CREATED事件。
     * 系统账号子profile创建完成时触发。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CREATED = 0,

    /**
     * DELETED事件。
     * 当系统账号子Profile删除完成时触发。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DELETED = 1,

    /**
     * SWITCHING事件。
     * 当系统账号子Profile切换开始时触发。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SWITCHING = 2,

    /**
     * SWITCHED事件。
     * 系统账号子profile切换完成时触发。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SWITCHED = 3
  }

  /**
  * 表示系统账号子Profile事件数据。
  *
  * @syscap SystemCapability.Account.OsAccount
  * @systemapi
  * @stagemodelonly
  * @since 26.0.0 dynamic&static
  */
  interface OsAccountSubProfileEventData {
    /**
     * 发生的事件。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    event: OsAccountSubProfileEvent;

    /**
     * 系统账号本地ID。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    osAccountLocalId: int;

    /**
     * 系统账号子profile标识。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    subProfileId: int;

    /**
     * 上一个系统账号子Profile标识符。
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    previousSubProfileId?: int;
  }

  /**
   * 表示系统账号信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface OsAccountInfo {
    /**
     * 系统账号ID。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    localId: int;

    /**
     * 系统账号名称。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    localName: string;

    /**
     * 系统账号的短名称。
     * 
     * 此接口为系统接口，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    shortName?: string;

    /**
     * 系统账号类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    type: OsAccountType;

    /**
     * 系统账号[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    constraints: Array<string>;

    /**
     * 账号是否验证。true表示指定账号已验证；false表示指定账号未验证。
     * 
     * **说明：**从API version 7开始支持，从API version 11开始废弃，建议使用isUnlocked。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.OsAccountInfo.isUnlocked
     */
    isVerified: boolean;

    /**
     * 账号是否已解锁（EL2级别目录是否解密）。true表示指定账号已解锁；false表示指定账号未解锁。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isUnlocked: boolean;

    /**
     * 系统账号头像，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    photo: string;

    /**
     * 系统账号创建时间，以Unix时间戳格式表示，单位为s。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    createTime: long;

    /**
     * 系统账号最后一次登录时间，以Unix时间戳格式表示，单位为s。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    lastLoginTime: long;

    /**
     * 系统账号SN码。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    serialNumber: long;

    /**
     * 系统账号激活状态。true表示指定账号处于激活状态；false表示指定账号处于未激活状态。
     * 
     * **说明：**从API version 7开始支持，从API version 11开始废弃，建议使用isActivated。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamiconly
     * @deprecated since 11
     * @useinstead osAccount.OsAccountInfo.isActivated
     */
    isActived: boolean;

    /**
     * 系统账号是否激活。true表示指定账号已激活；false表示指定账号未激活。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 11 dynamic
     * @since 23 static
     */
    isActivated: boolean;

    /**
     * 是否登录。true表示已登录；false表示未登录。
     * 
     * 此接口为系统接口，默认为false。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    isLoggedIn?: boolean;

    /**
     * 系统账号创建是否完整。true表示指定账号已创建完整；false表示指定账号未创建完整。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    isCreateCompleted: boolean;

    /**
     * 分布式账号信息，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    distributedInfo: distributedAccount.DistributedInfo;

    /**
     * 域账号信息，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    domainInfo: DomainAccountInfo;
  }

  /**
   * 表示系统账号前后台开始切换和结束切换事件的数据结构。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface OsAccountSwitchEventData {
    /**
     * 切换来源系统账号ID。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    fromAccountId: int;

    /**
     * 切换目标系统账号ID。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    toAccountId: int;

    /**
     * 切换事件发生的逻辑屏ID，默认值为0。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    displayId?: long;
  }

  /**
   * 表示约束变更信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 dynamic&static
   */
  interface ConstraintChangeInfo {
    /**
     * 发生变更的[约束](docroot://reference/apis-basic-services-kit/js-apis-osAccount.md#系统账号约束列表)。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    constraint: string;

    /**
     * 发生变更的约束的使能状态。默认：false。
     * 
     * true表示目标约束已使能；false表示目标约束未使能。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    isEnabled: boolean;
  }

  /**
   * 表示用于创建系统账号的可选参数。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface CreateOsAccountOptions {
    /**
     * 表示账号短名称（用作个人文件夹目录）。 
     * 
     * **约束：** 
     * 
     * 1. 不允许出现的字符：< > | : " * ? / \
     * 2. 不允许独立出现的字符串：.或..
     * 3. 长度不超过255个字符。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     */
    shortName: string;

    /**
     * 表示账号短名称（用作个人文件夹目录）。 
     * 
     * **约束：** 
     * 
     * 1. 不允许出现的字符：< > | : " * ? / \
     * 2. 不允许独立出现的字符串：.或..
     * 3. 长度不超过255个字符。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    shortName?: string;

    /**
     * 表示预置应用禁止名单，名单中的应用不可被安装在设备上，默认为空列表。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    disallowedPreinstalledBundles?: Array<string>;

    /**
     * 表示预置应用允许名单，仅名单中的应用可以被安装在设备上，默认为std::nullopt。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    allowedPreinstalledBundles?: Array<string>;

    /**
     * 表示从认证管理接口获取的token，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * 表示用于创建与指定域账号绑定的系统账号的可选参数。继承自[CreateOsAccountOptions]{@link osAccount.CreateOsAccountOptions}。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface CreateOsAccountForDomainOptions extends CreateOsAccountOptions {}

  /**
   * 表示用于删除系统账号的可选参数。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 24 dynamic&static
   */
  interface RemoveOsAccountOptions {
    /**
     * 表示从认证管理接口获取的token，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * 设置系统账号类型的选项。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 24 dynamic&static
   */
  interface SetOsAccountTypeOptions {
    /**
     * 表示从认证管理接口获取的token，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * 表示域账号信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 8 dynamic
   * @since 23 static
   */
  interface DomainAccountInfo {
    /**
     * 域名。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    domain: string;

    /**
     * 域账号名。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     * @since 23 static
     */
    accountName: string;

    /**
     * 域账号标识。
     * 
     * 此接口为系统接口，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    accountId?: string;

    /**
     * 指示域账号是否已认证。true表示指定的域账号已认证；false表示指定的域账号未认证。
     * 
     * 此接口为系统接口，默认为false。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    isAuthenticated?: boolean;

    /**
     * 域账号配置ID，默认为空字符串。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    serverConfigId?: string;

    /**
     * 域账号附加信息。
     * 
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    additionalInfo?: Record<string, Object>;

    /**
     * 域账号附加信息。
     * 
     * 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @stagemodelonly
     * @since 26.0.0 static
     */
    additionalInfo?: Record<string, RecordData>;
  }

  /**
   * 表示系统账号类型的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  enum OsAccountType {
    /**
     * 管理员账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    ADMIN = 0,

    /**
     * 普通账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    NORMAL = 1,

    /**
     * 访客账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    GUEST = 2,

    /**
     * 隐私账号。隐私账号只能有一个。
     * 
     * 此接口为系统接口。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PRIVATE = 1024
  }

  /**
   * 系统账号授权管理类，用于管理系统账号授权。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AuthorizationManager {
    /**
     * 为当前进程获取授权。
     *
     * @permission ohos.permission.ACQUIRE_LOCAL_ACCOUNT_AUTHORIZATION
     * @param { string } privilege - 目标权限，详见
     *     [配置文件](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json)
     *     。
     * @param { AcquireAuthorizationOptions } [options] - 获取授权的选项，默认为空。
     * @returns { Promise<AcquireAuthorizationResult> } Promise对象，返回获取授权的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid privilege or options.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    acquireAuthorization(privilege: string, options?: AcquireAuthorizationOptions): Promise<AcquireAuthorizationResult>;

    /**
     * 为当前进程撤销指定特权的授权。
     *
     * @param { string } privilege - 目标权限，详见
     *     [配置文件](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json)
     *     。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid privilege.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    releaseAuthorization(privilege: string): Promise<void>;

    /**
     * 检查当前进程是否已获得指定特权的授权。
     *
     * @param { string } privilege - 目标权限，详见
     *     [配置文件](https://gitcode.com/openharmony/account_os_account/blob/master/services/accountmgr/authorization_manager/config/privileges.json)
     *     。
     * @returns { Promise<boolean> } Promise对象，返回true表示已获得指定特权的授权；返回false表示未获得指定特权的授权。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid privilege.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    hasAuthorization(privilege: string): Promise<boolean>;
  }

  /**
   * 表示获取授权的选项。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AcquireAuthorizationOptions {
    /**
     * 随机挑战值，可用于防止重放攻击，长度不得超过32字节，默认为undefined。
     *
     * @default undefined
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    challenge?: Uint8Array;

    /**
     * 是否需要重复用先前的授权，默认为true。
     * 
     * 如果为true且存在有效的授权结果，则将复用该结果；否则，将执行新的授权。
     *
     * @default true
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isReuseNeeded?: boolean;

    /**
     * 是否允许用户交互，默认为true 。
     * 
     * 如果为true，则允许在交互上下文中显示授权对话框；如果为false，则不允许显示授权对话框。
     * 
     * **注意**：此选项仅在调用者位于前台时生效。如果调用者在后台，则不允许用户交互。
     *
     * @default true
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isInteractionAllowed?: boolean;

    /**
     * 用户交互上下文配置，默认为undefined。
     * 
     * - 未指定上下文时，授权对话框以模态系统模式显示。
     * - 指定[UIAbilityContext](../apis-ability-kit/js-apis-inner-application-uiAbilityContext.md)或
     * [UIExtensionContext](../apis-ability-kit/js-apis-inner-application-uiExtensionContext.md)时，以模态应用模式显示。
     * - 未提供有效上下文时，授权对话框无法显示。
     * 
     * **注意**：仅当isInteractionAllowed为true时生效。
     *
     * @default undefined, which means the authorization dialog will be displayed in modal system mode.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    interactionContext?: Context;
  }

  /**
   * 表示授权结果码的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AuthorizationResultCode {
    /**
     * 表示授权成功。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_SUCCESS = 0,

    /**
     * 表示授权已取消。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_CANCELED = 12300301,

    /**
     * 表示服务因不允许用户交互而拒绝授权。
     * 
     * 可能原因：
     * 
     * 1. 调用者位于后台；
     * 2. isInteractionAllowed选项的值为false；
     * 3. 指定的交互上下文无效。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_INTERACTION_NOT_ALLOWED = 12300302,

    /**
     * 表示因不符合授权规则，如账号类型不是管理员、设备类型不支持等原因而拒绝授权。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_DENIED = 12300303,

    /**
     * 表示服务忙碌。
     * 
     * 可能原因：正在处理其他授权。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    AUTHORIZATION_SERVICE_BUSY = 12300304
  }

  /**
   * 表示获取授权的结果。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AcquireAuthorizationResult {
    /**
     * 授权结果码。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    resultCode: AuthorizationResultCode;

    /**
     * 与授权关联的权限。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    privilege: string;

    /**
     * 是否为复用的授权结果，默认为undefined。
     * 
     * true：表示是复用的授权结果。false：表示不是复用的授权结果。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isReused?: boolean;

    /**
     * 授权的有效期，默认值为300，单位为s。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    validityPeriod?: int;

    /**
     * 授权令牌，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    token?: Uint8Array;
  }

  /**
   * 用户认证类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name UserAuth
   * @since 8 dynamic
   * @since 23 static
   */
  class UserAuth {
    /**
     * 创建用户认证的实例。
     *
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 返回版本信息。
     *
     * @returns { int } 返回版本信息。
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getVersion(): int;

    /**
     * 获取指定认证类型和认证可信等级的认证能力的可用状态。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { AuthType } authType - 认证类型。
     * @param { AuthTrustLevel } authTrustLevel - 认证的可信等级。
     * @returns { int } 返回认证能力的可用状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType or authTrustLevel.
     * @throws { BusinessError } 12300117 - PIN is expired.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAvailableStatus(authType: AuthType, authTrustLevel: AuthTrustLevel): int;

    /**
     * 基于指定的请求信息获取属性。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { GetPropertyRequest } request - 请求信息，包括认证类型和属性类型列表。
     * @param { AsyncCallback<ExecutorProperty> } callback - 回调函数。如果获取成功，err为null，data为执行器属性信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getProperty(request: GetPropertyRequest, callback: AsyncCallback<ExecutorProperty>): void;

    /**
     * 基于指定的请求信息获取属性。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { GetPropertyRequest } request - 请求信息，包括认证类型和属性类型列表。
     * @returns { Promise<ExecutorProperty> } Promise对象，返回执行器属性信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getProperty(request: GetPropertyRequest): Promise<ExecutorProperty>;

    /**
     * 基于凭据id获取关联执行器的指定属性信息。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } credentialId - 指示凭据索引。
     * @param { Array<GetPropertyType> } keys - 指示要查询的属性类型数组。
     * @returns { Promise<ExecutorProperty> } Promise对象，返回执行器的属性信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid keys.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    getPropertyByCredentialId(credentialId: Uint8Array, keys: Array<GetPropertyType>): Promise<ExecutorProperty>;

    /**
     * 设置可用于初始化算法的属性。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { SetPropertyRequest } request - 请求信息，包括认证类型和要设置的密钥值。
     * @param { AsyncCallback<void> } callback - 回调函数。如果设置成功，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    setProperty(request: SetPropertyRequest, callback: AsyncCallback<void>): void;

    /**
     * 设置可用于初始化算法的属性。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { SetPropertyRequest } request - 请求信息，包括身份验证类型和要设置的密钥值。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid request.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    setProperty(request: SetPropertyRequest): Promise<void>;

    /**
     * 准备远端认证。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { string } remoteNetworkId - 远端网络Id。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid remoteNetworkId.
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300111 - Operation timeout. [since 20]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    prepareRemoteAuth(remoteNetworkId: string): Promise<void>;

    /**
     * 认证当前用户。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } challenge - 指示挑战值，挑战值为一个随机数，用于提升安全性。
     * @param { AuthType } authType - 指示认证类型。
     * @param { AuthTrustLevel } authTrustLevel - 指示认证结果的信任级别。
     * @param { IUserAuthCallback } callback - 回调对象，返回认证结果。
     * @returns { Uint8Array } 返回取消的上下文ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge, authType or authTrustLevel.
     * @throws { BusinessError } 12300013 - Network exception. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 20]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300101 - The credential is incorrect.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300105 - The trust level is not supported.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The authentication service does not exist. [since 12]
     * @throws { BusinessError } 12300114 - The authentication service works abnormally. [since 12]
     * @throws { BusinessError } 12300117 - PIN is expired. [since 12]
     * @throws { BusinessError } 12300119 - Multi-factor authentication failed. [since 20]
     * @throws { BusinessError } 12300120 - The credentials are no longer valid. [since 23]
     * @throws { BusinessError } 12300211 - Server unreachable. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    auth(
      challenge: Uint8Array,
      authType: AuthType,
      authTrustLevel: AuthTrustLevel,
      callback: IUserAuthCallback
    ): Uint8Array;

    /**
     * 基于指定的挑战值、认证类型（如口令、人脸、指纹等）、认证可信等级以及可选参数（如账号标识、认证意图等）进行身份认证。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } challenge - 指示挑战值，挑战值为一个随机数，用于防止重放攻击，提升安全性。
     * @param { AuthType } authType - 指示认证类型。
     * @param { AuthTrustLevel } authTrustLevel - 指示认证结果的信任级别。
     * @param { AuthOptions } options - 指示认证用户的可选参数集合。
     * @param { IUserAuthCallback } callback - 回调对象，返回认证结果。
     * @returns { Uint8Array } 返回取消的上下文ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge, authType, authTrustLevel or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 20]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300101 - The credential is incorrect.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300105 - The trust level is not supported.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication timeout.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The authentication service does not exist.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300117 - PIN is expired.
     * @throws { BusinessError } 12300119 - Multi-factor authentication failed. [since 20]
     * @throws { BusinessError } 12300120 - The credentials are no longer valid. [since 23]
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    auth(
      challenge: Uint8Array,
      authType: AuthType,
      authTrustLevel: AuthTrustLevel,
      options: AuthOptions,
      callback: IUserAuthCallback
    ): Uint8Array;

    /**
     * 认证指定用户。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { int } userId - 指示用户身份。
     * @param { Uint8Array } challenge - 指示挑战值，挑战值为一个随机数，用于提升安全性。
     * @param { AuthType } authType - 指示认证类型。
     * @param { AuthTrustLevel } authTrustLevel - 指示认证结果的信任级别。
     * @param { IUserAuthCallback } callback - 回调对象，返回认证结果。
     * @returns { Uint8Array } 返回取消的上下文ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge, authType or authTrustLevel.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300013 - Network exception. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 20]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 20]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 20]
     * @throws { BusinessError } 12300101 - The credential is incorrect.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300105 - The trust level is not supported.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication timeout.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The authentication service does not exist. [since 12]
     * @throws { BusinessError } 12300114 - The authentication service works abnormally. [since 12]
     * @throws { BusinessError } 12300117 - PIN is expired. [since 12]
     * @throws { BusinessError } 12300119 - Multi-factor authentication failed. [since 20]
     * @throws { BusinessError } 12300120 - The credentials are no longer valid. [since 23]
     * @throws { BusinessError } 12300211 - Server unreachable. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authUser(
      userId: int,
      challenge: Uint8Array,
      authType: AuthType,
      authTrustLevel: AuthTrustLevel,
      callback: IUserAuthCallback
    ): Uint8Array;

    /**
     * 取消指定的认证操作。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { Uint8Array } contextID - 指示身份验证上下文ID，此ID动态生成没有具体值。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid contextId.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cancelAuth(contextID: Uint8Array): void;
  }

  /**
   * PIN码认证基类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name PINAuth
   * @since 8 dynamic
   * @since 23 static
   */
  class PINAuth {
    /**
     * 创建PIN码认证的实例。
     *
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 注册PIN码输入器。
     *
     * @permission ohos.permission.ACCESS_PIN_AUTH
     * @param { IInputer } inputer - PIN码输入器，用于获取PIN码。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid inputer.
     * @throws { BusinessError } 12300103 - The credential inputer already exists.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    registerInputer(inputer: IInputer): void;

    /**
     * 解注册PIN码输入器。
     *
     * @permission ohos.permission.ACCESS_PIN_AUTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    unregisterInputer(): void;
  }

  /**
   * 凭据输入管理器。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name InputerManager
   * @since 9 dynamic
   * @since 23 static
   */
  class InputerManager {
    /**
     * 注册凭据输入器。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL or ohos.permission.MANAGE_USER_IDM
     * @param { AuthType } authType - 认证类型。
     * @param { IInputer } inputer - 凭据输入器，用于获取凭据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType or inputer.
     * @throws { BusinessError } 12300103 - The credential inputer already exists.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static registerInputer(authType: AuthType, inputer: IInputer): void;

    /**
     * 解注册凭据输入器。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL or ohos.permission.MANAGE_USER_IDM
     * @param { AuthType } authType - 认证类型。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static unregisterInputer(authType: AuthType): void;
  }

  /**
   * 表示认证状态信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface AuthStatusInfo {
    /**
     * 剩余次数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    remainTimes: int;

    /**
     * 冻结时间，单位为ms。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    freezingTime: int;
  }

  /**
   * 表示获取域访问令牌的选项。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface GetDomainAccessTokenOptions {
    /**
     * 域账号的信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    domainAccountInfo: DomainAccountInfo;

    /**
     * 域账号的令牌。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    domainAccountToken: Uint8Array;

    /**
     * 业务参数，由业务方根据请求协议自定义。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    businessParams: Record<string, Object>;

    /**
     * 业务参数，由业务方根据请求协议自定义。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    businessParams: Record<string, RecordData>;

    /**
     * 调用方唯一标识符。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    callerUid: int;
  }

  /**
   * 表示查询域账号信息的选项。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface GetDomainAccountInfoOptions {
    /**
     * 域账号名。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    accountName: string;

    /**
     * 域名。默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    domain?: string;

    /**
     * 域账号所属服务器标识。默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    serverConfigId?: string;
  }

  /**
   * 表示插件查询域账号信息的选项。GetDomainAccountInfoPluginOptions类继承
   * [GetDomainAccountInfoOptions]{@link osAccount.GetDomainAccountInfoOptions}
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  interface GetDomainAccountInfoPluginOptions extends GetDomainAccountInfoOptions {
    /**
     * 调用方唯一标识符。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    callerUid: int;
  }

  /**
   * 认证指定的域账号。
   *
   * @param { DomainAccountInfo } domainAccountInfo - 表示域账号信息。
   * @param { Uint8Array } credential - 表示域账号的凭据。
   * @param { IUserAuthCallback } callback - 表示认证结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginAuthFunc = (domainAccountInfo: DomainAccountInfo,
    credential: Uint8Array, callback: IUserAuthCallback) => void;

  /**
   * 弹窗认证指定的域账号。
   *
   * @param { DomainAccountInfo } domainAccountInfo - 表示域账号信息。
   * @param { IUserAuthCallback } callback - 表示认证结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginAuthWithPopupFunc = (domainAccountInfo: DomainAccountInfo,
    callback: IUserAuthCallback) => void;

  /**
   * 使用授权令牌认证指定的域账号。
   *
   * @param { DomainAccountInfo } domainAccountInfo - 表示域账号信息。
   * @param { Uint8Array } token - 表示PIN码或生物识别认证成功时生成的授权令牌。
   * @param { IUserAuthCallback } callback - 表示认证结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginAuthWithTokenFunc = (domainAccountInfo: DomainAccountInfo,
    token: Uint8Array, callback: IUserAuthCallback) => void;

  /**
   * 查询指定域账号的信息。
   *
   * @param { GetDomainAccountInfoPluginOptions } options - 表示域账号信息。
   * @param { AsyncCallback<DomainAccountInfo> } callback - 表示查询结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginGetAccountInfoFunc = (options: GetDomainAccountInfoPluginOptions,
    callback: AsyncCallback<DomainAccountInfo>) => void;

  /**
   * 查询指定域账号的认证状态信息。
   *
   * @param { DomainAccountInfo } domainAccountInfo - 表示域账号信息。
   * @param { AsyncCallback<AuthStatusInfo> } callback - 表示查询结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginGetAuthStatusInfoFunc = (domainAccountInfo: DomainAccountInfo,
    callback: AsyncCallback<AuthStatusInfo>) => void;

  /**
   * 绑定指定的域账号。
   *
   * @param { DomainAccountInfo } domainAccountInfo - 表示域账号信息。
   * @param { int } localId - 系统账号ID。
   * @param { AsyncCallback<void> } callback - 表示绑定结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginBindAccountFunc = (domainAccountInfo: DomainAccountInfo,
    localId: int, callback: AsyncCallback<void>) => void;

  /**
   * 解绑指定的域账号。
   *
   * @param { DomainAccountInfo } domainAccountInfo - 表示域账号信息。
   * @param { AsyncCallback<void> } callback - 表示绑定结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginUnbindAccountFunc = (domainAccountInfo: DomainAccountInfo,
    callback: AsyncCallback<void>) => void;

  /**
   * 检查指定的域账号令牌是否有效。
   *
   * @param { DomainAccountInfo } domainAccountInfo - 表示域账号信息。
   * @param { Uint8Array } token - 表示域账号令牌。
   * @param { AsyncCallback<boolean> } callback - 表示检查结果回调。true表示指定的域账号令牌是有效的；false表示指定的域账号令牌是无效的。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginIsAccountTokenValidFunc = (
    domainAccountInfo: DomainAccountInfo,
    token: Uint8Array,
    callback: AsyncCallback<boolean>
  ) => void;

  /**
   * 根据指定的选项获取域访问令牌。
   *
   * @param { GetDomainAccessTokenOptions } options - 表示获取域访问令牌的选项。
   * @param { AsyncCallback<Uint8Array> } callback - 表示结果回调。
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 23 static
   */
  type DomainPluginGetAccessTokenFunc = (options: GetDomainAccessTokenOptions,
    callback: AsyncCallback<Uint8Array>) => void;

  /**
   * 域插件，提供域账号认证功能。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface DomainPlugin {
    /**
     * 认证指定的域账号。
     *
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { Uint8Array } credential - 指示域账号的凭据。
     * @param { IUserAuthCallback } callback - 指示认证结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     */
    auth(domainAccountInfo: DomainAccountInfo, credential: Uint8Array, callback: IUserAuthCallback): void;

    /**
     * 认证指定的域账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    auth: DomainPluginAuthFunc;

    /**
     * 弹窗认证指定的域账号。
     *
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { IUserAuthCallback } callback - 指示认证结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    authWithPopup(domainAccountInfo: DomainAccountInfo, callback: IUserAuthCallback): void;

    /**
     * 弹窗认证指定的域账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    authWithPopup: DomainPluginAuthWithPopupFunc;

    /**
     * 使用授权令牌认证指定的域账号。
     *
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { Uint8Array } token - 指示PIN码或生物识别认证成功时生成的授权令牌。
     * @param { IUserAuthCallback } callback - 指示认证结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    authWithToken(domainAccountInfo: DomainAccountInfo, token: Uint8Array, callback: IUserAuthCallback): void;

    /**
     * 使用授权令牌认证指定的域账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    authWithToken: DomainPluginAuthWithTokenFunc;

    /**
     * 查询指定域账号的信息。使用callback异步回调。
     *
     * @param { GetDomainAccountInfoPluginOptions } options - 指示域账号信息。
     * @param { AsyncCallback<DomainAccountInfo> } callback - 指示查询结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    getAccountInfo(options: GetDomainAccountInfoPluginOptions, callback: AsyncCallback<DomainAccountInfo>): void;

    /**
     * 查询指定域账号的信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    getAccountInfo: DomainPluginGetAccountInfoFunc;

    /**
     * 查询指定域账号的认证状态信息。
     *
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { AsyncCallback<AuthStatusInfo> } callback - 指示查询结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    getAuthStatusInfo(domainAccountInfo: DomainAccountInfo, callback: AsyncCallback<AuthStatusInfo>): void;

    /**
     * 查询指定域账号的认证状态信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    getAuthStatusInfo: DomainPluginGetAuthStatusInfoFunc;

    /**
     * 绑定指定的域账号。
     *
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { number } localId - 系统账号ID。
     * @param { AsyncCallback<void> } callback - 指示绑定结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    bindAccount(domainAccountInfo: DomainAccountInfo, localId: number, callback: AsyncCallback<void>): void;

    /**
     * 绑定指定的域账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    bindAccount: DomainPluginBindAccountFunc;

    /**
     * 解绑指定的域账号。
     *
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { AsyncCallback<void> } callback - 指示绑定结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    unbindAccount(domainAccountInfo: DomainAccountInfo, callback: AsyncCallback<void>): void;

    /**
     * 解绑指定的域账号。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    unbindAccount: DomainPluginUnbindAccountFunc;

    /**
     * 检查指定的域账号令牌是否有效。
     *
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { Uint8Array } token - 指示域账号令牌。
     * @param { AsyncCallback<boolean> } callback - 指示检查结果回调。true表示指定的域账号令牌是有效的；false表示指定的域账号令牌是无效的。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    isAccountTokenValid(
      domainAccountInfo: DomainAccountInfo,
      token: Uint8Array,
      callback: AsyncCallback<boolean>
    ): void;

    /**
     * 检查指定的域账号令牌是否有效。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    isAccountTokenValid: DomainPluginIsAccountTokenValidFunc;

    /**
     * 根据指定的选项获取域访问令牌。使用callback异步回调。
     *
     * @param { GetDomainAccessTokenOptions } options - 指示获取域访问令牌的选项。
     * @param { AsyncCallback<Uint8Array> } callback - 指示结果回调。
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     */
    getAccessToken(options: GetDomainAccessTokenOptions, callback: AsyncCallback<Uint8Array>): void;

    /**
     * 根据指定的选项获取域访问令牌。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 static
     */
    getAccessToken: DomainPluginGetAccessTokenFunc;
  }

  /**
   * 表示域账号认证的选项。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 24 dynamic&static
   */
  interface DomainAccountAuthOptions {
    /**
     * 域账号认证服务器配置参数。默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 dynamic
     */
    serverParams?: Record<string, Object>;

    /**
     * 域账号认证服务器配置参数。默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 24 static
     */
    serverParams?: Record<string, RecordData>;
  }

  /**
   * 域账号管理类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 18 dynamic
   * @since 23 static
   */
  class DomainAccountManager {
    /**
     * 注册域插件。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainPlugin } plugin - 指示域插件。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @throws { BusinessError } 12300201 - The domain plugin has been registered.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static registerPlugin(plugin: DomainPlugin): void;

    /**
     * 注销域插件。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    static unregisterPlugin(): void;

    /**
     * 认证指定的域账号。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { Uint8Array } credential - 指示域账号的凭据。
     * @param { IUserAuthCallback } callback - 指示认证结果回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo or credential.
     * @throws { BusinessError } 12300003 - Domain account does not exist.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static auth(domainAccountInfo: DomainAccountInfo, credential: Uint8Array, callback: IUserAuthCallback): void;

    /**
     * 认证指定的域账号，支持指定认证选项，如服务器参数。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { Uint8Array } credential - 指示域账号的凭据。
     * @param { DomainAccountAuthOptions } options - 表示域账号认证的选项。
     * @param { IUserAuthCallback } callback - 指示认证结果回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo or credential.
     * @throws { BusinessError } 12300003 - Domain account does not exist.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 24 dynamic&static
     */
    static auth(
      domainAccountInfo: DomainAccountInfo,
      credential: Uint8Array,
      options: DomainAccountAuthOptions,
      callback: IUserAuthCallback): void;

    /**
     * 弹框认证指定的域账号。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL [since 10 - 10]
     * @param { IUserAuthCallback } callback - 指示认证结果回调。
     * @throws { BusinessError } 201 - Permission denied. [since 10 - 10]
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - No domain account is bound.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable. [since 11]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static authWithPopup(callback: IUserAuthCallback): void;

    /**
     * 弹框认证指定的域账号。
     *
     * @permission ohos.permission.ACCESS_USER_AUTH_INTERNAL [since 10 - 10]
     * @param { int } localId - 指示绑定域账号的系统账号的本地标识。
     * @param { IUserAuthCallback } callback - 指示认证结果回调。
     * @throws { BusinessError } 201 - Permission denied. [since 10 - 10]
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid localId.
     * @throws { BusinessError } 12300003 - No domain account is bound.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300101 - Authentication failed.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300110 - The authentication is locked.
     * @throws { BusinessError } 12300111 - The authentication time out.
     * @throws { BusinessError } 12300112 - The authentication service is busy.
     * @throws { BusinessError } 12300113 - The account authentication service does not exist.
     * @throws { BusinessError } 12300114 - The account authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable. [since 11]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static authWithPopup(localId: int, callback: IUserAuthCallback): void;

    /**
     * 检查是否存在指定的域账号。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { AsyncCallback<boolean> } callback - 指示检查结果回调。true表示指定的域账号已存在；false表示指定的域账号不存在。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static hasAccount(domainAccountInfo: DomainAccountInfo, callback: AsyncCallback<boolean>): void;

    /**
     * 检查是否存在指定的域账号。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定的域账号已存在；返回false表示指定的域账号不存在。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid domainAccountInfo.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static hasAccount(domainAccountInfo: DomainAccountInfo): Promise<boolean>;

    /**
     * 更新指定域账号的令牌，空令牌表示目标域账号的令牌失效。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { Uint8Array } token - 指示域账号的令牌。
     * @param { AsyncCallback<void> } callback - 回调函数。如果更新成功，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static updateAccountToken(
      domainAccountInfo: DomainAccountInfo,
      token: Uint8Array,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 更新指定域账号的令牌，空令牌表示目标域账号的令牌失效。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @param { Uint8Array } token - 指示域账号的令牌。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static updateAccountToken(domainAccountInfo: DomainAccountInfo, token: Uint8Array): Promise<void>;

    /**
     * 修改指定域账号信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.MANAGE_DOMAIN_ACCOUNTS
     * @param { DomainAccountInfo } oldAccountInfo - 表示旧域账号信息。
     * @param { DomainAccountInfo } newAccountInfo - 表示新域账号信息。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - The new account info is invalid.
     * @throws { BusinessError } 12300003 - The old account not found.
     * @throws { BusinessError } 12300004 - The new account already exists.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static updateAccountInfo(oldAccountInfo: DomainAccountInfo, newAccountInfo: DomainAccountInfo): Promise<void>;

    /**
     * 查询指定的域账号信息。使用callback异步回调。
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS
     * @param { GetDomainAccountInfoOptions } options - 指示域账号信息。
     * @param { AsyncCallback<DomainAccountInfo> } callback - 指示查询结果回调。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static getAccountInfo(options: GetDomainAccountInfoOptions, callback: AsyncCallback<DomainAccountInfo>): void;

    /**
     * 查询指定的域账号信息。使用Promise异步回调。
     *
     * @permission ohos.permission.GET_DOMAIN_ACCOUNTS
     * @param { GetDomainAccountInfoOptions } options - 指示域账号信息。
     * @returns { Promise<DomainAccountInfo> } Promise对象，返回指定的域账号信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - Not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    static getAccountInfo(options: GetDomainAccountInfoOptions): Promise<DomainAccountInfo>;

    /**
     * 获取当前域账号的业务访问令牌。使用callback异步回调。
     *
     * @param { Record<string, Object> } businessParams - 指示业务参数，具体格式取决于域插件的实现要求。
     * @param { AsyncCallback<Uint8Array> } callback - 指示结果回调。如果获取成功，err返回null，否则为错误对象。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    static getAccessToken(businessParams: Record<string, Object>, callback: AsyncCallback<Uint8Array>): void;

    /**
     * 获取当前域账号的业务访问令牌，使用callback异步回调。
     *
     * @param { Record<string, RecordData> } businessParams - 指示业务参数，具体格式取决于域插件的实现要求。
     * @param { AsyncCallback<Uint8Array> } callback - 指示结果回调。如果获取成功，err返回null，否则为错误对象。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    static getAccessToken(businessParams: Record<string, RecordData>, callback: AsyncCallback<Uint8Array>): void;

    /**
     * 查询当前域账号的业务访问令牌。使用Promise异步回调。
     *
     * @param { Record<string, Object> } businessParams - 指示业务参数，具体格式取决于域插件的实现要求。
     * @returns { Promise<Uint8Array> } Promise对象，返回业务访问令牌。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     */
    static getAccessToken(businessParams: Record<string, Object>): Promise<Uint8Array>;

    /**
     * 查询当前域账号的业务访问令牌。使用Promise异步回调。
     *
     * @param { Record<string, RecordData> } businessParams - 指示业务参数，具体格式取决于域插件的实现要求。
     * @returns { Promise<Uint8Array> } Promise对象，返回业务访问令牌。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid business parameters.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @throws { BusinessError } 12300013 - Network exception.
     * @throws { BusinessError } 12300014 - The domain account is not authenticated.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300114 - The authentication service works abnormally.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 static
     */
    static getAccessToken(businessParams: Record<string, RecordData>): Promise<Uint8Array>;

    /**
     * 判断指定域账号是否登录超期。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
     * @param { DomainAccountInfo } domainAccountInfo - 指示域账号信息。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定的域账号已登录超期；返回false表示指定的域账号未登录超期。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    static isAuthenticationExpired(domainAccountInfo: DomainAccountInfo): Promise<boolean>;
  }

  /**
   * 域服务器配置。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 18 dynamic
   * @since 23 static
   */
  interface DomainServerConfig {
    /**
     * 服务器配置参数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     */
    parameters: Record<string, Object>;

    /**
     * 服务器配置参数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    parameters: Record<string, RecordData>;

    /**
     * 服务器配置标识。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 服务器所属的域。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    domain: string;
  }

  /**
   * 域服务器配置管理类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 18 dynamic
   * @since 23 static
   */
  class DomainServerConfigManager {
    /**
     * 添加域服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { Record<string, Object> } parameters - 表示域服务器配置参数。
     * @returns { Promise<DomainServerConfig> } Promise对象，返回新添加的域服务器配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300215 - The number of server config reaches the upper limit.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     */
    static addServerConfig(parameters: Record<string, Object>): Promise<DomainServerConfig>;

    /**
     * 添加域服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { Record<string, RecordData> } parameters - 表示域服务器配置参数。
     * @returns { Promise<DomainServerConfig> } Promise对象，返回新添加的域服务器配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300215 - The number of server config reaches the upper limit.
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    static addServerConfig(parameters: Record<string, RecordData>): Promise<DomainServerConfig>;

    /**
     * 删除域服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - 表示服务器配置标识。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @throws { BusinessError } 12300214 - Server config has been associated with an account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static removeServerConfig(configId: string): Promise<void>;

    /**
     * 更新域服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - 表示服务器配置标识。
     * @param { Record<string, Object> } parameters - 表示域服务器配置参数。
     * @returns { Promise<DomainServerConfig> } Promise对象，返回更新后的域服务器配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300214 - Server config has been associated with an account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     */
    static updateServerConfig(configId: string, parameters: Record<string, Object>): Promise<DomainServerConfig>;

    /**
     * 更新域服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - 表示服务器配置标识。
     * @param { Record<string, RecordData> } parameters - 表示域服务器配置参数。
     * @returns { Promise<DomainServerConfig> } Promise对象，返回更新后的域服务器配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid server config parameters.
     * @throws { BusinessError } 12300211 - Server unreachable.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @throws { BusinessError } 12300213 - Server config already exists.
     * @throws { BusinessError } 12300214 - Server config has been associated with an account.
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    static updateServerConfig(configId: string, parameters: Record<string, RecordData>): Promise<DomainServerConfig>;

    /**
     * 获取域服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { string } configId - 表示服务器配置标识。
     * @returns { Promise<DomainServerConfig> } Promise对象，返回获取的域服务器配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300212 - Server config not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static getServerConfig(configId: string): Promise<DomainServerConfig>;

    /**
     * 获取所有域服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @returns { Promise<Array<DomainServerConfig>> } Promise对象，返回获取的所有域服务器配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static getAllServerConfigs(): Promise<Array<DomainServerConfig>>;

    /**
     * 获取目标域账号的服务器配置。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DOMAIN_ACCOUNT_SERVER_CONFIGS
     * @param { DomainAccountInfo } domainAccountInfo - 表示目标域账号信息。
     * @returns { Promise<DomainServerConfig> } Promise对象，返回目标账号的域服务器配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Domain account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 18 dynamic
     * @since 23 static
     */
    static getAccountServerConfig(domainAccountInfo: DomainAccountInfo): Promise<DomainServerConfig>;
  }

  /**
   * 获取用户身份管理类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @name UserIdentityManager
   * @since 8 dynamic
   * @since 23 static
   */
  class UserIdentityManager {
    /**
     * 用户身份管理类的默认构造函数。
     *
     * @throws { BusinessError } 202 - Not system application.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 打开会话，获取挑战值。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { AsyncCallback<Uint8Array> } callback - 回调函数。如果打开会话成功，err为null，data为挑战值；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    openSession(callback: AsyncCallback<Uint8Array>): void;

    /**
     * 打开会话，获取挑战值（用于判断后续的身份认证场景是否处于该会话下，防止重放攻击）。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { int } [accountId] - 系统账号标识，默认为空。
     * @returns { Promise<Uint8Array> } Promise对象，返回挑战值。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300008 - Restricted account. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    openSession(accountId?: int): Promise<Uint8Array>;

    /**
     * 添加凭据，添加用户凭据信息，传入凭据添加方法和凭据信息（凭据类型，子类，如果添加用户的非密码凭据，则传入密码身份验证令牌），并获取结果/获取信息。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { CredentialInfo } credentialInfo - 指示凭据信息。
     * @param { IIdmCallback } callback - 回调对象，返回添加凭据的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid credentialInfo, i.e. authType or authSubType.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300008 - Restricted account. [since 12]
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @throws { BusinessError } 12300090 - Cross-device capability not supported. [since 23]
     * @throws { BusinessError } 12300091 - Cross-device communication failed. [since 23]
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300111 - The operation timeout.
     * @throws { BusinessError } 12300115 - The number of credentials reaches the upper limit.
     * @throws { BusinessError } 12300116 - Credential complexity verification failed. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    addCredential(credentialInfo: CredentialInfo, callback: IIdmCallback): void;

    /**
     * 更新凭据。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { CredentialInfo } credentialInfo - 指示凭据信息。
     * @param { IIdmCallback } callback - 回调对象，返回更新凭据的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid credentialInfo, i.e. authType or authSubType.
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @throws { BusinessError } 12300109 - The authentication, enrollment, or update operation is canceled.
     * @throws { BusinessError } 12300111 - The operation time out.
     * @throws { BusinessError } 12300116 - Credential complexity verification failed. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    updateCredential(credentialInfo: CredentialInfo, callback: IIdmCallback): void;

    /**
     * 关闭会话，结束IDM操作。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { int } [accountId] - 系统账号标识，默认为空。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types. [since 12]
     * @throws { BusinessError } 12300001 - The system service works abnormally. [since 12]
     * @throws { BusinessError } 12300003 - Account not found. [since 12]
     * @throws { BusinessError } 12300008 - Restricted account. [since 12]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    closeSession(accountId?: int): void;

    /**
     * 根据挑战值取消条目。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { Uint8Array } challenge - 挑战值。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid challenge.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    cancel(challenge: Uint8Array): void;

    /**
     * 删除具有身份验证令牌的用户。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { Uint8Array } token - 身份验证令牌。
     * @param { IIdmCallback } callback - 回调对象，返回删除用户的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    delUser(token: Uint8Array, callback: IIdmCallback): void;

    /**
     * 删除用户凭据信息。
     *
     * @permission ohos.permission.MANAGE_USER_IDM
     * @param { Uint8Array } credentialId - 凭证索引。
     * @param { Uint8Array } token - 身份验证令牌。
     * @param { IIdmCallback } callback - 回调对象，返回删除凭据的结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid credentialId.
     * @throws { BusinessError } 12300101 - The token is invalid.
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    delCred(credentialId: Uint8Array, token: Uint8Array, callback: IIdmCallback): void;

    /**
     * 获取认证信息。使用callback异步回调。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AsyncCallback<Array<EnrolledCredInfo>> } callback - 回调函数。如果成功，err为null，data为当前用户的所有已注册凭据信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAuthInfo(callback: AsyncCallback<Array<EnrolledCredInfo>>): void;

    /**
     * 获取指定类型的认证信息。使用callback异步回调。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType } authType - 认证类型。
     * @param { AsyncCallback<Array<EnrolledCredInfo>> } callback - 回调函数，如果获取成功，err为null，data为当前用户指定类型的所有已注册凭据信息；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAuthInfo(authType: AuthType, callback: AsyncCallback<Array<EnrolledCredInfo>>): void;

    /**
     * 获取认证信息。使用Promise异步回调。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType } authType - 认证类型，表示查询所有认证类型的信息。
     * @returns { Promise<Array<EnrolledCredInfo>> } Promise对象，返回当前用户指定类型的所有已注册凭据信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    getAuthInfo(authType: AuthType): Promise<Array<EnrolledCredInfo>>;

    /**
     * 依据提供的可选参数，获取认证信息。使用Promise异步回调。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { GetAuthInfoOptions } [options] - 获取认证信息的可选参数集合。默认为空，表示查询当前用户所有已注册凭据信息。
     * @returns { Promise<Array<EnrolledCredInfo>> } Promise对象，返回当前用户指定类型的所有已注册凭据信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getAuthInfo(options?: GetAuthInfoOptions): Promise<Array<EnrolledCredInfo>>;

    /**
     * 基于凭据类型，以及可选的账号标识，获取已注册的凭据ID。使用Promise异步回调。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType } authType - 认证凭据类型
     * @param { int } [accountId] - 系统账号标识，默认为空。
     * @returns { Promise<Uint8Array> } Promise对象，返回已注册的凭据ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - Invalid authType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300020 - Device hardware abnormal. [since 23]
     * @throws { BusinessError } 12300102 - The credential does not exist.
     * @throws { BusinessError } 12300106 - The authentication type is not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    getEnrolledId(authType: AuthType, accountId?: int): Promise<Uint8Array>;

    /**
     * 订阅一种或多种类型的凭据变更事件，通过回调函数获取凭据变更信息。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { AuthType[] } credentialTypes - 表示订阅的凭据类型集合。
     * @param { Callback<CredentialChangeInfo> } callback - 表示用于接收凭据变更事件的回调函数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @throws { BusinessError } 12300002 - One or more credential types are invalid.
     * @throws { BusinessError } 12300106 - One or more credential types are not supported.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    onCredentialChanged(credentialTypes: AuthType[], callback: Callback<CredentialChangeInfo>): void;

    /**
     * 取消与指定回调关联的订阅记录，若未指定回调，则取消所有订阅记录。
     *
     * @permission ohos.permission.USE_USER_IDM
     * @param { Callback<CredentialChangeInfo> } [callback] - 表示用于接收凭据变更事件的回调函数。默认为undefined，表示清除所有订阅记录；非undefined时，表示清除与该回调函数关
     *     联的订阅记录。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - The system service works abnormally.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 23 dynamic&static
     */
    offCredentialChanged(callback?: Callback<CredentialChangeInfo>): void;
  }

  /**
   * 表示凭据变更类型的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  enum CredentialChangeType {
    /**
     * 表示添加凭据的变更类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    ADD_CREDENTIAL = 1,

    /**
     * 表示更新凭据的变更类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    UPDATE_CREDENTIAL = 2,

    /**
     * 表示删除凭据的变更类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    DELETE_CREDENTIAL = 3
  }

  /**
   * 表示凭据变更信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @FaAndStageModel
   * @since 23 dynamic&static
   */
  interface CredentialChangeInfo {
    /**
     * 表示凭据变更的类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    changeType: CredentialChangeType;

    /**
     * 表示系统账号标识。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    accountId: int;

    /**
     * 表示是否为静默变更，静默变更表示变更由系统在后台自动地发起。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    isSilent: boolean;

    /**
     * 表示凭据类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    credentialType: AuthType;

    /**
     * 表示添加的凭据ID，添加凭据和更新凭据操作都会返回该ID。默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    addedCredentialId?: Uint8Array;

    /**
     * 表示删除的凭据ID，删除凭据和更新凭据操作都会返回该ID。默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @FaAndStageModel
     * @since 23 dynamic&static
     */
    deletedCredentialId?: Uint8Array;
  }

  /**
   * 表示[查询认证凭据信息]{@link osAccount.UserIdentityManager.getAuthInfo(options?: GetAuthInfoOptions)}的可选参数集合。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface GetAuthInfoOptions {
    /**
     * 认证类型，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    authType?: AuthType;

    /**
     * 系统账号标识，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;
  }

  /**
   * 表示认证意图的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AuthIntent {
    /**
     * 解锁意图。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    UNLOCK = 1,

    /**
     * 静默认证意图。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SILENT_AUTH = 2,

    /**
     * 密保问题认证意图。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    QUESTION_AUTH = 3,

    /**
     * 废弃PIN码认证意图。用户修改锁屏密码后，旧的PIN码被废弃。废弃PIN存在期间，用户如果忘记密码可以通过废弃PIN认证通过后重置锁屏密码。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    ABANDONED_PIN_AUTH = 4
  }

  /**
   * 表示远程认证的可选参数集合。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface RemoteAuthOptions {
    /**
     * 凭据验证者的网络标识，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    verifierNetworkId?: string;

    /**
     * 凭据收集者的网络标识，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    collectorNetworkId?: string;

    /**
     * 凭据收集者的令牌标识，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    collectorTokenId?: int;
  }

  /**
   * 表示
   * [认证用户]{@link osAccount.UserAuth.auth( challenge: Uint8Array, authType: AuthType, authTrustLevel: AuthTrustLevel, options: AuthOptions, callback: IUserAuthCallback )}
   * 的可选参数集合。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface AuthOptions {
    /**
     * 系统账号标识，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * 认证意图，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    authIntent?: AuthIntent;

    /**
     * 远程认证选项，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    remoteAuthOptions?: RemoteAuthOptions;
  }

  /**
   * 密码数据回调。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IInputData {
    /**
     *
     * 通知设置数据。
     *
     * @param { AuthSubType } authSubType - 用于认证的凭据子类型。
     * @param { Uint8Array } data - 要设置的数据是凭据，用来在认证、添加、修改凭据操作。
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300002 - Invalid pinSubType.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onSetData(authSubType: AuthSubType, data: Uint8Array): void;
  }

  /**
   * 表示[通知调用者获取数据](docroot://reference/apis-basic-services-kit/js-apis-osAccount-sys.md#ongetdata8)的可选参数集合。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 12 dynamic
   * @since 23 static
   */
  interface GetInputDataOptions {
    /**
     * 挑战值，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    challenge?: Uint8Array;
  }

  /**
   * 凭据输入器回调。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IInputer {
    /**
     * 通知调用者获取数据的回调函数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onGetData: (authSubType: AuthSubType, callback: IInputData, options: GetInputDataOptions) => void;
  }

  /**
   * 表示用户认证回调类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IUserAuthCallback {
    /**
     * 身份认证结果回调函数，返回结果码和认证结果信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onResult: (result: int, extraInfo: AuthResult) => void;

    /**
     * 身份认证信息获取回调函数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void;
  }

  /**
   * 表示身份管理回调类。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface IIdmCallback {
    /**
     * 身份管理操作结果回调函数，返回结果码和请求结果信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onResult: (result: int, extraInfo: RequestResult) => void;

    /**
     * 身份管理信息获取回调函数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    onAcquireInfo?: (module: int, acquire: int, extraInfo: Uint8Array) => void;
  }

  /**
   * 提供获取属性请求的信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface GetPropertyRequest {
    /**
     * 身份验证凭据类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authType: AuthType;

    /**
     * 指示要获取的属性类型数组。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    keys: Array<GetPropertyType>;

    /**
     * 系统账号标识，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;
  }

  /**
   * 提供设置属性请求的信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface SetPropertyRequest {
    /**
     * 身份验证凭据类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authType: AuthType;

    /**
     * 指示要设置的属性类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    key: SetPropertyType;

    /**
     * 指示要设置的信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    setInfo: Uint8Array;
  }

  /**
   * 提供执行器的属性。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface ExecutorProperty {
    /**
     * 指示结果。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    result: int;

    /**
     * 指示认证凭据子类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authSubType: AuthSubType;

    /**
     * 指示剩余次数，默认为-1。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    remainTimes?: int;

    /**
     * 指示冻结时间，单位为ms，默认为-1。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    freezingTime?: int;

    /**
     * 指示下次冻结时间，单位为ms，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    nextPhaseFreezingTime?: int;

    /**
     * 指示录入进度，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    enrollmentProgress?: string;

    /**
     * 指示传感器信息，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    sensorInfo?: string;

    /**
     * 指示凭据长度，默认为undefined。查询生物信息等无定长属性的凭据时返回undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    credentialLength?: int;
  }

  /**
   * 表示认证结果的信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface AuthResult {
    /**
     * 指示认证令牌，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    token?: Uint8Array;

    /**
     * 指示剩余次数，默认为-1。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    remainTimes?: int;

    /**
     * 指示冻结时间，单位为ms，默认为-1。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    freezingTime?: int;

    /**
     * 指示下次冻结时间，单位为ms，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    nextPhaseFreezingTime?: int;

    /**
     * 指示凭据ID，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    credentialId?: Uint8Array;

    /**
     * 指示系统账号标识，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * 指示认证有效期，单位为ms，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    pinValidityPeriod?: long;
  }

  /**
   * 表示凭证信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface CredentialInfo {
    /**
     * 指示凭据类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credType: AuthType;

    /**
     * 指示凭据子类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credSubType: AuthSubType;

    /**
     * 指示认证令牌，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    token: Uint8Array;

    /**
     * 系统账号标识，默认为undefined。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    accountId?: int;

    /**
     * 凭据的附加信息，默认为空字符串。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    additionalInfo?: string;
  }

  /**
   * 表示请求结果的信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface RequestResult {
    /**
     * 指示凭据索引，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credentialId?: Uint8Array;
  }

  /**
   * 表示已注册凭据的信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  interface EnrolledCredInfo {
    /**
     * 指示凭据索引，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    credentialId: Uint8Array;

    /**
     * 身份验证凭据类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authType: AuthType;

    /**
     * 指示认证凭据子类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    authSubType: AuthSubType;

    /**
     * 指示凭据模板ID。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    templateId: Uint8Array;

    /**
     * 指示凭据是否废弃。废弃后的凭据可能作为备份凭据保存一段时间。true表示已废弃，false表示未废弃。默认为undefined，表示是否废弃未定义。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isAbandoned?: boolean;

    /**
     * 指示凭据有效期，单位为ms。默认为undefined，表示有效期未定义。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    validityPeriod?: long;
  }

  /**
   * 表示要获取的属性类型的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum GetPropertyType {
    /**
     * 认证子类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    AUTH_SUB_TYPE = 1,

    /**
     * 剩余次数。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    REMAIN_TIMES = 2,

    /**
     * 冻结时间。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FREEZING_TIME = 3,

    /**
     * 指示录入进度，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    ENROLLMENT_PROGRESS = 4,

    /**
     * 指示传感器信息，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SENSOR_INFO = 5,

    /**
     * 下次冻结时间。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    NEXT_PHASE_FREEZING_TIME = 6,

    /**
     * 凭据长度。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CREDENTIAL_LENGTH = 7
  }

  /**
   * 表示要设置的属性类型的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum SetPropertyType {
    /**
     * 初始化算法。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INIT_ALGORITHM = 1
  }

  /**
   * 表示身份验证的凭据类型的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthType {
    /**
     * 表示PIN认证类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN = 1,

    /**
     * 表示脸部认证类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE = 2,

    /**
     * 表示指纹认证类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT = 4,

    /**
     * 表示键恢复类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    RECOVERY_KEY = 8,

    /**
     * 表示隐私PIN类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    PRIVATE_PIN = 16,

    /**
     * 表示伴随设备认证类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 23 dynamic&static
     */
    COMPANION_DEVICE = 64,

    /**
     * 表示域认证类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOMAIN = 1024
  }

  /**
   * 表示用于认证的凭据子类型的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthSubType {
    /**
     * 表示6位凭证。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN_SIX = 10000,

    /**
     * 表示自定义数字凭证。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN_NUMBER = 10001,

    /**
     * 表示自定义混合凭据。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    PIN_MIXED = 10002,

    /**
     * 表示4位凭证。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PIN_FOUR = 10003,

    /**
     * 表示图案凭据。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 12 dynamic
     * @since 23 static
     */
    PIN_PATTERN = 10004,

    /**
     * 表示密保问题凭据。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 14 dynamic
     * @since 23 static
     */
    PIN_QUESTION = 10005,

    /**
     * 表示2D 人脸凭证。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_2D = 20000,

    /**
     * 表示3D 人脸凭证。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_3D = 20001,

    /**
     * 表示电容式指纹。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_CAPACITIVE = 30000,

    /**
     * 表示光学指纹。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_OPTICAL = 30001,

    /**
     * 表示超声波指纹。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_ULTRASONIC = 30002,

    /**
     * 表示域认证混合凭证。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    DOMAIN_MIXED = 10240001
  }

  /**
   * 表示认证结果的受信任级别的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum AuthTrustLevel {
    /**
     * 信任级别 1。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL1 = 10000,

    /**
     * 信任级别 2。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL2 = 20000,

    /**
     * 信任级别 3。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL3 = 30000,

    /**
     * 信任级别 4。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    ATL4 = 40000
  }

  /**
   * 表示获取信息的模块的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum Module {
    /**
     * 表示从人脸认证获取的信息。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH = 1
  }

  /**
   * 表示身份验证结果码。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum ResultCode {
    /**
     * 表示身份验证成功或支持此功能。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * 表示验证器无法识别用户。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FAIL = 1,

    /**
     * 表示其他错误。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    GENERAL_ERROR = 2,

    /**
     * 表示身份验证已取消。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    CANCELED = 3,

    /**
     * 表示身份验证已超时。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TIMEOUT = 4,

    /**
     * 表示不支持此身份验证类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TYPE_NOT_SUPPORT = 5,

    /**
     * 表示不支持身份验证信任级别。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    TRUST_LEVEL_NOT_SUPPORT = 6,

    /**
     * 表示身份验证任务正忙。等待几秒钟，然后重试。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    BUSY = 7,

    /**
     * 表示参数不正确。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    INVALID_PARAMETERS = 8,

    /**
     * 指示身份验证器已锁定。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    LOCKED = 9,

    /**
     * 表示用户尚未注册验证器。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    NOT_ENROLLED = 10
  }

  /**
   * 表示人脸验证过程中提示的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum FaceTipsCode {
    /**
     * 表示由于高照明，获得的面部图像太亮。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_BRIGHT = 1,

    /**
     * 表示由于照明度低，获得的面部图像太暗。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_DARK = 2,

    /**
     * 表示面部离设备太近。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_CLOSE = 3,

    /**
     * 表示面部离设备太远。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_FAR = 4,

    /**
     * 表示设备太高，仅捕捉面部上部。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_HIGH = 5,

    /**
     * 表示设备太低，仅捕捉面部下部。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_LOW = 6,

    /**
     * 表示设备向右偏移，并且仅捕捉面部的右侧部分。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_RIGHT = 7,

    /**
     * 表示设备向左偏移，并且仅捕捉面部的左侧部分。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_LEFT = 8,

    /**
     * 表示面部信息收集过程中面部移动过快。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_TOO_MUCH_MOTION = 9,

    /**
     * 表示面部未朝向设备。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_POOR_GAZE = 10,

    /**
     * 表示未检测到人脸。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FACE_AUTH_TIP_NOT_DETECTED = 11
  }

  /**
   * 表示指纹身份验证过程中提示的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 8 dynamic
   * @since 23 static
   */
  enum FingerprintTips {
    /**
     * 表示采集的图像良好。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_GOOD = 0,

    /**
     * 表示由于传感器上可疑或检测到污垢，指纹图像噪声过大。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_IMAGER_DIRTY = 1,

    /**
     * 表示由于检测到的情况，指纹图像噪声太大，无法处理。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_INSUFFICIENT = 2,

    /**
     * 表示仅检测到部分指纹图像。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_PARTIAL = 3,

    /**
     * 表示指纹图像由于快速运动而不完整。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_TOO_FAST = 4,

    /**
     * 表示由于缺少运动，指纹图像无法读取。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 8 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_TOO_SLOW = 5,

    /**
     * 表示手指落下。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_FINGER_DOWN = 6,

    /**
     * 表示手指抬起。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    FINGERPRINT_TIP_FINGER_UP = 7
  }

  /**
   * 表示约束来源类型的枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum ConstraintSourceType {
    /**
     * 约束不存在。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_NOT_EXIST = 0,

    /**
     * 约束源自系统设置。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_TYPE_BASE = 1,

    /**
     * 约束源自设备所有者设置。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_TYPE_DEVICE_OWNER = 2,

    /**
     * 约束源自资料所有者设置。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    CONSTRAINT_TYPE_PROFILE_OWNER = 3
  }

  /**
   * 表示约束来源类型信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface ConstraintSourceTypeInfo {
    /**
     * 系统账号ID
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    localId: int;

    /**
     * 约束来源类型。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    type: ConstraintSourceType;
  }
}

export default osAccount;