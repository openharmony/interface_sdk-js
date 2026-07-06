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

import type AppStateData from './AppStateData';

/**
 * 定义应用启动和退出的状态监听，可以作为
 * [appManager.on('appForegroundState')]{@link ./../@ohos.app.ability.appManager:appManager.on(type: 'appForegroundState', observer: AppForegroundStateObserver)}
 * 的入参监听所有应用的启动和退出的变化。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 11 dynamic
 */
export default class AppForegroundStateObserver {
  /**
   * 应用启动和退出状态发生变化时，系统会触发该回调。
   *
   * @param { AppStateData } appStateData - 应用状态信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since 11 dynamic
   */
  onAppStateChanged(appStateData: AppStateData): void;
}