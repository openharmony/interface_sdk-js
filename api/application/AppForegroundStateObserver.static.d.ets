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

/**
 * The module defines the listener used to listen for application startup and exit state changes. It can be used as an
 * input parameter of
 * [appManager.on('appForegroundState')]{@link ./../@ohos.app.ability.appManager:appManager.on(type:
 * 'appForegroundState', observer: AppForegroundStateObserver)}
 * to listen for the state changes of all applications.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @FaAndStageModel
 * @since 23 static
 */
declare interface AppForegroundStateObserver {
  /**
   * Called when the application launch or exit state changes.
   *
   * @param { AppStateData } appStateData - Application state data.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @FaAndStageModel
   * @since 23 static
   */
  onAppStateChanged(appStateData: AppStateData): void;
}

export default AppForegroundStateObserver;