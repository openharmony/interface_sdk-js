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

import { AgentCard } from './AgentCard';
import ExtensionContext from './ExtensionContext';

/**
 * AgentExtensionContext模块是
 * [AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}的上下文环境，继承自
 * [ExtensionContext]{@link ./ExtensionContext:ExtensionContext}。
 * 
 * AgentExtensionContext为开发者提供访问当前
 * [AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}智能体所配置的[AgentCard]{@link ./AgentCard}信息的能力。
 * 
 * > **说明：**
 * >
 * > - 在本文档的示例中，通过`this.context`来获取`AgentExtensionContext`，其中`this`代表继承自`AgentExtensionAbility`的实例。
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
declare class AgentExtensionContext extends ExtensionContext {
  /**
   * 当前[AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}智能体所配置的
   * [AgentCard]{@link ./AgentCard:AgentCard}信息，用于描述智能体的基本信息和能力。
   *
   * @type { AgentCard }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  agentCard: AgentCard;
}

export default AgentExtensionContext;