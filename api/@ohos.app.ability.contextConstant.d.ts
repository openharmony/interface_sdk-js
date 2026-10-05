/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
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

/**
 * @file Context-related Constants
 * @kit AbilityKit
 */

/**
 * The ContextConstant module defines context-related enums, including the file encryption partition level and process
 * mode of the UIAbility after it is started.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace contextConstant {
  /**
   * Enumerates the file encryption levels, which are used to ensure data security for applications across different
   * scenarios. You can select the appropriate encryption level based on the application requirements to protect user
   * data.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum AreaMode {
    /**
     * Device-level encryption. Directories with this encryption level are accessible after the device is powered on.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    EL1 = 0,

    /**
     * User-level encryption. Directories with this encryption level are accessible only after the device is powered on
     * and the password is entered (for the first time).
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    EL2 = 1,

    /**
     * User-level encryption area. The file permissions in different scenarios are as follows:
     * Opened file: when locked, readable and writable; after unlocking, readable and writable.
     * Unopened file: when locked, cannot be opened, not readable or writable; after unlocking, 
     * can be opened, readable and writable.
     * Create a new file: when locked, can be created, can be opened, writable but not readable;
     * after unlocking, can be created, can be opened, readable and writable.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    EL3 = 2,

    /**
     * User-level encryption area. The file permissions in different scenarios are as follows:
     * Opened file: when locked, not readable or writable; after unlocking, readable and writable.
     * Unopened file: when locked, cannot be opened, not readable or writable; after unlocking,
     * can be opened, readable and writable.
     * Create a new file: when locked, cannot be created; after unlocking, can be created, can be
     * opened, readable and writable.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    EL4 = 3,

    /**
     * Application-level encryption area. The file permissions in different scenarios are as follows:
     * Opened file: when locked, readable and writable; after unlocking, readable and writable.
     * Unopened file: when locked, after calling the
     * [Access]{@link @ohos.ability.screenLockFileManager:screenLockFileManager.acquireAccess}
     * API to obtain the retained key, can be opened, readable and writable; otherwise, cannot be
     * opened, not readable or writable; after unlocking, can be opened, readable and writable.
     * Create a new file: when locked, can be created, can be opened, readable and writable; after
     * unlocking, can be created, can be opened, readable and writable.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    EL5 = 4
  }

  /**
   * Enumerates the process modes of the UIAbility after it is started.
   * As a property of [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}, **ProcessMode** takes effect
   * only in
   * [UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>)}
   *  and is used to specify the process mode of the target UIAbility.
   * This value takes effect only on 2-in-1 devices and tablets. If it is used on other devices, error code 801 is
   * returned.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ProcessMode {
    /**
     * A new process is created, the UIAbility is started on the process, and the process exits along with the parent
     * process.
     *
     * **Constraints**:
     *
     * In this mode, the target UIAbility and caller must be in the same application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    NEW_PROCESS_ATTACH_TO_PARENT = 1,

    /**
     * A new process is created, the UIAbility is started on the process, and the process is bound to the status bar
     * icon.
     *
     * **Constraints**:
     *
     * In this mode, the target UIAbility and caller must be in the same application, and the application must have an
     * icon in the status bar.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    NEW_PROCESS_ATTACH_TO_STATUS_BAR_ITEM = 2,

    /**
     * The UIAbility is started, and the process of the UIAbility is bound to the status bar icon.
     *
     * **Constraints**:
     *
     * In this mode, the target UIAbility and caller must be in the same application, and the application must have an
     * icon in the status bar.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ATTACH_TO_STATUS_BAR_ITEM = 3
  }

  /**
   * Enumerates the visibility statuses of the UIAbility after it is started.
   * If the target UIAbility is set to invisible, the window of the target UIAbility is not displayed in the foreground,
   *  there is no icon in the dock, and the **onForeground** lifecycle of the target UIAbility is not triggered.
   * As a property of [StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}, **StartupVisibility** takes
   * effect only in
   * [UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>)}
   *  and specifies the visibility of the target UIAbility after it is started.
   * This value takes effect only on 2-in-1 devices and tablets. If it is used on other devices, error code 801 is
   * returned.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum StartupVisibility {
    /**
     * The target UIAbility is hidden after it is started in the new process. The **onForeground** lifecycle of the
     * UIAbility is not invoked.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    STARTUP_HIDE = 0,

    /**
     * The target UIAbility is displayed normally after it is started in the new process.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    STARTUP_SHOW = 1
  }

  /**
   * Enumerates the scenarios where the [onNewWant]{@link @ohos.app.ability.UIAbility:UIAbility#onNewWant} lifecycle
   * callback is not triggered. It is used in the
   * [setOnNewWantSkipScenarios]{@link ./application/UIAbilityContext:UIAbilityContext.setOnNewWantSkipScenarios} API.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Scenarios {
    /**
     * <!--RP1-->A scenario where the system API [missionManager.moveMissionToFront](./js-apis-app-ability-missionManager-sys.md#missionmanagermovemissiontofront-2) is called to move the UIAbility to the foreground.<!--RP1End-->
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SCENARIO_MOVE_MISSION_TO_FRONT = 0x00000001,

    /**
     * A scenario where the [showAbility]{@link ./application/UIAbilityContext:UIAbilityContext.showAbility} API is called
     *  to move the UIAbility to the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SCENARIO_SHOW_ABILITY = 0x00000002,

    /**
     * A scenario where the
     * [backToCallerAbilityWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.backToCallerAbilityWithResult}
     *  API is called to move the UIAbility to the foreground.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SCENARIO_BACK_TO_CALLER_ABILITY_WITH_RESULT = 0x00000004,
  }

  /**
   * Context type
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export enum ContextType {
    /**
     * Type of [ApplicationContext]{@link ./application/ApplicationContext:ApplicationContext},
     * which provides application-level resources and capabilities.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    APPLICATION_CONTEXT = 0,

    /**
     * Type of [AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext},
     * which provides module-level resources and capabilities.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ABILITY_STAGE_CONTEXT = 1,

    /**
     * Type of [UIAbilityContext]{@link ./application/UIAbilityContext:UIAbilityContext}, which
     * provides capabilities such as UI interaction and component startup.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UIABILITY_CONTEXT = 2,

    /**
     * Type of [FormExtensionContext]{@link ./application/FormExtensionContext:FormExtensionContext},
     * which provides card service capabilities.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    FORM_EXTENSION_CONTEXT = 3,

    /**
     * Type of
     * [AppServiceExtensionContext]{@link ./application/AppServiceExtensionContext:AppServiceExtensionContext},
     * which provides background service capabilities.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    APP_SERVICE_EXTENSION_CONTEXT = 4,

    /**
     * [ServiceExtensionContext]{@link ./application/ServiceExtensionContext:ServiceExtensionContext} type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SERVICE_EXTENSION_CONTEXT = 5,

    /**
     * [UIServiceExtensionContext]{@link ./application/UIServiceExtensionContext:UIServiceExtensionContext} type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UI_SERVICE_EXTENSION_CONTEXT = 6,

    /**
     * [AutoFillExtensionContext]{@link ./application/AutoFillExtensionContext:AutoFillExtensionContext} type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    AUTO_FILL_EXTENSION_CONTEXT = 7
  }
}

export default contextConstant;