/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/*** if arkts dynamic */
import { DataAbilityHelper as _DataAbilityHelper } from './ability/dataAbilityHelper';
import { PacMap as _PacMap } from './ability/dataAbilityHelper';
import { DataAbilityOperation as _DataAbilityOperation } from './ability/dataAbilityOperation';
import { DataAbilityResult as _DataAbilityResult } from './ability/dataAbilityResult';
import { AbilityResult as _AbilityResult } from './ability/abilityResult';
import { ConnectOptions as _ConnectOptions } from './ability/connectOptions';
import { StartAbilityParameter as _StartAbilityParameter } from './ability/startAbilityParameter';
/*** endif */
/*** if arkts static */
import { PacMap as _PacMap } from './ability/dataAbilityHelper';
/*** endif */

/**
 * Ability模块将二级模块API组织在一起方便开发者进行导出。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
 * @famodelonly [since 9 - 10]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace ability {
  /**
   * DataAbilityHelper二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type DataAbilityHelper = _DataAbilityHelper;

  /**
   * PacMap二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly [since 9 - 10]
   * @since 9 dynamic
   * @since 23 static
   */
  export type PacMap = _PacMap;

  /**
   * DataAbilityOperation二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type DataAbilityOperation = _DataAbilityOperation;

  /**
   * DataAbilityResult二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type DataAbilityResult = _DataAbilityResult;

  /**
   * AbilityResult二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type AbilityResult = _AbilityResult;

  /**
   * ConnectOptions二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type ConnectOptions = _ConnectOptions;

  /**
   * StartAbilityParameter二级模块。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9 dynamiconly
   */
  export type StartAbilityParameter = _StartAbilityParameter;
}

export default ability;