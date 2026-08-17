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
 * @file formProvider
 * @kit FormKit
 */

import { AsyncCallback } from './@ohos.base';
import formBindingData from './@ohos.app.form.formBindingData';
import formInfo from './@ohos.app.form.formInfo';
import Want from './@ohos.app.ability.Want';
import type UIAbilityContext from './application/UIAbilityContext';

/**
 * formProvider模块提供了获取卡片信息、更新卡片、设置卡片刷新时间等能力。该模块作为卡片提供方与卡片管理服务的桥梁，通过IPC机制与FormExtension进行通信，实现卡片的更新、信息获取等操作。适用于卡片提供方需要主动更
 * 新卡片内容、管理卡片生命周期、获取卡片运行状态等场景，帮助开发者实现卡片的动态更新和状态管理。
 *
 * @syscap SystemCapability.Ability.Form
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace formProvider {
  /**
   * 设置指定卡片的下一次刷新时间，使用callback异步回调。适用于需要精确控制卡片刷新时机的场景，例如定时任务等。
   *
   * @param { string } formId - 卡片标识。
   * @param { int } minute - 指定卡片多久之后刷新，取值范围：大于等于5，单位：min。
   * @param { AsyncCallback<void> } callback - 回调函数。设置结果的回调，成功时error为undefined。
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
   * 设置指定卡片的下一次刷新时间，使用Promise异步回调。适用于需要精确控制卡片刷新时机的场景，例如定时任务等。
   *
   * @param { string } formId - 卡片标识。
   * @param { int } minute - 指定卡片多久之后刷新，取值范围：大于等于5，单位：min。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 更新指定的卡片，使用callback异步回调。适用于卡片数据变化时主动更新卡片内容的场景，例如天气数据变化、股票价格更新、任务进度更新等。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，如果卡片刷新的数据通过共享内存更新，刷新数据总大小不超过10MB，刷新图片数量不超过20张。API version 19及之前的版本，图片文件数量上限为5张，每张限制内存2MB，超出限制的图
   * > 片会显示异常。
   *
   * @param { string } formId - 请求更新的卡片标识。
   * @param { formBindingData.FormBindingData } formBindingData - 用于更新的数据。具体限制请参考上方说明。
   * @param { AsyncCallback<void> } callback - 回调函数。更新结果的回调，成功时error为undefined。
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
   * 更新指定的卡片，使用Promise异步回调。适用于卡片数据变化时主动更新卡片内容的场景，例如天气数据变化、股票价格更新、任务进度更新等。
   * 
   * > **说明：**
   * >
   * > 从API version 20开始，如果卡片刷新的数据通过共享内存更新，刷新数据总大小不超过10MB，刷新图片数量不超过20张。API version 19及之前的版本，图片文件数量上限为5张，每张限制内存2MB，超出限制的图
   * > 片会显示异常。
   *
   * @param { string } formId - 请求更新的卡片标识。
   * @param { formBindingData.FormBindingData } formBindingData - 用于更新的数据。具体限制请参考上方说明。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 获取设备上当前应用程序的卡片信息，并筛选符合条件的信息，使用callback异步回调。
   *
   * @param { formInfo.FormInfoFilter } filter - 卡片信息过滤器。
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。返回查询到符合条件的卡片信息。
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
   * 获取设备上当前应用程序的卡片信息，使用callback异步回调。适用于卡片管理、调试、统计等场景，例如查看应用所有卡片配置信息、统计卡片数量等。
   *
   * @param { AsyncCallback<Array<formInfo.FormInfo>> } callback - 回调函数。返回查询到的卡片信息。
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
   * 获取设备上当前应用符合条件的卡片信息，使用Promise异步回调。
   *
   * @param { formInfo.FormInfoFilter } [filter] - 卡片信息过滤器，用于筛选指定条件的卡片信息。当需要获取特定模块或特定名称的卡片时传入此参数进行过滤，当需要获取所有卡片信息时可以不传此参
   *     数。不传入时默认为空，返回所有卡片信息。
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到符合条件的卡片信息。
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
   * 请求发布一张卡片到使用方。使用方通常为桌面，使用callback异步回调。
   *
   * @param { Want } want - 发布请求，需包含以下字段。
   *     <br>abilityName: 目标卡片ability
   *     <br>parameters:
   *     <br>'ohos.extra.param.key.form_dimension'
   *     <br>'ohos.extra.param.key.form_name'
   *     <br>'ohos.extra.param.key.module_name'
   * @param { formBindingData.FormBindingData } formBindingData - 创建卡片的数据。
   * @param { AsyncCallback<string> } callback - 回调函数，返回卡片标识。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the upper limit. [since 26.1.0]
   * @throws { BusinessError } 16501008 - Waiting for the form addition to the desktop timed out. [since 26.1.0]
   * @throws { BusinessError } 16501017 - There is no space to publish form. [since 26.1.0]
   * @throws { BusinessError } 16501018 - This form does not support publishing. [since 26.1.0]
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
   * 请求发布一张卡片到使用方。使用方通常为桌面，使用callback异步回调。
   *
   * @param { Want } want - 发布请求，需包含以下字段。
   *     <br>abilityName: 目标卡片ability
   *     <br>parameters:
   *     <br>'ohos.extra.param.key.form_dimension'
   *     <br>'ohos.extra.param.key.form_name'
   *     <br>'ohos.extra.param.key.module_name'
   * @param { AsyncCallback<string> } callback - 回调函数，返回卡片标识。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the upper limit. [since 26.1.0]
   * @throws { BusinessError } 16501008 - Waiting for the form addition to the desktop timed out. [since 26.1.0]
   * @throws { BusinessError } 16501017 - There is no space to publish form. [since 26.1.0]
   * @throws { BusinessError } 16501018 - This form does not support publishing. [since 26.1.0]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, callback: AsyncCallback<string>): void;

  /**
   * 请求发布一张卡片到使用方。使用方通常为桌面，使用Promise异步回调。
   *
   * @param { Want } want - 发布请求，需包含以下字段。
   *     <br>abilityName: 目标卡片ability
   *     <br>parameters:
   *     <br>'ohos.extra.param.key.form_dimension'
   *     <br>'ohos.extra.param.key.form_name'
   *     <br>'ohos.extra.param.key.module_name'
   * @param { formBindingData.FormBindingData } [formBindingData] - 创建卡片的数据，默认为空，不提供创建卡片数据。
   * @returns { Promise<string> } Promise对象。返回卡片标识。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the upper limit. [since 26.1.0]
   * @throws { BusinessError } 16501008 - Waiting for the form addition to the desktop timed out. [since 26.1.0]
   * @throws { BusinessError } 16501017 - There is no space to publish form. [since 26.1.0]
   * @throws { BusinessError } 16501018 - This form does not support publishing. [since 26.1.0]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, formBindingData?: formBindingData.FormBindingData): Promise<string>;

  /**
   * 查询是否可以发布卡片到卡片使用方，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 返回查询结果的回调函数。
   *     <br>true: 表示可以发布卡片到卡片使用方。
   *     <br>false: 表示不可以发布卡片到卡片使用方。
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
   * 查询是否可以发布卡片到卡片使用方，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回是否可以发布卡片到卡片使用方的结果。
   *     <br>true: 表示可以发布卡片到卡片使用方。
   *     <br>false: 表示不可以发布卡片到卡片使用方。
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
   * 获取设备上当前应用程序已添加到桌面的指定卡片信息，使用Promise异步回调。
   *
   * @param { string } formId - 卡片标识。
   * @returns { Promise<formInfo.FormInfo> } Promise对象。返回查询到符合条件的卡片信息。
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
   * 获取设备上当前应用所有已添加到桌面的卡片信息，使用Promise异步回调。
   *
   * @returns { Promise<Array<formInfo.FormInfo>> } Promise对象。返回查询到符合条件的卡片信息。
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
   * 获取当前应用已加桌的指定卡片信息，使用Promise异步回调。适用于卡片管理、调试等场景，例如查看指定卡片的位置信息和尺寸信息。
   *
   * @param { string } formId - 卡片标识。
   * @returns { Promise<formInfo.RunningFormInfo> } Promise对象。返回符合条件的卡片信息，包括卡片名称、尺寸等。
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
   * 获取所有已加桌的卡片信息，使用Promise异步回调。适用于卡片管理、批量操作、统计等场景，例如查看应用所有已添加到桌面的卡片信息、批量更新卡片状态等。
   *
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Promise对象。返回符合条件的卡片信息。
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
   * 打开当前应用的卡片管理页面。适用于卡片管理场景，例如预览当前应用所有可以加桌的卡片、添加卡片到负一屏或桌面等。
   *
   * @param { Want } want - 打开卡片管理页面的请求中的want参数，需包含以下字段。
   *     <br>bundleName: 卡片所属应用的包名。
   *     <br>abilityName: 卡片所属的ability名称。
   *     <br>parameters:
   *     <br>- ohos.extra.param.key.form_dimension: [卡片尺寸]{@link @ohos.app.form.formInfo:formInfo.FormDimension}。
   *     <br>- ohos.extra.param.key.form_name: 卡片名称。
   *     <br>- ohos.extra.param.key.module_name: 卡片所属的模块名称。
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
   * 打开卡片编辑页。适用于需要用户配置卡片参数的场景，例如设置卡片显示内容、选择数据源、配置更新频率等。
   *
   * @param { string } abilityName - 编辑页的ability名称。
   * @param { string } formId - 卡片标识。
   * @param { boolean } [isMainPage] - 是否为主编辑页。
   *     <br>- true：表示是主编辑页，适合首次配置卡片基本信息的场景。
   *     <br>- false：表示不是主编辑页，适合进行卡片细节调整或高级配置的场景。
   *     <br>默认值：true（通常首次编辑卡片时使用默认值即可）。
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
   * 互动卡片请求状态切换到激活态，只针对[场景动效类型互动卡片](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams标签)生效，使用Promise异
   * 步回调。互动卡片状态分为激活态和非激活态，非激活态下，互动卡片同普通卡片一致；激活态下，互动卡片支持拉起卡片提供方所开发的LiveFormExtensionAbility进程，实现互动卡片动效。
   *
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 互动卡片请求切换到非激活态，只针对[场景动效类型互动卡片](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams标签)生效，使用Promise异步
   * 回调。互动卡片状态分为激活态和非激活态，非激活态下，互动卡片同普通卡片一致；激活态下，互动卡片支持拉起卡片提供方所开发的LiveFormExtensionAbility进程，实现互动卡片动效。
   *
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 卡片提供方发起互动卡片动效请求，只针对[场景动效类型互动卡片](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams标签)生效，使用Promise
   * 异步回调。其中相关的方法为[cancelOverflow()]{@link formProvider.cancelOverflow}：取消互动卡片动效请求，用于取消已发起的动效。
   * 
   * > **说明：**
   * >
   * > 1. 该接口在省电模式场景下不可使用，会报16501000错误码。
   * >
   * > 2. 当设备热档位进入HOT场景并且没有点击事件的场景下，该接口会报16501000错误码；当热档位进入OVERHEATED时，任何情况下都会报16501000错误码。热档位信息具体可参考
   * > [热档位信息]{@link @ohos.thermal:thermal.ThermalLevel}。
   *
   * @param { string } formId - 卡片标识。
   * @param { formInfo.OverflowInfo } overflowInfo - 动效请求参数信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 卡片提供方发起取消互动卡片动效请求，只针对[场景动效类型互动卡片](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams标签)生效，使用
   * Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 1. 该接口在省电模式场景下不可使用，会报16501000错误码。
   * >
   * > 2. 当设备热档位进入HOT场景并且没有点击事件的场景下，该接口会报16501000错误码；当热档位进入OVERHEATED时，任何情况下都会报16501000错误码。热档位信息具体可参考
   * > [热档位信息]{@link @ohos.thermal:thermal.ThermalLevel}。
   *
   * @param { string } formId - 卡片标识。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 查询卡片位置、尺寸，使用Promise异步回调。适用于需要获取卡片在屏幕上的位置和尺寸信息的场景，例如卡片动效、位置校准、布局计算等。
   *
   * @param { string } formId - 卡片标识。
   * @returns { Promise<formInfo.Rect> } Promise对象，返回卡片相对屏幕左上角的位置信息和卡片尺寸信息。
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
   * 对于当前应用中moduleName、abilityName、formName相同的卡片，每次加桌会分配不同的卡片ID。卡片提供方可通过本接口批量更新这些卡片。与reloadAllForms相比，本接口可精确指定更新特定配置的卡片，
   * 适用于仅需更新特定卡片场景；reloadAllForms更新当前应用所有已加桌卡片，适用于全局刷新场景。本接口在应用主进程中调用，通知FormExtension进程进行批量更新，仅支持在
   * [UIAbility]{@link @ohos.app.ability.UIAbility}中使用，使用Promise异步回调。
   *
   * @param { UIAbilityContext } context - [UIAbility]{@link @ohos.app.ability.UIAbility}的上下文，用于校验应用身份。
   * @param { string } moduleName - 指定卡片的moduleName，需与
   *     [form_config.json](docroot://form/arkts-ui-widget-configuration.md#配置文件字段说明)中配置的module名称一致。需与abilityName、
   *     formName配合使用，三者必须同时匹配才能定位到对应卡片。
   * @param { string } abilityName - 指定卡片的abilityName，需与
   *     [form_config.json](docroot://form/arkts-ui-widget-configuration.md#配置文件字段说明)中配置的ability名称一致。
   * @param { string } formName - 指定卡片在[form_config.json](docroot://form/arkts-ui-widget-configuration.md#配置文件字段说明)中配置的卡
   *     片名称。
   * @returns { Promise<int> } Promise对象。返回请求更新卡片的数量。
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function reloadForms(context: UIAbilityContext, moduleName: string, abilityName: string, formName: string): Promise<int>;

  /**
   * 在应用主进程通过本接口可以通知FormExtension进程批量更新当前应用下已经加桌的所有卡片，仅支持在[UIAbility]{@link @ohos.app.ability.UIAbility}中调用，使用Promise异步回
   * 调。
   *
   * @param { UIAbilityContext } context - [UIAbility]{@link @ohos.app.ability.UIAbility}的上下文，用于校验应用身份。
   * @returns { Promise<int> } Promise对象。返回请求更新卡片的数量。
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function reloadAllForms(context: UIAbilityContext): Promise<int>;

    /**
   * 更新当前设备上指定的模板卡片静态配置信息。使用Promise异步回调。
   *
   * @param { Array<formInfo.TemplateFormDetailInfo> } templateFormInfo - 指定的模板卡片静态配置信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 订阅跨应用加桌管控。
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL
   * @param { formInfo.PublishFormCrossBundleControlCallback } callback - 跨应用加桌管控的回调函数。
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
   * 取消订阅跨应用加桌管控。
   *
   * @permission ohos.permission.PUBLISH_FORM_CROSS_BUNDLE_CONTROL
   * @param { formInfo.PublishFormCrossBundleControlCallback } [callback] - 跨应用加桌管控的回调函数，不传则取消所有已订阅的回调。
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
   * 关闭卡片编辑页。适用于卡片编辑完成或取消编辑的场景，例如用户完成参数配置后关闭编辑页、取消编辑操作等。
   *
   * @param { boolean } [isMainPage] - 是否关闭主编辑页。
   *     <br>- true：关闭主编辑页，适合在主编辑页完成配置后关闭的场景。
   *     <br>- false：关闭非主编辑页，适合在多级编辑页场景下关闭当前非主编辑页的场景。
   *     <br>默认值：true（通常关闭当前编辑页时使用默认值即可）。
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