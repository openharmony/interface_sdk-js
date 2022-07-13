/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import accessibility from './@ohos.accessibility';
import { AsyncCallback } from './basic';

/**
 * Configuration of the accessibility.
 *
 * @since 9
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 */
declare namespace config {
  /**
   * Enable the acceessibility extension ability.
   * @param name Indicates the accessibility extension name, in "bundleName/abilityName" format.
   * @param capability Indicates the ability.
   */
  function enableAbility(name: string, capability: Array<accessibility.Capability>): Promise<void>;
  function enableAbility(name: string, capability: Array<accessibility.Capability>, callback: AsyncCallback<void>): void;

  /**
   * Disable the acceessibility extension ability.
   * @param name Indicates the accessibility extension name, in "bundleName/abilityName" format.
   */
  function disableAbility(name: string): Promise<void>;
  function disableAbility(name: string, callback: AsyncCallback<void>): void;
}
export default config;