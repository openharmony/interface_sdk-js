'use static'
/*
 * Copyright (C) 2025-2026 Huawei Device Co., Ltd.
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
 * @file
 * @kit ArkUI
 */

import { SystemProperties } from '../component/enums';

import { ReusePoolOwnership } from '../component/customComponent';

import window from '../../@ohos.window';

/**
 * 定义一个提供变量相关功能的自定义组件API。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IVariableOwner {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface State {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface PropRef {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Link {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Observed {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Track {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ObjectLink {}

/**
 * Defining StoragePropRef annotation
 * StoragePropRef is an annotation which is mutable.
 * Any object property modifications made through StoragePropRef are visible in the
 * AppStorage, which is different from StorageProp.
 * In order to prevent this, need to take a deep copy of AppStorage instance data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface StoragePropRef {

  /**
     * 用于标识AppStorage的属性。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  property: string;
}

/**
 * Defining StorageLink annotation
 * StorageLink is used to create a two-way data synchronization between the variable
 * it decorates and the attribute with the given key in AppStorage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface StorageLink {

  /**
     * 用于标识AppStorage的属性。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  property: string;
}

/**
 * Defining LocalStoragePropRef annotation
 * LocalStoragePropRef is an annotation which is mutable.
 * Any object property modifications made through LocalStoragePropRef are visible in the
 * LocalStorage, which is different from LocalStorageProp.
 * In order to prevent this, need to take a deep copy of LocalStorage data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface LocalStoragePropRef {

  /**
     * 用于标识LocalStorage的属性。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  property: string;
}

/**
 * Defining LocalStorageLink annotation
 * LocalStorageLink is used to create a two-way data synchronization with the attribute
 * in LocalStorage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface LocalStorageLink {

  /**
     * 用于标识LocalStorage的属性。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  property: string;
}

/**
 * Defining Provide annotation
 * Provide is used for two-way data synchronization with descendant components when
 * state data needs to be transferred between multiple levels. An @Provide decorated state
 * variable exists in the ancestor component and is said to be "provided" to descendent components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Provide {

  /**
     * 用于设置别名，默认值为属性名。 
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alias: string = "";

  /**
     * 用于设置是否允许重载，默认值为false即不允许。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  allowOverride: boolean = false;
}

/**
 * Defining Consume annotation
 * Consume is used to access the provided state variable for a descendent component
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Consume {

  /**
     * 用于设置别名，默认值为属性名。 
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alias: string = "";
}

/**
 * Defining Watch annotation
 * Watch is used to listen for state variables.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Watch {

  /**
     * 用于监听的回调函数名，内容由开发者指定。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  callback: string;
}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Require {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Local {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Param {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Once {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Event {}

/**
 * Defining Provider annotation
 * Provider is used for two-way data synchronization with descendant components when
 * state data needs to be transferred between multiple levels. An @Provider decorated state
 * variable exists in the ancestor component and is said to be "provider" to descendent components.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Provider {

  /**
     * 用于设置别名，默认值为属性名。 
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alias: string = "";
}

/**
 * Defining Consumer annotation
 * Consumer is used to access the provided state variable for a descendent component
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Consumer {

  /**
     * 用于设置别名，默认值为属性名。 
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  alias: string = "";
}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ObservedV2 {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Trace {}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Computed {}

/**
 * Defining Monitor annotation
 * Monitor provides the capability of listening for state variables of V2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Monitor {

  /**
     * 用于设置对象属性名，可同时监听多个对象属性。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  path: string[];
}

/**
 * Defining Env PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@Retention({policy: "SOURCE"})
export declare @interface Env {

  /**
   *
   * @type { SystemProperties } key - key value input by the user. [since 22 - 24]
   * @type { string } key - key value input by the user, only support . [since 26.0.0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  value:  string;
}

/**
 * Define SyncMonitor MethodDecorator. Decorator path parameters are the same as defined for Monitor.
 * The function decorator is functionally equivalent to the UIUtils.addMonitor API with isSynchronous enabled.
 * SyncMonitor must contain at least one path item, with multiple path items separated by commas.
 * Path items are either observed attribute names or array item indices.The path in SyncMonitor
 * supports wildcard at the end of a path item, but path items must never appear at the beginning or
 * in the middle of a path. All other paths using one or more wildcard are invalid.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Retention({policy: "SOURCE"})
export declare @interface SyncMonitor {

  /**
     * 监听V2状态变量变量名
     *
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  path: string[];
}

/**
 * 当监听的变量变化时，状态管理框架侧将回调开发者注册的函数，并传入变化信息。变化信息的类型即为IMonitor类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IMonitor {

  /**
    * 变化路径的数组。
    *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  dirty: Array<string>;

  /**
    * 获取指定path的变化信息。
    *
   * @param { string } [path] 可选，被监听变量的路径。未指定时默认使用变化路径数组dirty中的第一个路径。
   * @returns { IMonitorValue<T> | undefined }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  value<T>(path?: string): IMonitorValue<T> | undefined;
}

/**
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IMonitorValue<T> {

  /**
    * 变量变化前的值。
    *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  before: T;

  /**
    * 变量当前的值。
    *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  now: T;

  /**
    * 变量的路径。
    *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  path: string;
}

/**
 * 定义ComponentInit方法装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentInit {}

/**
 * 定义ComponentAppear方法装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentAppear {}

/**
 * 定义ComponentBuilt方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentBuilt {}

/**
 * 定义ComponentReuse方法装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentReuse {}

/**
 * 定义ComponentRecycle方法装饰器
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentRecycle {}

/**
 * 定义ComponentDisappear方法装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentDisappear {}

/**
 * 定义ComponentActive方法装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentActive {}

/**
 * 定义组件非活动方法装饰器。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Retention({policy: "SOURCE"})
export declare @interface ComponentInactive {}

/**
 * 定义状态变量接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IDecoratedVariable {

  /**
     * Decorated variable name.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly varName: string;
}

/**
 * Define V1 decorated variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IDecoratedV1Variable<T> extends IDecoratedVariable {

  /**
     * Registers the watch callback function with the data source.
     *
   * @param { IDecoratedV1Variable<T> } decoratedVar
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  registerWatchToSource(decoratedVar: IDecoratedV1Variable<T>): void;
}

/**
 * 定义状态变量接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IDecoratedReadableVariable<T> {

  /**
   * 获取变量的值
   *
   * @returns { T } 变量的值
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  get(): T;
}

/**
 * 定义只读状态变量接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IDecoratedImmutableVariable<T> extends IDecoratedReadableVariable<T> {
}

/**
 * 定义可读写状态变量接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IDecoratedMutableVariable<T> extends IDecoratedReadableVariable<T> {

  /**
     * Set the state variable with a new Value.
     *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set(newValue: T): void;
}

/**
 * Define decorated updatable variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IDecoratedUpdatableVariable<T> {

  /**
     * Update the state variable with a new Value.
     *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  update(newValue: T): void;
}

/**
 * Define state decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IStateDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 当组件被复用时，重置状态变量。
   *
   * @param { T } newValue - 默认值
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(newValue: T): void;
}

/**
 * Define PropRef decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IPropRefDecoratedVariable<T> extends IDecoratedMutableVariable<T>,
    IDecoratedUpdatableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 当组件被复用时，重置状态变量。
   *
   * @param { T } newValue - 默认值
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(newValue: T): void;
}

/**
 * Define LocalStoragePropRef decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ILocalStoragePropRefDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 重置@StoragePropRef变量的源
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(): void;
}

/**
 * Define Link decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ILinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 在重用@可重用组件实例时重置链接变量。
   *
   * @param { LinkSourceType<T> } newValue - 默认值
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(newValue: LinkSourceType<T>): void;
}

/**
 * Define Provide decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IProvideDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 在重用@Reusable Component实例时提供Link变量。
   *
   * @param { T } newValue - 默认值
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(newValue: T): void;
}

/**
 * Define Consume decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IConsumeDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 当@Reusable Component实例被重用时，重置Consume变量。
   *
   * @param { string } provideAlias - 同名
   * @param { WatchFuncType } [watchFunc] - watch函数类型
   * @param { ConsumeOptions<T> } [consumeOptions] - 具有默认值的选项
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(provideAlias: string, watchFunc?: WatchFuncType, consumeOptions?: ConsumeOptions<T>): void;
}

/**
 * Define ObjectLink decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IObjectLinkDecoratedVariable<T> extends IDecoratedImmutableVariable<T>,
    IDecoratedUpdatableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 当@可重用组件实例时，重置ObjectLink变量。
   *
   * @param { T } newValue - 默认值
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(newValue: T): void;
}

/**
 * Define StorageLink decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IStorageLinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Define StoragePropRef decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IStoragePropRefDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {

  /**
   * 重置@StoragePropRef变量的源
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  resetOnReuse(): void;
}

/**
 * Define LocalStorageLink decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ILocalStorageLinkDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV1Variable<T> {}

/**
 * Local装饰的变量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ILocalDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV2Variable<T> {}

/**
 * Param装饰的变量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IParamDecoratedVariable<T> extends IDecoratedImmutableVariable<T>, IDecoratedUpdatableVariable<T>, IDecoratedV2Variable<T> {}

/**
 * Param和Once装饰的变量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IParamOnceDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV2Variable<T> {}

/**
 * Define Link source type.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type LinkSourceType<T> = IDecoratedV1Variable<T>;

/**
 * Define mutable state meta interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IMutableStateMeta {

  /**
     * Collect the dependancy for UI component with state variable
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addRef(): void;

  /**
     * Notify UI component to update when state variable is changed
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fireChange(): void;
}

/**
 * Define mutable state meta interface with key.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IMutableKeyedStateMeta {

  /**
     * Collect the dependancy for UI component with state variable based on given key
     *
   * @param { string } key
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addRef(key: string): void;

  /**
     * Collect the dependancy for UI component with state variable based on given key
     *
   * @param { int } index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addRef(index: int): void;

  /**
     * Notify UI component with given key to update when state variable is changed
     *
   * @param { string } key
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fireChange(key: string): void;

  /**
     * Notify UI component with given key to update when state variable is changed
     *
   * @param { int } index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  fireChange(index: int): void;
}

/**
 * Define IObserve interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IObserve {

  /**
     * Rendering component.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly renderingComponent: int;

  /**
     * Rendering component id.
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly renderingId: RenderIdType;

  /**
     * Collect the dependancy for UI component with state variable
     *
   * @param { RenderIdType } iObjectsRenderId
   * @returns { boolean }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  shouldAddRef(iObjectsRenderId: RenderIdType): boolean;
}

/**
 * Define OBSERVED.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare const OBSERVE: IObserve;

/**
 * Define int alias.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type RenderIdType = int;

/**
 * Define IObservedObject interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IObservedObject extends IWatchSubscriberRegister {

  /**
     * Set V1 renderId
     *
   * @param { RenderIdType } renderId
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setV1RenderId(renderId: RenderIdType): void;
}

/**
 * ConsumeOptions类
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ConsumeOptions<T> {

  /**
   * 开发者设置的初始值
   *
   *
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  defaultValue?: T;
}

/**
 * Define STATE_MGMT_FACTORY.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare const STATE_MGMT_FACTORY: IStateMgmtFactory;

/**
 * Define IStateMgmtFactory interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IStateMgmtFactory {

  /**
   *
   * @returns { IMutableStateMeta }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeMutableStateMeta(): IMutableStateMeta;

  /**
   * 获取可变状态元
   *
   * @param { IObservedObject | undefined } observedObject - 此元的所有者。
   * @param { string } propertyName - 元名称。
   * @returns { IMutableStateMeta }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  makeMutableStateMeta(observedObject: IObservedObject | undefined, propertyName: string): IMutableStateMeta;

  /**
   * get subscribed watches
   *
   * @returns { ISubscribedWatches }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeSubscribedWatches(): ISubscribedWatches;

  /**
   * 创建@State状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { IStateDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeState<T>(owner: IVariableOwner, varName: string, initValue: T,
    watchFunc?: WatchFuncType): IStateDecoratedVariable<T>;

  /**
   * 创建@PropRef状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { IPropRefDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makePropRef<T>(owner: IVariableOwner, varName: string, initValue: T,
    watchFunc?: WatchFuncType): IPropRefDecoratedVariable<T>;

  /**
   * 创建@Link状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { LinkSourceType<T> } source - 状态变量的初始值
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { ILinkDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeLink<T>(owner: IVariableOwner, varName: string, source: LinkSourceType<T>,
    watchFunc?: WatchFuncType): ILinkDecoratedVariable<T>;

  /**
   * 创建@Provide状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { string } provideAlias - 变量别名
   * @param { T } initValue - 状态变量的初始值
   * @param { boolean } allowOverride - 是否覆盖父组件上的同名@Provide状态变量
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { IProvideDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeProvide<T>(owner: IVariableOwner, varName: string, provideAlias: string, initValue: T, 
      allowOverride: boolean, watchFunc?: WatchFuncType): IProvideDecoratedVariable<T>;

  /**
   * 创建@Consume状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { string } provideAlias - 变量别名
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { IConsumeDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeConsume<T>(owner: IVariableOwner, varName: string,
    provideAlias: string, watchFunc?: WatchFuncType): IConsumeDecoratedVariable<T>;

  /**
   * 创建@Consume状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { string } provideAlias - 变量别名
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @param { ConsumeOptions<T> } [consumeOptions] - 包含开发者设置的初始值的接口
   * @returns { IConsumeDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeConsume<T>(owner: IVariableOwner, varName: string,
    provideAlias: string, watchFunc?: WatchFuncType, consumeOptions?: ConsumeOptions<T>): IConsumeDecoratedVariable<T>;

  /**
   * 创建@ObjectLink状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { IObjectLinkDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeObjectLink<T>(owner: IVariableOwner, varName: string,
    initValue: T, watchFunc?: WatchFuncType): IObjectLinkDecoratedVariable<T>;

  /**
   * 创建@StorageLink状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } propName - 属性名字
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { IStorageLinkDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeStorageLink<T>(owner: IVariableOwner, propName: string,
    varName: string, initValue: T, watchFunc?: WatchFuncType): IStorageLinkDecoratedVariable<T>;

  /**
   * 创建@Storage PropRef状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } propName - 属性名字
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { IStoragePropRefDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeStoragePropRef<T>(owner: IVariableOwner, propName: string,
    varName: string, initValue: T, watchFunc?: WatchFuncType): IStoragePropRefDecoratedVariable<T>;

  /**
   * Create a LocalStoragePropRef variable instance.
   *
   * @param { IVariableOwner } owner - owner of this variable.
   * @param { string } propName - property name.
   * @param { string } varName - state variable name.
   * @param { T } initValue - init value.
   * @param { WatchFuncType } [watchFunc] - watch type
   * @returns { ILocalStoragePropRefDecoratedVariable<T> } LocalStoragePropRef instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeLocalStoragePropRef<T>(owner: IVariableOwner, propName: string, varName: string, initValue: T, watchFunc?: WatchFuncType): ILocalStoragePropRefDecoratedVariable<T>;

  /**
   * 创建@LocalStorageLink状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } propName - 属性名字
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @param { WatchFuncType } [watchFunc] - 监听函数
   * @returns { ILocalStorageLinkDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeLocalStorageLink<T>(owner: IVariableOwner, propName: string,
        varName: string, initValue: T, watchFunc?: WatchFuncType): ILocalStorageLinkDecoratedVariable<T>;

  /**
   *
   * @param { IVariableOwner } owner - owner of this variable.
   * @param { string } varName - state variable name.
   * @param { T } localInitValue - state variable initValue.
   * @returns { ILocalDecoratedVariable<T> } Local instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeLocal<T>(owner: IVariableOwner, varName: string, localInitValue: T): ILocalDecoratedVariable<T>;

  /**
   * Create a static local variable instance.
   *
   * @param { string } varName - state variable name.
   * @param { T } localInitValue - state variable initValue.
   * @returns { ILocalDecoratedVariable<T> } Local instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeStaticLocal<T>(varName: string, localInitValue: T): ILocalDecoratedVariable<T>;

  /**
   * 创建@Param状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @returns { IParamDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeParam<T>(owner: IVariableOwner, varName: string, initValue: T): IParamDecoratedVariable<T>;

  /**
   * 创建@Once @Param状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { T } initValue - 状态变量的初始值
   * @returns { IParamOnceDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeParamOnce<T>(owner: IVariableOwner, varName: string, initValue: T): IParamOnceDecoratedVariable<T>;

  /**
   * 创建@Provider 状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { string } providerAlias - 变量别名
   * @param { T } localInitValue - 状态变量的初始值
   * @returns { IProviderDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeProvider<T>(owner: IVariableOwner, varName: string, providerAlias: string, 
                  localInitValue: T): IProviderDecoratedVariable<T>;

  /**
   * 创建@Consumer状态变量实例
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @param { string } varName - 状态变量的名字
   * @param { string } providerAlias - 变量别名
   * @param { T } defaultValue - 状态变量的初始值
   * @returns { IConsumerDecoratedVariable<T> } 状态变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeConsumer<T>(
    owner: IVariableOwner, varName: string, providerAlias: string, defaultValue: T
  ): IConsumerDecoratedVariable<T>;

  /**
  * Create a computed variable instance.
  *
   * @param { ComputedCallback<T> } computedCallback - computed callback function
   * @param { string } computeName - name of the computed function
   * @returns { IComputedDecoratedVariable<T> } Computed instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeComputed<T>(computedCallback: ComputedCallback<T>, computeName: string): IComputedDecoratedVariable<T>;

  /**
  * Create a monitored variable instance.
  *
   * @param { Array<IMonitorPathInfo> } pathInfos - monitor path to its accessor
   * @param { MonitorCallback } monitorCallback - callback when then monitor triggers
   * @param { IVariableOwner } [owner] - owner of this monitor
   * @returns { IMonitorDecoratedVariable } Monitor variable instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  makeMonitor(pathInfos: Array<IMonitorPathInfo>, monitorCallback: MonitorCallback, owner?: IVariableOwner): IMonitorDecoratedVariable;

  /**
   *
   * @param { Array<IMonitorPathInfo> } pathInfos - monitor path to its accessor
   * @param { MonitorCallback } monitorCallback - callback when the monitor triggers
   * @param { MakeMonitorOptions } [options] - options of this monitor
   * @returns { IMonitorDecoratedVariable } Monitor variable instance
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  makeMonitor(pathInfos: Array<IMonitorPathInfo>, monitorCallback: MonitorCallback, options?: MakeMonitorOptions): IMonitorDecoratedVariable;

  /**
   * 创建一个Env变量实例。
   * 在API 26.0.0及更高版本上，envValue参数支持SystemEnvKey类型。
   *
   * @param { IVariableOwner } owner - 自定义组件。
   * @param { string } envValue - type of environment value to obtain [since 22 - 24]
   * @param { string | SystemEnvKey<T> } envValue - 支持的环境变量类型 [APi22 - API24]
   * @param { string } varName - @Env装饰的变量名。
   * @param { EnvOptions<T> } [envOptions] - makeEnv的其他选项。
   * @returns { IEnvDecoratedVariable<T> } Env变量实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  makeEnv<T>(owner: IVariableOwner, envValue: string | SystemEnvKey<T>, varName: string, envOptions?: EnvOptions<T>): IEnvDecoratedVariable<T>;

  /**
   * 创建一个CustomEnv变量实例。
   *
   * @param { IVariableOwner } owner - 该变量的自定义组件所有者。
   * @param { CustomEnvKey<T> } envKey - 自定义环境变量键。
   * @param { string } varName - 被@CustomEnv装饰的变量名。
   * @param { T } localInitValue - @CustomEnv本地初始值。
   * @returns { ICustomEnvDecoratedVariable<T> } CustomEnv变量实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  makeCustomEnv<T>(owner: IVariableOwner, envKey: CustomEnvKey<T>, varName: string, localInitValue: T): ICustomEnvDecoratedVariable<T>;

  /**
   * 创建同步监控变量实例。
   *
   * @param { IMonitorPathInfo[] } pathInfos - 到其访问器的监视器路径。
   * @param { MonitorCallback } monitorCallback - 监视器触发时的回调。
   * @param { MakeMonitorOptions } [options] - 此监视器的选项。
   * @returns { IMonitorDecoratedVariable } 监控变量实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  makeSyncMonitor(pathInfos: IMonitorPathInfo[], monitorCallback: MonitorCallback,
    options?: MakeMonitorOptions): IMonitorDecoratedVariable;

  /**
   * 在自定义组件上创建全局重用池。
   *
   * @param { ReusePoolOwnership } reusePool - 复用池类型
   * @param { Class[] } poolAccepts - 重用池接受的自定义组件
   * @param { IVariableOwner } owningView - 拥有全局池的自定义组件
   * @returns { IGlobalReusePoolVariable } 全局重用池句柄。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  makeGlobalReusePool(reusePool: ReusePoolOwnership,
    poolAccepts: Class[], owningView: IVariableOwner): IGlobalReusePoolVariable;
}

/**
 * V2装饰的变量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface IDecoratedV2Variable<T> extends IDecoratedVariable {

  /**
   * 当ComponentV2被重用时重置V2装饰变量。
   *
   * @param { T } newValue
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  resetOnReuse(newValue: T): void;
}

/**
 * Provider装饰的变量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IProviderDecoratedVariable<T>  extends IDecoratedMutableVariable<T>, IDecoratedV2Variable<T> {}

/**
 * Define Env decoration variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface IEnvDecoratedVariable<T> extends IDecoratedImmutableVariable<T>, IDecoratedV2Variable<T> {}

/**
 * 定义CustomEnv装饰变量接口。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface ICustomEnvDecoratedVariable<T> extends IDecoratedImmutableVariable<T>, IDecoratedV2Variable<T> {}

/**
 * Consumer装饰的变量。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IConsumerDecoratedVariable<T> extends IDecoratedMutableVariable<T>, IDecoratedV2Variable<T> {}

/**
 * Defines computed callback funciton
 * @returns { T }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
type ComputedCallback<T> = () => T;

/**
 * 触发监听时被调用的回调函数。
 *
 * @param { IMonitor } iMonitor 保存触发监听前后的值以及路径。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type MonitorCallback = (iMonitor: IMonitor) => void;

/**
 * 监听状态变量的回调类型。
 *
 * @returns { Any }
 被监听状态变量。
 * @stagemodelonly
 * @since 23 static
 */
export type MonitorValueCallback = () => Any;

/**
 * Defines the callback that is called when state variable is change
 * @param {string} propertyName - property name
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type WatchFuncType = (propertyName: string) => void;

/**
 * Define int alias.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type WatchIdType = int;

/**
 * Define IWatchSubscriberRegister interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IWatchSubscriberRegister {

  /**
   * Registers the watch function callback.
   *
   * @param { WatchIdType } watchId - the watch function id
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  addWatchSubscriber(watchId: WatchIdType): void;

  /**
   * UnRegister the watch function callback.
   *
   * @param { WatchIdType } watchId - the watch function id
   * @returns { boolean }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  removeWatchSubscriber(watchId: WatchIdType): boolean;
}

/**
 * Define ISubscribedWatches interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface ISubscribedWatches extends IWatchSubscriberRegister {

  /**
   * Execute the watch function callback.
   *
   * @param { string } propertyName - property name
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  executeOnSubscribingWatches(propertyName: string): void;
}

/**
 * 定义@Computed状态变量的接口
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IComputedDecoratedVariable<T> extends IDecoratedReadableVariable<T> {

  /**
   * 设置状态变量的所有者，用于检测所在自定义组件是否冻结
   *
   * @param { IVariableOwner } owner - 状态变量的所有者
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  setOwner(owner: IVariableOwner): void;

  /**
   * ComponentV2被重用时重置Computed变量。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  resetOnReuse(): void;
}

/**
 * Defines @Monitor decorated variable interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IMonitorDecoratedVariable {

  /**
   * 获取所有被监听的状态变量的路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  readonly path: string[];

  /**
   * ComponentV2被重用时重置Monitor。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  resetOnReuse(): void;
}

/**
 * Defines Monitor path with its accessor interface.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface IMonitorPathInfo {

  /**
   * Changed paths(keys)
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  path: string;

  /**
   * Callback function to access monitored value.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  valueCallback: MonitorValueCallback;

  /**
   * 启用通配符功能。
   * 设置为true可启用通配符功能，设置为false可禁用通配符功能。
   * 默认值为false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  enableWildcard?: boolean;
}

/**
 * Env创建可选参数
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface EnvOptions<T> {

  /**
   * 用户定义初始值，预留参数。
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  initValue?: T;
}

/**
 * 定义makeMonitor可选配置
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export declare interface MakeMonitorOptions {

  /**
   * Monitor变量的父struct节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  owner?: IVariableOwner;

  /**
   * Monitor回调函数的名称
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  functionName?: string;
}

/**
 * 定义IObservableAnyProp类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface IObservedAnyProp {

  /**
   * 添加对任何一级属性更改的引用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  addRefAnyProp(): void;
}

/**
 * 全局复用池句柄。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface IGlobalReusePoolVariable {}

/**
 * 自定义环境变量的Key的类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class CustomEnvKey<S> {

  /**
   * 创建一个自定义环境变量Key，作为@CustomEnv装饰器的参数。
   *
   * @returns { CustomEnvKey<T> } CustomEnvKey
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static create<T>(): CustomEnvKey<T>;

  /**
    * 用于创建该类的实例对象。
    *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  protected constructor();
}

/**
 * 系统环境变量Key的基类。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class SystemEnvKey<T> {

  /**
    * 用于创建该类的实例对象。
    *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  protected constructor();
}

/**
 * 可写系统环境变量Key，继承自[SystemEnvKey]{@link SystemEnvKey}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class WritableSystemEnvKey<T> extends SystemEnvKey<T> {}

/**
 * 只读系统环境变量Key，继承自[SystemEnvKey]{@link SystemEnvKey}。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ReadonlySystemEnvKey<T> extends SystemEnvKey<T> {}

/**
 * 可写系统环境变量Key类，用于@Env装饰器的字符串参数格式`'WritableEnvKey.<keyName>'`中的key声明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class WritableEnvKey {}

/**
 * 只读系统环境变量Key类，用于@Env装饰器的字符串参数格式`'ReadonlyEnvKey.<keyName>'`中的key声明。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ReadonlyEnvKey {

  /**
   * 系统环境变量避让区域键，用于获取窗口的避让区域，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_AVOID_AREA: ReadonlySystemEnvKey<window.UIEnvWindowAvoidAreaInfoVP>;

  /**
   * 系统环境变量避让区域键，用于获取窗口的避让区域，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_AVOID_AREA_PX: ReadonlySystemEnvKey<window.UIEnvWindowAvoidAreaInfoPX>;

  /**
   * 系统环境变量窗口尺寸键，用于获取窗口的大小，单位为vp。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_SIZE: ReadonlySystemEnvKey<window.SizeInVP>;

  /**
   * 系统环境变量窗口尺寸键，用于获取窗口大小，单位px。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_SIZE_PX: ReadonlySystemEnvKey<window.Size>;

  /**
   * 系统环境变量屏幕ID键，用于获取窗口所在的屏幕ID。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_DISPLAY_ID: ReadonlySystemEnvKey<long>;

  /**
   * 系统环境变量系统DPI键，用于获取窗口所在屏幕的DPI。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_SYSTEM_DENSITY: ReadonlySystemEnvKey<double>;

  /**
   * 系统环境变量窗口焦点键，用于获取窗口是否获焦。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_IS_FOCUSED: ReadonlySystemEnvKey<boolean>;

  /**
   * 系统环境变量窗口激活键，用于获取窗口是否被激活。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static readonly WINDOW_IS_HIGHLIGHTED: ReadonlySystemEnvKey<boolean>;
}

/**
 * Defining CustomEnv PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Retention({policy: "SOURCE"})
export declare @interface CustomEnv {

  /**
   * 自定义环境变量装饰器。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  value: string;
}