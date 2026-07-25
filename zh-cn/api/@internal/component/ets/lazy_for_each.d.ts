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
   * 自动内存优化策略，当LazyForEach承载的列表项数量较多（例如达到数百项以上）或单项子组件结构复杂（例如包含多层嵌套或数十个子节点），导致内存占用偏高（可通过性能分析工具检测内存占用情况）时，建议使用此策略以降低内存使用量。
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
 * 用于配置LazyForEach的资源释放策略、内存优化策略，以及是否使能自定义组件冻结。
 * 
 * > **说明：**
 * >
 * > 1. 注意：在使用LazyForEachOptions时，必须保证键值生成函数已经定义，否则将编译失败。
 * >
 * > 2. 自定义组件冻结：在LazyForEach下，直接使用自定义组件时，使用该配置选择是否使能自定义组件的冻结功能。使能后，当自定义组件不在可视区域时，框架会暂停该组件的状态变量更新等处理逻辑，以降低资源消耗；组件重新进入可视区域
 * > 时恢复正常处理。
 * >
 * > 3. 资源释放策略：LazyForEach会管理屏上区域节点和预加载区域节点，当节点滑动出预加载区域离开LazyForEach的管理范围时，LazyForEach不再管理该节点，该节点资源被释放。默认使用BATCH模式，
 * > LazyForEach会在当前帧释放所有待释放的节点；PROGRESSIVE模式会逐个释放资源，在释放每个节点资源时判断当前帧的时间是否足够，如果不够就会放到后续帧释放。在此策略下，LazyForEach可能会持有节点资源，缓存池
 * > 中的节点来不及扩充，在快速获取节点的场景下会导致复用率下降。开发者应根据应用情况选择合适的资源释放策略。
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
   * 
   * 默认值：[DEFAULT]{@link LazyForEachMemOptStrategy}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  memoryOptimizationStrategy?: LazyForEachMemOptStrategy;

  /**
   * 选择是否使能自定义组件冻结。仅在LazyForEach下直接使用自定义组件时生效，其他情况不适用。
   * 
   * 默认为[AUTO]{@link LazyForEachCustomComponentFreezeMode}。
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
   * 为LazyForEach配置资源释放策略。
   * 
   * 默认使用[BATCH]{@link LazyForEachReleaseStrategy}，批量释放节点。
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
 * 选择LazyForEach的资源释放策略。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachReleaseStrategy {
  /**
   * BATCH为默认使用的资源释放策略，该策略在当前帧释放掉所有废弃节点资源。如果存在节点复用，此时能够最大化节点复用率，但如果存在组件层级较深、子组件数量较多的节点，单节点资源释放耗时较长。大量节点在当前帧释放可能会导致超大帧，影响
   * 性能。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BATCH = 0,

  /**
   * PROGRESSIVE为根据节点释放时间和当前帧剩余时间自动调整节点释放的策略，如果当前帧时间不足以释放剩余节点，会放到后续帧继续释放，避免超大帧的出现，优化性能。此时，LazyForEach会继续持有节点，可能导致复用率下降，在
   * 节点大量产生来不及释放的情况下，内存会相应地升高。开发者需关注性能和内存的影响，合理选择资源释放策略。
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
 * 选择是否使能自定义组件冻结。
 * 
 * > **说明：**
 * >
 * > 该配置仅在LazyForEach下直接使用自定义组件时添加，其他情况不适用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachCustomComponentFreezeMode {
  /**
   * 跟随module.json5配置文件中metadata的设置。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  AUTO = 0,

  /**
   * 不使能自定义组件冻结。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISABLED = 1,

  /**
   * 使能自定义组件冻结。
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
   * 添加数据索引值。取值范围是[0, 数据源长度]。超出取值范围时渲染异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * 添加数量，必须是正整数（大于0），默认为1。传入0或负数时可能导致渲染效果异常。
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
   * 为添加的数据分配键值，默认使用原键值。键值支持string或Array<string>类型；当键值为数组且长度大于count时报参数无效错误。
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
   * 起始删除位置索引值。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * 删除数据数量，必须是正整数（大于0），且index与count之和不超过数据源长度，默认为1。传入负数时该操作会被忽略；传入0时会异常地将index处的数据项标记删除。index与count之和超过数据源长度时可能导致渲染异常。
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
   * 改变的数据的索引值。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
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
   * 起始移动位置。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  from: number;
  /**
   * 目标移动位置。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
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
   * 第一个交换位置。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start: number;
  /**
   * 第二个交换位置。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
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
   * 移动位置。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
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
   * 交换位置。取值范围是[0, 数据源长度-1]。超出取值范围时渲染异常。
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
 * 重载所有数据操作，并配置是否允许在更新过程中复用旧的子组件。当onDatasetChange含有DataOperationType.RELOAD操作时，其余操作全部失效，框架会自己调用keyGenerator进行键值比对。
 * 
 * 配置允许在更新过程中复用旧的子组件，并和[@Reusable](docroot://ui/state-management/arkts-reusable.md)/
 * [@ReusableV2](docroot://ui/state-management/arkts-new-reusableV2.md)配合使用时，优先使用复用池中的组件，若复用池中无可复用的组件，而LazyForEach的旧子组件中
 * 有可复用的组件，该组件将被回收，并复用为新的子组件。当LazyForEach的旧子组件中也没有可复用的组件时，将创建新的子组件。
 * 
 * 配置允许在更新过程中复用旧的子组件，未使用@Reusable/@ReusableV2时，键值没有变化的数据项会使用原先的子组件，键值发生变化的会重建子组件。
 * 
 * 配置不允许在更新过程中复用旧的子组件，键值没有变化的数据项会使用原先的子组件，键值发生变化的数据项，若使用了@Reusable/@ReusableV2且复用池中有可用的组件，将复用旧组件，否则将创建新的子组件。
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

  /**
   * 是否允许在更新过程中复用旧的子组件。
   * 
   * true：允许在更新过程中复用旧的子组件。
   * 
   * false：不允许在更新过程中复用旧的子组件。
   * 
   * 默认值：false
   * 
   * 当值为undefined或null时，取默认值。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  reuseImmediately?: boolean;
}

/**
 * 数据操作类型。
 *
 * @unionmember { DataAddOperation } 添加数据操作。
 * @unionmember { DataDeleteOperation } 删除数据操作。
 * @unionmember { DataChangeOperation } 改变数据操作。
 * @unionmember { DataMoveOperation } 移动数据操作。
 * @unionmember { DataExchangeOperation } 交换数据操作。
 * @unionmember { DataReloadOperation } 重载所有数据操作。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DataOperation =
  DataAddOperation | DataDeleteOperation | DataChangeOperation | DataMoveOperation | DataExchangeOperation | DataReloadOperation;

/**
 * 数据变化监听器，用于在数据源发生变化时通知LazyForEach组件进行相应的渲染更新，支持数据添加、删除、改变、移动、交换、重载等多种数据变化类型的监听。
 * 
 * > **说明：**
 * >
 * > DataChangeListener除onDatasetChange以外的方法中，当参数包含index且值为负数时，会默认用0来替换。onDatasetChange中，当单个DataOperation参数包含index且值在数据源
 * > 索引范围之外（DataAddOperation中index可以等于数据源长度），则可能导致渲染异常。
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
   * > **说明：**
   * >
   * > 该接口不能与onDatasetChange接口混用。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDataReloaded(): void;

  /**
   * 通知组件重新加载所有数据，并配置是否允许在更新过程中复用旧的子组件。需要和@Reusable/@ReusableV2配合使用。重新加载数据完成后调用。
   * 
   * 配置允许在更新过程中复用旧的子组件，并和[@Reusable](docroot://ui/state-management/arkts-reusable.md)/
   * [@ReusableV2](docroot://ui/state-management/arkts-new-reusableV2.md)配合使用时，优先使用复用池中的组件，若复用池中无可复用的组件，而LazyForEach的旧子组
   * 件中有可复用的组件，该组件将被回收，并复用为新的子组件。当LazyForEach的旧子组件中也没有可复用的组件时，将创建新的子组件。
   * 
   * 配置允许在更新过程中复用旧的子组件，未使用@Reusable/@ReusableV2时，键值没有变化的数据项会使用原先的子组件，键值发生变化的会重建子组件。
   * 
   * 配置不允许在更新过程中复用旧的子组件，键值没有变化的数据项会使用原先的子组件，键值发生变化的数据项，若使用了@Reusable/@ReusableV2且复用池中有可用的组件，将复用旧组件，否则将创建新的子组件。
   *
   * @param { boolean } reuseImmediately - 是否允许在更新过程中复用旧的子组件。<br/>true：允许在更新过程中复用旧的子组件。<br/>false：不允许在更新过程中复用旧的子组件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onDataReloaded(reuseImmediately: boolean): void;

  /**
   * 通知组件index的位置有数据添加。添加数据完成后调用。
   * 
   * > **说明：**
   * >
   * > 从API version 7开始支持，从API version 8开始废弃。
   *
   * @param { number } index - 数据添加位置的索引值。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
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
   * > **说明：**
   * >
   * > 该接口不能与onDatasetChange接口混用。
   *
   * @param { number } index - 数据添加位置的索引值。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
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
   * > - 从API version 7开始支持，从API version 8开始废弃。
   * >
   * > - 数据移动前后键值要保持不变，如果键值有变化，应使用删除数据和新增数据接口。数据移动起始位置与数据移动目标位置交换完成后调用。
   *
   * @param { number } from - 数据移动起始位置。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @param { number } to - 数据移动目标位置。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
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
   * > - 数据移动前后键值要保持不变，如果键值有变化，应使用删除数据和新增数据接口。
   * >
   * > - 该接口不能与onDatasetChange接口混用。
   *
   * @param { number } from - 数据移动起始位置。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @param { number } to - 数据移动目标位置。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
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
   * >
   * > - 从API version 7开始支持，从API version 8开始废弃。
   *
   * @param { number } index - 数据删除位置的索引值。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
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
   * > - 需要保证dataSource中的对应数据已经在调用onDataDelete前删除，否则页面渲染将出现未定义的行为。
   * >
   * > - 该接口不能与onDatasetChange接口混用。
   *
   * @param { number } index - 数据删除位置的索引值。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
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
   * >
   * > 从API version 7开始支持，从API version 8开始废弃。
   *
   * @param { number } index - 数据变化位置的索引值。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataChange
   */
  onDataChanged(index: number): void;

  /**
   * 通知组件index的位置有数据变化。改变数据完成后调用。
   * 
   * > **说明：**
   * >
   * > 该接口不能与onDatasetChange接口混用。
   *
   * @param { number } index - 数据变化位置的索引值。取值范围是[0, 数据源长度-1]。
   *     <br>小于0时取值为0，大于数据源长度-1时取值为数据源长度-1。
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
   * @param { DataOperation[] } dataOperations - 一次批量处理数据的操作集合，开发者将需要处理的数据操作（添加、删除、改变、移动、交换、重载等）放入该数组，组件按照数组中的操作顺序刷新展示内
   *     容。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDatasetChange(dataOperations: DataOperation[]): void;
}

/**
 * LazyForEach的数据源，开发者需要实现该接口以提供数据访问和数据变化通知能力，包括获取数据总数、按索引获取数据、注册和注销数据变化监听器等。
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
   * @param { number } index - 获取数据对应的索引值。取值范围是[0, 数据源长度-1]。超出取值范围时行为由数据源实现决定，建议开发者做边界检查。
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
   * @param { DataChangeListener } listener - 数据变化监听器，用于在数据源发生变化时通知组件刷新。
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
   * @param { DataChangeListener } listener - 数据变化监听器，用于在数据源发生变化时通知组件刷新。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  unregisterDataChangeListener(listener: DataChangeListener): void;
}

/**
 * 支持[拖拽排序]{@link ./common}属性。
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
 * > **说明**
 * > 开发者指南见：[LazyForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)。
 * 
 * LazyForEach是一种懒加载渲染控制组件，从提供的数据源中按需迭代数据并创建相应组件。在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。
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
   * @param { IDataSource } dataSource - LazyForEach数据源，需要开发者实现相关接口。
   * @param { function } itemGenerator - 子组件生成函数，为数组中的每一个数据项创建一个子组件。
   *     <br>**说明：**
   *     <br>- item是当前数据项（可选），index是数据项索引值（可选）。
   *     <br>- 建议item的数据类型与数据源的数据类型保持一致，否则，当itemGenerator中存在与数据类型强相关的操作时，会导致子组件无法正常渲染，甚至运行时崩溃。
   *     <br>- itemGenerator的函数体必须使用大括号{...}。
   *     <br>- itemGenerator每次迭代只能并且必须生成一个子组件。
   *     <br>- itemGenerator中可以使用if语句，但是必须保证if语句每个分支都会创建一个相同类型的子组件。
   * @param { function } keyGenerator - 键值生成函数，用于给数据源中的每一个数据项生成唯一且固定的键值。修改数据源中的一个数据项若不影响其生成的键值，则对应组件不会被更新，否则对应组件就会被重建更新。
   *     `keyGenerator`参数是可选的，但是，为了使开发框架能够更好地识别数组更改并正确更新组件，建议提供。
   *     <br>默认使用框架内置的键值生成函数（详见下方说明）。
   *     <br>**说明：**
   *     <br>- item是当前数据项（可选），index是数据项索引值（可选）。
   *     <br>- 建议item的数据类型与数据源的数据类型保持一致，否则，当keyGenerator中存在与数据类型强相关的操作时，会导致子组件无法正常渲染，甚至运行时崩溃。
   *     <br>- `keyGenerator`缺省时，使用默认的键值生成函数，即
   *     `(item: Object, index: number) => { return viewId + '-' + index.toString(); }`，生成键值仅受索引值index影响（viewId在编译器转换过程中
   *     生成，同一个LazyForEach组件内的viewId一致）。
   *     <br>- 为保证`LazyForEach`正确、高效地更新子组件，避免渲染结果异常、渲染效率降低等问题，键值应满足以下条件。
   *     <br>1. 键值具有唯一性，每个数据项对应的键值互不相同。
   *     <br>2. 键值具有一致性，数据项不变时对应的键值也不变。
   * @returns { LazyForEachInterface } [since 7 - 11]
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
   * > **说明**
   * >
   * > 从API版本26.0.0开始，LazyForEach支持传入[LazyForEachOptions]{@link LazyForEachOptions}，用于使能自定义组件冻结和配置内存优化策略、资源释放策略。
   *
   * @param { IDataSource } dataSource - LazyForEach数据源，需要开发者实现相关接口。
   * @param { function } itemGenerator - 子组件生成函数，为数组中的每一个数据项创建一个子组件。
   *     <br>**说明：**
   *     <br>- item是当前数据项（可选），index是数据项索引值（可选）。
   *     <br>- 建议item的数据类型与数据源的数据类型保持一致，否则，当itemGenerator中存在与数据类型强相关的操作时，会导致子组件无法正常渲染，甚至运行时崩溃。
   *     <br>- itemGenerator的函数体必须使用大括号{...}。
   *     <br>- itemGenerator每次迭代只能并且必须生成一个子组件。
   *     <br>- itemGenerator中可以使用if语句，但是必须保证if语句每个分支都会创建一个相同类型的子组件。
   * @param { function } [keyGenerator] - 键值生成函数，用于给数据源中的每一个数据项生成唯一且固定的键值。修改数据源中的一个数据项若不影响其生成的键值，则对应组件不会被更新，否则对应组件就会被重建更
   *     新。`keyGenerator`参数是可选的，但是，为了使开发框架能够更好地识别数组更改并正确更新组件，建议提供。
   *     <br>默认使用框架内置的键值生成函数（详见下方说明）。
   *     <br>**说明：**
   *     <br>- item是当前数据项（可选），index是数据项索引值（可选）。
   *     <br>- 建议item的数据类型与数据源的数据类型保持一致，否则，当keyGenerator中存在与数据类型强相关的操作时，会导致子组件无法正常渲染，甚至运行时崩溃。
   *     <br>- `keyGenerator`缺省时，使用默认的键值生成函数，即
   *     `(item: Object, index: number) => { return viewId + '-' + index.toString(); }`，生成键值仅受索引值index影响（viewId在编译器转换过程中
   *     生成，同一个LazyForEach组件内的viewId一致）。
   *     <br>- 为保证`LazyForEach`正确、高效地更新子组件，避免渲染结果异常、渲染效率降低等问题，键值应满足以下条件。
   *     <br>1. 键值具有唯一性，每个数据项对应的键值互不相同。
   *     <br>2. 键值具有一致性，数据项不变时对应的键值也不变。
   * @param { LazyForEachOptions } [options] - 开发者配置项，用于使能自定义组件冻结和配置内存优化策略、资源释放策略。使用此配置项时，必须设置键值生成函数，否则将编译失败。不传入时使用默认配置（
   *     自定义组件冻结模式默认为AUTO，资源释放策略默认为BATCH，内存优化策略默认为DEFAULT）。
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
 * > **说明**
 * > 开发者指南见：[LazyForEach开发者指南](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md)。
 * 
 * LazyForEach是一种懒加载渲染控制组件，从提供的数据源中按需迭代数据并创建相应组件。在大量子组件的场景下，LazyForEach与缓存列表项、动态预加载、组件复用等方法配合使用，可以进一步提升滑动帧率并降低应用内存占用。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const LazyForEach: LazyForEachInterface;
