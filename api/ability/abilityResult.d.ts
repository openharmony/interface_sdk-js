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
 * # How to Use
 * 
 * In the stage model, you can use 
 * [startAbilityForResult]{@link ./../application/UIAbilityContext:UIAbilityContext#startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
 * to obtain the AbilityResult object returned when the started UIAbility is terminated by calling 
 * [terminateSelfWithResult]{@link ./../application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
 * .
 * 
 * In the FA model, you can use 
 * [startAbilityForResult]{@link ./../@ohos.ability.featureAbility:featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)}
 * to obtain the AbilityResult object returned after the started UIAbility is terminated by calling 
 * [terminateSelfWithResult]{@link ./../@ohos.ability.featureAbility:featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
 * .
 */
/**
 * The module defines the result code and data returned to the caller when a started UIAbility is terminated.
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface AbilityResult {
  /**
   * Indicates the result code returned after the ability is destroyed. You can define the result
   * code to identify an error.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  resultCode: int;

  /**
   * Indicates the data returned after the ability is destroyed. You can define the data returned.
   * This parameter can be null.
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  want?: Want;
}