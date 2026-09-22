/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file System API
 * @kit ArkUI
 */

/**
 * AppStorage is the global UI state storage center bound to applications. It is created by the UI framework at
 * application startup, which is used to store UI state data in runtime memory, and implement application-level global
 * state sharing. For details about how to use it on the UI, see
 * [AppStorage: Storing Application-wide UI State](docroot://ui/state-management/arkts-appstorage.md).
 *
 * > **NOTE**
 *
 * > Since API version 12, AppStorage supports
 * > [Map](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-map-type),
 * > [Set](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-set-type),
 * > [Date](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-date-type) types,
 * > as well as **null**, **undefined**, and
 * > [union types](docroot://ui/state-management/arkts-appstorage.md#using-union-types-in-appstorage).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class AppStorage {
  /**
   * Returns a reference to the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given **propName** does not exist, this API returns **undefined**.
   *
   * This API is basically the same as [link]{@link AppStorage#link}, except that it does not require manual release of
   * the returned variable of the [AbstractProperty<T>]{@link AbstractProperty} type.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { AbstractProperty<T> | undefined } Reference to the property corresponding to **propName** in
   *     AppStorage, or **undefined** if the corresponding **propName** does not exist in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static ref<T>(propName: string): AbstractProperty<T> | undefined;

  /**
   * Similar to the [ref]{@link AppStorage#ref} API, returns a reference to the property corresponding to **propName**
   * in [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given property does not exist, this API
   * creates and initializes the property in AppStorage using **defaultValue** and returns its reference.
   *
   * This API is basically the same as [setAndLink]{@link AppStorage#setAndLink}, except that it does not require
   * manual release of the returned variable of the[AbstractProperty]{@link AbstractProperty} type.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. The value can be **null** or **undefined**.
   * @returns { AbstractProperty<T> } Instance of **AbstractProperty<T>**, which is a reference to the property
   *     corresponding to **propName** in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;

  /**
   * Establishes a two-way data binding with the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given property exists in AppStorage, the
   * two-way bound data of the property in AppStorage is returned.
   *
   * Any update of the data is synchronized back to AppStorage, which then synchronizes the update to all data and
   * custom components bound to the property.
   *
   * If the given property does not exist in AppStorage, **undefined** is returned.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { any } Two-way bound data of the specified property in AppStorage, or **undefined** if the property does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#link
   */
  static Link(propName: string): any;

  /**
   * Establishes a two-way data binding with the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given **propName** exists in
   * AppStorage, the two-way bound data of the corresponding property in AppStorage is returned. Unlike the one-way
   * data binding of [prop]{@link AppStorage#Prop}, modifications through **link** are synchronized back to
   * AppStorage, and AppStorage synchronizes the changes to all data and custom components bound to this **propName**.
   *
   * If the given property does not exist in AppStorage, **undefined** is returned.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { SubscribedAbstractProperty<T> } Two-way bound data of the specified property in AppStorage, or
   *     **undefined** if the property does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static link<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * Similar to the [Link]{@link AppStorage#Link} API, establishes a two-way data binding with the property
   * corresponding to **propName** in [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given
   * property exists in AppStorage, this API returns the two-way bound data for the property. If the given property does
   * not exist, this API creates and initializes the property in AppStorage using **defaultValue** and returns its two-
   * way bound data. The value of **defaultValue** must be of the **T** type and cannot be **null** or **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. The value cannot be **null** or **undefined**.
   * @returns { SubscribedAbstractProperty<T> } Instance of SubscribedAbstractProperty<T>, which is the two-way bound
   *     data of the property corresponding to **propName** in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#setAndLink
   * @see setAndLink
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Similar to the [link]{@link AppStorage#link} API, establishes a two-way data binding with the property
   * corresponding to **propName** in [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given
   * property exists in AppStorage, this API returns the two-way bound data for the property. If the given property does
   * not exist, this API creates and initializes the property in AppStorage using **defaultValue** and returns its two-
   * way bound data.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<T> } Instance of SubscribedAbstractProperty<T>, which is the two-way bound
   *     data of the property corresponding to **propName** in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Establishes a one-way data binding with the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given **propName** exists in AppStorage,
   * the one-way bound data of the corresponding property in AppStorage is returned. If the given **propName** does
   * not exist in AppStorage, **undefined** is returned. Modifications to the one-way bound data are not synchronized
   * back to AppStorage.
   *
   * > **NOTE**
   *
   * > **Prop** supports only the **S** type (number, boolean, string).
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { any } One-way bound data of the specified property in AppStorage, or **undefined** if the property does
   *     not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#prop
   * @see prop
   */
  static Prop(propName: string): any;

  /**
   * Establishes a one-way data binding with the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given **propName** exists in AppStorage,
   * the one-way bound data of the corresponding property in AppStorage is returned. If **propName** does not exist in
   * AppStorage, **undefined** is returned. Modifications to the one-way bound data are not synchronized back to
   * AppStorage.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { SubscribedAbstractProperty<T> } One-way bound data of the specified property in AppStorage, or
   *     **undefined** if the property does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static prop<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * Similar to the [Prop]{@link AppStorage#Prop} API, establishes a one-way data binding with the property
   * corresponding to **propName** in [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given
   * **propName** exists in AppStorage, this API returns the one-way bound data of the corresponding property. If the
   * given **propName** does not exist, this API creates and initializes the property corresponding to **propName**
   * in AppStorage using **defaultValue** and returns its one-way bound data. The value of **defaultValue** must be of
   * the **S** type and cannot be **null** or **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { S } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. The value cannot be **null** or **undefined**.
   * @returns { SubscribedAbstractProperty<S> } Instance of SubscribedAbstractProperty<S>, which is the one-way bound
   *     data of the property corresponding to **propName** in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#setAndProp
   * @see setAndProp
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Similar to the [prop]{@link AppStorage#prop} API, establishes a one-way data binding with the property
   * corresponding to propName in [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given
   * **propName** exists in AppStorage, the one-way bound data of the corresponding property is returned. If the
   * given **propName** does not exist, this API creates and initializes the property corresponding to **propName**
   * in AppStorage using **defaultValue** and returns its one-way bound data.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<T> } Instance of SubscribedAbstractProperty<T>, which is the one-way bound
   *     data of the property corresponding to **propName** in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Checks whether the property corresponding to **propName** exists in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { boolean } Returns **true** if the property exists in AppStorage; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#has
   * @see has
   */
  static Has(propName: string): boolean;

  /**
   * Checks whether the property corresponding to **propName** exists in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { boolean } Returns **true** if the property exists in AppStorage; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static has(propName: string): boolean;

  /**
   * Obtains the value of the property corresponding to **propName** from
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the property does not exist, this API returns
   * **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { T | undefined } Value of the property corresponding to **propName** in AppStorage, or **undefined** if
   *     it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#get
   * @see get
   */
  static Get<T>(propName: string): T | undefined;

  /**
   * Obtains the value of the property corresponding to **propName** from
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the property does not exist, this API returns
   * **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { T | undefined } Value of the property corresponding to **propName** in AppStorage, or **undefined** if
   *     it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static get<T>(propName: string): T | undefined;

  /**
   * Sets the value of the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the value of **newValue** is the same as the
   * current value of the property corresponding to **propName**, no assignment is performed, and the state variable
   * does not instruct the UI to update the value of the property. Unlike [SetOrCreate]{@link AppStorage#SetOrCreate},
   * **Set** takes effect only when **propName** already exists, and returns **false** if **propName** does not exist.
   * Since API version 12, **newValue** can be **null** or **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - New value of the property corresponding to **propName**. Since API version 12, the value
   *     can be **null** or **undefined**.
   * @returns { boolean } Returns **false** if the property corresponding to **propName** does not exist in AppStorage.
   *     Returns **true** if the operation is successful.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#set
   * @see set
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * Sets the value of the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the value of **newValue** is the same as the
   * current value of the property, no assignment is performed, and the state variable does not instruct the UI to
   * update the value of the property. Unlike [setOrCreate]{@link AppStorage#setOrCreate}, **set** takes effect only
   * when **propName** already exists, and returns **false** if **propName** does not exist.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - New value of the property corresponding to **propName**. Since API version 12, the value
   *     can be **null** or **undefined**.
   * @returns { boolean } Returns **false** if the property corresponding to **propName** does not exist in AppStorage
   *     or if the assignment fails. Returns **true** if the assignment is successful.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static set<T>(propName: string, newValue: T): boolean;

  /**
   * Sets the value of the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) to a new value, if **propName** exists and the value
   * of **newValue** is different from the value of the property corresponding to **propName**. If the new value is the
   * same as the current value of the property, no assignment is performed, and the state variable does not instruct the
   * UI to update the value of the property. If **propName** does not exist, this API creates it with the value of
   * **newValue**. Since API version 12, **newValue** can be **null** or **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - New value of the property corresponding to **propName**. Since API version 12, the value can
   *     be **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#setOrCreate
   * @see setOrCreate
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Sets the value of the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) to a new value, if the property exists and the new
   * value is different from the current value. If the new value is the same as the current value of the property, no
   * assignment is performed, and the state variable does not instruct the UI to update the value of the property.
   *
   * If **propName** does not exist, this API creates it with the value of **newValue**. This **setOrCreate** API can
   * create only one AppStorage key-value pair each time. To create multiple key-value pairs, call this API multiple
   * times.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - New value of the property corresponding to **propName**. Since API version 12, the value
   *     can be **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setOrCreate<T>(propName: string, newValue: T): void;

  /**
   * Deletes the property corresponding to **propName** from
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * The deletion is only successful if the property has no subscribers. If there is a subscriber, the deletion fails
   * and **false** is returned. If there are no subscribers, the deletion is successful and **true** is returned.
   *
   * Subscribers include properties bound using [Link]{@link AppStorage#Link} and [Prop]{@link AppStorage#Prop} APIs,
   * as well as those decorated with [@StorageLink](docroot://ui/state-management/arkts-appstorage.md#storagelink)
   * and [@StorageProp](docroot://ui/state-management/arkts-appstorage.md#storageprop). This means that if there is
   * still an **\@StorageLink('propName') / \@StorageProp('propName')** decorated variable or a
   * **SubscribedAbstractProperty** instance in a synchronization with the property, the property cannot be deleted
   * from AppStorage.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** if the operation fails.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#delete
   * @see delete
   */
  static Delete(propName: string): boolean;

  /**
   * Deletes the property corresponding to **propName** from
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * The deletion is only successful if the property has no subscribers. If there is a subscriber, the deletion fails
   * and **false** is returned. If there are no subscribers, the deletion is successful and **true** is returned.
   *
   * The property subscribers include the following:
   *
   * 1. Variables decorated by [\@StorageLink](docroot://ui/state-management/arkts-appstorage.md#storagelink) and
   * [\@StorageProp](docroot://ui/state-management/arkts-appstorage.md#storageprop)
   *
   * 2. Instances of [SubscribedAbstractProperty]{@link SubscribedAbstractProperty} returned by
   * [link]{@link AppStorage#link}, [prop]{@link AppStorage#prop}, [setAndLink]{@link AppStorage#setAndLink},
   * or [setAndProp]{@link AppStorage#setAndProp}
   *
   * To delete these subscribers:
   *
   * 1. Remove the custom component containing \@StorageLink or \@StorageProp. For details, see
   * [Custom Component Deletion](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#custom-component-deletion).
   *
   * 2. Call the [aboutToBeDeleted]{@link SubscribedAbstractProperty#aboutToBeDeleted} API on instances of
   * **SubscribedAbstractProperty** returned by **link**, **prop**, **setAndLink**, or **setAndProp**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** if the operation fails.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static delete(propName: string): boolean;

  /**
   * Obtains all property names in [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @returns { IterableIterator<string> } All property names in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#keys
   * @see keys
   */
  static Keys(): IterableIterator<string>;

  /**
   * Obtains all property names in [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @returns { IterableIterator<string> } All property names in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static keys(): IterableIterator<string>;

  /**
   * Deletes all properties from [AppStorage](docroot://ui/state-management/arkts-appstorage.md). The deletion is only
   * successful if none of the properties in AppStorage have any subscribers. If there are subscribers, this API does
   * not take effect and **false** is returned. If there are no subscribers, the deletion is successful and **true**
   * is returned. For details about the subscriber, see [delete]{@link AppStorage#delete}.
   *
   * @returns { boolean } Result of deleting all properties from AppStorage. Returns **true** if the operation is
   *     successful; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead AppStorage.Clear
   */
  static staticClear(): boolean;

  /**
   * Deletes all properties from [AppStorage](docroot://ui/state-management/arkts-appstorage.md). The deletion is only
   * successful if none of the properties in AppStorage have any subscribers. If there are subscribers, this API does
   * not take effect and **false** is returned. If there are no subscribers, the deletion is successful and **true** is
   * returned.
   *
   * For details about the subscriber, see [delete]{@link AppStorage#delete}.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#clear
   * @see clear
   */
  static Clear(): boolean;

  /**
   * Deletes all properties from [AppStorage](docroot://ui/state-management/arkts-appstorage.md). The deletion is only
   * successful if none of the properties in AppStorage have any subscribers. If there are subscribers, this API does
   * not take effect and **false** is returned. If there are no subscribers, the deletion is successful and **true** is
   * returned.
   *
   * For details about the subscriber, see [delete]{@link AppStorage#delete}.
   *
   * @returns { boolean } Returns **true** if the properties in AppStorage have no subscribers and the deletion is
   *     successful; returns **false** if there are still subscribers.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static clear(): boolean;

  /**
   * Checks whether the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) is mutable.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { boolean } Whether the property corresponding to **propName** is mutable. Currently, this return value is
   *     always **true**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   */
  static IsMutable(propName: string): boolean;

  /**
   * Obtains the number of properties in [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @returns { number } Number of properties in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#size
   * @see size
   */
  static Size(): number;

  /**
   * Obtains the number of properties in [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @returns { number } Number of properties in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static size(): number;
}

/**
 * A reference to a property in AppStorage or LocalStorage. It provides the capabilities to read and modify
 * referenced property data and query property names. Unlike **SubscribedAbstractProperty**, an
 * **AbstractProperty** instance does not need to be manually released.
 *
 * > **NOTE**
 *
 * > Since API version 12, AppStorage and LocalStorage support the **Map**, **Set**, and **Date** types, as well as
 * > **null**, **undefined**, and union types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AbstractProperty<T> {
  /**
   * Reads data of the referenced property from [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
   *
   * @returns { T } Data of the referenced property in AppStorage or LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get(): T;

  /**
   * Updates the data of the referenced property in [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). The value of **newValue** must be of the **T**
   * type and can be **null** or **undefined**.
   *
   * @param { T } newValue - New value of the property referenced in AppStorage/LocalStorage. The value can be **null**
   *     or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set(newValue: T): void;

  /**
   * Reads the property name of the referenced property from
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
   *
   * @returns { string } Property name of the referenced property in AppStorage or LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  info(): string;
}

/**
 * An object of a one-way or two-way synchronized property in
 * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
 * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). It is used to establish a data synchronization
 * relationship with a property in AppStorage or LocalStorage. A **SubscribedAbstractProperty** instance needs to be
 * manually released through the [aboutToBeDeleted]{@link SubscribedAbstractProperty#aboutToBeDeleted} API to cancel
 * the synchronization relationship and invalidate the instance.
 *
 * > **NOTE**
 *
 * > Since API version 12, AppStorage and LocalStorage support the **Map**, **Set**, and **Date** types, as well as
 * > **null**, **undefined**, and union types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi [since 7 - 8]
 * @publicapi [since 9]
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form [since 9]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare abstract class SubscribedAbstractProperty<T> {
  /**
   * A set of subscribers.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected subscribers_: Set<number>;

  /**
   * Unique ID of the subscription property, used to distinguish different subscription property instances in
   * subscription relationship management.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private id_;

  /**
   * Variable information used to identify the subscription relationship.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private info_?;

  /**
   * Constructor. If the **subscribeMe** parameter has been passed in to establish a subscription relationship, call
   * [unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber} to unsubscribe when the subscription
   * relationship is no longer needed (the subscriber ID is obtained through
   * [IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}).
   *
   * @param { IPropertySubscriber } subscribeMe - Subscriber used to receive property change notifications. If not
   *     passed, no subscription relationship is established.
   * @param { string } info - Variable information used to identify the subscription relationship. Defaults to
   *     **undefined** if not passed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(
    /**
     * Subscriber used to receive property change notifications. If not passed, no subscription relationship is
     * established.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    subscribeMe?: IPropertySubscriber,
    /**
     * Variable information used to identify the subscription relationship. Defaults to **undefined** if not passed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    info?: string,
  );

  /**
   * Called when obtaining the ID.
   *
   * @returns { number } Unique ID of the subscription property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * Returns the name of the synchronized property in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
   *
   * @returns { string } Name of the property synchronized in AppStorage or LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  info(): string;

  /**
   * Reads the data of the synchronized property from [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
   *
   * @returns { T } Data of the synchronized property in AppStorage or LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  abstract get(): T;

  /**
   * Sets the data of the synchronized property in [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). The value of **newValue** must be of the **T**
   * type. Since API version 12, it can be **null** or **undefined**.
   *
   * @param { T } newValue - New value of the synchronized property in AppStorage or LocalStorage. Since API version 12,
   *     the value can be **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  abstract set(newValue: T): void;

  /**
   * Creates two-way synchronization. Data changes are transferred bidirectionally between the data source and the
   * subscriber. Compared with [createOneWaySync]{@link SubscribedAbstractProperty#createOneWaySync}, this API supports
   * two-way synchronization between the data source and the subscriber, and is suitable for scenarios where the
   * subscriber also needs to modify the data source in reverse. If only one-way synchronization from the data source to
   * the subscriber is required, use [createOneWaySync]{@link SubscribedAbstractProperty#createOneWaySync}. When the
   * subscription relationship is no longer needed, call
   * [unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber} to unsubscribe (the subscriber ID is obtained
   * through [IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}), or call
   * [aboutToBeDeleted()]{@link SyncedPropertyTwoWay#aboutToBeDeleted} of the returned
   * [SyncedPropertyTwoWay]{@link SyncedPropertyTwoWay} object to cancel the subscription.
   *
   * @param { IPropertySubscriber } subscribeMe - Subscriber used to receive property change notifications. If not
   *     passed, no subscription relationship is established.
   * @param { string } info - Variable information used to identify the subscription relationship. Defaults to
   *     **undefined** if not passed.
   * @returns { SyncedPropertyTwoWay<T> } Two-way synchronized property object created, used for two-way data
   *     synchronization and read/write operations between the data source and the subscriber.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Creates one-way synchronization. Data changes are transferred only from the data source to the subscriber. When the
   * subscription relationship is no longer needed, call
   * [unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber} to cancel the subscription (the subscriber ID
   * is obtained through [IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}), or call
   * [aboutToBeDeleted()]{@link SyncedPropertyOneWay#aboutToBeDeleted} of the returned
   * [SyncedPropertyOneWay]{@link SyncedPropertyOneWay} object to cancel the subscription.
   *
   * @param { IPropertySubscriber } subscribeMe - Subscriber used to receive property change notifications. If not
   *     passed, no subscription relationship is established.
   * @param { string } info - Variable information used to identify the subscription relationship. Defaults to
   *     **undefined** if not passed.
   * @returns { SyncedPropertyOneWay<T> } One-way synchronized property object created, which is used to receive one-way
   *     synchronization of the parent component's state value and update its own value when the parent component's state
   *     changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Removes a subscriber based on the subscriber ID.
   *
   * @param { number } subscriberId - ID of the subscriber to remove. It must be a subscriber ID that has established a
   *     subscription relationship through
   *     [createTwoWaySync]{@link SubscribedAbstractProperty#createTwoWaySync} or
   *     [createOneWaySync]{@link SubscribedAbstractProperty#createOneWaySync}, and is obtained through
   *     [IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * Notifies subscribers that the value has changed.
   *
   * @param { T } newValue - New value after the change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * Notifies subscribers that the property has been read.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyPropertyRead(): void;

  /**
   * Obtains the number of subscribers.
   *
   * @returns { number } Number of subscribers.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  numberOfSubscrbers(): number;

  /**
   * Cancels the one-way or two-way synchronization relationship between the
   * [SubscribedAbstractProperty]{@link SubscribedAbstractProperty} instance and
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md), and invalidates the
   * **SubscribedAbstractProperty** instance. That is, after **aboutToBeDeleted** is called, [set]{@link
   * SubscribedAbstractProperty#set} or [get]{@link SubscribedAbstractProperty#get} can no longer be called using the
   * **SubscribedAbstractProperty** instance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  abstract aboutToBeDeleted(): void;
}

/**
 * A property subscriber API, which defines the methods that the subscriber needs to implement to receive property
 * change notifications and lifecycle callbacks.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
interface IPropertySubscriber {
  /**
   * Obtains the ID.
   *
   * @returns { number } Unique ID of the subscriber.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * Called when the object is about to be destroyed.
   *
   * @param { IPropertySubscriber } owningView - Custom component that owns the current property. If not passed, no
   *     associated custom component is specified.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * Inherits from [SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty} to implement two-way state data
 * synchronization between parent and child components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Data source for the two-way synchronized property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private source_;

  /**
   * Constructor. When the subscription relationship is no longer needed, call
   * [unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber} to unsubscribe (the subscriber ID is obtained
   * through [IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}), or call
   * [aboutToBeDeleted()]{@link SyncedPropertyTwoWay#aboutToBeDeleted} of this object to cancel the subscription.
   *
   * @param { SubscribedAbstractProperty<T> } source - Data source for the two-way synchronized property.
   * @param { IPropertySubscriber } subscribeMe - Subscriber used to receive property change notifications. If not
   *     passed, no subscription relationship is established.
   * @param { string } info - Variable information used to identify the subscription relationship. If not passed, the
   *     default value is **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when the object is about to be destroyed.
   *
   * @param { IPropertySubscriber } unsubscribeMe - Subscriber to remove, which must be the subscriber who has
   *     established a subscription relationship. If not passed, all subscribers are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Notifies subscribers that the property value has changed.
   *
   * @param { T } newValue - New value after the change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * Obtains the current value of the property.
   *
   * @returns { T } Current data value of the two-way synchronized property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * Sets a new value for the property.
   *
   * @param { T } newValue - New value to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * Inherits from [SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty} to receive one-way synchronization of
 * the parent component's state value. The value is updated when the parent component state changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {
  /**
   * Value used for one-way binding.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private wrappedValue_;

  /**
   * A data source for the one-way synchronized property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private source_;

  /**
   * Constructor. When the subscription relationship is no longer needed, call
   * [unlinkSuscriber]{@link SubscribedAbstractProperty#unlinkSuscriber} to unsubscribe (the subscriber ID is obtained
   * through [IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}), or call
   * [aboutToBeDeleted()]{@link SyncedPropertyOneWay#aboutToBeDeleted} of this object to cancel the subscription.
   *
   * @param { SubscribedAbstractProperty<T> } source - Data source for the one-way synchronized property.
   * @param { IPropertySubscriber } subscribeMe - Subscriber used to receive property change notifications. If not
   *     passed, no subscription relationship is established.
   * @param { string } info - Variable information used to identify the subscription relationship. Defaults to
   *     **undefined** if not passed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when the object is about to be destroyed.
   *
   * @param { IPropertySubscriber } unsubscribeMe - Subscriber to remove, which must be the subscriber who has
   *     established a subscription relationship. If not passed, all subscribers are removed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Notifies subscribers that the property value has changed.
   *
   * @param { T } newValue - New value after the change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * Obtains data.
   *
   * @returns { T } Current data value of the one-way synchronized property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * Sets a new value for the property.
   *
   * @param { T } newValue - New value to set.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * Inherits from [IPropertySubscriber]{@link IPropertySubscriber} to subscribe to changes of a single property value.
 * Notifications are received when the subscribed property changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {
  /**
   * Notifies subscribers that the property value has changed.
   *
   * @param { T } newValue - New value after the change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;
}

/**
 * A subscribable abstract class used to manage a collection of owned properties, providing the capabilities to add,
 * remove, and notify property changes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare abstract class SubscribaleAbstract {
  /**
   * A collection of owned properties.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private owningProperties_: Set<number>;

  /**
   * A constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor();

  /**
   * Called when notifying a property change.
   *
   * @param { string } propName - Name of the property whose change is to be notified.
   * @param { any } newValue - New value after the change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Adds a subscriber to the list of owned properties. When the property is no longer needed, call
   * [removeOwningProperty]{@link SubscribaleAbstract#removeOwningProperty} or
   * [removeOwningPropertyById]{@link SubscribaleAbstract#removeOwningPropertyById} to remove the subscriber from the
   * property list.
   *
   * @param { IPropertySubscriber } subscriber - Subscriber to add, which will receive property change notifications.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Removes a subscriber from the list of owned properties.
   *
   * @param { IPropertySubscriber } property - Subscriber to remove, which must be the subscriber that has been added
   *     through [addOwningProperty]{@link SubscribaleAbstract#addOwningProperty}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Removes a subscriber from the list of owned properties by ID.
   *
   * @param { number } subscriberId - ID of the subscriber to remove. It must be the ID of the subscriber added through
   *     [addOwningProperty]{@link SubscribaleAbstract#addOwningProperty} and is obtained through
   *     [IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public removeOwningPropertyById(subscriberId: number): void;
}

/**
 * Defines a key-value pair object used to specify environment variable names and their default values, passed as a
 * parameter to [envProps]{@link Environment#envProps}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface EnvPropsOptions {
  /**
   * Environment variable name. For details about the value range, see
   * [Built-in Environment Variables](@link Environment).
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  key: string;

  /**
   * Default value used if the value of the specified environment variable key is not found in AppStorage.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  defaultValue: number | string | boolean;
}

/**
 * Provides the capability to query device environment states. It can inject system environment variables (such as
 * the dark/light mode, language, font scale, and layout direction) into AppStorage, enabling applications to
 * perceive and respond to device environment changes. For details about how to use it on the UI, see
 * [Environment: Device Environment Query](docroot://ui/state-management/arkts-environment.md).
 *
 * ###### Built-in Environment Variables
 *
 * | key                  | Type           | Description                                                        |
 * | -------------------- | --------------- | ------------------------------------------------------------ |
 * | accessibilityEnabled | string          | Whether to enable accessibility. If there is no value of **accessibilityEnabled** in the environment variables, the default value passed through APIs such as **envProp** and **envProps** is added to AppStorage.|
 * | colorMode            | [ColorMode]{@link ColorMode}       | Color mode. The options are as follows: <br> - **ColorMode.LIGHT**: light mode.<br> - **ColorMode.DARK**: dark mode. |
 * | fontScale            | number          | Font scale.                                              |
 * | fontWeightScale      | number          | Font weight ratio.                                                  |
 * | layoutDirection      | [LayoutDirection]{@link LayoutDirection} | Layout direction. The options are as follows:<br> - **LayoutDirection.LTR**: left to right;<br> - **LayoutDirection.RTL**: right to left;<br> - **LayoutDirection.Auto**: follows the system settings. |
 * | languageCode         | string          | Current system language, which is in lowercase letters, for example, **zh**.                            |
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class Environment {
  /**
   * A constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor();

  /**
   * Stores the built-in environment variable key of [Environment](docroot://ui/state-management/arkts-environment.md)
   * into [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the value of the environment variable key
   * is not found in AppStorage, the default value is used and stored in AppStorage. If the value is successfully
   * stored, **true** is returned. If the value of the environment variable key already exists in AppStorage, **false**
   * is returned.
   *
   * If **EnvProp** is not called, reading environment variables directly from AppStorage will fail to obtain the
   * corresponding environment variable values. You are advised to call this API at application startup.
   *
   * @param { string } key - Environment variable name. For details about the value range, see
   *     [Built-in Environment Variables](@link Environment).
   * @param { S } value - Default value used if the value of the environment variable key is not found in AppStorage.
   * @returns { boolean } Returns **false** if the property corresponding to the key exists in AppStorage; creates a
   *     property with the key and the default value and returns **true** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Environment#envProp
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * Stores the built-in environment variable key of [Environment](docroot://ui/state-management/arkts-environment.md)
   * into [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the value of the environment variable key
   * is not found in AppStorage, the default value is used and stored in AppStorage. If the value is successfully
   * stored, **true** is returned. If the value of the environment variable key already exists in AppStorage, **false**
   * is returned.
   *
   * If **envProp** is not called, reading environment variables directly from AppStorage will fail to obtain the
   * corresponding environment variable values. You are advised to call this API at application startup.
   *
   * @param { string } key - Environment variable name. For details about the value range, see
   *     [Built-in Environment Variables](@link Environment).
   * @param { S } value - Default value used if the value of the environment variable key is not found in AppStorage.
   * @returns { boolean } Returns **false** if the property corresponding to the key exists in AppStorage; creates a
   *     property with the key and the default value and returns **true** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static envProp<S>(key: string, value: S): boolean;

  /**
   * Works in a way similar to the [EnvProp]{@link Environment#EnvProp} API, with the difference that it allows for
   * initialization of multiple properties in batches. If **EnvProps** is not called, reading environment variables
   * directly from AppStorage will fail to obtain the corresponding environment variable values. You are advised to
   * call this API at application startup to store system environment variables in batches into
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @param { {key: string;defaultValue: any;}[] } props - Array of key-value pairs consisting of system environment
   *     variables and default values.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Environment#envProps
   */
  static EnvProps(
    props: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Works in a way similar to the [envProp]{@link Environment#envProp} API, with the difference that it allows for
   * initialization of multiple properties in batches. If **envProps** is not called, reading environment variables
   * directly from AppStorage will fail to obtain the corresponding environment variable values. You are advised to
   * call this API at application startup to store system environment variables in batches into
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md).
   *
   * @param { EnvPropsOptions[] } props - Array of key-value pairs consisting of system environment variables and
   *     default values.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static envProps(props: EnvPropsOptions[]): void;

  /**
   * Returns the property key array of environment variables.
   *
   * @returns { Array<string> } Array of property keys of environment variables.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Environment#keys
   */
  static Keys(): Array<string>;

  /**
   * Returns the property key array of environment variables.
   *
   * @returns { Array<string> } Array of property keys of environment variables.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static keys(): Array<string>;
}

/**
 * Defines a key-value pair object used to specify persistent properties and their default values, passed as a parameter
 * to [persistProps]{@link PersistentStorage#persistProps}.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface PersistPropsOptions {
  /**
   * Property name.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  key: string;

  /**
   * Default value used for initialization if the specified **key** is not found in PersistentStorage or AppStorage.
   * Since API version 12, **defaultValue** can be **null** or **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  defaultValue: number | string | boolean | Object;
}

/**
 * Provides the persistent storage capability for UI states. It persists selected AppStorage properties to a file
 * and restores these property values from the file and writes them to AppStorage when applications restart.
 * For details about how to use it on the UI, see
 * [PersistentStorage: Persisting Application State](docroot://ui/state-management/arkts-persiststorage.md).
 *
 * > **NOTE**
 *
 * > Since API version 12, PersistentStorage supports **null** and **undefined**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class PersistentStorage {
  /**
   * A constructor.
   *
   * @param { AppStorage } appStorage - Application-level storage object. PersistentStorage performs persistent
   *     management based on this object.
   * @param { Storage } storage - Persistent storage object, used to actually read and write persistent data.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * Persists the property corresponding to **key** in [AppStorage](docroot://ui/state-management/arkts-appstorage.md)
   * to a file. This API is usually called before access to AppStorage.
   *
   * The order for determining the type and value of a property is as follows:
   *
   * 1. If the property corresponding to **key** exists in the
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md) file, the corresponding key is created
   * in AppStorage and initialized with the property value found in PersistentStorage.
   * 2. If the property with the specified key is not found in the PersistentStorage file, AppStorage is searched for
   * the property. If the property is found, it is persisted.
   * 3. If no matching property is found in AppStorage, it is created in AppStorage, initialized with the value of
   * **defaultValue**, and persisted.
   *
   * According to the preceding initialization process, if the property exists in AppStorage, its value will overwrite
   * the value in the PersistentStorage file. Since AppStorage stores data in memory, this operation causes the data in
   * the persistent file to be overwritten by the in-memory data, making the persistent data meaningless.
   *
   * @param { string } key - Property name.
   * @param { T } defaultValue - Default value used for initialization if the specified **key** is not found in
   *     PersistentStorage or AppStorage. The default value cannot be **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#persistProp
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * Persists the property corresponding to **key** from [AppStorage](docroot://ui/state-management/arkts-appstorage.md)
   * to a file. This API is usually called before access to AppStorage.
   *
   * The order for determining the type and value of a property is as follows:
   *
   * 1. If the property corresponding to **key** exists in the
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md) file, the corresponding key is created
   * in AppStorage and initialized with the property value found in PersistentStorage.
   * 2. If the property with the specified key is not found in the PersistentStorage file, AppStorage is searched for
   * the property. If the property is found, it is persisted.
   * 3. If no matching property is found in AppStorage, it is created in AppStorage, initialized with the value of
   * **defaultValue**, and persisted.
   *
   * According to the preceding initialization process, if the property exists in AppStorage, its value will overwrite
   * the value in the PersistentStorage file. Since AppStorage stores data in memory, this operation causes the data in
   * the persistent file to be overwritten by the in-memory data, making the persistent data meaningless.
   *
   * @param { string } key - Property name.
   * @param { T } defaultValue - Default value used for initialization if the specified **key** is not found in
   *     PersistentStorage or AppStorage. Since API version 12, the value can be **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static persistProp<T>(key: string, defaultValue: T): void;

  /**
   * Performs the reverse operation of [PersistProp]{@link PersistentStorage#PersistProp}. It deletes the property
   * corresponding to **key** from [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md), after
   * which subsequent operations on [AppStorage](docroot://ui/state-management/arkts-appstorage.md) no longer affect
   * PersistentStorage. To persist the property again, call the [PersistProp]{@link PersistentStorage#PersistProp} API
   * again.
   *
   * @param { string } key - Property name in PersistentStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#deleteProp
   */
  static DeleteProp(key: string): void;

  /**
   * Performs the reverse operation of [persistProp]{@link PersistentStorage#persistProp}. It deletes the property
   * corresponding to **key** from [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md), after
   * which subsequent operations on [AppStorage](docroot://ui/state-management/arkts-appstorage.md) no longer affect
   * PersistentStorage. To persist the property again, call the [persistProp]{@link PersistentStorage#persistProp} API
   * again.
   *
   * @param { string } key - Property name in PersistentStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static deleteProp(key: string): void;

  /**
   * Persists multiple properties. This API is similar to [PersistProp]{@link PersistentStorage#PersistProp}, but allows
   * multiple properties to be persisted at once, making it suitable for initializing during application startup. This
   * API should be called before access to AppStorage.
   *
   * @param { {key: string;defaultValue: any;}[] } properties - Array of properties to persist, where **key** indicates
   *     the property name and **defaultValue** indicates the default value. The rules are the same as those of
   *     **PersistProp**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#PersistProps
   */
  static PersistProps(
    properties: {
      key: string;
      defaultValue: any;
    }[],
  ): void;

  /**
   * Persists multiple properties. This API is similar to [persistProp]{@link PersistentStorage#persistProp}, but allows
   * multiple properties to be persisted at once, making it suitable for initializing during application startup. This
   * API is usually called before access to AppStorage.
   *
   * @param { PersistPropsOptions[] } props - Array of properties to persist, where each item contains a property name
   *     and a default value.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static persistProps(props: PersistPropsOptions[]): void;

  /**
   * Returns an array of all persisted property names.
   *
   * @returns { Array<string> } Returns an array of all persisted property names.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#keys
   */
  static Keys(): Array<string>;

  /**
   * Returns an array of all persisted property names.
   *
   * @returns { Array<string> } Returns an array of all persisted property names.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static keys(): Array<string>;
}

/**
 * An application-level global state storage instance that provides state data storage and access capabilities within
 * the application scope.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare const appStorage: AppStorage;

/**
 * A page-level UI state storage. The parameters received through the
 * [@Entry](docroot://apis-arkui/arkui-ts/ts-universal-entry.md#entry) decorator can share the same **LocalStorage**
 * instance within a page. For details about how to use it on the UI, see
 * [LocalStorage: Storing Page-Level UI State](docroot://ui/state-management/arkts-localstorage.md).
 *
 * > **NOTE**
 *
 * > Since API version 12, LocalStorage supports
 * > [Map](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type),
 * > [Set](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type),
 * > [Date](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type) types, as well
 * > as **null**, **undefined**, and
 * > [union types](docroot://ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @form
 * @atomicservice [since 11]
 * @since 9 dynamic
 */
declare class LocalStorage {
  /**
   * Creates a [LocalStorage](docroot://ui/state-management/arkts-localstorage.md) instance and initializes it using the
   * property names and values returned by **Object.keys(initializingProperties)**.
   *
   * @param { Object } [initializingProperties] - Properties and values used to initialize the **LocalStorage**
   *     instance. This parameter is passed when property data is preset during creation. Its keys serve as property
   *     names in **LocalStorage**, and values are the initial values of the corresponding properties.
   *     **initializingProperties** cannot be set to **undefined**. If not passed, the default value is an empty
   *     object, indicating **LocalStorage** contains no preset properties.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(initializingProperties?: Object);

  /**
   * Obtains the [LocalStorage](docroot://ui/state-management/arkts-localstorage.md) instance shared across the current
   * stage.
   *
   * @returns { LocalStorage } **LocalStorage** instance shared across the current stage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @StageModelOnly
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead LocalStorage#getShared
   */
  static GetShared(): LocalStorage;

  /**
   * Obtains the [LocalStorage](docroot://ui/state-management/arkts-localstorage.md) instance shared across the current
   * stage.
   *
   * > **NOTE**
   *
   * > Since API version 12, you can use
   * > [getSharedLocalStorage](@link getSharedLocalStorage) in [UIContext]{@link @ohos.arkui.UIContext} to specify the
   * > **LocalStorage** instance in the UI execution context.
   *
   * @returns { LocalStorage } **LocalStorage** instance shared across the current stage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @StageModelOnly
   * @crossplatform
   * @form
   * @atomicservice [since 11]
   * @since 10 dynamiconly
   * @deprecated since 18
   * @useinstead ohos.arkui.UIContext.UIContext#getSharedLocalStorage
   */
  static getShared(): LocalStorage;

  /**
   * Returns a reference to the property corresponding to **propName** in
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the provided **propName** does not exist,
   * this API returns **undefined**.
   *
   * This API is basically the same as [link]{@link LocalStorage#link}, except that it does not require manual release
   * of the returned variable of the [AbstractProperty<T>]{@link AbstractProperty} type.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { AbstractProperty<T> | undefined } Reference to the property corresponding to **propName** in
   *     LocalStorage. If the corresponding **propName** does not exist in LocalStorage, **undefined** is returned.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public ref<T>(propName: string): AbstractProperty<T> | undefined;

  /**
   * Similar to the [ref]{@link AppStorage#ref} API, returns a reference to the property corresponding to **propName**
   * in [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given property does not exist, this
   * API creates and initializes the property in LocalStorage using **defaultValue** and returns its reference.
   *
   * This API is basically the same as [setAndLink]{@link LocalStorage#setAndLink}, except that it does not require
   * manual release of the returned variable of the [AbstractProperty<T>]{@link AbstractProperty} type.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     LocalStorage if **propName** does not exist. The value can be **null** or **undefined**.
   * @returns { AbstractProperty<T> } Instance of **AbstractProperty<T>**, which is a reference to the property
   *     corresponding to **propName** in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;

  /**
   * Checks whether the property corresponding to **propName** exists in
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { boolean } Returns **true** if the property exists in LocalStorage; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  has(propName: string): boolean;

  /**
   * Obtains all property names in [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
   *
   * @returns { IterableIterator<string> } All property names in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  keys(): IterableIterator<string>;

  /**
   * Obtains the number of properties in [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
   *
   * @returns { number } Number of properties in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  size(): number;

  /**
   * Obtains the value of the property corresponding to **propName** from
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If **propName** does not exist,
   * **undefined** is returned.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { T | undefined } Value of the property corresponding to **propName** in LocalStorage, or **undefined** if
   *     it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  get<T>(propName: string): T | undefined;

  /**
   * Sets the value of the property corresponding to **propName** in
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the value of **newValue** is the same as
   * the current value of the property, no assignment is performed, and the state variable does not instruct the UI to
   * update the value of the property. Unlike [setOrCreate]{@link LocalStorage#setOrCreate}, **set** takes effect only
   * when **propName** already exists, and returns **false** if **propName** does not exist.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } newValue - New value of the property corresponding to **propName**. Since API version 12, the value
   *     can be **null** or **undefined**.
   * @returns { boolean } Returns **false** if the property corresponding to **propName** does not exist in
   *     LocalStorage. Returns **true** if the operation is successful.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  set<T>(propName: string, newValue: T): boolean;

  /**
   * Sets the value of the property corresponding to **propName** in
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md) to a new value, if the property exists and the
   * new value is different from the current value. If the new value is the same as the current value of the property,
   * no assignment is performed, and the state variable does not instruct the UI to update the value of the property.
   *
   * If **propName** does not exist, this API creates it with the value of **newValue**. This **setOrCreate** API can
   * create only one LocalStorage key-value pair each time. To create multiple key-value pairs, call this API multiple
   * times.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } newValue - New value of the property corresponding to **propName**. Since API version 12, the value
   *     can be **null** or **undefined**.
   * @returns { boolean } Returns **true** if the property corresponding to **propName** exists and its value is
   *     updated to the value of **newValue**, or if **propName** is created with the value of **newValue**.
   *     <br>Before API version 12, **false** is returned when the value of **newValue** is **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setOrCreate<T>(propName: string, newValue: T): boolean;

  /**
   * Establishes a two-way data binding with the property corresponding to **propName** in
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given **propName** exists in
   * LocalStorage, the two-way bound data of the corresponding property in LocalStorage is returned. Unlike the one-way
   * data binding of [prop]{@link LocalStorage#prop}, **link** establishes a two-way data binding, where modifications
   * are synchronized back to LocalStorage, and LocalStorage synchronizes the changes to all data and custom components
   * bound to this **propName**.
   *
   * If the given property does not exist in LocalStorage, **undefined** is returned.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { SubscribedAbstractProperty<T> } Instance of SubscribedAbstractProperty<T>, which is the two-way bound
   *     data of the property corresponding to **propName** in LocalStorage; **undefined** if the property does not
   *     exist in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  link<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * Similar to the [link]{@link LocalStorage#link} API, establishes a two-way data binding with the property
   * corresponding to **propName** in [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given
   * property exists in LocalStorage, this API returns the two-way bound data for the property. If the given property
   * does not exist, this API creates and initializes the property in LocalStorage using **defaultValue** and returns
   * its two-way bound data.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     LocalStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<T> } Instance of SubscribedAbstractProperty<T>, which is the two-way bound
   *     data of the property corresponding to **propName** in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Establishes a one-way data binding with the property corresponding to propName in
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given **propName** exists in
   * LocalStorage, the one-way bound data of the corresponding property in LocalStorage is returned. If **propName**
   * does not exist in LocalStorage, **undefined** is returned. Modifications to the one-way bound data are not
   * synchronized back to LocalStorage.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { SubscribedAbstractProperty<S> } Instance of SubscribedAbstractProperty<S>, which is the one-way bound
   *     data of the property corresponding to **propName** in LocalStorage; **undefined** if the property does not
   *     exist in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  prop<S>(propName: string): SubscribedAbstractProperty<S>;

  /**
   * Similar to the [prop]{@link LocalStorage#prop} API, establishes a one-way data binding with the property
   * corresponding to propName in [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given
   * **propName** exists in LocalStorage, the one-way bound data of the corresponding property is returned. If the
   * given **propName** does not exist, this API creates and initializes the property corresponding to **propName**
   * in LocalStorage using **defaultValue** and returns its one-way bound data.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { S } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     LocalStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<S> } Instance of SubscribedAbstractProperty<S>, which is the one-way bound
   *     data of the property corresponding to **propName** in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * Deletes the property corresponding to **propName** from
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). The deletion is only successful if the
   * property has no subscribers. If there is a subscriber, the deletion fails and **false** is returned. If there are
   * no subscribers, the deletion is successful and **true** is returned.
   *
   * The property subscribers include the following:
   *
   * 1. Variables decorated by
   * [\@LocalStorageLink](docroot://ui/state-management/arkts-localstorage.md#localstoragelink) and
   * [\@LocalStorageProp](docroot://ui/state-management/arkts-localstorage.md#localstorageprop)
   *
   * 2. Instances of [SubscribedAbstractProperty]{@link SubscribedAbstractProperty}
   * returned by [link]{@link LocalStorage#link}, [prop]{@link LocalStorage#prop},
   * [setAndLink]{@link LocalStorage#setAndLink}, or [setAndProp]{@link LocalStorage#setAndProp}
   *
   * To delete these subscribers:
   *
   * 1. Remove the custom component containing \@LocalStorageLink or \@LocalStorageProp.
   * For details, see
   * [Custom Component Deletion](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#custom-component-deletion).
   *
   * 2. Call the [aboutToBeDeleted]{@link SubscribedAbstractProperty#aboutToBeDeleted} API on instances
   * of **SubscribedAbstractProperty** returned by **link**, **prop**, **setAndLink**, or **setAndProp**.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** if the operation fails.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  delete(propName: string): boolean;

  /**
   * Deletes all properties from [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). The deletion is
   * only successful if none of the properties in LocalStorage have any subscribers. If there are subscribers, this API
   * does not take effect and **false** is returned. If there are no subscribers, the deletion is successful and
   * **true** is returned.
   *
   * For details about the subscriber, see [delete]{@link LocalStorage#delete}.
   *
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  clear(): boolean;
}