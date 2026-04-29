/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkData
 */

import { Callback } from './@ohos.base';
import Context from './application/BaseContext';
import collections from '../arkts/@arkts.collections';
import lang from '../arkts/@arkts.lang';

/**
 * The **sendablePreferences** module provides APIs for processing data in the form of key-value (KV) pairs, including 
 * querying, modifying, and persisting KV pairs.
 * In the KV pairs, the key must be a string, and the value can be a number, a string, a Boolean value, a bigint, or a 
 * serializable object.
 * The persistent files of the shared user preferences are stored in the 
 * [preferencesDir](docroot://application-models/application-context-stage.md#obtaining-application-file-paths) 
 * directory. Before creating a preferences object, ensure that the **preferencesDir** path can be read and written. The
 * [encryption level]{@link @ohos.app.ability.contextConstant:contextConstant.AreaMode} of the persistent file directory
 * determines the access to the files. For details, see 
 * [Application File Directory and Application File Path](docroot://file-management/app-sandbox-directory.md#application-file-directory-and-application-file-path)
 * .
 * Sendable preferences can be passed between concurrent ArkTS instances (including the main thread and TaskPool or 
 * Worker threads) by reference. It allows for higher performance than 
 * [user preferences]{@link @ohos.data.preferences:preferences}. For more information, see 
 * [Using Sendable Objects](docroot://arkts-utils/sendable-guide.md).
 * 
 * > **NOTE**
 * >
 * > The shared user preferences are not thread-safe and may cause file damage and data loss when used in multi-process 
 * > scenarios. Do not use it in multi-process scenarios.
 *
 * @syscap SystemCapability.DistributedDataManager.Preferences.Core
 * @name sendablePreferences
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendablePreferences {
  /**
   * Maximum length of a key, which is 1024 bytes.
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  const MAX_KEY_LENGTH: number;

  /**
   * Maximum length of a value, which is 16 MB.
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  const MAX_VALUE_LENGTH: number;

  /**
   * Represents the configuration options of a **Preferences** instance.
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Options {
    /**
     * Name of the **Preferences** instance.
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    name: string;

    /**
     * Application group ID. <!--RP1-->Currently, this parameter is not supported.<!--RP1End-->
     * 
     * This parameter is optional. A **Preferences** instance will be created in the sandbox path corresponding to the 
     * specified **dataGroupId**. If this parameter is not specified, the **Preferences** instance is created in the 
     * sandbox directory of the application.
     * 
     * This attribute can be used only in the stage model.
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamiconly
     */
    dataGroupId?: string | null;
  }

  /**
   * Obtains a **Preferences** instance. This API uses a promise to return the result.
   *
   * @param { Context } context - Application context.
   * @param { Options } options - Configuration options of the **Preferences** instance.
   * @returns { Promise<Preferences> } Promise used to return the **Preferences** instance obtained.
   *     
   *     This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed
   *     between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)
   *     by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md).
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15500000 - Inner error.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  function getPreferences(context: Context, options: Options): Promise<Preferences>;

  /**
   * Obtains a **Preferences** instance. This API returns the result synchronously.
   *
   * @param { Context } context - Application context.
   * @param { Options } options - Configuration options of the **Preferences** instance.
   * @returns { Preferences } **Preferences** instance obtained.
   *     
   *     This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed 
   *     between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)
   *     by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md).
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15500000 - Inner error.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  function getPreferencesSync(context: Context, options: Options): Preferences;

  /**
   * Deletes a specified **Preferences** instance from the cache. If the **Preferences** instance has a corresponding 
   * persistent file, the persistent file is also deleted. This API uses a promise to return the result.
   * Avoid using a deleted **Preferences** instance to perform data operations, which may cause data inconsistency.
   *
   * @param { Context } context - Application context.
   * @param { Options } options - Configuration options of the **Preferences** instance.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15500000 - Inner error.
   * @throws { BusinessError } 15500010 - Failed to delete the user preferences persistence file.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  function deletePreferences(context: Context, options: Options): Promise<void>;

  /**
   * Removes a **Preferences** instance from the cache. This API uses a promise to return the result.
   * After an application calls [getPreferences]{@link sendablePreferences.getPreferences} for the first time to obtain
   * a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls 
   * [getPreferences]{@link sendablePreferences.getPreferences} again, the **Preferences** instance will be read from 
   * the cache instead of from the persistent file. After this API is called to remove the instance from the cache, 
   * calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance.
   *
   * @param { Context } context - Application context.
   * @param { Options } options - Configuration options of the **Preferences** instance.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15500000 - Inner error.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  function removePreferencesFromCache(context: Context, options: Options): Promise<void>;

  /**
   * Removes a **Preferences** instance from the cache. This API returns the result synchronously.
   * After an application calls [getPreferences]{@link sendablePreferences.getPreferences} for the first time to obtain 
   * a **Preferences** instance, the obtained **Preferences** instance is cached. When the application calls 
   * [getPreferences]{@link sendablePreferences.getPreferences} again, the **Preferences** instance will be read from 
   * the cache instead of from the persistent file. After this API is called to remove the instance from the cache, 
   * calling **getPreferences** again will read data from the persistent file and create a **Preferences** instance.
   *
   * @param { Context } context - Application context.
   * @param { Options } options - Configuration options of the **Preferences** instance.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15500000 - Inner error.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  function removePreferencesFromCacheSync(context: Context, options: Options): void;

  /**
   * Provides APIs for obtaining and modifying **Preferences** instances. **Preferences** inherits from 
   * [ISendable](docroot://arkts-utils/arkts-sendable.md#isendable) and can be passed between concurrent ArkTS
   * instances (including the main thread and the TaskPool or Worker threads) by reference.
   * Before calling any API of **Preferences**, obtain a **Preferences** instance by using 
   * [sendablePreferences.getPreferences]{@link sendablePreferences.getPreferences}.
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Preferences extends lang.ISendable {
    /**
     * Obtains the value of a key from this **Preferences** instance. This API uses a promise to return the result. If 
     * the value is null or is not of the default value type, **defValue** is returned.
     *
     * @param { string } key - Key to be obtained. The value cannot be empty, and the maximum length is 1024 bytes. For
     *     details,
     *     see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants).
     * @param { lang.ISendable } defValue - Default value to be returned.
     * @returns { Promise<lang.ISendable> } Promise used to return the value obtained.
     *     
     *     This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed 
     *     between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)
     *     by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md).
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    get(key: string, defValue: lang.ISendable): Promise<lang.ISendable>;

    /**
     * Obtains the value of a key from this **Preferences** instance. This API returns the result synchronously. If the 
     * value is null or is not of the default value type, **defValue** is returned.
     *
     * @param { string } key - Key to be obtained. The value cannot be empty, and the maximum length is 1024 bytes. For 
     *     details, see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)
     *     .
     * @param { lang.ISendable } defValue - Default value to be returned.
     * @returns { lang.ISendable } Value obtained.
     *     
     *     This instance inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed
     *     between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)
     *     by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md).
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    getSync(key: string, defValue: lang.ISendable): lang.ISendable;

    /**
     * Obtains all KV pairs from this **Preferences** instance. This API uses a promise to return the result.
     *
     * @returns { Promise<lang.ISendable> } Promise used to return the KV pairs obtained.
     *     
     *     This object inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed
     *     between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)
     *     by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md).
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    getAll(): Promise<lang.ISendable>;

    /**
     * Obtains all KV pairs from this **Preferences** instance. This API returns the result synchronously.
     *
     * @returns { lang.ISendable } All KV pairs obtained.
     *     
     *     This object inherits from [ISendable](../../arkts-utils/arkts-sendable.md#isendable) and can be passed 
     *     between concurrent ArkTS instances (including the main thread and the TaskPool or Worker threads)
     *     by reference. For details, see [Using Sendable Objects](../../arkts-utils/sendable-guide.md).
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    getAllSync(): lang.ISendable;

    /**
     * Checks whether this **Preferences** instance contains the KV pair of the given key. This API uses a promise to 
     * return the result.
     *
     * @param { string } key - Key to be checked. The value cannot be empty, and the maximum length is 1024 bytes. For 
     *     details,
     *     see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants).
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means the **Preferences** 
     *     instance contains the KV pair; the value **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    has(key: string): Promise<boolean>;

    /**
     * Checks whether this **Preferences** instance contains the KV pair of the given key. This API returns the result 
     * synchronously.
     *
     * @param { string } key - Key to be checked. The value cannot be empty, and the maximum length is 1024 bytes. For 
     *     details,
     *     see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants).
     * @returns { boolean } The value **true** means the **Preferences** instance contains the KV pair; the value 
     *     **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    hasSync(key: string): boolean;

    /**
     * Writes data to this **Preferences** instance. This API uses a promise to return the result. You can use 
     * [flush]{@link sendablePreferences.Preferences.flush} to persist the **Preferences** instance.
     *
     * @param { string } key - Key to be modified. The value cannot be empty, and the maximum length is 1024 bytes. For
     *     details,
     *     see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants).
     * @param { lang.ISendable } value - Value to write.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    put(key: string, value: lang.ISendable): Promise<void>;

    /**
     * Writes data to this **Preferences** instance. This API returns the result synchronously. You can use 
     * [flush]{@link sendablePreferences.Preferences.flush} to persist the **Preferences** instance.
     *
     * @param { string } key - Key to be modified. The value cannot be empty, and the maximum length is 1024 bytes. For
     *     details,
     *     see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants).
     * @param { lang.ISendable } value - Value to write.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    putSync(key: string, value: lang.ISendable): void;

    /**
     * Deletes a KV pair from this **Preferences** instance. This API uses a promise to return the result. You can use 
     * [flush]{@link sendablePreferences.Preferences.flush} to persist the **Preferences** instance.
     *
     * @param { string } key - Key to be deleted. The value cannot be empty, and the maximum length is 1024 bytes. For 
     *     details,
     *     see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants).
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    delete(key: string): Promise<void>;

    /**
     * Deletes a KV pair from this **Preferences** instance. This API returns the result synchronously. You can use 
     * [flush]{@link sendablePreferences.Preferences.flush} to persist the **Preferences** instance.
     *
     * @param { string } key - Key to be deleted. The value cannot be empty, and the maximum length is 1024 bytes. For 
     *     details,
     *     see [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants).
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    deleteSync(key: string): void;

    /**
     * Clears this **Preferences** instance. This API uses a promise to return the result. You can use 
     * [flush]{@link sendablePreferences.Preferences.flush} to persist the **Preferences** instance.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    clear(): Promise<void>;

    /**
     * Clears this **Preferences** instance. This API returns the result synchronously. You can use 
     * [flush]{@link sendablePreferences.Preferences.flush} to persist the **Preferences** instance.
     *
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    clearSync(): void;

    /**
     * Flushes the data in this **Preferences** instance to the persistent file. This API uses a promise to return the
     * result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    flush(): Promise<void>;

    /**
     * Flushes the data in the cached **Preferences** instance to the persistent file.
     *
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    flushSync(): void;

    /**
     * Subscribes to data changes. The registered callback will be invoked to return the new value if the data change
     * is [flushed]{@link sendablePreferences.Preferences.flush}.
     *
     * @param { 'change' } type - Event type. The value is **'change'**, which indicates data changes.
     * @param { Callback<string> } callback - Callback used to return the key whose value is changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    on(type: 'change', callback: Callback<string>): void;

    /**
     * Subscribes to data changes between processes. When multiple processes hold the same preference file, calling 
     * [flush]{@link sendablePreferences.Preferences.flush} in any process (including the current process) will trigger
     * the callback in this API.
     * This API is provided for applications that have applied for [dataGroupId]{@link sendablePreferences.Options}. 
     * Avoid using this API for the applications that have not applied for **dataGroupId** because calling it in 
     * multiple process may damage the persistent files and cause data loss.
     *
     * @param { 'multiProcessChange' } type - Event type. The value is **'multiProcessChange'**, which indicates inter-
     *     process data changes.
     * @param { Callback<string> } callback - Callback used to return the key whose value is changed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @throws { BusinessError } 15500019 - Failed to obtain the subscription service.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    on(type: 'multiProcessChange', callback: Callback<string>): void;

    /**
     * Subscribes to changes of specific data. The registered callback will be invoked only after the values of the 
     * specified keys are changed and [flushed]{@link sendablePreferences.Preferences.flush}.
     *
     * @param { 'dataChange' } type - Event type. The value is **'dataChange'**, which indicates data changes.
     * @param { Array<string> } keys - Keys to be observed.
     * @param { Callback<lang.ISendable> } callback - Callback used to return the KV pairs changed. The keys are the 
     *     keys observed, and the values are the new values. The values support the following types: number, string, 
     *     boolean, bigint, and serializable object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    on(type: 'dataChange', keys: Array<string>, callback: Callback<lang.ISendable>): void;

    /**
     * Unsubscribes from data changes.
     *
     * @param { 'change' } type - Event type. The value is **'change'**, which indicates data changes.
     * @param { Callback<string> } callback - Callback to unregister. If this parameter is not specified, this API 
     *     unregisters all callbacks for data changes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    off(type: 'change', callback?: Callback<string>): void;

    /**
     * Unsubscribes from inter-process data changes.
     * This API is provided for applications that have applied for [dataGroupId]{@link sendablePreferences.Options}. 
     * Avoid using this API for the applications that have not applied for **dataGroupId** because calling it in 
     * multiple process may damage the persistent files and cause data loss.
     *
     * @param { 'multiProcessChange' } type - Event type. The value is **'multiProcessChange'**, which indicates inter-
     *     process data changes.
     * @param { Callback<string> } callback - Callback to unregister. If this parameter is not specified, this API 
     *     unregisters all callbacks for data changes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    off(type: 'multiProcessChange', callback?: Callback<string>): void;

    /**
     * Unsubscribes from changes of specific data.
     *
     * @param { 'dataChange' } type - Event type. The value is **'dataChange'**, which indicates data changes.
     * @param { Array<string> } keys - Keys to be unsubscribed from. If this parameter is not specified, this API 
     *     unsubscribes from the changes of all keys.
     * @param { Callback<lang.ISendable> } callback - Callback to unregister. If this parameter is not specified, this 
     *     API unregisters all callbacks for the changes of the specified data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    off(type: 'dataChange', keys: Array<string>, callback?: Callback<lang.ISendable>): void;
  }
}

export default sendablePreferences;
