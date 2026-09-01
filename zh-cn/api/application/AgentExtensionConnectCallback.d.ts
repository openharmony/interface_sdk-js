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

/**
 * 开发者可以通过AgentExtensionConnectCallback中提供的回调接口来接收服务端发送的数据和安全认证请求，以及感知AgentExtensionAbility服务端的断开连接操作。
 *
 * @interface AgentExtensionConnectCallback
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface AgentExtensionConnectCallback {
  /**
   * 接收来自AgentExtensionAbility服务端的数据的回调接口。
   *
   * @param { string } data - 接收到的来自AgentExtensionAbility服务端的数据。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onData(data: string): void;

  /**
   * 接收来自AgentExtensionAbility服务端的安全认证的回调接口。
   *
   * @param { string } handshakeData - 接收到的来自AgentExtensionAbility服务端的安全认证数据。
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onAuth(handshakeData: string): void;

  /**
   * 与AgentExtensionAbility服务端断开连接时触发的回调接口。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  onDisconnect(): void;
}