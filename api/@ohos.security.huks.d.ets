/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit UniversalKeystoreKit
 */

export declare class HuksBusinessError extends Error {
  constructor(code: int, message: string);
  public code: int;
}

type AsyncCallback<T> = (err: HuksBusinessError, data?: T) => void;

/**
 * OpenHarmony Universal KeyStore
 *
 * @namespace huks
 * @syscap SystemCapability.Security.Huks.Core
 * @since 8
 */
/**
 * OpenHarmony Universal KeyStore
 *
 * @namespace huks
 * @syscap SystemCapability.Security.Huks.Core
 * @atomicservice
 * @since 11
 */
declare namespace huks {

  /**
   * Generate Key.
   *
   * @param { string } keyAlias - keyAlias indicates the key's name.
   * @param { HuksOptions } options - options indicates the properties of the key.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000013 - queried credential does not exist
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @throws { HuksBusinessError } 12000015 - call service failed
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function generateKeyItem(keyAlias: string, options: HuksOptions): Promise<void>;

    /**
   * Generate Key As User.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { int } userId - userId indicates the userId of the owner of the key.
   * @param { string } keyAlias - keyAlias indicates the key's name.
   * @param { HuksOptions } huksOptions - huksOptions indicates the properties of the key.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { HuksBusinessError } 201 - Permission denied. An attempt was made to use key as user forbidden
   * by permission:
   * <br>ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS.
   * @throws { HuksBusinessError } 202 - not system app
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000013 - queried credential does not exist
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @throws { HuksBusinessError } 12000015 - call service failed
   * @syscap SystemCapability.Security.Huks.Extension
   * @systemapi this method can be used only by system applications.
   * @since 20
   */
    function generateKeyItemAsUser(userId: int, keyAlias: string, huksOptions: HuksOptions): Promise<void>;

  /**
   * Delete Key.
   *
   * @param { string } keyAlias - keyAlias indicates the key's name.
   * @param { HuksOptions } options - options indicates the properties of the key.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function deleteKeyItem(keyAlias: string, options: HuksOptions): Promise<void>;

  /**
   * Import Key.
   *
   * @param { string } keyAlias - keyAlias indicates the key's name.
   * @param { HuksOptions } options - options indicates the properties of the key.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000013 - queried credential does not exist
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @throws { HuksBusinessError } 12000015 - call service failed
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function importKeyItem(keyAlias: string, options: HuksOptions): Promise<void>;

  /**
   * Import Wrapped Key.
   *
   * @param { string } keyAlias - keyAlias indicates the name of key to be imported.
   * @param { string } wrappingKeyAlias - wrappingKeyAlias indicates the name of key for wrapping the key to be imported
   * @param { HuksOptions } options - options indicates the properties of the key.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000013 - queried credential does not exist
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @throws { HuksBusinessError } 12000015 - call service failed
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function importWrappedKeyItem(keyAlias: string, wrappingKeyAlias: string, options: HuksOptions): Promise<void>;

  /**
   * Export Key.
   *
   * @param { string } keyAlias - keyAlias indicates the key's name.
   * @param { HuksOptions } options - options indicates the properties of the key.
   * @returns { Promise<HuksReturnResult> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function exportKeyItem(keyAlias: string, options: HuksOptions): Promise<HuksReturnResult>;

  /**
   * Check whether the key exists.
   *
   * @param { string } keyAlias - keyAlias indicates the key's name.
   * @param { HuksOptions } options - options indicates the properties of the key.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @since 20
   */
  export function isKeyItemExist(keyAlias: string, options: HuksOptions): Promise<boolean>;

  /**
   * Init Operation.
   *
   * @param { string } keyAlias - keyAlias indicates the key's name.
   * @param { HuksOptions } options - options indicates the properties of the key.
   * @returns { Promise<HuksSessionHandle> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000010 - the number of sessions has reached limit
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function initSession(keyAlias: string, options: HuksOptions): Promise<HuksSessionHandle>;

  /**
   * Update Operation.
   *
   * @param { long } handle - indicates the handle of the init operation.
   * @param { HuksOptions } options - options indicates the properties of the update operation.
   * @param { Uint8Array } token - token indicates the value of auth token from USER IAM service.
   * @returns { Promise<HuksReturnResult> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { HuksBusinessError } 12000008 - verify auth token failed
   * @throws { HuksBusinessError } 12000009 - auth token is already timeout
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function updateSession(handle: long, options: HuksOptions, token?: Uint8Array): Promise<HuksReturnResult>;

  /**
   * Finish Operation.
   *
   * @param { long } handle - indicates the handle of the init operation.
   * @param { HuksOptions } options - options indicates the properties of the finish operation.
   * @param { Uint8Array } token - token indicates the value of auth token from USER IAM service.
   * @returns { Promise<HuksReturnResult> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000001 - algorithm mode is not supported
   * @throws { HuksBusinessError } 12000002 - algorithm param is missing
   * @throws { HuksBusinessError } 12000003 - algorithm param is invalid
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000007 - this credential is already invalidated permanently
   * @throws { HuksBusinessError } 12000008 - verify auth token failed
   * @throws { HuksBusinessError } 12000009 - auth token is already timeout
   * @throws { HuksBusinessError } 12000011 - queried entity does not exist
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function finishSession(handle: long, options: HuksOptions, token?: Uint8Array): Promise<HuksReturnResult>;

  /**
   * Abort Operation.
   *
   * @param { long } handle - indicates the handle of the init operation.
   * @param { HuksOptions } options - options indicates the properties of the abort operation.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { HuksBusinessError } 401 - Parameter error. Possible causes:
   *                                 1. Mandatory parameters are left unspecified.
   *                                 2. Incorrect parameter types.
   *                                 3. Parameter verification failed.
   * @throws { HuksBusinessError } 801 - api is not supported
   * @throws { HuksBusinessError } 12000004 - operating file failed
   * @throws { HuksBusinessError } 12000005 - IPC communication failed
   * @throws { HuksBusinessError } 12000006 - error occurred in crypto engine
   * @throws { HuksBusinessError } 12000012 - external error
   * @throws { HuksBusinessError } 12000014 - memory is insufficient
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export function abortSession(handle: long, options: HuksOptions): Promise<void>;

  /**
   * Interface of huks param.
   *
   * @typedef HuksParam
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 11
   */
  export interface HuksParam {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @type { HuksTag }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    tag: HuksTag;
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @type { boolean | int | bigint | Uint8Array }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    value: boolean | int | bigint | Uint8Array;
  }

  /**
   * Interface of huks handle.
   *
   * @typedef HuksSessionHandle
   * @syscap SystemCapability.Security.Huks.Core
   * @since 9
   */
  /**
   * Interface of huks handle.
   *
   * @typedef HuksSessionHandle
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 11
   */
  export interface HuksSessionHandle {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @type { long }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 20
     */
    handle: long;
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @type { ?Uint8Array }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    challenge?: Uint8Array;
  }

  /**
   * Interface of huks option.
   *
   * @typedef HuksOptions
   * @syscap SystemCapability.Security.Huks.Core
   * @since 8
   */
  /**
   * Interface of huks option.
   *
   * @typedef HuksOptions
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 11
   */
  export interface HuksOptions {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @type { ?Array<HuksParam> }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    properties?: Array<HuksParam>;
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @type { ?Uint8Array }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    inData?: Uint8Array;
  }

  /**
   * Interface of huks result.
   *
   * @typedef HuksReturnResult
   * @syscap SystemCapability.Security.Huks.Core
   * @since 9
   */
  /**
   * Interface of huks result.
   *
   * @typedef HuksReturnResult
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 11
   */
  export interface HuksReturnResult {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @type { ?Uint8Array }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    outData?: Uint8Array;
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @type { ?Array<HuksParam> }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    properties?: Array<HuksParam>;
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @type { ?Array<string> }
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    certChains?: Array<string>;
  }

    /**
   * Interface of huks ListAliases result.
   *
   * @typedef HuksListAliasesReturnResult
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 12
   */
  export interface HuksListAliasesReturnResult {

    /**
     * the returned list of key aliases
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    keyAliases: Array<string>;
  }

  /**
   * Enum for huks exception error code.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksExceptionErrCode {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_PERMISSION_FAIL = 201,
    /**
     * Non-system applications are not allowed to use system APIs.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @since 12
     */
    HUKS_ERR_CODE_NOT_SYSTEM_APP = 202,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_ILLEGAL_ARGUMENT = 401,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_NOT_SUPPORTED_API = 801,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_FEATURE_NOT_SUPPORTED = 12000001,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_MISSING_CRYPTO_ALG_ARGUMENT = 12000002,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_INVALID_CRYPTO_ALG_ARGUMENT = 12000003,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_FILE_OPERATION_FAIL = 12000004,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_COMMUNICATION_FAIL = 12000005,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_CRYPTO_FAIL = 12000006,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_KEY_AUTH_PERMANENTLY_INVALIDATED = 12000007,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_KEY_AUTH_VERIFY_FAILED = 12000008,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_KEY_AUTH_TIME_OUT = 12000009,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_SESSION_LIMIT = 12000010,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_ITEM_NOT_EXIST = 12000011,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_EXTERNAL_ERROR = 12000012,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_CREDENTIAL_NOT_EXIST = 12000013,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_INSUFFICIENT_MEMORY = 12000014,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ERR_CODE_CALL_SERVICE_FAILED = 12000015,
    /**
     * A device password is required but not set.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 11
     */
    /**
     * A device password is required but not set.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_ERR_CODE_DEVICE_PASSWORD_UNSET = 12000016
  }

  /**
   * Enum for huks key purpose.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyPurpose {
    /**
     * Usable with RSA, EC and AES keys.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * Usable with RSA, EC and AES keys.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_KEY_PURPOSE_ENCRYPT = 1,
    /**
     * Usable with RSA, EC and AES keys.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * Usable with RSA, EC and AES keys.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_KEY_PURPOSE_DECRYPT = 2,
    /**
     * Usable with RSA, EC keys.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * Usable with RSA, EC keys.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_PURPOSE_SIGN = 4,
    /**
     * Usable with RSA, EC keys.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * Usable with RSA, EC keys.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_PURPOSE_VERIFY = 8,
    /**
     * Usable with EC keys.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * Usable with EC keys.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_PURPOSE_DERIVE = 16,
    /**
     * Usable with wrap key.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * Usable with wrap key.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_PURPOSE_WRAP = 32,
    /**
     * Usable with unwrap key.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * Usable with unwrap key.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_PURPOSE_UNWRAP = 64,
    /**
     * Usable with mac.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * Usable with mac.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_PURPOSE_MAC = 128,
    /**
     * Usable with agree.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * Usable with agree.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_PURPOSE_AGREE = 256
  }

  /**
   * Enum for huks key digest.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyDigest {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_NONE = 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_MD5 = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_SM3 = 2,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_SHA1 = 10,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_SHA224 = 11,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_SHA256 = 12,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_SHA384 = 13,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DIGEST_SHA512 = 14
  }

  /**
   * Enum for huks key padding.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyPadding {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_PADDING_NONE = 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_OAEP = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_PSS = 2,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_PKCS1_V1_5 = 3,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_PKCS5 = 4,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_PKCS7 = 5,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_ISO_IEC_9796_2 = 6,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_PADDING_ISO_IEC_9797_1 = 7,
  }

  /**
   * Enum for huks cipher mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksCipherMode {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_MODE_ECB = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_MODE_CBC = 2,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_MODE_CTR = 3,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_MODE_OFB = 4,
    /**
     * Cipher Feedback (CFB) mode
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_MODE_CFB = 5,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_MODE_CCM = 31,

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_MODE_GCM = 32
  }

  /**
   * Enum for huks key size.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeySize {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_KEY_SIZE_512 = 512,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_KEY_SIZE_768 = 768,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_KEY_SIZE_1024 = 1024,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_KEY_SIZE_2048 = 2048,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_KEY_SIZE_3072 = 3072,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_KEY_SIZE_4096 = 4096,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ECC_KEY_SIZE_224 = 224,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ECC_KEY_SIZE_256 = 256,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ECC_KEY_SIZE_384 = 384,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ECC_KEY_SIZE_521 = 521,

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_AES_KEY_SIZE_128 = 128,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_AES_KEY_SIZE_192 = 192,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_AES_KEY_SIZE_256 = 256,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_CURVE25519_KEY_SIZE_256 = 256,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DH_KEY_SIZE_2048 = 2048,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DH_KEY_SIZE_3072 = 3072,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DH_KEY_SIZE_4096 = 4096,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_SM2_KEY_SIZE_256 = 256,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_SM4_KEY_SIZE_128 = 128,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_DES_KEY_SIZE_64 = 64,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_3DES_KEY_SIZE_128 = 128,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_3DES_KEY_SIZE_192 = 192,
  }

    /**
   * Enum for huks key algorithm.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyAlg {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_RSA = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_ECC = 2,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_DSA = 3,

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_ALG_AES = 20,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_HMAC = 50,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_HKDF = 51,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_PBKDF2 = 52,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_ECDH = 100,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_X25519 = 101,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_ED25519 = 102,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_DH = 103,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_SM2 = 150,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_SM3 = 151,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_SM4 = 152,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_DES = 160,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_3DES = 161,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_ALG_CMAC = 162
  }

  /**
   * Enum for huks unwrap suite.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksUnwrapSuite {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_UNWRAP_SUITE_X25519_AES_256_GCM_NOPADDING = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_UNWRAP_SUITE_ECDH_AES_256_GCM_NOPADDING = 2
  }

  /**
   * Enum for huks key generate type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyGenerateType {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_GENERATE_TYPE_DEFAULT = 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_GENERATE_TYPE_DERIVE = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_GENERATE_TYPE_AGREE = 2
  }

  /**
   * Enum for huks key flag.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyFlag {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_FLAG_IMPORT_KEY = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_FLAG_GENERATE_KEY = 2,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_FLAG_AGREE_KEY = 3,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_FLAG_DERIVE_KEY = 4
  }

  /**
   * Enum for huks key storage type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksKeyStorageType {
    /**
     * The key is stored and used only in HUKS. It is mutually exclusive with HUKS_STORAGE_KEY_EXPORT_ALLOWED.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 10
     */
    /**
     * The key is stored and used only in HUKS. It is mutually exclusive with HUKS_STORAGE_KEY_EXPORT_ALLOWED.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_STORAGE_ONLY_USED_IN_HUKS = 2,
    /**
     * The key can be exported. It is mutually exclusive with HUKS_STORAGE_ONLY_USED_IN_HUKS.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 10
     */
    /**
     * The key can be exported. It is mutually exclusive with HUKS_STORAGE_ONLY_USED_IN_HUKS.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_STORAGE_KEY_EXPORT_ALLOWED = 3
  }

  /**
   * Enum for huks import key type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksImportKeyType {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_TYPE_PUBLIC_KEY = 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_TYPE_PRIVATE_KEY = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_KEY_TYPE_KEY_PAIR = 2
  }

  /**
   * Enum for rsa salt len type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksRsaPssSaltLenType {
    /**
     * Salt length that matches the digest length.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 10
     */
    /**
     * Salt length that matches the digest length.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_PSS_SALT_LEN_DIGEST = 0,

    /**
     * Maximum salt length.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 10
     */
    /**
     * Maximum salt length.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_RSA_PSS_SALT_LEN_MAX = 1
  }

  /**
   * Enum for huks user auth type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export enum HuksUserAuthType {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_USER_AUTH_TYPE_FINGERPRINT = 1 << 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_USER_AUTH_TYPE_FACE = 1 << 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_USER_AUTH_TYPE_PIN = 1 << 2
  }

  /**
   * Enum for huks auth access type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export enum HuksAuthAccessType {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD = 1 << 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL = 1 << 1,
    /**
     * Auth type for always valid.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 11
     */
    /**
     * Auth type for always valid.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_AUTH_ACCESS_ALWAYS_VALID = 1 << 2
  }

  /**
   * Enum for huks user auth mode.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export enum HuksUserAuthMode {
    /**
     * Auth mode for local scenarios.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_USER_AUTH_MODE_LOCAL = 0,
    /**
     * Auth mode for co-auth scenarios.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_USER_AUTH_MODE_COAUTH = 1,
  }

    /**
   * Enum for huks key file storage authentication level.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksAuthStorageLevel {
    /**
     * Key file storage security level for device encryption standard.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 11
     */
    /**
     * Key file storage security level for device encryption standard.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_AUTH_STORAGE_LEVEL_DE = 0,
    /**
     * Key file storage security level for credential encryption standard.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 11
     */
    /**
     * Key file storage security level for credential encryption standard.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_AUTH_STORAGE_LEVEL_CE = 1,
    /**
     * Key file storage security level for enhanced credential encryption standard.
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 11
     */
    /**
     * Key file storage security level for enhanced credential encryption standard.
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_AUTH_STORAGE_LEVEL_ECE = 2,
  }

  /**
   * Enum for huks auth access challenge type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export enum HuksChallengeType {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_CHALLENGE_TYPE_NORMAL = 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_CHALLENGE_TYPE_CUSTOM = 1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_CHALLENGE_TYPE_NONE = 2
  }

  /**
   * Enum for huks challenge position.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export enum HuksChallengePosition {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_CHALLENGE_POS_0 = 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_CHALLENGE_POS_1,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_CHALLENGE_POS_2,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_CHALLENGE_POS_3
  }

  /**
   * Enum for huks secure sign type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Extension
   * @atomicservice
   * @since 20
   */
  export enum HuksSecureSignType {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_SECURE_SIGN_WITH_AUTHINFO = 1
  }

  /**
   * Enum for huks ipc send type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksSendType {
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_SEND_TYPE_ASYNC = 0,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_SEND_TYPE_SYNC = 1
  }

  /**
   * Enum for huks base tag type.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksTagType {
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_TYPE_INVALID = 0 << 28,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_TYPE_INT = 1 << 28,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_TYPE_UINT = 2 << 28,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_TYPE_ULONG = 3 << 28,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_TYPE_BOOL = 4 << 28,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_TYPE_BYTES = 5 << 28
  }

  /**
   * Enum for huks tag.
   *
   * @enum { int }
   * @syscap SystemCapability.Security.Huks.Core
   * @atomicservice
   * @since 20
   */
  export enum HuksTag {
    /* Base algorithm TAG: 1 - 200 */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_ALGORITHM = 2 << 28 | 1,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_PURPOSE = 2 << 28 | 2,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_KEY_SIZE = 2 << 28 | 3,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_DIGEST = 2 << 28 | 4,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_PADDING = 2 << 28 | 5,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_BLOCK_MODE = 2 << 28 | 6,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_TYPE = 2 << 28 | 7,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_ASSOCIATED_DATA = 5 << 28 | 8,

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_NONCE = 5 << 28 | 9,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_IV = 5 << 28 | 10,

    /**
     * Key derivation TAG.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * Key derivation TAG.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_INFO = 5 << 28 | 11,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_SALT = 5 << 28 | 12,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ITERATION = 2 << 28 | 14,

    /**
     * choose from enum HuksKeyGenerateType.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * choose from enum HuksKeyGenerateType.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_GENERATE_TYPE = 2 << 28 | 15,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_AGREE_ALG = 2 << 28 | 19,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_AGREE_PUBLIC_KEY_IS_KEY_ALIAS = 4 << 28 | 20,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_AGREE_PRIVATE_KEY_ALIAS = 5 << 28 | 21,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_AGREE_PUBLIC_KEY = 5 << 28 | 22,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_KEY_ALIAS = 5 << 28 | 23,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_DERIVE_KEY_SIZE = 2 << 28 | 24,

    /**
     * Choose from enum HuksImportKeyType
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * Choose from enum HuksImportKeyType
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_IMPORT_KEY_TYPE = 2 << 28 | 25,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_UNWRAP_ALGORITHM_SUITE = 2 << 28 | 26,

    /**
     * Key storage type, which can be HUKS_STORAGE_ONLY_USED_IN_HUKS or HUKS_STORAGE_KEY_EXPORT_ALLOWED.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 10
     */
    /**
     * Key storage type, which can be HUKS_STORAGE_ONLY_USED_IN_HUKS or HUKS_STORAGE_KEY_EXPORT_ALLOWED.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_DERIVED_AGREED_KEY_STORAGE_FLAG = 2 << 28 | 29,

    /**
     * RSA salt length type. For details, see HuksRsaPssSaltLenType.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 10
     */
    /**
     * RSA salt length type. For details, see HuksRsaPssSaltLenType.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_RSA_PSS_SALT_LEN_TYPE = 2 << 28 | 30,

    /*
     * Key authentication related TAG: 201 - 300
     *
     * Start of validity
     */
    /* Other authentication related TAG: 301 - 500 */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ALL_USERS = 4 << 28 | 301,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_USER_ID = 2 << 28 | 302,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_NO_AUTH_REQUIRED = 4 << 28 | 303,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_USER_AUTH_TYPE = 2 << 28 | 304,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_AUTH_TIMEOUT = 2 << 28 | 305,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_AUTH_TOKEN = 5 << 28 | 306,

    /* Key secure access control and user auth TAG */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_AUTH_ACCESS_TYPE = 2 << 28 | 307,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_SECURE_SIGN_TYPE = 2 << 28 | 308,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_CHALLENGE_TYPE = 2 << 28 | 309,

    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 9
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_CHALLENGE_POS = 2 << 28 | 310,

    /**
     * Supported key secure access control purpose tag, the value from enum HuksKeyPurpose.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 10
     */
    /**
     * Supported key secure access control purpose tag, the value from enum HuksKeyPurpose.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_AUTH_PURPOSE = 2 << 28 | 311,

    /**
     * Security level of access control for key file storage, whose optional values are from enum HuksAuthStorageLevel.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 11
     */
    /**
     * Security level of access control for key file storage, whose optional values are from enum HuksAuthStorageLevel.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_AUTH_STORAGE_LEVEL = 2 << 28 | 316,

    /**
     * Authentication mode of the user authtoken, whose optional values are from enum HuksUserAuthMode.
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_USER_AUTH_MODE = 2 << 28 | 319,

    /* Attestation related TAG: 501 - 600 */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ATTESTATION_CHALLENGE = 5 << 28 | 501,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ATTESTATION_APPLICATION_ID = 5 << 28 | 502,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ATTESTATION_ID_ALIAS = 5 << 28 | 511,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ATTESTATION_ID_SEC_LEVEL_INFO = 5 << 28 | 514,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ATTESTATION_ID_VERSION_INFO = 5 << 28 | 515,

    /*
     * Other reserved TAG: 601 - 1000
     *
     * Extension TAG: 1001 - 9999
     */

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_IS_KEY_ALIAS = 4 << 28 | 1001,
    /**
     * choose from enum HuksKeyStorageType.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * choose from enum HuksKeyStorageType.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_STORAGE_FLAG = 2 << 28 | 1002,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_IS_ALLOWED_WRAP = 4 << 28 | 1003,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_WRAP_TYPE = 2 << 28 | 1004,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_AUTH_ID = 5 << 28 | 1005,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_ROLE = 2 << 28 | 1006,
    /**
     * choose from enum HuksKeyFlag.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * choose from enum HuksKeyFlag.
     *
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_FLAG = 2 << 28 | 1007,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_IS_ASYNCHRONIZED = 2 << 28 | 1008,
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY_DOMAIN = 2 << 28 | 1011,

    /**
     * Key access control based on device password setting status. True means the key can only be generated and used
     * when the password is set.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 11
     */
    /**
     * Key access control based on device password setting status. True means the key can only be generated and used
     * when the password is set.
     *
     * @syscap SystemCapability.Security.Huks.Extension
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_IS_DEVICE_PASSWORD_SET = 4 << 28 | 1012,

    /* Inner-use TAG: 10001 - 10999 */

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_KEY = 5 << 28 | 10006,

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 11
     */
    HUKS_TAG_AE_TAG = 5 << 28 | 10009,

    /*
     * Reserved TAGs: 11000 - 12000
     *
     * Other TAGs: 20001 - N
     * TAGs used for paramSetOut
     */

    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_SYMMETRIC_KEY_DATA = 5 << 28 | 20001,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ASYMMETRIC_PUBLIC_KEY_DATA = 5 << 28 | 20002,
    /**
     * @syscap SystemCapability.Security.Huks.Extension
     * @since 8
     */
    /**
     * @syscap SystemCapability.Security.Huks.Core
     * @atomicservice
     * @since 12
     */
    HUKS_TAG_ASYMMETRIC_PRIVATE_KEY_DATA = 5 << 28 | 20003
  }
}

export default huks;
