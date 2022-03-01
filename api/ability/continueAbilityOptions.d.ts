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

 /**
 * @since 7
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @permission N/A
 */
export interface ContinueAbilityOptions {
  /**
   * Indicates the ID of the target device where this ability will be migrated to.
   *
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FAModelOnly
   */
   deviceId: string;

  /**
   * Indicates whether the ability to be migrated back to the local device through
   * This is a reserved field.
   *
   * @default -
   * @since 7
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FAModelOnly
   */
   reversible?: boolean;
}