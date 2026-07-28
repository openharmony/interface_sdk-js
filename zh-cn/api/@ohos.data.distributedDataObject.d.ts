/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file 分布式数据对象
 * @kit ArkData
 */

import { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/BaseContext';
import commonType from '@ohos.data.commonType';

/**
 * 本模块提供管理基本数据对象的相关能力，包括创建、查询、删除、修改、订阅等；同时支持相同应用多设备间的分布式数据对象协同能力。分布式数据对象处理数据时，不会解析用户数据的内容，存储路径安全性较低，不建议传输个人敏感数据和隐私数据。
 *
 * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace distributedDataObject {
  /**
   * 数据库的绑定信息。当前版本只支持关系型数据库的绑定。
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 11 dynamic
   * @since 23 static
   */
  interface BindInfo {
    /**
     * 待绑定资产在所属的数据库中的库名。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 11 dynamic
     * @since 23 static
     */
    storeName: string;

    /**
     * 待绑定资产在所属的数据库中的表名。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 11 dynamic
     * @since 23 static
     */
    tableName: string;

    /**
     * 待绑定资产在所属的数据库中的主键。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 11 dynamic
     * @since 23 static
     */
    primaryKey: commonType.ValuesBucket;

    /**
     * 待绑定资产在所属的数据库中的列名。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 11 dynamic
     * @since 23 static
     */
    field: string;

    /**
     * 待绑定资产在所属的数据库中的资产名。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 11 dynamic
     * @since 23 static
     */
    assetName: string;
  }

  /**
   * 创建一个分布式数据对象。
   *
   * @param { object } source - 设置分布式数据对象的属性。
   * @returns { DistributedObject } 创建完成的分布式数据对象。
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead distributedDataObject.create
   */
  function createDistributedObject(source: object): DistributedObject;

  /**
   * 创建一个分布式数据对象。对象属性支持基本类型（数字类型、布尔类型和字符串类型）以及复杂类型（数组、基本类型嵌套）。
   *
   * @param { Context } context - 应用的上下文。 
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。 
   *     <br>Stage模型的应用Context定义见[Context]{@link ./application/UIAbilityContext:UIAbilityContext}。
   * @param { object } source - 设置分布式数据对象的属性。
   * @returns { DataObject } 创建完成的分布式数据对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 9 dynamic
   * @since 23 static
   */
  function create(context: Context, source: object): DataObject;

  /**
   * 随机创建一个sessionId。
   *
   * @returns { string } 随机创建的sessionId。
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 8 dynamic
   * @since 23 static
   */
  function genSessionId(): string;

  /**
   * [save]{@link distributedDataObject.DataObject.save(deviceId: string, callback: AsyncCallback<SaveSuccessResponse>)}
   * 接口回调信息。
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 9 dynamic
   * @since 23 static
   */
  interface SaveSuccessResponse {
    /**
     * 多设备协同的唯一标识。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    sessionId: string;

    /**
     * 已保存对象的版本，取值为非负整数。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    version: int;

    /**
     * 存储数据的设备号，标识需要保存对象的设备。"local"表示本地设备，否则表示其他设备的设备号。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: string;
  }

  /**
   * [revokeSave]{@link distributedDataObject.DataObject.revokeSave(callback: AsyncCallback<RevokeSaveSuccessResponse>)}
   * 接口回调信息。
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 9 dynamic
   * @since 23 static
   */
  interface RevokeSaveSuccessResponse {
    /**
     * 多设备协同的唯一标识。
     *
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    sessionId: string;
  }

  /**
   * 定义获取分布式对象数据变更的监听回调函数。
   *
   * @param { string } sessionId - 标识变更对象的sessionId。长度不大于128字节，且只能包含字母、数字或下划线_。
   * @param { Array<string> } fields - 标识对象变更的属性名。属性名可自定义，要求字符串非空且长度不超过128字节。
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 20 dynamic
   * @since 23 static
   */
  type DataObserver = (sessionId: string, fields: Array<string>) => void;

  /**
   * 定义获取分布式对象状态变更的监听回调函数。
   *
   * @param { string } sessionId - 标识变更对象的sessionId。长度不大于128字节，且只能包含字母、数字或下划线_。
   * @param { string } networkId - 对端设备的网络标识。要求字符串非空且长度不超过255字节。
   * @param { string } status - 标识分布式对象的状态，可能的取值有'online'（上线）、'offline'（下线）和'restore'（恢复）。
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 20 dynamic
   * @since 23 static
   */
  type StatusObserver = (sessionId: string, networkId: string, status: string) => void;

  /**
     * 定义传输进度的监听回调函数。
     *
     * @param { string } sessionId - 标识变更对象的sessionId。长度不大于128字节，且只能包含字母、数字或下划线_。
     * @param { int } progress - 标识资产传输进度。取值范围为[-1, 100]，取值为整数，-1表示获取进度失败，100表示传输完成。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     * @since 23 static
     */
    type ProgressObserver = (sessionId: string, progress: int) => void;

  /**
   * 表示一个分布式数据对象。在使用以下接口前，需调用[createDistributedObject()]{@link distributedDataObject.createDistributedObject}获取
   * DistributedObject对象。
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  interface DistributedObject {
    /**
     * 设置sessionId。当可信组网中有多个设备处于协同状态时，如果多个设备间的分布式对象设置为同一个sessionId，就能自动同步。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } sessionId - 分布式数据对象在可信组网中的标识ID。如果要退出分布式组网，设置为""或不设置均可。
     * @returns { boolean } true：标识设置sessionId成功。 
     *     <br>false：标识设置sessionId失败。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead distributedDataObject.DataObject.setSessionId(sessionId: string, callback: AsyncCallback<void>)
     */
    setSessionId(sessionId?: string): boolean;

    /**
     * 监听分布式数据对象的变更。
     *
     * @param { 'change' } type - 事件类型，固定为'change'，表示数据变更。
     * @param { Function } callback - 变更回调对象实例。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>fields：标识对象变更的属性名。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead distributedDataObject.DataObject.on(type: 'change', callback: (sessionId: string, fields: Array<string>) => void )
     */
    on(type: 'change', callback: (sessionId: string, fields: Array<string>) => void): void;

    /**
     * 当不再进行数据变更监听时，使用此接口删除对象的变更监听。
     *
     * @param { 'change' } type - 事件类型，固定为'change'，表示数据变更。
     * @param { Function } callback - 需要删除的数据变更回调，若不设置则删除该对象所有的数据变更回调。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>fields：标识对象变更的属性名。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead distributedDataObject.DataObject.off(type: 'change', callback?: (sessionId: string, fields: Array<string>) => void )
     */
    off(type: 'change', callback?: (sessionId: string, fields: Array<string>) => void): void;

    /**
     * 监听分布式数据对象的上下线。
     *
     * @param { 'status' } type - 事件类型，固定为'status'，表示对象上下线。
     * @param { Function } callback - 监听上下线回调实例。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>networkId：标识对象设备； 
     *     <br>status：标识对象为'online'(上线)或'offline'(下线)的状态。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead distributedDataObject.DataObject.on( type: 'status', callback: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void )
     */
    on(
      type: 'status',
      callback: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void
    ): void;

    /**
     * 当不再进行对象上下线监听时，使用此接口删除对象的上下线监听。
     *
     * @param { 'status' } type - 事件类型，固定为'status'，表示对象上下线。
     * @param { Function } callback - 需要删除的上下线回调，若不设置则删除该对象所有的上下线回调。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>networkId：标识对象设备； 
     *     <br>status：标识对象为'online'(上线)或'offline'(下线)的状态。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead distributedDataObject.DataObject.off( type: 'status', callback?: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void )
     */
    off(
      type: 'status',
      callback?: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void
    ): void;
  }

  /**
   * 表示一个分布式数据对象。在使用以下接口前，需调用[create()]{@link distributedDataObject.create}获取DataObject对象。
   *
   * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataObject {
    /**
     * 设置sessionId，使用callback方式异步回调。当可信组网中有多个设备处于协同状态时，如果多个设备间的分布式对象设置为同一个sessionId，就能自动同步。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param {string} sessionId - 分布式数据对象在可信组网中的标识ID，长度不大于128字节，且只能包含字母数字或下划线_。当传入""、null时表示退出分布式组网。
     * @param {AsyncCallback<void>} callback - 加入session的异步回调。
     * @throws {BusinessError} 201 - Permission verification failed.
     * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *     2. The sessionId allows only letters, digits, and underscores(_), and cannot exceed 128 in length.
     * @throws {BusinessError} 15400001 - Failed to create the in-memory database.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    setSessionId(sessionId: string, callback: AsyncCallback<void>): void;

    /**
     * 退出所有已加入的session，使用callback方式异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 9 - 19]
     * @param {AsyncCallback<void>} callback - 退出所有已加入session的异步回调。
     * @throws {BusinessError} 201 - Permission verification failed. [since 9 - 19]
     * @throws {BusinessError} 401 - Parameter error. Incorrect parameter types.
     * @throws {BusinessError} 15400001 - Failed to create the in-memory database.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    setSessionId(callback: AsyncCallback<void>): void;

    /**
     * 设置sessionId或退出分布式组网，使用Promise异步回调。当传入""、null或不传入参数时，表示退出分布式组网。当可信组网中有多个设备处于协同状态时，如果多个设备间的分布式对象设置为同一个sessionId，就能自
     * 动同步。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param {string} sessionId - 分布式数据对象在可信组网中的标识ID，长度不大于128字节，且只能包含字母数字或下划线_。当传入""、null或不传入参数时表示退出分布式组网。
     * @returns {Promise<void>} Promise对象，无返回结果。
     * @throws {BusinessError} 201 - Permission verification failed.
     * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
     *     2. The sessionId allows only letters, digits, and underscores(_), and cannot exceed 128 in length.
     * @throws {BusinessError} 15400001 - Failed to create the in-memory database.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    setSessionId(sessionId?: string): Promise<void>;

    /**
     * 监听分布式数据对象的数据变更。
     *
     * @param { 'change' } type - 事件类型，固定为'change'，表示数据变更。
     * @param { Function } callback - 变更回调对象实例。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>fields：标识对象变更的属性名。
     * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     */
    on(type: 'change', callback: (sessionId: string, fields: Array<string>) => void ): void;

    /**
     * 当不再进行数据变更监听时，使用此接口删除对象的变更监听。
     *
     * @param { 'change' } type - 事件类型，固定为'change'，表示数据变更。
     * @param { Function } callback - 需要删除的数据变更回调，若不设置则删除该对象所有的数据变更回调。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>fields：标识对象变更的属性名。
     * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     */
    off(type: 'change', callback?: (sessionId: string, fields: Array<string>) => void ): void;

    /**
     * 监听分布式数据对象的上下线。
     *
     * @param { 'status' } type - 事件类型，固定为'status'，表示对象上下线。
     * @param { Function } callback - 监听上下线回调实例。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>networkId：标识对象设备； 
     *     <br>status：标识对象为'online'(上线)或'offline'(下线)的状态。
     * @throws {BusinessError} 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     */
    on(
      type: 'status',
      callback: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void
    ): void;

    /**
     * 当不再进行对象上下线监听时，使用此接口删除对象的上下线监听。
     *
     * @param { 'status' } type - 事件类型，固定为'status'，表示对象上下线。
     * @param { Function } callback - 需要删除的上下线回调，若不设置则删除该对象所有的上下线回调。
     *     <br>sessionId：标识变更对象的sessionId； 
     *     <br>networkId：标识对象设备； 
     *     <br>status：标识对象为'online'(上线)或'offline'(下线)的状态。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     */
    off(
      type: 'status',
      callback?: (sessionId: string, networkId: string, status: 'online' | 'offline' ) => void
    ): void;

    /**
     * 保存分布式数据对象。使用callback方式异步回调。
     * 
     * 对象数据保存成功后，当应用存在时不会释放对象数据，当应用退出后，重新进入应用时，恢复保存在设备上的数据。
     * 
     * 有以下几种情况时，保存的数据将会被释放：
     * 
     * - 存储时间超过24小时。
     * - 应用卸载。
     * - 成功恢复数据之后。
     *
     * @param { string } deviceId - 存储数据的设备号，标识需要保存对象的设备。"local"表示本地设备，否则表示其他设备的设备号。
     * @param { AsyncCallback<SaveSuccessResponse> } callback - 回调函数。返回SaveSuccessResponse，包含sessionId、version、deviceId等
     *     信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    save(deviceId: string, callback: AsyncCallback<SaveSuccessResponse>): void;

    /**
     * 保存分布式数据对象。使用Promise方式作为异步回调。
     * 
     * 对象数据保存成功后，当应用存在时不会释放对象数据，当应用退出后，重新进入应用时，恢复保存在设备上的数据。
     * 
     * 有以下几种情况时，保存的数据将会被释放：
     * 
     * - 存储时间超过24小时。
     * - 应用卸载。
     * - 成功恢复数据之后。
     *
     * @param { string } deviceId - 存储数据的设备号，标识需要保存对象的设备。"local"表示本地设备，否则表示其他设备的设备号。
     * @returns { Promise<SaveSuccessResponse> } Promise对象。返回SaveSuccessResponse，包含sessionId、version、deviceId等信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    save(deviceId: string): Promise<SaveSuccessResponse>;

    /**
     * 撤回保存的分布式数据对象。使用callback方式作为异步方法。
     * 
     * 如果对象保存在本地设备，那么将删除所有受信任设备上所保存的数据。
     * 
     * 如果对象保存在其他设备，那么将删除本地设备上的数据。
     *
     * @param { AsyncCallback<RevokeSaveSuccessResponse> } callback - 回调函数。返回RevokeSaveSuccessResponse，包含sessionId。
     * @throws { BusinessError } 401 - Parameter error. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    revokeSave(callback: AsyncCallback<RevokeSaveSuccessResponse>): void;

    /**
     * 撤回保存的分布式数据对象。使用Promise方式作为异步方法。
     * 
     * 如果对象保存在本地设备，那么将删除所有受信任设备上所保存的数据。
     * 
     * 如果对象保存在其他设备，那么将删除本地设备上的数据。
     *
     * @returns { Promise<RevokeSaveSuccessResponse> } Promise对象。返回RevokeSaveSuccessResponse，包含sessionId。
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 9 dynamic
     * @since 23 static
     */
    revokeSave(): Promise<RevokeSaveSuccessResponse>;

    /**
     * 绑定分布式对象中的单个资产与其对应的数据库信息，当前版本只支持分布式对象中的资产与关系型数据库的绑定。使用callback方式异步回调。
     * 
     * 当分布式对象中包含的资产和关系型数据库中包含的资产指向同一个实体资产文件，即两个资产的Uri相同时，就会存在冲突，我们把这种资产称为融合资产。如果需要分布式数据管理进行融合资产的冲突解决，需要先进行资产的绑定。当应用退出
     * session后，绑定关系随之消失。
     *
     * @param { string } assetKey - 待绑定的融合资产在分布式对象中的键值。
     * @param { BindInfo } bindInfo - 待绑定的融合资产在数据库中的信息，包含库名、表名、主键、列名及在数据库中的资产名。
     * @param { AsyncCallback<void> } callback - 绑定数据库的回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 11 dynamic
     * @since 23 static
     */
    bindAssetStore(assetKey: string, bindInfo: BindInfo, callback: AsyncCallback<void>): void;

    /**
     * 绑定分布式对象中的单个资产与其对应的数据库信息，当前版本只支持分布式对象中的资产与关系型数据库的绑定。使用Promise方式作为异步回调。
     * 
     * 当分布式对象中包含的资产和关系型数据库中包含的资产指向同一个实体资产文件，即两个资产的Uri相同时，就会存在冲突，我们把这种资产称为融合资产。如果需要分布式数据管理进行融合资产的冲突解决，需要先进行资产的绑定。当应用退出
     * session后，绑定关系随之消失。
     *
     * @param { string } assetKey - 待绑定的融合资产在分布式对象中的键值。
     * @param { BindInfo } bindInfo - 待绑定的融合资产在数据库中的信息，包含库名、表名、主键、列名及在数据库中的资产名。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 11 dynamic
     * @since 23 static
     */
    bindAssetStore(assetKey: string, bindInfo: BindInfo): Promise<void>;

    /**
     * 监听分布式对象的数据变更。
     *
     * @param { 'change' } type - 事件类型，固定为'change'，表示数据变更。
     * @param { DataObserver } callback - 表示分布式对象数据变更的回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     */
    on(type: 'change', callback: DataObserver): void;

    /**
     * 监听分布式对象的数据变更。
     *
     * @param { DataObserver } callback - 表示分布式对象数据变更的回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 23 static
     */
    onChange(callback: DataObserver): void;

    /**
     * 当不再进行数据变更监听时，使用此接口删除分布式对象数据变更监听的回调实例。
     *
     * @param { 'change' } type - 事件类型，固定为'change'，表示数据变更。
     * @param { DataObserver } [callback] - 需要删除的数据变更回调实例，若不设置则删除该对象所有的数据变更回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     */
    off(type: 'change', callback?: DataObserver): void;

    /**
     * 当不再进行数据变更监听时，使用此接口删除分布式对象数据变更监听的回调实例。
     *
     * @param { DataObserver } [callback] - 需要删除的数据变更回调实例，若不设置则删除该对象所有的数据变更回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 23 static
     */
    offChange(callback?: DataObserver): void;

    /**
     * 监听分布式对象的状态变更。
     *
     * @param { 'status' } type - 事件类型，固定为'status'，表示分布式对象状态变更事件。
     * @param { StatusObserver } callback - 表示分布式对象状态变更的回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     */
    on(type: 'status', callback: StatusObserver): void;

    /**
     * 监听分布式对象的状态变更。
     *
     * @param { StatusObserver } callback - 表示分布式对象状态变更的回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @stagemodelonly
     * @since 23 static
     */
    onStatus(callback: StatusObserver): void

    /**
     * 当不再进行分布式对象状态变更监听时，使用此接口删除分布式对象状态变更的回调实例。
     *
     * @param { 'status' } type - 事件类型，固定为'status'，表示数据对象状态变更事件。
     * @param { StatusObserver } [callback] - 需要删除状态变更的回调实例，若不设置则删除该对象所有的状态变更回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     */
    off(type: 'status', callback?: StatusObserver): void;

    /**
     * 当不再进行分布式对象状态变更监听时，使用此接口删除分布式对象状态变更的回调实例。
     *
     * @param { StatusObserver } [callback] - 需要删除状态变更的回调实例，若不设置则删除该对象所有的状态变更回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 23 static
     */
    offStatus(callback?: StatusObserver): void;

    /**
     * 监听资产传输进度。
     *
     * @param { 'progressChanged' } type - 事件类型，固定为'progressChanged'，表示资产传输进度变化事件。
     * @param { ProgressObserver } callback - 表示资产传输进度变化的回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     */
    on(type: 'progressChanged', callback: ProgressObserver): void;

    /**
     * 监听资产传输进度。
     *
     * @param { ProgressObserver } 表示资产传输进度变化的回调实例。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 23 static
     */
    onProgressChanged(callback: ProgressObserver): void;

    /**
     * 当不再进行资产传输进度监听时，使用此接口删除资产传输进度监听的回调实例。
     *
     * @param { 'progressChanged' } type - 事件类型，固定为'progressChanged'，表示资产传输进度变化事件。
     * @param { ProgressObserver } [callback] - 需要取消监听的回调实例，若不设置，则取消对该事件的所有监听。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     */
    off(type: 'progressChanged', callback?: ProgressObserver): void;

    /**
     * 当不再进行资产传输进度监听时，使用此接口取消监听。
     *
     * @param { ProgressObserver } [callback] 需要取消监听的事件回调，若不设置，则取消对该事件的所有监听。
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 23 static
     */
    offProgressChanged(callback?: ProgressObserver): void;

    /**
     * 设置分布式对象中的单个资产的属性信息，该接口必须在[setSessionId]{@link distributedDataObject.DataObject.setSessionId(sessionId?: string)}接
     * 口调用前使用。使用Promise异步回调。
     *
     * @param { string } assetKey - 分布式对象中资产类型数据对应的属性名。<br/>**使用约束：** <br/>（1）提供的assetKey对应的文件必须已存在且类型为资产
     *     [Asset]{@link @ohos.data.commonType:commonType.Asset}，才可进行正确的设置资产。若assetKey对应文件不存在或文件存在但类型不是资产类型，可能会出现资产设置错误。
     *     <br/>（2）在协同或接续场景下需要双端满足assetKey对应的文件存在且为资产类型，才可将设置的资产同步到对端设备。
     * @param { string } uri - 待设置的新资产的uri，表示该资产的存放的分布式路径。必须为真实存在的资产对应的分布式路径。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 15400002 - Parameter error. Possible causes:
     *     1. The assetKey is invalid, such as "";
     *     2. The uri is invalid, such as "".
     * @throws {BusinessError} 15400003 - The sessionId of the distributed object has been set.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     * @since 23 static
     */
    setAsset(assetKey: string, uri: string): Promise<void>;

    /**
     * 设置分布式对象中的多个资产的属性信息，该接口必须在[setSessionId]{@link distributedDataObject.DataObject.setSessionId(sessionId?: string)}接
     * 口调用前使用。使用Promise异步回调。
     *
     * @param { string } assetsKey - 分布式对象中资产数组类型数据对应的属性名。<br/>**使用约束：** <br/>（1）提供的assetsKey对应的文件已存在且类型必须为资产
     *     [Asset]{@link @ohos.data.commonType:commonType.Asset}，才可进行正确的设置资产。若assetsKey对应文件不存在或文件存在但类型不是资产类型，可能会出现资产设置错
     *     误。<br/>（2）在协同或接续场景下需要双端满足assetsKey对应的文件存在且为资产类型，才可将设置的资产数组同步到对端设备。
     * @param { Array<string> } uris - 待设置的新资产数组的uri集合，表示资产数组内每个资产存放的分布式路径。数组中元素的数量为[1, 50]，元素uri必须为真实存在的资产对应的分布式路径。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 15400002 - Parameter error. Possible causes:
     *     1. The assetsKey is invalid, such as "";
     *     2. The uris is invalid, such as the length of uris is more than 50.
     * @throws {BusinessError} 15400003 - The sessionId of the distributed object has been set.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 20 dynamic
     * @since 23 static
     */
    setAssets(assetsKey: string, uris: Array<string>): Promise<void>;

    /**
     * Get and set value of property.
     *
     * @param { string } key - property name.
     * @syscap SystemCapability.DistributedDataManager.DataObject.DistributedObject
     * @since 23 static
     */
    [key: string]: Object | null | undefined;
  }
}

export default distributedDataObject;