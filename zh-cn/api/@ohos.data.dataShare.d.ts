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
 * @file
 * @kit ArkData
 */

import type { AsyncCallback } from './@ohos.base';
import { Callback } from './@ohos.base';
import Context from './application/Context';
import DataShareResultSet from './@ohos.data.DataShareResultSet';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import { ValuesBucket, ValueType } from './@ohos.data.ValuesBucket';

/**
 * **DataShare**用于应用管理其自身数据，同时支持同个设备上不同应用间的数据共享。
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
 * @systemapi [since 9 - 19]
 * @publicapi [since 20]
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace dataShare {
  /**
   * 指定[DataShareHelper]{@link dataShare.DataShareHelperOptions}的可选参数，包含是否在代理模式下，以及非静默访问的拉起等待时间。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface DataShareHelperOptions {
    /**
     * 默认为false，如果为true，则要创建的[DataShareHelper]{@link dataShare.DataShareHelperOptions}处于代理模式，所有操作都不会打开数据提供者APP，除非数据库不存在，
     * 当数据库不存在时，
     * [createDataShareHelper]{@link dataShare.createDataShareHelper(context: Context, uri: string, options: DataShareHelperOptions, callback: AsyncCallback<DataShareHelper>)}
     * 会拉起数据提供者创建数据库。
     *
     * @default false
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    isProxy?: boolean;
    /**
     * 拉起数据提供者进程的等待时间（单位：秒），默认值为2秒。
     *
     * @default 2
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    waitTime?: int;
  }

  /**
   * 创建DataShareHelper实例。使用callback异步回调。
   *
   * @param { Context } context - 应用的上下文环境。
   * @param { string } uri - 要连接的服务端应用的路径。
   * @param { AsyncCallback<DataShareHelper> } callback - 回调函数。当创建DataShareHelper实例成功，err为undefined，data为获取到的
   *     DataShareHelper实例；否则为错误对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 19]
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper fails to be initialized.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>): void;
  /**
   * 创建DataShareHelper实例，通过DataShareHelperOptions指定是否通过代理访问。使用callback异步回调。
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { DataShareHelperOptions } options - Indicates the optional config.
   * @param { AsyncCallback<DataShareHelper> } callback - {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 19]
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper fails to be initialized.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  function createDataShareHelper(
    context: Context,
    uri: string,
    options: DataShareHelperOptions,
    callback: AsyncCallback<DataShareHelper>
  ): void;

  /**
   * 创建DataShareHelper实例，通过DataShareHelperOptions指定是否通过代理访问。使用Promise异步回调。
   *
   * @param { Context } context - 应用的上下文环境。
   * @param { string } uri - 要连接的服务端应用的路径。
   * @param { DataShareHelperOptions } options - 可选配置。指定[DataShareHelper]{@link dataShare.DataShareHelperOptions}是否在代理模式
   *     下，指定非静默访问时的等待拉起时间。如果不设置，则表示[DataShareHelper]{@link dataShare.DataShareHelperOptions}不在代理模式下，且非静默访问时的等待拉起时间
   *     为2秒。如果uri以datashareproxy为开头，则必须设置options的isProxy参数，否则DataShareHelper创建失败返回错误。 [since 10]
   * @returns { Promise<DataShareHelper> } Promise对象。返回DataShareHelper实例。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 19]
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper fails to be initialized.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  function createDataShareHelper(
    context: Context,
    uri: string,
    options?: DataShareHelperOptions
  ): Promise<DataShareHelper>;

  /**
   * 开启静默访问。使用Promise异步回调。
   *
   * 使用规则：
   *
   * - 数据提供方调用此接口，来开启静默访问功能。
   * - 此接口设置的开启结果在校验的时候是搭配data_share_config.json文件中isSilentProxyEnable字段进行工作的。支持的配置可参考
   * [data_share_config.json配置](docroot://database/share-data-by-datashareextensionability-sys.md)。
   * - 此接口生效在调用datashareHelper相关接口过程中，如果此接口有开启过相关uri，那么会按照此接口的配置来开启静默访问。如果此接口未调用过，则会读取data_share_config.json中的配置来校验
   * Datashare的开启状态。
   *
   * @param { Context } context - 应用的上下文环境。
   * @param { string } uri - 要开启的数据提供方的数据路径。<br />1、全局开关状态：入参不带uri、uri为undefined、uri为null，会清空掉之前设置的所有uri开关状态，开启数据提供方静默访问
   *     。<br />2、精准开关状态：uri的入参为固定的值，仅开启该uri对应的静默访问。<br />在调用datashareHelper相关接口时，优先精准匹配uri的开关状态。如果匹配不到，继续匹配全局的开关状态。<br
   *     />uri格式：datashare:///{bundleName}/{moduleName}/{storeName}/{tableName}
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 19]
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 15700011 - The URI does not exist.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function enableSilentProxy(context: Context, uri?: string): Promise<void>;

  /**
   * 关闭静默访问。使用Promise异步回调。
   *
   * 使用规则：
   *
   * - 数据提供方调用此接口，来关闭静默访问功能。
   * - 此接口设置的关闭结果在校验的时候是搭配data_share_config.json文件中isSilentProxyEnable字段进行工作的。支持的配置可参考
   * [data_share_config.json配置](docroot://database/share-data-by-datashareextensionability-sys.md)。
   * - 此接口生效在调用datashareHelper相关接口过程中，如果此接口有关闭过相关uri，那么会按照此接口的配置来关闭静默访问。如果此接口未调用过，则会读取data_share_config.json中的配置来校验
   * Datashare的关闭状态。
   *
   * @param { Context } context - 应用的上下文环境。
   * @param { string } uri - 要关闭的数据提供方的数据路径。<br />1、全局开关状态：入参不带uri、uri为undefined、uri为null，会清空掉之前设置的uri开关状态，关闭数据提供方静默访问。<
   *     br />2、精准开关状态：uri的入参为固定的值，仅关闭该uri对应的静默访问。<br />在调用datashareHelper相关接口时，优先精准匹配uri的开关状态。如果匹配不到，继续匹配全局的开关状态。<br />
   *     uri格式：datashare:///{bundleName}/{moduleName}/{storeName}/{tableName}
   * @returns { Promise<void> } 无返回结果的Promise对象。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
   *     API. [since 19]
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameters types.
   * @throws { BusinessError } 15700011 - The URI does not exist.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 11 dynamic
   * @since 23 static
   */
  function disableSilentProxy(context: Context, uri?: string): Promise<void>;

  /**
   * 标记模板的数据结构，TemplateId是在[addTemplate]{@link dataShare.DataShareHelper.addTemplate}中自动生成的，在
   * [addTemplate]{@link dataShare.DataShareHelper.addTemplate}后，可以使用模板id来标记模板。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface TemplateId {
    /**
     * 指定处理回调的订阅者的id，与[addTemplate]{@link dataShare.DataShareHelper.addTemplate}中的subscriberId相同，每个订阅者的ID是唯一的。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    subscriberId: string;
    /**
     * 指定创建模板的模板所有者的bundleName，与[addTemplate]{@link dataShare.DataShareHelper.addTemplate}中的bundleName相同。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    bundleNameOfOwner: string;
  }

  /**
   * 指定发布的数据类型。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface PublishedItem {
    /**
     * 指定发布数据的键。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    key: string;
    /**
     * 指定发布的数据。如果发布数据大小超过20KB，建议使用ArrayBuffer。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    data: string | ArrayBuffer;
    /**
     * 指定订阅者id。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    subscriberId: string;
  }

  /**
   * 订阅/取消订阅RDB数据变更的结果，回调支持传输不大于10M的数据。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface RdbDataChangeNode {
    /**
     * 指定回调的uri。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * 处理回调的templateId。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    templateId: TemplateId;
    /**
     * 指定回调的数据。若处理回调数据时发生错误，则回调将不会被触发。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    data: Array<string>;
  }

  /**
   * 订阅/取消订阅已发布数据变更的结果。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface PublishedDataChangeNode {
    /**
     * 指定回调的bundleName。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * 指定回调的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    data: Array<PublishedItem>;
  }

  /**
   * 指定订阅中的模板结构。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface Template {
    /**
     * 指定模板的谓词。当调用
     * [on]{@link dataShare.DataShareHelper.on(type: 'rdbDataChange', uris: Array<string>, templateId: TemplateId, callback: AsyncCallback<RdbDataChangeNode>)}
     * 的回调时，谓词用于生成数据。仅适用于rdb存储数据。
     *
     * @type { [key: string]: string } [since 10 - 10]
     * @type { Record<string, string> } [since 11]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    predicates: Record<string, string>;

    /**
     * 指定模板的调度程序sql。其中嵌入自定义函数处理，目前预置自定义函数remindTimer处理。remindTimer在指定场景触发一次订阅刷新。
     *
     * 触发场景：
     *
     * 1. 修改数据时且有订阅的情况下触发对应的调度程序sql语句。
     * 2. 添加对应库第一个订阅的情况下触发对应的调度程序sql语句。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    scheduler: string;

    /**
     * 指定模板的update sql语句，未定义时默认值为空字符串。当调用
     * [on]{@link dataShare.DataShareHelper.on(type: 'rdbDataChange', uris: Array<string>, templateId: TemplateId, callback: AsyncCallback<RdbDataChangeNode>)}
     * 的回调时，update参数用于更新数据。仅适用于rdb存储数据。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 18 dynamic
     * @since 23 static
     */
    update?: string;
  }
  /**
   * 订阅/取消订阅数据变更和发布数据的操作结果。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface OperationResult {
    /**
     * 指定运算结果的键。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    key: string;

    /**
     * 指定运算结果。正常情况下返回0，异常情况下返回错误码。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    result: int;
  }

  /**
   * 批量更新操作的参数结构。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface UpdateOperation {
    /**
     * 要更新的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    values: ValuesBucket;

    /**
     * 筛选条件。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * 数据变更类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi [since 12 - 19]
   * @publicapi [since 20]
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum ChangeType {
    /**
     * 表示数据添加。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    INSERT = 0,

    /**
     * 表示数据删除。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    DELETE = 1,

    /**
     * 表示数据更新。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi [since 12 - 19]
     * @publicapi [since 20]
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    UPDATE = 2
  }
  /**
   * 数据订阅类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum SubscriptionType {
    /**
     * 表示订阅指定uri路径的数据变更。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSCRIPTION_TYPE_EXACT_URI = 0
  }

  /**
   * 数据变更时通知用户具体变更的内容，包括数据变更类型、变化的uri、变更的数据内容。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface ChangeInfo {
    /**
     * 通知变更的类型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    type: ChangeType;

    /**
     * 指定uri。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * 更新的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    values: Array<ValuesBucket>;
  }

  /**
   * DataShare管理工具实例，可使用此实例访问或管理服务端的数据。在调用DataShareHelper提供的方法前，需要先通过
   * [createDataShareHelper]{@link dataShare.createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>)}
   * 构建一个实例。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataShareHelper {
    /**
     * 订阅指定URI对应数据的数据变更事件。若订阅者已注册了观察者，当有其他通知者触发了变更通知时，订阅者将会接收到callback通知。使用callback异步回调。该功能不支持跨用户订阅通知。同一应用内对单个URI的重复订阅上限
     * 为51次。
     *
     * 触发通知：非静默场景下，调用[notifyChange]{@link dataShare.DataShareHelper.notifyChange(uri: string)}方法，就会触发对指定URI订阅者的通知；或者静默场景
     * 下，使用指定URI的静默访问修改了数据，也会自动触发通知。
     *
     * @param { 'dataChange' } type - 订阅的事件/回调类型，支持的事件为'dataChange'，当数据更改时，触发该事件。
     * @param { string } uri - 表示指定的数据路径。
     * @param { AsyncCallback<void> } callback - 回调函数。当有其他用户触发了变更通知时调用，err为undefined；否则不被触发或为错误对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     */
    on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

    /**
     * 订阅指定URI对应数据的数据变更事件。若订阅者已注册了观察者，当有其他通知者触发了变更通知时，订阅者将会接收到callback通知。使用callback异步回调。
     * 该功能不支持跨用户订阅通知。同一应用内对单个URI的重复订阅上限为51次。
     *
     * @param { string } uri - 表示指定的数据路径。
     * @param { Callback<void> } callback - 回调函数。当有其他用户触发了变更通知时调用；否则不被触发或为错误对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(uri: string, callback: Callback<void>): void;

    /**
     * 取消订阅指定URI下指定callback对应的数据资源的变更通知。与订阅接口
     * [on]{@link dataShare.DataShareHelper.on(type: 'dataChange', uri: string, callback: AsyncCallback<void>)}相对应。
     *
     * @param { 'dataChange' } type - 取消订阅的事件/回调类型，支持的事件为'dataChange'。
     * @param { string } uri - 表示指定的数据路径。
     * @param { AsyncCallback<void> } callback - 表示指定取消订阅的callback通知，如果为空、为undefined、null，则取消订阅该uri下所有的通知事件。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     */
    off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

    /**
     * 取消订阅指定URI下指定callback对应的数据资源的变更通知。
     * 与订阅接口[onDataChange]{@link dataShare.DataShareHelper.onDataChange(uri: string, callback: Callback<void>)}相对应。
     *
     * @param { string } uri - 表示指定的数据路径。
     * @param { Callback<void> } [callback] - Callback to unregister. If this parameter is **undefined**, **null**,
     *     or left empty, this API unregisters all callbacks for the specified URI.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offDataChange(uri: string, callback?: Callback<void>): void;

    /**
     * 订阅指定URI对应数据的数据变更事件。若订阅者已注册变更通知，当有其他通知者触发了变更通知时，订阅者将会接收到callback通知，通知携带数据变更类型、变化的uri、变更的数据内容。使用callback回调。该功能不支持跨用
     * 户订阅通知。同一应用内对单个URI的重复订阅上限为51次。
     *
     * 触发通知：非静默场景下，调用[notifyChange]{@link dataShare.DataShareHelper.notifyChange(data: ChangeInfo)}方法，就会触发对指定URI订阅者的通知；或
     * 者静默场景下，使用指定URI的静默访问修改了数据，也会自动触发通知, 但此时callback通知中的changeInfo无效。
     *
     * @param { 'dataChange' } event - 订阅的事件/回调类型，支持的事件为'dataChange'，当有其他用户触发了变更通知时，触发该事件。
     * @param { SubscriptionType } type - 表示数据更改时按指定数据路径通知变更。
     * @param { string } uri - 表示指定的数据路径。
     * @param { AsyncCallback<ChangeInfo> } callback - 回调函数。当有其他用户触发了变更通知时会回调该函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    on(event: 'dataChange', type:SubscriptionType, uri: string, callback: AsyncCallback<ChangeInfo>): void;

    /**
     * 订阅指定URI对应数据的数据变更事件。若订阅者已注册变更通知，当有其他通知者触发了变更通知时，订阅者将会接收到callback通知，
     * 通知携带数据变更类型、变化的uri、变更的数据内容。使用callback回调。该功能不支持跨用户订阅通知。同一应用内对单个URI的重复订阅上限为51次。
     *
     * @param { SubscriptionType } type - 表示数据更改时按指定数据路径通知变更。
     * @param { string } uri - 表示指定的数据路径。
     * @param { Callback<ChangeInfo> } callback - 回调函数。当有其他用户触发了变更通知时会回调该函数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(type:SubscriptionType, uri: string, callback: Callback<ChangeInfo>): void;

    /**
     * 取消订阅指定URI下指定callback对应的数据资源的变更通知。与订阅接口
     * [on]{@link dataShare.DataShareHelper.on(event: 'dataChange', type:SubscriptionType, uri: string, callback: AsyncCallback<ChangeInfo>)}
     * 相对应。
     *
     * @param { 'dataChange' } event - 取消订阅的事件/回调类型，支持的事件为'dataChange'。
     * @param { SubscriptionType } type - 表示数据更改时按指定数据路径通知变更。
     * @param { string } uri - 表示指定的数据路径。
     * @param { AsyncCallback<ChangeInfo> } callback - 表示指定取消订阅的callback通知，如果为空、为undefined、null，则取消订阅该uri下所有的通知事件。如果不为空，
     *     传入的callback必须和注册为同一个。
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     */
    off(event: 'dataChange', type:SubscriptionType, uri: string, callback?: AsyncCallback<ChangeInfo>): void;

    /**
     * 取消订阅指定URI下指定callback对应的数据资源的变更通知。
     * 与订阅接口[onDataChange]{@link dataShare.DataShareHelper.onDataChange(type:SubscriptionType, uri: string, callback:
     * Callback<ChangeInfo>)}相对应。
     *
     * @param { SubscriptionType } type - 表示数据更改时按指定数据路径通知变更。
     * @param { string } uri - 表示指定的数据路径。
     * @param { Callback<ChangeInfo> } [callback] - Callback to unregister. If this parameter is **undefined**,
     *     **null**, or left empty, this API unregisters all callbacks for the specified URI. If this parameter is
     *     specified, the callback must be the one registered in
     *     [on('datachange')]{@link dataShare.DataShareHelper.on(event: 'dataChange', type:SubscriptionType, uri:
     *     string, callback: AsyncCallback<ChangeInfo>)}
     *     .
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offDataChange(type:SubscriptionType, uri: string, callback?: Callback<ChangeInfo>): void;

    /**
     * 添加一个指定订阅者的数据模板。仅支持静默访问。
     *
     * 静默场景下，调用此接口时，传入的uri、subscriberId和template参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要插入的数据的路径。
     * @param { string } subscriberId - 要添加模板的订阅者ID，每个订阅者的ID是唯一的。
     * @param { Template } template - 要添加的数据模板。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700011 - The URI is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    addTemplate(uri: string, subscriberId: string, template: Template): void;

    /**
     * 删除一个指定订阅者的数据模板。仅支持静默访问。
     *
     * 静默场景下，调用此接口时，传入的uri和subscriberId参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要删除的数据的路径。
     * @param { string } subscriberId - 订阅者ID，每个订阅者的ID是唯一的。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700011 - The URI is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    delTemplate(uri: string, subscriberId: string): void;

    /**
     * 订阅指定URI和模板对应的数据变更事件。仅支持静默访问。该功能不支持跨用户订阅通知。
     *
     * @param { 'rdbDataChange' } type - 订阅的事件类型，支持的事件为'rdbDataChange'，表示rdb数据的变更事件。type是固定值以外时，接口无响应。
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { TemplateId } templateId - 处理回调的templateId。
     * @param { AsyncCallback<RdbDataChangeNode> } callback - 回调函数。当触发变更通知时调用，err为undefined，node为订阅数据变更结果；否则不被触发或为错误对象。
     * @returns { Array<OperationResult> } 返回操作结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    on(
       type: 'rdbDataChange',
       uris: Array<string>,
       templateId: TemplateId,
       callback: AsyncCallback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 订阅指定URI和模板对应的数据变更事件。仅支持静默访问。该功能不支持跨用户订阅通知。
     *
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { TemplateId } templateId - 处理回调的templateId。
     * @param { Callback<RdbDataChangeNode> } callback - 回调函数。当触发变更通知时调用，err为undefined，node为订阅数据变更结果；否则不被触发或为错误对象。
     * @returns { Array<OperationResult> } 返回操作结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onRdbDataChange(
       uris: Array<string>,
       templateId: TemplateId,
       callback: Callback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 取消订阅指定URI和模板对应的数据变更事件。仅支持静默访问。
     *
     * @param { 'rdbDataChange' } type - 取消订阅的事件类型，支持的事件为'rdbDataChange'，表示rdb数据的变更事件。
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { TemplateId } templateId - 处理回调的templateId。
     * @param { AsyncCallback<RdbDataChangeNode> } callback - 回调函数。表示指定取消订阅的callback通知，如果为空、为undefined、null，则取消订阅该uri下所有
     *     的通知事件。
     * @returns { Array<OperationResult> } 返回操作结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    off(
       type: 'rdbDataChange',
       uris: Array<string>,
       templateId: TemplateId,
       callback?: AsyncCallback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 取消订阅指定URI和模板对应的数据变更事件。仅支持静默访问。
     *
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { TemplateId } templateId - 处理回调的templateId。
     * @param { Callback<RdbDataChangeNode> } [callback] - Callback to unregister. If this parameter is **undefined**
     *     , **null**, or left empty, this API unregisters all callbacks for the specified URI.
     * @returns { Array<OperationResult> } : The operation result.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offRdbDataChange(
       uris: Array<string>,
       templateId: TemplateId,
       callback?: Callback<RdbDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 订阅已发布数据的数据变更通知。仅支持静默访问。该功能不支持跨用户订阅通知。
     *
     * @param { 'publishedDataChange' } type - 订阅的事件类型，支持的事件为'publishedDataChange'，表示已发布数据的变更事件。
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { string } subscriberId - 指定处理回调的用户ID。
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - 回调函数。当触发变更通知时调用，err为undefined，node为订阅数据变更结果；否则不被触发或为
     *     错误对象。
     * @returns { Array<OperationResult> } 返回操作结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    on(
       type: 'publishedDataChange',
       uris: Array<string>,
       subscriberId: string,
       callback: AsyncCallback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 订阅已发布数据的数据变更通知。仅支持静默访问。该功能不支持跨用户订阅通知。
     *
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { string } subscriberId - 指定处理回调的用户ID。
     * @param { Callback<PublishedDataChangeNode> } callback - 回调函数。当触发变更通知时调用，err为undefined，
     *     node为订阅数据变更结果；否则不被触发或为错误对象。
     * @returns { Array<OperationResult> } 返回操作结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onPublishedDataChange(
       uris: Array<string>,
       subscriberId: string,
       callback: Callback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 取消订阅已发布数据的数据变更通知。仅支持静默访问。
     *
     * @param { 'publishedDataChange' } type - 取消订阅的事件类型，支持的事件为'publishedDataChange'，表示已发布数据的变更事件。
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { string } subscriberId - 指定处理回调的用户ID。
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - 回调函数。表示指定取消订阅的callback通知，如果为空、为undefined、null，则取消订阅该
     *     uri下所有的通知事件。
     * @returns { Array<OperationResult> } 返回操作结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     */
    off(
       type: 'publishedDataChange',
       uris: Array<string>,
       subscriberId: string,
       callback?: AsyncCallback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 取消订阅已发布数据的数据变更通知。仅支持静默访问。
     *
     * @param { Array<string> } uris - 要操作的数据的路径。
     * @param { string } subscriberId - 指定处理回调的用户ID。
     * @param { Callback<PublishedDataChangeNode> } [callback] - Callback to unregister. If this parameter is
     *     **undefined**, **null**, or left empty, this API unregisters all callbacks for the specified URI.
     * @returns { Array<OperationResult> } 返回操作结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offPublishedDataChange(
       uris: Array<string>,
       subscriberId: string,
       callback?: Callback<PublishedDataChangeNode>
     ): Array<OperationResult>;

    /**
     * 发布数据，将数据更新至数据库。需传入要发布的数据版本，当传入版本号高于当前数据库记录的版本时成功。仅支持静默访问。使用callback异步回调。
     *
     * 静默场景下，调用此接口时，传入的data和bundleName参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { Array<PublishedItem> } data - 要发布的数据。
     * @param { string } bundleName - 表示要发布数据所属的APP，对发布的私有数据生效，仅该app可以读取数据。
     * @param { int } version - 要发布的数据版本，越大表示数据版本越新。如果发布的版本号小于数据库中的记录，则更新失败。
     * @param { AsyncCallback<Array<OperationResult>> } callback - 回调函数。当发布数据时调用，err为undefined，result为发布数据结果；否则不被触发或为错误对
     *     象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    publish(
       data: Array<PublishedItem>,
       bundleName: string,
       version: int,
       callback: AsyncCallback<Array<OperationResult>>
     ): void;

    /**
     * 发布数据，将数据更新至数据库。仅支持静默访问。使用callback异步回调。
     *
     * 静默场景下，调用此接口时，传入的data和bundleName参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { Array<PublishedItem> } data - 要发布的数据。
     * @param { string } bundleName - 表示要发布数据所属的APP，对发布的私有数据生效，仅该app可以读取数据。
     * @param { AsyncCallback<Array<OperationResult>> } callback - 回调函数。当发布数据时调用，err为undefined，result为发布数据结果；否则不被触发或为错误对
     *     象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    publish(
       data: Array<PublishedItem>,
       bundleName: string,
       callback: AsyncCallback<Array<OperationResult>>
     ): void;

    /**
     * 发布数据，将数据更新至数据库。可以选择传入要发布的数据版本，当传入版本号高于当前数据库记录的版本时成功。仅支持静默访问。使用Promise异步回调。
     *
     * 静默场景下，调用此接口时，传入的data和bundleName参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { Array<PublishedItem> } data - 要发布的数据。
     * @param { string } bundleName - 表示要发布数据所属的APP，对发布的私有数据生效，仅该app可以读取数据。
     * @param { int } version - 要发布的数据版本，越大表示数据版本越新。如果发布的版本号小于数据库中的记录，则更新失败。 如果不检查要发布的数据版本，则不填。
     * @returns { Promise<Array<OperationResult>> } 发布数据结果。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area is not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    publish(data: Array<PublishedItem>, bundleName: string, version?: int): Promise<Array<OperationResult>>;

    /**
     * 获取给定的APP和模板指定的数据。仅支持静默访问。使用callback异步回调。
     *
     * 静默场景下，调用此接口时，传入的bundleName参数的大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } bundleName - 表示数据所属的APP。
     * @param { AsyncCallback<Array<PublishedItem>> } callback - 回调函数，返回给定的APP和模板发布的数据。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area does not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    getPublishedData(bundleName: string, callback: AsyncCallback<Array<PublishedItem>>): void;

    /**
     * 获取给定的APP和模板指定的数据。仅支持静默访问。使用Promise异步回调。
     *
     * 静默场景下，调用此接口时，传入的bundleName参数的大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } bundleName - 表示数据所属的APP。
     * @returns { Promise<Array<PublishedItem>> } Promise对象，返回给定的APP和模板发布的数据。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700012 - The data area does not exist.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    getPublishedData(bundleName: string): Promise<Array<PublishedItem>>;

    /**
     * 将单条数据插入数据库。使用callback异步回调。
     *
     * 非静默场景下，调用此接口时，传入的uri和value参数的总大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri和value参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要插入的数据的路径。
     * @param { ValuesBucket } value - 要插入的数据的值。
     * @param { AsyncCallback<int> } callback - 回调函数。当将单条数据插入数据库成功，err为undefined，data为获取到的插入数据记录的索引；否则为错误对象。<br />因部分数据库
     *     （如KVDB）的相应接口并不支持返回索引，故若服务端使用了不支持索引的数据库，则此callback也无法返回索引值。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    insert(uri: string, value: ValuesBucket, callback: AsyncCallback<int>): void;

    /**
     * 将单条数据插入数据库。使用Promise异步回调。
     *
     * 非静默场景下，调用此接口时，传入的uri和value参数的总大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri和value参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要插入的数据的路径。
     * @param { ValuesBucket } value - 要插入的数据的值。
     * @returns { Promise<int> } Promise对象。返回插入数据记录的索引。<br />因部分数据库（如KVDB）的相应接口并不支持返回索引，故若服务端使用了不支持索引的数据库，则此Promise也无法返回
     *     索引值。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    insert(uri: string, value: ValuesBucket): Promise<int>;

    /**
     * 从数据库中删除一条或多条数据记录。使用callback异步回调。
     *
     * 非静默场景下，调用此接口时，传入的uri和predicates参数的总大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri和predicates参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要删除的数据的路径。
     * @param { dataSharePredicates.DataSharePredicates } predicates - 筛选条件。<br />delete接口所支持的谓词方法取决于服务端所选用的数据库，如KVDB的删除
     *     目前仅支持inKeys谓词。静默场景下谓词内方法为空时，默认全表删除。非静默场景下规格由数据提供方制定。
     * @param { AsyncCallback<int> } callback - 回调函数。当从数据库中删除一条或多条数据记录成功，err为undefined，data为获取到的已删除的数据记录数；否则为错误对象。<br />
     *     因部分数据库（如KVDB）的相应接口并不提供相应支持，故若服务端使用此数据库，则此callback也无法返回删除的数据记录数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    delete(uri: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<int>): void;

    /**
     * 从数据库中删除一条或多条数据记录。使用Promise异步回调。
     *
     * 非静默场景下，调用此接口时，传入的uri和predicates参数的总大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri和predicates参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要删除的数据的路径。
     * @param { dataSharePredicates.DataSharePredicates } predicates - 筛选条件。<br />delete接口所支持的谓词方法取决于服务端所选用的数据库，如KVDB的删除
     *     目前仅支持inKeys谓词。静默场景下谓词内方法为空时，默认全表删除。非静默场景下规格由数据提供方制定。
     * @returns { Promise<int> } Promise对象。返回已删除的数据记录数。<br />因部分数据库（如KVDB）的相应接口并不提供相应支持，故若服务端使用此数据库，则此Promise也无法返回删除的数据记
     *     录数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    delete(uri: string, predicates: dataSharePredicates.DataSharePredicates): Promise<int>;

    /**
     * 查询数据库中的数据。使用callback异步回调。
     *
     * 非静默场景下，调用此接口时，传入的predicates参数的大小不能超过128MB，传入的uri和columns参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri、predicates和columns参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * 使用此接口查询数据库数据时，如查询内容达到资源上限，操作将失败并返回错误，用户可根据场景考虑重试。有关于资源上限的详细说明，请参见
     * [通过数据管理服务实现数据共享静默访问](docroot://database/share-data-by-silent-access-sys.md#约束与限制)和
     * [通过DataShareExtensionAbility实现数据共享](docroot://database/share-data-by-datashareextensionability-sys.md#约束与限制)。
     *
     * @param { string } uri - 要查询的数据的路径。
     * @param { dataSharePredicates.DataSharePredicates } predicates - 筛选条件。<br />query接口所支持的谓词方法取决于服务端所选用的数据库，如KVDB目前仅支
     *     持inKeys和prefixKey。静默场景下谓词内方法为空时，默认全表查询。非静默场景下规格由数据提供方制定。
     * @param { Array<string> } columns - 要查询的列。如果此参数为空，则查询所有列。
     * @param { AsyncCallback<DataShareResultSet> } callback - 回调函数。当查询数据库中的数据成功，err为undefined，data为获取到的查询到的结果集；否则为错误对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    query(
       uri: string,
       predicates: dataSharePredicates.DataSharePredicates,
       columns: Array<string>,
       callback: AsyncCallback<DataShareResultSet>
     ): void;

    /**
     * 查询数据库中的数据。使用Promise异步回调。
     *
     * 非静默场景下，调用此接口时，传入的predicates参数的大小不能超过128MB，传入的uri和columns参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri、predicates和columns参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * 使用此接口查询数据库数据时，如查询内容达到资源上限，操作将失败并返回错误，用户可根据场景考虑重试。有关于资源上限的详细说明，请参见
     * [通过数据管理服务实现数据共享静默访问](docroot://database/share-data-by-silent-access-sys.md#约束与限制)和
     * [通过DataShareExtensionAbility实现数据共享](docroot://database/share-data-by-datashareextensionability-sys.md#约束与限制)。
     *
     * @param { string } uri - 要查询的数据的路径。
     * @param { dataSharePredicates.DataSharePredicates } predicates - 筛选条件。<br />query接口所支持的谓词方法取决于服务端所选用的数据库，如KVDB目前仅支
     *     持inKeys和prefixKey。静默场景下谓词内方法为空时，默认全表查询。非静默场景下规格由数据提供方制定。
     * @param { Array<string> } columns - 要查询的列。如果此参数为空，则查询所有列。
     * @returns { Promise<DataShareResultSet> } Promise对象。返回查询到的结果集。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    query(
       uri: string,
       predicates: dataSharePredicates.DataSharePredicates,
       columns: Array<string>
     ): Promise<DataShareResultSet>;

    /**
     * 更新数据库中的数据记录。使用callback异步回调。
     *
     * 非静默场景下，调用此接口时，传入的uri、predicates和value参数的总大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri、predicates和value参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要更新的数据的路径。
     * @param { dataSharePredicates.DataSharePredicates } predicates - 筛选条件。<br />update接口是否支持谓词筛选条件取决于服务端所选用的数据库，如KVDB目
     *     前并不支持谓词筛选条件，仅RDB支持。静默场景下谓词内方法为空时，默认全表更新。非静默场景下规格由数据提供方制定。
     * @param { ValuesBucket } value - 要更新的数据的值。
     * @param { AsyncCallback<int> } callback - 回调函数。当更新数据库中的数据记录成功，err为undefined，data为获取到的更新的数据记录数；否则为错误对象。<br />因部分数据库
     *     （如KVDB）的相应接口并不提供相应支持，故若服务端使用此数据库，则此callback也无法返回更新的数据记录数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    update(
       uri: string,
       predicates: dataSharePredicates.DataSharePredicates,
       value: ValuesBucket,
       callback: AsyncCallback<int>
     ): void;

    /**
     * 更新数据库中的数据记录。使用Promise异步回调。
     *
     * 非静默场景下，调用此接口时，传入的uri、predicates和value参数的总大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * 静默场景下，调用此接口时，传入的uri、predicates和value参数的总大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要更新的数据的路径。
     * @param { dataSharePredicates.DataSharePredicates } predicates - 筛选条件。<br />update接口是否支持谓词筛选条件取决于服务端所选用的数据库，如KVDB目
     *     前并不支持谓词筛选条件，仅RDB支持。静默场景下谓词内方法为空时，默认全表更新。非静默场景下规格由数据提供方制定。
     * @param { ValuesBucket } value - 要更新的数据的值。
     * @returns { Promise<int> } Promise对象。返回更新的数据记录数。<br />因部分数据库（如KVDB）的相应接口并不提供相应支持，故若服务端使用此数据库，则此Promise也无法返回更新的数据记录
     *     数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    update(uri: string, predicates: dataSharePredicates.DataSharePredicates, value: ValuesBucket): Promise<int>;

    /**
     * 批量更新数据库中的数据记录，所有操作的总数(即operations对象的键值对)不得超过4000个，超出限制将导致更新失败；该接口的事务性取决于provider（数据提供方）。使用Promise异步回调。暂不支持静默访问。
     *
     * 非静默场景下，调用此接口时，传入的operations参数的大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { Record<string, Array<UpdateOperation>> } operations - 要更新数据的路径、筛选条件和数据集合。
     * @returns {Promise<Record<string, Array<int>>>} Promise used to return an array of updated data records. The value
     *     **-1** means the update operation fails.
     *     The number of updated data records is not returned if the APIs of the database in use
     *     (for example, KVDB) do not support this return.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: 1.The internal status is abnormal;
     *     2.The interface is incorrectly used; 3.Permission configuration error; 4.A system error.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    batchUpdate(operations: Record<string, Array<UpdateOperation>>): Promise<Record<string, Array<int>>>;

    /**
     * 将批量数据插入数据库。使用callback异步回调。暂不支持静默访问。
     *
     * 非静默场景下，调用此接口时，传入的values参数的大小不能超过128MB，传入的uri参数大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要插入的数据的路径。
     * @param { Array<ValuesBucket> } values - 要插入的数据。
     * @param { AsyncCallback<int> } callback - 回调函数。当将批量数据插入数据库成功，err为undefined，data为获取到的插入的数据记录数；否则为错误对象。<br />因部分数据库（
     *     如KVDB）的相应接口并不提供相应支持，故若服务端使用此数据库，则此Promise也无法返回插入的数据记录数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    batchInsert(uri: string, values: Array<ValuesBucket>, callback: AsyncCallback<int>): void;

    /**
     * 将批量数据插入数据库。使用Promise异步回调。暂不支持静默访问。
     *
     * 非静默场景下，调用此接口时，传入的values参数的大小不能超过128MB，传入的uri参数大小不能超过900KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 要插入的数据的路径。
     * @param { Array<ValuesBucket> } values - 要插入的数据。
     * @returns { Promise<int> } Promise对象。返回插入的数据记录数。<br />因部分数据库（如KVDB）的相应接口并不提供相应支持，故若服务端使用此数据库，则此Promise也无法返回插入的数据记录
     *     数。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    batchInsert(uri: string, values: Array<ValuesBucket>): Promise<int>;

    /**
     * 将给定的DataShare URI转换为规范化URI，规范化URI可供跨设备使用，DataShare  URI仅供本地环境中使用。使用callback异步回调。暂不支持静默访问。
     *
     * @param { string } uri - 要规范化的[URI]{@link @ohos.uri:uri.URI}。
     * @param { AsyncCallback<string> } callback - 回调函数。当将给定的DataShare URI转换为规范化URI成功，err为undefined，data为获取到的规范化URI（如果支持
     *     URI规范化，则返回规范化URI，否则返回空）；否则为错误对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    normalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * 将给定的DataShare URI转换为规范化URI，规范化URI可供跨设备使用，DataShare  URI仅供本地环境中使用。使用Promise异步回调。暂不支持静默访问。
     *
     * @param { string } uri - 要规范化的[URI]{@link @ohos.uri:uri.URI}。
     * @returns { Promise<string> } Promise对象。如果支持URI规范化，则返回规范化URI，否则返回空。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    normalizeUri(uri: string): Promise<string>;

    /**
     * 将指定的URI转换为非规范化URI。使用callback异步回调。暂不支持静默访问。
     *
     * @param { string } uri - 要反规范化的[URI]{@link @ohos.uri:uri.URI}。
     * @param { AsyncCallback<string> } callback - 回调函数。当将指定的URI转换为非规范化URI，err为undefined，data为获取到的反规范化URI（如果反规范化成功，则返回反规
     *     范化的URI；如果无需进行反规范化，则返回原始URI；若不支持则返回空）；否则为错误对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    denormalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * 将指定的URI转换为非规范化URI。使用Promise异步回调。暂不支持静默访问。
     *
     * @param { string } uri - 要反规范化的[URI]{@link @ohos.uri:uri.URI}。
     * @returns { Promise<string> } Promise对象。如果反规范化成功，则返回反规范化的URI；如果无需执行任何操作，则返回原始URI；若不支持则返回空。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    denormalizeUri(uri: string): Promise<string>;

    /**
     * 通知已注册的观察者指定URI对应的数据资源已发生变更。使用callback异步回调。暂不支持静默访问。
     *
     * 非静默场景下，调用此接口时，传入的uri参数大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 表示指定的数据路径。
     * @param { AsyncCallback<void> } callback - 回调函数。当通知已注册的观察者指定URI对应的数据资源已发生变更成功，err为undefined；否则为错误对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Mandatory parameters are left unspecified. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    notifyChange(uri: string, callback: AsyncCallback<void>): void;

    /**
     * 通知已注册的观察者指定URI对应的数据资源已发生变更。使用Promise异步回调。暂不支持静默访问。
     *
     * 非静默场景下，调用此接口时，传入的uri参数大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { string } uri - 表示指定的数据路径。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 12]
     * @throws { BusinessError } 401 - Parameter error.Mandatory parameters are left unspecified. [since 12]
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    notifyChange(uri: string): Promise<void>;

    /**
     * 通知已注册的观察者指定URI对应的数据资源已发生变更类型及变更内容。使用Promise异步回调。暂不支持静默访问。
     *
     * 非静默场景下，调用此接口时，传入的data参数大小不能超过200KB，超出限制将导致操作失败或抛出异常。
     *
     * @param { ChangeInfo } data - 表示数据变更类型、变化的uri、变更的数据内容。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    notifyChange(data: ChangeInfo): Promise<void>;

    /**
     * 关闭DataShareHelper实例，调用后该实例失效。使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system
     *     API. [since 19]
     * @throws { BusinessError } 15700000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    close(): Promise<void>;
  }

  /**
   * 创建DataProxyHandle实例。使用Promise异步回调。
   *
   * @returns { Promise<DataProxyHandle> } Promise对象。返回DataProxyHandle实例。
   * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
   *     restarted abnormally.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createDataProxyHandle(): Promise<DataProxyHandle>;

  /**
   * 共享配置的数据结构。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ProxyData {
    /**
     * 共享配置的全局唯一标识。固定格式为`"datashareproxy://{bundleName}/{path}"`，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用内不允许重复。字
     * 符串长度不超过256个字节。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 共享配置的值。不填则为空字符串。
     * **说明：**
     * 1. API版本26.0.0之前，字符串长度不超过4096个字节；从API版本26.0.0开始，默认允许的字符串最大长度为4096字节，可以在
     * [DataProxyConfig]{@link dataShare.DataProxyConfig}中配置maxValueLength将最大长度扩展到102400字节。
     * 2. 当首次发布共享配置时，如果未填写，将默认设置为空字符串。在更新共享配置时，如果未填写，共享配置的值将不会被更新。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value?: ValueType;

    /**
     * 允许订阅和读取共享配置的应用程序列表。不填则为空的字符串数组。数组最大长度为256，超过256的部分不生效。当首次发布共享配置时，如果未填写，将默认为空的允许列表。在更新共享配置时，如果未填写，共享配置的允许列表将不会被更新。
     * 一个空的允许列表表示只有发布者能够访问该共享配置。
     * API版本26.0.0之前，数组中每个元素为应用的[appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)
     * ，单个appIdentifier最大长度128字节，超过128字节的appIdentifier不会生效。
     * 从API版本26.0.0开始，数组支持配置特殊字符串"all"（区分大小写）表示允许所有应用访问。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    allowList?: string[];

    /**
     * 表示是否是多值类型的共享配置，默认为false，表示非多值类型。如果为true，则表示本次发布的数据是多值类型，则 [value]{@link ProxyData#value} 参数将被忽略。
     * 默认值： false。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isMultiValues?: boolean;

    /**
     * 多值类型取值。**Record**中的第一个参数为key，key由用户指定，必须唯一。第二个参数为key对应的value。单个应用在单个URI下最多支持添加10个value，每个value最大长度为4096字节。同时，所有va
     * lue的总长度受参数值[maxValueLength]{@link DataProxyConfig#maxValueLength}]限制。该参数仅在[isMultiValues]{@link
     * ProxyData#isMultiValues}}设置为true时生效。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    values?: Record<int, ValueType>;

    /**
     * 可对多值类型共享配置进行赋值的App列表。数组最大长度为256个元素，超出部分无效。
     * 数组中每个元素为某个应用的[appIdentifier]（docroot://quick-start/common-problem-of-application.md#什么是appIdentifier）)。
     * appIdentifier最大长度为128字节，超过128字节的部分不生效。若首次发布共享配置时未设置该参数，则默认赋值列表为空。若更新共享配置时未设置该参数，
     * 则赋值列表不会更新。赋值列表为空表示仅发布者可以对共享配置进行赋值。
     * 该数组支持特殊字符串"all"（区分大小写），表示允许所有应用对共享配置进行赋值。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    trustProviders?: string[];
  }

  /**
   * 通知订阅者共享配置变更的数据结构。包括数据变更类型、变化的URI、变更的数据内容。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyChangeInfo {
    /**
     * 通知变更的类型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    type: ChangeType;

    /**
     * 通知变更指定URI。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 更新的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value: ValueType;

    /**
     * 多值类型的变更数据。如果变更的数据类型不是多值类型，则**values**值为undefined。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    values?: ValueType[];
  }

  /**
   * 配置共享批量操作返回值的状态码枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum DataProxyErrorCode {
    /**
     * 表示操作成功。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * URI不存在或取消订阅一个未订阅过的URI。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    URI_NOT_EXIST = 1,

    /**
     * 没有权限在该URI上执行此操作。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    NO_PERMISSION = 2,

    /**
     * API版本26.0.0之前，表示当前应用发布的配置超过32个配置的上限；从API版本26.0.0开始，表示当前应用发布的配置超过64个配置的上限或获取的共享配置项的值超出
     * [DataProxyConfig]{@link dataShare.DataProxyConfig}中maxValueLength字段配置的最大长度限制。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    OVER_LIMIT = 3
  }

  /**
   * 配置共享批量操作结果的数据结构。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyResult {
    /**
     * 被操作的URI。固定格式为`"datashareproxy://{bundleName}/{path}"`，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用内不允许重复，字符串长度
     * 不超过256个字节。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 操作结果的错误码。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    result: DataProxyErrorCode;
  }

  /**
   * 配置共享批量获取操作结果的数据结构。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyGetResult {
    /**
     * 被操作的URI。固定格式为`"datashareproxy://{bundleName}/{path}"`，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用内不允许重复，字符串长度
     * 不超过256个字节。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 操作结果的错误码。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    result: DataProxyErrorCode;

    /**
     * 如果获取操作成功，则为共享配置的值；如果获取操作失败，则未定义。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value: ValueType | undefined;

    /**
     * 如果获取操作成功，则为共享配置的允许列表；如果获取操作失败，则未定义。只有发布者才能获取允许列表，其他应用只能获取值。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    allowList: string[] | undefined;
  }

  /**
   * 数据代理类型的枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum DataProxyType {
    /**
     * 表示应用之间的共享配置。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SHARED_CONFIG = 0
  }

  /**
   * [共享配置]{@link dataShare.ProxyData}的值允许的最大长度的枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DataProxyMaxValueLength {
    /**
     * 表示共享配置的值允许的最大长度为4096字节。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MAX_LENGTH_4K = 4096,

    /**
     * 表示共享配置的值允许的最大长度为102400字节。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MAX_LENGTH_100K = 102400
  }

  /**
   * 数据代理操作配置的数据结构。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyConfig {
    /**
     * 数据代理操作的类型。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    type: DataProxyType;

    /**
     * 设置共享配置的值允许的最大长度。如果未填写，默认为MAX_LENGTH_4K，即共享配置的值允许的最大长度为4096字节。
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxValueLength?: DataProxyMaxValueLength;
  }

  /**
   * 数据代理操作句柄的实例，可使用此实例访问或管理共享配置信息。在调用DataProxyHandle提供的方法前，需要先通过
   * [createDataProxyHandle]{@link dataShare.createDataProxyHandle}构建一个实例。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyHandle {
    /**
     * 订阅指定URI对应共享配置变更事件。若订阅者已注册变更通知，当配置发布方修改配置时，订阅者将会接收到callback通知，通知携带数据变更类型、变化的URI、变更的共享配置内容。使用callback异步回调。该功能不允许跨用户
     * 订阅通知，不允许订阅未发布的配置。订阅成功后若权限被收回，则后续不再通知订阅者。
     *
     * 触发通知：配置发布方调用[publish]{@link dataShare.DataProxyHandle.publish}、
     * [delete]{@link dataShare.DataProxyHandle.delete(uris: string[], config: DataProxyConfig)}、
     * [delete]{@link dataShare.DataProxyHandle.delete(uris: string[], config: DataProxyConfig)}接口发布、删除指定配置或者删除所有配置时会自动触
     * 发通知。
     *
     * @param { 'dataChange' } event - 订阅的事件/回调类型，支持的事件为'dataChange'，当配置发布方修改配置时，触发该事件。
     * @param { string[] } uris - 表示要订阅的共享配置对应的URI数组。**说明：** 1. API版本26.0.0之前，数组最大长度为32；从API版本26.0.0开始，数组最大长度为
     *     64。2. URI固定格式为`"datashareproxy://{bundleName}/{path}"`，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用内不
     *     允许重复，字符串长度不超过256个字节。
     * @param { DataProxyConfig } config - 表示数据代理操作的配置。从API版本26.0.0开始，当变更的共享配置内容长度超过
     *     [DataProxyConfig]{@link dataShare.DataProxyConfig}中maxValueLength字段配置的最大长度限制时，该共享配置内容会被截断。
     * @param { AsyncCallback<DataProxyChangeInfo[]> } callback - 回调函数。当配置发布方修改配置时会回调该函数。
     * @returns { DataProxyResult[] } 批量操作的结果数组。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     */
    on(
      event: 'dataChange',
      uris: string[],
      config: DataProxyConfig,
      callback: AsyncCallback<DataProxyChangeInfo[]>
    ): DataProxyResult[];

    /**
     * Registers observers to observe proxy data change specified by the given URIs.
     *
     * @param { string[] } uris - Indicates the uris of the data to operate.
     * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
     * @param { Callback<DataProxyChangeInfo[]> } callback - The callback function when data changes.
     * @returns { DataProxyResult[] } : The operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(
      uris: string[],
      config: DataProxyConfig,
      callback: Callback<DataProxyChangeInfo[]>
    ): DataProxyResult[];

    /**
     * 取消订阅指定URI对应代理数据变更事件。
     *
     * @param { 'dataChange' } event - 订阅的事件/回调类型，支持的事件为'dataChange'。
     * @param { string[] } uris - 表示要取消订阅的共享配置对应的URI数组。**说明：** 1. API版本26.0.0之前，数组最大长度为32；从API版本26.0.0开始，数组最大长
     *     度为64。2. URI固定格式为`"datashareproxy://{bundleName}/{path}"`，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用
     *     内不允许重复，字符串长度不超过256个字节。
     * @param { DataProxyConfig } config - 表示数据代理操作的配置。
     * @param { AsyncCallback<DataProxyChangeInfo[]> } [callback] - 回调函数。表示指定取消订阅的callback通知，如果为空、undefined或null，则取消订阅这些
     *     URI下所有的通知事件。
     * @returns { DataProxyResult[] } 批量操作的结果数组。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     */
    off(
      event: 'dataChange',
      uris: string[],
      config: DataProxyConfig,
      callback?: AsyncCallback<DataProxyChangeInfo[]>
    ): DataProxyResult[];

    /**
     * Deregisters observers to observe proxy data change specified by the given URIs.
     *
     * @param { string[] } uris - Indicates the uris of the data to operate.
     * @param { DataProxyConfig } config - Indicates the configuration of the data proxy operation.
     * @param { Callback<DataProxyChangeInfo[]> } [callback] - The callback function when data changes.
     * @returns { DataProxyResult[] } : The operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 23 static
     */
    offDataChange(
      uris: string[],
      config: DataProxyConfig,
      callback?: Callback<DataProxyChangeInfo[]>
    ): DataProxyResult[];

    /**
     * 发布共享配置项。使用Promise异步回调。发布后，发布者和允许列表中指定的应用可以访问该共享配置项。如果要发布的URI已经存在，则更新对应的共享配置项。如果发布的配置项中存在任一URI的长度超出上限或者格式校验失败，则当前发
     * 布操作失败。只有发布者才允许更新共享配置项。API版本26.0.0之前，每个应用支持最多32个共享配置；从API版本26.0.0开始，每个应用支持最多64个共享配置。
     *
     * @param { ProxyData[] } data - 表示需要创建或者更新的共享配置项数组。API版本26.0.0之前，数组最大长度为32；从API版本26.0.0开始，数组最大长度为64。
     * @param { DataProxyConfig } config - 表示数据代理操作的配置。从API版本26.0.0开始，如果发布的配置项中存在任一值的长度超过
     *     [DataProxyConfig]{@link dataShare.DataProxyConfig}中maxValueLength字段配置的最大长度限制，则当前发布操作失败。
     * @returns { Promise<DataProxyResult[]> } Promise对象。返回批量操作的结果数组。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    publish(data: ProxyData[], config: DataProxyConfig): Promise<DataProxyResult[]>;

    /**
     * 根据URI删除指定的共享配置项。使用Promise异步回调。只有配置发布方能删除共享配置项。
     *
     * @param { string[] } uris - 表示需要删除的共享配置对应的URI数组。**说明：** 1. API版本26.0.0之前，数组最大长度为32；从API版本26.0.0开始，数组最大长度
     *     为64。2. URI固定格式为`"datashareproxy://{bundleName}/{path}"`，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用内
     *     不允许重复，字符串长度不超过256个字节。
     * @param { DataProxyConfig } config - 表示数据代理操作的配置。
     * @returns { Promise<DataProxyResult[]> } Promise对象。返回批量操作的结果数组。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    delete(uris: string[], config: DataProxyConfig): Promise<DataProxyResult[]>;

    /**
     * 删除当前发布者发布的所有共享配置项。使用Promise异步回调。只有配置发布方能删除共享配置项。
     *
     * @param { DataProxyConfig } config - 表示数据代理操作的配置。
     * @returns { Promise<DataProxyResult[]> } Promise对象。返回批量操作的结果数组。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is
     *     being restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    deleteMyPublishedData(config: DataProxyConfig): Promise<DataProxyResult[]>;

    /**
     * 根据URI获取指定的共享配置项。使用Promise异步回调。只有发布者和允许列表中指定的应用可以访问该共享配置项。
     *
     * @param { string[] } uris - 表示需要获取的共享配置的URI数组。**说明：** 1. API版本26.0.0之前，数组最大长度为32；从API版本26.0.0开始，数组最大长度为6
     *     4。2. URI固定格式为`"datashareproxy://{bundleName}/{path}"`，其中bundleName为配置发布方应用的bundleName，path可随意填写，但同一应用内不允
     *     许重复，字符串长度不超过256个字节。
     * @param { DataProxyConfig } config - 表示数据代理操作的配置。从API版本26.0.0开始，获取的共享配置项的值长度不能超出
     *     [DataProxyConfig]{@link dataShare.DataProxyConfig}中maxValueLength字段配置的最大长度限制。超出限制时，对应获取操作结果的返回值状态码
     *     [DataProxyErrorCode]{@link dataShare.DataProxyErrorCode}为OVER_LIMIT。
     * @returns { Promise<DataProxyGetResult[]> } Promise对象。返回批量获取操作的结果数组。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    get(uris: string[], config: DataProxyConfig): Promise<DataProxyGetResult[]>;

    /**
     * 将一个值写入到已发布的数据中。该操作仅支持对多值类型数据执行。若传入的**key**不存在，则添加新的值；若传入的**key**已存在，则更新该key对应的值。默认情况下，单条数据（即URI）在单次应用中最多可添加10个值，每
     * 个值
     * 最大长度为4096字节。同时，单条数据（即一个URI）在单次应用中所有值总长度受限于数据发布时指定的**maxValueLength**参数值。请注意，该API中**maxValueLength**参数不生效。该API使用Pr
     * omise异步回调。
     *
     * @param { string } uri - 表示要操作的数据所对应的URI。
     * @param { int } key - 添加的值所对应的Key，对同一个应用来说是唯一的。
     *     <br>取值范围为全体整数。
     * @param { ValueType } value - 待添加的值。
     * @param { DataProxyConfig } config - 数据代理操作的配置。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is
     *     being restarted abnormally.
     * @throws { BusinessError } 15700011 - The URI does not exist.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @throws { BusinessError } 15700015 - No permission to access the data specified by the URI.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    putValue(uri: string, key: int, value: ValueType, config: DataProxyConfig): Promise<void>;

    /**
     * 移除键对应的值。该操作仅能对多值类型数据执行。仅能移除本应用添加过的值。使用Promise异步回调。
     *
     * @param { string } uri - 表示要操作的数据所对应的URI。
     * @param { int } key - 添加的值所对应的key。
     *     <br>取值范围为全体整数。
     * @param { DataProxyConfig } config - 数据代理操作的配置。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is
     *     being restarted abnormally.
     * @throws { BusinessError } 15700011 - The URI does not exist.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @throws { BusinessError } 15700015 - No permission to access the data specified by the URI.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removeValue(uri: string, key: int, config: DataProxyConfig): Promise<void>;

    /**
     * 获取指定 URI 下的所有多值类型数据。只有发布者和位于 [allowList]{@link dataShare.ProxyData#allowList} 中的应用程序才能获取此数据。该 API 使用 Promise
     * 异步回调。
     *
     * @param { string } uri - 表示要操作的数据所对应的URI。
     * @param { DataProxyConfig } config - 数据代理操作的配置。
     * @returns { Promise<ValueType[]> } Promise对象，用于返回URI下所有值的数组。
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is
     *     being restarted abnormally.
     * @throws { BusinessError } 15700011 - The URI does not exist.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @throws { BusinessError } 15700015 - No permission to access the data specified by the URI.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getValues(uri: string, config: DataProxyConfig): Promise<ValueType[]>;
  }
}

export default dataShare;