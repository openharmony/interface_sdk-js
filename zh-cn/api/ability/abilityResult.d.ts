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
 * # 使用说明
 * 
 * Stage模型下：可以通过
 * [startAbilityForResult]{@link ./../application/UIAbilityContext:UIAbilityContext#startAbilityForResult(want: Want, callback: AsyncCallback<AbilityResult>)}
 * 获取被拉起的UIAbility退出后返回的AbilityResult对象，被startAbilityForResult拉起的UIAbility对象可以通过
 * [terminateSelfWithResult]{@link ./../application/UIAbilityContext:UIAbilityContext#terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
 * 返回AbilityResult对象。
 * 
 * FA模型下：可以通过
 * [startAbilityForResult]{@link ./../@ohos.ability.featureAbility:featureAbility.startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>)}
 * 获取被拉起的UIAbility退出后返回的AbilityResult对象，被startAbilityForResult拉起的UIAbility对象可以通过
 * [terminateSelfWithResult]{@link ./../@ohos.ability.featureAbility:featureAbility.terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>)}
 * 返回AbilityResult对象。
 */
/**
 * 定义UIAbility被拉起并退出后返回给调用方的结果码和数据。
 *
 * @syscap SystemCapability.Ability.AbilityBase
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
export interface AbilityResult {
  /**
   * 目标方的UIAbility被拉起并退出后，目标方返回给拉起方的结果码。<br/>-?正常情况下，返回目标方传递的结果码。<br/>-?异常情况下，返回-1。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  resultCode: int;

  /**
   * 表示UIAbility被拉起并退出后返回的数据。
   *
   * @syscap SystemCapability.Ability.AbilityBase
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  want?: Want;
}