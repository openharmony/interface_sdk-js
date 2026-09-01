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
 * @file Prefetching
 * @kit ArkUI
 */

/**
 * 继承自[IDataSource]{@link IDataSource}。实现该接口，提供具备预取能力的数据源。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 12 dynamic
 */
export interface IDataSourcePrefetching extends IDataSource {
  /**
   * 从数据集中预取指定的数据项。该方法可以为同步，也可为异步。当可见区域发生变化时，预取算法判断即将进入可见区域的数据项需要预取时，会调用该方法。
   *
   * @param { number } index - 预取数据项索引值，取值范围为[0, totalCount()-1]。
   * @returns { Promise<void> | void } 异步执行时返回Promise对象，同步执行时无返回值。Promise仅表示操作完成，无实际返回内容。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  prefetch(index: number): Promise<void> | void;

  /**
   * 取消从数据集中预取指定的数据项。该方法可以为同步，也可为异步。该方法为可选方法，若数据源未实现该方法，则不执行取消预取操作。
   *
   * @param { number } index - 取消预取数据项索引值，取值范围为[0, totalCount()-1]。
   * @returns { Promise<void> | void } 异步执行时返回Promise对象，同步执行时无返回值。Promise仅表示操作完成，无实际返回内容。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  cancel?(index: number): Promise<void> | void;
}

/**
 * 实现此接口以提供预取能力，配合LazyForEach在List、Grid等容器组件滑动浏览时预取数据项，提升用户浏览体验。
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
   * 当可见区域边界发生改变时调用此方法，将当前可见区域范围通知给Prefetcher，使其据此决定预取或取消预取的数据项。调用此方法前需先通过setDataSource方法设置数据源。支持与`List`、`Grid`、
   * `WaterFlow`和`Swiper`组件配合使用。
   *
   * @param { number } minVisible - 当前可见区域中第一项数据的索引值，取值范围为[0, totalCount()-1]。超出范围时计算错误。
   * @param { number } maxVisible - 当前可见区域中最后一项数据的索引值，取值范围为[0, totalCount()-1]。超出范围时计算错误。
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
   * 传入支持预取的数据源，在创建对象时绑定到Prefetcher。若创建时未传入数据源，也可在创建后通过setDataSource方法设置。
   *
   * @param { IDataSourcePrefetching } dataSource - 支持预取能力的数据源。不传入时默认为空，后续可通过setDataSource方法设置数据源。
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
   * 当可见区域边界发生改变时调用此方法，将当前可见区域范围通知给Prefetcher，使其据此决定预取或取消预取的数据项。调用此方法前需确保已通过构造函数或setDataSource方法设置数据源。支持与`List`、`Grid`、
   * `WaterFlow`和`Swiper`组件配合使用。
   *
   * @param { number } minVisible - 当前可见区域中第一项数据的索引值，取值范围为[0, totalCount()-1]。超出范围时计算错误。
   * @param { number } maxVisible - 当前可见区域中最后一项数据的索引值，取值范围为[0, totalCount()-1]。超出范围时计算错误。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   */
  visibleAreaChanged(minVisible: number, maxVisible: number): void;
}