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
 * The **DataShare** module allows an application to manage its own data and share data with other applications on the
 * same device.
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
   * Represents the optional parameters of [DataShareHelper]{@link dataShare.DataShareHelperOptions}.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface DataShareHelperOptions {
    /**
     * Whether the [DataShareHelper]{@link dataShare.DataShareHelperOptions} is in proxy mode. The default value is
     * **false**.
     *
     * If the value is **true**, the [DataShareHelper]{@link dataShare.DataShareHelperOptions} to be created is in proxy
     * mode, and all operations will not open the data provider application unless the database does not exist. If the
     * database does not exist,
     * [createDataShareHelper]{@link dataShare.createDataShareHelper(context: Context, uri: string, options: DataShareHelperOptions, callback: AsyncCallback<DataShareHelper>)}
     * will start the data provider to create a database.
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
     * Waiting time for starting the data provider process, in seconds. The default value is **2**.
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
   * Creates a **DataShareHelper** instance. This API uses an asynchronous callback to return the result.
   *
   * @param { Context } context - Context of the application.
   * @param { string } uri - URI of the server application to connect.
   * @param { AsyncCallback<DataShareHelper> } callback - Callback used to return the result. If the operation is
   *     successful, **err** is **undefined** and **data** is the **DataShareHelper** instance created. Otherwise,
   *     **err** is an error object.
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
   * Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in
   * proxy mode. This API uses an asynchronous callback to return the result.
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
   * Creates a **DataShareHelper** instance. **DataShareHelperOptions** specifies whether **DataShareHelper** is in
   * proxy mode. This API uses a promise to return the result.
   *
   * @param { Context } context - Context of the application.
   * @param { string } uri - URI of the server application to connect.
   * @param { DataShareHelperOptions } options - Optional configuration of the **DataShareHelper** instance. It
   *     specifies whether [DataShareHelper]{@link dataShare.DataShareHelperOptions} is in proxy mode and the waiting
   *     time for starting the data provider process in non-silent access mode.If this parameter is not set,
   *     [DataShareHelper]{@link dataShare.DataShareHelperOptions} is not in proxy mode and the waiting time for
   *     starting the data provider process in non-silent access mode is 2 seconds.If the URI starts with
   *     **datashareproxy**, the **isProxy** parameter in **options** must be set. Otherwise, **DataShareHelper** will
   *     fail to be created and an error will be returned. [since 10]
   * @returns { Promise<DataShareHelper> } Promise used to return the **DataShareHelper** instance created.
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
   * Enables silent access. This API uses a promise to return the result.
   *
   * Observe the following when using this API:
   *
   * - The data provider calls this API to enable silent access.
   * - Whether silent access is enabled is determined based on the return value of this API and the
   * **isSilentProxyEnable** field in the
   * [data_share_config.json](docroot://database/share-data-by-datashareextensionability-sys.md) file together.
   * - If silent access is enabled for a URI using this API, the setting takes effect when the related
   * **datashareHelper** API is called. Otherwise, the setting of **isSilentProxyEnable** in the
   * **data_share_config.json** file is used to determine whether to enable silent access.
   *
   * @param { Context } context - Context of the application.
   * @param { string } uri - URI of the data, for which silent access is to be enabled.Global setting: If **uri** is
   *     **undefined** or **null** or is not specified, all the previous settings will be cleared and silent access will
   *     be enabled globally for the data provider.URI-specific setting: If a URI is specified, silent access to the
   *     specified URI will be enabled.When datashareHelper APIs are called, the URI-specific setting is
   *     preferentially applied. If no match is found, the global setting is applied.URI format:
   *     **datashare:///{bundleName}/{moduleName}/{storeName}/{tableName}**
   * @returns { Promise<void> } returns no value.
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
   * Disables silent access. This API uses a promise to return the result.
   *
   * Observe the following when using this API:
   *
   * - The data provider calls this API to disable silent access.
   * - Whether silent access is disabled is determined based on the return value of this API and the
   * **isSilentProxyEnable** field in the
   * [data_share_config.json](docroot://database/share-data-by-datashareextensionability-sys.md) file together.
   * - If silent access is disabled for a URI using this API, the setting takes effect when the related
   * **datashareHelper** API is called. Otherwise, the setting of **isSilentProxyEnable** in the
   * **data_share_config.json** file is used to determine whether to disable silent access.
   *
   * @param { Context } context - Context of the application.
   * @param { string } uri - URI of the data, for which silent access is to be disabled.Global setting: If **uri**
   *     is **undefined** or **null** or is not specified, all the previous settings will be cleared and silent access
   *     will be disabled globally for the data provider.URI-specific setting: If a URI is specified, silent access
   *     to the specified URI will be disabled.When datashareHelper APIs are called, the URI-specific setting is
   *     preferentially applied. If no match is found, the global setting is applied.URI format:
   *     **datashare:///{bundleName}/{moduleName}/{storeName}/{tableName}**
   * @returns { Promise<void> } returns no value.
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
   * Defines the **TemplateId** struct. **TemplateId** is generated by
   * [**addTemplate**]{@link dataShare.DataShareHelper.addTemplate} to identify a template.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface TemplateId {
    /**
     * ID of the subscriber who handles the callback. The value must the same as the **subscriberId** in
     * [**addTemplate**]{@link dataShare.DataShareHelper.addTemplate}. The ID of each subscriber must be unique.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    subscriberId: string;
    /**
     * Bundle name of the template owner. The value must be the same as the **bundleName** in
     * [**addTemplate**]{@link dataShare.DataShareHelper.addTemplate}.
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
   * Defines the data to publish.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface PublishedItem {
    /**
     * Key of the data to publish.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    key: string;
    /**
     * Data to publish. If the data to publish exceeds 20 KB, you are advised to use the data in ArrayBuffer format.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    data: string | ArrayBuffer;
    /**
     * Subscriber ID.
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
   * Represents the RDB data change result. The data returned by the callback is not larger than 10 MB in size.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface RdbDataChangeNode {
    /**
     * URI of the callback.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * ID of the template that triggers the callback.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    templateId: TemplateId;
    /**
     * Data of the callback. If an error occurs during callback data processing, the callback will not be triggered.
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
   * Defines the subscription/unsubscription result of the changes in the published data.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface PublishedDataChangeNode {
    /**
     * Bundle name of the callback.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    bundleName: string;
    /**
     * Data of the callback.
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
   * Defines the struct of the template used in a subscription.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface Template {
    /**
     * Predicates to use. When
     * [**on**]{@link dataShare.DataShareHelper.on(type: 'rdbDataChange', uris: Array<string>, templateId: TemplateId, callback: AsyncCallback<RdbDataChangeNode>)}
     * is called, the predicates are used to generate data. This parameter applies only to RDB data storage.
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
     * Template scheduler SQL, which is embedded with a custom function. Currently, the **remindTimer** function is
     * embedded. The **remindTimer** triggers a subscription-based update in specified scenarios.
     *
     * The scheduler SQL statement is triggered when:
     *
     * 1. The subscribed data is modified.
     * 2. The first subscription is added to the corresponding database.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    scheduler: string;

    /**
     * Update SQL statement of a specified template. The default value is an empty string. When
     * [on]{@link dataShare.DataShareHelper.on(type: 'rdbDataChange', uris: Array<string>, templateId: TemplateId, callback: AsyncCallback<RdbDataChangeNode>)}
     * is called, the **update** parameter is used to update data. This parameter applies only to RDB data storage.
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
   * Defines the result of the operation for subscribing to or unsubscribing from the data changes or published data.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  interface OperationResult {
    /**
     * Key of the operation result.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 23 static
     */
    key: string;

    /**
     * Operation result. If the operation is successful, **0** is returned; otherwise, an error code is returned.
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
   * Represents the batch update operation information.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface UpdateOperation {
    /**
     * Data to be updated.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    values: ValuesBucket;

    /**
     * Conditions for updating data.
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
   * Enumerates the data change types.
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
     * Data is inserted.
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
     * Data is deleted.
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
     * Data is updated.
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
   * Enumerates the data subscription types.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  enum SubscriptionType {
    /**
     * Data change of the specified URI.
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
   * Represents the data change information, including the data change type, URI of the data changed, and changed data
   * content.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   * @since 23 static
   */
  interface ChangeInfo {
    /**
     * Data change type.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    type: ChangeType;

    /**
     * URI of the data changed.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 12 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Changed data.
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
   * Provides a **DataShareHelper** instance to access or manage data on the server. Before calling an API provided by
   * **DataShareHelper**, you must create a **DataShareHelper** instance using
   * [createDataShareHelper]{@link dataShare.createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>)}
   * .
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   * @since 23 static
   */
  interface DataShareHelper {
    /**
     * Subscribes to the data change of the specified URI. After an observer is registered, the subscriber will receive
     * a notification when the **notifyChange** API is called. This API uses an asynchronous callback to return the
     * result. This function does not support cross-user notification subscription. An application can subscribe to a
     * single URI for a maximum of 51 times.
     *
     * Notification triggering: In non-silent scenarios, a notification is published if the
     * [notifyChange]{@link dataShare.DataShareHelper.notifyChange(uri: string)} method is called. In silent scenarios,
     * a notification is automatically published if data is modified via silent access.
     *
     * @param { 'dataChange' } type - Event/callback type. The value is **dataChange**, which indicates the data change.
     * @param { string } uri - URI of the data to be observed.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the data is changed, **err** is
     *     **undefined**. Otherwise, this callback is not invoked or **err** is an error object.
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
     * Subscribes to the data change of the specified URI. After an observer is registered, the subscriber will receive
     * a notification when the **notifyChange** API is called. This API uses an asynchronous callback to return the
     * result. This function does not support cross-user notification subscription. An application can subscribe to a
     * single URI for a maximum of 51 times.
     *
     * @param { string } uri - URI of the data to be observed.
     * @param { Callback<void> } callback - Callback used to return the result. If the data is changed, **err** is
     *     **undefined**. Otherwise, this callback is not invoked or **err** is an error object.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(uri: string, callback: Callback<void>): void;

    /**
     * Unsubscribes from the data change of the specified URI. This API corresponds to the
     * [on]{@link dataShare.DataShareHelper.on(type: 'dataChange', uri: string, callback: AsyncCallback<void>)} API.
     *
     * @param { 'dataChange' } type - Event/callback type. The value is **'dataChange'**, which indicates the data
     *     change.
     * @param { string } uri - URI of the data to be observed.
     * @param { AsyncCallback<void> } callback - Callback to unregister. If this parameter is **undefined**, **null**,
     *     or left empty, this API unregisters all callbacks for the specified URI.
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
     * Unsubscribes from the data change of the specified URI. This API corresponds to the
     * [on]{@link dataShare.DataShareHelper.onDataChange(uri: string, callback: Callback<void>)} API.
     *
     * @param { string } uri - URI of the data to be observed.
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
     * Subscribes to the data change of the specified URI. After a change notification is registered, the subscriber
     * will receive a notification when the **notifyChange** API is called. The change notification contains the data
     * change type, URI of the data changed, and the changed data. This API uses an asynchronous callback to return the
     * result. This function does not support cross-user notification subscription. An application can subscribe to a
     * single URI for a maximum of 51 times.
     *
     * Notification triggering: In non-silent scenarios, a notification is published if the
     * [notifyChange]{@link dataShare.DataShareHelper.notifyChange(data: ChangeInfo)} method is called. In silent
     * scenarios, a notification is automatically published if data is modified via silent access, but **changeInfo** in
     * the callback is invalid.
     *
     * @param { 'dataChange' } event - Event/callback type. The value is **dataChange**, which indicates the data
     *     change.
     * @param { SubscriptionType } type - Subscription type.
     * @param { string } uri - URI of the data to be observed.
     * @param { AsyncCallback<ChangeInfo> } callback - Callback to be invoked when data is changed.
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
     * Subscribes to the data change of the specified URI. After a change notification is registered, the subscriber
     * will receive a notification when the **notifyChange** API is called. The change notification contains the data
     * change type, URI of the data changed, and the changed data. This API uses an asynchronous callback to return the
     * result. This function does not support cross-user notification subscription. An application can subscribe to a
     * single URI for a maximum of 51 times.
     *
     * @param { SubscriptionType } type - Subscription type.
     * @param { string } uri - URI of the data to be observed.
     * @param { Callback<ChangeInfo> } callback - Callback to be invoked when data is changed.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 15700013 - The DataShareHelper instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(type:SubscriptionType, uri: string, callback: Callback<ChangeInfo>): void;

    /**
     * Unsubscribes from the data change of the specified URI. This API corresponds to the
     * [on]{@link dataShare.DataShareHelper.on(event: 'dataChange', type:SubscriptionType, uri: string, callback: AsyncCallback<ChangeInfo>)}
     * API.
     *
     * @param { 'dataChange' } event - Event/callback type. The value is **'dataChange'**, which indicates the data
     *     change.
     * @param { SubscriptionType } type - Subscription type.
     * @param { string } uri - URI of the data to be observed.
     * @param { AsyncCallback<ChangeInfo> } callback - Callback to unregister. If this parameter is **undefined**,
     *     **null**, or left empty, this API unregisters all callbacks for the specified URI. If this parameter is
     *     specified, the callback must be the one registered in
     *     [on('datachange')]{@link dataShare.DataShareHelper.on(event: 'dataChange', type:SubscriptionType, uri: string, callback: AsyncCallback<ChangeInfo>)}
     *     .
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
     * Unsubscribes from the data change of the specified URI. This API corresponds to the
     * [on]{@link dataShare.DataShareHelper.on(event: 'dataChange', type:SubscriptionType, uri: string, callback:
     * AsyncCallback<ChangeInfo>)}
     * API.
     *
     * @param { SubscriptionType } type - Subscription type.
     * @param { string } uri - URI of the data to be observed.
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
     * Adds a data template with the specified subscriber. Only silent access is supported.
     *
     * In silent scenarios, the total size of the **uri**, **subscriberId**, and **template** parameters passed in this
     * API cannot exceed 200 KB. If the size exceeds the limit, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to add.
     * @param { string } subscriberId - Unique ID of the template subscriber.
     * @param { Template } template - Data template to add.
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
     * Deletes a data template based on the specified subscriber. Only silent access is supported.
     *
     * In silent scenarios, the total size of the **uri** and **subscriberId** parameters passed in this API cannot
     * exceed 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to delete.
     * @param { string } subscriberId - Unique ID of the subscriber.
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
     * Subscribes to the changes of the data corresponding to the specified URI and template. Only silent access is
     * supported. This function does not support cross-user notification subscription.
     *
     * @param { 'rdbDataChange' } type - Event type. The value is **rdbDataChange**, which indicates the change of the
     *     RDB data. If **type** is any other value, there is no response to this API.
     * @param { Array<string> } uris - URIs of the target data.
     * @param { TemplateId } templateId - ID of the template that triggers the callback.
     * @param { AsyncCallback<RdbDataChangeNode> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **node** is the data changed. Otherwise, this callback is not
     *     invoked or **err** is an error object.
     * @returns { Array<OperationResult> } Returns the operation result.
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
     * Subscribes to the changes of the data corresponding to the specified URI and template. Only silent access is
     * supported. This function does not support cross-user notification subscription.
     *
     * @param { Array<string> } uris - URIs of the target data.
     * @param { TemplateId } templateId - ID of the template that triggers the callback.
     * @param { Callback<RdbDataChangeNode> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **node** is the data changed. Otherwise, this callback is not
     *     invoked or **err** is an error object.
     * @returns { Array<OperationResult> } Returns the operation result.
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
     * Unsubscribes from the changes of the data corresponding to the specified URI and template. Only silent access is
     * supported.
     *
     * @param { 'rdbDataChange' } type - Event type. The value is **rdbDataChange**, which indicates the change of the
     *     RDB data.
     * @param { Array<string> } uris - URIs of the target data.
     * @param { TemplateId } templateId - ID of the template that triggers the callback.
     * @param { AsyncCallback<RdbDataChangeNode> } callback - Callback to unregister. If this parameter is **undefined**
     *     , **null**, or left empty, this API unregisters all callbacks for the specified URI.
     * @returns { Array<OperationResult> } Returns the operation result.
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
     * Unsubscribes from the changes of the data corresponding to the specified URI and template. Only silent access is
     * supported.
     *
     * @param { Array<string> } uris - URIs of the target data.
     * @param { TemplateId } templateId - ID of the template that triggers the callback.
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
     * Subscribes to the change of the published data. Only silent access is supported. This function does not support
     * cross-user notification subscription.
     *
     * @param { 'publishedDataChange' } type - Event type. The value is **publishedDataChange**, which indicates the
     *     change of the published data.
     * @param { Array<string> } uris - URIs of the target data.
     * @param { string } subscriberId - Subscriber ID of the callback.
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **node** is the data changed. Otherwise, this callback is not
     *     invoked or **err** is an error object.
     * @returns { Array<OperationResult> } Returns the operation result.
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
     * Subscribes to the change of the published data. Only silent access is supported. This function does not support
     * cross-user notification subscription.
     *
     * @param { Array<string> } uris - URIs of the target data.
     * @param { string } subscriberId - Subscriber ID of the callback.
     * @param { Callback<PublishedDataChangeNode> } callback - Callback used to return the result. If the operation
     *     is successful, **err** is **undefined** and **node** is the data changed. Otherwise, this callback is not
     *     invoked or **err** is an error object.
     * @returns { Array<OperationResult> } Returns the operation result.
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
     * Unsubscribes from the change of the published data. Only silent access is supported.
     *
     * @param { 'publishedDataChange' } type - Event type. The value is **publishedDataChange**, which indicates the
     *     change of the published data.
     * @param { Array<string> } uris - URIs of the target data.
     * @param { string } subscriberId - Subscriber ID of the callback.
     * @param { AsyncCallback<PublishedDataChangeNode> } callback - Callback to unregister. If this parameter is
     *     **undefined**, **null**, or left empty, this API unregisters all callbacks for the specified URI.
     * @returns { Array<OperationResult> } Returns the operation result.
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
     * Unsubscribes from the change of the published data. Only silent access is supported.
     *
     * @param { Array<string> } uris - URIs of the target data.
     * @param { string } subscriberId - Subscriber ID of the callback.
     * @param { Callback<PublishedDataChangeNode> } [callback] - Callback to unregister. If this parameter is
     *     **undefined**, **null**, or left empty, this API unregisters all callbacks for the specified URI.
     * @returns { Array<OperationResult> } Returns the operation result.
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
     * Publishes data to the database. You should pass in the version of the data to be published. If the passed version
     * is later than the version recorded in the current database, the operation is successful. Only silent access is
     * supported. This API uses an asynchronous callback to return the result.
     *
     * In silent scenarios, the total size of the **data** and **bundleName** parameters passed in this API cannot
     * exceed 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { Array<PublishedItem> } data - Data to publish.
     * @param { string } bundleName - Application of the data to publish. This parameter is valid only for the private
     *     data published. Only the application can read the data.
     * @param { int } version - Version of the data to publish. A larger value indicates a later version. If the version
     *     of the data published is earlier than that of the data in the database, the data in the database will not be
     *     updated.
     * @param { AsyncCallback<Array<OperationResult>> } callback - Callback used to return the result. If data is
     *     published, **err** is **undefined**, and **result** is the data publish result. Otherwise, this callback is
     *     not triggered or **err** is an error object.
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
     * Publishes data to the database. Only silent access is supported. This API uses an asynchronous callback to return
     * the result.
     *
     * In silent scenarios, the total size of the **data** and **bundleName** parameters passed in this API cannot
     * exceed 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { Array<PublishedItem> } data - Data to publish.
     * @param { string } bundleName - Application of the data to publish. This parameter is valid only for the private
     *     data published. Only the application can read the data.
     * @param { AsyncCallback<Array<OperationResult>> } callback - Callback used to return the result. If data is
     *     published, **err** is **undefined**, and **result** is the data publish result. Otherwise, this callback is
     *     not triggered or **err** is an error object.
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
     * Publishes data to the database. You should pass in the version of the data to be published. If the passed version
     * is later than the version recorded in the current database, the operation is successful. Only silent access is
     * supported. This API uses a promise to return the result.
     *
     * In silent scenarios, the total size of the **data** and **bundleName** parameters passed in this API cannot
     * exceed 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { Array<PublishedItem> } data - Data to publish.
     * @param { string } bundleName - Application of the data to publish. This parameter is valid only for the private
     *     data published. Only the application can read the data.
     * @param { int } version - Version of the data to publish. A larger value indicates a later version. If the version
     *     of the data published is earlier than that of the data in the database, the data in the database will not be
     *     updated. If the data version is not checked, leave this parameter unspecified.
     * @returns { Promise<Array<OperationResult>> } Returns the operation result.
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
     * Obtains the published data of an application. Only silent access is supported. This API uses an asynchronous
     * callback to return the result.
     *
     * In silent scenarios, the size of the **bundleName** parameter passed in this API cannot exceed 200 KB. Otherwise,
     * the operation fails or an exception is thrown.
     *
     * @param { string } bundleName - Application to which the data belongs.
     * @param { AsyncCallback<Array<PublishedItem>> } callback - Callback used to return the published data obtained.
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
     * Obtains the published data of an application. Only silent access is supported. This API uses a promise to return
     * the result.
     *
     * In silent scenarios, the size of the **bundleName** parameter passed in this API cannot exceed 200 KB. Otherwise,
     * the operation fails or an exception is thrown.
     *
     * @param { string } bundleName - Application to which the data belongs.
     * @returns { Promise<Array<PublishedItem>> } Promise used to return the published data obtained.
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
     * Inserts a single data record into the database. This API uses an asynchronous callback to return the result.
     *
     * In non-silent scenarios, the total size of the **uri** and **value** parameters passed in this API cannot exceed
     * 900 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri** and **value** parameters passed in this API cannot exceed 200
     * KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to insert.
     * @param { ValuesBucket } value - Value of the data to insert.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the index of the inserted data record. Otherwise, **err** is an
     *     error object.The data index is not returned if the APIs of the database in use, for example, the key-
     *     value database (KVDB), do not support the return of indexes.
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
     * Inserts a single data record into the database. This API uses a promise to return the result.
     *
     * In non-silent scenarios, the total size of the **uri** and **value** parameters passed in this API cannot exceed
     * 900 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri** and **value** parameters passed in this API cannot exceed 200
     * KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to insert.
     * @param { ValuesBucket } value - Value of the data to insert.
     * @returns { Promise<int> } Promise used to return the index of the inserted data record.
     *     The data index is not returned if the APIs of the database in use (for example, KVDB) do not support this
     *     return.
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
     * Deletes one or more data records from the database. This API uses an asynchronous callback to return the result.
     *
     * In non-silent scenarios, the total size of the **uri** and **predicates** parameters passed in this API cannot
     * exceed 900 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri** and **predicates** parameters passed in this API cannot exceed
     * 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to delete.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Conditions for deleting data.The predicate
     *     methods supported by **delete()** vary depending on the database in use. For example, the KVDB supports only
     *     **inKeys**. If this parameter is left empty, the entire table will be deleted by default.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the number of deleted data records. Otherwise, **err** is an error
     *     object.The number of deleted data records is not returned if the APIs of the database in use (for example
     *     , KVDB) do not support this return.
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
     * Deletes one or more data records from the database. This API uses a promise to return the result.
     *
     * In non-silent scenarios, the total size of the **uri** and **predicates** parameters passed in this API cannot
     * exceed 900 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri** and **predicates** parameters passed in this API cannot exceed
     * 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to delete.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Conditions for deleting data.The predicate
     *     methods supported by **delete()** vary depending on the database in use. For example, the KVDB supports only
     *     **inKeys**. If this parameter is left empty, the entire table will be deleted by default.
     * @returns { Promise<int> } Promise used to return the number of deleted data records.
     *     The number of deleted data records is not returned if the APIs of the database in use
     *     (for example, KVDB) do not support this return.
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
     * Queries data in the database. This API uses an asynchronous callback to return the result.
     *
     * In non-silent scenarios, the size of the **predicates** parameter and the total size of the **uri** and
     * **columns** parameters passed in this API cannot exceed 128 MB and 200 KB, respectively. Otherwise, the operation
     * fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri**, **predicates**, and **columns** parameters passed in this API
     * cannot exceed 200 KB. If the size exceeds the limit, the operation fails or an exception is thrown.
     *
     * When this API is used to query database data, if the query content exceeds the resource limit, the operation
     * fails and an error is returned. You can retry the operation based on the scenario. For details about the resource
     * limit, see [Silent Access via DatamgrService](docroot://database/share-data-by-silent-access-sys.md#constraints)
     * and
     * [Sharing Data Using DataShareExtensionAbility](docroot://database/share-data-by-datashareextensionability-sys.md#constraints)
     * .
     *
     * @param { string } uri - URI of the data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Conditions for querying data.The predicate
     *     methods supported by **query()** vary depending on the database used. For example, the KVDB supports only
     *     **inKeys** and **prefixKey**. If this parameter is left empty, the entire table will be queried by default.
     * @param { Array<string> } columns - Column to query. If this parameter is left empty, all columns will be queried.
     * @param { AsyncCallback<DataShareResultSet> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the result set obtained. Otherwise, **err** is an error
     *     object.
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
     * Queries data in the database. This API uses a promise to return the result.
     *
     * In non-silent scenarios, the size of the **predicates** parameter and the total size of the **uri** and
     * **columns** parameters passed in this API cannot exceed 128 MB and 200 KB, respectively. Otherwise, the operation
     * fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri**, **predicates**, and **columns** parameters passed in this API
     * cannot exceed 200 KB. If the size exceeds the limit, the operation fails or an exception is thrown.
     *
     * When this API is used to query database data, if the query content exceeds the resource limit, the operation
     * fails and an error is returned. You can retry the operation based on the scenario. For details about the resource
     * limit, see
     * [Silent Access via DatamgrService (ArkTS) (for System Applications Only)](docroot://database/share-data-by-silent-access-sys.md#constraints)
     * and
     * [Sharing Data Using DataShareExtensionAbility (ArkTS) (for System Applications Only)](docroot://database/share-data-by-datashareextensionability-sys.md#constraints)
     * .
     *
     * @param { string } uri - URI of the data to query.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Conditions for querying data.The predicate
     *     methods supported by **query()** vary depending on the database used. For example, the KVDB supports only
     *     **inKeys** and **prefixKey**. If this parameter is left empty, the entire table will be queried by default.
     * @param { Array<string> } columns - Column to query. If this parameter is left empty, all columns will be queried.
     * @returns { Promise<DataShareResultSet> } Promise used to return the result set obtained.
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
     * Updates data in the database. This API uses an asynchronous callback to return the result.
     *
     * In non-silent scenarios, the total size of the **uri**, **predicates**, and **value** parameters passed in this
     * API cannot exceed 900 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri**, **predicates**, and **value** parameters passed when this API
     * is called cannot exceed 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Conditions for updating data.The predicate
     *     methods supported by **update()** vary depending on the database in use. For example, only the relational
     *     database (RDB) supports predicates. If this parameter is left empty, the entire table will be updated by
     *     default.
     * @param { ValuesBucket } value - Value of the data to update.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the number of updated data records. Otherwise, **err** is an error
     *     object.The number of updated data records is not returned if the APIs of the database in use (for example
     *     , KVDB) do not support this return.
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
     * Updates data in the database. This API uses a promise to return the result.
     *
     * In non-silent scenarios, the total size of the **uri**, **predicates**, and **value** parameters passed in this
     * API cannot exceed 900 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * In silent scenarios, the total size of the **uri**, **predicates**, and **value** parameters passed when this API
     * is called cannot exceed 200 KB. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to update.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Conditions for updating data.The predicate
     *     methods supported by **update()** vary depending on the database in use. For example, only the relational
     *     database (RDB) supports predicates. If this parameter is left empty, the entire table will be updated by
     *     default.
     * @param { ValuesBucket } value - Value of the data to update.
     * @returns { Promise<int> } Promise used to return the number of data records updated.
     *     The number of updated data records is not returned if the APIs of the database in use
     *     (for example, KVDB) do not support this return.
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
     * Batch updates data in the database. The total number of objects for operations (that is, KV pairs of the objects)
     * cannot exceed 4000. If the number exceeds 4000, the update will fail. The transaction of this API depends on the
     * data provider. This API uses a promise to return the result. Silent access is not supported currently.
     *
     * In non-silent scenarios, the size of the **operations** parameter passed in this API called cannot exceed 900 KB.
     * Otherwise, the operation fails or an exception is thrown.
     *
     * @param { Record<string, Array<UpdateOperation>> } operations - Collection of the path of the data to update,
     *     update conditions, and new data.
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
     * Batch inserts data into the database. This API uses an asynchronous callback to return the result. Silent access
     * is not supported currently.
     *
     * In non-silent scenarios, the size of the **values** parameter and the **uri** parameter passed in this API cannot
     * exceed 128 MB and 900 KB, respectively. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to insert.
     * @param { Array<ValuesBucket> } values - Data to insert.
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the number of data records inserted. Otherwise, **err** is an error
     *     object.The number of inserted data records is not returned if the APIs of the database in use (for
     *     example, KVDB) do not support this return.
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
     * Batch inserts data into the database. This API uses a promise to return the result. Silent access is not
     * supported currently.
     *
     * In non-silent scenarios, the size of the **values** parameter and the **uri** parameter passed in this API cannot
     * exceed 128 MB and 900 KB, respectively. Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to insert.
     * @param { Array<ValuesBucket> } values - Data to insert.
     * @returns { Promise<int> } Promise used to return the number of data records inserted.
     *     The number of inserted data records is not returned if the APIs of the database in use
     *     (for example, KVDB) do not support this return.
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
     * Normalizes a **DataShare** URI. The **DataShare** URI can be used only by the local device, but the normalized
     * URI can be used across devices. This API uses an asynchronous callback to return the result. Silent access is not
     * supported currently.
     *
     * @param { string } uri - [URI]{@link @ohos.uri:uri.URI} to normalize.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the normalized URI (if **null** is returned, URI normalization is
     *     not supported). Otherwise, **err** is an error object.
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
     * Normalizes a **DataShare** URI. The **DataShare** URI can be used only by the local device, but the normalized
     * URI can be used across devices. This API uses a promise to return the result. Silent access is not supported
     * currently.
     *
     * @param { string } uri - [URI]{@link @ohos.uri:uri.URI} to normalize.
     * @returns { Promise<string> } Promise used to return the result. If URI normalization is supported, the normalized
     *     URI is returned. Otherwise, **null** is returned.
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
     * Denormalizes a URI. This API uses an asynchronous callback to return the result. Silent access is not supported
     * currently.
     *
     * @param { string } uri - [URI]{@link @ohos.uri:uri.URI} to denormalize.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the URI obtained. If the original URI is returned, denormalization
     *     is not required. If **null** is returned, denormalization is not supported. If the operation fails, **err**
     *     is an error object.
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
     * Denormalizes a URI. This API uses a promise to return the result. Silent access is not supported currently.
     *
     * @param { string } uri - [URI]{@link @ohos.uri:uri.URI} to denormalize.
     * @returns { Promise<string> } Promise used to return the result. If the denormalization is successful, the URI
     *     obtained is returned. If no operation is required, the original URI is returned. If denormalization is not
     *     supported, **null** is returned.
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
     * Notifies the registered observer of data changes. This API uses an asynchronous callback to return the result.
     * Silent access is not supported currently.
     *
     * In non-silent scenarios, the size of the **uri** parameter passed in this API called cannot exceed 200 KB.
     * Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to be observed.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the observer is notified of the
     *     data changes, **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Notifies the registered observer of data changes. This API uses a promise to return the result. Silent access is
     * not supported currently.
     *
     * In non-silent scenarios, the size of the **uri** parameter passed in this API called cannot exceed 200 KB.
     * Otherwise, the operation fails or an exception is thrown.
     *
     * @param { string } uri - URI of the data to be observed.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Notifies the observer of the data change of the specified URI. This API uses a promise to return the result.
     * Silent access is not supported currently.
     *
     * In non-silent scenarios, the size of the **data** parameter passed in this API called cannot exceed 200 KB.
     * Otherwise, the operation fails or an exception is thrown.
     *
     * @param { ChangeInfo } data - Information about the data change type, URI of the data changed, and changed data.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Closes the **DataShareHelper** instance. After this API is called, the instance becomes invalid. This API uses a
     * promise to return the result.
     *
     * @returns { Promise<void> } returns no value.
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
   * Creates a **DataProxyHandle** instance. This API uses a promise to return the result.
   *
   * @returns { Promise<DataProxyHandle> } Promise used to return the result.
   * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
   *     restarted abnormally.
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  function createDataProxyHandle(): Promise<DataProxyHandle>;

  /**
   * Defines a struct for shared configurations.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface ProxyData {
    /**
     * Unique ID of a shared configuration, fixed at the format of **"datashareproxy://{*bundleName*}/{*path*}"**, in
     * which **bundleName** indicates the bundle name of the publisher application, and **path** can be set to any value
     * but must be unique in the same application. The value is a string with a maximum of 256 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Value of a shared configuration. If not specified, the value is an empty string. The value is a string with a
     * maximum of 4,096 bytes. If this parameter is not set when the shared configuration is published for the first
     * time, the value will be an empty string by default. If this parameter is not set when a shared configuration is
     * updated, the value of the shared configuration will not be updated.
     * In versions earlier than API version 26.0.0, the maximum length of a string is 4096 bytes. In API version 26.0.0
     * and later versions, the maximum length of a string is 4096 bytes by default, and can be extended to 102,400
     * bytes by setting the maxValueLength parameter in [DataProxyConfig]{@link dataShare.DataProxyConfig}.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value?: ValueType;

    /**
     * List of applications that can subscribe to and read shared configurations. If this parameter is left empty, the
     * value is an empty string array. The array can contain a maximum of 256 elements. Excess elements are invalid.
     * Each element in the array is the
     * [appIdentifier](docroot://quick-start/common-problem-of-application.md#what-is-appidentifier) of an application.
     * The maximum length of an **appIdentifier** is 128 bytes. If the length exceeds 128 bytes, the **appIdentifier**
     * does not take effect. If this parameter is not set when the shared configuration is published for the first time,
     * the allowlist is empty by default. If this parameter is not set when the shared configuration is updated, the
     * allowlist will not be updated. An empty allowlist indicates that only the publisher can access the shared
     * configuration.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    allowList?: string[];
  }

  /**
   * Defines a struct for notifying subscribers of the shared configuration changes, including data change type, URI,
   * and content.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyChangeInfo {
    /**
     * Data change type.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    type: ChangeType;

    /**
     * URI to change.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Changed data.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value: ValueType;
  }

  /**
   * Enumerates the status code returned by the batch operations of shared configuration.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum DataProxyErrorCode {
    /**
     * The operation is successful.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * The URI does not exist or the URI is not subscribed to.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    URI_NOT_EXIST = 1,

    /**
     * No permission to perform this operation on the URI.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    NO_PERMISSION = 2,

    /**
     * The number of configurations published by the current application exceeds the upper limit of 32.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    OVER_LIMIT = 3
  }

  /**
   * Defines a struct for the batch operation result of shared configuration.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyResult {
    /**
     * URI to be operated, with a maximum of 256 bytes. The value is fixed at the format of
     * **"datashareproxy://{*bundleName*}/{*path*}"**, in which **bundleName** indicates the bundle name of the
     * publisher application, and **path** can be set to any value but must be unique in the same application.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Operation result code.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    result: DataProxyErrorCode;
  }

  /**
   * Defines a struct for obtaining the batch operation result of shared configuration.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyGetResult {
    /**
     * URI to be operated, with a maximum of 256 bytes. The value is fixed at the format of
     * **"datashareproxy://{*bundleName*}/{*path*}"**, in which **bundleName** indicates the bundle name of the
     * publisher application, and **path** can be set to any value but must be unique in the same application.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Operation result code.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    result: DataProxyErrorCode;

    /**
     * If the operation is successful, the value is the one set in shared configuration; otherwise, the value is
     * undefined.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    value: ValueType | undefined;

    /**
     * If the operation is successful, the allowlist is the one set in shared configuration; otherwise, the allowlist is
     * undefined. Only the publisher can obtain the allowlist. Other applications can obtain only the value.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    allowList: string[] | undefined;
  }

  /**
   * Enumerates the data proxy types.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  enum DataProxyType {
    /**
     * Inter-application shared configuration.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    SHARED_CONFIG = 0
  }

  /**
   * The maximum length of {@link ProxyData#value}, {@link DataProxyChangeInfo#value}, {@link DataProxyGetResult#value}.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DataProxyMaxValueLength {
    /**
     * The maximum length of value is 4096 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MAX_LENGTH_4K = 4096,

    /**
     * The maximum length of value is 102400 bytes.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MAX_LENGTH_100K = 102400
  }

  /**
   * Defines a struct for the data proxy configuration.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyConfig {
    /**
     * Type of the data proxy.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    type: DataProxyType;

    /**
     * Sets the maximum length of the data proxy value. The default value is MAX_LENGTH_4K, indicating that the maximum
     * value length is 4096 bytes.
     * If the length of the value that is actually transferred or obtained exceeds the maximum value length specified by
     * this parameter, the publish or get operation will fail.
     * Default value: MAX_LENGTH_4K.
     *
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    maxValueLength?: DataProxyMaxValueLength;
  }

  /**
   * Defines the data proxy handle, which can be used to access or manage shared configuration information. Before
   * calling an API provided by **DataProxyHandle**, you must create a **DataProxyHandle** instance using
   * [createDataProxyHandle]{@link dataShare.createDataProxyHandle}.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  interface DataProxyHandle {
    /**
     * Subscribes to the change event of the shared configuration corresponding to a specified URI. If the change event
     * is subscribed, the subscriber will receive a callback notification that carries the data change type, changed URI
     * , and changed content when the publisher modifies the configuration. This API uses an asynchronous callback to
     * return the result. This function does not support cross-user notification subscription or subscription to
     * unpublished configurations. If the permission is revoked after the subscription is successful, the subscriber
     * will not be notified consequently.
     *
     * When the publisher calls the [publish]{@link dataShare.DataProxyHandle.publish} or
     * [delete]{@link dataShare.DataProxyHandle.delete(uris: string[], config: DataProxyConfig)} API to publish or
     * delete a configuration, a notification is automatically triggered.
     *
     * @param { 'dataChange' } event - Event or callback type. The value is **dataChange**, which indicates the data
     *     change. This event is triggered when the publisher modifies the configuration.
     * @param { string[] } uris - Array of URIs to be subscribed, with a maximum of 32 URIs. The URI value is fixed at
     *     the format of **"datashareproxy://{*bundleName*}/{*path*}"**, in which **bundleName** indicates the bundle
     *     name of the publisher application, and **path** can be set to any value but must be unique in the same
     *     application. The value contains a maximum of 256 bytes.
     * @param { DataProxyConfig } config - Data proxy configuration.
     * @param { AsyncCallback<DataProxyChangeInfo[]> } callback - Callback triggered when the publisher modifies the
     *     configuration.
     * @returns { DataProxyResult[] } Batch operation result array.
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
     * Unsubscribes from the change event of the proxy data corresponding to a specified URI.
     *
     * @param { 'dataChange' } event - Event or callback type. The value is **dataChange**, which indicates the data
     *     change.
     * @param { string[] } uris - Array of URIs to be unsubscribed, with a maximum of 32 URIs. The URI value is fixed at
     *     the format of **"datashareproxy://{*bundleName*}/{*path*}"**, in which **bundleName** indicates the bundle
     *     name of the publisher application, and **path** can be set to any value but must be unique in the same
     *     application. The value contains a maximum of 256 bytes.
     * @param { DataProxyConfig } config - Data proxy configuration.
     * @param { AsyncCallback<DataProxyChangeInfo[]> } [callback] - Callback function. If the value is empty, undefined,
     *     or null, all notifications of the URIs are unsubscribed.
     * @returns { DataProxyResult[] } Batch operation result array.
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
     * Publishes shared configuration items. This API uses a promise to return the result. After shared configuration
     * items are published, the publisher and the applications in the allowlist can access these items. If the URI to be
     * published already exists, the corresponding shared configuration item is updated. If any URI in the configuration
     * item to be published exceeds the maximum length or fails the format verification, the current publish operation
     * fails. Only the publisher can update shared configuration items. Each application supports a maximum of 32 shared
     * configurations.
     *
     * @param { ProxyData[] } data - Array of shared configuration items to be created or updated, with a maximum of 32
     *     items.
     * @param { DataProxyConfig } config - Data proxy configuration.
     * @returns { Promise<DataProxyResult[]> } Promise used to return the result array of the batch operations.
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
     * Deletes the specified shared configuration items based on URIs. This API uses a promise to return the result.
     * Only the publisher is allowed to delete shared configuration items.
     *
     * @param { string[] } uris - URI array of the shared configuration items to be deleted, with a maximum of 32 URIs.
     *     The URI value is fixed at the format of **"datashareproxy://{*bundleName*}/{*path*}"**, in which
     *     **bundleName** indicates the bundle name of the publisher application, and **path** can be set to any value
     *     but must be unique in the same application. The value contains a maximum of 256 bytes.
     * @param { DataProxyConfig } config - Data proxy configuration.
     * @returns { Promise<DataProxyResult[]> } Promise used to return the result array of the batch operations.
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
     * Deletes all the data published by the publisher.
     * Only the data publisher can delete the data.
     *
     * @param { DataProxyConfig } config - Configuration of the data proxy operation.
     * @returns { Promise<DataProxyResult[]> } Promise used to return the operation result.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is
     *     being restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    delete(config: DataProxyConfig): Promise<DataProxyResult[]>;

    /**
     * Obtains a specified shared configuration item based on the URI. This API uses a promise to return the result.
     * Only the publisher and applications in the allowed list can access the shared configuration item.
     *
     * @param { string[] } uris - URI array of the shared configuration items to be obtained, with a maximum of 32 URIs.
     *     The URI value is fixed at the format of **"datashareproxy://{*bundleName*}/{*path*}"**, in which
     *     **bundleName** indicates the bundle name of the publisher application, and **path** can be set to any value
     *     but must be unique in the same application. The value contains a maximum of 256 bytes.
     * @param { DataProxyConfig } config - Data proxy configuration.
     * @returns { Promise<DataProxyGetResult[]> } Promise used to return the result array of the batch operations.
     * @throws { BusinessError } 15700000 - Inner error. Possible causes: The service is not ready or is being
     *     restarted abnormally.
     * @throws { BusinessError } 15700014 - The parameter format is incorrect or the value range is invalid.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @stagemodelonly
     * @since 20 dynamic
     * @since 23 static
     */
    get(uris: string[], config: DataProxyConfig): Promise<DataProxyGetResult[]>;
  }
}

export default dataShare;
