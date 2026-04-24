/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * **ConnectOptions** can be used as an input parameter to receive status changes during the connection to a background 
 * service. For example, it is used as an input parameter of 
 * [connectServiceExtensionAbility]{@link ./application/UIAbilityContext:UIAbilityContext.connectServiceExtensionAbility} 
 * to connect to a ServiceExtensionAbility.
 *
 * @file
 * @kit AbilityKit
 */

import { ElementName } from '../bundleManager/ElementName';
import rpc from './../@ohos.rpc';

/**
 * Callback invoked when a connection is set up.
 *
 * @param { ElementName } elementName - Element name of the ability.
 * @param { rpc.IRemoteObject } remote - IRemoteObject instance.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
type OnConnectFn = (elementName: ElementName, remote: rpc.IRemoteObject) => void;

/**
 * Callback invoked when a connection is interrupted.
 *
 * @param { ElementName } elementName - Element name of the ability.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
type OnDisconnectFn = (elementName: ElementName) => void;

/**
 * Callback invoked when a connection fails.
 *
 * @param { int } code - Result code. The value 0 means that the connection is successful, -1 means that a parameter is 
 *     incorrect, and -2 means that the ability is not found
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
type OnFailedFn = (code: int) => void;

/**
 * **ConnectOptions** can be used as an input parameter to receive status changes during the connection to a 
 * background service. For example, it is used as an input parameter of 
 * [connectServiceExtensionAbility]{@link ./application/UIAbilityContext:UIAbilityContext.connectServiceExtensionAbility} 
 * to connect to a ServiceExtensionAbility.
 * 
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7 dynamic
 * @since 23 static
 */
export interface ConnectOptions {
  /**
   * Called when a connection is set up.
   *
   * @param { ElementName } elementName - Element name of the target ability.
   * @param { rpc.IRemoteObject } remote - IRemoteObject instance used for IPC with the target ability.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7 dynamic
   */
  onConnect(elementName: ElementName, remote: rpc.IRemoteObject): void;

  /**
   * Callback invoked when a connection is set up.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onConnect: OnConnectFn;

  /**
   * Called when a connection is interrupted.
   *
   * @param { ElementName } elementName - Element name of the target ability.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7 dynamic
   */
  onDisconnect(elementName: ElementName): void;

  /**
   * Callback invoked when a connection is interrupted.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onDisconnect: OnDisconnectFn;

  /**
   * Called when a connection fails.
   *
   * @param { number } code - Error code returned when connection to the specified ability fails.
   *     
   *     For details about the error codes, see [Universal Error Codes](../errorcode-universal.md) and 
   *     [Ability Error Codes](errorcode-ability.md).
   *     
   *      201 - The application does not have permission to call the interface.
   *     
   *      16000001 - The specified ability does not exist.
   *     
   *      16000002 - Incorrect ability type.
   *     
   *      16000004 - Cannot start an invisible component.
   *     
   *      16000005 - The specified process does not have the permission.
   *     
   *      16000006 - Cross-user operations are not allowed.
   *     
   *      16000008 - The crowdtesting application expires.
   *     
   *      16000053 - The ability is not on the top of the UI.
   *     
   *      16000055 - Installation-free timed out.
   *     
   *      16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7 dynamic
   */
  onFailed(code: number): void;

  /**
   * Callback invoked when a connection fails.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onFailed: OnFailedFn;
}