/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import Want from './@ohos.app.ability.Want';

import AbilityConstant from './@ohos.app.ability.AbilityConstant';
import type DistributedExtensionContext from './@ohos.application.DistributedExtensionContext';

/**
 * DistributedExtensionAbility模块提供分布式相关扩展能力，提供分布式创建、销毁、连接的生命周期回调。
 * 
 *
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
declare class DistributedExtensionAbility {

  /**
   * DistributedExtension（协同Extension）的上下文环境，继承自ExtensionContext。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  context: DistributedExtensionContext;

  /**
   * Extension生命周期回调，在创建时回调，执行初始化业务逻辑操作。
   *
   * @param { Want } want - 当前Extension相关的Want信息，用于携带创建Extension所需的初始化配置信息。
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onCreate(want: Want): void;

  /**
   * Extension生命周期回调，在销毁时回调，执行资源清理等操作。
   *
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onDestroy(): void;

/**
   * Extension生命周期回调，在多设备限定协同场景下，协同方应用被拉起过程中返回是否接受协同的结果，
   * 返回结果决定协同流程是否继续。
   *
   * @param { Record<string, Object> } wantParam - 协同回调参数，键值对对象，携带调用方传输的协同相关数据。
   *     开发者可通过"ohos.extra.param.key.supportCollaborateIndex"和"CollaborationValues"等key值获取这些数据，
   *     以决定是否接受协同请求及处理协同逻辑，影响协同流程是否继续。
   * @returns { AbilityConstant.CollaborateResult } 表示协同方应用是否接受协同的结果。取值包括：
   *     **ACCEPT**表示接受协同，协同流程继续；**REJECT**表示拒绝协同，协同流程终止。
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onCollaborate(wantParam: Record<string, Object>): AbilityConstant.CollaborateResult;
}

export default DistributedExtensionAbility;
