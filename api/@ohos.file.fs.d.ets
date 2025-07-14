/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @arkts 1.2
 */

import { AsyncCallback } from './@ohos.base';

/**
 * FileIO
 *
 * @namespace fileIo
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare namespace fileIo {

   /**
   * Mode Indicates the open flags.
   *
   * @namespace OpenMode
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  namespace OpenMode {
  /**
   * Read only Permission.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
    const READ_ONLY = 0o0;
  /**
   * Write only Permission.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
    const WRITE_ONLY = 0o1;
  /**
   * Write and Read Permission.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
    const READ_WRITE = 0o2;
  /**
   * If not exist, create file.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
    const CREATE = 0o100;
  /**
   * File truncate len 0.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
    const TRUNC = 0o1000;
  /**
   * File append write.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
    const APPEND = 0o2000;
  /**
   * File open in nonblocking mode.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
    const NONBLOCK = 0o4000;
  /**
   * File is Dir.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
    const DIR = 0o200000;
  /**
   * File is not symbolic link.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
    const NOFOLLOW = 0o400000;
  /**
   * SYNC IO.
   *
   * @constant
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
    const SYNC = 0o4010000;
  }

/**
 * Access file.
 *
 * @param { string } path - path.
 * @param { AccessModeType } [mode = fs.AccessModeType.EXIST] - accessibility mode.
 * @returns { Promise<boolean> } Returns the file is accessible or not in promise mode.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function access(path: string, mode?: AccessModeType): Promise<boolean>;

/**
 * Access file.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<boolean> } callback - The callback is used to return the file is accessible or not.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function access(path: string, callback: AsyncCallback<boolean>): void;

/**
 * Access file.
 *
 * @param { string } path - file path that needs to be checked whether the calling process can access.
 * @param { AccessModeType } mode - accessibility mode.
 * @param { AccessFlagType } flag - accessibility flag.
 * @returns { Promise<boolean> } Returns the file is accessible or not in promise mode.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20
 */
function access(path: string, mode: AccessModeType, flag: AccessFlagType): Promise<boolean>;

/**
 *  
 * Access file with sync interface.
 *
 * @param { string } path - path.
 * @param { AccessModeType } [mode = fs.AccessModeType.EXIST] - accessibility mode.
 * @returns { boolean } Returns the file is accessible or not.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function accessSync(path: string, mode?: AccessModeType): boolean;

/**
 * Access file with sync interface.
 *
 * @param { string } path - file path that needs to be checked whether the calling process can access.
 * @param { AccessModeType } mode - accessibility mode.
 * @param { AccessFlagType } flag - accessibility flag.
 * @returns { boolean } Returns the file is accessible or not.
 * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
 * <br>2.Incorrect parameter types.
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20
 */
function accessSync(path: string, mode: AccessModeType, flag: AccessFlagType): boolean;

/**
 * Close file or fd.
 *
 * @param { number | File } file - file object or fd.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function close(file: number | File): Promise<void>;

/**
 * Close file or fd.
 *
 * @param { number | File } file - file object or fd.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function close(file: number | File, callback: AsyncCallback<void>): void;

/**
 * Close file or fd with sync interface.
 *
 * @param { number | File } file - file object or fd.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function closeSync(file: number | File): void;

/**
 * Copy file.
 *
 * @param { string | number } src - src.
 * @param { string | number } dest - dest.
 * @param { number } [mode = 0] - mode.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>;

/**
 * Copy file.
 *
 * @param { string | number } src - src.
 * @param { string | number } dest - dest.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void;

/**
 * Copy file.
 *
 * @param { string | number } src - src.
 * @param { string | number } dest - dest.
 * @param { number } [mode = 0] - mode.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function copyFile(
  src: string | number,
  dest: string | number,
  mode: number,
  callback: AsyncCallback<void>
): void;

/**
 * Copy file with sync interface.
 *
 * @param { string | number } src - src.
 * @param { string | number } dest - dest.
 * @param { number } [mode = 0] - mode.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900031 - Function not implemented
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function copyFileSync(src: string | number, dest: string | number, mode?: number): void;

/**
 * List file.
 *
 * @param { string } path - path.
 * @param { ListFileOptions } [options] - options.
 * @returns { Promise<string[]> } Returns an Array containing the name of files or directories that meet the filter criteria.
 *      If present, Include the subdirectory structure.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function listFile(
  path: string,
  options?: ListFileOptions
): Promise<string[]>;

/**
 * List file.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<string[]> } callback - The callback is used to return an Array containing the name of files or directories 
 *      that meet the filter criteria in promise mode. If present, Include the subdirectory structure.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function listFile(path: string, callback: AsyncCallback<string[]>): void;

/**
 * List file.
 *
 * @param { string } path - path.
 * @param { ListFileOptions } [options] - options.
 * @param { AsyncCallback<string[]> } callback - The callback is used to return an Array containing the name of files or directories 
 *      that meet the filter criteria in promise mode. If present, Include the subdirectory structure.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function listFile(
  path: string,
  options: ListFileOptions,
  callback: AsyncCallback<string[]>
): void;

/**
 * List file with sync interface.
 *
 * @param { string } path - path.
 * @param { ListFileOptions } [options] - options.
 * @returns { string[] } Returns an Array containing the name of files or directories that meet the filter criteria.
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function listFileSync(
  path: string,
  options?: ListFileOptions
): string[];

/**
 * Make dir.
 *
 * @param { string } path - path.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function mkdir(path: string): Promise<void>;

/**
 * Make dir.
 *
 * @param { string } path - path.
 * @param { boolean } recursion - whether to recursively make directory.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function mkdir(path: string, recursion: boolean): Promise<void>;

/**
 * Make dir.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function mkdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Make dir.
 *
 * @param { string } path - path.
 * @param { boolean } recursion - whether to recursively make directory.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function mkdir(path: string, recursion: boolean, callback: AsyncCallback<void>): void;

/**
 * Make dir with sync interface.
 *
 * @param { string } path - path.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function mkdirSync(path: string): void;

/**
 * Make dir with sync interface.
 *
 * @param { string } path - path.
 * @param { boolean } recursion - whether to recursively make directory.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function mkdirSync(path: string, recursion: boolean): void;


/**
 * Move file.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { number } [mode = 0] - move mode when duplicate file name exists.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @since 20
 */
function moveFile(src: string, dest: string, mode?: number): Promise<void>;

/**
 * Move file.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @since 20
 */
function moveFile(src: string, dest: string, callback: AsyncCallback<void>): void;

/**
 * Move file.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { number } [mode = 0] - move mode when duplicate file name exists.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @since 20
 */
function moveFile(src: string, dest: string, mode: number, callback: AsyncCallback<void>): void;

/**
 * Move file with sync interface.
 *
 * @param { string } src - source file path.
 * @param { string } dest - destination file path.
 * @param { number } [mode = 0] - move mode when duplicate file name exists.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900016 - Cross-device link
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900028 - Too many links
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @since 20
 */
function moveFileSync(src: string, dest: string, mode?: number): void;

/**
 * Open file.
 *
 * @param { string } path - path.
 * @param { number } [mode = OpenMode.READ_ONLY] - mode.
 * @returns { Promise<File> } Returns the File object in Promise mode to record the file descriptor.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function open(path: string, mode?: number): Promise<File>;

/**
 * Open file.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<File> } callback - The callback is used to return the File object to record the file descriptor.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function open(path: string, callback: AsyncCallback<File>): void;

/**
 * Open file.
 *
 * @param { string } path - path.
 * @param { number } [mode = OpenMode.READ_ONLY] - mode.
 * @param { AsyncCallback<File> } callback - The callback is used to return the File object to record the file descriptor.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function open(path: string, mode: number, callback: AsyncCallback<File>): void;

/**
 * Open file with sync interface.
 *
 * @param { string } path - path.
 * @param { number } [mode = OpenMode.READ_ONLY] - mode.
 * @returns { File } Returns the File object to record the file descriptor.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900006 - No such device or address
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900015 - File exists
 * @throws { BusinessError } 13900017 - No such device
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900022 - Too many open files
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900029 - Resource deadlock would occur
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900038 - Value too large for defined data type
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function openSync(path: string, mode?: number): File;

/**
 * Read file.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { ReadOptions } [options] - options.
 * @returns { Promise<number> } Returns the number of file bytes read to buffer in promise mode.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function read(
  fd: number,
  buffer: ArrayBuffer,
  options?: ReadOptions
): Promise<number>;

/**
 * Read file.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { AsyncCallback<number> } callback - The callback is used to return the number of file bytes read to buffer.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<number>): void;

/**
 * Read file.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { ReadOptions } [options] - options.
 * @param { AsyncCallback<number> } callback - The callback is used to return the number of file bytes read to buffer.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function read(
  fd: number,
  buffer: ArrayBuffer,
  options: ReadOptions,
  callback: AsyncCallback<number>
): void;

/**
 * Read file with sync interface.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer } buffer - buffer.
 * @param { ReadOptions } [options] - options.
 * @returns { number } Returns the number of file bytes read to buffer.
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function readSync(
  fd: number,
  buffer: ArrayBuffer,
  options?: ReadOptions
): number;

/**
 * Read text.
 *
 * @param { string } filePath - file path.
 * @param { ReadTextOptions } [options] - options.
 * @returns { Promise<string> } Returns the contents of the read file in promise mode.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function readText(
  filePath: string,
  options?: ReadTextOptions
): Promise<string>;

/**
 * Read text.
 *
 * @param { string } filePath - file path.
 * @param { AsyncCallback<string> } callback - The callback is used to return the contents of the read file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function readText(filePath: string, callback: AsyncCallback<string>): void;

/**
 * Read text.
 *
 * @param { string } filePath - file path.
 * @param { ReadTextOptions } [options] - options.
 * @param { AsyncCallback<string> } callback - The callback is used to return the contents of the read file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function readText(
  filePath: string,
  options: ReadTextOptions,
  callback: AsyncCallback<string>
): void;

/**
 * Read text with sync interface.
 *
 * @param { string } filePath - file path.
 * @param { ReadTextOptions } [options] - options.
 * @returns { string } Returns the contents of the read file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @throws { BusinessError } 13900044 - Network is unreachable
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function readTextSync(
  filePath: string,
  options?: ReadTextOptions
): string;

/**
 * Delete dir.
 *
 * @param { string } path - path.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system1
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function rmdir(path: string): Promise<void>;

/**
 * Delete dir.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system1
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function rmdir(path: string, callback: AsyncCallback<void>): void;

/**
 * Delete dir with sync interface.
 *
 * @param { string } path - path.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system1
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900032 - Directory not empty
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function rmdirSync(path: string): void;

/**
 * Get file information.
 *
 * @param { string | number } file - path or file descriptor.
 * @returns { Promise<Stat> } Returns the Stat object in promise mode.
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
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function stat(file: string | number): Promise<Stat>;

/**
 * Get file information.
 *
 * @param { string | number } file - path or file descriptor.
 * @param { AsyncCallback<Stat> } callback - The callback is used to return the Stat object.
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
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function stat(file: string | number, callback: AsyncCallback<Stat>): void;

/**
 * Get file information with sync interface.
 *
 * @param { string | number } file - path or file descriptor.
 * @returns { Stat } Returns the Stat object.
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
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function statSync(file: string | number): Stat;

/**
 * Truncate file.
 *
 * @param { string | number } file - path or file descriptor.
 * @param { number } [len = 0] - len.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function truncate(file: string | number, len?: number): Promise<void>;

/**
 * Truncate file.
 *
 * @param { string | number } file - path or file descriptor.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function truncate(file: string | number, callback: AsyncCallback<void>): void;

/**
 * Truncate file.
 *
 * @param { string | number } file - path or file descriptor.
 * @param { number } [len = 0] - len.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function truncate(file: string | number, len: number, callback: AsyncCallback<void>): void;

/**
 * Truncate file with sync interface.
 *
 * @param { string | number } file - path or file descriptor.
 * @param { number } [len = 0] - len.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900023 - Text file busy
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function truncateSync(file: string | number, len?: number): void;

/**
 * Delete file.
 *
 * @param { string } path - path.
 * @returns { Promise<void> } The promise returned by the function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function unlink(path: string): Promise<void>;

/**
 * Delete file.
 *
 * @param { string } path - path.
 * @param { AsyncCallback<void> } callback - Return the callback function.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function unlink(path: string, callback: AsyncCallback<void>): void;

/**
 * Delete file with sync interface.
 *
 * @param { string } path - path.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900002 - No such file or directory
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900011 - Out of memory
 * @throws { BusinessError } 13900012 - Permission denied
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900014 - Device or resource busy
 * @throws { BusinessError } 13900018 - Not a directory
 * @throws { BusinessError } 13900019 - Is a directory
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900027 - Read-only file system
 * @throws { BusinessError } 13900030 - File name too long
 * @throws { BusinessError } 13900033 - Too many symbolic links encountered
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function unlinkSync(path: string): void;

/**
 * Write file.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { WriteOptions } [options] - options.
 * @returns { Promise<number> } Returns the number of bytes written to the file in promise mode.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): Promise<number>;

/**
 * Write file.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { AsyncCallback<number> } callback - The callback is used to return the number of bytes written to the file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function write(fd: number, buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void;

/**
 * Write file.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { WriteOptions } [options] - options.
 * @param { AsyncCallback<number> } callback - The callback is used to return the number of bytes written to the file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function write(
  fd: number,
  buffer: ArrayBuffer | string,
  options: WriteOptions,
  callback: AsyncCallback<number>
): void;

/**
 * Write file with sync interface.
 *
 * @param { number } fd - file descriptor.
 * @param { ArrayBuffer | string } buffer - buffer.
 * @param { WriteOptions } [options] - options.
 * @returns { number } Returns the number of bytes written to the file.
 * @throws { BusinessError } 13900001 - Operation not permitted
 * @throws { BusinessError } 13900004 - Interrupted system call
 * @throws { BusinessError } 13900005 - I/O error
 * @throws { BusinessError } 13900008 - Bad file descriptor
 * @throws { BusinessError } 13900010 - Try again
 * @throws { BusinessError } 13900013 - Bad address
 * @throws { BusinessError } 13900020 - Invalid argument
 * @throws { BusinessError } 13900024 - File too large
 * @throws { BusinessError } 13900025 - No space left on device
 * @throws { BusinessError } 13900034 - Operation would block
 * @throws { BusinessError } 13900041 - Quota exceeded
 * @throws { BusinessError } 13900042 - Unknown error
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
function writeSync(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: WriteOptions
): number;

/**
 * File object.
 *
 * @interface File
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
interface File {

  /**
   * @type { number }
   * @readonly
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  readonly fd: number;

  /**
   * File path
   * 
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  readonly path: string;

  /**
   * File name
   * 
   * @type { string }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  readonly name: string;

  /**
   * Get parent path of file.
   *
   * @returns { string } Return the parent path of file.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 14300002 - Invalid URI
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  getParent(): string;

  /**
   * Lock file with blocking method.
   *
   * @param { boolean } exclusive - whether lock is exclusive.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  lock(exclusive?: boolean): Promise<void>;

  /**
   * Lock file with blocking method.
   *
   * @param { AsyncCallback<void> } callback - Return the callback function.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  lock(callback: AsyncCallback<void>): void;

  /**
   * Lock file with blocking method.
   *
   * @param { boolean } exclusive - whether lock is exclusive.
   * @param { AsyncCallback<void> } callback - Return the callback function.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  lock(exclusive: boolean, callback: AsyncCallback<void>): void;

  /**
   * Try to lock file with returning results immediately.
   *
   * @param { boolean } exclusive - whether lock is exclusive.
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  tryLock(exclusive?: boolean): void;

  /**
   * Unlock file.
   *
   * @throws { BusinessError } 13900004 - Interrupted system call
   * @throws { BusinessError } 13900008 - Bad file descriptor
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900034 - Operation would block
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900043 - No record locks available
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  unlock(): void;
}

/**
 * Stat object.
 *
 * @interface Stat
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
interface Stat {

  /**
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  readonly ino: bigint;

  /**
   * @type { number }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  readonly mode: number;

  /**
   * @type { number }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  readonly uid: number;

  /**
   * @type { number }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  readonly gid: number;

  /**
   * @type { number }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  readonly size: number;

  /**
   * @type { number }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  readonly atime: number;

  /**
   * @type { number }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  readonly mtime: number;

  /**
   * @type { number }
   * @readonly
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  readonly ctime: number;

  /**
   * Returns nanosecond of the access time.
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  readonly atimeNs?:bigint;

  /**
   * Returns nanosecond of the modification time.
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  readonly mtimeNs?:bigint;

  /**
   * Returns nanosecond of the change time.
   * @type { bigint }
   * @readonly
   * @throws { BusinessError } 13900042 - Internal error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  readonly ctimeNs?:bigint;

  /**
   *
   * @type { LocationType }
   * @readonly
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  readonly location: LocationType;

  /**
   * Whether path/fd is block device.
   *
   * @returns { boolean } Returns whether the path/fd point to a block device or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  isBlockDevice(): boolean;

  /**
   * Whether path/fd is character device.
   *
   * @returns { boolean } Returns whether the path/fd point to a character device or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  isCharacterDevice(): boolean;

  /**
   * Whether path/fd is directory.
   *
   * @returns { boolean } Returns whether the path/fd point to a directory or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isDirectory(): boolean;

  /**
   * Whether path/fd is fifo.
   *
   * @returns { boolean } Returns whether the path/fd point to a fifo file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  isFIFO(): boolean;

  /**
   * Whether path/fd is file.
   *
   * @returns { boolean } Returns whether the path/fd point to a normal file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  isFile(): boolean;

  /**
   * Whether path/fd is socket.
   *
   * @returns { boolean } Returns whether the path/fd point to a socket file or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  isSocket(): boolean;

  /**
   * Whether path/fd is symbolic link.
   *
   * @returns { boolean } Returns whether the path/fd point to a symbolic link or not.
   * @throws { BusinessError } 13900005 - I/O error
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  isSymbolicLink(): boolean;
}


/**
 * Enumeration of different types of file location.
 *
 * @enum { number } location type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20
 */
enum LocationType {
  /**
   * Local file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  LOCAL = 1 << 0,

  /**
   * Cloud file.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  CLOUD = 1 << 1,
}

/**
 * Enumeration of different types of access mode.
 *
 * @enum { number } access mode type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
enum AccessModeType {
  /**
   * Check if the file exists.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  EXIST = 0,

  /**
   * Check if the file has write permission.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  WRITE = 2,

  /**
   * Check if the file has read permission.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  READ = 4,

  /**
   * Check if the file has read and write permission.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  READ_WRITE = 6,
}

/**
 * Enumeration of different types of access flag.
 *
 * @enum { number } access flag type
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @since 20
 */
enum AccessFlagType {
  /**
   * Check if the file is on the local.
   *
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @since 20
   */
  LOCAL = 0,
}

}

/**
 * File filter type
 *
 * @interface Filter
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface Filter {

  /**
   * The suffix of the file.
   * 
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  suffix?: Array<string>;

  /**
   * The display name of the file.
   * 
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  displayName?: Array<string>;

  /**
   * The mimetype of the file.
   * 
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  mimeType?: Array<string>;

  /**
   * The exceeding size of the file.
   * 
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  fileSizeOver?: number;

  /**
   * The last modification time of the file.
   * 
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  lastModifiedAfter?: number;

  /**
   * Whether to exclude media files.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  excludeMedia?: boolean;
}

/**
 * Options type
 *
 * @interface Options
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @since 20
 */
export interface Options {
  /**
   * The encoding style.
   * 
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @since 20
   */
  encoding?: string;
}

/**
 * ReadOptions type
 *
 * @interface ReadOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ReadOptions {
  /**
   * The offset when reading the file.
   * 
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  offset?: number;
  /**
   * The length for reading.
   * 
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  length?: number;
}

/**
 * ReadTextOptions type
 *
 * @extends ReadOptions
 * @interface ReadTextOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface ReadTextOptions extends ReadOptions {
  /**
   * The encoding style when reading text.
   * 
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  encoding?: string;
}

/**
 * WriteOptions type
 *
 * @extends Options
 * @interface WriteOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export interface WriteOptions extends Options {
  /**
   * The offset when writing the file.
   * 
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  offset?: number;
  /**
   * The length for writing.
   * 
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  length?: number;
}

/**
 * ListFileOptions type
 *
 * @interface ListFileOptions
 * @syscap SystemCapability.FileManagement.File.FileIO
 * @atomicservice
 * @since 20
 */
export interface ListFileOptions {
  /**
   * Whether to recursively list files.
   * 
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 20
   */
  recursion?: boolean;

  /**
   * The number of files listed.
   * 
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 20
   */
  listNum?: number;

  /**
   * The filter of listing files.
   * 
   * @type { ?Filter }
   * @syscap SystemCapability.FileManagement.File.FileIO
   * @atomicservice
   * @since 20
   */
  filter?: Filter;
}

export default fileIo;
