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
 * 作为[trigger](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#wantagenttrigger)的入参定义触发WantAgent所需
 * 要的信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
export interface TriggerInfo {
  /**
   * 表示传递的公共事件数据，仅当WantAgent实例的
   * [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype)类型是'
   * SEND_COMMON_EVENT'时有效。该字段与发布者使用
   * [commonEventManager.publish]{@link @ohos.commonEventManager:commonEventManager.publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>)}
   * 发布公共事件时，传递
   * [CommonEventPublishData](docroot://reference/apis-basic-services-kit/js-apis-inner-commonEvent-commonEventPublishData.md#属性)
   * 公共事件数据中的`code`字段含义一致。
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
   * [OperationType](docroot://reference/apis-ability-kit/js-apis-app-ability-wantAgent.md#operationtype)类型是'
   * SEND_COMMON_EVENT'时，该字段生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  permission?: string;

  /**
   * 额外数据。
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
   * 额外数据。推荐使用该属性替代extraInfo，设置该属性后，extraInfo不再生效。
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
   * 触发启动Ability的wantAgent时，由该属性指定启动参数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  startOptions?: StartOptions;
}