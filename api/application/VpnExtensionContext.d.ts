/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import type { AsyncCallback } from '../@ohos.base';
import type ExtensionContext from './ExtensionContext';
import type Want from '../@ohos.app.ability.Want';
import type connection from '../@ohos.net.connection';
import type _AbilityContext from '../application/UIAbilityContext';


export type AbilityContext = _AbilityContext;
export type LinkAddress = connection.LinkAddress;
export type RouteInfo = connection.RouteInfo;
/**
 * The context of vpn extension. It allows access to
 * serviceExtension-specific resources.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 11
 */

export default class VpnExtensionContext extends ExtensionContext {
  /**
   * Starts a new vpn extension ability. If the caller application is in foreground, you can use this method to start vpn extension ability;
   * If the caller application is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target vpn extension ability is visible, you can start the target vpn extension ability;
   * If the target vpn extension ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible vpn extension ability.
   * If the target vpn extension ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the want info to start.
   * @param { AsyncCallback<void> } callback - The callback of startServiceExtensionAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  startVpnExtensionAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts a new vpn extension ability.
   *
   * @param { Want } want - Indicates the want info to start.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  /**
   * Starts a new vpn extension ability. If the caller application is in foreground, you can use this method to start vpn extension ability;
   * If the caller application is in the background, you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target vpn extension ability is visible, you can start the target vpn extension ability;
   * If the target vpn extension ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible vpn extension ability.
   * If the target vpn extension ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the want info to start.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by EDM.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  startVpnExtensionAbility(want: Want): Promise<void>;

  /**
   * Starts a new vpn extension ability with account.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Want } want - Indicates the want info to start.
   * @param { number } accountId - Indicates the account to start.
   * @param { AsyncCallback<void> } callback - The callback of startServiceExtensionAbilityWithAccount.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  /**
   * Stops a service within the same application.
   *
   * @param { Want } want - Indicates the want info to start.
   * @param { AsyncCallback<void> } callback - The callback of stopServiceExtensionAbility.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  /**
   * Stops other vpn extension ability. If the caller application is in foreground,
   * you can use this method to stop vpn extension ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target vpn extension ability is visible, you can stop the target vpn extension ability;
   * If the target vpn extension ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to stop target invisible vpn extension ability.
   * If the target vpn extension ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the want info to start.
   * @param { AsyncCallback<void> } callback - The callback of stopServiceExtensionAbility.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  stopVpnExtensionAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Stops a service within the same application.
   *
   * @param { Want } want - Indicates the want info to start.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  /**
   * Stops other vpn extension ability. If the caller application is in foreground,
   * you can use this method to stop vpn extension ability; If the caller application is in the background,
   * you need to apply for permission:ohos.permission.START_ABILITIES_FROM_BACKGROUND.
   * If the target vpn extension ability is visible, you can stop the target vpn extension ability;
   * If the target vpn extension ability is invisible,
   * you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to stop target invisible vpn extension ability.
   * If the target vpn extension ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.
   *
   * @param { Want } want - Indicates the want info to start.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200001 - The caller has been released.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  stopVpnExtensionAbility(want: Want): Promise<void>;

  /**
   * Create a VPN connection using the AbilityContext.
   * @param { AbilityContext } context - Indicates the context of application or capability.
   * @returns { VpnConnection } the VpnConnection of the construct VpnConnection instance.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  createVpnConnection(context: AbilityContext): VpnConnection;

  /**
   * update a VPN dialog Authorize information
   * @param { isAuthorize } boolean - Authorize or not
   * @returns { callback } the dialog authorize update callback
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  updateVpnDataBase(isAuthorize: boolean, callback: AsyncCallback<void>): void;

  /**
   * update a VPN dialog Authorize information
   * @param { isAuthorize } boolean - Authorize or not
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  updateVpnDataBase(isAuthorize: boolean): Promise<void>;
}

export interface VpnConnection {
  /**
   * Create a VPN network using the VpnConfig.
   * @permission ohos.permission.MANAGE_VPN
   * @param { VpnConfig } config - Indicates the {@link VpnConfig} configuration of the VPN network.
   * @param { AsyncCallback<number> } callback - The callback is used to return file descriptor of VPN interface.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2203001 - VPN creation denied, please check the user type.
   * @throws { BusinessError } 2203002 - VPN exist already, please execute destroy first.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  setUp(config: VpnConfig, callback: AsyncCallback<number>): void;

  /**
   * Create a VPN network using the VpnConfig.
   * @permission ohos.permission.MANAGE_VPN
   * @param { VpnConfig } config - Indicates the {@link VpnConfig} configuration of the VPN network.
   * @returns { Promise<number> } The promise returns file descriptor of VPN interface.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2203001 - VPN creation denied, please check the user type.
   * @throws { BusinessError } 2203002 - VPN exist already, please execute destroy first.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  setUp(config: VpnConfig): Promise<number>;

  /**
   * Protect a socket from VPN connections. After protecting, data sent through this socket will go directly to the
   * underlying network so its traffic will not be forwarded through the VPN.
   * @permission ohos.permission.MANAGE_VPN
   * @param { number } socketFd - File descriptor of socket, this socket from @ohos.net.socket.
   * @param { AsyncCallback<void> } callback - The callback of protect.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  protect(socketFd: number, callback: AsyncCallback<void>): void;

  /**
   * Protect a socket from VPN connections. After protecting, data sent through this socket will go directly to the
   * underlying network so its traffic will not be forwarded through the VPN.
   * @permission ohos.permission.MANAGE_VPN
   * @param { number } socketFd - File descriptor of socket, this socket from @ohos.net.socket.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200001 - Invalid parameter value.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @throws { BusinessError } 2203004 - Invalid socket file descriptor.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  protect(socketFd: number): Promise<void>;

  /**
   * Destroy the VPN network.
   * @permission ohos.permission.MANAGE_VPN
   * @param { AsyncCallback<void> } callback - The callback of destroy.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  destroy(callback: AsyncCallback<void>): void;

  /**
   * Destroy the VPN network.
   * @permission ohos.permission.MANAGE_VPN
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 2200002 - Operation failed. Cannot connect to service.
   * @throws { BusinessError } 2200003 - System internal error.
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  destroy(): Promise<void>;
}
export interface VpnConfig {
  /**
   * The array of addresses for VPN interface.
   * @type {Array<LinkAddress>}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  addresses: Array<LinkAddress>;

  /**
   * The array of routes for VPN interface.
   * @type {?Array<RouteInfo>}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  routes?: Array<RouteInfo>;

  /**
   * The array of DNS servers for the VPN network.
   * @type {?Array<string>}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  dnsAddresses?: Array<string>;

  /**
   * The array of search domains for the DNS resolver.
   * @type {?Array<string>}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  searchDomains?: Array<string>;

  /**
   * The maximum transmission unit (MTU) for the VPN interface.
   * @type {?number}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  mtu?: number;

  /**
   * Whether ipv4 is supported. The default value is true.
   * @type {?boolean}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  isIPv4Accepted?: boolean;

  /**
   * Whether ipv6 is supported. The default value is false.
   * @type {?boolean}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  isIPv6Accepted?: boolean;

  /**
   * Whether to use the built-in VPN. The default value is false.
   * @type {?boolean}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  isLegacy?: boolean;

  /**
   * Whether the VPN interface's file descriptor is in blocking/non-blocking mode. The default value is false.
   * @type {?boolean}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  isBlocking?: boolean;

  /**
   * The array of trustlist for the VPN network. The string indicates package name.
   * @type {?Array<string>}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  trustedApplications?: Array<string>;

  /**
   * The array of blocklist for the VPN network. The string indicates package name.
   * @type {?Array<string>}
   * @syscap SystemCapability.Communication.NetManager.Vpn
   * @since 11
   */
  blockedApplications?: Array<string>;
}
