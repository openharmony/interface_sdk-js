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
 * A background API for persistent storage, which provides data persistence capabilities based on key-value pairs,
 * including data reading, writing, clearing, and deletion. PersistentStorage uses this API to implement local
 * persistence of AppStorage data, making it suitable for scenarios where flexible local persistent storage of
 * application data is required.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @systemapi
 * @FaAndStageModel
 * @since 7 dynamic
 */
declare class Storage {
  /**
   * A constructor for creating a **Storage** instance.
   *
   * @param { boolean } needCrossThread - Whether to access the storage across threads. This is a reserved API
   *     and does not provide specific functions. Default value: **false**.
   * @param { string } file - Name of the storage file. This is a reserved API and does not provide specific
   *     functions. By default, **persistent_storage** in the application file directory is used as the storage file.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  constructor(needCrossThread?: boolean, file?: string);

  /**
   * Reads the stored data corresponding to the specified key from the disk.
   *
   * @param { string } key - Key of the storage to obtain.
   * @returns { string | undefined } Value corresponding to the key; **undefined** is returned if the key does not
   *     exist.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  get(key: string): string | undefined;

  /**
   * Stores the data corresponding to the specified key persistently to the disk.
   *
   * @param { string } key - Name of the storage key to set.
   * @param { any } val - Data to store. It supports basic types such as string, number, and boolean, as well as
   *     serializable objects and arrays. The data is serialized and then persisted to the storage file.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  set(key: string, val: any): void;

  /**
   * Clears all stored data.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  clear(): void;

  /**
   * Deletes the stored data corresponding to the specified key.
   *
   * @param { string } key - Key of the storage to delete.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @systemapi
   * @FaAndStageModel
   * @since 7 dynamic
   */
  delete(key: string): void;
}