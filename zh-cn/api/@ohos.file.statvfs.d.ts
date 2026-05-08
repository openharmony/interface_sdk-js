/*
 * Copyright (C) 2022-2025 Huawei Device Co., Ltd.
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

/**
 * 该模块提供文件系统相关存储信息的功能：向应用程序提供获取文件系统总字节数、空闲字节数的JS接口。
 *
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace statfs {
  /**
   * 异步方法获取指定文件系统空闲字节数，以Promise形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径。
   * @returns { Promise<long> } Promise对象，返回空闲字节数。
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  function getFreeSize(path: string): Promise<long>;

  /**
   * 异步方法获取指定文件系统空闲字节数，使用callback形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径。
   * @param { AsyncCallback<long> } [callback] - 异步获取空闲字节数之后的回调。
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  function getFreeSize(path: string, callback: AsyncCallback<long>): void;

  /**
   * 以同步方法获取指定文件系统空闲字节数。
   *
   * @param { string } path - 需要查询的文件系统的文件路径。
   * @returns { long } 返回空闲字节数。
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFreeSizeSync(path: string): long;

  /**
   * 异步方法获取指定文件系统总字节数，以Promise形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径。
   * @returns { Promise<long> } Promise对象，返回总字节数。
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTotalSize(path: string): Promise<long>;

  /**
   * 异步方法获取指定文件系统总字节数，使用callback形式返回结果。
   *
   * @param { string } path - 需要查询的文件系统的文件路径。
   * @param { AsyncCallback<long> } [callback] - 异步获取总字节数之后的回调。
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  function getTotalSize(path: string, callback: AsyncCallback<long>): void;

  /**
   * 以同步方法获取指定文件系统总字节数。
   *
   * @param { string } path - 需要查询的文件系统的文件路径。
   * @returns { long } 返回总字节数。
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900011 - Out of memory
   * @throws { BusinessError } 13900012 - Permission denied
   * @throws { BusinessError } 13900013 - Bad address
   * @throws { BusinessError } 13900018 - Not a directory
   * @throws { BusinessError } 13900030 - File name too long
   * @throws { BusinessError } 13900031 - Function not implemented
   * @throws { BusinessError } 13900033 - Too many symbolic links encountered
   * @throws { BusinessError } 13900038 - Value too large for defined data type
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  function getTotalSizeSync(path: string): long;
}

export default statfs;