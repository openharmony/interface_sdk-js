/*
 * Copyright (C) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit API10LessDeprecatedModules
 */

import { AsyncCallback } from './@ohos.base';

/**
 * 该模块提供文件系统相关存储信息的功能，向应用程序提供获取文件系统总字节数、空闲字节数的JS接口。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 8
 * @deprecated since 9
 * @useinstead @ohos.file.statvfs:statfs
 */
declare namespace Statfs {
  /**
   * 异步方法获取指定文件系统空闲字节数，使用callback形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径
   * @param { AsyncCallback<number> } callback - 异步获取空闲字节数之后的回调
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.file.statvfs:statfs.getFreeBytes
   */
  function getFreeBytes(path: string, callback: AsyncCallback<number>): void;

  /**
   * 异步方法获取指定文件系统空闲字节数，以Promise形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径
   * @returns { Promise<number> } 返回空闲字节数
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.file.statvfs:statfs.getFreeBytes
   */
  function getFreeBytes(path: string): Promise<number>;
  /**
   * 异步方法获取指定文件系统总字节数，使用callback形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径
   * @param { AsyncCallback<number> } callback - 异步获取总字节数之后的回调
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.file.statvfs:statfs.getTotalBytes
   */
  function getTotalBytes(path: string, callback: AsyncCallback<number>): void;

  /**
   * 异步方法获取指定文件系统总字节数，以Promise形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径
   * @returns { Promise<number> } 返回总字节数
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 8
   * @deprecated since 9
   * @useinstead @ohos.file.statvfs:statfs.getTotalBytes
   */
  function getTotalBytes(path: string): Promise<number>;
}

export default Statfs;