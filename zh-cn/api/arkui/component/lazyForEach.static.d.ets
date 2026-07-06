/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
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

import { Builder, CustomBuilderT } from './builder';

import { ComponentBuilder } from './builder';

import { DynamicNode } from './common';

/**
* 枚举类型，数据操作说明。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export enum DataOperationType {

  /**
   * 数据添加。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  ADD = 'add',

  /**
   * 数据删除。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  DELETE = 'delete',

  /**
   * 数据交换。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  EXCHANGE = 'exchange',

  /**
   * 数据移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  MOVE = 'move',

  /**
   * 数据改变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  CHANGE = 'change',

  /**
   * 全部数据重载。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  RELOAD = 'reload'
}

/**
 * 资源释放策略枚举，用于配置LazyForEach待销毁节点的资源释放策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export enum LazyForEachReleaseStrategy {

  /**
   * 在下一次空闲时段内释放所有被丢弃的节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BATCH = 0,

  /**
   * 在下一次空闲时段内，根据当前帧剩余时间逐个释放被丢弃的节点。未释放的节点将在后续空闲时段根据可用空闲时间继续释放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PROGRESSIVE = 1
}

/**
 * 冻结模式枚举，用于配置LazyForEach中已移出组件树的缓存自定义节点的冻结行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export enum LazyForEachCustomComponentFreezeMode {

  /**
   * 遵循Metadata中enableCustomComponentFreeze字段的配置来决定是否启用冻结。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  AUTO = 0,

  /**
   * 禁用已移出组件树的缓存自定义节点的冻结。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DISABLED = 1,

  /**
   * 启用已移出组件树的缓存自定义节点的冻结。开启后，缓存自定义组件的状态更新将被冻结。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ENABLED = 2
}

/**
 * 配置LazyForEach的参数。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export interface LazyForEachOptions {

  /**
     * 已移出组件树的缓存自定义节点的冻结模式。默认值：LazyForEachCustomComponentFreezeMode.AUTO。
     *
   * @default LazyForEachCustomComponentFreezeMode.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  customComponentFreezeMode?: LazyForEachCustomComponentFreezeMode;

  /**
     * LazyForEach缓存节点的资源释放策略。默认值：LazyForEachReleaseStrategy.BATCH。
     * <br>默认值:默认值：LazyForEachReleaseStrategy.BATCH。
     *
   * @default LazyForEachReleaseStrategy.BATCH
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  releaseStrategy?: LazyForEachReleaseStrategy;

  /**
     * LazyForEach的内存优化策略。该参数在创建LazyForEach时设定，不支持动态修改。
     * 默认值：[DEFAULT]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  memoryOptimizationStrategy?: LazyForEachMemOptStrategy;
}

/**
* 添加单个数据。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DataAddOperation {

  /**
   * 数据添加类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: DataOperationType;

  /**
     * 插入数据索引值。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;

  /**
   * 插入数量，默认为1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  count?: int;

  /**
   * 为插入的数据分配键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key?: string | Array<string>;
}

/**
* 删除单个数据。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DataDeleteOperation {

  /**
   * 数据删除类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: DataOperationType;

  /**
     * 起始删除位置索引值。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;

  /**
   * 删除数据数量，默认为1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  count?: int;
}

/**
* 执行单个数据的插入、更新或删除。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DataChangeOperation {

  /**
   * 数据改变类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: DataOperationType;

  /**
     * 改变的数据的索引值。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: int;

  /**
   * 为改变的数据分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key?: string;
}

/**
* 定义移动数据的位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface MoveIndex {

  /**
     * 移动位置。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  from: int;

  /**
     * 目的移动位置。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  to: int;
}

/**
* 定义交换数据的位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ExchangeIndex {

  /**
     * 第一个交换位置。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start: int;

  /**
     * 第二个交换位置。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end: int;
}

/**
* 定义交换数据的新键值。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface ExchangeKey {

  /**
   * 为第一个交换的位置分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  start: string;

  /**
   * 为第二个交换的位置分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  end: string;
}

/**
* 移动数据操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DataMoveOperation {

  /**
   * 数据移动类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: DataOperationType;

  /**
     * 移动位置。取值范围是[0, 数据源长度-1]。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: MoveIndex;

  /**
   * 为被移动的数据分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key?: string;
}

/**
* 交换单个数据。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DataExchangeOperation {

  /**
   * 数据交换类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: DataOperationType;

  /**
   * 交换位置。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  index: ExchangeIndex;

  /**
   * 分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  key?: ExchangeKey;
}

/**
* 重载所有数据操作。当onDatasetChange含有DataOperationType.RELOAD操作时，其余操作全部失效，框架会自己调用keyGenerator进行键值比对。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DataReloadOperation {

  /**
   * 数据全部重载类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  type: DataOperationType;
}

/**
 * 定义数据操作类型。
 *
 * @unionmember { DataAddOperation }
 * @unionmember { DataDeleteOperation }
 * @unionmember { DataChangeOperation }
 * @unionmember { DataMoveOperation }
 * @unionmember { DataExchangeOperation }
 * @unionmember { DataReloadOperation }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export type DataOperation = DataAddOperation | DataDeleteOperation | DataChangeOperation | DataMoveOperation |
    DataExchangeOperation | DataReloadOperation;

/**
* 数据变化监听器。
*
* > **说明：**
* >
* > DataChangeListener除onDatasetChange以外的方法中，当参数包含index且值为负数时，会默认用0来替换。onDatasetChange中，当单个DataOperation参数包含index且值在数据源
* > 索引范围之外（DataAddOperation中index可以等于数据源长度），则对应DataOperation不会生效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface DataChangeListener {

  /**
   * 通知组件重新加载所有数据。键值没有变化的数据项会使用原先的子组件，键值发生变化的会重建子组件。重新加载数据完成后调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDataReloaded(): void;

  /**
   * 通知组件index的位置有数据添加。添加数据完成后调用
   *
   * @param { int } index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDataAdd(index: int): void;

  /**
   * 通知组件数据有移动。将from和to位置的数据进行交换。数据移动起始位置与数据移动目标位置交换完成后调用。
   *
   * > **说明：**
   * >
   * > 数据移动前后键值要保持不变，如果键值有变化，应使用删除数据和新增数据接口。
   *
   * @param { int } from
   * @param { int } to
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDataMove(from: int, to: int): void;

  /**
   * 通知组件删除index位置的数据并重新加载LazyForEach的展示内容。删除数据完成后调用。
   *
   * > **说明：**
   * >
   * > 需要保证dataSource中的对应数据已经在调用onDataDelete前删除，否则页面渲染将出现未定义的行为。
   *
   * @param { int } index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDataDelete(index: int): void;

  /**
   * 通知组件index的位置有数据有变化。改变数据完成后调用。
   *
   * @param { int } index
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDataChange(index: int): void;

  /**
   * 批量数据处理后，调用onDatasetChange接口，通知组件按照dataOperations刷新。
   *
   * > **说明：**
   * >
   * > onDatasetChange接口不能与其他DataChangeListener的更新接口混用。如在同一个LazyForEach中，调用过onDataAdd接口后，不能再调用onDatasetChange接口；反之，调用过
   * > onDatasetChange接口后，也不能调用onDataAdd等其他更新接口。页面中不同LazyForEach之间互不影响。
   *
   * 使用`onDatasetChange()`进行批量数据修改时，`DataOperation`每一个数组项需要转换为对应的类型。
   *
   * @param { Array<DataOperation> } dataOperations
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  onDatasetChange(dataOperations: Array<DataOperation>): void;
}

/**
* LazyForEach的数据源。ArkTS-Sta中IDataSource强制要求声明`<T>`类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
export interface IDataSource<T> {

  /**
   * 获得数据总数。
   *
   * @returns { int }
   获得数据总数，由数据源决定实际大小。
   * @stagemodelonly
   * @since 23 static
   */
  totalCount(): int;

  /**
   * 获取索引值index对应的数据。
   *
   * @param { int } index
   * @returns { T }
   获取索引值index对应的数据，由数据源决定具体类型。
   * @stagemodelonly
   * @since 23 static
   */
  getData(index: int): T;

  /**
   * 注册数据改变的监听器。
   *
   * @param { DataChangeListener } listener
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  registerDataChangeListener(listener: DataChangeListener): void;

  /**
   * 注销数据改变的监听器。
   *
   * @param { DataChangeListener } listener
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 static
   */
  unregisterDataChangeListener(listener: DataChangeListener): void;
}

/**
* 支持[拖拽排序]{@link common}和
* [debugLine](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-lazyforeach-sta.md#debugline24)属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
export interface LazyForEachAttribute extends DynamicNode {

  /**
     * 设置组件源码重定向信息。
     *
   * @param { string } sourceLine - 源码行号。
   * @param { string } [moduleName] - 组件所属模块名。
   * @returns { this }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  debugLine(sourceLine: string, moduleName?: string): this;

  /**
   * 设置LazyForEach选项。
   *
   * @param { IDataSource<T> } dataSource - 数据源提供数据
   * @param { ItemGeneratorFunc<T> } itemGenerator - 项目生成器函数
   * @param { KeyGeneratorFunc<T> } [keyGenerator] - 密钥生成器函数
   * @returns { this } LazyForEachAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setLazyForEachOptions<T>(dataSource: IDataSource<T>,
        itemGenerator: ItemGeneratorFunc<T>,
        keyGenerator?: KeyGeneratorFunc<T>): this;

  /**
   * 设置LazyForEach选项。
   *
   * @param { IDataSource<T> } dataSource - 提供数据的数据源。
   * @param { ItemGeneratorFunc<T> } itemGenerator - 项生成器函数。
   * @param { KeyGeneratorFunc<T> } [keyGenerator] - 键生成器函数。
   * @param { LazyForEachOptions } [options] - LazyForEach可选参数选项。
   * @returns { this } LazyForEachAttribute实例
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  setLazyForEachOptions<T>(dataSource: IDataSource<T>,
        itemGenerator: ItemGeneratorFunc<T>,
        keyGenerator?: KeyGeneratorFunc<T>,
        options?: LazyForEachOptions): this;

  /**
     * 通知LazyForEach已完成属性设置。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 staticonly
   */
  applyAttributesFinish(): void;
}

/**
* Define item generator function.
*
 * @param { T } item - item in an array
 * @param { int } index - index corresponding to an array item.
*     取值限定为整数。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
@Builder
declare type ItemGeneratorFunc<T> = (item: T, index: int) => void;

/**
* Define key generator function.
*
 * @param { T } item - item in an array
 * @param { int } index - index corresponding to an array item.
*     取值限定为整数。
 * @returns { string } Character string generated based on item and index
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 */
declare type KeyGeneratorFunc<T> = (item: T, index: int) => string;

/**
 * 输入值以获取带有选项的LazyForEach。
 *
 * @param { IDataSource<T> } dataSource - 要在UI中使用的数组集合。
 * @param { ItemGeneratorFunc<T> } itemGenerator - item生成器函数。
 * @param { KeyGeneratorFunc<T> } [keyGenerator] - 密钥生成器函数。
 * @returns { LazyForEachAttribute } LazyForEach组件。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 static
 * @noninterop
 */
@ComponentBuilder
export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,
    itemGenerator: ItemGeneratorFunc<T>,
    keyGenerator?: KeyGeneratorFunc<T>,
): LazyForEachAttribute;

/**
* 输入值以获取带有选项的LazyForEach。
*
 * @param { IDataSource<T> } dataSource - 要在UI中使用的数组集合。
 * @param { ItemGeneratorFunc<T> } itemGenerator - item生成器函数。
 * @param { KeyGeneratorFunc<T> } [keyGenerator] - 密钥生成器函数。
 * @param { LazyForEachOptions } [options] - LazyForEach可选参数选项。
 * @returns { LazyForEachAttribute } LazyForEach组件
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 * @noninterop
 */
@ComponentBuilder
export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,
    itemGenerator: ItemGeneratorFunc<T>,
    keyGenerator?: KeyGeneratorFunc<T>,
    options?: LazyForEachOptions,
): LazyForEachAttribute;

/**
 * 定义LazyForEach组件。它需要在组件属性设置开始时调用setLazyForEachOptions。
 * 并且它需要在组件属性设置结束时调用applyAttributeFinish。
 *
 * @param { CustomBuilderT<LazyForEachAttribute> } style - 回调来设置LazyForEach的属性
 * @returns { LazyForEachAttribute } LazyForEach的属性。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
@Builder
export declare function LazyForEach<T = Any>(
    style: CustomBuilderT<LazyForEachAttribute>
): LazyForEachAttribute;

/**
* 定义内存优化策略的类型。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 26.0.0 static
 */
export enum LazyForEachMemOptStrategy {

  /**
   * 没有内存优化。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DEFAULT = 0,

  /**
     * LazyForEach处理内存优化。
     *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
}