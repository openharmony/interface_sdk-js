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

/**
 * @file
 * @kit AbilityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';
import type { MultiAppMode } from './bundleManager/ApplicationInfo';
/*** if arkts static */
import { RecordData } from './@ohos.base';
/*** endif */

/**
 * The dialogSession module provides APIs related to the dialog box.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @stagemodelonly
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace dialogSession {

  /**
   * Provides DialogAbility information, including the bundle name, module name, and ability name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DialogAbilityInfo {

    /**
     * Bundle name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Module name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    moduleName: string;

    /**
     * Ability name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityName: string;

    /**
     * ID of the ability icon.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityIconId: int;

    /**
     * ID of the ability label.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    abilityLabelId: int;

    /**
     * ID of the bundle icon.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleIconId: int;

    /**
     * ID of the bundle label.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    bundleLabelId: int;

    /**
     * Whether the ability is visible. **true** if visible, **false** otherwise.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    visible: boolean;

    /**
     * Index of the application clone.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    appIndex: int;

    /**
     * Multi-app mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    multiAppMode: MultiAppMode;

    /**
     * Installation directory of the application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    codePath?: string;

    /**
     * Installation source of the application. The options are as follows:
     * 
     * - **pre-installed**: pre-installed application installed during the first boot.
     * - **ota**: pre-installed application added during system upgrade.
     * - **recovery**: pre-installed application manually restored by the user after uninstallation.
     * - **bundleName**: installation by the application corresponding to this bundle name. **bundleName** represents a 
     * variable, subject to the actual value.
     * - **unknown**: unknown application installation source.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    installSource?: string;
  }

  /**
   * Provides session information, including the requester information, target ability information list, and other 
   * parameters.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  export interface DialogSessionInfo {

    /**
     * Ability information of the requester.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    callerAbilityInfo: DialogAbilityInfo;

    /**
     * List of target ability information.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     * @since 23 static
     */
    targetAbilityInfos: Array<DialogAbilityInfo>;

    /**
     * Other parameters.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 11 dynamic
     */
    parameters?: Record<string, Object>;

    /**
     * Other parameters.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    parameters?: Record<string, RecordData>;
  }

  /**
   * Obtains the session information based on the session ID.
   *
   * @param { string } dialogSessionId - Session ID.
   * @returns { DialogSessionInfo } Session information.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   */
  function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo;

  /**
   * Query the session info of dialog.
   *
   * @param { string } dialogSessionId - Query information by dialog session id.
   * @returns { DialogSessionInfo | null } Returns the session info when the target DialogSessionInfo of
   *     dialogSessionId exists. Returns null if the target DialogSessionInfo of dialogSessionId not exist.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function getDialogSessionInfo(dialogSessionId: string): DialogSessionInfo | null;

  /**
   * Sends a request for a dialog box. This API uses a promise to return the result.
   *
   * @param { string } dialogSessionId - Session ID.
   * @param { Want } targetWant - Target of the request.
   * @param { boolean } isAllowed - Whether the target ability can be started. **true** if allowed, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean): Promise<void>;

  /**
   * Sends a request for a dialog box. This API uses an asynchronous callback to return the result.
   *
   * @param { string } dialogSessionId - Session ID.
   * @param { Want } targetWant - Target of the request.
   * @param { boolean } isAllowed - Whether the target ability can be started. **true** if allowed, **false** otherwise.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function sendDialogResult(dialogSessionId: string, targetWant: Want, isAllowed: boolean, callback: AsyncCallback<void>): void;
}

export default dialogSession;