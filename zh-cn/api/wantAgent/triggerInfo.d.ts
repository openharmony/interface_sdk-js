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
 * @file
 * @kit AbilityKit
 */

import Want from '../@ohos.app.ability.Want';
import StartOptions from '../@ohos.app.ability.StartOptions';
/*** if arkts static */
import { RecordData } from '../@ohos.base';
/*** endif */

/**
 * 作为[trigger]{@link @ohos.app.ability.wantAgent:wantAgent.trigger(agent: WantAgent, triggerInfo: TriggerInfo, callback?: AsyncCallback<CompleteData>)}的入参定义触发WantAgent所需
 * 要的信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface TriggerInfo {
  /**
   * 表示传递的公共事件代码，仅当WantAgent实例的
   * [OperationType]{@link @ohos.app.ability.wantAgent:wantAgent.OperationType}类型是
   * 'SEND_COMMON_EVENT'时有效。该字段与发布者使用
   * [commonEventManager.publish]{@link @ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * 发布公共事件时，传递
   * [CommonEventPublishData]{@link ../commonEvent/commonEventPublishData:CommonEventPublishData}
   * 公共事件数据中的`code`字段含义一致。取值根据公共事件类型确定。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  code: int;

  /**
   * 对象间信息传递的载体，可以用于应用组件间的信息传递。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  want?: Want;

  /**
   * 表示公共事件订阅者的权限。仅当WantAgent实例的
   * [OperationType]{@link @ohos.app.ability.wantAgent:wantAgent.OperationType}类型是
   * 'SEND_COMMON_EVENT'时，该字段生效。若权限为null，则接收方无需具备任何权限。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  permission?: string;

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
   * 额外数据。
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
   * 当触发wantAgent启动Ability时，由该属性指定启动参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startOptions?: StartOptions;
}