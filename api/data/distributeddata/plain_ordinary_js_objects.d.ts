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
/**
 * Obtains {@code Value} objects stored in a {@link KVStore} database.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @devices phone, tablet
 * @since 7
 */
export interface Value {
    /**
     * Indicates value type
     *
     * @see ValueType
     * @type {number}
     * @memberof Value
     */
    type: ValueType;
    value: Uint8Array | string | number | boolean;
}

/**
 * Provides key-value pairs stored in the distributed database.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @devices phone, tablet
 * @since 7
 */
export interface Entry {
    key: string;
    value: Value;
}

/**
 * Receives notifications of all data changes, including data insertion, update, and deletion.
 *
 * <p>If you have subscribed to {@code KVStore}, you will receive data change notifications and obtain the changed data
 * from the parameters in callback methods upon data insertion, update, or deletion.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @devices phone, tablet
 * @since 7
 */
export interface ChangeNotification {
    /** Indicates data addition records. */
    insertEntries: Entry[];
    /** Indicates data update records. */
    updateEntries: Entry[];
    /** Indicates data deletion records. */
    deleteEntries: Entry[];
    /** Indicates from device id. */
    deviceId: string;
}

/**
 * Describes the subscription type.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @devices phone, tablet
 * @since 7
 */
export enum SubscribeType {
    /** Subscription to local data changes */
    SUBSCRIBE_TYPE_LOCAL = 0,

    /** Subscription to remote data changes */
    SUBSCRIBE_TYPE_REMOTE = 1,

    /** Subscription to both local and remote data changes */
    SUBSCRIBE_TYPE_ALL = 2,
}

/**
 * Describes the {@code KVStore} type.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @since 7
 */
export enum KVStoreType {
    /** Device-collaborated database, as specified by {@code DeviceKVStore} */
    DEVICE_COLLABORATION = 0,

    /** Single-version database, as specified by {@code SingleKVStore} */
    SINGLE_VERSION = 1,

    /** Multi-version database, as specified by {@code MultiKVStore} */
    MULTI_VERSION = 2,
}

/**
 * Describes the {@code KVStore} type.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @since 7
 */
export enum SecurityLevel {
    /**
     * NO_LEVEL: mains not set the security level.
     *
     * @since 7
     */
    NO_LEVEL = 0,

    /**
     * S0: mains the db is public.
     * There is no impact even if the data is leaked.
     *
     * @since 7
     */
    S0 = 1,

    /**
     * S1: mains the db is low level security
     * There are some low impact, when the data is leaked.
     *
     * @since 7
     */
    S1 = 2,

    /**
     * S2: mains the db is middle level security
     * There are some major impact, when the data is leaked.
     *
     * @since 7
     */
    S2 = 3,

    /**
     * S3: mains the db is high level security
     * There are some severity impact, when the data is leaked.
     *
     * @since 7
     */
    S3 = 5,

    /**
     * S4: mains the db is critical level security
     * There are some critical impact, when the data is leaked.
     *
     * @since 7
     */
    S4 = 6,
}

/**
 * Provides configuration options for creating a {@code KVStore}.
 *
 * <p>You can determine whether to create another database if a {@code KVStore} database is missing,
 * whether to encrypt the database, and the database type.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @since 7
 */
export interface Options {
    createIfMissing?: boolean;
    encrypt?: boolean;
    backup?: boolean;
    autoSync?: boolean;
    kvStoreType?: KVStoreType;
    securityLevel?: SecurityLevel;
}

/**
 * Indicates the database synchronization mode.
 *
 * @Syscap SystemCapability.Data.DATA_DISTRIBUTEDDATAMGR
 * @since 7
 */
export enum SyncMode {
    /** Indicates that data is only pulled from the remote end. */
    PULL_ONLY = 0,
    /** Indicates that data is only pushed from the local end. */
    PUSH_ONLY = 1,
    /** Indicates that data is pushed from the local end, and then pulled from the remote end. */
    PUSH_PULL = 2
}

/**
 * Indicates the {@code ValueType}.
 *
 * <p>{@code ValueType} is obtained based on the value.
 *
 * @since 7
 */
export enum ValueType {
    /** Indicates that the value type is string. */
    STRING = 0,

    /** Indicates that the value type is int. */
    INTEGER = 1,

    /** Indicates that the value type is float. */
    FLOAT = 2,

    /** Indicates that the value type is byte array. */
    BYTE_ARRAY = 3,

    /** Indicates that the value type is boolean. */
    BOOLEAN = 4,

    /** Indicates that the value type is double. */
    DOUBLE = 5
}
