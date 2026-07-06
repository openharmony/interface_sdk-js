/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import ApplicationContext from './application/ApplicationContext';
import Context from './application/Context';

/**
 * 开发者可以通过该模块创建[Context](docroot://application-models/application-context-stage.md)。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @atomicservice
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace application {
  /**
   * 表示应用当前进程的预加载类型枚举。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export enum AppPreloadType {
    /**
     * 未发生预加载或预加载数据已被清除。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * 进程最终预加载到进程创建完成阶段。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_CREATE_PROCESS = 1,

    /**
     * 进程最终预加载到[AbilityStage]{@link @ohos.app.ability.AbilityStage:AbilityStage}创建完成阶段。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_CREATE_ABILITY_STAGE = 2,

    /**
     * 进程最终预加载到[WindowStage]{@link @ohos.window}创建完成阶段。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    TYPE_CREATE_WINDOW_STAGE = 3,

    /**
     * 进程最终预加载到[onBackground]{@link @ohos.app.ability.UIAbility:UIAbility#onBackground}执行完成阶段。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    TYPE_CREATE_BACKGROUND_ABILITY = 4
  }

  /**
   * 创建指定模块的上下文。创建出的模块上下文中[resourceManager.Configuration]{@link @ohos.resourceManager:resourceManager.Configuration}资源继承
   * 自入参上下文，便于开发者获取[跨HAP/HSP包应用资源](docroot://quick-start/resource-categories-and-access.md#跨haphsp包应用资源)。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。
   *
   * @param { Context } context - 表示应用上下文。
   * @param { string } moduleName - 表示应用模块名。
   * @returns { Promise<Context> } Promise对象。返回创建的Context。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  export function createModuleContext(context: Context, moduleName: string): Promise<Context>;

  /**
   * 根据入参Context创建相应模块的Context。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > - 从API version 18开始，Context支持获取当前应用的进程名
   * > [processName](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。
   * > createModuleContext创建的Context中的processName属性与入参Context中的processName属性一致，其他属性根据入参Context、bundleName和moduleName获得相应
   * > 的属性值。
   * >
   * > - 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context - 表示应用上下文。
   * @param { string } bundleName - 表示应用包名。取值为空字符串时，默认为当前应用。
   * @param { string } moduleName - 表示应用模块名。
   * @returns { Promise<Context> } Promise对象。返回创建的Context。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export function createModuleContext(context: Context, bundleName: string, moduleName: string): Promise<Context>;

  /**
   * 根据入参Context、指定的插件包名和插件模块名，创建本应用下插件的Context，用于获取插件的基本信息。使用Promise异步回调。
   *
   * @param { Context } context - 表示应用上下文。
   * @param { string } pluginBundleName - 表示应用的插件包名。
   * @param { string } pluginModuleName - 表示应用的插件模块名。
   * @returns { Promise<Context> } Promise对象。返回创建的Context。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 19 dynamic
   * @since 23 static
   */
  export function createPluginModuleContext(context: Context, pluginBundleName: string, pluginModuleName: string): Promise<Context>;

  /**
   * 根据入参Context、插件包名和插件模块名和应用包名，创建对应插件的Context，用于获取插件的基本信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context - 表示应用上下文。
   * @param { string } pluginBundleName - 表示应用的插件包名。
   * @param { string } pluginModuleName - 表示应用的插件模块名。
   * @param { string } hostBundleName - 表示安装插件的应用包名。
   * @returns { Promise<Context> } Promise对象。返回创建的Context，返回的Context中的属性processName和config与入参Context中的属性processName和config的值相
   *     同。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export function createPluginModuleContextForHostBundle(context: Context, pluginBundleName: string, pluginModuleName: string,
    hostBundleName: string): Promise<Context>;

  /**
   * 根据入参Context创建相应应用的Context。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 18开始，Context支持获取当前应用的进程名
   * > [processName](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。
   * > createBundleContext创建的Context中的processName属性与入参Context中的processName属性一致，其他属性根据入参Context、bundleName和moduleName获得相应
   * > 的属性值。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Context } context - 表示应用上下文。
   * @param { string } bundleName - 表示应用包名。
   * @returns { Promise<Context> } Promise对象。返回创建的Context。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  export function createBundleContext(context: Context, bundleName: string): Promise<Context>;

  /**
   * 获取应用上下文。开发者使用该接口时，无需依赖Context基类。
   * 重复调用该接口，将生成新的ApplicationContext对象。
   *
   * @returns { ApplicationContext } 应用上下文。
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 14 dynamiconly
   */
  export function getApplicationContext(): ApplicationContext;

  /**
   * 获取应用上下文。开发者使用该接口时，无需依赖Context基类。
   * 重复调用该接口，将获取同一个ApplicationContext实例。
   *
   * @returns { ApplicationContext } 应用上下文。
   * @throws { BusinessError } 16000050 - Internal error. Possible causes: Memory operation error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  export function getApplicationContextInstance(): ApplicationContext;

  /**
   * 开发者可以调用该接口将当前进程放入[备选主控进程](docroot://application-models/ability-terminology.md#candidatemasterprocess备选主控进程)链表。使用
   * Promise异步回调。
   * 当[主控进程](docroot://application-models/ability-terminology.md#masterprocess主控进程)销毁后，再次启动配置了isolationProcess为true的
   * UIAbility/UIExtensionAbility组件时，系统会根据是否存在备选主控进程执行相应操作。
   * 
   * - 如果存在备选主控进程，系统会将备选主控进程链表首节点的进程设置为主控进程，触发
   * [onNewProcessRequest]{@link @ohos.app.ability.AbilityStage:AbilityStage#onNewProcessRequest}回调。
   * - 如果不存在备选主控进程，系统会根据组件类型执行相应的操作。
   *   - 对于UIAbility组件，系统将创建新的空进程作为主控进程。
   *   - 对于UIExtensionAbility组件，系统会优先复用已有的UIExtensionAbility进程作为新的主控进程，无可用进程时则创建新的空进程作为主控进程。
   * 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中返回801错误码。
   * 
   * > **说明：**
   * >
   * > 如果当前进程已经是[主控进程](docroot://application-models/ability-terminology.md#masterprocess主控进程)，调用该接口无效并且不会抛出错误码。
   * >
   * > 当前进程只有运行了isolationProcess字段设为true的组件，或曾经成为过主控进程，开发者才可将其设置为备选主控进程。
   * >
   * >
   * > 当前仅支持sys/commonUI类型的UIExtensionAbility组件在[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中配
   * > 置isolationProcess字段为true。
   * 
   * <!--DelEnd-->
   *
   * @param { boolean } insertToHead - 表示是否将当前进程放入备选主控进程链表的表头。true表示放入表头，false表示放入表尾。
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000115 - The current process cannot be set as a candidate master process.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export function promoteCurrentToCandidateMasterProcess(insertToHead: boolean): Promise<void>;

  /**
   * 撤销当前进程的备选主控进程资格。使用Promise异步回调。
   * 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中返回801错误码。
   *
   * @returns { Promise<void> } Promise对象。无返回结果。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000116 - The current process is already a master process and does not support cancellation.
   * @throws { BusinessError } 16000117 - The current process is not a candidate master process and does not support
   *     cancellation.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  export function demoteCurrentFromCandidateMasterProcess(): Promise<void>;

  /**
   * 放弃当前进程的[主控进程](docroot://application-models/ability-terminology.md#masterprocess主控进程)身份。使用Promise异步回调。
   * 该接口仅在2in1、Tablet设备中可正常调用，在其他设备中返回801错误码。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16000118 - Not a master process.
   * @throws { BusinessError } 16000119 - Cannot exit because there is an unfinished request.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  export function exitMasterProcessRole(): Promise<void>;

  /**
   * 获取应用当前进程的预加载类型。
   * 
   * > **说明：**
   * >
   * > - 只有在进程首次执行[AbilityStage.onCreate]{@link @ohos.app.ability.AbilityStage:AbilityStage#onCreate}完成之前调用该接口，才可以返回真实的预
   * > 加载类型。
   * >
   * > - AbilityStage创建完成后，应用的预加载数据将被清除，调用该接口将返回UNSPECIFIED，无法获取到真实的预加载类型。
   *
   * @returns { AppPreloadType } 应用当前进程的预加载类型。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 22 dynamic
   * @since 23 static
   */
  export function getAppPreloadType(): AppPreloadType;
}

export default application;