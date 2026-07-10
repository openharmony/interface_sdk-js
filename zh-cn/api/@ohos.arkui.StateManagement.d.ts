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
 * The state management module provides data storage, persistent data management, UIAbility data storage, and 
 * environment state and tools required by applications.
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
 * 返回默认构造器的函数。
 *
 * @returns { T } 默认构造器执行得到的返回值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type StorageDefaultCreator<T> = () => T;

/**
 * 含有任意入参的类构造器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface TypeConstructorWithArgs<T> {

  /**
   * 创建并返回一个指定类型T的实例。
   *
   * @param { any } args - 函数入参。
   * @returns { T } T类型的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  new(...args: any): T;
}

/**
 * globalConnect参数类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 18 dynamic
 */
export class ConnectOptions<T extends object> {

  /**
   * 指定的类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  type: TypeConstructorWithArgs<T>;

  /**
   * 传入的key，不传则使用type的名字作为key。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  key?: string;

  /**
   * 默认数据的构造器，建议传递，如果globalConnect是第一次连接key，不传会报错。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  defaultCreator?: StorageDefaultCreator<T>;

  /**
   * 加密级别：EL1-EL5，详见[加密级别](docroot://application-models/application-context-stage.md#获取和修改加密分区)，对应数值：0-4，不传时默认为EL2，不同加密级
   * 别对应不同的加密分区，即不同的存储路径，传入的加密等级数值不在0-4会直接运行crash。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 18 dynamic
   */
  areaMode?: contextConstant.AreaMode;
}

/**
 * AppStorageV2具体UI使用说明，详见[AppStorageV2(应用全局的UI状态存储)](docroot://ui/state-management/arkts-new-appstoragev2.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class AppStorageV2 {

  /**
   * 将键值对数据储存在应用内存中。如果给定的key已经存在于[AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md)中，返回对应的值；否则，通过获取
   * 默认值的构造器构造默认值，并返回。
   *
   * @param { TypeConstructorWithArgs<T> } type - 指定的类型，若未指定key，则使用type的name作为key。
   * @param { string | StorageDefaultCreator<T> } [keyOrDefaultCreator] - 指定的key，或者是获取默认值的构造器。默认值为undefined。
   * @param { StorageDefaultCreator<T> } [defaultCreator] - 获取默认值的构造器。默认值为undefined。
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
   * 将指定的键值对数据从[AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md)里面删除。如果指定的键值不存在于AppStorageV2中，将删除失
   * 败。
   *
   * @param { string | TypeConstructorWithArgs<T> } keyOrType - 需要删除的key；如果指定的是type类型，删除的key为type的name。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static remove<T>(keyOrType: string | TypeConstructorWithArgs<T>): void;

  /**
   * 获取[AppStorageV2](docroot://ui/state-management/arkts-new-appstoragev2.md)中的所有key。
   *
   * @returns { Array<string> } 所有AppStorageV2中的key。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static keys(): Array<string>;
}

/**
 * 持久化失败时返回错误原因的回调。
 *
 * @param { string } key - 出错的键值。
 * @param { 'quota' | 'serialization' | 'unknown' } reason - 出错的原因类型。
 * @param { string } message - 出错的更多消息。
 * @param { string } [oldValue] - 反序列化失败时，返回的旧的存储于磁盘的序列化数据。 [since 26.0.0]
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type PersistenceErrorCallback = (key: string, reason: 'quota' | 'serialization' | 'unknown', 
    message: string, oldValue?: string) => void;

/**
 * globalConnect的入参泛型，用于定义globalConnect支持的持久化集合数据类型。
 *
 * @unionmember { Array<S> } 表示值类型为Array类型。
 * @unionmember { Map<string | number, S> } 表示值类型为Map类型。
 * @unionmember { Set<S> } 表示值类型为Set类型。
 * @unionmember { collections.Array<S> } 表示值类型为collections.Array类型。
 * @unionmember { collections.Map<string | number, S> } 表示值类型为collections.Map类型。
 * @unionmember { collections.Set<S> } 表示值类型为collections.Set类型。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export declare type CollectionType<S> = Array<S> | Map<string | number, S> |
  Set<S> | collections.Array<S> | collections.Map<string | number, S> | collections.Set<S>;

/**
 * [globalConnect]{@link PersistenceV2.globalConnect<T extends CollectionType<S>, S extends object>( type: ConnectOptionsCollections<T, S> | ConnectOptions<T> )}
 * 接口参数类型，ConnectOptionsCollections继承自[ConnectOptions\<T\>]{@link ConnectOptions}。当开发者需要持久化容器类型数据（如`Array<S>`）时，需要使用
 * `ConnectOptionsCollections`入参。
 * 
 * 如下展示`StorageDefaultCreator<T>`和`StorageDefaultCreator<S>`示例：
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export class ConnectOptionsCollections<T extends CollectionType<S>, S extends object> extends ConnectOptions<T> {

  /**
   * 用于持久化容器类型数据，当提供默认`defaultSubCreator`时，则需要同时提供默认创建器`defaultCreator`，不提供默认创建器，会导致无法持久化容器类型数据。集合项类型`S`必须与
   * `defaultSubCreator`的返回类型相同。如果提供defaultSubCreator，没有提供defaultCreator，会导致持久化失败。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  defaultCreator?: StorageDefaultCreator<T>;

  /**
   * 使用该集合项默认构造函数，用于持久化容器类数据。如果defaultSubCreator返回的是`undefined`或`null`，会导致持久化失败。 当持久化用户自定义class类集合（如`Array<ClassA>`）时，
   * `defaultCreator`中的泛型类型`T`为`Array<ClassA>`，则`defaultSubCreator`中的泛型类型`S`为`ClassA`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  defaultSubCreator?: StorageDefaultCreator<S>;
}

/**
 * 继承自[AppStorageV2]{@link AppStorageV2}，PersistenceV2具体UI使用说明，详见
 * [PersistenceV2(持久化存储UI状态)](docroot://ui/state-management/arkts-new-persistencev2.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PersistenceV2 extends AppStorageV2 {

  /**
   * 将键值对数据储存在应用磁盘中。如果给定的key已经存在于[PersistenceV2](docroot://ui/state-management/arkts-new-persistencev2.md)中，返回对应的值；否则，会通
   * 过获取默认值的构造器构造默认值，并返回。如果globalConnect的是
   * [\@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)对象，该对象
   * [\@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)属性的变化，会触发整个关联对象的自动刷新；非\@Trace属性变化则不会，如有必
   * 要，可调用[PersistenceV2.save]{@link PersistenceV2#save}接口手动存储。
   *
   * @param { ConnectOptions<T> } type - 传入的connect参数，详细说明见ConnectOptions参数说明。
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
   * 将键值对数据储存在应用磁盘中。支持集合类型
   * [`Array`，`Map`，`Set`，`Date`，`collections.Array`, `collections.Map`, `collections.Set`类型的持久化](docroot://ui/state-management/arkts-new-persistencev2.md#globalconnect支持集合的类型)。
   * 注意在持久化`Array<ClassA>`类型的数据时，需要调用[`makeObserved`]{@link UIUtils#makeObserved}使返回的对象被观察到。不支持多个嵌套集合，例如不支持
   * `Array<Array<ClassA>>`的持久化。
   *
   * @param { ConnectOptionsCollections<T, S> | ConnectOptions<T> } type - 传入的globalConnect参数，详细说明见ConnectOptions和
   *     ConnectOptionsCollections参数说明。<br/>当开发者在ConnectOptionsCollections中提供默认defaultSubCreator时，则需要同时提供默认创建器
   *     defaultCreator，如果不提供，会导致持久化失败。且集合项类型S必须与defaultSubCreator的返回类型相同。如果返回类型不一致，编译会报错。
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
   * 将指定的键值对数据持久化一次。
   *
   * @param { string | TypeConstructorWithArgs<T> } keyOrType - 需要持久化的key；如果指定的是type类型，持久化的key为type的name。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static save<T>(keyOrType: string | TypeConstructorWithArgs<T>): void;

  /**
   * 在持久化失败时调用。
   *
   * @param { PersistenceErrorCallback | undefined } callback - 持久化失败时调用。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static notifyOnError(callback: PersistenceErrorCallback | undefined): void;
}

/**
 * 类构造函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface TypeConstructor<T> {

  /**
   * 创建并返回一个指定类型T的实例。
   *
   * @returns { T } T类型的实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  new(): T;
}

/**
 * 属性装饰器，用于装饰嵌套类中属于自定义class类的属性。
 *
 * @param { TypeConstructor<T> } type - 标记类属性的类型。
 * @returns { PropertyDecorator } 属性装饰器。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare type TypeDecorator = <T>(type: TypeConstructor<T>) => PropertyDecorator;

/**
 * Define Type PropertyDecorator, adds type information to an object.
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
 * UIUtils提供一些方法，用于处理状态管理相关的数据转换。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export declare class UIUtils {

  /**
   * 从状态管理框架包裹的代理对象中获取原始对象。详见[getTarget接口：获取状态管理框架代理前的原始对象](docroot://ui/state-management/arkts-new-getTarget.md)。
   *
   * @param { T } source - 数据源对象。
   * @returns { T } 数据源对象去除状态管理框架所加代理后的原始对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static getTarget<T extends object>(source: T): T;

  /**
   * 将普通不可观察数据变为可观察数据。详见[makeObserved接口：将非观察数据变为可观察数据](docroot://ui/state-management/arkts-new-makeObserved.md)。
   *
   * @param { T } source - 数据源对象。支持非@Observed和@ObservedV2装饰的class，JSON.parse返回的Object和@Sendable修饰的class。
   *     </br>支持Array、Map、Set和Date。
   *     </br>支持collections.Array, collections.Set和collections.Map。
   *     </br>具体使用规则，详见
   *     [makeObserved接口：将非观察数据变为可观察数据](docroot://ui/state-management/arkts-new-makeObserved.md)。
   * @returns { T } 可观察的数据。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  static makeObserved<T extends object>(source: T): T;

  /**
   * 将不可观察的对象包装成状态管理V1可观察的对象，其能力等同于@Observed，可初始化@ObjectLink。
   * 
   * 该接口可搭配[enableV2Compatibility]{@link UIUtils#enableV2Compatibility}应用于状态管理V1和V2混用场景，详见
   * [状态管理V1和V2混用指导（API version 19及之后）](docroot://ui/state-management/arkts-v1-v2-mixusage.md)。
   *
   * @param { T } source - 数据源。支持普通class、Array、Map、Set、Date类型。
   *     </br>不支持[@arkts.collections (ArkTS容器集)]{@link @arkts.collections:collections}和
   *     [@Sendable](docroot://arkts-utils/arkts-sendable.md)修饰的class。
   *     </br>不支持undefined和null。不支持状态管理V2的数据和
   *     [makeObserved]{@link UIUtils#makeObserved}的返回值。
   * @returns { T } 对于支持的入参类型，返回状态管理V1的观察数据。对于不支持的入参类型，返回数据源对象本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamiconly
   */
  static makeV1Observed<T extends object>(source: T): T;

  /**
   * 使V1的状态变量能够在\@ComponentV2中观察，主要应用于状态管理V1、V2混用场景。详见
   * [状态管理V1和V2混用指导（API version 19及之后）](docroot://ui/state-management/arkts-v1-v2-mixusage.md)。
   *
   * @param { T } source - 数据源，仅支持V1状态数据。
   * @returns { T } 如果数据源是V1的状态数据，则返回能够在@ComponentV2中观察的数据。否则返回数据源本身。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 19 dynamiconly
   */
  static enableV2Compatibility<T extends object>(source: T): T;

  /**
   * 给状态管理V2的状态变量动态添加监听方法，详见
   * [addMonitor/clearMonitor](docroot://ui/state-management/arkts-new-addMonitor-clearMonitor.md)。
   *
   * @param { object } target - 目标对象，仅支持
   *     [@ComponentV2](docroot://ui/state-management/arkts-create-custom-components.md#componentv2)和
   *     [@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)实例。
   *     </br>对于不支持的类型，会抛出运行时错误。
   * @param { string | string[] } path - 添加监听的变量名路径。可指定一个路径或者传入string数组用于一次性指定多个监听的变量路径。
   *     </br>仅支持string和string数组，对于不支持的类型，会抛出运行时错误。
   * @param { MonitorCallback } monitorCallback - 给对应的状态变量注册的监听函数，即path路径对应的状态变量改变时，会回调对应的函数。
   *     </br>对于不支持的类型，会抛出运行时错误。
   * @param { MonitorOptions} [options] - 监听函数的配置项，具体可见[MonitorOptions]{@link MonitorOptions}。默认为异步回调。
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
   * 删除通过[addMonitor]{@link UIUtils#addMonitor}给状态管理V2的状态变量添加的监听方法，详见
   * [addMonitor/clearMonitor](docroot://ui/state-management/arkts-new-addMonitor-clearMonitor.md)。
   *
   * @param { object } target - 目标对象，仅支持
   *     [@ComponentV2](docroot://ui/state-management/arkts-create-custom-components.md#componentv2)和
   *     [@ObservedV2](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)实例。
   *     </br>对于不支持的类型，会抛出运行时错误。
   * @param { string | string[] } path - 删除监听的变量名路径。可指定一个路径或者传入string数组用于一次性指定删除多个状态变量的监听函数。
   *     </br>仅支持string和数组，对于不支持的类型，会抛出运行时错误。
   * @param { MonitorCallback } [monitorCallback] - 指定被删除的监听函数。
   *     </br>当开发者不传此参数时，将删除path对应变量注册的所有监听函数。
   *     </br>对于不支持的类型，会抛出运行时错误。
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
   * 创建只读的单向数据绑定实例，用于构建[\@Builder](docroot://ui/state-management/arkts-builder.md)函数中参数类型为`Binding`的对应实参。
   *
   * @param { GetterCallback<T> } getter - 获取值的回调函数，每次访问值都会重新执行函数，获取最新值。
   * @returns { Binding<T> } 仅包含一个`value`属性，用于获取当前绑定的值。只能读取值，不能直接修改。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static makeBinding<T>(getter: GetterCallback<T>): Binding<T>;

  /**
   * 创建可修改的双向数据绑定实例，用于构建\@Builder函数中参数类型为`MutableBinding`的对应实参。
   *
   * @param { GetterCallback<T> } getter - 获取值的回调函数，每次访问值都会重新执行函数，获取最新值。
   * @param { SetterCallback<T> } [setter] - 定义如何更新值，当`.value`被修改时自动调用此函数。
   * @returns { MutableBinding<T> } 包含一个`value`属性，支持通过`.value`读取和修改数据，设置值时会检查类型是否匹配泛型`T`。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  static makeBinding<T>(getter: GetterCallback<T>, setter: SetterCallback<T>): MutableBinding<T>;

  /**
   * 同步刷新指定的状态变量，该接口接收一个闭包函数，仅刷新闭包函数内的修改，包括更新[@Computed计算](docroot://ui/state-management/arkts-new-computed.md)、
   * [@Monitor回调](docroot://ui/state-management/arkts-new-monitor.md)以及重新渲染UI节点，详见
   * [applySync/flushUpdates/flushUIUpdates接口：同步刷新](docroot://ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md)。
   *
   * @param { TaskCallback } task - 闭包函数，该闭包中产生的状态变量修改会同步执行。
   * @returns { T } 闭包函数执行得到的返回值。
   * @throws { BusinessError } 140001 - The function is not allowed to be called in @Computed
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 22 dynamic
   */
  static applySync<T>(task: TaskCallback): T;

  /**
   * 同步刷新在调用该函数之前所有的状态变量修改，包括更新@Computed计算、@Monitor回调以及重新渲染UI节点，详见
   * [applySync/flushUpdates/flushUIUpdates接口：同步刷新](docroot://ui/state-management/arkts-new-applySync-flushUpdates-flushUIUpdates.md)。
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
   * 立即处理在调用该函数之前所有的状态变量修改，同步[标脏](docroot://ui/state-management/arkts-state-management-introduce.md#触发更新)对应的UI节点，但不会同步执行
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
   * 判断数据对象是否为可观察对象，并返回观察结果。详见[canBeObserved接口：判断对象是否为可被观察对象](docroot://ui/state-management/arkts-new-canBeObserved.md)。
   *
   * @param { T } source - 输入一个数据对象，判断其是否可被观察。支持Array、Map、Set和Date类型数据。
   *     </br>具体使用规则，详见
   *     [canBeObserved接口：判断对象是否为可被观察对象](docroot://ui/state-management/arkts-new-canBeObserved.md)。
   * @returns { ObservedResult } 返回对象是否可被观察的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  static canBeObserved<T extends object>(source: T): ObservedResult;

  /**
   * getLifecycle用于获取[自定义组件的生命周期]{@link ComponentInit}实例。
   *
   * @param { T } customComponent - 自定义组件实例。
   * @returns { CustomComponentLifecycle } 自定义组件的生命周期实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  static getLifecycle<T extends BaseCustomComponent>(customComponent: T): CustomComponentLifecycle;

  /**
   * 返回给定@Component(V1)或@ComponentV2的[CustomComponentContext]{@link CustomComponentContext}。使用它来访问组件的复用池。有关复用池的详细信息，请参阅
   * [全局复用池：集中化的组件回收与复用](docroot://ui/state-management/arkts-global-reuse-pool.md)。
   *
   * @param { T } customComponent - 要获取其上下文的@Component或@ComponentV2实例。
   * @returns { CustomComponentContext } 给定组件实例的上下文对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  static getCustomComponentContext<T extends BaseCustomComponent>(customComponent: T): CustomComponentContext;
}

/**
 * 同步执行的回调方法。
 *
 * @returns { T } 闭包函数执行得到的返回值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 22 dynamic
 */
declare type TaskCallback = () => T;

/**
 * 参数为[IMonitor]{@link IMonitor}类型的监听回调函数。
 *
 * @param { IMonitor} monitorValue - 回调函数传入的变化信息。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type MonitorCallback = (monitorValue: IMonitor) => void;

/**
 * [addMonitor]{@link UIUtils#addMonitor}的可选参数，用于配置回调类型以及是否使能通配符能力。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export interface MonitorOptions {

  /**
   * 配置当前回调函数是否为同步回调。true为同步回调。默认值为false，即异步回调。
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
   * 配置当前addMonitor是否使能通配符能力。true为使能通配符能力，false为关闭通配符能力。默认值为false，即关闭通配符能力。当关闭通配符能力，但路径中含有通配符时，该路径将视为不合法路径。
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
 * 获取值的回调方法。
 *
 * @returns { T } T类型的值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type GetterCallback<T> = () => T;

/**
 * 设置值的回调方法。
 *
 * @param { T } newValue - 类型为T的参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare type SetterCallback<T> = (newValue: T) => void;

/**
 * 只读数据绑定的泛型类，可以绑定任意类型的数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare class Binding<T> {

  /**
   * 提供get访问器，用于获取绑定的值。
   *
   * @returns { T } 返回值类型为泛型参数T，与Binding<T>定义的类型一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  get value(): T;
}

/**
 * 可变数据绑定的泛型类，允许对绑定值进行读写操作，提供完整的get和set访问器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 20 dynamic
 */
export declare class MutableBinding<T> {

  /**
   * 提供get访问器，用于获取绑定的值。
   *
   * @returns { T } 返回值类型为泛型参数T，与Binding<T>定义的类型一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  get value(): T;

  /**
   * 提供set访问器，用于设置当前绑定值的值。构造MutableBinding类实例时必须提供set访问器，否则触发set访问器会造成运行时错误。
   *
   * @param { T } newValue - 参数类型为泛型参数T，与MutableBinding<T>定义的类型一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 20 dynamic
   */
  set value(newValue: T);
}

/**
 * 对象是否可被观察的结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export interface ObservedResult {

  /**
   * 对象是否可被观察。
   * 
   * true：表示是可被观察对象。
   * 
   * false：表示不是可被观察对象。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  isObserved: boolean;

  /**
   * 对象是否可被观察的原因。
   * 
   * 不可被观察原因：对象本身是不可被观察的。
   * 
   * 可被观察原因或使用场景：
   * 
   * 1. V1对象被[@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md)装饰器装饰或对象是被[makeV1Observed]{@link UIUtils#makeV1Observed}方法转换的。 
   * 2. V1对象被[@Observed](docroot://ui/state-management/arkts-observed-and-objectlink.md)装饰器装饰或对象是被[makeV1Observed]{@link UIUtils#makeV1Observed}方法转换的，但对象没有被UI组件使用。 
   * 3. V1对象被[enableV2Compatibility]{@link UIUtils#enableV2Compatibility}方法转换后传入V2组件。 
   * 4. V1对象被[enableV2Compatibility]{@link UIUtils#enableV2Compatibility}方法转换后传入V2组件，但没有被V2组件使用。 
   * 5. V2对象是被[@ObservedV2/@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)装饰的。
   * 6. V2对象是被[makeObserved]{@link UIUtils#makeObserved}方法转换的。 
   * 7. V2对象属于Array/Map/Set/Date类型。 
   * 8. V2对象是被[@ObservedV2/@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)装饰的，但对象没有被UI组件使用。 
   * 9. V2对象是被[makeObserved]{@link UIUtils#makeObserved}方法转换的，但没有被UI组件使用。 
   * 10. V2对象属于Array/Map/Set/Date类型，但没有被UI组件使用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  reason: string;

  /**
   * 对象可被观察时，数组中内容为对象关联的装饰器和组件信息。对象不可被观察时，此数组为空。
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
 * 可被观察对象关联的装饰器和组件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export interface DecoratorInfo {

  /**
   * 当对象是V1对象时，值是对象关联的装饰器名称。
   * 
   * 当V1对象使用[@Track](docroot://ui/state-management/arkts-track.md)时，值为：'@Track'。
   * 
   * 当V2对象使用[@Trace](docroot://ui/state-management/arkts-new-observedV2-and-trace.md)时，值为：'@Trace'。
   * 
   * 当V2对象使用[makeObserved]{@link UIUtils#makeObserved}时，值为：'MakeObserved'。
   * 
   * 当V2对象使用[enableV2Compatibility]{@link UIUtils#enableV2Compatibility}时，值为：'EnableV2Compatible'。 
   * 
   * 当V2对象使用built-in类型数据时，值为：'ProxyObservedV2'。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  decoratorName: string;

  /**
   * 被装饰器装饰的属性名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  stateVariableName: string;

  /**
   * V1对象返回被使用的组件名称。
   * 
   * V1对象有属性使用[@Track](docroot://ui/state-management/arkts-track.md)装饰器时返回对象名称。
   * 
   * V2对象返回对象名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  owningComponentOrClassName: string;

  /**
   * V1对象返回被使用的组件id。
   * 
   * **V1对象有属性使用[@Track](docroot://ui/state-management/arkts-track.md)装饰器时和V2对象返回的是对象名称，无组件id，返回-1。**
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  owningComponentId: number;

  /**
   * 使用该可观察对象的组件信息。若对象没有用在任何UI上，则返回空数组。
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
 * 可被观察对象关联的组件信息，包含系统组件和自定义组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export interface ElementInfo {

  /**
   * 组件的名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  elementName: string;

  /**
   * 组件的ID。
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
 * CustomComponentLifecycle用于监控自定义组件生命周期的变化。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare interface CustomComponentLifecycle {

  /**
   * getCurrentState函数用于获得自定义组件当前的生命周期状态。
   *
   * @returns { CustomComponentLifecycleState } - 自定义组件当前的生命周期状态。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  getCurrentState(): CustomComponentLifecycleState;

  /**
   * addObserver函数用于注册自定义组件生命周期监听器。当自定义组件的生命周期发生变化时，会触发监听器中相应的生命周期回调函数。
   *
   * @param { CustomComponentLifecycleObserver } observer - 监听自定义组件的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  addObserver(observer: CustomComponentLifecycleObserver): void;

  /**
   * removeObserver函数用于移除自定义组件生命周期监听器。解除注册后，即使自定义组件的生命周期状态发生变化，也不会触发监听器中相应的生命周期回调函数。
   *
   * @param { CustomComponentLifecycleObserver } observer - 监听自定义组件的监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  removeObserver(observer: CustomComponentLifecycleObserver): void;
}

/**
 * 用户注册自定义组件生命周期回调后，当该自定义组件的生命周期发生变化时，将触发监听器中相应的生命周期回调。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare interface CustomComponentLifecycleObserver {

  /**
   * aboutToAppear函数在创建自定义组件的新实例后，执行其build()函数之前执行。开发者可以在此阶段修改状态变量。
   * 其功能与[aboutToAppear]{@link BaseCustomComponent.aboutToAppear}类似，但是在自定义组件状态机的约束下触发的。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToAppear?(): void;

  /**
   * onDidBuild函数在自定义组件的新实例构建完成后，执行其build()函数之后执行。开发者可以在此阶段实现一些不影响实际UI的功能，例如事件数据上报。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  onDidBuild?(): void;

  /**
   * aboutToDisappear函数在自定义组件被销毁之前执行。不建议在aboutToDisappear函数中修改状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。
   * 其功能与[aboutToDisappear]{@link BaseCustomComponent.aboutToDisappear}类似，不同的是，
   * CustomComponentLifecycleObserver中的aboutToDisappear函数受状态机约束，
   * 只有被监听的自定义组件状态向CustomComponentLifecycleState.DISAPPEARED转变前触发回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToDisappear?(): void;

  /**
   * 当可复用的自定义组件从缓存中重新添加到节点树时调用aboutToReuse函数，以接收组件的构造参数。当params存在时，表示V1组件的复用回调。
   *
   * @param { Record<string, Object | undefined |null> } [params] - 当params存在时，表示V1组件的复用回调。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  aboutToReuse?(params?: Record<string, Object | undefined | null>): void;

  /**
   * 当组件被回收后触发，先执行应用程序中定义的必要回收操作，完成回收后调用aboutToRecycle函数。随后该组件被冻结，以避免该组件处于回收池时进行UI更新。
   * 最后，aboutToRecycle函数会递归遍历所有子组件，对每个完成回收的组件调用aboutToRecycle函数。
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
 * 自定义组件当前的生命周期状态。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare enum CustomComponentLifecycleState {

  /**
   * 初始化状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  INIT = 0,

  /**
   * 准备展开状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  APPEARED = 1,

  /**
   * 已展开状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  BUILT = 2,

  /**
   * 回收状态。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 dynamic
   */
  RECYCLED = 3,

  /**
   * 删除状态。
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
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentInit: MethodDecorator;

/**
 * 与aboutToAppear相似，\@ComponentAppear装饰的函数在创建自定义组件的新实例后，在其build()函数执行前调用，不同的是，
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentAppear: MethodDecorator;

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentBuilt: MethodDecorator;

/**
 * 当可复用的自定义组件从缓存中重新添加到节点树时调用@ComponentReuse装饰的函数，
 * 即从CustomComponentLifecycleState.RECYCLED到CustomComponentLifecycleState.BUILT阶段触发，以接收组件的构造参数。
 * 最后，复用会递归遍历所有子组件，对每个完成复用的子组件，会调用子组件中@ComponentReuse装饰的函数。
 * 
 * > **说明：**
 * >
 * > -  在状态管理V1的组件里，@ComponentReuse装饰的函数允许有一个入参或者无参。入参params建议为Record<string, Object | undefined | null>类型。
 * >
 * > -  在状态管理V2的组件里，@ComponentReuse装饰的函数没有入参。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentReuse: MethodDecorator;

/**
 * 当组件被回收后触发，先执行应用程序中定义的必要回收操作，完成回收后调用此装饰器装饰的函数，
 * 即从CustomComponentLifecycleState.BUILT到CustomComponentLifecycleState.RECYCLED阶段触发。
 * 最后，回收会递归遍历所有子组件，对每个完成回收的子组件调用子组件中@ComponentRecycle装饰的函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentRecycle: MethodDecorator;

/**
 * 自定义组件由非激活状态转变为激活状态后，调用此装饰器装饰的函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const ComponentActive: MethodDecorator;

/**
 * 自定义组件由激活状态转变为非激活状态后，调用此装饰器装饰的函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare const ComponentInactive: MethodDecorator;

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 23 dynamic
 */
export declare const ComponentDisappear: MethodDecorator;

/**
 * `CustomComponentContext`类提供对组件级服务的访问，包括复用池。通过
 * [UIUtils.getCustomComponentContext]{@link UIUtils#getCustomComponentContext}获取实例。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface CustomComponentContext {

  /**
   * 返回该自定义组件拥有的全局复用池。如果组件没有通过`reusePool`和`poolAccepts`配置复用池，则返回`undefined`。配置全局复用池方式请参考
   * [全局复用开发指南](docroot://ui/state-management/arkts-global-reuse-pool.md)。
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
 * `IReusePool` 接口提供自定义组件上的全局复用池的相关功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface IReusePool {

  /**
   * 检索此复用池中给定可复用组件类型的回收实例信息。
   *
   * @param { ReusableComponentConstructor } constructor - 要查询的可复用自定义组件的名称。
   * @param { string } [reuseId] - 可选的reuseId用于过滤结果。如果指定，则仅返回此特定reuseId复用池的信息。默认值是undefined，返回所有reuseId复用池信息。
   * @returns { IReusableInfo[] | IReusableInfo | undefined } If the reuse pool is not configured to accept the given
   *     component type, **undefined** is returned.
   *     <br>If **reuseId** is specified, a single **IReusableInfo** is returned (even if **count** is set to **0** and
   *     **maxCount** is set to the default value).
   *     <br>If **reuseId** is not specified and the reusable component does not use **reuseId**, a single **IReusableInfo**
   *     is returned.
   *     <br>If **reuseId** is not specified but the reusable component uses **reuseId**, an **Array<IReusableInfo>** is
   *     returned, providing a separate entry for each **reuseId** that has a positive value of **count** or a non-
   *     default value of **maxCount** as well as an entry of **reuseId: undefined**.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  getReusableInfo(constructor: ReusableComponentConstructor,
    reuseId?: string): IReusableInfo[] | IReusableInfo | undefined;

  /**
   * 预创建@Reusable/@ReusableV2组件并将它们放入此复用池中。
   *
   * @param { WrappedBuilder<[]> } builder - 包含要执行`times`次的@Builder函数的 `WrappedBuilder`。每次执行应创建一个或多个@Reusable/@ReusableV
   *     2组件。
   * @param { number } times - 执行@Builder函数的次数。
   * @returns { Promise<void> } 当空闲任务成功完成时解析的Promise。Promise对象无返回结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  preRender(builder: WrappedBuilder<[]>, times: number): Promise<void>;
}

/**
 * `IReusableInfo`接口提供有关复用池管理的可复用组件的当前数量和数量上限的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare interface IReusableInfo {

  /**
   * 池中当前回收的组件数。如果设置了`reuseId`，则`count`指的是具有此特定reuseId的组件数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  readonly count: number;

  /**
   * 池中允许的最大回收组件数。如果设置了`reuseId`，则`maxCount`指的是具有此特定reuseId的组件数。将此设置为小于当前`count`的值会导致框架异步清除多余组件。在延迟期间，`count`可能暂时超过
   * `maxCount`。默认值：100，最大值：200。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  maxCount: number;

  /**
   * 回收组件时指定的reuseId。如果组件没有使用reuseId回收，则此属性为`undefined`。
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
 * 复用自定义组件初始化函数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare type ReusableComponentConstructor = Function;