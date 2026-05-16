/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit DriverDevelopmentKit
 */

import type rpc from './@ohos.rpc';
import type Want from './@ohos.app.ability.Want';
import _DriverExtensionContext from './application/DriverExtensionContext';

/**
 * DriverExtensionAbility的上下文环境。
 *
 * @typedef { _DriverExtensionContext }
 * @syscap SystemCapability.Driver.ExternalDevice
 * @since 10 dynamic
 * @since 23 static
 */
export type DriverExtensionContext = _DriverExtensionContext;

/**
 * DriverExtensionAbility模块提供驱动相关扩展能力，提供驱动创建、销毁、连接、断开等生命周期回调。
 *
 * @syscap SystemCapability.Driver.ExternalDevice
 * @StageModelOnly
 * @since 10 dynamic
 * @since 23 static
 */
declare class DriverExtensionAbility {
  /**
   * DriverExtension的上下文环境，继承自ExtensionContext。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  context: DriverExtensionContext;

  /**
   * Extension生命周期回调，在创建时回调，执行初始化业务逻辑操作。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onInit(want: Want): void;

  /**
   * Extension生命周期回调，在销毁时回调，执行资源清理等操作。
   *
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onRelease(): void;

  /**
   * Extension生命周期回调，会在[onCreate]{@link @ohos.app.ability.AbilityStage:AbilityStage#onCreate}之后回调。返回一个
   * [RemoteObject]{@link @ohos.rpc:rpc.RemoteObject}对象，用于客户端和服务端进行通信。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @returns { rpc.RemoteObject | Promise<rpc.RemoteObject> } 一个RemoteObject对象，用于客户端和服务端进行通信；或一个Promise对象，返回用于通信的
   *     RemoteObject对象。
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject>;

  /**
   * Extension的生命周期回调，客户端执行断开连接服务时回调。
   *
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
   * @returns { void | Promise<void> } 返回值为空；或一个Promise对象，无返回结果。
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10
   */
  onDisconnect(want: Want): void | Promise<void>;

  /**
   * Extension的生命周期回调，客户端执行断开连接服务时回调。
   * @param { Want } want - Indicates disconnection information about the driver extension.
   * @returns { undefined | Promise<void> } 返回值为空；或一个Promise对象，无返回结果。
   * @syscap SystemCapability.Driver.ExternalDevice
   * @stagemodelonly
   * @since 23 static
   */
  onDisconnect(want: Want): undefined | Promise<void>;

  /**
   * 转储客户端信息时调用，建议不要转储敏感信息。
   *
   * @param { Array<string> } params - 表示命令形式的参数。
   * @returns { Array<string> } 一个string类型的数组，用于转存客户端信息。
   * @syscap SystemCapability.Driver.ExternalDevice
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  onDump(params: Array<string>): Array<string>;
}

export default DriverExtensionAbility;