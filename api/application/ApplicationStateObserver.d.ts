/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
 * @file
 * @kit AbilityKit
 */


import AppStateData from './AppStateData';
import AbilityStateData from './AbilityStateData';
/*** if arkts 1.1 */
import * as _ProcessData from './ProcessData';
/*** endif */
/*** if arkts 1.2 */
import processData from './ProcessData';
/*** endif */

/**
 * The application state observer.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since arkts {'1.1':'14', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ApplicationStateObserver {
  /**
   * Will be called when foreground or background application changed.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onForegroundApplicationChanged(appStateData: AppStateData): void;

  /**
   * Will be called when ability state changed.
   *
   * @param { AbilityStateData } abilityStateData - State changed ability info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAbilityStateChanged(abilityStateData: AbilityStateData): void;

  /**
   * Will be called when process created.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * Will be called when process died.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14
   */
  onProcessDied(processData: ProcessData): void;

  /**
   * Called when process state changes.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since arkts {'1.1':'14', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onProcessStateChanged(processData: ProcessData): void;

  /**
   * Called when application is started.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14
   */
  onAppStarted(appStateData: AppStateData): void;

  /**
   * Called when application is stopped.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14
   */
  onAppStopped(appStateData: AppStateData): void;
}

/**
 * The process data.
 * @typedef { _ProcessData.default }
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14
 */
export type ProcessData = _ProcessData.default;

/**
 * The process data.
 * @typedef { processData }
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 20
 * @arkts 1.2
 */
export type ProcessData = processData;

export default ApplicationStateObserver;