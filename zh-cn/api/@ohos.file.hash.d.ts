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
 * @file @ohos.file.hash (文件哈希处理)
 * @kit CoreFileKit
 */

import type { AsyncCallback } from './@ohos.base';
import stream from './@ohos.util.stream';

/**
 * 该模块提供文件哈希处理能力，对文件内容进行哈希处理，适用于数据完整性校验、版本比对与内容去重等场景，可确保计算结果的不可变性与一致性，并支持流式处理大文件。
 *
 * > **使用说明：**
 *
 * 使用该功能模块对文件/目录进行操作前，需要先获取其应用沙箱路径，获取沙箱路径的方式及其接口用法可参考：
 * [应用上下文Context-获取应用文件路径](docroot://application-models/application-context-stage.md#获取应用文件路径)。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @atomicservice [since 11]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace hash {
  /**
   * 计算文件的哈希值，基于指定算法对文件完整内容进行哈希摘要计算。使用Promise异步回调。
   *
   * > **说明：**
   * >
   * > 该接口会读取整个文件内容并计算哈希值，适用于中小文件。对于大文件处理，建议使用HashStream流式计算。
   *
   * @param { string } path - 待计算哈希值文件的应用沙箱路径。文件必须存在且可读。
   * @param { string } algorithm - 哈希计算采用的算法。可选 "md5"、"sha1" 或 "sha256"。建议采用安全强度更高的 "sha256"。
   * @returns { Promise<string> } Promise对象，返回文件的哈希值。表示为十六进制数字串，所有字母均大写。
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
   * 计算文件的哈希值，基于指定算法对文件完整内容进行哈希摘要计算。使用callback异步回调。
   *
   * > **说明：**
   * >
   * > 该接口会读取整个文件内容并计算哈希值，适用于中小文件。对于大文件处理，建议使用HashStream流式计算。
   *
   * @param { string } path - 待计算哈希值文件的应用沙箱路径。文件必须存在且可读。
   * @param { string } algorithm - 哈希计算采用的算法。可选 "md5"、"sha1" 或 "sha256"。建议采用安全强度更高的 "sha256"。
   * @param { AsyncCallback<string> } callback - 回调函数，返回哈希值（哈希值表示为十六进制数字串，所有字母均大写）。
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
   * HashStream类是用于创建数据的哈希摘要的实用工具。由 [createHash]{@link hash.createHash} 接口获得。该类采用增量式哈希计算设计，通过update方法多次添加数据块，
   * 最后通过digest方法计算最终哈希值，适用于处理大文件或持续产生的数据流。
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  class HashStream extends stream.Transform {
    /**
     * 计算传递给哈希处理的所有数据的摘要，返回最终的哈希值。
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
     * 使用给定的数据更新哈希内容，可多次调用。每次调用的数据将被追加到已计算的哈希内容中，最终通过digest方法获取完整的哈希摘要。
     *
     * @param { ArrayBuffer } data - 待计算哈希值的数据，以ArrayBuffer形式传入。
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
   * 创建并返回HashStream对象，用于生成哈希摘要。可以指定哈希计算采用的算法。HashStream采用流式处理机制，支持分批次更新数据，适用于大文件或数据流的哈希计算，避免一次性加载大文件到内存。
   *
   * > **说明：**
   * >
   * > HashStream采用流式处理机制，支持分批次更新数据，适用于大文件或数据流的哈希计算，避免一次性加载大文件到内存。
   *
   * @param { string } algorithm - 哈希计算采用的算法。可选 "md5"、"sha1" 或 "sha256"。建议采用安全强度更高的 "sha256"。
   * @returns { HashStream } HashStream类的实例，用于生成哈希摘要。
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