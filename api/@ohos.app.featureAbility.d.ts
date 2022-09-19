/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { Callback } from './basic';
import Want from './@ohos.application.Want';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { AbilityResult } from './ability/abilityResult';
import { AppVersionInfo as _AppVersionInfo } from './app/appVersionInfo';
import { Context } from './@ohos.app.featureAbility.context';
import { DataAbilityHelper } from './@ohos.app.ability.dataAbilityHelper';
import { ConnectOptions } from './ability/connectOptions';
import { ProcessInfo as _ProcessInfo } from './app/processInfo';
import window from './@ohos.window';

/**
 * A Feature Ability represents an ability with a UI and is designed to interact with users.
 * @namespace featureAbility
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 9
 */
declare namespace featureAbility {
    /**
     * Obtain the want sent from the source ability.
     * @param { AsyncCallback<Want> } callback - The callback is used to return the want sent from the source ability.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function getWant(callback: AsyncCallback<Want>): void;

    /**
     * Obtain the want sent from the source ability.
     * @returns { Promise<Want> } Returns the want sent from the source ability.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function getWant(): Promise<Want>;

    /**
     * Starts a new ability.
     * @param { StartAbilityParameter } parameter - Indicates the ability to start.
     * @param { AsyncCallback<void> } callback - The callback of startAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<number>): void;

    /**
     * Starts a new ability.
     * @param { StartAbilityParameter } parameter - Indicates the ability to start.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function startAbility(parameter: StartAbilityParameter): Promise<number>;

    /**
     * Obtains the application context.
     * @returns { Context } Returns the application context.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function getContext(): Context;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed.
     * @param { StartAbilityParameter } parameter - Indicates the ability to start.
     * @param { AsyncCallback<AbilityResult> } callback - The callback is used to return the AbilityResult.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function startAbilityForResult(parameter: StartAbilityParameter, callback: AsyncCallback<AbilityResult>): void;

    /**
     * Starts an ability and returns the execution result when the ability is destroyed.
     * @param { StartAbilityParameter } parameter - Indicates the ability to start.
     * @returns { Promise<AbilityResult> } Returns the AbilityResult.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function startAbilityForResult(parameter: StartAbilityParameter): Promise<AbilityResult>;

    /**
     * Sets the result code and data to be returned by this Page ability to the caller
     * and destroys this Page ability.
     * @param { AbilityResult } parameter - Indicates the result to return.
     * @param { AsyncCallback<void> } callback - The callback of terminateSelfWithResult.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function terminateSelfWithResult(parameter: AbilityResult, callback: AsyncCallback<void>): void;

    /**
     * Sets the result code and data to be returned by this Page ability to the caller
     * and destroys this Page ability.
     * @param { AbilityResult } parameter - Indicates the result to return.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function terminateSelfWithResult(parameter: AbilityResult): Promise<void>;

    /**
     * Destroys this Page ability.
     * @param { AsyncCallback<void> } callback - The callback of terminateSelf.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function terminateSelf(callback: AsyncCallback<void>): void;

    /**
     * Destroys this Page ability.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function terminateSelf(): Promise<void>;

    /**
     * Obtains the dataAbilityHelper.
     * @param uri Indicates the path of the file to open.
     * @returns { DataAbilityHelper } Returns the DataAbilityHelper.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

    /**
     * Checks whether the main window of this ability has window focus.
     * @param { AsyncCallback<boolean> } callback - The callback is used to return {@code true} if this ability currently has window focus.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function hasWindowFocus(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether the main window of this ability has window focus.
     * @returns { Promise<boolean> } Returns {@code true} if this ability currently has window focus.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function hasWindowFocus(): Promise<boolean>;

    /**
     * Connects the current ability to an ability using the AbilityInfo.AbilityType.SERVICE template.
     * @param { Want } request - The element name of the service ability
     * @param { ConnectOptions } options - The remote object instance
     * @returns { number } Returns the number code of the ability connected.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function connectAbility(request: Want, options: ConnectOptions): number;

    /**
     * The callback interface was connect successfully.
     * @param { number } connection - The number code of the ability connected
     * @param { AsyncCallback<void> } callback - The callback of disconnectAbility.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function disconnectAbility(connection: number, callback: AsyncCallback<void>): void;

    /**
     * The callback interface was connect successfully.
     * @param { number } connection - The number code of the ability connected
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function disconnectAbility(connection: number): Promise<void>;

    /**
     * Obtains the window corresponding to the current ability.
     * @param { AsyncCallback<window.Window> } callback - The callback is used to return the window corresponding to the current ability.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function getWindow(callback: AsyncCallback<window.Window>): void;

    /**
     * Obtains the window corresponding to the current ability.
     * @returns { Promise<window.Window> } Returns the window corresponding to the current ability.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    function getWindow(): Promise<window.Window>;

    /**
     * Obtain the window configuration
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    export enum AbilityWindowConfiguration {
        WINDOW_MODE_UNDEFINED = 0,
        WINDOW_MODE_FULLSCREEN = 1,
        WINDOW_MODE_SPLIT_PRIMARY = 100,
        WINDOW_MODE_SPLIT_SECONDARY = 101,
        WINDOW_MODE_FLOATING = 102
    }

    /**
     * Obtain the window properties.
     * @enum { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    export enum AbilityStartSetting {
        BOUNDS_KEY = "abilityBounds",
        WINDOW_MODE_KEY = "windowMode",
        DISPLAY_ID_KEY = "displayId"
    }

    /**
     * Indicates the operation type of data.
     * @enum { number }
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    export enum DataAbilityOperationType {
        TYPE_INSERT = 1,
        TYPE_UPDATE = 2,
        TYPE_DELETE = 3,
        TYPE_ASSERT = 4,
    }

    /**
     * Defines an AppVersionInfo object.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    export type AppVersionInfo = _AppVersionInfo

    /**
     * This class saves process information about an application
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @famodelonly
     * @since 9
     */
    export type ProcessInfo = _ProcessInfo
}
export default featureAbility;
