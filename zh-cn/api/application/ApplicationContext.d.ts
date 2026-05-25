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
import window from '../@ohos.window';
import InteropAbilityLifecycleCallback from '../@ohos.app.ability.InteropAbilityLifecycleCallback';
/*** if arkts dynamic */
import type ApplicationStateChangeCallback from '../@ohos.app.ability.ApplicationStateChangeCallback';
/*** endif */
/*** if arkts static */
import ApplicationStateChangeCallback from '../@ohos.app.ability.ApplicationStateChangeCallback';
/*** endif */
import systemConfiguration from '../@ohos.app.ability.systemConfiguration';

/**
 * ApplicationContext作为应用上下文，继承自[Context]{@link ./../app/context}，提供了应用生命周期监听、进程管理、应用环境设置等应用级别的管控能力。
 *
 * > **说明：**
 * >
 * > 本模块接口仅可在Stage模型下使用。
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
   * 注册监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。
   *
   * @param { 'abilityLifecycle' } type - 此类型表示应用内UIAbility的生命周期，固定为'abilityLifecycle'。
   * @param { AbilityLifecycleCallback } callback - UIAbility生命周期变化时触发的回调方法。
   * @returns { number } 返回此次注册的callbackID，该ID用于在
   *     [ApplicationContext.off('abilityLifecycle')]{@link ApplicationContext#off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback<void>)}
   *     方法中取消注册对应的callback。
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
   * 注册监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。
   *
   * @param { AbilityLifecycleCallback } callback -	UIAbility生命周期变化时触发的回调方法。
   * @returns { int } 	返回此次注册的callbackID（每次注册该ID会自增+1，当超过监听上限数量2^63-1时，返回-1），该ID用于在ApplicationContext.offAbilityLifecycle方法中取消注册对应的callback。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onAbilityLifecycle(callback: AbilityLifecycleCallback): int;

  /**
   * 注册监听应用内不同ArkTS环境下的UIAbility生命周期。仅支持主线程调用。
   *
   * @param { InteropAbilityLifecycleCallback } callback - 不同ArkTS环境下UIAbility生命周期变化时触发的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onInteropAbilityLifecycle(callback: InteropAbilityLifecycleCallback): void;

  /**
   * 取消监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。
   *
   * @param { 'abilityLifecycle' } type - 此类型表示应用内UIAbility的生命周期，固定为'abilityLifecycle'。
   * @param { number } callbackId - 通过
   *     [ApplicationContext.on('abilityLifecycle')]{@link ApplicationContext#on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback)}
   *     接口注册监听应用内UIAbility的生命周期时返回的ID。
   * @param { AsyncCallback<void> } callback - 回调方法。当取消监听应用内生命周期成功，err为undefined，否则为错误对象。
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
   * 取消监听应用内UIAbility的生命周期。使用callback异步回调。仅支持主线程调用。
   *
   * @param { int } callbackId - 通过
   *     [ApplicationContext.on('abilityLifecycle')]{@link ApplicationContext#on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback)}
   *     接口注册监听应用内UIAbility的生命周期时返回的ID。
   * @param { AsyncCallback<void> } callback - 回调方法。当取消监听应用内生命周期成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offAbilityLifecycle(callbackId: int, callback: AsyncCallback<void>): void;

  /**
   * 取消监听应用内UIAbility的生命周期。使用Promise异步回调。仅支持主线程调用。
   *
   * @param { 'abilityLifecycle' } type - 此类型表示应用内UIAbility的生命周期，固定为'abilityLifecycle'。
   * @param { number } callbackId - 通过
   *     [ApplicationContext.on('abilityLifecycle')]{@link ApplicationContext#on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback)}
   *     接口注册监听应用内UIAbility的生命周期时返回的ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 取消监听应用内UIAbility的生命周期。使用Promise异步回调。仅支持主线程调用。
   *
   * @param { int } callbackId - 通过
   *     [ApplicationContext.on('abilityLifecycle')]{@link ApplicationContext#on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback)}
   *     接口注册监听应用内UIAbility的生命周期时返回的ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offAbilityLifecycle(callbackId: int): Promise<void>;

  /**
   * 取消应用内不同ArkTS环境下UIAbility生命周期的监听。仅支持主线程调用。
   *
   * @param { InteropAbilityLifecycleCallback } [callback] - 不同ArkTS环境下UIAbility生命周期变化时触发的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offInteropAbilityLifecycle(callback?: InteropAbilityLifecycleCallback): void;

  /**
   * 注册对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > - 使用[onConfigurationUpdate]{@link ./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate}也可以实现对系统环境变量的监听。相较
   * > 于Ability的[onConfigurationUpdate]{@link ./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate}接口，当前接口的使用场景更
   * > 加灵活，不仅可以在应用组件中使用，还可以在页面中使用，但是支持订阅的环境变量与Ability的
   * > [onConfigurationUpdate]{@link ./../@ohos.app.ability.Ability:Ability.onConfigurationUpdate}接口存在差异，如不支持订阅direction
   * > 、screenDensity、displayId，详见[Configuration]{@link ./../@ohos.app.ability.Configuration:Configuration}中各个环境变量的说明。
   * >
   * > - 当前接口在实际触发时存在一定限制。例如如果开发者通过[setLanguage]{@link ApplicationContext:ApplicationContext.setLanguage}接口设置应用的语言，即便系统语
   * > 言发生变化，系统也不再触发当前接口的[callback]{@link ./../@ohos.app.ability.EnvironmentCallback}回调。详见
   * > [使用场景](docroot://application-models/subscribe-system-environment-variable-changes.md#使用场景)。
   *
   * @param { 'environment' } type - 此类型表示系统环境变化，如系统深浅色发生变化，固定为'environment'。
   * @param { EnvironmentCallback } callback - 系统环境变化时触发的回调方法。
   * @returns { number } 返回此次注册的callbackID，该ID用于在
   *     [ApplicationContext.off('environment')]{@link ApplicationContext#off(type: 'environment', callbackId: number, callback: AsyncCallback<void>)}
   *     方法中取消注册对应的callback。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  on(type: 'environment', callback: EnvironmentCallback): number;

  /**
   * 注册对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * @param { EnvironmentCallback } callback - 系统环境变化时触发的回调方法。
   * @returns { int } 返回此次注册的callbackID（每次注册该ID会自增+1，当超过监听上限数量2^63-1时，返回-1），该ID用于在
   *     [ApplicationContext.offEnvironment]{@link ApplicationContext.offEnvironment}方法中取消注册对应的callback。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onEnvironment(callback: EnvironmentCallback): int;

  /**
   * 取消对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * @param { 'environment' } type - 此类型表示系统环境变化，如系统深浅色发生变化，固定为'environment'。
   * @param { number } callbackId - 通过
   *     [ApplicationContext.on('environment')]{@link ApplicationContext#on(type: 'environment', callback: EnvironmentCallback)}
   *     接口注册监听系统环境变化时返回的ID。
   * @param { AsyncCallback<void> } callback - 回调方法。当取消对系统环境变化的监听成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  off(type: 'environment', callbackId: number, callback: AsyncCallback<void>): void;

  /**
   * 取消对系统环境变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * @param { int } callbackId - 	通过[ApplicationContext.onEnvironment]{@link ApplicationContext.onEnvironment}接口注册监听系统环
   *     境变化时返回的ID。
   * @param { AsyncCallback<void> } callback - 回调方法。当取消对系统环境变化的监听成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offEnvironment(callbackId: int, callback: AsyncCallback<void>): void;

  /**
   * 取消对系统环境变化的监听。使用Promise异步回调。仅支持主线程调用。
   *
   * @param { 'environment' } type - 此类型表示系统环境变化，如系统深浅色发生变化，固定为'environment'。
   * @param { number } callbackId - 通过
   *     [ApplicationContext.on('environment')]{@link ApplicationContext#on(type: 'environment', callback: EnvironmentCallback)}
   *     接口注册监听系统环境变化时返回的ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  off(type: 'environment', callbackId: number): Promise<void>;

  /**
   * 取消对系统环境变化的监听。使用Promise异步回调。仅支持主线程调用。
   *
   * @param { int } callbackId - 通过[ApplicationContext.onEnvironment]{@link ApplicationContext.onEnvironment}接口注册监听系统环境
   *     变化时返回的ID。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offEnvironment(callbackId: int): Promise<void>;

  /**
   * 注册对当前应用进程状态变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * @param { 'applicationStateChange' } type - 此类型表示当前应用进程状态变化，固定为'applicationStateChange'。
   * @param { ApplicationStateChangeCallback } callback - 当前应用进程状态切换时触发的回调方法。
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
   * 注册对当前应用前后台状态变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * @param { ApplicationStateChangeCallback } callback - 应用前后台切换时触发的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  onApplicationStateChange(callback: ApplicationStateChangeCallback): void;

  /**
   * 取消对当前应用进程状态变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * @param { 'applicationStateChange' } type - 此类型表示当前应用进程状态变化，固定为'applicationStateChange'。
   * @param { ApplicationStateChangeCallback } [callback] - 回调函数。取值可以为使用
   *     [ApplicationContext.on('applicationStateChange')]{@link ApplicationContext#on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback)}
   *     方法定义的callback回调，也可以为空。<br/>-?如果传入已定义的回调，则取消该监听。 <br/>-?如果未传入参数，则取消所有已注册的该类型事件的监听。
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
   * 取消对应用前后台状态变化的监听。使用callback异步回调。仅支持主线程调用。
   *
   * @param { ApplicationStateChangeCallback } [callback] - 回调函数。取值可以为使用
   *     [ApplicationContext.onApplicationStateChange]{@link ApplicationContext.onApplicationStateChange}方法定义的callback回
   *     调，也可以为空。
   *     - 如果传入已定义的回调，则取消该监听。
   *     - 如果未传入参数，则取消当前应用对所有前后台切换事件的监听。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 23 static
   */
  offApplicationStateChange(callback?: ApplicationStateChangeCallback): void;

  /**
   * 获取运行中的进程信息。使用Promise异步回调。
   *
   * @returns { Promise<Array<ProcessInformation>> } Promise对象，返回接口运行结果及有关运行进程的信息，可进行错误处理或其他自定义处理。
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
   * 获取运行中的进程信息。使用callback异步回调。
   *
   * @param { AsyncCallback<Array<ProcessInformation>> } callback - 回调函数，返回有关运行进程的信息。
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
   * 终止应用的所有进程，进程退出时不会正常执行完整的应用生命周期流程。使用Promise异步回调。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 该接口用于应用异常场景中强制退出应用。如需正常退出应用，可以使用[terminateSelf()]{@link UIAbilityContext:UIAbilityContext#terminateSelf()}接口。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 终止应用的所有进程，进程退出时不会正常执行完整的应用生命周期流程。使用Promise异步回调。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 该接口用于应用异常场景中强制退出应用。如需正常退出应用，可以使用[terminateSelf()]{@link UIAbilityContext:UIAbilityContext#terminateSelf()}接口。
   *
   * @param { boolean } clearPageStack - 表示是否清除页面堆栈。true表示清除，false表示不清除。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 终止应用的所有进程，进程退出时不会正常执行完整的应用生命周期流程。使用callback异步回调。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 该接口用于应用异常场景中强制退出应用。如需正常退出应用，可以使用[terminateSelf()]{@link UIAbilityContext:UIAbilityContext#terminateSelf()}接口。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当终止应用所在的进程成功，err为undefined，否则为错误对象。
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
   * 设置应用的深浅色模式。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 调用该接口前，需要确保窗口已完成创建、且UIAbility对应的页面已完成加载，即在
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}生命周期中通过
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法加载页面之后调用。
   *
   * @param { ConfigurationConstant.ColorMode } colorMode - 深浅色模式，包括：深色模式、浅色模式、未设置颜色模式（默认）。
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
   * 设置应用的语言。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 调用该接口前，需要确保窗口已完成创建、且UIAbility对应的页面已完成加载，即在
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}生命周期中通过
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法加载页面之后调用。
   *
   * @param { string } language - 设置语言，当前支持的语言列表可以通过
   *     [getSystemLanguages()]{@link ./../@ohos.i18n:i18n.System.getSystemLanguages}获取。
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
   * 清理当前应用的应用文件路径下的所有数据，同时撤销应用向用户申请的权限。使用Promise异步回调。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 应用文件路径详见[应用文件目录信息](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。图中仅标识了el1~el2目录下的应用文件路径，其他文件
   * > 加密类型目录下的应用文件路径可以参考el1。
   * >
   * > 该接口会停止应用进程，应用进程停止后，后续的所有回调都不会再触发。
   *
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  clearUpApplicationData(): Promise<void>;

  /**
   * 清理当前应用的应用文件路径下的所有数据，同时撤销应用向用户申请的权限。使用callback异步回调。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 应用文件路径详见[应用文件目录信息](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。图中仅标识了el1~el2目录下的应用文件路径，其他文件
   * > 加密类型目录下的应用文件路径可以参考el1。
   * >
   * > 该接口会停止应用进程，应用进程停止后，后续的所有回调都不会再触发。
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
   * 应用重启并拉起自身指定UIAbility。仅支持主线程调用，且待重启的应用需要处于获焦状态。
   *
   * > **说明：**
   * >
   * > 通过该接口重启应用时，不会触发应用中Ability的onDestroy生命周期回调。
   * >
   * > 在原子化服务调用本接口成功后的3秒内，再次调用本接口、
   * > [restartSelfAtomicService()]{@link ./../@ohos.app.ability.abilityManager:abilityManager.restartSelfAtomicService}
   * > 或[UIAbilityContext.restartApp()]{@link UIAbilityContext:UIAbilityContext.restartApp}接口中的任一接口，系统将返回错误码16000064。
   * >
   * > 在应用调用本接口成功后的3秒内，若再次调用本接口或[UIAbilityContext.restartApp()]{@link UIAbilityContext:UIAbilityContext.restartApp}接口中的任
   * > 一接口，系统将返回错误码16000064。
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
   * Preload UIExtensionAbility.
   *
   * @permission ohos.permission.PRELOAD_UI_EXTENSION_ABILITY
   * @param { Want } want - Indicates the want of target UIExtensionAbility.
   * @returns { Promise<void> } The promise returned by the function.
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
   * 设置当前应用进程是否支持进程资源的缓存，便于应用再次启动时复用缓存的进程资源。仅支持主线程调用。
   *
   * 该接口仅对单个进程实例生效，不同进程实例互不影响。应用进程实例销毁后，已设置的状态不保留，需要重新设置。
   *
   * > **说明：**
   * >
   * > - 该接口仅表示应用自身是否为缓存后快速启动做好了准备，还需综合其他条件来判断最终是否为应用启用快速启动。
   * >
   * > - 为了确保该接口在进程退出前生效，调用时机应尽量提前。建议在[AbilityStage]{@link ./../@ohos.app.ability.AbilityStage:AbilityStage}的`onCreate()
   * > `中调用该接口。
   * >
   * > - 在同一进程多次调用该接口时，会以最后一次调用的结果为准。当存在多个AbilityStage时，为了确保结果符合预期，需要在各个AbilityStage中分别调用该接口并配置相同的取值。
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
   * 设置应用的字体类型。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 调用该接口前，需要确保窗口已完成创建、且UIAbility对应的页面已完成加载，即在
   * > [onWindowStageCreate()]{@link ./../@ohos.app.ability.UIAbility:UIAbility.onWindowStageCreate}生命周期中通过
   * > [loadContent](docroot://reference/apis-arkui/arkts-apis-window-WindowStage.md#loadcontent9)方法加载页面之后调用。
   *
   * @param { string } font - 设置字体类型，字体可以通过
   *     [UIContext.registerFont](docroot://reference/apis-arkui/arkts-apis-uicontext-font.md#registerfont)方法进行注册使用。
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
   * 获取当前应用的分身索引。
   *
   * @returns { int } 当前应用的分身索引。
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
   * 设置应用字体大小缩放比例。仅支持主线程调用。
   *
   * @param {double} fontSizeScale - 表示字体缩放比例，取值为非负数。当应用字体
   *     [跟随系统](docroot://quick-start/app-configuration-file.md#configuration标签)且该字段取值超过
   *     [fontSizeMaxScale](docroot://quick-start/app-configuration-file.md#configuration标签)取值时，实际生效值为
   *     [fontSizeMaxScale](docroot://quick-start/app-configuration-file.md#configuration标签)取值。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 21]
   * @atomicservice
   * @since 13 dynamic
   * @since 23 static
   */
  setFontSizeScale(fontSizeScale: double): void;

  /**
   * 获取当前应用多实例的唯一实例标识。仅支持主线程调用。
   *
   * @returns { string } 返回当前应用多实例的唯一实例标识。
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000078 - The multi-instance is not supported.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @since 14 dynamic
   * @since 23 static
   */
  getCurrentInstanceKey(): string;

  /**
   * 获取应用的所有多实例的唯一实例标识。使用Promise异步回调。仅支持主线程调用。
   *
   * @returns { Promise<Array<string>> } Promise对象，返回应用的所有多实例的唯一实例标识。
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
   * 获取应用当前进程内的所有WindowStage对象。使用Promise异步回调。仅支持主线程调用。
   *
   * 该接口主要用于包含多个UIAbility的应用进行多窗口管理，例如管理多个WindowStage的状态、同一应用的多个窗口间的状态或数据同步等。
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
   * 注册监听系统环境[Configuration]{@link ./../@ohos.app.ability.Configuration:Configuration}的变化。使用callback异步回调。仅支持主线程调用。
   *
   * > **说明：**
   * >
   * > 应用自定义的设置不影响回调函数的触发。例如：应用自定义设置了深浅色模式，当系统深浅色模式变化后，注册的回调函数依然会触发。
   *
   * @param { systemConfiguration.UpdatedCallback } callback - 系统环境变化时触发的回调方法。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  onSystemConfigurationUpdated(callback: systemConfiguration.UpdatedCallback): void;

  /**
   * 取消监听系统环境[Configuration]{@link ./../@ohos.app.ability.Configuration:Configuration}的变化。仅支持主线程调用。
   *
   * <p>**NOTE**:
   * <br>It can be called only by the main thread.
   * </p>
   *
   * @param { systemConfiguration.UpdatedCallback } [callback] - 回调函数。取值可以为使用
   *     [ApplicationContext.onSystemConfigurationUpdated](docroot://reference/apis-ability-kit/js-apis-inner-application-applicationContext.md#applicationcontextonsystemconfigurationupdated24)
   *     方法注册的callback回调，也可以为空。<br/>-&nbsp;如果传入已定义的回调，则取消该监听。 <br/>-&nbsp;如果未传入参数，则取消所有已注册的监听。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  offSystemConfigurationUpdated(callback?: systemConfiguration.UpdatedCallback): void;
}

export default ApplicationContext;