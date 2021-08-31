/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from '../../basic';
import { ChangeNotification, SubscribeType } from "./plain_ordinary_js_objects";

/**
 * Represents a key-value distributed database and provides methods for adding, deleting, modifying, querying,
 * and subscribing to distributed data.
 *
 * <p>You can create distributed databases of different types by {@link KVManager#getKVStore (Options, String)}
 * with input parameter {@code Options}. Distributed database types are defined in {@code KVStoreType},
 * including {@code SingleKVStore}.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @devices phone, tablet
 * @since 7
 * @version 1
 */
export interface KVStore {
    /**
     * Writes a key-value pair of the byte array type into the {@code KVStore} database.
     *
     * @param key Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @param value Indicates the byte array, which must be less than 4 MB.
     * @return Returns the error code of databases.
     * @since 7
     */
    put(key: string, value: Uint8Array | string | number | boolean, callback: AsyncCallback<void>): void;
    put(key: string, value: Uint8Array | string | number | boolean): Promise<void>;

    /**
     * Deletes the key-value pair based on a specified key.
     *
     * @param key Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
     * Spaces before and after the key will be cleared.
     * @return Returns the error code of databases.
     * @since 7
     */
    delete(key: string, callback: AsyncCallback<void>): void;
    delete(key: string): Promise<void>;

    /**
     * turn on from the data change notify based on the specified {@code subscribeType}.
     *
     * @param type Indicates the subscription type, which is defined in {@code SubscribeType}.
     * @param observer Indicates the observer of data change events in the distributed database.
     * @return Returns the error code of databases.
     * @since 7
     */
    on(event: 'dataChange', type: SubscribeType, observer: Callback<ChangeNotification>): void;

    /**
     * Subscribe to the notification of store synchronization completion.
     *
     * <p>Sync result is returned through asynchronous callback.
     *
     * @param syncCallback Indicates the callback used to send the synchronization result to the caller.
     * @return Returns the {@code number} object.
     * @since 7
     */
    on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;
}

/**
 * KVStore constants
 */
export module Constants {
    /**
    * max key length.
    */
    const MAX_KEY_LENGTH = 1024;

    /**
     * max value length.
     */
    const MAX_VALUE_LENGTH = 4194303;

    /**
     * max device coordinate key length.
     */
    const MAX_KEY_LENGTH_DEVICE = 896;

    /**
     * max store id length.
     */
    const MAX_STORE_ID_LENGTH = 128;

    /**
     * max query length.
     */
    const MAX_QUERY_LENGTH = 512000;

    /**
     * max batch operation size.
     */
    const MAX_BATCH_SIZE = 128;
}