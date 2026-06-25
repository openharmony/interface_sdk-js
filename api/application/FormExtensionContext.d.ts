/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

import { AsyncCallback } from '../@ohos.base';
import type { ConnectOptions } from '../ability/connectOptions';
import Want from '../@ohos.app.ability.Want';
import ExtensionContext from './ExtensionContext';

/**
 * The FormExtensionContext module, inherited from 
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}, provides the context environment for the 
 * [FormExtensionAbility]{@link @ohos.app.form.FormExtensionAbility}.
 * You can use the APIs of this module to start a FormExtensionAbility.
 * 
 * > **NOTE**
 * 
 * > - The APIs of this module can be used only in the stage model.
 *
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare class FormExtensionContext extends ExtensionContext {
  /**
   * Starts an ability. This API uses an asynchronous callback to return the result.
   *
   * @param { Want } want - Information about the ability to start, such as the bundle name, ability name, and custom 
   *     parameters.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the ability is started, **err** is 
   *     undefined; otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16500101 - The application is not a system application. [since 9 - 11]
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want, callback: AsyncCallback<void>): void;

  /**
   * Starts an ability. This API uses a promise to return the result.
   *
   * @param { Want } want - Information about the ability to start, such as the bundle name, ability name, and custom 
   *     parameters.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - The application is not a system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16500101 - The application is not a system application. [since 9 - 11]
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * Connects this ability to a ServiceExtensionAbility.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
   * @param { ConnectOptions } options - Callback used to return the information indicating that the connection is successful
   *     , interrupted, or failed.
   * @returns { long } Returns a connect ID, which will be used for the disconnection.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000001 - The specified ability does not exist.
   * @throws { BusinessError } 16000002 - Incorrect ability type.
   * @throws { BusinessError } 16000004 - Can not start invisible component.
   * @throws { BusinessError } 16000005 - The specified process does not have the permission.
   * @throws { BusinessError } 16000006 - Cross-user operations are not allowed.
   * @throws { BusinessError } 16000008 - The crowdtesting application expires.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
   * @throws { BusinessError } 16000055 - Installation-free timed out.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  connectServiceExtensionAbility(want: Want, options: ConnectOptions): long;

  /**
   * Disconnects this ability from a **ServiceExtensionAbility** and after the successful disconnection, sets the 
   * **remote** object returned upon the connection to void. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { long } connection - Number returned after 
   *     [connectServiceExtensionAbility]{@link FormExtensionContext#connectServiceExtensionAbility} is called.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the ability is disconnected, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void;

  /**
   * Disconnects this ability from a ServiceExtensionAbility and after the successful disconnection, sets the remote 
   * object returned upon the connection to void. This API uses a promise to return the result. 
   *
   * @param { long } connection - Number returned after 
   *     [connectServiceExtensionAbility]{@link FormExtensionContext#connectServiceExtensionAbility} is called.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 16000011 - The context does not exist.
   * @throws { BusinessError } 16000050 - Internal error.
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  disconnectServiceExtensionAbility(connection: long): Promise<void>;
}
export default FormExtensionContext;
