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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Want from './@ohos.app.ability.Want';
import formInfo from './@ohos.app.form.formInfo';

/**
 * formHost模块提供了卡片使用方相关接口的能力，包括对使用方同一用户下安装的卡片进行删除、释放、请求更新，获取信息、状态等操作。
 * 
 * > **说明：**
 * >
 * > 从API version 9 开始废弃，
 * >
 * > 本模块接口均为系统接口。
 *
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since 8
 * @deprecated since 9
 * @useinstead @ohos.app.form.formHost:formHost
 */
declare namespace formHost {
  /**
   * 删除指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务不再保留有关该卡片的信息。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除指定的卡片成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteForm
   */
  function deleteForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * 删除指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务不再保留有关该卡片的信息。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteForm
   */
  function deleteForm(formId: string): Promise<void>;

  /**
   * 释放指定的卡片。调用此方法后，应用程序将无法使用该卡片，但卡片管理器服务仍然保留有关该卡片的缓存信息和存储信息。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当释放指定的卡片成功，error为undefined；否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#releaseForm
   */
  function releaseForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * 释放指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务保留有关该卡片的存储信息，可以选择是否保留缓存信息。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { boolean } isReleaseCache - 是否释放缓存。
   * @param { AsyncCallback<void> } callback - 回调函数。当释放指定的卡片成功，error为undefined；否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#releaseForm
   */
  function releaseForm(formId: string, isReleaseCache: boolean, callback: AsyncCallback<void>): void;

  /**
   * 释放指定的卡片。调用此方法后，应用程序将无法使用该卡片，卡片管理器服务保留有关该卡片的存储信息，可以选择是否保留缓存信息。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { boolean } [isReleaseCache] - 是否释放缓存，默认为false。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#releaseForm
   */
  function releaseForm(formId: string, isReleaseCache?: boolean): Promise<void>;

  /**
   * 请求卡片更新。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当请求卡片更新成功，error为undefined；否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#requestForm
   */
  function requestForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * 请求卡片更新。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#requestForm
   */
  function requestForm(formId: string): Promise<void>;

  /**
   * 将指定的临时卡片转换为普通卡片。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<void> } callback - 回调函数。当将指定的临时卡片转换为普通卡片成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#castTempForm
   */
  function castTempForm(formId: string, callback: AsyncCallback<void>): void;

  /**
   * 将指定的临时卡片转换为普通卡片。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#castTempForm
   */
  function castTempForm(formId: string): Promise<void>;

  /**
   * 向卡片框架发送通知以使指定的卡片可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片可见成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyVisibleForms
   */
  function notifyVisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 向卡片框架发送通知以使指定的卡片可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyVisibleForms
   */
  function notifyVisibleForms(formIds: Array<string>): Promise<void>;

  /**
   * 向卡片框架发送通知以使指定的卡片不可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片不可见成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyInvisibleForms
   */
  function notifyInvisibleForms(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 向卡片框架发送通知以使指定的卡片不可见。该方法调用成功后，会调用onVisibilityChange通知卡片提供方。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyInvisibleForms
   */
  function notifyInvisibleForms(formIds: Array<string>): Promise<void>;

  /**
   * 向卡片框架发送通知以使指定的卡片可以更新。该方法调用成功后，卡片刷新状态设置为使能，卡片可以接收来自卡片提供方的更新。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片可以更新成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#enableFormsUpdate
   */
  function enableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 向卡片框架发送通知以使指定的卡片可以更新。该方法调用成功后，卡片刷新状态设置为使能，卡片可以接收来自卡片提供方的更新。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#enableFormsUpdate
   */
  function enableFormsUpdate(formIds: Array<string>): Promise<void>;

  /**
   * 向卡片框架发送通知以使指定的卡片不可以更新。该方法调用成功后，卡片刷新状态设置为去使能，卡片不可以接收来自卡片提供方的更新。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { AsyncCallback<void> } callback - 回调函数。当向卡片框架发送通知以使指定的卡片不可以更新成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#disableFormsUpdate
   */
  function disableFormsUpdate(formIds: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 向卡片框架发送通知以使指定的卡片不可以更新。该方法调用成功后，卡片刷新状态设置为去使能，卡片不可以接收来自卡片提供方的更新。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#disableFormsUpdate
   */
  function disableFormsUpdate(formIds: Array<string>): Promise<void>;

  /**
   * 检查系统是否准备好。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数。当检查系统是否准备好成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#isSystemReady
   */
  function isSystemReady(callback: AsyncCallback<void>): void;

  /**
   * 检查系统是否准备好。使用Promise异步回调。
   *
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#isSystemReady
   */
  function isSystemReady(): Promise<void>;

  /**
   * 获取设备上所有应用提供的卡片信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。当获取设备上所有应用提供的卡片信息成功，error为undefined，data为查询到的卡片信
   *     息；否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getAllFormsInfo
   */
  function getAllFormsInfo(callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * 获取设备上所有应用提供的卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到的卡片信息。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getAllFormsInfo
   */
  function getAllFormsInfo(): Promise<Array<formInfo.FormInfo>>;

  /**
   * 获取设备上指定应用程序提供的卡片信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用Bundle名称。
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。当获取设备上指定应用程序提供的卡片信息成功，error为undefined，data为查询到的卡
   *     片信息；否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getFormsInfo
   */
  function getFormsInfo(bundleName: string, callback: AsyncCallback<Array<formInfo.FormInfo>>): void;

  /**
   * 获取设备上指定应用程序提供的卡片信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用程序Bundle名称。
   * @param { string } moduleName - 要查询的模块名称。
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。当获取设备上指定应用程序提供的卡片信息成功，error为undefined，data为查询到的卡
   *     片信息；否则为错误对象。
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
   * 获取设备上指定应用程序提供的卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 要查询的应用程序Bundle名称。
   * @param { string } [moduleName] - 要查询的模块名称。
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到的卡片信息。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#getFormsInfo
   */
  function getFormsInfo(bundleName: string, moduleName?: string): Promise<Array<formInfo.FormInfo>>;

  /**
   * 根据列表删除应用程序的无效卡片。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 有效卡片标识列表。
   * @param { AsyncCallback<number> } callback - 回调函数。当根据列表删除应用程序的无效卡片成功，error为undefined，data为删除的卡片个数；否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteInvalidForms
   */
  function deleteInvalidForms(formIds: Array<string>, callback: AsyncCallback<number>): void;

  /**
   * 根据列表删除应用程序的无效卡片。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 有效卡片标识列表。
   * @returns { Promise<number> } Promise对象。返回删除的卡片个数。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#deleteInvalidForms
   */
  function deleteInvalidForms(formIds: Array<string>): Promise<number>;

  /**
   * 获取卡片状态。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - 查询卡片状态时携带的want信息。需要包含bundle名、ability名、module名、卡片名、卡片规格等。
   * @param { AsyncCallback<formInfo.FormStateInfo> } callback - 回调函数。当获取卡片状态成功，error为undefined，data为获取到的卡片状态；否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#acquireFormState
   */
  function acquireFormState(want: Want, callback: AsyncCallback<formInfo.FormStateInfo>): void;

  /**
   * 获取卡片状态。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM and ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - 查询卡片状态时携带的want信息。
   * @returns { Promise<formInfo.FormStateInfo> } Promise对象。返回卡片状态。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#acquireFormState
   */
  function acquireFormState(want: Want): Promise<formInfo.FormStateInfo>;

  /**
   * 订阅卡片卸载事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 卡片卸载与卡片移除不同。当应用卸载时，对应的卡片会自动卸载。
   *
   * @param { 'formUninstall' } type - 填写'formUninstall'，表示卡片卸载事件。
   * @param { Callback<string> } callback - 回调函数，返回卡片标识。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#on
   */
  function on(type: 'formUninstall', callback: Callback<string>): void;

  /**
   * 取消订阅卡片卸载事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 卡片卸载与卡片移除不同。当应用卸载时，对应的卡片会自动卸载。
   *
   * @param { 'formUninstall' } type - 填写'formUninstall'，表示卡片卸载事件。
   * @param { Callback<string> } [callback] - 回调函数，返回卡片标识。缺省时，表示注销所有已注册事件回调。
   *     <br> 需与对应on('formUninstall')的callback一致。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#off
   */
  function off(type: 'formUninstall', callback?: Callback<string>): void;

  /**
   * 通知卡片是否可见。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isVisible - 是否可见。
   * @param { AsyncCallback<void> } callback - 回调函数。当通知卡片是否可见成功，error为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyFormsVisible
   */
  function notifyFormsVisible(formIds: Array<string>, isVisible: boolean, callback: AsyncCallback<void>): void;

  /**
   * 通知卡片是否可见。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isVisible - 是否可见。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyFormsVisible
   */
  function notifyFormsVisible(formIds: Array<string>, isVisible: boolean): Promise<void>;

  /**
   * 通知卡片是否启用更新状态。使用callback异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isEnableUpdate - 是否使能更新。
   * @param { AsyncCallback<void> } callback - 回调函数。当通知卡片是否启用更新状态成功，error为undefined，否则为错误对象。
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
   * 通知卡片是否启用更新状态。使用Promise异步回调。
   *
   * @permission ohos.permission.REQUIRE_FORM
   * @param { Array<string> } formIds - 卡片标识列表。
   * @param { boolean } isEnableUpdate - 是否使能更新。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.app.form.formHost:formHost#notifyFormsEnableUpdate
   */
  function notifyFormsEnableUpdate(formIds: Array<string>, isEnableUpdate: boolean): Promise<void>;
}
export default formHost;