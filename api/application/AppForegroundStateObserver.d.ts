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

/*** if arkts 1.1 */
import type AppStateData from './AppStateData';
/*** endif */
/*** if arkts 1.2 */
import AppStateData from './AppStateData';
/*** endif */

/*** if arkts 1.1 */
/**
 * The app foreground state observer.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 11
 */
export default class AppForegroundStateObserver {
/*** endif */

/*** if arkts 1.2 */
/**
 * The app foreground state observer.
 *
 * @typedef AppForegroundStateObserver
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @systemapi
 * @since 20
 * @arkts 1.2
 */
declare interface AppForegroundStateObserver {
/*** endif */
  /**
   * Will be called when foreground or background application changed.
   *
   * @param { AppStateData } appStateData - State changed application info.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  onAppStateChanged(appStateData: AppStateData): void;
}

/*** if arkts 1.2 */
export default AppForegroundStateObserver;
/*** endif */