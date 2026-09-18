/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * The **SystemParameter** module provides system services with easy access to key-value pairs. You can use the APIs 
 * provided by this module to describe the service status and change the service behavior. The basic operation 
 * primitives are **get** and **set**. You can obtain the values of system parameters through getters and modify the 
 * values through setters.
 * 
 * For details about the system parameter design principles and definitions, see 
 * [Parameter Management](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md).
 * 
 * > **NOTE**
 * >
 * > - The APIs of this module are no longer maintained since API version 9. You are advised to use the new APIs of 
 * > [@ohos.systemParameterEnhance]{@link @ohos.systemParameterEnhance:systemParameterEnhance} instead.
 * >
 * > - The initial APIs of this module are supported since API version 6. Newly added APIs will be marked with a 
 * > superscript to indicate their earliest API version.
 * >
 * > - The APIs of this module are system APIs.
 * >
 * > - Third-party applications cannot use the APIs provided by this module because system parameters each require 
 * > specific discretionary access control (DAC) and mandatory access control (MAC) permissions.
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 * @since 6 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.systemParameterEnhance:systemParameterEnhance
 */
declare namespace systemParameter {
  /**
   * Obtains a value of the specified key.
   *
   * > **NOTE**
   * >
   * > Both **getSync** and **get** can be used to obtain system parameter values.
   * > - **getSync**: synchronous method, which directly returns the system parameter value. This method is suitable
   * > for simple synchronization scenarios.
   * > - **get**: asynchronous method, which uses a callback or promise to return the result asynchronously. This
   * > method is suitable for scenarios that require asynchronous processing.
   * >
   * > You should select a proper method based on the specific scenario.
   *
   * @param { string } key - Key to be queried.
   * @param { string } def - Default value of the system parameter. <br> It works only when the system parameter does
   *     not exist. <br> Its value can be **undefined** or a random character string.
   * @returns { string } Value of the system parameter.
   *     <br> If the specified key exists, the set value is returned.
   *     <br> If the specified key does not exist and **def** is set to a valid value, the set value is returned. If the
   *     specified key does not exist and **def** is set to an invalid value (such as **undefined**) or is not set, an
   *     empty string is returned.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.systemParameterEnhance.getSync
   */
  function getSync(key: string, def?: string): string;

  /**
   * Obtains a value of the specified key. This API uses an asynchronous callback to return the result.
   *
   * @param { string } key - Key to be queried.
   * @param { AsyncCallback<string> } callback - Callback used to return the system parameter value asynchronously.
   *     If the operation is successful, **err** is **undefined** and **data** is the system parameter value. If the
   *     operation fails, **err** is an error object and **data** is **undefined**.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.systemParameterEnhance.get
   */
  function get(key: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains a value of the specified key. This API uses an asynchronous callback to return the result.
   *
   * @param { string } key - Key to be queried.
   * @param { string } def - Default value of the system parameter. This parameter must be passed during the call,
   *     but its value can be a random character string. **def** takes effect only when the system parameter does not
   *     exist.
   * @param { AsyncCallback<string> } callback - Callback used to return the system parameter value asynchronously.
   *     If the operation is successful, **err** is **undefined** and **data** is the system parameter value. If the
   *     operation fails, **err** is an error object and **data** is **undefined**.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.systemParameterEnhance.get
   */
  function get(key: string, def: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains a value of the specified key. This API uses a promise to return the result.
   *
   * @param { string } key - Key to be queried.
   * @param { string } def - Default value of the system parameter. <br> It works only when the system parameter does
   *     not exist. <br> Its value can be **undefined** or a random character string.
   * @returns { Promise<string> } Promise used to return the result.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.systemParameterEnhance.get
   */
  function get(key: string, def?: string): Promise<string>;

  /**
   * Sets a value for the specified key.
   *
   * > **NOTE**
   * >
   * > Both **setSync** and **set** can be used to set system parameter values.
   * > - **setSync**: synchronous method, which directly sets the system parameter and returns the result
   * > immediately. This method is suitable for simple synchronization scenarios.
   * > - **set**: asynchronous method, which uses a callback or promise to return the result asynchronously. This
   * > method is suitable for scenarios that require asynchronous processing.
   * >
   * > You should select a proper method based on the specific scenario.
   *
   * @param { string } key - Key to be set.
   * @param { string } value - Value to set. For details about length limit, see [Parameter Management](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md).
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.systemParameterEnhance.setSync
   */
  function setSync(key: string, value: string): void;

  /**
   * Sets a value of the specified key. This API uses an asynchronous callback to return the result.
   *
   * @param { string } key - Key to be set.
   * @param { string } value - Value to set. For details about length limit, see [Parameter Management](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md).
   * @param { AsyncCallback<void> } callback - Callback used to return the setting result asynchronously. If the
   *     setting is successful, **err** is **undefined**. If the setting fails, **err** is an error object.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.systemParameterEnhance.set
   */
  function set(key: string, value: string, callback: AsyncCallback<void>): void;

  /**
   * Sets a value of the specified key. This API uses a promise to return the result.
   *
   * @param { string } key - Key to be set.
   * @param { string } value - Value to set. For details about length limit, see [Parameter Management](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md).
   * @returns { Promise<void> } Promise used to return the result.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.systemParameterEnhance.set
   */
  function set(key: string, value: string): Promise<void>;
}

export default systemParameter;