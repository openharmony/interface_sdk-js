/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * 定义触发WantAgent所需要的信息。
 *
 * @file
 * @kit AbilityKit
 */

import type abilityWantAgent from '../@ohos.app.ability.wantAgent';
import Want from '../@ohos.app.ability.Want';
/*** if arkts dynamic */
import wantAgent from '../@ohos.wantAgent';
/*** endif */
/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * WantAgentInfo用于定义触发WantAgent所需要的信息，可以作为
 * [getWantAgent](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagentgetwantagent)的入参创建指定的
 * WantAgent对象。适用于需要延迟执行Ability启动、发送公共事件等场景，支持自定义请求码和动作执行属性，帮助开发者灵活控制WantAgent的行为。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface WantAgentInfo {
  /**
   * 将被执行的动作列表。wants数组为预留能力，当前只支持一个want。传入多个时只取wants数组的第一个成员。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  wants: Array<Want>;

  /**
   * 动作类型。不设置时无默认动作类型。
   *
   * 从API version 7 开始支持，从API version 11 开始废弃，建议使用actionType<sup>11+</sup>替代。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead WantAgentInfo.actionType
   */
  operationType?: wantAgent.OperationType;

  /**
   * 动作类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  actionType?: abilityWantAgent.OperationType;

  /**
   * 开发者自定义的请求码，用于标识将被执行的动作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  requestCode: int;

  /**
   * 动作执行属性。不设置时无执行属性。
   * 
   * 从API version 7 开始支持，从API version 11 开始废弃，建议使用actionFlags<sup>11+</sup>替代。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamiconly
   * @deprecated since 11
   * @useinstead WantAgentInfo.actionFlags
   */
  wantAgentFlags?: Array<wantAgent.WantAgentFlags>;

  /**
   * 动作执行属性。不设置时无执行属性。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   * @since 23 static
   */
  actionFlags?: Array<abilityWantAgent.WantAgentFlags>;

  /**
   * 额外数据，用于传递自定义扩展信息。参数为键值对对象，key为字符串类型的键名，value为任意类型的值。
   * 建议使用类型安全的extraInfos属性替代本属性。如果同时设置了extraInfo和extraInfos，extraInfos将生效，extraInfo将被忽略。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  extraInfo?: { [key: string]: any };

  /**
   * 启动应用的额外信息。
   * 如果没有需要设置的额外信息，此常量可以留空。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  extraInfo?: Record<string, RecordData>;

  /**
   * 额外数据，用于传递自定义键值对信息，类型安全。推荐使用该属性替代extraInfo。与extraInfo同时设置时，本属性优先生效。
   * 当需要在触发WantAgent时携带额外的自定义数据时传入此参数，不传入时默认为null，不会携带额外数据。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 11 dynamic
   */
  extraInfos?: Record<string, Object>;

  /**
   * 额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  extraInfos?: Record<string, RecordData>;

  /**
   * 用户ID。
   * 取值范围：大于等于0。
   * 当需要指定特定用户时传入此参数，适用于跨用户操作场景（如系统应用管理其他用户的应用）。不传入时默认为调用方所在用户ID。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  userId?: int;
}

/**
 * LocalWantAgentInfo定义触发本地WantAgent所需要的信息，可以作为
 * [createLocalWantAgent](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent-sys.md#wantagentcreatelocalwantagent20)
 * 的入参创建指定的本地WantAgent对象。本地WantAgent仅在当前应用进程内有效，适用于进程内的延迟执行场景。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 20 dynamic
 * @since 23 static
 */
export interface LocalWantAgentInfo {
  /**
   * 将被执行的动作列表。当前只支持一个Want。传入多个Want时，系统仅使用wants数组的第一个成员，其他成员将被忽略。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  wants: Array<Want>;

  /**
   * 将被执行的动作类型，用于指定WantAgent的触发方式（如启动Ability、发送事件等）。具体取值参见OperationType枚举说明。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  operationType?: abilityWantAgent.OperationType;

  /**
   * 开发者自定义的请求码，用于标识将被执行的动作，便于后续通过该请求码识别和匹配对应的动作。建议使用唯一值以避免混淆。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  requestCode: int;
}