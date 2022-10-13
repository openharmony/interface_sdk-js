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

import { AsyncCallback, Callback } from './basic';
import { ValuesBucket } from './@ohos.data.ValuesBucket';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import DataShareResultSet from './@ohos.data.DataShareResultSet';
import Context from './application/Context';

/**
 * Providers interfaces to creat a {@link KVManager} or {@link KVManagerV9} istances.
 * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
 * @import N/A
 * @since 7
 */
declare namespace distributedData {
    /**
     * Provides configuration information for {@link KVManager} or {@link KVManagerV9} instances,
     * including the caller's package name and distributed network type.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    interface KVManagerConfig {
        /**
         * Indicates the user information
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        userInfo: UserInfo;

        /**
         * Indicates the bundleName
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        bundleName: string;

        /**
         * Indicates the ability or hap context
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @Note: if swap the area, you should close all the KV store and use the new Context to create the KVManager
         * @since 9
         */
        context: Context;
    }

    /**
     * Manages user information.
     *
     * <p>This class provides methods for obtaining the user ID and type, setting the user ID and type,
     * and checking whether two users are the same.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    interface UserInfo {
        /** 
         * Indicates the user ID to set 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        userId?: string;

        /** 
         * Indicates the user type to set 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        userType?: UserType;
    }

    /**
     * Enumerates user types.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    enum UserType {
        /** 
         * Indicates a user that logs in to different devices using the same account. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        SAME_USER_ID = 0
    }

    /**
     * KVStore constants
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    namespace Constants {
        /**
         * max key length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        const MAX_KEY_LENGTH = 1024;

        /**
         * max value length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        const MAX_VALUE_LENGTH = 4194303;

        /**
         * max device coordinate key length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        const MAX_KEY_LENGTH_DEVICE = 896;

        /**
         * max store id length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        const MAX_STORE_ID_LENGTH = 128;

        /**
         * max query length.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        const MAX_QUERY_LENGTH = 512000;

        /**
         * max batch operation size.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        const MAX_BATCH_SIZE = 128;
    }

    /**
     * Indicates the {@code ValueType}.
     *
     * <p>{@code ValueType} is obtained based on the value.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    enum ValueType {
        /** 
         * Indicates that the value type is string. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        STRING = 0,

        /**
         * Indicates that the value type is int. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        INTEGER = 1,

        /** 
         * Indicates that the value type is float. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        FLOAT = 2,

        /** 
         * Indicates that the value type is byte array. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         * */
        BYTE_ARRAY = 3,

        /** 
         * Indicates that the value type is boolean. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         * */
        BOOLEAN = 4,

        /** 
         * Indicates that the value type is double. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        DOUBLE = 5
    }

    /**
     * Obtains {@code Value} objects stored in a {@link KVStore} or {@link KVStoreV9} database.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    interface Value {
        /**
         * Indicates value type
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @see ValueType
         * @type {number}
         * @memberof Value
         * @since 7
         */
        type: ValueType;
        /**
         * Indicates value
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        value: Uint8Array | string | number | boolean;
    }

    /**
     * Provides key-value pairs stored in the distributed database.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    interface Entry {
        /**
         * Indicates key
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        key: string;
        /**
         * Indicates value
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        value: Value;
    }

    /**
     * Receives notifications of all data changes, including data insertion, update, and deletion.
     *
     * <p>If you have subscribed to {@code KVStore} or {@code KVStoreV9}, you will receive data change notifications and
     * obtain the changed data from the parameters in callback methods upon data insertion, update, or deletion.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    interface ChangeNotification {
        /** 
         * Indicates data addition records. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        insertEntries: Entry[];
        /** 
         * Indicates data update records.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        updateEntries: Entry[];
        /** 
         * Indicates data deletion records. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        deleteEntries: Entry[];
        /**
         * Indicates from device id.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        deviceId: string;
    }

    /**
     * Indicates the database synchronization mode.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    enum SyncMode {
        /** 
         * Indicates that data is only pulled from the remote end.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        PULL_ONLY = 0,
        /** 
         * Indicates that data is only pushed from the local end. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        PUSH_ONLY = 1,
        /** 
         * Indicates that data is pushed from the local end, and then pulled from the remote end. 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        PUSH_PULL = 2
    }

    /**
     * Describes the subscription type.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    enum SubscribeType {
        /** 
         * Subscription to local data changes 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
        */
        SUBSCRIBE_TYPE_LOCAL = 0,

        /** 
         * Subscription to remote data changes 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
        */
        SUBSCRIBE_TYPE_REMOTE = 1,

        /** 
         * Subscription to both local and remote data changes 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        SUBSCRIBE_TYPE_ALL = 2,
    }

    /**
     * Describes the {@code KVStore} or {@code KVStoreV9}type.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    enum KVStoreType {
        /** 
         * Device-collaborated database, as specified by {@code DeviceKVStore} or {@code DeviceKVStoreV9}
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @import N/A
         * @since 7
         */
        DEVICE_COLLABORATION = 0,

        /** 
         * Single-version database, as specified by {@code SingleKVStore} 
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        SINGLE_VERSION = 1,

        /** 
         * Multi-version database, as specified by {@code MultiKVStore} 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @import N/A
         * @since 7
         */
        MULTI_VERSION = 2,
    }

    /**
     * Describes the {@code KVStore} or {@code KVStoreV9} type.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    enum SecurityLevel {
        /**
         * NO_LEVEL: mains not set the security level.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @import N/A
         * @since 7
         */
        NO_LEVEL = 0,

        /**
         * S0: mains the db is public.
         * There is no impact even if the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        S0 = 1,

        /**
         * S1: mains the db is low level security
         * There are some low impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        S1 = 2,

        /**
         * S2: mains the db is middle level security
         * There are some major impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        S2 = 3,

        /**
         * S3: mains the db is high level security
         * There are some severity impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        S3 = 5,

        /**
         * S4: mains the db is critical level security
         * There are some critical impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        S4 = 6,
    }

    /**
     * Provides configuration options for creating a {@code KVStore} or {@code KVStoreV9}.
     *
     * <p>You can determine whether to create another database if a {@code KVStore} or {@code KVStoreV9} database is
     * missing, whether to encrypt the database, and the database type.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    interface Options {
        /**
         * Indicates whether to createa database when the database file does not exist
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        createIfMissing?: boolean;
        /**
         * Indicates setting whether database files are encrypted
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        encrypt?: boolean;
        /**
         * Indicates setting whether to back up database files
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        backup?: boolean;
        /**
         * Indicates setting whether database files are automatically synchronized
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        autoSync?: boolean;
        /**
         * Indicates setting the databse type
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        kvStoreType?: KVStoreType;
        /**
         * Indicates setting the database security level
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @since 7
         */
        securityLevel?: SecurityLevel;
        /**
         * Indicates schema object 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @import N/A
         * @since 8
         */
        schema?: Schema;
    }

    /**
     * Represents the database schema.
     * 
     * You can create Schema objects and put them in Options when creating or opening the database.
     * 
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @import N/A
     * @since 8
     */
    class Schema {
        /**
         * A constructor used to create a Schema instance.
         * 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
        constructor()
        /**
         * Indicates the root json object.
         * 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
		root: FieldNode;  
        /**
         * Indicates the string array of json.
         * 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
        indexes: Array<string>;    
        /**
         * Indicates the mode of schema.
         * 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
        mode: number;
        /**
         * Indicates the skipsize of schema.
         * 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
        skip: number;
    }

    /**
     * Represents a node of a {@link Schema} instance.
     * 
     * <p>Through the {@link Schema} instance, you can define the fields contained in the values stored in a database.
     * 
     * <p>A FieldNode of the {@link Schema} instance is either a leaf or a non-leaf node.
     * 
     * <p>The leaf node must have a value; the non-leaf node must have a child {@code FieldNode}.
     * 
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @import N/A
     * @since 8
     */
    class FieldNode {
        /**
         * A constructor used to create a FieldNode instance with the specified field.
         * name Indicates the field node name.
         * 
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
        constructor(name: string)
        /**
         * Adds a child node to this {@code FieldNode}.
         * 
         * <p>Adding a child node makes this node a non-leaf node. Field value will be ignored if it has child node.
         * 
         * @param child The field node to append.
         * @returns Returns true if the child node is successfully added to this {@code FieldNode}; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
        appendChild(child: FieldNode): boolean;
        /**
         * Indicates the default value of fieldnode.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @since 8
         */
         default: string;
         /**
          * Indicates the nullable of database field.
          *
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @since 8
          */
         nullable: boolean;
         /**
          * Indicates the type of value.
          *
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @since 8
          */
         type: number;
    }

    /**
     * Provide methods to obtain the result set of the {@code KvStore} or {@code KvStoreV9} database.
     * 
     * <p>The result set is created by using the {@code getResultSet} method in the {@code DeviceKVStore} or
     * {@code DeviceKVStoreV9} class. This interface also provides methods for moving the data read position in the result set.
     * 
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @since 7
     */
    interface KvStoreResultSet {
        /**
         * Obtains the number of lines in a result set.
         * 
         * @returns Returns the number of lines.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        getCount(): number;
        /**
         * Obtains the current read position in a result set.
         * 
         * @returns Returns the current read position. The read position starts with 0.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        getPosition(): number;
        /**
         * Moves the read position to the first line.
         * 
         * <p>If the result set is empty, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        moveToFirst(): boolean;
        /**
         * Moves the read position to the last line.
         * 
         * <p>If the result set is empty, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        moveToLast(): boolean;
        /**
         * Moves the read position to the next line.
         * 
         * <p>If the result set is empty or the data in the last line is being read, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        moveToNext(): boolean;
        /**
         * Moves the read position to the previous line.
         * 
         * <p>If the result set is empty or the data in the first line is being read, false is returned.
         *
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        moveToPrevious(): boolean;
        /**
         * Moves the read position by a relative offset to the current position.
         * 
         * @param offset Indicates the relative offset to the current position. Anegative offset indicates moving backwards, and a
         * positive offset indicates moving forewards. Forexample, if the current position is entry 1 and thisoffset is 2,
         * the destination position will be entry 3; ifthe current position is entry 3 and this offset is -2,
         * the destination position will be entry 1. The valid final position after moving forwards starts with 0. If the
         * final position is invalid, false will be returned.
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead moveV9
         */
        move(offset: number): boolean;
        /**
         * Moves the read position by a relative offset to the current position.
         *
         * @param offset Indicates the relative offset to the current position. Anegative offset indicates moving backwards, and a
         * positive offset indicates moving forewards. Forexample, if the current position is entry 1 and thisoffset is 2,
         * the destination position will be entry 3; ifthe current position is entry 3 and this offset is -2,
         * the destination position will be entry 1. The valid final position after moving forwards starts with 0. If the
         * final position is invalid, false will be returned.
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        moveV9(offset: number): boolean;
        /**
         * Moves the read position from 0 to an absolute position.
         * 
         * @param position Indicates the absolute position.
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead moveToPositionV9
         */
        moveToPosition(position: number): boolean;
        /**
         * Moves the read position from 0 to an absolute position.
         *
         * @param position Indicates the absolute position.
         * @returns Returns true if the operation succeeds; return false otherwise.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        moveToPositionV9(position: number): boolean;
        /**
         * Checks whether the read position is the first line.
         * 
         * @returns Returns true if the read position is the first line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        isFirst(): boolean;
        /**
         * Checks whether the read position is the last line.
         * 
         * @returns Returns true if the read position is the last line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        isLast(): boolean;
        /**
         * Checks whether the read position is before the last line.
         * 
         * @returns Returns true if the read position is before the first line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        isBeforeFirst(): boolean;
        /**
         * Checks whether the read position is after the last line.
         * 
         * @returns Returns true if the read position is after the last line; returns false otherwise.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        isAfterLast(): boolean;
        /**
         * Obtains a key-value pair.
         * 
         * @returns Returns a key-value pair.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead getEntryV9
         */
        getEntry(): Entry;
        /**
         * Obtains a key-value pair.
         *
         * @returns Returns a key-value pair.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getEntryV9(): Entry;
    }

    /**
     * Represents a database query using a predicate.
     *
     * <p>This class provides a constructor used to create a {@code Query} instance, which is used to query data matching specified
     * conditions in the database.
     *
     * <p>This class also provides methods for adding predicates to the {@code Query} instance.
     *
     * @import N/A
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8
     * @deprecated since 9
     * @useinstead QueryV9
     */
    class Query {
        /**
         * A constructor used to create a Query instance.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        constructor()
        /**
         * Resets this {@code Query} object.
         *
         * @returns Returns the reset {@code Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        reset(): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is equal to the specified long value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value IIndicates the long value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        equalTo(field: string, value: number|string|boolean): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not equal to the specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        notEqualTo(field: string, value: number|string|boolean): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or equal to the
         * specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        greaterThan(field: string, value: number|string|boolean): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is less than the specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        lessThan(field: string, value: number|string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is greater than or equal to the
         * specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        greaterThanOrEqualTo(field: string, value: number|string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is less than or equal to the
         * specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        lessThanOrEqualTo(field: string, value: number|string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is null.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        isNull(field: string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified int value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the int value list.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        inNumber(field: string, valueList: number[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is within the specified string value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the string value list.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        inString(field: string, valueList: string[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not within the specified int value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the int value list.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        notInNumber(field: string, valueList: number[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not within the specified string value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the string value list.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        notInString(field: string, valueList: string[]): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is similar to the specified string value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the string value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        like(field: string, value: string): Query;
        /**
         * Constructs a {@code Query} object to query entries with the specified field whose value is not similar to the specified string value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the string value.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        unlike(field: string, value: string): Query;
        /**
         * Constructs a {@code Query} object with the and condition.
         *
         * <p>Multiple predicates should be connected using the and or or condition.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        and(): Query;
        /**
         * Constructs a {@code Query} object with the or condition.
         *
         * <p>Multiple predicates should be connected using the and or or condition.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        or(): Query;
        /**
         * Constructs a {@code Query} object to sort the query results in ascending order.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        orderByAsc(field: string): Query;
        /**
         * Constructs a {@code Query} object to sort the query results in descending order.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        orderByDesc(field: string): Query;
        /**
         * Constructs a {@code Query} object to specify the number of results and the start position.
         *
         * @param total Indicates the number of results.
         * @param offset Indicates the start position.
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        limit(total: number, offset: number): Query;
        /**
         * Creates a {@code query} condition with a specified field that is not null.
         *
         * @param field Indicates the specified field.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        isNotNull(field: string): Query;
        /**
         * Creates a query condition group with a left bracket.
         *
         * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can be used as a
         * whole to combine with other query conditions.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        beginGroup(): Query;
        /**
         * Creates a query condition group with a right bracket.
         *
         * <p>Multiple query conditions in an {@code Query} object can be grouped. The query conditions in a group can be used as a
         * whole to combine with other query conditions.
         *
         * @returns Returns the {@coed Query} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        endGroup(): Query;
        /**
         * Creates a query condition with a specified key prefix.
         *
         * @param prefix Indicates the specified key prefix.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        prefixKey(prefix: string): Query;
        /**
         * Sets a specified index that will be preferentially used for query.
         *
         * @param index Indicates the index to set.
         * @returns Returns the {@coed Query} object.
         * @throws Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        setSuggestIndex(index: string): Query;
		/**
		 * Add device ID key prefix.Used by {@code DeviceKVStore}.
		 *
		 * @param deviceId Specify device id to query from.
		 * @return Returns the {@code Query} object with device ID prefix added.
		 * @throw Throws this exception if input is invalid.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
		 */
		deviceId(deviceId:string):Query;
		/**
		 * Get a String that repreaents this {@code Query}.
		 *
		 * <p>The String would be parsed to DB query format.
		 * The String length should be no longer than 500kb.
		 *
		 * @return String representing this {@code Query}.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
		 */
		getSqlLike():string;
    }

    /**
     * Represents a database query using a predicate.
     *
     * <p>This class provides a constructor used to create a {@code QueryV9} instance, which is used to query data
     * matching specified conditions in the database.
     *
     * <p>This class also provides methods for adding predicates to the {@code QueryV9} instance.
     *
     * @import N/A
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    class QueryV9 {
        /**
         * A constructor used to create a Query instance.
         *
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        constructor()
        /**
         * Resets this {@code QueryV9} object.
         *
         * @returns Returns the reset {@code QueryV9} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        reset(): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is equal to the specified long value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value IIndicates the long value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        equalTo(field: string, value: number|string|boolean): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is not equal to the specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        notEqualTo(field: string, value: number|string|boolean): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is greater than or equal to the
         * specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        greaterThan(field: string, value: number|string|boolean): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is less than the specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        lessThan(field: string, value: number|string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is greater than or
         * equal to the specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        greaterThanOrEqualTo(field: string, value: number|string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is less than or equal to the
         * specified int value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the int value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        lessThanOrEqualTo(field: string, value: number|string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is null.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isNull(field: string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is within the specified int value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the int value list.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        inNumber(field: string, valueList: number[]): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is within the specified string value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the string value list.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        inString(field: string, valueList: string[]): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is not within the specified int value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the int value list.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        notInNumber(field: string, valueList: number[]): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is not within the specified string value list.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param valueList Indicates the string value list.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        notInString(field: string, valueList: string[]): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is similar to the specified string value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the string value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        like(field: string, value: string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to query entries with the specified field whose value is not similar to the specified string value.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @param value Indicates the string value.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        unlike(field: string, value: string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object with the and condition.
         *
         * <p>Multiple predicates should be connected using the and or or condition.
         *
         * @returns Returns the {@coed QueryV9} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        and(): QueryV9;
        /**
         * Constructs a {@code QueryV9} object with the or condition.
         *
         * <p>Multiple predicates should be connected using the and or or condition.
         *
         * @returns Returns the {@coed QueryV9} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        or(): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to sort the query results in ascending order.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        orderByAsc(field: string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to sort the query results in descending order.
         *
         * @param field Indicates the field, which must start with $. and cannot contain ^.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        orderByDesc(field: string): QueryV9;
        /**
         * Constructs a {@code QueryV9} object to specify the number of results and the start position.
         *
         * @param total Indicates the number of results.
         * @param offset Indicates the start position.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        limit(total: number, offset: number): QueryV9;
        /**
         * Creates a {@code QueryV9} condition with a specified field that is not null.
         *
         * @param field Indicates the specified field.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        isNotNull(field: string): QueryV9;
        /**
         * Creates a query condition group with a left bracket.
         *
         * <p>Multiple query conditions in an {@code QueryV9} object can be grouped. The query conditions in a group can be used as a
         * whole to combine with other query conditions.
         *
         * @returns Returns the {@coed QueryV9} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        beginGroup(): QueryV9;
        /**
         * Creates a query condition group with a right bracket.
         *
         * <p>Multiple query conditions in an {@code QueryV9} object can be grouped. The query conditions in a group can be used as a
         * whole to combine with other query conditions.
         *
         * @returns Returns the {@coed QueryV9} object.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        endGroup(): QueryV9;
        /**
         * Creates a query condition with a specified key prefix.
         *
         * @param prefix Indicates the specified key prefix.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        prefixKey(prefix: string): QueryV9;
        /**
         * Sets a specified index that will be preferentially used for query.
         *
         * @param index Indicates the index to set.
         * @returns Returns the {@coed QueryV9} object.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        setSuggestIndex(index: string): QueryV9;
        /**
         * Add device ID key prefix.Used by {@code DeviceKVStore}.
         *
         * @param deviceId Specify device id to query from.
         * @return Returns the {@code QueryV9} object with device ID prefix added.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        deviceId(deviceId:string):QueryV9;
        /**
         * Get a String that repreaents this {@code QueryV9}.
         *
         * <p>The String would be parsed to DB query format.
         * The String length should be no longer than 500kb.
         *
         * @return String representing this {@code QueryV9}.
         * @import N/A
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        getSqlLike():string;
    }

    /**
     * Represents a key-value distributed database and provides methods for adding, deleting, modifying, querying,
     * and subscribing to distributed data.
     *
     * <p>You can create distributed databases of different types by {@link KVManager#getKVStore (Options, String)}
     * with input parameter {@code Options}. Distributed database types are defined in {@code KVStoreType},
     * including {@code SingleKVStore}.
     *
     *
     * @import N/A
     * @version 1
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead KVStoreV9
     */
    interface KVStore {
        /**
         * Writes a key-value pair of the string type into the {@code KvStore} database.
         *
         * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
         *
         * @param key Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @param value Indicates the string value, which must be less than 4 MB as a UTF-8 byte array.
         * @throws Throws this exception if any of the following errors
         * occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 7
         */
        put(key: string, value: Uint8Array | string | number | boolean, callback: AsyncCallback<void>): void;
        put(key: string, value: Uint8Array | string | number | boolean): Promise<void>;

        /**
         * Deletes the key-value pair based on a specified key.
         *
         * @param key Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @throws Throws this exception if any of the following errors
         * occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and
         * {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 7
         */
        delete(key: string, callback: AsyncCallback<void>): void;
        delete(key: string): Promise<void>;

        /**
         * Registers a {@code KvStoreObserver} for the database. When data in the distributed database changes, the callback in
         * {@code KvStoreObserver} will be invoked.
         *
         * @param type Indicates the subscription type, which is defined in {@code SubscribeType}.
         * @param listener Indicates the observer of data change events in the distributed database.
         * @throws Throws this exception if any of the following errors
         * occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
         * {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 7
         */
        on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

        /**
         * Subscribes from the {@code KvStore} database based on the specified subscribeType and {@code KvStoreObserver}.
         *
         * @throws Throws this exception if any of the following errors
         * occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
         * {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 7
         */
        on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

        /**
         * Unsubscribes from the {@code KvStore} database based on the specified subscribeType and {@code KvStoreObserver}.
         *
         * @param listener Indicates the data change observer registered by {#subscribe(SubscribeType, KvStoreObserver)}.
         * @throws Throws this exception if any of the following errors
         * occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
         * {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        off(event: 'dataChange', listener?: Callback<ChangeNotification>): void;

        /**
         * Inserts key-value pairs into the {@code KvStore} database in batches.
         *
         * @param entries Indicates the key-value pairs to be inserted in batches.
         * @throws Throws this exception if a database error occurs.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        putBatch(entries: Entry[], callback: AsyncCallback<void>): void;
        putBatch(entries: Entry[]): Promise<void>;

        /**
         * Deletes key-value pairs in batches from the {@code KvStore} database.
         *
         * @param keys Indicates the key-value pairs to be deleted in batches.
         * @throws Throws this exception if a database error occurs.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        deleteBatch(keys: string[], callback: AsyncCallback<void>): void;
        deleteBatch(keys: string[]): Promise<void>;

        /**
         * Starts a transaction operation in the {@code KvStore} database.
         *
         * <p>After the database transaction is started, you can submit or roll back the operation.
         *
         * @throws Throws this exception if a database error occurs.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        startTransaction(callback: AsyncCallback<void>): void;
        startTransaction(): Promise<void>;

        /**
         * Submits a transaction operation in the {@code KvStore} database.
         *
         * @param callback
         * @throws Throws this exception if a database error occurs.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        commit(callback: AsyncCallback<void>): void;
        commit(): Promise<void>;

        /**
         * Rolls back a transaction operation in the {@code KvStore} database.
         *
         * @throws Throws this exception if a database error occurs.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        rollback(callback: AsyncCallback<void>): void;
        rollback(): Promise<void>;

        /**
         * Sets whether to enable synchronization.
         *
         * @param enabled Specifies whether to enable synchronization. The value true means to enable
         * synchronization, and false means the opposite.
         * @throws Throws this exception if an internal service error occurs.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        enableSync(enabled: boolean, callback: AsyncCallback<void>): void;
        enableSync(enabled: boolean): Promise<void>;

        /**
         * Sets synchronization range labels.
         *
         * <p>The labels determine the devices with which data will be synchronized.
         *
         * @param localLabels Indicates the synchronization labels of the local device.
         * @param remoteSupportLabels Indicates the labels of the devices with which data will be synchronized.
         * @throws Throws this exception if an internal service error occurs.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 8
         */
        setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void;
        setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>;
    }

    /**
     * Represents a key-value distributed database and provides methods for adding, deleting, modifying, querying,
     * and subscribing to distributed data.
     *
     * <p>You can create distributed databases of different types by {@link KVManagerV9#getKVStore (Options, String)}
     * with input parameter {@code Options}. Distributed database types are defined in {@code KVStoreType},
     * including {@code SingleKVStoreV9}.
     *
     * @import N/A
     * @version 1
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9
     */
    interface KVStoreV9 {
        /**
         * Writes a key-value pair of the string type into the {@code KvStoreV9} database.
         *
         * <p>If you do not want to synchronize this key-value pair to other devices, set the write option in the local database.
         *
         * @param key Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @param value Indicates the string value, which must be less than 4 MB as a UTF-8 byte array.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        put(key: string, value: Uint8Array | string | number | boolean, callback: AsyncCallback<void>): void;
        put(key: string, value: Uint8Array | string | number | boolean): Promise<void>;

        /**
         * Writes a value of the valuesbucket type into the {@code KvStoreV9} database.
         *
         * @param value Indicates the data record to put.
         * Spaces before and after the key will be cleared.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @systemapi
         * @since 9
         */
        putBatch(value: Array<ValuesBucket>, callback: AsyncCallback<void>): void;
        putBatch(value: Array<ValuesBucket>): Promise<void>;

        /**
         * Deletes the key-value pair based on a specified key.
         *
         * @param key Indicates the key. The length must be less than {@code MAX_KEY_LENGTH}.
         * Spaces before and after the key will be cleared.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @since 9
         */
        delete(key: string, callback: AsyncCallback<void>): void;
        delete(key: string): Promise<void>;

        /**
         * Deletes the key-value pair based on a specified key.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @systemapi
         * @param predicates Indicates the datasharePredicates.
         * Spaces before and after the key will be cleared.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        delete(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>);
        delete(predicates: dataSharePredicates.DataSharePredicates): Promise<void>;

        /**
         * Backs up a database in a specified name.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param file Indicates the name that saves the database backup.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        backup(file:string, callback: AsyncCallback<void>):void;
        backup(file:string): Promise<void>;

        /**
         * Restores a database from a specified database file.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param file Indicates the name that saves the database file.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        restore(file:string, callback: AsyncCallback<void>):void;
        restore(file:string): Promise<void>;

        /**
         * Delete a backup files based on a specified name.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param files list Indicates the name that backup file to delete.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        deleteBackup(files:Array<string>, callback: AsyncCallback<Array<[string, number]>>):void;
        deleteBackup(files:Array<string>): Promise<Array<[string, number]>>;

        /**
         * Registers a {@code KvStoreObserver} for the database. When data in the distributed database changes, the callback in
         * {@code KvStoreObserver} will be invoked.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param type Indicates the subscription type, which is defined in {@code SubscribeType}.
         * @param listener Indicates the observer of data change events in the distributed database.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100001 - if the database has been subscribed over the max subscription time limit.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

        /**
         * Subscribes from the {@code KvStoreV9} database based on the specified subscribeType and {@code KvStoreObserver}.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

        /**
         * Unsubscribes from the {@code KvStoreV9} database based on the specified subscribeType and {@code KvStoreObserver}.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param listener Indicates the data change observer registered by {#subscribe(SubscribeType, KvStoreObserver)}.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        off(event:'dataChange', listener?: Callback<ChangeNotification>): void;

        /**
         * UnRegister Synchronizes {@code KvStoreV9} database callback.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param syncCallback Indicates the callback used to send the synchronization result to caller.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;

        /**
         * Inserts key-value pairs into the {@code KvStoreV9} database in batches.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param entries Indicates the key-value pairs to be inserted in batches.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        putBatch(entries: Entry[], callback: AsyncCallback<void>): void;
        putBatch(entries: Entry[]): Promise<void>;

        /**
         * Deletes key-value pairs in batches from the {@code KvStoreV9} database.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param keys Indicates the key-value pairs to be deleted in batches.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        deleteBatch(keys: string[], callback: AsyncCallback<void>): void;
        deleteBatch(keys: string[]): Promise<void>;

        /**
         * Starts a transaction operation in the {@code KvStoreV9} database.
         *
         * <p>After the database transaction is started, you can submit or roll back the operation.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         */
        startTransaction(callback: AsyncCallback<void>): void;
        startTransaction(): Promise<void>;

        /**
         * Submits a transaction operation in the {@code KvStoreV9} database.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param callback
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         */
        commit(callback: AsyncCallback<void>): void;
        commit(): Promise<void>;

        /**
         * Rolls back a transaction operation in the {@code KvStoreV9} database.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         */
        rollback(callback: AsyncCallback<void>): void;
        rollback(): Promise<void>;

        /**
         * Sets whether to enable synchronization.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param enabled Specifies whether to enable synchronization. The value true means to enable
         * synchronization, and false means the opposite.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        enableSync(enabled: boolean, callback: AsyncCallback<void>): void;
        enableSync(enabled: boolean): Promise<void>;

        /**
         * Sets synchronization range labels.
         *
         * <p>The labels determine the devices with which data will be synchronized.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param localLabels Indicates the synchronization labels of the local device.
         * @param remoteSupportLabels Indicates the labels of the devices with which data will be synchronized.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void;
        setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>;
    }

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
     * @since 7
     * @deprecated since 9
     * @useinstead SingleKVStoreV9
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @version 1
     */
    interface SingleKVStore extends KVStore {
        /**
         * Obtains the {@code String} value of a specified key.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param key Indicates the key of the boolean value to be queried.
         * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
         */
        get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void;
        get(key: string): Promise<Uint8Array | string | boolean | number>;

        /**
         * Obtains all key-value pairs that match a specified key prefix.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param keyPrefix Indicates the key prefix to match.
         * @returns Returns the list of all key-value pairs that match the specified key prefix.
         * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         */
        getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;
        getEntries(keyPrefix: string): Promise<Entry[]>;

        /**
         * Obtains the list of key-value pairs matching the specified {@code Query} object.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param query Indicates the {@code Query} object.
         * @returns Returns the list of key-value pairs matching the specified {@code Query} object.
         * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         */
        getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;
        getEntries(query: Query): Promise<Entry[]>;

        /**
         * Obtains the result sets with a specified prefix from a {@code KvStore} database. The {@code KvStoreResultSet} object can be used to
         * query all key-value pairs that meet the search criteria. Each {@code KvStore} instance can have a maximum of four
         * {@code KvStoreResultSet} objects at the same time. If you have created four objects, calling this method will return a
         * failure. Therefore, you are advised to call the closeResultSet method to close unnecessary {@code KvStoreResultSet} objects
         * in a timely manner.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param keyPrefix Indicates the key prefix to match.
         * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         */
        getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(keyPrefix: string): Promise<KvStoreResultSet>;

        /**
         * Obtains the {@code KvStoreResultSet} object matching the specified {@code Query} object.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param query Indicates the {@code Query} object.
         * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         */
        getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(query: Query): Promise<KvStoreResultSet>;

        /**
         * Closes a {@code KvStoreResultSet} object returned by getResultSet.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param resultSet Indicates the {@code KvStoreResultSet} object to close.
         * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         */
        closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void;
        closeResultSet(resultSet: KvStoreResultSet): Promise<void>;

        /**
         * Obtains the number of results matching the specified {@code Query} object.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param query Indicates the {@code Query} object.
         * @returns Returns the number of results matching the specified {@code Query} object.
         * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         */
        getResultSize(query: Query, callback: AsyncCallback<number>): void;
        getResultSize(query: Query): Promise<number>;

        /**
         * void removeDeviceData​({@link String} deviceId) throws {@link KvStoreException}
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         */
        removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;
        removeDeviceData(deviceId: string): Promise<void>;

        /**
         * Synchronizes the database to the specified devices with the specified delay allowed.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param deviceIds Indicates the list of devices to which to synchronize the database.
         * @param mode Indicates the synchronization mode. The value can be {@code PUSH}, {@code PULL}, or {@code PUSH_PULL}.
         * @param delayMs Indicates the delay allowed for the synchronization, in milliseconds.
         * @throws Throws this exception if any of the following errors
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * occurs: {@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
         */
         sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void;

        /**
         * Register Synchronizes SingleKvStore databases callback.
         * <p> Sync result is returned through asynchronous callback.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param syncCallback Indicates the callback used to send the synchronization result to the caller.
         * @throws Throws this exception if no {@code SingleKvStore} database is available.
         */
         on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

        /**
         * UnRegister Synchronizes SingleKvStore databases callback.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @throws Throws this exception if no {@code SingleKvStore} database is available.
         */
         off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;

         /**
          * Sets the default delay allowed for database synchronization
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.Core
          * @param defaultAllowedDelayMs Indicates the default delay allowed for the database synchronization, in milliseconds.
          * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
          */
         setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void;
         setSyncParam(defaultAllowedDelayMs: number): Promise<void>;

         /**
          * Get the security level of the database.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.Core
          * @returns SecurityLevel {@code SecurityLevel} the security level of the database.
          * @throws Throws this exception if any of the following errors occurs:{@code SERVER_UNAVAILABLE},
          * {@code IPC_ERROR}, and {@code DB_ERROR}.
          */
         getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void;
         getSecurityLevel(): Promise<SecurityLevel>;
    }

    /**
     * Provides methods related to single-version distributed databases.
     *
     * <p>To create a {@code SingleKVStoreV9} database,
     * you can use the {@link data.distributed.common.KVManagerV9#getKVStore​(Options, String)} method
     * with {@code KVStoreType} set to {@code SINGLE_VERSION} for the input parameter {@code Options}.
     * This database synchronizes data to other databases in time sequence.
     * The {@code SingleKVStoreV9} database does not support
     * synchronous transactions, or data search using snapshots.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @version 1
     */
    interface SingleKVStoreV9 extends KVStoreV9 {
        /**
         * Obtains the {@code String} value of a specified key.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void;
        get(key: string): Promise<Uint8Array | string | boolean | number>;

        /**
         * Obtains all key-value pairs that match a specified key prefix.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param keyPrefix Indicates the key prefix to match.
         * @returns Returns the list of all key-value pairs that match the specified key prefix.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;
        getEntries(keyPrefix: string): Promise<Entry[]>;

        /**
         * Obtains the list of key-value pairs matching the specified {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the list of key-value pairs matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getEntries(query: QueryV9, callback: AsyncCallback<Entry[]>): void;
        getEntries(query: QueryV9): Promise<Entry[]>;

        /**
         * Obtains the result sets with a specified prefix from a {@code KvStoreV9} database. The {@code KvStoreResultSet} object can be used to
         * query all key-value pairs that meet the search criteria. Each {@code KvStoreV9} instance can have a maximum of four
         * {@code KvStoreResultSet} objects at the same time. If you have created four objects, calling this method will return a
         * failure. Therefore, you are advised to call the closeResultSet method to close unnecessary {@code KvStoreResultSet} objects
         * in a timely manner.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param keyPrefix Indicates the key prefix to match.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(keyPrefix: string): Promise<KvStoreResultSet>;

        /**
         * Obtains the {@code KvStoreResultSet} object matching the specified {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param query Indicates the {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(query: QueryV9, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(query: QueryV9): Promise<KvStoreResultSet>;

        /**
         * Obtains the KvStoreResultSet object matching the specified Predicate object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @systemapi
         * @param predicates Indicates the datasharePredicates.
         * Spaces before and after the key will be cleared.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KvStoreResultSet>;

        /**
         * Closes a {@code KvStoreResultSet} object returned by getResultSet.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param resultSet Indicates the {@code KvStoreResultSet} object to close.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void;
        closeResultSet(resultSet: KvStoreResultSet): Promise<void>;

        /**
         * Obtains the number of results matching the specified {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the number of results matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSize(query: QueryV9, callback: AsyncCallback<number>): void;
        getResultSize(query: QueryV9): Promise<number>;

        /**
         * void removeDeviceData​({@link String} deviceId) throws {@link KvStoreException}
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @import N/A
         * @param deviceId Indicates the device to be removed data.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;
        removeDeviceData(deviceId: string): Promise<void>;

        /**
         * Synchronizes the database to the specified devices with the specified delay allowed.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param deviceIds Indicates the list of devices to which to synchronize the database.
         * @param mode Indicates the synchronization mode. The value can be {@code PUSH}, {@code PULL}, or {@code PUSH_PULL}.
         * @param delayMs Indicates the delay allowed for the synchronization, in milliseconds.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void

        /**
         * Synchronizes the database to the specified devices with the specified delay allowed.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param deviceIds Indicates the list of devices to which to synchronize the database.
         * @param mode Indicates the synchronization mode. The value can be {@code PUSH}, {@code PULL}, or {@code PUSH_PULL}.
         * @param delayMs Indicates the delay allowed for the synchronization, in milliseconds.
         * @param query Indicates the {@code QueryV9} object.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        sync(deviceIds: string[], query: QueryV9, mode: SyncMode, delayMs?: number): void;

        /**
         * Registers a {@code KvStoreObserver} for the database. When data in the distributed database changes, the callback in
         * {@code KvStoreObserver} will be invoked.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param type Indicates the subscription type, which is defined in {@code SubscribeType}.
         * @param listener Indicates the observer of data change events in the distributed database.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100001 - if the database has been subscribed over the max subscription time limit.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

        /**
         * Register Synchronizes SingleKvStore databases callback.
         * <p> Sync result is returned through asynchronous callback.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param syncCallback Indicates the callback used to send the synchronization result to the caller.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

        /**
         * Unsubscribes from the SingleKvStore database based on the specified subscribeType and {@code KvStoreObserver}.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param listener Indicates the data change observer registered by {#subscribe(SubscribeType, KvStoreObserver)}.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        off(event:'dataChange', listener?: Callback<ChangeNotification>): void;

        /**
         * UnRegister Synchronizes SingleKvStore databases callback.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;


        /**
         * Sets the default delay allowed for database synchronization
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param defaultAllowedDelayMs Indicates the default delay allowed for the database synchronization, in milliseconds.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void;
        setSyncParam(defaultAllowedDelayMs: number): Promise<void>;

        /**
         * Get the security level of the database.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @returns SecurityLevel {@code SecurityLevel} the security level of the database.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         */
        getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void;
        getSecurityLevel(): Promise<SecurityLevel>;
    }

    /**
     * Manages distributed data by device in a distributed system.
     *
     * <p>To create a {@code DeviceKVStore} database, you can use the {@link data.distributed.common.KVManager.getKvStore(Options, String)}
     * method with {@code KvStoreType} set to {@code DEVICE_COLLABORATION} for the input parameter Options. This database manages distributed
     * data by device, and cannot modify data synchronized from remote devices. When an application writes a key-value pair entry
     * into the database, the system automatically adds the ID of the device running the application to the key.
     *
     * @since 8
     * @deprecated since 9
     * @useinstead DeviceKVStoreV9
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @import N/A
     */
    interface DeviceKVStore extends KVStore {
        /**
         * Obtains the {@code String} value matching a specified device ID and key.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Indicates the device to be queried.
         * @param key Indicates the key of the value to be queried.
         * @return Returns the value matching the given criteria.
         * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
         */
         get(deviceId: string, key: string, callback: AsyncCallback<boolean|string|number|Uint8Array>): void;
         get(deviceId: string, key: string): Promise<boolean|string|number|Uint8Array>;

         /**
          * Obtains all key-value pairs matching a specified device ID and key prefix.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param deviceId Identifies the device whose data is to be queried.
          * @param keyPrefix Indicates the key prefix to match.
          * @returns Returns the list of all key-value pairs meeting the given criteria.
          * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
          */
         getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void;
         getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>;

         /**
          * Obtains the list of key-value pairs matching the specified {@code Query} object.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param query Indicates the {@code Query} object.
          * @returns Returns the list of key-value pairs matching the specified {@code Query} object.
          * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
          */
         getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;
         getEntries(query: Query): Promise<Entry[]>;

         /**
          * Obtains the list of key-value pairs matching a specified device ID and {@code Query} object.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param deviceId Indicates the ID of the device to which the key-value pairs belong.
          * @param query Indicates the {@code Query} object.
          * @returns Returns the list of key-value pairs matching the specified {@code Query} object.
          */
         getEntries(deviceId: string, query: Query, callback: AsyncCallback<Entry[]>): void;
         getEntries(deviceId: string, query: Query): Promise<Entry[]>;

         /**
          * Obtains the {@code KvStoreResultSet} object matching the specified device ID and key prefix.
          *
          * <p>The {@code KvStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code KvStore}
          * instance can have a maximum of four {@code KvStoreResultSet} objects at the same time. If you have created four objects,
          * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
          * {@code KvStoreResultSet} objects in a timely manner.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param deviceId Identifies the device whose data is to be queried.
          * @param keyPrefix Indicates the key prefix to match.
          * @returns Returns the {@code KvStoreResultSet} objects.
          * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
          */
         getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void;
         getResultSet(deviceId: string, keyPrefix: string): Promise<KvStoreResultSet>;

         /**
          * Obtains the {@code KvStoreResultSet} object matching the specified {@code Query} object.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param query Indicates the {@code Query} object.
          * @returns Returns the {@code KvStoreResultSet} object matching the specified {@code Query} object.
          * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
          */
         getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void;
         getResultSet(query: Query): Promise<KvStoreResultSet>;

         /**
          * Obtains the {@code KvStoreResultSet} object matching a specified device ID and {@code Query} object.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param deviceId Indicates the ID of the device to which the {@code KvStoreResultSet} object belongs.
          * @param query Indicates the {@code Query} object.
          * @returns Returns the {@code KvStoreResultSet} object matching the specified {@code Query} object.
          */
         getResultSet(deviceId: string, query: Query, callback: AsyncCallback<KvStoreResultSet>): void;
         getResultSet(deviceId: string, query: Query): Promise<KvStoreResultSet>;

         /**
          * Closes a {@code KvStoreResultSet} object returned by getResultSet.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param resultSet Indicates the {@code KvStoreResultSet} object to close.
          * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
          */
         closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void;
         closeResultSet(resultSet: KvStoreResultSet): Promise<void>;

         /**
          * Obtains the number of results matching the specified {@code Query} object.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param query Indicates the {@code Query} object.
          * @returns Returns the number of results matching the specified {@code Query} object.
          * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
          */
         getResultSize(query: Query, callback: AsyncCallback<number>): void;
         getResultSize(query: Query): Promise<number>;

         /**
          * Obtains the number of results matching a specified device ID and {@code Query} object.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param deviceId Indicates the ID of the device to which the results belong.
          * @param query Indicates the {@code Query} object.
          * @returns Returns the number of results matching the specified {@code Query} object.
          */
         getResultSize(deviceId: string, query: Query, callback: AsyncCallback<number>): void;
         getResultSize(deviceId: string, query: Query): Promise<number>;

         /**
          * Removes data of a specified device from the current database. This method is used to remove only the data
          * synchronized from remote devices. This operation does not synchronize data to other databases or affect
          * subsequent data synchronization.
          *
          * @since 8
          * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
          * @param deviceId Identifies the device whose data is to be removed. The value cannot be the current device ID.
          * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
          * {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
          */
         removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;
         removeDeviceData(deviceId: string): Promise<void>;

        /**
         * Synchronizes {@code DeviceKVStore} databases.
         *
         * <p>This method returns immediately and sync result will be returned through asynchronous callback.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param deviceIds Indicates the list of IDs of devices whose
         * @param delayMs Indicates the delay allowed for the synchronization, in milliseconds.
         * {@code DeviceKVStore} databases are to be synchronized.
         * @param mode Indicates the synchronization mode, {@code PUSH}, {@code PULL}, or
         * {@code PUSH_PULL}.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @throws Throws this exception if no DeviceKVStore database is available.
         */
        sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void;

        /**
         * Register Synchronizes DeviceKVStore databases callback.
         *
         * <p>Sync result is returned through asynchronous callback.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param syncCallback Indicates the callback used to send the synchronization result to the caller.
         * @throws Throws this exception if no DeviceKVStore database is available.
         */
        on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

        /**
         * UnRegister Synchronizes DeviceKVStore databases callback.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @throws Throws this exception if no DeviceKVStore database is available.
         */
        off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;
    }

    /**
     * Manages distributed data by device in a distributed system.
     *
     * <p>To create a {@code DeviceKVStoreV9} database, you can use the {@link data.distributed.common.KVManagerV9.getKvStore(Options, String)}
     * method with {@code KvStoreType} set to {@code DEVICE_COLLABORATION} for the input parameter Options. This database manages distributed
     * data by device, and cannot modify data synchronized from remote devices. When an application writes a key-value pair entry
     * into the database, the system automatically adds the ID of the device running the application to the key.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @import N/A
     */
    interface DeviceKVStoreV9 extends KVStoreV9 {
        /**
         * Obtains the {@code String} value matching a specified device ID and key.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Indicates the device to be queried.
         * @param key Indicates the key of the value to be queried.
         * @return Returns the value matching the given criteria.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        get(deviceId: string, key: string, callback: AsyncCallback<boolean|string|number|Uint8Array>): void;
        get(deviceId: string, key: string): Promise<boolean|string|number|Uint8Array>;

        /**
         * Obtains all key-value pairs matching a specified device ID and key prefix.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Identifies the device whose data is to be queried.
         * @param keyPrefix Indicates the key prefix to match.
         * @returns Returns the list of all key-value pairs meeting the given criteria.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void;
        getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>;

        /**
         * Obtains the list of key-value pairs matching the specified {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the list of key-value pairs matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getEntries(query: QueryV9, callback: AsyncCallback<Entry[]>): void;
        getEntries(query: QueryV9): Promise<Entry[]>;

        /**
         * Obtains the list of key-value pairs matching a specified device ID and {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Indicates the ID of the device to which the key-value pairs belong.
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the list of key-value pairs matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100005 - if not support the operation.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getEntries(deviceId: string, query: QueryV9, callback: AsyncCallback<Entry[]>): void;
        getEntries(deviceId: string, query: QueryV9): Promise<Entry[]>;

        /**
         * Obtains the {@code KvStoreResultSet} object matching the specified device ID and key prefix.
         *
         * <p>The {@code KvStoreResultSet} object can be used to query all key-value pairs that meet the search criteria. Each {@code KvStoreV9}
         * instance can have a maximum of four {@code KvStoreResultSet} objects at the same time. If you have created four objects,
         * calling this method will return a failure. Therefore, you are advised to call the closeResultSet method to close unnecessary
         * {@code KvStoreResultSet} objects in a timely manner.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Identifies the device whose data is to be queried.
         * @param keyPrefix Indicates the key prefix to match.
         * @returns Returns the {@code KvStoreResultSet} objects.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(deviceId: string, keyPrefix: string): Promise<KvStoreResultSet>;

        /**
         * Obtains the {@code KvStoreResultSet} object matching the specified {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the {@code KvStoreResultSet} object matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(query: QueryV9, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(query: QueryV9): Promise<KvStoreResultSet>;

        /**
         * Obtains the {@code KvStoreResultSet} object matching a specified device ID and {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Indicates the ID of the device to which the {@code KvStoreResultSet} object belongs.
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the {@code KvStoreResultSet} object matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(deviceId: string, query: QueryV9, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(deviceId: string, query: QueryV9): Promise<KvStoreResultSet>;

        /**
         * Obtains the KvStoreResultSet object matching the specified Predicate object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param predicates Indicates the datasharePredicates.
         * @systemapi
         * Spaces before and after the key will be cleared.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KvStoreResultSet>;

        /**
         * Obtains the KvStoreResultSet object matching a specified Device ID and Predicate object.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @systemapi
         * @param predicates Indicates the key.
         * @param deviceId Indicates the ID of the device to which the results belong.
         * Spaces before and after the key will be cleared.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KvStoreResultSet>): void;
        getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates): Promise<KvStoreResultSet>;

        /**
         * Closes a {@code KvStoreResultSet} object returned by getResultSet.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param resultSet Indicates the {@code KvStoreResultSet} object to close.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void;
        closeResultSet(resultSet: KvStoreResultSet): Promise<void>;

        /**
         * Obtains the number of results matching the specified {@code QueryV9} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the number of results matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSize(query: QueryV9, callback: AsyncCallback<number>): void;
        getResultSize(query: QueryV9): Promise<number>;

        /**
         * Obtains the number of results matching a specified device ID and {@code Query} object.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Indicates the ID of the device to which the results belong.
         * @param query Indicates the {@code QueryV9} object.
         * @returns Returns the number of results matching the specified {@code QueryV9} object.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getResultSize(deviceId: string, query: QueryV9, callback: AsyncCallback<number>): void;
        getResultSize(deviceId: string, query: QueryV9): Promise<number>;

        /**
         * Removes data of a specified device from the current database. This method is used to remove only the data
         * synchronized from remote devices. This operation does not synchronize data to other databases or affect
         * subsequent data synchronization.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deviceId Identifies the device whose data is to be removed. The value cannot be the current device ID.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;
        removeDeviceData(deviceId: string): Promise<void>;

        /**
         * Synchronizes {@code DeviceKVStore} databases.
         *
         * <p>This method returns immediately and sync result will be returned through asynchronous callback.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param deviceIds Indicates the list of IDs of devices whose
         * @param delayMs Indicates the delay allowed for the synchronization, in milliseconds.
         * {@code DeviceKVStore} databases are to be synchronized.
         * @param mode Indicates the synchronization mode, {@code PUSH}, {@code PULL}, or
         * {@code PUSH_PULL}.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void;

        /**
         * Synchronizes {@code DeviceKVStore} databases.
         *
         * <p>This method returns immediately and sync result will be returned through asynchronous callback.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param deviceIds Indicates the list of IDs of devices whose
         * @param delayMs Indicates the delay allowed for the synchronization, in milliseconds.
         * {@code DeviceKVStore} databases are to be synchronized.
         * @param query Indicates the {@code QueryV9} object.
         * @param mode Indicates the synchronization mode, {@code PUSH}, {@code PULL}, or
         * {@code PUSH_PULL}.
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        sync(deviceIds: string[], query: QueryV9, mode: SyncMode, delayMs?: number): void;

        /**
         * Register Synchronizes DeviceKVStore databases callback.
         *
         * <p>Sync result is returned through asynchronous callback.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param syncCallback Indicates the callback used to send the synchronization result to the caller.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

        /**
         * Registers a {@code KvStoreObserver} for the database. When data in the distributed database changes, the callback in
         * {@code KvStoreObserver} will be invoked.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param type Indicates the subscription type, which is defined in {@code SubscribeType}.
         * @param listener Indicates the observer of data change events in the distributed database.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100001 - if the database has been subscribed over the max subscription time limit.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

        /**
         * Unsubscribes from the DeviceKVStore database based on the specified subscribeType and {@code KvStoreObserver}.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param listener Indicates the data change observer registered by {#subscribe(SubscribeType, KvStoreObserver)}.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100006 - if the database or result set has been closed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        off(event:'dataChange', listener?: Callback<ChangeNotification>): void;

        /**
         * UnRegister Synchronizes DeviceKVStore databases callback.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;
    }
    
    /**
     * Creates a {@link KVManager} instance based on the configuration information.
     *
     * <p>You must pass {@link KVManagerConfig} to provide configuration information
     * for creating the {@link KVManager} instance.
     *
     * @since 7
     * @deprecated since 9
     * @useinstead createKVManagerV9
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @param config Indicates the {@link KVStore} configuration information,
     * including the user information and package name.
     * @return Returns the {@code KVManager} instance.
     * @throws Throws exception if input is invalid.
     */
    function createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>): void;
    function createKVManager(config: KVManagerConfig): Promise<KVManager>;

    /**
     * Creates a {@link KVManagerV9} instance based on the configuration information.
     *
     * <p>You must pass {@link KVManagerConfig} to provide configuration information
     * for creating the {@link KVManagerV9} instance.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @param config Indicates the {@link KVStoreV9} configuration information,
     * including the user information and package name.
     * @return Returns the {@code KVManagerV9} instance.
     * @throws {BusinessError} if process failed.
     * @throws {BusinessError} 401 - if parameter check failed.
     */
    function createKVManagerV9(config: KVManagerConfig, callback: AsyncCallback<KVManagerV9>): void;
    function createKVManagerV9(config: KVManagerConfig): Promise<KVManagerV9>;

    /**
     * Provides interfaces to manage a {@code KVStore} database, including obtaining, closing, and deleting the {@code KVStore}.
     *
     * @since 7
     * @deprecated since 9
     * @useinstead KVManagerV9
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @version 1
     */
    interface KVManager {
        /**
         * Creates and obtains a {@code KVStore} database by specifying {@code Options} and {@code storeId}.
         *
         * @since 7
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param options Indicates the options used for creating and obtaining the {@code KVStore} database,
         * including {@code isCreateIfMissing}, {@code isEncrypt}, and {@code KVStoreType}.
         * @param storeId Identifies the {@code KVStore} database.
         * The value of this parameter must be unique for the same application,
         * and different applications can share the same value.
         * @return Returns a {@code KVStore}, or {@code SingleKVStore}.
         */
        getKVStore<T extends KVStore>(storeId: string, options: Options): Promise<T>;
        getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>): void;

        /**
         * Closes the {@code KvStore} database.
         * 
         * <p>Warning: This method is not thread-safe. If you call this method to stop a KvStore database that is running, your
         * thread may crash.
         * 
         * <p>The {@code KvStore} database to close must be an object created by using the {@code getKvStore} method. Before using this 
         * method, release the resources created for the database, for example, {@code KvStoreResultSet} for {@code SingleKvStore},
         * otherwise closing the database will fail. If you are attempting to close a database that is already closed, an error
         * will be returned.
         * 
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param kvStore Indicates the {@code KvStore} database to close.
         * @throws Throws this exception if any of the following errors
         * occurs:{@code INVALID_ARGUMENT}, {@code ERVER_UNAVAILABLE},
         * {@code STORE_NOT_OPEN}, {@code STORE_NOT_FOUND}, {@code DB_ERROR},
         * {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
         */
        closeKVStore(appId: string, storeId: string, kvStore: KVStore, callback: AsyncCallback<void>): void;
        closeKVStore(appId: string, storeId: string, kvStore: KVStore): Promise<void>;

        /**
         * Deletes the {@code KvStore} database identified by storeId.
         * 
         * <p>Before using this method, close all {@code KvStore} instances in use that are identified by the same storeId.
         * 
         * <p>You can use this method to delete a {@code KvStore} database not in use. After the database is deleted, all its data will be
         * lost.
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param storeId Identifies the {@code KvStore} database to delete.
         * @throws Throws this exception if any of the following errors 
         * occurs: {@code INVALID_ARGUMENT},
         * {@code SERVER_UNAVAILABLE}, {@code STORE_NOT_FOUND},
         * {@code DB_ERROR}, {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
         */
        deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;
        deleteKVStore(appId: string, storeId: string): Promise<void>;

        /**
         * Obtains the storeId of all {@code KvStore} databases that are created by using the {@code getKvStore} method and not deleted by
         * calling the {@code deleteKvStore} method.
         * 
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core 
         * @returns Returns the storeId of all created {@code KvStore} databases. 
         * @throws Throws this exception if any of the following errors 
         * occurs: {@code SERVER_UNAVAILABLE}, {@code DB_ERROR},
         * {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
         */
        getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void;
        getAllKVStoreId(appId: string): Promise<string[]>;

        /**
         * register DeviceChangeCallback to get notification when device's status changed
         * 
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deathCallback device change callback {@code DeviceChangeCallback}
         * @throws 	exception maybe occurs.
         */
        on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void;

        /**
         * unRegister DeviceChangeCallback and can not receive notification
         * 
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deathCallback device change callback {@code DeviceChangeCallback} which has been registered.
         * @throws exception maybe occurs.
         */
        off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void;
    }

    /**
     * Provides interfaces to manage a {@code KVStoreV9} database, including obtaining, closing, and deleting the {@code KVStoreV9}.
     *
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @import N/A
     * @version 1
     */
    interface KVManagerV9 {
        /**
         * Creates and obtains a {@code KVStoreV9} database by specifying {@code Options} and {@code storeId}.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param options Indicates the options used for creating and obtaining the {@code KVStoreV9} database,
         * including {@code isCreateIfMissing}, {@code isEncrypt}, and {@code KVStoreType}.
         * @param storeId Identifies the {@code KVStoreV9} database.
         * The value of this parameter must be unique for the same application,
         * and different applications can share the same value.
         * @return Returns a {@code KVStoreV9}, or {@code SingleKVStoreV9}.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100002 - if open existed database with changed options.
         * @throws {BusinessError} 15100003 - if the database is corrupted.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getKVStore<T extends KVStoreV9>(storeId: string, options: Options): Promise<T>;
        getKVStore<T extends KVStoreV9>(storeId: string, options: Options, callback: AsyncCallback<T>): void;

        /**
         * Closes the {@code KvStoreV9} database.
         *
         * <p>Warning: This method is not thread-safe. If you call this method to stop a KvStore database that is running, your
         * thread may crash.
         *
         * <p>The {@code KvStoreV9} database to close must be an object created by using the {@code getKvStoreV9} method. Before using this
         * method, release the resources created for the database, for example, {@code KvStoreResultSet} for {@code SingleKvStoreV9},
         * otherwise closing the database will fail. If you are attempting to close a database that is already closed, an error
         * will be returned.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param kvStore Indicates the {@code KvStoreV9} database to close.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        closeKVStore(appId: string, storeId: string, kvStore: KVStoreV9, callback: AsyncCallback<void>): void;
        closeKVStore(appId: string, storeId: string, kvStore: KVStoreV9): Promise<void>;

        /**
         * Deletes the {@code KvStoreV9} database identified by storeId.
         *
         * <p>Before using this method, close all {@code KvStoreV9} instances in use that are identified by the same storeId.
         *
         * <p>You can use this method to delete a {@code KvStoreV9} database not in use. After the database is deleted, all its data will be
         * lost.
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @param storeId Identifies the {@code KvStoreV9} database to delete.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 15100004 - if the database not exist when delete database or the data not exist when query or delete data.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;
        deleteKVStore(appId: string, storeId: string): Promise<void>;

        /**
         * Obtains the storeId of all {@code KvStoreV9} databases that are created by using the {@code getKvStoreV9} method and not deleted by
         * calling the {@code deleteKvStore} method.
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.Core
         * @returns Returns the storeId of all created {@code KvStore} databases.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void;
        getAllKVStoreId(appId: string): Promise<string[]>;

        /**
         * register DeviceChangeCallback to get notification when device's status changed
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deathCallback device change callback {@code DeviceChangeCallback}
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void;

        /**
         * unRegister DeviceChangeCallback and can not receive notification
         *
         * @since 9
         * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
         * @param deathCallback device change callback {@code DeviceChangeCallback} which has been registered.
         * @throws {BusinessError} if process failed.
         * @throws {BusinessError} 401 - if parameter check failed.
         */
        off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void;
    }
}

export default distributedData;