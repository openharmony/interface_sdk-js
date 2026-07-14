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
 * 定义存储的基类
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class Storage {
  /**
   * 构造函数参数。
   *
   * @param { boolean } needCrossThread
   * @param { string } file
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(needCrossThread?: boolean, file?: string);

  /**
   *
   * 获取数据时调用。
   *
   * @param { string } key
   * @returns { string | undefined }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(key: string): string | undefined;

  /**
   * 设置时调用。
   *
   * @param { string } key
   * @param { any } val
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(key: string, val: any): void;

  /**
   * 当数据被清除时调用此方法。
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  clear(): void;

  /**
   * 当数据被删除时调用。
   *
   * @param { string } key
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  delete(key: string): void;
}