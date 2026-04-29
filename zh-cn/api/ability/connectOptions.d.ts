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
 * @file
 * @kit AbilityKit
 */

import { ElementName } from '../bundleManager/ElementName';
import rpc from './../@ohos.rpc';

/**
 * 与指定的后台服务成功建立连接时，会触发该回调。
 *
 * @param { ElementName } elementName - 目标Ability的elementName。
 * @param { rpc.IRemoteObject } remote - 用于与目标Ability进行IPC通信的IRemoteObject实例。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
type OnConnectFn = (elementName: ElementName, remote: rpc.IRemoteObject) => void;

/**
 * 与指定的后台服务成功断开连接时，会触发该回调。
 *
 * @param { ElementName } elementName - 目标Ability的elementName。
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
type OnDisconnectFn = (elementName: ElementName) => void;

/**
 * 与指定的后台服务建立连接失败时，会触发该回调，返回连接失败的错误码。
 *
 * @param { int } code - 连接指定Ability失败返回的错误码。
 *     
 *     错误码详细介绍请参考[通用错误码](../errorcode-universal.md)和[元能力子系统错误码](errorcode-ability.md)。
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
 * @since 23 static
 */
type OnFailedFn = (code: int) => void;

/**
 * 在连接指定的后台服务时作为入参，用于接收连接过程中的状态变化，如作为
 * [connectServiceExtensionAbility]{@link ./application/UIAbilityContext:UIAbilityContext.connectServiceExtensionAbility}
 * 的入参，连接指定的ServiceExtensionAbility。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 7 dynamic
 * @since 23 static
 */
export interface ConnectOptions {
  /**
   * 建立连接时的回调函数。
   *
   * @param { ElementName } elementName - 目标Ability的elementName。
   * @param { rpc.IRemoteObject } remote - 用于与目标Ability进行IPC通信的IRemoteObject实例。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7 dynamic
   */
  onConnect(elementName: ElementName, remote: rpc.IRemoteObject): void;

  /**
   * 与指定的后台服务成功建立连接时，会触发该回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onConnect: OnConnectFn;

  /**
   * 断开连接时的回调函数。
   *
   * @param { ElementName } elementName - 目标Ability的elementName。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 7 dynamic
   */
  onDisconnect(elementName: ElementName): void;

  /**
   * 与指定的后台服务成功断开连接时，会触发该回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onDisconnect: OnDisconnectFn;

  /**
   * 连接失败时的回调函数。
   *
   * @param { number } code - 连接指定Ability失败返回的错误码。
   *     
   *     错误码详细介绍请参考[通用错误码](../errorcode-universal.md)和[元能力子系统错误码](errorcode-ability.md)。
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
   * 与指定的后台服务建立连接失败时，会触发该回调。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onFailed: OnFailedFn;
}