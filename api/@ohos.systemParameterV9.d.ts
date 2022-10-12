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

import { AsyncCallback, BusinessError } from './basic';

/**
 * Enumerates error code.
 *
 * @since 9
 */
export enum SystemParameterErrorCode {
    /**
     * Input parameter is missing or invalid.
     *
     * @since 9
     */
    SYSPARAM_INVALID_INPUT = 401,

    /**
     * System parameter can not be found.</br>
     * When getting system parameter values, if def value is specified, it will not return this error.
     *
     * @since 9
     */
    SYSPARAM_NOT_FOUND = 14700101,

    /**
     * System parameter value is invalid.</br>
     *   - <p>When setting system parameters, the value length should not exceed 95 bytes.</p>
     *   - <p>And system parameter has three value types: string, integer and bool.
     *     if the value type is not matched, it will also return this error code.</p>
     *
     * @since 9
     */
    SYSPARAM_INVALID_VALUE = 14700102,

    /**
     * System permission operation permission denied.</br>
     * <p>System parameter are system resources, each parameter is protected by DAC and MAC rules.
     * <p>Typical permission checking include:</p>
     *   - <p>systemapi: only system application can call system parameter related APIs</p>
     *   - <p>DAC: each system parameter has user and group owner with get, set permissions.
    *           Applications can only operate User/Group/Ownership matched system parameters.</p>
     *   - <p>MAC: each system parameter is also protected by SELinux labels.</p>
     *
     * @since 9
     */
    SYSPARAM_PERMISSION_DENIED = 14700103,

    /**
     * System internal error including out of memory, deadlock etc.
     *
     * @since 9
     */
    SYSPARAM_SYSTEM_ERROR = 14700104,
}

 /**
 * The interface of system parameters class.
 *
 * @since 9
 * @syscap SystemCapability.Startup.SystemInfo
 * @systemapi Hide this for inner system use.
 */
declare namespace systemParameterV9 {
    /**
     * Gets the value of the attribute with the specified key.
     *
     * @param key Key of the system attribute.
     * @param def Default value.
     * @return the value of the parameter.
     * @throws {BusinessError} 401 - if type of key is not string or key is not specified.
     * @throws {BusinessError} 14700101 - if key is not found
     * @throws {BusinessError} 14700103 - if permission denied
     * @throws {BusinessError} 14700104 - if system internal error
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 9
     */
    function getSync(key: string, def?: string): string;

    /**
     * Gets the value of the attribute with the specified key.
     *
     * @param key Key of the system attribute.
     * @param callback Callback function.
     * @throws {BusinessError} 401 - if type of key is not string or key is not specified.
     * @throws {BusinessError} 14700101 - if key is not found
     * @throws {BusinessError} 14700103 - if permission denied
     * @throws {BusinessError} 14700104 - if system internal error
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 9
     */
    function get(key: string, callback: AsyncCallback<string>): void;

    /**
     * Gets the value of the attribute with the specified key.
     *
     * @param key Key of the system attribute.
     * @param def Default value.
     * @param callback Callback function.
     * @throws {BusinessError} 401 - if type of key is not string or key is not specified.
     * @throws {BusinessError} 14700101 - if key is not found
     * @throws {BusinessError} 14700103 - if permission denied
     * @throws {BusinessError} 14700104 - if system internal error
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 9
     */
    function get(key: string, def: string, callback: AsyncCallback<string>): void;

    /**
     * Gets the value of the attribute with the specified key.
     *
     * @param key Key of the system attribute.
     * @param def Default value.
     * @throws {BusinessError} 401 - if type of key is not string or key is not specified.
     * @throws {BusinessError} 14700101 - if key is not found
     * @throws {BusinessError} 14700103 - if permission denied
     * @throws {BusinessError} 14700104 - if system internal error
     * @return Promise, which is used to obtain the result asynchronously.
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 9
     */
    function get(key: string, def?: string): Promise<string>;

    /**
     * Sets a value for the attribute with the specified key.
     *
     * @param key Key of the system attribute.
     * @param value System attribute value to set.
     * @throws {BusinessError} 401 - if type of key is not string or key is not specified.
     * @throws {BusinessError} 14700102 - if value is invalid
     * @throws {BusinessError} 14700103 - if permission denied
     * @throws {BusinessError} 14700104 - if system internal error
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 9
     */
    function setSync(key: string, value: string): void;

    /**
     * Sets a value for the attribute with the specified key.
     *
     * @param key Key of the system attribute.
     * @param value System attribute value to set.
     * @param callback Callback function.
     * @throws {BusinessError} 401 - if type of key is not string or key is not specified.
     * @throws {BusinessError} 14700102 - if value is invalid
     * @throws {BusinessError} 14700103 - if permission denied
     * @throws {BusinessError} 14700104 - if system internal error
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 9
     */
    function set(key: string, value: string, callback: AsyncCallback<void>): void;

    /**
     * Sets a value for the attribute with the specified key.
     *
     * @param key Key of the system attribute.
     * @param value Default value.
     * @return Promise, which is used to obtain the result asynchronously.
     * @throws {BusinessError} 401 - if type of key is not string or key is not specified.
     * @throws {BusinessError} 14700102 - if value is invalid
     * @throws {BusinessError} 14700103 - if permission denied
     * @throws {BusinessError} 14700104 - if system internal error
     * @syscap SystemCapability.Startup.SystemInfo
     * @since 9
     */
    function set(key: string, value: string): Promise<void>;
}

export default systemParameter;
