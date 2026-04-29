/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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

import Context from './Context';
import { AsyncCallback } from '../@ohos.base';
import { ProcessInformation } from './ProcessInformation';
import type ConfigurationConstant from '../@ohos.app.ability.ConfigurationConstant';
import Want from '../@ohos.app.ability.Want';
import window from '../@ohos.window';
import EnvironmentCallback from '../@ohos.app.ability.EnvironmentCallback';
import AbilityLifecycleCallback from '../@ohos.app.ability.AbilityLifecycleCallback';
import InteropAbilityLifecycleCallback from '../@ohos.app.ability.InteropAbilityLifecycleCallback';
/*** if arkts dynamic */
import type ApplicationStateChangeCallback from '../@ohos.app.ability.ApplicationStateChangeCallback';
/*** endif */
/*** if arkts static */
import ApplicationStateChangeCallback from '../@ohos.app.ability.ApplicationStateChangeCallback';
/*** endif */
import systemConfiguration from '../@ohos.app.ability.systemConfiguration';

/**
 * ApplicationContext inherits from [Context]{@link ./../app/context} and provides application-level management
 * capabilities, such as application lifecycle listening, process management, and application environment setting.
 *
 * > **NOTE**
 * >
 * > The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class ApplicationContext extends Context {
  /**
   * Registers a listener for the lifecycle of a UIAbility within the application. This API uses an asynchronous
   * callback to return the result. It can be called only on the main thread.
   *
   * @param { 'abilityLifecycle' } type - Lifecycle of the UIAbility within the application. The value is fixed at
   *     **'abilityLifecycle'**.
   * @param { AbilityLifecycleCallback } callback - Callback triggered when the UIAbility lifecycle changes.
   * @returns { number } ID of the callback registered. This ID is used to unregister the corresponding callback in
   *     [ApplicationContext.off('abilityLifecycle')]{@link ApplicationContext#off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback<void>)}
   *     .
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback): number;

  /**
   * Registers a listener to monitor the ability lifecycle of the application.
   * This API uses an asynchronous callback to return the result.
   * It can be called only by the main thread.
   *
   * @param { AbilityLifecycleCallback } callback - Callback triggered when the UIAbility lifecycle changes.
   * @returns { int } Returns the number code of the callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityLifecycle(callback: AbilityLifecycleCallback): int;

  /**
   * Registers a listener to monitor the ability lifecycle of the application for interoperability.
   *
   * <p>**NOTE**:
   * <br>It can be called only by the main thread.
   * </p>
   *
   * @param { InteropAbilityLifecycleCallback } callback - Callback used to be registered as the listener.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onInteropAbilityLifecycle(callback: InteropAbilityLifecycleCallback): void;

  /**
   * Unregisters a listener for the lifecycle of a UIAbility within the application. This API uses an asynchronous
   * callback to return the result. It can be called only on the main thread.
   *
   * @param { 'abilityLifecycle' } type - Lifecycle of the UIAbility within the application. The value is fixed at
   *     **'abilityLifecycle'**.
   * @param { number } callbackId - ID returned when the
   *     [ApplicationContext.on('abilityLifecycle')]{@link ApplicationContext#on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback)}
   *     API is called to register a listener for the lifecycle of a UIAbility within the application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the deregistration is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback<void>): void;

  /**
   * Unregisters the listener that monitors the ability lifecycle of the application.
   * This API uses an asynchronous callback to return the result.
   * It can be called only by the main thread.
   *
   * @param { int } callbackId - ID of the listener to unregister.
   * @param { AsyncCallback<void> } callback - ID returned when the 
   *     [ApplicationContext.on('abilityLifecycle')]{@link ApplicationContext#on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback)}
   *     API is called to register a listener for the lifecycle of a UIAbility within the application.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offAbilityLifecycle(callbackId: int, callback: AsyncCallback<void>): void;

  /**
   * Unregisters a listener for the lifecycle of a UIAbility within the application. This API uses a promise to return
   * the result. It can be called only on the main thread.
   *
   * @param { 'abilityLifecycle' } type - Lifecycle of the UIAbility within the application. The value is fixed at
   *     **'abilityLifecycle'**.
   * @param { number } callbackId - ID returned when the
   *     [ApplicationContext.on('abilityLifecycle')]{@link ApplicationContext#on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback)}
   *     API is called to register a listener for the lifecycle of a UIAbility within the application.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  off(type: 'abilityLifecycle', callbackId: number): Promise<void>;

  /**
   * Unregisters the listener that monitors the ability lifecycle of the application.
   * This API uses a promise to return the result.
   *
   * <p>**NOTE**:
   * <br>It can be called only by the main thread.
   * </p>
   *
   * @param { int } callbackId - Indicates the number code of the callback.
   * @returns { Promise<void> } ThePromise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offAbilityLifecycle(callbackId: int): Promise<void>;

  /**
   * Unregisters the listener that monitors the ability lifecycle of the application for interoperability.
   *
   * <p>**NOTE**:
   * <br>It can be called only by the main thread.
   * </p>
   *
   * @param { InteropAbilityLifecycleCallback } [callback] - Callback used to be unregistered.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offInteropAbilityLifecycle(callback?: InteropAbilityLifecycleCallback): void;

  /**
   * Registers a listener for system environment changes. This API uses an asynchronous callback to return the result.
   * It can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > - You can also use [onConfigurationUpdate]{@link ./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate} to
   * > listen for system environment changes. Unlike
   * > [onConfigurationUpdate]{@link ./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate} of **Ability**, this
   * > API offers greater flexibility. It can be used both within application components and pages. However, the
   * > environment variables that can be subscribed to are different from those of
   * > [onConfigurationUpdate]{@link ./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate}. For example, this
   * > API cannot be used to subscribe to direction, screen density, and display ID changes. For details, see the
   * > description of each environment variable in
   * > [Configuration]{@link ./../@ohos.app.ability.Configuration:Configuration}.
   * >
   * > - There are certain restrictions when this API is triggered. For example, if you set the application language by
   * > calling [setLanguage]{@link ApplicationContext:ApplicationContext.setLanguage}, the system does not trigger the
   * > callback for the current API even if the system language changes. For details, see
   * > [When to Use](docroot://application-models/subscribe-system-environment-variable-changes.md#when-to-use).
   *
   * @param { 'environment' } type - System environment change, for example, system dark/light color mode change. The
   *     value is fixed at **'environment'**.
   * @param { EnvironmentCallback } callback - Callback triggered when the system environment changes.
   * @returns { number } ID of the callback registered. This ID is used to unregister the corresponding callback in
   *     [ApplicationContext.off('environment')]{@link ApplicationContext#off(type: 'environment', callbackId: number, callback: AsyncCallback<void>)}
   *     .
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  on(type: 'environment', callback: EnvironmentCallback): number;

  /**
   * Register environment callback.
   *
   * @param { EnvironmentCallback } callback - The environment callback.
   * @returns { int } Returns the number code of the callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onEnvironment(callback: EnvironmentCallback): int;

  /**
   * Unregisters the listener for system environment changes. This API uses an asynchronous callback to return the
   * result. It can be called only on the main thread.
   *
   * @param { 'environment' } type - System environment change, for example, system dark/light color mode change. The
   *     value is fixed at **'environment'**.
   * @param { number } callbackId - ID returned when the
   *     [ApplicationContext.on('environment')]{@link ApplicationContext#on(type: 'environment', callback: EnvironmentCallback)}
   *     API is called to register a listener for system environment changes.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the deregistration is successful,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  off(type: 'environment', callbackId: number, callback: AsyncCallback<void>): void;

  /**
   * Unregister environment callback.
   *
   * @param { int } callbackId - Indicates the number code of the callback.
   * @param { AsyncCallback<void> } callback - The callback of unregisterEnvironmentCallback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offEnvironment(callbackId: int, callback: AsyncCallback<void>): void;

  /**
   * Unregisters the listener for system environment changes. This API uses a promise to return the result. It can be
   * called only on the main thread.
   *
   * @param { 'environment' } type - System environment change, for example, system dark/light color mode change. The
   *     value is fixed at **'environment'**.
   * @param { number } callbackId - ID returned when the
   *     [ApplicationContext.on('environment')]{@link ApplicationContext#on(type: 'environment', callback: EnvironmentCallback)}
   *     API is called to register a listener for system environment changes.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  off(type: 'environment', callbackId: number): Promise<void>;

  /**
   * Unregister environment callback.
   *
   * @param { int } callbackId - Indicates the number code of the callback.
   * @returns { Promise<void> } The promise returned by the function.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offEnvironment(callbackId: int): Promise<void>;

  /**
   * Registers a listener for application process state changes. This API uses an asynchronous callback to return the
   * result. It can be called only on the main thread.
   *
   * @param { 'applicationStateChange' } type - Application process state change. The value is fixed at
   *     **'applicationStateChange'**.
   * @param { ApplicationStateChangeCallback } callback - Callback triggered when the application process state is
   *     changed.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback): void;

  /**
   * Register applicationStateChange callback.
   *
   * @param { ApplicationStateChangeCallback } callback - The applicationStateChange callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onApplicationStateChange(callback: ApplicationStateChangeCallback): void;

  /**
   * Unregisters the listener for application process state changes. This API uses an asynchronous callback to return
   * the result. It can be called only on the main thread.
   *
   * @param { 'applicationStateChange' } type - Application process state change. The value is fixed at
   *     **'applicationStateChange'**.
   * @param { ApplicationStateChangeCallback } [callback] - Callback used to return the result. The value can be a
   *     callback defined by
   *     [ApplicationContext.on('applicationStateChange')]{@link ApplicationContext#on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback)}
   *     or empty.<br>- If a defined callback is passed in, the listener for that callback is unregistered.<br>- If no
   *     value is passed in, all the listeners for the corresponding event are unregistered.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  off(type: 'applicationStateChange', callback?: ApplicationStateChangeCallback): void;

  /**
   * Unregister applicationStateChange callback.
   *
   * @param { ApplicationStateChangeCallback } [callback] - The applicationStateChange callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offApplicationStateChange(callback?: ApplicationStateChangeCallback): void;

  /**
   * Obtains the information about running processes. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<ProcessInformation>> } Promise used to return the API call result and the process running
   *     information. You can perform error handling or custom processing in this callback.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getRunningProcessInformation(): Promise<Array<ProcessInformation>>;

  /**
   * Obtains the information about running processes. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - Callback used to return the information about the
   *     running processes.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void;

  /**
   * Kills all processes of this application. The application will not execute the normal lifecycle when exiting. This
   * API uses a promise to return the result. It can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly, call
   * > [terminateSelf()]{@link UIAbilityContext:UIAbilityContext#terminateSelf()}.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  killAllProcesses(): Promise<void>;

  /**
   * Kills all processes of this application. The application will not execute the normal lifecycle when exiting. This
   * API uses a promise to return the result. It can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly, call
   * > [terminateSelf()]{@link UIAbilityContext:UIAbilityContext#terminateSelf()}.
   *
   * @param { boolean } clearPageStack - Whether to clear the page stack. **true** to clear, **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  killAllProcesses(clearPageStack: boolean): Promise<void>;

  /**
   * Kills all processes of this application. The application will not execute the normal lifecycle when exiting. This
   * API uses an asynchronous callback to return the result. It can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly, call
   * > [terminateSelf()]{@link UIAbilityContext:UIAbilityContext#terminateSelf()}.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If all the processes are killed,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  killAllProcesses(callback: AsyncCallback<void>): void;

  /**
   * Sets the dark/light color mode for the application. This API can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > Before calling this API, ensure that the window has been created and the page corresponding to the UIAbility has
   * > been loaded (using the
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9) API in the
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate} lifecycle).
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - Dark/light color mode, which can be dark mode, light mode,
   *     or follow-system mode (default).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 18]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  setColorMode(colorMode: ConfigurationConstant.ColorMode): void;

  /**
   * Sets the language for the application. This API can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > Before calling this API, ensure that the window has been created and the page corresponding to the UIAbility has
   * > been loaded (using the
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9) API in the
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate} lifecycle).
   *
   * @param { string } language - Target language. The list of supported languages can be obtained by calling
   *     [getSystemLanguages()]{@link ./../@ohos.i18n:i18n.System.getSystemLanguages}.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 21]
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  setLanguage(language: string): void;

  /**
   * Clears up all data in the application file path and revokes the permissions that the application has requested from
   * users. This API uses a promise to return the result. It can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > For details about the application file path, see
   * > [Application File Directory and Application File Path](docroot://file-management/app-sandbox-directory.md#application-file-directory-and-application-file-path)
   * > . The figure shows only the application file paths in the EL1 and EL2 directories. For the application file paths
   * > in other directories, refer to EL1.
   * >
   * > This API stops the application process. After the application process is stopped, all subsequent callbacks will
   * > not be triggered.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  clearUpApplicationData(): Promise<void>;

  /**
   * Clears up all data in the application file path and revokes the permissions that the application has requested from
   * users. This API uses an asynchronous callback to return the result. It can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > For details about the application file path, see
   * > [Application File Directory and Application File Path](docroot://file-management/app-sandbox-directory.md#application-file-directory-and-application-file-path)
   * > . The figure shows only the application file paths in the EL1 and EL2 directories. For the application file paths
   * > in other directories, refer to EL1.
   * >
   * > This API stops the application process. After the application process is stopped, all subsequent callbacks will
   * > not be triggered.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the application data is cleared
   *     up, <code>error</code> is <code>undefined</code>; otherwise, <code>error</code> is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  clearUpApplicationData(callback: AsyncCallback<void>): void;

  /**
   * Restarts the application and starts the specified UIAbility. This API can be called only by the main thread, and
   * the application to restart must be active.
   *
   * > **NOTE**
   * >
   * > When this API is called to restart the application, the **onDestroy** lifecycle callback of the ability in the
   * > application is not triggered.
   * >
   * > If an atomic service calls this API,
   * > [restartSelfAtomicService()]{@link ./../@ohos.app.ability.abilityManager:abilityManager.restartSelfAtomicService}
   * > , or [UIAbilityContext.restartApp()]{@link UIAbilityContext:UIAbilityContext.restartApp} within 3 seconds after a
   * > successful call to this API, the system returns error code 16000064.
   * >
   * > If an application calls this API or
   * > [UIAbilityContext.restartApp()]{@link UIAbilityContext:UIAbilityContext.restartApp} within 3 seconds after a
   * > successful call to this API, the system returns error code 16000064.
   *
   * @param { Want } want - Want information about the UIAbility to start. No verification is performed on the bundle
   *     name passed in.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000063 - The target to restart does not belong to the current application or is not a
   *     UIAbility.
   * @throws { BusinessError } 16000064 - Restart too frequently. Try again at least 3s later.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  restartApp(want: Want): void;

  /**
   * Preloads a UIExtensionAbility instance. This API uses a promise to return the result.
   *
   * The preloaded UIExtensionAbility instance is sent to the **onCreate** lifecycle of the UIExtensionAbility and waits
   * to be loaded by the current application.
   *
   * A UIExtensionAbility instance can be preloaded for multiple times. Each time a preloaded UIExtensionAbility
   * instance is loaded, the next preloaded UIExtensionAbility instance is sent to the **onCreate** lifecycle of the
   * UIExtensionAbility.
   *
   * | Name| Type| Mandatory| Description|
   * | -------- | -------- | -------- | -------- |
   * | want | [Want]{@link ./../@ohos.app.ability.Want:Want}  | Yes| Want information of the UIExtensionAbility.|
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { Want } want - Want information of the UIExtensionAbility.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Cannot start an invisible component.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  preloadUIExtensionAbility(want: Want): Promise<void>;

  /**
   * Sets whether the current application's process supports resource caching, so that the cached process resources can
   * be reused when the application is started again. This API can be called only on the main thread.
   *
   * This setting applies only to the current process instance and does not affect others. If the application process
   * instance is terminated, the previously set state will not be preserved and must be reset.
   *
   * This API can be properly called only on phones and 2-in-1 devices. If it is called on other device types, error
   * code 801 is returned.
   *
   * > **NOTE**
   * >
   * > - This API only sets the application to be ready for quick startup after caching. It does not mean that quick
   * > startup will be triggered. Other conditions must be considered to determine whether to trigger quick startup.
   * >
   * > - To ensure that this API is effective before the process exits, it should be called as soon as possible. You are
   * > advised to call this API within the **onCreate()** callback of the
   * > [AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}.
   * >
   * > - If this API is called multiple times within the same process, the outcome of the final call is used. In cases
   * > where there are multiple AbilityStage instances, to achieve the desired result, this API must be called and
   * > configured with the same value in each AbilityStage.
   *
   * @param { boolean } isSupported - Whether process cache is supported. The value <code>true</code> means that
   *     process cache is supported, and <code>false</code> means the opposite.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  setSupportedProcessCache(isSupported : boolean): void;

  /**
   * Sets the font for this application. This API can be called only on the main thread.
   *
   * > **NOTE**
   * >
   * > Before calling this API, ensure that the window has been created and the page corresponding to the UIAbility has
   * > been loaded (using the
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9) API in the
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate} lifecycle).
   *
   * @param { string } font - Font, which can be registered by calling
   *     [UIContext.registerFont](docroot://reference/apis-arkui/arkts-apis-uicontext-font.md#registerfont).
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 21]
   * @since 12 dynamic
   * @since 23 static
   */
  setFont(font: string): void;

  /**
   * Obtains the index of the current application clone.
   *
   * @returns { int } Index of the current application clone.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000071 - The MultiAppMode is not {@link App_CLONE}.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  getCurrentAppCloneIndex(): int;

  /**
   * Sets the scale ratio for the font size of this application. This API can be called only on the main thread.
   *
   * @param {double} fontSizeScale - Font scale ratio. The value is a non-negative number. When the application's
   *     [fontSizeScale](docroot://quick-start/app-configuration-file.md#configuration) is set to **followSystem** and
   *     the value set here exceeds the value of
   *     [fontSizeMaxScale](docroot://quick-start/app-configuration-file.md#configuration), the value of
   *     [fontSizeMaxScale](docroot://quick-start/app-configuration-file.md#configuration) takes effect.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 21]
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  setFontSizeScale(fontSizeScale: double): void;

  /**
   * Obtains the unique instance ID of this application. This API can be called only on the main thread.
   *
   * This API can be properly called only on 2-in-1 devices. If it is called on other device types, error code 16000078
   * is returned.
   *
   * @returns { string } Unique instance ID of the application.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000078 - The multi-instance is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  getCurrentInstanceKey(): string;

  /**
   * Obtains the unique instance IDs of all multi-instances of this application. This API uses a promise to return the
   * result. It can be called only on the main thread.
   *
   * @returns { Promise<Array<string>> } Promise used to return the unique instance IDs of all multi-instances of the
   *     application.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000078 - The multi-instance is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  getAllRunningInstanceKeys(): Promise<Array<string>>;

  /**
   * Obtains all WindowStage objects in the current application process. This API uses a promise to return the result.
   * It can be called only on the main thread.
   *
   * This API is used to manage multiple windows in an application that contains several UIAbility components, for
   * example, managing the states of different WindowStage objects, or synchronizing state or data between multiple
   * windows within the same application.
   *
   * @returns { Promise<Array<window.WindowStage>> } Promise used to return all WindowStage objects in the current
   *     application process.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  getAllWindowStages(): Promise<Array<window.WindowStage>>;

  /**
   * Registers a listener for system configuration updated.
   *
   * <p>**NOTE**:
   * <br>It can be called only by the main thread.
   * </p>
   *
   * @param { systemConfiguration.UpdatedCallback } callback - The system configuration updated callback.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onSystemConfigurationUpdated(callback: systemConfiguration.UpdatedCallback): void;

  /**
   * unregisters a listener for system configuration updated.
   *
   * <p>**NOTE**:
   * <br>It can be called only by the main thread.
   * </p>
   *
   * @param { systemConfiguration.UpdatedCallback } [callback] - The system configuration updated callback.
   *     If a defined callback is passed in, the listener for that callback is unregistered.
   *     If no value is passed in, all the listeners for the corresponding event are unregistered.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  offSystemConfigurationUpdated(callback?: systemConfiguration.UpdatedCallback): void;
}

export default ApplicationContext;