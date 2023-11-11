/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from '../@ohos.base';
import Context from './Context';
import AbilityLifecycleCallback from '../@ohos.app.ability.AbilityLifecycleCallback';
import EnvironmentCallback from '../@ohos.app.ability.EnvironmentCallback';
import type ApplicationStateChangeCallback from '../@ohos.app.ability.ApplicationStateChangeCallback';
import { ProcessInformation } from './ProcessInformation';
import type ConfigurationConstant from '../@ohos.app.ability.ConfigurationConstant';
import type { AutoStartupCallback as _AutoStartupCallback } from './AutoStartupCallback';
import type { AutoStartupInfo as _AutoStartupInfo } from './AutoStartupInfo';

/**
 * The context of an application. It allows access to application-specific resources.
 *
 * @extends Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 9
 */
/**
 * The context of an application. It allows access to application-specific resources.
 *
 * @extends Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
export default class ApplicationContext extends Context {
  /**
   * Register ability lifecycle callback.
   *
   * @param { 'abilityLifecycle' } type - abilityLifecycle.
   * @param { AbilityLifecycleCallback } callback - The ability lifecycle callback.
   * @returns { number } Returns the number code of the callback.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Register ability lifecycle callback.
   *
   * @param { 'abilityLifecycle' } type - abilityLifecycle.
   * @param { AbilityLifecycleCallback } callback - The ability lifecycle callback.
   * @returns { number } Returns the number code of the callback.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback): number;

  /**
   * Unregister ability lifecycle callback.
   *
   * @param { 'abilityLifecycle' } type - abilityLifecycle.
   * @param { number } callbackId - Indicates the number code of the callback.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Unregister ability lifecycle callback.
   *
   * @param { 'abilityLifecycle' } type - abilityLifecycle.
   * @param { number } callbackId - Indicates the number code of the callback.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback<void>): void;

  /**
   * Unregister ability lifecycle callback.
   *
   * @param { 'abilityLifecycle' } type - abilityLifecycle.
   * @param { number } callbackId - Indicates the number code of the callback.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  off(type: 'abilityLifecycle', callbackId: number): Promise<void>;

  /**
   * Register environment callback.
   *
   * @param { 'environment' } type - environment.
   * @param { EnvironmentCallback } callback - The environment callback.
   * @returns { number } Returns the number code of the callback.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  on(type: 'environment', callback: EnvironmentCallback): number;

  /**
   * Unregister environment callback.
   *
   * @param { 'environment' } type - environment.
   * @param { number } callbackId - Indicates the number code of the callback.
   * @param { AsyncCallback<void> } callback - The callback of unregisterEnvironmentCallback.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  off(type: 'environment', callbackId: number, callback: AsyncCallback<void>): void;

  /**
   * Unregister environment callback.
   *
   * @param { 'environment' } type - environment.
   * @param { number } callbackId - Indicates the number code of the callback.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  off(type: 'environment', callbackId: number): Promise<void>;

  /**
   * Register applicationStateChange callback.
   *
   * @param { 'applicationStateChange' } type - applicationStateChange.
   * @param { ApplicationStateChangeCallback } callback - The applicationStateChange callback.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback): void;

  /**
   * Unregister applicationStateChange callback.
   *
   * @param { 'applicationStateChange' } type - applicationStateChange.
   * @param { ApplicationStateChangeCallback } [callback] - The applicationStateChange callback.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 10
   */
  off(type: 'applicationStateChange', callback?: ApplicationStateChangeCallback): void;

  /**
   * Get information about running processes
   *
   * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Get information about running processes
   *
   * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  getRunningProcessInformation(): Promise<Array<ProcessInformation>>;

  /**
   * Get information about running processes
   *
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  /**
   * Get information about running processes
   *
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @crossplatform
   * @since 10
   */
  getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Kill all processes of the application
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  killAllProcesses(): Promise<void>;

  /**
   * Kill all processes of the application
   *
   * @param { AsyncCallback<void> } callback - The callback of killAllProcesses.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 9
   */
  killAllProcesses(callback: AsyncCallback<void>);

  /**
   * Set colorMode of the application
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - Color mode.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 11
   */
  setColorMode(colorMode: ConfigurationConstant.ColorMode): void;

  /**
   * Set language of the application
   *
   * @param { string } language - Language.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @atomicservice
   * @since 11
   */
  setLanguage(language: string): void;

  /**
   * Clear up application data by app self
   *
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  clearUpApplicationData(): Promise<void>;

  /**
   * Clear up application data by app self
   *
   * @param { AsyncCallback<void> } callback - The callback of clearUpApplicationData.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  clearUpApplicationData(callback: AsyncCallback<void>): void;

  /**
   * Register the listener that watches for current application auto startup state.
   *
   * @param { 'abilityAutoStartup' } type - Indicates the type of event.
   * @param { AutoStartupCallback } callback - Auto startup callback.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  on(type: 'abilityAutoStartup', callback: AutoStartupCallback): void;

  /**
   * Unregister listener that watches for current application auto startup state.
   *
   * @param { 'abilityAutoStartup' } type - Indicates the type of event.
   * @param { AutoStartupCallback } [callback] - Auto startup callback.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  off(type: 'abilityAutoStartup', callback?: AutoStartupCallback): void;

  /**
   * Set current application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @param { AsyncCallback<void> } callback - The callback of setAutoStartup.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  setAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * Set current application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  setAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * Cancel current application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @param { AsyncCallback<void> } callback - The callback of cancelAutoStartup.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  cancelAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<void>): void;

  /**
   * Cancel current application auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  cancelAutoStartup(info: AutoStartupInfo): Promise<void>;

  /**
   * Check if the current application is auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @param { AsyncCallback<boolean> } callback - The callback of isAutoStartup.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  isAutoStartup(info: AutoStartupInfo, callback: AsyncCallback<boolean>): void;

  /**
   * Check if the current application is auto startup state.
   *
   * @param { AutoStartupInfo } info - The application info.
   * @returns { Promise<boolean> } The promise returned by the function.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @StageModelOnly
   * @since 11
   */
  isAutoStartup(info: AutoStartupInfo): Promise<boolean>;
}

/**
 * The class of auto startup info.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 11
 */
export type AutoStartupInfo = _AutoStartupInfo;

/**
 * The class of auto startup callback.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @StageModelOnly
 * @since 11
 */
export type AutoStartupCallback = _AutoStartupCallback;
