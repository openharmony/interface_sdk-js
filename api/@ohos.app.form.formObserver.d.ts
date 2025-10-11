/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import formInfo from './@ohos.app.form.formInfo';

/**
 * Interface of formObserver.
 *
 * @namespace formObserver
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since arkts {'1.1':'10', '1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace formObserver {
  /**
   * Listens to the event of add form.
   * <p>You can use this method to listen to the event of add form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formAdd' } type - Indicates event type.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function on(type: 'formAdd', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of add form.
   * <p>You can use this method to listen to the event of add form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formAdd' } type - Indicates event type.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running  form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onFormAdd(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of add form.
   * <p>You can use this method to listen to the event of add form for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formAdd' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function on(type: 'formAdd', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of add form.
   * <p>You can use this method to listen to the event of add form for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo>} observerCallback - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onFormAdd(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Cancels listening to the event of add form.
   * <p>You can use this method to cancel listening to the event of add form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formAdd' } type - Indicates event type.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function off(type: 'formAdd', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Cancels listening to the event of add form.
   * <p>You can use this method to cancel listening to the event of add form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function offFormAdd(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of remove form.
   * <p>You can use this method to listen to the event of remove form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formRemove' } type - Indicates event type.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function on(type: 'formRemove', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of remove form.
   * <p>You can use this method to listen to the event of remove form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onFormRemove(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of remove form.
   * <p>You can use this method to listen to the event of remove form for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formRemove' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function on(type: 'formRemove', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of remove form.
   * <p>You can use this method to listen to the event of remove form for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onFormRemove(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Cancels listening to the event of remove form.
   * <p>You can use this method to cancel listening to the event of remove form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'formRemove' } type - Indicates event type.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function off(type: 'formRemove', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Cancels listening to the event of remove form.
   * <p>You can use this method to cancel listening to the event of remove form.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function offFormRemove(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Listens to the event of notifyVisible type change.
   * <p>You can use this method to listen to the event of notifyVisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyVisible' } type - Indicates event type.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function on(type: 'notifyVisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Listens to the event of notifyVisible type change.
   * <p>You can use this method to listen to the event of notifyVisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onNotifyVisible(observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Listens to the event of notifyVisible type change.
   * <p>You can use this method to listen to the event of notifyVisible type change for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyVisible' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
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
   * @param {string} hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onNotifyVisible(hostBundleName: string, observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Listens to the event of notifyInvisible type change.
   * <p>You can use this method to listen to the event of notifyInvisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyInvisible' } type - Indicates event type.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function on(type: 'notifyInvisible', observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Listens to the event of notifyInvisible type change.
   * <p>You can use this method to listen to the event of notifyInvisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onNotifyInvisible(observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Listens to the event of notifyInvisible type change.
   * <p>You can use this method to listen to the event of notifyInvisible type change for a particular card host.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyInvisible' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
   */
  function on(
    type: 'notifyInvisible',
    hostBundleName: string,
    observerCallback: Callback<Array<formInfo.RunningFormInfo>>,
  ): void;

  /**
   * Listens to the event of notifyInvisible type change.
   * <p>You can use this method to listen to the event of notifyInvisible type change.</p>
   * 
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param {string} hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } observerCallback - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onNotifyInvisible(hostBundleName: string, observerCallback: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Cancels listening to the event of notifyVisible type change.
   * <p>You can use this method to cancel listening to the event of notifyVisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyVisible' } type - Indicates event type.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - The callback is used to return
   *                                                                  the running form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
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
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function offNotifyVisible(hostBundleName?: string, observerCallback?: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Cancels listening to the event of notifyInvisible type change.
   * <p>You can use this method to cancel listening to the event of notifyInvisible type change.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'notifyInvisible' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - The callback is used to return
   *                                                                         the running form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 10
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
   * @param { Callback<Array<formInfo.RunningFormInfo>> } [observerCallback] - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function offNotifyInvisible(hostBundleName?: string, observerCallback?: Callback<Array<formInfo.RunningFormInfo>>): void;

  /**
   * Obtains the RunningFormInfo objects provided by a specific card host application on the device.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { AsyncCallback<Array<formInfo.RunningFormInfo>> } callback - The callback is used to return the
   *                                                                      RunningFormInfo.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfos(callback: AsyncCallback<Array<formInfo.RunningFormInfo>>, hostBundleName?: string): void;

  /**
   * Obtains the RunningFormInfo objects provided by a specific card host application on the device.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { AsyncCallback<Array<formInfo.RunningFormInfo>> } callback - The callback is used to return the
   *                                                                      RunningFormInfo.
   * @param { boolean } isUnusedIncluded - Indicates whether to include unused form.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfos(
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>,
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): void;

  /**
   * Obtains the RunningFormInfo objects provided by a specific card host application on the device.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Returns the RunningFormInfo.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfos(hostBundleName?: string): Promise<Array<formInfo.RunningFormInfo>>;

  /**
   * Obtains the RunningFormInfo objects provided by a specific card host application on the device.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { boolean } isUnusedIncluded - Indicates whether to include unused form.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } Returns the RunningFormInfo.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500060 - Service connection error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfos(
    isUnusedIncluded: boolean,
    hostBundleName?: string
  ): Promise<Array<formInfo.RunningFormInfo>>;

  /**
   * Obtains the RunningFormInfo objects by FormProviderFilter.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { formInfo.FormProviderFilter } formProviderFilter - Indicates the form provider app info.
   * @returns { Promise<Array<formInfo.RunningFormInfo>> } The promise returned by the function.
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
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter
  ): Promise<Array<formInfo.RunningFormInfo>>;

  /**
   * Obtains the RunningFormInfo objects by FormProviderFilter.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { formInfo.FormProviderFilter } formProviderFilter - Indicates the form provider app info.
   * @param { AsyncCallback<Array<formInfo.RunningFormInfo>> } callback - The callback of getFormInstancesByFilter.
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
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfosByFilter(
    formProviderFilter: formInfo.FormProviderFilter,
    callback: AsyncCallback<Array<formInfo.RunningFormInfo>>
  ): void;

  /**
   * Obtains the RunningFormInfo object by formId.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - Indicates the form provider formId.
   * @returns { Promise<formInfo.RunningFormInfo> } The promise returned by the function.
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
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfoById(formId: string): Promise<formInfo.RunningFormInfo>;

  /**
   * Obtains the RunningFormInfo object by formId.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - Indicates the form provider formId.
   * @param { boolean } isUnusedIncluded - Indicates whether to include unused form.
   * @returns { Promise<formInfo.RunningFormInfo> } The promise returned by the function.
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
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfoById(formId: string, isUnusedIncluded: boolean): Promise<formInfo.RunningFormInfo>;

  /**
   * Obtains the RunningFormInfo object by formId.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - Indicates the form provider formId.
   * @param { AsyncCallback<formInfo.RunningFormInfo> } callback - The callback of getFormInstancesById.
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
   * @since arkts {'1.1':'10', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfoById(formId: string, callback: AsyncCallback<formInfo.RunningFormInfo>): void;

  /**
   * Obtains the RunningFormInfo object by formId.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } formId - Indicates the form provider formId.
   * @param { boolean } isUnusedIncluded - Indicates whether to include unused form.
   * @param { AsyncCallback<formInfo.RunningFormInfo> } callback - The callback of getFormInstancesById.
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
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function getRunningFormInfoById(
    formId: string,
    isUnusedIncluded: boolean,
    callback: AsyncCallback<formInfo.RunningFormInfo>
  ): void;

  /**
   * Router event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'router' } type - Indicates event type.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
   */
  function on(type: 'router', observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Router event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onRouter(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Router event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'router' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
   */
  function on(type: 'router', hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Router event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function onRouter(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Unregister form router event Listening.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'router' } type - Indicates event type.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
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
   * @since 22
   * @arkts 1.2
   */
  function offRouter(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Message event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'message' } type - Indicates event type.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
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
   * @since 22
   * @arkts 1.2
   */
  function onMessage(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Message event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'message' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
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
   * @since 22
   * @arkts 1.2
   */
  function onMessage(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Unregister form message event Listening.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'message' } type - Indicates event type.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
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
   * @since 22
   * @arkts 1.2
   */
  function offMessage(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Call event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'call' } type - Indicates event type.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
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
   * @since 22
   * @arkts 1.2
   */
  function onCall(observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Call event listening in registered form.
   * <p>This interface requires permission to receive callback.</p>
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'call' } type - Indicates event type.
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } observerCallback - The callback is used to return the running
   *                                                                  form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
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
   * @since 22
   * @arkts 1.2
   */
  function onCall(hostBundleName: string, observerCallback: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Unregister form call event Listening.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { 'call' } type - Indicates event type.
   * @param { string } [hostBundleName] - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11
   */
  function off(type: 'call', hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;

  /**
   * Unregister form call event Listening.
   *
   * @permission ohos.permission.OBSERVE_FORM_RUNNING
   * @param { string } hostBundleName - Indicates the bundle name of the form host application.
   * @param { Callback<formInfo.RunningFormInfo> } [observerCallback] - The callback is used to return the running
   *                                                                    form info.
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 22
   * @arkts 1.2
   */
  function offCall(hostBundleName?: string, observerCallback?: Callback<formInfo.RunningFormInfo>): void;
}
export default formObserver;
