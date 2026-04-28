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

/**
 * @file
 * @kit AbilityKit
 */

/**
 * ServiceExtensionAbility模块提供后台服务相关扩展能力，提供后台服务创建、销毁、连接、断开等生命周期回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @StageModelOnly
 * @since 9 dynamic
 * @since 23 static
 */
declare class ServiceExtensionAbility {
  /**
   * ServiceExtension的上下文环境，继承自ExtensionContext。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  context: ServiceExtensionContext;

  /**
   * Extension生命周期回调，在创建时回调，执行初始化业务逻辑操作。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Extension生命周期回调，在销毁时回调，执行资源清理等操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onDestroy(): void;

  /**
   * Extension生命周期回调，如果是startAbility或者startServiceExtensionAbility拉起的服务，会在onCreate之后回调。每次拉起服务都会回调，startId会递增。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @param { int } startId - 返回拉起次数。首次拉起初始值返回1，多次之后自动递增。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onRequest(want: Want, startId: int): void;

  /**
   * Extension生命周期回调，如果是connectAbility拉起的服务，会在onCreate之后回调。返回一个RemoteObject对象，用于客户端和服务端进行通信。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @returns { rpc.RemoteObject | Promise<rpc.RemoteObject> } RemoteObject or Promise used to return a RemoteObject,
   *     which is used for communication between the client and server.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject>;

  /**
   * Extension的生命周期回调，客户端执行断开连接服务时回调。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @returns { void | Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   */
  onDisconnect(want: Want): void | Promise<void>;

  /**
   * Extension的生命周期回调，客户端执行断开连接服务时回调。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @returns { Promise<void> | undefined } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onDisconnect(want: Want): Promise<void> | undefined;

  /**
   * Extension的生命周期回调，当所有以前的客户端都断开连接之后，新客户端尝试连接到服务时调用。预留能力，当前暂未支持。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamiconly
   */
  onReconnect(want: Want): void;

  /**
   * 当Extension更新配置信息时调用。
   *
   * @param { Configuration } newConfig - 表示需要更新的配置信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onConfigurationUpdate(newConfig: Configuration): void;

  /**
   * 转储客户端信息时调用。
   *
   * @param { Array<string> } params - 表示命令形式的参数。
   * @returns { Array<string> } 表示转存客户端信息数组。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 9 dynamic
   * @since 23 static
   */
  onDump(params: Array<string>): Array<string>;
}

export default ServiceExtensionAbility;