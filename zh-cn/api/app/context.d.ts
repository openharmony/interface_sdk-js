/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The Context module provides context for ability components or applications. It allows access to application-specific 
 * resources, as well as permission requests and verification.
 * 
 * > **NOTE**
 * 
 * > The APIs of this module can be used only in the FA model.
 *
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from '../@ohos.base';
import { ApplicationInfo } from '../bundle/applicationInfo';
import { ProcessInfo } from './processInfo';
import { ElementName } from '../bundle/elementName';
import BaseContext from '../application/BaseContext';
import { HapModuleInfo } from '../bundle/hapModuleInfo';
import { AppVersionInfo } from './appVersionInfo';
import { AbilityInfo } from '../bundle/abilityInfo';
import bundle from '../@ohos.bundle';

/**
 * Context模块提供了Ability或Application的上下文的基础能力，包括允许访问特定于应用程序的资源、请求和验证权限等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly
 * @since 6 dynamiconly
 */
export interface Context extends BaseContext {
  /**
   * 获取应用程序的本地根目录。使用Promise异步回调。
   * 如果是第一次调用，将创建目录。
   *
   * @returns { Promise<string> } Promise对象，返回应用程序的本地根目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getOrCreateLocalDir(): Promise<string>;

  /**
   * 获取应用程序的本地根目录。使用callback异步回调。
   * 如果是第一次调用，将创建目录。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回应用程序的本地根目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getOrCreateLocalDir(callback: AsyncCallback<string>): void;

  /**
   * 验证系统中运行的特定pid和uid是否具有指定的权限。使用Promise异步回调。
   *
   * @param { string } permission - 指定权限的名称。
   * @param { PermissionOptions } [options] - 权限选项。
   * @returns { Promise<number> } Promise对象，如果pid和uid具有权限，则使用0进行异步回调；否则使用-1回调。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  verifyPermission(permission: string, options?: PermissionOptions): Promise<number>;

  /**
   * 验证系统中运行的特定pid和uid是否允许指定的权限。使用callback异步回调。
   *
   * @param { string } permission - 指定权限的名称。
   * @param { PermissionOptions } options - 权限选项。
   * @param { AsyncCallback<number> } callback - 回调函数，返回权限验证结果，0有权限，-1无权限。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  verifyPermission(permission: string, options: PermissionOptions, callback: AsyncCallback<number>): void;

  /**
   * 验证系统中运行的当前pid和uid是否具有指定的权限。使用callback异步回调。
   *
   * @param { string } permission - 指定权限的名称。
   * @param { AsyncCallback<number> } callback - 回调函数，返回权限验证结果，0有权限，-1无权限。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  verifyPermission(permission: string, callback: AsyncCallback<number>): void;

  /**
   * 从系统请求某些权限。使用callback异步回调。
   *
   * @param { Array<string> } permissions - 指示要请求的权限列表。此参数不能为null。
   * @param { number } requestCode - 指示要传递给[PermissionRequestResult]{@link PermissionRequestResult}的请求代码。
   * @param { AsyncCallback<PermissionRequestResult> } resultCallback - 回调函数，返回授权结果信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  requestPermissionsFromUser(
    permissions: Array<string>,
    requestCode: number,
    resultCallback: AsyncCallback<PermissionRequestResult>
  ): void;

  /**
   * 从系统请求某些权限。使用Promise异步回调。
   *
   * @param { Array<string> } permissions - 指示要请求的权限列表。此参数不能为null。
   * @param { number } requestCode - 指示要传递给[PermissionRequestResult]{@link PermissionRequestResult}的请求代码。
   * @returns { Promise<PermissionRequestResult> } Promise对象，返回授权结果信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  requestPermissionsFromUser(permissions: Array<string>, requestCode: number): Promise<PermissionRequestResult>;

  /**
   * 获取有关当前应用程序的信息。使用callback异步回调。
   *
   * @param { AsyncCallback<ApplicationInfo> } callback - 回调函数，返回当前应用程序的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getApplicationInfo(callback: AsyncCallback<ApplicationInfo>): void;

  /**
   * 获取有关当前应用程序的信息。使用Promise异步回调。
   *
   * @returns { Promise<ApplicationInfo> } Promise对象，返回当前应用程序的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getApplicationInfo(): Promise<ApplicationInfo>;

  /**
   * 获取当前ability的Bundle名称。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回当前ability的Bundle名称。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getBundleName(callback: AsyncCallback<string>): void;

  /**
   * 获取当前ability的Bundle名称。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回当前ability的Bundle名称。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getBundleName(): Promise<string>;

  /**
   * 获取当前ability的显示方向。使用callback异步回调。
   *
   * @param { AsyncCallback<bundle.DisplayOrientation> } callback - 回调函数，返回屏幕显示方向。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getDisplayOrientation(callback: AsyncCallback<bundle.DisplayOrientation>): void;

  /**
   * 获取此能力的当前显示方向。使用Promise异步回调。
   *
   * @returns { Promise<bundle.DisplayOrientation> } Indicates the screen display direction.
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getDisplayOrientation(): Promise<bundle.DisplayOrientation>;

  /**
   * 获取应用程序的外部缓存目录。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回应用程序的缓存目录的绝对路径。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 7
   */
  getExternalCacheDir(callback: AsyncCallback<string>): void;

  /**
   * 获取应用程序的外部缓存目录。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回应用程序的缓存目录的绝对路径。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 6 dynamiconly
   * @deprecated since 7
   */
  getExternalCacheDir(): Promise<string>;

  /**
   * 设置当前Ability的显示方向。使用callback异步回调。
   *
   * @param { bundle.DisplayOrientation } orientation - 指示当前能力的新方向。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置当前Ability的显示方向成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  setDisplayOrientation(orientation: bundle.DisplayOrientation, callback: AsyncCallback<void>): void;

  /**
   * 设置当前Ability的显示方向。使用Promise异步回调。
   *
   * @param { bundle.DisplayOrientation } orientation - 表示屏幕显示方向。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  setDisplayOrientation(orientation: bundle.DisplayOrientation): Promise<void>;

  /**
   * 设置每当显示锁屏时是否在锁屏顶部显示此功能，使该功能保持激活状态。使用callback异步回调。
   *
   * @param { boolean } show - 指定是否在锁屏顶部显示此功能。值true表示在锁屏上显示，值false表示不显示。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置每当显示锁屏时是否在锁屏顶部显示此功能并使该功能保持激活状态的操作成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.window:window.WindowStage.setShowOnLockScreen
   */
  setShowOnLockScreen(show: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置每当显示锁屏时是否在锁屏顶部显示此功能，使该功能保持激活状态。使用Promise异步回调。
   *
   * @param { boolean } show - 指定是否在锁屏顶部显示此功能。值true表示在锁屏上显示，值false表示不显示。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.window:window.WindowStage.setShowOnLockScreen
   */
  setShowOnLockScreen(show: boolean): Promise<void>;

  /**
   * 设置恢复此功能时是否唤醒屏幕。使用callback异步回调。
   *
   * @param { boolean } wakeUp - 指定是否唤醒屏幕。值true表示唤醒它，值false表示不唤醒它。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置恢复此功能时是否唤醒屏幕成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.window:window.setWakeUpScreen
   */
  setWakeUpScreen(wakeUp: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置恢复此功能时是否唤醒屏幕。使用Promise异步回调。
   *
   * @param { boolean } wakeUp - 指定是否唤醒屏幕。值true表示唤醒它，值false表示不唤醒它。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   * @deprecated since 12
   * @useinstead @ohos.window:window.setWakeUpScreen
   */
  setWakeUpScreen(wakeUp: boolean): Promise<void>;

  /**
   * 获取有关当前进程的信息，包括进程ID和名称。使用callback异步回调。
   *
   * @param { AsyncCallback<ProcessInfo> } callback - 回调函数，返回当前进程的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getProcessInfo(callback: AsyncCallback<ProcessInfo>): void;

  /**
   * 获取有关当前进程的信息，包括进程id和名称。使用Promise异步回调。
   *
   * @returns { Promise<ProcessInfo> } Promise对象，返回当前进程的信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getProcessInfo(): Promise<ProcessInfo>;

  /**
   * 获取当前ability的ohos.bundleManager.ElementName对象。使用callback异步回调。
   * 此方法仅适用于页面功能。
   *
   * @param { AsyncCallback<ElementName> } callback - 回调函数，返回当前ability的ohos.bundleManager.ElementName对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getElementName(callback: AsyncCallback<ElementName>): void;

  /**
   * 获取当前能力的ohos.bundleManager.ElementName对象。使用Promise异步回调。
   * 此方法仅适用于页面功能。
   *
   * @returns { Promise<ElementName> } Promise对象，返回当前ability的ohos.bundleManager.ElementName对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getElementName(): Promise<ElementName>;

  /**
   * 获取当前进程的名称。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回当前进程的名称。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getProcessName(callback: AsyncCallback<string>): void;

  /**
   * 获取当前进程的名称。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回当前进程的名称。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getProcessName(): Promise<string>;

  /**
   * 获取ability调用方的Bundle名称。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回ability调用方的Bundle名称。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getCallingBundle(callback: AsyncCallback<string>): void;

  /**
   * 获取ability调用方的Bundle名称。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回ability调用方的Bundle名称。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getCallingBundle(): Promise<string>;

  /**
   * 获取内部存储器上此应用程序的文件目录。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回内部存储器上此应用程序的文件目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 6 dynamiconly
   */
  getFilesDir(callback: AsyncCallback<string>): void;

  /**
   * 获取内部存储器上此应用程序的文件目录。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回内部存储器上此应用程序的文件目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 6 dynamiconly
   */
  getFilesDir(): Promise<string>;

  /**
   * 获取该应用程序的内部存储目录。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回该应用程序的内部存储目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 6 dynamiconly
   */
  getCacheDir(callback: AsyncCallback<string>): void;

  /**
   * 获取该应用程序的内部存储目录。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回该应用程序的内部存储目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 6 dynamiconly
   */
  getCacheDir(): Promise<string>;

  /**
   * 获取Ability或应用的分布式文件路径。使用callback异步回调。
   * 如果分布式文件路径不存在，系统将创建一个路径并返回创建的路径。
   *
   * @returns { Promise<string> } 回调函数，返回Ability或应用的分布式文件路径。若路径不存在，系统将创建一个路径并返回创建的路径。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getOrCreateDistributedDir(): Promise<string>;

  /**
   * 获取Ability或应用的分布式文件路径。使用Promise异步回调。
   * 如果分布式文件路径不存在，系统将创建一个路径并返回创建的路径。
   *
   * @param { AsyncCallback<string> } callback - Promise对象，返回Ability或应用的分布式文件路径。若为首次调用，则将创建建目录。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getOrCreateDistributedDir(callback: AsyncCallback<string>): void;

  /**
   * 获取此应用的类型。使用callback异步回调。
   *
   * @param { AsyncCallback<string> } callback - 回调函数，返回此应用程序的类型。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getAppType(callback: AsyncCallback<string>): void;

  /**
   * 获取此应用的类型。使用Promise异步回调。
   *
   * @returns { Promise<string> } Promise对象，返回此应用的类型。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getAppType(): Promise<string>;

  /**
   * 获取应用的ModuleInfo对象。使用callback异步回调。
   *
   * @param { AsyncCallback<HapModuleInfo> } callback - 回调函数，返回应用的ModuleInfo对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getHapModuleInfo(callback: AsyncCallback<HapModuleInfo>): void;

  /**
   * 获取应用的ModuleInfo对象。使用Promise异步回调。
   *
   * @returns { Promise<HapModuleInfo> } Promise对象，返回应用的ModuleInfo对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getHapModuleInfo(): Promise<HapModuleInfo>;

  /**
   * 获取应用的版本信息。使用callback异步回调。
   *
   * @param { AsyncCallback<AppVersionInfo> } callback - 回调函数，返回应用版本信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getAppVersionInfo(callback: AsyncCallback<AppVersionInfo>): void;

  /**
   * 获取应用的版本信息。使用Promise异步回调。
   *
   * @returns { Promise<AppVersionInfo> } Promise对象，返回应用版本信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getAppVersionInfo(): Promise<AppVersionInfo>;

  /**
   * 获取应用上下文信息。
   *
   * @returns { Context } 返回应用上下文信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getApplicationContext(): Context;

  /**
   * 检查此能力的配置是否正在更改。使用callback异步回调。
   *
   * @param { AsyncCallback<AbilityInfo> } callback - 回调函数，返回true表示该Ability的配置正在更改，否则返回false。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getAbilityInfo(callback: AsyncCallback<AbilityInfo>): void;

  /**
   * 查询当前归属Ability详细信息。使用Promise异步回调。
   *
   * @returns { Promise<AbilityInfo> } Promise对象，返回当前归属Ability详细信息。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  getAbilityInfo(): Promise<AbilityInfo>;

  /**
   * 检查此能力的配置是否正在更改。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数，返回true表示该Ability的配置正在更改，否则返回false。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  isUpdatingConfigurations(callback: AsyncCallback<boolean>): void;

  /**
   * 检查此能力的配置是否正在更改。使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象，返回true表示该Ability的配置正在更改，否则返回false。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  isUpdatingConfigurations(): Promise<boolean>;

  /**
   * 通知系统绘制此页面功能所需的时间。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当通知系统绘制此页面功能所需的时间成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  printDrawnCompleted(callback: AsyncCallback<void>): void;

  /**
   * 通知系统绘制此页面功能所需的时间。使用Promise异步回调。
   *
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  printDrawnCompleted(): Promise<void>;
}

/**
 * 授权结果信息。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly
 * @since 7 dynamiconly
 */
interface PermissionRequestResult {
  /**
   * 用户传入的请求代码。
   *
   * @default The request code passed in by the user
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  requestCode: number;

  /**
   * 用户传入的权限。
   *
   * @default The permissions passed in by the user
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  permissions: Array<string>;

  /**
   * 请求权限的结果。
   *
   * @default The results for the corresponding request permissions
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  authResults: Array<number>;
}

/**
 * 权限选项。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @famodelonly
 * @since 7 dynamiconly
 */
interface PermissionOptions {
  /**
   * 进程id。
   *
   * @default The process id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  pid?: number;

  /**
   * 用户id。
   *
   * @default The user id
   * @syscap SystemCapability.Ability.AbilityRuntime.Core
   * @famodelonly
   * @since 7 dynamiconly
   */
  uid?: number;
}