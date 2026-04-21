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
 * AbilityManager模块提供对Ability相关信息和状态信息进行获取、新增、修改等能力。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.app.ability.abilityManager/abilityManager
 */
declare namespace abilityManager {
  /**
   * Ability的状态信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#AbilityState
   */
  export enum AbilityState {
    /**
     * 表示Ability为初始化状态。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#INITIAL
     */
    INITIAL = 0,

    /**
     * 表示Ability处于前台。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#FOREGROUND
     */
    FOREGROUND = 9,

    /**
     * 表示Ability处于后台。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#BACKGROUND
     */
    BACKGROUND = 10,

    /**
     * 表示Ability处于前台调度中。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.app.ability.abilityManager/abilityManager.AbilityState#FOREGROUNDING
     */
    FOREGROUNDING = 11,

    /**
     * 表示Ability处于后台调度中。
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
   * 通过传入要修改的配置项来更新配置。使用callback异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - 新的配置项。
   * @param { AsyncCallback<void> } callback - 回调函数，当通过修改配置来更新配置成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#updateConfiguration
   */
  function updateConfiguration(config: Configuration, callback: AsyncCallback<void>): void;

  /**
   * 通过传入要修改的配置项来更新配置。使用Promise异步回调。
   *
   * @permission ohos.permission.UPDATE_CONFIGURATION
   * @param { Configuration } config - 新的配置项。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#updateConfiguration
   */
  function updateConfiguration(config: Configuration): Promise<void>;

  /**
   * 获取Ability运行相关信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @returns { Promise<Array<AbilityRunningInfo>> } Promise对象，返回Ability运行相关信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#getAbilityRunningInfos
   */
  function getAbilityRunningInfos(): Promise<Array<AbilityRunningInfo>>;

  /**
   * 获取Ability运行相关信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_RUNNING_INFO
   * @param { AsyncCallback<Array<AbilityRunningInfo>> } callback - 回调函数，返回Ability运行相关信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead ohos.app.ability.abilityManager/abilityManager#getAbilityRunningInfos
   */
  function getAbilityRunningInfos(callback: AsyncCallback<Array<AbilityRunningInfo>>): void;
}

export default abilityManager;