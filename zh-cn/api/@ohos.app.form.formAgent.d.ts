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
 * @file FormAgent
 * @kit FormKit
 */

import type { AsyncCallback } from './@ohos.base';
import formBindingData from './@ohos.app.form.formBindingData';
import type Want from './@ohos.app.ability.Want';

/**
 * FormAgent模块提供了卡片代理相关接口的能力，目前仅包括请求发布卡片。适用于系统应用需要将卡片发布到使用方（如桌面）的场景，能够帮助系统应用便捷地请求发布卡片，简化卡片发布流程。
 *
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace formAgent {

  /**
   * 请求发布一张卡片到使用方，使用callback异步回调。使用方通常为桌面。适用于系统应用需要主动将卡片添加到桌面的场景。
   *
   * @permission ohos.permission.AGENT_REQUIRE_FORM
   * @param { Want } want - 发布请求，需包含以下字段。
   *     <br>bundleName: 目标卡片所属应用的bundleName
   *     <br>abilityName: 目标卡片所属应用的Ability
   *     <br>parameters:
   *     <br>- ohos.extra.param.key.form_dimension: 目标卡片规格，取值原则：1-2x2、2-2x4、3-4x4等，具体规格见卡片配置
   *     <br>- ohos.extra.param.key.form_name: 目标卡片名
   *     <br>- ohos.extra.param.key.module_name: 目标卡片moduleName
   * @param { AsyncCallback<string> } callback - 回调函数，用于异步返回卡片标识。回调参数：error为错误对象（成功时为null），data为卡片标识（string类型）。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the upper limit. [since 26.1.0]
   * @throws { BusinessError } 16501008 - Waiting for the form addition to the desktop timed out. [since 12]
   * @throws { BusinessError } 16501017 - There is no space to publish form. [since 26.1.0]
   * @throws { BusinessError } 16501018 - This form does not support publishing. [since 26.1.0]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, callback: AsyncCallback<string>): void;

  /**
   * 请求发布一张卡片到使用方，使用Promise异步回调。使用方通常为桌面。适用于系统应用需要主动将卡片添加到桌面的场景。
   *
   * @permission ohos.permission.AGENT_REQUIRE_FORM
   * @param { Want } want - 发布请求，需包含以下字段。
   *     <br>bundleName: 目标卡片所属应用的bundleName
   *     <br>abilityName: 目标卡片所属应用的Ability
   *     <br>parameters:
   *     <br>- ohos.extra.param.key.form_dimension: 目标卡片规格
   *     <br>- ohos.extra.param.key.form_name: 目标卡片名
   *     <br>- ohos.extra.param.key.module_name: 目标卡片moduleName
   * @returns { Promise<string> } Promise对象。返回卡片标识。
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501002 - The number of forms exceeds the upper limit. [since 26.1.0]
   * @throws { BusinessError } 16501008 - Waiting for the form addition to the desktop timed out. [since 12]
   * @throws { BusinessError } 16501017 - There is no space to publish form. [since 26.1.0]
   * @throws { BusinessError } 16501018 - This form does not support publishing. [since 26.1.0]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want): Promise<string>;
          
  /**
   * 跨应用更新卡片，使用Promise异步回调。
   *
   * @permission ohos.permission.UPDATE_FORM_CROSS_BUNDLE
   * @param { string } formId - 待更新的卡片标识。
   * @param { formBindingData.FormBindingData } formBindingData - 用于更新的卡片数据。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permissions denied.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 16500050 - Possible cause IPC connection error. Such as the remote object dose not exist.
   * @throws { BusinessError } 16500060 - Possible cause Service State error. Such as the form is recovering.
   * @throws { BusinessError } 16501000 - Possible cause internal functional error. Such as virtualization failed.
   * @throws { BusinessError } 16501001 - The ID of the form to be operated does not exist.
   * @throws { BusinessError } 16501003 - The form to be operated has been deleted already.
   * @throws { BusinessError } 16501007 - The form to be operated is not trusted.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function updateFormCrossBundle(formId: string, formBindingData: formBindingData.FormBindingData): Promise<void>;
}
export default formAgent;