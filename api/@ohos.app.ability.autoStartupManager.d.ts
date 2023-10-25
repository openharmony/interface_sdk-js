/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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

import type { AutoStartupCallback } from './application/AutoStartupCallback';
import type { AutoStartupInfo } from './application/AutoStartupInfo';
import type { AsyncCallback } from './@ohos.base';

/**
 * The class of auto startup manager.
 *
 * @namespace autoStartupManager
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 11
 */
declare namespace autoStartupManager {
  /**
   * Register the listener that watches for all applications auto startup state.
   *
   * @param { 'systemAutoStartup' } type - Indicates the type of event.
   * @param { AutoStartupCallback } callback - Auto startup callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function on(type: 'systemAutoStartup', callback: AutoStartupCallback): void;

  /**
   * Unregister listener that watches for all applications auto startup state.
   *
   * @param { 'systemAutoStartup' } type - Indicates the type of event.
   * @param { AutoStartupCallback } [callback] - Auto startup callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function off(type: 'systemAutoStartup', callback?: AutoStartupCallback): void;

  /**
   * Set application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @param { AsyncCallback<void> } callback - The callback of setApplicationAutoStartup.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function setApplicationAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * Set application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function setApplicationAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * Cancel application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @param { AsyncCallback<void> } callback - The callback of cancelApplicationAutoStartup.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function cancelApplicationAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * Cancel application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function cancelApplicationAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * Query the current auto startup status of all applications.
   *
   * @param { AsyncCallback<Array<AutoStartupInfo>> } callback - The callback is used to return the array of
   *                                                             AutoStartupInfo.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function queryAllAutoStartupApplications(callback: AsyncCallback<Array<AutoStartupInfo>>): void;

  /**
   * Query the current auto startup status of all applications.
   *
   * @returns { Promise<Array<AutoStartupInfo>> } The promise returned by the function.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @StageModelOnly
   * @since 11
   */
  function queryAllAutoStartupApplications(): Promise<Array<AutoStartupInfo>>;
}

export default autoStartupManager;
