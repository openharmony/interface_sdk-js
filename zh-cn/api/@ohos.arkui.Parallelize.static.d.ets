/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 UI并行化创建
 * @file
 UI并行化创建
 * @kit ArkUI
 */

import { Builder, CustomBuilder, CustomBuilderT } from './arkui/component/builder';

/**
 * 使用ParallelizeUI并行化创建UI时的可选参数。
 *
 * @interface ParallelOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
export interface ParallelOption {
  /**
   * 是否开启UI创建并行化。
   * 
   * true：开启并行化创建；false：不开启并行化创建。
   * 
   * 默认值：true
   * 
   * 取值为undefined时，按默认值true处理。
   *
   * @type { ?boolean }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @stagemodelonly
   * @since 23 staticonly
   */
  enable?: boolean;
}

/**
 * 声明式的并行化创建UI方法。options参数为undefined时，默认开启并行化创建。
 *
 * @param { ParallelOption | undefined } options - 使用ParallelizeUI方法创建组件时选择是否开启并行化的参数，当options参数为undefined时，默认开启并行化创建。
 * @param { CustomBuilder } content_ - 定义要创建的UI内容，通过尾随闭包"{...}"的形式传入。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
@Builder
export declare function ParallelizeUI(
  options: ParallelOption | undefined,
  content_: CustomBuilder,
): void;


/**
 * 声明式UI并行化创建接口。该方法支持在并行化环境中安全地使用外部定义的状态变量。options参数为undefined时，默认开启并行化创建。
 *
 * @param { ParallelOption | undefined } options - 使用ParallelizeUI方法创建组件时选择是否开启并行化的参数，当options参数为undefined时，默认开启并行化创建。
 * @param { () => T } param - 参数生成函数，用于生成content_调用时的参数。该函数会在UI线程调用，开发者可将并行创建需要用到的数据在此处进行拷贝。避免数据多线程读写引发的安全性问题。
 * @param { CustomBuilderT<T> } content_ - 定义要创建的UI内容。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
@Builder
export declare function ParallelizeUI<T>(
  options: ParallelOption | undefined,
  param: () => T,
  content_: CustomBuilderT<T>,
): void;

/**
 * 声明式UI并行化循环创建接口。在非List和Grid中使用时，并行创建数组中定义的所有UI节点。在List或Grid容器中使用时，仅按需并行创建当前可见的节点。options参数为undefined时，默认开启并行化创建。
 *
 * @param { ParallelOption | undefined } options - 使用ParallelizeUI方法创建组件时选择是否开启并行化的参数，当options参数为undefined时，默认开启并行化创建。
 * @param { Array<V> } arr - 数据源，为Array类型的数组。
 * @param { (item: V, index: int) => T } param - 参数生成函数，用于生成content_调用时的参数。该函数会在UI线程调用，开发者可将并行创建需要用到的数据在此处进行拷贝。避免数据多线程读写
 *     引发的安全性问题。<br/>说明：<br/>- item是当前数据项，index是数据项索引值。
 * @param { CustomBuilderT<T> } content_ - 定义要创建的UI内容。param参数为param函数调用后返回的对象。
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @stagemodelonly
 * @since 23 staticonly
 */
@Builder
export declare function ParallelizeUI<V, T>(
  options: ParallelOption | undefined,
  arr: Array<V>,
  param: (item: V, index: int) => T,
  content_: CustomBuilderT<T>
): void;