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

import featureAbility from '../@ohos.ability.featureAbility';
import dataAbility from '../@ohos.data.dataAbility';
import rdb from '../@ohos.data.rdb';

/**
 * @typedef DataAbilityOperation
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @since 7
 */
export interface DataAbilityOperation {
  /**
   * Indicates the path of data to operate.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  uri: string;

  /**
   * Indicates a operation type.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  type: featureAbility.DataAbilityOperationType;

  /**
   * Indicates the data values to be set.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  valuesBucket?: rdb.ValuesBucket;

  /**
   * Indicates the valuesBucket object containing a set of key-value pairs.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  valueBackReferences?: rdb.ValuesBucket;

  /**
   * Indicates the filter criteria to set. If this parameter is null, all data records
   * will be operated by default.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  predicates?: dataAbility.DataAbilityPredicates;

  /**
   * Indicates the back reference to be used as a filter criterion in predicates.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  predicatesBackReferences?: Map<number, number>;

  /**
   * Specifies whether a batch operation can be interrupted.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  interrupted?: boolean;

  /**
   * Indicates the expected number of rows to update or delete.
   *
   * @default -
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @FAModelOnly
   * @since 7
   */
  expectedCount?: number;
}
