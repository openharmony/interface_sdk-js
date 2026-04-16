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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';
import { Configuration } from './@ohos.application.Configuration';
import { AbilityRunningInfo } from './application/AbilityRunningInfo';
import { ExtensionRunningInfo } from './application/ExtensionRunningInfo';
import { ElementName } from './bundle/elementName';

/**
 * The AbilityManager module provides APIs for obtaining, adding, and modifying ability running information and state 
 * information.
 * 
 * > **NOTE**
 * >
 * > The APIs of this module are supported since API version 8 and deprecated since API version 9. You are advised to 
 * > use [@ohos.app.ability.abilityManager]{@link @ohos.app.ability.abilityManager:abilityManager} instead. Newly added 
 * > APIs will be marked with a superscript to indicate their earliest API version. 
 * > > The APIs of this module are system APIs and cannot be called by third-party applications.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.abilityManager/abilityManager
 */
declare namespace abilityManager {
  /**
   * Enumerates the ability states.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#AbilityState
   */
  export enum AbilityState {
    /**
     * The ability is in the initial state.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#INITIAL
     */
    INITIAL = 0,

    /**
     * The ability is running in the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#FOREGROUND
     */
    FOREGROUND = 9,

    /**
     * The ability is running in the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#BACKGROUND
     */
    BACKGROUND = 10,

    /**
     * The ability is being switched to the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#FOREGROUNDING
     */
    FOREGROUNDING = 11,

    /**
     * The ability is being switched to the background.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#BACKGROUNDING
     */
    BACKGROUNDING = 12
  }

  /**
   * Updates the configuration. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - New configuration.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the configuration is updated, **err** 
   *     is undefined; otherwise, **err** is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#updateConfiguration
   */
  function updateConfiguration(config: Configuration, callback: AsyncCallback<void>): void;

  /**
   * Updates the configuration. This API uses a promise to return the result.
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - New configuration.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#updateConfiguration
   */
  function updateConfiguration(config: Configuration): Promise<void>;

  /**
   * Obtains the ability running information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AbilityRunningInfo>> } Promise used to return the ability running information.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#getAbilityRunningInfos
   */
  function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>;

  /**
   * Obtains the ability running information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AbilityRunningInfo>> } callback - Callback used to return the ability running information.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#getAbilityRunningInfos
   */
  function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void;
}

export default abilityManager;
