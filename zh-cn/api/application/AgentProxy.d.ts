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
 * AgentExtensionAbility的代理对象，用于向AgentExtensionAbility等发送消息。
 *
 * @interface AgentProxy
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
export interface AgentProxy {
  /**
   * 向AgentExtensionAbility发送数据。
   *
   * @param { string } data - 要发送的数据。
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  sendData(data: string): void;

  /**
   * 向AgentExtensionAbility发送鉴权。
   *
   * @param { string } handshakeData - 要发送的握手数据。
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  authorize(handshakeData: string): void;
}