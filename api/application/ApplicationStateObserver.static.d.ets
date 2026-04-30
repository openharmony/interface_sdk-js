'use static'
/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import _ProcessData from './ProcessData';

/**
 * The module defines an observer to listen for application state changes. It can be used as an input parameter in
 * [on('applicationState')]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer:
 * ApplicationStateObserver)}
 * to listen for lifecycle changes of the application.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @FaAndStageModel
 * @since 23 static
 */
declare interface ApplicationStateObserver {
  /**
   * Called when the foreground or background state of an application changes.
   *
   * @param { AppStateData } appStateData - Application state data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FaAndStageModel
   * @since 23 static
   */
  onForegroundApplicationChanged(appStateData: AppStateData): void;

  /**
   * Called when the ability state changes.
   *
   * @param { AbilityStateData } abilityStateData - Ability state data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FaAndStageModel
   * @since 23 static
   */
  onAbilityStateChanged(abilityStateData: AbilityStateData): void;

  /**
   * Called when a process is created.
   *
   * @param { ProcessData } processData - Process data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FaAndStageModel
   * @since 23 static
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * Called when a process is destroyed.
   *
   * @param { ProcessData } processData - Process data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FaAndStageModel
   * @since 23 static
   */
  onProcessDied(processData: ProcessData): void;

  /**
   * Called when the process state is changed.
   *
   * @param { ProcessData } processData - Process data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FaAndStageModel
   * @since 23 static
   */
  onProcessStateChanged(processData: ProcessData): void;

  /**
   * Called when the first process of the application is created.
   *
   * @param { AppStateData } appStateData - Application state data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FaAndStageModel
   * @since 23 static
   */
  onAppStarted(appStateData: AppStateData): void;

  /**
   * Called when the last process of the application is destroyed.
   *
   * @param { AppStateData } appStateData - Application state data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @FaAndStageModel
   * @since 23 static
   */
  onAppStopped(appStateData: AppStateData): void;
}

/**
 * The process data.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @FaAndStageModel
 * @since 23 static
 */
export type ProcessData = _ProcessData;

export default ApplicationStateObserver;