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
 * Defines a type for memory optimization strategy.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachMemOptStrategy {

  /**
   * No memory optimization.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DEFAULT = 0,

  /**
   * LazyForEach handle the memory optimization.
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
 * Enumerates the release strategies for LazyForEach discarded nodes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachReleaseStrategy {

  /**
   * Release all discarded nodes during the next idle period.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  BATCH = 0,

  /**
   * Release discarded nodes one by one during the next idle period based on the
   * remaining time of the current frame. Unreleased nodes will continue to be
   * released in subsequent idle periods based on the available idle time.
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
 * Enumerates the freeze modes for cached custom nodes that have been removed
 * from the component tree in LazyForEach.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare enum LazyForEachCustomComponentFreezeMode {

  /**
   * Follow the enableCustomComponentFreeze field in Metadata to determine
   * whether freezing takes effect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  AUTO = 0,

  /**
   * Freezing is disabled for cached custom nodes removed from the component tree.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  DISABLED = 1,

  /**
   * Freezing is enabled for cached custom nodes removed from the component tree.
   * State updates of cached custom components will be frozen.
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
 * Defines the options for LazyForEach.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 26.0.0 dynamic
 */
declare interface LazyForEachOptions {

  /**
   * Memory optimization strategy for LazyForEach.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  memoryOptimizationStrategy?: LazyForEachMemOptStrategy;

  /**
   * Freeze mode for cached custom nodes that have been removed from the
   * component tree. Default value: LazyForEachCustomComponentFreezeMode.AUTO.
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
   * Resource release strategy for LazyForEach discarded nodes.
   * Default value: LazyForEachReleaseStrategy.BATCH.
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
   * Type of data addition.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.ADD;

  /**
   * Index at which to insert the data record. The value range is [0, data source length - 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Number of data records to insert.
   *
   * Default value: **1**.
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
   * Keys to assign to the inserted data records. The original keys are used by default.
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
   * Type of data deletion.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.DELETE;

  /**
   * Index at which to start deleting data. The value range is [0, data source length - 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  index: number;

  /**
   * Number of data records to delete.
   *
   * Default value: **1**.
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
   * Type of data change.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.CHANGE;

  /**
   * Index of the data to be changed. The value range is [0, data source length - 1].
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
   * Start position for the movement. The value range is [0, data source length - 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  from: number;

  /**
   * End position for the movement. The value range is [0, data source length - 1].
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
   * First position for the exchange. The value range is [0, data source length - 1].
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  start: number;

  /**
   * Second position for the exchange. The value range is [0, data source length - 1].
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
   * Type of data movement.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.MOVE;

  /**
   * Positions for the movement. The value range is [0, data source length - 1].
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
   * Type of data exchange.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  type: DataOperationType.EXCHANGE;

  /**
   * Positions for the exchange. The value range is [0, data source length - 1].
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
 * Represents an operation for reloading data. If the **onDatasetChange** event contains a **DataOperationType.RELOAD**
 * operation, all other operations in the event are ineffective. In such cases, the framework will call **keyGenerator**
 * to perform a comparison of keys with their corresponding values.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
interface DataReloadOperation {

  /**
   * Type of data reloading.
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
 * All data operation types.
 *
 * > **NOTE**
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
 * Listener for data changes.
 *
 * > **NOTE**
 * >
 * > In APIs of **DataChangeListener** other than **onDatasetChange**, if the value of **index** is negative, the value
 * > is treated as **0** by default. In **onDatasetChange**, if the specified index in a **DataOperation** is outside
 * > the data source index range, the corresponding **DataOperation** does not take effect. (In **DataAddOperation**,
 * > the value of **index** can equal the data source length.)
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
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  onDataReloaded(): void;

  /**
   * Invoked when data is added to the position indicated by the specified index.
   *
   * > This API is deprecated since API version 8. You are advised to use
   * > [onDataAdd]{@link DataChangeListener.onDataAdd} instead.
   *
   * @param { number } index - Index of the position where data is added. The value range is
   *     [0, data source length - 1].<br>If the value is less than 0, it is treated as **0**. If the value is greater
   *     than the data source length minus 1, it is treated as the data source length minus 1.
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
   * @param { number } index - Index of the position where data is added. The value range is
   *     [0, data source length - 1].<br>If the value is less than 0, it is treated as **0**. If the value is greater
   *     than the data source length minus 1, it is treated as the data source length minus 1.
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
   * > This API is deprecated since API version 8. You are advised to use
   * > [onDataMove]{@link DataChangeListener.onDataMove} instead.
   *
   * > **NOTE**
   * >
   * > The ID must remain unchanged before and after data movement. If the ID changes, APIs for deleting and adding data
   * > must be called.
   *
   * @param { number } from - Original position of data. The value range is [0, data source length - 1].<br>If the value
   *     is less than 0, it is treated as **0**. If the value is greater than the data source length minus 1, it is
   *     treated as the data source length minus 1.
   * @param { number } to - Target position of data. The value range is [0, data source length - 1].<br>If the value is
   *     less than 0, it is treated as **0**. If the value is greater than the data source length minus 1, it is treated
   *     as the data source length minus 1.
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
   * > The ID must remain unchanged before and after data movement. If the ID changes, APIs for deleting and adding data
   * > must be called.
   *
   * @param { number } from - Original position of data. The value range is [0, data source length - 1].<br>If the value
   *     is less than 0, it is treated as **0**. If the value is greater than the data source length minus 1, it is
   *     treated as the data source length minus 1.
   * @param { number } to - Target position of data. The value range is [0, data source length - 1].<br>If the value is
   *     less than 0, it is treated as **0**. If the value is greater than the data source length minus 1, it is treated
   *     as the data source length minus 1.
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
   * > This API is deprecated since API version 8. You are advised to use
   * > [onDataDelete]{@link DataChangeListener.onDataDelete} instead.
   *
   * @param { number } index - Index of the position where data is deleted. The value range is
   *     [0, data source length - 1].<br>If the value is less than 0, it is treated as **0**. If the value is greater
   *     than the data source length minus 1, it is treated as the data source length minus 1.
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
   * > Before **onDataDelete** is called, ensure that the corresponding data in **dataSource** has been deleted.
   * > Otherwise, undefined behavior will occur during page rendering.
   *
   * @param { number } index - Index of the position where data is deleted. The value range is
   *     [0, data source length - 1].<br>If the value is less than 0, it is treated as **0**. If the value is greater
   *     than the data source length minus 1, it is treated as the data source length minus 1.
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
   * > This API is deprecated since API version 8. You are advised to use
   * > [onDataChange]{@link DataChangeListener.onDataChange} instead.
   *
   * @param { number } index - Listener for data changes. The value range is [0, data source length - 1].<br>If the
   *     value is less than 0, it is treated as **0**. If the value is greater than the data source length minus 1, it
   *     is treated as the data source length minus 1.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @since 7 dynamiconly
   * @deprecated since 8
   * @useinstead DataChangeListener.onDataChange
   */
  onDataChanged(index: number): void;

  /**
   * Invoked when data in the position indicated by the specified index is changed.
   *
   * @param { number } index - Index of the position where data is changed. The value range is
   *     [0, data source length - 1].<br>If the value is less than 0, it is treated as **0**. If the value is greater
   *     than the data source length minus 1, it is treated as the data source length minus 1.
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
 * Data source of **LazyForEach**.
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
   * @param { number } index - Index of the data record to obtain. The value range is [0, data source length - 1].
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
   * @param { DataChangeListener } listener - Listener for data changes.
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
   * @param { DataChangeListener } listener - Listener for data changes.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  unregisterDataChangeListener(listener: DataChangeListener): void;
}

/**
 * The [drag-and-drop sorting]{@link common} attribute is supported.
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
 * > **NOTE**
 *
 * For details about the development, see
 * [LazyForEach: Lazy Data Loading](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md).
 *
 * In scenarios involving a large number of child components, LazyForEach, when combined with techniques such as cached
 * list items, dynamic preloading, and component reuse, can significantly improve scrolling frame rates while reducing
 * memory usage. For best practices, see
 * [Optimizing Frame Loss for Long List Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-best-practices-long-list).
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
   *     data item in the array.<br>**NOTE**<br>- (Optional) **item**: data item.<br>(Optional) **index**: index of the
   *     data item.<br>- The function body of **itemGenerator** must be included in braces {...}.<br>- **itemGenerator**
   *     can and must generate only one child component for each iteration.<br>- The **if** statement is allowed in
   *     **itemGenerator**, but you must ensure that each branch of the **if** statement creates a child component of
   *     the same type.
   * @param { function } keyGenerator - ID generation function, which generates a unique and fixed ID for each data item
   *     in the data source. Components are updated only when their generated key changes. The **keyGenerator**
   *     parameter is optional, but you are advised to provide it so that the development framework can better identify
   *     array changes and update components correctly.<br>The default value is an empty callback.<br>**NOTE**<br>- (
   *     Optional) **item**: data item.<br>(Optional) **index**: index of the data item.<br>- When **keyGenerator** is
   *     omitted, the default function **(item: Object, index: number) => { return viewId + '-' + index.toString(); }**
   *     is used, where key generation is affected by the index value only (**viewId** is compiler-generated and
   *     consistent within the same **LazyForEach** component).<br>- To ensure correct and efficient child component
   *     updates, avoiding rendering anomalies or performance degradation, keys must meet the following requirements:<br
   *     >1. Uniqueness: Each data item must have a distinct key.<br>2. Consistency: Keys must remain unchanged for
   *     unmodified data items.
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
 * > **NOTE**
 *
 * For details about the development, see
 * [LazyForEach: Lazy Data Loading](docroot://ui/rendering-control/arkts-rendering-control-lazyforeach.md).
 *
 * In scenarios involving a large number of child components, LazyForEach, when combined with techniques such as cached
 * list items, dynamic preloading, and component reuse, can significantly improve scrolling frame rates while reducing
 * memory usage. For best practices, see
 * [Optimizing Frame Loss for Long List Loading](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-best-practices-long-list).
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @noninterop
 */
declare const LazyForEach: LazyForEachInterface;