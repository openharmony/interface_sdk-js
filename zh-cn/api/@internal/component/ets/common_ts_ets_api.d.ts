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
 * AppStorage是与应用进程绑定的全局UI状态存储中心，由UI框架在应用启动时创建，将UI状态数据存储于运行内存，实现应用级全局状态共享。具体UI使用说明，详见
 * [AppStorage：应用全局的UI状态存储](docroot://ui/state-management/arkts-appstorage.md)。
 * 
 * > **说明：**
 * >
 * > 从API version 12开始，AppStorage支持[Map](docroot://ui/state-management/arkts-appstorage.md#装饰map类型变量)、
 * > [Set](docroot://ui/state-management/arkts-appstorage.md#装饰set类型变量)、
 * > [Date类型](docroot://ui/state-management/arkts-appstorage.md#装饰date类型变量)，支持null、undefined以及
 * > [联合类型](docroot://ui/state-management/arkts-appstorage.md#appstorage支持联合类型)。
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
   * 与[link]{@link AppStorage#link}的功能基本一致，区别在于不需要手动释放返回的[AbstractProperty&lt;T&gt;]{@link AbstractProperty}类型的变量。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @returns { AbstractProperty<T> | undefined } 返回AppStorage中propName对应属性的引用，如果AppStorage中不存在对应的propName，则返回undefined。
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
   * 与[setAndLink]{@link AppStorage#setAndLink}的功能基本一致，区别在于不需要手动释放返回的[AbstractProperty&lt;T&gt;]{@link AbstractProperty}
   * 类型的变量。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue可以为
   *     null或undefined。
   * @returns { AbstractProperty<T> } AbstractProperty<T>的实例，为AppStorage中propName对应属性的引用。
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
   * AppStorage中propName对应属性的双向绑定数据。与[prop]{@link AppStorage#prop}的单向数据绑定不同，link的修改会同步回AppStorage，AppStorage会将变化同步到所有绑定该
   * propName的数据和自定义组件中。
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
   * @param { T } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为
   *     null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty<T>的实例，为AppStorage中propName对应属性的双向绑定的数据。
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
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值。从API version 12开
   *     始，defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty<T>的实例，为AppStorage中propName对应属性的双向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setAndLink<T>(propName: string, defaultValue: T): SubscribedAbstractProperty<T>;

  /**
   * 与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立单向数据绑定。如果给定的propName在AppStorage中存在，则返
   * 回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会同步回AppStorage中。
   * 
   * > **说明：**
   * >
   * > Prop仅支持S类型（number、boolean、string）。
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
   * 与[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中对应的propName建立单向数据绑定。如果给定的propName在AppStorage中存在，则返
   * 回与AppStorage中propName对应属性的单向绑定数据。如果AppStorage中不存在propName，则返回undefined。单向绑定数据的修改不会同步回AppStorage中。
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
   * 与[Prop]{@link AppStorage#Prop}接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存
   * 在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。defaultValue必须为S类型，且不能为
   * null或undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { S } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值，defaultValue不能为
   *     null或undefined。
   * @returns { SubscribedAbstractProperty<S> } SubscribedAbstractProperty<S>的实例，为AppStorage中propName对应属性的单向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead AppStorage#setAndProp
   * @see setAndProp
   */
  static SetAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * 与[prop]{@link AppStorage#prop}接口类似，如果给定的propName在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存
   * 在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用defaultValue在AppStorage中创建和初始化propName对应的属性，返回其单向绑定数据。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } defaultValue - 当propName在AppStorage中不存在时，使用defaultValue在AppStorage中初始化propName对应属性的值。从API version 12开
   *     始，defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty<T>的实例，为AppStorage中propName对应属性的单向绑定的数据。
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
   * @returns { T | undefined } AppStorage中propName对应的属性值，如果不存在则返回undefined。
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
   * @returns { T | undefined } AppStorage中propName对应的属性值，如果不存在则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static get<T>(propName: string): T | undefined;

  /**
   * 在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中设置propName对应属性的值。如果newValue与propName对应属性的值相同，则不做赋值
   * 操作，状态变量不会通知UI刷新propName对应属性的值。与[SetOrCreate]{@link AppStorage#SetOrCreate}不同，Set仅在propName已存在时生效，propName不存在时返回
   * false。从API version 12开始，newValue可以为null或undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - propName对应属性的新值，从API version 12开始可以为null或undefined。
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
   * 在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中设置propName对应属性的值。如果newValue与propName对应属性的值相同，则不做赋值
   * 操作，状态变量不会通知UI刷新propName对应属性的值。与[setOrCreate]{@link AppStorage#setOrCreate}不同，set仅在propName已存在时生效，propName不存在时返回
   * false。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - propName对应属性的新值，从API version 12开始可以为null或undefined。
   * @returns { boolean } 如果AppStorage中不存在propName对应的属性，或设值失败，则返回false。设置成功则返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static set<T>(propName: string, newValue: T): boolean;

  /**
   * 如果propName已经在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中存在，并且newValue和propName对应属性的值不同，则设置
   * propName对应属性的值为newValue，否则状态变量不会通知UI刷新propName对应属性的值。如果不存在，则创建propName属性，值为newValue。从API version 12开始，newValue可以为
   * null或undefined。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - propName对应属性的新值，从API version 12开始可以为null或undefined。
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
   * 如果propName不存在，则创建propName属性，值为newValue。setOrCreate仅可创建单个AppStorage的键值对，如需创建多个AppStorage键值对，可多次调用此方法。
   *
   * @param { string } propName - AppStorage中的属性名。
   * @param { T } newValue - propName对应属性的新值，从API version 12开始可以为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static setOrCreate<T>(propName: string, newValue: T): void;

  /**
   * 在[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中删除propName对应的属性。
   * 
   * 仅当AppStorage中该属性没有任何订阅者时可删除成功并返回true；如果有订阅者，则返回false。
   * 
   * 属性的订阅者为[Link]{@link AppStorage#Link}、[Prop]{@link AppStorage#Prop}等接口返回的实例，以及
   * [@StorageLink](docroot://ui/state-management/arkts-appstorage.md#storagelink)和
   * [@StorageProp](docroot://ui/state-management/arkts-appstorage.md#storageprop)装饰的变量。如果\@StorageLink('propName')、\@
   * StorageProp('propName')装饰的变量或SubscribedAbstractProperty实例依旧对propName有同步关系，则该属性不能从AppStorage中删除。
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
   * 仅当AppStorage中该属性没有任何订阅者时可删除成功并返回true；如果有订阅者，则返回false。
   * 
   * 属性的订阅者为：
   * 
   * 1. [@StorageLink](docroot://ui/state-management/arkts-appstorage.md#storagelink)、[@StorageProp](docroot://ui/state-management/arkts-appstorage.md#storageprop)装饰的变量。
   * 
   * 2. 通过[link]{@link AppStorage#link}、[prop]{@link AppStorage#prop}、[setAndLink]{@link AppStorage#setAndLink}、[setAndProp]{@link AppStorage#setAndProp}接口返回的[SubscribedAbstractProperty]{@link SubscribedAbstractProperty}的实例。
   * 
   * 如需删除这些订阅者，可通过以下方式：
   * 
   * 1. 删除\@StorageLink、\@StorageProp所在的自定义组件。删除自定义组件请参考[自定义组件的删除](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#自定义组件的删除)。
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
   * 删除[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有属性。仅当AppStorage没有任何订阅者时可删除成功并返回true；如果有订阅者，
   * staticClear不会生效并返回false。订阅者的含义参考[delete]{@link AppStorage#delete}。
   *
   * @returns { boolean } 删除AppStorage中所有的属性。仅当没有任何订阅者时删除成功，返回true；如果仍有订阅者，返回false。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead AppStorage.Clear
   */
  static staticClear(): boolean;

  /**
   * 删除[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有属性。前提是AppStorage已经没有任何订阅者。如果有订阅者，Clear将不会生效并返回
   * false。如果没有订阅者且删除成功则返回true。
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
   * 删除[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中所有属性。仅当AppStorage没有任何订阅者时可删除成功并返回true；如果有订阅者，
   * clear不会生效并返回false。
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
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 10开始废弃，暂无替代接口。
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
   * @returns { number } AppStorage中属性的数量。
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
   * @returns { number } AppStorage中属性的数量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static size(): number;
}

/**
 * AbstractProperty是AppStorage/LocalStorage中属性的引用，提供读取、修改所引用属性数据及查询属性名的能力。与SubscribedAbstractProperty不同，AbstractProperty
 * 实例无需手动释放。
 * 
 * > **说明：**
 * >
 * > 从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。
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
   * @param { T } newValue - AppStorage/LocalStorage中所引用属性的新值，可以为null或undefined。
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
 * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中属性的单/双向同步绑定对象，用于与AppStorage/LocalStorage中的属性建立数据同
 * 步关系。SubscribedAbstractProperty实例需要通过[aboutToBeDeleted]{@link SubscribedAbstractProperty#aboutToBeDeleted}接口手动释放，以取消同步
 * 关系并无效化实例。
 * 
 * > **说明：**
 * >
 * > 从API version 12开始，AppStorage/LocalStorage支持Map、Set、Date类型，支持null、undefined以及联合类型。
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
   * 订阅属性的唯一标识ID，用于在订阅关系管理中区分不同的订阅属性实例。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private id_;

  /**
   * 变量信息，用于标识该订阅关系。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private info_?;

  /**
   * 构造函数。若传入了subscribeMe参数建立了订阅关系，订阅关系不再需要时，应调用[unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber}解除
   * 订阅（订阅者ID通过[IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}获取）。
   *
   * @param { IPropertySubscriber } subscribeMe - 订阅者，用于接收属性变化通知；不传入则不建立订阅关系。
   * @param { string } info - 变量信息，用于标识该订阅关系；不传入时默认为undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(
    /**
     * 订阅者，用于接收属性变化通知；不传入则不建立订阅关系。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    subscribeMe?: IPropertySubscriber,
    /**
     * 变量信息，用于标识该订阅关系；不传入时默认为undefined。
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @systemapi
     * @since 7
     * 
     */
    info?: string,
  );

  /**
   * 获取ID时调用。
   *
   * @returns { number } 返回该订阅属性的唯一标识ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * 返回[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所同步属性的属性名。
   *
   * @returns { string } AppStorage/LocalStorage中所同步属性的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  info(): string;

  /**
   * 读取[AppStorage](docroot://ui/state-management/arkts-appstorage.md)/
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所同步属性的数据。
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
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所同步属性的数据，newValue必须是T类型，从API version 12开始可以为
   * null或undefined。
   *
   * @param { T } newValue - AppStorage/LocalStorage中所同步属性的新值，从API version 12开始可以为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  abstract set(newValue: T): void;

  /**
   * 创建双向同步属性。数据变更在数据源与订阅者之间双向传播。与[createOneWaySync]{@link SubscribedAbstractProperty#createOneWaySync}相比，该方法支持
   * 数据源与订阅者之间的双向同步，适用于订阅者也需要反向修改数据源的场景；若仅需数据源向订阅者单向同步，
   * 请使用[createOneWaySync]{@link SubscribedAbstractProperty#createOneWaySync}。订阅关系不再需要时，
   * 应调用[unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber}解除订阅（订阅者ID
   * 通过[IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}获取），
   * 或由返回的[SyncedPropertyTwoWay]{@link SyncedPropertyTwoWay}对象
   * 的[aboutToBeDeleted()]{@link SyncedPropertyTwoWay#aboutToBeDeleted}方法处理取消订阅。
   *
   * @param { IPropertySubscriber } subscribeMe - 订阅者，用于接收属性变化通知；不传入则不建立订阅关系。
   * @param { string } info - 变量信息，用于标识该订阅关系；不传入时默认为undefined。
   * @returns { SyncedPropertyTwoWay<T> } Two-way synchronized property.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createTwoWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyTwoWay<T>;

  /**
   * 创建单向同步属性。数据变更仅从数据源向订阅者单向传播。订阅关系不再需要时，应调用[unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber}解除
   * 订阅（订阅者ID通过[IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}获取），
   * 或由返回的[SyncedPropertyOneWay]{@link SyncedPropertyOneWay}对象
   * 的[aboutToBeDeleted()]{@link SyncedPropertyOneWay#aboutToBeDeleted}方法处理取消订阅。
   *
   * @param { IPropertySubscriber } subscribeMe - 订阅者，用于接收属性变化通知；不传入则不建立订阅关系。
   * @param { string } info - 变量信息，用于标识该订阅关系；不传入时默认为undefined。
   * @returns { SyncedPropertyOneWay<T> } 返回创建的单向同步属性对象，用于接收父组件状态值的单向同步，当父组件状态变化时更新自身值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  createOneWaySync(subscribeMe?: IPropertySubscriber, info?: string): SyncedPropertyOneWay<T>;

  /**
   * 根据订阅者ID解除订阅时调用。
   *
   * @param { number } subscriberId - 要解除订阅的订阅者ID，需为已通过[createTwoWaySync]{@link createTwoWaySync}
   *     或[createOneWaySync]{@link SubscribedAbstractProperty#createOneWaySync}建立订阅关系的订阅者ID，
   *     通过[IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}方法获取。
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
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)的单向或双向同步关系，并无效化SubscribedAbstractProperty实例。即调用
   * aboutToBeDeleted方法之后，不能再使用SubscribedAbstractProperty实例调用[set]{@link LocalStorage#set}或[get]{@link LocalStorage#get}
   * 方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  abstract aboutToBeDeleted(): void;
}

/**
 * 属性订阅者接口，定义订阅者需要实现的方法，用于接收属性变化通知和生命周期回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
interface IPropertySubscriber {
  /**
   * 获取ID时调用。
   *
   * @returns { number } 返回订阅者的唯一标识ID。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  id(): number;

  /**
   * 销毁时调用。
   *
   * @param { IPropertySubscriber } owningView - 所在自定义组件；不传入则不指定关联的自定义组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(owningView?: IPropertySubscriber): void;
}

/**
 * 继承自[SubscribedAbstractProperty\<T\>]{@link SubscribedAbstractProperty}。用于实现父子组件之间的双向状态数据同步。
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
   * 构造函数。订阅关系不再需要时，应调用[unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber}解除
   * 订阅（订阅者ID通过[IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}获取），
   * 或调用本对象的[aboutToBeDeleted()]{@link SyncedPropertyTwoWay#aboutToBeDeleted}方法处理取消订阅。
   *
   * @param { SubscribedAbstractProperty<T> } source - 双向同步属性的数据源。
   * @param { IPropertySubscriber } subscribeMe - 订阅者，用于接收属性变化通知；不传入则不建立订阅关系。
   * @param { string } info - 变量信息，用于标识该订阅关系；不传入时默认为undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * 销毁时调用。
   *
   * @param { IPropertySubscriber } unsubscribeMe - 被取消的订阅者，需为已订阅的订阅者；不传入则取消所有订阅者。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * 变化时调用。
   *
   * @param { T } newValue - 更改后的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * 获取数据时调用。
   *
   * @returns { T } 返回双向同步属性当前的数据值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * 赋值时调用。
   *
   * @param { T } newValue - 要设置的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * 继承自[SubscribedAbstractProperty\<T\>]{@link SubscribedAbstractProperty}。用于接收父组件状态值的单向同步，当父组件状态变化时更新自身值。
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
   * 单向同步属性的数据源。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  private source_;

  /**
   * 构造函数。订阅关系不再需要时，应调用[unlinkSuscriber()]{@link SubscribedAbstractProperty#unlinkSuscriber}解除
   * 订阅（订阅者ID通过[IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}获取），
   * 或调用本对象的[aboutToBeDeleted()]{@link SyncedPropertyOneWay#aboutToBeDeleted}方法处理取消订阅。
   *
   * @param { SubscribedAbstractProperty<T> } source - 单向同步属性的数据源。
   * @param { IPropertySubscriber } subscribeMe - 订阅者，用于接收属性变化通知；不传入则不建立订阅关系。
   * @param { string } info - 变量信息，用于标识该订阅关系；不传入时默认为undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(source: SubscribedAbstractProperty<T>, subscribeMe?: IPropertySubscriber, info?: string);

  /**
   * 销毁时调用。
   *
   * @param { IPropertySubscriber } unsubscribeMe - 被取消的订阅者，需为已订阅的订阅者；不传入则取消所有订阅者。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  aboutToBeDeleted(unsubscribeMe?: IPropertySubscriber): void;

  /**
   * 变化时调用。
   *
   * @param { T } newValue - 更改后的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;

  /**
   * 获取数据时调用。
   *
   * @returns { T } - 返回单向同步属性当前的数据值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(): T;

  /**
   * 赋值时调用。
   *
   * @param { T } newValue - 要设置的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(newValue: T): void;
}

/**
 * 继承自[IPropertySubscriber]{@link IPropertySubscriber}。用于订阅单个属性值的变化，当被订阅的属性发生变化时接收通知。
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
   * @param { T } newValue - 更改后的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  hasChanged(newValue: T): void;
}

/**
 * 可订阅抽象类，用于管理所持有的属性集合，提供属性的添加、删除和变更通知能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare abstract class SubscribaleAbstract {
  /**
   * 所持有的属性集合。
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
   * 通知属性更改时调用。
   *
   * @param { string } propName - 要通知变更的属性名称。
   * @param { any } newValue - 更改后的新值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  protected notifyPropertyHasChanged(propName: string, newValue: any): void;

  /**
   * 添加持有的属性。属性不再使用时，应调用[removeOwningProperty]{@link SubscribaleAbstract#removeOwningProperty}
   * 或[removeOwningPropertyById]{@link SubscribaleAbstract#removeOwningPropertyById}移除。
   *
   * @param { IPropertySubscriber } subscriber - 要添加的订阅者，该订阅者将接收属性变化通知。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public addOwningProperty(subscriber: IPropertySubscriber): void;

  /**
   * 使用ID删除持有的属性时调用。
   *
   * @param { IPropertySubscriber } property - 要删除的订阅者，
   *     需为已通过[addOwningProperty]{@link SubscribaleAbstract#addOwningProperty}添加的订阅者。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  public removeOwningProperty(property: IPropertySubscriber): void;

  /**
   * 使用ID删除持有的属性时调用。
   *
   * @param { number } subscriberId - 要删除的订阅者ID，
   *     需为已通过[addOwningProperty]{@link SubscribaleAbstract#addOwningProperty}添加的订阅者ID，
   *     通过[IPropertySubscriber]{@link IPropertySubscriber}.[id()]{@link IPropertySubscriber#id}方法获取。
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
   * 环境变量名称，支持的范围详见[内置环境变量说明]{@link Environment}。
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
 * Environment提供设备环境状态的查询能力，可将系统环境变量（如深浅色模式、语言、字体缩放、布局方向等）注入AppStorage，使应用能够感知和响应设备环境变化。具体UI使用说明，详见
 * [Environment：设备环境查询](docroot://ui/state-management/arkts-environment.md)。
 *
 * ###### 内置环境变量说明
 * 
 * | key                  | 类型            | 说明                                                         |
 * | -------------------- | --------------- | ------------------------------------------------------------ |
 * | accessibilityEnabled | string          | 无障碍屏幕朗读是否启用。当无法获取环境变量中的accessibilityEnabled的值时，将通过envProp、envProps等接口传入的开发者指定的默认值添加到AppStorage中。 |
 * | colorMode            | [ColorMode](@link ColorMode)       | 深浅色模式，可选值为：<br>- **ColorMode.LIGHT：浅色模式**；<br>- **ColorMode.DARK**：深色模式。 |
 * | fontScale            | number          | 字体大小比例。                                               |
 * | fontWeightScale      | number          | 字重比例。                                                   |
 * | layoutDirection      | [LayoutDirection](@link LayoutDirection) | 布局方向类型，可选值为：<br>- **LayoutDirection.LTR**：从左到右；<br>- **LayoutDirection.RTL**：从右到左；<br>- **LayoutDirection.Auto**：跟随系统。 |
 * | languageCode         | string          | 当前系统语言，小写字母，例如zh。                             |
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
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。如果系统中未查询到Environment环境变量key的值，则使用默认值value存入
   * AppStorage并返回true。如果AppStorage中已经有对应的key，则返回false。
   * 
   * 在没有调用EnvProp的情况下，直接使用AppStorage读取环境变量，将无法获取到对应的环境变量值。建议在应用启动时调用该接口。
   *
   * @param { string } key - 环境变量名称，支持的范围详见[内置环境变量说明]{@link Environment}。
   * @param { S } value - 查询不到环境变量key时，则使用value作为默认值存入AppStorage中。
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
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。如果系统中未查询到Environment环境变量key的值，则使用默认值value存入
   * AppStorage并返回true。如果AppStorage中已经有对应的key，则返回false。
   * 
   * 在没有调用envProp的情况下，直接使用AppStorage读取环境变量，将无法获取到对应的环境变量值。建议在应用启动时调用该接口。
   *
   * @param { string } key - 环境变量名称，支持的范围详见[内置环境变量说明]{@link Environment}。
   * @param { S } value - 查询不到环境变量key时，则使用value作为默认值存入AppStorage中。
   * @returns { boolean } 如果key对应的属性在AppStorage中存在，则返回false。不存在则在AppStorage中用value作为默认值创建key对应的属性，返回true。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static envProp<S>(key: string, value: S): boolean;

  /**
   * 和[EnvProp]{@link Environment#EnvProp}功能类似，不同点在于参数为数组，可以一次性初始化多个数据。在没有调用EnvProps的情况下，直接使用AppStorage读取环境变量，将无法获取到对应的环
   * 境变量值。建议在应用启动时调用，将系统环境变量批量存入[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。
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
   * 和[envProp]{@link Environment#envProp}功能类似，不同点在于参数为数组，可以一次性初始化多个数据。在没有调用envProps的情况下，直接使用AppStorage读取环境变量，将无法获取到对应的环
   * 境变量值。建议在应用启动时调用，将系统环境变量批量存入[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中。
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
   * @returns { Array<string> } 返回环境变量的属性key的数组。
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
   * @returns { Array<string> } 返回环境变量的属性key的数组。
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
   * 要持久化的属性名。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  key: string;

  /**
   * 在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。从API version 12开始，defaultValue可以为null或undefined。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  defaultValue: number | string | boolean | Object;
}

/**
 * PersistentStorage提供了UI状态的持久化存储能力，将选定的AppStorage属性持久化到文件中，在应用重启时从文件中恢复这些属性值并写入到AppStorage。具体UI使用说明，详见
 * [PersistentStorage：持久化存储UI状态](docroot://ui/state-management/arkts-persiststorage.md)。
 * 
 * > **说明：**
 * >
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
   * 构造函数。
   *
   * @param { AppStorage } appStorage - 应用级存储对象，PersistentStorage将基于此对象进行持久化管理
   * @param { Storage } storage - 持久化存储对象，用于实际读写持久化数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(appStorage: AppStorage, storage: Storage);

  /**
   * 将[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中key对应的属性持久化到文件中。该接口应在访问AppStorage之前调用。
   * 
   * 确定属性的类型和值的顺序如下：
   * 
   * 1. 如果[PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)文件中存在key对应的属性，在AppStorage中创建对应的key，并用在PersistentStorage中找到的key的属性初始化。
   * 
   * 2. 如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。
   * 
   * 3. 如果AppStorage也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。
   * 
   * 根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值覆盖PersistentStorage文件中的值。由于AppStorage是内存中的数据，这种操作会使持久化文件中的数据被内存数据覆盖，导致持久化数据失去意义。
   *
   * @param { string } key - 要持久化的属性名。
   * @param { T } defaultValue - 在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。默认值不允许为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead PersistentStorage#persistProp
   */
  static PersistProp<T>(key: string, defaultValue: T): void;

  /**
   * 将[AppStorage](docroot://ui/state-management/arkts-appstorage.md)中key对应的属性持久化到文件中。该接口通常在访问AppStorage之前调用。
   * 
   * 确定属性的类型和值的顺序如下：
   * 
   * 1. 如果[PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)文件中存在key对应的属性，在AppStorage中创建对应的key，并用在PersistentStorage中找到的key的属性初始化。
   * 
   * 2. 如果PersistentStorage文件中没有查询到key对应的属性，则在AppStorage中查找key对应的属性。如果找到key对应的属性，则将该属性持久化。
   * 
   * 3. 如果AppStorage中也没查找到key对应的属性，则在AppStorage中创建key对应的属性。用defaultValue初始化其值，并将该属性持久化。
   * 
   * 根据上述的初始化流程，如果AppStorage中有该属性，则会使用其值覆盖PersistentStorage文件中的值。由于AppStorage是内存中的数据，这种操作会使持久化文件中的数据被内存数据覆盖，导致持久化数据失去意义。
   *
   * @param { string } key - 要持久化的属性名。
   * @param { T } defaultValue - 在PersistentStorage和AppStorage中未查询到时，则使用默认值进行初始化。从API version 12开始可以为null或undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static persistProp<T>(key: string, defaultValue: T): void;

  /**
   * 是[PersistProp]{@link PersistentStorage#PersistProp}的逆向操作。将key对应的属性从
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)中删除，后续
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)的操作对PersistentStorage不会再有影响。如需再次持久化，可再次调用
   * [PersistProp]{@link PersistentStorage#PersistProp}接口。
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
   * 是[persistProp]{@link PersistentStorage#persistProp}的逆向操作。将key对应的属性从
   * [PersistentStorage](docroot://ui/state-management/arkts-persiststorage.md)中删除，后续
   * [AppStorage](docroot://ui/state-management/arkts-appstorage.md)的操作对PersistentStorage不会再有影响。如需再次持久化，可再次调用
   * [persistProp]{@link PersistentStorage#persistProp}接口。
   *
   * @param { string } key - PersistentStorage中的属性名。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  static deleteProp(key: string): void;

  /**
   * 行为与[PersistProp]{@link PersistentStorage#PersistProp}类似，不同在于可以一次性持久化多个数据。该接口应在访问AppStorage之前调用，适合在应用启动时初始化。
   * @param { {key: string;defaultValue: any;}[] } properties - 持久化数组，其中key为属性名，defaultValue为默认值。规则同PersistProp。
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
   * 行为与[persistProp]{@link PersistentStorage#persistProp}类似，不同在于可以一次性持久化多个数据。该接口通常在访问AppStorage之前调用，适合在应用启动时初始化。
   *
   * @param { PersistPropsOptions[] } props - 持久化数组，每项包含属性名和默认值。
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
 * 应用级全局状态存储实例，提供应用范围内的状态数据存储和访问能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare const appStorage: AppStorage;

/**
 * LocalStorage是页面级的UI状态存储，通过[@Entry](docroot://reference/apis-arkui/arkui-ts/ts-universal-entry.md#entry)装饰器接收的参数可以在页面内
 * 共享同一个LocalStorage实例。具体UI使用说明，详见[LocalStorage：页面级UI状态存储](docroot://ui/state-management/arkts-localstorage.md)。
 * 
 * > **说明：**
 * >
 * > 从API version 12开始，LocalStorage支持[Map](docroot://ui/state-management/arkts-localstorage.md#装饰map类型变量)、
 * > [Set](docroot://ui/state-management/arkts-localstorage.md#装饰set类型变量)、
 * > [Date类型](docroot://ui/state-management/arkts-localstorage.md#装饰date类型变量)，支持null、undefined以及
 * > [联合类型](docroot://ui/state-management/arkts-localstorage.md#localstorage支持联合类型)。
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
   * 的属性名及其值，初始化LocalStorage实例。
   *
   * @param { Object } [initializingProperties] - 用于初始化LocalStorage，当需要在创建时预置属性数据时传入此参数。其键作为LocalStorage中的属性名，值为对应属性的初始
   *     值。initializingProperties不能为undefined。不传入时默认值为空对象，LocalStorage中不包含任何预置属性。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  constructor(initializingProperties?: Object);

  /**
   * 获取当前Stage共享的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。
   *
   * @returns { LocalStorage } 返回当前Stage共享的LocalStorage实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @StageModelOnly
   * @form
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead LocalStorage#getShared
   */
  static GetShared(): LocalStorage;

  /**
   * 获取当前Stage共享的[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)实例。
   * 
   * > **说明：**
   * >
   * > 从API version 12开始，可使用[UIContext]{@link @ohos.arkui.UIContext}中的
   * > [getSharedLocalStorage]{@link @ohos.arkui.UIContext:UIContext.getSharedLocalStorage}明确UI执行上下文中的LocalStorage实例。
   *
   * @returns { LocalStorage } 返回当前Stage共享的LocalStorage实例。
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
   * 与[link]{@link LocalStorage#link}的功能基本一致，区别在于不需要手动释放返回的[AbstractProperty&lt;T&gt;]{@link AbstractProperty}类型的变量。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { AbstractProperty<T> | undefined } 返回LocalStorage中propName对应属性的引用，如果LocalStorage中不存在对应的propName，则返回
   *     undefined。
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
   * 与[setAndLink]{@link LocalStorage#setAndLink}的功能基本一致，区别在于不需要手动释放返回的
   * [AbstractProperty&lt;T&gt;]{@link AbstractProperty}类型的变量。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } defaultValue - 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值，defaultValue可
   *     以为null或undefined。
   * @returns { AbstractProperty<T> } AbstractProperty<T>的实例，为LocalStorage中propName对应属性的引用。
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
   * 获取propName在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中对应的属性值。如果不存在则返回undefined。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { T | undefined } LocalStorage中propName对应的属性值，如果不存在则返回undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  get<T>(propName: string): T | undefined;

  /**
   * 在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中设置propName对应属性的值。如果newValue与propName对应属性的值相同，则
   * 不做赋值操作，状态变量不会通知UI刷新propName对应属性的值。与[setOrCreate]{@link LocalStorage#setOrCreate}不同，set仅在propName已存在时生效，propName不存在时
   * 返回false。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } newValue - propName对应属性的新值，从API version 12开始可以为null或undefined。
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
   * 如果propName不存在，则创建propName属性，值为newValue。setOrCreate仅可创建单个LocalStorage的键值对，如需创建多个LocalStorage键值对，可多次调用此方法。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } newValue - propName对应属性的新值，从API version 12开始可以为null或undefined。
   * @returns { boolean } 如果LocalStorage中存在propName，则更新其值为newValue，返回true。
   *     <br>如果LocalStorage中不存在propName，则创建propName，并初始化其值为newValue，返回true。
   *     <br>API version 12之前，当newValue为null或undefined时返回false。
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
   * 性的双向绑定数据。与[prop]{@link LocalStorage#prop}的单向数据绑定不同，link建立双向数据绑定，修改会同步回LocalStorage，LocalStorage会将变化同步到所有绑定该propName
   * 的数据和自定义组件中。
   * 
   * 如果LocalStorage中不存在propName，则返回undefined。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty<T>的实例，与LocalStorage中propName对应属性的双向绑定的数据，如果
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
   * @param { string } propName - LocalStorage中的属性名。
   * @param { T } defaultValue - 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值。从API version
   *     12开始，defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<T> } SubscribedAbstractProperty<T>的实例，与LocalStorage中propName对应属性的双向绑定的数据。
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
   * 单向绑定数据。如果LocalStorage中不存在propName，则返回undefined。单向绑定数据的修改不会同步回LocalStorage中。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @returns { SubscribedAbstractProperty<S> } SubscribedAbstractProperty<S>的实例，为LocalStorage中propName对应属性的单向绑定的数据。如果
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
   * 与[prop]{@link LocalStorage#prop}接口类似，如果给定的propName在
   * [LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中存在，则返回该propName对应的属性的单向绑定数据。如果不存在，则使用
   * defaultValue在LocalStorage中创建和初始化propName对应的属性，返回其单向绑定数据。
   *
   * @param { string } propName - LocalStorage中的属性名。
   * @param { S } defaultValue - 当propName在LocalStorage中不存在时，使用defaultValue在LocalStorage中初始化propName对应属性的值。从API version
   *     12开始，defaultValue可以为null或undefined。
   * @returns { SubscribedAbstractProperty<S> } SubscribedAbstractProperty<S>的实例，为LocalStorage中propName对应属性的单向绑定的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @form
   * @atomicservice [since 11]
   * @since 9 dynamic
   */
  setAndProp<S>(propName: string, defaultValue: S): SubscribedAbstractProperty<S>;

  /**
   * 在[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中删除propName对应的属性。仅当LocalStorage中该属性没有任何订阅者时可删除成
   * 功并返回true；如果有订阅者，则返回false。
   * 
   * 属性的订阅者为：
   * 
   * 1. [@LocalStorageLink](docroot://ui/state-management/arkts-localstorage.md#localstoragelink)、[@LocalStorageProp](docroot://ui/state-management/arkts-localstorage.md#localstorageprop)装饰的变量。
   * 
   * 2. 通过[link]{@link LocalStorage#link}、[prop]{@link LocalStorage#prop}、[setAndLink]{@link LocalStorage#setAndLink}、[setAndProp]{@link LocalStorage#setAndProp}接口返回的[SubscribedAbstractProperty]{@link SubscribedAbstractProperty}的实例。
   * 
   * 如需删除这些订阅者，可通过以下方式：
   * 
   * 1. 删除\@LocalStorageLink、\@LocalStorageProp所在的自定义组件。删除自定义组件请参考[自定义组件的删除](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md#自定义组件的删除)。
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
   * 删除[LocalStorage](docroot://ui/state-management/arkts-localstorage.md)中所有的属性。仅当LocalStorage中的属性没有任何订阅者时可删除成功并返回true；
   * 如果有订阅者，clear不会生效并返回false。
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