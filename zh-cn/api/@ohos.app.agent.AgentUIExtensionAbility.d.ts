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
 * ###### 约束限制
 * 
 * - 同一个拉起方在同一时间内最多只能拉起来自同一个提供方的5个AgentUIExtensionAbility实例。
 * - AgentUIExtensionAbility内的窗口和ArkUI组件均不允许创建子窗口，也不支持在子窗口中显示。
 *
 * @file 带界面的智能体扩展组件
 * @kit AbilityKit
 */
import UIExtensionAbility from './@ohos.app.ability.UIExtensionAbility';

/**
 * AgentUIExtensionAbility继承自[UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility}，为开发者提供接
 * 入端侧Agent UI界面显示能力。
 * 
 * [AgentExtensionAbility]{@link @ohos.app.agent.AgentExtensionAbility}提供智能体扩展能力，AgentUIExtensionAbility必须与
 * AgentExtensionAbility共进程运行，不支持独立运行。
 * 
 * 各类Ability的继承关系详见[继承关系说明]{@link @ohos.@ohos.app.ability.Ability#ability的继承关系说明}。
 * 
 * > **说明：**
 * >
 * > 本模块接口不支持在[har](docroot://quick-start/har-package.md)包中使用。
 *
 * @syscap SystemCapability.Ability.AgentRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 24 dynamic&static
 */
declare class AgentUIExtensionAbility extends UIExtensionAbility {
}

export default AgentUIExtensionAbility;