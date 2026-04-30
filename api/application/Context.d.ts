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
 * Context is the context base class of the stage model. It is used to access application-specific resources and perform
 * callbacks for application-level operations.
 *docroot://
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class Context extends BaseContext {
  /**
   * Object for resource management.
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
   * Application information.
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
   * Cache directory.
   * For details, see [Application Sandbox](docroot://file-management/app-sandbox-directory.md).
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
   * Temporary directory.
   * For details, see [Application Sandbox](docroot://file-management/app-sandbox-directory.md).
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
   * File directory.
   * For details, see [Application Sandbox](docroot://file-management/app-sandbox-directory.md).
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
   * Database directory.
   * For details, see [Application Sandbox](docroot://file-management/app-sandbox-directory.md).
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
   * Preferences directory.
   * For details, see [Application Sandbox](docroot://file-management/app-sandbox-directory.md).
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
   * Bundle code directory. Do not access resource files using concatenated paths.
   * Use [resource manager APIs]{@link ./../@ohos.resourceManager:resourceManager} instead.
   * For details, see [Application Sandbox](docroot://file-management/app-sandbox-directory.md).
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
   * Distributed file directory.
   * For details, see [Application Sandbox](docroot://file-management/app-sandbox-directory.md).
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  distributedFilesDir: string;

  /**
   * Resource directory.
   *
   * > **NOTE: **
   * >
   * > You are required to manually create the resfile directory in **<module-name>\resource**.
   * > The **resfile** directory can be accessed only in read-only mode.
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
   * Cloud file directory.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  cloudFileDir: string;

  /**
   * Directory for storing log files.
   *
   * @returns { string } Returns the directory for storing log files.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  get logFileDir(): string;

  /**
   * Event hub that implements event subscription, unsubscription, and triggering.
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
   * Information about file partitions, which are divided according to the encryption level specified by
   * [AreaMode]{@link ./../@ohos.app.ability.contextConstant:contextConstant.areaMode}.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  area: contextConstant.AreaMode;

  /**
   * Get encryption level of the directory.
   *
   * @return { contextConstant.AreaMode } Return encryption level of the directory.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  get area(): contextConstant.AreaMode;

  /**
   * Set encryption level of the directory.
   *
   * @param { contextConstant.AreaMode } Encryption level of the directory.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 static
   */
  set area(mode: contextConstant.AreaMode);

  /**
   * Process name of the current application.
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
   * Creates the context based on the bundle name.
   *
   * > **NOTE**
   * >
   * > If there are multiple modules in the stage model, resource ID conflicts may occur. You are advised to use
   * > [application.createModuleContext]{@link ./../@ohos.app.ability.application:application.createModuleContext(context: Context, bundleName: string, moduleName: string)}
   * > instead.
   * >
   * > This API has been supported since API version 9 and deprecated since API version 12. You are advised to use
   * > [application.createBundleContext]{@link ./../@ohos.app.ability.application:application.createBundleContext}
   * > instead.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @returns { Context } Context created.
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
   * Creates the context based on the module name.
   *
   * > **NOTE**
   * >
   * > - Only the context of other modules in the current application and the context of the intra-application HSP can
   * > be obtained. The context of other applications cannot be obtained.
   * >
   * > - This API has been supported since API version 9 and deprecated since API version 12. You are advised to use
   * > [application.createModuleContext]{@link ./../@ohos.app.ability.application:application.createModuleContext(context: Context, moduleName: string)}
   * > instead. Otherwise, resource acquisition may fail.
   * >
   * > - Creating a module context involves resource querying and initialization, which can be time-consuming. In
   * > scenarios where application fluidity is critical, avoid frequently or repeatedly calling the
   * > **createModuleContext** API to create multiple context instances, as this may negatively impact user experience.
   *
   * @param { string } moduleName - Module name.
   * @returns { Context } Context created.
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
   * Creates the context based on the bundle name and module name.
   *
   * > **NOTE**
   * >
   * > This API has been supported since API version 9 and deprecated since API version 12. You are advised to use
   * > [application.createModuleContext]{@link ./../@ohos.app.ability.application:application.createModuleContext(context: Context, bundleName: string, moduleName: string)}
   * > instead.
   *
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @returns { Context } Context created.
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
   * Creates a
   * [resource manager]{@link ./../@ohos.resourceManager:resourceManager.getResourceManager(callback: AsyncCallback<ResourceManager>)}
   * for an OEM-preset [system-level HSP](docroot://quick-start/application-package-glossary.md#system-level-hsp).
   *
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
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
   * Obtains the application context.
   *
   * @returns { ApplicationContext } Application context.
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
   * Obtains the shared directory based on a group ID. This API uses an asynchronous callback to return the result.
   *
   * @param { string } dataGroupID - Group ID, which is assigned by the system when an application of the atomic service
   *     type is created.
   * @param { AsyncCallback<string> } callback - Callback used to return the result. If the API call is successful,
   *     **err** is **undefined** and **data** is the shared directory obtained (or empty if or is empty if non-existent
   *     ). Otherwise, an error object is returned.<br>Note: Only the EL2 encryption level is supported.
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
   * Obtains the shared directory based on a group ID. This API uses a promise to return the result.
   *
   * @param { string } dataGroupID - Group ID, which is assigned by the system when an application of the atomic service
   *     type is created.
   * @returns { Promise<string> } Promise used to return the result. If no shared directory exists, null is returned.
   *     Only the encryption level EL2 is supported.
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
   * Creates a resource management object for a module.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
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
   * Creates an application context with a specific data encryption level. You can call this API to create contexts with
   * different encryption levels, thereby obtaining the corresponding sandbox paths.
   *
   * @param { contextConstant.AreaMode } areaMode - Data encryption level.
   * @returns { Context } Context created based on the data encryption level.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  createAreaModeContext(areaMode: contextConstant.AreaMode): Context;

  /**
   * Creates an application context based on the specified display ID with screen information (including
   * [ScreenDensity]{@link ./../@ohos.resourceManager:resourceManager.ScreenDensity} and
   * [Direction]{@link ./../@ohos.resourceManager:resourceManager.Direction}).
   *
   * @param { long } displayId - Display ID.
   * @returns { Context } Context with the specified screen information.
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
   * Checks if the current instance is associated with the specified context type.
   *
   * @param { contextConstant.ContextType } contextType - Indicates the context type.
   * @returns { boolean } Returns {@code true} if the contextType is matched; returns {@code false} otherwise.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  isContextOf(contextType: contextConstant.ContextType): boolean;
}

export default Context;