/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * Used in conjunction with **LazyForEach**, the **Prefetcher** module provides content prefetching capabilities for 
 * container components such as **List**, **Grid**, **WaterFlow**, and **Swiper** during scrolling, to enhance the user 
 * browsing experience. 
 * 
 * > **NOTE**
 * >
 * > - The APIs of this module cannot be used in the Previewer.
 * 
 * ###### Supplementary Notes
 * 
 * You can also use the OpenHarmony third-party library 
 * [@netteam/prefetcher](https://ohpm.openharmony.cn/#/en/detail/@netteam%2Fprefetcher) to implement the prefetching 
 * functionality. This library provides additional APIs for more convenient and efficient data prefetching.
 *
 * @file Prefetching
 * @kit ArkUI
 */

/**
 * 继承自[IDataSource]{@link IDataSource}。实现该接口，提供具备预取能力的DataSource。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface IDataSourcePrefetching extends IDataSource {

  /**
   * 从数据集中预取指定的元素。该方法可以为同步，也可为异步。
   *
   * @param { number } index - 预取数据项索引值。
   * @returns { Promise<void> | void } Promise when this API is executed asynchronously; no return value when this API
   *     is executed synchronously. The promise only indicates that the operation is completed and contains no actual
   *     return content.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  prefetch(index: number): Promise<void> | void;

  /**
   * 取消从数据集中预取指定的元素。该方法可以为同步，也可为异步。
   *
   * @param { number } index - 取消预取数据项索引值。
   * @returns { Promise<void> | void } Promise when this API is executed asynchronously; no return value when this API
   *     is executed synchronously. The promise only indicates that the operation is completed and contains no actual
   *     return content.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancel?(index: number): Promise<void> | void;
}

/**
* 实现此接口以提供预取能力。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface IPrefetcher {

  /**
   * 设置支持预取的数据源以绑定到Prefetcher。
   *
   * @param { IDataSourcePrefetching } dataSource - 支持预取能力的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setDataSource(dataSource: IDataSourcePrefetching): void;

  /**
   * 当可见区域边界发生改变时调用此方法。支持与`List`、`Grid`、`WaterFlow`和`Swiper`组件配合使用。
   *
   * @param { number } minVisible - 列表可见区域的上界。
   * @param { number } maxVisible - 列表可见区域的下界。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visibleAreaChanged(minVisible: number, maxVisible: number): void;
}

/**
* BasicPrefetcher是IPrefetcher的基础实现。它提供了一种智能数据预取算法，以根据屏幕上可见区域的实时变化和预取持续时间的变化来决定应预取哪些数据项。它还可以根据用户的滚动操作来确定哪些预取请求应该被取消。
*
* BasicPrefetcher对象不支持使用JSON序列化。
*
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export class BasicPrefetcher implements IPrefetcher {

  /**
   * 传入支持预取的DataSource以绑定到Prefetcher。
   *
   * @param { IDataSourcePrefetching } dataSource - 支持预取能力的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  constructor(dataSource?: IDataSourcePrefetching);

  /**
   * 设置支持预取的数据源以绑定到Prefetcher。
   *
   * @param { IDataSourcePrefetching } dataSource - 支持预取能力的数据源。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  setDataSource(dataSource: IDataSourcePrefetching): void;

  /**
   * 当可见区域边界发生改变时调用此方法。支持与`List`、`Grid`、`WaterFlow`和`Swiper`组件配合使用。
   *
   * @param { number } minVisible - 列表可见区域的上界。
   * @param { number } maxVisible - 列表可见区域的下界。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visibleAreaChanged(minVisible: number, maxVisible: number): void;
}