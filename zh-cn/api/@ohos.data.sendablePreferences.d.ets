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
 * @file 共享用户首选项
 * @kit ArkData
 */

import { Callback } from './@ohos.base';
import Context from './application/BaseContext';
import collections from '../arkts/@arkts.collections';
import lang from '../arkts/@arkts.lang';

/**
 * 共享用户首选项为应用提供Key-Value键值型的数据处理能力，支持应用持久化轻量级数据，并对其修改和查询。
 * 
 * 数据存储形式为键值对，键的类型为字符串型，值的存储数据类型包括number、string、boolean、bigint以及可序列化的object。
 * 
 * 共享用户首选项的持久化文件存储在[preferencesDir](docroot://application-models/application-context-stage.md#获取应用文件路径)路径下，创建preferences
 * 对象前，需要保证preferencesDir路径可读写。持久化文件存储路径中的[加密等级]{@link @ohos.app.ability.contextConstant:contextConstant.AreaMode}会影响文件的
 * 可读写状态，路径访问限制详见[应用文件目录与应用文件路径](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。
 * 
 * 共享用户首选项可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，性能优于普通的[用户首选项]{@link @ohos.data.preferences:preferences}
 * ，可参考[Sendable使用场景](docroot://arkts-utils/sendable-guide.md)。
 * 
 * > **说明：**
 * >
 * > 共享用户首选项无法保证进程并发安全，会有文件损坏和数据丢失的风险，不支持在多进程场景下使用。
 *
 * @syscap SystemCapability.DistributedDataManager.Preferences.Core
 * @atomicservice
 * @since 12 dynamiconly
 * @name sendablePreferences
 */
declare namespace sendablePreferences {
  /**
   * Key的最大长度限制为1024个字节。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  const MAX_KEY_LENGTH: number;

  /**
   * Value的最大长度限制为16MB。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  const MAX_VALUE_LENGTH: number;

  /**
   * Preferences实例配置选项。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Options {
    /**
     * Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    name: string;

    /**
     * 应用组ID，<!--RP1-->暂不支持指定dataGroupId在对应共享沙箱路径下创建Preferences实例。<!--RP1End-->
     * 
     * 为可选参数。指定在此dataGroupId对应的沙箱路径下创建Preferences实例。当此参数不填时，默认在本应用沙箱目录下创建Preferences实例。
     * 
     * **模型约束：** 此属性仅在Stage模型下可用。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12 dynamiconly
     */
    dataGroupId?: string | null;
  }

  /**
   * 获取Preferences实例，使用Promise异步回调。
   * 
   * 应用首次调用该接口获取某个Preferences实例后，该实例会被缓存起来，后续再次调用时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   * @param { Options } options - 与Preferences实例相关的配置选项。name字段为必填字段，名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。dataGroupId为可
   *     选字段。
   * @returns { Promise<Preferences> } Promise对象，返回Preferences实例。
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
   * 获取Preferences实例，此为同步接口。
   * 
   * 应用首次调用该接口获取某个Preferences实例后，该实例会被缓存起来，后续再次调用时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @returns { Preferences } 返回Preferences实例。
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
   * 从缓存中删除指定的Preferences实例，若Preferences实例有对应的持久化文件，则同时删除其持久化文件。使用Promise异步回调。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题。
   *
   * @param { Context } context - 应用上下文。
   * @param { Options } options - 与Preferences实例相关的配置选项。name字段为必填字段，名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。dataGroupId为可
   *     选字段。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 从缓存中移除指定的Preferences实例，使用Promise异步回调。
   * 
   * 应用首次调用[getPreferences]{@link sendablePreferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link sendablePreferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 从缓存中移除指定的Preferences实例，此为同步接口。
   * 
   * 应用首次调用[getPreferences]{@link sendablePreferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link sendablePreferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   * @param { Options } options - 与Preferences实例相关的配置选项。
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
   * Preferences继承自[ISendable](docroot://arkts-utils/arkts-sendable.md#isendable)，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线
   * 程）传递，传递的行为是引用传递，提供获取和修改存储数据的接口。
   * 
   * 下列接口都需先使用[sendablePreferences.getPreferences]{@link sendablePreferences.getPreferences}获取到Preferences实例，再通过此实例调用对应接
   * 口。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface Preferences extends lang.ISendable {
    /**
     * 从缓存的Preferences实例中获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue，使用Promise异步回调。
     *
     * @param { string } key - 要获取的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { lang.ISendable } defValue - 默认返回值。
     * @returns { Promise<lang.ISendable> } Promise对象，返回键对应的值。
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
     * 从缓存的Preferences实例中获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue，此为同步接口。
     *
     * @param { string } key - 要获取的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { lang.ISendable } defValue - 默认返回值。
     * @returns { lang.ISendable } 返回键对应的值。
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
     * 获取缓存的Preferences实例中的所有键值数据。
     *
     * @returns { Promise<lang.ISendable> } Promise对象，返回所有包含的键值数据。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    getAll(): Promise<lang.ISendable>;

    /**
     * 获取缓存的Preferences实例中的所有键值数据，此为同步接口。
     *
     * @returns { lang.ISendable } 返回所有包含的键值数据。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    getAllSync(): lang.ISendable;

    /**
     * 检查缓存的Preferences实例中是否包含名为给定Key的存储键值对，使用Promise异步回调。
     *
     * @param { string } key - 要检查的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @returns { Promise<boolean> } Promise对象。返回Preferences实例是否包含给定Key的存储键值对，true表示存在，false表示不存在。
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
     * 检查缓存的Preferences实例中是否包含名为给定Key的存储键值对，此为同步接口。
     *
     * @param { string } key - 要检查的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @returns { boolean } 返回Preferences实例是否包含给定Key的存储键值对，true表示存在，false表示不存在。
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
     * 将数据写入缓存的Preferences实例中，可通过[flush]{@link sendablePreferences.Preferences.flush}将Preferences实例持久化，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 当value中包含非UTF-8格式的字符串时，请使用Uint8Array类型存储，否则会造成持久化文件出现格式错误造成文件损坏。
     * >
     * > 当对应的键已经存在时，put()方法会覆盖其值。可以使用hasSync()方法检查是否存在对应键值对。
     *
     * @param { string } key - 要修改的存储的Key，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { lang.ISendable } value - 存储的新值。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 将数据写入缓存的Preferences实例中，可通过[flush]{@link sendablePreferences.Preferences.flush}将Preferences实例持久化，此为同步接口。
     * 
     * > **说明：**
     * >
     * > 当value中包含非UTF-8格式的字符串时，请使用Uint8Array类型存储，否则会造成持久化文件出现格式错误造成文件损坏。
     * >
     * > 当对应的键已经存在时，putSync()方法会覆盖其值。可以使用hasSync()方法检查是否存在对应键值对。
     *
     * @param { string } key - 要修改的存储的Key，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { lang.ISendable } value - 存储的新值。
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
     * 从缓存的Preferences实例中删除名为给定Key的存储键值对，可通过[flush]{@link sendablePreferences.Preferences.flush}将Preferences实例持久化，使用
     * Promise异步回调。
     *
     * @param { string } key - 要删除的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 从缓存的Preferences实例中删除名为给定Key的存储键值对，可通过[flush]{@link sendablePreferences.Preferences.flush}将Preferences实例持久化，此为同步接
     * 口。
     *
     * @param { string } key - 要删除的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
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
     * 清除缓存的Preferences实例中的所有数据，可通过[flush]{@link sendablePreferences.Preferences.flush}将Preferences实例持久化，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    clear(): Promise<void>;

    /**
     * 清除缓存的Preferences实例中的所有数据，可通过[flush]{@link sendablePreferences.Preferences.flush}将Preferences实例持久化，此为同步接口。
     *
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    clearSync(): void;

    /**
     * 将缓存的Preferences实例中的数据异步存储到共享用户首选项的持久化文件中，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 当数据未修改或修改后的数据与缓存数据一致时，不会刷新持久化文件。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    flush(): Promise<void>;

    /**
     * 将缓存的Preferences实例中的数据存储到共享用户首选项的持久化文件中。
     * 
     * > **说明：**
     * >
     * > 当数据未修改或修改后的数据与缓存数据一致时，不会刷新持久化文件。
     *
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    flushSync(): void;

    /**
     * 订阅数据变更，订阅的Key的值发生变更后，在执行flush方法后，触发callback回调。
     * 
     * > **不同订阅方法的对比：**
     * >
     * > - on('change')：订阅所有Key变化，适合全局数据变化感知需求。
     * >
     * > - on('dataChange')：精确订阅指定Key的变化，适合关注特定数据场景，可回调返回具体值。
     * >
     * > **选取建议：** 需要监听所有数据变更时使用on('change')；需要精确知道特定Key变化并获取新值时使用on('dataChange')。
     * > > **说明：**
     * >
     * > 当调用[removePreferencesFromCache]{@link sendablePreferences.removePreferencesFromCache}或者
     * > [deletePreferences]{@link sendablePreferences.deletePreferences}后，订阅的数据变更会主动取消订阅，在重新
     * > [getPreferences]{@link sendablePreferences.getPreferences}后需要重新订阅数据变更。
     *
     * @param { 'change' } type - 事件类型，固定值'change'，表示数据变更。
     * @param { Callback<string> } callback - 回调函数。返回发生变更的Key。
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
     * 订阅进程间数据变更，多个进程持有同一个首选项文件时，在任意一个进程（包括本进程）执行[flush]{@link sendablePreferences.Preferences.flush}方法，持久化文件发生变更后，触发
     * callback回调。
     * 
     * 本接口提供给申请了[dataGroupId]{@link sendablePreferences.Options}的应用进行使用，未申请的应用不推荐使用，多进程操作可能会损坏持久化文件，导致数据丢失。
     * 
     * > **说明：**
     * >
     * > 同一持久化文件在当前进程订阅进程间数据变更的最大数量为50次，超过最大限制后会订阅失败。建议在触发callback回调后及时取消订阅。
     * >
     * > 当调用[removePreferencesFromCache]{@link sendablePreferences.removePreferencesFromCache}或者
     * > [deletePreferences]{@link sendablePreferences.deletePreferences}后，订阅的数据变更会主动取消订阅，在重新
     * > [getPreferences]{@link sendablePreferences.getPreferences}后需要重新订阅数据变更。
     *
     * @param { 'multiProcessChange' } type - 事件类型，固定值'multiProcessChange'，表示多进程间的数据变更。
     * @param { Callback<string> } callback - 回调函数。返回发生变更的Key。
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
     * 精确订阅数据变更，只有被订阅的Key值发生变更后，在执行[flush]{@link sendablePreferences.Preferences.flush}方法后，触发callback回调。
     * 
     * > **说明：**
     * >
     * > 当调用[removePreferencesFromCache]{@link sendablePreferences.removePreferencesFromCache}或者
     * > [deletePreferences]{@link sendablePreferences.deletePreferences}后，订阅的数据变更会主动取消订阅，在重新
     * > [getPreferences]{@link sendablePreferences.getPreferences}后需要重新订阅数据变更。
     *
     * @param { 'dataChange' } type - 事件类型，固定值'dataChange'，表示精确的数据变更。
     * @param { Array<string> } keys - 需要订阅的Key集合。
     * @param { Callback<lang.ISendable> } callback - 回调函数。回调支持返回多个键值对，其中键为发生变更的订阅Key，值为变更后的数据：支持number、string、boolean、
     *     bigint以及可序列化的object。
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
     * 取消订阅数据变更。
     *
     * @param { 'change' } type - 事件类型，固定值'change'，表示数据变更。
     * @param { Callback<string> } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。
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
     * 取消订阅进程间数据变更。
     * 
     * 本接口提供给申请了[dataGroupId]{@link sendablePreferences.Options}的应用进行使用，未申请的应用不推荐使用，多进程操作可能会损坏持久化文件，导致数据丢失。
     *
     * @param { 'multiProcessChange' } type - 事件类型，固定值'multiProcessChange'，表示多进程间的数据变更。
     * @param { Callback<string> } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。
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
     * 取消精确订阅数据变更。
     *
     * @param { 'dataChange' } type - 事件类型，固定值'dataChange'，表示精确的数据变更。
     * @param { Array<string> } keys - 需要取消订阅的Key集合，当Keys为空数组时，表示取消订阅全部Key；当Keys为非空数组时，表示只取消订阅Key集合中的Key。
     * @param { Callback<lang.ISendable> } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。
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