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
 * Enumerates the memory optimization strategies of **LazyForEach**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachMemOptStrategy {
  /**
   * No memory optimization strategy.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,
  /**
   * Automatic memory optimization strategy. When the number of list items carried by **LazyForEach** is large (for
   * example, hundreds or more) or the structure of a single child component is complex (for example, containing multiple
   * nested layers or dozens of child nodes), resulting in high memory usage (which can be detected through a performance
   * analysis tool), it is recommended to use this strategy to reduce memory usage.
   *
   * When the application moves to the background, when the component where **LazyForEach** resides is invisible (the
   * [visibility]{@link CommonMethod#visibility} attribute is set to a value other than [Visible]{@link Visibility}, or
   * the component area is 0, regardless of occlusion), or when the device is low on memory
   * ([MemoryLevel]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.MemoryLevel} reaches **MEMORY_LEVEL_LOW** or
   * **MEMORY_LEVEL_CRITICAL**), for devices with memory greater than 6 GB, some nodes in the
   * [preload area](docroot://ui/rendering-control/arkts-rendering-control-overview.md#basic-concepts) are released until
   * the number of nodes in both the upper and lower preload areas does not exceed 2; for devices with memory less than
   * or equal to 6 GB, all nodes in the preload area are released.
   *
   * When the application returns to the foreground, when the component where **LazyForEach** resides becomes visible
   * again, or when **LazyForEach** scrolls, the nodes in the preload area are restored.
   *
   * Releasing and restoring nodes triggers the
   * [custom component lifecycle](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md).
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
 * Configures the resource release strategy and memory optimization strategy of **LazyForEach**, and whether to enable
 * custom component freezing.
 *
 * > **NOTE**
 * >
 * > 1. When using **LazyForEachOptions**, ensure that the **keyGenerator** function has been defined; otherwise,
 * > compilation will fail.
 * >
 * > 2. Custom component freezing: When a custom component is directly used under **LazyForEach**, this configuration
 * > determines whether to enable the freezing feature of the custom component. Once enabled, when the custom component
 * > is outside the visible area, the framework pauses the processing logic such as state variable updates of the
 * > component to reduce resource consumption; when the component re-enters the visible area, normal processing resumes.
 * >
 * > 3. Resource release strategy: **LazyForEach** manages the nodes in the on-screen area and the preloading area. When
 * > a node slides out of the preloading area and leaves the management scope of **LazyForEach**, **LazyForEach** no
 * > longer manages the node, and the node resources are released. The **BATCH** mode is used by default, in which
 * > **LazyForEach** releases all nodes to be released in the current frame. The **PROGRESSIVE** mode releases resources
 * > one by one, and when releasing the resources of each node, it checks whether the time of the current frame is
 * > sufficient; if not, the release is postponed to subsequent frames. Under this strategy, **LazyForEach** may hold
 * > node resources, and the nodes in the cache pool cannot be replenished in time, which reduces the reuse rate in
 * > scenarios where nodes are obtained quickly. Developers should select an appropriate resource release strategy based
 * > on the application scenario.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface LazyForEachOptions {
  /**
   * Memory optimization strategy of **LazyForEach**. This parameter is set when **LazyForEach** is created and does not
   * support dynamic modification.
   *
   * Default value: [DEFAULT]{@link LazyForEachMemOptStrategy}
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  memoryOptimizationStrategy?: LazyForEachMemOptStrategy;

  /**
   * Whether to enable custom component freezing. It takes effect only when a custom component is directly used under
   * **LazyForEach**, and does not apply to other cases.
   * Default value: [AUTO]{@link LazyForEachCustomComponentFreezeMode}.
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
   * Resource release strategy for **LazyForEach**.
   * Default value: [BATCH]{@link LazyForEachReleaseStrategy}.
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
 * Enumerates the data operation types.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare enum DataOperationType {
  /**
   * Data addition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  ADD = 'add',

  /**
   * Data deletion.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  DELETE = 'delete',

  /**
   * Data exchange.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  EXCHANGE = 'exchange',

  /**
   * Data movement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  MOVE = 'move',

  /**
   * Data change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  CHANGE = 'change',

  /**
   * Data reloading.
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
 * Selects the resource release strategy of **LazyForEach**.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachReleaseStrategy {
  /**
   * **BATCH** is the resource release strategy used by default. This strategy releases the resources of all discarded
   * nodes in the current frame. If node reuse exists, the node reuse rate can be maximized. However, if a node has a
   * deep component hierarchy or a large number of child components, releasing the resources of a single node takes a
   * long time. Releasing a large number of nodes in the current frame may cause an oversized frame and affect
   * performance.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BATCH = 0,

  /**
   * **PROGRESSIVE** is a strategy that automatically adjusts node release based on the node release time and the
   * remaining time of the current frame. If the remaining time of the current frame is insufficient to release the
   * remaining nodes, the release is postponed to subsequent frames, avoiding oversized frames and optimizing
   * performance. In this case, **LazyForEach** continues to hold the nodes, which may reduce the reuse rate. When a
   * large number of nodes are generated and cannot be released in time, memory usage increases accordingly. Developers
   * need to pay attention to the impact on performance and memory and select a proper resource release strategy.
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
 * Selects whether to enable custom component freezing.
 *
 * > **NOTE**
 * >
 * > This configuration is added only when a custom component is directly used under **LazyForEach**. It is not
 * > applicable in other cases.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachCustomComponentFreezeMode {
  /**
   * Follows the **metadata** settings in the **module.json5** configuration file.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  AUTO = 0,

  /**
   * Does not enable custom component freezing.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISABLED = 1,

  /**
   * Enables custom component freezing.
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
 * Represents an operation for adding data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataAddOperation {
  /**
   * Data addition type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.ADD;

  /**
   * Index of the added data. The value range is [0, data source length]. Rendering is abnormal when the value exceeds
   * the range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Number of added data items. It must be a positive integer (greater than 0), and the default value is **1**.
   * Passing 0 or a negative number may cause abnormal rendering.
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
   * Assigns a key to the added data. The original key is used by default. The key supports the string or
   * Array\<string\> type. If the key is an array whose length is greater than **count**, an invalid parameter error is
   * reported.
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
 * Represents an operation for deleting data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataDeleteOperation {
  /**
   * Data deletion type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.DELETE;

  /**
   * Index of the start position for deletion. The value range is [0, data source length - 1]. Rendering is abnormal
   * when the value exceeds the value range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Number of data items to delete. It must be a positive integer (greater than 0), and the sum of **index** and
   * **count** must not exceed the data source length. The default value is 1. If a negative number is passed in, this
   * operation is ignored. If 0 is passed in, the data item at the **index** position is abnormally marked for deletion.
   * If the sum of **index** and **count** exceeds the data source length, rendering may be abnormal.
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
 * Represents an operation for changing data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataChangeOperation {
  /**
   * Data change type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.CHANGE;

  /**
   * Index of the changed data. The value range is [0, data source length - 1]. Rendering is abnormal when the value
   * exceeds the value range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * New key to assign to the changed data. The original key is used by default.
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
 * Defines position of moved data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface MoveIndex {
  /**
   * Start position of the move. The value range is [0, data source length - 1]. Rendering is abnormal when the value
   * exceeds the value range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  from: number;
  /**
   * Target position of the move. The value range is [0, data source length - 1]. Rendering is abnormal when the value
   * exceeds the value range.
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
 * Defines position of exchange data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface ExchangeIndex {
  /**
   * First swap position. The value range is [0, data source length - 1]. Rendering is abnormal when the value exceeds
   * the value range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start: number;
  /**
   * Second swap position. The value range is [0, data source length - 1]. Rendering is abnormal when the value exceeds
   * the value range.
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
 * Defines new key of exchange data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface ExchangeKey {
  /**
   * New key to assign to the first position in the exchange. The original key is used by default.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start: string;
  /**
   * New key to assign to the second position in the exchange. The original key is used by default.
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
 * Represents an operation for moving data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataMoveOperation {
  /**
   * Data move type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.MOVE;

  /**
   * Move position. The value range is [0, data source length - 1]. Rendering is abnormal when the value exceeds the
   * value range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: MoveIndex;

  /**
   * New key to assign to the moved data. The original key is used by default.
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
 * Represents an operation for exchanging data.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataExchangeOperation {
  /**
   * Data exchange type.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.EXCHANGE;

  /**
   * Exchange position. The value range is [0, data source length - 1]. Rendering is abnormal when the value exceeds
   * the value range.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: ExchangeIndex;

  /**
   * New keys to assign to the exchanged data. The original keys are used by default.
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
 * Reloads all data operations and configures whether to allow reuse of old child components during the update. When
 * **onDatasetChange** contains a **DataOperationType.RELOAD** operation, all other operations become invalid, and the
 * framework calls **keyGenerator** to compare keys.
 *
 * When reuse of old child components during the update is allowed and used together with
 * [@Reusable](docroot://ui/state-management/arkts-reusable.md)/[@ReusableV2](docroot://ui/state-management/arkts-new-reusableV2.md),
 * components in the reuse pool are used first. If no reusable component is available in the reuse pool but a reusable
 * component exists among the old child components of **LazyForEach**, that component will be recycled and reused as a
 * new child component. If no reusable component exists among the old child components of **LazyForEach** either, a new
 * child component will be created.
 *
 * When reuse of old child components during the update is allowed but **@Reusable/@ReusableV2** is not used, data items
 * whose keys do not change will use the original child components, while those whose keys change will have their child
 * components rebuilt.
 *
 * When reuse of old child components during the update is not allowed, data items whose keys do not change will use the
 * original child components. For data items whose keys change, if **@Reusable/@ReusableV2** is used and a component is
 * available in the reuse pool, the old component will be reused; otherwise, a new child component will be created.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataReloadOperation {
  /**
   * Type for reloading all data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.RELOAD;

  /**
   * Whether to reuse the old child components during the update.
   * **true**: allows reusing the old child components during the update.
   * **false**: does not allow reusing the old child components during the update.
   * Default value: **false**. When the value is **undefined** or **null**, the default value is used.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  reuseImmediately?: boolean;
}

/**
 * All data operation types.
 *
 * @unionmember { DataAddOperation } Represents an operation for adding data.
 * @unionmember { DataDeleteOperation } Represents an operation for deleting data.
 * @unionmember { DataChangeOperation } Represents an operation for changing data.
 * @unionmember { DataMoveOperation } Represents an operation for moving data.
 * @unionmember { DataExchangeOperation } Represents an operation for exchanging data.
 * @unionmember { DataReloadOperation } Represents an operation for reloading data.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
declare type DataOperation =
  DataAddOperation | DataDeleteOperation | DataChangeOperation | DataMoveOperation | DataExchangeOperation | DataReloadOperation;

/**
 * Defines the data change listener, used to notify the **LazyForEach** component to perform corresponding rendering
 * updates when the data source changes. It supports listening for multiple data change types, including data addition,
 * deletion, change, move, swap, and reload.
 *
 * > **NOTE**
 * >
 * > In the methods of **DataChangeListener** other than **onDatasetChange**, when a parameter contains index and its
 * > value is negative, it is replaced with 0 by default. In **onDatasetChange**, when a single **DataOperation**
 * > parameter contains index and its value is outside the index range of the data source (in **DataAddOperation**,
 * > **index** can be equal to the data source length), rendering exceptions may occur.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface DataChangeListener {
  /**
   * Invoked when all data is reloaded. For data items whose key remains unchanged, the original child component is
   * used. For data items whose key changes, a new child component is created.
   *
   * > **NOTE**
   * >
   * > This API cannot be used together with the **onDatasetChange** API.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDataReloaded(): void;

  /**
   * Notifies components to reload all data and configures whether old child components can be reused during the update.
   * This API must be used together with **@Reusable/@ReusableV2**. It is invoked after the data reload is complete.
   *
   * When reuse of old child components during the update is allowed and this API is used together with
   * [@Reusable](docroot://ui/state-management/arkts-reusable.md)/[@ReusableV2](docroot://ui/state-management/arkts-new-reusableV2.md),
   * components in the reuse pool are used first. If no component in the reuse pool can be reused but there is a reusable
   * component among the old child components of **LazyForEach**, that component is recycled and reused as a new child
   * component. If no reusable component exists among the old child components of **LazyForEach** either, a new child
   * component is created.
   *
   * When reuse of old child components during the update is allowed but **@Reusable/@ReusableV2** is not used, data
   * items whose keys do not change use the original child components, while those whose keys change have their child
   * components rebuilt.
   *
   * When reuse of old child components during the update is not allowed, data items whose keys do not change use the
   * original child components. For data items whose keys change, if **@Reusable/@ReusableV2** is used and a component
   * is available in the reuse pool, the old component is reused; otherwise, a new child component is created.
   *
   * @param { boolean } reuseImmediately - Whether old child components can be reused during the update.
   *     <br>**true**: old child components can be reused during the update.
   *     <br>**false**: old child components cannot be reused during the update.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.1 dynamic
   */
  onDataReloaded(reuseImmediately: boolean): void;

  /**
   * Invoked when data is added to the position indicated by the specified index.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 8. Use
   * > [onDataAdd]{@link DataChangeListener.onDataAdd} instead.
   *
   * @param { number } index - Index of the position where data is added. The value range is
   *     [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataAdd
   */
  onDataAdded(index: number): void;

  /**
   * Invoked when data is added to the position indicated by the specified index.
   *
   * > **NOTE**
   * >
   * > This API cannot be used together with the **onDatasetChange** API.
   *
   * @param { number } index - Index of the position where data is added. The value range is
   *     [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataAdd(index: number): void;

  /**
   * Invoked when data is moved, that is, when data is swapped between the **from** and **to** positions.
   *
   * > **NOTE**
   * >
   * > - This API is supported since API version 7 and deprecated since API version 8. Use
   * > [onDataMove]{@link DataChangeListener.onDataMove} instead.
   * >
   * > - The ID must remain unchanged before and after data movement. If the ID changes, APIs for deleting and adding
   * > data must be called.
   *
   * @param { number } from - Original position of data. The value range is [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @param { number } to - Target position of data. The value range is [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataMove
   */
  onDataMoved(from: number, to: number): void;

  /**
   * Invoked when data is moved, that is, when data is swapped between the **from** and **to** positions.
   *
   * > **NOTE**
   * >
   * > - The key must remain unchanged before and after the data move. If the key changes, use the data deletion and
   * > data addition APIs instead.
   * > - This API cannot be used together with the **onDatasetChange** API.
   *
   * @param { number } from - Original position of data. The value range is [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @param { number } to - Target position of data. The value range is [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataMove(from: number, to: number): void;

  /**
   * Invoked when data is deleted from the position indicated by the specified index. LazyForEach will update the
   * displayed content accordingly.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 8. Use
   * > [onDataDelete]{@link DataChangeListener.onDataDelete} instead.
   *
   * @param { number } index - Index of the position where data is deleted. The value range is
   *     [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataDelete
   */
  onDataDeleted(index: number): void;

  /**
   * Invoked when data is deleted from the position indicated by the specified index. LazyForEach will update the
   * displayed content accordingly.
   *
   * > **NOTE**
   * >
   * > - Ensure that the corresponding data in **dataSource** has been deleted before **onDataDelete** is called.
   * > Otherwise, undefined behavior may occur during page rendering.
   * > - This API cannot be used together with the **onDatasetChange** API.
   *
   * @param { number } index - Index of the position where data is deleted. The value range is
   *     [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataDelete(index: number): void;

  /**
   * Invoked when data in the position indicated by the specified index is changed.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 8. Use
   * > [onDataChange]{@link DataChangeListener.onDataChange} instead.
   *
   * @param { number } index - Listener for data changes. The value range is [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataChange
   */
  onDataChanged(index: number): void;

  /**
   * Notifies components that the data at the **index** position has changed. Called after the data change is complete.
   *
   * > **NOTE**
   * >
   * > This API cannot be used together with the **onDatasetChange** API.
   *
   * @param { number } index - Index of the position where data is changed. The value range is
   *     [0, data source length - 1].
   *     <br>If the value is less than 0, it is treated as **0**. If the value is greater than the data source length
   *     minus 1, it is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  onDataChange(index: number): void;

  /**
   * Invoked when data is processed in batches to notify the component of refreshing.
   *
   * > **NOTE**
   * >
   * > This API cannot be used together with other data operation APIs of **DataChangeListener**. For example, in the
   * > same **LazyForEach**, if you have called **onDataAdd**, do not call **onDatasetChange**; if you have called
   * > **onDatasetChange**, do not call **onDataAdd** or other data operation APIs. Different **LazyForEach** instances
   * > on the page do not affect each other. When data is processed in batches within the same **onDatasetChange**
   * > callback, if multiple **DataOperation** instances target the same index, only the first **DataOperation** will
   * > take effect.
   *
   * @param { DataOperation[] } dataOperations - Array of data operations performed.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  onDatasetChange(dataOperations: DataOperation[]): void;
}

/**
 * Defines the data source of **LazyForEach**. The developer needs to implement this API to provide data access and
 * data change notification capabilities, including obtaining the total number of data items, obtaining data by index,
 * and registering and unregistering data change listeners.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare interface IDataSource {
  /**
   * Obtains the total number of data items.
   *
   * @returns { number } Total number of data items, which is subject to the data source.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  totalCount(): number;

  /**
   * Obtains the data item that matches the specified index.
   *
   * @param { number } index - Index of the data. The value range is [0, data source length - 1]. When the value
   *     exceeds the range, the behavior is determined by the data source implementation. Developers are advised to
   *     perform boundary checks.
   * @returns { any } Data item that matches the specified index. The actual type is determined by the data source
   *     implementation.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  getData(index: number): any;

  /**
   * Registers a listener for data changes.
   *
   * @param { DataChangeListener } listener - Data change listener, used to notify components to refresh when the data
   *     source changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  registerDataChangeListener(listener: DataChangeListener): void;

  /**
   * Unregisters the listener for data changes.
   *
   * @param { DataChangeListener } listener - Data change listener, used to notify components to refresh when the data
   *     source changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  unregisterDataChangeListener(listener: DataChangeListener): void;
}

/**
 * The [drag-and-drop sorting]{@link ./common} attribute is supported.
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
 * **LazyForEach** is a lazy loading rendering control component that iterates data on demand from the provided data
 * source and creates corresponding components. In scenarios with a large number of child components, **LazyForEach**,
 * when used together with methods such as cached list items, dynamic preloading, and component reuse, can further
 * improve the sliding frame rate and reduce the memory usage of the application. For best practices, see
 * [Optimizing Frame Loss for Long List Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-best-practices-long-list).
 *
 * For details about the development, see
 * [LazyForEach: Lazy Data Loading](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md).
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
   * **LazyForEach** iterates over provided data sources and creates corresponding components during each iteration.
   * When **LazyForEach** is used in a scrolling container, the framework creates components as required within the
   * visible area of the scrolling container. When a component is out of the visible area, the framework destroys and
   * reclaims the component to reduce memory usage.
   *
   * @param { IDataSource } dataSource - **LazyForEach** data source. You need to implement related APIs.
   * @param { function } itemGenerator - Child component generation function, which generates a child component for each
   *     data item in the array.
   *     <br>**NOTE**
   *     <br>- (Optional) **item**: data item.
   *     <br>(Optional) **index**: index of the data item.
   *     <br>- The function body of **itemGenerator** must be included in braces {...}.
   *     <br>- **itemGenerator** can and must generate only one child component for each iteration.
   *     <br>- The **if** statement is allowed in **itemGenerator**, but you must ensure that each branch of the **if**
   *     statement creates a child component of the same type.
   * @param { function } keyGenerator - ID generation function, which generates a unique and fixed ID for each data item
   *     in the data source. Components are updated only when their generated key changes. The **keyGenerator**
   *     parameter is optional, but you are advised to provide it so that the development framework can better identify
   *     array changes and update components correctly.
   *     <br>The default value is an empty callback.
   *     <br>**NOTE**
   *     <br>- (Optional) **item**: data item.
   *     <br>(Optional) **index**: index of the data item.
   *     <br>- When **keyGenerator** is omitted, the default function
   *     **(item: Object, index: number) => { return viewId + '-' + index.toString(); }** is used, where key generation
   *     is affected by the index value only (**viewId** is compiler-generated and consistent within the same
   *     **LazyForEach** component).
   *     <br>- To ensure correct and efficient child component updates, avoiding rendering anomalies or performance
   *     degradation, keys must meet the following requirements:
   *     <br>1. Uniqueness: Each data item must have a distinct key.
   *     <br>2. Consistency: Keys must remain unchanged for unmodified data items.
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
   * Enter the value to obtain the LazyForEach.
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
 * **LazyForEach** is a lazy loading rendering control component that iterates data on demand from the provided data
 * source and creates corresponding components. In scenarios with a large number of child components, **LazyForEach**,
 * when used together with methods such as cached list items, dynamic preloading, and component reuse, can further
 * improve the sliding frame rate and reduce the memory usage of the application. For best practices, see
 * [Optimizing Frame Loss for Long List Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-best-practices-long-list).
 *
 * For details about the development, see
 * [LazyForEach: Lazy Data Loading](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const LazyForEach: LazyForEachInterface;
