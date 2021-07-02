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
import { AsyncCallback } from '../../basic';
import { KVStore } from "./kvstore";
import { SyncMode } from "./plain_ordinary_js_objects";

/**
 * Provides methods related to single-version distributed databases.
 *
 * <p>To create a {@code SingleKVStore} database,
 * you can use the {@link data.distributed.common.KVManager#getKVStore​(Options, String)} method
 * with {@code KVStoreType} set to {@code SINGLE_VERSION} for the input parameter {@code Options}.
 * This database synchronizes data to other databases in time sequence.
 * The {@code SingleKVStore} database does not support
 * synchronous transactions, or data search using snapshots.
 *
 * @devices phone, tablet
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @since 7
 * @version 1
 */
export interface SingleKVStore extends KVStore {
    /**
     * Obtains the value of a specified key.
     *
     * @param key Indicates the key of the value to be queried.
     * @return Returns the value matching the given criteria.
     * @throws Throws exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
     * @since 7
     */
    get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void;
    get(key: string): Promise<Uint8Array | string | boolean | number>;

    /**
     * Synchronizing KVStore Data Between Devices.
     *
     * @param deviceIdList Indicates the {@code string}.
     * @param mode Indicates the {@code SyncMode} object.
     * @param allowedDelayMs Indicates the number type parameter.
     * @return Returns the {@code number} object.
     * @since 7
     */
    sync(deviceIdList: string[], mode: SyncMode, allowedDelayMs?: number): void;
}


