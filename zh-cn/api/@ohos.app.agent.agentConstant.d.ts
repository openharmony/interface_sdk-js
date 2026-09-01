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
 * agentConstant模块提供Agent相关的常量，包括Agent卡片类型[AgentCardType]{@link agentConstant.AgentCardType}，用于在调用Agent相关接口（如
 * agentManager）时标识和区分Agent卡片的类型。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic&static
 */
declare namespace agentConstant {
  /**
   * Agent卡片的类型。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export enum AgentCardType {
    /**
     * 应用型Agent卡片，适用于传统安装应用，Agent能力随应用安装和卸载，需要用户主动安装应用后使用。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    APP = 0,

    /**
     * 原子化服务型Agent卡片，适用于免安装的原子化服务，Agent能力可以即用即离，无需预先安装，支持快速体验和分享。
     *
     * @syscap SystemCapability.Ability.AgentRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ATOMIC_SERVICE = 1,

    /**
     * 低代码型Agent卡片，仅系统应用可使用，适用于系统应用提供的快速构建和部署的智能体能力，支持通过可视化配置或简单脚本快速创建Agent，无需编写完整代码，降低Agent开发门槛。
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
