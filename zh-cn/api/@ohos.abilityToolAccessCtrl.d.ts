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
 * @file This module provides the capabilities of tools access control
 * @kit AbilityKit
 */

import { Permissions }  from './permissions';
import abilityAccessCtrl from './@ohos.abilityAccessCtrl';
/**
 * abilityToolAccessCtrl的命名空间
 *
 * @syscap SystemCapability.Security.Asset
 * @systemapi
 * @FaAndStageModel
 * @since 26.0.0 dynamiconly
 */
declare namespace abilityToolAccessCtrl {
  /**
   * CLI命令信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface CliCmdInfo {
    /**
     * CLI主命令名称。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    cliCmdName: string;

    /**
     * CLI子命令名。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    subCliCmdName: string;
  }

  /**
   * 权限查询信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionQuery {

    /**
     * 操作信息列表。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    operationInfo: OperationInfo[];

    /**
     * 是否需要ticket
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    needTicket?: boolean;

    /**
     * 凭据过期时间，单位为毫秒。
     * 取值范围：(-∞,+∞)。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticketExpireTimeMs?: long;

    /**
     * 主叫token标识。
     * 取值范围：(-∞,+∞)。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    callerTokenId?: long;

    /**
     * 域ID。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    domainId?: string;
  }

  /**
   * 操作信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface OperationInfo {
    /**
     * 操作类型。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    operationType: OperationType;

    /**
     * 操作详细信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    info: CliCmdInfo | Permissions;
  }

  /**
   * 权限信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionInfo {

    /**
     * 权限名称。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permission: string;

    /**
     * 权限状态。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionStatus: abilityAccessCtrl.PermissionStatus;

    /**
     * 授权状态信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    authStatusInfo?: AuthStatusInfo;
  }

  /**
   * 授权状态信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface AuthStatusInfo {
    /**
     * 授权状态。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    authStatus?: AuthStatus;

    /**
     * 授权标志。
     * 取值范围：(-∞,+∞)。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    flag?: long;
  }

  /**
   * 权限查询结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionQueryResult {

    /**
     * 是否需要对话。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    needDialog: boolean;

    /**
     * 权限结果列表。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionResults: PermissionInfo[];

    /**
     * 票证信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticket?: TicketInfo;
  }

  /**
   * 凭据信息。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface TicketInfo {

    /**
     * 凭据消息
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    message: string;

    /**
     * 挑战值。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    challenge: string;

    /**
     * 凭据字符串
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticket: string;
  }

  /**
   * 用户授权结果。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface UserAuthResult {

    /**
     * 权限信息列表。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionInfo: PermissionInfo[];

    /**
     * 权限查询信息。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionQuery: PermissionQuery;
  }

  /**
   * 授权状态。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  enum AuthStatus {
    /**
     * 需要授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    REQUIRE_AUTH = 0,

    /**
     * 禁止使用。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    FORBIDDEN = 1,

    /**
     * 已授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    AUTHORIZED = 2,

    /**
     * 受策略限制，不允许授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    RESTRICTED = 3,

    /**
     * 策略限制的远程授权。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    REMOTE_RESTRICTED = 4
  }

  /**
   * 操作类型。
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  enum OperationType {
    /**
     * 命令行操作。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    CLI = 0x01,

    /**
     * API操作。
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    API = 0x02
  }

  /**
   * 根据指定的操作查询工具权限。
   * 该函数用于检查权限查询中指定的CLI命令或API的权限状态。
   * 对于每个操作，它返回权限状态、授权状态以及是否需要用户对话框。
   * 当needTicket设置为true时，远程授权会生成一个票据。
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { PermissionQuery } permissionQuery - 权限查询信息
   * @returns { Promise<PermissionQueryResult> } Promise用于返回${PermissionQueryResult}。
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010000 - Invalid parameter. OperationType and operationInfo do not match,
   *     specified callerTokenId does not exist, ticketExpireTime exceeds 24h, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @throws { BusinessError } 24010006 - The requested operation is not allowed to be executed
   *     while the device is locked.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  export function requestToolPermissions(permissionQuery: PermissionQuery): Promise<PermissionQueryResult>;

  /**
   * 根据用户授权结果授予工具权限。
   * 该功能根据用户的授权决定授予工具（CLI命令或API）的权限。
   * 授权成功后，会生成工单，用于权限验证。
   *
   * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
   * @param { UserAuthResult[] } userAuthResult - 用户授权结果列表
   * @returns { Promise<TicketInfo[]> } Promise用于返回${TicketInfo[]}。
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010000 - Invalid parameter. PermissionName exceeds 256 characters,
   *     permissionStatus is invalid, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @throws { BusinessError } 24010004 - Invalid permission. A permission in permissionInfo does not exist.
   * @throws { BusinessError } 24010005 - Grant permission failed. The application specified by the tokenID is not
   *     allowed to be granted with the specified permission, the specified permission cannot be granted by user, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  export function grantToolPermissionsByUser(userAuthResult: UserAuthResult[]): Promise<TicketInfo[]>;
}

export default abilityToolAccessCtrl;