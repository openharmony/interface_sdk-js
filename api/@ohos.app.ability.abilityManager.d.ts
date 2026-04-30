/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import { ElementName } from './bundleManager/ElementName';
import { AbilityRunningInfo as _AbilityRunningInfo } from './application/AbilityRunningInfo';
import { ExtensionRunningInfo as _ExtensionRunningInfo } from './application/ExtensionRunningInfo';
import { Configuration } from './@ohos.app.ability.Configuration';
import Context from './application/Context';
import Want from './@ohos.app.ability.Want';
import { AbilityResult } from './ability/abilityResult';
/*** if arkts dynamic */
import * as _AbilityForegroundStateObserver from './application/AbilityForegroundStateObserver';
import * as _AbilityStateData from './application/AbilityStateData';
/*** endif */
/*** if arkts static */
import _AbilityForegroundStateObserver from './application/AbilityForegroundStateObserver';
import _AbilityStateData from './application/AbilityStateData';
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * The AbilityManager module provides APIs for obtaining, adding, and updating ability information and running status
 * information.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @atomicservice [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace abilityManager {
  /**
   * Enumerates the ability states. This enum can be used together with
   * [AbilityRunningInfo]{@link ./application/AbilityRunningInfo:AbilityRunningInfo} to return the ability state.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  export enum AbilityState {
    /**
     * The ability is in the initial state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    INITIAL = 0,

    /**
     * The ability has the focus.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    FOCUS = 2,

    /**
     * The ability is in the foreground state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    FOREGROUND = 9,

    /**
     * The ability is in the background state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    BACKGROUND = 10,

    /**
     * The ability is in the state of being switched to the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    FOREGROUNDING = 11,

    /**
     * The ability is in the state of being switched to the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 14 dynamic
     * @since 23 static
     */
    BACKGROUNDING = 12
  }

  /**
   * Enumerates the assertion result for different user operations.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum UserStatus {
    /**
     * Assertion result of the terminate operation.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ASSERT_TERMINATE = 0,

    /**
     * Assertion result of the continue operation.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ASSERT_CONTINUE = 1,

    /**
     * Assertion result of the retry operation.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ASSERT_RETRY = 2
  }

  /**
   * Describes the rule for launching an embedded atomic service.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  export interface AtomicServiceStartupRule {
    /**
     * Whether launching the atomic service is allowed. **true** if allowed, **false** otherwise.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    isOpenAllowed: boolean;

    /**
     * Whether launching the embedded atomic service is allowed. **true** if allowed, **false** otherwise.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    isEmbeddedAllowed: boolean;
  }

  /**
   * Registers an observer to listen for ability start or exit events.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityForegroundState' } type - Event type. It is fixed at **'abilityForegroundState'**.
   * @param { AbilityForegroundStateObserver } observer - Observer used to listen for ability start or exit events.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'abilityForegroundState', observer: AbilityForegroundStateObserver): void;

  /**
   * Register Ability foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityForegroundStateObserver } observer - The ability foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function onAbilityForegroundState(observer: AbilityForegroundStateObserver): void;

  /**
   * Unregisters the observer used to listen for ability start or exit events.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { 'abilityForegroundState' } type - Event type. It is fixed at **'abilityForegroundState'**.
   * @param { AbilityForegroundStateObserver } [observer] - Observer used to listen for ability start or exit events. If this
   *     parameter is not set, all observers associated with the specified event are deregistered. If this parameter is set,
   *     only the specified observer is deregistered.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'abilityForegroundState', observer?: AbilityForegroundStateObserver): void;

  /**
   * Unregister Ability foreground or background state observer.
   *
   * @permission ohos.permission.RUNNING_STATE_OBSERVER
   * @param { AbilityForegroundStateObserver } [observer] - The ability foreground state observer.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  function offAbilityForegroundState(observer?: AbilityForegroundStateObserver): void;

  /**
   * Updates the configuration. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - New configuration. You only need to configure the items to be updated.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object. You can perform error handling or other custom processing.
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
  function updateConfiguration(config: Configuration, callback: AsyncCallback<void>): void;

  /**
   * Updates the configuration. This API uses a promise to return the result.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - New configuration. You only need to configure the items to be updated.
   * @returns { Promise<void> } Promise that returns no value. You can perform error handling or other custom processing.
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
  function updateConfiguration(config: Configuration): Promise<void>;

  /**
   * Obtains the UIAbility running information. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > If the application has requested the ohos.permission.GET_RUNNING_INFO permission, it can obtain the UIAbility
   * > running information of all applications; otherwise, it can obtain the UIAbility running information of the
   * > current application.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AbilityRunningInfo>> } Promise used to return the UIAbility running information. You can
   *     perform error handling or other custom processing.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>;

  /**
   * Obtains the UIAbility running information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AbilityRunningInfo>> } callback - Callback used to return the result. If the API call is
   *     successful, **err** is **undefined** and **data** is the UIAbility running information obtained. Otherwise, **err**
   *     is an error object. You can perform error handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void;

  /**
   * Obtains the ExtensionAbility running information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { int } upperLimit - Maximum number of messages that can be obtained. The maximum value is 2<sup>31</sup>-1.
   * @returns { Promise<Array<ExtensionRunningInfo>> } Promise used to return the API call result and the ExtensionAbility
   *     running information. You can perform error handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getExtensionRunningInfos(upperLimit: int): Promise<Array<ExtensionRunningInfo>>;

  /**
   * Obtains the ExtensionAbility running information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { int } upperLimit - Maximum number of messages that can be obtained. The maximum value is 2<sup>31</sup>-1.
   * @param { AsyncCallback<Array<ExtensionRunningInfo>> } callback - Callback used to return the result. If the API call is
   *     successful, **err** is **undefined** and **data** is the ExtensionAbility running information obtained. Otherwise,
   *     **err** is an error object. You can perform error handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getExtensionRunningInfos(upperLimit: int, callback: AsyncCallback<Array<ExtensionRunningInfo>>): void;

  /**
   * Obtains the top ability, which is the ability that has the window focus. This API uses a promise to return the
   * result.
   *
   * @returns { Promise<ElementName> } Promise used to return the API call result and the element name. You can perform error
   *     handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getTopAbility(): Promise<ElementName>;

  /**
   * Obtains the top ability, which is the ability that has the window focus. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { AsyncCallback<ElementName> } callback - Callback used to return the result. If the API call is successful,
   *     **err** is **undefined** and **data** is the top ability name obtained. Otherwise, **err** is an error object. You
   *     can perform error handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getTopAbility(callback: AsyncCallback<ElementName>): void;

  /**
   * Called by a system dialog box to obtain shared data, which is set by the target UIAbility through
   * [onShare]{@link @ohos.app.ability.UIAbility:UIAbility.onShare(wantParam: Record<string, Object>)}. This API uses an
   *  asynchronous callback to return the result.
   *
   * @param { int } missionId - Mission ID on the target application. The maximum value is 2<sup>31</sup>-1.
   * @param { AsyncCallback<Record<string, Object>> } callback - Callback used to return the result. If the API call is
   *     successful, **err** is **undefined** and **data** is the shared data obtained. Otherwise, **err** is an error
   *     object. You can perform error handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   */
  function acquireShareData(missionId: int, callback: AsyncCallback<Record<string, Object>>): void;

  /**
   * Acquire the shared data from target ability.
   *
   * @param { int } missionId - The missionId of target ability.
   * @param { AsyncCallback<Record<string, RecordData>> } callback - The callback is used to return the params of sharing
   *     data and result code.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system service failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @FaAndStageModel
   * @since 23 static
   */
  function acquireShareData(missionId: int, callback: AsyncCallback<Record<string, RecordData>>): void;

  /**
   * Called by a system dialog box to obtain shared data, which is set by the target UIAbility through
   * [onShare]{@link @ohos.app.ability.UIAbility:UIAbility.onShare(wantParam: Record<string, Object>)}. This API uses a
   * promise to return the result.
   *
   * @param { int } missionId - Mission ID on the target application. The maximum value is 2<sup>31</sup>-1.
   * @returns { Promise<{ [key: string]: Object }> } The promise returned by the function. [since 10 - 10]
   * @returns { Promise<Record<string, Object>> } Promise used to return the API call result and the shared data. You can
   *     perform error handling or other custom processing.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 10 dynamic
   */
  function acquireShareData(missionId: int): Promise<Record<string, Object>>;

  /**
   * Acquire the shared data from target ability.
   *
   * @param { int } missionId - The missionId of target ability.
   * @returns { Promise<Record<string, RecordData>> } The promise returned by the function.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Connect to system server failed.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @FaAndStageModel
   * @since 23 static
   */
  function acquireShareData(missionId: int): Promise<Record<string, RecordData>>;

  /**
   * Used by the [Data Loss Prevention (DLP)]{@link @ohos.dlpPermission:dlpPermission} management application to notify
   * a sandbox application of the data saving result. This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityResult } parameter - Information returned to the caller.
   * @param { int } requestCode - Request code passed in by the DLP management application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the API call is successful, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  function notifySaveAsResult(parameter: AbilityResult, requestCode: int, callback: AsyncCallback<void>): void;

  /**
   * Used by the [Data Loss Prevention (DLP)]{@link @ohos.dlpPermission:dlpPermission} management application to notify
   * a sandbox application of the data saving result. This API uses a promise to return the result.
   *
   * @param { AbilityResult } parameter - Information returned to the caller.
   * @param { int } requestCode - Request code passed in by the DLP management application.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   * @deprecated since 24
   */
  function notifySaveAsResult(parameter: AbilityResult, requestCode: int): Promise<void>;

  /**
   * Obtains the information about the UIAbility components of an application that is running in the foreground. This
   * API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AbilityStateData>> } callback - Callback used to return the API call result and the
   *     UIAbility information. You can perform error handling or custom processing in it.
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
  function getForegroundUIAbilities(callback: AsyncCallback<Array<AbilityStateData>>): void;

  /**
   * Obtains the information about the UIAbility components of an application that is running in the foreground. This
   * API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AbilityStateData>> } Promise used to return the API call result and the UIAbility information.
   *     You can perform error handling or custom processing in it.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getForegroundUIAbilities(): Promise<Array<AbilityStateData>>;

  /**
   * Checks whether the [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility} can be
   * started in embedded mode. This API uses a promise to return the result.
   *
   * @param { Context } context - Context of the caller.
   * @param { string } appId - Unique ID of the application, which is allocated by the cloud.
   * @returns { Promise<boolean> } Promise used to return the result. **true** if embedded startup is allowed, **false**
   *     otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function isEmbeddedOpenAllowed(context: Context, appId: string): Promise<boolean>;

  /**
   * Notifies the application of the assertion result. This API uses a promise to return the result.
   *
   * @permission ohos.permission.NOTIFY_DEBUG_ASSERT_RESULT
   * @param { string } sessionId - Session ID of the AssertFault.
   * @param { UserStatus } status - Assertion result of the user operation.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function notifyDebugAssertResult(sessionId: string, status: UserStatus): Promise<void>;

  /**
   * Enables or disables the resident process of an application.
   *
   * @param { string } bundleName - Bundle name of the resident process.
   * @param { boolean } enable - Whether to enable or disable the resident process. **true** to enable, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible cause: 1.Non empty package name needs to be provided;
   *     2.The second parameter needs to provide a Boolean type setting value.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16200006 - The caller application can only set the resident status of the configured process.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setResidentProcessEnabled(bundleName: string, enable: boolean): Promise<void>;

  /**
   * Obtains the rule for launching an
   * [EmbeddableUIAbility]{@link @ohos.app.ability.EmbeddableUIAbility:EmbeddableUIAbility} in embedded mode. This API
   * uses a promise to return the result.
   * This API can be properly called only on phones and tablets. On other devices, it returns the error code 801.
   *
   * @param { Context } context - Context of the caller.<br>Note: Currently, only
   *     [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext} is supported.
   * @param { string } appId - Unique ID of the application, which is allocated by the cloud.
   * @returns { Promise<AtomicServiceStartupRule> } Promise used to return the rule for launching the embedded atomic
   *     service.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 18 dynamic
   * @since 23 static
   */
  function queryAtomicServiceStartupRule(context: Context, appId: string): Promise<AtomicServiceStartupRule>;

  /**
   * Restarts the current atomic service.
   *
   * > **NOTE**
   * >
   * > - Currently, atomic services can be started only in an independent window.
   * >
   * > - If you call this API,
   * > [ApplicationContext.restartApp()]{@link ./application/ApplicationContext:ApplicationContext/restartApp}, or
   * > [UIAbilityContext.restartApp()]{@link ./application/UIAbilityContext:UIAbilityContext.restartApp} within 3 seconds
   * > after a successful call to this API, the system returns error code 16000064.
   *
   * @param { Context } context - Context of the ability.<br>Note: Currently, only
   *     [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext} is supported.<br>
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000064 - Restart too frequently. Try again at least 3s later.
   * @throws { BusinessError } 16000086 - The context is not UIAbilityContext.
   * @throws { BusinessError } 16000090 - The caller is not an atomic service.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamiconly
   */
  function restartSelfAtomicService(context: Context): void;

  /**
   * Preloads a [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance and returns
   *  the instance ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { Want } want - Want information about the target ability.
   * @returns { Promise<int> } Promise used to return the ID of the preloaded
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance for further
   *     clearing or management.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1.Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   *     4.Preload UIExtensionAbility timeout.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function preloadUIExtensionAbility(want: Want): Promise<int>;

  /**
   * Clears a [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance. This API
   * uses a promise to return the result.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { int } preloadId - ID of a preloaded
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000003 - The specified ID does not exist. Possible causes:
   *     1.The specified ID is incorrect; 2.The preloaded UIExtensionAbility has been loaded;
   *     3.The preloaded UIExtensionAbility has been destroyed;
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function clearPreloadedUIExtensionAbility(preloadId: int): Promise<void>;

  /**
   * Clears all preloaded [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instances
   * in the current process. This API uses a promise to return the result.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: 1. Connect to system service failed;
   *     2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function clearPreloadedUIExtensionAbilities(): Promise<void>;

  /**
   * Subscribes to loaded events of a preloaded
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance in the current
   * process.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityLoadedFn } callback - Callback used to receive the ID of the preloaded
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance that is loaded.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onPreloadedUIExtensionAbilityLoaded(callback: PreloadedUIExtensionAbilityLoadedFn): void;

  /**
   * Unsubscribes from loaded events of a preloaded
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance in the current
   * process.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityLoadedFn } [callback] - Callback used for unsubscription. If this parameter
   *     is not specified, all callbacks associated with the specified event in the process will be unregistered.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offPreloadedUIExtensionAbilityLoaded(callback?: PreloadedUIExtensionAbilityLoadedFn): void;

  /**
   * Subscribes to destroyed events of a preloaded
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance in the current
   * process.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityDestroyedFn } callback - Callback used to receive the ID of the preloaded
   *     [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance that is destroyed.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onPreloadedUIExtensionAbilityDestroyed(callback: PreloadedUIExtensionAbilityDestroyedFn): void;

  /**
   * Unsubscribes from loaded events of a preloaded
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance in the current
   * process.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { PreloadedUIExtensionAbilityDestroyedFn } [callback] - Callback used for unsubscription. If this parameter is
   *     not specified, all callbacks associated with the specified event in the process will be unregistered.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offPreloadedUIExtensionAbilityDestroyed(callback?: PreloadedUIExtensionAbilityDestroyedFn): void;

  /**
   * Indicates whether the current device supports EmbeddedUIExtensionAbility.
   *
   * @returns { boolean } Returns {@code true} if EmbeddedUIExtensionAbility is supported,
   *     returns {@code false} otherwise.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isEmbeddedUIExtensionSupported(): boolean;

  /**
   * Defines the level-2 module AbilityRunningInfo.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  export type AbilityRunningInfo = _AbilityRunningInfo;

  /**
   * Defines the level-2 module AbilityStateData.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   */
  export type AbilityStateData = _AbilityStateData.default;

  /**
   * The ability state data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  export type AbilityStateData = _AbilityStateData;

  /**
   * Defines the level-2 module ExtensionRunningInfo.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type ExtensionRunningInfo = _ExtensionRunningInfo;

  /**
   * Defines the level-2 module AbilityForegroundStateObserver.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  export type AbilityForegroundStateObserver = _AbilityForegroundStateObserver.default;

  /**
   * The ability foreground state observer.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 23 static
   */
  export type AbilityForegroundStateObserver = _AbilityForegroundStateObserver;

  /**
   * Defines the callback function when the preloaded
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance is destroyed.
   *
   * @param { int } preloadId - The preload UIExtensionAbility ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type PreloadedUIExtensionAbilityDestroyedFn = (preloadId: int) => void;

  /**
   * Defines the callback function when the preloaded
   * [UIExtensionAbility]{@link @ohos.app.ability.UIExtensionAbility:UIExtensionAbility} instance is loaded.
   *
   * @param { int } preloadId - The preload UIExtensionAbility ID.
   * @syscap SystemCapability.Ability.AbilityRuntime.AbilityCore
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export type PreloadedUIExtensionAbilityLoadedFn = (preloadId: int) => void;
}

export default abilityManager;