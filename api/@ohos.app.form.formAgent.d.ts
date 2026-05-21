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

import type { AsyncCallback } from './@ohos.base';
import type Want from './@ohos.app.ability.Want';

/**
 * The **FormAgent** module provides APIs related to the widget agent. Currently, you can use the APIs to request to 
 * publish widgets only.
 *
 * @syscap SystemCapability.Ability.Form
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace formAgent {

  /**
   * Requests to publish a widget to the widget host. This API uses an asynchronous callback to return the result. The 
   * widget host is usually the home screen.
   *
   * @permission ohos.permission.AGENT_REQUIRE_FORM
   * @param { Want } want - Publish request, which must contain the following fields:
   *     <br>**bundleName**: bundle name of the target widget.
   *     <br>**abilityName**: ability of the target widget.
   *     <br>parameters:
   *     <br>- **ohos.extra.param.key.form_dimension**: dimension of the target widget.
   *     <br>- **ohos.extra.param.key.form_name**: name of the target widget.
   *     <br>- **ohos.extra.param.key.module_name**: module name of the target widget.
   * @param { AsyncCallback<string> } callback - Callback used to return the widget ID.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified;2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501008 - Waiting for the form addition to the desktop timed out. [since 12]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want, callback: AsyncCallback<string>): void;

  /**
   * Requests to publish a widget to the widget host. This API uses a promise to return the result. The widget host is 
   * usually the home screen.
   *
   * @permission ohos.permission.AGENT_REQUIRE_FORM
   * @param { Want } want - Publish request, which must contain the following fields:
   *     <br>**bundleName**: bundle name of the target widget.
   *     <br>**abilityName**: ability of the target widget.
   *     <br>parameters:
   *     <br>- **ohos.extra.param.key.form_dimension**: dimension of the target widget.
   *     <br>- **ohos.extra.param.key.form_name**: name of the target widget.
   *     <br>- **ohos.extra.param.key.module_name**: module name of the target widget.
   * @returns { Promise<string> } Promise used to return the widget ID.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - IPC connection error.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501008 - Waiting for the form addition to the desktop timed out. [since 12]
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function requestPublishForm(want: Want): Promise<string>;
}
export default formAgent;
