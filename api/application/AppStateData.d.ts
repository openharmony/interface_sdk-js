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

/**
 * The module defines the application state information. Once an application state change listener is registered using
 * [on]{@link @ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)},
 *  the system triggers the
 * [onForegroundApplicationChanged](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronforegroundapplicationchanged)
 *  callback of [ApplicationStateObserver]{@link ./application/ApplicationStateObserver} to deliver notifications whenever
 *  the state of an application, process, or ability changes.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
declare class AppStateData {
  /**
   * Bundle name.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Application state.
   *
   * **0**: The application is being initialized.
   *
   * **1**: The application has been initialized and is ready.
   *
   * **2**: The application is running in the foreground.
   *
   * **3**: The application is having the focus. (This state is reserved.)
   *
   * **4**: The application is running in the background.
   *
   * **5**: The application has exited.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  state: int;

  /**
   * Whether the application is in split-screen mode.
   *
   * **true**: The application is in split-screen mode.
   *
   * **false**: The application is not in split-screen mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isSplitScreenMode: boolean;

  /**
   * Whether the application is in floating window mode.
   *
   * **true**: The application is in floating window mode.
   *
   * **false**: The application is not in floating window mode.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isFloatingWindowMode: boolean;
}

export default AppStateData;