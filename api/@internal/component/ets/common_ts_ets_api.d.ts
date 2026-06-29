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
 * For details about how to use AppStorage, see
 * [AppStorage: Storing Application-wide UI State](docroot://ui/state-management/arkts-appstorage.md).
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
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the provided **propName** does not exist, this
   * API returns **undefined**.
   *
   * This API is similar to [link]{@link AppStorage#link} but does not require manually releasing the returned variable
   * of the [AbstractProperty]{@link AbstractProperty} type.
   *
   * @param { string } propName - Property name in AppStorage.
   * @returns { AbstractProperty<T> | undefined } A reference to the property in AppStorage, or **undefined** if the
   *     property does not exist.
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
   * This API is similar to [setAndLink]{@link AppStorage#setAndLink} but does not require manually releasing the
   * returned variable of the [AbstractProperty]{@link AbstractProperty} type.
   *
   * > **NOTE**
   *
   * > Since API version 12, AppStorage supports
   * > [Map](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-appstorage.md#using-union-types-in-appstorage)
   * > types.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. The value can be **null** or **undefined**.
   * @returns { AbstractProperty<T> } Instance of **AbstractProperty<T>**, which is a reference to the property in
   *     AppStorage corresponding to **propName**.
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
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given property exists in AppStorage, the
   * two-way bound data of the property in AppStorage is returned.
   *
   * Any update of the data is synchronized back to AppStorage, which then synchronizes the update to all data and
   * custom components bound to the property.
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
   * @returns { SubscribedAbstractProperty<T> } Instance of **SubscribedAbstractProperty<T>** and two-way bound data of
   *     the given property in AppStorage.
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
   * > **NOTE**
   *
   * > Since API version 12, AppStorage supports
   * > [Map](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-appstorage.md#using-union-types-in-appstorage)
   * > types.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<T> } Instance of **SubscribedAbstractProperty<T>**, which is two-way bound
   *     data of the given property in AppStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Establishes a one-way data binding with the property corresponding to **propName** in
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given property exists in AppStorage, the
   * one-way bound data of the property in AppStorage is returned. If the given property does not exist in AppStorage,
   * **undefined** is returned. Updates of the one-way bound data are not synchronized back to AppStorage.
   *
   * > **NOTE**
   *
   * > Prop supports only simple types.
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
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given property exists in AppStorage, the
   * one-way bound data of the property in AppStorage is returned. If the given property does not exist in AppStorage,
   * **undefined** is returned. Updates of the one-way bound data are not synchronized back to AppStorage.
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
   * property exists in AppStorage, this API returns the one-way bound data for the property. If the given property does
   * not exist, this API creates and initializes the property in AppStorage using **defaultValue** and returns its one-
   * way bound data. The value of **defaultValue** must be of the **S** type and cannot be **null** or **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { S } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. The value cannot be **null** or **undefined**.
   * @returns { SubscribedAbstractProperty<S> } Instance of **SubscribedAbstractProperty<S>**.
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
   * corresponding to **propName** in [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the given
   * property exists in AppStorage, this API returns the one-way bound data for the property. If the given property does
   * not exist, this API creates and initializes the property in AppStorage using **defaultValue** and returns its one-
   * way bound data.
   *
   * > **NOTE**
   *
   * > Since API version 12, AppStorage supports
   * > [Map](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-appstorage.md#using-union-types-in-appstorage)
   * > types.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     AppStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<T> } Instance of **SubscribedAbstractProperty<T>**.
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
   * current value of the property, no assignment is performed, and the state variable does not instruct the UI to
   * update the value of the property. Starting from API version 12, **newValue** can be **null** or **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - Property value. Since API version 12, the value can be **null** or **undefined**.
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
   * update the value of the property.
   *
   * > **NOTE**
   *
   * > Since API version 12, AppStorage supports
   * > [Map](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-appstorage.md#using-union-types-in-appstorage)
   * > types.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - Property value. Since API version 12, the value can be **null** or **undefined**.
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
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) to a new value, if the property exists. If the
   * property does not exist, this API creates it with the value of **newValue**.
   *
   * The value of **newValue** cannot be **null** or **undefined**.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - Property value, which cannot be **null** or **undefined**.
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
   * If the property does not exist, this API creates it with the value of **newValue**. This **setOrCreate** API can
   * create only one AppStorage key-value pair each time. To create multiple key-value pairs, call this API multiple
   * times.
   *
   * > **NOTE**
   *
   * > Since API version 12, AppStorage supports
   * > [Map](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-appstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-appstorage.md#using-union-types-in-appstorage)
   * > types.
   *
   * @param { string } propName - Property name in AppStorage.
   * @param { T } newValue - Property value. Since API version 12, the value can be **null** or **undefined**.
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
   * Subscribers include properties bound using [Link]{@link AppStorage#Link} and [Prop]{@link AppStorage#Prop} APIs, as
   * well as those decorated with
   * [\@StorageLink('propName')](docroot://ui/state-management/arkts-appstorage.md#storagelink) and
   * [\@StorageProp('propName')](docroot://ui/state-management/arkts-appstorage.md#storageprop). This means that if
   * \@StorageLink('propName') and \@StorageProp('propName') are used in a custom component or if there is still a
   * **SubscribedAbstractProperty** instance in a synchronization relationship with the property, the property cannot be
   * deleted from AppStorage.
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
   * 1. Variables decorated by [\@StorageLink](docroot://ui/state-management/arkts-appstorage.md#storagelink) or
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
   * Deletes all properties.
   *
   * @returns { boolean } Deletes all properties. Returns **true** if all properties are deleted; returns **false** if
   *     any of the properties is being referenced by a state variable.
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
 * Provides a reference to properties stored in [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
 * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
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
   * > **NOTE**
   *
   * > Since API version 12, AppStorage and LocalStorage support the Map, Set, Date types, as well as **null**,
   * > **undefined**, and union types.
   *
   * @param { T } newValue - New data to update. The value can be **null** or **undefined**.
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
 * Represents a synchronized property from [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
 * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
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
   * Private member variable ID.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private id_;

  /**
   * Variable information.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private info_?;

  /**
   * Constructor.
   *
   * @param { IPropertySubscriber } subscribeMe - Variable properties.
   * @param { string } info - Variable information.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(
    /**
     * Subscriber IPropertySubscriber.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    subscribeMe?: IPropertySubscriber,
    /**
     * Subscriber info.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    info?: string,
  );

  /**
   * Called when the subscriber ID is entered.
   *
   * @returns { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * Property name.
   *
   * @returns { string } Property name.
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
   * > **NOTE**
   *
   * > Since API version 12, AppStorage and LocalStorage support the Map, Set, Date types, as well as **null**,
   * > **undefined**, and union types.
   *
   * @param { T } newValue - Data to set. Since API version 12, the value can be **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  abstract set(newValue: T): void;

  /**
   * Creates two-way synchronization.
   *
   * @param { IPropertySubscriber } subscribeMe - Variable properties.
   * @param { string } info - Variable information.
   * @returns { SyncedPropertyTwoWay<T> } Two-way synchronized property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * Creates one-way synchronization.
   *
   * @param { IPropertySubscriber } subscribeMe - Variable properties.
   * @param { string } info - Variable information.
   * @returns { SyncedPropertyOneWay<T> } One-way synchronized property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * Removes a subscriber.
   *
   * @param { number } subscriberId - ID of the subscriber to remove.
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
   * Cancels the synchronization relationship between the [SubscribedAbstractProperty]{@link SubscribedAbstractProperty}
   * instance and [AppStorage](docroot://ui/state-management/arkts-appstorage.md) or
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md), whether it is a one-way or two-way binding.
   * After **aboutToBeDeleted** is called, the **SubscribedAbstractProperty** instance is invalidated, meaning it can no
   * longer be used to call the [set]{@link LocalStorage#set} or [get]{@link LocalStorage#get} API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  abstract aboutToBeDeleted(): void;
}

/**
 * Provides an interface for attribute subscribers.
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
   * @returns { number } Variable ID obtained.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * Called when the object is about to be destroyed.
   *
   * @param { IPropertySubscriber } owningView - Component that owns the current property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * Inherits from [SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty}. Represents a property with two-way synchronization.
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
   * Constructor.
   *
   * @param { SubscribedAbstractProperty<T> } source - Data source for the two-way synchronized property.
   * @param { IPropertySubscriber } subscribeMe - Subscriber.
   * @param { string } info - Additional information about the subscriber.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when the object is about to be destroyed.
   *
   * @param { IPropertySubscriber } unsubscribeMe - Subscriber to remove.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Notifies subscribers that the property value has changed.
   *
   * @param { T } newValue - Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * Obtains the current value of the property.
   *
   * @returns { T } Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * Sets a new value for the property.
   *
   * @param { T } newValue - Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * Inherits from [SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty}. Represents a property with one-way synchronization.
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
   * Data source for the two-way synchronized property.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private source_;

  /**
   * Constructor.
   *
   * @param { SubscribedAbstractProperty<T> } source - Data source for the one-way synchronized property.
   * @param { IPropertySubscriber } subscribeMe - Subscriber.
   * @param { string } info - Additional information about the subscriber.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * Called when the object is about to be destroyed.
   *
   * @param { IPropertySubscriber } unsubscribeMe - Subscriber to remove.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * Notifies subscribers that the property value has changed.
   *
   * @param { T } newValue - Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * Obtains the current value of the property.
   *
   * @returns { T } - Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * Sets a new value for the property.
   *
   * @param { T } newValue - Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * Inherits from [IPropertySubscriber]{@link IPropertySubscriber}. Represents a subscriber that subscribes to changes in a property value.
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
   * @param { T } newValue - Instance of the T type.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;
}

/**
 * Defines the Subscribale base class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare abstract class SubscribaleAbstract {

  /**
   * A set of property IDs that this instance owns.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private owningProperties_: Set<number>;

  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor();

  /**
   * Notify subscribers that a property value has changed.
   *
   * @param { string } propName - Property name.
   * @param { any } newValue - New value after the change.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * Adds a subscriber to the list of owned properties.
   *
   * @param { IPropertySubscriber } subscriber - Subscriber.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * Removes a subscriber from the list of owned properties.
   *
   * @param { IPropertySubscriber } property - Subscriber to remove.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * Removes a subscriber from the list of owned properties by ID.
   *
   * @param { number } subscriberId - ID of the subscriber to remove.
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
 * For details about how to use environment parameters, see
 * [Environment: Device Environment Query](docroot://ui/state-management/arkts-environment.md).
 *
 * ###### Built-in Environment Variables
 *
 * | key                  | Type           | Description                                                        |
 * | -------------------- | --------------- | ------------------------------------------------------------ |
 * | accessibilityEnabled | string          | Whether to enable accessibility. If there is no value of **accessibilityEnabled** in the environment variables, the default value passed through APIs such as **envProp** and **envProps** is added to AppStorage.|
 * | colorMode            | [ColorMode](@link #ColorMode)       | Color mode. The options are as follows:<br>- **ColorMode.LIGHT**: light mode.<br>- **ColorMode.DARK**: dark mode.|
 * | fontScale            | number          | Font scale.                                              |
 * | fontWeightScale      | number          | Font weight ratio.                                                  |
 * | layoutDirection      | [LayoutDirection](@link LayoutDirection) | Layout direction. The options are as follows:<br>- **LayoutDirection.LTR**: from left to right.<br>- **LayoutDirection.RTL**: from right to left.<br>- **Auto**: follows the system settings.|
 * | languageCode         | string          | Current system language, which is in lowercase letters, for example, **zh**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class Environment {

  /**
   * Constructor.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor();

  /**
   * Stores the built-in environment variable key from [Environment](docroot://ui/state-management/arkts-environment.md)
   * into [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the value of the environment variable key
   * is not found in AppStorage, the default value is used and stored in AppStorage. If the value is successfully
   * stored, **true** is returned. If the value of the environment variable key already exists in AppStorage, **false**
   * is returned.
   *
   * You are advised to call this API when the application is started.
   *
   * It is incorrect to use AppStorage to read environment variables without calling **EnvProp** first.
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
   * Stores the built-in environment variable key from [Environment](docroot://ui/state-management/arkts-environment.md)
   * into [AppStorage](docroot://ui/state-management/arkts-appstorage.md). If the value of the environment variable key
   * is not found in AppStorage, the default value is used and stored in AppStorage. If the value is successfully
   * stored, **true** is returned. If the value of the environment variable key already exists in AppStorage, **false**
   * is returned.
   *
   * You are advised to call this API when the application is started.
   *
   * It is incorrect to use AppStorage to read environment variables without calling **envProp** first.
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
   * initialization of multiple attributes in batches. It is recommended that this API be called during application
   * startup to store system environment variables to [AppStorage](docroot://ui/state-management/arkts-appstorage.md) in
   * batches.
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
   * initialization of multiple attributes in batches. It is recommended that this API be called during application
   * startup to store system environment variables to [AppStorage](docroot://ui/state-management/arkts-appstorage.md) in
   * batches.
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
   * @returns { Array<string> } Property key array of environment variables.
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
   * @returns { Array<string> } Property key array of environment variables.
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
   * Default value used for initialization if the specified **key** is not found in PersistentStorage and AppStorage.
   * Since API version 12, **defaultValue** can be set to **null** or **undefined**.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  defaultValue: number | string | boolean | Object;
}

/**
 * For details about how to use PersistentStorage on the UI, see
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
   * Constructor.
   *
   * @param { AppStorage } appStorage - Application-level storage.
   * @param { Storage } storage - Storage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * Persists the property corresponding to **key** from [AppStorage](docroot://ui/state-management/arkts-appstorage.md)
   * to a file. This API is usually called before access to AppStorage.
   *
   * The order for determining the type and value of a property is as follows:
   *
   * 1. If the property with the specified key is found in the
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md) file, the corresponding property is
   * created in AppStorage and initialized with the value found in PersistentStorage.
   *
   * 2. If the property with the specified key is not found in the PersistentStorage file, AppStorage is searched for
   * the property. If the property is found, it is persisted.
   *
   * 3. If no matching property is found in AppStorage, it is created in AppStorage, initialized with the value of
   * **defaultValue**, and persisted.
   *
   * According to the preceding initialization process, if the property exists in AppStorage, its value will be used,
   * overriding the value in the PersistentStorage file. Because AppStorage stores data in the memory, the property
   * value becomes nonpersistent.
   *
   * @param { string } key - Property name.
   * @param { T } defaultValue - Default value used for initialization if the specified **key** is not found in
   *     PersistentStorage and AppStorage. The value cannot be **null** or **undefined**.
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
   * 1. If the property with the specified key is found in the
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md) file, the corresponding property is
   * created in AppStorage and initialized with the value found in PersistentStorage.
   *
   * 2. If the property with the specified key is not found in the PersistentStorage file, AppStorage is searched for
   * the property. If the property is found, it is persisted.
   *
   * 3. If no matching property is found in AppStorage, it is created in AppStorage, initialized with the value of
   * **defaultValue**, and persisted.
   *
   * According to the preceding initialization process, if the property exists in AppStorage, its value will be used,
   * overriding the value in the PersistentStorage file. Because AppStorage stores data in the memory, the property
   * value becomes nonpersistent.
   *
   * @param { string } key - Property name.
   * @param { T } defaultValue - Default value used for initialization if the specified **key** is not found in
   *     PersistentStorage and AppStorage. Since API version 12, the value can be **null** or **undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static persistProp<T>(key: string, defaultValue: T): void;

  /**
   * Performs the reverse operation of [PersistProp]{@link PersistentStorage#PersistProp}. Specifically, this API
   * deletes the property corresponding to the specified key from
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md). Subsequent operations on
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) do not affect data in PersistentStorage.
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
   * Performs the reverse operation of [persistProp]{@link PersistentStorage#persistProp}. Specifically, this API
   * deletes the property corresponding to the specified **key** from
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md). Subsequent operations on
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md) do not affect data in PersistentStorage. This
   * operation removes the corresponding key from the persistence file. To persist the property again, you can call the
   * [persistProp]{@link PersistentStorage#persistProp} API.
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
   * multiple properties to be persisted at once, making it suitable for initializing during application startup.
   *
   * @param { {key: string;defaultValue: any;}[] } properties - Array of properties to persist.
   *     <br>**key**: property name.
   *     <br>**defaultValue**: default value. The rule is the same as that for **PersistProp**.
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
   * multiple properties to be persisted at once, making it suitable for initializing during application startup.
   *
   * @param { PersistPropsOptions[] } props - Array of properties to persist.
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
 * Defines the application-level storage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare const appStorage: AppStorage;

/**
 * For details about how to use LocalStorage on the UI, see
 * [LocalStorage: UI State Storage](docroot://ui/state-management/arkts-localstorage.md).
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
   * properties and values returned by **Object.keys(initializingProperties)**.
   *
   * @param { Object } [initializingProperties] - Properties and values used to initialize the **LocalStorage**
   *     instance. **initializingProperties** cannot be set to **undefined**. The default value is an empty object,
   *     meaning no properties are added to LocalStorage during initialization.
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
   * @returns { LocalStorage } **LocalStorage** instance.
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
   * > Since API version 12, you can use the
   * > [getSharedLocalStorage](@link getSharedLocalStorage)
   * > API in [UIContext]{@link @ohos.arkui.UIContext} to specify the UI execution context.
   *
   * @returns { LocalStorage } **LocalStorage** instance.
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
   * This API is similar to [link]{@link LocalStorage#link} but does not require manually releasing the returned
   * variable of the [AbstractProperty]{@link AbstractProperty} type.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { AbstractProperty<T> | undefined } A reference to the property in LocalStorage, or **undefined** if the
   *     property does not exist.
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
   * This API is similar to [setAndLink]{@link LocalStorage#setAndLink} but does not require manually releasing the
   * returned variable of the [AbstractProperty]{@link AbstractProperty} type.
   *
   * > **NOTE**
   *
   * > Since API version 12, LocalStorage supports
   * > [Map](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage)
   * > types.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     LocalStorage if **propName** does not exist. The value can be **null** or **undefined**.
   * @returns { AbstractProperty<T> } Instance of **AbstractProperty<T>**, which is a reference to the property in
   *     LocalStorage corresponding to **propName**.
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
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md).
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
   * update the value of the property.
   *
   * > **NOTE**
   *
   * > Since API version 12, LocalStorage supports
   * > [Map](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage)
   * > types.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } newValue - Property value. Since API version 12, the value can be **null** or **undefined**.
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
   * If the property does not exist, this API creates it with the value of **newValue**. This **setOrCreate** API can
   * create only one LocalStorage key-value pair each time. To create multiple key-value pairs, call this API multiple
   * times.
   *
   * > **NOTE**
   *
   * > Since API version 12, LocalStorage supports
   * > [Map](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage)
   * > types.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } newValue - Property value. Since API version 12, the value can be **null** or **undefined**.
   * @returns { boolean } Returns **true** if the property corresponding to **propName** exists and its value is updated
   *     to the value of **newValue**,
   *     <br>or if **propName** is created with the value of **newValue**.
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
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given property exists in LocalStorage,
   * this API returns the two-way bound data for the property.
   *
   * Any update of the data is synchronized back to LocalStorage, which then synchronizes the update to all data and
   * components bound to the property.
   *
   * If the given property does not exist in LocalStorage, **undefined** is returned.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { SubscribedAbstractProperty<T> } Returns the **SubscribedAbstractProperty<T>** instance if the given
   *     property exists in LocalStorage; returns **undefined** otherwise.
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
   * > **NOTE**
   *
   * > Since API version 12, LocalStorage supports
   * > [Map](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage)
   * > types.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { T } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     LocalStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<T> } Instance of **SubscribedAbstractProperty<T>** and two-way bound data of
   *     the given property in LocalStorage.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * Establishes a one-way data binding with the property corresponding to **propName** in
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given property exists in LocalStorage,
   * this API returns the one-way bound data for the property. If the given property does not exist in LocalStorage,
   * **undefined** is returned. Updates of the one-way bound data are not synchronized back to LocalStorage.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @returns { SubscribedAbstractProperty<S> } Instance of **SubscribedAbstractProperty<S>** and one-way bound data of
   *     the given property in LocalStorage. If the given property does not exist in LocalStorage, **undefined** is
   *     returned.
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
   * corresponding to **propName** in [LocalStorage](docroot://ui/state-management/arkts-localstorage.md). If the given
   * property exists in LocalStorage, this API returns the one-way bound data for the property. If the given property
   * does not exist, this API creates and initializes the property in LocalStorage using **defaultValue** and returns
   * its one-way bound data.
   *
   * > **NOTE**
   *
   * > Since API version 12, LocalStorage supports
   * > [Map](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-map-type),
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-set-type),
   * > [Date](docroot://ui/state-management/arkts-localstorage.md#decorating-variables-of-the-date-type), **null**,
   * > **undefined**, and [union](docroot://ui/state-management/arkts-localstorage.md#using-union-types-in-localstorage)
   * > types.
   *
   * @param { string } propName - Property name in LocalStorage.
   * @param { S } defaultValue - Default value used to initialize the property corresponding to **propName** in
   *     LocalStorage if **propName** does not exist. Since API version 12, **defaultValue** can be **null** or
   *     **undefined**.
   * @returns { SubscribedAbstractProperty<S> } Instance of **SubscribedAbstractProperty<S>** and one-way bound data of
   *     the given property in LocalStorage.
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
   * [\@LocalStorageLink](docroot://ui/state-management/arkts-localstorage.md#localstoragelink) or
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