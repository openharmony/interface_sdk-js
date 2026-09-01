/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @file 用户首选项
 * @kit ArkData
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Context from './application/BaseContext';

/**
 * 用户首选项为应用提供Key-Value键值型的数据处理能力，支持应用持久化轻量级数据，并对其修改和查询。
 * 
 * 数据存储采用键值对形式，键为字符串类型，值可为数字、字符串、布尔类型、数组、Uint8Array、object或bigint。
 * 
 * 用户首选项的持久化文件存储在[preferencesDir](docroot://application-models/application-context-stage.md#获取应用文件路径)路径下，创建preferences对象
 * 前，需要保证preferencesDir路径可读写。持久化文件存储路径中的[加密等级]{@link @ohos.app.ability.contextConstant:contextConstant.AreaMode}会影响文件的可读
 * 写状态，路径访问限制详见[应用文件目录与应用文件路径](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。
 * 
 * > **说明：**
 * >
 * > 首选项无法保证进程并发安全，会有文件损坏和数据丢失的风险，不支持在多进程场景下使用。
 *
 * @syscap SystemCapability.DistributedDataManager.Preferences.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 * @name preferences
 */
declare namespace preferences {
  /**
   * 表示支持的值类型。
   *
   * @unionmember { number } 表示值类型为数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @unionmember { Array<number> } 表示值类型为数字类型的数组。
   * @unionmember { Array<string> } 表示值类型为字符串类型的数组。
   * @unionmember { Array<boolean> } 表示值类型为布尔类型的数组。
   * @unionmember { Uint8Array } 表示值类型为8位无符号整型的数组。 [since 11]
   * @unionmember { object } 表示值类型为对象。 [since 12]
   * @unionmember { bigint } 表示值类型为任意精度格式的整数。 [since 12]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  type ValueType = number | string | boolean | Array<number> | Array<string> | Array<boolean> | Uint8Array | object | bigint;

  /**
   * RecordData is used for input parameter obj of the equal function
   *
   * @FaAndStageModel
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core [since 23]
   * @unionmember { undefined } 表示类型为未定义。
   * @unionmember { null } 表示类型为空。
   * @unionmember { Object } 表示类型为对象。
   * @unionmember { Record<string, RecordData> } 表示类型为键值对类型。键的类型为string，值的类型为RecordData。
   * @unionmember { Array<RecordData> } 表示类型为RecordData类型的数组。
   * @since 23 static
   */
  type RecordData = undefined | null | Object | Record<string, RecordData> | Array<RecordData>;

  /**
   * Indicates possible value types
   *
   * @FaAndStageModel
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core [since 23]
   * @unionmember { long } 表示值类型为long类型数字。
   * @unionmember { double } 表示值类型为double类型数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @unionmember { Array<long> } 表示值类型为数字类型的数组。
   * @unionmember { Array<double> } 表示值类型为数字类型的数组。
   * @unionmember { Array<string> } 表示值类型为字符串类型的数组。
   * @unionmember { Array<boolean> } 表示值类型为布尔类型的数组。
   * @unionmember { Uint8Array } 表示值类型为8位无符号整型的数组。
   * @unionmember { RecordData } 表示值类型为[RecordData](#recorddata23)。
   * @unionmember { bigint } 表示值类型为任意精度格式的整数。
   * @since 23 static
   */
  type ValueType = long | double | string | boolean | Array<long> | Array<double> | Array<string> | Array<boolean>
    | Uint8Array | RecordData | bigint;

  /**
   * Key的最大长度限制为1024个字节。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  const MAX_KEY_LENGTH: int;

  /**
   * Value的最大长度限制为16MB。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  const MAX_VALUE_LENGTH: int;

  /**
   * Preferences的存储模式枚举。
   * 
   * > **说明：**
   * >
   * > - 在选择存储模式前，建议调用[isStorageTypeSupported]{@link preferences.isStorageTypeSupported}检查当前平台是否支持对应存储模式。
   * >
   * > - 当选择某一模式通过[preferences.getPreferences]{@link preferences.getPreferences}接口获取实例后，不允许中途切换模式。
   * >
   * > - 首选项不支持不同模式间数据的迁移，若需将数据从一种模式切换至另一种模式，需通过读写首选项的形式进行数据迁移。
   * >
   * > - 若需要变更首选项的存储路径，不能通过移动或覆盖文件的方式进行，需通过读写首选项的形式进行数据迁移。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  enum StorageType {
    /**
     * 表示[XML存储模式](docroot://database/data-persistence-by-preferences.md#xml存储)，这是Preferences的默认存储模式。
     * 
     * **特点：** 数据以XML格式进行存储。对数据的操作发生在内存中，需要调用[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}
     * 接口进行落盘。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    XML = 0,

    /**
     * 表示[GSKV存储模式](docroot://database/data-persistence-by-preferences.md#gskv存储)。
     * 
     * **特点：** 数据以GSKV数据库模式进行存储。对数据的操作实时落盘，无需调用
     * [flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}接口对数据进行落盘。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    GSKV
  }

  /**
   * Preferences实例配置选项。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。 
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 应用组ID，<!--RP1-->暂不支持指定dataGroupId在对应共享沙箱路径下创建Preferences实例。<!--RP1End-->
     * 
     * 为可选参数。指定在此dataGroupId对应的沙箱路径下创建Preferences实例。当此参数不填时，默认在本应用沙箱目录下创建Preferences实例。
     * 
     * **模型约束：** 此属性仅在Stage模型下可用。
     * 
     * **原子化服务API：** 从API version 11开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @StageModelOnly
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    dataGroupId?: string | null | undefined;

    /**
     * 存储模式，为可选参数。表示当前Preferences实例需要使用的存储模式。当此参数不填时，默认使用XML存储模式。当选择某种存储模式创建Preferences后，不支持中途切换存储模式。 
     * 
     * **原子化服务API：** 从API version 18开始，该参数支持在原子化服务中使用。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    storageType?: StorageType | null | undefined;
  }

  /**
   * 获取Preferences实例，通过name进行参数设置，使用callback异步回调。
   * 
   * 应用首次调用该接口获取某个Preferences实例后，该实例会被缓存起来，后续再次调用时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } name - Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
   * @param { AsyncCallback<Preferences> } callback - 回调函数。当获取Preferences实例成功，err为undefined，返回Preferences实例；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getPreferences(context: Context, name: string, callback: AsyncCallback<Preferences>): void;

  /**
   * 获取Preferences实例，通过Options进行参数设置，使用callback异步回调。
   * 
   * 应用首次调用该接口获取某个Preferences实例后，该实例会被缓存起来，后续再次调用时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。name字段为必填字段，名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。dataGroupId和
   *     storageType为可选字段。
   * @param { AsyncCallback<Preferences> } callback - 回调函数。当获取Preferences实例成功，err为undefined，返回Preferences实例；否则err为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getPreferences(context: Context, options: Options, callback: AsyncCallback<Preferences>): void;

  /**
   * 获取Preferences实例，通过name进行参数设置，使用Promise异步回调。
   * 
   * 应用首次调用该接口获取某个Preferences实例后，该实例会被缓存起来，后续再次调用时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } name - Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
   * @returns { Promise<Preferences> } Promise对象，返回Preferences实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getPreferences(context: Context, name: string): Promise<Preferences>;

  /**
   * 获取Preferences实例，通过Options进行参数设置，使用Promise异步回调。
   * 
   * 应用首次调用该接口获取某个Preferences实例后，该实例会被缓存起来，后续再次调用时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @returns { Promise<Preferences> } Promise对象，返回Preferences实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getPreferences(context: Context, options: Options): Promise<Preferences>;

  /**
   * 获取Preferences实例，此为同步接口。
   * 
   * 应用首次调用该接口获取某个Preferences实例后，该实例会被缓存起来，后续再次调用时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @returns { Preferences } 返回Preferences实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function getPreferencesSync(context: Context, options: Options): Preferences;

  /**
   * 判断当前平台是否支持传入的存储模式，此为同步接口。如果当前平台支持传入的存储模式时，该接口返回true；反之，返回false。
   *
   * @param { StorageType } type - 需要判断是否支持的存储模式。
   * @returns { boolean } true表示当前平台支持当前校验的存储模式，false表示当前平台不支持当前校验的存储模式。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: Incorrect parameter types
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 23 static
   */
  function isStorageTypeSupported(type: StorageType): boolean;
  /**
   * 从缓存中删除指定的Preferences实例，若Preferences实例有对应的持久化文件，则同时删除其持久化文件。通过name进行参数设置，使用callback异步回调。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 不支持该接口与其他preference接口并发调用。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } name - Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
   * @param { AsyncCallback<void> } callback - 回调函数。当移除成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 15500010 - Failed to delete the user preferences persistence file.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function deletePreferences(context: Context, name: string, callback: AsyncCallback<void>): void;

  /**
   * 从缓存中删除指定的Preferences实例，若Preferences实例有对应的持久化文件，则同时删除其持久化文件。通过Options进行参数设置，使用callback异步回调。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 不支持该接口与其他preference接口并发调用。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @param { AsyncCallback<void> } callback - 回调函数。当移除成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15500010 - Failed to delete the user preferences persistence file.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deletePreferences(context: Context, options: Options, callback: AsyncCallback<void>): void;

  /**
   * 从缓存中删除指定的Preferences实例，若Preferences实例有对应的持久化文件，则同时删除其持久化文件。通过name进行参数设置，使用Promise异步回调。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 不支持该接口与其他preference接口并发调用。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } name - Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 15500010 - Failed to delete the user preferences persistence file.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function deletePreferences(context: Context, name: string): Promise<void>;

  /**
   * 从缓存中删除指定的Preferences实例，若Preferences实例有对应的持久化文件，则同时删除其持久化文件。通过Options进行参数设置，使用Promise异步回调。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 不支持该接口与其他preference接口并发调用。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15500010 - Failed to delete the user preferences persistence file.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function deletePreferences(context: Context, options: Options): Promise<void>;

  /**
   * 从缓存中移除指定的Preferences实例，通过name进行参数设置，使用callback异步回调。
   * 
   * 应用首次调用[getPreferences]{@link preferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link preferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 若使用[GSKV存储模式](docroot://database/data-persistence-by-preferences.md#gskv存储)，推荐在进程退出时手动调用一次该接口。此操作会将数据缓存页写入磁盘，可一定程度上
   * 减少下一次调用getPreferences接口时的耗时。否则，下一次调用getPreferences接口时底层需要进行数据恢复，数据恢复的耗时取决于未写入磁盘的数据缓存页数量。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } name - Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
   * @param { AsyncCallback<void> } callback - 回调函数。当移除成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function removePreferencesFromCache(context: Context, name: string, callback: AsyncCallback<void>): void;

  /**
   * 从缓存中移除指定的Preferences实例，通过Options进行参数设置，使用callback异步回调。
   * 
   * 应用首次调用[getPreferences]{@link preferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link preferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 若使用[GSKV存储模式](docroot://database/data-persistence-by-preferences.md#gskv存储)，推荐在进程退出时手动调用一次该接口。此操作会将数据缓存页写入磁盘，可一定程度上
   * 减少下一次调用getPreferences接口时的耗时。否则，下一次调用getPreferences接口时底层需要进行数据恢复，数据恢复的耗时取决于未写入磁盘的数据缓存页数量。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @param { AsyncCallback<void> } callback - 回调函数。当移除成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function removePreferencesFromCache(context: Context, options: Options, callback: AsyncCallback<void>): void;

  /**
   * 从缓存中移除指定的Preferences实例，通过name进行参数设置，使用Promise异步回调。
   * 
   * 应用首次调用[getPreferences]{@link preferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link preferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 若使用[GSKV存储模式](docroot://database/data-persistence-by-preferences.md#gskv存储)，推荐在进程退出时手动调用一次该接口。此操作会将数据缓存页写入磁盘，可一定程度上
   * 减少下一次调用getPreferences接口时的耗时。否则，下一次调用getPreferences接口时底层需要进行数据恢复，数据恢复的耗时取决于未写入磁盘的数据缓存页数量。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } name - Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function removePreferencesFromCache(context: Context, name: string): Promise<void>;

  /**
   * 从缓存中移除指定的Preferences实例，通过Options进行参数设置，使用Promise异步回调。
   * 
   * 应用首次调用[getPreferences]{@link preferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link preferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 若使用[GSKV存储模式](docroot://database/data-persistence-by-preferences.md#gskv存储)，推荐在进程退出时手动调用一次该接口。此操作会将数据缓存页写入磁盘，可一定程度上
   * 减少下一次调用getPreferences接口时的耗时。否则，下一次调用getPreferences接口时底层需要进行数据恢复，数据恢复的耗时取决于未写入磁盘的数据缓存页数量。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function removePreferencesFromCache(context: Context, options: Options): Promise<void>;

  /**
   * 从缓存中移除指定的Preferences实例，通过name进行参数设置，此为同步接口。
   * 
   * 应用首次调用[getPreferences]{@link preferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link preferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 若使用[GSKV存储模式](docroot://database/data-persistence-by-preferences.md#gskv存储)，推荐在进程退出时手动调用一次该接口。此操作会将数据缓存页写入磁盘，可一定程度上
   * 减少下一次调用getPreferences接口时的耗时。否则，下一次调用getPreferences接口时底层需要进行数据恢复，数据恢复的耗时取决于未写入磁盘的数据缓存页数量。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { string } name - Preferences实例的名称。名称长度需大于零且小于等于255字节，名称中不能包含'/'且不能以'/'结尾。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function removePreferencesFromCacheSync(context: Context, name: string): void;

  /**
   * 从缓存中移除指定的Preferences实例，通过Options进行参数设置，此为同步接口。
   * 
   * 应用首次调用[getPreferences]{@link preferences.getPreferences}接口获取某个Preferences实例后，该实例会被缓存起来，后续调用
   * [getPreferences]{@link preferences.getPreferences}时不会再次从持久化文件中读取，直接从缓存中获取Preferences实例。调用此接口移除缓存中的实例之后，再次
   * getPreferences将会重新读取持久化文件，生成新的Preferences实例。
   * 
   * 调用该接口后，不建议再使用旧的Preferences实例进行数据操作，否则会导致数据一致性问题，应将Preferences实例置为null，系统会统一回收。
   * 
   * 若使用[GSKV存储模式](docroot://database/data-persistence-by-preferences.md#gskv存储)，推荐在进程退出时手动调用一次该接口。此操作会将数据缓存页写入磁盘，可一定程度上
   * 减少下一次调用getPreferences接口时的耗时。否则，下一次调用getPreferences接口时底层需要进行数据恢复，数据恢复的耗时取决于未写入磁盘的数据缓存页数量。
   *
   * @param { Context } context - 应用上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/Context:Context}。
   * @param { Options } options - 与Preferences实例相关的配置选项。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 15501001 - The operations is supported in stage mode only.
   * @throws { BusinessError } 15501002 - Invalid dataGroupId.
   * @throws { BusinessError } 15500000 - Inner error. [since 11]
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function removePreferencesFromCacheSync(context: Context, options: Options): void;

  /**
   * 首选项实例，提供获取和修改存储数据的接口。
   * 
   * 下列接口都需先使用[preferences.getPreferences]{@link preferences.getPreferences}获取到Preferences实例，再通过此实例调用对应接口。
   *
   * @syscap SystemCapability.DistributedDataManager.Preferences.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Preferences {
    /**
     * 从缓存的Preferences实例中获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue，使用callback异步回调。
     *
     * @param { string } key - 要获取的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { ValueType } defValue - 默认返回值。
     * @param { AsyncCallback<ValueType> } callback - 回调函数。当获取成功时，err为undefined，data为键对应的值；否则err为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    get(key: string, defValue: ValueType, callback: AsyncCallback<ValueType>): void;

    /**
     * 从缓存的Preferences实例中获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue，使用Promise异步回调。
     *
     * @param { string } key - 要获取的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { ValueType } defValue - 默认返回值。
     * @returns { Promise<ValueType> } Promise对象，返回键对应的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    get(key: string, defValue: ValueType): Promise<ValueType>;

    /**
     * 从缓存的Preferences实例中获取键对应的值，如果值为null或者非默认值类型，返回默认数据defValue，此为同步接口。
     *
     * @param { string } key - 要获取的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { ValueType } defValue - 默认返回值。
     * @returns { ValueType } 返回键对应的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getSync(key: string, defValue: ValueType): ValueType;

    /**
     * 获取缓存的Preferences实例中的所有键值数据。
     *
     * @param { AsyncCallback<Object> } callback - 回调函数。当获取成功，err为undefined，value为所有键值数据；否则err为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getAll(callback: AsyncCallback<Object>): void;

    /**
     * 获取缓存的Preferences实例中的所有键值数据，使用Promise异步回调。
     *
     * @returns { Promise<Object> } Promise对象，返回所有包含的键值数据。
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    getAll(): Promise<Object>;

    /**
     * 获取缓存的Preferences实例中的所有键值数据，此为同步接口。
     *
     * @returns { Object } 返回所有包含的键值数据。
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    getAllSync(): Object;

    /**
     * 检查缓存的Preferences实例中是否包含指定Key的存储键值对，使用callback异步回调。
     *
     * @param { string } key - 要检查的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回Preferences实例是否包含给定Key的存储键值对，true表示存在，false表示不存在。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    has(key: string, callback: AsyncCallback<boolean>): void;

    /**
     * 检查缓存的Preferences实例中是否包含指定Key的存储键值对，使用Promise异步回调。
     *
     * @param { string } key - 要检查的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @returns { Promise<boolean> } Promise对象。返回Preferences实例是否包含给定Key的存储键值对，true表示存在，false表示不存在。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    has(key: string): Promise<boolean>;

    /**
     * 检查缓存的Preferences实例中是否包含指定Key的存储键值对，此为同步接口。
     *
     * @param { string } key - 要检查的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @returns { boolean } 返回Preferences实例是否包含给定Key的存储键值对，true表示存在，false表示不存在。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    hasSync(key: string): boolean;

    /**
     * 将数据写入缓存的Preferences实例中，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将Preferences
     * 实例持久化，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当value中包含非UTF-8格式的字符串时，请使用Uint8Array类型存储，否则会造成持久化文件出现格式错误造成文件损坏。
     * >
     * > 当对应的键已经存在时，put()方法会覆盖其值。可以使用hasSync()方法检查是否存在对应键值对。
     *
     * @param { string } key - 要修改的存储的Key，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { ValueType } value - 存储的新值。
     * @param { AsyncCallback<void> } callback - 回调函数。当数据写入成功，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    put(key: string, value: ValueType, callback: AsyncCallback<void>): void;

    /**
     * 将数据写入缓存的Preferences实例中，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将Preferences
     * 实例持久化，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 当value中包含非UTF-8格式的字符串时，请使用Uint8Array类型存储，否则会造成持久化文件出现格式错误造成文件损坏。
     * >
     * > 当对应的键已经存在时，put()方法会覆盖其值。可以使用hasSync()方法检查是否存在对应键值对。
     *
     * @param { string } key - 要修改的存储的Key，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { ValueType } value - 存储的新值。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    put(key: string, value: ValueType): Promise<void>;

    /**
     * 将数据写入缓存的Preferences实例中，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将Preferences
     * 实例持久化，此为同步接口。
     * 
     * > **说明：**
     * >
     * > 当value中包含非UTF-8格式的字符串时，请使用Uint8Array类型存储，否则会造成持久化文件出现格式错误造成文件损坏。
     * >
     * > 当对应的键已经存在时，putSync()方法会覆盖其值。可以使用hasSync()方法检查是否存在对应键值对。
     *
     * @param { string } key - 要修改的存储的Key，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { ValueType } value - 存储的新值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    putSync(key: string, value: ValueType): void;

    /**
     * 从缓存的Preferences实例中删除名为给定Key的存储键值对，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将
     * Preferences实例持久化，使用callback异步回调。
     *
     * @param { string } key - 要删除的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @param { AsyncCallback<void> } callback - 回调函数。当删除成功，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(key: string, callback: AsyncCallback<void>): void;

    /**
     * 从缓存的Preferences实例中删除名为给定Key的存储键值对，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将
     * Preferences实例持久化，使用Promise异步回调。
     *
     * @param { string } key - 要删除的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(key: string): Promise<void>;

    /**
     * 从缓存的Preferences实例中删除名为给定Key的存储键值对，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将
     * Preferences实例持久化，此为同步接口。
     *
     * @param { string } key - 要删除的存储Key名称，不能为空，最大长度限制为
     *     [MAX_KEY_LENGTH](docroot://reference/apis-arkdata/js-apis-data-sendablePreferences.md#constants)。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    deleteSync(key: string): void;

    /**
     * 清除缓存的Preferences实例中的所有数据，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将
     * Preferences实例持久化，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当清除成功，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    clear(callback: AsyncCallback<void>): void;

    /**
     * 清除缓存的Preferences实例中的所有数据，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将
     * Preferences实例持久化，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    clear(): Promise<void>;

    /**
     * 清除缓存的Preferences实例中的所有数据，可通过[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}将
     * Preferences实例持久化，此为同步接口。
     *
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    clearSync(): void;

    /**
     * 将缓存的Preferences实例中的数据异步存储到用户首选项的持久化文件中，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 当数据未修改或修改后的数据与缓存数据一致时，不会刷新持久化文件。
     * >
     * > 只在XML存储模式下使用，在GSKV存储模式下无需调用，因为当选择该模式时首选项对数据的操作会实时落盘。Preferences存储模式可见
     * > [存储模式说明](docroot://database/data-persistence-by-preferences.md#存储模式说明)。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当保存成功，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Mandatory parameters are left unspecified.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    flush(callback: AsyncCallback<void>): void;

    /**
     * 将缓存的Preferences实例中的数据异步存储到用户首选项的持久化文件中，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 当数据未修改或修改后的数据与缓存数据一致时，不会刷新持久化文件。
     * >
     * > 只在XML存储模式下使用，在GSKV存储模式下无需调用，因为当选择该模式时首选项对数据的操作会实时落盘。Preferences存储模式可见
     * > [存储模式说明](docroot://database/data-persistence-by-preferences.md#存储模式说明)。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     * @since 23 static
     */
    flush(): Promise<void>;

    /**
     * 将缓存的Preferences实例中的数据存储到用户首选项的持久化文件中。
     * 
     * > **说明：**
     * >
     * > 当数据未修改或修改后的数据与缓存数据一致时，不会刷新持久化文件。
     *
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @atomicservice
     * @since 14 dynamic
     * @since 23 static
     */
    flushSync(): void;

    /**
     * 订阅数据变更，订阅的Key的值发生变更后，并且在执行[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}方法后，触发
     * callback回调。
     * 
     * > **不同订阅方法的对比：**
     * >
     * > - on('change')：订阅所有Key变化，适合全局数据变化感知需求。
     * >
     * > - on('dataChange')：精确订阅指定Key的变化，适合关注特定数据场景，可回调返回具体值。
     * >
     * > - on('multiProcessChange')：订阅多进程数据变化，适合多进程共享同一首选项文件的场景。
     * >
     * > **选取建议：** 单进程应用推荐使用on('change')或on('dataChange')；多进程数据同步时使用on('multiProcessChange')；需要精确知道特定Key变化并获取新值时使用on('
     * > dataChange')。
     * > > **说明：**
     * >
     * > 当调用[removePreferencesFromCache]{@link preferences.removePreferencesFromCache}或
     * > [deletePreferences]{@link preferences.deletePreferences}后，订阅的数据变更会主动取消订阅，在重新
     * > [getPreferences]{@link preferences.getPreferences}后需要重新订阅数据变更。
     *
     * @param { 'change' } type - 事件类型，固定值'change'，表示数据变更。
     * @param { Callback<{ key: string }> } callback - 回调函数，用于接收数据变更通知，回调参数为Key字符串，表示发生变更的键名称。 [since 9 - 9]
     * @param { Function } callback - 回调函数，用于接收数据变更通知，回调参数为Key字符串，表示发生变更的键名称。 [since 10 - 10]
     * @param { Callback<string> } callback - 回调函数，用于接收数据变更通知，回调参数为Key字符串，表示发生变更的键名称。 [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    on(type: 'change', callback: Callback<string>): void;

    /**
     * Registers an observer to listen for the change of a {@link Preferences} object.
     *
     * @param { Callback<string> } callback - 回调函数，用于接收数据变更通知，回调参数为Key字符串，表示发生变更的键名称。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @since 23 static
     */
    onChange(callback: Callback<string>): void;

    /**
     * 订阅进程间数据变更，多个进程持有同一个首选项文件时，在任意一个进程（包括本进程）执行
     * [flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}方法，持久化文件发生变更后，触发callback回调。
     * 
     * 本接口提供给申请了[dataGroupId]{@link preferences.Options}的应用进行使用，未申请的应用不推荐使用（监听不到数据变更），多进程操作可能会损坏持久化文件，导致数据丢失。
     * 
     * > **说明：**
     * >
     * > 同一持久化文件在当前进程对多进程数据变更订阅的最大数量为50次，超过最大限制后订阅会失败。建议在触发callback回调后及时取消订阅。
     * >
     * > 当调用[removePreferencesFromCache]{@link preferences.removePreferencesFromCache}或
     * > [deletePreferences]{@link preferences.deletePreferences}后，订阅的数据变更会主动取消订阅，在重新
     * > [getPreferences]{@link preferences.getPreferences}后需要重新订阅数据变更。
     *
     * @param { 'multiProcessChange' } type - 事件类型，固定值'multiProcessChange'，表示多进程间的数据变更。
     * @param { Function } callback - 多进程间数据变更时触发的回调函数，回调参数为发生变更的Key字符串。 [since 10 - 10]
     * @param { Callback<string> } callback - 多进程间数据变更时触发的回调函数，回调参数为发生变更的Key字符串。 [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500019 - Failed to obtain the subscription service.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    on(type: 'multiProcessChange', callback: Callback<string>): void;

    /**
     * Registers an observer to listen for the change of a {@link Preferences} object.
     *
     * @param { Callback<string> } callback - 多进程间数据变更时触发的回调函数，回调参数为发生变更的Key字符串。
     * @throws { BusinessError } 15500000 - Inner error.
     * @throws { BusinessError } 15500019 - Failed to obtain the subscription service.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @since 23 static
     */
    onMultiProcessChange(callback: Callback<string>): void;

    /**
     * 精确订阅数据变更，只有被订阅的Key值发生变更后，在执行[flush]{@link preferences.Preferences.flush(callback: AsyncCallback<void>)}方法后，触发
     * callback回调。
     * 
     * > **说明：**
     * >
     * > 当调用[removePreferencesFromCache]{@link preferences.removePreferencesFromCache}或
     * > [deletePreferences]{@link preferences.deletePreferences}后，订阅的数据变更会主动取消订阅，在重新
     * > [getPreferences]{@link preferences.getPreferences}后需要重新订阅数据变更。
     *
     * @param { 'dataChange' } type - 事件类型，固定值'dataChange'，表示精确的数据变更。
     * @param { Array<string> } keys - 需要订阅的Key集合。
     * @param { Callback<Record<string, ValueType>> } callback - 回调函数。回调支持返回多个键值对，其中键为发生变更的订阅Key，类型为string；值为变更后的数据，类型为
     *     [ValueType]{@link preferences.ValueType}。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'dataChange', keys: Array<string>, callback: Callback<Record<string, ValueType>>): void;

    /**
     * Registers an observer to listen for changes to the {@ link Preferences} object.
     *
     * @param { Array<string> } keys - 需要订阅的key集合。
     * @param { Callback<Record<string, ValueType>> } callback - 回调函数。回调支持返回多个键值对，其中键为发生变更的订阅key，类型为string；值为变更后的数据，类型为[ValueType](#valuetype)。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @since 23 static
     */
    onDataChange(keys: Array<string>, callback: Callback<Record<string, ValueType>>): void;

    /**
     * 取消订阅数据变更。
     *
     * @param { 'change' } type - 事件类型，固定值'change'，表示数据变更。
     * @param { Callback<{ key: string }> } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。 [since 9 - 9]
     * @param { Function } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。 [since 10 - 10]
     * @param { Callback<string> } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。 [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 9 dynamic
     */
    off(type: 'change', callback?: Callback<string>): void;

    /**
     * Unregisters an existing observer.
     *
     * @param { Callback<string> } [callback] - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @since 23 static
     */
    offChange(callback?: Callback<string>): void;

    /**
     * 取消订阅进程间数据变更。
     * 
     * 本接口提供给申请了[dataGroupId]{@link preferences.Options}的应用进行使用，未申请的应用不推荐使用（监听不到数据变更），多进程操作可能会损坏持久化文件，导致数据丢失。
     *
     * @param { 'multiProcessChange' } type - 事件类型，固定值'multiProcessChange'，表示多进程间的数据变更。
     * @param { Function } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。 [since 10 - 10]
     * @param { Callback<string> } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。 [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error. [since 11]
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     */
    off(type: 'multiProcessChange', callback?: Callback<string>): void;

    /**
     * Unregisters an existing observer.
     *
     * @param { Callback<string> } [callback] - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @since 23 static
     */
    offMultiProcessChange(callback?: Callback<string>): void;

    /**
     * 取消精确订阅数据变更。
     *
     * @param { 'dataChange' } type - 事件类型，固定值'dataChange'，表示精确的数据变更。
     * @param { Array<string> } keys - 需要取消订阅的Key集合，当Keys为空数组时，表示取消订阅全部Key；当Keys为非空数组时，表示只取消订阅Key集合中的Key。
     * @param { Callback<Record<string, ValueType>> } callback - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform [since 20]
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'dataChange', keys: Array<string>, callback?: Callback<Record<string, ValueType>>): void;

    /**
     * Unregisters an observer for changes to the {@ link Preferences} object.
     *
     * @param { Array<string> } keys - 需要取消订阅的key集合，当keys为空数组时，表示取消订阅全部key；当keys为非空数组时，表示只取消订阅key集合中的key。
     * @param { Callback<Record<string, ValueType>> } [callback] - 需要取消的回调函数，若不填写，表示取消所有已注册的回调函数；若填写，表示只取消指定的回调函数。
     * @throws { BusinessError } 15500000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.Preferences.Core
     * @crossplatform
     * @since 23 static
     */
    offDataChange(keys: Array<string>, callback?: Callback<Record<string, ValueType>>): void;
  }
}

export default preferences;