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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import formInfo from './@ohos.app.form.formInfo';

/**
 * The **formHost** module provides APIs related to the widget host, which is an application that displays the widget
 * content and controls the position where the widget is displayed. You can use the APIs to delete, release, and
 * update widgets installed by the same user, and obtain widget information and status.
 *
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since 8
 * @deprecated since 9
 * @useinstead @ohos.app.form.formHost:formHost
 */
declare namespace formHost {
  /**
   * Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager 
   * will not retain the widget information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is deleted, **error**
   *     is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteForm
   */
  function deleteForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * Deletes a widget. After this API is called, the application can no longer use the widget, and the Widget Manager 
   * will not retain the widget information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteForm
   */
  function deleteForm(formId: string): Promise<void>;

  /**
   * Releases a widget. After this API is called, the application can no longer use the widget, but the Widget Manager 
   * still retains the widget cache and storage information. This API uses an asynchronous callback to return the 
   * result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is released,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#releaseForm
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
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is released,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#releaseForm
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
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#releaseForm
   */
  function releaseForm(formId: string, isReleaseCache?: boolean): Promise<void>;

  /**
   * Requests a widget update. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is updated,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#requestForm
   */
  function requestForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * Requests a widget update. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#requestForm
   */
  function requestForm(formId: string): Promise<void>;

  /**
   * Converts a temporary widget to a normal one. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the widget is converted to a
   *     normal one, **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#castTempForm
   */
  function castTempForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * Converts a temporary widget to a normal one. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - Widget ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#castTempForm
   */
  function castTempForm(formId: string): Promise<void>;

  /**
   * Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If a notification is sent to the
   *     widget framework to make the widget visible, **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyVisibleForms
   */
  function notifyVisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget visible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyVisibleForms
   */
  function notifyVisibleForms(formIds: Array<string>): Promise<void>;

  /**
   * Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If a notification is sent to the
   *     widget framework to make the widget invisible, **error** is undefined; otherwise, **error** is an error
   *     object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyInvisibleForms
   */
  function notifyInvisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget invisible. After this API is called, **onVisibilityChange** is 
   * invoked to notify the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyInvisibleForms
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
   *     widget framework to make the widget updatable, **error** is undefined; otherwise, **error** is an error
   *     object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#enableFormsUpdate
   */
  function enableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget updatable. After this API is called, the widget is in the enabled 
   * state and can receive updates from the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#enableFormsUpdate
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
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#disableFormsUpdate
   */
  function disableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widget framework to make a widget not updatable. After this API is called, the widget cannot receive
   * updates from the widget provider. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#disableFormsUpdate
   */
  function disableFormsUpdate(formIds: Array<string>): Promise<void>;

  /**
   * Checks whether the system is ready. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the check is successful,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#isSystemReady
   */
  function isSystemReady(callback: AsyncCallback<void>): void;

  /**
   * Checks whether the system is ready. This API uses a promise to return the result.
   *
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#isSystemReady
   */
  function isSystemReady(): Promise<void>;

  /**
   * Obtains the widget information provided by all applications on the device. This API uses an asynchronous callback 
   * to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the result. If the widget 
   *     information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error**
   *     is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getAllFormsInfo
   */
  function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Obtains the widget information provided by all applications on the device. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getAllFormsInfo
   */
  function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>;

  /**
   * Obtains the widget information provided by a given application on the device. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the result. If the widget 
   *     information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error**
   *     is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getFormsInfo
   */
  function getFormsInfo(bundleName: string, callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * Obtains the widget information provided by a given application on the device. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } moduleName - Module name.
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - Callback used to return the result. If the widget 
   *     information is obtained, **error** is undefined and **data** is the information obtained; otherwise, **error**
   *     is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getFormsInfo
   */
  function getFormsInfo(
    bundleName: string,
    moduleName: string,
    callback: AsyncCallback<Array<formInfo.FormInfo>>
  ): void;

  /**
   * Obtains the widget information provided by a given application on the device. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name of the application.
   * @param { string } [moduleName] - Module name.
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise used to return the information obtained.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getFormsInfo
   */
  function getFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>;

  /**
   * Deletes invalid widgets from the list. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of valid widget IDs.
   * @param { AsyncCallback<number> } callback - Callback used to return the result. If the invalid widgets are
   *     deleted, **error** is undefined and **data** is the number of widgets deleted; otherwise, **error** is
   *     an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteInvalidForms
   */
  function deleteInvalidForms(formIds: Array<string>, callback: AsyncCallback<number>): void;

  /**
   * Deletes invalid widgets from the list. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of valid widget IDs.
   * @returns { Promise<number> } Promise used to return the number of widgets deleted.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteInvalidForms
   */
  function deleteInvalidForms(formIds: Array<string>): Promise<number>;

  /**
   * Obtains the widget state. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - **Want** information carried to query the widget state. The information must contain the
   *     bundle name, ability name, module name, widget name, and widget dimensions.
   * @param { AsyncCallback<formInfo.FormStateInfo> } callback - Callback used to return the result. If the widget
   *     state is obtained, **error** is undefined and **data** is the widget state obtained; otherwise, **error**
   *     is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#acquireFormState
   */
  function acquireFormState(want: Want, callback: AsyncCallback<formInfo.FormStateInfo>): void;

  /**
   * Obtains the widget state. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - **Want** information carried to query the widget state.
   * @returns { Promise<formInfo.FormStateInfo> } Promise used to return the widget state obtained.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#acquireFormState
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
   * @param { 'formUninstall' } type - Event type. The value **'formUninstall'** indicates a widget uninstallation
   *     event.
   * @param { Callback<string> } callback - Callback used to return the widget ID.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#on
   */
  function on(type: 'formUninstall', callback: Callback<string>): void;

  /**
   * Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget 
   * > is automatically uninstalled.
   *
   * @param { 'formUninstall' } type - Event type. The value **'formUninstall'** indicates a widget uninstallation
   *     event.
   * @param { Callback<string> } [callback] - Callback used to return the widget ID. If it is left unspecified, it
   *     indicates the callback for all the events that have been subscribed.
   *     <br> The value must be the same as that in **on('formUninstall')**.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#off
   */
  function off(type: 'formUninstall', callback?: Callback<string>): void;

  /**
   * Instructs the widgets to make themselves visible. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { boolean } isVisible - Whether to make the widgets visible.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the notification is sent,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyFormsVisible
   */
  function notifyFormsVisible(formIds: Array<string>, isVisible: boolean, callback: AsyncCallback<void>): void;

  /**
   * Instructs the widgets to make themselves visible. This API uses a promise to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { boolean } isVisible - Whether to make the widgets visible.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyFormsVisible
   */
  function notifyFormsVisible(formIds: Array<string>, isVisible: boolean): Promise<void>;

  /**
   * Instructs the widgets to enable or disable updates. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - List of widget IDs.
   * @param { boolean } isEnableUpdate - Whether to make the widgets updatable.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the notification is sent,
   *     **error** is undefined; otherwise, **error** is an error object.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyFormsEnableUpdate
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
   * @param { boolean } isEnableUpdate - Whether to make the widgets updatable.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyFormsEnableUpdate
   */
  function notifyFormsEnableUpdate(formIds: Array<string>, isEnableUpdate: boolean): Promise<void>;
}
export default formHost;
