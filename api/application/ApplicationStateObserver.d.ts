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
 * The module defines an observer to listen for application state changes. It can be used as an input parameter in 
 * [on('applicationState')]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}
 * to listen for lifecycle changes of the application.
 *
 * @file
 * @kit AbilityKit
 */

/**
 * # ApplicationStateObserver.onForegroundApplicationChanged
 * 
 * onForegroundApplicationChanged(appStateData: AppStateData): void
 * 
 * Called when the foreground or background state of an application changes.
 * 
 * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
 * 
 * **Parameters**
 * 
 * | Name| Type| Mandatory| Description|
 * | -------- | -------- | -------- | -------- |
 * | appStateData | [AppStateData]{@link AppStateData:AppStateData} | Yes| Application state data.|
 */
/**
 * # ApplicationStateObserver.onAbilityStateChanged
 * 
 * onAbilityStateChanged(abilityStateData: AbilityStateData): void
 * 
 * Called when the ability state changes.
 * 
 * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
 * 
 * **Parameters**
 * 
 * | Name| Type| Mandatory| Description|
 * | -------- | -------- | -------- | -------- |
 * | abilityStateData | [AbilityStateData]{@link AbilityStateData:AbilityStateData} | Yes| Ability state data.|
 */
/**
 * # ApplicationStateObserver.onProcessCreated
 * 
 * onProcessCreated(processData: ProcessData): void
 * 
 * Called when a process is created.
 * 
 * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
 * 
 * **Parameters**
 * 
 * | Name| Type| Mandatory| Description|
 * | -------- | -------- | -------- | -------- |
 * | processData | [ProcessData]{@link ProcessData:ProcessData} | Yes| Process data.|
 */
/**
 * # ApplicationStateObserver.onProcessDied
 * 
 * onProcessDied(processData: ProcessData): void
 * 
 * Called when a process is destroyed.
 * 
 * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
 * 
 * **Parameters**
 * 
 * | Name| Type| Mandatory| Description|
 * | -------- | -------- | -------- | -------- |
 * | processData | [ProcessData]{@link ProcessData:ProcessData} | Yes| Process data.|
 */
/**
 * # ApplicationStateObserver.onProcessStateChanged
 * 
 * onProcessStateChanged(processData: ProcessData): void
 * 
 * Called when the process state is changed.
 * 
 * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
 * 
 * **Parameters**
 * 
 * | Name| Type| Mandatory| Description|
 * | -------- | -------- | -------- | -------- |
 * | processData | [ProcessData]{@link ProcessData:ProcessData} | Yes| Process data.|
 */
/**
 * # ApplicationStateObserver.onAppStarted
 * 
 * onAppStarted(appStateData: AppStateData): void
 * 
 * Called when the first process of the application is created.
 * 
 * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
 * 
 * **Parameters**
 * 
 * | Name| Type| Mandatory| Description|
 * | -------- | -------- | -------- | -------- |
 * | appStateData | [AppStateData]{@link AppStateData:AppStateData} | Yes| Application state data.|
 */
/**
 * # ApplicationStateObserver.onAppStopped
 * 
 * onAppStopped(appStateData: AppStateData): void
 * 
 * Called when the last process of the application is destroyed.
 * 
 * **System capability**: SystemCapability.Ability.AbilityRuntime.Core
 * 
 * **Parameters**
 * 
 * | Name| Type| Mandatory| Description|
 * | -------- | -------- | -------- | -------- |
 * | appStateData | [AppStateData]{@link AppStateData:AppStateData} | Yes| Application state data.|
 */
import AppStateData from './AppStateData';
import AbilityStateData from './AbilityStateData';
/*** if arkts dynamic */
import type * as _ProcessData from './ProcessData';
/*** endif */
/*** if arkts static */
import _ProcessData from './ProcessData';
/*** endif */

/*** if arkts dynamic */
/**
 * The application state observer.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 */
export default class ApplicationStateObserver {
/*** endif */

/*** if arkts static */
/**
 * The application state observer.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
declare interface ApplicationStateObserver {
/*** endif */
  /**
   * Will be called when foreground or background application changed.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onForegroundApplicationChanged(appStateData: AppStateData): void;

  /**
   * Will be called when ability state changed.
   *
   * @param { AbilityStateData } abilityStateData - State changed ability info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onAbilityStateChanged(abilityStateData: AbilityStateData): void;

  /**
   * Will be called when process created.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * Will be called when process died.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onProcessDied(processData: ProcessData): void;

  /**
   * Called when process state changes.
   *
   * @param { ProcessData } processData - Process info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onProcessStateChanged(processData: ProcessData): void;

  /**
   * Called when application is started.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onAppStarted(appStateData: AppStateData): void;

  /**
   * Called when application is stopped.
   *
   * @param { AppStateData } appStateData - State changed Application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  onAppStopped(appStateData: AppStateData): void;
}

/**
 * The process data.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 */
export type ProcessData = _ProcessData.default;

/**
 * The process data.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
export type ProcessData = _ProcessData;

/*** if arkts static */
export default ApplicationStateObserver;
/*** endif */