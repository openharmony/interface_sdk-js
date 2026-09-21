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
 * @file Agent Extension Ability
 * @kit AbilityKit
 */

import AgentExtensionContext from './application/AgentExtensionContext';
import { AgentHostProxy } from './application/AgentHostProxy';
import ExtensionAbility from './@ohos.app.ability.ExtensionAbility';
import Want from './@ohos.app.ability.Want';

/**
 * The class of agent extension ability. This class cannot be used in Harmony Archive(HAR).
 *
 * @extends ExtensionAbility
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
declare class AgentExtensionAbility extends ExtensionAbility {
  /**
   * Context of the AgentExtensionAbility.
   *
   * @type { AgentExtensionContext }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  context: AgentExtensionContext;

   /**
   * The system triggers this callback when an AgentExtensionAbility instance is created. Developers can perform
   * initialization logic (such as defining variables and loading resources) in this callback.
   *
   * @param { Want } want - Want information, including the ability name and bundle name.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onCreate(want: Want): void;

  /**
   * Called back when an agent extension is connected to an ability.
   *
   * @param { Want } want - Indicates connection information about the AgentExtensionAbility.
   * @param { AgentHostProxy } proxy - Indicates the agent service host proxy.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onConnect(want: Want, proxy: AgentHostProxy): void;

  /**
   * Triggered when a
   * [LOW_CODE](docroot://reference/apis-ability-kit/js-apis-app-agent-agentConstant-sys.md#agentconstantagentcardtype)
   * agent is successfully invoked, used for initialization operations (such as downloading resources from the cloud
   * and loading configurations).
   *
   * @param { string } agentId - Indicates the LOW_CODE agent ID.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  onAgentInvoked(agentId: string): void;

  /**
   * The system triggers this callback when the AgentExtensionAbility receives data sent by the client. The server
   * can use [AgentHostProxy.sendData]{@link ./application/AgentHostProxy:AgentHostProxy.sendData} to send data to the
   * client in this callback.
   *
   * @param { AgentHostProxy } proxy - Indicates the agent service host proxy.
   * @param { string } data - Indicates the received data.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onData(proxy: AgentHostProxy, data: string): void;

  /**
   * The system triggers this callback when the AgentExtensionAbility receives a security authentication request
   * sent by the client. The server can process the received security authentication request in this callback, and
   * use [AgentHostProxy.authorize]{@link ./application/AgentHostProxy:AgentHostProxy.authorize} to send a security
   * authentication request to the client.
   *
   * @param { AgentHostProxy } proxy - Indicates the agent service host proxy.
   * @param { string } handshakeData - Indicates the received handshake data.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onAuth(proxy: AgentHostProxy, handshakeData: string): void;

  /**
   * Called back when ability connected to an agent service extension is disconnected.
   *
   * @param { Want } want - Indicates disconnection information about the agent service extension.
   * @param { AgentHostProxy } proxy - Indicates the agent service host proxy.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onDisconnect(want: Want, proxy: AgentHostProxy): void;

  /**
   * Called back before an agent service extension is destroyed.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onDestroy(): void;
}

export default AgentExtensionAbility;
