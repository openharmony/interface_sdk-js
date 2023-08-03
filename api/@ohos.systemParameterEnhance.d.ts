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

import { AsyncCallback, BusinessError } from './@ohos.base';

/**
 * The interface of system parameters class.
 *
 * @namespace systemParameterEnhance
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 * @since 9
 */
declare namespace systemParameterEnhance {
  /**
   * Gets the value of the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute.
   * @param { string } def Default value.
   * @returns { string } the value of the parameter.
   * @throws { BusinessError } 401 - if type of key is not string or key is not specified.
   * @throws { BusinessError } 14700101 - if key is not found
   * @throws { BusinessError } 14700103 - if permission denied
   * @throws { BusinessError } 14700104 - if system internal error
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function getSync(key: string, def?: string): string;

  /**
   * Gets the value of the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute.
   * @param { AsyncCallback<string> } callback Callback function.
   * @throws { BusinessError } 401 - if type of key is not string or key is not specified.
   * @throws { BusinessError } 14700101 - if key is not found
   * @throws { BusinessError } 14700103 - if permission denied
   * @throws { BusinessError } 14700104 - if system internal error
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function get(key: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the value of the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute.
   * @param { string } def Default value.
   * @param { AsyncCallback<string> } callback Callback function.
   * @throws { BusinessError } 401 - if type of key is not string or key is not specified.
   * @throws { BusinessError } 14700101 - if key is not found
   * @throws { BusinessError } 14700103 - if permission denied
   * @throws { BusinessError } 14700104 - if system internal error
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function get(key: string, def: string, callback: AsyncCallback<string>): void;

  /**
   * Gets the value of the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute.
   * @param { string } def Default value.
   * @returns { Promise<string> }, which is used to obtain the result asynchronously.
   * @throws { BusinessError } 401 - if type of key is not string or key is not specified.
   * @throws { BusinessError } 14700101 - if key is not found
   * @throws { BusinessError } 14700103 - if permission denied
   * @throws { BusinessError } 14700104 - if system internal error
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function get(key: string, def?: string): Promise<string>;

  /**
   * Sets a value for the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute.
   * @param { string } value System attribute value to set.
   * @throws { BusinessError } 401 - if type of key is not string or key is not specified.
   * @throws { BusinessError } 14700102 - if value is invalid
   * @throws { BusinessError } 14700103 - if permission denied
   * @throws { BusinessError } 14700104 - if system internal error
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function setSync(key: string, value: string): void;

  /**
   * Sets a value for the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute.
   * @param { string } value System attribute value to set.
   * @param { AsyncCallback<void> } callback Callback function.
   * @throws { BusinessError } 401 - if type of key is not string or key is not specified.
   * @throws { BusinessError } 14700102 - if value is invalid
   * @throws { BusinessError } 14700103 - if permission denied
   * @throws { BusinessError } 14700104 - if system internal error
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function set(key: string, value: string, callback: AsyncCallback<void>): void;

  /**
   * Sets a value for the attribute with the specified key.
   *
   * @param { string } key Key of the system attribute.
   * @param { string } value Default value.
   * @returns { Promise<void> }, which is used to obtain the result asynchronously.
   * @throws { BusinessError } 401 - if type of key is not string or key is not specified.
   * @throws { BusinessError } 14700102 - if value is invalid
   * @throws { BusinessError } 14700103 - if permission denied
   * @throws { BusinessError } 14700104 - if system internal error
   * @syscap SystemCapability.Startup.SystemInfo
   * @systemapi Hide this for inner system use.
   * @since 9
   */
  function set(key: string, value: string): Promise<void>;
}

export default systemParameterEnhance;
