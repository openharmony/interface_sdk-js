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

import type { AsyncCallback, Callback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import type rpc from './@ohos.rpc';
/*** if arkts static */
import type { RecordData } from './@ohos.base';
/*** endif */

/**
 * 本模块提供应用账号信息的添加、删除、修改和查询基础能力，并支持应用间鉴权和分布式数据同步功能。
 *
 * @syscap SystemCapability.Account.AppAccount
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace appAccount {
  /**
   * 创建应用账号管理器对象。
   *
   * @returns { AppAccountManager } 应用账号管理器对象。
   * @syscap SystemCapability.Account.AppAccount
   * @since 7 dynamic
   * @since 23 static
   */
  function createAppAccountManager(): AppAccountManager;

  /**
   * 应用账号管理器，可用于管理应用自身的账号信息。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface AppAccountManager {
    /**
     * 根据账号名添加应用账号。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [createAccount]{@link appAccount.AppAccountManager.createAccount(name: string, callback: AsyncCallback<void>)}替
     * > 代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当创建成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.createAccount(name: string, callback: AsyncCallback<void>)
     */
    addAccount(name: string, callback: AsyncCallback<void>): void;

    /**
     * 根据账号名和额外信息添加应用账号。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [createAccount]{@link appAccount.AppAccountManager.createAccount(name: string, options: CreateAccountOptions, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } extraInfo - 额外信息(能转换string类型的其它信息)，额外信息不能是应用账号的敏感信息（如应用账号密码、token等）。
     * @param { AsyncCallback<void> } callback - 回调函数。当创建成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.createAccount(name: string, options: CreateAccountOptions, callback: AsyncCallback<void>)
     */
    addAccount(name: string, extraInfo: string, callback: AsyncCallback<void>): void;

    /**
     * 根据账号名和额外信息添加应用账号。使用Promise异步回调。
     *
     * > **说明：**
     * > > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [createAccount]{@link appAccount.AppAccountManager.createAccount(name: string, options?: CreateAccountOptions)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } [extraInfo] - 额外信息(能转换string类型的其它信息)，额外信息不能是应用账号的敏感信息（如应用账号密码、token等），默认为空，表示创建的该账号无额外信息需要添加。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.createAccount(name: string, options?: CreateAccountOptions)
     */
    addAccount(name: string, extraInfo?: string): Promise<void>;

    /**
     * 根据账号名创建应用账号。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当创建成功时，err为null，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @throws { BusinessError } 12300004 - Account already exists.
     * @throws { BusinessError } 12300007 - The number of accounts reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    createAccount(name: string, callback: AsyncCallback<void>): void;

    /**
     * 根据账号名和可选项创建应用账号。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { CreateAccountOptions } options - 创建应用账号的选项，可提供自定义数据，但不建议包含敏感数据（如密码、Token等）。
     * @param { AsyncCallback<void> } callback - 回调函数。当创建成功时，err为null，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or options.
     * @throws { BusinessError } 12300004 - Account already exists.
     * @throws { BusinessError } 12300007 - The number of accounts reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    createAccount(name: string, options: CreateAccountOptions, callback: AsyncCallback<void>): void;

    /**
     * 根据账号名和可选项创建应用账号。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { CreateAccountOptions } [options] - 创建应用账号的选项，可提供自定义数据，但不建议包含敏感数据（如密码、Token等）。不填无影响，默认为空，表示创建的该账号无额外信息需要添加。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or options.
     * @throws { BusinessError } 12300004 - Account already exists.
     * @throws { BusinessError } 12300007 - The number of accounts reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    createAccount(name: string, options?: CreateAccountOptions): Promise<void>;

    /**
     * 根据指定的账号所有者隐式地添加应用账号。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [createAccountImplicitly]{@link appAccount.AppAccountManager.createAccountImplicitly(owner: string, callback: AuthCallback)}
     * > 替代。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { object } options - 鉴权所需要的可选项。可选项可根据自己需要设置。
     * @param { AuthenticatorCallback } callback - 认证器回调对象，返回添加结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.createAccountImplicitly(owner: string, callback: AuthCallback)
     */
    addAccountImplicitly(
      owner: string,
      authType: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void;

    /**
     * 根据指定的账号所有者隐式地创建应用账号。使用callback异步回调。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AuthCallback } callback - 认证器回调对象，返回创建结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner.
     * @throws { BusinessError } 12300007 - The number of accounts reaches the upper limit.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    createAccountImplicitly(owner: string, callback: AuthCallback): void;

    /**
     * 根据指定的账号所有者和可选项隐式地创建应用账号。使用callback异步回调。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { CreateAccountImplicitlyOptions } options - 隐式创建账号的选项。
     * @param { AuthCallback } callback - 认证器回调对象，返回创建结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner or options.
     * @throws { BusinessError } 12300007 - The number of accounts reaches the upper limit.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    createAccountImplicitly(owner: string, options: CreateAccountImplicitlyOptions, callback: AuthCallback): void;

    /**
     * 删除应用账号。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [removeAccount]{@link appAccount.AppAccountManager.removeAccount(name: string, callback: AsyncCallback<void>)}替
     * > 代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当删除成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.removeAccount(name: string, callback: AsyncCallback<void>)
     */
    deleteAccount(name: string, callback: AsyncCallback<void>): void;

    /**
     * 删除应用账号。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [removeAccount]{@link appAccount.AppAccountManager.removeAccount(name: string)}替
     * > 代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.removeAccount(name: string)
     */
    deleteAccount(name: string): Promise<void>;

    /**
     * 删除应用账号。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当删除成功时，err为null，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    removeAccount(name: string, callback: AsyncCallback<void>): void;

    /**
     * 删除应用账号。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    removeAccount(name: string): Promise<void>;

    /**
     * 禁止指定第三方应用账号名称对指定的第三方应用进行访问。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setAppAccess]{@link appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当禁止指定第三方应用账号名称对指定包名称的第三方应用进行访问设置成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean, callback: AsyncCallback<void>)
     */
    disableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * 禁止指定第三方应用账号名称对指定包名称的第三方应用进行访问。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setAppAccess]{@link appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean)}
     * > 替代。
     *
     * @param { string } name - 要禁用访问的第三方应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean)
     */
    disableAppAccess(name: string, bundleName: string): Promise<void>;

    /**
     * 允许指定第三方应用账号名称对指定包名称的第三方应用进行访问。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setAppAccess]{@link appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当允许指定第三方应用账号名称对指定包名称的第三方应用进行访问设置成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean, callback: AsyncCallback<void>)
     */
    enableAppAccess(name: string, bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * 允许指定第三方应用账号的名称对指定包名称的第三方应用进行访问。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setAppAccess]{@link appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAppAccess(name: string, bundleName: string, isAccessible: boolean)
     */
    enableAppAccess(name: string, bundleName: string): Promise<void>;

    /**
     * 设置指定应用对特定账号的访问权限。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @param { boolean } isAccessible - 是否可访问。true表示允许访问，false表示禁止访问。
     * @param { AsyncCallback<void> } callback - 回调函数，如果设置成功，err为null，否则为错误对象。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400001 - Application not found. [since 9 - 13]
     * @throws { BusinessError } 12400005 - The size of authorization list reaches the upper limit. [since 14]
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAppAccess(name: string, bundleName: string, isAccessible: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设置指定应用对特定账号的数据访问权限。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @param { boolean } isAccessible - 是否可访问。true表示允许访问，false表示禁止访问。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400001 - Application not found. [since 9 - 13]
     * @throws { BusinessError } 12400005 - The size of authorization list reaches the upper limit. [since 14]
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAppAccess(name: string, bundleName: string, isAccessible: boolean): Promise<void>;

    /**
     * 检查指定应用对特定账号的数据是否可访问。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示指定应用可访问特定账号的数据；返回false表示不可访问。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAppAccess(name: string, bundleName: string, callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定应用对特定账号的数据是否可访问。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } bundleName - 第三方应用的包名。最大长度为512个字符。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定应用可访问特定账号的数据；返回false表示不可访问。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAppAccess(name: string, bundleName: string): Promise<boolean>;

    /**
     * 检查指定应用账号是否开启数据同步功能。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [checkDataSyncEnabled]{@link appAccount.AppAccountManager.checkDataSyncEnabled(name: string, callback: AsyncCallback<boolean>)}
     * > 替代。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示指定应用账号已开启数据同步功能；返回false表示未开启。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.checkDataSyncEnabled(name: string, callback: AsyncCallback<boolean>)
     */
    checkAppAccountSyncEnable(name: string, callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定应用账号是否开启数据同步功能。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [checkDataSyncEnabled]{@link appAccount.AppAccountManager.checkDataSyncEnabled(name: string)}替代。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定应用账号已开启数据同步功能；返回false表示未开启。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.checkDataSyncEnabled(name: string)
     */
    checkAppAccountSyncEnable(name: string): Promise<boolean>;

    /**
     * 检查指定应用账号是否开启数据同步功能。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示指定应用账号已开启数据同步功能；返回false表示未开启。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkDataSyncEnabled(name: string, callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定应用账号是否开启数据同步功能。使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定应用账号已开启数据同步功能；返回false表示未开启。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkDataSyncEnabled(name: string): Promise<boolean>;

    /**
     * 设置指定应用账号的凭据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setCredential]{@link appAccount.AppAccountManager.setCredential(name: string, credentialType: string, credential: string, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @param { string } credential - 凭据取值。自定义的数据，最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置此应用程序账号的凭据成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setCredential(name: string, credentialType: string, credential: string, callback: AsyncCallback<void>)
     */
    setAccountCredential(name: string, credentialType: string, credential: string, callback: AsyncCallback<void>): void;

    /**
     * 设置指定应用账号的凭据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃，建议使用
     * > [setCredential]{@link appAccount.AppAccountManager.setCredential(name: string, credentialType: string, credential: string)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @param { string } credential - 凭据取值。自定义的数据，最大长度为1024个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setCredential(name: string, credentialType: string, credential: string)
     */
    setAccountCredential(name: string, credentialType: string, credential: string): Promise<void>;

    /**
     * 设置指定应用账号的凭据。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @param { string } credential - 凭据取值。自定义的数据，最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当凭据设置成功时，err为null，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, credentialType or credential.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setCredential(name: string, credentialType: string, credential: string,
                             callback: AsyncCallback<void>): void;

    /**
     * 设置指定应用账号的凭据。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @param { string } credential - 凭据取值。自定义的数据，最大长度为1024个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, credentialType or credential.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setCredential(name: string, credentialType: string, credential: string): Promise<void>;

    /**
     * 设置指定应用账号的额外信息。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setCustomData]{@link appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } extraInfo - 额外信息(能转换string类型的其它信息)，额外信息不能是应用账号的敏感信息（如应用账号密码、token等）。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string, callback: AsyncCallback<void>)
     */
    setAccountExtraInfo(name: string, extraInfo: string, callback: AsyncCallback<void>): void;

    /**
     * 设置此应用程序账号的额外信息。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setCustomData]{@link appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string)}替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } extraInfo - 额外信息(能转换string类型的其它信息)，额外信息不能是应用账号的敏感信息（如应用账号密码、token等）。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string)
     */
    setAccountExtraInfo(name: string, extraInfo: string): Promise<void>;

    /**
     * 开启或禁止指定应用账号的数据同步功能。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setDataSyncEnabled]{@link appAccount.AppAccountManager.setDataSyncEnabled(name: string, isEnabled: boolean, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { boolean } isEnable - 是否开启数据同步。true表示开启数据同步，false表示关闭数据同步。
     * @param { AsyncCallback<void> } callback - 回调函数。当开启或禁止成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setDataSyncEnabled(name: string, isEnabled: boolean, callback: AsyncCallback<void>)
     */
    setAppAccountSyncEnable(name: string, isEnable: boolean, callback: AsyncCallback<void>): void;

    /**
     * 开启或禁止指定应用账号的数据同步功能。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setDataSyncEnabled]{@link appAccount.AppAccountManager.setDataSyncEnabled(name: string, isEnabled: boolean)}替代
     * > 。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { boolean } isEnable - 是否开启数据同步。true表示开启数据同步，false表示关闭数据同步。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setDataSyncEnabled(name: string, isEnabled: boolean)
     */
    setAppAccountSyncEnable(name: string, isEnable: boolean): Promise<void>;

    /**
     * 开启或禁止指定应用账号的数据同步功能。使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { boolean } isEnabled - 是否开启数据同步。true表示开启数据同步，false表示关闭数据同步。
     * @param { AsyncCallback<void> } callback - 回调函数。当开启或禁止成功时，err为null，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setDataSyncEnabled(name: string, isEnabled: boolean, callback: AsyncCallback<void>): void;

    /**
     * 开启或禁止指定应用账号的数据同步功能。使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { boolean } isEnabled - 是否开启数据同步。true表示开启数据同步，false表示关闭数据同步。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setDataSyncEnabled(name: string, isEnabled: boolean): Promise<void>;

    /**
     * 设置指定应用账号的关联数据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setCustomData]{@link appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 关联数据的键名。
     * @param { string } value - 关联数据的取值。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置与此应用账号关联的数据成功时，err为null，否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string, callback: AsyncCallback<void>)
     */
    setAssociatedData(name: string, key: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * 设置指定应用账号的关联数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setCustomData]{@link appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string)}替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 关联数据的键名。
     * @param { string } value - 关联数据的取值。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setCustomData(name: string, key: string, value: string)
     */
    setAssociatedData(name: string, key: string, value: string): Promise<void>;

    /**
     * 设置指定应用账号的自定义数据。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 自定义数据的键名。最大长度为1024个字符。
     * @param { string } value - 自定义数据的取值。最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置自定义数据成功时，err为null，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, key or value.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400003 - The number of custom data reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setCustomData(name: string, key: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * 设置指定应用账号的自定义数据。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 自定义数据的键名。最大长度为1024个字符。
     * @param { string } value - 自定义数据的取值。最大长度为1024个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, key or value.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400003 - The number of custom data reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setCustomData(name: string, key: string, value: string): Promise<void>;

    /**
     * 获取所有可访问的应用账号信息。使用callback异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getAllAccounts]{@link appAccount.AppAccountManager.getAllAccounts(callback: AsyncCallback<Array<AppAccountInfo>>)}
     * > 替代。
     *
     * @permission ohos.permission.GET_ALL_APP_ACCOUNTS
     * @param { AsyncCallback<Array<AppAccountInfo>> } callback - 回调函数。当查询成功时，err为null，data为获取到的应用账号信息列表；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAllAccounts(callback: AsyncCallback<Array<AppAccountInfo>>)
     */
    getAllAccessibleAccounts(callback: AsyncCallback<Array<AppAccountInfo>>): void;

    /**
     * 获取所有可访问的应用账号信息。使用Promise异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用[getAllAccounts]{@link appAccount.AppAccountManager.getAllAccounts()}
     * > 替代。
     *
     * @permission ohos.permission.GET_ALL_APP_ACCOUNTS
     * @returns { Promise<Array<AppAccountInfo>> } Promise对象，返回全部应用已授权账号信息对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAllAccounts()
     */
    getAllAccessibleAccounts(): Promise<Array<AppAccountInfo>>;

    /**
     * 获取所有可访问的应用账号信息。使用callback异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权，或
     * <br> 已获得ohos.permission.GET_ALL_APP_ACCOUNTS权限。
     *
     * @param { AsyncCallback<Array<AppAccountInfo>> } callback - 回调函数。当查询成功时，err为null，data为获取到的应用账号信息列表；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAllAccounts(callback: AsyncCallback<Array<AppAccountInfo>>): void;

    /**
     * 获取所有可访问的应用账号信息。使用Promise异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权，或
     * <br> 已获得ohos.permission.GET_ALL_APP_ACCOUNTS权限。
     *
     * @returns { Promise<Array<AppAccountInfo>> } Promise对象，返回全部应用已授权账号信息对象。
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAllAccounts(): Promise<Array<AppAccountInfo>>;

    /**
     * 根据应用账号所有者获取调用方可访问的应用账号列表。使用callback异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getAccountsByOwner]{@link appAccount.AppAccountManager.getAccountsByOwner(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>)}
     * > 替代。
     *
     * @permission ohos.permission.GET_ALL_APP_ACCOUNTS
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AsyncCallback<Array<AppAccountInfo>> } callback - 应用账号信息列表。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAccountsByOwner(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>)
     */
    getAllAccounts(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>): void;

    /**
     * 根据应用账号所有者获取调用方可访问的应用账号列表。使用Promise异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getAccountsByOwner]{@link appAccount.AppAccountManager.getAccountsByOwner(owner: string)}替代。
     *
     * @permission ohos.permission.GET_ALL_APP_ACCOUNTS
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @returns { Promise<Array<AppAccountInfo>> } Promise对象，返回指定应用全部账号信息对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAccountsByOwner(owner: string)
     */
    getAllAccounts(owner: string): Promise<Array<AppAccountInfo>>;

    /**
     * 根据应用账号所有者获取调用方可访问的应用账号列表。使用callback异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权，或
     * <br> 已获得ohos.permission.GET_ALL_APP_ACCOUNTS权限。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AsyncCallback<Array<AppAccountInfo>> } callback - 回调函数。如果获取成功，err为null，data为获取到的应用账号列表；否则为错误对象。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner.
     * @throws { BusinessError } 12400001 - Application not found. [since 9 - 13]
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAccountsByOwner(owner: string, callback: AsyncCallback<Array<AppAccountInfo>>): void;

    /**
     * 根据应用账号所有者获取调用方可访问的应用账号列表。使用Promise异步回调。
     * 此方法适用于以下账户：
     * <br> 本应用的账户。
     * <br> 第三方应用的账户。要获取此类信息，
     * <br> 您的应用必须已获得第三方应用的授权，或
     * <br> 已获得ohos.permission.GET_ALL_APP_ACCOUNTS权限。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @returns { Promise<Array<AppAccountInfo>> } Promise对象，返回获取到的应用账号列表。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner.
     * @throws { BusinessError } 12400001 - Application not found. [since 9 - 13]
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAccountsByOwner(owner: string): Promise<Array<AppAccountInfo>>;

    /**
     * 获取指定应用账号的凭据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getCredential]{@link appAccount.AppAccountManager.getCredential(name: string, credentialType: string, callback: AsyncCallback<string>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取凭据成功时，err为null，data为指定应用账号的凭据；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getCredential(name: string, credentialType: string, callback: AsyncCallback<string>)
     */
    getAccountCredential(name: string, credentialType: string, callback: AsyncCallback<string>): void;

    /**
     * 获取指定应用账号的凭据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getCredential]{@link appAccount.AppAccountManager.getCredential(name: string, credentialType: string)}替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @returns { Promise<string> } Promise对象，返回指定应用账号的凭据。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getCredential(name: string, credentialType: string)
     */
    getAccountCredential(name: string, credentialType: string): Promise<string>;

    /**
     * 获取指定应用账号的凭据。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取凭据成功时，err为null，data为指定应用账号的凭据；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or credentialType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300102 - Credential not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getCredential(name: string, credentialType: string, callback: AsyncCallback<string>): void;

    /**
     * 获取指定应用账号的凭据。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @returns { Promise<string> } Promise对象，返回指定应用账号的凭据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or credentialType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300102 - Credential not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getCredential(name: string, credentialType: string): Promise<string>;

    /**
     * 获取指定应用账号的额外信息（能转换成string类型的其它信息）。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getCustomData]{@link appAccount.AppAccountManager.getCustomData(name: string, key: string, callback: AsyncCallback<string>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取此应用账号的额外信息成功时，err为null，data返回此应用账号的额外信息对象；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getCustomData(name: string, key: string, callback: AsyncCallback<string>)
     */
    getAccountExtraInfo(name: string, callback: AsyncCallback<string>): void;

    /**
     * 获取指定应用账号的额外信息（能转换成string类型的其它信息）。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getCustomData]{@link appAccount.AppAccountManager.getCustomData(name: string, key: string)}替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @returns { Promise<string> } Promise对象，返回此应用程序账号的额外信息对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getCustomData(name: string, key: string)
     */
    getAccountExtraInfo(name: string): Promise<string>;

    /**
     * 根据指定键名获取特定应用账号的关联数据。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getCustomData]{@link appAccount.AppAccountManager.getCustomData(name: string, key: string, callback: AsyncCallback<string>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 关联数据的键名。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取成功时，err为null，data为关联数据的取值；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getCustomData(name: string, key: string, callback: AsyncCallback<string>)
     */
    getAssociatedData(name: string, key: string, callback: AsyncCallback<string>): void;

    /**
     * 获取与此应用程序账号关联的数据。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getCustomData]{@link appAccount.AppAccountManager.getCustomData(name: string, key: string)}替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 关联数据的键名。
     * @returns { Promise<string> } Promise对象，返回关联数据的取值。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getCustomData(name: string, key: string)
     */
    getAssociatedData(name: string, key: string): Promise<string>;

    /**
     * 根据指定键名获取特定应用账号的自定义数据。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 自定义数据的键名。最大长度为1024个字符。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取成功时，err为null，data为自定义数据的取值；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or key.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400002 - Custom data not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getCustomData(name: string, key: string, callback: AsyncCallback<string>): void;

    /**
     * 根据指定键名获取特定应用账号的自定义数据。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 自定义数据的键名。最大长度为1024个字符。
     * @returns { Promise<string> } Promise对象，返回自定义数据的取值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or key.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400002 - Custom data not found
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getCustomData(name: string, key: string): Promise<string>;

    /**
     * 根据指定键名获取特定应用账号的自定义数据。使用同步方式返回结果。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } key - 自定义数据的键名。最大长度为1024个字符。
     * @returns { string } 自定义数据的取值，默认为空。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or key.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400002 - Custom data not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getCustomDataSync(name: string, key: string): string;

    /**
     * 订阅指定应用的账号信息变更事件。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [on('accountChange')]{@link appAccount.AppAccountManager.on(type: 'accountChange', owners: Array<string>, callback: Callback<Array<AppAccountInfo>>)}
     * > 替代。
     *
     * @param { 'change' } type - 事件回调类型，支持的事件为'change'，当账号所有者更新账号信息时，触发该事件。
     * @param { Array<string> } owners - 应用账号所有者的包名列表。
     * @param { Callback<Array<AppAccountInfo>> } callback - 需要注册的回调函数，返回信息发生变更的应用账号列表。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.on(type: 'accountChange', owners: Array<string>, callback: Callback<Array<AppAccountInfo>>)
     */
    on(type: 'change', owners: Array<string>, callback: Callback<Array<AppAccountInfo>>): void;

    /**
     * 订阅指定应用的账号信息变更事件。
     *
     * @param { 'accountChange' } type - 事件回调类型，支持的事件为'accountChange'，当目标应用更新账号信息时，触发该事件。
     * @param { Array<string> } owners - 应用账号所有者的包名列表。
     * @param { Callback<Array<AppAccountInfo>> } callback - 需要注册的回调函数，返回信息为发生变更的应用账号列表。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid type or owners.
     * @throws { BusinessError } 12400001 - Application not found. [since 9 - 13]
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    on(type: 'accountChange', owners: Array<string>, callback: Callback<Array<AppAccountInfo>>): void;

    /**
     * 订阅指定应用的账号信息变更事件。
     *
     * @param { Array<string> } owners - 应用账号所有者的包名列表。
     * @param { Callback<Array<AppAccountInfo>> } callback - A需要注册的回调函数，返回信息为发生变更的应用账号列表。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owners.
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    onAccountChange(owners: Array<string>, callback: Callback<Array<AppAccountInfo>>): void;

    /**
     * 取消订阅账号信息变更事件。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [off('accountChange')]{@link appAccount.AppAccountManager.off(type: 'accountChange', callback?: Callback<Array<AppAccountInfo>>)}
     * > 替代。
     *
     * @param { 'change' } type - 事件回调类型，支持的事件为'change'，当账号所有者更新账号信息时，触发该事件。
     * @param { Callback<Array<AppAccountInfo>> } [callback] - 需要注销的回调函数，默认为空，表示取消该类型事件的所有回调。
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.off(type: 'accountChange', callback?: Callback<Array<AppAccountInfo>>)
     */
    off(type: 'change', callback?: Callback<Array<AppAccountInfo>>): void;

    /**
     * 取消订阅账号信息变更事件。
     *
     * @param { 'accountChange' } type - 事件回调类型，支持的事件为'accountChange'，当账号所有者更新账号信息时，触发该事件。
     * @param { Callback<Array<AppAccountInfo>> } [callback] - 需要注销的回调函数，默认为空，表示取消该类型事件所有的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid type.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    off(type: 'accountChange', callback?: Callback<Array<AppAccountInfo>>): void;

    /**
     * 取消订阅账号信息变更事件。
     *
     * @param { Callback<Array<AppAccountInfo>> } [callback] - 需要注销的回调函数，默认为空，表示取消该类型事件所有的回调。
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    offAccountChange(callback?: Callback<Array<AppAccountInfo>>): void;

    /**
     * 对应用账号进行鉴权以获取授权令牌。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [auth]{@link appAccount.AppAccountManager.auth(name: string, owner: string, authType: string, callback: AuthCallback)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { object } options - 鉴权所需的可选项。
     * @param { AuthenticatorCallback } callback - 回调对象，返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.auth(name: string, owner: string, authType: string, callback: AuthCallback)
     */
    authenticate(
      name: string,
      owner: string,
      authType: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void;

    /**
     * 对应用账号进行鉴权以获取授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { AuthCallback } callback - 回调对象，返回鉴权结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner or authType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    auth(name: string, owner: string, authType: string, callback: AuthCallback): void;

    /**
     * 对应用账号进行鉴权以获取授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { Record<string, Object> } options - 鉴权所需的可选项。
     * @param { AuthCallback } callback - 回调对象，返回鉴权结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner, authType or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    auth(
      name: string,
      owner: string,
      authType: string,
      options: Record<string, Object>,
      callback: AuthCallback
    ): void;

    /**
     * 对应用账号进行鉴权以获取授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { Record<string, RecordData> } options - 鉴权所需的可选项。
     * @param { AuthCallback } callback - 回调对象，返回鉴权结果。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner, authType or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    auth(
      name: string,
      owner: string,
      authType: string,
      options: Record<string, RecordData>,
      callback: AuthCallback
    ): void;

    /**
     * 获取指定应用账号的特定鉴权类型的授权令牌。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAuthToken]{@link appAccount.AppAccountManager.getAuthToken(name: string, owner: string, authType: string, callback: AsyncCallback<string>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取成功时，err为null，data为授权令牌值；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAuthToken(name: string, owner: string, authType: string, callback: AsyncCallback<string>)
     */
    getOAuthToken(name: string, owner: string, authType: string, callback: AsyncCallback<string>): void;

    /**
     * 获取指定应用账号的特定鉴权类型的授权令牌。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAuthToken]{@link appAccount.AppAccountManager.getAuthToken(name: string, owner: string, authType: string)}替
     * > 代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @returns { Promise<string> } Promise对象，返回授权令牌。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAuthToken(name: string, owner: string, authType: string)
     */
    getOAuthToken(name: string, owner: string, authType: string): Promise<string>;

    /**
     * 获取指定应用账号的特定鉴权类型的授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取成功时，err为null，data为授权令牌值；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner or authType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAuthToken(name: string, owner: string, authType: string, callback: AsyncCallback<string>): void;

    /**
     * 获取指定应用账号的特定鉴权类型的授权令牌。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @returns { Promise<string> } Promise对象，返回授权令牌。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner or authType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAuthToken(name: string, owner: string, authType: string): Promise<string>;

    /**
     * 为指定应用账号设置特定鉴权类型的授权令牌。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [setAuthToken]{@link appAccount.AppAccountManager.setAuthToken(name: string, authType: string, token: string, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功时，err为null；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAuthToken(name: string, authType: string, token: string, callback: AsyncCallback<void>)
     */
    setOAuthToken(name: string, authType: string, token: string, callback: AsyncCallback<void>): void;

    /**
     * 为指定应用账号设置特定鉴权类型的授权令牌。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [setAuthToken]{@link appAccount.AppAccountManager.setAuthToken(name: string, authType: string, token: string)}替
     * > 代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAuthToken(name: string, authType: string, token: string)
     */
    setOAuthToken(name: string, authType: string, token: string): Promise<void>;

    /**
     * 为指定应用账号设置特定鉴权类型的授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功时，err为null；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, authType or token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400004 - The number of tokens reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAuthToken(name: string, authType: string, token: string, callback: AsyncCallback<void>): void;

    /**
     * 为指定应用账号设置特定鉴权类型的授权令牌。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, authType or token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12400004 - The number of tokens reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAuthToken(name: string, authType: string, token: string): Promise<void>;

    /**
     * 删除指定应用账号的特定鉴权类型的授权令牌。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [deleteAuthToken]{@link appAccount.AppAccountManager.deleteAuthToken(name: string, owner: string, authType: string, token: string, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当删除成功时，err为null；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.deleteAuthToken(name: string, owner: string, authType: string, token: string, callback: AsyncCallback<void>)
     */
    deleteOAuthToken(name: string, owner: string, authType: string, token: string, callback: AsyncCallback<void>): void;

    /**
     * 删除指定应用账号的特定鉴权类型的授权令牌。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [deleteAuthToken]{@link appAccount.AppAccountManager.deleteAuthToken(name: string, owner: string, authType: string, token: string)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.deleteAuthToken(name: string, owner: string, authType: string, token: string)
     */
    deleteOAuthToken(name: string, owner: string, authType: string, token: string): Promise<void>;

    /**
     * 删除指定应用账号的特定鉴权类型的授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。如果授权令牌不存在，则不执行任何操作。
     * @param { AsyncCallback<void> } callback - 回调函数。当删除成功时，err为null；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner, authType or token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    deleteAuthToken(name: string, owner: string, authType: string, token: string, callback: AsyncCallback<void>): void;

    /**
     * 删除指定应用账号的特定鉴权类型的授权令牌。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } token - 授权令牌。最大长度为1024个字符。如果授权令牌不存在，则不执行任何操作。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner, authType or token.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    deleteAuthToken(name: string, owner: string, authType: string, token: string): Promise<void>;

    /**
     * 设置指定账号的特定鉴权类型的授权令牌对指定应用的可见性。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [setAuthTokenVisibility]{@link appAccount.AppAccountManager.setAuthTokenVisibility( name: string, authType: string, bundleName: string, isVisible: boolean, callback: AsyncCallback<void> )}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 被设置可见性的应用包名。最大长度为512个字符。
     * @param { boolean } isVisible - 是否可见。true表示可见，false表示不可见。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功时，err为null；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAuthTokenVisibility( name: string, authType: string, bundleName: string, isVisible: boolean, callback: AsyncCallback<void> )
     */
    setOAuthTokenVisibility(
      name: string,
      authType: string,
      bundleName: string,
      isVisible: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 设置指定账号的特定鉴权类型的授权令牌对指定应用的可见性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [setAuthTokenVisibility]{@link appAccount.AppAccountManager.setAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 被设置可见性的应用包名。最大长度为512个字符。
     * @param { boolean } isVisible - 是否可见。true表示可见，false表示不可见。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.setAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean)
     */
    setOAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean): Promise<void>;

    /**
     * 设置指定账号的特定鉴权类型的授权令牌对指定应用的可见性。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 被设置可见性的应用包名。最大长度为512个字符。
     * @param { boolean } isVisible - 是否可见。true表示可见，false表示不可见。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功时，err为null；否则为错误对象。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, authType or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @throws { BusinessError } 12400001 - Application not found. [since 9 - 13]
     * @throws { BusinessError } 12400005 - The size of authorization list reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAuthTokenVisibility(
      name: string,
      authType: string,
      bundleName: string,
      isVisible: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 设置指定账号的特定鉴权类型的授权令牌对指定应用的可见性。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 被设置可见性的应用包名。最大长度为512个字符。
     * @param { boolean } isVisible - 是否可见。true表示可见，false表示不可见。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, authType or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @throws { BusinessError } 12400001 - Application not found. [since 9 - 13]
     * @throws { BusinessError } 12400005 - The size of authorization list reaches the upper limit.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAuthTokenVisibility(name: string, authType: string, bundleName: string, isVisible: boolean): Promise<void>;

    /**
     * 检查指定应用账号的特定鉴权类型的授权令牌对指定应用的可见性。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [checkAuthTokenVisibility]{@link appAccount.AppAccountManager.checkAuthTokenVisibility(name: string, authType: string, bundleName: string, callback: AsyncCallback<boolean>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 检查可见性的应用包名。最大长度为512个字符。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当检查成功时，err为null，data为true表示可见，data为false表示不可见；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.checkAuthTokenVisibility(name: string, authType: string, bundleName: string, callback: AsyncCallback<boolean>)
     */
    checkOAuthTokenVisibility(
      name: string,
      authType: string,
      bundleName: string,
      callback: AsyncCallback<boolean>
    ): void;

    /**
     * 检查指定应用账号的特定鉴权类型的授权令牌对指定应用的可见性。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [checkAuthTokenVisibility]{@link appAccount.AppAccountManager.checkAuthTokenVisibility(name: string, authType: string, bundleName: string)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 用于检查可见性的应用包名。最大长度为512个字符。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定鉴权类型的OAuth令牌对特定应用的可见，返回false表示不可见。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.checkAuthTokenVisibility(name: string, authType: string, bundleName: string)
     */
    checkOAuthTokenVisibility(name: string, authType: string, bundleName: string): Promise<boolean>;

    /**
     * 检查指定应用账号的特定鉴权类型的授权令牌对指定应用的可见性。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 检查可见性的应用包名。最大长度为512个字符。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当检查成功时，err为null，data为true表示可见，data为false表示不可见；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, authType or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAuthTokenVisibility(name: string, authType: string, bundleName: string, callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定应用账号的特定鉴权类型的授权令牌对指定应用的可见性。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } bundleName - 用于检查可见性的应用包名。最大长度为512个字符。
     * @returns { Promise<boolean> } Promise对象。返回true表示授权令牌对指定应用的可见，返回false表示不可见。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, authType or bundleName.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAuthTokenVisibility(name: string, authType: string, bundleName: string): Promise<boolean>;

    /**
     * 获取指定账号对调用方可见的所有授权令牌。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAllAuthTokens]{@link appAccount.AppAccountManager.getAllAuthTokens(name: string, owner: string, callback: AsyncCallback<Array<AuthTokenInfo>>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AsyncCallback<Array<OAuthTokenInfo>> } callback - 回调函数。当获取成功时，err为null，data为授权令牌数组；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAllAuthTokens(name: string, owner: string, callback: AsyncCallback<Array<AuthTokenInfo>>)
     */
    getAllOAuthTokens(name: string, owner: string, callback: AsyncCallback<Array<OAuthTokenInfo>>): void;

    /**
     * 获取指定账号对调用方可见的所有授权令牌。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAllAuthTokens]{@link appAccount.AppAccountManager.getAllAuthTokens(name: string, owner: string)}替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @returns { Promise<Array<OAuthTokenInfo>> } Promise对象，返回授权令牌数组。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAllAuthTokens(name: string, owner: string)
     */
    getAllOAuthTokens(name: string, owner: string): Promise<Array<OAuthTokenInfo>>;

    /**
     * 获取指定账号对调用方可见的所有授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AsyncCallback<Array<AuthTokenInfo>> } callback - 回调函数。当获取成功时，err为null，data为授权令牌数组；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or owner.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAllAuthTokens(name: string, owner: string, callback: AsyncCallback<Array<AuthTokenInfo>>): void;

    /**
     * 获取指定账号对调用方可见的所有授权令牌。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @returns { Promise<Array<AuthTokenInfo>> } Promise对象，返回授权令牌数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or owner.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAllAuthTokens(name: string, owner: string): Promise<Array<AuthTokenInfo>>;

    /**
     * 获取指定应用账号的特定鉴权类型的授权列表，即被授权的包名数组（令牌的授权列表通过
     * [setOAuthTokenVisibility]{@link appAccount.AppAccountManager.setOAuthTokenVisibility( name: string, authType: string, bundleName: string, isVisible: boolean, callback: AsyncCallback<void> )}
     * 来设置）。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAuthList]{@link appAccount.AppAccountManager.getAuthList(name: string, authType: string, callback: AsyncCallback<Array<string>>)}
     * > 替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { AsyncCallback<Array<string>> } callback - 回调函数。当获取成功时，err为null，data为被授权的包名数组；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAuthList(name: string, authType: string, callback: AsyncCallback<Array<string>>)
     */
    getOAuthList(name: string, authType: string, callback: AsyncCallback<Array<string>>): void;

    /**
     * 获取指定应用账号的特定鉴权类型的授权列表，即被授权的包名数组（令牌的授权列表通过
     * [setOAuthTokenVisibility]{@link appAccount.AppAccountManager.setOAuthTokenVisibility( name: string, authType: string, bundleName: string, isVisible: boolean, callback: AsyncCallback<void> )}
     * 来设置）。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAuthList]{@link appAccount.AppAccountManager.getAuthList(name: string, authType: string)}替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @returns { Promise<Array<string>> } Promise对象，返回被授权的包名数组。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAuthList(name: string, authType: string)
     */
    getOAuthList(name: string, authType: string): Promise<Array<string>>;

    /**
     * 获取指定应用账号的特定鉴权类型的授权列表，即被授权的包名数组（令牌的授权列表通过
     * [setAuthTokenVisibility]{@link appAccount.AppAccountManager.setAuthTokenVisibility( name: string, authType: string, bundleName: string, isVisible: boolean, callback: AsyncCallback<void> )}
     * 来设置）。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { AsyncCallback<Array<string>> } callback - 回调函数。当获取成功时，err为null，data为被授权的包名数组；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or authType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAuthList(name: string, authType: string, callback: AsyncCallback<Array<string>>): void;

    /**
     * 获取指定应用账号的特定鉴权类型的授权列表，即被授权的包名数组（令牌的授权列表通过
     * [setAuthTokenVisibility]{@link appAccount.AppAccountManager.setAuthTokenVisibility( name: string, authType: string, bundleName: string, isVisible: boolean, callback: AsyncCallback<void> )}
     * 来设置）。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 鉴权类型。自定义数据，最大长度为1024个字符。
     * @returns { Promise<Array<string>> } Promise对象，返回被授权的包名数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or authType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300107 - AuthType not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAuthList(name: string, authType: string): Promise<Array<string>>;

    /**
     * 获取鉴权会话的认证器回调。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAuthCallback]{@link appAccount.AppAccountManager.getAuthCallback(sessionId: string, callback: AsyncCallback<AuthCallback>)}
     * > 替代。
     *
     * @param { string } sessionId - 鉴权会话的标识。
     * @param { AsyncCallback<AuthenticatorCallback> } callback - 回调函数。当获取鉴权会话的认证器回调函数成功时，err为null，data为认证器回调函数；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAuthCallback(sessionId: string, callback: AsyncCallback<AuthCallback>)
     */
    getAuthenticatorCallback(sessionId: string, callback: AsyncCallback<AuthenticatorCallback>): void;

    /**
     * 获取鉴权会话的认证器回调。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [getAuthCallback]{@link appAccount.AppAccountManager.getAuthCallback(sessionId: string)}替代。
     *
     * @param { string } sessionId - 鉴权会话的标识。
     * @returns { Promise<AuthenticatorCallback> } Promise对象，返回鉴权会话的认证器回调对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.getAuthCallback(sessionId: string)
     */
    getAuthenticatorCallback(sessionId: string): Promise<AuthenticatorCallback>;

    /**
     * 获取鉴权会话的认证器回调对象。使用callback异步回调。
     *
     * @param { string } sessionId - 鉴权会话的标识。
     * @param { AsyncCallback<AuthCallback> } callback - 回调函数。当获取成功时，err为null，data为鉴权会话的认证器回调对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid sessionId.
     * @throws { BusinessError } 12300108 - Session not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAuthCallback(sessionId: string, callback: AsyncCallback<AuthCallback>): void;

    /**
     * 获取鉴权会话的认证器回调对象。使用Promise异步回调。
     *
     * @param { string } sessionId - 鉴权会话的标识。
     * @returns { Promise<AuthCallback> } Promise对象，返回鉴权会话的认证器回调对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid sessionId.
     * @throws { BusinessError } 12300108 - Session not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getAuthCallback(sessionId: string): Promise<AuthCallback>;

    /**
     * 获取指定应用的认证器信息。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [queryAuthenticatorInfo]{@link appAccount.AppAccountManager.queryAuthenticatorInfo(owner: string, callback: AsyncCallback<AuthenticatorInfo>)}
     * > 替代。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AsyncCallback<AuthenticatorInfo> } callback - 回调函数。当获取成功时，err为null，data为认证器信息对象；否则为错误对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.queryAuthenticatorInfo(owner: string, callback: AsyncCallback<AuthenticatorInfo>)
     */
    getAuthenticatorInfo(owner: string, callback: AsyncCallback<AuthenticatorInfo>): void;

    /**
     * 获取指定应用的认证器信息。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用
     * > [queryAuthenticatorInfo]{@link appAccount.AppAccountManager.queryAuthenticatorInfo(owner: string)}替代。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @returns { Promise<AuthenticatorInfo> } Promise对象，返回指定应用的认证器信息对象。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AppAccountManager.queryAuthenticatorInfo(owner: string)
     */
    getAuthenticatorInfo(owner: string): Promise<AuthenticatorInfo>;

    /**
     * 获取指定应用的认证器信息。使用callback异步回调。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AsyncCallback<AuthenticatorInfo> } callback - 回调函数。当获取成功时，err为null，data为认证器信息对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    queryAuthenticatorInfo(owner: string, callback: AsyncCallback<AuthenticatorInfo>): void;

    /**
     * 获取指定应用的认证器信息。使用Promise异步回调。
     *
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @returns { Promise<AuthenticatorInfo> } Promise对象，返回指定应用的认证器信息对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    queryAuthenticatorInfo(owner: string): Promise<AuthenticatorInfo>;

    /**
     * 检查指定应用账号是否满足特定的标签集合。使用callback异步回调。该方法依赖目标应用的认证器提供标签检查的能力。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { Array<string> } labels - 标签数组。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当检查成功时，err为null，data为true表示满足特定的标签集合，data为false表示不满足；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner or labels.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAccountLabels(name: string, owner: string, labels: Array<string>, callback: AsyncCallback<boolean>): void;

    /**
     * 检查指定应用账号是否满足特定的标签集合。使用Promise异步回调。该方法依赖目标应用的认证器提供标签检查的能力。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { Array<string> } labels - 标签数组。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定账号满足特定的标签集合，返回false表示不满足。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner or labels.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAccountLabels(name: string, owner: string, labels: Array<string>): Promise<boolean>;

    /**
     * 删除指定应用账号的特定类型的凭据信息。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当删除成功时，err为null；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or credentialType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300102 - Credential not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    deleteCredential(name: string, credentialType: string, callback: AsyncCallback<void>): void;

    /**
     * 删除指定应用账号的特定类型的凭据信息。使用Promise异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } credentialType - 凭据类型。自定义的类型，最大长度为1024个字符。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or credentialType.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300102 - Credential not found.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    deleteCredential(name: string, credentialType: string): Promise<void>;

    /**
     * 根据选项选择调用方可访问的账号列表。使用callback异步回调。如果选项中包含标签约束，则该方法依赖目标应用的认证器提供标签检查的能力。
     *
     * @param { SelectAccountsOptions } options - 选择账号的选项。
     * @param { AsyncCallback<Array<AppAccountInfo>> } callback - 回调函数。当根据选项选择请求方可访问的账号列表时，err为null，data为可访问的账号信息对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid options.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    selectAccountsByOptions(options: SelectAccountsOptions, callback: AsyncCallback<Array<AppAccountInfo>>): void;

    /**
     * 根据选项选择调用方可访问的账号列表。使用Promise异步回调。如果选项中包含标签约束，则该方法依赖目标应用的认证器提供标签检查的能力。
     *
     * @param { SelectAccountsOptions } options - 选择账号的选项。
     * @returns { Promise<Array<AppAccountInfo>> } Promise对象，返回调用方可访问的账号列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid options.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    selectAccountsByOptions(options: SelectAccountsOptions): Promise<Array<AppAccountInfo>>;

    /**
     * 验证指定账号的凭据。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { AuthCallback } callback - 回调函数，返回验证结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name or owner.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    verifyCredential(name: string, owner: string, callback: AuthCallback): void;
    /**
     * 验证用户凭据。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } owner - 应用账号所有者的包名。最大长度为1024个字符。
     * @param { VerifyCredentialOptions } options - 验证凭据的选项。
     * @param { AuthCallback } callback - 回调函数，返回验证结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid name, owner or options.
     * @throws { BusinessError } 12300003 - Account not found.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    verifyCredential(name: string, owner: string, options: VerifyCredentialOptions, callback: AuthCallback): void;

    /**
     * 设置指定应用的认证器属性。使用callback异步回调。
     *
     * @param { string } owner - 认证器的所有者的包名。
     * @param { AuthCallback } callback - 回调函数，返回设置属性的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAuthenticatorProperties(owner: string, callback: AuthCallback): void;
    /**
     * 设置认证器属性。使用callback异步回调。
     *
     * @param { string } owner - 认证器的所有者的包名。
     * @param { SetPropertiesOptions } options - 设置属性的选项。
     * @param { AuthCallback } callback - 认证器回调，返回设置属性的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid owner or options.
     * @throws { BusinessError } 12300010 - Account service busy.
     * @throws { BusinessError } 12300113 - Authenticator service not found.
     * @throws { BusinessError } 12300114 - Authenticator service exception.
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setAuthenticatorProperties(owner: string, options: SetPropertiesOptions, callback: AuthCallback): void;
  }

  /**
   * 表示应用账号信息。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface AppAccountInfo {
    /**
     * 应用账号所有者的包名。最大长度为1024个字符。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamic
     * @since 23 static
     */
    owner: string;

    /**
     * 应用账号的名称。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 7 dynamic
     * @since 23 static
     */
    name: string;
  }

  /**
   * 表示OAuth令牌信息。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。建议使用[AuthTokenInfo]{@link appAccount.AuthTokenInfo}替代。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead appAccount.AuthTokenInfo
   */
  interface OAuthTokenInfo {
    /**
     * 令牌的鉴权类型。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AuthTokenInfo.authType
     */
    authType: string;

    /**
     * 令牌的取值。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.AuthTokenInfo.token
     */
    token: string;
  }

  /**
   * 表示Auth令牌信息。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface AuthTokenInfo {
    /**
     * 令牌的鉴权类型。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    authType: string;

    /**
     * 令牌的取值。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    token: string;

    /**
     * 令牌所属的账号信息，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    account?: AppAccountInfo;
  }

  /**
   * 表示OAuth认证器信息。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 8 dynamic
   * @since 23 static
   */
  interface AuthenticatorInfo {
    /**
     * 认证器的所有者的包名。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    owner: string;

    /**
     * 认证器的图标标识。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    iconId: long;

    /**
     * 认证器的标签标识。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    labelId: long;
  }

  /**
   * 表示认证结果信息。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface AuthResult {
    /**
     * 令牌所属的账号信息，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    account?: AppAccountInfo;

    /**
     * 令牌信息，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    tokenInfo?: AuthTokenInfo;
  }

  /**
   * 表示创建账号的选项。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface CreateAccountOptions {
    /**
     * 自定义数据，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    customData?: Record<string, string>;
  }

  /**
   * 表示隐式创建账号的选项。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface CreateAccountImplicitlyOptions {
    /**
     * 所需的标签，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    requiredLabels?: Array<string>;

    /**
     * 令牌的鉴权类型。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    authType?: string;

    /**
     * 自定义参数对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * 自定义参数对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * 表示用于选择账号的选项。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface SelectAccountsOptions {
    /**
     * 允许的账号数组，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    allowedAccounts?: Array<AppAccountInfo>;

    /**
     * 允许的账号所有者数组，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    allowedOwners?: Array<string>;

    /**
     * 认证器的标签标识，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    requiredLabels?: Array<string>;
  }

  /**
   * 表示用于验证凭据的选项。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface VerifyCredentialOptions {
    /**
     * 凭据类型，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    credentialType?: string;

    /**
     * 凭据取值，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    credential?: string;

    /**
     * 自定义参数对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * 自定义参数对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * 表示用于设置属性的选项。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface SetPropertiesOptions {
    /**
     * 属性对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    properties?: Record<string, Object>;

    /**
     * 属性对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    properties?: Record<string, RecordData>;

    /**
     * 自定义参数对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * 自定义参数对象，默认为空。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * 表示常量的枚举。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 8 dynamic
   * @since 23 static
   */
  enum Constants {
    /**
     * 表示操作，隐式添加账号。
     *
     * **说明：**从API version 8开始支持，从API version 9开始废弃，建议使用ACTION_CREATE_ACCOUNT_IMPLICITLY替代。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.Constants.ACTION_CREATE_ACCOUNT_IMPLICITLY
     */
    ACTION_ADD_ACCOUNT_IMPLICITLY = 'addAccountImplicitly',

    /**
     * 表示操作，鉴权。
     *
     * **说明：**从API version 8开始支持，从API version 9开始废弃，建议使用ACTION_AUTH替代。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.Constants.ACTION_AUTH
     */
    ACTION_AUTHENTICATE = 'authenticate',

    /**
     * 表示操作，隐式创建账号。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_CREATE_ACCOUNT_IMPLICITLY = "createAccountImplicitly",

    /**
     * 表示操作，鉴权。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_AUTH = "auth",

    /**
     * 表示操作，验证凭据。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_VERIFY_CREDENTIAL = "verifyCredential",

    /**
     * 表示操作，设置认证器属性。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    ACTION_SET_AUTHENTICATOR_PROPERTIES = "setAuthenticatorProperties",

    /**
     * 表示键名，应用账号的名称。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_NAME = "name",

    /**
     * 表示键名，应用账号所有者的包名。最大长度为1024个字符。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_OWNER = "owner",

    /**
     * 表示键名，令牌。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_TOKEN = "token",

    /**
     * 表示键名，操作。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_ACTION = "action",

    /**
     * 表示键名，鉴权类型。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_AUTH_TYPE = "authType",

    /**
     * 表示键名，会话标识。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_SESSION_ID = "sessionId",

    /**
     * 表示键名，调用方PID。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_CALLER_PID = "callerPid",

    /**
     * 表示键名，调用方UID。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_CALLER_UID = "callerUid",

    /**
     * 表示键名，调用方包名。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamic
     * @since 23 static
     */
    KEY_CALLER_BUNDLE_NAME = "callerBundleName",

    /**
     * 表示键名，必需的标签。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_REQUIRED_LABELS = "requiredLabels",

    /**
     * 表示键名，布尔返回值。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    KEY_BOOLEAN_RESULT = "booleanResult"
  }

  /**
   * 表示返回码的枚举。
   *
   * > **说明：**<br/>
   * > > 从API version 8开始支持，从API version 9开始废弃。相关信息建议查看
   * > [账号管理错误码](docroot://reference/apis-basic-services-kit/errorcode-account.md)替代。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 8 dynamiconly
   * @deprecated since 9
   */
  enum ResultCode {
    /**
     * 表示操作成功。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    SUCCESS = 0,

    /**
     * 表示应用账号不存在。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_ACCOUNT_NOT_EXIST = 10001,

    /**
     * 表示应用账号服务异常。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_APP_ACCOUNT_SERVICE_EXCEPTION = 10002,

    /**
     * 表示密码无效。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_INVALID_PASSWORD = 10003,

    /**
     * 表示请求无效。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_INVALID_REQUEST = 10004,

    /**
     * 表示响应无效。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_INVALID_RESPONSE = 10005,

    /**
     * 表示网络异常。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_NETWORK_EXCEPTION = 10006,

    /**
     * 表示认证器不存在。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_AUTHENTICATOR_NOT_EXIST = 10007,

    /**
     * 表示鉴权取消。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_CANCELED = 10008,

    /**
     * 表示开放授权列表过大。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_LIST_TOO_LARGE = 10009,

    /**
     * 表示开放授权服务忙碌。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_SERVICE_BUSY = 10010,

    /**
     * 表示开放授权服务异常。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_SERVICE_EXCEPTION = 10011,

    /**
     * 表示鉴权会话不存在。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_SESSION_NOT_EXIST = 10012,

    /**
     * 表示鉴权超时。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_TIMEOUT = 10013,

    /**
     * 表示开放授权令牌不存在。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_TOKEN_NOT_EXIST = 10014,

    /**
     * 表示开放授权令牌过多。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_TOKEN_TOO_MANY = 10015,

    /**
     * 表示不支持的鉴权操作。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_UNSUPPORT_ACTION = 10016,

    /**
     * 表示不支持的鉴权类型。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_OAUTH_UNSUPPORT_AUTH_TYPE = 10017,

    /**
     * 表示权限不足。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     */
    ERROR_PERMISSION_DENIED = 10018
  }

  /**
   * OAuth认证器回调接口。
   *
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。建议使用[AuthCallback]{@link appAccount.AuthCallback}替代。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead appAccount.AuthCallback
   */
  interface AuthenticatorCallback {
    /**
     * 通知请求结果。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用[onResult](#onresult9)替代。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead AppAccount.AuthCallback.onResult
     */
    onResult: (code: number, result: { [key: string]: any }) => void;

    /**
     * 通知请求被跳转。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持，从API version 9开始废弃。建议使用[onRequestRedirected](#onrequestredirected9)替代。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead AppAccount.AuthCallback.onRequestRedirected
     */
    onRequestRedirected: (request: Want) => void;
  }

  /**
   * 认证器回调类。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @since 9 dynamic
   * @since 23 static
   */
  interface AuthCallback {
    /**
     * 通知请求结果。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    onResult: (code: int, result?: AuthResult) => void;

    /**
     * 通知请求被跳转。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    onRequestRedirected: (request: Want) => void;

    /**
     * 通知请求被继续处理。
     *
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    onRequestContinued?: () => void;
  }

  /**
   * 认证器基类。
   *
   * @syscap SystemCapability.Account.AppAccount
   * @name Authenticator
   * @since 8 dynamic
   * @since 23 static
   */
  class Authenticator {
    /**
     * 根据指定的鉴权类型和可选项，隐式地添加应用账号。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持, 从API version 9开始废弃。建议使用[createAccountImplicitly](#createaccountimplicitly9-2)替代。
     *
     * @param { string } authType - 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } callerBundleName - 鉴权请求方的包名。
     * @param { object } options - 鉴权所需要的可选项。
     * @param { AuthenticatorCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.Authenticator.createAccountImplicitly(options: CreateAccountImplicitlyOptions, callback: AuthCallback)
     */
    addAccountImplicitly(
      authType: string,
      callerBundleName: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void;

    /**
     * 根据指定的账号所有者隐式地创建应用账号。使用callback异步回调。
     *
     * @param { CreateAccountImplicitlyOptions } options - 隐式创建账号的选项。
     * @param { AuthCallback } callback - 认证器回调对象，用于返回创建结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    createAccountImplicitly(options: CreateAccountImplicitlyOptions, callback: AuthCallback): void;

    /**
     * 对应用账号进行鉴权，获取OAuth令牌。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 8开始支持, 从API version 9开始废弃。建议使用[auth](#auth9-2)替代。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { string } callerBundleName - 鉴权请求方的包名。
     * @param { object } options - 鉴权所需要的可选项。
     * @param { AuthenticatorCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead appAccount.Authenticator.auth(name: string, authType: string, options: Record<string, Object>, callback: AuthCallback)
     */
    authenticate(
      name: string,
      authType: string,
      callerBundleName: string,
      options: { [key: string]: any },
      callback: AuthenticatorCallback
    ): void;

    /**
     * 对应用账号进行鉴权以获取授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { Record<string, Object> } options - 鉴权所需要的可选项。
     * @param { AuthCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     */
    auth(name: string, authType: string, options: Record<string, Object>, callback: AuthCallback): void;

    /**
     * 对应用账号进行鉴权以获取授权令牌。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { string } authType - 应用账号的鉴权类型。自定义数据，最大长度为1024个字符。
     * @param { Record<string, RecordData> } options - 鉴权所需要的可选项。
     * @param { AuthCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 23 static
     */
    auth(name: string, authType: string, options: Record<string, RecordData>, callback: AuthCallback): void;

    /**
     * 验证应用账号的凭据。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { VerifyCredentialOptions } options - 验证凭据的可选项。
     * @param { AuthCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    verifyCredential(name: string, options: VerifyCredentialOptions, callback: AuthCallback): void;

    /**
     * 设置认证器属性。使用callback异步回调。
     *
     * @param { SetPropertiesOptions } options - 设置属性的可选项。
     * @param { AuthCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setProperties(options: SetPropertiesOptions, callback: AuthCallback): void;

    /**
     * 检查账号标签。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { Array<string> } labels - 标签数组。
     * @param { AuthCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAccountLabels(name: string, labels: Array<string>, callback: AuthCallback): void;

    /**
     * 判断账号是否可以删除。使用callback异步回调。
     *
     * @param { string } name - 应用账号的名称。最大长度为512个字符。
     * @param { AuthCallback } callback - 认证器回调，用于返回鉴权结果。
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    checkAccountRemovable(name: string, callback: AuthCallback): void;

    /**
     * 获取认证器的远程对象，不可以重载实现。
     *
     * @returns { rpc.RemoteObject } 认证器Authenticator的远程对象。用于跨进程通信。
     * @syscap SystemCapability.Account.AppAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getRemoteObject(): rpc.RemoteObject;
  }
}

export default appAccount;