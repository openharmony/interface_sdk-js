/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './app/common';

declare namespace featureAbility {
  /**
   * Destroys the current ability.
   * @devices phone
   * @since 6
   * @sysCap AAFwk
   * @param -
   * @return -
   * @testapi
   */
  function terminateAbility(callback: AsyncCallback<void>): void;

  /**
   * Destroys the current ability.
   * @devices phone
   * @since 6
   * @sysCap AAFwk
   * @param -
   * @return -
   * @testapi
   */
  function terminateAbility(): Promise<void>;

  /**
   * Starts a new ability.
   * @devices phone
   * @since 6
   * @sysCap AAFwk
   * @param param Indicates the ability to start.
   * @return -
   * @testapi
   */
  function startAbility(
    param: StartAbilityParameter,
    callback: AsyncCallback<void>,
  ): void;

  /**
   * Starts a new ability.
   * @devices phone
   * @since 6
   * @sysCap AAFwk
   * @param param Indicates the ability to start.
   * @return -
   * @testapi
   */
  function startAbility(param: StartAbilityParameter): Promise<void>;

  export interface StartAbilityParameter {
    want: object;
    abilityStartSetting?: object;
  }
}
export default featureAbility;
