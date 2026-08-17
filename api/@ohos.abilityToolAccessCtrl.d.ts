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
   * Interaction params for remote control
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface RemoteControlParams {
    /**
     * Anti-replay challenge.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    challenge?: string;
    /**
     * Remote control ticket for trusted devices.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    remoteControlTicket?: string;
    /**
     * Device name of controlled device.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    controlledDeviceName?: string;
    /**
     * Device name of controller device.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    controllerDeviceName?: string;
    /**
     * Extra message required for signature verification.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    signVerifyMsg?: string;
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
     * Remote device information.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    remoteInfo?: RemoteInfo;

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
   * Remote device information.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface RemoteInfo {

    /**
     * Device role.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    role: Role;

    /**
     * Remote device ID.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    remoteId: string;

    /**
     * Domain ID.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    domainId: string;

    /**
     * interaction params in remote control.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    remoteControlParams?: RemoteControlParams;
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
   * Remote authorization package.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface RemoteAuthPackage {

    /**
     * Remote message.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    remoteMessage: string;

    /**
     * Challenge value.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    challenge: string;

    /**
     * Ticket string.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
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
   * Remote user authorization results.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface RemoteUserAuthResults {

    /**
     * Authorization result list.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    results: RemoteUserAuthItem[];

    /**
     * Permission query information.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    permissionQuery: PermissionQuery;
  }

  /**
   * Remote user authorization item.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  interface RemoteUserAuthItem {

    /**
     * Permission name.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    permission: string;

    /**
     * Authorization result.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    authResult: string;
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
   * Device role.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  enum Role {
    /**
     * Controller device.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    CONTROLLER = 0x01,

    /**
     * Controlled device.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    CONTROLLED = 0x02
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
   * Remote grant status.
   *
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  enum RemoteGrantStatus {
    /**
     * Enable remote grant.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    ENABLE = 0x01,

    /**
     * Disable remote grant.
     *
     * @syscap SystemCapability.Security.Asset
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamiconly
     */
    DISABLE = 0x02
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
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
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
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
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

  /**
   * Generates an authorization package for the controller device.
   * This function generates a remote authorization package based on the remote user authorization results.
   * The generated package can be sent to the controlled device for permission verification.
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { RemoteUserAuthResults[] } remoteUserAuthResult - Remote user authorization result list.
   * @returns { Promise<RemoteAuthPackage[]> } Promise used to return ${RemoteAuthPackage[]}.
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010000 - Invalid parameter. OperationType and operationInfo do not match,
   *     specified callerTokenId does not exist, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function generateControllerDevicePackage(remoteUserAuthResult: RemoteUserAuthResults[]):
    Promise<RemoteAuthPackage[]>;

  /**
   * Generates an authorization package for the controlled device.
   * This function generates a remote authorization package based on the permission query list.
   * The generated package can be sent to the controller device for permission verification.
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { PermissionQuery[] } permissionQuery - Permission query list.
   * @returns { Promise<RemoteAuthPackage[]> } Promise used to return ${RemoteAuthPackage[]}.
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010000 - Invalid parameter. Permission exceeds 256 characters,
   *     specified tokenId is invalid, etc.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function generateControlledDevicePackage(permissionQuery: PermissionQuery[]): Promise<RemoteAuthPackage[]>;

  /**
   * Verifies the authorization package from the controller device.
   * This function verifies the remote authorization package sent by the controller device.
   * It validates the ticket and remote device information to ensure the authorization is legitimate.
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { RemoteAuthPackage[] } ticketInfo - Remote authorization package list.
   * @param { RemoteInfo } remoteInfo - Remote device information.
   * @returns { Promise<boolean[]> } Promise used to return ${boolean[]}.
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010000 - Invalid parameter. Format of ticketInfo or remoteInfo is invalid.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function verifyControllerDevicePackage(ticketInfo: RemoteAuthPackage[], remoteInfo: RemoteInfo):
    Promise<boolean[]>;

  /**
   * Verifies the authorization package from the controlled device.
   * This function verifies the remote authorization package sent by the controlled device.
   * It validates the ticket to ensure the authorization is legitimate.
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @param { RemoteAuthPackage[] } ticketInfo - Remote authorization package list.
   * @returns { Promise<boolean[]> } Promise used to return ${boolean[]}.
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010000 - Invalid parameter. Format of ticketInfo is invalid.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @throws { BusinessError } 24010003 - The account is not logged in, network is unavailable, timeout, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function verifyControlledDevicePackage(ticketInfo: RemoteAuthPackage[]): Promise<boolean[]>;

  /**
   * Gets the remote grant status.
   * This function queries whether the remote authorization feature is enabled or disabled.
   * When enabled, the device can grant permissions to remote devices;
   *    when disabled, remote authorization is not allowed.
   *
   * @permission ohos.permission.QUERY_TOOL_PERMISSIONS
   * @returns { Promise<RemoteGrantStatus> } Promise used to return ${RemoteGrantStatus}.
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function getRemoteGrantStatus(): Promise<RemoteGrantStatus>;

  /**
   * Updates the remote grant status.
   * This function enables or disables the remote authorization feature.
   * When enabled, the device can grant permissions to remote devices;
   *    when disabled, remote authorization is not allowed.
   *
   * @permission ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS
   * @param { RemoteGrantStatus } remoteGrantStatus - Remote grant status to be set.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denial.
   *     The interface caller does not have permission "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS".
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 24010000 - Invalid parameter. RemoteGrantStatus is invalid.
   * @throws { BusinessError } 24010001 - Service is abnormal. Possible cause: IPC failed.
   * @throws { BusinessError } 24010002 - Common internal error. Possible cause: dependent service unavailable,
   *     resource access failure, etc.
   * @syscap SystemCapability.Security.Asset
   * @systemapi
   * @FaAndStageModel
   * @since 26.1.0 dynamiconly
   */
  export function updateRemoteGrantStatus(remoteGrantStatus: RemoteGrantStatus): Promise<void>;
}

export default abilityToolAccessCtrl;