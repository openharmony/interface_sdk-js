'use static';
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { MonitorValueCallback, MonitorCallback, IMonitorDecoratedVariable, IVariableOwner } from './decorator';

import { CustomComponentLifecycle } from '../component/customComponent';

import { WrappedBuilder, CustomBuilder } from '../component/builder';

/**
 * UIUtils是状态管理提供的工具，用于处理可观察数据。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class UIUtils {

  /**
   * 获取状态管理框架包装前的原始对象。支持built-in类型（Array、Map、Set、Date）以及interface字面量。
   *
   * @param { T } source 状态管理框架包装的对象。
   * @returns { T } 状态管理框架包装前的原始对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static getTarget<T extends object>(source: T): T;

  /**
   * 将不可观察数据转化为可观察数据。支持built-in类型（Array、Map、Set、Date）以及interface字面量。
   * 
   * > **说明：**
   * 
   * > 默认情况下，返回对象支持深度观察，可观察嵌套属性变化。
   * 
   * > 如果传入了undefined或null，则直接返回传入值。
   *
   * @param { T } source - 数据源对象。
   * @returns { T } 可观察的数据对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static makeObserved<T extends object | null | undefined>(source: T): T;

  /**
   * 将不可观察数据转化为可观察数据，并通过`allowDeep`控制观察深度。支持built-in类型（Array、Map、Set、Date）以及interface字面量。
   * 
   * > **说明：**
   * 
   * > 如果传入了undefined或null，则直接返回传入值。
   *
   * @param { T } source - 数据源对象。
   * @param { boolean } allowDeep - 是否深度观察。传入`true`时为深度观察；传入`false`时仅观察第一层属性变化。
   * @returns { T } 可观察的数据对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static makeObserved<T extends object | null | undefined>(source: T, allowDeep: boolean): T;

  /**
   * 创建只读的单向数据绑定实例，用于在@Builder函数中为参数类型为Binding的参数提供实参。
   *
   * @param { GetterCallback<T> } getter - 获取值的回调函数，每次访问值时重新执行以获取最新值。
   * @returns { Binding<T> } 包含一个value属性，用于获取当前绑定的值，且只能读取，不能修改。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static makeBinding<T>(getter: GetterCallback<T>): Binding<T>;

  /**
   * 创建双向数据绑定实例，用于构建@Builder函数中类型为MutableBinding的参数。
   *
   * @param { GetterCallback<T> } getter - 获取值的回调函数，每次访问值时重新执行。
   * @param { SetterCallback<T> } setter - 定义如何更新值，当.value被修改时调用。
   * @returns { MutableBinding<T> } 包含一个value属性，支持读取和修改数据，设置值时检查类型是否匹配泛型`T`。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static makeBinding<T>(getter: GetterCallback<T>, setter: SetterCallback<T>): MutableBinding<T>;

  /**
   * 动态地为状态变量注册监听。
   *
   * @param { MonitorValueCallback | MonitorValueCallback[] } valueCallback 返回被监听状态变量的箭头函数或箭头函数数组。
   * @param { MonitorCallback } monitorCallback 触发监听时调用的回调函数。
   * @param { MonitorOptions } [options] 设置函数的行为，默认行行为详见[MonitorOptions]{@link MonitorOptions}。
   * @returns { IMonitorDecoratedVariable } 指代监听关系的句柄。
   * @throws { BusinessError } 130000 - options.owner is not ComponentV2 struct.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static addMonitor(valueCallback: MonitorValueCallback | MonitorValueCallback[], 
    monitorCallback: MonitorCallback, options?: MonitorOptions): IMonitorDecoratedVariable;

  /**
   * 动态地为状态变量注册监听。
   *
   * @param { MonitorValueInfo | MonitorValueInfo[] } valueInfo - 监听变量的信息或其数组。
   * @param { MonitorCallback } monitorCallback - 触发监听时调用的回调函数。
   * @param { MonitorBaseOptions } [options] - 设置函数的行为，默认行为详见[MonitorBaseOptions]{@link MonitorBaseOptions}。
   * @returns { IMonitorDecoratedVariable } 指代监听关系的句柄。
   * @throws { BusinessError } 130000 - options.owner is not ComponentV2 struct.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static addMonitor(valueInfo: MonitorValueInfo | MonitorValueInfo[], 
    monitorCallback: MonitorCallback, options?: MonitorBaseOptions): IMonitorDecoratedVariable;

  /**
   * 动态地为状态变量解绑监听。
   *
   * @param { IMonitorDecoratedVariable } monitor 指代监听关系的句柄。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  static clearMonitor(monitor: IMonitorDecoratedVariable): void;

  /**
    * 判断数据对象是否为可观察对象，并返回观察结果。详见
    * [canBeObserved接口：判断对象是否为可被观察对象](docroot://ui/state-management-static/arkts-static-new-canBeObserved.md)。
    *
   * @param { T } source - 输入一个数据对象，判断其是否可被观察。
    *     </br>具体使用规则，详见
    *     [canBeObserved接口：判断对象是否为可被观察对象](docroot://ui/state-management-static/arkts-static-new-canBeObserved.md)。
   * @returns { ObservedResult } 返回对象是否可被观察的结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static canBeObserved<T extends object>(source: T): ObservedResult;

  /**
   * getLifecycle用于获取[自定义组件的生命周期]{@link ComponentInit}实例。
   *
   * @param { T } customComponent - 自定义组件实例。
   * @returns { CustomComponentLifecycle } 自定义组件的生命周期实例。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  static getLifecycle<T extends IVariableOwner>(customComponent: T): CustomComponentLifecycle;

  /**
   * 获取自定义组件的上下文信息。
   *
   * @param { T } customComponent - 自定义组件对象。
   * @returns { CustomComponentContext } 传入自定义组件的上下文信息。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  static getCustomComponentContext<T extends IVariableOwner>(customComponent: T): CustomComponentContext;
}

/**
 * 获取绑定值的回调方法。
 *
 * @returns { T }
 返回当前组件。
 * @stagemodelonly
 * @since 23 static
 */
export declare type GetterCallback<T> = () => T;

/**
 * 设置绑定值的回调方法。
 *
 * @param { T } newValue - 类型为T的参数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare type SetterCallback<T> = (newValue: T) => void;

/**
 * 只读数据绑定的泛型类可以绑定任意类型的数据（需要与@builder参数列表同时使用）。当调用函数时，需要使用makeBinding来进行值的传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class Binding<T> {

  /**
   * 提供get访问器以获取当前绑定值。
   *
   * @returns { T }
   返回值类型为泛型参数T，与Binding<T>定义的类型一致。
   * @stagemodelonly
   * @since 23 static
   */
  get value(): T;
}

/**
 * 可变数据绑定的泛型类，允许对绑定值进行读写操作，提供完整的get和set访问器（需要与@builder参数列表同时使用）。当调用函数时，需要使用makeBinding来进行值的传递。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare class MutableBinding<T> {

  /**
   * 提供get访问器以获取当前绑定值。
   *
   * @returns { T }
   返回值类型为泛型参数T，与Binding<T>定义的类型一致。
   * @stagemodelonly
   * @since 23 static
   */
  get value(): T;

  /**
   * 提供set访问器，用于设置当前绑定值。构造MutableBinding类实例时必须提供set访问器，否则会触发运行时错误。
   *
   * @param { T } newValue 参数类型为泛型参数T，与MutableBinding<T>定义的类型一致。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  set value(newValue: T);
}

/**
 * 设置监听的行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export declare interface MonitorOptions {

  /**
   * 指定函数是否同步执行，`true`为同步，`false`为异步。默认为`false`。
   *
   * @default false
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  isSynchronous?: boolean;

  /**
   * 指定冻结的组件，仅能传入@ComponentV2装饰的自定义组件，默认值为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  owner?: IVariableOwner;

  /**
   * 显式指定监听状态变量的路径，默认为`addMonitor`自动生成的路径。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  path?: string | string[];
}

/**
 * 对象是否可被观察的结果。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
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
   * @since 24 static
   */
  isObserved: boolean;

  /**
   * 对象是否可被观察的原因。
   * 
   * 不可被观察原因：对象本身是不可被观察的。
   * 
   * 可被观察原因或使用场景：
   * 
   * 1. 对象被[@Observed](docroot://ui/state-management-static/arkts-static-observed-and-objectlink.md)装饰器装饰。 
   * 2. 对象被[@ObservedV2和@Trace](docroot://ui/state-management-static/arkts-static-new-observedV2-and-trace.md)装饰。 
   * 3. 对象为被V1装饰器装饰或被[makeObserved]{@link UIUtils.makeObserved<T extends object | null | undefined>(source: T)}方法转换的interface字面量。 
   * 4. 对象为被V1/V2装饰器装饰或被makeObserved方法转换的Array/Map/Set/Date类型。
   * 5. 对象被@Observed装饰器装饰，但未使用在UI上。 
   * 6. 对象被@ObservedV2和@Trace装饰，但未使用在UI上。 
   * 7. 对象为被V1装饰器装饰或被makeObserved方法转换的interface字面量，但未用在UI上。 
   * 8. 对象为被V1/V2装饰器装饰或被makeObserved方法转换的Array/Map/Set/Date类型，但未用在UI上。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  reason: string;

  /**
   * 对象可被观察时，数组中内容为对象关联的装饰器和组件信息。对象不可被观察时，此数组为空。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  decoratorInfo: DecoratorInfo[];
}

/**
 * 可被观察对象关联的装饰器和组件信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface DecoratorInfo {

  /**
   * 当对象被[@Observed](docroot://ui/state-management-static/arkts-static-observed-and-objectlink.md)装饰时，值为对象关联的装饰器名称。
   * 
   * 当对象属性使用[@Track](docroot://ui/state-management-static/arkts-static-track.md)时，值为：`@Track`。
   * 
   * 当对象属性使用[@Trace](docroot://ui/state-management-static/arkts-static-new-observedV2-and-trace.md)时，值为：`@Trace`。
   * 
   * 当对象经过[makeObserved]{@link UIUtils.makeObserved<T extends object | null | undefined>(source: T)}转换时，值为：
   * `MakeObserved`。
   * 
   * 当对象为被V1装饰器装饰的built-in类型时，值为对象关联的装饰器名称。
   * 
   * 当对象为被V1装饰器装饰的interface字面量时，值为对象关联的装饰器名称。
   * 
   * 当对象被@Observed装饰且使用在V2组件中时，值为：`@Observed(mix used in V2)`。 
   * 
   * 当对象为被V1装饰器装饰的built-in类型且使用在V2组件中时，值为：`V1 Decorated BuiltInType(mix used in V2)`。
   * 
   * 当对象为被V1装饰器装饰的interface字面量且使用在V2组件中时，值为：`V1 Decorated ObjectLiteral(mix used in V2)`。
   * 
   * 当对象为被V2装饰器装饰的built-in类型时，值为：`V2 Decorated BuiltInType`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  decoratorName: string;

  /**
   * 被装饰器装饰的属性名称。
   * 
   * 在V1组件中被状态管理V1装饰器装饰的@Observed装饰的对象、interface字面量和built-in类型对象返回V1装饰器的名称。
   * 
   * 使用@Track装饰器、@Trace装饰器时返回属性名。
   * 
   * 使用V2装饰器装饰或makeObserved转换的built-in对象时，返回可观测属性的名称。常见的框架内置可观察属性见下表。
   * 
   * makeObserved转换的interface字面量返回`Any Object Literal Property`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  stateVariableName: string;

  /**
   * 在V1组件中被状态管理V1装饰器装饰的@Observed装饰的对象、interface字面量和built-in类型对象返回V1组件名称。
   * 
   * 使用@Track装饰器、@Trace装饰器时返回对象名称。
   * 
   * 使用V2装饰器装饰或makeObserved转换的built-in对象时，返回对象名称。
   * 
   * 使用makeObserved转换的interface字面量时，返回字面量的定义名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  owningComponentOrClassName: string;

  /**
   * 在V1组件中被状态管理V1装饰器装饰的@Observed装饰的对象、interface字面量和built-in类型对象返回V1组件ID。
   * 
   * 其余情况返回-1。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  owningComponentId: int;

  /**
   * 使用该可观察对象的组件信息。若对象没有用在任何UI上，则返回空数组。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  dependentInfo: ElementInfo[];
}

/**
 * 可被观察对象关联的组件信息，包含系统组件和自定义组件。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 24 static
 */
export interface ElementInfo {

  /**
   * 组件的名称。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  elementName: string;

  /**
   * 组件的ID。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 24 static
   */
  elementId: int;
}

/**
 * 监听变量信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MonitorValueInfo {

  /**
   * 获取变量的回调。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  valueCallback: MonitorValueCallback;

  /**
   * 路径信息。未传入将使用自动生成的默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  path?: string;

  /**
   * 是否开启属性观察。
   * 
   * true：开启属性观察；false：不开启属性观察。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  observeProps?: boolean;
}

/**
 * 监听基础选项。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface MonitorBaseOptions {

  /**
   * 是否同步回调。
   * 
   * true：同步回调；false：异步回调。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  isSynchronous?: boolean;

  /**
   * 指定冻结的组件，仅能传入[@ComponentV2](docroot://ui/state-management-static/arkts-static-componentv2.md)装饰的自定义组件。默认值为
   * `undefined`，即不指定冻结的组件。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  owner?: IVariableOwner;
}

/**
 * `IReusePool` 接口提供自定义组件上的全局复用池的相关功能。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface IReusePool {

  /**
   * 检索此复用池中给定可复用组件类型的回收实例信息。
   *
   * @param { Class } componentConstructor - 要查询的可复用自定义组件的类型。
   * @param { string } [reuseId] - 可选的reuseId用于过滤结果。如果指定，则仅返回此特定reuseId复用池的信息。默认值是undefined，返回所有reuseId复用池信息。
   * @returns { IReusableInfo[] | IReusableInfo | undefined } undefined if this pool does not accepts
   *     given Component.
   *     returns IReusableInfo if this pool accepts given Component/V2, reuseId was not used to recycle instances
   *     returns IReusableInfo[] if this pool accepts given Component/V2, reuseId was used to recycle instances.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getReusableInfo(componentConstructor : Class, 
    reuseId?: string): IReusableInfo[] | IReusableInfo | undefined;

  /**
   * 预创建@Reusable/@ReusableV2组件并将它们放入此复用池中。
   *
   * @param { WrappedBuilder<CustomBuilder> } builder - 包含要执行`times`次的@Builder函数的 `WrappedBuilder`。每次执行应创建一个或多个@Reusable
   *     /@ReusableV2组件。
   * @param { int } times - 执行@Builder函数的次数。
   * @returns { Promise<void> } 当空闲任务成功完成时解析的Promise。Promise对象无返回结果。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  preRender(builder: WrappedBuilder<CustomBuilder>, times: int): Promise<void>;
}

/**
 * `IReusableInfo`接口提供有关复用池管理的可复用组件的当前数量和数量上限的信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface IReusableInfo {

  /**
   * 池中当前回收的组件数。如果设置了`reuseId`，则`count`指的是具有此特定reuseId的组件数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly count: int;

  /**
   * 池中允许的最大回收组件数。如果设置了`reuseId`，则`maxCount`指的是具有此特定reuseId的组件数。将此设置为小于当前`count`的值会导致框架异步清除多余组件。在延迟期间，`count`可能暂时超过
   * `maxCount`。默认值：100，最大值：200。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  maxCount: int;

  /**
   * 回收组件时指定的reuseId。如果组件没有使用reuseId回收，则此属性为`undefined`。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  readonly reuseId? : string;
}

/**
 * 自定义组件的上下文信息。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare interface CustomComponentContext {

  /**
   * 从当前自定义组件获取全局重用池。
   *
   * @returns { IReusePool | undefined } Returns the recyclepool instance.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  getReusePool(): IReusePool | undefined;

  /**
   * 注册激活和非激活回调。
   *
   * @param { ActiveAndInactiveCallbackType } [active] - 激活函数回调
   *     默认值： 默认值：undefined。
   * @param { ActiveAndInactiveCallbackType } [inactive] - in激活函数回调
   *     默认值： 默认值：undefined。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.1.0 static
   * @unpublished
   */
  registerActiveAndInactiveCallback(active?: ActiveAndInactiveCallbackType,
    inactive?: ActiveAndInactiveCallbackType): void;
}

/**
 * 定义激活和非激活函数回调
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.1.0 static
 * @unpublished
 */
export type ActiveAndInactiveCallbackType = () => void;

/**
 * 继承自Array<T>，为可观察API操作的Array对象。详见
 * [ObservedArray/ObservedMap/ObservedSet/ObservedDate：具有观察能力的Built-in类型](docroot://ui/state-management-static/arkts-static-new-observed-built-in-types.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ObservedArray<T> extends Array<T> {

  /**
   * 无参构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor();

  /**
   * 使用元素列表初始化ObservedArray实例。
   *
   * @param { T } first - 第一个元素。
   * @param { T[] } d - 其余元素组成的数组，默认为[]。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(first: T, ...d: T[]);

  /**
   * 使用指定的长度和初始化函数初始化ObservedArray实例。
   *
   * @param { int } arrayLen - 数组初始长度。
   * @param { ObservedArrayInitializer<T> } initializer - 数组元素初始化函数。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(arrayLen: int, initializer: ObservedArrayInitializer<T>);
}

/**
 * ObservedArray的元素初始化函数类型。
 *
 * @param { int } index - 当前初始化元素的索引。
 * @returns { T } 对应索引位置的元素值。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
type ObservedArrayInitializer<T> = (index: int) => T;

/**
 * 继承自Date，为可观察API操作的Date对象。详见
 * [ObservedArray/ObservedMap/ObservedSet/ObservedDate：具有观察能力的Built-in类型](docroot://ui/state-management-static/arkts-static-new-observed-built-in-types.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ObservedDate extends Date {

  /**
   * 无参构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor();

  /**
   * 使用指定初始值创建ObservedDate实例。
   *
   * @param { long | string | Date } value - 初始时间值。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(value: long | string | Date);
}

/**
 * 继承自Map<K, V>，为可观察API操作的Map对象。详见
 * [ObservedArray/ObservedMap/ObservedSet/ObservedDate：具有观察能力的Built-in类型](docroot://ui/state-management-static/arkts-static-new-observed-built-in-types.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ObservedMap<K, V> extends Map<K, V> {

  /**
   * 无参构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor();

  /**
   * 使用指定的容量创建ObservedMap实例。
   *
   * @param { int } initialCapacity - 指定的初始容量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(initialCapacity: int);

  /**
   * 使用键值对数组创建ObservedMap实例。
   *
   * @param { [K, V][] } entries - 初始键值对数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(entries: [K, V][]);

  /**
   * 使用已有Map对象创建ObservedMap实例。
   *
   * @param { Map<K, V> } map - 初始Map对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(map: Map<K, V>);
}

/**
 * 继承自Set<K>，为可观察API操作的Set对象。详见
 * [ObservedArray/ObservedMap/ObservedSet/ObservedDate：具有观察能力的Built-in类型](docroot://ui/state-management-static/arkts-static-new-observed-built-in-types.md)。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ObservedSet<K> extends Set<K> {

  /**
   * 无参构造函数。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor();

  /**
   * 使用指定的容量创建ObservedSet实例。
   *
   * @param { int } bucketsCount - 指定的初始容量。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(bucketsCount: int);

  /**
   * 使用元素数组创建ObservedSet实例。
   *
   * @param { K[] } values - 初始元素数组。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(values: K[]);

  /**
   * 使用已有Set对象创建ObservedSet实例。
   *
   * @param { Set<K> } set - 初始Set对象。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public constructor(set: Set<K>);
}