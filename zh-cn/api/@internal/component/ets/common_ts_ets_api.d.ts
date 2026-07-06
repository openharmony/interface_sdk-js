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
 * AppStorage具体UI使用说明，详见[AppStorage(应用全局的UI状态存储)](docroot://ui/state-management/arkts-appstorage.md)
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class AppStorage {

  /**
   * 如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，则返回AppStorage中propName对应属性的引用。否则，返
   * 回undefined。
   * 
   * 与[link]{@link AppStorage#link}的功能基本一致，但不需要手动释放返回的
   * [AbstractProperty<T>](@link AbstractProperty)类型的变量。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { AbstractProperty<T> | undefined } A reference to the property in AppStorage, or **undefined** if the
   *     property does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static ref<T>(propName: string): AbstractProperty<T> | undefined;

  /**
   * 与[ref]{@link AppStorage#ref}接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，则
   * 返回AppStorage中propName对应属性的引用。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，并返回其引用。
   * 
   * 与[setAndLink]{@link AppStorage#setAndLink}的功能基本一致，但不需要手动释放返回的
   * [AbstractProperty<T>](@link AbstractProperty)类型的变量。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue可以为
   *     null或undefined。
   * @returns { AbstractProperty<T> } AbstractProperty <T>的实例，为AppStorage中propName对应属性的引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;

  /**
   * 与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立双向数据绑定。如果给定的propName在AppStorage中存在，返回
   * 与AppStorage中propName对应属性的双向绑定数据。
   * 
   * 双向绑定数据的修改会同步回AppStorage中，AppStorage会将变化同步到所有绑定该propName的数据和自定义组件中。
   * 
   * 如果AppStorage中不存在propName，则返回undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { any } 返回双向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#link
   */
  static Link(propName: string): any;

  /**
   * 与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立双向数据绑定。如果给定的propName在AppStorage中存在，返回
   * AppStorage中propName对应属性的双向绑定数据。
   * 
   * 双向绑定数据的修改会同步回AppStorage中，AppStorage会将变化同步到所有绑定该propName的数据和自定义组件中。
   * 
   * 如果AppStorage中不存在propName，则返回undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { SubscribedAbstractProperty<T> } 返回双向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static link<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * 与[Link]{@link AppStorage#Link}接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存
   * 在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，并返回其双向绑定数据。defaultValue必须为T类型，且不能为
   * null或undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } defaultValue - 当propName在AppStorage中不存在，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为
   *     null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty <T>的实例，和AppStorage中propName对应属性的双向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#setAndLink
   * @see setAndLink
   */
  static SetAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * 与[link]{@link AppStorage#link}接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存
   * 在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其双向绑定数据。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，从API version 12开
   *     始，defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty <T>的实例，为AppStorage中propName对应属性的双向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * 与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立单向属性绑定。如果给定的propName在AppStorage中存在，则返
   * 回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回AppStorage中。
   * 
   * > **说明：**
   * 
   * > Prop仅支持简单类型。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { any } 返回单向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#prop
   * @see prop
   */
  static Prop(propName: string): any;

  /**
   * 与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立单向属性绑定。如果给定的propName在AppStorage中存在，则返
   * 回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回AppStorage中。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { SubscribedAbstractProperty<T> } 返回单向绑定的数据，如果AppStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static prop<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * 与[Prop]{@link AppStorage#Prop}接口类似。如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存
   * 在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。defaultValue必须为S类型，且不能为
   * null或undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { S } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为
   *     null或undefined。
   * @returns { SubscribedAbstractProperty<S> } SubscribedAbstractProperty <S>的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#setAndProp
   * @see setAndProp
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * 与[prop]{@link AppStorage#prop}接口类似。如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存
   * 在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，从API version 12开
   *     始，defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty <T>的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setAndProp<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * 判断propName对应的属性是否在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { boolean } 如果propName对应的属性在AppStorage中存在，则返回true。不存在则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#has
   * @see has
   */
  static Has(propName: string): boolean;

  /**
   * 判断propName对应的属性是否在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { boolean } 如果propName对应的属性在AppStorage中存在，则返回true。不存在则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static has(propName: string): boolean;

  /**
   * 获取propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的属性值。如果不存在则返回undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
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
   * 获取propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的属性值。如果不存在则返回undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { T | undefined } Value of the property corresponding to **propName** in AppStorage, or **undefined** if
   *     it does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static get<T>(propName: string): T | undefined;

  /**
   * 在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中设置propName对应属性的值，如果newValue的值和propName对应属性的值相同，即不需
   * 要做赋值操作，状态变量不会通知UI刷新propName对应属性的值，从API version 12开始，newValue可以为null或undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - 属性值，从API version 12开始可以为null或undefined。
   * @returns { boolean } 如果AppStorage中不存在propName对应的属性，返回false。设置成功则返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#set
   * @see set
   */
  static Set<T>(propName: string, newValue: T): boolean;

  /**
   * 在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中设置propName对应属性的值。如果newValue的值和propName对应属性的值相同，即不需
   * 要做赋值操作，状态变量不会通知UI刷新propName对应属性的值。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - 属性值，从API version 12开始可以为null或undefined。
   * @returns { boolean } 如果AppStorage中不存在propName对应的属性，或设值失败，则返回false。设置成功则返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static set<T>(propName: string, newValue: T): boolean;

  /**
   * 如果propName已经在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，则设置propName对应的属性值为newValue。如果不存在，则创
   * 建propName属性，值为newValue。
   * 
   * newValue不能为null或undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - 属性值，不能为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#setOrCreate
   * @see setOrCreate
   */
  static SetOrCreate<T>(propName: string, newValue: T): void;

  /**
   * 如果propName已经在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，并且newValue和propName对应属性的值不同，则设置
   * propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。
   * 
   * 如果propName不存在，则创建propName属性，值为newValue。setOrCreate只可以创建单个AppStorage的键值对，如果想创建多个AppStorage键值对，可以多次调用此方法。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - 属性值，从API version 12开始可以为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setOrCreate<T>(propName: string, newValue: T): void;

  /**
   * 在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中删除propName对应的属性。
   * 
   * 在AppStorage中删除该属性的前提是必须保证该属性没有订阅者。如果有订阅者，则返回false。如果没有订阅者则删除成功并返回true。
   * 
   * 属性的订阅者为[Link]{@link AppStorage#Link}、[Prop]{@link AppStorage#Prop}等接口绑定的propName，以及
   * [@StorageLink('propName')](docroot://ui/state-management/arkts-appstorage.md#storagelink)和
   * [@StorageProp('propName')](docroot://ui/state-management/arkts-appstorage.md#storageprop)。如果自定义组件中使用@StorageLink(
   * 'propName')和@StorageProp('propName')或者SubscribedAbstractProperty实例依旧对propName有同步关系，则该属性不能从AppStorage中删除。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { boolean } 如果AppStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#delete
   * @see delete
   */
  static Delete(propName: string): boolean;

  /**
   * 在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中删除propName对应的属性。
   * 
   * 在AppStorage中删除该属性的前提是必须保证该属性没有订阅者。如果有订阅者，则返回false。如果没有订阅者，则删除成功并返回true。
   * 
   * 属性的订阅者为：
   * 
   * 1. [@StorageLink](docroot://ui/state-management/arkts-appstorage.md#storagelink)、[@StorageProp](docroot://ui/state-management/arkts-appstorage.md#storageprop)装饰的变量。
   * 
   * 2. 通过[link]{@link AppStorage#link}、[prop]{@link AppStorage#prop}、[setAndLink]{@link AppStorage#setAndLink}、[setAndProp]{@link AppStorage#setAndProp}接口返回的[SubscribedAbstractProperty]{@link SubscribedAbstractProperty}的实例。
   * 
   * 如果想要删除这些订阅者，可以通过以下方式：
   * 
   * 1. 删除@StorageLink、@StorageProp所在的自定义组件。删除自定义组件请参考[自定义组件的删除](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#自定义组件的删除)。
   * 
   * 2. 对link、prop、setAndLink、setAndProp接口返回的SubscribedAbstractProperty的实例调用[aboutToBeDeleted]{@link SubscribedAbstractProperty#aboutToBeDeleted}接口。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { boolean } 如果AppStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static delete(propName: string): boolean;

  /**
   * 返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有的属性名。
   *
   * @returns { IterableIterator<string> } AppStorage中所有的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#keys
   * @see keys
   */
  static Keys(): IterableIterator<string>;

  /**
   * 返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有的属性名。
   *
   * @returns { IterableIterator<string> } AppStorage中所有的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static keys(): IterableIterator<string>;

  /**
   * 删除所有的属性。
   *
   * @returns { boolean } 删除所有的属性。如果删除成功，返回true；如果当前有状态变量依旧引用此属性，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead AppStorage.Clear
   */
  static staticClear(): boolean;

  /**
   * 删除[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有属性。删除所有属性的前提是，AppStorage已经没有任何订阅者。如果有订阅者，Clear将
   * 不会生效并返回false。如果没有订阅者且删除成功则返回true。
   * 
   * 订阅者的含义参考[delete]{@link AppStorage#delete}。
   *
   * @returns { boolean } 如果AppStorage中的属性已经没有订阅者则删除成功，返回true。否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#clear
   * @see clear
   */
  static Clear(): boolean;

  /**
   * 删除[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有属性。删除所有属性的前提是，AppStorage已经没有任何订阅者。如果有订阅者，clear将
   * 不会生效并返回false。如果没有订阅者，则删除成功，并返回true。
   * 
   * 订阅者的含义参考[delete]{@link AppStorage#delete}。
   *
   * @returns { boolean } 如果AppStorage中的属性已经没有订阅者则删除成功，返回true；如果当前仍有订阅者，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static clear(): boolean;

  /**
   * 返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中propName对应的属性是否是可变的。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { boolean } 返回AppStorage中propName对应的属性是否是可变的。当前该返回值恒为true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   */
  static IsMutable(propName: string): boolean;

  /**
   * 返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中的属性数量。
   *
   * @returns { number } 返回AppStorage中属性的数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#size
   * @see size
   */
  static Size(): number;

  /**
   * 返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中的属性数量。
   *
   * @returns { number } 返回AppStorage中属性的数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static size(): number;
}

/**
 * AbstractProperty是[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
 * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中属性的引用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare interface AbstractProperty<T> {

  /**
   * 读取[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所引用属性的数据。
   *
   * @returns { T } AppStorage/LocalStorage中所引用属性的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  get(): T;

  /**
   * 更新[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所引用属性的数据，newValue必须是T类型，可以为null或undefined。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。
   *
   * @param { T } newValue - 要更新的数据，可以为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  set(newValue: T): void;

  /**
   * 读取[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所引用属性的属性名。
   *
   * @returns { string } AppStorage/LocalStorage中所引用属性的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  info(): string;
}

/**
 * SubscribedAbstractProperty是[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
 * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中同步的属性。
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
   * 订阅者集合。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected subscribers_: Set<number>;

  /**
   * 私有成员变量id_。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private id_;

  /**
   * 变量信息。
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
   * 当输入用户ID时调用。
   *
   * @returns { number }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * 返回属性名称。
   *
   * @returns { string } 属性名称。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  info(): string;

  /**
   * 读取从[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)同步属性的数据。
   *
   * @returns { T } AppStorage/LocalStorage同步属性的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  abstract get(): T;

  /**
   * 设置[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)同步属性的数据，newValue必须是T类型，从API version 12开始可以为null或
   * undefined。
   * 
   * > **说明：** 
   * 
   * > 从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。
   *
   * @param { T } newValue - 要设置的数据，从API version 12开始可以为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  abstract set(newValue: T): void;

  /**
   * 创建双向同步时调用。
   *
   * @param { IPropertySubscriber } subscribeMe - 变量属性。
   * @param { string } info - 变量信息。
   * @returns { SyncedPropertyTwoWay<T> } 返回双向同步属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * 创建单向同步时调用。
   *
   * @param { IPropertySubscriber } subscribeMe - 变量属性。
   * @param { string } info - 变量信息。
   * @returns { SyncedPropertyOneWay<T> } 返回单向同步属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * 变量解除订阅时调用。
   *
   * @param { number } subscriberId - 变量id。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  unlinkSuscriber(subscriberId: number): void;

  /**
   * 通知变化时调用。
   *
   * @param { T } newValue - 更改后的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyHasChanged(newValue: T): void;

  /**
   * 通知读取时调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyPropertyRead(): void;

  /**
   * 获取订阅者数量时调用。
   *
   * @returns { number } 返回订阅者数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  numberOfSubscrbers(): number;

  /**
   * 取消[SubscribedAbstractProperty]{@link SubscribedAbstractProperty}实例对
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)的单/双向同步关系，并无效化SubscribedAbstractProperty实例，即当调用
   * aboutToBeDeleted方法之后不能再使用SubscribedAbstractProperty实例调用[set]{@link LocalStorage#set}或[get]{@link LocalStorage#get}方
   * 法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  abstract aboutToBeDeleted(): void;
}

/**
 * 提供属性订阅者的接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
interface IPropertySubscriber {

  /**
   * 获取id时调用。
   *
   * @returns { number } 返回变量id。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * 销毁时调用。
   *
   * @param { IPropertySubscriber } owningView - 所在自定义组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * 继承自[SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty}。用来定义变量状态的值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class SyncedPropertyTwoWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {

  /**
   * 双向同步属性的数据源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private source_;

  /**
   * 构造函数。
   *
   * @param { SubscribedAbstractProperty<T> } source - 双向同步属性的数据源。
   * @param { IPropertySubscriber } subscribeMe - 订阅者。
   * @param { string } info - 订阅者信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * 销毁时调用。
   *
   * @param { IPropertySubscriber } unsubscribeMe - 被取消的订阅者。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * 变化时调用。
   *
   * @param { T } newValue - T类型实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * 获取数据时调用。
   *
   * @returns { T } T类型实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * 赋值时调用。
   *
   * @param { T } newValue - T类型实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * 继承自[SubscribedAbstractProperty<T>]{@link SubscribedAbstractProperty}。用来定义父组件的状态值。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class SyncedPropertyOneWay<T> extends SubscribedAbstractProperty<T>
  implements ISinglePropertyChangeSubscriber<T> {

  /**
   * 单向绑定时的值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private wrappedValue_;

  /**
   * 双向同步属性的数据源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private source_;

  /**
   * 构造函数。
   *
   * @param { SubscribedAbstractProperty<T> } source - 单向同步属性的数据源。
   * @param { IPropertySubscriber } subscribeMe - 订阅者。
   * @param { string } info - 订阅者信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * 销毁时调用。
   *
   * @param { IPropertySubscriber } unsubscribeMe - 被取消的订阅者。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * 变化时调用。
   *
   * @param { T } newValue - T类型实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * 获取数据源时调用。
   *
   * @returns { T } - T类型实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * 赋值时调用。
   *
   * @param { T } newValue - T类型实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * 继承自[IPropertySubscriber]{@link IPropertySubscriber}。用来定义变量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
interface ISinglePropertyChangeSubscriber<T> extends IPropertySubscriber {

  /**
   * 变化时调用。
   *
   * @param { T } newValue - T类型实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;
}

/**
 * 定义Subscribale基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare abstract class SubscribaleAbstract {

  /**
   * 返回所持有的属性。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private owningProperties_: Set<number>;

  /**
   * 构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor();

  /**
   * 当通知属性更改时调用。
   *
   * @param { string } propName - 属性名称。
   * @param { any } newValue - 更改的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * 添加持有的属性。
   *
   * @param { IPropertySubscriber } subscriber - 订阅者。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * 删除已拥有的属性时调用。
   *
   * @param { IPropertySubscriber } property - 要删除的属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * 使用id删除已拥有的属性时调用。
   *
   * @param { number } subscriberId - 要删除的属性id。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public removeOwningPropertyById(subscriberId: number): void;
}

/**
 * 用于指定环境变量名称及其默认值的键值对对象，作为[envProps]{@link Environment#envProps}参数传入。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface EnvPropsOptions {

  /**
   * 环境变量名称，支持的范围详见[内置环境变量说明](@link Environment)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  key: string;

  /**
   * 查询不到环境变量key，则使用defaultValue作为默认值存入AppStorage中。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  defaultValue: number | string | boolean;
}

/**
 * Environment具体使用说明，详见[Environment(设备环境查询)](docroot://ui/state-management/arkts-environment.md)
 *
 * ###### 内置环境变量说明
 * 
 * | key                  | 类型            | 说明                                                         |
 * | -------------------- | --------------- | ------------------------------------------------------------ |
 * | accessibilityEnabled | string          | 无障碍屏幕朗读是否启用。当无法获取环境变量中的accessibilityEnabled的值时，将通过envProp、envProps等接口传入的开发者指定的默认值添加到AppStorage中。 |
 * | colorMode            | [ColorMode](@link ColorMode)       | 深浅色模式，可选值为：<br/>- ColorMode.LIGHT：浅色模式；<br/>- ColorMode.DARK：深色模式。 |
 * | fontScale            | number          | 字体大小比例。                                               |
 * | fontWeightScale      | number          | 字重比例。                                                   |
 * | layoutDirection      | [LayoutDirection](@link LayoutDirection) | 布局方向类型，可选值为：<br/>- LayoutDirection.LTR：从左到右；<br/>- LayoutDirection.RTL：从右到左。<br/>- Auto：跟随系统。 |
 * | languageCode         | string          | 当前系统语言，小写字母，例如zh。       
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class Environment {

  /**
   * 构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor();

  /**
   * 将[Environment](docroot://ui/state-management/arkts-environment.md)的内置环境变量key存入
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。如果系统中未查询到Environment环境变量key的值，则使用默认值value，存入成功，返回
   * true。如果AppStorage中已经有对应的key，则返回false。
   * 
   * 所以建议在程序启动的时候调用该接口。
   * 
   * 在没有调用EnvProp的情况下，就使用AppStorage读取环境变量是错误的。
   *
   * @param { string } key - 环境变量名称，支持的范围详见
   *     [内置环境变量说明](@link Environment)。
   * @param { S } value - 查询不到环境变量key，则使用value作为默认值存入AppStorage中。
   * @returns { boolean } 如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Environment#envProp
   */
  static EnvProp<S>(key: string, value: S): boolean;

  /**
   * 将[Environment](docroot://ui/state-management/arkts-environment.md)的内置环境变量key存入
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。如果系统中未查询到Environment环境变量key的值，则使用默认值value，存入成功，返回
   * true。如果AppStorage中已经有对应的key，则返回false。
   * 
   * 所以建议在程序启动的时候调用该接口。
   * 
   * 在没有调用envProp的情况下，就使用AppStorage读取环境变量是错误的。
   *
   * @param { string } key - 环境变量名称，支持的范围详见
   *     [内置环境变量说明](@link Environment)。
   * @param { S } value - 查询不到环境变量key时，则使用value作为默认值存入AppStorage中。
   * @returns { boolean } 如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static envProp<S>(key: string, value: S): boolean;

  /**
   * 和[EnvProp]{@link Environment#EnvProp}类似，不同点在于参数为数组，可以一次性初始化多个数据。建议在应用启动时调用，将系统环境变量批量存入
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。
   *
   * @param { {key: string;defaultValue: any;}[] } props - 系统环境变量和默认值的键值对的数组。
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
   * 和[envProp]{@link Environment#envProp}类似，不同点在于参数为数组，可以一次性初始化多个数据。建议在应用启动时调用，将系统环境变量批量存入
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。
   *
   * @param { EnvPropsOptions[] } props - 系统环境变量和默认值的键值对的数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static envProps(props: EnvPropsOptions[]): void;

  /**
   * 返回环境变量的属性key的数组。
   *
   * @returns { Array<string> } 返回关联的系统项数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead Environment#keys
   */
  static Keys(): Array<string>;

  /**
   * 返回环境变量的属性key的数组。
   *
   * @returns { Array<string> } 返回关联的系统项数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static keys(): Array<string>;
}

/**
 * 用于指定持久化属性及其默认值的键值对对象，作为[persistProps]{@link PersistentStorage#persistProps}参数传入。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice [since 11]
 * @since 10 dynamic
 */
declare interface PersistPropsOptions {

  /**
   * 属性名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  key: string;

  /**
   * 在PersistentStorage和AppStorage未查询到时，则使用默认值初始化它。从API version 12开始，defaultValue允许为null或undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  defaultValue: number | string | boolean | Object;
}

/**
 * PersistentStorage具体UI使用说明，详见[PersistentStorage(持久化存储UI状态)](docroot://ui/state-management/arkts-persiststorage.md)
 * 
 * > **说明：**
 * 
 * > 从API version 12开始，PersistentStorage支持null、undefined。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare class PersistentStorage {

  /**
   * 构造函数参数。
   *
   * @param { AppStorage } appStorage - 应用存储。
   * @param { Storage } storage - 存储。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * 将[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中key对应的属性持久化到文件中。该接口的调用通常在访问AppStorage之前。
   * 
   * 确定属性的类型和值的顺序如下：
   * 
   * 1. 如果[PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)文件中存在key对应的属性，在AppStorage中创建对应的propName，并用在PersistentStorage中找到的key的属性初始化。
   * 
   * 2. 如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。
   * 
   * 3. 如果AppStorage也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。
   * 
   * 根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值，覆盖掉PersistentStorage文件中的值。由于AppStorage是内存内数据，该行为会导致数据丧失持久化能力。
   *
   * @param { string } key - 属性名。
   * @param { T } defaultValue - 在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。不允许为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#persistProp
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * 将[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中key对应的属性持久化到文件中。该接口的调用通常在访问AppStorage之前。
   * 
   * 确定属性的类型和值的顺序如下：
   * 
   * 1. 如果[PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)文件中存在key对应的属性，在AppStorage中创建对应的propName，并用在PersistentStorage中找到的key的属性初始化。
   * 
   * 2. 如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。
   * 
   * 3. 如果AppStorage中也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。
   * 
   * 根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值，覆盖掉PersistentStorage文件中的值。由于AppStorage是内存内数据，该行为会导致数据丧失持久化能力。
   *
   * @param { string } key - 属性名。
   * @param { T } defaultValue - 在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。从API version 12开始允许为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static persistProp<T>(key: string, defaultValue: T): void;

  /**
   * [PersistProp]{@link PersistentStorage#PersistProp}的逆向操作。将key对应的属性从
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)中删除，后续
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)的操作，对PersistentStorage不会再有影响。
   *
   * @param { string } key - PersistentStorage中的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#deleteProp
   */
  static DeleteProp(key: string): void;

  /**
   * [persistProp]{@link PersistentStorage#persistProp}的逆向操作。将key对应的属性从PersistentStorage中删除，后续
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)的操作，对
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)不会再有影响。该操作会将对应的key从持久化文件中删除，如果希望再次持久化，可以再
   * 次调用[persistProp]{@link PersistentStorage#persistProp}接口。
   *
   * @param { string } key - PersistentStorage中的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static deleteProp(key: string): void;

  /**
   * 行为和[PersistProp]{@link PersistentStorage#PersistProp}类似，不同在于可以一次性持久化多个数据，适合在应用启动的时候初始化。
   *
   * @param { {key: string;defaultValue: any;}[] } properties - 持久化数组，启动key为属性名，defaultValue为默认值。规则同PersistProp。
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
   * 行为和[persistProp]{@link PersistentStorage#persistProp}类似，不同在于可以一次性持久化多个数据，适合在应用启动的时候初始化。
   *
   * @param { PersistPropsOptions[] } props - 持久化数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static persistProps(props: PersistPropsOptions[]): void;

  /**
   * 返回所有持久化属性的属性名的数组。
   *
   * @returns { Array<string> } 返回所有持久化属性的属性名的数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#keys
   */
  static Keys(): Array<string>;

  /**
   * 返回所有持久化属性的属性名的数组。
   *
   * @returns { Array<string> } 返回所有持久化属性的属性名的数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static keys(): Array<string>;
}

/**
 * 应用存储。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare const appStorage: AppStorage;

/**
 * LocalStorage具体UI使用说明，详见[LocalStorage(页面级UI状态存储)](docroot://ui/state-management/arkts-localstorage.md)
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
   * 创建一个新的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。使用Object.keys(initializingProperties)返回
   * 的属性和其数值，初始化LocalStorage实例。
   *
   * @param { Object } [initializingProperties] - 用initializingProperties包含的属性和数值初始化LocalStorage。initializingProperties不
   *     能为undefined。默认值为空对象，即初始化时不在LocalStorage中新增属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(initializingProperties?: Object);

  /**
   * 获取当前stage共享的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。
   *
   * @returns { LocalStorage } 返回LocalStorage实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @StageModelOnly
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead LocalStorage#getShared
   */
  static GetShared(): LocalStorage;

  /**
   * 获取当前stage共享的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，可以通过使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getSharedLocalStorage](@link getSharedLocalStorage)
   * > 来明确UI的执行上下文。
   *
   * @returns { LocalStorage } 返回LocalStorage实例。
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
   * 如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，则返回LocalStorage中propName对应属性的引
   * 用。否则，返回undefined。
   * 
   * 与[link]{@link LocalStorage#link}的功能基本一致，但不需要手动释放返回的
   * [AbstractProperty<T>](@link AbstractProperty)类型的变量。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { AbstractProperty<T> | undefined } A reference to the property in LocalStorage, or **undefined** if the
   *     property does not exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public ref<T>(propName: string): AbstractProperty<T> | undefined;

  /**
   * 与[ref]{@link AppStorage#ref}接口类似，如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中
   * 存在，则返回LocalStorage中propName对应属性的引用。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，并返回其引用。
   * 
   * 与[setAndLink]{@link LocalStorage#setAndLink}的功能基本一致，但不需要手动释放返回的
   * [AbstractProperty<T>](@link AbstractProperty)类型的变量。
   * 
   * > **说明：**
   * 
   * > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } defaultValue - 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值，defaultValue可
   *     以为null或undefined。
   * @returns { AbstractProperty<T> } AbstractProperty <T>的实例，为LocalStorage中propName对应属性的引用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  public setAndRef<T>(propName: string, defaultValue: T): AbstractProperty<T>;

  /**
   * 判断propName对应的属性是否在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { boolean } 如果propName对应的属性在LocalStorage中存在，则返回true。不存在则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  has(propName: string): boolean;

  /**
   * 返回[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所有的属性名。
   *
   * @returns { IterableIterator<string> } LocalStorage中所有的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  keys(): IterableIterator<string>;

  /**
   * 返回[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中的属性数量。
   *
   * @returns { number } LocalStorage中属性的数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  size(): number;

  /**
   * 获取propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中对应的属性值。
   *
   * @param { string } propName - LocalStorage中的属性名。
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
   * 在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中设置propName对应属性的值。如果newValue的值和propName对应属性的值相
   * 同，即不需要做赋值操作，状态变量不会通知UI刷新propName对应属性的值。
   * 
   * > **说明：** 
   * 
   * > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } newValue - 属性值，从API version 12开始可以为undefined或者null。
   * @returns { boolean } 如果LocalStorage中不存在propName对应的属性，返回false。设置成功返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  set<T>(propName: string, newValue: T): boolean;

  /**
   * 如果propName已经在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，并且newValue和propName对应属性的值不同，则设置
   * propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。
   * 
   * 如果propName不存在，则创建propName属性，值为newValue。setOrCreate只可以创建单个LocalStorage的键值对，如果想创建多个LocalStorage键值对，可以多次调用此方法。
   * 
   * > **说明：** 
   * 
   * > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } newValue - 属性值，从API version 12开始可以为undefined或者null。
   * @returns { boolean } 如果LocalStorage中存在propName，则更新其值为newValue，返回true。
   *     <br/>如果LocalStorage中不存在propName，则创建propName，并初
   *     始化其值为newValue，返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setOrCreate<T>(propName: string, newValue: T): boolean;

  /**
   * 如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例中存在，则返回与LocalStorage中propName对应属
   * 性的双向绑定数据。
   * 
   * 双向绑定数据的修改会被同步回LocalStorage中，LocalStorage会将变化同步到所有绑定该propName的数据和Component中。
   * 
   * 如果LocalStorage中不存在propName，则返回undefined。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty <T>的实例，与LocalStorage中propName对应属性的双向绑定的数据，如果
   *     LocalStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  link<T>(propName: string): SubscribedAbstractProperty<T>;

  /**
   * 与[link]{@link LocalStorage#link}接口类似，如果给定的propName在
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，则返回该propName对应的属性的双向绑定数据。如果不存在，则使用
   * defaultValue在LocalStorage中创建和初始化propName对应的属性，返回其双向绑定数据。
   * 
   * > **说明：** 
   * 
   * > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } defaultValue - 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值，从API version
   *     12开始defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty <T>的实例，与LocalStorage中propName对应属性的双向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * 如果给定的propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，则返回与LocalStorage中propName对应属性的
   * 单向绑定数据。如果LocalStorage中不存在propName，则返回undefined。单向绑定数据的修改不会被同步回LocalStorage中。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { SubscribedAbstractProperty<S> } SubscribedAbstractProperty <S>的实例，和LocalStorage中propName对应属性的单向绑定的数据。如果
   *     LocalStorage中不存在对应的propName，则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  prop<S>(propName: string): SubscribedAbstractProperty<S>;

  /**
   * 与[prop]{@link LocalStorage#prop}接口类似。如果propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)
   * 中存在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在LocalStorage中创建和初始化propName对应的属性，返回其单向绑定数据。
   * 
   * > **说明：** 
   * 
   * > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、
   * > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、
   * > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及
   * > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { S } defaultValue - 当propName在LocalStorage中不存在，使用defaultValue在LocalStorage中初始化propName对应属性的值，从API version 1
   *     2开始defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<S> } SubscribedAbstractProperty <S>的实例，和LocalStorage中propName对应属性的单向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * 在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中删除propName对应的属性。在LocalStorage中删除属性的前提是该属性已经没有订
   * 阅者，如果有订阅者，则返回false。如果没有订阅者则删除成功并返回true。
   * 
   * 属性的订阅者为：
   * 
   * 1. [@LocalStorageLink](docroot://ui/state-management/arkts-localstorage.md#localstoragelink)、[@LocalStorageProp](docroot://ui/state-management/arkts-localstorage.md#localstorageprop)装饰的变量。
   * 
   * 2. 通过[link]{@link LocalStorage#link}、[prop]{@link LocalStorage#prop}、[setAndLink]{@link LocalStorage#setAndLink}、[setAndProp]{@link LocalStorage#setAndProp}接口返回的[SubscribedAbstractProperty]{@link SubscribedAbstractProperty}的实例。
   * 
   * 如果想要删除这些订阅者，可以通过以下方式：
   * 
   * 1. 删除@LocalStorageLink、@LocalStorageProp所在的自定义组件。删除自定义组件请参考[自定义组件的删除](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#自定义组件的删除)。
   * 
   * 2. 对link、prop、setAndLink、setAndProp接口返回的SubscribedAbstractProperty的实例调用[aboutToBeDeleted]{@link SubscribedAbstractProperty#aboutToBeDeleted}接口。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { boolean } 如果LocalStorage中有对应的属性，且该属性已经没有订阅者，则删除成功，返回true。如果属性不存在，或者该属性还存在订阅者，则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  delete(propName: string): boolean;

  /**
   * 删除[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所有的属性。删除所有属性的前提是已经没有任何订阅者。如果有订阅者，clear不会生效并返回
   * false。如果没有订阅者则删除成功并返回true。
   * 
   * 订阅者的含义参考[delete]{@link LocalStorage#delete}。
   *
   * @returns { boolean } 如果LocalStorage中的属性已经没有任何订阅者，则删除成功，并返回true。否则返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  clear(): boolean;
}