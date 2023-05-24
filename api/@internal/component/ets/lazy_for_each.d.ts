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
 * Data Change Listener.
 * @since 7
 */
/**
 * Data Change Listener.
 * @crossplatform
 * @since 10
 */
declare interface DataChangeListener {
  /**
   * Data ready.
   * @since 7
   */
  /**
   * Data ready.
   * @crossplatform
   * @since 10
   */
  onDataReloaded(): void;

  /**
   * Data added.
   * @since 7
   * @deprecated since 8
   * @useinstead onDataAdd
   */
  onDataAdded(index: number): void;

  /**
   * Data added.
   * @since 8
   */
  /**
   * Data added.
   * @crossplatform
   * @since 10
   */
  onDataAdd(index: number): void;

  /**
   * Data moved.
   * @since 7
   * @deprecated since 8
   * @useinstead onDataMove
   */
  onDataMoved(from: number, to: number): void;

  /**
   * Data moved.
   * @since 8
   */
  /**
   * Data moved.
   * @crossplatform
   * @since 10
   */
  onDataMove(from: number, to: number): void;

  /**
   * Data deleted.
   * @since 7
   * @deprecated since 8
   * @useinstead onDataDelete
   */
  onDataDeleted(index: number): void;

  /**
   * Data deleted.
   * @since 8
   */
  /**
   * Data deleted.
   * @crossplatform
   * @since 10
   */
  onDataDelete(index: number): void;

  /**
   * Call when has data change.
   * @since 7
   * @deprecated since 8
   * @useinstead onDataChange
   */
  onDataChanged(index: number): void;

  /**
   * Call when has data change.
   * @since 8
   */
  /**
   * Call when has data change.
   * @crossplatform
   * @since 10
   */
  onDataChange(index: number): void;
}

/**
 * Developers need to implement this interface to provide data to LazyForEach component.
 * @since 7
 */
/**
 * Developers need to implement this interface to provide data to LazyForEach component.
 * @crossplatform
 * @since 10
 */
declare interface IDataSource {
  /**
   * Total data count.
   * @since 7
   */
  /**
   * Total data count.
   * @crossplatform
   * @since 10
   */
  totalCount(): number;

  /**
   * Return the data of index.
   * @since 7
   */
  /**
   * Return the data of index.
   * @crossplatform
   * @since 10
   */
  getData(index: number): any;

  /**
   * Register data change listener.
   * @since 7
   */
  /**
   * Register data change listener.
   * @crossplatform
   * @since 10
   */
  registerDataChangeListener(listener: DataChangeListener): void;

  /**
   * Unregister data change listener.
   * @since 7
   */
  /**
   * Unregister data change listener.
   * @crossplatform
   * @since 10
   */
  unregisterDataChangeListener(listener: DataChangeListener): void;
}

/**
 * Lazy loading.
 * @since 7
 */
/**
 * Lazy loading.
 * @crossplatform
 * @since 10
 */
interface LazyForEachInterface {
  /**
   * Enter the value to obtain the LazyForEach.
   * @since 7
   */
  /**
   * Enter the value to obtain the LazyForEach.
   * @crossplatform
   * @since 10
   */
  (
    dataSource: IDataSource,
    itemGenerator: (item: any, index?: number) => void,
    keyGenerator?: (item: any, index?: number) => string,
  ): LazyForEachInterface;
}

/**
 * Defines LazyForEach Component.
 * @since 7
 */
/**
 * Defines LazyForEach Component.
 * @crossplatform
 * @since 10
 */
declare const LazyForEach: LazyForEachInterface;
