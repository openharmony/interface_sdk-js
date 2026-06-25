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
 * @file
 * @kit AbilityKit
 */

/**
 * ContextConstant提供Context相关的枚举，包含文件加密分区等级、UIAbility启动后的进程模式等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace contextConstant {
  /**
   * 文件加密分区等级，保证应用在不同场景下的数据安全。开发者可以根据应用的具体需求选择合适的加密等级，以保护用户的数据安全。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  export enum AreaMode {
    /**
     * 设备级加密区，设备开机后可访问的数据区。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    EL1 = 0,

    /**
     * 用户级加密区，设备开机，首次输入密码后才能够访问的数据区。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    EL2 = 1,

    /**
     * 用户级加密区，不同场景的文件权限如下：
     * 
     * 已打开文件：锁屏时，可读写；解锁后，可读写。
     * 
     * 未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。
     * 
     * 创建新文件：锁屏时，可创建、可打开、可写不可读；解锁后，可创建、可打开、可读写。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    EL3 = 2,

    /**
     * 用户级加密区，不同场景的文件权限如下：
     * 
     * 已打开文件：锁屏时，不可读写；解锁后，可读写。
     * 
     * 未打开文件：锁屏时，不可打开、不可读写；解锁后，可打开、可读写。
     * 
     * 创建新文件：锁屏时，不可创建；解锁后，可创建、可打开、可读写。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    EL4 = 3,

    /**
     * 应用级加密区，不同场景的文件权限如下：
     * 
     * 已打开文件：锁屏时，可读写；解锁后，可读写。
     * 
     * 未打开文件：锁屏时，调用[Access](js-apis-screenLockFileManager.md#screenlockfilemanageracquireaccess)接口获取保留密钥后，可打开、可读写，否则不可打开
     * 、不可读写；解锁后，可打开、可读写。
     * 
     * 创建新文件：锁屏时，可创建、可打开、可读写；解锁后，可创建、可打开、可读写。
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
   * UIAbility启动后的进程模式。
   * ProcessMode作为[StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}的一个属性，仅在
   * [UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>)}
   * 中生效，用来指定目标UIAbility的进程模式。
   * 该功能仅在2in1和Tablet设备上生效，在其他设备中返回801错误码。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum ProcessMode {
    /**
     * 创建一个新进程，并在该进程上启动UIAbility。该进程会跟随父进程退出。
     * 
     * **约束：**
     * 
     * 使用此模式时，要求目标UIAbility跟调用方是在同一个应用。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    NEW_PROCESS_ATTACH_TO_PARENT = 1,

    /**
     * 创建一个新进程，在该进程上启动UIAbility，并绑定该进程到状态栏图标上。
     * 
     * **约束：**
     * 
     * 使用此模式时，要求目标UIAbility跟调用方是在同一个应用，并且应用要在状态栏中有图标。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    NEW_PROCESS_ATTACH_TO_STATUS_BAR_ITEM = 2,

    /**
     * 启动UIAbility，并绑定该UIAbility所在进程到状态栏图标上。
     * 
     * **约束：**
     * 
     * 使用此模式时，要求目标UIAbility跟调用方是在同一个应用，并且应用要在状态栏中有图标。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    ATTACH_TO_STATUS_BAR_ITEM = 3
  }

  /**
   * UIAbility启动后是否可见。
   * 当用户设置目标UIAbility为不可见时，目标UIAbility的窗口不会显示在前台，dock栏也不会有图标，同时目标UIAbility的onForeground生命周期不会被调用。
   * StartupVisibility作为[StartOptions]{@link @ohos.app.ability.StartOptions:StartOptions}的一个属性，仅在
   * [UIAbilityContext.startAbility]{@link ./application/UIAbilityContext:UIAbilityContext.startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>)}
   * 中生效，用来指定目标UIAbility启动后的可见性。
   * 该功能仅在2in1和Tablet设备上生效，在其他设备中返回801错误码。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export enum StartupVisibility {
    /**
     * 目标UIAbility启动后，进入隐藏状态。不会调用UIAbility的onForeground生命周期。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    STARTUP_HIDE = 0,

    /**
     * 目标UIAbility启动后，正常显示。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    STARTUP_SHOW = 1
  }

  /**
   * 表示不触发[onNewWant]{@link @ohos.app.ability.UIAbility:UIAbility#onNewWant}生命周期回调场景的枚举，用于
   * [setOnNewWantSkipScenarios]{@link ./application/UIAbilityContext:UIAbilityContext.setOnNewWantSkipScenarios}接口。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  export enum Scenarios {
    /**
     * <!--RP1-->系统接口[missionManager.moveMissionToFront](./js-apis-app-ability-missionManager-sys.md#missionmanagermovemissiontofront-2)接口触发的UIAbility到前台场景。<!--RP1End-->
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SCENARIO_MOVE_MISSION_TO_FRONT = 0x00000001,

    /**
     * [showAbility]{@link ./application/UIAbilityContext:UIAbilityContext#showAbility}接口触发的UIAbility到前台场景。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    SCENARIO_SHOW_ABILITY = 0x00000002,

    /**
     * [backToCallerAbilityWithResult]{@link ./application/UIAbilityContext:UIAbilityContext.backToCallerAbilityWithResult}
     * 接口触发的UIAbility到前台场景。
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
   * 上下文类型
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  export enum ContextType {

    /**
     * 应用上下文类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    APPLICATION_CONTEXT = 0,

    /**
     * 能力阶段上下文类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    ABILITY_STAGE_CONTEXT = 1,

    /**
     * UI能力上下文类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UIABILITY_CONTEXT = 2,

    /**
     * 表单扩展上下文类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    FORM_EXTENSION_CONTEXT = 3,

    /**
     * App业务扩展上下文类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    APP_SERVICE_EXTENSION_CONTEXT = 4,

    /**
     * 业务扩展上下文类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    SERVICE_EXTENSION_CONTEXT = 5,

    /**
     * UI服务扩展上下文类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core\
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    UI_SERVICE_EXTENSION_CONTEXT = 6,

    /**
     * 自动填充扩展上下文类型。
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