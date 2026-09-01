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
 * @file formObserver
 * @kit FormKit
 */

import { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import formInfo from './@ohos.app.form.formInfo';

/**
 * formObserver模块提供了卡片监听方相关接口的能力，包括对同一用户下安装的卡片新增、删除、可见性变化事件的订阅和取消订阅，获取正在运行的卡片信息等。
 * 
 * > **说明：**
 * >
 * > 本模块接口均为系统接口。
 *
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace formObserver {
  /**
   * 订阅卡片新增事件。使用callback异步回调，返回当前新增卡片的信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formAdd' } type - 填写'formAdd'，表示卡片新增事件。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回当前新增卡片的信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'formAdd', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of add form.
   * <p>You can use this method to listen to the event of add form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onFormAdd(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅卡片新增事件。使用callback异步回调，返回指定卡片使用方应用新增卡片的信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formAdd' } type - 填写'formAdd'，表示卡片新增事件。
   * @param { string } hostBundleName - 指定订阅卡片使用方包的bundleName。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回指定卡片使用方应用新增卡片的信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'formAdd', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of add form.
   * <p>You can use this method to listen to the event of add form for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onFormAdd(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 取消订阅卡片新增事件。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formAdd' } type - 填写'formAdd'，表示卡片新增事件。
   * @param { string } [hostBundleName] - 指定订阅卡片使用方包的bundleName。
   *     <br> 填写该参数时，与注册时填写bundleName的on接口对应。
   *     <br> 缺省则取消订阅所有卡片使用方的卡片新增事件，与注册时未填写bundleName的on接口相对应。
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - 回调函数。返回当前新增卡片信息。缺省时，表示注销对应已注册事件回调。
   *     <br> 需与对应on('formAdd')的callback一致。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: 'formAdd', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Cancels listening to the event of add form.
   * <p>You can use this method to cancel listening to the event of add form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offFormAdd(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅卡片删除事件。使用callback异步回调，返回当前删除卡片的信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formRemove' } type - 填写'formRemove'，表示卡片删除事件。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回当前删除卡片的信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'formRemove', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of remove form.
   * <p>You can use this method to listen to the event of remove form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onFormRemove(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅卡片删除事件。使用callback异步回调，返回指定卡片使用方应用被删除卡片的信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formRemove' } type - 填写'formRemove'，表示卡片删除事件。
   * @param { string } hostBundleName - 指定订阅卡片使用方包的bundleName。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回指定卡片使用方应用被删除卡片的信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'formRemove', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of remove form.
   * <p>You can use this method to listen to the event of remove form for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onFormRemove(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 取消订阅卡片删除事件。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formRemove' } type - 填写'formRemove'，表示卡片删除事件。
   * @param { string } [hostBundleName] - 指定订阅卡片使用方包的bundleName。
   *     <br> 填写该参数时，与注册时填写bundleName的on接口对应。
   *     <br> 缺省则取消订阅所有卡片使用方的卡片删除事件，与注册时未填写bundleName的on接口相对应。
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - 回调函数。返回当前删除卡片的信息。缺省时，表示注销对应已注册事件回调。
   *     <br> 需与对应on('formRemove')的callback一致。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function off(type: 'formRemove', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Cancels listening to the event of remove form.
   * <p>You can use this method to cancel listening to the event of remove form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offFormRemove(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅通知卡片可见的事件。使用callback异步回调。
   * 
   * ​触发通知卡片可见场景为：调用[notifyVisibleForms]{@link @ohos.app.form.formHost:formHost.notifyVisibleForms}接口通知对应卡片可见性变更为可见状态。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyVisible' } type - 仅允许填写'notifyVisible'，表示订阅通知卡片可见的事件。
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - 回调函数。返回订阅该事件的卡片信息列表。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'notifyVisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Listens to the event of notifyVisible type change.
   * <p>You can use this method to listen to the event of notifyVisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onNotifyVisible(observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * 订阅通知卡片可见的事件。使用callback异步回调。
   * 
   * ​触发通知卡片可见场景为：调用[notifyVisibleForms]{@link @ohos.app.form.formHost:formHost.notifyVisibleForms}接口通知对应卡片可见性变更为可见状态。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyVisible' } type - 仅允许填写'notifyVisible'，表示订阅通知卡片可见的事件。
   * @param { string } hostBundleName - 指定卡片使用方的bundleName，用于订阅卡片在该使用方的可见状态变更事件。
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - 回调函数。返回订阅该事件的卡片信息列表。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(
    type: 'notifyVisible',
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * Listens to the event of notifyVisible type change.
   * <p>You can use this method to listen to the event of notifyVisible type change for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onNotifyVisible(
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * 订阅通知卡片不可见的事件。使用callback异步回调。
   * 
   * ​触发通知卡片不可见场景为：调用[notifyInvisibleForms]{@link @ohos.app.form.formHost:formHost.notifyInvisibleForms}接口通知对应卡片可见性变更为不可
   * 见状态。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyInvisible' } type - 仅允许填写'notifyInvisible'，表示订阅卡片不可见的事件。
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - 回调函数。返回订阅通知卡片不可见的卡片信息列表。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(type: 'notifyInvisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Listens to the event of notifyInvisible type change.
   * <p>You can use this method to listen to the event of notifyInvisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onNotifyInvisible(observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * 订阅通知卡片不可见的事件。使用callback异步回调。
   * 
   * ​触发通知卡片不可见场景为：调用[notifyInvisibleForms]{@link @ohos.app.form.formHost:formHost.notifyInvisibleForms}接口通知对应卡片可见性变更为不可
   * 见状态。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyInvisible' } type - 仅允许填写'notifyInvisible'，表示订阅卡片不可见的事件。
   * @param { string } hostBundleName - 指定卡片使用方的bundleName，用于订阅卡片在该使用方的可见状态变更事件。
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - 回调函数。返回订阅通知卡片不可见的卡片信息列表。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function on(
    type: 'notifyInvisible',
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>,
  ): void;

  /**
   * Listens to the event of notifyInvisible type change.
   * <p>You can use this method to listen to the event of notifyInvisible type change for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onNotifyInvisible(
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * 取消订阅通知卡片可见的事件。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyVisible' } type - 仅允许填写'notifyVisible'，表示取消订阅通知卡片为可见的事件。
   * @param { string } [hostBundleName] - 指定卡片使用方的bundleName，用于取消订阅卡片在该使用方的可见状态变更事件。
   *     <br> 填写该参数时，与注册时填写bundleName的on接口对应。
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - 回调函数。返回取消订阅该事件的卡片信息列表。缺省时，表示注销对应已注册订阅的回调。
   *     <br> 需与对应on('notifyVisible')的callback一致。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function off(
    type: 'notifyVisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * Cancels listening to the event of notifyVisible type change.
   * <p>You can use this method to cancel listening to the event of notifyVisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - The callback is used to return
   *                                                                  the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offNotifyVisible(
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * 取消订阅通知卡片不可见事件。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyInvisible' } type - 仅允许填写'notifyInvisible'，表示卡片可见性变更为不可见。
   * @param { string } hostBundleName - 指定卡片使用方的bundleName，用于取消订阅卡片在该使用方的不可见状态变更事件。
   *     <br> 填写该参数时，与注册时填写bundleName的on接口对应。
   *     <br>
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - 回调函数。返回取消订阅通知卡片不可见的卡片信息列表。缺省时，表示注销对应已注册事件
   *     回调。<br/> 需与对应on('notifyInvisible')的callback一致。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   */
  function off(
    type: 'notifyInvisible',
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * Cancels listening to the event of notifyInvisible type change.
   * <p>You can use this method to cancel listening to the event of notifyInvisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offNotifyInvisible(
    hostBundleName?: string,
    observerCallback?: Callback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * 获取设备上正在运行的所有非临时卡片信息。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { AsyncCallback<Array<formInfo.RunningFormInfo>> } callback - 回调函数。获取设备上正在运行的所有非临时卡片信息。当获取卡片信息成功时，error为
   *     undefined，data为查询到的卡片信息。
   * @param { string } [hostBundleName] - 指定要查询的卡片使用方名称，指定后会仅返回该卡片使用方下正在运行的非临时卡片信息。 
   *     <br> 缺省时，返回设备上所有正在运行的非临时卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningFormInfos(callback: AsyncCallback<Array<formInfo.RunningFormInfo>>, hostBundleName?: string): void;

  /**
   * 获取设备上正在运行的所有非临时卡片信息。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { AsyncCallback<Array<formInfo.RunningFormInfo>> } callback - 回调函数。获取设备上正在运行的所有非临时卡片信息。当获取成功时，回调中的error为
   *     undefined，data为查询到的卡片信息。
   * @param { boolean } isUnusedIncluded - 表示是否包含未使用的卡片。
   *     <br>true: 表示包含未使用的卡片。
   *     <br>false: 表示不包含未使用的卡片。
   * @param { string } [hostBundleName] - 指定要查询的卡片使用方名称，指定后会仅返回该卡片使用方下正在运行的非临时卡片信息。 
   *     <br> 缺省时，返回设备上所有正在运行的非临时卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getRunningFormInfos(
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>,
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): void;

  /**
   * 获取设备上正在运行的所有非临时卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - 指定要查询的卡片使用方名称，指定后会仅返回该卡片使用方下正在运行的非临时卡片信息。 
   *     <br> 缺省时，返回设备上所有正在运行的非临时卡片信息。
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Promise对象。返回设备上正在运行的所有非临时卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningFormInfos(hostBundleName?: string): Promise<Array<formInfo.RunningFormInfo>>;

  /**
   * 获取设备上正在运行的所有非临时卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { boolean } isUnusedIncluded - 表示是否包含未使用的卡片。
   *     <br>true: 表示包含未使用的卡片。
   *     <br>false: 表示不包含未使用的卡片。
   * @param { string } [hostBundleName] - 指定要查询的卡片使用方名称，指定后会仅返回该卡片使用方下正在运行的非临时卡片信息。 
   *     <br> 缺省时，返回设备上所有正在运行的非临时卡片信息。
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Promise对象。返回设备上正在运行的所有非临时卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getRunningFormInfos(
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): Promise<Array<formInfo.RunningFormInfo>>;

  /**
   * 根据提供方信息查询已添加的卡片信息列表。使用Promise异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { formInfo.FormProviderFilter } formProviderFilter - 卡片提供方应用信息。
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Promise对象。返回已添加的卡片信息列表。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter
  ): Promise<Array<formInfo.RunningFormInfo>>;

  /**
   * 根据提供方信息查询已添加的卡片信息列表。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { formInfo.FormProviderFilter } formProviderFilter - 卡片提供方应用信息。
   * @param { AsyncCallback<Array<formInfo.RunningFormInfo>> } callback - 回调函数。返回已添加的卡片信息列表。error为undefined，data为查询到的卡片信
   *     息列表；否则为错误对象。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter,
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * 根据formId查询已添加的卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - 卡片标识。
   * @returns { Promise<formInfo.RunningFormInfo> } Promise对象。返回已添加的卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningFormInfoById(formId: string): Promise<formInfo.RunningFormInfo>;

  /**
   * 根据formId查询已添加的卡片信息。使用Promise异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - 卡片标识。
   * @param { boolean } isUnusedIncluded - 表示是否包含未使用的卡片。
   *     <br>true: 表示包含未使用的卡片。
   *     <br>false: 表示不包含未使用的卡片。
   * @returns { Promise<formInfo.RunningFormInfo> } Promise对象。返回已添加的卡片信息。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function getRunningFormInfoById(formId: string, isUnusedIncluded: boolean): Promise<formInfo.RunningFormInfo>;

  /**
   * 根据formId查询已添加的卡片信息。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - 卡片标识。
   * @param { AsyncCallback<formInfo.RunningFormInfo> } callback - 回调函数。返回已添加的卡片信息。error为undefined，data为查询到的卡片信息；否则为错误对
   *     象。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function getRunningFormInfoById(formId: string, callback: AsyncCallback<formInfo.RunningFormInfo>): void;

  /**
   * 根据卡片标识formId，查询已添加的卡片信息。使用callback异步回调。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - 卡片标识。
   * @param { boolean } isUnusedIncluded - 表示是否包含未使用的卡片。
   *     <br>true: 表示包含未使用的卡片。
   *     <br>false: 表示不包含未使用的卡片。
   * @param { AsyncCallback<formInfo.RunningFormInfo> } callback - 回调函数。返回已添加的卡片信息。error为undefined，data为查询到的卡片信息；否则为错误对
   *     象。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function getRunningFormInfoById(
    formId: string,
    isUnusedIncluded: boolean,
    callback: AsyncCallback<formInfo.RunningFormInfo>
  ): void;

  /**
   * 订阅卡片router事件。使用callback异步回调，返回触发router事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'router' } type - 填写'router'，表示订阅卡片的router事件。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回触发router事件的卡片信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'router', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Router event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onRouter(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅指定卡片使用方的卡片router事件。使用callback异步回调，返回触发router事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'router' } type - 填写'router'，表示订阅卡片的router事件。
   * @param { string } hostBundleName - 指定卡片使用方的bundleName。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回触发router事件的卡片信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'router', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Router event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onRouter(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 取消订阅卡片router事件。使用callback异步回调，返回触发router事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'router' } type - 填写'router'，表示取消订阅卡片的router事件。
   * @param { string } [hostBundleName] - 指定订阅卡片使用方包的bundleName。
   *     <br>填写该参数时，与注册时填写bundleName的on接口对应。
   *     <br>缺省则取消订阅所有卡片使用方点击router类型卡片的事件，与注册时未填写bundleName的on接口相对应。
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - 回调函数。返回触发router事件的卡片信息。缺省时，表示注销对应bundleName下已注册事
   *     件回调。
   *     <br>需与对应on('router')的callback一致。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'router', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Unregister form router event Listening.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offRouter(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅卡片message事件。使用callback异步回调，返回触发message事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'message' } type - 填写'message'，表示订阅卡片的message事件。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回触发message事件的卡片信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'message', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Message event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onMessage(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅指定卡片使用方的卡片message事件。使用callback异步回调，返回触发message事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'message' } type - 填写'message'，表示订阅卡片的message事件。
   * @param { string } hostBundleName - 指定卡片使用方的bundleName。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回触发message事件的卡片的信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'message', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Message event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onMessage(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 取消订阅卡片message事件。使用callback异步回调，返回触发message事件的卡片的信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'message' } type - 填写'message'，表示取消订阅卡片的message事件。
   * @param { string } [hostBundleName] - 指定订阅卡片使用方包的bundleName。
   *     <br>填写该参数时，与注册时填写bundleName的on接口对应。
   *     <br>缺省则取消订阅所有卡片使用方的message事件，与注册时未填写bundleName的on接口相对应。
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - 回调函数。返回触发message事件的卡片的信息。缺省时，表示注销对应已注册事件回调。
   *     <br>需与对应on('message')的callback一致。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'message', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Unregister form message event Listening.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offMessage(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅卡片call事件。使用callback异步回调，返回触发call事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'call' } type - 填写'call'，表示订阅卡片的call事件。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回触发call事件的卡片信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'call', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Call event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onCall(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 订阅指定卡片使用方的卡片call事件。使用callback异步回调，返回触发call事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'call' } type - 填写'call'，表示订阅卡片的call事件。
   * @param { string } hostBundleName - 指定卡片使用方的bundleName。
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - 回调函数。返回触发call事件的卡片信息。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function on(type: 'call', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Call event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function onCall(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * 取消订阅卡片call事件。使用callback异步回调，返回触发call事件的卡片信息。
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'call' } type - 填写'call'，表示取消订阅卡片的call事件。
   * @param { string } [hostBundleName] - 指定订阅卡片使用方包的bundleName。
   *     <br>填写该参数时，与注册时填写bundleName的on接口对应。
   *     <br>缺省则取消订阅所有卡片使用方的call事件，与注册时未填写bundleName的on接口相对应。
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - 回调函数。返回触发call事件的卡片信息。缺省时，表示注销对应已注册事件回调。
   *     <br>需与对应on('call')的callback一致。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   */
  function off(type: 'call', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Unregister form call event Listening.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 23 static
   */
  function offCall(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;
}
export default formObserver;