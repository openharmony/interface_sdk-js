/*
 * Copyright (C) 2024-2025 Huawei Device Co., Ltd.
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
 * This module provides capabilities for application data storage, data persistence management, and UIAbility
 * (application component that contains a UI) data storage. It also covers scenarios such as environment state, tool,
 * and UI state synchronization, helping you simplify state management logic and improve application responsiveness and
 * data consistency.
 * 
 * T and S in this topic represent the types as described below.
 * 
 * | Type  | Description                                    |
 * | ---- | -------------------------------------- |
 * | T    | Class, number, boolean, string, and arrays of these types.|
 * | S    | number, boolean, string.                |
 *
 * @file State Management
 * @kit ArkUI
 */

import contextConstant from '@ohos.app.ability.contextConstant';

import collections from '@arkts.collections';

/**
 * Obtains the default constructor.
 *
 * @returns { T } Default constructor.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type StorageDefaultCreator<T> = () => T;

/**
 * Represents a class constructor that accepts arbitrary arguments.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface TypeConstructorWithArgs<T> {

  /**
   * Creates and returns an instance of the specified type T.
   *
   * @param { any } args - Constructor arguments passed when creating an instance of type **T**, used to initialize the
   *     instance.
   * @returns { T } Instance of type **T** created using the **new** API. By default, no constructor arguments are
   *     passed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  new(...args: any): T;
}

/**
 * Defines the parameter type for **globalConnect**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
export class ConnectOptions<T extends object> {

  /**
   * Specified type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  type: TypeConstructorWithArgs<T>;

  /**
   * Input key. If no value is passed in, the type name is used as the key.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  key?: string;

  /**
   * Default constructor. You are advised to pass this parameter. If **globalConnect** is connected to the key for the
   * first time, an error is reported if this parameter is not passed in.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  defaultCreator?: StorageDefaultCreator<T>;

  /**
   * Encryption level, ranging from EL1 to EL5 (corresponding to the value from 0 to 4). For details, see
   * [Encryption Levels](docroot://application-models/application-context-stage.md#obtaining-and-modifying-encryption-levels).
   * If no value is passed in, EL2 is used by default. Storage paths vary based on the encryption levels. If the input
   * value of encryption level is not in the range of **0** to **4**, a crash occurs. When the same key uses different
   * encryption levels, the encryption level in the first **globalConnect** call is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  areaMode?: contextConstant.AreaMode;
}

/**
 * AppStorageV2 provides the capability of globally sharing state variables within an application. You can bind the same
 * key through **connect** to share data across abilities. For details about the UI usage, see
 * [AppStorageV2: Storing Application-wide UI State](docroot://ui/state-management/arkts-new-appstoragev2.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class AppStorageV2 {
  /**
   * Stores key-value pair data in the application memory. If the given key already exists in
   * [AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md), the corresponding value is returned.
   * Otherwise, a default value is constructed using the default value constructor and returned.
   *
   * > **NOTE**
   * >
   * > 1. If no key is specified, the second parameter is used as the default constructor. Otherwise, the third
   * > parameter is used (if the second parameter is invalid, the third parameter is also used as the
   * > default constructor).
   * >
   * > 2. If the data has been stored in AppStorageV2, you can obtain the stored data without using the default
   * > constructor. If the data has not been stored, you must specify a default constructor; otherwise, an application
   * > exception will be thrown.
   * >
   * > 3. Ensure that the data types match the key. Matching different types of **connect** data to the same key will
   * > result in an application exception.
   * >
   * > 4. You are advised to use meaningful values for keys. The values can contain letters, digits, and
   * > underscores (_) and a maximum of 255 characters. Using invalid characters or empty characters will result in
   * > undefined behavior.
   *
   * @param { TypeConstructorWithArgs<T> } type - Type. If no key is specified, the name of the type is used as the key.
   * @param { string | StorageDefaultCreator<T> } [keyOrDefaultCreator] - Key, or constructor for obtaining the default
   *     value. The default value is **undefined**.
   * @param { StorageDefaultCreator<T> } [defaultCreator] - Constructor for obtaining the default value. The default
   *     value is **undefined**. If the data is not stored in AppStorageV2 and no default constructor is passed,
   *     **undefined** is returned.
   * @returns { T | undefined } Returns data if the creation or data acquisition from AppStorageV2 is successful;
   *     returns **undefined** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static connect<T extends object>(
    type: TypeConstructorWithArgs<T>,
    keyOrDefaultCreator?: string | StorageDefaultCreator<T>,
    defaultCreator?: StorageDefaultCreator<T>
  ): T | undefined;

  /**
   * Removes the specified key-value pair from [AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md).
   * If the specified key does not exist in AppStorageV2, the removal will fail.
   *
   * > **NOTE**
   * >
   * > If a key that does not exist in AppStorageV2 is removed, a warning is reported.
   *
   * @param { string | TypeConstructorWithArgs<T> } keyOrType - Key to be removed. If a type is specified, the key to be
   *     removed is the name of that type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static remove<T>(keyOrType: string | TypeConstructorWithArgs<T>): void;

  /**
   * Obtains all keys in [AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md).
   *
   * > **NOTE**
   * >
   * > The order of keys in the array is not sequential and unrelated to the order in which keys are inserted
   * > into AppStorageV2.
   *
   * @returns { Array<string> } All keys stored in AppStorageV2.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static keys(): Array<string>;
}

/**
 * Defines a callback used to return the cause of the persistence failure.
 *
 * @param { string } key - Key of the error.
 * @param { 'quota' | 'serialization' | 'unknown' } reason - Reason of the error. The value can be **'quota'**
 *     (indicating that the storage quota exceeds the limit), **'serialization'** (indicating that serialization or
 *     deserialization fails), or **'unknown'** (indicating an unknown error).
 * @param { string } message - Extra information about the error.
 * @param { string } [oldValue] - Old serialized data stored on the disk when deserialization fails. In
 *     non-deserialization failure scenarios, the default value of this parameter is **undefined**.[since 26.0.0]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type PersistenceErrorCallback = (key: string, reason: 'quota' | 'serialization' | 'unknown', 
    message: string, oldValue?: string) => void;

/**
 * Defines the types of persistent collection data supported by **globalConnect** using the generic type of the input
 * parameter of **globalConnect**.
 *
 * @unionmember { Array<S> } The value is of the array type.
 * @unionmember { Map<string | number, S> } The value is of the Map type.
 * @unionmember { Set<S> } The value is of the Set type.
 * @unionmember { collections.Array<S> } The value is of the collections.Array type.
 * @unionmember { collections.Map<string | number, S> } The value is of the collections.Map type.
 * @unionmember { collections.Set<S> } The value is of the collections.Set type.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export declare type CollectionType<S> = Array<S> | Map<string | number, S> |
  Set<S> | collections.Array<S> | collections.Map<string | number, S> | collections.Set<S>;

/**
 * Defines the parameter type for the
 * [globalConnect]{@link PersistenceV2.globalConnect<T extends CollectionType<S>, S extends object>( type: ConnectOptionsCollections<T, S> | ConnectOptions<T> )}
 * API. **ConnectOptionsCollections** is inherited from [ConnectOptions\<T\>]{@link ConnectOptions}. You can use the
 * **ConnectOptionsCollections** input parameter to persist container data (such as **Array\<S>**).
 *
 * The following shows the examples of **StorageDefaultCreator\<T>** and **StorageDefaultCreator\<S>**:
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export class ConnectOptionsCollections<T extends CollectionType<S>, S extends object> extends ConnectOptions<T> {

  /**
   * Persists container data. **defaultSubCreator** should be provided together with **defaultCreator**; otherwise, the
   * container data cannot be persisted. The collection item type **S** must be the same as the return type of
   * **defaultSubCreator**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  defaultCreator?: StorageDefaultCreator<T>;

  /**
   * Default constructor function of the collection item, which is used to persist container data. When this parameter
   * is used, **defaultCreator** must also be provided; otherwise, persistence will fail. When container data is persisted,
   * if this parameter is not passed in, or if **defaultSubCreator** returns **undefined** or **null**, the persistence
   * operation will fail. When a collection of user-defined classes (such as **Array<ClassA>**) is persisted, the generic
   * type **T** in **defaultCreator** is **Array<ClassA>**, and **S** in **defaultSubCreator** is **ClassA**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  defaultSubCreator?: StorageDefaultCreator<S>;
}

/**
 * Provides persistent storage for UI states. This API is inherited from [AppStorageV2]{@link AppStorageV2}. It supports
 * persisting application state data to disks and restoring data after application restart, making it suitable for
 * scenarios where UI state data needs to be retained. For details about the UI usage, see
 * [PersistenceV2: Persisting UI States](docroot://ui/state-management/arkts-new-persistencev2.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PersistenceV2 extends AppStorageV2 {

  /**
   * Stores key-value pair data on the application disk. If the given key already exists in
   * [PersistenceV2](docroot://ui/state-management/arkts-new-persistencev2.md), the corresponding value is returned.
   * Otherwise, a default value is constructed using the default value constructor and returned. If the object connected
   * through **globalConnect** is an [\@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)
   * object, changes to its [\@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md) properties will
   * trigger automatic refresh of the entire associated object, while changes to non-\@Trace properties will not be
   * automatically persisted. To persist changes to non-\@Trace properties, call the
   * [PersistenceV2.save]{@link PersistenceV2#save} API to manually store them.
   *
   * > **NOTE**
   * >
   * > 1. If no key is specified, the class name of the data returned by the default constructor **defaultCreator** is
   * > used as the key and stored in PersistenceV2.
   * >
   * > 2. If the data has been stored in PersistenceV2, you can obtain the stored data without using the default
   * > constructor. Otherwise, you must specify a default constructor to avoid application exceptions.
   * >
   * > 3. Ensure that the data types match the key. Matching different types of **globalConnect** data to the same key
   * > will result in an application exception.
   * >
   * > 4. You are advised to use meaningful values for keys. The values can contain letters, digits, and
   * > underscores (_) and a maximum of 255 characters. Using invalid characters or empty characters will result in
   * > undefined behavior.
   * >
   * > 5. When associating an [\@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md) object,
   * > because the name property of this type is undefined, you need to specify a key or customize the name property.
   * >
   * > 6. The storage path for data is application-level. If different modules use the same key and the same
   * > encryption partition for **globalConnect**, only one copy of the data will be stored in the application.
   * >
   * > 7. If **globalConnect** is used with the same key but different encryption levels, the data will be stored
   * > with the encryption level of the first **globalConnect** call, and the data in PersistenceV2 will also be
   * > stored with the encryption level that uses the key first.
   * >
   * > 8. Avoid using **connect** and **globalConnect** together because they have different data copy paths. If they
   * > must be used together, make sure the keys are unique to avoid application crashes.
   * >
   * > 9. To enable EL5 encryption, configure the **ohos.permission.PROTECT_SCREEN_LOCK_DATA** field in the
   * > **module.json** file. For details, see
   * > [Declaring Permissions](docroot://security/AccessToken/declare-permissions.md).
   *
   * @param { ConnectOptions<T> } type - Configuration options of **globalConnect**, which include the specified type,
   *     key, default constructor, encryption level, and other configuration items. For details, see
   *     [ConnectOptions]{@link ConnectOptions}.
   * @returns { T | undefined } Returns the data if creation or acquisition is successful; otherwise, returns
   *     **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  static globalConnect<T extends object>(
    type: ConnectOptions<T>
  ): T | undefined;

  /**
   * Stores key-value pair data on the application disk. Supports the persistence of the following collection types:
   * [Array, Map, Set, collections.Array, collections.Map, and collections.Set](docroot://ui/state-management/arkts-new-persistencev2.md#types-supported-by-globalconnect).
   * Note that when persisting data of the **Array\<ClassA>** type, you need to call
   * [makeObserved]{@link UIUtils#makeObserved} to make the returned object observed. Multi-level nested sets are not
   * supported. For example, **Array<Array\<ClassA>>** persistence is not supported.
   *
   * > **NOTE**
   * >
   * > 1. If no key is specified, the class name of the data returned by the default constructor **defaultCreator**
   * > is used as the key and stored in PersistenceV2.
   * >
   * > 2. You are advised to use meaningful values for keys. The values can contain letters, digits, and
   * > underscores (_) and a maximum of 255 characters. Using invalid characters or empty characters will result
   * > in undefined behavior.
   * >
   * > 3. Avoid using **connect** and **globalConnect** together because they have different data copy paths. If they
   * > must be used together, make sure the keys are unique to avoid application crashes.
   * >
   * > For other general conditions, see the description of **globalConnect<sup>18+</sup>**.
   *
   * @param { ConnectOptionsCollections<T, S> | ConnectOptions<T> } type - Passed **globalConnect** parameters. For
   *     details, see the description of **ConnectOptions** and **ConnectOptionsCollections**.
   *     <br>If **defaultSubCreator** is provided in **ConnectOptionsCollections**, **defaultCreator** must be provided.
   *     Otherwise, the persistence fails. The collection item type S must be the same as the return type of
   *     **defaultSubCreator**. If the return types are inconsistent, an error will be reported during compilation.
   * @returns { T | undefined } Returns the data if creation or acquisition is successful; otherwise, returns
   *     **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  static globalConnect<T extends CollectionType<S>, S extends object>(
    type: ConnectOptionsCollections<T, S> | ConnectOptions<T>
  ): T | undefined;

  /**
   * Persists the specified key-value pair data once.
   *
   * > **NOTE**
   * >
   * > Since changes to non-[\@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md) data do
   * > not trigger automatic persistence of [PersistenceV2](docroot://ui/state-management/arkts-new-persistencev2.md),
   * > when non-\**@Trace** data changes and needs to be persisted, you can call this API to persist the data of the
   * > corresponding key.
   * >
   * > It is useless to manually persist the keys that are not in the **connect** state in the memory.
   *
   * @param { string | TypeConstructorWithArgs<T> } keyOrType - Key to be persisted. If a type is specified, the key for
   *     persistence is the name of the type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static save<T>(keyOrType: string | TypeConstructorWithArgs<T>): void;

  /**
   * Registers a callback invoked when persistence fails.
   *
   * @param { PersistenceErrorCallback | undefined } callback - Callback called when persistence fails. The callback
   *     parameters include **key** (the key that caused the error), **reason** (the type of error cause, which can be
   *     **'quota'**, **'serialization'**, or **'unknown'**), **message** (detailed error information), and **oldValue**
   *     (optional, indicating the old data returned when deserialization fails).
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static notifyOnError(callback: PersistenceErrorCallback | undefined): void;
}

/**
 * Represents a class constructor.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface TypeConstructor<T> {

  /**
   * Creates and returns an instance of the specified type T.
   *
   * @returns { T } Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  new(): T;
}

/**
 * Defines the attribute decorator, which is used to decorate attributes of the custom class in a nested class.
 *
 * @param { TypeConstructor<T> } type - Type of the class property. Only custom class types are supported. Passing
 *     other types will cause persistence failure.
 * @returns { PropertyDecorator } Property decorator, used to decorate properties that belong to custom classes in
 *     nested classes.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type TypeDecorator = <T>(type: TypeConstructor<T>) => PropertyDecorator;

/**
 * **\@Type** is used in
 * [state management V2](docroot://ui/state-management/arkts-state-management-overview.md#state-management-v2) to
 * ensure that the complex types of properties are not lost during class serialization. When persistence capabilities
 * such as [PersistenceV2]{@link PersistenceV2} are used to serialize and deserialize complex class objects, the
 * property type information of the classes may be lost. By using **\@Type** to mark the original type of a property,
 * you can ensure that the complex type information of the property is correctly retained and restored during
 * serialization. This is applicable to scenarios where complex objects need to be persisted or serialized, such as
 * persistent storage of application states and cross-component complex data transfer.
 *
 * For details, see
 * [@Type Decorator: Marking the Types of the Class Property](docroot://ui/state-management/arkts-new-type.md).
 *
 * Marks the original type of a property, ensuring that the complex type information of the property is correctly
 * retained and restored during serialization.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
export declare const Type: TypeDecorator;

/**
 * Provides APIs related to state management, including obtaining the original object from a proxy object, converting
 * non-observable data into observable data, dynamically adding and removing state variable listeners, synchronously
 * refreshing state variable modifications, and creating data bindings. It is suitable for scenarios where manual
 * management of state observation, listening, and synchronous refresh is required.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class UIUtils {

  /**
   * Obtains the original object from a proxy object wrapped by the state management framework. For details, see
   * [getTarget API: Obtaining Original Objects](docroot://ui/state-management/arkts-new-getTarget.md).
   *
   * @param { T } source - Data source object, that is, the proxy object wrapped by the state management framework. It
   *     is used to obtain the original object after removing the proxy.
   * @returns { T } Original object of the source after the proxy added by the state management framework is removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static getTarget<T extends object>(source: T): T;

  /**
   * Converts ordinary unobservable data into observable data. For details, see
   * [makeObserved API: Changing Unobservable Data to Observable Data](docroot://ui/state-management/arkts-new-makeObserved.md).
   *
   * @param { T } source - Source object. It supports classes not decorated by @Observed or @ObservedV2, objects
   *     returned by **JSON.parse**, and classes decorated by @Sendable.
   *     <br>Array, Map, Set, and Date types are supported.
   *     <br>collections.Array, collections.Set, and collections.Map are supported.
   *     <br>For details, see
   *     [makeObserved API: Changing Unobservable Data to Observable Data](docroot://ui/state-management/arkts-new-makeObserved.md).
   * @returns { T } Observable data for supported input parameter types; data source object itself for unsupported input
   *     parameter types.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static makeObserved<T extends object>(source: T): T;

  /**
   * Wraps an unobservable object into an object that is observable by V1 state management. This API is equivalent
   * to @Observed and can be used to initialize @ObjectLink.
   *
   * This API can be used together with [enableV2Compatibility]{@link UIUtils#enableV2Compatibility} in scenarios where
   * state management V1 and V2 are used together. For details, see
   * [Mixed Use of State Management V1 and V2 (API Version 19 and Later)](docroot://ui/state-management/arkts-v1-v2-mixusage.md).
   *
   * @param { T } source - Data source. Common classes, **Array**, **Map**, **Set**, and **Date** types are supported.
   *     <br>[@arkts.collections]{@link @arkts.collections:collections} (ArkTS containers) and
   *     classes decorated with [@Sendable](docroot://arkts-utils/arkts-sendable.md) are not supported.
   *     <br>**undefined** and **null** are not supported. State management V2 data and
   *     the return value of [makeObserved]{@link UIUtils#makeObserved} are not supported.
   * @returns { T } For supported input parameter types, returns data observable by V1 state management. For unsupported
   *     input parameter types, returns the data source object itself.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamiconly
   */
  static makeV1Observed<T extends object>(source: T): T;

  /**
   * Enables V1 state variables to be observable in @ComponentV2. This API is primarily used in scenarios where V1 and V
   * 2 state management are mixed. For details, see
   * [Mixed Use of State Management V1 and V2 (API Version 19 and Later)](docroot://ui/state-management/arkts-v1-v2-mixusage.md).
   *
   * @param { T } source - Data source. Only V1 state data is supported, such as objects decorated by **@Observed** or
   *     objects converted by the **makeV1Observed** API. When non-V1 state data is passed in, the data source itself is
   *     returned.
   * @returns { T } If the data source is V1 state data, returns data that can be observed in @ComponentV2; otherwise,
   *     returns the data source itself.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamiconly
   */
  static enableV2Compatibility<T extends object>(source: T): T;

  /**
   * Dynamically adds a listener to the state variable of state management V2. For details, see
   * [addMonitor and clearMonitor APIs: Dynamically Adding and Removing Listeners](docroot://ui/state-management/arkts-new-addMonitor-clearMonitor.md).
   *
   * @param { object } target - Target object. Only
   *     [@ComponentV2](docroot://ui/state-management/arkts-create-custom-components.md#componentv2) and
   *     [@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md) instances are supported.
   *     <br>For unsupported types, a runtime error is thrown.
   * @param { string | string[] } path - Path of the variable name to be listened for. You can specify a path or pass
   *     a string array to specify multiple variable paths to be listened for at a time.
   *     <br>Only string and string arrays are supported. For unsupported types, a runtime error is thrown.
   * @param { MonitorCallback } monitorCallback - Callback registered for the corresponding state variable. When the
   *     state variable corresponding to the path changes, the callback is invoked.
   *     <br>For unsupported types, a runtime error is thrown.
   * @param { MonitorOptions} [options] - Configuration options of the listener. For details, see
   *     [MonitorOptions]{@link MonitorOptions}. By default, the asynchronous callback is used.
   * @throws { BusinessError } 130000 - The target is not a custom component instance or V2 class instance.
   * @throws { BusinessError } 130001 - The path is invalid.
   * @throws { BusinessError } 130002 - monitorCallback is not a function or an anonymous function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static addMonitor(target: object, path: string | string[], monitorCallback: MonitorCallback, options?: MonitorOptions): void;

  /**
   * Deletes the listener added to the state variable of the state management V2 by calling the
   * [addMonitor]{@link UIUtils#addMonitor} API. For details, see
   * [addMonitor and clearMonitor APIs: Dynamically Adding and Removing Listeners](docroot://ui/state-management/arkts-new-addMonitor-clearMonitor.md).
   *
   * @param { object } target - Target object. Only instances of
   *     [@ComponentV2](docroot://ui/state-management/arkts-create-custom-components.md#componentv2) and
   *     [@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md) are supported.
   *     <br>For unsupported types, a runtime error is thrown.
   * @param { string | string[] } path - Path of the variable name for which the listener is to be deleted. You can
   *     specify a single path or pass a string array to delete listeners of multiple state variables at a time.
   *     <br>Only strings and arrays are supported. For unsupported types, a runtime error is thrown.
   * @param { MonitorCallback } [monitorCallback] - Callback to be deleted.
   *     <br>If this parameter is not passed, all listeners registered for the variable corresponding to the path
   *     are deleted.
   *     <br>For unsupported types, a runtime error is thrown.
   * @throws { BusinessError } 130000 - The target is not a custom component instance or V2 class instance.
   * @throws { BusinessError } 130001 - The path is invalid.
   * @throws { BusinessError } 130002 - monitorCallback is not a function or an anonymous function.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static clearMonitor(target: object, path: string | string[], monitorCallback?: MonitorCallback) : void;

  /**
   * Creates a read-only one-way data binding instance, which is used to construct the arguments of the **Binding** type
   * in the [\@Builder](docroot://ui/state-management/arkts-builder.md) function.
   *
   * @param { GetterCallback<T> } getter - Callback used to obtain the value. Each value access triggers this function
   *     to obtain the latest value.
   * @returns { Binding<T> } Returns a read-only one-way data binding instance with a **value** attribute, which is used
   *     to obtain the currently bound value. The value can only be read and cannot be directly modified.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static makeBinding<T>(getter: GetterCallback<T>): Binding<T>;

  /**
   * Creates a mutable two-way data binding instance, which is used to construct the argument of the **MutableBinding**
   * type in the \@Builder function.
   *
   * @param { GetterCallback<T> } getter - Callback used to obtain the value. Each value access triggers this function
   *     to obtain the latest value.
   * @param { SetterCallback<T> } [setter] - Callback used to update the value. Each modification to **.value** triggers
   *     this function.
   * @returns { MutableBinding<T> } Two-way data binding instance with a **value** attribute, which allows you to read
   *     and modify data. If the value is set, the system checks whether the value type matches the generic type
   *     **T**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static makeBinding<T>(getter: GetterCallback<T>, setter: SetterCallback<T>): MutableBinding<T>;

  /**
   * Synchronously updates a specified state variable. This API receives a closure function and updates only the
   * internal modifications, including the updates of [@Computed](docroot://ui/state-management/arkts-new-computed.md)
   * and [@Monitor](docroot://ui/state-management/arkts-new-monitor.md) decorators, and re-rendering of the UI nodes.
   * For details, see
   * [applySync/flushUpdates/flushUIUpdates APIs: Synchronous Update](docroot://ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md).
   *
   * @param { TaskCallback } task - Closure function. The state variable modification generated in the closure will be
   *     executed synchronously.
   * @returns { T } Return value obtained by executing the closure function.
   * @throws { BusinessError } 140001 - The function is not allowed to be called in @Computed
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static applySync<T>(task: TaskCallback): T;

  /**
   * Synchronously updates all state variable modifications before this API call, including the updates
   * of @Computed and @Monitor decorators, and re-rendering of the UI nodes. For details, see
   * [applySync/flushUpdates/flushUIUpdates APIs: Synchronous Update](docroot://ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md).
   *
   * @throws { BusinessError } 140001 - The function is not allowed to be called in @Computed
   * @throws { BusinessError } 140002 - The function is not allowed to be called in @Monitor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static flushUpdates(): void;

  /**
   * Processes all state variable modifications before this API call and synchronizes the
   * [dirty](docroot://ui/state-management/arkts-state-management-introduce.md#triggering-updates) UI nodes. However, it
   * does not synchronize the execution of @Computed and @Monitor decorators. For details, see
   * [applySync/flushUpdates/flushUIUpdates APIs: Synchronous Update](docroot://ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md).
   *
   * @throws { BusinessError } 140001 - The function is not allowed to be called in @Computed
   * @throws { BusinessError } 140002 - The function is not allowed to be called in @Monitor
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static flushUIUpdates(): void;

  /**
   * Determines whether a data object can be observed and returns the observation result. For details, see
   * [canBeObserved API: Determining Whether an Object Can Be Observed](docroot://ui/state-management/arkts-new-canBeObserved.md).
   *
   * @param { T } source - Data object to be determined for observability. **Array**, **Map**, **Set**, and **Date**
   *     types are supported.
   *     <br>For details about the usage rules, see
   *     [canBeObserved API: Determining Whether an Object Can Be Observed](docroot://ui/state-management/arkts-new-canBeObserved.md).
   * @returns { ObservedResult } Returns a result about whether the object can be observed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  static canBeObserved<T extends object>(source: T): ObservedResult;

  /**
   * Obtains the [lifecycle of a custom component]{@link ComponentInit}.
   *
   * @param { T } customComponent - Custom component instance.
   * @returns { CustomComponentLifecycle } Lifecycle instance of a custom component obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  static getLifecycle<T extends BaseCustomComponent>(customComponent: T): CustomComponentLifecycle;

  /**
   * Obtains [CustomComponentContext]{@link CustomComponentContext} of the given @Component(V1) or @ComponentV2.
   * **CustomComponentContext** can be used to access the reuse pool of the component. For details about the reuse pool,
   * see
   * [Global Reuse: Centralized Component Recycling and Reuse](docroot://ui/state-management/arkts-global-reuse-pool.md).
   *
   * @param { T } customComponent - @Component or @ComponentV2 whose context is to be obtained.
   * @returns { CustomComponentContext } Context object of the given component instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static getCustomComponentContext<T extends BaseCustomComponent>(customComponent: T): CustomComponentContext;
}

/**
 * Defines a synchronous callback.
 *
 * @returns { T } Return value obtained by executing the closure function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type TaskCallback = () => T;

/**
 * A listener callback function of the [IMonitor]{@link IMonitor} type.
 *
 * @param { IMonitor} monitorValue - Change information passed in by the callback, including the path of the state
 *     variable change (**dirty**), values before and after the change (obtained through the **value** API), and other
 *     details. For details about specific attributes and APIs, see **IMonitor**.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type MonitorCallback = (monitorValue: IMonitor) => void;

/**
 * Defines the optional parameters for [addMonitor]{@link UIUtils#addMonitor}, which are used to configure the callback
 * type and whether to enable the wildcard capability.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface MonitorOptions {

  /**
   * Whether the current callback is a synchronous callback. The value **true** indicates a synchronous callback.
   * The default value is **false**, which indicates an asynchronous callback.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  isSynchronous?: boolean;

  /**
   * Whether to enable the wildcard capability for the current **addMonitor**. The value **true** indicates to enable,
   * and **false** indicates the opposite. The default value is **false**, which means to disable the capability.
   * When the wildcard capability is disabled but the path contains a wildcard, the path is considered invalid.
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  enableWildcard?: boolean;
}

/**
 * Defines a callback used to obtain a value.
 *
 * @returns { T } Value obtained by the callback function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type GetterCallback<T> = () => T;

/**
 * Defines a callback used to set a value.
 *
 * @param { T } newValue - New value to be set. This parameter is passed when the bound value is changed.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type SetterCallback<T> = (newValue: T) => void;

/**
 * Represents the generic class for read-only data binding, which can bind data of any type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare class Binding<T> {

  /**
   * Obtains a bound value.
   *
   * @returns { T } Currently bound value. The return value type is the generic parameter **T**, which is consistent
   *     with the type defined by **Binding<T>**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  get value(): T;
}

/**
 * Represents a generic class for mutable data binding, which allows the read and write operations on the bound value
 * and provides complete **get** and **set** accessors.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare class MutableBinding<T> {

  /**
   * Provides a **get** accessor to obtain the current bound value.
   *
   * @returns { T } Currently bound value. The return value type is the generic parameter **T**, which is consistent
   *     with the type defined by **MutableBinding<T>**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  get value(): T;

  /**
   * Provides the **set** accessor to set a new value for the current bound value. The **set** accessor must be provided
   * when the **MutableBinding** class instance is constructed. Otherwise, a runtime error will be thrown when the
   * **set** accessor is triggered.
   *
   * @param { T } newValue - New value to set. This parameter is passed in when the bound value is changed. The type is
   *     the same as the generic **T** defined by **MutableBinding<T>**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  set value(newValue: T);
}

/**
 * Provides the result of whether the object can be observed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export interface ObservedResult {

  /**
   * Whether an object can be observed.
   *
   * **true**: The object can be observed.
   *
   * **false**: The object cannot be observed.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isObserved: boolean;

  /**
   * Reason for the object's observability.
   *
   * For the object that cannot be observed: The object itself cannot be observed.
   *
   * For the object that can be observed:
   *
   * 1. The V1 object is decorated by the [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md)
   *     decorator or the object is converted by the [makeV1Observed]{@link UIUtils#makeV1Observed} method.
   * 2. The V1 object is decorated by the [@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md)
   *     decorator or the object is converted by the [makeV1Observed]{@link UIUtils#makeV1Observed} method, but the object is not used by the UI component.
   * 3. The V1 object is converted by the [enableV2Compatibility]{@link UIUtils#enableV2Compatibility} method
   *     and then passed to the V2 component.
   * 4. The V1 object is converted by the [enableV2Compatibility]{@link UIUtils#enableV2Compatibility} method
   *     and then passed to the V2 component, but is not used by the V2 component.
   * 5. The V2 object is decorated by the
   *     [@ObservedV2 or @Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md) decorator.
   * 6. The V2 object is converted by the [makeObserved]{@link UIUtils#makeObserved} method.
   * 7. The V2 object is of the Array, Map, Set, or Date type.
   * 8. The V2 object is decorated by the
   *     [@ObservedV2 or @Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md) decorator,
   *     but is not used by the UI component.
   * 9. The V2 object is converted by the [makeObserved]{@link UIUtils#makeObserved} method, but the object is not
   *     used by the UI component.
   * 10. The V2 object is of the Array, Map, Set, or Date type, but is not used by the UI component.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  reason: string;

  /**
   * Decorator and component information associated with the observable object. If the object cannot be observed, the
   * array is empty.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  decoratorInfo: Array<DecoratorInfo>;
}

/**
 * Defines the decorator and component information associated with the observable object.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export interface DecoratorInfo {
  /**
   * Decorator name. For a V1 object, the value is the name of the decorator associated with the object.
   * <br> If the V1 object uses [@Track](docroot://ui/state-management/arkts-track.md), the value is **'@Track'**.
   * <br> If the V2 object uses [@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md),
   * the value is **'@Trace'**.
   * <br> If the V2 object uses [makeObserved]{@link UIUtils#makeObserved}, the value is **'MakeObserved'**.
   * <br> If the V2 object uses [enableV2Compatibility]{@link UIUtils#enableV2Compatibility}, the value is
   * **'EnableV2Compatible'**.
   * <br> If the V2 object uses built-in data, the value is **'ProxyObservedV2'**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  decoratorName: string;

  /**
   * Name of the attribute decorated by the decorator.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  stateVariableName: string;

  /**
   * Component or object name. For a V1 object, the component name is returned.
   * <br> For a V1 object whose properties are decorated by the [@Track](docroot://ui/state-management/arkts-track.md)
   * decorator, the object name is returned.
   * <br> For a V2 object, the object name is returned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  owningComponentOrClassName: string;

  /**
   * Component ID. For a V1 object, the component ID is returned.
   * <br> **If a V1 object has a property that uses [@Track](docroot://ui/state-management/arkts-track.md), no
   * component ID is available, and -1 is returned. In the same case, no component ID is available for a V2 object,
   * and -1 is returned.**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  owningComponentId: number;

  /**
   * Information about the component that uses the observable object. If the object is not used in any UI, an empty
   * array is returned.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  dependentInfo: Array<ElementInfo>;
}

/**
 * Defines information about the components associated with the observable object, including system components and
 * custom components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export interface ElementInfo {

  /**
   * Component name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  elementName: string;

  /**
   * Component ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  elementId: number;
}

/**
 * **CustomComponentLifecycle** is used to monitor changes in the lifecycle of a custom component. You can obtain a
 * **CustomComponentLifecycle** instance through [UIUtils.getLifecycle]{@link UIUtils#getLifecycle}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare interface CustomComponentLifecycle {

  /**
   * The **getCurrentState** function is used to obtain the current lifecycle state of a custom component. Before calling
   * this method, you need to obtain a CustomComponentLifecycle instance through
   * [UIUtils.getLifecycle]{@link UIUtils#getLifecycle}.
   *
   * @returns { CustomComponentLifecycleState } Current lifecycle status of a custom component.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  getCurrentState(): CustomComponentLifecycleState;

  /**
   * Registers a custom component lifecycle listener. Before calling this method, you need to obtain a
   * CustomComponentLifecycle instance through [UIUtils.getLifecycle]{@link UIUtils#getLifecycle}. When the lifecycle of
   * the custom component changes, the corresponding lifecycle callback function in the listener is triggered.
   *
   * After calling **addObserver** to register a listener, you must call [removeObserver]{@link CustomComponentLifecycle#removeObserver}
   * to remove the listener when the component is destroyed or when the listener is no longer needed. The two must be
   * used in pairs. If **removeObserver** is not called to remove the listener, the listener may keep triggering
   * callbacks and cause memory leaks.
   *
   * @param { CustomComponentLifecycleObserver } observer - Listener for the custom component lifecycle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  addObserver(observer: CustomComponentLifecycleObserver): void;

  /**
   * Removes a custom component lifecycle listener. Before calling this method, you need to obtain a
   * **CustomComponentLifecycle** instance through [UIUtils.getLifecycle]{@link UIUtils#getLifecycle}. After
   * unregistration, even if the lifecycle state of the custom component changes, the corresponding lifecycle callback
   * function in the listener will not be triggered.
   *
   * @param { CustomComponentLifecycleObserver } observer - Listener for the custom component lifecycle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  removeObserver(observer: CustomComponentLifecycleObserver): void;
}

/**
 * After developers register a custom component lifecycle callback, when the lifecycle of the custom component changes,
 * the corresponding lifecycle callback in the listener is triggered. The difference from the lifecycle decorators is
 * that the lifecycle decorators respond to lifecycle events by the component itself, while
 * **CustomComponentLifecycleObserver** observes component lifecycle events from the outside. If only the component
 * itself needs to respond to lifecycle changes, use the lifecycle decorators. If you need to centrally monitor the
 * lifecycles of multiple components, use **CustomComponentLifecycleObserver**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare interface CustomComponentLifecycleObserver {
  /**
   * Called after a new instance of a custom component is created and before its **build()** function is executed.
   * Developers can modify state variables in this phase, and the changes will take effect in the subsequent execution
   * of the **build()** function. Its function is similar to
   * [aboutToAppear]{@link BaseCustomComponent.aboutToAppear}. It is subject to the custom component state machine and
   * triggers the callback when the monitored custom component transitions to
   * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.APPEARED**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToAppear?(): void;

  /**
   * Called after the **build()** function of a custom component is executed. It is subject to the custom component
   * state machine and triggers the callback when the state of the monitored custom component transitions to
   * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.BUILT**. Developers can implement functions
   * that do not affect the actual UI in this phase, such as event data reporting.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onDidBuild?(): void;

  /**
   * Executed before a custom component is destroyed. It is not recommended to modify state variables in the
   * **aboutToDisappear** function. In particular, modifying **\@Link** variables may cause unstable app behavior. Its
   * function is similar to [aboutToDisappear]{@link BaseCustomComponent.aboutToDisappear}. The difference is that the
   * **aboutToDisappear** function in **CustomComponentLifecycleObserver** is subject to the state machine and triggers
   * the callback only before the state of the monitored custom component transitions to
   * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.DISAPPEARED**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToDisappear?(): void;

  /**
   * Called when a reusable custom component is re-added to the node tree from the cache. It is subject to the custom
   * component state machine, that is, it triggers the callback in the stage from
   * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.RECYCLED** to
   * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.BUILT**. Finally, reuse recursively traverses
   * all child components, and for each child component that completes reuse, the **aboutToReuse** function registered in
   * the child component is called. In a state management V1 component, this function can have one input parameter or no
   * parameter. When **params** exists, it indicates the reuse callback of a V1 component. In a state management V2
   * component, this function has no input parameter.
   *
   * > **NOTE**
   * >
   * > - In a state management V1 component, the **aboutToReuse** function can have one input parameter or no
   * > parameter. The input parameter **params** is recommended to be of the
   * > Record\<string, Object \| undefined \| null\> type.
   * >
   * > - In a state management V2 component, the **aboutToReuse** function has no input parameter.
   *
   * @param { Record<string, Object | undefined | null> } [params] - Construction parameters received when the component
   *     is reused. Only the reuse callback of a V1 component supports this parameter. If this parameter is not passed,
   *     the reuse callback function has no input parameter.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToReuse?(params?: Record<string, Object | undefined | null>): void;

  /**
   * After a component is recycled, the recycling operations such as resource release defined in the app are performed
   * first. After the recycling is complete, the **aboutToRecycle** function is called. It is subject to the custom
   * component state machine, that is, it triggers the callback in the stage from
   * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.BUILT** to
   * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.RECYCLED**. Then the component is frozen to
   * avoid UI updates while the component is in the reuse pool. Finally, recycling recursively traverses all child
   * components, and for each child component that completes recycling, the **aboutToRecycle** function registered in the
   * child component is called.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToRecycle?(): void;
}

/**
 * Current lifecycle status of a custom component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare enum CustomComponentLifecycleState {

  /**
   * Initial.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  INIT = 0,

  /**
   * Appeared.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  APPEARED = 1,

  /**
   * Built.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  BUILT = 2,

  /**
   * Recycled.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  RECYCLED = 3,

  /**
   * Disappeared.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  DISAPPEARED = 4,
}

/**
 * The function decorated by **\@ComponentInit** is executed when the initialization of a custom component is about to
 * complete, and is triggered before **\@ComponentAppear**. You can register lifecycle listeners and modify state
 * variables at this time. The difference from **\@ComponentAppear** is that **\@ComponentInit** focuses on preparation
 * operations in the initialization phase (such as listener registration), while **\@ComponentAppear** focuses on state
 * changes before the component is about to be displayed. The two can be used together to respectively assume the
 * responsibilities of initialization and pre-display.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentInit: MethodDecorator;

/**
 * Decorates a function that is called after a new instance of the custom component is created and
 * before the **build()** function is executed. This callback is similar to **aboutToAppear**. The difference is that
 * the **@ComponentAppear** callback is triggered only when the custom component is in the
 * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.INIT** state. The state variable can be
 * changed in **@ComponentAppear**. The change will take effect in the subsequent **build()** function execution.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentAppear: MethodDecorator;

/**
 * The function decorated by **\@ComponentBuilt** is called after the **build()** function of a custom component is
 * executed for the first time, that is, it is triggered in the stage from
 * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.APPEARED** to
 * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.BUILT**. You can implement functions that do
 * not affect the actual UI, such as event data reporting, in this phase.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentBuilt: MethodDecorator;

/**
 * The function decorated by **\@ComponentReuse** is called when a reusable custom component is re-added to the node
 * tree from the cache, that is, it is triggered in the stage from
 * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.RECYCLED** to
 * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.BUILT**, to receive the construction
 * parameters of the component. Finally, reuse recursively traverses all child components, and for each child component
 * that completes reuse, the function decorated by **\@ComponentReuse** in the child component is called.
 *
 * > **NOTE**
 * >
 * > -  In a state management V1 component, the function decorated by **\@ComponentReuse** can have one input parameter
 * >    or no parameter. The input parameter **params** is recommended to be of the
 * >    **Record\<string, Object \| undefined \| null\>** type.
 * >
 * > -  In a state management V2 component, the function decorated by **\@ComponentReuse** has no input parameter.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentReuse: MethodDecorator;

/**
 * After a component is recycled, the recycling operations such as resource release defined in the app are performed
 * first. After the recycling is complete, the function decorated by **\@ComponentRecycle** is called, that is, it is
 * triggered in the stage from **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.BUILT** to
 * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.RECYCLED**. Then the component is frozen to
 * avoid UI updates while the component is in the reuse pool. Finally, recycling recursively traverses all child
 * components, and for each child component that completes recycling, the function decorated by **\@ComponentRecycle**
 * in the child component is called.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentRecycle: MethodDecorator;

/**
 * After a custom component transitions from the inactive state to the active state, the function decorated by
 * **\@ComponentActive** is called. In the component reuse and recycling scenario, when a cached component is reused
 * (that is, re-added to the node tree from the reuse pool), the component transitions from the inactive state to the
 * active state, triggering this callback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const ComponentActive: MethodDecorator;

/**
 * After a custom component transitions from the active state to the inactive state, the function decorated by
 * **\@ComponentInactive** is called. In the component reuse and recycling scenario, when a component is recycled to the
 * reuse pool, the component transitions from the active state to the inactive state, triggering this callback.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const ComponentInactive: MethodDecorator;

/**
 * The function decorated by **\@ComponentDisappear** is executed before a custom component is destroyed, that is, it is
 * triggered when the component transitions to the
 * **[CustomComponentLifecycleState]{@link CustomComponentLifecycleState}.DISAPPEARED** state. It is not recommended to
 * change state variables in this function. In particular, modifying **\@Link** variables may cause unstable app
 * behavior.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentDisappear: MethodDecorator;

/**
 * The **CustomComponentContext** class provides access to component-level services, including the reuse pool. You can
 * obtain an instance through [UIUtils.getCustomComponentContext]{@link UIUtils#getCustomComponentContext}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface CustomComponentContext {

  /**
   * Obtains the global reuse pool of the custom component. If the component or its upper-level component does not
   * configure the global reuse pool using **reusePool** and **poolAccepts**, **undefined** is returned. For details
   * about how to configure the global reuse pool, see
   * [Global Reuse: Centralized Component Recycling and Reuse](docroot://ui/state-management/arkts-global-reuse-pool.md).
   *
   * @returns { IReusePool | undefined } If a global reuse pool is configured for the current component, the reuse pool
   *     information is returned. Otherwise, **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getReusePool(): IReusePool | undefined;
}

/**
 * Provides the features related to the global reuse pool of a custom component, including querying the current count
 * and upper limit of recycled components and pre-rendering reusable components into the reuse pool. It is suitable for
 * scenarios where you need to manually manage and optimize component reuse efficiency.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface IReusePool {

  /**
   * Obtains the information about the recycling instance of a given reusable component type in this reuse pool.
   *
   * @param { ReusableComponentConstructor } constructor - Constructor of the reusable custom component to be queried.
   * @param { string } [reuseId] - Reuse ID for filtering. If specified, only the information about the reuse pool with
   *     the reuse ID is returned. The default value is **undefined**, indicating that information about all reuse pools
   *     is returned.
   * @returns { IReusableInfo[] | IReusableInfo | undefined } If the reuse pool is not configured to accept the given
   *     component type, **undefined** is returned.
   *     <br>If **reuseId** is specified, a single **IReusableInfo** is returned (even if **count** is set to **0** and
   *     **maxCount** is set to the default value).
   *     <br>If the **reuseId** parameter is not specified and the reusable component is created without a reuse ID,
   *     a single **IReusableInfo** is returned.
   *     <br>If the **reuseId** parameter is not specified but the reusable component is created with a reuse ID,
   *     an **Array<IReusableInfo>** is returned, providing a separate entry for each reuse ID with a positive count
   *     or a non-default **maxCount**, plus an entry of **reuseId: undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getReusableInfo(constructor: ReusableComponentConstructor,
    reuseId?: string): IReusableInfo[] | IReusableInfo | undefined;

  /**
   * Invokes an idle task to pre-create a reusable component and put it into the reuse pool before it is used for the
   * first time.
   *
   * > **NOTE**
   * >
   * > 1. **preRender** only places components that are configured to be accepted by the pool into the pool. Components
   * > that are not accepted by the pre-rendering pool are created and destroyed immediately.
   * >
   * > 2. During pre-rendering, components are not reused from the pool. The pool only accepts newly created instances.
   * >
   * > 3. The **@Builder** decorated function performs complete deep rendering, including nested child components.
   *
   * @param { WrappedBuilder<[]> } builder - **WrappedBuilder** that contains the \@Builder decorated function to be
   *     executed *times* times. One or more [\@Reusable](docroot://ui/state-management/arkts-create-custom-components.md#reusable)/[\@ReusableV2](docroot://ui/state-management/arkts-create-custom-components.md#reusablev2)
   *     components should be created for each execution.
   * @param { number } times - Number of times the \@Builder decorated function is executed. The value is a positive
   *     integer. If 0 or a negative number is passed, the value does not take effect. If a decimal is passed, it is
   *     rounded up.
   * @returns { Promise<void> } Promise that is fulfilled when the idle task completes successfully. This promise returns
   *     no value. If the pre-rendering task fails to be executed, the promise will be rejected.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  preRender(builder: WrappedBuilder<[]>, times: number): Promise<void>;
}

/**
 * The **IReusableInfo** API provides information about the current number and maximum number of reusable components
 * managed by the reuse pool.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface IReusableInfo {
  /**
   * Number of components currently recycled in the pool. If **reuseId** is specified, **count** indicates the number of
   * components with the reuse ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly count: number;

  /**
   * Maximum number of components that can be recycled in the pool. If **reuseId** is specified, **maxCount** indicates
   * the number of components with the reuse ID. Setting **maxCount** to a value smaller than that of **count** will
   * cause the framework to asynchronously clear redundant components. During a delay, the value of **count** may
   * temporarily exceed that of **maxCount**. Default value: **100**; maximum value: **200**; minimum value: **0**. If
   * the assigned value is out of range, the value close to the maximum or minimum value is used. If the assigned value
   * is a decimal, it is rounded down.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxCount: number;

  /**
   * Reuse ID specified when a component is recycled. If the component is not recycled using **reuseId**, **undefined**
   * is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly reuseId?: string;
}

/**
 * Function for initializing the reusable custom component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type ReusableComponentConstructor = Function;