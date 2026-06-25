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

import type { AsyncCallback } from './@ohos.base';
/*** if arkts static */
import type { RecordData } from './@ohos.base';
/*** endif */

/**
 * 本模块提供管理分布式账号的一些基础功能，主要包括查询和更新账号登录状态。
 *
 * @syscap SystemCapability.Account.OsAccount
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace distributedAccount {
  /**
   * 获取分布式账号单实例对象。
   *
   * @returns { DistributedAccountAbility } 返回一个实例，实例提供查询和更新分布式账号登录状态方法。
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  function getDistributedAccountAbility(): DistributedAccountAbility;

  /**
   * 提供查询和更新分布式账号登录状态方法（需要先获取分布式账号的单实例对象）。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface DistributedAccountAbility {
    /**
     * 获取分布式账号信息。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountDistributedInfo]{@link distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @param { AsyncCallback<DistributedInfo> } callback - 回调函数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>)
     */
    queryOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void;

    /**
     * 获取分布式账号信息。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [getOsAccountDistributedInfo]{@link distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo()}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS or ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Promise<DistributedInfo> } Promise对象，返回分布式账号信息对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility.getOsAccountDistributedInfo()
     */
    queryOsAccountDistributedInfo(): Promise<DistributedInfo>;

    /**
     * 获取分布式账号信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or
     *     ohos.permission.DISTRIBUTED_DATASYNC
     * @param { AsyncCallback<DistributedInfo> } callback - 回调参数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfo(callback: AsyncCallback<DistributedInfo>): void;

    /**
     * 获取分布式账号信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or ohos.permission.GET_DISTRIBUTED_ACCOUNTS or
     *     ohos.permission.DISTRIBUTED_DATASYNC
     * @returns { Promise<DistributedInfo> } Promise对象，返回分布式账号信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 12300001 - System service exception.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfo(): Promise<DistributedInfo>;

    /**
     * 获取指定系统账号的分布式信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or
     *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 10 - 19]
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and
     *     ohos.permission.GET_DISTRIBUTED_ACCOUNTS) [since 20]
     * @param { int } localId - 系统账号ID。
     * @param { AsyncCallback<DistributedInfo> } callback - 回调参数。当获取分布式账号信息成功，err为undefined，data为获取到的分布式账号信息对象；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfoByLocalId(localId: int, callback: AsyncCallback<DistributedInfo>): void;

    /**
     * 获取指定系统账号的分布式信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or
     *     ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS [since 10 - 19]
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS or (ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and
     *     ohos.permission.GET_DISTRIBUTED_ACCOUNTS) [since 20]
     * @param { int } localId - 系统账号ID。
     * @returns { Promise<DistributedInfo> } Promise对象，返回分布式账号信息对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getOsAccountDistributedInfoByLocalId(localId: int): Promise<DistributedInfo>;

    /**
     * 更新分布式账号信息。使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setOsAccountDistributedInfo]{@link distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DistributedInfo } accountInfo - 分布式账号信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当更新分布式账号信息成功时，err为undefined，否则为错误对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>)
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * 更新分布式账号信息。使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 从API version 7开始支持，从API version 9开始废弃。建议使用
     * > [setOsAccountDistributedInfo]{@link distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo: DistributedInfo)}
     * > 替代。
     *
     * @permission ohos.permission.MANAGE_LOCAL_ACCOUNTS
     * @param { DistributedInfo } accountInfo - 分布式账号信息。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead distributedAccount.DistributedAccountAbility.setOsAccountDistributedInfo(accountInfo: DistributedInfo)
     */
    updateOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>;

    /**
     * 更新分布式账号信息。使用callback异步回调。
     * 该接口仅限系统应用调用。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { DistributedInfo } accountInfo - 分布式账号信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当更新分布式账号信息成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid accountInfo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfo(accountInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * 更新分布式账号信息。使用Promise异步回调。
     * 该接口仅限系统应用调用。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { DistributedInfo } accountInfo - 分布式账号信息。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid accountInfo.
     * @throws { BusinessError } 12300003 - Account not found.
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfo(accountInfo: DistributedInfo): Promise<void>;

    /**
     * 设置指定系统账号的分布式信息。使用callback异步回调。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { DistributedInfo } distributedInfo - 分布式账号信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置指定系统账号的分布式信息成功时，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid distributedInfo.
     * @throws { BusinessError } 12300003 - Account identified by localId or by distributedInfo not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfoByLocalId(localId: int, distributedInfo: DistributedInfo, callback: AsyncCallback<void>): void;

    /**
     * 设置指定系统账号的分布式信息。使用Promise异步回调。
     *
     * @permission ohos.permission.MANAGE_DISTRIBUTED_ACCOUNTS
     * @param { int } localId - 系统账号ID。
     * @param { DistributedInfo } distributedInfo - 分布式账号信息。
     * @returns { Promise<void> } Promise对象，无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     * @throws { BusinessError } 12300001 - System service exception.
     * @throws { BusinessError } 12300002 - Invalid distributedInfo.
     * @throws { BusinessError } 12300003 - Account identified by localId or by distributedInfo not found.
     * @throws { BusinessError } 12300008 - Restricted OS account.
     * @syscap SystemCapability.Account.OsAccount
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    setOsAccountDistributedInfoByLocalId(localId: int, distributedInfo: DistributedInfo): Promise<void>;
  }

  /**
   * 表示分布式账号状态枚举。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 10 dynamic
   * @since 23 static
   */
  enum DistributedAccountStatus {
    /**
     * 未登录状态。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    NOT_LOGGED_IN = 0,

    /**
     * 已登录状态。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    LOGGED_IN = 1
  }

  /**
   * 提供操作系统账号的分布式信息。
   *
   * @syscap SystemCapability.Account.OsAccount
   * @since 7 dynamic
   * @since 23 static
   */
  interface DistributedInfo {
    /**
     * 分布式账号名称，非空字符串。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 分布式账号UID，非空字符串。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 分布式账号登录状态，包括登录、登出、Token失效和注销，分别对应以下字符串：
     *
     * - Ohos.account.event.LOGIN
     *
     * - Ohos.account.event.LOGOUT
     *
     * - Ohos.account.event.TOKEN_INVALID
     *
     * - Ohos.account.event.LOGOFF
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 7 dynamic
     * @since 23 static
     */
    event: string;

    /**
     * 分布式账号的昵称，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    nickname?: string;

    /**
     * 分布式账号的头像，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 9 dynamic
     * @since 23 static
     */
    avatar?: string;

    /**
     * 分布式账号的状态，枚举类型，默认为未登录状态。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 10 dynamic
     * @since 23 static
     */
    readonly status?: DistributedAccountStatus;

    /**
     * 分布式账号扩展信息，根据业务所需，以k-v形式传递定制化信息，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 8 dynamic
     */
    scalableData?: object;

    /**
     * 分布式账号扩展信息，根据业务所需，以k-v形式传递定制化信息，默认为空。
     *
     * @syscap SystemCapability.Account.OsAccount
     * @since 23 static
     */
    scalableData?: Record<string, RecordData>;
  }
}

export default distributedAccount;