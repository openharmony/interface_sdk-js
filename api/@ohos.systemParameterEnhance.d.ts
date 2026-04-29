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

/**
 * @file
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * The **SystemParameter** module provides system services with easy access to key-value pairs. You can use the APIs
 * provided by this module to describe the service status and change the service behavior. The basic operation 
 * primitives are **get** and **set**. You can obtain the values of system parameters through getter APIs and modify
 * the values through setter APIs. For details about the system parameter design principles and definitions, see 
 * [Parameter Management](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md).
 * 
 * > **NOTE**
 * >
 * > - The APIs provided by this module are system APIs.
 * >
 * > - Third-party applications cannot use the APIs provided by this module because system parameters each require 
 * > specific discretionary access control (DAC) and mandatory access control (MAC) permissions.
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace systemParameterEnhance {
  /**
   * Obtains a value of the specified key. This API uses a promise to return the result.
   *
   * @param { string } key - Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } def - Default value of the system parameter.<br> It works only when the system parameter does
   *     not exist.<br> The value can be **undefined** or any custom value.
   * @returns { string } Value of the system parameter.
   *     <br> If the specified key exists, the set value is returned.
   *     <br> If the specified key does not exist and **def** is set to a valid value, the set value is returned. If
   *     the specified key does not exist and **def** is set to an invalid value (such as **undefined**) or is not set,
   *     an exception is thrown.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getSync(key: string, def?: string): string;

  /**
   * Obtains a value of the specified key. This API uses an asynchronous callback to return the result.
   *
   * @param { string } key - Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function get(key: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains a value of the specified key. This API uses an asynchronous callback to return the result.
   *
   * @param { string } key - Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } def - Default value.
   * @param { AsyncCallback<string> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function get(key: string, def: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains a value of the specified key. This API uses a promise to return the result.
   *
   * @param { string } key - Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } def - Default value of the system parameter.<br> It works only when the system parameter does
   *     not exist.<br> The value can be **undefined** or any custom value.
   * @returns { Promise<string> } Promise used to return the execution result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700101 - System parameter not found.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function get(key: string, def?: string): Promise<string>;

  /**
   * Sets a value for the specified key. This API uses a promise to return the result.
   *
   * @param { string } key - Target key. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } value - Value to set. The value can contain a maximum of 96 bytes (including the end character).
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700102 - Invalid system parameter value.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setSync(key: string, value: string): void;

  /**
   * Sets a value of the specified key. This API uses an asynchronous callback to return the result.
   *
   * @param { string } key - Target key. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } value - Value to set. The value can contain a maximum of 96 bytes (including the end character).
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700102 - Invalid system parameter value.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function set(key: string, value: string, callback: AsyncCallback<void>): void;

  /**
   * Sets a value of the specified key. This API uses a promise to return the result.
   *
   * @param { string } key - Target key. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } value - Value to set. The value can contain a maximum of 96 bytes (including the end character).
   * @returns { Promise<void> } Promise used to return the execution result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;
   *     2.incorrect parameter types; 3.parameter verification failed.
   * @throws { BusinessError } 14700102 - Invalid system parameter value.
   * @throws { BusinessError } 14700103 - The operation on the system permission is denied.
   * @throws { BusinessError } 14700104 - System internal error such as out memory or deadlock.
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function set(key: string, value: string): Promise<void>;
}

export default systemParameterEnhance;