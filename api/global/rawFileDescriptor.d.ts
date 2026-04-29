/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @kit LocalizationKit
 */

/**
 * Provides the descriptor of the HAP where the rawfile is located.
 *
 * @syscap SystemCapability.Global.ResourceManager
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 8 dynamic
 * @since 23 static
 */
export interface RawFileDescriptor {
  /**
   * Pointer to the file descriptor.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  fd: int;

  /**
   * Start offset.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  offset: long;

  /**
   * File length.
   *
   * @syscap SystemCapability.Global.ResourceManager
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 8 dynamic
   * @since 23 static
   */
  length: long;
}