/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @file 轻量级存储
 * @kit ArkData
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * 轻量级存储为应用提供key-value键值型的文件数据处理能力，支持应用对数据进行轻量级存储及查询。
 * 数据存储形式为键值对，键的类型为字符串型，值的存储数据类型包括数字型、字符串型、布尔型。
 * 
 * > **说明**
 * 
 * > -  本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > -  从API version 9开始，该接口不再维护，推荐使用新接口[@ohos.data.preferences]{@link @ohos.data.preferences:preferences}.
 *
 * @syscap SystemCapability.DistributedDataManager.Preferences.Core
 * @since 6 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.preferences.preferences
 * @name storage
 */

declare namespace storage {
  /**
   * 读取指定文件，将数据加载到Storage实例，用于数据操作。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @returns { Storage } 获取到要操作的Storage实例，用于进行数据存储操作。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.getPreferences
   */
  function getStorageSync(path: string): Storage;

  /**
   * 读取指定文件，将数据加载到Storage实例，用于数据操作，使用callback方式返回结果，此方法为异步方法。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @param { AsyncCallback<Storage> } callback - 回调函数。
   * @returns { Storage } 获取到要操作的Storage实例。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.getPreferences
   */
  function getStorage(path: string, callback: AsyncCallback<Storage>): void;

  /**
   * 读取指定文件，将数据加载到Storage实例，用于数据操作，使用Promise方式返回结果，此方法为异步方法。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @returns { Promise<Storage> } Promise实例，用于异步获取结果。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.getPreferences
   */
  function getStorage(path: string): Promise<Storage>;

  /**
   * 从内存中移除指定文件对应的Storage单实例，并删除指定文件及其备份文件、损坏文件。删除指定文件时，应用不允许再使用该实例进行数据操作，否则会出现数据一致性问题。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.deletePreferences
   */
  function deleteStorageSync(path: string): void;

  /**
   * 从内存中移除指定文件对应的Storage单实例，并删除指定文件及其备份文件、损坏文件。删除指定文件时，应用不允许再使用该实例进行数据操作，否则会出现数据一致性问题，使用callback方式返回结果，此方法为异步方法。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.deletePreferences
   */
  function deleteStorage(path: string, callback: AsyncCallback<void>): void;

  /**
   * 从内存中移除指定文件对应的Storage单实例，并删除指定文件及其备份文件、损坏文件。删除指定文件时，应用不允许再使用该实例进行数据操作，否则会出现数据一致性问题，使用Promise方式返回结果，此方法为异步方法。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @returns { Promise<void> } Promise实例，用于异步获取结果。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.deletePreferences
   */
  function deleteStorage(path: string): Promise<void>;

  /**
   * 从内存中移除指定文件对应的Storage单实例。移除Storage单实例时，应用不允许再使用该实例进行数据操作，否则会出现数据一致性问题。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.removePreferencesFromCache
   */
  function removeStorageFromCacheSync(path: string): void;

  /**
   * 从内存中移除指定文件对应的Storage单实例。移除Storage单实例时，应用不允许再使用该实例进行数据操作，否则会出现数据一致性问题。使用callback方式返回结果，此方法为异步方法。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @param { AsyncCallback<void> } callback - 回调函数。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.removePreferencesFromCache
   */
  function removeStorageFromCache(path: string, callback: AsyncCallback<void>): void;

  /**
   * 从内存中移除指定文件对应的Storage单实例。移除Storage单实例时，应用不允许再使用该实例进行数据操作，否则会出现数据一致性问题。使用Promise方式返回结果，此方法为异步方法。
   *
   * @param { string } path - 应用程序内部数据存储路径。
   * @returns { Promise<void> } Promise实例，用于异步获取结果。
   * @throws BusinessError if invoked failed
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences.removePreferencesFromCache
   */
  function removeStorageFromCache(path: string): Promise<void>;

  /**
   * 提供获取和修改存储数据的接口。
   * 
   * 下列接口都需先使用[data_storage.getStorage]{@link storage.getStorage}或
   * [data_storage.getStorageSync]{@link storage.getStorageSync}获取到Storage实例，再通过此实例调用对应接口。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.preferences.preferences
   */
  interface Storage {
    /**
     * 获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue。
     *
     * @param { string } key - 要获取的存储key名称，不能为空。
     * @param { ValueType } defValue - 给定key的存储不存在，则要返回的默认值。支持number、string、boolean。
     * @returns { ValueType } 键对应的值，如果值为null或者非默认值类型，返回默认数据。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.get
     */
    getSync(key: string, defValue: ValueType): ValueType;

    /**
     * 获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue。使用callback方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要获取的存储key名称，不能为空。
     * @param { ValueType } defValue - 默认返回值。支持number、string、boolean。
     * @param { AsyncCallback<ValueType> } callback - 回调函数。
     * @returns { ValueType } 键对应的值，如果值为null或者非默认值类型，返回默认数据。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.get
     */
    get(key: string, defValue: ValueType, callback: AsyncCallback<ValueType>): void;

    /**
     * 获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue。使用Promise方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要获取的存储key名称，不能为空。
     * @param { ValueType } defValue - 默认返回值。支持number、string、boolean。
     * @returns { Promise<ValueType> } Promise实例，用于异步获取结果。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.get
     */
    get(key: string, defValue: ValueType): Promise<ValueType>;

    /**
     * 检查存储对象是否包含名为给定key的存储。
     *
     * @param { string } key - 要获取的存储key名称，不能为空。
     * @returns { boolean } true 表示存在，false表示不存在。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.has
     */
    hasSync(key: string): boolean;

    /**
     * 检查存储对象是否包含名为给定key的存储。使用callback方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要获取的存储key名称，不能为空。
     * @param { AsyncCallback<boolean> } callback - 回调函数。
     * @returns { boolean } true表示存在，false表示不存在。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.has
     */
    has(key: string, callback: AsyncCallback<boolean>): boolean;

    /**
     * 检查存储对象是否包含名为给定key的存储。使用Promise方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要获取的存储key名称，不能为空。
     * @returns { Promise<boolean> } Promise实例，用于异步处理。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.has
     */
    has(key: string): Promise<boolean>;

    /**
     * 首先获取指定文件对应的Storage实例，然后借助Storage API将数据写入Storage实例，通过flush或者flushSync将Storage实例持久化。
     *
     * @param { string } key - 要修改的存储的key，不能为空。
     * @param { ValueType } value - 存储的新值。支持number、string、boolean。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.put
     */
    putSync(key: string, value: ValueType): void;

    /**
     * 首先获取指定文件对应的Storage实例，然后借助Storage API将数据写入Storage实例，通过flush或者flushSync将Storage实例持久化。使用callback方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要修改的存储的key，不能为空。
     * @param { ValueType } value - 存储的新值。支持number、string、boolean。
     * @param { AsyncCallback<void> } callback - 回调函数。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.put
     */
    put(key: string, value: ValueType, callback: AsyncCallback<void>): void;

    /**
     * 首先获取指定文件对应的Storage实例，然后借助Storage API将数据写入Storage实例，通过flush或者flushSync将Storage实例持久化。使用Promise方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要修改的存储的key，不能为空。
     * @param { ValueType } value - 存储的新值。支持number、string、boolean。
     * @returns { Promise<void> } Promise实例，用于异步处理。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.put
     */
    put(key: string, value: ValueType): Promise<void>;

    /**
     * 从存储对象中删除名为给定key的存储。
     *
     * @param { string } key - 要获取的存储key名称。它不能为空。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.delete
     */
    deleteSync(key: string): void;

    /**
     * 从存储对象中删除名为给定key的存储。使用callback方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要获取的存储key名称，不能为空。
     * @param { AsyncCallback<void> } callback - 回调函数。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.delete
     */
    delete(key: string, callback: AsyncCallback<void>): void;

    /**
     * 从存储对象删除名为给定key的存储。使用Promise方式返回结果，此方法为异步方法。
     *
     * @param { string } key - 要获取的存储key名称。
     * @returns { Promise<void> } Promise实例，用于异步处理。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.delete
     */
    delete(key: string): Promise<void>;

    /**
     * 清除此存储对象中的所有存储。
     *
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.clear
     */
    clearSync(): void;

    /**
     * 清除此存储对象中的所有存储。使用callback方式返回结果，此方法为异步方法。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.clear
     */
    clear(callback: AsyncCallback<void>): void;

    /**
     * 清除此存储对象中的所有存储。使用Promise方式返回结果，此方法为异步方法。
     *
     * @returns { Promise<void> } Promise实例，用于异步处理。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.clear
     */
    clear(): Promise<void>;

    /**
     * 将当前storage对象中的修改保存到当前的storage，并同步存储到文件中。
     *
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.flush
     */
    flushSync(): void;

    /**
     * 将当前storage对象中的修改保存到当前的storage，并异步存储到文件中。使用callback方式返回结果，此方法为异步方法。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.flush
     */
    flush(callback: AsyncCallback<void>): void;

    /**
     * 将当前storage对象中的修改保存到当前的storage，并异步存储到文件中。使用Promise方式返回结果，此方法为异步方法。
     *
     * @returns { Promise<void> } Promise实例，用于异步处理。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.flush
     */
    flush(): Promise<void>;

    /**
     * 订阅数据变更者类需要实现StorageObserver接口，订阅的key的值发生变更后，在执行flush/flushSync方法后，callback方法会被回调。
     *
     * @param { string } type - 事件类型，固定值'change'，表示数据变更。
     * @param { Callback<StorageObserver> } callback - 回调对象实例。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.on
     */
    on(type: 'change', callback: Callback<StorageObserver>): void;

    /**
     * 当不再进行订阅数据变更时，使用此接口取消订阅。
     *
     * @param { string } type - 事件类型，固定值'change'，表示数据变更。
     * @param { Callback<StorageObserver> } callback - 需要取消的回调对象实例。
	 * @throws BusinessError if invoked failed
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.preferences.preferences.off
     */
    off(type: 'change', callback: Callback<StorageObserver>): void;
  }

  /**
   * 用于表示允许的数据字段类型。
   *
   * @unionmember { number } 表示值类型为数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @since 6 dynamiconly
   * @deprecated since 9
   */
  type ValueType = number | string | boolean;

  /**
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @since 6 dynamiconly
   * @deprecated since 9
   */
  interface StorageObserver {
    /**
     * 变更的数据内容。
     *
     * @since 6 dynamiconly
     * @deprecated since 9
     */
    key: string;
  }

  /**
   * key的最大长度限制为80字节。
   *
   * @since 6 dynamiconly
   * @deprecated since 9
   */
  const MAX_KEY_LENGTH: 80;

  /**
   * value的最大长度限制为16MB。
   *
   * @since 6 dynamiconly
   * @deprecated since 9
   */
  const MAX_VALUE_LENGTH: 8192;
}

/**
 * 轻量级存储为应用提供key-value键值型的文件数据处理能力。
 * @since 6 dynamiconly
 * @deprecated since 9
 * @syscap SystemCapability.DistributedDataManager.Preferences.Core
 */
export default storage;