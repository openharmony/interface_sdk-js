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
 * The module defines process data. If a lifecycle change listener is registered by calling 
 * [appManager.on('applicationState')]{@link @ohos.app.ability.appManager:appManager.on(type: 'applicationState', observer: ApplicationStateObserver)}
 * , the 
 * [onProcessCreated](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationStateObserver.md#applicationstateobserveronprocesscreated)
 *  callback in [ApplicationStateObserver]{@link ./application/ApplicationStateObserver} is invoked when the lifecycle of 
 * an application or ability changes.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @since 14 dynamic
 * @since 23 static
 */
declare class ProcessData {
  /**
   * Bundle name of the application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  bundleName: string;

  /**
   * Process ID.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  pid: int;

  /**
   * UID of the application.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  uid: int;

  /**
   * Application state. The options are as follows:
   * 
   * **0**: The application process is being initialized.
   * 
   * **1**: The application process has been initialized and is ready.
   * 
   * **2**: The application is running in the foreground.
   * 
   * **4**: The application is running in the background.
   * 
   * **5**: The application process is terminated.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  state: int;

  /**
   * Whether the task is a continuous task. **true** if yes, **false** otherwise.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isContinuousTask: boolean;

  /**
   * Whether the process is a resident task. **true** if yes, **false** otherwise.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @since 14 dynamic
   * @since 23 static
   */
  isKeepAlive: boolean;
}

export default ProcessData;