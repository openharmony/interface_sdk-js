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
 * The module defines the operation on DataAbilities. It can be used as an input parameter of
 * [executeBatch](docroot://reference/apis-ability-kit/js-apis-inner-ability-dataAbilityHelper.md#dataabilityhelperexecutebatch)
 *  to specify the database operation information.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @since 7 dynamiconly
 */
export interface DataAbilityOperation {
  /**
   * Indicates the path of data to operate.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  uri: string;

  /**
   * Indicates a operation type.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  type: featureAbility.DataAbilityOperationType;

  /**
   * Indicates the data values to be set.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  valuesBucket?: rdb.ValuesBucket;

  /**
   * Indicates the valuesBucket object containing a set of key-value pairs.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  valueBackReferences?: rdb.ValuesBucket;

  /**
   * Indicates the filter criteria to set. If this parameter is null, all data records
   * will be operated by default.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  predicates?: dataAbility.DataAbilityPredicates;

  /**
   * Indicates the back reference to be used as a filter criterion in predicates.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  predicatesBackReferences?: Map<number, number>;

  /**
   * Specifies whether a batch operation can be interrupted.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  interrupted?: boolean;

  /**
   * Indicates the expected number of rows to update or delete.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  expectedCount?: number;
}