/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @kit FormKit
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import formInfo from './@ohos.app.form.formInfo';

/**
 * The **formHost** module provides APIs related to the widget host, which is an application that displays the widget 
 * content and controls the position where the widget is displayed. You can use the APIs to delete, release, and update
 * widgets installed by the same user, and obtain widget information and status.
 *
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace formHost {
  /**
   * Add a form.
   * 
   * You can use this method to create a theme form.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Want } want - Indicates want of the form.
   * @returns { Promise<formInfo.RunningFormInfo> } Return the form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function addForm(want: Want): Promise<formInfo.RunningFormInfo>;

  /**
   * Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager 
   * will not retain the widget information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is deleted, **error**
   *     is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager 
   * will not retain the widget information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteForm(formId: string): Promise<void>;

  /**
   * Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager 
   * still retains the widget cache and storage information. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is released, **error**
   *     is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function releaseForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager 
   * retains the storage information about the widget and retains or releases the cache information based on the 
   * setting. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { boolean } isReleaseCache - Whether to release the cache.
   *     <br>**true**: Release the cache.
   *     <br>**false**: Not release the cache.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is released, **error**
   *     is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function releaseForm(formId: string, isReleaseCache: boolean, callback: AsyncCallback<void>): void;

  /**
   * Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager 
   * retains the storage information about the widget and retains or releases the cache information based on the 
   * setting. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { boolean } [isReleaseCache] - Whether to release the cache. The default value is **false**.
   *     <br>**true**: Release the cache.
   *     <br>**false**: Not release the cache.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function releaseForm(formId: string, isReleaseCache?: boolean): Promise<void>;

  /**
   * Requests a widget update. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is updated, **error**
   *     is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * Requests a widget update. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestForm(formId: string): Promise<void>;

  /**
   * Carries parameters to request a widget update. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { Record<string, Object> } [wantParams] - Parameters used for the update.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function requestFormWithParams(formId: string, wantParams?: Record<string, Object>): Promise<void>;

  /**
   * Converts a temporary widget to a normal one. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is converted to a
   *     normal one, **error** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the maximum allowed.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function castToNormalForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * Converts a temporary widget to a normal one. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the maximum allowed.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function castToNormalForm(formId: string): Promise<void>;

  /**
   * Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If a notification is sent to
   *     the widget framework to make the widget visible, **error** is undefined; otherwise, **error** is an error
   *     object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyVisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyVisibleForms(formIds: Array<string>): Promise<void>;

  /**
   * Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If a notification is sent to the
   *     widget framework to make the widget invisible, **error** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyInvisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyInvisibleForms(formIds: Array<string>): Promise<void>;

  /**
   * Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled 
   * state and can receive updates from the widget provider. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If a notification is sent to the
   *     widget framework to make the widget updatable, **error** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled 
   * state and can receive updates from the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableFormsUpdate(formIds: Array<string>): Promise<void>;

  /**
   * Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive
   * updates from the widget provider. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If a notification is sent to the
   *     widget framework to make the widget not updatable, **error** is undefined; otherwise, **error** is an error
   *     object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive 
   * updates from the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableFormsUpdate(formIds: Array<string>): Promise<void>;

  /**
   * Checks whether the system is ready. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the check is successful,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isSystemReady(callback: AsyncCallback<void>): void;

  /**
   * Checks whether the system is ready. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isSystemReady(): Promise<void>;

  /**
   * Obtains the widget information provided by all applications on the device (excluding template widgets). This API 
   * uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the result. If the widget 
   *     information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error**
   *     is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Obtains the widget information provided by all applications on the device (excluding template widgets). This API 
   * uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>;

  /**
   * Obtains the widget information provided by a specified application on the device (excluding template widgets). 
   * This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the result. If the widget 
   *     information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error**
   *     is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getFormsInfo(bundleName: string, callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Obtains the widget information provided by a specified application on the device (excluding template widgets). This
   *  API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } moduleName - Module name.
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the result. If the widget 
   *     information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error**
   *     is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getFormsInfo(
    bundleName: string,
    moduleName: string,
    callback: AsyncCallback<Array<formInfo.FormInfo>>
  ): void;

  /**
   * Obtains the widget information provided by a specified application on the device (excluding template widgets). 
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } [moduleName] - Module name. By default, no value is passed.
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>;

  /**
   * Obtains the widget information provided by a specified application on the device (excluding template widgets).
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.FormInfoFilter } filter - Filter criterion.
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getFormsInfo(filter: formInfo.FormInfoFilter): Promise<Array<formInfo.FormInfo>>;

  /**
   * Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of valid widget IDs.
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the invalid widgets are deleted, 
   *     **error** is undefined and **data** is the number of widgets deleted; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteInvalidForms(formIds: Array<string>, callback: AsyncCallback<int>): void;

  /**
   * Deletes invalid widgets from the list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of valid widget IDs.
   * @returns { Promise<int> } Promise used to return the number of widgets deleted.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteInvalidForms(formIds: Array<string>): Promise<int>;

  /**
   * Obtains the widget state. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - **Want** information carried to query the widget state. The information must contain the
   *     bundle name, ability name, module name, widget name, and widget dimensions.
   * @param { AsyncCallback<formInfo.FormStateInfo> } callback - Callback used to return the result. If the widget
   *     state is obtained, **error** is undefined and **data** is the widget state obtained; otherwise, **error**
   *     is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function acquireFormState(want: Want, callback: AsyncCallback<formInfo.FormStateInfo>): void;

  /**
   * Obtains the widget state. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - **Want** information carried to query the widget state. The information must contain the
   *     bundle name, ability name, module name, widget name, and widget dimensions.
   * @returns { Promise<formInfo.FormStateInfo> } Promise used to return the widget state obtained.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function acquireFormState(want: Want): Promise<formInfo.FormStateInfo>;

  /**
   * Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget 
   * > is automatically uninstalled.
   *
   * @param { "formUninstall" } type - Event type. The value **"formUninstall"** indicates a widget uninstall event.
   * @param { Callback<string> } callback - Callback used to return the widget ID.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: "formUninstall", callback: Callback<string>): void;

  /**
   * Listens to the event of uninstall form.
   * 
   * You can use this method to listen to the event of uninstall form.
   *
   * @param { Callback<string> } callback - The callback of formUninstall.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onFormUninstall(callback: Callback<string>): void;

  /**
   * Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget 
   * > is automatically uninstalled.
   *
   * @param { "formUninstall" } type - Event type. The value **"formUninstall"** indicates a widget uninstall event.
   * @param { Callback<string> } [callback] - Callback used to return the widget ID. If it is left unspecified, it
   *     indicates the callback for all the events that have been subscribed.
   *     <br> To cancel the subscription with a given callback, this parameter must be set to the same value as 
   *     **callback** in **on("formUninstall")**.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: "formUninstall", callback?: Callback<string>): void;
  
  /**
   * Cancels listening to the event of uninstall form.
   * 
   * You can use this method to cancel listening to the event of uninstall form.
   *
   * @param { Callback<string> } [callback] - The callback of formUninstall.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offFormUninstall(callback?: Callback<string>): void;

  /**
   * Instructs the widgets to make themselves visible. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { boolean } isVisible - Whether the widget is visible.
   *     <br>**true**: The widget is visible.
   *     <br>**false**: The widget is invisible.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the notification is sent,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyFormsVisible(formIds: Array<string>, isVisible: boolean, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widgets to make themselves visible. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { boolean } isVisible - Whether the widget is visible.
   *     <br>**true**: The widget is visible.
   *     <br>**false**: The widget is invisible.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyFormsVisible(formIds: Array<string>, isVisible: boolean): Promise<void>;

  /**
   * Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { boolean } isEnableUpdate - Whether the widget can be updated.
   *     <br>**true**: The widget can be updated.
   *     <br>**false**: The widget cannot be updated.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the notification is sent,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyFormsEnableUpdate(
    formIds: Array<string>,
    isEnableUpdate: boolean,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Instructs the widgets to enable or disable updates. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { boolean } isEnableUpdate - Whether the widget can be updated.
   *     <br>**true**: The widget can be updated.
   *     <br>**false**: The widget cannot be updated.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyFormsEnableUpdate(formIds: Array<string>, isEnableUpdate: boolean): Promise<void>;

  /**
   * Shares a specified widget with a remote device. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } formId - Widget ID.
   * @param { string } deviceId - Remote device ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is shared, **error**
   *     is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function shareForm(formId: string, deviceId: string, callback: AsyncCallback<void>): void;

  /**
   * Shares a specified widget with a remote device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } formId - Widget ID.
   * @param { string } deviceId - Remote device ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function shareForm(formId: string, deviceId: string): Promise<void>;

  /**
   * Notifies that the privacy protection status of the specified widgets changes. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - ID of the widgets.
   * @param { boolean } isProtected - Whether a widget requires privacy protection.
   *     <br>**true**: The widget requires privacy protection.
   *     <br>**false**: The widget does not require privacy protection.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If privacy protection is set
   *     successfully, **error** is undefined; otherwise, **error** is an error object.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyFormsPrivacyProtected(
    formIds: Array<string>,
    isProtected: boolean,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Notifies that the privacy protection status of the specified widgets changes. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - ID of the widgets.
   * @param { boolean } isProtected - Whether a widget requires privacy protection.
   *     <br>**true**: The widget requires privacy protection.
   *     <br>**false**: The widget does not require privacy protection.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function notifyFormsPrivacyProtected(formIds: Array<string>, isProtected: boolean): Promise<void>;

  /**
   * Requests data from the widget provider. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<{ [key: string]: Object }> } callback - Callback used to return the API call result and the
   *     shared data. [since 10 - 10]
   * @param { AsyncCallback<Record<string, Object>> } callback - Callback used to return the API call result and the 
   *     shared data. [since 11]
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   *     invalid input parameter during form operation
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  function acquireFormData(formId: string, callback: AsyncCallback<Record<string, Object>>): void;

  /**
   * Requests data from the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @returns { Promise<{ [key: string]: Object }> } The promise returned by the function. [since 10 - 10]
   * @returns { Promise<Record<string, Object>> } Promise used to return the API call result and the shared 
   *     data. [since 11]
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   *     invalid input parameter during form operation
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamic
   * @since 23 static
   */
  function acquireFormData(formId: string): Promise<Record<string, Object>>;
  /**
   * Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses an 
   * asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework
   * > checks whether the destination is proper and whether the widget has the redirection permission, and then 
   * > triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured, 
   * > in the case of router-based redirection, the widget framework does not trigger redirection for the widget.
   * > - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @param { Callback<Want> } proxy - Callback used to return the Want information required for redirection.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the router proxy is set, **error** is 
   *     **undefined**; otherwise, an exception is thrown.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>, callback: AsyncCallback<void>): void;

   /**
   * Sets a router proxy for widgets and obtains the Want information required for redirection. This API uses a promise 
   * to return the result. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > - Generally, for a widget added to the home screen, in the case of router-based redirection, the widget framework
   * >  checks whether the destination is proper and whether the widget has the redirection permission, and then 
   * > triggers redirection accordingly. For a widget that is added to a widget host and has a router proxy configured, 
   * > in the case of router-based redirection, the widget framework does not trigger redirection for the widget.
   * >
   * > - Only one router proxy can be set for a widget. If multiple proxies are set, only the last proxy takes effect.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @param { Callback<Want> } proxy - Callback used to return the Want information required for redirection.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function setRouterProxy(formIds: Array<string>, proxy: Callback<Want>): Promise<void>;

   /**
   * Clears the router proxy set for widgets. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the router proxy is cleared,
   *     **error** is **undefined**; otherwise, an exception is thrown.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function clearRouterProxy(formIds: Array<string>, callback: AsyncCallback<void>): void;

   /**
   * Clears the router proxy set for widgets. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function clearRouterProxy(formIds: Array<string>): Promise<void>;

  /**
   * Sets the result for the operation of adding a widget to the home screen.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { formInfo.PublishFormResult } result - Result of the operation.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function setPublishFormResult(formId: string, result: formInfo.PublishFormResult): void;

  /**
   * Sets widgets to be recyclable. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - caller is not system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function setFormsRecyclable(formIds: Array<string>): Promise<void>;

  /**
   * Sets widgets to be recyclable. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widgets are set to be
   *     recyclable, **error** is **undefined**; otherwise, an exception is thrown.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - caller is not system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function setFormsRecyclable(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Recycles widgets, that is, reclaiming widget memory. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function recycleForms(formIds: Array<string>): Promise<void>;

  /**
   * Recovers recycled widgets and updates their status to non-recyclable, or updates the status of widgets to non-
   * recyclable if the widgets are not recycled. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - caller is not system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function recoverForms(formIds: Array<string>): Promise<void>;

  /**
   * Recovers widgets. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - Array of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widgets are recovered,
   *     **error** is **undefined**; otherwise, an exception is thrown.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - caller is not system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function recoverForms(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Updates the widget location.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { formInfo.FormLocation } location - Widget location.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - caller is not system app.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  function updateFormLocation(formId: string, location: formInfo.FormLocation): void;

  /**
   * Notifies the update of the widget lock state. This API uses a promise to return the result.
   * If an application is locked, its widget will also be locked and masked in a locked style. To use the widget, you 
   * need to enter the password set for the widget.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { boolean } isLocked - A Boolean value indicates whether a widget is in the locked state. The value
   *     **true** indicates that the widget is in the locked state, and the value **false** indicates the opposite.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - caller is not system app.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  function updateFormLockedState(formId: string, isLocked: boolean): Promise<void>;

  /**
   * Subscribes to the interactive widget animation request event. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { 'formOverflow' } type - Event callback. The supported event is **'formOverflow'**, indicating the
   *     interactive widget animation request.
   * @param { Callback<formInfo.OverflowRequest> } callback - Callback used by the widget host to process the animation
   *     request.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
  function on(type: 'formOverflow', callback: Callback<formInfo.OverflowRequest>): void;

  /**
   * Listens to the event of formOverflow.
   * 
   * You can use this method to listen to the event of formOverflow.
   *
   * @param { Callback<formInfo.OverflowRequest> } callback - The callback of formOverflow.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onFormOverflow(callback: Callback<formInfo.OverflowRequest>): void;

  /**
   * Unsubscribes from the interactive widget animation request event. This API uses an asynchronous callback to return
   *  the result.
   *
   * @param { 'formOverflow' } type - Event callback. The supported event is **'formOverflow'**, indicating the
   *     interactive widget animation request.
   * @param { Callback<formInfo.OverflowRequest> } [callback] - Callback function, which corresponds to the subscribed 
   *     interactive widget animation request. By default, all registered interactive widget animation request events
   *     are deregistered.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
  function off(type: 'formOverflow', callback?: Callback<formInfo.OverflowRequest>): void;

  /**
   * Cancels listening to the event of formOverflow.
   * 
   * You can use this method to cancel listening to the event of formOverflow.
   *
   * @param { Callback<formInfo.OverflowRequest> } [callback] - The callback of formOverflow.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offFormOverflow(callback?: Callback<formInfo.OverflowRequest>): void;

  /**
   * Updates the size of the widget.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { formInfo.FormDimension } newDimension - Widget dimension. For example, **Dimension_1_2** indicates a
   *     1 x 2 widget.
   * @param { formInfo.Rect } newRect - Widget position information, including the X and Y coordinates of the widget's
   *     top-left corner, as well as its width and height.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - caller is not system app.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501012 - The dimension parameter is incorrect
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function updateFormSize(formId: string, newDimension: formInfo.FormDimension, newRect: formInfo.Rect): void;

  /**
   * Subscribes to the event of switching the interactive widget state. An interactive widget can be in the active or 
   * inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active state, 
   * the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host to
   * implement interactive widget animations. This API uses an asynchronous callback to return the result.
   *
   * @param { 'changeSceneAnimationState' } type - Event type. The event **'changeSceneAnimationState'** is triggered
   *     when the interactive widget state is switched.
   * @param { Callback<formInfo.ChangeSceneAnimationStateRequest> } callback - Callback function, which is used by the
   *     widget host to process the state switching request.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
  function on(type: 'changeSceneAnimationState', 
    callback: Callback<formInfo.ChangeSceneAnimationStateRequest>): void;
  
  /**
   * Listens to the event of change scene animation state.
   * 
   * You can use this method to listen to the event of change scene animation state.
   *
   * @param { Callback<formInfo.ChangeSceneAnimationStateRequest> } callback - The callback of
   *     change scene animation state.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onChangeSceneAnimationState(callback: Callback<formInfo.ChangeSceneAnimationStateRequest>): void;

  /**
   * Unsubscribes from the event of switching the interactive widget state. An interactive widget can be in the active
   * or inactive state. In the inactive state, the interactive widget is the same as a common widget. In the active
   * state, the interactive widget can start the **LiveFormExtensionAbility** process developed by the widget host to
   * implement interactive widget animations. This API uses an asynchronous callback to return the result.
   *
   * @param { 'changeSceneAnimationState' } type - Event type. The event **'changeSceneAnimationState'** is triggered
   *     when the interactive widget state is switched.
   * @param { Callback<formInfo.ChangeSceneAnimationStateRequest> } [callback] - Callback function, which corresponds
   *     to the request for switching the state of a subscribed interactive widget. By default, all registered 
   *     interactive widget state switching events are deregistered.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
  function off(type: 'changeSceneAnimationState', 
    callback?: Callback<formInfo.ChangeSceneAnimationStateRequest>): void;
 
  /**
   * Cancels listening to the event of change scene animation state.
   * 
   * You can use this method to cancel listening to the event of change scene animation state.
   *
   * @param { Callback<formInfo.ChangeSceneAnimationStateRequest> } [callback] - The callback of
   *     change scene animation state.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offChangeSceneAnimationState(callback?: Callback<formInfo.ChangeSceneAnimationStateRequest>): void;

  /**
   * Subscribes to the event of requesting widget position and dimension. This API uses an asynchronous callback to
   * return the result.
   *
   * @param { 'getFormRect' } type - Event callback type. The supported event is **'getFormRect'**, indicating
   *     requesting widget position and dimension.
   * @param { formInfo.GetFormRectInfoCallback } callback - Callback function used by the widget host to process the
   *     request and return the position and dimension of the widget relative to the upper-left corner of the screen.
   *     The unit is vp.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
   function on(type: 'getFormRect', callback: formInfo.GetFormRectInfoCallback): void;

  /**
   * Listens to the event of get form rect.
   * 
   * You can use this method to listen to the event of get form rect.
   *
   * @param { formInfo.GetFormRectInfoCallback } callback - The callback of get form rect.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onGetFormRect(callback: formInfo.GetFormRectInfoCallback): void;

  /**
   * Unsubscribes from the event of requesting widget position and dimension. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { 'getFormRect' } type - Event callback type. The supported event is **'getFormRect'**, indicating
   *     requesting widget position and dimension.
   * @param { formInfo.GetFormRectInfoCallback } [callback] - Callback function, corresponding to the subscribed
   *     widget position and dimension request. By default, all registered widget position and dimension request event
   *     callbacks are deregistered.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
  function off(type: 'getFormRect', callback?: formInfo.GetFormRectInfoCallback): void;
  
  /**
   * Cancels listening to the event of get form rect.
   * 
   * You can use this method to cancel listening to the event of get form rect.
   *
   * @param { formInfo.GetFormRectInfoCallback } [callback] - The callback of get form rect.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offGetFormRect(callback?: formInfo.GetFormRectInfoCallback): void;

  /**
   * Listens to the event of get live form status.
   *
   * @param { 'getLiveFormStatus' } type - Indicates event type.
   * @param { formInfo.GetLiveFormStatusCallback } callback  - The callback of get live form status.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
  function on(type: 'getLiveFormStatus',  callback: formInfo.GetLiveFormStatusCallback): void;
  
  /**
   * Listens to the event of get live form status.
   *
   * @param { formInfo.GetLiveFormStatusCallback } callback  - The callback of get live form status.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onGetLiveFormStatus(callback: formInfo.GetLiveFormStatusCallback): void;

  /**
   * Cancels Listening to the event of get live form status.
   *
   * @param { 'getLiveFormStatus' } type - Indicates event type.
   * @param { formInfo.GetLiveFormStatusCallback } [callback]  - The callback of get live form status.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   */
  function off(type: 'getLiveFormStatus', 
    callback?: formInfo.GetLiveFormStatusCallback): void;

  /**
   * Cancels Listening to the event of get live form status.
   *
   * @param { formInfo.GetLiveFormStatusCallback } [callback]  - The callback of get live form status.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offGetLiveFormStatus(callback?: formInfo.GetLiveFormStatusCallback): void;

  /**
   * Obtains the template widget information provided by all applications on the device. This API uses a promise to 
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllTemplateFormsInfo(): Promise<Array<formInfo.FormInfo>>;

  /**
   * Obtains the template widget information provided by a specified application on the device. This API uses a 
   * promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } [moduleName] - Module name. By default, no value is passed.
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 dynamic&static
   */
  function getTemplateFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>;

  /**
   * Subscribes to changes in the static configuration information of template widgets. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.TemplateFormDetailInfoCallback } callback - Callback function used to listen for changes in
   *     the static configuration information of template widgets.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onTemplateFormDetailInfoChange(callback: formInfo.TemplateFormDetailInfoCallback): void;

  /**
   * Unsubscribes from changes in the static configuration information of template widgets. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.TemplateFormDetailInfoCallback } [callback] - Callback function used to listen for changes
   *     in the static configuration information of template widgets.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offTemplateFormDetailInfoChange(callback?: formInfo.TemplateFormDetailInfoCallback): void;

  /**
    * Obtains the list of widget IDs at a specified location on the device. This API uses a promise to return the
    * result.
    *
    * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
    * @param { formInfo.FormLocation } location - Widget location.
    * @returns { Promise<Array<string>> } Promise used to return the obtained widget ID list.
    * @throws { BusinessError } 201 - Permissions denied.
    * @throws { BusinessError } 202 - The application is not a system application.
    * @throws { BusinessError } 16500050 - IPC connection error.
    * @throws { BusinessError } 16501016 - The location of the widget is invalid.
    * @syscap SystemCapability.Ability.Form
    * @systemapi
    * @stagemodelonly
    * @since 24 dynamic&static
    */
   function getFormIdsByFormLocation(location: formInfo.FormLocation): Promise<Array<string>>;
/**
   * Register callback of getting the want parameters of the form.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.GetWantParamsCallback } callback - the callback for getting want parameters of the form.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onGetWantParamsCallback(callback: formInfo.GetWantParamsCallback): void;

  /**
   * Unregister callback of getting the want parameters of the form.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.GetWantParamsCallback } [callback] - the callback for getting want parameters of the form.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offGetWantParamsCallback(callback?: formInfo.GetWantParamsCallback): void;

  /**
   * Register the callback for updating form config.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.UpdateFormsConfigCallback } callback - Identifies the callback for updating form config.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onUpdateFormsConfigCallback(callback: formInfo.UpdateFormsConfigCallback): void;

   /**
    * Unregister the callback for updating form config.
    *
    * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
    * @param { formInfo.UpdateFormsConfigCallback } [callback] - Identifies the callback for updating form config.
    * @throws { BusinessError } 201 - Permissions denied.
    * @throws { BusinessError } 202 - The application is not a system application.
    * @throws { BusinessError } 16500050 - IPC connection error.
    * @syscap SystemCapability.Ability.Form
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  function offUpdateFormsConfigCallback(callback?: formInfo.UpdateFormsConfigCallback): void;
 
   /**
    * Register the callback for deleting forms.
    *
    * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
    * @param { formInfo.DeleteFormsCallback } callback - Identifies the callback for deleting forms.
    * @throws { BusinessError } 201 - Permissions denied.
    * @throws { BusinessError } 202 - The application is not a system application.
    * @throws { BusinessError } 16500050 - IPC connection error.
    * @syscap SystemCapability.Ability.Form
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  function onDeleteFormsCallback(callback: formInfo.DeleteFormsCallback): void;
   
   /**
    * Unregister the callback for deleting forms.
    *
    * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
    * @param { formInfo.DeleteFormsCallback } [callback] - Identifies the callback for deleting forms.
    * @throws { BusinessError } 201 - Permissions denied.
    * @throws { BusinessError } 202 - The application is not a system application.
    * @throws { BusinessError } 16500050 - IPC connection error.
    * @syscap SystemCapability.Ability.Form
    * @systemapi
    * @stagemodelonly
    * @since 26.0.0 dynamic&static
    */
  function offDeleteFormsCallback(callback?: formInfo.DeleteFormsCallback): void;
}
export default formHost;
