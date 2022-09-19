/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AsyncCallback } from './basic';
import { ApplicationInfo } from './bundle/applicationInfo';
import { ProcessInfo } from './app/processInfo';
import { ElementName } from './bundle/elementName';
import BaseContext from './application/BaseContext';
import { HapModuleInfo } from './bundle/hapModuleInfo';
import { AppVersionInfo } from './app/appVersionInfo';
import { AbilityInfo } from './bundle/abilityInfo';
import bundle from './@ohos.bundle';

/**
 * The context of an ability or an application.  It allows access to
 * application-specific resources, request and verification permissions.
 * Can only be obtained through the ability.
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly
 * @since 9
 */
export interface Context extends BaseContext {
    /**
     * Get the local root dir of an app. If it is the first call, the dir
     * will be created.
     * @note If in the context of the ability, return the root dir of
     * the ability; if in the context of the application, return the
     * root dir of the application.
     * @returns { Promise<string> } Returns the root dir.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getOrCreateLocalDir(): Promise<string>;

    /**
     * Get the local root dir of an app. If it is the first call, the dir
     * will be created.
     * @note If in the context of the ability, return the root dir of
     * the ability; if in the context of the application, return the
     * root dir of the application.
     * @param { AsyncCallback<string> } callback - The callback is used to return the root dir.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getOrCreateLocalDir(callback: AsyncCallback<string>): void;

    /**
     * Verify whether the specified permission is allowed for a particular
     * pid and uid running in the system.
     * @note Pid and uid are optional. If you do not pass in pid and uid, it will check your own permission.
     * @param { string } permission - The name of the specified permission.
     * @param { PermissionOptions } options - Indicates the permission options.
     * @returns { Promise<number> } Returns {@code 0} if the PID and UID have the permission.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    verifyPermission(permission: string, options?: PermissionOptions): Promise<number>;

    /**
     * Verify whether the specified permission is allowed for a particular
     * pid and uid running in the system.
     * @note Pid and uid are optional. If you do not pass in pid and uid, it will check your own permission.
     * @param { string } permission - The name of the specified permission.
     * @param { PermissionOptions } options - Indicates the permission options.
     * @param { AsyncCallback<number> } callback - Returns {@code 0} if the PID and UID have the permission.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    verifyPermission(permission: string, options: PermissionOptions, callback: AsyncCallback<number>): void;

    /**
     * Verify whether the specified permission is allowed for a particular
     * pid and uid running in the system.
     * @note Pid and uid are optional. If you do not pass in pid and uid, it will check your own permission.
     * @param { string } permission - The name of the specified permission.
     * @param { AsyncCallback<number> } callback - Returns {@code 0} if the PID and UID have the permission.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    verifyPermission(permission: string, callback: AsyncCallback<number>): void;

    /**
     * Requests certain permissions from the system.
     * @param { Array<string> } permissions - Indicates the list of permissions to be requested. This parameter cannot be null.
     * @param { number } requestCode - Indicates the request code to be passed to the PermissionRequestResult.
     * @param { AsyncCallback<PermissionRequestResult> } resultCallback - The callback is used to return the PermissionRequestResult.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    requestPermissionsFromUser(permissions: Array<string>, requestCode: number, resultCallback: AsyncCallback<PermissionRequestResult>): void;

    /**
     * Requests certain permissions from the system.
     * @param { Array<string> } permissions - Indicates the list of permissions to be requested. This parameter cannot be null.
     * @param { number } requestCode - Indicates the request code to be passed to the PermissionRequestResult.
     * @returns { Promise<PermissionRequestResult> } Returns the PermissionRequestResult.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    requestPermissionsFromUser(permissions: Array<string>, requestCode: number): Promise<PermissionRequestResult>;

    /**
     * Obtains information about the current application.
     * @param { AsyncCallback<ApplicationInfo> } callback - The callback is used to return the ApplicationInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getApplicationInfo(callback: AsyncCallback<ApplicationInfo>): void

    /**
     * Obtains information about the current application.
     * @returns { Promise<ApplicationInfo> } Returns the ApplicationInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getApplicationInfo(): Promise<ApplicationInfo>;

    /**
     * Obtains the bundle name of the current ability.
     * @param { AsyncCallback<string> } callback - The callback is used to return the bundle name.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getBundleName(callback: AsyncCallback<string>): void

    /**
     * Obtains the bundle name of the current ability.
     * @returns { Promise<string> } Returns the bundle name.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getBundleName(): Promise<string>;

    /**
     * Obtains the current display orientation of this ability.
     * @param { AsyncCallback<bundle.DisplayOrientation> } callback - The callback is used to return the display orientation.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getDisplayOrientation(callback: AsyncCallback<bundle.DisplayOrientation>): void

    /**
     * Obtains the current display orientation of this ability.
     * @returns { Promise<bundle.DisplayOrientation> } Returns the display orientation.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getDisplayOrientation(): Promise<bundle.DisplayOrientation>;

    /**
     * Sets the display orientation of the current ability.
     * @param { bundle.DisplayOrientation } orientation - Indicates the new orientation for the current ability.
     * @param { AsyncCallback<void> } callback - The callback of setDisplayOrientation.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    setDisplayOrientation(orientation: bundle.DisplayOrientation, callback: AsyncCallback<void>): void

    /**
     * Sets the display orientation of the current ability.
     * @param { bundle.DisplayOrientation } orientation - Indicates the new orientation for the current ability.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    setDisplayOrientation(orientation: bundle.DisplayOrientation): Promise<void>;

    /**
     * Sets whether to show this ability on top of the lock screen whenever the lock screen is displayed,
     * keeping the ability in the ACTIVE state.
     * @param { boolean } show - Specifies whether to show this ability on top of the lock screen. The value true
     *                           means to show it on the lock screen, and the value false means not.
     * @param { AsyncCallback<void> } callback - The callback of setShowOnLockScreen.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    setShowOnLockScreen(show: boolean, callback: AsyncCallback<void>): void

    /**
     * Sets whether to show this ability on top of the lock screen whenever the lock screen is displayed,
     * keeping the ability in the ACTIVE state.
     * @param { boolean } show - Specifies whether to show this ability on top of the lock screen. The value true
     *                           means to show it on the lock screen, and the value false means not.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    setShowOnLockScreen(show: boolean): Promise<void>;

    /**
     * Sets whether to wake up the screen when this ability is restored.
     * @param { boolean } wakeUp - Specifies whether to wake up the screen. The value true means to wake it up,
     *                             and the value false means not.
     * @param { AsyncCallback<void> } callback - The callback of setWakeUpScreen.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    setWakeUpScreen(wakeUp: boolean, callback: AsyncCallback<void>): void

    /**
     * Sets whether to wake up the screen when this ability is restored.
     * @param { boolean } wakeUp - Specifies whether to wake up the screen. The value true means to wake it up,
     *                             and the value false means not.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    setWakeUpScreen(wakeUp: boolean): Promise<void>;

    /**
     * Obtains information about the current process, including the process ID and name.
     * @param { AsyncCallback<ProcessInfo> } callback - The callback is used to return the ProcessInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getProcessInfo(callback: AsyncCallback<ProcessInfo>): void

    /**
     * Obtains information about the current process, including the process ID and name.
     * @returns { Promise<ProcessInfo> } Returns the ProcessInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getProcessInfo(): Promise<ProcessInfo>;

    /**
     * Obtains the ohos.bundle.ElementName object of the current ability. This method is available only to Page abilities.
     * @param { AsyncCallback<ElementName> } callback - The callback is used to return the ElementName.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getElementName(callback: AsyncCallback<ElementName>): void

    /**
     * Obtains the ohos.bundle.ElementName object of the current ability. This method is available only to Page abilities.
     * @returns { Promise<ElementName> } Returns the ElementName.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getElementName(): Promise<ElementName>;

    /**
     * Obtains the name of the current process.
     * @param { AsyncCallback<string> } callback - The callback is used to return the process name.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getProcessName(callback: AsyncCallback<string>): void

    /**
     * Obtains the name of the current process.
     * @returns { Promise<string> } Returns the process name.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getProcessName(): Promise<string>;

    /**
     * Obtains the bundle name of the ability that called the current ability.
     * @param { AsyncCallback<string> } callback - The callback is used to return the calling bundle name.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getCallingBundle(callback: AsyncCallback<string>): void

    /**
     * Obtains the bundle name of the ability that called the current ability.
     * @returns { Promise<string> } Returns the calling bundle name.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getCallingBundle(): Promise<string>;

    /**
     * Obtains the file directory of this application on the internal storage.
     * @param { AsyncCallback<string> } callback - The callback is used to return the file directory.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getFilesDir(callback: AsyncCallback<string>): void;

    /**
     * Obtains the file directory of this application on the internal storage.
     * @returns { Promise<string> } Returns the file directory.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getFilesDir(): Promise<string>;

    /**
     * Obtains the cache directory of this application on the internal storage.
     * @param { AsyncCallback<string> } callback - The callback is used to return the cache directory.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getCacheDir(callback: AsyncCallback<string>): void;

    /**
     * Obtains the cache directory of this application on the internal storage.
     * @returns { Promise<string> } Returns the cache directory.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getCacheDir(): Promise<string>;

    /**
     * Obtains the distributed file path for storing ability or application data files.
     * If the distributed file path does not exist, the system will create a path and return the created path.
     * @returns { Promise<string> } Returns the distributed file path.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getOrCreateDistributedDir(): Promise<string>;

    /**
     * Obtains the distributed file path for storing ability or application data files.
     * If the distributed file path does not exist, the system will create a path and return the created path.
     * @param { AsyncCallback<string> } callback - The callback is used to return the distributed file path.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getOrCreateDistributedDir(callback: AsyncCallback<string>): void;

    /**
     * Obtains the application type.
     * @param { AsyncCallback<string> } callback - The callback is used to return the application type.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getAppType(callback: AsyncCallback<string>): void

    /**
     * Obtains the application type.
     * @returns { Promise<string> } Returns the application type.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getAppType(): Promise<string>;

    /**
     * Obtains the ModuleInfo object for this application.
     * @param { AsyncCallback<HapModuleInfo> } callback - The callback is used to return the HapModuleInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getHapModuleInfo(callback: AsyncCallback<HapModuleInfo>): void

    /**
     * Obtains the ModuleInfo object for this application.
     * @returns { Promise<HapModuleInfo> } Returns the HapModuleInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getHapModuleInfo(): Promise<HapModuleInfo>;

    /**
     * Obtains the application version information.
     * @param { AsyncCallback<AppVersionInfo> } callback - The callback is used to return the application version info.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getAppVersionInfo(callback: AsyncCallback<AppVersionInfo>): void

    /**
     * Obtains the application version information.
     * @returns { Promise<AppVersionInfo> } Returns the application version info.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getAppVersionInfo(): Promise<AppVersionInfo>;

    /**
     * Obtains the context of this application.
     * @returns { Context } Returns the context of this application.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getApplicationContext(): Context;

    /**
     * Checks the detailed information of this ability.
     * @param { AsyncCallback<AbilityInfo> } callback - The callback is used to return the AbilityInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getAbilityInfo(callback: AsyncCallback<AbilityInfo>): void

    /**
     * Checks the detailed information of this ability.
     * @returns { Promise<AbilityInfo> } Returns the AbilityInfo.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    getAbilityInfo(): Promise<AbilityInfo>;

    /**
     * Checks whether the configuration of this ability is changing.
     * @param { AsyncCallback<boolean> } callback - Returns true if the configuration of this ability is changing and false otherwise.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    isUpdatingConfigurations(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the configuration of this ability is changing.
     * @returns { Promise<boolean> } Returns true if the configuration of this ability is changing and false otherwise.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    isUpdatingConfigurations(): Promise<boolean>;

    /**
     * Informs the system of the time required for drawing this Page ability.
     * @param { AsyncCallback<void> } callback - The callback of printDrawnCompleted.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    printDrawnCompleted(callback: AsyncCallback<void>): void;

    /**
     * Informs the system of the time required for drawing this Page ability.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    printDrawnCompleted(): Promise<void>;
}

/**
 * the result of requestPermissionsFromUser with asynchronous callback
 * @typedef PermissionRequestResult
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly
 * @since 9
 */
interface PermissionRequestResult {
    /**
     * The request code passed in by the user
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    requestCode: number;

    /**
     * The permissions passed in by the user
     * @type { Array<string> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    permissions: Array<string>;

    /**
     * The results for the corresponding request permissions
     * @type { Array<number> }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    authResults: Array<number>;
}

/**
 * @typedef PermissionOptions
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly
 * @since 9
 */
interface PermissionOptions {
    /**
     * The process id
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    pid?: number;

    /**
     * The user id
     * @type { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    uid?: number;
}
