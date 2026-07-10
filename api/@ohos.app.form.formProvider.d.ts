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
import formBindingData from './@ohos.app.form.formBindingData';
import formInfo from './@ohos.app.form.formInfo';
import Want from './@ohos.app.ability.Want';
import type UIAbilityContext from './application/UIAbilityContext';

/**
 * The **formProvider** module provides APIs to obtain widget information, update widgets, and set the update time.
 *
 * @syscap SystemCapability.Ability.Form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace formProvider {
  /**
   * Sets the next refresh time for a widget. This API uses an asynchronous callback to return the result.
   *
   * @param { string } formId - Widget ID.
   * @param { int } minute - Time after which a widget is updated. The value is greater than or equal to 5, in minutes.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the maximum allowed.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function setFormNextRefreshTime(formId: string, minute: int, callback: AsyncCallback<void>): void;

/**
   * Sets the next refresh time for a widget. This API uses a promise to return the result.
   *
   * @param { string } formId - Widget ID.
   * @param { int } minute - Time after which a widget is updated. The value is greater than or equal to 5, in minutes.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the maximum allowed.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function setFormNextRefreshTime(formId: string, minute: int): Promise<void>;

  /**
   * Updates a widget. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > Starting from API version 20, when widget refresh data is updated via shared memory, the total size of the 
   * > refreshed data must not exceed 10 MB, and the number of refreshed images must not exceed 20. For API version 19 
   * > and earlier versions, the upper limit for image files is 5, with a per-image memory limit of 2 MB. Any images 
   * > that exceed these limits will display abnormally.
   *
   * @param { string } formId - ID of the widget to update.
   * @param { formBindingData.FormBindingData } formBindingData - Data to be used for the update.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function updateForm(
    formId: string,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Updates a widget. This API uses a promise to return the result.
   * 
   * > **NOTE**
   * >
   * > Starting from API version 20, when widget refresh data is updated via shared memory, the total size of the 
   * > refreshed data must not exceed 10 MB, and the number of refreshed images must not exceed 20. For API version 19 
   * > and earlier versions, the upper limit for image files is 5, with a per-image memory limit of 2 MB. Any images 
   * > that exceed these limits will display abnormally.
   *
   * @param { string } formId - ID of the widget to update.
   * @param { formBindingData.FormBindingData } formBindingData - Data to be used for the update.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function updateForm(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;

  /**
   * Obtains the application's widget information that meets a filter criterion on the device. This API uses an 
   * asynchronous callback to return the result.
   *
   * @param { formInfo.FormInfoFilter } filter - Filter criterion.
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the information obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getFormsInfo(filter: formInfo.FormInfoFilter, callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Obtains the application's widget information on the device. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the information obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Obtains information about widgets that meet the criteria of the current application. This API uses a promise to 
   * return the result.
   *
   * @param { formInfo.FormInfoFilter } [filter] - Filter criterion. By default, no value is passed, indicating that no 
   *     filtering is performed.
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getFormsInfo(filter?: formInfo.FormInfoFilter): Promise<Array<formInfo.FormInfo>>;

  /**
   * Requests to publish a widget to the widget host (usually the home screen). This API uses an asynchronous callback 
   * to return the result.
   *
   * @param { Want } want - Publish request, which must contain the following fields:<br>Information about the target widget.
   *     <br>**abilityName**: ability of the target widget.<br>**parameters**:<br>'ohos.extra.param.key.form_dimension'<br>'
   *     ohos.extra.param.key.form_name'<br>'ohos.extra.param.key.module_name'
   * @param { formBindingData.FormBindingData } formBindingData - Data used for creating the widget.
   * @param { AsyncCallback<string> } callback - Callback used to return the widget ID.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(
    want: Want,
    formBindingData: formBindingData.FormBindingData,
    callback: AsyncCallback<string>
  ): void;

  /**
   * Requests to publish a widget to the widget host (usually the home screen). This API uses an asynchronous callback 
   * to return the result.
   *
   * @param { Want } want - Publish request, which must contain the following fields:<br>Information about the target widget.
   *     <br>**abilityName**: ability of the target widget.<br>**parameters**:<br>'ohos.extra.param.key.form_dimension'<br>'
   *     ohos.extra.param.key.form_name'<br>'ohos.extra.param.key.module_name'
   * @param { AsyncCallback<string> } callback - Callback used to return the widget ID.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, callback: AsyncCallback<string>): void;

  /**
   * Requests to publish a widget to the widget host (usually the home screen). This API uses a promise to return the 
   * result.
   *
   * @param { Want } want - Publish request, which must contain the following fields:<br>Information about the target widget.
   *     <br>**abilityName**: ability of the target widget.<br>**parameters**:<br>'ohos.extra.param.key.form_dimension'<br>'
   *     ohos.extra.param.key.form_name'<br>'ohos.extra.param.key.module_name'
   * @param { formBindingData.FormBindingData } [formBindingData] - Data used for creating the widget. By default, no value 
   *     is passed, indicating that no data is provided.
   * @returns { Promise<string> } Promise used to return the widget ID.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, formBindingData?: formBindingData.FormBindingData): Promise<string>;

  /**
   * Checks whether a widget can be added to the widget host. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback function that returns the query result.<br>**true**: The widget 
   *     can be added to the widget host.<br>**false**: The widget cannot be added to the widget host.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isRequestPublishFormSupported(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether a widget can be added to the widget host. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise that returns whether a widget can be added to the widget host.
   *     
   *     **true**: The widget can be added to the widget host.
   *     
   *     **false**: The widget cannot be added to the widget host.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isRequestPublishFormSupported(): Promise<boolean>;

  /**
   * Obtains the information of the widget that has been added to the home screen on the device. This API uses a promise
   *  to return the result.
   * 
   * > **NOTE**
   * >
   * > This field is supported since API version 18 and deprecated since API version 20. You are advised to use 
   * > [getPublishedRunningFormInfoById]{@link formProvider.getPublishedRunningFormInfoById} instead.
   *
   * @param { string } formId - Widget ID.
   * @returns { Promise<formInfo.FormInfo> } Promise used to return the information obtained.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead formProvider.getPublishedRunningFormInfoById
   */
  function getPublishedFormInfoById(formId: string): Promise<formInfo.FormInfo>;

  /**
   * Obtains the information of all widgets that have been added to the home screen on the device. This API uses a 
   * promise to return the result.
   * 
   * > **NOTE**
   * >
   * > This field is supported since API version 18 and deprecated since API version 20. You are advised to use 
   * > [getPublishedRunningFormInfos]{@link formProvider.getPublishedRunningFormInfos} instead.
   *
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 18 dynamiconly
   * @deprecated since 20
   * @useinstead formProvider.getPublishedRunningFormInfos
   */
  function getPublishedFormInfos(): Promise<Array<formInfo.FormInfo>>;

  /**
   * Obtains the information of a specified widget that has been added to the home screen. This API uses a promise to 
   * return the result.
   *
   * @param { string } formId - Widget ID.
   * @returns { Promise<formInfo.RunningFormInfo> } Promise used to return the information about the widgets that meet the 
   *     requirements, including the widget name and dimension.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getPublishedRunningFormInfoById(formId: string): Promise<formInfo.RunningFormInfo>;

  /**
   * Obtains information about all widgets that have been added to the home screen. This API uses a promise to return 
   * the result.
   *
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Promise used to return the information about widgets that meet the
   *     requirements.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getPublishedRunningFormInfos(): Promise<Array<formInfo.RunningFormInfo>>

  /**
   * Opens the Widget Manager page of the current application.
   *
   * @param { Want } want - Parameter that must contain the following fields:<br>**bundleName**: bundle name of widget.<br>
   *     **abilityName**: ability name of the widget.<br>**parameters**:<br>- **ohos.extra.param.key.form_dimension**: 
   *     [Widget dimension]{@link @ohos.app.form.formInfo:formInfo.FormDimension}.<br>- **ohos.extra.param.key.form_name**: 
   *     Widget name.<br>- **ohos.extra.param.key.module_name**: module name of the widget.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function openFormManager(want: Want): void;

  /**
   * Open the view of forms belonging to the specified bundle.
   * Client to communication with FormManagerService.
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE
   * @param { Want } want - The want of the form to open.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function openFormManagerCrossBundle(want: Want): void

  /**
   * Opens the widget editing page.
   *
   * @param { string } abilityName - Ability name on the editing page.
   * @param { string } formId - Widget ID.
   * @param { boolean } isMainPage - Whether the page is the main editing page.<br>- **true**: The page is the main editing 
   *     page.<br>- **false**: The page is not the main editing page.<br>Default value: **true**.
   * @throws { BusinessError } 801 - Capability not supported.function openFormEditAbility cannot work correctly due to
   *     limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @throws { BusinessError } 16501007 - Form is not trust.
   * @syscap SystemCapability.Ability.Form
   * @since 18 dynamic
   * @since 23 static
   */
  function openFormEditAbility(abilityName: string, formId: string, isMainPage?: boolean): void;

  /**
   * Requests to activate a widget. This API takes effect only for 
   * [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a 
   * promise to return the result. An interactive widget can be in the active or inactive state. In the inactive state, 
   * the widget is the same as a common widget. In the active state, the widget can start the 
   * **LiveFormExtensionAbility** process developed by the widget host to implement animations.
   *
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.function activateSceneAnimation
   *     cannot work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @throws { BusinessError } 16501011 - The form cannot support this operation.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function activateSceneAnimation(formId: string): Promise<void>;

  /**
   * Requests to deactivate a widget. This API takes effect only for 
   * [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a 
   * promise to return the result. An interactive widget can be in the active or inactive state. In the inactive state, 
   * the widget is the same as a common widget. In the active state, the widget can start the 
   * **LiveFormExtensionAbility** process developed by the widget host to implement animations.
   *
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 801 - Capability not supported.function deactivateSceneAnimation can
   *     not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @throws { BusinessError } 16501011 - The form cannot support this operation.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function deactivateSceneAnimation(formId: string): Promise<void>;

  /**
   * Requests an animation. This API takes effect only for 
   * [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a 
   * promise to return the result.
   * 
   * > **NOTE**
   * >
   *
   * @param { string } formId - Widget ID.
   * @param { formInfo.OverflowInfo } overflowInfo - Animation request parameter information.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.function requestOverflow can
   *     not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @throws { BusinessError } 16501011 - The form cannot support this operation.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function requestOverflow(formId: string, overflowInfo: formInfo.OverflowInfo): Promise<void>;

  /**
   * Cancels an animation. This API takes effect only for 
   * [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a 
   * promise to return the result.
   *
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 801 - Capability not supported.function cancelOverflow can
   *     not work correctly due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @throws { BusinessError } 16501011 - The form cannot support this operation.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function cancelOverflow(formId: string): Promise<void>;

  /**
   * Obtains the position and dimension of a widget. This API uses a promise to return the result.
   *
   * @param { string } formId - Widget ID.
   * @returns { Promise<formInfo.Rect> } Promise used to return the position and dimension of the widget relative to the 
   *     upper-left corner of the screen, in vp.
   * @throws { BusinessError } 801 - Capability not supported.function getFormRect cannot work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form cannot be operated by the current application.
   * @syscap SystemCapability.Ability.Form
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function getFormRect(formId: string): Promise<formInfo.Rect>;

  /**
   * Reloads widgets. For widgets with the same **moduleName**, **abilityName**, and **formName** of the current 
   * application, each widget has a different widget ID after being added to the home screen for multiple times. Widget 
   * providers can use this API to batch update widgets that have different IDs but share the same **moduleName**, 
   * **abilityName**, and **formName**. Invoked in the main process of the application, this API notifies the 
   * FormExtension process to perform batch updates. It can only be called within a 
   * [UIAbility]{@link @ohos.app.ability.UIAbility} and uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - [UIAbility]{@link @ohos.app.ability.UIAbility} context, which is used for 
   *     verification.
   * @param { string } moduleName - Module name of the widget.
   * @param { string } abilityName - Ability name of the widget.
   * @param { string } formName - Name of the widget configured in 
   *     [form_config.json](docroot://form/arkts-ui-widget-configuration.md#fields-in-configuration-file).
   * @returns { Promise<int> } Promise used to return the number of widgets requested for update.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function reloadForms(context: UIAbilityContext, moduleName: string, abilityName: string, formName: string): Promise<int>;

  /**
   * Reloads all widgets. Invoked in the main process of the application, this API notifies the FormExtension process to
   *  perform batch updates of all widgets added to the current application. It can only be called within a 
   * [UIAbility]{@link @ohos.app.ability.UIAbility} and uses a promise to return the result.
   *
   * @param { UIAbilityContext } context - [UIAbility]{@link @ohos.app.ability.UIAbility} context, which is used for 
   *     verification.
   * @returns { Promise<int> } Promise used to return the number of widgets requested for update.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function reloadAllForms(context: UIAbilityContext): Promise<int>;

    /**
   * Updates the static configuration information of a specified template widget on the current device. This API uses a 
   * promise to return the result.
   *
   * @param { Array<formInfo.TemplateFormDetailInfo> } templateFormInfo - Static configuration information of a specified 
   *     template widget.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501013 - The system does not support the current operation.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function updateTemplateFormDetailInfo(templateFormInfo: Array<formInfo.TemplateFormDetailInfo>): Promise<void>;

  /**
   * Subscribes to controls on cross-bundle widget addition to the home screen. This API uses an asynchronous callback
   * to return the result.
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL
   * @param { formInfo.PublishFormCrossBundleControlCallback } callback - Callback function used to return the control
   *     result on cross-bundle widget addition to the home screen.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onPublishFormCrossBundleControl(callback: formInfo.PublishFormCrossBundleControlCallback): void;

  /**
   * Unsubscribes from controls on cross-bundle widget addition to the home screen. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL
   * @param { formInfo.PublishFormCrossBundleControlCallback } [callback] - Callback function used to return the
   *     control result on cross-bundle widget addition to the home screen.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offPublishFormCrossBundleControl(callback?: formInfo.PublishFormCrossBundleControlCallback): void;

  /**
   * Closes the widget editing page.
   *
   * @param { boolean } [isMainPage] - Whether to close the main editing page. The value **true** means closing the main 
   *     editing page, and **false** means closing a non-main editing page.<br>Default value: **true**.
   * @throws { BusinessError } 801 - Capability not supported due to limited device capabilities.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16501015 - Cannot close the widget editing page opened by other apps.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function closeFormEditAbility(isMainPage?: boolean): void;
}
export default formProvider;
