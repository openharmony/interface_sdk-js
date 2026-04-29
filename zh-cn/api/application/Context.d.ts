/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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

import EventHub from './EventHub';
import { ApplicationInfo } from '../bundleManager/ApplicationInfo';
import ApplicationContext from './ApplicationContext';
import type { AsyncCallback } from '../@ohos.base';
import BaseContext from './BaseContext';
import resmgr from '../@ohos.resourceManager';
import contextConstant from '../@ohos.app.ability.contextConstant';

/**
 * Context是Stage模型的上下文基类，主要用于访问特定应用程序的资源，以及执行应用级操作的回调。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class Context extends BaseContext {
  /**
   * 资源管理对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  resourceManager: resmgr.ResourceManager;

  /**
   * 当前应用程序的信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  applicationInfo: ApplicationInfo;

  /**
   * 缓存目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  cacheDir: string;

  /**
   * 临时目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  tempDir: string;

  /**
   * 文件目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  filesDir: string;

  /**
   * 数据库目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  databaseDir: string;

  /**
   * preferences目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  preferencesDir: string;

  /**
   * 安装包目录。不能拼接路径访问资源文件，请使用[资源管理接口]{@link ./../@ohos.resourceManager:resourceManager}访问资源，详情参考
   * [应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  bundleCodeDir: string;

  /**
   * 分布式文件目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  distributedFilesDir: string;

  /**
   * 资源目录。
   * 
   * > **说明：**
   * >
   * > 需要开发者手动在`\<module-name>\resource`路径下创建`resfile`目录。创建的`resfile`目录仅支持以只读方式访问。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  resourceDir: string;

  /**
   * 云文件目录。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  cloudFileDir: string;

  /**
   * 日志文件目录。
   *
   * @returns { string } 返回日志文件目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  get logFileDir(): string;

  /**
   * 事件中心，提供订阅、取消订阅、触发事件对象。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  eventHub: EventHub;

  /**
   * 文件分区信息，按加密等级[AreaMode]{@link ./../@ohos.app.ability.contextConstant:contextConstant.areaMode}进行分区。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  area: contextConstant.AreaMode;

  /**
   * 文件分区信息，按加密等级[AreaMode]{@link ./../@ohos.app.ability.contextConstant:contextConstant.areaMode}进行分区。
   *
   * @return { contextConstant.AreaMode } Return encryption level of the directory.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  get area(): contextConstant.AreaMode;

  /**
   * 文件分区信息，按加密等级[AreaMode]{@link ./../@ohos.app.ability.contextConstant:contextConstant.areaMode}进行分区。
   *
   * @param { contextConstant.AreaMode } Encryption level of the directory.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  set area(mode: contextConstant.AreaMode);

  /**
   * 当前应用的进程名。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  processName: string;

  /**
   * 根据Bundle名称创建安装包的上下文。
   * 
   * > **说明：**
   * >
   * > - stage模型多module的情况下可能发生资源id冲突的情况，建议使用
   * > [application.createModuleContext]{@link ./../@ohos.app.ability.application:application.createModuleContext}替代。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle名称。
   * @returns { Context } 安装包的上下文。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.app.ability.application:application.createBundleContext
   */
  createBundleContext(bundleName: string): Context;

  /**
   * 根据模块名创建上下文。
   * 
   * > **说明：**
   * >
   * > - 仅支持获取本应用中其他Module的Context和应用内HSP的Context，不支持获取其他应用的Context。
   * > - 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。
   *
   * @param { string } moduleName - 模块名。
   * @returns { Context } 模块的上下文。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.app.ability.application:application.createModuleContext
   */
  createModuleContext(moduleName: string): Context;

  /**
   * 根据Bundle名称和模块名称创建上下文。
   *
   * @param { string } bundleName - Bundle名称。
   * @param { string } moduleName - 模块名。
   * @returns { Context } 模块的上下文。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.app.ability.application:application.createModuleContext
   */
  createModuleContext(bundleName: string, moduleName: string): Context;

  /**
   * 该接口用于OEM厂商预置的[系统级HSP](docroot://quick-start/application-package-glossary.md#系统级hsp)创建自己的
   * [ResourceManager]{@link ./../@ohos.resourceManager:resourceManager}。
   *
   * @param { string } bundleName - Bundle名称。
   * @param { string } moduleName - 模块名。
   * @returns { resmgr.ResourceManager } Returns the system HSP module resource manager.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16400001 - The input bundleName is not a system HSP.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  createSystemHspModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager;

  /**
   * 获取当前应用上下文。
   *
   * @returns { ApplicationContext } 应用上下文。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  getApplicationContext(): ApplicationContext;

  /**
   * 通过应用中的Group ID获取对应的共享目录，使用callback异步回调。
   *
   * @param { string } dataGroupID - 原子化服务类型的应用创建时，系统会指定分配唯一Group ID。
   * @param { AsyncCallback<string> } callback - 回调函数。当获取共享目录成功，err为undefined，data为对应的共享目录，如果不存在则返回为空；否则为错误对象。<br>**说明**
   *     ：仅支持应用el2加密级别。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  getGroupDir(dataGroupID: string, callback: AsyncCallback<string>): void;

  /**
   * 通过应用中的Group ID获取对应的共享目录，使用Promise异步回调。
   *
   * @param { string } dataGroupID - 原子化服务类型的应用创建时，系统会指定分配唯一Group ID。
   * @returns { Promise<string> } Promise对象，返回对应的共享目录。如果不存在则返回为空，仅支持应用el2加密级别。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2
   *     .Incorrect parameter types.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  getGroupDir(dataGroupID: string): Promise<string>;

  /**
   * 为指定Module创建资源管理对象。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle名称。
   * @param { string } moduleName - 模块名。
   * @returns { resmgr.ResourceManager } Object for resource management.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  createModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager;

  /**
   * 创建特定数据加密级别的应用上下文。开发者可以调用该接口创建不同加密级别的上下文，从而获取对应的沙箱路径。
   *
   * @param { contextConstant.AreaMode } areaMode - 指定的数据加密等级。
   * @returns { Context } 指定数据加密等级的上下文。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  createAreaModeContext(areaMode: contextConstant.AreaMode): Context;

  /**
   * 根据指定的物理屏幕ID创建带有屏幕信息（包括屏幕密度[ScreenDensity]{@link ./../@ohos.resourceManager:resourceManager.ScreenDensity}和屏幕方向
   * [Direction]{@link ./../@ohos.resourceManager:resourceManager.Direction}）的应用上下文。
   *
   * @param { long } displayId - 物理屏幕ID。
   * @returns { Context } 带有指定物理屏幕信息的上下文。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
   *     2.Incorrect parameter types.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  createDisplayContext(displayId: long): Context;

  /**
   * 判断当前Context是否为指定的ContextType类型。
   *
   * @param { contextConstant.ContextType } contextType - 上下文类型。
   * @returns { boolean } 是否为指定类型的上下文。返回true表示Context类型为指定类型，返回false表示Context类型匹配失败。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  isContextOf(contextType: contextConstant.ContextType): boolean;
}

export default Context;