/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import Context from './application/Context';
import DataShareResultSet from './@ohos.data.DataShareResultSet';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import { ValuesBucket } from './@ohos.data.ValuesBucket';

/**
 * This module provides the dataShare capability for consumer.
 *
 * @namespace dataShare
 * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
 * @systemapi
 * @stagemodelonly
 * @since 20
 */
declare namespace dataShare {
  /**
   * Manages create datashare helper options.
   *
   * @interface DataShareHelperOptions
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10
   */
  interface DataShareHelperOptions {
    /**
     * Specifies whether the {@link DataShareHelper} in proxy mode.
     * If value is true, the {@link DataShareHelper} to be created is in proxy mode, and all operations will not open provider APP as possible
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    isProxy?: boolean;
  }

  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { AsyncCallback<DataShareHelper> } callback - {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  function createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>): void;
  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { DataShareHelperOptions } options - Indicates the optional config.
   * @param { AsyncCallback<DataShareHelper> } callback - {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  function createDataShareHelper(
    context: Context,
    uri: string,
    options: DataShareHelperOptions,
    callback: AsyncCallback<DataShareHelper>
  ): void;

  /**
   * Obtains the dataShareHelper.
   *
   * @param { Context } context - Indicates the application context.
   * @param { string } uri - Indicates the path of the file to open.
   * @param { DataShareHelperOptions } options - Indicates the optional config.
   * @returns { Promise<DataShareHelper> } {DataShareHelper}: The dataShareHelper for consumer.
   * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
   *         2. Incorrect parameters types.
   * @throws { BusinessError } 15700010 - The DataShareHelper is not initialized successfully.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  function createDataShareHelper(
    context: Context,
    uri: string,
    options?: DataShareHelperOptions
  ): Promise<DataShareHelper>;

  /**
   * Specifies the {@link Template} id structure.
   * A template is marked by the template id. Note that the template id is auto generated in {@link DataShareHelper#addTemplate}.
   * After {@link DataShareHelper#addTemplate}, can use the template id to direct a template.
   * 
   * @interface TemplateId
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface TemplateId {
    /**
     * Specifies the id of subscriber, who process the callback
     * Same as subscriberId in {@link DataShareHelper#addTemplate}
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    subscriberId: string;
    /**
     * Specifies the bundleName of template owner, who create the template
     * Same as the caller's bundleName of {@link DataShareHelper#addTemplate}
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    bundleNameOfOwner: string;
  }

  /**
   * Specifies the published item structure.
   *
   * @interface PublishedItem
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface PublishedItem {
    /**
     * Specifies the key of the published data
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    key: string;
    /**
     * Specifies the published data
     * If the data is large, use ArrayBuffer.
     *
     * @type { string | ArrayBuffer }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    data: string | ArrayBuffer;
    /**
     * Specifies the subscriber id
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    subscriberId: string;
  }

  /**
   * Specifies the change node structure of rdb store data in callback.
   *
   * @interface RdbDataChangeNode
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface RdbDataChangeNode {
    /**
     * Specifies the uri of the callback.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    uri: string;
    /**
     * Specifies the templateId of the callback.
     *
     * @type { TemplateId }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    templateId: TemplateId;
    /**
     * Specifies the datas of the callback.
     * every node is a json, json's key is [key of {@link Template#predicates}
     * and value is the query result from rdb store query by value of{@link Template#predicates}].
     *
     * @type { Array<string> }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    data: Array<string>;
  }

  /**
   * Specifies the change node structure of published data in callback.
   *
   * @interface PublishedDataChangeNode
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface PublishedDataChangeNode {
    /**
     * Specifies the bundleName of the callback.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    bundleName: string;
    /**
     * Specifies the datas of the callback.
     *
     * @type { Array<PublishedItem> }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    data: Array<PublishedItem>;
  }

  /**
   * Specifies the operation result structure.
   *
   * @interface OperationResult
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface OperationResult {
    /**
     * Specifies the key of the operation result.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    key: string;

    /**
     * Specifies the operation result.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    result: number;
  }

  /**
   * Specifies the template structure in subscribe.
   *
   * @interface Template
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface Template {
    /**
     * Specifies the predicates of the template.
     * When the callback in {@link DataShareHelper#on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}
     * is called, the predicates is used to generate data in {@link ChangeNode}. Only for rdb store data.
     *
     * @type { [key: string]: string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    /**
     * Specifies the predicates of the template.
     * When the callback in {@link DataShareHelper#on(string, Array<string>, TemplateId, AsyncCallback<ChangeNode>)}
     * is called, the predicates is used to generate data in {@link ChangeNode}. Only for rdb store data.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    predicates: Record<string, string>;

    /**
     * Specifies the scheduler sql of the template.
     * When modify the subscribed uri's data, scheduler is auto called.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    scheduler: string;

    /**
     * Specifies the update sql of the template.
     * The update is called after the predicates execution is complete.
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    update?: string;
  }

  /**
   * Struct for a batch update operation.
   *
   * @interface UpdateOperation
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface UpdateOperation {
    /**
     * Indicates the data to update.
     * 
     * @type { ValuesBucket }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    values: ValuesBucket;

    /**
     * Indicates filter criteria.
     * 
     * @type { dataSharePredicates.DataSharePredicates }
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
  * Enumerates the data change types.
  *
  * @enum { number }
  * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
  * @systemapi
  * @stagemodelonly
  * @since 20
  */
  enum ChangeType {
    /**
     * Data inserted.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    INSERT = 0,

    /**
    * Data deleted.
    *
    * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
    * @systemapi
    * @stagemodelonly
    * @since 20
    */
    DELETE,
    /**
    * Data updated.
    *
    * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
    * @systemapi
    * @stagemodelonly
    * @since 20
    */
    UPDATE
  }
  /**
   * Enumerates the subscription types.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  enum SubscriptionType {
      /**
       * Subscribe to the change of the data with the specified URI.
       *
       * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
       * @systemapi
       * @stagemodelonly
       * @since 20
       */
      SUBSCRIPTION_TYPE_EXACT_URI = 0,
  }

  /**
   * Struct for the data change.
   *
   * @interface ChangeInfo
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface ChangeInfo {
      /**
       * Type of the data change.
       *
       * @type { ChangeType }
       * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
       * @systemapi
       * @stagemodelonly
       * @since 20
       */
      type: ChangeType;

      /**
       * URI of the data changed.
       *
       * @type { string }
       * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
       * @systemapi
       * @stagemodelonly
       * @since 20
       */
      uri: string;
      /**
        * Data changed.
        *
        * @type { Array<ValuesBucket> }
        * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
        * @systemapi
        * @stagemodelonly
        * @since 20
        */
      values: Array<ValuesBucket>;
  }

  /**
   * DataShareHelper
   *
   * @interface DataShareHelper
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 20
   */
  interface DataShareHelper {
    /**
     * Registers an observer to observe data specified by the given uri.
     *
     * @param { 'dataChange' } type - Type must be 'dataChange'.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback of on.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

    /**
     * Deregisters an observer used for monitoring data specified by the given uri.
     *
     * @param { 'dataChange' } type - Type must be 'dataChange'.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback of off.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;
    /**
     * Subscribes to the change of the data specified by the given URI.
     *
     * @param { 'dataChange' } type - Indicates the event type, which must be 'dataChange'.
     * @param { SubscriptionType } type - Indicates the subscription type, which is defined in {@link SubscriptionType}.
     * @param { string } uri - Indicates the path of the data to subscribe.
     * @param { AsyncCallback<ChangeInfo> } callback - Indicates the callback used to return the data change.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    on(event: 'dataChange', type:SubscriptionType, uri: string, callback: AsyncCallback<ChangeInfo>): void;

    /**
     * Unsubscribes from the change of the data specified by the given URI.
     *
     * @param { 'dataChange' } type - Indicates the event type, which must be 'dataChange'.
     * @param { SubscriptionType } type - Indicates the subscription type, which is defined in {@link SubscriptionType}.
     * @param { string } uri - Indicates the path of the data to unsubscribe.
     * @param { AsyncCallback<ChangeInfo> } callback - Indicates the callback to unsubscribe.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    off(event: 'dataChange', type:SubscriptionType, uri: string, callback?: AsyncCallback<ChangeInfo>): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { Array<string> } columns - Indicates the columns to query.
     * If this parameter is null, all columns are queried.
     * @param { AsyncCallback<DataShareResultSet> } callback - {DataShareResultSet}: the query result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    query(
      uri: string,
      predicates: dataSharePredicates.DataSharePredicates,
      columns: Array<string>,
      callback: AsyncCallback<DataShareResultSet>
    ): void;

    /**
     * Queries data in the database.
     *
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { Array<string> } columns - Indicates the columns to query.
     * If this parameter is null, all columns are queried.
     * @returns { Promise<DataShareResultSet> } {DataShareResultSet}: the query result.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    query(
      uri: string,
      predicates: dataSharePredicates.DataSharePredicates,
      columns: Array<string>
    ): Promise<DataShareResultSet>;

    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { ValuesBucket } value - Indicates the data to update. This parameter can be null.
     * @param { AsyncCallback<number> } callback - {number}: the number of data records updated.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    update(
      uri: string,
      predicates: dataSharePredicates.DataSharePredicates,
      value: ValuesBucket,
      callback: AsyncCallback<number>
    ): void;

    /**
     * Updates data records in the database.
     *
     * @param { string } uri - Indicates the path of data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria.
     * You should define the processing logic when this parameter is null.
     * @param { ValuesBucket } value - Indicates the data to update. This parameter can be null.
     * @returns { Promise<number> } {number}: the number of data records updated.
     * @throws { BusinessError } 401 - Parameter error.Possible causes: 1. Mandatory parameters are left unspecified;
     *         2. Incorrect parameters types.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @throws { BusinessError } 202 - Not System Application.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 20
     */
    update(uri: string, predicates: dataSharePredicates.DataSharePredicates, value: ValuesBucket): Promise<number>;
  }
}

export default dataShare;
