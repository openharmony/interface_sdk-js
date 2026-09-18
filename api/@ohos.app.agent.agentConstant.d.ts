/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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

/**
 * This module provides constants for agent.
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
declare namespace agentConstant {
  /**
   * The type of an AgentCard.
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export enum AgentCardType {
    /**
     * Application-type agent card, applicable to traditional installable applications. The agent capability is
     * installed and uninstalled along with the application, and users need to actively install the application before
     * use.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    APP = 0,

    /**
     * Atomic service-type agent card, applicable to installation-free atomic services. The agent capability can be
     * used on demand without pre-installation, supporting quick experience and sharing.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ATOMIC_SERVICE = 1,

    /**
     * Low-code-type agent card, available only for system applications. It is applicable to the intelligent agent
     * capability provided by system applications for rapid building and deployment. It supports creating agents
     * quickly through visual configuration or simple scripts without writing complete code, lowering the barrier for
     * agent development.
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    LOW_CODE = 2,
  }
}

export default agentConstant;
