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
 * The namespace of abilityToolAccessCtrl
 *
 * @syscap SystemCapability.Security.Asset
 * @systemapi
 * @FaAndStageModel
 * @since 26.0.0 dynamiconly
 */
declare namespace abilityToolAccessCtrl {
  /**
   * CLI command information.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface CliCmdInfo {
    /**
     * CLI main command name.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    cliCmdName: string;

    /**
     * CLI subcommand name.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    subCliCmdName: string;
  }

  /**
   * Permission query information.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionQuery {

    /**
     * Operation information list.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    operationInfo: OperationInfo[];

    /**
     * Whether a ticket is required.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    needTicket?: boolean;

    /**
     * Ticket expiration time in milliseconds.
     * Unit: milliseconds. The value must be greater than 0. Value constraint: Greater than 0.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticketExpireTimeMs?: long;

    /**
     * Caller token ID.
     * Value range: (-∞,+∞).
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    callerTokenId?: long;

    /**
     * Domain ID.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    domainId?: string;
  }

  /**
   * Operation information.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface OperationInfo {
    /**
     * Operation type.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    operationType: OperationType;

    /**
     * Operation detail information.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    info: CliCmdInfo | Permissions;
  }

  /**
   * Permission information.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionInfo {

    /**
     * Permission name.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permission: string;

    /**
     * Permission status.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionStatus: abilityAccessCtrl.PermissionStatus;

    /**
     * Authorization status information.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    authStatusInfo?: AuthStatusInfo;
  }

  /**
   * Authorization status information.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface AuthStatusInfo {
    /**
     * Authorization status.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    authStatus?: AuthStatus;

    /**
     * Authorization flag.
     * Value range: (-∞,+∞).
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    flag?: long;
  }

  /**
   * Permission query result.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface PermissionQueryResult {

    /**
     * Whether a dialog is required.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    needDialog: boolean;

    /**
     * Permission result list.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionResults: PermissionInfo[];

    /**
     * Ticket information.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticket?: TicketInfo;
  }

  /**
   * Ticket information.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface TicketInfo {

    /**
     * Ticket message.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    message: string;

    /**
     * Challenge value.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    challenge: string;

    /**
     * Ticket string.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    ticket: string;
  }

  /**
   * User authorization result.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  interface UserAuthResult {

    /**
     * Permission information list.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionInfo: PermissionInfo[];

    /**
     * Permission query information.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    permissionQuery: PermissionQuery;
  }

  /**
   * Authorization status.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  enum AuthStatus {
    /**
     * Requires authorization.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    REQUIRE_AUTH = 0,

    /**
     * Forbidden.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    FORBIDDEN = 1,

    /**
     * Authorized.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    AUTHORIZED = 2,

    /**
     * Restricted by policy, authorization not allowed.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    RESTRICTED = 3,

    /**
     * Remote authorization restricted by policy.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    REMOTE_RESTRICTED = 4
  }

  /**
   * Operation type.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.0.0 dynamiconly
   */
  enum OperationType {
    /**
     * CLI operation.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    CLI = 0x01,

    /**
     * API operation.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamiconly
     */
    API = 0x02
  }

  /**
   * Queries tool permissions based on the specified operations.
   * This function checks the permission status for CLI commands or APIs specified in permissionQuery.operationInfo.
   * For each operation, it returns the permission status, authorization status, and whether a user dialog is required.
   * When needTicket is set to true, a ticket will be generated for remote authorization.
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { PermissionQuery } permissionQuery - Permission query information.
   * @returns { Promise<PermissionQueryResult> } Promise used to return ${PermissionQueryResult}.
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
   * Grants tool permissions based on user authorization results.
   * This function grants permissions for tools (CLI commands or APIs) according to the user's authorization decisions.
   * After successful authorization, tickets are generated which can be used for permission verification.
   *
   * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
   * @param { UserAuthResult[] } userAuthResult - User authorization result list.
   * @returns { Promise<TicketInfo[]> } Promise used to return ${TicketInfo[]}.
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