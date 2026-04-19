/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { ProcessInformation as _ProcessInformation } from './application/ProcessInformation';
import bundleManager from './@ohos.bundle.bundleManager';
import { RunningMultiAppInfo as _RunningMultiAppInfo } from './application/RunningMultiAppInfo';
/*** if arkts dynamic */
import * as _ApplicationStateObserver from './application/ApplicationStateObserver';
import type * as _AppForegroundStateObserver from './application/AppForegroundStateObserver';
import * as _AbilityStateData from './application/AbilityStateData';
import * as _AppStateData from './application/AppStateData';
import type * as _ProcessData from './application/ProcessData';
import * as _AbilityFirstFrameStateObserver from './application/AbilityFirstFrameStateObserver';
import * as _AbilityFirstFrameStateData from './application/AbilityFirstFrameStateData';
/*** endif */
/*** if arkts static */
import _ApplicationStateObserver from './application/ApplicationStateObserver';
import _AbilityStateData from './application/AbilityStateData';
import _AppStateData from './application/AppStateData';
import _ProcessData from './application/ProcessData';
import _AppForegroundStateObserver from './application/AppForegroundStateObserver';
import { AbilityFirstFrameStateObserver as _AbilityFirstFrameStateObserver } from './application/AbilityFirstFrameStateObserver';
import { AbilityFirstFrameStateData as _AbilityFirstFrameStateData } from './application/AbilityFirstFrameStateData';
/*** endif */

/**
 * The appManager module implements application management. You can use the APIs of this module to  query whether the 
 * application is undergoing a stability test, whether the application is running on a RAM constrained device, the 
 * memory size of the application, and information about running processes.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace appManager {
  /**
   * Enumerates the application state. This enum can be used together with 
   * [ApplicationStateData]{@link ./application/ApplicationStateData:ApplicationStateData} to return the application state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ApplicationState {
    /**
     * The state application is being created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_CREATE,

    /**
     * The application is running in the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_FOREGROUND,

    /**
     * The application is active.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_ACTIVE,

    /**
     * The application is running in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_BACKGROUND,

    /**
     * The application is being destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    STATE_DESTROY
  }

  /**
   * Enumerates the process state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ProcessState {
    /**
     * The process is created.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_CREATE,

    /**
     * The process is running in the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_FOREGROUND,

    /**
     * At least one window in the process has focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_ACTIVE,

    /**
     * The process is running in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_BACKGROUND,

    /**
     * The process is destroyed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    STATE_DESTROY
  }

  /**
   * Enumerates the mode used for preloading an application process.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum PreloadMode {
    /**
     * The application process is preloaded when the application icon is pressed.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    PRESS_DOWN
  }

  /**
   * Enumerates the types of applications to be kept alive.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export enum KeepAliveAppType {
    /**
     * Thrid-party and system applications. This value can be called only as an input parameter of 
     * [getKeepAliveBundles]{@link appManager.getKeepAliveBundles}.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    ALL = 0,

    /**
     * Thrid-party application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    THIRD_PARTY = 1,

    /**
     * System application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM = 2
  }

  /**
   * Enumerates the types of parties that set to keep applications alive.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export enum KeepAliveSetter {
    /**
     * System, which means that the system sets to keep applications alive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SYSTEM = 0,

    /**
     * User, which means that a user sets to keep applications alive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    USER = 1
  }

  /**
   * Describes the keep-alive application information, which can be obtained by callling 
   * [getKeepAliveBundles]{@link appManager.getKeepAliveBundles} or 
   * [getKeepAliveAppServiceExtensions]{@link appManagerAliveAppServiceExtensions}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export interface KeepAliveBundleInfo {
    /**
     * Bundle name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Type of the application to be kept alive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    type: KeepAliveAppType;

    /**
     * Type of the party that sets to keep the application alive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    setter: KeepAliveSetter;

    /**
     * ID of the user who keeps the application alive.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setterUserId?: int;

    /**
     * Whether the user can cancel the keep-alive status. **true** if yes, **false** otherwise.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    allowUserToCancel?: boolean;
  }
  
  /**
   * Enumerates the types of applications to filter. It can be used with 
   * [AppStateFilter]{@link appManager.AppStateFilter} to filter the application types you want to listen for.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterBundleType {
    /**
     * Application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    APP = 1 << 0,

    /**
     * Atomic service.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ATOMIC_SERVICE = 1 << 1
  }

  /**
   * Enumerates the types of application states to filter. It can be used with 
   * [AppStateFilter]{@link appManager.AppStateFilter} to filter the application types you want to listen for.
   * 
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterAppStateType {
    /**
     * The application is initializing. It corresponds to the state whose value is **0** in 
     * [AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#properties).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    CREATE = 1 << 0,

    /**
     * The application is running in the foreground. It corresponds to the state whose value is **2** in 
     * [AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#properties).
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    FOREGROUND = 1 << 1,

    /**
     * The application is running in the background. It corresponds to the state whose value is **4** in 
     * [AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#properties).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    BACKGROUND = 1 << 2,

    /**
     * The application has exited. It corresponds to the state whose value is **5** in 
     * [AppStateData](docroot://reference/apis-ability-kit/js-apis-inner-application-appStateData.md#properties).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DESTROY = 1 << 3
  }

  /**
   * Enumerates the types of process states to filter. It can be used with 
   * [AppStateFilter]{@link appManager.AppStateFilter} to filter the process state types you want to listen for.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterProcessStateType {
    /**
     * The process has just been created. It corresponds to the state whose value is **0** in 
     * [ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#properties).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    CREATE = 1 << 0,

    /**
     * The process is running in the foreground. It corresponds to the state whose value is **2** in 
     * [ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#properties).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    FOREGROUND = 1 << 1,

    /**
     * The process is running in the background. It corresponds to the state whose value is 4 in 
     * [ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#properties).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    BACKGROUND = 1 << 2,

    /**
     * The process has terminated. It corresponds to the state whose value is 5 in 
     * [ProcessData](docroot://reference/apis-ability-kit/js-apis-inner-application-processData.md#properties).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DESTROY = 1 << 3
  }

  /**
   * Enumerates the types of ability states to filter. It can be used with 
   * [AppStateFilter]{@link appManager.AppStateFilter} to filter the state types you want to listen for.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterAbilityStateType {
    /**
     * The ability is being created. It corresponds to the state **ABILITY_STATE_CREATE** in 
     * [Ability States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability-states)
     * .
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    CREATE = 1 << 0,

    /**
     * The ability is running in the foreground. It corresponds to the state **ABILITY_STATE_FOREGROUND** in 
     * [Ability States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability-states)
     * .
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    FOREGROUND = 1 << 1,

    /**
     * The ability is running in the background. It corresponds to the state **ABILITY_STATE_BACKGROUND** in 
     * [Ability States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability-states)
     * .
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    BACKGROUND = 1 << 2,

    /**
     * The ability has been destroyed. It corresponds to the state **ABILITY_STATE_TERMINATED** in 
     * [Ability States](docroot://reference/apis-ability-kit/js-apis-inner-application-abilityStateData.md#ability-states)
     * .
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DESTROY = 1 << 3
  }

  /**
   * Enumerates the callbacks to filter. It can be used with [AppStateFilter]{@link appManager.AppStateFilter} to filter
   *  the callbacks you want to listen for.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export enum FilterCallback {
    /**
     * Corresponds to the
     * [ApplicationStateObserver.onForegroundApplicationChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationStateobserveronforegroundapplicationchanged)
     *  callback, which is executed when the application's foreground/background state changes.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_FOREGROUND_APPLICATION_CHANGED = 1 << 0,

    /**
     * Corresponds to the 
     * [ApplicationStateObserver.onAbilityStateChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateoberseronabilitystatechanged)
     *  callback, which is executed when the ability state changes.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_ABILITY_STATE_CHANGED = 1 << 1,

    /**
     * Corresponds to the 
     * [ApplicationStateObserver.onProcessCreated](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocesscreated)
     *  callback, which is executed when a process is created.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_PROCESS_CREATED = 1 << 2,

    /**
     * Corresponds to the 
     * [ApplicationStateObserver.onProcessDied](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessdied)
     *  callback, which is executed when a process is destroyed.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_PROCESS_DIED = 1 << 3,

    /**
     * Corresponds to the 
     * [ApplicationStateObserver.onProcessStateChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessstatechanged)
     *  callback, which is executed when the process state is updated.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_PROCESS_STATE_CHANGED = 1 << 4,

    /**
     * Corresponds to the 
     * [ApplicationStateObserver.onAppStarted](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronappstarted)
     *  callback, which is executed when the application's first process is created.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_APP_STARTED = 1 << 5,

    /**
     * Corresponds to the 
     * [ApplicationStateObserver.onAppStopped](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronappstopped)
     *  callback, which is executed when the application's last process is destroyed.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ON_APP_STOPPED = 1 << 6
  }

  /**
   * Describes the filter for application lifecycle change events. It can be used as a parameter of 
   * [on]{@link appManager.on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter)} to 
   * filter application lifecycle change events you want to listen for.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  export interface AppStateFilter {
    /**
     * Type of application to filter. The options are as follows:
     * 
     * - **0**: Do not listen for any application type.
     * - A bitwise OR combination of the enumerated values of [FilterBundleType](#filterbundletype21), for example, "
     * appManager.FilterBundleType.APP | appManager.FilterBundleType.ATOMIC_SERVICE" listens for lifecycle change events
     *  for both applications and atomic services.
     * - If this parameter is not set, all application types are listened for by default.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundleTypes?: int;

    /**
     * Type of application state to filter. The options are as follows:
     * 
     * - **0**: Do not listen for any application state.
     * - A bitwise OR combination of the enumerated values of [FilterAppStateType](#filterAppStateType21), for example, 
     * "appManager.FilterAppStateType.CREATE | appManager.FilterAppStateType.FOREGROUND" listens for both the creating 
     * and foreground states of applications.
     * - If this parameter is not set, all application state types are listened for by default.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    appStateTypes?: int;

    /**
     * Type of process state to filter. The options are as follows:
     * 
     * - **0**: Do not listen for any process state.
     * - A bitwise OR combination of the enumerated values of [FilterProcessStateType](#filterProcessStateType), for 
     * example, "appManager.FilterProcessStateType.CREATE | appManager.FilterProcessStateType.FOREGROUND" listens for 
     * both the creating and foreground states of processes.
     * - If this parameter is not set, all process state types are listened for by default.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    processStateTypes?: int;

    /**
     * Type of ability state to filter. The options are as follows:
     * 
     * - **0**: Do not listen for any ability state.
     * - A bitwise OR combination of the enumerated values of [FilterAbilityStateType](#filterAbilityStateType), for 
     * example, "appManager.FilterAbilityStateType.CREATE | appManager.FilterAbilityStateType.FOREGROUND" listens for 
     * both the creating and foreground states of ability components.
     * - If this parameter is not set, all ability state types are listened for by default.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    abilityStateTypes?: int;

    /**
     * Callback to filter. The options are as follows:
     * 
     * - **0**: Do not listen for any callback.
     * - A bitwise OR combination of the enumerated values of [FilterCallback](#filterCallback21), for example, "
     * appManager.FilterCallback.ON_ABILITY_STATE_CHANGED | appManager.FilterCallback.ON_PROCESS_STATE_CHANGED" listens 
     * for both
     * [ApplicationStateObserver.onAbilityStateChanged](js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronabilitystatechanged)
     * and
     * [ApplicationStateObserver.onProcessStateChanged](js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocessstatechanged)
     * .
     * - If this parameter is not set, all callbacks enumerated in [FilterCallback](#filterCallback21) are listened for 
     * by default.
     * 
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    callbacks?: int;
  }
  
  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - Type of the API to call. It is fixed at **'applicationState'**.
   * @param { ApplicationStateObserver } observer - Application state observer, which is used to listen for applications 
   *     lifecycle changes.
   * @returns { int } ID of the observer registered. You can pass this ID to 
   *     [off('applicationState')]{@link appManager.off(type: 'applicationState', observerId: int)} to unregister the 
   *     observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver): int;

  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver): int;

  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - Type of the API to call. It is fixed at **'applicationState'**.
   * @param { ApplicationStateObserver } observer - Application state observer, which is used to listen for application 
   *     lifecycle changes.
   * @param { Array<string> } bundleNameList - **bundleName** arrary of the application. A maximum of 128 bundle names can be 
   *     passed.
   * @returns { int } ID of the observer registered. You can pass this ID to 
   *     [off('applicationState')]{@link appManager.off(type: 'applicationState', observerId: int)} to unregister the 
   *     observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver, bundleNameList: Array<string>): int;

  /**
   * Register application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @param { Array<string> } bundleNameList - The list of bundleName. The max length is 128.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver, bundleNameList: Array<string>): int;

  /**
   * Registers an application state observer, which allows you to filter for specific application lifecycle changes by 
   * setting filter criteria.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - Type of the API to call. It is fixed at **'applicationState'**.
   * @param { ApplicationStateObserver } observer - Application state observer, which is used to listen for application 
   *     lifecycle changes.
   * @param { AppStateFilter } filter - Filter configuration for targeted monitoring.
   * @returns { int } ID of the observer registered. You can pass this ID to 
   *     [off('applicationState')]{@link @ohos.app.abillity.appManager.off(type: 'applicationState', observerId: int)} to unregister 
   *     the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 21 dynamic
   */
  function on(type: 'applicationState', observer: ApplicationStateObserver, filter: AppStateFilter): int;

  /**
   * Register application state observer with filter.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { ApplicationStateObserver } observer - The application state observer.
   * @param { AppStateFilter } filter - Filter configuration for targeted monitoring.
   * @returns { int } Returns the number code of the observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Failed to connect to the system service;
   *     2. The system service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onApplicationStateChange(observer: ApplicationStateObserver, filter: AppStateFilter): int;

  /**
   * Registers an observer to listen for application start or exit events. The observer can be used by a system 
   * application to observe the start or event events of all applications.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'appForegroundState' } type - Event type. It is fixed at **'appForegroundState'**.
   * @param { AppForegroundStateObserver } observer - Observer used to listen for application start or exit events.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'appForegroundState', observer: AppForegroundStateObserver): void;

  /**
   * Register app foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AppForegroundStateObserver } observer - The app foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAppForegroundStateChange(observer: AppForegroundStateObserver): void;

  /**
   * Registers an observer to listen for the complete of the first frame rendering of a given ability.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityFirstFrameState' } type - Event type. It is fixed at **'abilityFirstFrameState'**.
   * @param { AbilityFirstFrameStateObserver } observer - Observer used to listen for the complete of the first frame 
   *     rendering of the ability.
   * @param { string } [bundleName] - Bundle name of the ability to be listened for. If this parameter is left blank, the 
   *     event is listened for all applications.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  function on(type: 'abilityFirstFrameState', observer: AbilityFirstFrameStateObserver, bundleName?: string): void;

  /**
   * Register ability first frame state observe.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityFirstFrameStateObserver } observer - The ability first frame state observer.
   * @param { string } [bundleName] - The target bundle name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAbilityFirstFrameStateChange(observer: AbilityFirstFrameStateObserver, bundleName?: string): void;

  /**
   * Unregister the observer used to listen for application state changes. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - Type of the API to call. It is fixed at **'applicationState'**.
   * @param { int } observerId - ID of the observer registered, which is the listener ID returned by
   *     [on('applicationState')]{@link appManager.on(type: 'applicationState', observer:ApplicationStateObserver)}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the application state observer is
   *     deregistered, **err** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 15 dynamic
   */
  function off(type: 'applicationState', observerId: int, callback: AsyncCallback<void>): void;

  /**
   * Unregister application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { int } observerId - Indicates the number code of the observer.
   * @param { AsyncCallback<void> } callback - The callback of off.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offApplicationStateChange(observerId: int, callback: AsyncCallback<void>): void;

  /**
   * Unregister the observer used to listen for application state changes. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'applicationState' } type - Type of the API to call. It is fixed at **'applicationState'**.
   * @param { int } observerId - ID of the observer registered, which is the listener ID returned by
   *     [on('applicationState')]{@link appManager.on(type: 'applicationState', observer:ApplicationStateObserver)}.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  function off(type: 'applicationState', observerId: int): Promise<void>;

  /**
   * Unregister application state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { int } observerId - Indicates the number code of the observer.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  function offApplicationStateChange(observerId: int): Promise<void>;

  /**
   * Unregisters the observer used to listen for application statrt or exit events.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'appForegroundState' } type - Event type. It is fixed at **'appForegroundState'**.
   * @param { AppForegroundStateObserver } [observer] - Observer used to listen for application start or exit events.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'appForegroundState', observer?: AppForegroundStateObserver): void;

  /**
   * Unregister app foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AppForegroundStateObserver } observer - The app foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAppForegroundStateChange(observer?: AppForegroundStateObserver): void;

  /**
   * Deregisters the observer used to listen for the complete of the first frame rendering of a given ability.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityFirstFrameState' } type - Event type. It is fixed at **'abilityFirstFrameState'**.
   * @param { AbilityFirstFrameStateObserver } [observer] - Callback used for deregistration. If this parameter is left blank
   *     , all subscriptions to the specified event are canceled.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  function off(type: 'abilityFirstFrameState', observer?: AbilityFirstFrameStateObserver): void;

  /**
   * Unregister ability first frame state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityFirstFrameStateObserver } observer - The ability first frame state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAbilityFirstFrameStateChange(observer?: AbilityFirstFrameStateObserver): void;

  /**
   * Obtains applications that are running in the foreground. The application information is defined by 
   * [AppStateData]{@link ./application/AppStateData:AppStateData}. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AppStateData>> } callback - Callback used to return the API call result and an array 
   *     holding the application state data. You can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getForegroundApplications(callback: AsyncCallback<Array<AppStateData>>): void;

  /**
   * Obtains applications that are running in the foreground. The application information is defined by 
   * [AppStateData]{@link ./application/AppStateData:AppStateData}. This API uses a promise  to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AppStateData>> } Promise used to return an array holding the application state data.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getForegroundApplications(): Promise<Array<AppStateData>>;

  /**
   * Kills a process by bundle name and account ID. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * > 
   * > The ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission is not required when **accountId** specifies the 
   * > current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - Bundle name.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getOsAccountLocalId]{@link @ohos.account.osAcccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int): Promise<void>;

  /**
   * Kills a process by bundle name and account ID. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > The ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission is not required when **accountId** specifies the 
   * > current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - Bundle name.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { boolean } clearPageStack - Whether to clear the page stack. **true** to clear, **false** otherwise.
   * @param { int } [appIndex] - Index of an application clone.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int, clearPageStack: boolean, appIndex?: int):
    Promise<void>;

  /**
   * Kills a process by bundle name and account ID. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * > 
   * > The ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS permission is not required when **accountId** specifies the 
   * > current user.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.KILL_APP_PROCESSES
   *     or ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS and ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - Bundle name.
   * @param { int } accountId - ID of a system account. For details, see 
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<void> } callback - Callback used to return the API call result. You can perform error handling or 
   *     custom processing in this callback.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessWithAccount(bundleName: string, accountId: int, callback: AsyncCallback<void>): void;

  /**
   * Checks whether the system is undergoing a stability test. This API uses an asynchronous callback to return the 
   * result.
   * 
   * > **NOTE**
   * > 
   * > A stability test scenario refers to a specific testing environment designed to verify application reliability 
   * > under complex, extreme, or long-term operating conditions.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the API call is successful, **err** 
   *     is **undefined** and **data** is the check result for whether the system is undergoing a stability test. Otherwise, 
   *     **err** is an error object. You can perform error handling or other custom processing.<br> **true** is returned if
   *     the system is undergoing a stability test; **false** is returned otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether the system is undergoing a stability test. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > A stability test scenario refers to a specific testing environment designed to verify application reliability
   * > under complex, extreme, or long-term operating conditions.
   *
   * @returns { Promise<boolean> } Promise used to return the API call result and the result **true** or **false**. You can
   *     perform error handling or custom processing in this callback.
   * 
   *     **true** is returned if the system is undergoing a stability test; **false** is returned otherwise.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRunningInStabilityTest(): Promise<boolean>;

  /**
   * Kills a process by bundle name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string): Promise<void>;

  /**
   * Kills a process by bundle name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES
   * @param { string } bundleName - Bundle name.
   * @param { boolean } clearPageStack - Whether to clear the page stack. **true** to clear, **false** otherwise.
   * @param { int } [appIndex] - ID of an application clone. The default value is **0**. If the value is **0**, all processes 
   *     of the main application are terminated. If the value is greater than 0, all processes of the specified application 
   *     clone are terminated.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string, clearPageStack: boolean, appIndex?: int): Promise<void>;

  /**
   * Kills a process by bundle name. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 9 - 13]
   * @permission ohos.permission.KILL_APP_PROCESSES or ohos.permission.CLEAN_BACKGROUND_PROCESSES [since 14]
   * @param { string } bundleName - bundle name.
   * @param { AsyncCallback<void> } callback - Callback used to return the API call result. You can perform error 
   *     handling or custom processing in this callback.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function killProcessesByBundleName(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Clears application data by bundle name. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<void> } Promise used to return the API call result. You can perform error handling or custom 
   *     processing in this callback.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearUpApplicationData(bundleName: string): Promise<void>;

  /**
   * Clears application data by bundle name. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<void> } callback - Callback used to return the API call result. You can perform error handling or
   *     custom processing in this callback.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function clearUpApplicationData(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Checks whether the current device is a RAM-constrained device (a device with severely limited memory resources).
   * This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the API call result and the result indicating whether the device is
   *     RAM-constrained. You can perform error handling or custom processing in this callback.
   *     **true** is returned if the device is RAM-constrained; **false** is returned otherwise.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRamConstrainedDevice(): Promise<boolean>;

  /**
   * Checks whether the current device is a RAM-constrained device (a device with severely limited memory resources).
   * This API uses an asynchronous callback to return the result.
   * 
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the API call is successful, **err**
   *     **is** undefined and data is the check result for whether the device is RAM-constrained. Otherwise, **err** is
   *     an error object. You can perform error handling or other custom processing.<br>**true** is returned if the device is
   *     RAM-constrained; false is returned otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the maximum memory (RAM allocation) available to the current application. This API uses a promise to return
   *  the result.
   *
   * @returns { Promise<int> } Promise used to return the maximum memory (RAM allocation) size, in MB. You can perform error
   *     processing or other custom processing based on the size.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAppMemorySize(): Promise<int>;

  /**
   * Obtains the maximum memory (RAM allocation) available to the current application. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the API call is successful, **err** is
   *      **undefined** and **data** is the maximum memory (RAM allocation) available to the current application. Otherwise,
   *      **err** is an error object. You can perform error handling or other custom processing based on the return value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAppMemorySize(callback: AsyncCallback<int>): void;

  /**
   * Obtains information about the running processes of the current application. This API uses a promise to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - In versions earlier than API version 11, this API requires the ohos.permission.GET_RUNNING_INFO permission,
   * > which is available only for system applications.
   * >
   * > - Starting from API version 11, this API is used only to obtain the process information of the caller. No
   * > permission is required.
   *
   * @permission ohos.permission.GET_RUNNING_INFO [since 9 - 10]
   * @returns { Promise<Array<ProcessInformation>> } Promise used to return the API call result and the process running
   *     information. You can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getRunningProcessInformation(): Promise<Array<ProcessInformation>>;

  /**
   * Obtains the information about the running process based on the bundle type. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { bundleManager.BundleType } bundleType - the bundle type of the process
   * @returns { Promise<Array<ProcessInformation>> } Promise used to return the process information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getRunningProcessInformationByBundleType(
    bundleType: bundleManager.BundleType): Promise<Array<ProcessInformation>>;

  /**
   * Obtains information about the running processes of the current application. This API uses an asynchronous callback 
   * to return the result.
   * 
   * > **NOTE**
   * >
   * > - In versions earlier than API version 11, this API requires the ohos.permission.GET_RUNNING_INFO permission,
   * >  which is available only for system applications.
   * >
   * > - Starting from API version 11, this API is used only to obtain the process information of the caller. No
   * > permission is required.
   *
   * @permission ohos.permission.GET_RUNNING_INFO [since 9 - 10]
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - Callback used to return the result. If the API call is
   *     successful, **err** is undefined and **data** is the information about the running processes. Otherwise, **err**
   *     is an error object. You can perform error handling or other custom processing.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Checks whether the shared library is in use. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Bundle name of the shared library.
   * @param { long } versionCode - Version number of the shared library.
   * @returns { Promise<boolean> } Promise used to return the result. **true** if the shared library is in use, **false** 
   *     otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isSharedBundleRunning(bundleName: string, versionCode: long): Promise<boolean>;

  /**
   * Checks whether the shared library is in use. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Bundle name of the shared library.
   * @param { long } versionCode - Version number of the shared library.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. **true** if the shared library is in 
   *     use, **false** otherwise.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function isSharedBundleRunning(bundleName: string, versionCode: long, callback: AsyncCallback<boolean>): void;

  /**
   * Obtains the memory size of a process. This API uses a promise to return the result.
   *
   * @param { int } pid - Process ID. For details, see 
   *     [getRunningProcessInfoByBundleName]{@link appManager.getRunningProcessInfoByBundleName(bundleName: string, callback: AsyncCallback<Array<ProcessInformation>>)}
   *     .
   * @returns { Promise<int> } Promise used to return the API call result and the memory size (in KB). You can perform error 
   *     handling or custom processing in this callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getProcessMemoryByPid(pid: int): Promise<int>;

  /**
   * Obtains the memory size of a process. This API uses an asynchronous callback to return the result.
   *
   * @param { int } pid - Process ID. For details, see 
   *     [getRunningProcessInfoByBundleName]{@link appManager.getRunningProcessInfoByBundleName(bundleName: string, callback: AsyncCallback<Array<ProcessInformation>>)}
   *     .
   * @param { AsyncCallback<int> } callback - Callback used to return the API call result and the memory size (in KB). You 
   *     can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getProcessMemoryByPid(pid: int, callback: AsyncCallback<int>): void;

  /**
   * Obtains information about the running processes by bundle name. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - Callback used to return the API call result and the 
   *     process running information. You can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Obtains information about the running processes by bundle name and user ID. This API uses an asynchronous callback 
   * to return the result.
   *
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID.
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - Callback used to return the API call result and the 
   *     process running information. You can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, userId: int, callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Obtains information about the running processes by bundle name. This API uses a promise to return the result.
   *
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<Array<ProcessInformation>> } Promise used to return the API call result and the process running 
   *     information. You can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string): Promise<Array<ProcessInformation>>;

  /**
   * Obtains information about the running processes by bundle name and user ID. This API uses a promise to return the 
   * result.
   *
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID.
   * @returns { Promise<Array<ProcessInformation>> } Promise used to return the API call result and the process running 
   *     information. You can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningProcessInfoByBundleName(bundleName: string, userId: int): Promise<Array<ProcessInformation>>;

  /**
   * Checks whether the application with the specified bundle name is running across all users. This API uses a promise 
   * to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<boolean> } Promise used to return the result. **true** is returned if at least one user is running 
   *     the specified application. **false** is returned if none of the users are running the application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function isApplicationRunning(bundleName: string): Promise<boolean>;

  /**
   * Checks whether the application with the specified bundle name is running across all users. This API uses an 
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. **true** is returned if at least one 
   *     user is running the specified application. **false** is returned if none of the users are running the application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function isApplicationRunning(bundleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * Preloads an application process. A successful call does not always mean that the preloading is successful. In other
   *  words, the target application process may not be created even if the API is successfully called. This API uses a 
   * promise to return the result.
   *
   * @permission ohos.permission.PRELOAD_APPLICATION
   * @param { string } bundleName - Bundle name of the application to preload.
   * @param { int } userId - User ID.
   * @param { PreloadMode } mode - Mode used for preloading.
   * @param { int } [appIndex] - Application index of the twin application to be preloaded.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16300005 - The target bundle does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function preloadApplication(bundleName: string, userId: int, mode: PreloadMode, appIndex?: int): Promise<void>;

  /**
   * Obtains the information about running applications in multi-app mode. The multi-app mode means that an application 
   * can be simultaneously logged in with different accounts on the same device. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<RunningMultiAppInfo> } Promise used to return the information about running applications with multi-
   *     app mode.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000072 - App clone or multi-instance is not supported.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function getRunningMultiAppInfo(bundleName: string): Promise<RunningMultiAppInfo>;

  /**
   * Checks whether the application with the specified bundle name and application clone index is running across all 
   * users. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > If the application is not installed for the current user, error code 16000073 is returned. If the application is 
   * > installed for the current user, the system checks whether the application is running across all users.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Bundle name.
   * @param { int } [appCloneIndex] - Index of an application clone. The value ranges from 0 to 1000. The value **0** means 
   *     the main application, and a value greater than 0 means a specific application clone.
   * @returns { Promise<boolean> } Promise used to return the result. **true** is returned if at least one user is running 
   *     the specified application. **false** is returned if none of the users are running the application.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function isAppRunning(bundleName: string, appCloneIndex?: int): Promise<boolean>;

  /**
   * Clears data of a specified application based on the bundle name and application clone index. This API uses a 
   * promise to return the result.
   *
   * @permission ohos.permission.CLEAN_APPLICATION_DATA
   * @param { string } bundleName - Bundle name.
   * @param { int } [appCloneIndex] - Index of the application clone.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000073 - The app clone index is invalid.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function clearUpAppData(bundleName: string, appCloneIndex?: int): Promise<void>;

  /**
   * Terminates a mission. This API uses a promise to return the result.
   *
   * @permission ohos.permission.KILL_APP_PROCESSES
   * @param { int } missionId - Mission ID, which can be obtained by calling 
   *     [getMissionInfos]{@link @ohos.app.ability.missionManager:missionManager.getMissionInfos(deviceId: string, numMax: int, callback: AsyncCallback<Array<MissionInfo>>)}
   *     .
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  function terminateMission(missionId: int): Promise<void>;

  /**
   * Obtains the PIDs of processes that support quick startup after caching in a specified application. This API uses a 
   * promise to return the result.
   * 
   * > **NOTE**
   * >
   * > This API can only be used to obtain the PIDs of the system account to which the caller belongs.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<Array<int>> } Promise used to return an array containing the PIDs.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  function getSupportedProcessCachePids(bundleName : string): Promise<Array<int>>;

  /**
   * Sets or cancels the keep-alive status for an application that belongs to a specified user. This API uses a promise 
   * to return the result.
   * Starting from API version 18, this API can be properly called only on 2-in-1 devices and wearables. For versions 
   * earlier than API version 18, this API can be properly called only on 2-in-1 devices. If it is called on other 
   * device types, error code 801 is returned.
   * 
   * > **NOTE**
   * >
   * > - To support keep-alive, **mainElement** in the 
   * > [module.json5](docroot://quick-start/module-configuration-file.md) file of the application must be a UIAbility. 
   * > The system initiates the keep-alive operation only when this mainElement has been launched.
   * >
   * > - On 2-in-1 devices, the application must appear in the status bar within 5 seconds of launch. Otherwise, the 
   * > system revokes the application's keep-alive status and terminate the restarted process.
   * >
   * > - When the kept-alive application process exits, the system attempts to restart it. If three consecutive restart 
   * > attempts fail, the system stops restarting the process.
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { string } bundleName - Bundle name.
   * @param { int } userId - User ID.
   * @param { boolean } enable - Whether to keep the application alive or cancel its keep-alive status. **true** to keep the 
   *     application alive, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16300005 - The target bundle does not exist.
   * @throws { BusinessError } 16300008 - The target bundle has no MainAbility.
   * @throws { BusinessError } 16300009 - The target bundle has no status-bar ability.
   * @throws { BusinessError } 16300010 - The target application is not attached to the status bar.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function setKeepAliveForBundle(bundleName: string, userId: int, enable: boolean): Promise<void>;

  /**
   * Obtains information about a specified type of keep-alive application of a user. The application information is 
   * defined by [KeepAliveBundleInfo]{@link appManager.KeepAliveBundleInfo}. This API uses a promise to return the 
   * result.
   * This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is 
   * returned.
   * **Required permissions**: ohos.permission.MANAGE_APP_KEEP_ALIVE
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { KeepAliveAppType } type - Type of the application.
   * @param { int } [userId] - User ID.
   * @returns { Promise<Array<KeepAliveBundleInfo>> } Promise used to return the array of keep-alive application information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function getKeepAliveBundles(type: KeepAliveAppType, userId?: int): Promise<Array<KeepAliveBundleInfo>>;

  /**
   * Sets or cancels the keep-alive status for an AppServiceExtensionAbility. This API uses a promise to return the 
   * result.
   * This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is 
   * returned.
   * 
   * > **NOTE**
   * >
   * > - This API takes effect only when the application is installed under the user with **userId** of 1 and the 
   * > **mainElement** field in the **module.json5** file of the entry HAP is set to **AppServiceExtensionAbility**.
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @param { string } bundleName - Bundle name.
   * @param { boolean } enabled - Whether to keep the application alive or cancel its keep-alive status. **true** to keep, 
   *     **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000081 - Failed to obtain the target application information.
   * @throws { BusinessError } 16000202 - Invalid main element type.
   * @throws { BusinessError } 16000203 - Cannot change the keep-alive status.
   * @throws { BusinessError } 16000204 - The target bundle is not in u1.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setKeepAliveForAppServiceExtension(bundleName: string, enabled: boolean): Promise<void>;

  /**
   * Obtains information about all AppServiceExtensionAbility components that are kept alive. The information is defined
   *  by [KeepAliveBundleInfo]{@link appManager.KeepAliveBundleInfo}. This API uses a promise to return the result.
   * This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is 
   * returned.
   * **Required permissions**: ohos.permission.MANAGE_APP_KEEP_ALIVE
   *
   * @permission ohos.permission.MANAGE_APP_KEEP_ALIVE
   * @returns { Promise<Array<KeepAliveBundleInfo>> } Promise used to return the array of keep-alive application information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getKeepAliveAppServiceExtensions(): Promise<Array<KeepAliveBundleInfo>>;

  /**
   * Kills processes in batches. This API uses a promise to return the result.
   * This API can be properly called on PCs/2-in-1 devices. If it is called on other devices, error code 801 is 
   * returned.
   * **Required permissions**: ohos.permission.KILL_APP_PROCESSES
   *
   * @permission ohos.permission.KILL_APP_PROCESSES
   * @param { Array<int> } pids - Array of process IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function killProcessesInBatch(pids: Array<int>): Promise<void>;

  /**
   * Defines the ability state data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AbilityStateData = _AbilityStateData.default;

  /**
   * Defines the ability state data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AbilityStateData = _AbilityStateData;

  /**
   * Defines the application state data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AppStateData = _AppStateData.default;

  /**
   * Defines the application state data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AppStateData = _AppStateData;

  /**
   * Defines the observer used to listen for application state changes.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type ApplicationStateObserver = _ApplicationStateObserver.default;

  /**
   * Defines the observer used to listen for application state changes.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type ApplicationStateObserver = _ApplicationStateObserver;

  /**
   * Defines the listener for the state of application launch and exit.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  export type AppForegroundStateObserver = _AppForegroundStateObserver.default;

  /**
   * Defines the listener for the state of application launch and exit.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AppForegroundStateObserver = _AppForegroundStateObserver;

  /**
   * Defines the process information.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export type ProcessInformation = _ProcessInformation;

  /**
   * Defines the process data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type ProcessData = _ProcessData.default;

  /**
   * Defines the process data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type ProcessData = _ProcessData;

  /**
   * Defines the listener for the completion of the first frame rendering of the UIAbility.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  export type AbilityFirstFrameStateObserver = _AbilityFirstFrameStateObserver.default;

  /**
   * Defines the listener for the completion of the first frame rendering of the UIAbility.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityFirstFrameStateObserver = _AbilityFirstFrameStateObserver;

  /**
   * Defines the data structure reported when the first frame rendering of the UIAbility is complete.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   */
  export type AbilityFirstFrameStateData = _AbilityFirstFrameStateData.default;

  /**
   * Defines the data structure reported when the first frame rendering of the UIAbility is complete.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityFirstFrameStateData = _AbilityFirstFrameStateData;

  /**
   * Defines the information of an application in multi-app mode in the running state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  export type RunningMultiAppInfo = _RunningMultiAppInfo;
}

export default appManager;