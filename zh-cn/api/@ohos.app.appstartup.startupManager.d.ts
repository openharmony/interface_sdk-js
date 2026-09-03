/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import StartupConfig from './@ohos.app.appstartup.StartupConfig';
import common from './@ohos.app.ability.common';

/**
 * 本模块提供[应用启动框架](docroot://application-models/app-startup.md)管理启动任务的能力，只能在主线程调用。
 * 
 * > **说明：**
 * >
 * > 本模块从API version 18开始支持so预加载。
 *
 * @syscap SystemCapability.Ability.AppStartup
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace startupManager {
  /**
   * 执行启动框架启动任务或加载so文件。
   * 
   * > **说明：**
   * >
   * > 本接口不支持执行feature类型HAP中的启动任务，如需要使用相关能力请调用
   * > [startupManager.run]{@link startupManager.run(startupTasks: Array<string>, context: common.AbilityStageContext, config: StartupConfig)}
   * > 接口。
   *
   * @param { Array<string> } startupTasks - 表示准备执行的启动任务
   *     [StartupTask]{@link @ohos.app.appstartup.StartupTask:StartupTask}的名称或预加载so名称的数组。该接口不支持feature类型HAP中的启动任务。
   *     名称需与配置文件startup_config.json中配置的name取值保持一致，详见[定义启动任务配置](docroot://application-models/app-startup.md#定义启动任务配置)
   *     和[定义预加载so任务配置](docroot://application-models/app-startup.md#定义预加载so任务配置)。
   * @param { StartupConfig } [config] - 表示启动任务配置信息，用于自定义启动框架的行为。当需要设置自定义超时时间或者监听启动任务完成状态时传入此参数；
   *     不传入时使用默认配置（默认超时时间为10000ms，无启动任务监听器）。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 28800001 - Startup task or its dependency not found.
   * @throws { BusinessError } 28800002 - The startup tasks have circular dependencies.
   * @throws { BusinessError } 28800003 - An error occurred while running the startup tasks.
   * @throws { BusinessError } 28800004 - Running startup tasks timeout.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function run(startupTasks: Array<string>, config?: StartupConfig): Promise<void>;

  /**
   * 执行启动框架启动任务或加载so文件。支持指定[AbilityStageContext]{@link ./application/AbilityStageContext:AbilityStageContext}用于启动任务的加载，
   * 该上下文会作为启动任务init方法的入参。本接口支持feature类型HAP中的启动任务。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 本接口只支持[应用级so](docroot://application-models/ability-terminology.md#应用级so)文件加载，
   * > 不支持[系统级so](docroot://application-models/ability-terminology.md#系统级so)文件加载。
   *
   * @param { Array<string> } startupTasks - 表示准备执行的启动任务
   *     [StartupTask]{@link @ohos.app.appstartup.StartupTask:StartupTask}的名称或预加载so名称的数组。
   * @param { common.AbilityStageContext } context - 表示执行启动任务
   *     [StartupTask]{@link @ohos.app.appstartup.StartupTask:StartupTask}的AbilityStage上下文，作为入参传给启动任务的
   *     [init]{@link @ohos.app.appstartup.StartupTask:StartupTask#init(context: AbilityStageContext)}。
   * @param { StartupConfig } config - 表示启动任务配置信息，包含启动框架超时时间与启动任务监听器配置。
   * @returns { Promise<void> } Promise对象，无返回结果。执行失败时可通过异常信息获取错误原因。
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 28800001 - Startup task or its dependency not found.
   * @throws { BusinessError } 28800002 - The startup tasks have circular dependencies.
   * @throws { BusinessError } 28800003 - An error occurred while running the startup tasks.
   * @throws { BusinessError } 28800004 - Running startup tasks timeout.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function run(startupTasks: Array<string>, context: common.AbilityStageContext, config: StartupConfig): Promise<void>;

  /**
   * 删除所有启动任务结果。
   * 如果存在so预加载任务，则将对应so文件置为未加载状态。对于缓存中已加载的so文件，不会被移除。
   *
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function removeAllStartupTaskResults(): void;

  /**
   * 获取指定启动任务或so预加载任务的执行结果。
   *
   * @param { string } startupTask - 启动任务[StartupTask]{@link @ohos.app.appstartup.StartupTask:StartupTask}的名称或预加载so名称。
   *     名称需与配置文件startup_config.json中配置的name取值保持一致，详见[定义启动任务配置](docroot://application-models/app-startup.md#定义启动任务配置)
   *     和[定义预加载so任务配置](docroot://application-models/app-startup.md#定义预加载so任务配置)。
   * @returns { Object } 输入为启动任务名时，返回指定的启动任务
   *     [init]{@link @ohos.app.appstartup.StartupTask:StartupTask#init(context: AbilityStageContext)}返回的执行结果。
   *     输入为so文件名时，返回undefined。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   */
  function getStartupTaskResult(startupTask: string): Object;

  /**
   * 获取指定启动任务或so预加载任务的执行结果。
   *
   * @param { string } startupTask - 启动任务[StartupTask]{@link @ohos.app.appstartup.StartupTask:StartupTask}的名称或预加载so名称。
   * @returns { Any } The result of specific startup task.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 23 static
   */
  function getStartupTaskResult(startupTask: string): Any;

  /**
   * 获取指定启动任务或so预加载任务是否已初始化。
   *
   * @param { string } startupTask - 启动任务[StartupTask]{@link @ohos.app.appstartup.StartupTask:StartupTask}的名称或预加载so名称。
   * @returns { boolean } 返回布尔值，true表示该启动任务或so预加载任务已初始化完成，false表示尚未初始化完成。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function isStartupTaskInitialized(startupTask: string): boolean;

  /**
   * 删除指定启动任务或so预加载任务的初始化结果。
   * 
   * - 输入为启动任务名时，删除指定启动任务的初始化结果。
   * - 输入为so文件时，将该so文件置为未加载，缓存中已加载的so文件不会被移除。
   *
   * @param { string } startupTask - 启动任务[StartupTask]{@link @ohos.app.appstartup.StartupTask:StartupTask}的名称或预加载so名称。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.Ability.AppStartup
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function removeStartupTaskResult(startupTask: string): void;
}

export default startupManager;