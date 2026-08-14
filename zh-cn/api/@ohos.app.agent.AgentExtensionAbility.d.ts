/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

import AgentExtensionContext from './application/AgentExtensionContext';
import { AgentHostProxy } from './application/AgentHostProxy';
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import Want from './@ohos.app.ability.Want';

/**
 * AgentExtensionAbility继承自[ExtensionAbility]{@link @ohos.app.ability.ExtensionAbility:ExtensionAbility}，提供智能体扩展能力，包括智能体
 * 服务的创建、销毁、连接、断开的生命周期回调接口，以及接收客户端所发送数据和安全认证的回调接口。
 * 
 * 本文将AgentExtensionAbility组件提供方称为服务端，将AgentExtensionAbility组件使用方称为客户端。
 * 
 * > **说明：**
 * >
 * > 本模块接口不支持在[har](docroot://quick-start/har-package.md)包中使用。
 *
 * @extends ExtensionAbility
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
declare class AgentExtensionAbility extends ExtensionAbility {
  /**
   * AgentExtensionAbility的上下文环境，继承自[ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}。
   *
   * @type { AgentExtensionContext }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  context: AgentExtensionContext;

  /**
   * 当AgentExtensionAbility实例创建完成时，系统会触发该回调，开发者可在该回调中执行初始化逻辑（如定义变量、加载资源等）。
   *
   * @param { Want } want - 当前AgentExtensionAbility相关的[Want]{@link @ohos.app.ability.Want:Want}类型信息，包括Ability名称、Bundle名称
   *     等。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onCreate(want: Want): void;

  /**
   * 当客户端连接AgentExtensionAbility成功后，系统会触发该回调。
   *
   * @param { Want } want - 当前AgentExtensionAbility相关的[Want]{@link @ohos.app.ability.Want:Want}类型信息，包括Ability名称、Bundle名称
   *     等。
   * @param { AgentHostProxy } proxy - [AgentHostProxy]{@link ./application/AgentHostProxy:AgentHostProxy}对象，用于与客户端进行通信。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onConnect(want: Want, proxy: AgentHostProxy): void;

  /**
   * 当[LOW_CODE](docroot://reference/apis-ability-kit/js-apis-app-agent-agentConstant-sys.md#agentconstantagentcardtype)
   * 类型的Agent被成功调用时触发，用于执行初始化操作（如从云端下载资源、加载配置等）。
   *
   * @param { string } agentId - 低代码类型的Agent的ID。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAgentInvoked(agentId: string): void;

  /**
   * 当AgentExtensionAbility接收到客户端发送的数据时，系统会触发该回调。服务端可以在此回调中通过
   * [AgentHostProxy.sendData]{@link ./application/AgentHostProxy:AgentHostProxy.sendData}向客户端发送数据。
   *
   * @param { AgentHostProxy } proxy - [AgentHostProxy]{@link ./application/AgentHostProxy:AgentHostProxy}对象，用于与客户端进行通信。
   * @param { string } data - 表示接收到的数据。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onData(proxy: AgentHostProxy, data: string): void;

  /**
   * 当AgentExtensionAbility接收到客户端发送的安全认证请求时，系统会触发该回调。服务端可以在此回调中处理接收到的安全认证请求，并通过
   * [AgentHostProxy.authorize]{@link ./application/AgentHostProxy:AgentHostProxy.authorize}向客户端发送安全认证请求。
   *
   * @param { AgentHostProxy } proxy - [AgentHostProxy]{@link ./application/AgentHostProxy:AgentHostProxy}对象，用于向客户端发送安全认
   *     证请求。
   * @param { string } handshakeData - 表示接收到的安全认证数据。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onAuth(proxy: AgentHostProxy, handshakeData: string): void;

  /**
   * 当客户端与AgentExtensionAbility断开连接时，系统会触发该回调。
   *
   * @param { Want } want - 当前AgentExtensionAbility相关的[Want]{@link @ohos.app.ability.Want:Want}类型信息，包括Ability名称、Bundle名称
   *     等。
   * @param { AgentHostProxy } proxy - [AgentHostProxy]{@link ./application/AgentHostProxy:AgentHostProxy}对象，用于与客户端进行通信。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onDisconnect(want: Want, proxy: AgentHostProxy): void;

  /**
   * 当AgentExtensionAbility被销毁时，系统会触发该回调。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onDestroy(): void;
}

export default AgentExtensionAbility;
