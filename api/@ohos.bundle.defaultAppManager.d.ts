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
 * The module provides APIs to query whether the current application is the default application of a specific type.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace defaultAppManager {
  /**
   * Enumerates the default application types.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  export enum ApplicationType {
    /**
     * Default browser.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    BROWSER = "Web Browser",
    /**
     * Default image viewer.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    IMAGE = "Image Gallery",
    /**
     * Default audio player.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO = "Audio Player",
    /**
     * Default video player.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    VIDEO = "Video Player",
    /**
     * Default PDF reader.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    PDF = "PDF Viewer",
    /**
     * Default Word viewer.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    WORD = "Word Viewer",
    /**
     * Default Excel viewer.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    EXCEL = "Excel Viewer",
    /**
     * Default PowerPoint viewer.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 9 dynamic
     * @since 23 static
     */
    PPT = "PPT Viewer",
    /**
     * Default email.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
     * @since 12 dynamic
     * @since 23 static
     */
    EMAIL = 'Email'
  }

  /**
   * Checks whether this application is the default application of a system-defined application type or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses an asynchronous
   * callback to return the result.
   *
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link defaultAppManager.ApplicationType} or
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { AsyncCallback<boolean> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
   *     If the operation is successful, **err** is **null** and **data** is a Boolean value (**true** if the
   *     application is the default application, **false** otherwise). If the operation fails, **err** is an error
   *     object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  function isDefaultApplication(type: string, callback: AsyncCallback<boolean>) : void;

  /**
   * Checks whether this application is the default application of a system-defined application type or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses a promise to
   * return the result.
   *
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link defaultAppManager.ApplicationType} or
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @returns { Promise<boolean> } Promise used to return the result, indicating whether the application is the default
   *     application. **true** if the application is the default application, **false** otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 9 dynamic
   * @since 23 static
   */
  function isDefaultApplication(type: string) : Promise<boolean>;

  /**
   * Checks whether this application is the default application of a system-defined application type or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API returns the result
   * synchronously.
   *
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link defaultAppManager.ApplicationType} or
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @returns { boolean } Returns **true** if the application is the default application; returns **false** otherwise.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.DefaultApp
   * @since 10 dynamic
   * @since 23 static
   */
  function isDefaultApplicationSync(type: string): boolean;

  /**
   * Obtains the default application based on a system-defined application type, a file type that complies with the
   * media type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<BundleInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the information is successfully obtained, **err** is **null** and **data** is the application
   *     information. Otherwise, **err** is an error object.
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
   * Obtains the default application based on a system-defined application type, a file type that complies with the
   * media type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { AsyncCallback<BundleInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the information is successfully obtained, **err** is **null** and **data** is the application
   *     information. Otherwise, **err** is an error object.
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
   * Obtains the default application based on a system-defined application type, a file type that complies with the
   * media type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller.
   * @returns { Promise<BundleInfo> } Promise used to return the default application.
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
   * Obtains the default application based on a system-defined application type, a file type that complies with the
   * media type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API returns the result
   * synchronously.
   *
   * @permission ohos.permission.GET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller.
   * @returns { BundleInfo } Bundle information of the default application.
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
   * Sets the default application for a user based on a system-defined application type, a file type that complies with
   * the media type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { ElementName } elementName - Information about the element to be set as the default application.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. otherwise, **err** is an error object.
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
   * Sets the default application based on a system-defined application type, a file type that complies with the media
   * type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { ElementName } elementName - Information about the element to be set as the default application.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. otherwise, **err** is an error object.
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
   * Sets the default application based on a system-defined application type, a file type that complies with the media
   * type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { ElementName } elementName - Information about the element to be set as the default application.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Sets the default application based on a system-defined application type, a file type that complies with the media
   * type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API returns the result
   * synchronously.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { ElementName } elementName - Information about the element to be set as the default application.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller.
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
   * Sets an application clone as the default application of the specified type. This API returns the result
   * synchronously.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION or
   *     (ohos.permission.SET_DEFAULT_APPLICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS)
   * @param { string } type - Type of the application. The value can be a value of
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType},
   *     [MIMEType](docroot://database/uniform-data-type-list.md#generic-utds), or
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor.UniformDataType}.
   * @param { ElementName } elementName - Element information of the application. Only **bundleName**, **abilityName**,
   *     and **moduleName** are used, and the three properties must be set.
   * @param { int } appIndex - Index of the application clone.<br>The options include 1, 2, 3, 4, and 5.
   * @param { int } [userId] - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .<br>The default value is the user ID of the caller.
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
   * Resets the default application for a user based on a system-defined application type, a file type that complies
   * with the media type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     .
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. otherwise, **err** is an error object.
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
   * Resets the default application based on a system-defined application type, a file type that complies with the media
   * type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**. otherwise, **err** is an error object.
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
   * Resets the default application based on a system-defined application type, a file type that complies with the media
   * type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Resets the default application based on a system-defined application type, a file type that complies with the media
   * type format (either specified by **type** or **subtype**), or a
   * [uniform data type]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}. This API returns the result
   * synchronously.
   *
   * @permission ohos.permission.SET_DEFAULT_APPLICATION
   * @param { string } type - Type of the target application. It must be set to a value defined by
   *     [ApplicationType]{@link @ohos.bundle.defaultAppManager:defaultAppManager.ApplicationType}, a file type that
   *     complies with the media type format, or a value defined by
   *     [UniformDataType]{@link @ohos.data.uniformTypeDescriptor:uniformTypeDescriptor}.
   * @param { int } userId - User ID, which can be obtained by calling
   *     [getOsAccountLocalId]{@link @ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback: AsyncCallback<int>)}
   *     . The default value is the user ID of the caller.
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