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
   * DistributedExtension的上下文环境，继承自ExtensionContext。
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
   * @param { Want } want - 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。
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
   * 多设备协作场景下返回协作结果的回调。
   *
   * @param { Record<string, Object> } wantParam - want相关参数，仅支持key值取"ohos.extra.param.key.supportCollaborateIndex"。通过该key值可以获
   *     取到调用方传输的数据并进行相应的处理。
   * @returns { AbilityConstant.CollaborateResult } 协同方应用是否接受协同。
   * @syscap SystemCapability.DistributedSched.AppCollaboration
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  onCollaborate(wantParam: Record<string, Object>): AbilityConstant.CollaborateResult;
}

export default DistributedExtensionAbility;