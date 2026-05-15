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

import { AsyncCallback } from './@ohos.base';
import { BundleInfo } from './bundleManager/BundleInfo';
import { ElementName } from './bundleManager/ElementName';

/**
 * 本模块提供查询默认应用的能力，支持查询当前应用是否是默认应用。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace defaultAppManager {
  /**
   * 默认应用的应用类型。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ApplicationType {
    /**
     * 默认浏览器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    BROWSER = "Web Browser",
    /**
     * 默认图片查看器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    IMAGE = "Image Gallery",
    /**
     * 默认音频播放器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO = "Audio Player",
    /**
     * 默认视频播放器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO = "Video Player",
    /**
     * 默认PDF文档查看器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    PDF = "PDF Viewer",
    /**
     * 默认WORD文档查看器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    WORD = "Word Viewer",
    /**
     * 默认EXCEL文档查看器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    EXCEL = "Excel Viewer",
    /**
     * 默认PPT文档查看器。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    PPT = "PPT Viewer",
    /**
     * 默认邮件。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 12 dynamic
     * @since 23 static
     */
    EMAIL = 'Email'
  }

  /**
   * 根据系统已定义的应用类型或者[UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}类型判断当前应用是否是该类型的默认应用。使用
   * callback异步回调。
   *
   * @param { string } type - 要查询的应用类型，取[ApplicationType]{@link defaultAppManager.ApplicationType}或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}类型中的值。
   * @param { AsyncCallback<boolean> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，data为bool值
   *     ，true表示是默认应用，false表示不是默认应用；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  function isDefaultApplication(type: string, callback: AsyncCallback<boolean>) : void;

  /**
   * 根据系统已定义的应用类型或者[UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型判断当前
   * 应用是否是该类型的默认应用。使用Promise异步回调。
   *
   * @param { string } type - 要查询的应用类型，取[ApplicationType]{@link defaultAppManager.ApplicationType}或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}类型中的值。
   * @returns { Promise<boolean> } Promise对象，返回当前应用是否是默认应用，true表示是默认应用，false表示不是默认应用。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  function isDefaultApplication(type: string) : Promise<boolean>;

  /**
   * 以同步方法根据系统已定义的应用类型或者[UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}类型判断当前应用是否是该类型的默认
   * 应用，使用boolean形式返回结果。
   *
   * @param { string } type - 要查询的应用类型，取[ApplicationType]{@link defaultAppManager.ApplicationType}或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}类型中的值。
   * @returns { boolean } 返回当前应用是否是默认应用，true表示是默认应用，false表示不是默认应用。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 10 dynamic
   * @since 23 static
   */
  function isDefaultApplicationSync(type: string): boolean;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息。使用
   * callback异步回调。
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - 要查询的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<BundleInfo> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，data为获取
   *     到的应用信息；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultApplication(type: string, userId: int, callback: AsyncCallback<BundleInfo>) : void;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息。使用
   * callback异步回调。
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - 要查询的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { AsyncCallback<BundleInfo> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取成功时，err为undefined，data为获取
   *     到的应用信息；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultApplication(type: string, callback: AsyncCallback<BundleInfo>) : void;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息。使用Promise
   * 异步回调。
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - 要查询的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户。
   * @returns { Promise<BundleInfo> } Promise对象，返回默认应用包信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultApplication(type: string, userId?: int) : Promise<BundleInfo>;

  /**
   * 以同步方法根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型获取默认应用信息，使用
   * BundleInfo返回结果。
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - 要查询的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户。
   * @returns { BundleInfo } 返回的默认应用包信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700023 - The specified default app does not exist.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getDefaultApplicationSync(type: string, userId?: int): BundleInfo;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。使用callback异
   * 步回调。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要设置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { ElementName } elementName - 要设置为默认应用的组件信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当设置默认应用成功时，err返回undefined。否则回调函数返回
   *     具体错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDefaultApplication(type: string, elementName: ElementName, userId: int, callback: AsyncCallback<void>) : void;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。使用callback异
   * 步回调。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要设置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { ElementName } elementName - 要设置为默认应用的组件信息。
   * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当设置默认应用成功时，err返回undefined。否则回调函数返回
   *     具体错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDefaultApplication(type: string, elementName: ElementName, callback: AsyncCallback<void>) : void;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。使用Promise异步
   * 回调。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要设置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { ElementName } elementName - 要设置为默认应用的组件信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setDefaultApplication(type: string, elementName: ElementName, userId?: int) : Promise<void>;

  /**
   * 以同步方法根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型设置默认应用。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要设置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { ElementName } elementName - 要设置为默认应用的组件信息。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability does not match the type.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setDefaultApplicationSync(type: string, elementName: ElementName, userId?: int): void;

  /**
   * 以同步方法将分身应用设置为打开相应type类型的默认应用。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION or
   *     (ohos.permission.SET_DEFAULT_APPLICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } type - 要设置的应用类型，支持取值包括：
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值、
   *     [MIMEType](docroot://database/uniform-data-type-list.md#基础类型)类型、或
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { ElementName } elementName - 要设置为默认应用的组件信息，仅使用其中的bundleName、abilityName、moduleName属性，且三个属性必须设置。
   * @param { int } appIndex - 表示分身应用的索引。<br>取值范围：1、2、3、4、5。
   * @param { int } [userId] - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。<br>默认值：调用方所在用户Id。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user id is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @throws { BusinessError } 17700028 - The specified ability and type do not match.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 23 dynamic&static
   */
  function setDefaultApplicationForAppClone(type: string, elementName: ElementName, appIndex: int, userId?: int): void;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。使用callback异
   * 步回调。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要重置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。
   * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当重置默认应用成功时，err返回undefined。否则回调函数返回
   *     具体错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function resetDefaultApplication(type: string, userId: int, callback: AsyncCallback<void>) : void;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。使用callback异
   * 步回调。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要重置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当重置默认应用成功时，err返回undefined。否则回调函数返回
   *     具体错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function resetDefaultApplication(type: string, callback: AsyncCallback<void>) : void;

  /**
   * 根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。使用Promise异步
   * 回调。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要重置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function resetDefaultApplication(type: string, userId?: int) : Promise<void>;

  /**
   * 以同步方法根据系统已定义的应用类型或者符合媒体类型格式（type/subtype）的文件类型或者
   * [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型重置默认应用。
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - 要重置的应用类型，取
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}中的值，或者符合媒体类型格式的文件类型，或者
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}类型。
   * @param { int } userId - 表示用户ID，可以通过
   *     [getOsAccountLocalId接口]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     获取。默认值：调用方所在用户。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700004 - The specified user ID is not found.
   * @throws { BusinessError } 17700025 - The specified type is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function resetDefaultApplicationSync(type: string, userId?: int): void;
}

export default defaultAppManager;