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
 * @file System Parameter
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * System Parameter is a simple and easy-to-use key-value pair access interface provided for system services. Each
 * system service can define system parameters to describe its status information, or change the behavior of the
 * system service through system parameters. Its basic operation primitives are get and set. You can query the value
 * of a system parameter through get, and modify the value of a system parameter through set. For details about the
 * design principles and definitions of system parameters, see [System Parameter](docroot://../device-dev/subsystems/subsys-boot-init-sysparam.md).
 *
 * > **NOTE**
 * >
 * > - The initial APIs of this module are supported since API version 9. Newly added APIs will be marked with a
 * > superscript to indicate their earliest API version.
 * > - The APIs of this module are system APIs.
 * > - Since system parameters are internal information and control parameters of each system service, each system
 * > parameter has its own DAC and MAC access control permissions. Third-party applications cannot use such APIs.
 *
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace systemParameterEnhance {
  /**
   * Obtains the value of the specified system parameter key.
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
   * @param { string } key - Key to be queried. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } def - Default value of the system parameter. <br> It works only when the system parameter does
   *     not exist. <br> Its value can be **undefined** or a random character string.
   * @returns { string } Value of the system parameter. If the specified key exists, the set value is returned. If
   *     the specified key does not exist and **def** is specified (not **undefined**), **def** is returned. If the
   *     specified key does not exist and **def** is not specified or **def** is **undefined**, an exception is
   *     thrown.
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
   * @param { AsyncCallback<string> } callback - Callback used to return the system parameter value
   *     asynchronously. If the operation is successful, **err** is **undefined** and **data** is the system
   *     parameter value. If the operation fails, **err** is an error object and **data** is **undefined**.
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
   * @param { string } def - Default value of the system parameter. It works only when the system parameter does
   *     not exist. <br> Its value can be a random character string.
   * @param { AsyncCallback<string> } callback - Callback used to return the system parameter value
   *     asynchronously. If the operation is successful, **err** is **undefined** and **data** is the system
   *     parameter value. If the operation fails, **err** is an error object and **data** is **undefined**.
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
   * @param { string } def - Default value of the system parameter. <br> It works only when the system parameter does
   *     not exist. <br> Its value can be **undefined** or a random character string.
   * @returns { Promise<string> } Promise used to return the result.
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
   * @param { string } key - Key to be set. The value can contain a maximum of 128 bytes. Only letters, digits,
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
   * @param { string } key - Key to be set. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } value - Value to set. The value can contain a maximum of 96 bytes (including the end character).
   * @param { AsyncCallback<void> } callback - Callback used to return the system parameter value asynchronously. If
   *     the operation is successful, **err** is **undefined**; otherwise, **err** is an error object.
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
   * @param { string } key - Key to be set. The value can contain a maximum of 128 bytes. Only letters, digits,
   *     periods (.), hyphens (-), at signs (@), colons (:), and underscores (_) are allowed.
   * @param { string } value - Value to set. The value can contain a maximum of 96 bytes (including the end character).
   * @returns { Promise<void> } Promise used to return the result.
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