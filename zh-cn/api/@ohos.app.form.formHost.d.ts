/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file formHost
 * @kit FormKit
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import formInfo from './@ohos.app.form.formInfo';

/**
 * formHost模块提供了卡片使用方相关接口的能力，包括对使用方同一用户下安装的卡片进行删除、释放、请求更新、获取卡片信息、状态等操作。
 * 
 * > **说明：**
 * >
 * > 本模块接口均为系统接口。
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
   * 删除指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务不再保留有关该卡片的信息。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除指定的卡片成功，error为undefined，否则为错误对象。
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
   * 删除指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务不再保留有关该卡片的信息。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 释放指定的卡片。调用此方法后，应用程序将无法使用该卡片，但卡片管理器服务仍然保留有关该卡片的缓存信息和存储信息。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当释放指定的卡片成功，error为undefined；否则为错误对象。
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
   * 释放指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务保留有关该卡片的存储信息，可以选择是否保留缓存信息。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { boolean } isReleaseCache - 表示是否释放缓存。
   *     <br>true: 表示释放缓存。
   *     <br>false: 表示不释放缓存。
   * @param { AsyncCallback<void> } callback - 回调函数。当释放指定的卡片成功，error为undefined；否则为错误对象。
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
   * 释放指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务保留有关该卡片的存储信息，可以选择是否保留缓存信息。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { boolean } [isReleaseCache] - 表示是否释放缓存，默认为false。
   *     <br>true: 表示释放缓存。
   *     <br>false: 表示不释放缓存。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 请求卡片更新。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当请求卡片更新成功，error为undefined；否则为错误对象。
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
   * 请求卡片更新。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 携带参数请求卡片更新。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { Record<string, Object> } [wantParams] - 更新参数。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 将指定的临时卡片转换为普通卡片。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当将指定的临时卡片转换为普通卡片成功，error为undefined，否则为错误对象。
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
   * 将指定的临时卡片转换为普通卡片。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 向卡片框架发送通知以使指定的卡片可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片可见成功，error为undefined，否则为错误对象。
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
   * 向卡片框架发送通知以使指定的卡片可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 向卡片框架发送通知以使指定的卡片不可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片不可见成功，error为undefined，否则为错误对象。
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
   * 向卡片框架发送通知以使指定的卡片不可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 向卡片框架发送通知以使指定的卡片可以更新。该方法调用成功后，卡片刷新状态设置为使能，卡片可以接收来自卡片提供方的更新。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片可以更新成功，error为undefined，否则为错误对象。
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
   * 向卡片框架发送通知以使指定的卡片可以更新。该方法调用成功后，卡片刷新状态设置为使能，卡片可以接收来自卡片提供方的更新。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 向卡片框架发送通知以使指定的卡片不可以更新。该方法调用成功后，卡片刷新状态设置为去使能，卡片不可以接收来自卡片提供方的更新。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片不可以更新成功，error为undefined，否则为错误对象。
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
   * 向卡片框架发送通知以使指定的卡片不可以更新。该方法调用成功后，卡片刷新状态设置为去使能，卡片不可以接收来自卡片提供方的更新。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 检查系统是否准备好。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当检查系统是否准备好成功，error为undefined，否则为错误对象。
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
   * 检查系统是否准备好。使用Promise异步回调。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isSystemReady(): Promise<void>;

  /**
   * 获取设备上所有应用提供的卡片信息（不包含模板卡片）。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。当获取设备上所有应用提供的卡片信息成功，error为undefined，data为查询到的卡片信
   *     息；否则为错误对象。
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
   * 获取设备上所有应用提供的卡片信息（不包含模板卡片）。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到的卡片信息。
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
   * 获取设备上指定应用程序提供的卡片信息（不包含模板卡片）。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。当获取设备上指定应用程序提供的卡片信息成功，error为undefined，data为查询到的卡
   *     片信息；否则为错误对象。
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
   * 获取设备上指定应用程序提供的卡片信息（不包含模板卡片）。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { string } moduleName - 要查询的模块名称。
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。当获取设备上指定应用程序提供的卡片信息成功，error为undefined，data为查询到的卡
   *     片信息；否则为错误对象。
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
   * 获取设备上指定应用程序提供的卡片信息（不包含模板卡片）。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { string } [moduleName] - 要查询的模块名称，缺省默认为空。
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到的卡片信息。
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
   * 获取设备上指定应用程序提供的卡片信息（不包含模板卡片）。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.FormInfoFilter } filter - 卡片信息过滤器。
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到符合条件的卡片信息。
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
   * 根据有效的卡片列表，删除应用程序不在有效列表中的卡片。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 有效卡片列表。
   * @param { AsyncCallback<int> } callback - 回调函数。当根据列表删除应用程序的无效卡片成功，error为undefined，data为删除的卡片个数；否则为错误对象。
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
   * 根据列表删除应用程序的无效卡片。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 有效卡片标识列表。
   * @returns { Promise<int> } Promise对象。返回删除的卡片个数。
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
   * 获取卡片状态。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - 查询卡片状态时携带的want信息。需要包含bundle名、ability名、module名、卡片名、卡片规格等。
   * @param { AsyncCallback<formInfo.FormStateInfo> } callback - 回调函数。当获取卡片状态成功，error为undefined，data为获取到的卡片状态；否则为错误对象。
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
   * 获取卡片状态。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - 查询卡片状态时携带的want信息。需要包含bundle名、ability名、module名、卡片名、卡片规格等。
   * @returns { Promise<formInfo.FormStateInfo> } Promise对象。返回卡片状态。
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
   * 订阅卡片卸载事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 卡片卸载与卡片移除不同。当应用卸载时，对应的卡片会自动卸载。
   *
   * @param { "formUninstall" } type - 填写'formUninstall'，表示卡片卸载事件。
   * @param { Callback<string> } callback - 回调函数，返回卡片标识。
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
   * 取消订阅卡片卸载事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 卡片卸载与卡片移除不同。当应用卸载时，对应的卡片会自动卸载。
   *
   * @param { "formUninstall" } type - 填写'formUninstall'，表示卡片卸载事件。
   * @param { Callback<string> } [callback] - 回调函数，返回卡片标识。缺省时，表示注销所有已注册事件回调。
   *     <br> 需与对应on('formUninstall')的callback一致。
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
   * 通知卡片是否可见。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isVisible - 表示卡片是否可见。
   *     <br>true: 表示卡片可见。
   *     <br>false: 表示卡片不可见。
   * @param { AsyncCallback<void> } callback - 回调函数。当通知卡片是否可见成功，error为undefined，否则为错误对象。
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
   * 通知卡片是否可见。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isVisible - 表示卡片是否可见。
   *     <br>true: 表示卡片可见。
   *     <br>false: 表示卡片不可见。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 通知卡片是否启用更新状态。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isEnableUpdate - 表示卡片是否启用更新状态。
   *     <br>true: 表示卡片启用更新状态。false: 表示卡片没有启用更新状态。
   * @param { AsyncCallback<void> } callback - 回调函数。当通知卡片是否启用更新状态成功，error为undefined，否则为错误对象。
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
   * 通知卡片是否启用更新状态。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isEnableUpdate - 表示卡片是否启用更新状态。
   *     <br>true: 表示卡片启用更新状态。
   *     <br>false: 表示卡片没有启用更新状态。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 指定formId和远程设备Id进行卡片分享。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } formId - 卡片标识。
   * @param { string } deviceId - 远程设备标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当指定formId和远程设备Id进行卡片分享成功，error为undefined，否则为错误对象。
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
   * 指定formId和远程设备Id进行卡片分享。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.DISTRIBUTED_DATASYNC
   * @param { string } formId - 卡片标识。
   * @param { string } deviceId - 远程设备标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 通知指定卡片隐私保护状态改变。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 需要修改隐私保护的卡片标识列表。
   * @param { boolean } isProtected - 表示卡片是否进行隐私保护状态。
   *     <br>true: 表示卡片要进行隐私保护状态。
   *     <br>false: 表示卡片不需要进行隐私保护状态。
   * @param { AsyncCallback<void> } callback - 回调函数。当指定卡片设置隐私保护属性成功，error为undefined，否则为错误对象。
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
   * 通知指定卡片隐私保护状态改变。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 需要修改隐私保护的卡片标识列表。
   * @param { boolean } isProtected - 表示卡片是否进行隐私保护状态。
   *     <br>true: 表示卡片要进行隐私保护状态。
   *     <br>false: 表示卡片不需要进行隐私保护状态。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 请求卡片提供方数据。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<{ [key: string]: Object }> } callback - 以callback方式返回接口运行结果及卡片提供方数据。 [since 10 - 10]
   * @param { AsyncCallback<Record<string, Object>> } callback - 以callback方式返回接口运行结果及卡片提供方数据。 [since 11]
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
   * 请求卡片提供方数据。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @returns { Promise<{ [key: string]: Object }> } 以Promise方式返回接口运行结果及卡片提供方数据。 [since 10 - 10]
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
   * 设置卡片跳转代理。使用callback异步回调，返回卡片跳转所需要Want信息。
   * 
   * > **说明：**
   * >
   * > - 一般情况下，对于桌面添加的卡片，当卡片触发router跳转时，卡片框架会检测其跳转目的地是否合理，是否有跳转权限，然后进行应用跳转。如果卡片使用方添加了卡片，并设置了卡片跳转代理，那么卡片触发router跳转时，卡片框架不
   * > 会再为其进行跳转操作，会把包含跳转目的地的want参数返回给卡片使用方。因此如果卡片使用方希望使用该want信息进行应用跳转，需要确保自身拥有应用跳转的权限，参考
   * > [UIAbilityContext.startAbility()]{@link ./application/UIAbilityContext:UIAbilityContext#startAbility(want: Want, callback: AsyncCallback<void>)}
   * > 接口。
   * >
   * > - 一个formId最多只能设置一个跳转代理，多次设置后，最后设置的proxy生效。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @param { Callback<Want> } proxy - 回调函数。返回跳转所需要的Want信息。
   * @param { AsyncCallback<void> } callback - 回调函数，当指定卡片设置router跳转代理成功时，error为undefined；否则抛出异常。
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
   * 设置卡片跳转代理。使用Promise异步回调，返回卡片跳转所需要Want信息。
   * 
   * > **说明：**
   * >
   * > - 一般情况下，对于桌面添加的卡片，当卡片触发router跳转时，卡片框架会检测其跳转目的地是否合理，是否有跳转权限，然后进行应用跳转。如果卡片使用方添加了卡片，并设置了卡片跳转代理，那么卡片触发router跳转时，卡片框架不
   * > 会再为其进行跳转操作，会把包含跳转目的地的want参数返回给卡片使用方。因此如果卡片使用方希望使用该want信息进行应用跳转，需要确保自身拥有应用跳转的权限，参考
   * > [UIAbilityContext.startAbility()]{@link ./application/UIAbilityContext:UIAbilityContext#startAbility(want: Want, callback: AsyncCallback<void>)}
   * > 接口。
   * >
   * > - 一个formId最多只能设置一个跳转代理，多次设置后，最后设置的proxy生效。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @param { Callback<Want> } proxy - 回调函数。返回跳转所需要的Want信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 清除卡片跳转代理。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当指定卡片清除router跳转代理成功时，error为undefined；否则抛出异常。
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
   * 清除卡片跳转代理。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 设置卡片加桌结果。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { formInfo.PublishFormResult } result - 发布卡片加桌结果。
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
   * 设置卡片可回收。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 设置卡片可回收。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当设置卡片可回收成功时，error为undefined；否则抛出异常。
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
   * 立即回收卡片内存。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 恢复被回收的卡片，并将它的状态更新为不可回收，如果卡片未被回收则只更新状态为不可回收。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 恢复被回收的卡片，并将它的状态更新为不可回收。如果卡片未被回收，则只更新状态为不可回收。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识数组。
   * @param { AsyncCallback<void> } callback - 回调函数，当恢复卡片成功时，error为undefined；否则抛出异常。
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
   * 更新卡片位置。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { formInfo.FormLocation } location - 卡片位置。
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
   * 通知卡片管控状态更新。使用Promise异步回调。
   * 
   * 卡片管控状态是指，应用使能了应用锁管控，对应应用的卡片也会跟随使能应用锁管控，此时卡片页面会使用加锁的蒙板样式遮罩卡片。在管控状态下，操作和使用卡片需要输入加锁时设置的密码。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { boolean } isLocked - 标识卡片是否为管控状态，true表示管控状态，false表示非管控状态。
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
   * 订阅互动卡片动效请求事件。使用callback异步回调。
   *
   * @param { 'formOverflow' } type - 事件回调类型，支持的事件为'formOverflow'，表示互动卡片动效请求。
   * @param { Callback<formInfo.OverflowRequest> } callback - 回调函数，用于卡片使用方对动效请求进行处理。
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
   * 取消订阅互动卡片动效请求事件。使用callback异步回调。
   *
   * @param { 'formOverflow' } type - 事件回调类型，支持的事件为'formOverflow'，表示互动卡片动效请求。
   * @param { Callback<formInfo.OverflowRequest> } [callback] - 回调函数，对应已订阅互动卡片动效请求。缺省时，表示注销所有已注册互动卡片动效请求事件回调。
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
   * 调整卡片尺寸。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { formInfo.FormDimension } newDimension - 卡片尺寸，例如 Dimension_1_2，表示 1 x 2 卡片。
   * @param { formInfo.Rect } newRect - 卡片位置信息，包括卡片左上角顶点的xy坐标和卡片的宽高。
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
   * 订阅互动卡片状态切换请求事件。互动卡片状态分为激活态和非激活态，非激活态下，互动卡片同普通卡片一致；激活态下，互动卡片支持拉起卡片提供方所开发的LiveFormExtensionAbility进程，实现互动卡片动效。使用
   * callback异步回调。
   *
   * @param { 'changeSceneAnimationState' } type - 事件回调类型，支持的事件为'changeSceneAnimationState'，表示互动卡片状态切换。
   * @param { Callback<formInfo.ChangeSceneAnimationStateRequest> } callback - 回调函数，用于卡片使用方处理状态切换请求。
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
   * 取消订阅互动卡片状态切换请求事件。互动卡片状态分为激活态和非激活态，非激活态下，互动卡片同普通卡片一致；激活态下，互动卡片支持拉起卡片提供方所开发的LiveFormExtensionAbility进程，实现互动卡片动效。使用
   * callback异步回调。
   *
   * @param { 'changeSceneAnimationState' } type - 事件回调类型，支持的事件为'changeSceneAnimationState'，表示互动卡片状态切换。
   * @param { Callback<formInfo.ChangeSceneAnimationStateRequest> } [callback] - 回调函数，对应已订阅互动卡片状态切换请求。缺省时，表示注销所有已注册互动卡片状
   *     态切换事件回调。
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
    * 订阅卡片位置尺寸查询请求事件。使用callback异步回调。
    *
    * @param { 'getFormRect' } type - 事件回调类型，支持的事件为'getFormRect'，表示卡片位置尺寸查询。
    * @param { formInfo.GetFormRectInfoCallback } callback - 回调函数，卡片使用方对查询请求进行处理，返回卡片相对屏幕左上角的位置信息和卡片尺寸信息。
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
   * 取消订阅卡片位置尺寸查询请求事件。使用callback异步回调。
   *
   * @param { 'getFormRect' } type - 事件回调类型，支持的事件为'getFormRect'，表示卡片位置尺寸查询。
   * @param { formInfo.GetFormRectInfoCallback } [callback] - 回调函数，对应已订阅卡片位置尺寸查询请求。缺省时，表示注销所有已注册卡片位置、尺寸查询事件回调。
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
   * 获取设备上所有应用提供的模板卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到的卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 dynamic&static
   */
  function getAllTemplateFormsInfo(): Promise<Array<formInfo.FormInfo>>;

  /**
   * 获取设备上指定应用程序提供的模板卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { string } [moduleName] - 要查询的模块名称，缺省默认为空。
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到的卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 dynamic&static
   */
  function getTemplateFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>;

  /**
   * 订阅模板卡片静态配置信息变化。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.TemplateFormDetailInfoCallback } callback - 回调函数，监控模板卡片静态配置信息变化。
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
   * 取消订阅模板卡片静态配置信息变化。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.TemplateFormDetailInfoCallback } [callback] - 回调函数，监控模板卡片静态配置信息变化。
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
    * 获取设备上指定卡片位置的卡片标识列表。使用Promise异步回调。
    *
    * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
    * @param { formInfo.FormLocation } location - 卡片位置。
    * @returns { Promise<Array<string>> } Promise对象。返回查询到的卡片标识列表。
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
   * 订阅获取卡片参数事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.GetWantParamsCallback } callback - 回调函数，返回卡片参数信息。
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
   * 取消订阅获取卡片参数事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.GetWantParamsCallback } [callback] - 回调函数，返回卡片参数信息。
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
   * 订阅更新卡片配置事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.UpdateFormsConfigCallback } callback - 回调函数，返回卡片配置更新信息。
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
   * 取消订阅更新卡片配置事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.UpdateFormsConfigCallback } [callback] - 回调函数，返回卡片配置更新信息。
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
   * 订阅删除卡片事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.DeleteFormsCallback } callback - 回调函数，返回被删除的卡片标识列表。
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
   * 取消订阅删除卡片事件。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { formInfo.DeleteFormsCallback } [callback] - 回调函数，返回被删除的卡片标识列表。
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