'use static'
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
import _ProcessData from './ProcessData';

/**
 * 应用状态监听器，可以作为入参传入
 * [on('applicationState')]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}
 * 方法，监听应用的生命周期变化。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
declare interface ApplicationStateObserver {
  /**
   * 应用前后台状态发生变化时执行的回调函数。
   *
   * @param { AppStateData } appStateData - 应用状态信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onForegroundApplicationChanged(appStateData: AppStateData): void;

  /**
   * Ability状态发生变化时执行的回调函数。
   *
   * @param { AbilityStateData } abilityStateData - Ability状态信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onAbilityStateChanged(abilityStateData: AbilityStateData): void;

  /**
   * 进程创建时执行的回调函数。
   *
   * @param { ProcessData } processData - 进程数据信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onProcessCreated(processData: ProcessData): void;

  /**
   * 进程销毁时执行的回调函数。
   *
   * @param { ProcessData } processData - 进程数据信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onProcessDied(processData: ProcessData): void;

  /**
   * 进程状态更新时执行的回调函数。
   *
   * @param { ProcessData } processData - 进程数据信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onProcessStateChanged(processData: ProcessData): void;

  /**
   * 应用第一个进程创建时执行的回调函数。
   *
   * @param { AppStateData } appStateData - 应用状态信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onAppStarted(appStateData: AppStateData): void;

  /**
   * 应用最后一个进程销毁时执行的回调函数。
   *
   * @param { AppStateData } appStateData - 应用状态信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 23 static
   */
  onAppStopped(appStateData: AppStateData): void;
}

/**
 * 进程数据信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 23 static
 */
export type ProcessData = _ProcessData;

export default ApplicationStateObserver;