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
 * 系统当前深浅色模式。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ColorMode {
  /**
   * 浅色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LIGHT = 0,

  /**
   * 深色模式。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  DARK,
}

/**
 * 系统的布局方向类型。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum LayoutDirection {
  /**
   * 从左向右布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LTR,

  /**
   * 从右向左布局。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RTL,

  /**
   * 自动布局，跟随系统。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 8 dynamic
   */
  Auto,
}

/**
 * 持久化存储后端接口，提供基于键值对（key-value）的数据持久化能力，包括数据的读取、写入、清除和删除。PersistentStorage通过该接口实现AppStorage数据的本地持久化，适用于需要对应用数据进行灵活本地持久化存
 * 储的场景。
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class Storage {
  /**
   * 创建Storage实例的构造函数。
   *
   * @param { boolean } needCrossThread - 是否需要跨线程访问存储。预留接口，暂不提供具体功能。
   * @param { string } file - 指定存储文件名。预留接口，暂不提供具体功能。默认使用应用文件目录下的persistent_storage作为存储文件。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(needCrossThread?: boolean, file?: string);

  /**
   * 根据指定key从磁盘中读取对应的存储数据。
   *
   * @param { string } key - 要获取的存储key名称。
   * @returns { string | undefined } key对应的值；key不存在时返回undefined。
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(key: string): string | undefined;

  /**
   * 将指定key对应的数据持久化存储到磁盘。
   *
   * @param { string } key - 要设置的存储key名称。
   * @param { any } val - 要存储的数据，支持string、number、boolean等基本类型以及可序列化的对象和数组，数据将被序列化后持久化到存储文件中。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(key: string, val: any): void;

  /**
   * 清除所有存储数据。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  clear(): void;

  /**
   * 删除指定key对应的存储数据。
   *
   * @param { string } key - 要删除的存储key名称。
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  delete(key: string): void;
}