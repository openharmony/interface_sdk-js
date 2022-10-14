/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { StartAbilityParameter } from './ability/startAbilityParameter';
import { DataAbilityHelper } from './ability/dataAbilityUtils';
import { NotificationRequest } from './notification/notificationRequest';
import { ConnectOptions } from './ability/connectOptions';
import Want from './@ohos.application.Want';

/**
 * A Particle Ability represents an ability with service.
 * @namespace particleAbility
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 9
 */
declare namespace particleAbility {
  /**
   * Service ability uses this method to start a specific ability.
   * @param { StartAbilityParameter } parameter - Indicates the ability to start.
   * @param { AsyncCallback<void> } callback - The callback of startAbility.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function startAbility(parameter: StartAbilityParameter, callback: AsyncCallback<void>): void;

  /**
   * Service ability uses this method to start a specific ability.
   * @param { StartAbilityParameter } parameter - Indicates the ability to start.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function startAbility(parameter: StartAbilityParameter): Promise<void>;

  /**
   * Destroys this service ability.
   * @param { AsyncCallback<void> } callback - The callback of terminateSelf.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function terminateSelf(callback: AsyncCallback<void>): void;

  /**
   * Destroys this service ability.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function terminateSelf(): Promise<void>;

  /**
   * Obtains the dataAbilityHelper.
   * @param { string } uri - Indicates the path of the file to open.
   * @returns { DataAbilityHelper } Returns the dataAbilityHelper.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function acquireDataAbilityHelper(uri: string): DataAbilityHelper;

  /**
   * Connects an ability to a Service ability.
   * @param { Want } request - Indicates the Service ability to connect.
   * @param { ConnectOptions } options - Callback object for the client. If this parameter is null, an exception is thrown.
   * @returns { number } Returns the unique identifier of the connection between the client and the service side.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function connectAbility(request: Want, options: ConnectOptions): number;

  /**
   * Disconnects ability to a Service ability.
   * @param { number } connection - the connection id returned from connectAbility api.
   * @param { AsyncCallback<void> } callback - The callback of disconnectAbility.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function disconnectAbility(connection: number, callback: AsyncCallback<void>): void;

  /**
   * Disconnects ability to a Service ability.
   * @param { number } connection - the connection id returned from connectAbility api.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 9
   */
  function disconnectAbility(connection: number): Promise<void>;
}
export default particleAbility;
