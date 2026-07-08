/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

/**
* LazyForEach内存优化策略枚举。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachMemOptStrategy {

  /**
   * 无内存优化策略。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,

  /**
   * 自动内存优化策略，当LazyForEach子节点内存占用较高时，建议使用此策略以降低内存使用量。
   *
   * 当应用退后台时、LazyForEach所在组件不可见时（[visibility]{@link CommonMethod#visibility}属性设置为[Visible]{@link Visibility}以外的值，或组件面积为
   * 0，不考虑遮挡）、整机低内存时（[MemoryLevel]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel}达到
   * MEMORY_LEVEL_LOW或MEMORY_LEVEL_CRITICAL），释放
   * [预加载区域](docroot://ui/rendering-control/arkts-rendering-control-overview.md#基本概念)内的部分节点，直至上下预加载区域内的节点数量均不超过2。
   *
   * 当应用恢复前台时、LazyForEach所在组件恢复显示时，LazyForEach发生滑动时，恢复预加载区域内的节点。
   *
   * 在释放和恢复节点时，会触发[自定义组件生命周期](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md)。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
}

/**
* 枚举类型，数据操作说明。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DataOperationType {

  /**
   * 数据添加。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ADD = 'add',

  /**
   * 数据删除。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DELETE = 'delete',

  /**
   * 数据交换。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  EXCHANGE = 'exchange',

  /**
   * 数据移动。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  MOVE = 'move',

  /**
   * 数据改变。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CHANGE = 'change',

  /**
   * 全部数据重载。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  RELOAD = 'reload'
}

/**
 * 资源释放策略枚举，用于配置LazyForEach待销毁节点的资源释放策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachReleaseStrategy {

  /**
   * 在下一次空闲时段内释放所有被丢弃的节点。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BATCH = 0,

  /**
   * 在下一次空闲时段内，根据当前帧剩余时间逐个释放被丢弃的节点。未释放的节点将在后续空闲时段根据可用空闲时间继续释放。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  PROGRESSIVE = 1
}

/**
 * 冻结模式枚举，用于配置LazyForEach中已移出组件树的缓存自定义节点的冻结行为。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachCustomComponentFreezeMode {

  /**
   * 遵循Metadata中enableCustomComponentFreeze字段的配置来决定是否启用冻结。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  AUTO = 0,

  /**
   * 禁用已移出组件树的缓存自定义节点的冻结。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISABLED = 1,

  /**
   * 启用已移出组件树的缓存自定义节点的冻结。开启后，缓存自定义组件的状态更新将被冻结。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  ENABLED = 2
}

/**
* 配置LazyForEach的参数。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface LazyForEachOptions {

  /**
   * LazyForEach的内存优化策略。该参数在创建LazyForEach时设定，不支持动态修改。
   * 默认值：[DEFAULT]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  memoryOptimizationStrategy?: LazyForEachMemOptStrategy;

  /**
   * 已移出组件树的缓存自定义节点的冻结模式。默认值：LazyForEachCustomComponentFreezeMode.AUTO。
   *
   * @default LazyForEachCustomComponentFreezeMode.AUTO
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  customComponentFreezeMode?: LazyForEachCustomComponentFreezeMode;

  /**
   * LazyForEach缓存节点的资源释放策略。默认值：LazyForEachReleaseStrategy.BATCH。
   * <br>默认值:默认值：LazyForEachReleaseStrategy.BATCH。
   *
   * @default LazyForEachReleaseStrategy.BATCH
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  releaseStrategy?: LazyForEachReleaseStrategy;
}

/**
* 添加数据操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataAddOperation {

  /**
   * 数据添加类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.ADD;

  /**
   * 插入数据索引值。取值范围是[0, 数据源长度]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * 插入数量，默认为1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  count?: number;

  /**
   * 为插入的数据分配键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  key?: string | Array<string>;
}

/**
* 删除数据操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataDeleteOperation {

  /**
   * 数据删除类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.DELETE;

  /**
   * 起始删除位置索引值。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * 删除数据数量，默认为1。
   *
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  count?: number;
}

/**
* 改变数据操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataChangeOperation {

  /**
   * 数据改变类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.CHANGE;

  /**
   * 改变的数据的索引值。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * 为改变的数据分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  key?: string;
}

/**
* 定义移动数据的位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface MoveIndex {

  /**
   * 起始移动位置。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  from: number;

  /**
   * 目的移动位置。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  to: number;
}

/**
* 定义交换数据的位置。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface ExchangeIndex {

  /**
   * 第一个交换位置。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start: number;

  /**
   * 第二个交换位置。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end: number;
}

/**
* 定义交换数据的新键值。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface ExchangeKey {

  /**
   * 为第一个交换的位置分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start: string;

  /**
   * 为第二个交换的位置分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  end: string;
}

/**
* 移动数据操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataMoveOperation {

  /**
   * 数据移动类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.MOVE;

  /**
   * 移动位置。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: MoveIndex;

  /**
   * 为被移动的数据分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  key?: string;
}

/**
* 交换数据操作。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataExchangeOperation {

  /**
   * 数据交换类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.EXCHANGE;

  /**
   * 交换位置。取值范围是[0, 数据源长度-1]。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: ExchangeIndex;

  /**
   * 分配新的键值，默认使用原键值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  key?: ExchangeKey;
}

/**
* 重载所有数据操作。当onDatasetChange含有DataOperationType.RELOAD操作时，其余操作全部失效，框架会自己调用keyGenerator进行键值比对。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataReloadOperation {

  /**
   * 数据全部重载类型。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.RELOAD;
}

/**
* 定义数据操作类型。
*
* > **说明**
*
 * @unionmember { DataAddOperation } Represents  Represents Represents Represents Represents Represents Represents 添加单个数据。
 * @unionmember { DataDeleteOperation } Represents  Represents Represents Represents Represents Represents Represents 删除单个数据。
 * @unionmember { DataChangeOperation } Represents  Represents Represents Represents Represents Represents Represents 执行单个数据的插入、更新或删除。
 * @unionmember { DataMoveOperation } Represents  Represents Represents Represents Represents Represents Represents 移动单个数据。
 * @unionmember { DataExchangeOperation } Represents  Represents Represents Represents Represents Represents Represents 交换单个数据。
 * @unionmember { DataReloadOperation } Represents  Represents Represents Represents Represents Represents Represents 重载所有数据。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DataOperation =
  DataAddOperation | DataDeleteOperation | DataChangeOperation | DataMoveOperation | DataExchangeOperation | DataReloadOperation;

/**
* 数据变化监听器。
*
* > **说明：**
* >
* > DataChangeListener除onDatasetChange以外的方法中，当参数包含index且值为负数时，会默认用0来替换。onDatasetChange中，当单个DataOperation参数包含index且值在数据源
* > 索引范围之外（DataAddOperation中index可以等于数据源长度），则对应DataOperation不会生效。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface DataChangeListener {

  /**
   * 通知组件重新加载所有数据。键值没有变化的数据项会使用原先的子组件，键值发生变化的会重建子组件。重新加载数据完成后调用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDataReloaded(): void;

  /**
   * 通知组件index的位置有数据添加。添加数据完成后调用。
   *
   * > **说明：**
   *
   * @param { number } index - 数据添加位置的索引值。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataAdd
   */
  onDataAdded(index: number): void;

  /**
   * 通知组件index的位置有数据添加。添加数据完成后调用。
   *
   * @param { number } index - 数据添加位置的索引值。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataAdd(index: number): void;

  /**
   * 通知组件数据有移动。将from和to位置的数据进行交换。
   *
   * > **说明：**
   * >
   * > -
   * >
   * > - 数据移动前后键值要保持不变，如果键值有变化，应使用删除数据和新增数据接口。数据移动起始位置与数据移动目标位置交换完成后调用。
   *
   * @param { number } from - 数据移动起始位置。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @param { number } to - 数据移动目标位置。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataMove
   */
  onDataMoved(from: number, to: number): void;

  /**
   * 通知组件数据有移动。将from和to位置的数据进行交换。数据移动起始位置与数据移动目标位置交换完成后调用。
   *
   * > **说明：**
   * >
   * > 数据移动前后键值要保持不变，如果键值有变化，应使用删除数据和新增数据接口。
   *
   * @param { number } from - 数据移动起始位置。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @param { number } to - 数据移动目标位置。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataMove(from: number, to: number): void;

  /**
   * 通知组件删除index位置的数据并刷新LazyForEach的展示内容。删除数据完成后调用。
   *
   * > **说明：**
   *
   * @param { number } index - 数据删除位置的索引值。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataDelete
   */
  onDataDeleted(index: number): void;

  /**
   * 通知组件删除index位置的数据并刷新LazyForEach的展示内容。删除数据完成后调用。
   *
   * > **说明：**
   * >
   * > 需要保证dataSource中的对应数据已经在调用onDataDelete前删除，否则页面渲染将出现未定义的行为。
   *
   * @param { number } index - 数据删除位置的索引值。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataDelete(index: number): void;

  /**
   * 通知组件index的位置有数据变化。改变数据完成后调用。
   *
   * > **说明：**
   *
   * @param { number } index - 数据变化位置的索引值。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataChange
   */
  onDataChanged(index: number): void;

  /**
   * 通知组件index的位置有数据有变化。改变数据完成后调用。
   *
   * @param { number } index - 数据变化位置的索引值。取值范围是[0, 数据源长度-1]。<br/>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataChange(index: number): void;

  /**
   * 进行批量的数据处理后，调用onDatasetChange接口通知组件按照dataOperations刷新组件。
   *
   * > **说明：**
   * >
   * > onDatasetChange接口不能与其他DataChangeListener的更新接口混用。例如，在同一个LazyForEach中，调用过onDataAdd接口后，不能再调用onDatasetChange接口；反之，调用过
   * > onDatasetChange接口后，也不能调用onDataAdd等其他更新接口。页面中不同LazyForEach之间互不影响。在同一个onDatasetChange批量处理数据时，如果多个DataOperation操作同一个
   * > index，只有第一个DataOperation生效。
   *
   * @param { DataOperation[] } dataOperations - 一次处理数据的操作。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDatasetChange(dataOperations: DataOperation[]): void;
}

/**
* LazyForEach的数据源。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface IDataSource {

  /**
   * 获得数据总数。
   *
   * @returns { number } 获得数据总数，由数据源决定实际大小。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  totalCount(): number;

  /**
   * 获取索引值index对应的数据。
   *
   * @param { number } index - 获取数据对应的索引值。取值范围是[0, 数据源长度-1]。
   * @returns { any } 获取索引值index对应的数据，由数据源决定具体类型。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  getData(index: number): any;

  /**
   * 注册数据改变的监听器。
   *
   * @param { DataChangeListener } listener - 数据变化监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  registerDataChangeListener(listener: DataChangeListener): void;

  /**
   * 注销数据改变的监听器。
   *
   * @param { DataChangeListener } listener - 数据变化监听器。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  unregisterDataChangeListener(listener: DataChangeListener): void;
}

/**
* 支持[拖拽排序]{@link common}属性。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 * @noninterop
 */
declare class LazyForEachAttribute extends DynamicNode<LazyForEachAttribute> {}

/**
* > **说明：**
*
* 开发者指南见：[LazyForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)。
*
* 在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。最佳实践请参考
* [优化长列表加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
interface LazyForEachInterface {

  /**
   * LazyForEach从提供的数据源中按需迭代数据，并在每次迭代过程中创建相应的组件。当在滚动容器中使用了LazyForEach，框架会根据滚动容器可视区域按需创建组件，当组件滑出可视区域外时，框架会进行组件销毁回收以降低内存占
   * 用。
   *
   * @param { IDataSource } dataSource - LazyForEach数据源，需要开发者实现相关接口。<br>**原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支
   *     持在原子化服务中使用。
   * @param { function } itemGenerator - 子组件生成函数，为数组中的每一个数据项创建一个子组件。<br/>**说明：**<br/>- item是当前数据项（可选），index是数据项索引值（可选）。<
   *     br/>- itemGenerator的函数体必须使用大括号{...}。<br />- itemGenerator每次迭代只能并且必须生成一个子组件。<br />- itemGenerator中可以使用if语句，但是必须保
   *     证if语句每个分支都会创建一个相同类型的子组件。<br>**原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
   * @param { function } keyGenerator - 键值生成函数，用于给数据源中的每一个数据项生成唯一且固定的键值。修改数据源中的一个数据项若不影响其生成的键值，则对应组件不会被更新，否则此处组件就会被重建更新。
   *     `keyGenerator`参数是可选的，但是，为了使开发框架能够更好地识别数组更改并正确更新组件，建议提供。<br/>默认值为空回调函数。<br/>**说明：**<br/>- item是当前数据项（可选），index是数
   *     据项索引值（可选）。<br/>- `keyGenerator`缺省时，使用默认的键值生成函数，即
   *     `(item: Object, index: number) => { return viewId + '-' + index.toString(); }`，生成键值仅受索引值index影响（viewId在编译器转换过程中
   *     生成，同一个LazyForEach组件内的viewId一致）。<br/>- 为保证`LazyForEach`正确、高效地更新子组件，避免渲染结果异常、渲染效率降低等问题，键值应满足以下条件。<br/>1. 键值具有唯一性，
   *     每个数据项对应的键值互不相同。<br/>2. 键值具有一致性，数据项不变时对应的键值也不变。<br>**原子化服务API（仅ArkTS-Dyn）：** 从API version 11开始，该接口支持在原子化服务中使用。
   * @returns { LazyForEachInterface }    * @returns { LazyForEachAttribute }
   * @returns { LazyForEachAttribute } [since 12]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  (
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string
  ): LazyForEachAttribute;

  /**
   * LazyForEach从提供的数据源中按需迭代数据，并在每次迭代过程中创建相应的组件。当在滚动容器中使用了LazyForEach，框架会根据滚动容器可视区域按需创建组件，当组件滑出可视区域外时，框架会进行组件销毁回收以降低内存占
   * 用。
   *
   * @param { IDataSource } dataSource
   * @param { function } itemGenerator
   * @param { function } [keyGenerator]
   * @param { LazyForEachOptions } [options]
   * @returns { LazyForEachAttribute }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  (
    dataSource: IDataSource,
    itemGenerator: (item: any, index: number) => void,
    keyGenerator?: (item: any, index: number) => string,
    options?: LazyForEachOptions
  ): LazyForEachAttribute;
}

/**
* > **说明：**
*
* 开发者指南见：[LazyForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)。
*
* 在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。最佳实践请参考
* [优化长列表加载慢丢帧问题](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-best-practices-long-list)。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const LazyForEach: LazyForEachInterface;