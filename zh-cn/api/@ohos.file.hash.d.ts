/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * @kit CoreFileKit
 */

import type { AsyncCallback } from './@ohos.base';
import stream from './@ohos.util.stream';

/**
 * 该模块提供文件哈希处理能力，对文件内容进行哈希处理。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace hash {
  /**
   * 计算文件的哈希值，使用Promise异步回调。
   *
   * @param { string } path - 待计算哈希值文件的应用沙箱路径。
   * @param { string } algorithm - 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。
   * @returns { Promise<string> } Promise对象。返回文件的哈希值。表示为十六进制数字串，所有字母均大写。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function hash(path: string, algorithm: string): Promise<string>;

  /**
   * 计算文件的哈希值，使用callback异步回调。
   *
   * @param { string } path - 待计算哈希值文件的应用沙箱路径。
   * @param { string } algorithm - 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。
   * @param { AsyncCallback<string> } [callback] - 异步计算文件哈希操作之后的回调函数（其中给定文件哈希值表示为十六进制数字串，所有字母均大写）。
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void;

  /**
   * HashStream 类是用于创建数据的哈希摘要的实用工具。由 [createHash]{@link hash.createHash} 接口获得。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class HashStream extends stream.Transform {
    /**
     * 计算传递给哈希处理的所有数据的摘要。
     *
     * @returns { string } 返回数据的哈希值。该哈希值表示为十六进制数字串，所有字母均大写。
     * @throws { BusinessError } 401 - Parameter error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    digest(): string;

    /**
     * 使用给定的 data 更新哈希内容，可多次调用。
     *
     * @param { ArrayBuffer } data - updated data.
     * @throws { BusinessError } 401 - Parameter error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.File.FileIO
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    update(data: ArrayBuffer): void;
  }

  /**
   * 创建并返回 HashStream 对象，该对象可用于使用给定的 algorithm 生成哈希摘要。
   *
   * @param { string } algorithm - 哈希计算采用的算法。可选 "md5"、"sha1" 或 "sha256"。建议采用安全强度更高的 "sha256"。
   * @returns { HashStream } HashStream 类的实例。
   * @throws { BusinessError } 401 - Parameter error
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  function createHash(algorithm: string): HashStream;
}

export default hash;