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

import Want from '../@ohos.app.ability.Want';

/**
 * 定义启动Ability参数，可以作为入参，调用
 * [startAbility]{@link ./../@ohos.ability.featureAbility:featureAbility.startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>)}
 * 启动指定的Ability。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @since 6 dynamiconly
 */
export interface StartAbilityParameter {
  /**
   * 启动Ability的want信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 6 dynamiconly
   */
  want: Want;

  /**
   * 启动Ability的特殊属性，当开发者启动Ability时，该属性可以作为调用中的输入参数传递。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 6 dynamiconly
   */
  abilityStartSetting?: { [key: string]: any };

  /**
   * 启动Ability的特殊属性，当开发者启动Ability时，该属性可以作为调用中的输入参数传递。推荐使用该属性替代abilityStartSetting，设置该属性后，abilityStartSetting不再生效。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 11 dynamiconly
   */
  abilityStartSettings?: Record<string, Object>;
}