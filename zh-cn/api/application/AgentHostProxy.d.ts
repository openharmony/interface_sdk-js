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
 * AgentHostProxy用于从
 * [AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}服务端向客户端发送数据或安全认证请求。
 * 
 * > **说明：**
 * >
 * > - 本模块接口需要在主线程中使用，不支持在Worker、TaskPool等子线程中使用。
 *
 * @interface AgentHostProxy
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentHostProxy {
  /**
   * 从[AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}服务端给客户端发送数据。
   *
   * @param { string } data - 待发送到[AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}客户端的数据。
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  sendData(data: string): void;

  /**
   * 从[AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}服务端给客户端发送安全认证请求。
   *
   * @param { string } handshakeData - 待发送到客户端的安全认证数据。
   * @throws { BusinessError } 35600002 - Failed to send the IPC message.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  authorize(handshakeData: string): void;
}