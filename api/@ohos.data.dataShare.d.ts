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

import { AsyncCallback } from './basic';
import Context from './application/Context';
import DataShareResultSet from './@ohos.data.DataShareResultSet';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import { ValuesBucket } from './@ohos.data.ValuesBucket';

declare namespace dataShare {
    /**
     * Obtains the dataShareHelper.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @param context Indicates the application context.
     * @param uri Indicates the path of the file to open.
     * @return Returns the dataShareHelper.
     */
    function createDataShareHelper(context: Context, uri: string, callback: AsyncCallback<DataShareHelper>): void;
    function createDataShareHelper(context: Context, uri: string): Promise<DataShareHelper>;

    /**
     * DataShareHelper
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
     * @systemapi
     * @StageModelOnly
     */
    interface DataShareHelper {
        /**
         * Registers an observer to observe data specified by the given uri.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param type dataChange.
         * @param uri Indicates the path of the data to operate.
         * @param callback Indicates the callback when dataChange.
         * @return -
         * @StageModelOnly
         */
        on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

        /**
         * Deregisters an observer used for monitoring data specified by the given uri.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param type dataChange.
         * @param uri Indicates the path of the data to operate.
         * @param callback Indicates the registered callback.
         * @return -
         * @StageModelOnly
         */
        off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

        /**
         * Inserts a single data record into the database.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the path of the data to operate.
         * @param value Indicates the data record to insert. If this parameter is null, a blank row will be inserted.
         * @return Returns the index of the inserted data record.
         * @StageModelOnly
         */
        insert(uri: string, value: ValuesBucket, callback: AsyncCallback<number>): void;
        insert(uri: string, value: ValuesBucket): Promise<number>;

        /**
         * Deletes one or more data records from the database.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the path of the data to operate.
         * @param predicates Indicates filter criteria. You should define the processing logic when this parameter is null.
         * @return Returns the number of data records deleted.
         * @StageModelOnly
         */
        delete(uri: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;
        delete(uri: string, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

        /**
         * Queries data in the database.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the path of data to query.
         * @param predicates Indicates filter criteria. You should define the processing logic when this parameter is null.
         * @param columns Indicates the columns to query. If this parameter is null, all columns are queried.
         * @return Returns the query result.
         * @StageModelOnly
         */
        query(uri: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>, callback: AsyncCallback<DataShareResultSet>): void;
        query(uri: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>): Promise<DataShareResultSet>;

        /**
         * Updates data records in the database.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the path of data to update.
         * @param predicates Indicates filter criteria. You should define the processing logic when this parameter is null.
         * @param value Indicates the data to update. This parameter can be null.
         * @return Returns the number of data records updated.
         * @StageModelOnly
         */
        update(uri: string, predicates: dataSharePredicates.DataSharePredicates, value: ValuesBucket, callback: AsyncCallback<number>): void;
        update(uri: string, predicates: dataSharePredicates.DataSharePredicates, value: ValuesBucket): Promise<number>;

        /**
         * Inserts multiple data records into the database.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the path of the data to operate.
         * @param values Indicates the data records to insert.
         * @return Returns the number of data records inserted.
         * @StageModelOnly
         */
        batchInsert(uri: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;
        batchInsert(uri: string, values: Array<ValuesBucket>): Promise<number>;

        /**
         * Converts the given {@code uri} that refers to the DataShare into a normalized {@link ohos.utils.net.Uri}.
         * A normalized uri can be used across devices, persisted, backed up, and restored.
         * <p>To transfer a normalized uri from another environment to the current environment, you should call this
         * method again to re-normalize the uri for the current environment or call {@link #denormalizeUri(Uri)}
         * to convert it to a denormalized uri that can be used only in the current environment.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the {@link ohos.utils.net.Uri} object to normalize.
         * @return Returns the normalized {@code Uri} object if the DataShare supports uri normalization;
         * returns {@code null} otherwise.
         * @throws DataShareRemoteException Throws this exception if the remote process exits.
         * @throws NullPointerException Throws this exception if {@code uri} is null.
         * @see #denormalizeUri
         * @StageModelOnly
         */
        normalizeUri(uri: string, callback: AsyncCallback<string>): void;
        normalizeUri(uri: string): Promise<string>;

        /**
         * Converts the given normalized {@code uri} generated by {@link #normalizeUri(Uri)} into a denormalized one.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the {@link ohos.utils.net.Uri} object to denormalize.
         * @return Returns the denormalized {@code Uri} object if the denormalization is successful; returns the
         * original {@code Uri} passed to this method if there is nothing to do; returns {@code null} if the data
         * identified by the normalized {@code Uri} cannot be found in the current environment.
         * @throws DataShareRemoteException Throws this exception if the remote process exits.
         * @throws NullPointerException Throws this exception if {@code uri} is null.
         * @see #normalizeUri
         * @StageModelOnly
         */
        denormalizeUri(uri: string, callback: AsyncCallback<string>): void;
        denormalizeUri(uri: string): Promise<string>;

        /**
         * Notifies the registered observers of a change to the data resource specified by Uri.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.DataShare.Consumer
         * @systemapi
         * @param uri Indicates the {@link ohos.utils.net.Uri} object to notifyChange.
         * @return -
         * @StageModelOnly
         */
        notifyChange(uri: string, callback: AsyncCallback<void>): void;
        notifyChange(uri: string): Promise<void>;
    }
}

export default dataShare;
