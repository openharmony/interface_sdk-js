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
 * @file Agent Extension Context
 * @kit AbilityKit
 */

import { AgentCard } from './AgentCard';
import ExtensionContext from './ExtensionContext';

/**
 * AgentExtensionContext is the context environment of
 * [AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}, inheriting from
 * [ExtensionContext]{@link ./ExtensionContext:ExtensionContext}.
 *
 * AgentExtensionContext provides developers with the capability to access the
 * [AgentCard]{@link ./AgentCard} information configured by the current
 * [AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility} agent.
 *
 * > **NOTE**
 * >
 * > - In the examples in this document, `this.context` is used to obtain the `AgentExtensionContext`, where `this`
 * > represents an instance inheriting from `AgentExtensionAbility`.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
declare class AgentExtensionContext extends ExtensionContext {
  /**
   * The [AgentCard]{@link ./AgentCard:AgentCard} information configured by the current
   * [AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility} agent, used to describe the basic
   * information and capabilities of the agent.
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