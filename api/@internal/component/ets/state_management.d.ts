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
 * Enumerates system color modes.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum ColorMode {
  /**
   * Light mode.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LIGHT = 0,

  /**
   * Dark mode.
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
 * Enumerates system layout directions.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @FaAndStageModel
 * @crossplatform [since 11]
 * @atomicservice [since 11]
 * @since 7 dynamic
 */
declare enum LayoutDirection {
  /**
   * Left-to-right layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  LTR,

  /**
   * Right-to-left layout.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @FaAndStageModel
   * @crossplatform [since 11]
   * @atomicservice [since 11]
   * @since 7 dynamic
   */
  RTL,

  /**
   * Automatic layout direction based on the system.
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
 * Defines the base class of storage.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class Storage {
  /**
   * Constructor parameters.
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
   * Called when data is obtained.
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
   * Called when setting.
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
   * Called when data is cleared.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  clear(): void;

  /**
   * Called when data is deleted.
   *
   * @param { string } key
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  delete(key: string): void;
}
