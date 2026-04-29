/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import featureAbility from '../@ohos.ability.featureAbility';
import dataAbility from '../@ohos.data.dataAbility';
import rdb from '../@ohos.data.rdb';

/**
 * 定义DataAbility数据操作方式，可以作为
 * [executeBatch](docroot://reference/apis-ability-kit/js-apis-inner-ability-dataAbilityHelper.md#dataabilityhelperexecutebatch)
 * 的入参，操作数据库的信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @since 7 dynamiconly
 */
export interface DataAbilityOperation {
  /**
   * 指示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  uri: string;

  /**
   * 指示数据操作类型。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  type: featureAbility.DataAbilityOperationType;

  /**
   * 指示要操作的数据值。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  valuesBucket?: rdb.ValuesBucket;

  /**
   * 指示包含一组键值对的valuesBucket对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  valueBackReferences?: rdb.ValuesBucket;

  /**
   * 指示要设置的筛选条件。如果此参数为空，则操作所有数据记录。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  predicates?: dataAbility.DataAbilityPredicates;

  /**
   * 指示用作谓词中筛选条件的反向引用。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  predicatesBackReferences?: Map<number, number>;

  /**
   * 指示是否可以中断批处理操作。true表示可以中断批处理操作，false表示不可中断批处理操作。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  interrupted?: boolean;

  /**
   * 指示要更新或删除的预期行数。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  expectedCount?: number;
}