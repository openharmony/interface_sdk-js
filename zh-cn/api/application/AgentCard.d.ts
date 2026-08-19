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
import type agentConstant from '../@ohos.app.agent.agentConstant';

/**
 * AgentCard相当于Agent(智能体)的"名片"，用于描述Agent的能力和技能，由开发者在Agent的配置文件agent_config.json中配置。
 * 
 * 一个Agent就是一个AgentExtensionAbility实例。开发者可以通过AgentExtensionContext中的agentCard属性获取到当前AgentExtensionAbility的AgentCard。
 *
 * @typedef AgentCard
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentCard {
  /**
   * Agent的唯一标识符，在同一个应用中，agentId不可重复。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  agentId: string;

  /**
   * Agent的名称。一般用于在UI界面中展示给用户，例如"Recipe Assistant"（食谱助手）。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  name: string;

  /**
   * 说明Agent的核心功能、用途和适用场景，例如"帮助用户搜索食谱、规划菜单并提供烹饪建议"。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  description: string;

  /**
   * AgentCard的类型。<!--Del-->当
   * [agentConstant.AgentCardType]{@link @ohos.app.agent.agentConstant:agentConstant.AgentCardType}
   * 的枚举值为LOW_CODE时，对应的应用必须是系统应用，否则Agent卡片无法注册、安装或更新。<!--DelEnd-->如果未指定，默认为APP类型。
   *
   * @default AgentCardType.APP
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  type?: agentConstant.AgentCardType;

  /**
   * Agent的服务提供商信息，包含提供商的组织名称和官方网站URL，用于标识Agent的来源和版权信息。不配置时不包含提供商信息。
   *
   * @type { ?AgentProvider }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  provider?: AgentProvider;

  /**
   * Agent的版本号。遵循语义化版本规范（如"1.0.0"），格式由提供商定义。版本号用于标识Agent的功能迭代和兼容性变化。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  version: string;

  /**
   * Agent文档的URL。提供详细的Agent使用文档、API说明、示例和最佳实践指南，帮助开发者更好地集成和使用该Agent。不配置时不提供文档链接。
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  documentationUrl?: string;

  /**
   * Agent支持的可选能力集合。定义Agent支持的其他可选能力，如流式响应、推送通知、状态历史查询等。不配置时不启用额外能力。
   *
   * @type { ?AgentCapabilities }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  capabilities?: AgentCapabilities;

  /**
   * Agent在所有[AgentSkill]{@link AgentSkill}上支持的输入模式集。使用MIME类型格式定义支持的输入媒体类型，例如["text/plain"]表示纯文本输入，["application/json"]表
   * 示JSON结构化数据输入，["image/png"]表示图片输入。[AgentSkill]{@link AgentSkill}级别的inputModes会覆盖此默认设置。
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  defaultInputModes: Array<string>;

  /**
   * Agent在所有[AgentSkill]{@link AgentSkill}上支持的输出模式集。使用MIME类型格式定义支持的输出媒体类型，例如["text/plain"]表示纯文本输出，["application/html"]表
   * 示HTML格式输出，["application/json"]表示JSON数据输出。[AgentSkill]{@link AgentSkill}级别的outputModes会覆盖此默认设置。
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  defaultOutputModes: Array<string>;

  /**
   * Agent提供的功能集合。描述Agent可以执行的特定功能或技能，每个技能定义了具体的用途、标签和使用示例。Agent必须至少包含一个技能。
   *
   * @type { Array<AgentSkill> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  skills: Array<AgentSkill>;

  /**
   * Agent图标的URL。提供Agent的可视化标识图标，用于在UI界面中展示，增强Agent的辨识度和用户体验。
   * 
   * **说明**：系统不校验该字段内容，使用方需自行验证iconUrl的合法性和安全性。
   *
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  iconUrl: string;

  /**
   * Agent的类别。用于对Agent进行分类管理，常见的类别包括："productivity"（生产力）、"entertainment"（娱乐）、"education"（教育）、"finance"（金融）、"health"（健康）
   * 等。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  category: string;

  /**
   * Agent的扩展配置项。用于存储自定义的扩展配置信息，如Agent开场白、版本协议号等，格式为JSON字符串。不配置时不使用扩展配置。
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extension?: string;

  /**
   * Agent所在的应用信息。包含Agent所属的应用包名、模块名和能力名等标识信息，用于定位和管理AgentExtensionAbility实例。
   *
   * @type { AgentAppInfo }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  appInfo: AgentAppInfo;
}

/**
 * 表示Agent的服务提供商。
 *
 * @typedef AgentProvider
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentProvider {
  /**
   * Agent提供商的组织名称。标识该Agent的开发或提供方（公司、组织或个人）。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  organization: string;

  /**
   * Agent提供商的网站或相关文档的URL。提供指向提供商官方网站、产品页面或相关文档的HTTPS链接，供用户了解更多信息或获取支持。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  url: string;
}

/**
 * 定义Agent支持的可选能力。
 *
 * @typedef AgentCapabilities
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentCapabilities {
  /**
   * Agent是否支持流式响应。
   * 
   * true：表示支持SSE（Server-Sent Events）流式响应，实时返回部分结果。
   * 
   * false：表示不支持流式，仅支持一次性返回完整结果。启用流式响应后，客户端可使用stream方法获取实时数据流。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  streaming?: boolean;

  /**
   * Agent是否支持为异步任务更新发送推送通知。
   * 
   * true：表示支持，当长时间运行的任务状态发生变化时（如任务完成、失败或进度更新），Agent可以主动推送通知给客户端。
   * 
   * false：表示不支持，客户端需要轮询查询任务状态。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  pushNotifications?: boolean;

  /**
   * Agent是否支持查看任务状态变化历史。
   * 
   * true：表示支持，客户端可以查询任务从创建到完成的完整状态转换记录（如pending->running->completed）。
   * 
   * false：表示不支持状态历史查询。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  stateTransitionHistory?: boolean;

  /**
   * Agent是否支持在认证时提供扩展的AgentCard。
   * 
   * true：表示支持，客户端在通过认证后可以获取包含额外信息（如私有配置、高级能力）的扩展AgentCard。
   * 
   * false：表示仅提供基础AgentCard。不传入时默认为false。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extendedAgentCard?: boolean;

  /**
   * Agent支持的协议扩展。用于存储自定义的扩展能力配置，格式为JSON字符串，可以包含协议级别的扩展参数和自定义字段，由开发者和Agent使用方约定。不配置时不使用扩展配置。
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extension?: string;
}

/**
 * 表示Agent可以执行的不同能力或功能。
 *
 * @typedef AgentSkill
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentSkill {
  /**
   * AgentSkill的唯一标识符，在一个AgentCard中必须唯一。建议使用具有语义的命名格式（如"route-planner"、"recipe-search"），用于在API调用中精确指定要使用的技能。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  id: string;

  /**
   * AgentSkill的名称。用于在UI界面中展示，例如"Route Planning"（路线规划）或"Recipe Search"（食谱搜索）。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  name: string;

  /**
   * AgentSkill的详细描述。应清晰说明该技能的具体功能、适用场景和能解决的问题，例如"帮助用户规划两点之间的出行路线，提供多种交通方式选择和实时路况信息"。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  description: string;

  /**
   * 描述AgentSkill能力的关键字标签。用于技能分类、检索和推荐，例如["maps", "routing", "navigation"]或["cooking", "recipe", "food"]。标签应简洁明了，便于用户理解和
   * 搜索。
   *
   * @type { Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  tags: Array<string>;

  /**
   * AgentSkill可以处理的示例提示或使用场景。提供具体的示例可以帮助用户理解如何使用该技能，例如["规划从上海到北京的路线"]。不配置时不展示示例。
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  examples?: Array<string>;

  /**
   * AgentSkill支持的输入模式。使用MIME类型格式定义，例如["text/plain"]。如果未设置，将使用AgentCard级别的defaultInputModes。该字段允许为特定技能自定义输入类型，覆盖默认设置。
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  inputModes?: Array<string>;

  /**
   * AgentSkill支持的输出模式。使用MIME类型格式定义，例如["text/plain", "application/html", "video/mp4"]。如果未设置，将使用AgentCard级别的
   * defaultOutputModes。该字段允许为特定技能自定义输出类型，覆盖默认设置。
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  outputModes?: Array<string>;

  /**
   * AgentSkill的扩展配置项。用于存储技能级别的自定义扩展配置，格式为JSON字符串，可以包含技能特有的参数和配置信息。不配置时不使用扩展配置。
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  extension?: string;
}

/**
 * Agent的应用信息。
 *
 * @typedef AgentAppInfo
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
export interface AgentAppInfo {
  /**
   * Agent所属AgentExtensionAbility的Bundle名称。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  bundleName: string;

  /**
   * Agent所属AgentExtensionAbility的Module名称。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  moduleName: string;

  /**
   * Agent所属AgentExtensionAbility的Ability名称。
   *
   * @type { string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  abilityName: string;

  /**
   * Agent支持的设备类型列表。取值范围参考[deviceTypes](docroot://quick-start/module-configuration-file.md#devicetypes标签)。
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  deviceTypes?: Array<string>;

  /**
   * Agent运行的最低应用版本要求。使用语义化版本号格式（如"1.0.0"），指定运行该Agent所需的应用最低版本。低于此版本的应用将无法正确加载和运行该Agent。
   *
   * @type { ?string }
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  minAppVersion?: string;
}
