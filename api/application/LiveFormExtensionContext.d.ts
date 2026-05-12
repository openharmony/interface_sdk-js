/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 
import ExtensionContext from './ExtensionContext';
import Want from '../@ohos.app.ability.Want';
/*** if arkts static */
import type { ConnectOptions } from '../ability/connectOptions';
/*** endif */

/**
 * **LiveFormExtensionContext**, inherited from 
 * [ExtensionContext]{@link ./application/ExtensionContext:ExtensionContext}, is the context of 
 * [LiveFormExtensionAbility]{@link @ohos.app.form.LiveFormExtensionAbility}.
 * 
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @atomicservice
 * @since 20 dynamic
 * @since 23 static
 */
declare class LiveFormExtensionContext extends ExtensionContext {
  /**
   * Starts the widget provider (application) page. This API uses a promise to return the result.
   * <br>This API can only be used to start the page of the interactive widget provider (application). If this API is used 
   * to start the page of another application, error code 16501011 will be reported.
   * <br>You are advised to call this API in click event callbacks. Calling it in callbacks of other gesture events is not 
   * recommended, and direct calls in non-gesture events are not allowed. Otherwise, the error code 16501011 will be 
   * reported.
   * <br>In addition, this API can be directly called in the click event callback but cannot be called after a delay. 
   * Otherwise, the error code 16501011 will be reported.
   *
   * @param { Want } want - Information about the application page to be started. 
   *     [Only explicit Want is supported](docroot://application-models/ability-startup-with-explicit-want.md).
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 801 - Capability not supported due to limited device capabilities.
   * @throws { BusinessError } 16500050 - An IPC connection error happened.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501011 - The form can not support this operation
   * @syscap SystemCapability.Ability.Form
   * @stagemodelonly
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  startAbilityByLiveForm(want: Want): Promise<void>;

  /**
   * Connect a service extension ability.The destination of the connection must be a service extension.
   * You must implement the {@link ConnectOptions} interface to obtain the proxy of the target
   * service extension when the Service extension is connected.
   *
   * @param { Want } want - Indicates the service extension to connect.
   * @param { ConnectOptions } connection - Indicates the callback of connection.
   * @returns { long } Returns the connection id.
   * @throws { BusinessError } 202 - Permission verification failed,
   *     application which is not a system application uses system API.
   * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501011 - The form can not support this operation
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  public connectServiceExtensionAbility(want: Want, connection: ConnectOptions): long;

  /**
   * Disconnect an ability to a service extension, in contrast to {@link connectServiceExtensionAbility}.
   *
   * @param { long } connectionId - the connection id returned from connectServiceExtensionAbility api.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 202 - Permission verification failed,
   *     application which is not a system application uses system API.
   * @throws { BusinessError } 16501000 - An internal functional error occurred.
   * @throws { BusinessError } 16501011 - The form can not support this operation
   * @syscap SystemCapability.Ability.Form
   * @systemapi
   * @stagemodelonly
   * @since 21 dynamic
   * @since 23 static
   */
  public disconnectServiceExtensionAbility(connectionId: long): Promise<void>;
}
export default LiveFormExtensionContext;
