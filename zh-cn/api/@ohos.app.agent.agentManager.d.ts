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
import Want from './@ohos.app.ability.Want';
import { AgentCard } from './application/AgentCard';
import { AgentProxy } from './application/AgentProxy';
import { AgentExtensionConnectCallback } from './application/AgentExtensionConnectCallback';
import agentConstant from './@ohos.app.agent.agentConstant';
import { ConnectOptions } from './ability/connectOptions';
import AgentExtensionContext from './application/AgentExtensionContext';

/**
 * agentManager模块提供Agent管理能力，支持AgentExtensionAbility的连接、断开连接等操作，支持LOW_CODE类型Agent的生命周期管理，支持AgentExtensionAbility与
 * ServiceExtensionAbility的连接管理，同时提供获取设备上的AgentCard信息。
 *
 * @namespace agentManager
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare namespace agentManager {
  /**
   * 将当前调用方组件连接到
   * [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)。通过返回的
   * [AgentProxy](docroot://reference/apis-ability-kit/js-apis-inner-application-agentProxy-sys.md)与
   * [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)进行通信，以使用
   * AgentExtensionAbility对外提供的能力。
   * 
   * > **说明：**
   * >
   * > - 当目标Agent的AgentCard为
   * > [LOW_CODE](docroot://reference/apis-ability-kit/js-apis-app-agent-agentConstant-sys.md#agentconstantagentcardtype)
   * > 类型时，AgentExtensionAbility的
   * > [onConnect](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md#onconnect)只在此类Agent连接
   * > 成功时回调；后续连接的此类Agent，只回调
   * > [onAgentInvoked](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility-sys.md#onagentinvoked)。
   * >
   * > - 同一个AgentExtensionAbility中，最多只能同时运行100个LOW_CODE类型的Agent，否则会报35600003错误码。
   * >
   * > - 同一个AgentExtensionAbility中，不允许重复连接同一个LOW_CODE类型的Agent。
   *
   * @permission ohos.permission.CONNECT_AGENT
   * @param { Want } want -
   *     [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)所属的Want
   *     信息，通常需要包括bundle名称、ability名称。
   * @param { string } agentId -
   *     [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)所属的
   *     agentId。
   * @param { AgentExtensionConnectCallback } callback - 连接回调函数，包含接收
   *     [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)服务端的数据、
   *     安全认证数据以及断开连接事件的回调接口。
   * @returns { Promise<AgentProxy> } Promise对象，返回的AgentProxy对象，用于从客户端向AgentExtensionAbility服务端发送数据或安全认证请求。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by enterprise device management (EDM).
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   *     2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @throws { BusinessError } 35600001 - The specified agentId does not exist.
   * @throws { BusinessError } 35600003 - Maximum connections from the same caller have been reached.
   *     Please disconnect at least one agent extension beforehand.
   * @throws { BusinessError } 16000055 - Installation-free timed out. [since 26.0.0]
   * @throws { BusinessError } 35600007 - The specified LOW_CODE agent is already active and is not yet
   *     completed. [since 26.0.0]
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function connectAgentExtensionAbility(want: Want, agentId: string,
    callback: AgentExtensionConnectCallback): Promise<AgentProxy>;

  /**
   * 断开与指定proxy的[AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)
   * 的连接。
   *
   * @permission ohos.permission.CONNECT_AGENT
   * @param { AgentProxy } proxy - 要断开连接的
   *     [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)对应的
   *     Proxy对象，在调用[connectAgentExtensionAbility]{@link agentManager.connectAgentExtensionAbility}接口连接
   *     [AgentExtensionAbility](docroot://reference/apis-ability-kit/js-apis-app-agent-agentExtensionAbility.md)时会返回其对应
   *     的proxy对象。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function disconnectAgentExtensionAbility(proxy: AgentProxy): Promise<void>;

  /**
   * 获取设备上所有的AgentCard。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_AGENT_CARD
   * @returns { Promise<Array<AgentCard>> } Promise对象，返回设备上所有的AgentCard数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAllAgentCards(): Promise<Array<AgentCard>>;

  /**
   * 获取指定应用的所有AgentCard。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_AGENT_CARD
   * @param { string } bundleName - AgentCard所属的bundle名称。
   * @returns { Promise<Array<AgentCard>> } Promise对象，返回指定bundleName内的所有AgentCard数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAgentCardsByBundleName(bundleName: string): Promise<Array<AgentCard>>;

  /**
   * 获取指定应用agentId对应的AgentCard。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_AGENT_CARD
   * @param { string } bundleName - AgentCard所属的bundle名称。
   * @param { string } agentId - AgentCard所属的agentId。
   * @returns { Promise<AgentCard> } Promise对象，返回指定的AgentCard。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 35600001 - The specified agentId does not exist.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  function getAgentCardByAgentId(bundleName: string, agentId: string): Promise<AgentCard>;

  /**
   * 更新系统中已存在的AgentCard信息，当[SemVer版本](https://semver.org/)不低于当前已存在的AgentCard时执行覆盖更新。当SemVer版本相同时，系统优先保存通过
   * [registerAgentCard]{@link agentManager.registerAgentCard}或[updateAgentCard]{@link agentManager.updateAgentCard}接口调用
   * 时传入的AgentCard。
   * 
   * 系统会根据类型对appInfo进行校验：
   * 
   * - APP、LOW_CODE类型：校验bundle和ability是否存在，并验证ability是否为agent类型。
   * - ATOMIC_SERVICE类型：在原子化服务已安装时，校验ability是否存在，并验证ability是否为agent类型。
   *
   * @permission ohos.permission.MODIFY_AGENT_CARD
   * @param { AgentCard } agentCard - 要更新的AgentCard信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 35600001 - The specified agentId does not exist.
   * @throws { BusinessError } 35600004 - The specified AgentCard version is older than the current version.
   * @throws { BusinessError } 35600005 - The specified AgentCard version is invalid.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function updateAgentCard(agentCard: AgentCard): Promise<void>;

  /**
   * 删除指定应用agentId对应的AgentCard。
   *
   * @permission ohos.permission.MODIFY_AGENT_CARD
   * @param { string } bundleName - 用于标识AgentCard所属的包名。
   * @param { string } agentId - 用于标识AgentCard所属的agentId。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 35600001 - The specified agentId does not exist.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function deleteAgentCard(bundleName: string, agentId: string): Promise<void>;

  /**
   * 注册AgentCard到系统中，使系统能够识别和调用对应的AgentExtensionAbility。
   * 
   * 系统会根据类型对appInfo进行校验：
   * 
   * - APP、LOW_CODE类型：校验bundle和ability是否存在，并验证ability是否为agent类型。
   * - ATOMIC_SERVICE类型：在原子化服务已安装时，校验ability是否存在，并验证ability是否为agent类型。
   *
   * @permission ohos.permission.MODIFY_AGENT_CARD
   * @param { AgentCard } agentCard - 要注册的AgentCard信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 35600005 - The specified AgentCard version is invalid.
   * @throws { BusinessError } 35600006 - The specified AgentCard has already been registered. Use updateAgentCard instead.
   * @throws { BusinessError } 35600008 - The number of AgentCards in the bundle reaches the limit.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function registerAgentCard(agentCard: AgentCard): Promise<void>;

  /**
   * 通知指定的
   * [LOW_CODE](docroot://reference/apis-ability-kit/js-apis-app-agent-agentConstant-sys.md#agentconstantagentcardtype)类
   * 型的AgentCard关联的Agent生命周期已结束。
   *
   * @permission ohos.permission.CONNECT_AGENT
   * @param { string } agentId - 用于标识AgentCard的agentId。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 35600001 - The specified agentId does not exist.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function notifyLowCodeAgentComplete(agentId: string): Promise<void>;

  /**
   * 将AgentExtensionAbility连接到ServiceExtensionAbility。若目标ServiceExtensionAbility可见，可直接连接；若不可见，需申请
   * `ohos.permission.START_INVISIBLE_ABILITY`权限；若目标ServiceExtensionAbility位于远程设备上，需申请
   * `ohos.permission.DISTRIBUTED_DATASYNC`权限。
   * 
   * > **说明：**
   * >
   * > 该接口不支持在多线程和子进程中调用。在多线程中调用将引发CppCrash；在子进程中调用将返回16000050错误码。
   *
   * @param { AgentExtensionContext } context - 当前Agent扩展能力的上下文，包含AgentCard信息。
   * @param { Want } want - 目标ServiceExtensionAbility的Want信息，包含bundleName、abilityName等。
   * @param { ConnectOptions } callback - ConnectOptions类型的回调函数，返回服务连接成功、连接失败、断开的信息。
   * @returns { long } 返回一个连接ID，用于标识当前AgentExtensionAbility与ServiceExtensionAbility之间的连接。该连接ID可用于后续调用
   *     [disconnectServiceExtensionAbility]{@link agentManager.disconnectServiceExtensionAbility}接口断开连接。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000012 - The application is controlled.
   * @throws { BusinessError } 16000013 - The application is controlled by enterprise device management (EDM).
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function connectServiceExtensionAbility(context: AgentExtensionContext, want: Want, callback: ConnectOptions): long;

  /**
   * 断开AgentExtensionAbility与ServiceExtensionAbility的连接。
   *
   * @param { AgentExtensionContext } context - 当前Agent扩展能力的上下文，包含AgentCard信息。
   * @param { long } connectId - [connectServiceExtensionAbility]{@link agentManager.connectServiceExtensionAbility}返回的连
   *     接ID，用于标识要断开的目标连接。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed.
   * 2.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AgentRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function disconnectServiceExtensionAbility(context: AgentExtensionContext, connectId: long): Promise<void>;
}

export default agentManager;
